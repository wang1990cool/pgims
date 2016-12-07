Ext.define('App.view.system.UserSearchForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.userSearchForm',
    
	title:'查询条件',
    autoWidth: true,
    bodyPadding: 5,
    layout:'form',
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
		    items: [{
		    	xtype: 'fieldcontainer',
			    layout:'hbox',
			    defaults:{labelAlign: 'right'},
			    items: [{
			    	xtype: 'textfield',
			    	itemId:'userName',
			    	name:'userName',
			    	fieldLabel: '用户名',
		            width:220,
		            labelWidth: 80
		        },{
		        	xtype: 'textfield',
		        	itemId:'userCName',
		        	name:'userCName',
		        	fieldLabel: '用户姓名',
		            width:220,
		            labelWidth: 80
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
				}]
	        },{
	        	xtype: 'fieldcontainer',
			    layout:'hbox',
				defaults:{labelAlign: 'right'},
			    items: [{
					xtype : 'combo',
		        	itemId:'roleName',
					name : 'roleName',
					fieldLabel : '用户角色',
					width:220,
					labelWidth: 80,
		            editable: false,
		            forceSelection: true, 
					queryMode : 'local',
					displayField : 'roleName',
					valueField : 'roleCode',
					  tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{roleName}'+ 
				      	   '</div>'+
				        '</tpl>',
					store: Ext.create('Ext.data.Store', {
	                    autoLoad: true,
	                    model: 'App.model.system.RoleModel',
	                    proxy: {
	                        type: 'ajax',
	                        url: 'roleGetAll.action',
	                        actionMethods:'post',
	                        reader: {
	                            root: 'result.list',
	                            totalProperty: 'totalProperty'
	                        },
	                        simpleSortMode: true
	                    },
	                     listeners:{
							   		load:function(store,records,options){
							   			var data = {roleCode:'',roleName:'',memo:''};
							   			store.insert(0,data); 
							   		}
							   	},
	                    sorters: [{
	                        property: 'roleCode',
	                        direction: 'ASC'
	                    }]
	                })
				},{
					xtype : 'textfield',
			    	itemId:'mobile',
					name : 'mobile',
					fieldLabel : '手机',
					width:220,
					labelWidth: 80
				},{
					xtype : 'textfield',
			    	itemId:'email',
					name : 'email',
					fieldLabel : '邮箱',
					width:220,
					labelWidth: 80
				}]
		    }],
			dockedItems: [{
			    xtype: 'toolbar',
			    dock: 'bottom',
			    style:'background:transparent;',
			    layout:{type:'hbox',align:'center',pack:'center'},
			    items: [{
	                itemId: 'searchBtn',
	                text: '查询',
	                tooltip: '查询',
	                iconCls: 'search',
	                action: 'search'
	            },{
	                itemId: 'searchAllBtn',
	                text: '全部',
	                tooltip: '全部',
	                iconCls: 'searchAll',
	                action: 'searchAll'
	            },{
	                itemId: 'adSearchBtn',
	                text: '高级查询',
	                tooltip: '高级查询',
	                hidden:true,
	                iconCls: 'advancedSearch',
	                action: 'advacedSearch'
	            }]
			}]
        });
        me.callParent(arguments);
    }
});