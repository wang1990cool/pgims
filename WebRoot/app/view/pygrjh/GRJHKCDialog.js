Ext.define('App.view.pygrjh.GRJHKCDialog',{
	extend:'Ext.form.Panel',
	alias:'widget.grjhkcDialog',
	itemId:'grjhkcDialog',
	initComponent:function(){
		var me = this;
		Ext.apply(me,{
					autoWidth: true,
					bodyPadding: 4,
					margin:'0 0 0 0',
					height:40,
					items:[
//					Ext.create('Ext.form.Panel',{
//		 						itemId:'searchForm',
//					   	 		autoWidth: true,
//								bodyPadding: 4,
//								margin:'0 0 10 0',
//								height:40,
//					        	items:[{
//				        	       xtype:'fieldcontainer',
//							       layout:'hbox',
//								   defaults:{
//								 	  	padding:'3 0 0 0',
//										labelAlign:'right'
//									},
//									items:[{
//										xtype:'textfield',
//										itemId:'pyfah',
//										name:'pyfah',
//										fieldLabel:'培养方案号',
//									  	width:240,
//									  	readOnly:true,
//										labelWidth:100,
//										allowBlank:false,
//										BlankText:'必填'
//									},{
//										xtype:'toolbar',
//										style:'background:transparent;',
//										border:'0 0 0 0',
//										layout:{type:'hbox',align:'center',pack:'center'},
//										items:[{
//													itemId:'searchPyfahBtn',
//		//											text:'查询',
//													tooltip:'查询',
//													action:'searchPyfah',
//													iconCls:'search',
//													margin:'0 0 0 1'
//								}]}]}]
//			   		 }),
			   		 	Ext.create('App.view.pyfa.FAKCList',{
			   		 		title:'',
			   		 		itemId:'fakcList',
			   		 		store:'JHFAKCAllStore',
			   		 		selModel:{
								selType:'checkboxmodel'
							},
							maxHeight:475,
							autoScroll:true,
			   		 		columns:[
    							{text:'课程号', width:80, dataIndex:'kch', sortable: true},
    							{text:'课程名称', width:160, dataIndex:'kcmc', sortable: true},
    							{text:'总学分', width:70, dataIndex:'zxs', sortable: true},
    							{text:'课程学分', width:80, dataIndex:'kcxf', sortable: true},
    							{text:'课程类别', width:80, dataIndex:'kclb', sortable: true},
				    			{text:'课程性质', width:80, dataIndex:'kcxz', sortable: true},
				    			{text:'课程属性', width:80, dataIndex:'kcsx', sortable: true}
    						],
			   		 		dockedItems:[{
	        	            		dock: 'top',
	   							    xtype: 'toolbar',
	   							    items:[{
	   							   		 xtype:'textfield',
	   							   		 fieldLabel:'培养方案号',
	   							   		 width:220,
	   							   		 labelAlign:'right',
	   							   		 labelWidth:70,
	   							   		 itemId:'pyfah',
										 name:'pyfah'
	   							    },{
	   							    	itemId:'searchPyfahBtn',
										tooltip:'查询',
										action:'searchPyfah',
										iconCls:'search'
	   							    },{xtype:'tbspacer',width:240},'-',{
	   							    	text:'详情',
	   							    	itemId:'detail',
	   							    	iconCls:'detail_16',
	   							    	action:'detail'
	   							    },'-',{
	   							    	text:'导入',
	   							    	itemId:'importKc',
	   							    	iconCls:'add_16',
	   							    	action:'importKc',
	   							    	hidden:true
	   							    },{
	   							    	text:'增加',
	   							    	itemId:'addKc',
	   							    	iconCls:'add_16',
	   							    	action:'addKc',
	   							    	hidden:true
	   							    },'-',{
	   							    	text:'返回',
	   							    	iconCls:'return_16',
	   							    	handler:function(){
	   							    		var me = this;
	   							    		me.up('window').close();
	   							    	}
	   							    }]
	   						}
//	   						,		   
//	   						Ext.create('Ext.PagingToolbar', {
//						        pageSize: 20,
//						        dock: 'bottom',
//						        store: 'FAKCStore',
//						        displayInfo: true,
//						        displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
//						        emptyMsg: '没有数据',
//						        plugins: Ext.create('Ext.ux.ProgressBarPager', {})
//						    })
	   					]
			   		 })
			   ]
		})
	 me.callParent(arguments);
	}
})