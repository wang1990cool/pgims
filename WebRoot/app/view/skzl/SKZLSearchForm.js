Ext.define('App.view.skzl.SKZLSearchForm',{
	extend:'Ext.form.Panel',
	alias:'widget.skzlSearchForm',
	title:'查询条件',
	autoWidth: true,
	bodyPadding: 5,
	layout: 'form',
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me,{
			items:[{
				xtype:'fieldcontainer',
				layout:'hbox',
				defaults:{
					labelAlign:'right'
				},
				items:[{ xtype: 'combo',
		            itemId: 'xn',
		            name: 'xn',
		            fieldLabel: ' 学年',
		            queryMode: 'local',
		            displayField:'xn',
		            valueField:'xn',
	            	 tpl:'<tpl for=".">' +  
			            '<div class="x-boundlist-item">' +  '{xn}'+ 
			      	   '</div>'+
			        '</tpl>',
		           	width:220,
					labelWidth:80,
		            store:Ext.create('Ext.data.Store',{
		            autoLoad: true,
	                proxy:{
	                		type:'ajax',
	                		url:'zdGetZD.action',
	                		actionMethods: 'post',
	                		reader:{
	                			root:'result.list',
	                			totalProperty:'result.total'
	                		},
	                		extraParams:{zdName:'TyXnb'}
	                	},
	                	listeners:{
    	   				  load:function(store, operation, eOpts){ 
	    	   					    var k, repeat = [], state = {};
					                this.each(function (r) {
					                k = r.get('xn');
					                if (state[k]) repeat.push(r);
					                else state[k] = true;
					            });
				            this.remove(repeat);
							var data = {xn:'',xq:''};
					   		store.insert(0,data); 
						}},
	                	fields:[{name:'xq'},{name:'xn'}],
	                	sorters:[{property:"xn",direction:"ASC"}]
	                })
    	        },{
	    	          xtype: 'combo',
			          itemId: 'xq',
			          name: 'xq',
		              fieldLabel: '学期',
		              queryMode: 'local',
		              displayField:'xq',
		              valueField:'xq',
		         	  width:220,
					  labelWidth:80,
					  tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{xq}'+ 
				      	   '</div>'+
				        '</tpl>',
		              store:Ext.create('Ext.data.Store',{
		              autoLoad: true,
		              proxy:{
		                		type:'ajax',
		                		url:'zdGetZD.action',
		                		actionMethods: 'post',
		                		reader:{
		                			root:'result.list',
		                			totalProperty:'result.total'
		                		},
		                		extraParams:{zdName:'TyXnb'}
		                	},
		                	listeners:{
	    	   				  load:function(store, operation, eOpts){ 
		    	   					    var k, repeat = [], state = {};
						                this.each(function (r) {
						                k = r.get('xq');
						                if (state[k]) repeat.push(r);
						                else state[k] = true;
						            });
					            this.remove(repeat);
								var data = {xn:'',xq:''};
					   			store.insert(0,data); 
							}},
		                	fields:[{name:'xn'},{name:'xq'}],
		                	sorters:[{property:"xq",direction:"ASC"}]
		                })
    	        },{
					xtype:'textfield',
					itemId:'kch',
					name:'kch',
					fieldLabel:'课程号',
					width:220,
					labelWidth:80
				},{
					xtype:'textfield',
					itemId:'kcmc',
					name:'kcmc',
					fieldLabel:'课程名称',
					width:220,
					labelWidth:80
				}]
			},{
				xtype:'fieldcontainer',
				layout:'hbox',
				defaults:{labelAlign:'right'},
				items:[{
						xtype : 'combo',
					    itemId : 'kkdw',
					    name : 'kkdw',
					    fieldLabel : '开课单位',
					    editable : false,
					    width:220,
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
//					   		extraParams: {zdName:'ViewXxJxdw'},
					   		simpleSortMode : true
					   	},
	   					listeners:{
					   		load:function(store,records,options){
					   			var data = {dwh:'',dwmc:''};
					   			store.insert(0,data); 
					   		}
					   	},
					   	sorters : [{
					   		property : 'dwh',
					   		direction : 'ASC'
					   	}]
					   })
					},{
					xtype:'textfield',
					itemId:'zjjs',
					name:'zjjs',
					fieldLabel:'主讲教师',
					width:220,
					labelWidth:80
				},{
						xtype : 'combo',
					    itemId : 'ztm',
					    name : 'ztm',
					    fieldLabel : '文件状态',
					    editable : false,
					    width:220,
						labelWidth:80,
						 tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{zt}'+ 
				      	   '</div>'+
				        '</tpl>',
					    listConfig:{
					     	maxHeight : 160,
					     	maxWidth:300
					     },
					    queryMode : 'local',
					    displayField : 'zt',
					    valueField:'ztm',
					    store : Ext.create('Ext.data.Store',{
					   	autoLoad : true,
					   	fields : [{name : 'ztm'},
					   	            {name : "zt"}],
					   	proxy : {
					   		type : 'ajax',
					   		url : 'ztgetZt.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {ztlb:'SKZL'},
					   		simpleSortMode : true
					   	},
	   					listeners:{
					   		load:function(store,records,options){
					   			var data = {ztm:'',zt:''};
					   			store.insert(0,data); 
					   		}
					   	},
					   	sorters : [{
					   		property : 'ztm',
					   		direction : 'ASC'
					   	}]
					   })
					},{
						xtype : 'combo',
					    itemId : 'zllxm',
					    name : 'zllxm',
					    fieldLabel : '资料类型',
					    editable : false,
					    width:220,
						labelWidth:80,
						 tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{wjlx}'+ 
				      	   '</div>'+
				        '</tpl>',
					    listConfig:{
					     	maxHeight : 160,
					     	maxWidth:300
					     },
					    queryMode : 'remote',
					    displayField : 'wjlx',
					    valueField:'wjlxm',
					    store : Ext.create('Ext.data.Store',{
				        	autoLoad:true,
				            storeId: 'ZdWjlxmStore',
				            remoteSort: true,
				            fields : [{name : 'wjlxm'}, {name : "wjlx"},{
										name : "pxh"},{name : "wjlb"},{name:'wjlb'}],
							proxy : {
								type : 'ajax',
								url : 'zdGetZD.action',
								actionMethods : 'post',
								reader : {
									root : 'result.list',
									totalProperty : 'totalProperty'
								},
								extraParams : {
									zdName : 'ZdWjlxm'
								},
								simpleSortMode : true
							},
						 	listeners:{
					   		load:function(store,records,options){
			   					  store.filterBy(function(record) {
					                    return record.get('wjlb') == 'SKZL';  
					             });
					             var data = {wjlxm:'',wjlx:''};
					   			  store.insert(0,data); 
					   		}
					   	},
							sorters : [{
										property : 'pxh',
										direction : 'ASC'
							}]
				        })
					},{
				xtype : 'toolbar',
//				dock : 'bottom',
				style : 'background:transparent;',
				border:'0 0 0 0',
				margin:'0 0 0 10',
				layout : {
					type : 'hbox',
					align : 'center',
					pack : 'center'
				},
				items:[{
					itemId : 'searchBtn',
					text : '查询',
					iconCls : 'search',
					action : 'search'
				},{
					itemId : 'searchAllBtn',
					text : '全部',
					tooltip : '全部',
					iconCls : 'searchAll',
					action : 'searchAll'
				},{
					itemId : 'adSearchBtn',
					text : '高级查询',
					hidden:true,
					iconCls : 'advancedSearch',
					action : 'advacedSearch'
				}]
			}]
			}]
//			,
//			dockedItems:[{
//				xtype:'toolbar',
//				dock:'bottom',
//				style:'background:transparent;',
//				layout:{type:'hbox',align:'center',pack:'center'},
//				items:[{
//					itemId:'searchBtn',
//					text:'查询',
//					tooltip:'查询',
//					iconCls:'search',
//					action:'search'
//				},{
//					itemId:'searchAllBtn',
//					text:'查询全部',
//					tooltip:'查询全部',
//					iconCls:'searchAll',
//					action:'searchAll'
//				},{
//	                itemId: 'adSearchBtn',
//	                text: '高级查询',
//	                tooltip: '高级查询',
//	                hidden:true,
//	                iconCls: 'advancedSearch',
//	                action: 'advacedSearch'
//	            }]
//			}]
		});
	    me.callParent(arguments);
	}
})