Ext.define('App.view.attachData.UploadPanel',{
	extend: 'Ext.panel.Panel',
	initComponent: function(){
		var	me = this;
		Ext.applyIf(me,{
			items: [{
				xtype: 'fieldset',
	            title:'',
	            padding:'0 0 0 0',	   
	            margin: '0 0 0 0',
	            border:'0 0 0 0',
				items: [
					Ext.create('App.view.attachData.UploadAttachList',{
						itemId:'uploadAttachList',
						height:395
					})
				]
			}]
		});
		me.callParent(arguments);
	}
});