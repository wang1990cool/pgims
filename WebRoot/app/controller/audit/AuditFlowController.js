Ext.define('App.controller.audit.AuditFlowController',{
	extend: 'Ext.app.Controller',
	
	models: ['audit.AuditFlowModel','audit.AuditFlowLinkModel'],
    stores: ['audit.AuditFlowStore','audit.AuditFlowLinkStore'],
    views:['audit.AuditFlowContentPanel'],
    
    refs: [{  
        selector: 'auditFlowList > auditFlowSearchForm',  
        ref: 'auditFlowSearchForm'  
    }],
    
    init: function() {
		this.control({
			'auditFlowList':{
				itemdblclick: this.itemDblClick
			},
			
			'auditFlowList gridtoolbar combo[itemId=numCmb]': {
				render: this.initPageSize,
				select: this.setPageSize
			},
			
			'auditFlowContentPanel': {
				reload: this.reload
			},
						
			'auditFlowList gridtoolbar button[itemId=schShowBtn]': {
				render: this.setSchShowText
			},
			
			'auditFlowList gridtoolbar button[action=detail]': {
				click: this.detail
			},
			
			'auditFlowList gridtoolbar button[action=add]': {
				click: this.add
			},
			
			'auditFlowList gridtoolbar button[action=edit]': {
				click: this.edit
			},
			
			'auditFlowList gridtoolbar button[action=delete]': {
				click: this.del
			},
			
			'auditFlowList gridtoolbar button[action=addFlow]': {
				click: this.addFlow
			},
			
			'auditFlowList gridtoolbar button[action=toExcel]': {
					render: this.excelBtnRender
		    },
		    
			'auditFlowList gridtoolbar button[action=showSearch]': {
				click: this.showSearch
			},
			
			'auditFlowSearchForm button[action=search]': {
				click: this.search
			},
			
			'auditFlowSearchForm button[action=searchAll]': {
				click: this.searchAll
			},
			
			'auditFlowSearchForm button[action=advacedSearch]':{
				click: this.advacedSearch
			}
		});
    },
    
		getCenter : function() {
			    return this.application.getController('main.MainController').getCenter();
			},
			
			initStore:function(){
				var me = this;
				var store = me.getStore('AuditFlowStore'), proxy = store.getProxy();
				proxy.setExtraParam('params','');
				store.load();
			},

			onLaunch : function(record) {
				var me = this;
				me.initStore();
				var center = me.getCenter();
				var tab = center.down('#M' + record.get('parentId'));
				var removePanel = tab.down('#content');
				tab.remove(removePanel);
				var contentPanel = Ext.create('App.view.audit.AuditFlowContentPanel',
						{
							itemId : 'content',
							parentId : record.get('id'),
							autoScroll: true
						});
				tab.add(contentPanel);
				center.setActiveTab(tab);
			},
    
    itemDblClick: function(o, record, item, index, e, eOpts){
    	var me = this;
    	
    	me.view(o,e,eOpts);
	},
    
    reload: function(o, eOpts){
    	var me = this;
    	me.initStore();
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
    
    excelBtnRender: function(o, e, eOpts){
    	o.actionUrl = 'auditFlowtoExcel.action'
    },
    
    initPageSize: function(o, e, eOpts){
    	o.setValue(pSize);
    },

    setPageSize: function(o, e, eOpts){
    	var pGrid = o.up('gridpanel');
        pSize = o.getValue();
        pGrid.store.pageSize = pSize;
        pGrid.store.load();
    },
    
    detail: function( o, e, eOpts ){
		var rec = getSelRec(o.up('gridpanel'))
		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
		if(recs.length == 0){
			Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
		} else if (recs.length > 1) {
			Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
		} else if (recs.length == 1) {
				var auditFlowForm = Ext.create('App.view.audit.AuditFlowForm',{
						itemId:'auditFlowForm',
						baseCls: 'my-panel-no-border',
						dockedItems:[]
				});
				var Detailwin = Ext.create('App.view.audit.AuditFlowDetailWindow');
				Detailwin.down('#auditFlowFormTab').add(auditFlowForm);
				auditFlowForm.setDetailView();
				auditFlowForm.loadForm(rec)
		}
	},
    
    add: function( o, e, eOpts ){
    	var auditFlowWin = new Ext.Window({
    		itemId:'auditFlowWin',
    		autoShow: true,
    		title:'增加',
    		iconCls:'add_16',
            layout: 'fit',
			width:600,
			height:400,
            closeAction:'destroy',
    		resizable:false,
    		shadow:true,
    		modal:true,
    		closable:true,
    		maximizable : true,
    		constrainHeader : true,
    		autoShow:true,
            items: [Ext.create('App.view.audit.AuditFlowForm',{
            	itemId : 'auditFlowForm',
            	pageGrid: o.up('gridpanel'),
            	isAdd: true
            })]
        });
    },
    
    	 addFlow:function(o, e, eOpts){
				var me = this;
				var application = me.getApplication();
	        	var controller = application.getController('App.controller.audit.AuditFlowLinkController');
			    controller.onLaunch(o);
			},
    
    edit: function( o, e, eOpts ){
    	var rec = getSelRec(o.up('gridpanel'));
    	if(rec != undefined){
        	var win = new Ext.Window({
        		itemId:'auditFlowWin',
        		autoShow: true,
        		title:'修改',
        		iconCls:'edit_16',
                layout: 'fit',
    			width:960,
				height:400,
                closeAction:'destroy',
        		resizable:false,
        		shadow:true,
        		modal:true,
        		closable:true,
        		maximizable : true,
        		constrainHeader : true,
        		autoShow:true,
                items: [Ext.create('App.view.audit.AuditFlowForm',{
                	itemId : 'auditFlowForm',
                	isAdd: false,
    				pageGrid: o.up('gridpanel')
                })]
            });
        	var auditFlowForm = win.down('form');
        	auditFlowForm.down('#flowCode').setReadOnly(true)
        	auditFlowForm.isAdd = false;
        	auditFlowForm.loadForm(rec);
    	}
    },
    
    del: function( o, e, eOpts ){
    	var me = this;
    	
		var action = "auditFlowdel.action";
		var ids = getSelIds(o.up('gridpanel'),'flowCode');
		if(ids.length ==0) return;
		var store = me.getStore('AuditFlowStore');
		DoDelete(action,'flowCode',ids, store);
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
		
		var pGrid = tab.down('#auditFlowList'), store = me.getStore('AuditFlowStore');
		for(var col in pGrid.exportCols){
			searchParams.fieldNames.push(col);
		}
		
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if(tFields[i].value)
				searchParams.search[tFields[i].name] = "#like '%" +  Ext.String.trim( tFields[i].value ) + "%'";
		}
		
		var isValid = searchForm.down('#isPass').getValue();
		if(isValid)
			searchParams.search['isPass'] = "#= " + isValid;
		
		var proxy= store.getProxy();
		proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		store.load();
    },
    
    searchAll: function( o, e, eOpts){
    	var me = this;
    	var tab = me.getCenter().getActiveTab();
		var searchForm = tab.down('#searchForm');
    	var pGrid = tab.down('#auditFlowList');
    	searchForm.getForm().reset();
    	
    	var store = me.getStore('AuditFlowStore'), proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    },
    
    advacedSearch: function( o, e, eOpts){
    	
    }
});