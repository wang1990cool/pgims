Ext.define('App.controller.pygrjh.PYGRJHController',{
	extend:'Ext.app.Controller',
	
	models:['pygrjh.PYGRJHModel','pygrjh.PYGRJHKCModel','pygrjh.ViewPyGrjhModel'],	
	stores:['pygrjh.PYGRJHStore','pygrjh.PYGRJHKCStore','pygrjh.PYGRJHKCAllStore'],
	
    refs: [{  
        selector: 'pygrjhList > pygrjhSearchForm',  
        ref: 'pygrjhSearchForm'  
    }],
    
	init:function(){
		this.control({
			'pygrjhList gridtoolbar combo[itemId=numCmb]': {
				render: this.initPageSize,
				select: this.setPageSize
			},
			'pygrjhList gridtoolbar button[action=add]':{
				click:this.addGrjh
			},
			'pygrjhList gridtoolbar button[action=delete]':{
				click:this.deleteGrjh
			},
			'pygrjhList gridtoolbar button[action=detail]':{
				click:this.detailGrjh
			},
			'pygrjhList gridtoolbar button[action=edit]':{
				click:this.editGrjh
			},
			'pygrjhList gridtoolbar button[action=withdraw]':{
				click:this.withdrawGrjh
			},
		    'pygrjhList gridtoolbar button[itemId=schShowBtn]' : {
				render : this.setSchShowText
		   },
		   'pygrjhList gridtoolbar button[action=showSearch]' : {
			      click : this.showSearch
			},
			'pygrjhSearchForm button[action=search]' : {
				click : this.search
			},
			'pygrjhSearchForm button[action=searchAll]' : {
				click : this.searchAll
			},
			'pygrjhList gridtoolbar button[action=toExcel]': {
				render: this.excelBtnRender
			 }
		});
	},
	
	    setSchShowText: function(o, eOpts){
	    	var me = this;
			var tab = me.getCenter().getActiveTab();
			var searchForm = tab.down('#searchForm');
			if(searchForm)
				if(!searchForm.hidden){
					o.setText('隐藏查询');
					o.setTooltip('隐藏查询');
				}else{
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
			   o.actionUrl = 'pygrjhtoExcel.action'
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

				var pGrid = tab.down('#pygrjhList'), store = pGrid.getStore();
				for (var col in pGrid.exportCols) {
					searchParams.fieldNames.push(col);
				}

				var tFields = searchForm.query('textfield(true)');
				for (var i in tFields) {
					if (tFields[i].value && tFields[i].hidden == false)
						searchParams.search[tFields[i].name] = "#like '%" + tFields[i].value + "%'";
				}
				var zymcValue = searchForm.down('#zymc').getValue();
				if(zymcValue){
					searchParams.search['zydm']="#= '" + zymcValue + "'";
				}
				var fymcValue = searchForm.down('#fymc').getValue();
				if(fymcValue){
					searchParams.search['yxsh']="#= '" + fymcValue + "'";
				}
				var xslxValue = searchForm.down('#xslx').getValue();
				if(xslxValue){
					searchParams.search['xslxm']="#= '" + xslxValue + "'";
				}
				var proxy = store.getProxy();
				proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				store.load();
			},
			
			searchAll : function(o, e, eOpts) {
				var me = this;
				var tab = me.getCenter().getActiveTab();
				
				var searchForm = tab.down('#searchForm');
				var pGrid = tab.down('#pygrjhList');
				searchForm.getForm().reset();

				var store = me.getStore('PYGRJHStore'), proxy = store.getProxy();
				proxy.setExtraParam('params', '');
				store.load();
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
		    
			addGrjh:function(o, e, eOpts){
				Ext.StoreMgr.lookup('PYGRJHKCStore').removeAll();
				var me = this;
				var application = me.getApplication();
	        	var controller = application.getController('App.controller.pygrjh.AddPYGRJHController');
			    controller.onLaunch(o);
			},
	
			editPyfa:function(o, e, eOpts){
				var me = this;
				var application = me.getApplication();
	        	var controller = application.getController('App.controller.pyfa.EditPYFAController');
			    controller.onLaunch(o);
		  	},
			
		  deleteGrjh:function(o, e, eOpts){
		    	var me = this;
				var action = "pygrjhDel.action";
				var ids = getSelIds(o.up('gridpanel'),'xh');
				if(ids.length ==0) return;
//				var store = me.getStore('PYGRJHStore');
				var store =  Ext.getCmp('pygrjhList').getStore();
				DoDelete(action,'xh',ids, store);
		  },
		  
		   detailGrjh:function(o, e, eOpts){
		  	   var rec = getSelRec(o.up('gridpanel'));
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
		            	var win = new Ext.Window({
		            		itemId:'grjhDetailWin',
		            		autoShow: true,
		            		title:'个人计划详情',
		            		iconCls:'detail_16',
		                    layout: 'fit',
		                    width: 800,
							height: 440,
		                    closeAction:'hide',
		            		resizable:false,
		            		shadow:true,
		            		modal:true,
		            		closable:true,
		            		constrainHeader:true,
		            		animCollapse:true,
		            		autoShow:true,
		                    items: [Ext.create('App.view.pygrjh.PYGRJHDetailForm')],
		                    buttons: [{
				        	    text: '退出',
				        	    iconCls:'return_16',
				                handler: function () {
				                	var me = this;
				                    me.up('window').close();
				                }
				            }] 
		                });
		        	var xsJcxxDetail = win.down('#xsJcxxDetail');
		        	xsJcxxDetail.loadForm(rec);
		        	xsJcxxDetail.setView();
		  	 }
		},
		  editGrjh:function(o, e, eOpts){
		  		var me = this;
				var application = me.getApplication();
	        	var controller = application.getController('App.controller.pygrjh.EditPYGRJHController');
			    controller.onLaunch(o);
		  },
		  
		getCenter : function() {
			   return this.application.getController('main.MainController').getCenter();
		},
			
			initStore:function(){
				var me = this;
				var store = me.getStore('PYFAStore'), proxy = store.getProxy();
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
				var contentPanel = Ext.create('App.view.pygrjh.PYGRJHContentPanel',
						{
							itemId : 'content',
							parentId : record.get('id'),
							autoScroll: true
						});
				tab.add(contentPanel);
				center.setActiveTab(tab);
			}
})
