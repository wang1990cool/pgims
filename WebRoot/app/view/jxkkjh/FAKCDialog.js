Ext.define('App.view.jxkkjh.FAKCDialog',{
	extend:'Ext.form.Panel',
	alias:'widget.fakcDialog',
	itemId:'fakcDialog',
	initComponent:function(){
		var me = this;
		Ext.apply(me,{
					autoWidth: true,
					bodyPadding: 4,
					margin:'0 0 0 0',
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
										itemId:'kch',
										name:'kch',
										fieldLabel:'课程号',
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
									xtype: 'combo',
									itemId: 'ggkbz',
									name: 'ggkbz',
									width:230,
									labelWidth:80,
									fieldLabel: '公共课程',
									queryMode: 'local',
									editable: false,
									tpl:'<tpl for=".">' +  
							            '<div class="x-boundlist-item">' +  '{ggkbz}'+ 
							      	   '</div>'+
							            '</tpl>',
								    displayField: 'ggkbz',
								    valueField:'ggkbzm',
								    store:  Ext.create('Ext.data.Store',{
									   	autoLoad : true,
									   	fields : [{name : 'ggkbz'},
									   	            {name : "ggkbzm"}],
									   	proxy : {
									   		type : 'ajax',
									   		url : 'zdGetZD.action',
									   		actionMethods : 'post',
									   		reader : {
									   			root : 'result.list',
									   			totalProperty : 'totalProperty'
									   		},
									   		extraParams: {zdName:'ZdGgkbzm'},
									   		simpleSortMode : true
									   	},
									   	listeners:{
									   		 load : function(store, records, options ){    
										            var data ={ggkbz:'',ggkbzm:''};    
										            store.insert(0,data); 
										       } 
									   	},
									   	sorters : [{
									   		property : 'ggkbzm',
									   		direction : 'ASC'
									   	}]
									   })
								},,{
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
			   		 
			   		Ext.create('App.view.pyfa.FAKCList',{
			   		 		padding:'0 0 0 0',
			   		 		title:'',
			   		 		itemId:'fakcList',
			   		 	    frame:true,
			   		 		store:'FAKCAllStore',
			   		 		selModel:{
								selType:'checkboxmodel'
							},
							height:430,
			   		 		columns:[
			   		 			Ext.create('Ext.grid.RowNumberer'),
    							{text:'课程号', width:80, dataIndex:'kch', sortable: true},
    							{text:'课程名称', width:160, sortable: true,dataIndex:'kcmc'},
    							{text:'总学分', width:70, dataIndex:'zxs', sortable: true},
    							{text:'课程学分', width:90, dataIndex:'kcxf', sortable: true},
    							{text:'课程类别', width:90, dataIndex:'kclb', sortable: true},
				    			{text:'课程性质', width:90, dataIndex:'kcxz', sortable: true},
				    			{text:'课程属性', width:90, dataIndex:'kcsx', sortable: true},
				    			{text:'公共课程', width:90, dataIndex:'ggkbz', sortable: true}
    						],
			   		 		dockedItems:[{
	        	            		dock: 'top',
	   							    xtype: 'toolbar',
	   							    items:[{
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
	   					],
	   		listeners:{  
				itemdblclick: function(o, record, item, index, e, eOpts){
					var detailBtn = o.up('grid').down('#detail');
					if(!detailBtn.disabled && !detailBtn.hidden)
						detailBtn.fireEvent('click',detailBtn);
				}
			}
			   		 })
			   ]
		})
	 me.callParent(arguments);
	}
})