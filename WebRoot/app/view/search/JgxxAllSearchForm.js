Ext.define('App.view.search.JgxxAllSearchForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.jgxxAllSearchForm',
	itemId:'jgxxAllSearchForm',
	title : '查询条件',
	autoWidth : true,
	bodyPadding : 5,
	layout : 'form',

	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [{
				xtype : 'fieldcontainer',
				layout : 'hbox',
				defaults :{
				labelAlign : 'right'
				},
				items : [{
					xtype : 'textfield',
					itemId : 'gh',
					name : 'gh',
					fieldLabel : '工号',
				 	    width:220,
					labelWidth:80
				},{
				    xtype : 'textfield',
					itemId : 'xm',
					name : 'xm',
					fieldLabel : '姓名',
					 	    width:220,
					labelWidth:80
				},{
					   xtype : 'combo',
					   itemId : 'szdwh',
					   name : 'szdwh',
					   fieldLabel : '工作单位',
					    width:220,
						labelWidth:80,
					   editable : false,
					   forceSelection : true,
					    matchFieldWidth : false,
					   queryMode : 'local',
					   displayField : 'dwmc',
					   valueField : 'dwh',
				       mode:'local',
				    tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{dwmc}'+ 
				      	   '</div>'+
				        '</tpl>',
					 store:Ext.create('Ext.data.Store',{
				        	autoLoad:true,      
				            remoteSort: true,
				            fields : [
				            	{name : 'dwh'},{name : "dwmc"},{name : "pxh"}
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
									zdName : 'ViewXxDwxx'
								},
						   		simpleSortMode : true
						   	},
							 listeners:{
							   		load:function(store,records,options){
							   			var data = {dwh:'',dwmc:'',pxh:''};
							   			store.insert(0,data); 
							   		}
							   	},
						   	sorters : [{
						   		property : 'pxh',
						   		direction : 'ASC'
						   	}]
					    })
				},{
				   xtype : 'combo',
				   itemId : 'xbm',
				   name : 'xbm',
				   hidden:true,
				   fieldLabel : '性别',
				 	width:220,
					labelWidth:80,
				   editable : false,
				   forceSelection : true,
				   queryMode : 'local',
				   displayField : 'xb',
				   valueField : 'xbm',
				    store:'ZdXbmStore',
				    mode:'local'
				   /*store:Ext.create('App.store.zd.ZdXbmStore',{
				   	fields : [{name : 'xb'},
				   	          {name : "xbm"}]
				   })*/
				},{
					xtype : 'combo',
				    itemId : 'mzm',
				    name : 'mzm',
				    fieldLabel : '民族',
				    hidden:true,
				    width : 260,
				    labelWidth : 120,
				    editable : false,
				    forceSelection : true,
				    queryMode : 'local',
				    displayField : 'mzmc',
				    valueField : 'mzm',
				    store:'ZdMzmStore',
				    mode:'local'
				    /*store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'mzm'},
				   	          {name : "mzmc"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'mzGetAll.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
				   		property : 'mzm',
				   		direction : 'ASC'
				   	}]
				   })*/
				}]
			},{
				xtype : 'fieldcontainer',
				layout : 'hbox',
				defaults :{
				labelAlign : 'right'
				},
				items : [{
					xtype:'combo',
					itemId:'jsly',
					name:'jsly',
					fieldLabel:'教师来源',
				    editable : false,
					valueField:'value',
					displayField:'jsly',
					valueField:'jslym',
				    width:220,
					labelWidth:80,
					mode:'local',
				    tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{jsly}'+ 
				      	   '</div>'+
				        '</tpl>',
					 store:Ext.create('Ext.data.Store',{
				        	autoLoad:true,      
				            remoteSort: true,
				            fields : [
				            	{name : 'jslym'},{name : "jsly"},{name : "pxh"}
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
									zdName : 'ZdJslym'
								},
						   		simpleSortMode : true
						   	},
							 listeners:{
							   		load:function(store,records,options){
							   			var data = {jslym:'',jsly:'',pxh:''};
							   			store.insert(0,data); 
							   		}
							   	},
						   	sorters : [{
						   		property : 'pxh',
						   		direction : 'ASC'
						   	}]
					    })
				},{
					xtype : 'combo',
				    itemId : 'dslb',
				    name : 'dslb',
				    fieldLabel : '导师类别',
//				    allowBlank : false,
//					blankText : '必填！',
				    editable : false,
					 width:220,
					labelWidth:80,
				    queryMode : 'local',
				    displayField : 'dslb',
				    valueField : 'dslbm',
				    mode:'local',
				      tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{dslb}'+ 
				      	   '</div>'+
				        '</tpl>',
					 store:Ext.create('Ext.data.Store',{
				        	autoLoad:true,      
				            remoteSort: true,
				            fields : [
				            	{name : 'dslbm'},{name : "dslb"},{name : "pxh"}
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
									zdName : 'ZdDslbm'
								},
						   		simpleSortMode : true
						   	},
							 listeners:{
							   		load:function(store,records,options){
							   			var data = {dslbm:'',dslb:'',pxh:''};
							   			store.insert(0,data); 
							   		}
							   	},
						   	sorters : [{
						   		property : 'pxh',
						   		direction : 'ASC'
						   	}]
					    })
				},{
					xtype : 'combo',
				    itemId : 'zzmmm',
				    name : 'zzmmm',
				    hidden:true,
				    fieldLabel : '政治面貌',
				  	    width:220,
					labelWidth:80,
				    editable : false,
				    forceSelection : true,
				    queryMode : 'local',
				    displayField : 'zzmm',
				    valueField : 'zzmmm',
				    store:'ZdZzmmmStore',
				    mode:'local'
				    /*store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'zzmmm'},
				   	          {name : "zzmm"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'zzmmGetAll.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
				   		property : 'zzmmm',
				   		direction : 'ASC'
				   	}]
				   })*/
				},{
					xtype : 'combo',
				    itemId : 'xlm',
				    name : 'xlm',
				    fieldLabel : '学历',
				 	    width:220,
					labelWidth:80,
				    hidden:true,
				    editable : false,
				    forceSelection : true,
				    queryMode : 'local',
				    displayField : 'xl',
				    valueField : 'xlm',
				    store:'ZdXlmStore',
				    mode:'local'
				    /*store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'xlm'},
				   	          {name : "xl"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'xlGetAll.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
				   		property : 'xlm',
				   		direction : 'ASC'
				   	}]
				   })*/
				},{
				   xtype : 'combo',
				    itemId : 'xwm',
				    name : 'xwm',
				    fieldLabel : '学位',
					    width:220,
					labelWidth:80,
				    hidden:true,
				    editable : false,
				    forceSelection : true,
				    queryMode : 'local',
				    displayField : 'xw',
				    valueField : 'xwm',
				    store:'ZdXwmStore',
				    mode:'local'
				    /*store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'xwm'},
				   	          {name : "xw"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'xwGetAll.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
				   		property : 'xwm',
				   		direction : 'ASC'
				   	}]
				   })*/
				},{
					xtype : 'textfield',
					itemId : 'zcm',
					name : 'zcm',
					fieldLabel : '职称',
						    width:220,
					labelWidth:80
				},{
				   xtype : 'textfield',
				   itemId : 'xzzw',
				   name : 'xzzw',
				   fieldLabel : '行政职务',
				      hidden:true,
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
//				xtype : 'toolbar',
//				dock : 'bottom',
//				style : 'background:transparent;',
//				layout : {
//					type : 'hbox',
//					align : 'center',
//					pack : 'center'
//				},
//				items:[{
//					itemId : 'searchBtn',
//					text : '查询',
//					iconCls : 'search',
//					action : 'search'
//				},{
//					itemId : 'searchAllBtn',
//					text : '全部',
//					tooltip : '全部',
//					iconCls : 'searchAll',
//					action : 'searchAll'
//				},{
//					itemId : 'adSearchBtn',
//					text : '高级查询',
//					hidden:true,
//					iconCls : 'advancedSearch',
//					action : 'advacedSearch'
//				}]
//			}]
		});
		me.callParent(arguments);
	}
})
