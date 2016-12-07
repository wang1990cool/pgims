Ext.define('App.view.main.ThemeToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.themetoolbar',
    
    border:false,
    rtl: false,
    defaultTheme:'classic',
    defaultRtl:false,

    initComponent: function() {
        var me = this;
        
        Ext.themeName = theme = getQueryParam('theme') || me.defaultTheme;
        
        rtl = getQueryParam('rtl') || me.defaultRtl;

        if (rtl.toString() === 'true') {
            requires.push('Ext.rtl.*');
            Ext.define('Ext.GlobalRtlComponent', {
                override: 'Ext.AbstractComponent',
                rtl: true
            });
        }
        
        Ext.applyIf(me, {
        	items: [{
                xtype: 'combo',
                rtl: false,
                width: 170,
                labelWidth: 45,
                fieldLabel: '主&nbsp;&nbsp;题',
                displayField: 'name',
                valueField: 'value',
                labelStyle: 'cursor:move;',
                margin: '0 5 0 0',
                store: Ext.create('Ext.data.Store', {
                    fields: ['value', 'name'],
                    data : [
                        { value: 'classic', name: '经典' },
                        { value: 'gray', name: '灰色' },
                        { value: 'neptune', name: '深蓝' }
                    ]
                }),
                value: theme,
                listeners: {
                    select: function(combo) {
                        var theme = combo.getValue();
                        if (theme !== me.defaultTheme) {
                            me.setParam({ theme: theme });
                        } else {
                            me.removeParam('theme');
                        }
                    }
                }
            }, {
                xtype: 'button',
                rtl: false,
                hidden: !(Ext.repoDevMode || location.href.indexOf('qa.sencha.com') !== -1),
                enableToggle: true,
                pressed: rtl,
                text: 'RTL',
                margin: '0 5 0 0',
                listeners: {
                    toggle: function(btn, pressed) {
                        if (pressed) {
                            me.setParam({ rtl: true });
                        } else {
                            me.removeParam('rtl');
                        }
                    }
                }
            }]
        });

        me.callParent(arguments);
    },
    
    setParam: function (param) {
        var queryString = Ext.Object.toQueryString(
            Ext.apply(Ext.Object.fromQueryString(location.search), param)
        );
        location.search = queryString;
    },
    
    removeParam: function(paramName) {
        var params = Ext.Object.fromQueryString(location.search);
        delete params[paramName];
        location.search = Ext.Object.toQueryString(params);
    }
});
