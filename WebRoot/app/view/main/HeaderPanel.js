Ext.define('App.view.main.HeaderPanel', {  
    extend: 'Ext.panel.Panel',
    alias: 'widget.headerPanel',
    
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    border : false,
    header:false,
    hideCollapseTool:true,
    bodyCls: 'headerbg',
	items:[Ext.create('Ext.Img', {
			itemId:'logoImg',
			width: 1024,
			height: 65,
			cls: 'logoImg'
		}),{
            xtype: 'container',
            flex: 1,
            height: 60,
            layout: {
                align: 'stretch',
                pack: 'end',
                type: 'hbox'
            },
            items: [Ext.create('App.view.main.TopMenu',{
            	itemId:'topMenu',
            	height: 60,
        		width:250
            })]
	}]
});  
