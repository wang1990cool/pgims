Ext.define('App.view.system.UserList', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.userList',
	
	store: 'UserStore',
    columnLines: true,
    title: '用户信息',
//    autoScroll:true,
    frame: true,
    loadMask: true,
    layout:'auto',
    viewConfig: { stripeRows: true },
    selModel: {  
        selType:'checkboxmodel'  
    }, 
	
	initComponent: function() {
        var me = this;
        
        var exportCols = {
        	userName:'用户名',userCName:'用户姓名',userPwd:'密码',
        	roleName:'用户角色',mobile:'手机',email:'邮箱',gh:'工号',xm:'姓名',
        	szdw:'所在单位'
        };

        Ext.applyIf(me, {
        	exportCols:exportCols,
            columns: [
                { text: exportCols['userName'], width: 100, dataIndex: 'userName', sortable: true},
                { text: exportCols['userCName'], width: 100, dataIndex: 'userCName', sortable: true },
                { text: exportCols['roleName'], width: 100, dataIndex: 'roleName', sortable: true, renderer: function (value, meta, record) {
            		return record.raw.webRole.roleName;
                }},
                { text: exportCols['gh'], width: 100, dataIndex: 'gh', sortable: true ,hidden:true},
                { text: exportCols['szdw'], width: 180, dataIndex: 'szdw', sortable: true },
                { text: exportCols['mobile'], width: 200, dataIndex: 'mobile', sortable: true },
                { text: exportCols['email'], width: 200, dataIndex: 'email', sortable: true }
		    ],
	        dockedItems: [
               Ext.create('App.view.main.GridToolbar',{
    	    	   itemId:'gridtoolbar',
    	    	   dock: 'top'
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
