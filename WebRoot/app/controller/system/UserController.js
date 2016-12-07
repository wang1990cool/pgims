Ext.define('App.controller.system.UserController', {
    extend: 'Ext.app.Controller',
    
    models: ['system.UserModel','system.RoleModel'],
    stores: ['system.UserStore'],
    
    refs: [{  
        selector: 'userList > userSearchForm',  
        ref: 'userSearchForm'  
    }],
    
    init: function() {
		this.control({
			'userList gridtoolbar combo[itemId=numCmb]': {
				render: this.initPageSize,
				select: this.setPageSize
			},

			'userList gridtoolbar button[action=toExcel]': {
				render: this.excelBtnRender
			},
			
			'userList gridtoolbar button[itemId=schShowBtn]': {
				render: this.setSchShowText
			},
			
			'userList gridtoolbar button[action=add]': {
				click: this.addUser
			},
			
			'userList gridtoolbar button[action=edit]': {
				click: this.editUser
			},
			
			'userList gridtoolbar button[action=delete]': {
				click: this.deleteUser
			},
			
			'userList gridtoolbar button[action=detail]': {
				click: this.detailUser
			},
			
			'userList gridtoolbar button[action=showSearch]': {
				click: this.showSearch
			},
			
			'userSearchForm button[action=search]': {
				click: this.search
			},
			
			'userSearchForm button[action=searchAll]': {
				click: this.searchAll
			},
			
			'userSearchForm button[action=advacedSearch]':{
				click: this.advacedSearch
			}
		});
    },
    
    getCenter: function(){
    	return this.application.getController('main.MainController').getCenter();
    },
    
    initStore:function(){
    	var me = this;
    	
    	var store = me.getStore('UserStore'), proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    },
    
    onLaunch:function(record){
    	var me = this;
    	me.initStore();
    	
    	var center = me.getCenter();
		var tab = center.down('#M'+record.get('parentId'));
		
    	var removePanel = tab.down('#content');
    	tab.remove(removePanel);
    	var contentPanel = Ext.create('App.view.system.UserContentPanel',{
        	itemId:'content',
        	parentId:record.get('id'),
        	autoScroll: true
        });
    	
    	tab.add(contentPanel);
		center.setActiveTab(tab);
    },
    
    setSchShowText: function(o, eOpts){
    	var me = this;
    	
		var searchForm = me.getCenter().down('#searchForm');
		if(searchForm)
			if(!searchForm.hidden){
				o.setText('隐藏查询');
				o.setTooltip('隐藏查询');
			}else{
				o.setText('显示查询');
				o.setTooltip('显示查询');
			}
	},
    
    showSearch: function( o, e, eOpts){
    	var me = this;
    	
    	var tab = me.getCenter().getActiveTab();
		var searchForm = tab.down('#searchForm');
		if(searchForm)
			if(searchForm.hidden){
				o.setText('隐藏查询');
				o.setTooltip('隐藏查询');
				searchForm.show();
			}else{
				o.setText('显示查询');
				o.setTooltip('显示查询');
				searchForm.hide();
			}
    },
    
    initPageSize: function(o, e, eOpts){
    	o.setValue(pSize);
    },

    setPageSize: function(o, e, eOpts){
    	var pGrid = o.up('gridpanel');
        pSize = o.getValue();
        pGrid.store.pageSize = pSize;
        pGrid.store.load({callback:function(){
							var toolbar = pGrid.down('#toolbar');
							toolbar.moveFirst()
				}});
    },
    
    excelBtnRender: function(o, e, eOpts){
    	o.actionUrl = 'usertoExcel.action'
    },
    
    addUser: function( o, e, eOpts ){
			var me = this
			var application = me.getApplication();
	        var controller = application.getController('App.controller.system.AddUserController');
			 controller.onLaunch(o);
		},
    
    editUser: function( o, e, eOpts ){
			var me = this
			var application = me.getApplication();
	        var controller = application.getController('App.controller.system.EditUserController');
			 controller.onLaunch(o);
	},
    
    deleteUser: function( o, e, eOpts ){
    	var me = this;
    	
		var action = "userDel.action";
		var ids = getSelIds(o.up('gridpanel'),'userName');
		if(ids.length ==0) return;
		var store = me.getStore('UserStore');
		DoDelete(action,'userName',ids, store);
		store.load();
//		store.load({
//			callback:function(){
//			
//			}
//		})
    },
    
    detailUser:function(o, e, eOpts){
    	var rec = getSelRec(o.up('gridpanel'));
    	if(rec != undefined){
        	var userWins = Ext.ComponentQuery.query('#detailUserWin');
        	if(userWins.length > 0) {
        		var win = userWins[0];
        		win.setTitle('用户详情');
        		win.setIconCls('detail_16');
        		win.show();
        	}else{
            	var win = new Ext.Window({
            		itemId:'detailUserWin',
            		autoShow: true,
            		title:'用户详情',
            		iconCls:'detail_16',
                    layout: 'fit',
                    width: 385,
                    height: 400,
                    closeAction:'hide',
            		resizable:false,
            		shadow:true,
            		modal:true,
            		closable:true,
            		animCollapse:true,
            		autoShow:true,
                    items: [Ext.create('App.view.system.UserForm')]
                });
        	}
        	var userForm = win.down('form');
        	userForm.loadForm(rec);
        	userForm.setView();
        	userForm.down('#searchJg').setVisible(false);
        	userForm.down('#submitUser').setVisible(false);
        	userForm.down('#roleCode').setValue(rec.raw.webRole.roleCode);
    	}
    },
    
    search: function( o, e, eOpts){
    	var me = this;
    	
    	var tab = me.getCenter().getActiveTab();
		var searchForm = tab.down('#searchForm');
		
		var searchParams = {
				start:0, limit:15, page: 1, searchMode:'simple',
				fieldNames:[], order:'',
				search:{}
    	};
		
		var pGrid = tab.down('#userList'), store = me.getStore('UserStore');
		for(var col in pGrid.exportCols){
			searchParams.fieldNames.push(col);
		}
		
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if(tFields[i].value)
				searchParams.search[tFields[i].name] = "#like '%" +  Ext.String.trim( tFields[i].value ) + "%'";
		}
		
		var roleCodeValue = searchForm.down('#roleName').getValue();
		if(roleCodeValue)
			searchParams.search['roleCode']="#= '" + roleCodeValue + "'";
			
		var szdwhValue = searchForm.down('#szdwh').getValue();
		if(szdwhValue)
			searchParams.search['szdwh']="#= '" + szdwhValue + "'";
		
		var proxy= store.getProxy();
		proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		store.load({callback:function(){
					var toolbar = pGrid.down('#toolbar');
					toolbar.moveFirst()
		}});
    },
    
    searchAll: function( o, e, eOpts){
    	var me = this;
    	
    	var tab = me.getCenter().getActiveTab();
		var searchForm = tab.down('#searchForm');
    	var pGrid = tab.down('#userList');
    	searchForm.getForm().reset();
    	
    	var store = me.getStore('UserStore'), proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    },
    
    advacedSearch: function( o, e, eOpts){
    	
    }
});
