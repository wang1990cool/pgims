Ext.define('App.controller.jxkkjh.KKJHAllController', {
			extend : 'Ext.app.Controller',

			models : ['jxkkjh.KKJHModel','jxkkjh.KKJHMXModel'],
			stores : ['jxkkjh.KKJHStore','jxkkjh.KKJHTGStore','jxkkjh.KKJHMXAllStore','zd.ZdXqbStore'],
//			view:['jxkkjh.KKJHAllContentPanel'],
			refs : [{
						selector : 'kkjhAllSearchForm',
						ref : 'kkjhAllSearchForm'
					}],

			init : function() {
				this.control({
				'#kkjhAllList combo[itemId=numCmb]': {
						render: this.initPageSize,
						select: this.setPageSize
					},
				  '#kkjhAllList button[itemId=schShowBtn]' : {
							render : this.setSchShowText
				   },
				   '#kkjhAllList button[action=showSearch]' : {
					      click : this.showSearch
					},
					'#kkjhAllList button[action=detail]':{
						click:this.detailKKJH
					},
					'#kkjhAllList button[action=auditDetail]':{
						click:this.auditDetail
					},
					'#kkjhAllSearchForm button[action=search]' : {
						click : this.search
					},
					'#kkjhAllSearchForm button[action=searchAll]' : {
						click : this.searchAll
					},
					'#kkjhAllSearchForm  button[action=toExcel]': {
						render: this.excelBtnRender
					 },
					 '#kkjhAllList button[action=toExcel]': {
						render: this.excelBtnRender
					 }
				})
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
			
			setSchShowText : function(o, eOpts) {
				var me = this;
				var searchForm = me.getCenter().down('#kkjhAllSearchForm');
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
				var searchForm = tab.down('#kkjhAllSearchForm');
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

		 excelBtnRender: function(o, e, eOpts){
			   o.actionUrl = 'kkjhtoExcel.action'
		  },
		  
			search : function(o, e, eOpts) {
				var me = this;
				var tab = me.getCenter().getActiveTab();
				var searchForm = tab.down('#kkjhAllSearchForm');
				var searchParams = {
					start : 0,
					limit : 15,
					page : 1,
					searchMode : 'simple',
					fieldNames : [],
					order : '',
					search : {}
				};

				var pGrid = tab.down('#kkjhAllList'), store = pGrid.getStore();
				for (var col in pGrid.exportCols) {
					searchParams.fieldNames.push(col);
				}

				var tFields = searchForm.query('textfield(true)');
				for (var i in tFields) {
					if (tFields[i].value)
						searchParams.search[tFields[i].name] = "#like '%" + tFields[i].value + "%'";
				}
				
				var pydwhValue = searchForm.down('#pydwh').getValue();
				if(pydwhValue){
					searchParams.search['pydwh']="#= '" + pydwhValue + "'";
				}
				
				var xkzymValue = searchForm.down('#xkzym').getValue();
				if(xkzymValue){
					searchParams.search['xkzym']="#= '" + xkzymValue + "'";
				}
				
				var xslxmValue = searchForm.down('#xslxm').getValue();
				if(xslxmValue){
					searchParams.search['xslxm']="#= '" + xslxmValue + "'";
				}
				var proxy = store.getProxy();
				proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				store.load();
			},

	searchAll : function(o, e, eOpts) {
		var me = this;
		var tab = me.getCenter().getActiveTab();
		
		var searchForm = tab.down('#kkjhAllSearchForm');
		var pGrid = tab.down('#kkjhAllList');
		searchForm.getForm().reset();

		var store = pGrid.getStore(), proxy = store.getProxy();
		proxy.setExtraParam('params', '');
		store.load();
	},
			
	detailKKJH:function(o, e, eOpts){ 
			var me = this;
			var application = me.getApplication();
        	var controller = application.getController('App.controller.jxkkjh.DetailKKJHController');
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
							margin:'10 10 10 10'
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
				searchParams.search['proNo'] = "= '" + recs[0].data.kkjhh + "'";
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

			initStore : function() {
				var me = this;
				var store = me.getStore('KKJHStore');
				proxy = store.getProxy();
				proxy.setExtraParam('params', '');
				proxy.setExtraParam('operation', 'all');
				store.load();
			},

			
			setOperationBtn:function(contentPanel){
						var kkjhList = contentPanel.down('#kkjhAllList');
						kkjhList.down('#submitBtn').setVisible(false);
						kkjhList.down('#withdrawBtn').setVisible(false);
						kkjhList.down('#addBtn').setVisible(false);
						kkjhList.down('#editBtn').setVisible(false);
						kkjhList.down('#deleteBtn').setVisible(false);
			},
			
			onLaunch : function(record) {
				var me = this;
				me.initStore();
				var center = me.getCenter();
				var tab = center.down('#M' + record.get('parentId'));
				var removePanel = tab.down('#content');
				tab.remove(removePanel);
				var contentPanel = Ext.create('App.view.jxkkjh.KKJHAllContentPanel',
						{
							itemId : 'content',
							parentId : record.get('id')
						});
//				if(isSuperRight){
//					contentPanel.down('#kkjhTgList').setVisible(false);
//				}
				tab.add(contentPanel);
				center.setActiveTab(tab);
				me.setOperationBtn(contentPanel);
			}
		})