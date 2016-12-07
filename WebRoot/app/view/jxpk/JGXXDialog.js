Ext.define('App.view.jxpk.JGXXDialog',{
	extend:'Ext.form.Panel',
	alias:'widget.jgxxJgxxDialog',
	itemId:'jgxxDialog',
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
										itemId:'gh',
										name:'gh',
										fieldLabel:'教师工号',
									  	 width:230,
										labelWidth:80
									},{
										xtype:'textfield',
										itemId:'xm',
										name:'xm',
										fieldLabel:'教师姓名',
									  	 width:230,
										labelWidth:80
									},{
										xtype : 'combo',
									    itemId : 'szdw',
									    name : 'szdw',
									    fieldLabel : '所在单位',
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
									   		url : 'zdGetZD.action',
									   		actionMethods : 'post',
									   		reader : {
									   			root : 'result.list',
									   			totalProperty : 'totalProperty'
									   		},
									   		extraParams: {zdName:'ViewXxDwxx'},
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
										xtype : 'combo',
									    itemId : 'xb',
									    name : 'xb',
									    fieldLabel : '性别',
									    editable : false,
									    hidden:true,
									    width:230,
										labelWidth:80,
										tpl:'<tpl for=".">' +  
								            '<div class="x-boundlist-item">' +  '{xb}'+ 
								      	   '</div>'+
								        '</tpl>',
									    listConfig:{
									     	maxHeight : 160,
									     	maxWidth:300
									     },
									    queryMode : 'local',
									    displayField : 'xb',
									    valueField:'xbm',
									    store : Ext.create('Ext.data.Store',{
									   	autoLoad : true,
									   	fields : [{name : 'xbm'},
									   	            {name : "xb"}],
									   	proxy : {
									   		type : 'ajax',
									   		url : 'zdGetZD.action',
									   		actionMethods : 'post',
									   		reader : {
									   			root : 'result.list',
									   			totalProperty : 'totalProperty'
									   		},
									   		extraParams: {zdName:'ZdXbm'},
									   		simpleSortMode : true
									   	},
									   	listeners:{
									   		 load : function(store, records, options ){    
										            var data ={xbm:'',xb:''};    
										            store.insert(0,data); 
										       } 
									   	},
									   	sorters : [{
									   		property : 'xbm',
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
			   		 	Ext.create('App.view.jxpk.JgxxList',{
			   		 		title:'',
			   		 		itemId:'jgxxList',
			   		 		store:'JgxxAllStore',
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
	   							    	iconCls:'detail_16',
	   							    	action:'detail'
	   							    },'-',{
	   							    	text:'确定',
	   							    	itemId:'ok',
	   							    	iconCls:'ok_16',
	   							    	action:'ok'
	   							    },'-',{
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
						        store: 'JgxxAllStore',
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