Ext.define('App.view.pyfa.KCKSearchForm',{
	extend:'Ext.form.Panel',
	alias:'widget.kckSearchForm',
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
				items:[{
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
				},{
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
					}]
			},{
				xtype:'fieldcontainer',
				layout:'hbox',
				defaults:{labelAlign:'right'},
				items:[{
						xtype : 'combo',
					    itemId : 'pycc',
					    name : 'pycc',
					    fieldLabel : '培养层次',
					    width:220,
						labelWidth:80,
					    editable : false,
					    listConfig:{
					     	maxHeight : 160
					     },
					    queryMode : 'local',
					    displayField : 'pycc',
					    valueField:'pyccm',
					     tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{pycc}'+ 
				      	   '</div>'+
				        '</tpl>',
					    store : Ext.create('Ext.data.Store',{
					   	autoLoad : true,
					   	fields : [{name : 'pyccm'},
					   	            {name : "pycc"}],
					   	proxy : {
					   		type : 'ajax',
					   		url : 'zdGetZD.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {zdName:'ZdPyccm'},
					   		simpleSortMode : true
					   	},
					   	listeners:{
					   		load:function(store,records,options){
					   			var data = {pyccm:'',pycc:''};
					   			store.insert(0,data); 
					   		}
					   	},
					   	sorters : [{
					   		property : 'pyccm',
					   		direction : 'ASC'
					   	}]
					   })
					},{
						xtype:'textfield',
						itemId:'kcxf',
						name:'kcxf',
						fieldLabel:'课程学分',
						width:220,
						labelWidth:80
					},{
						xtype: 'combo',
						itemId: 'ggkbz',
						name: 'ggkbz',
						fieldLabel: '公共课程',
						queryMode: 'local',
						editable: false,
					    displayField: 'ggkbz',
					    valueField:'ggkbzm',
					    width:220,
						labelWidth:80,
					    tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{ggkbz}'+ 
				      	   '</div>'+
				        '</tpl>',
					    store:Ext.create('Ext.data.Store',{
				        	autoLoad:true,      
				            remoteSort: true,
				            fields : [
				            	{name : 'ggkbz'},{name : "ggkbzm"},{name : "pxh"}
				            ],
						   	proxy : {
						   		type : 'ajax',
						   		url : 'zdGetZD.action',
						   		actionMethods : 'post',
						   		reader : {
						   			idProperty:'iid',
						   			root : 'result.list',
						   			totalProperty : 'totalProperty'
						   		},
						   		extraParams : {
									zdName : 'ZdGgkbzm'
								},
						   		simpleSortMode : true
						   	},
							 listeners:{
							   		load:function(store,records,options){
							   			var data = {ggkbz:'',ggkbzm:'',pxh:''};
							   			store.insert(0,data); 
							   		}
							   	},
						   	sorters : [{
						   		property : 'pxh',
						   		direction : 'ASC'
						   	}]
        
					    })
					}]
			},{
				xtype:'fieldcontainer',
				layout:'hbox',
				defaults:{labelAlign:'right'},
				items:[{
						xtype: 'combo',
						itemId: 'xslx',
						name: 'xslx',
						fieldLabel: '学时类型',
						queryMode: 'local',
						editable: false,
					    displayField: 'xslx',
					    valueField:'xslxm',
					    width:220,
						labelWidth:80,
					    tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{xslx}'+ 
				      	   '</div>'+
				        '</tpl>',
					    store:Ext.create('Ext.data.Store',{
				        	autoLoad:true,      
				            remoteSort: true,
				            fields : [
				            	{name : 'xslxm'},{name : "xslx"},{name : "pxh"}
				            ],
						   	proxy : {
						   		type : 'ajax',
						   		url : 'zdGetZD.action',
						   		actionMethods : 'post',
						   		reader : {
						   			idProperty:'iid',
						   			root : 'result.list',
						   			totalProperty : 'totalProperty'
						   		},
						   		extraParams : {
									zdName : 'ZdKcxslxm'
								},
						   		simpleSortMode : true
						   	},
							 listeners:{
							   		load:function(store,records,options){
							   			var data = {xslxm:'',xslx:'',pxh:''};
							   			store.insert(0,data); 
							   		}
							   	},
						   	sorters : [{
						   		property : 'pxh',
						   		direction : 'ASC'
						   	}]
        
					    })
					},{
						xtype:'textfield',
						itemId:'zxs',
						name:'zxs',
						fieldLabel:'总学时',
						width:220,
						labelWidth:80
					},{
						xtype:'textfield',
						itemId:'llxs',
						name:'llxs',
						fieldLabel:'理论学时',
						width:220,
						labelWidth:80
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