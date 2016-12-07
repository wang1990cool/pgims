Ext.define('App.view.jxkkjh.PYFADialog',{
	extend:'Ext.form.Panel',
	itemId:'pyfaDialog',
	initComponent:function(){
		var me = this;
		Ext.apply(me,{
					autoWidth: true,
					bodyPadding: 0,
					margin:'0 0 0 0',
					height:40,
					items:[Ext.create('App.view.pyfa.PYFAList',{
			   		 		title:'',
			   		 		store:'PYFAAllStore',
			   		 		itemId:'pyfaList',
			   		 		height:485,
			   		 		frame:false,
			   		 		layout:'fit',
			   		 		dockedItems:[{
        	            		dock: 'top',
   							    xtype: 'toolbar',
   							    items:[{
   							    	text:'详情',
   							    	itemId:'detailBtn',
   							    	iconCls:'detail_16',
   							    	action:'detail'
   							    },'-',{
							     	itemId:'submit',
							     	text:'确定',
							     	iconCls:'ok_16',
							     	action:'ok'
							     },'-',{
   							    	text:'返回',
   							    	itemId:'return',
   							    	iconCls:'return_16',
   							      	handler: function () {
					                	var me = this;
					                    me.up('window').close();
					                }
   							    }]
   							}]
			   		 })]
		})
	 me.callParent(arguments);
	}
})