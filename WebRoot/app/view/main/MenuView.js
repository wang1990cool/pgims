Ext.define('App.view.main.MenuView', {
    extend: 'Ext.view.View',
    alias: 'widget.menuView',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            overItemCls: 'module-bar-over',
            itemSelector: 'div.module-bar-wrap',
            emptyText: '',
            tpl: [
              '<tpl for=".">',
                  '<div class="module-bar-wrap" id="{id:stripTags}">',
                  		'<div class="module-bar"><img src="{src}" title="{text:htmlEncode}">',
                  			'<div class="module-text">{text:htmlEncode}</div>',
              			'</div>',
                  '</div>',
              '</tpl>',
              '<div class="x-clear"></div>'
            ],
            listeners: {
            }
        });

        me.callParent(arguments);
    }
});