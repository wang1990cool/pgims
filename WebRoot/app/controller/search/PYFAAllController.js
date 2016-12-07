Ext.define('App.controller.search.PYFAAllController',{
	extend:'Ext.app.Controller',
	
	models:['pyfa.PYFAModel','pyfa.FAKCModel','audit.AuditFlowLinkModel','audit.AuditDetailModel'],	
	stores:['pyfa.PYFAStore','pyfa.FAKCStore','pyfa.FAKCAllStore','zd.ZdXqbStore','pyfa.PYFATGStore',
					'audit.AuditFlowLinkStore','zd.ZdShztmStore','zd.ZdPyfsmStore','audit.AuditDetailStore'],
	
//    refs: [{  
//        selector: 'pyfaSearchForm',  
//        ref: 'pyfaSearchForm'  
//    }],
    
	init:function(){
		this.control({
		  '#pyfaAllList combo[itemId=numCmb]': {
				render: this.initPageSize,
				select: this.setPageSize
			},
		  '#pyfaAllList button[itemId=schShowBtn]' : {
					render : this.setSchShowText
		   },
		   '#pyfaAllList button[action=showSearch]' : {
			      click : this.showSearch
			},
			'#pyfaAllList button[action=auditDetail]':{
				click:this.auditDetail
			},
			'#pyfaAllList button[action=detail]':{
				click:this.detailPyfa
			},
			'#pyfaAllSearchForm button[action=search]' : {
				click : this.search
			},
			'#pyfaAllSearchForm button[action=searchAll]' : {
				click : this.searchAll
			},
			'#pyfaAllList  button[action=toExcel]': {
					render: this.excelBtnRender
			 }
		});
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
			
			setSchShowText : function(o, eOpts) {
				var me = this;
				var searchForm = me.getCenter().down('#pyfaAllSearchForm');
				if (searchForm)
					if (!searchForm.hidden) {
						o.setText('隐藏查询');
						o.setTooltip('隐藏查询');
					} else {
						o.setText('显示查询');
						o.setTooltip('显示查询');
					}
			},

			showSearch : function(o, e, eOpts) {
				var me = this;
				var tab = me.getCenter().getActiveTab();
				var searchForm = tab.down('#pyfaAllSearchForm');
				if (searchForm) {
					if (searchForm.hidden) {
						o.setText('隐藏查询');
						o.setTooltip('隐藏查询');
						searchForm.show();
					} else {
						o.setText('显示查询');
						o.setTooltip('显示查询');
						searchForm.hide();
					}
				}
			},
			
			search : function(o, e, eOpts) {
				var me = this;
				var tab = me.getCenter().getActiveTab();
				var searchForm = tab.down('#pyfaAllSearchForm');
				var searchParams = {
					start : 0,
					limit : 15,
					page : 1,
					searchMode : 'simple',
					fieldNames : [],
					order : '',
					search : {}
				};

				var pGrid = tab.down('#pyfaAllList'), store = pGrid.getStore();
				for (var col in pGrid.exportCols) {
					searchParams.fieldNames.push(col);
				}

				var tFields = searchForm.query('textfield(true)');
				for (var i in tFields) {
					if (tFields[i].value && tFields[i].hidden == false)
						searchParams.search[tFields[i].name] = "#like '%" +  Ext.String.trim( tFields[i].value ) + "%'";
				}
				var zymcValue = searchForm.down('#zymc').getValue();
				if(zymcValue){
					searchParams.search['zydm']="#= '" + zymcValue + "'";
				}
				var dwmcValue = searchForm.down('#dwmc').getValue();
				if(dwmcValue){
					searchParams.search['dwh']="#= '" + dwmcValue + "'";
				}
				var xslxValue = searchForm.down('#xslx').getValue();
				if(xslxValue){
					searchParams.search['xslxm']="#= '" + xslxValue + "'";
				}
				var proxy = store.getProxy();
				proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				store.load({callback:function(){
					var toolbar = pGrid.down('#toolbar');
					toolbar.moveFirst()
				}});
			},
			
			searchAll : function(o, e, eOpts) {
				var me = this;
				var tab = me.getCenter().getActiveTab();
				
				var searchForm = tab.down('#pyfaAllSearchForm');
				var pGrid = tab.down('#pyfaAllList');
				searchForm.getForm().reset();

				var store = me.getStore('PYFAStore'), proxy = store.getProxy();
				proxy.setExtraParam('params', '');
				store.load();
			},
		
			excelBtnRender: function(o, e, eOpts){
				o.operation = 'search';
			   o.actionUrl = 'pyfatoExcel.action'
			 },
			
			    initPageSize: function(o, e, eOpts){
			    	o.setValue(pSize);
			    },

		    
  		detailPyfa:function(o, e, eOpts){
			var me = this;
			var application = me.getApplication();
        	var controller = application.getController('App.controller.search.PYFADetailController');
		    controller.onLaunch(o);
		},
		
	  
	  auditDetail:function(o,e,eOpts){
	  	var me = this;
	  	var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
			if (recs.length == 0) {
				Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
			} else if (recs.length > 1) {
				Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
			} else if (recs.length == 1) {
				var auditDetailWins = Ext.ComponentQuery.query('#auditDetailWin');
				var win;
				if(auditDetailWins.length > 0){
					win = auditDetailWins[0];
				}else{
					win = new Ext.Window({
						itemId:'auditDetailWin',
						title:'审批记录',
						iconCls:'detail_16',
						width: 805,
						height: 460,
						constrainHeader:true,
						layout:'fit',
						closeAction:'hide',
						resizable:false,
						shadow:true,
						modal:true,
						closable:true,
						animCollapse:true,
			//			autoScroll:true,
						autoShow:true,
						bodyStyle:{
							background: '#fff'
						},
						items:[Ext.create('App.view.audit.AuditDetailList',{
							itemId:'auditDetailList',
							title:'',
							margin:'0 0 0 0'
						})]
				})
				}
					var searchParams = {
						start : 0,
						page : 1,
						searchMode : 'simple',
						fieldNames : [],
						order : '',
						search : {}
				};
	        	var pGrid = win.down('#auditDetailList');
	        	for (var col in pGrid.exportCols) {
						searchParams.fieldNames.push(col);
				}
				searchParams.search['proNo'] = "= '" + recs[0].data.pyfah + "'";
	        	var store = pGrid.getStore();
	        	var proxy =  store.getProxy();
	        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	        	store.load();
	        	win.show();
			}
	  },
	  		
			getCenter : function() {
			    return this.application.getController('main.MainController').getCenter();
			},
			
			initStore:function(){
				var me = this;
				var store = me.getStore('PYFAStore'), proxy = store.getProxy();
				proxy.setExtraParam('params','');
				proxy.setExtraParam('operation','all');
				store.load();
			},
	
			
			onLaunch : function(record) {
				var me = this;
				me.initStore();
				var center = me.getCenter();
				var tab = center.down('#M' + record.get('parentId'));
				var removePanel = tab.down('#content');
				tab.remove(removePanel);
				var contentPanel = Ext.create('App.view.search.PYFAAllContentPanel',
						{
							itemId : 'content',
							parentId : record.get('id'),
							autoScroll: true
						});
				tab.add(contentPanel);
				center.setActiveTab(tab);
			}
})
