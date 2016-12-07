Ext.define('App.view.jxpk.KzpjsDialog',{
	extend:'Ext.form.Panel',
	alias:'widget.kzpjsDialog',
	itemId:'kzpjsDialog',
	initComponent:function(){
		var me = this;
		Ext.apply(me,{
					autoWidth: true,
					bodyPadding: 4,
					margin:'0 0 0 0',
					height:30,
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
										itemId:'jsbh',
										name:'jsbh',
										fieldLabel:'教室编号',
									  	 width:230,
										labelWidth:80
									},{
										xtype:'textfield',
										itemId:'jsmc',
										name:'jsmc',
										fieldLabel:'教室名称',
									  	 width:230,
										labelWidth:80
									},{
										xtype : 'combo',
									    itemId : 'szdwmc',
									    name : 'szdwmc',
									    hidden:true,
									    fieldLabel : '使用单位',
									    editable : false,
									    width:230,
										labelWidth:80,
										tpl:'<tpl for=".">' +  
								            '<div class="x-boundlist-item">' +  '{dwmc}'+ 
								      	   '</div>'+
								        '</tpl>',
									    listConfig:{
									     	maxHeight : 160,
									     	maxWidth:300
									     },
									     matchFieldWidth : false,
									    queryMode : 'local',
									    displayField : 'dwmc',
									    valueField:'dwh',
									    store : Ext.create('Ext.data.Store',{
									   	autoLoad : true,
									   	fields : [{name : 'dwh'},
									   	            {name : "dwmc"}],
									   	proxy : {
									   		type : 'ajax',
									   		url : 'viewXxJxdwGetAll.action',
									   		actionMethods : 'post',
									   		reader : {
									   			root : 'result.list',
									   			totalProperty : 'totalProperty'
									   		},
									   		simpleSortMode : true
									   	},
									   	listeners:{
									   		 load : function(store, records, options ){    
										            var data ={dwh:'',dwmc:''};    
										            store.insert(0,data); 
										       } 
									   	},
									   	sorters : [{
									   		property : 'dwh',
									   		direction : 'ASC'
									   	}]
									   })
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
			   		 	Ext.create('App.view.jxpk.KzpjsList',{
			   		 		title:'',
			   		 		itemId:'kzpjsList',
			   		 		store:'KzpjsStore',
			   		 		layout:'auto',
			   		 		selModel:{
								selType:'checkboxmodel'
							},
			   		 		dockedItems:[{
	        	            		dock: 'top',
	   							    xtype: 'toolbar',
	   							    items:[{
	   							    	text:'详情',
	   							    	itemId:'detail',
	   							    	hidden:true,
	   							    	iconCls:'detail_16',
	   							    	action:'detail'
	   							    },{
	   							    	text:'确定',
	   							    	itemId:'ok',
	   							    	iconCls:'ok_16',
	   							    	action:'ok'
	   							    },{
	   							    	text:'返回',
	   							    	iconCls:'return_16',
	   							    	handler:function(){
	   							    		var me = this;
	   							    		me.up('window').close();
	   							    	}
	   							    }]
	   						}, 						   
	   						Ext.create('Ext.PagingToolbar', {
						        pageSize: pSize,
						        dock: 'bottom',
						        store: 'KzpjsStore',
						        displayInfo: true,
						        displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
						        emptyMsg: '没有数据',
						        plugins: Ext.create('Ext.ux.ProgressBarPager', {})
						    })
	   					]
			   		 })
			   ]
		})
	 me.callParent(arguments);
	}
})