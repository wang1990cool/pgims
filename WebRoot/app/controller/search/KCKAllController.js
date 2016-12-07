Ext.define('App.controller.search.KCKAllController', {
			extend : 'Ext.app.Controller',

			models : ['pyfa.KCKModel'],
			stores : ['pyfa.KCKStore','zd.ZdGgkbzmStore'],

			refs : [{
						selector : 'kckAllList > kckAllSearchForm',
						ref : 'kckAllSearchForm'
					}],

			init : function() {
				this.control({
							'kckAllList combo[itemId=numCmb]': {
								render: this.initPageSize,
								select: this.setPageSize
							},
							'kckAllList button[itemId=schShowBtn]' : {
								render : this.setSchShowText
							},
							'kckAllList button[action=showSearch]' : {
								click : this.showSearch
							},
							'kckAllSearchForm button[action=search]' : {
								click : this.search
							},
							'kckAllSearchForm button[action=searchAll]' : {
								click : this.searchAll
							},
							'kckAllList  button[action=detail]':{
								click: this.detailKCK
							},
							'kckAllList  button[action=toExcel]': {
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
		        pGrid.store.load({callback:function(){
		        	var toolbar = pGrid.down('#toolbar');
					toolbar.moveFirst()
		        }});
		    },
			setSchShowText : function(o, eOpts) {
				var me = this;
				var searchForm = me.getCenter().down('#searchForm');
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
				var searchForm = tab.down('#searchForm');
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
			   o.actionUrl = 'kcktoExcel.action'
		  },
		  
			search : function(o, e, eOpts) {
				var me = this;
				var tab = me.getCenter().getActiveTab();
				var searchForm = tab.down('#searchForm');
				var searchParams = {
					start : 0,
					limit : 15,
					page : 1,
					searchMode : 'simple',
					fieldNames : [],
					order : '',
					search : {}
				};

				var pGrid = tab.down('#kckAllList'), store = pGrid.getStore();
				for (var col in pGrid.exportCols) {
					searchParams.fieldNames.push(col);
				}

				var tFields = searchForm.query('textfield(true)');
				for (var i in tFields) {
					if (tFields[i].value)
						searchParams.search[tFields[i].name] = "#like '%" +  Ext.String.trim( tFields[i].value )+ "%'";
				}
				
				var kkdwValue = searchForm.down('#kkdw').getValue();
				if(kkdwValue){
					searchParams.search['kkdwh']="#= '" + kkdwValue + "'";
				}
				
				var xslxValue = searchForm.down('#xslx').getValue();
				if(xslxValue){
					searchParams.search['xslxm']="#= '" + xslxValue + "'";
				}
				
				var pyccValue = searchForm.down('#pycc').getValue();
				if(pyccValue){
					searchParams.search['pyccm']="#= '" + pyccValue + "'";
				}
				var ggkbzValue = searchForm.down('#ggkbz').getValue();
				if(ggkbzValue){
					searchParams.search['ggkbzm']="#= '" + ggkbzValue + "'";
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
				
				var searchForm = tab.down('#searchForm');
				var pGrid = tab.down('#kckAllList');
				searchForm.getForm().reset();

				var store = me.getStore('KCKStore'), proxy = store.getProxy();
				proxy.setExtraParam('params', '');
				store.load();
			},
			
			detailKCK:function(o, e, eOpts){
				var rec = getSelRec(o.up('gridpanel'));
			   if(rec != undefined){
	        		var kckWins = Ext.ComponentQuery.query('#kckDetailWin');
	        		if(kckWins.length > 0) {
		        		var win = kckWins[0];
		        		win.setTitle('课程详情');
		        		win.setIconCls('detail_16');
		        		win.show();
	        	}else{
					var win = new Ext.Window({
						layout:'fit',
						itemId:'kckDetailWin',
						autoShow:true,
						title:'课程详情',
						iconCls:'detail_16',
			            width: 755,
		           	    height: 575,
			            closeAction:'hide',
			    		resizable:false,
			    		shadow:true,
			    		modal:true,
			    		constrainHeader:true,
			    		closable:true,
			    		animCollapse:true,
			    		autoShow:true,
	    				items: [Ext.create('App.view.pyfa.KCKDetail')]
					});
	        	}
				var kckForm = win.down('form');
//	        	kckForm.isAdd = false;
//	        	kckForm.loadRecord(rec);
	        	kckForm.loadForm(rec);
	        	
	        	kckForm.setViewForm();
	        	}
			},
    	
			getCenter : function() {
				return this.application.getController('main.MainController').getCenter();
			},

			initStore : function() {
				var me = this;
				var store = me.getStore('KCKStore'), proxy = store.getProxy();
				proxy.setExtraParam('params', '');
				store.load();
			},

			onLaunch : function(record) {
				var me = this;
				me.initStore();
				var center = me.getCenter();
				var tab = center.down('#M' + record.get('parentId'));
				var removePanel = tab.down('#content');
				tab.remove(removePanel);
				var contentPanel = Ext.create('App.view.search.KCKAllContentPanel',
						{
							itemId : 'content',
							parentId : record.get('id')
						});
				tab.add(contentPanel);
				center.setActiveTab(tab);
			}
		})