Ext.define('App.controller.system.RoleController', {
    extend: 'Ext.app.Controller',
    
    models: ['system.RoleModel'],
    stores: ['system.RoleStore'],
    
    init: function() {
		this.control({
			'roleList gridtoolbar combo[itemId=numCmb]': {
				render: this.initPageSize,
				select: this.setPageSize
			},
			
			'roleList gridtoolbar button[action=toExcel]': {
				render: this.excelBtnRender
			},
			
			'roleList gridtoolbar button[itemId=schShowBtn]': {
				render: this.setSchShowText
			},
			
			'roleList gridtoolbar button[action=add]': {
				click: this.addRole
			},
			
			'roleList gridtoolbar button[action=edit]': {
				click: this.editRole
			},
			
			'roleList gridtoolbar button[action=delete]': {
				click: this.deleteRole
			},
			
			'roleList gridtoolbar button[action=assign]': {
				click: this.assignRight
			},
			
			'roleList gridtoolbar button[action=detail]':{
				click:this.detailRole
			},
			'roleList gridtoolbar button[action=showSearch]': {
				click: this.showSearch
			},
			
			'roleSearchForm button[action=search]': {
				click: this.search
			},
			
			'roleSearchForm button[action=searchAll]': {
				click: this.searchAll
			},
			
			'roleSearchForm button[action=advacedSearch]': {
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
    	var contentPanel = Ext.create('App.view.system.RoleContentPanel',{
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
    	o.actionUrl = 'roletoExcel.action'
    },
    
    addRole: function( o, e, eOpts ){
			var me = this
			var application = me.getApplication();
		        var controller = application.getController('App.controller.system.AddRoleController');
			controller.onLaunch(o);
    },
    
    editRole: function( o, e, eOpts ){
			var me = this
			var application = me.getApplication();
	        var controller = application.getController('App.controller.system.EditRoleController');
			controller.onLaunch(o);
    },
    
    deleteRole: function( o, e, eOpts ){
    	var me = this;
    	
		var action = "roleDel.action";
		var ids = getSelIds(o.up('gridpanel'),'roleCode');
		if(ids.length ==0) return;
		var store = me.getStore('RoleStore');
		DoDelete(action,'roleCode',ids, store);
    },
    
    assignRight: function( o, e, eOpts){
    	var rec = getSelRec(o.up('gridpanel'));
    	if(rec != undefined){
	       	var win = new Ext.Window({
	    		itemId:'menuAllocateWin',
	    		iconCls:'assign_16',
	            layout: 'fit',
	            title: '分配权限菜单',
	            width: 360,
	            height: 420,
	            closeAction:'hide',
	    		resizable:false,
	    		shadow:true,
	    		modal:true,
	    		animCollapse:true,
	    		autoShow:true,
	            items: [Ext.create('App.view.system.MenuAllocateForm',{
	            	checkNodes:rec.raw.webMenus
	            })]
	        });
        	var menuAllocateForm = win.down('form');
        	menuAllocateForm.loadRecord(rec);      	
        	menuAllocateForm.down('#roleCode').setReadOnly(true);
        	menuAllocateForm.down('#roleName').setReadOnly(true);
    	}
    },
    
    detailRole:function(o,e,eOpts){
    	
    	var rec = getSelRec(o.up('gridpanel'));
    	if(rec != undefined){
        	var roleWins = Ext.ComponentQuery.query('#detailRoleWin');
        	if(roleWins.length > 0) {
        		var win = roleWins[0];
        		win.setTitle('角色详情');
        		win.setIconCls('detail_16');
        		win.show();
        	}else{
            	var win = new Ext.Window({
            		itemId:'detailRoleWin',
            		autoShow: true,
            		title:'角色详情',
            		iconCls:'detail_16',
                    layout: 'fit',
                    width: 385,
                    height: 300,
                    closeAction:'hide',
            		resizable:false,
            		shadow:true,
            		modal:true,
            		closable:true,
            		animCollapse:true,
            		autoShow:true,
                    items: [Ext.create('App.view.system.RoleForm')]
                });
        	}
		       	var roleForm = win.down('#roleForm');
		       	roleForm.down('#searchRight').setVisible(false);
		       	roleForm.down('#addRole').setVisible(false);
		     	roleForm.loadForm(rec)
		     	roleForm.setView();
		       	var roleCode = rec.data.roleCode;
		       	Ext.Ajax.request({
		       		url:'roleGetRightsByRoleCode.action',
		       		actionMethods : 'post',
		       		params:{roleCode:roleCode},
		       		success : function(response, opts) {
		       				var result = Ext.decode(response.responseText);
							var success = result.result.success;
							if(success){
								var list = result.result.list;
								var rightCode = '';
								for(var i = 0;i < list.length;i++){
									if(i == list.length-1){
										rightCode += list[i].rightCode;
									}else{
										rightCode += list[i].rightCode + ',';
									}
								}
								roleForm.down('#rightCode').setValue(rightCode)
							}
		       		}
		       	})
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
		
		var pGrid = tab.down('#roleList'), store = me.getStore('RoleStore');
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
    	var pGrid = tab.down('#roleList');
    	searchForm.getForm().reset();
    	
    	var store = me.getStore('RoleStore'), proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    },
    
    advacedSearch: function( o, e, eOpts){
    	
    }
});
