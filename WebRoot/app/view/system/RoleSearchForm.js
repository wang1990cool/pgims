Ext.define('App.view.system.RoleSearchForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.roleSearchForm',
    
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
					store:Ext.create('Ext.data.Store', {
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
	                    sorters: [{
	                        property: 'roleCode',
	                        direction: 'ASC'
	                    }]
	                }) 
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