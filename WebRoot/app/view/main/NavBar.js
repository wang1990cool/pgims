Ext.define('App.view.main.NavBar', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.navBar',
	
	labelText:'',
	border: false,
    height: 40,
    bodyBorder: true,
    bodyStyle: 'border-top: 0px; border-left:0px; border-right:0px',
    imgCls:'title_16',
    padding: '0 0 10 0',
    layout: {
        type: 'hbox',
        align: 'middle '
    },
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	items: [{
                xtype: 'image',
                cls: me.imgCls,
                height: 18,
                width: 18,
                margin: '5 10 5 10'
            },{
                xtype: 'label',
                text: me.labelText,
                margin: '3 0 5 0',
                style: 'font-size:16px;color:#0773b5;font-weight:bold'
            }]
        });
        me.callParent(arguments);
    }
});