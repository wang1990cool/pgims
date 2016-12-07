Ext.define('App.controller.audit.AuditFlowLinkController',{
	extend: 'Ext.app.Controller',
	
	models: ['audit.AuditFlowLinkModel','system.RoleModel'],
    stores: ['audit.AuditFlowLinkStore','system.RoleStore'],
    
    refs: [{  
        selector: 'auditFlowLinkList > auditFlowLinkSearchForm',  
        ref: 'auditFlowLinkSearchForm'  
    }],
    
    init: function() {
		this.control({
			'auditFlowLinkList':{
				itemdblclick: this.itemDblClick
			},
			
			'auditFlowLinkList  button[action=detail]': {
				click: this.detail
			},
			
			'auditFlowLinkList  button[action=add]': {
				click: this.add
			},
			
			'auditFlowLinkList  button[action=edit]': {
				click: this.edit
			},
			
			'auditFlowLinkList  button[action=delete]': {
				click: this.del
			},
			
			'auditFlowLinkList  button[action=toExcel]': {
					render: this.excelBtnRender
		    }

		});
    },
    
		getCenter : function() {
			    return this.application.getController('main.MainController').getCenter();
			},
			
			initStore:function(){
				var me = this;
				var store = me.getStore('AuditFlowLinkStore'), proxy = store.getProxy();
				proxy.setExtraParam('params','');
				store.load();
			},
			
	  onLaunch : function(o) {
			 var rec = getSelRec(o.up('gridpanel'));
			 if(rec != undefined){
	        	var flowWins = Ext.ComponentQuery.query('#addFlowLink');
	        	if(flowWins.length > 0) {
		        		var win = flowWins[0];
		        		win.setTitle('制定流程');
		        		win.setIconCls('add_16');
		        		win.show();
	        	}else{
					var win = new Ext.Window({
						itemId:'addFlowLink',
						title:'制定流程',
						iconCls:'add_16',
						width: 800,
						height:380,
						closeAction:'hide',
						bodyStyle:{
							 background: '#fff'
						},
						constrainHeader:true,
						resizable:false,
						shadow:true,
						closable:true,
			    		animCollapse:true,
			    		autoShow:true
					})
	        	 }
  				var forms = Ext.ComponentQuery.query('#addAuditFlowLinkForm');
				if(forms.length > 0) {
					var form = forms[0];
					win.add(form)
				}else{
					win.add(Ext.create('App.view.audit.AddAuditFlowLinkForm',{
						itemId:'addAuditFlowLinkForm'
					}));
				}
				
				win.down('#addAuditFlowLinkForm').down('#flowCode').setValue(rec.data.flowCode);
				
	        	var searchParams = {
						searchMode : 'simple',
						fieldNames : [],
						order : '',
						search : {}
				};
	        	var pGrid = win.down('#addAuditFlowLinkForm').down('#auditFlowLinkList');
				searchParams.search['flowCode'] = "= '" + rec.data.flowCode + "'";
	        	var store = pGrid.getStore();
	        	var proxy =  store.getProxy();
	        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	        	store.load();
			   }
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
    	o.actionUrl = 'flowLinktoExcel.action'
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
    	var rec = getSelRec(o.up('gridpanel'));
    	if(rec != undefined){
        	var win = new Ext.Window({
        		itemId:'auditFlowLinkWin',
        		autoShow: true,
        		title:'详情',
        		iconCls:'grid',
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
                items: [Ext.create('App.view.audit.AuditFlowLinkForm',{
                	itemId : 'auditFlowLinkForm',
                	required : ''
                })]
            });
        	var infoErpForm = win.down('form');
        	infoErpForm.isAdd = false;
        	infoErpForm.loadViewForm(rec);
    	}
    },
    
    add: function( o, e, eOpts ){
    	var addAuditFlowLinkWin = o.up('#addAuditFlowLinkForm');
    	var auditFlowLinkWin = new Ext.Window({
    		itemId:'auditFlowLinkWin',
    		autoShow: true,
    		title:'增加审批流程',
    		iconCls:'add_16',
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
            items: [Ext.create('App.view.audit.AuditFlowLinkForm',{
            	itemId : 'auditFlowLinkForm',
            	pageGrid: o.up('gridpanel'),
            	isAdd: true
            })]
        });
        var flowCodeVal =  addAuditFlowLinkWin.down('#flowCode').getValue();
        var flowCode = auditFlowLinkWin.down('#auditFlowLinkForm').down('#flowCode');
        flowCode.setValue(flowCodeVal);
        flowCode.setReadOnly(true);
    },
    
    edit: function( o, e, eOpts ){
    	var rec = getSelRec(o.up('gridpanel'));
    	if(rec != undefined){
        	var win = new Ext.Window({
        		itemId:'auditFlowLinkWin',
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
                items: [Ext.create('App.view.audit.AuditFlowLinkForm',{
                	itemId : 'auditFlowLinkForm',
                	isAdd: false,
    				pageGrid: o.up('gridpanel')
                })]
            });
        	var auditFlowLinkForm = win.down('form');
        	auditFlowLinkForm.isAdd = false;
        	auditFlowLinkForm.loadForm(rec);
        	auditFlowLinkForm.down('#flowCode').setReadOnly(true);
    	}
    },
    
    del: function( o, e, eOpts ){
    	var me = this;
    	
		var action = "flowLinkdel.action";
		var ids = getSelIds(o.up('gridpanel'),'id');
		if(ids.length ==0) return;
		var store = me.getStore('AuditFlowLinkStore');
		DoDelete(action,'id',ids, store);
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
		
		var pGrid = tab.down('#auditFlowLinkList'), store = me.getStore('AuditFlowLinkStore');
		for(var col in pGrid.exportCols){
			searchParams.fieldNames.push(col);
		}
		
		var tFields = searchForm.query('textfield(true)');
		for(var i in tFields){
			if(tFields[i].value)
				searchParams.search[tFields[i].name] = "#like '%" + tFields[i].value + "%'";
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
    	var pGrid = tab.down('#auditFlowLinkList');
    	searchForm.getForm().reset();
    	
    	var store = me.getStore('AuditFlowLinkStore'), proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    },
    
    advacedSearch: function( o, e, eOpts){
    	
    }
});