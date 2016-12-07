Ext.define('App.view.skxx.GgkSKXXMXDialog',{
	extend:'Ext.form.Panel',
	alias:'widget.ggkSkxxmxDialog',
	itemId:'ggkSkxxmxDialog',
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
						height:70,
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
									}]},{
									   xtype:'fieldcontainer',
								       layout:'hbox',
									   defaults:{
											labelAlign:'right'
									 },
										items:[{
						xtype : 'combo',
					    itemId : 'pydw',
					    name : 'pydw',
					    fieldLabel : '培养单位',
					    editable : false,
					   	 width:230,
					    matchFieldWidth : false,
						labelWidth:80,
						tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{dwmc}'+ 
				      	   '</div>'+
				        '</tpl>',
					    listConfig:{
					     	maxHeight : 160
					     },
					    queryMode : 'remote',
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
					   		extraParams: {zdName:'ViewXxJxdw'},
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
					   }),
					   		listeners:{
					   		 change: function(combo, nv, ov){
	                            if(nv!=ov){
	                            	me.down('#xwlbm').setValue('');
		                            var zyCombo = me.down('#xkzy');
		                            zyCombo.clearValue();
		                            zyCombo.getStore().load();
		                            
		                            var xslxCombo = me.down('#xslx');
		                            xslxCombo.clearValue();
		                            xslxCombo.getStore().load();
	                          }
		                        }
						   }
						},{
							xtype:'textfield',
							itemId:'xwlbm',
							name:'xwlbm',
							fieldLabel:'学位类别码',
							hidden:true
						},{
						xtype : 'combo',
					    itemId : 'xkzy',
					    name : 'xkzy',
					 	 width:230,
					    labelWidth:80,
					    fieldLabel : '专业名称',
					    listConfig:{
					     	maxHeight : 160
					     },
	//				    matchFieldWidth : false,
					    editable : false,
					    queryMode : 'remote',
					    displayField : 'zymc',
					    valueField:'zydm',
					matchFieldWidth : false,
				    tpl:'<tpl for=".">' +  
			            '<div class="x-boundlist-item">' +  '{zymc}'+ ' ({zydm})' +
			      	   '</div>'+
			        '</tpl>',
					    store : Ext.create('Ext.data.Store',{
					   	autoLoad : false,
					   	fields :  [{name : 'zydm'},
					   	            {name : "zymc"},
					   	            {name:'dwh'},
					    	        {name:'dwmc'},
					    	        {name:'xwlbm'}],
					   	proxy : {
					   		type : 'ajax',
					   		url : 'zdGetZD.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams:{zdName:'ViewXkDwxkzy'},
					   		simpleSortMode : true
					   	},				   	
					   	listeners:{
			    	   		load:function(store, operation, eOpts){
			    	   					var dwhValue = me.down('#pydw').getValue();
						                store.filterBy(function(record) {
						                    return record.get('dwh') == dwhValue;  
						              });
	   					 		}
			    	  	 }
					 }),
					 listeners:{
					 	select:function(combo,record,index){
						    	me.down('#xwlbm').setValue(record[0].data.xwlbm);
						    	var xslxCombo = me.down('#xslx');
						        xslxCombo.clearValue();
	                          	xslxCombo.getStore().load();
					 	}
					 }
					},{
						xtype : 'combo',
					    itemId : 'xslx',
					    name : 'xslx',
					    fieldLabel : '学生类型',
					    editable : false,
					  	 width:230,
						labelWidth:80,
					    queryMode : 'remote',
					    displayField : 'xslx',
					    valueField:'xslxm',
					    store : Ext.create('Ext.data.Store',{
					   	autoLoad : false,
					   	fields : [{name : 'xslx'},
					   	          {name : "xslxm"},
					   	          {name:'xwlxm'},
					   	          {name:'xwlx'}],
					   	proxy : {
					   		type : 'ajax',
					   		url : 'zdGetZD.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {zdName:'XsXslxb'},
					   		simpleSortMode : true
					   	},
					   	listeners:{
					   		load:function(store, operation, eOpts){
					   			   var xwlbmValue=me.down('#xwlbm').getValue();
					                store.filterBy(function(record) {
					                	return record.get('xwlxm') == xwlbmValue;  
					             });
					   		 }
					   	},
					   	sorters : [{
					   		property : 'xslxm',
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
									}]
				         	}]
			   		 }),
			   		 	Ext.create('App.view.skxx.GgkZxkkjhList',{
			   		 		title:'',
			   		 		itemId:'ggkZxkkjhList',
			   		 		store:'GgkZxkkjhStore',
			   		 		layout:'auto',
			   		 		selModel:{
								selType:'checkboxmodel'
							},
							maxHeight:475,
							autoScroll:true,
			   		 		dockedItems:[{
	        	            		dock: 'top',
	   							    xtype: 'toolbar',
	   							    items:[
//	   							    	{
//	   							    	text:'详情',
//	   							    	itemId:'detail',
//	   							    	iconCls:'detail_16',
//	   							    	action:'detail'
//	   							    },'-',
	   							    	{
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
						        store: 'GgkZxkkjhStore',
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