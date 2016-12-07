Ext.define('App.view.system.RoleList', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.roleList',
	
	store: 'RoleStore',
    columnLines: true,
    autoHeight: true,
    autoWidth: true,
    title: '用户角色',
    frame: true,
    loadMask: true,
    viewConfig: { stripeRows: true },
    selModel: {  
        selType:'checkboxmodel'  
    }, 
	
	initComponent: function() {
        var me = this;
        
        var exportCols = {
        	roleCode:'角色编码',roleName:'角色名称',memo:'备注'
        };

        Ext.applyIf(me, {
        	exportCols:exportCols,
            columns: [
                { text: exportCols['roleCode'], width: 100, dataIndex: 'roleCode', sortable: true},
                { text: exportCols['roleName'], width: 150, dataIndex: 'roleName', sortable: true},
                { text: exportCols['memo'], width: 150, dataIndex: 'memo', sortable: true}
		    ],
	        dockedItems: [Ext.create('App.view.main.GridToolbar',{
	    	   itemId:'gridtoolbar',
	    	   dock: 'top',
	    	   insertBtns:['-',{
	                itemId: 'assignBtn',
	                text:'分配菜单',
	                tooltip:'分配菜单',
	                iconCls:'assign_16',
	                action:'assign'
	           }]
	       }),
		    Ext.create('Ext.PagingToolbar', {
		        itemId:'toolbar',
		        pageSize: pSize,
		        dock: 'bottom',
		        store: me.store,
		        displayInfo: true,
		        displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
		        emptyMsg: '没有数据',
		        plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		    })]
        });

        me.callParent(arguments);
    }
});
