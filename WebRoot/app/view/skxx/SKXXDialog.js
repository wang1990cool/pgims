Ext.define('App.view.skxx.SKXXDialog',{
	extend:'Ext.form.Panel',
	alias:'widget.skxxDialog',
	itemId:'skxxDialog',
	initComponent:function(){
		var me = this;
		Ext.apply(me,{
					autoWidth: true,
					bodyPadding: 4,
					layout: 'form',
					margin:'0 0 3 0',
					height:40,
					items:[
					Ext.create('Ext.form.Panel',{
 						itemId:'searchForm',
			   	 		autoWidth: true,
						bodyPadding: 5,
						layout: 'form',
						margin:'0 0 10 0',
						height:40,
			        	items:[{
				        	       xtype:'fieldcontainer',
							       layout:'hbox',
								   defaults:{
										labelAlign:'right'
									},
									items:[{
										xtype:'textfield',
										itemId:'kkkh',
										name:'kkkh',
										fieldLabel:'开课课号',
									  	width:230,
										labelWidth:80
									},{
										xtype:'textfield',
										itemId:'kcmc',
										name:'kcmc',
										fieldLabel:'课程名称',
									  	width:230,
										labelWidth:80
									},{
										xtype:'toolbar',
										style:'background:transparent;',
										border:'0 0 0 0',
										layout:{type:'hbox',align:'center',pack:'center'},
										items:[{
													itemId:'searchBtn',
													text:'查询',
													tooltip:'查询',
													action:'search',
													iconCls:'search',
													margin:'0 0 0 20'
											},{
												itemId:'searchAllBtn',
												text:'全部',
												tooltips:'全部',
												iconCls:'searchAll',
												action:'searchAll'
											}]
									}]}]
			   		 }),
			   		 	Ext.create('App.view.skxx.SKXXList',{
			   		 		title:'',
			   		 		itemId:'skxxList',
			   		 		dockedItems:[{
        	            		dock: 'top',
   							    xtype: 'toolbar',
   							    items:[{
   							    	text:'详情',
   							    	itemId:'detail',
   							    	iconCls:'detail_16',
   							    	action:'detail'
   							    },'-',{
   							    	text:'返回',
   							    	itemId:'return',
   							    	iconCls:'return_16',
   							      	handler: function () {
					                	var me = this;
					                    me.up('window').close();
					                }
   							    }]
   							},	   
   							Ext.create('Ext.PagingToolbar', {
						        pageSize: pSize,
						        dock: 'bottom',
						        store: 'SKXXStore',
						        displayInfo: true,
						        displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
						        emptyMsg: '没有数据',
						        plugins: Ext.create('Ext.ux.ProgressBarPager', {})
						    })]
			   		 })
			   ]
		})
	 me.callParent(arguments);
	}
})