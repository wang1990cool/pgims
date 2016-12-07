Ext.define('App.view.jxpk.PKByGridPanel',{
	extend: 'Ext.panel.Panel',
	alias: 'widget.pkByGridPanel',
	
	region: 'center',
	border: false,
	split: true,
	layout: 'anchor',
	
	initComponent: function(){
		var me = this;
		
		Ext.applyIf(me,{
				items:[
					Ext.create('App.view.jxpk.PKByGridForm',{
						baseCls:'my-panel-no-border',
						itemId: 'pkForm'
					})
					
			 ]
		});
		
		me.callParent(arguments);
		var pkGrid = 	Ext.create('App.view.jxpk.PKByGrid',{
						width:865,
						margin:'0 10 0 10',
						itemId: 'pkGrid'
					})
		me.add(pkGrid)
		
	}
});