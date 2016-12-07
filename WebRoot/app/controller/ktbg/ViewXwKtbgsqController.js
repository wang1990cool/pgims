Ext.define('App.controller.ktbg.ViewXwKtbgsqController', {
	extend : 'Ext.app.Controller',

	models : ['ktbg.ViewXwKtbgsqModel', 'xs.XsJcxxbModel',
			'ktbg.XwKtbgsqbModel'],
	stores : ['ktbg.ViewXwKtbgsqStore', 'xs.XsJcxxbStore',
			'ktbg.XwKtbgsqbStore', 'zd.ViewXxJxdwStore',
			'zd.ViewXkDwxkzyStore', 'zd.ZdShztmStore'],//,'kt.XwKtbgsqbStore'

	refs : [{
				selector : 'viewXwKtbgsqSearchForm',
				ref : 'viewXwKtbgsqSearchForm'
			}],

	init : function() {
		this.control({
					'#viewXwKtbgsqList' : {
						itemdblclick : this.itemDblClick
					},
					'#viewXwKtbgsqList gridtoolbar combo[itemId=numCmb]' : {
						render : this.initPageSize,
						select : this.setPageSize
					},
					'#viewXwKtbgsqList gridtoolbar button[action=detail]' : {
						click : this.detail
					},
					'#viewXwKtbgsqList gridtoolbar button[action=edit]' : {
						click : this.editClass
					},
					'#viewXwKtbgsqList gridtoolbar button[action=editsj]' : {
						click : this.editClasssj
					},
					'#viewXwKtbgsqList gridtoolbar button[action=withdraw]' : {
						click : this.withdrawKkjh
					},
					'#viewXwKtbgsqList gridtoolbar button[action=refresh]' : {
						click : this.refreshClass
					},
					'#viewXwKtbgsqList gridtoolbar button[action=toExcel]' : {
						render : this.excelBtnRender
					},
					'#viewXwKtbgsqList gridtoolbar button[itemId=schShowBtn]' : {
						render : this.setSchShowText
					},

					'#viewXwKtbgsqList gridtoolbar button[action=showSearch]' : {
						click : this.showSearch
					},

					'viewXwKtbgsqSearchForm button[action=search]' : {
						click : this.search
					},
					'viewXwKtbgsqSearchForm button[action=searchAll]' : {
						click : this.searchAll
					}
				});
	},

	getCenter : function() {
		return this.application.getController('main.MainController')
				.getCenter();
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
		if (searchForm)
			if (searchForm.hidden) {//hidden
				o.setText('隐藏查询');
				o.setTooltip('隐藏查询');
				searchForm.show();
			} else {
				o.setText('显示查询');
				o.setTooltip('显示查询');
				searchForm.hide();
			}
	},

	initStore : function() {
		var me = this;
		var store = me.getStore('ViewXwKtbgsqStore', {});
		var searchParams = {
			start : 0,
			limit : 15,
			page : 1,
			searchMode : 'simple',
			fieldNames : [],
			order : '',
			search : {}
		};
//		searchParams.search['shztm'] = "#in (" + "\'TG\'" + ',' + "\'DSH\'"
//				+ ")";
//		searchParams.search['yxsh'] = "#= '" + szdwh + "'";
		//    	alert(Ext.JSON.encode(searchParams))
		proxy = store.getProxy();
		proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		store.load();
	},
	
	excelBtnRender : function(o, e, eOpts) {
		o.actionUrl = 'viewXwKtbgsqtoExcel.action'
	},

	onLaunch : function(record) {
		var me = this;
		var center = me.getCenter();
		var tab = center.down('#M' + record.get('parentId'));
		var removePanel = tab.down('#content');
		tab.remove(removePanel);
		var contentPanel = Ext.create('App.view.ktbg.ViewXwKtbgsqContentPanel',
				{
					itemId : 'content',
					parentId : record.get('id')
				});
		tab.add(contentPanel);
		center.setActiveTab(tab);
		me.initStore();
	},

	initPageSize : function(o, e, eOpts) {
		o.setValue(pSize);
	},

	setPageSize : function(o, e, eOpts) {
		var pGrid = o.up('gridpanel');
		pSize = o.getValue();
		pGrid.store.pageSize = pSize;
		pGrid.store.load({callback:function(){
					var toolbar = pGrid.down('#toolbar');
					toolbar.moveFirst()
		}});
	},
	
	itemDblClick : function(o, record, item, index, e, eOpts) {
		var me = this;
		me.detail(o, e, eOpts);
	},
	
	withdrawKkjh : function(o, e, eOpts) {
		//			if(!isSuperRight){
		var rec = getSelRec(o.up('gridpanel'));
		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
		if (recs.length == 0) {
			Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
		} else if (recs.length > 1) {
			Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
		} else if (recs.length == 1) {
			if (rec.data.shztm == 'CG' || rec.data.shztm == 'DSH') {
				Ext.MessageBox.alert('提示', '草稿或待审状态！无法撤回');
			} else if (rec.data.shztm == 'TG') {
				var xh = rec.data.xh;
				var shztm = 'DSH';
				var shzt = encodeURI(encodeURI("待审状态"));
				var shyj = encodeURI(encodeURI(""));
				var shr = encodeURI(encodeURI(""));
				var shrgh = encodeURI(encodeURI(""));
//				var shsj = encodeURI(encodeURI(""));
				Ext.Ajax.request({
							url : 'xwKtbgsqbUpdateZtm.action?xh=' + xh
									+ '&shztm=' + shztm + '&shzt=' + shzt
									+ '&shyj=' + shyj + '&shr=' + shr+ '&shrgh=' + shrgh,
							method : 'post',
							success : function(response, opts) {
								var result = Ext.decode(response.responseText);
								var success = result.result.success;
								if (success) {
									var msg = "撤回成功！";
									Ext.MessageBox.show({
												title : '提示',
												msg : msg,
												buttons : Ext.MessageBox.OK,
												icon : Ext.MessageBox.INFO,
												fn : function(id, msg) {
													Ext.StoreMgr
															.lookup('XwKtbgsqbStore')
															.load();
												}
											});
											var viewXwKtbgsqLists = Ext.ComponentQuery.query('#viewXwKtbgsqList');
										if (viewXwKtbgsqLists.length > 0) {
											var viewXwKtbgsqList = viewXwKtbgsqLists[0];
											var store = viewXwKtbgsqList.getStore();
											store.load();
										}
								}
							},
							failure : function(form, action) {
								var errmsg = "撤回失败！";
								Ext.MessageBox.show({
											title : '错误',
											msg : errmsg,
											buttons : Ext.MessageBox.OK,
											icon : Ext.MessageBox.ERROR,
											fn : function(id, msg) {
											}
										});
							}
						})
			}else if (rec.data.shztm == 'WTG') {
				var xh = rec.data.xh;
				var shztm = 'DSH';
				var shzt = encodeURI(encodeURI("待审状态"));
				var shyj = encodeURI(encodeURI(""));
				var shr = encodeURI(encodeURI(""));
				var shrgh = encodeURI(encodeURI(""));
//				var shsj = encodeURI(encodeURI(""));
				Ext.Ajax.request({
							url : 'xwKtbgsqbUpdateZtm.action?xh=' + xh
									+ '&shztm=' + shztm + '&shzt=' + shzt
									+ '&shyj=' + shyj + '&shr=' + shr+ '&shrgh=' + shrgh,
							method : 'post',
							success : function(response, opts) {
								var result = Ext.decode(response.responseText);
								var success = result.result.success;
								if (success) {
									var msg = "撤回成功！";
									Ext.MessageBox.show({
												title : '提示',
												msg : msg,
												buttons : Ext.MessageBox.OK,
												icon : Ext.MessageBox.INFO,
												fn : function(id, msg) {
													Ext.StoreMgr
															.lookup('XwKtbgsqbStore')
															.load();
												}
											});
											var viewXwKtbgsqLists = Ext.ComponentQuery.query('#viewXwKtbgsqList');
										if (viewXwKtbgsqLists.length > 0) {
											var viewXwKtbgsqList = viewXwKtbgsqLists[0];
											var store = viewXwKtbgsqList.getStore();
											store.load();
										}
								}
							},
							failure : function(form, action) {
								var errmsg = "撤回失败！";
								Ext.MessageBox.show({
											title : '错误',
											msg : errmsg,
											buttons : Ext.MessageBox.OK,
											icon : Ext.MessageBox.ERROR,
											fn : function(id, msg) {
											}
										});
							}
						})
			}
		}
	},
	
	detail : function(o, e, eOpts) {
		var rec = getSelRec(o.up('gridpanel'));
		if (rec != undefined) {
			var win = new Ext.Window({
						itemId : 'viewXwKtbgsqWin',
						iconCls : 'detail_16',
						autoShow : true,
						title : '详情',
						layout : 'fit',
						x : 300,
						y : 3,
						width : 850,
						height : 650,
						closeAction : 'destroy',
						resizable : false,
						shadow : true,
						modal : true,
						constrain :true,  
						closable : true,
						animCollapse : true,
						autoShow : true,
						items : [Ext.create('App.view.ktbg.ViewXwKtbgsqForm')]
					});
			var viewXwKtbgsqForm = win.down('form');
				viewXwKtbgsqForm.loadForm(rec)
			var rq = rec.data.jhktrq;
			var year = rq.substring(0, 4);
			var month = rq.substring(4, 6);
			var day = rq.substring(6, 8);
				jhktrq = year + "-" + month + "-" + day;
				viewXwKtbgsqForm.down('#jhktrq').setValue(jhktrq);
			if (rec.data.shsj) {
				var shsj = rec.data.shsj;
				var yearsj = shsj.substring(0, 10);
				var monthsj = shsj.substring(11, 19);
				shsj = yearsj + " " + monthsj;
				viewXwKtbgsqForm.down('#shsj').setValue(shsj);
			}
			var textfields = viewXwKtbgsqForm.query('textfield');
			for (var i in textfields) {
				textfields[i].setReadOnly(true);
				var style = "background:none; border:0px";
				textfields[i].setFieldStyle(style);
			}
		}
	},
	
	editClass : function(o, e, eOpts) {
		var rec = getSelRec(o.up('gridpanel'));
		if (rec.data.shztm == 'TG') {
			Ext.MessageBox.alert('提示', '审查通过，不能再次审核操作！');
		} else if (rec.data.shztm == 'CG') {
			Ext.MessageBox.alert('提示', '草稿状态,不能进行审核操作！');
		} else if (rec.data.shztm == 'WTG') {
			Ext.MessageBox.alert('提示', '审核未通过,不能进行审核操作！');
		} else if (rec != undefined) {
			var win = new Ext.Window({
						itemId : 'viewXwKtbgsqshWin',
						iconCls : 'detail_16',
						autoShow : true,
						title : '审核申请信息',
						layout : 'fit',
						x : 300,
						y : 3,
						width : 850,
						height : 650,
						closeAction : 'destroy',
						resizable : false,
						shadow : true,
						modal : true,
						closable : true,
							constrain :true,  
						animCollapse : true,
						autoShow : true,
						items : [Ext.create('App.view.ktbg.ViewXwKtbgsqshForm')]
					});
			var viewXwKtbgsqshForm = win.down('form');
			viewXwKtbgsqshForm.loadForm(rec)
			var shzts = '审核通过';
			var rq = rec.data.jhktrq;
			var year = rq.substring(0, 4);
			var month = rq.substring(4, 6);
			var day = rq.substring(6, 8);
			jhktrq = year + "-" + month + "-" + day;
			//	        var  sj = rec.data.shsj;
			// 	      	var yearsj = sj.substring(0,10);
			// 	      	var monthsj = sj.substring(11,19);
			// 	      	shsj = yearsj+ " " +monthsj;
			var shsj = Ext.Date.format(new Date(), 'Y-m-d H:i:s');
			viewXwKtbgsqshForm.down('#shsj').setValue(shsj);
			viewXwKtbgsqshForm.down('#jhktrq').setValue(jhktrq);
			viewXwKtbgsqshForm.down('#shzt').setValue(shzts);
			viewXwKtbgsqshForm.down('#shr').setValue(userCName);
			viewXwKtbgsqshForm.down('#shrgh').setValue(userName);
			var me = this;
			var textfields = viewXwKtbgsqshForm.query('textfield');
			for (var i in textfields) {
				if (textfields[i].itemId == 'lwtm'
						|| textfields[i].itemId == 'lwjj'
						|| textfields[i].itemId == 'shr'
						|| textfields[i].itemId == 'xh'
						|| textfields[i].itemId == 'xm'
						|| textfields[i].itemId == 'nj'
						|| textfields[i].itemId == 'fymc'
						|| textfields[i].itemId == 'zymc'
						|| textfields[i].itemId == 'xwlb'
						|| textfields[i].itemId == 'pycc'
						|| textfields[i].itemId == 'xslx'
						|| textfields[i].itemId == 'dsh'
						|| textfields[i].itemId == 'shrgh'
						|| textfields[i].itemId == 'dsxm') {
					textfields[i].setReadOnly(true);
					var style = "background:none; border:0px";
					textfields[i].setFieldStyle(style);
				}
			}
		}
	},
	
	editClasssj : function(o, e, eOpts) {
		var rec = getSelRec(o.up('gridpanel'));
		if (rec.data.shzt == '审核通过') {
			Ext.MessageBox.alert('提示', '审查通过，不能进行修改操作！');
		} else if (rec.data.shzt == '草稿状态') {
			Ext.MessageBox.alert('提示', '草稿状态，申请未提交，不能进行修改操作！');
		} else if (rec != undefined) {
			var win = new Ext.Window({
						itemId : 'viewXwKtbgsqshsjWin',
						iconCls : 'detail_16',
						autoShow : true,
						title : '修改申请信息',
						layout : 'fit',
						x : 300,
						y : 150,
						width : 850,
						height : 450,
						closeAction : 'destroy',
						resizable : false,
						shadow : true,
						modal : true,
						closable : true,
constrain :true,  
						animCollapse : true,
						autoShow : true,
						items : [Ext
								.create('App.view.ktbg.ViewXwKtbgsqshsjForm')]
					});
			var viewXwKtbgsqshsjForm = win.down('form');
			viewXwKtbgsqshsjForm.loadForm(rec)
			//        	alert(rec.data.jhktrq)
			
			var rq = rec.data.jhktrq;
			if(rq != null){
			var year = rq.substring(0, 4);
			var month = rq.substring(4, 6);
			var day = rq.substring(6, 8);
			jhktrq = year + "-" + month + "-" + day;

			viewXwKtbgsqshsjForm.down('#jhktrq').setValue(jhktrq);
			}
		}
	},
	//  editClass:function(o, e, eOpts){
	//				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
	//				if(recs.length == 0) {
	//					Ext.MessageBox.alert('提示', '请选择要进行操作的记录！');
	//				}else if(recs.length > 1){
	//					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
	//				}else if(recs.length == 1){
	//					var me = this;
	////					var viewXwKtbgsqList = o.up('#viewXwKtbgsqList')
	//					var application = me.getApplication();
	//	        		var controller = application.getController('App.controller.ktbg.EditViewXwKtbgsqController');
	//			  	    controller.onLaunch(o/*,viewXwKtbgsqList*/);
	//				}
	//	},
	
	refreshClass : function(o, e, eOpts) {
		var viewXwKtbgsqLists = Ext.ComponentQuery.query('#viewXwKtbgsqList');
		if (viewXwKtbgsqLists.length > 0) {
			var viewXwKtbgsqList = viewXwKtbgsqLists[0];
			var store = viewXwKtbgsqList.getStore();
			store.load();
		}
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
		var pGrid = tab.down('#viewXwKtbgsqList'), store = me
				.getStore('ViewXwKtbgsqStore');
		for (var col in pGrid.exportCols) {
			searchParams.fieldNames.push(col);
		}

		var tFields = searchForm.query('textfield(true)');
		for (var i in tFields) {
			if (tFields[i].value && tFields[i].hidden == false)
				searchParams.search[tFields[i].name] = "#like '%"
						+ Ext.String.trim(tFields[i].value) + "%'";
		}
		//		searchParams.search['shztm'] = "#in (" + "\'TG\'" +',' +  "\'DSH\'" + ")";
		var njValue = searchForm.down('#sznj').getRawValue();
		if (njValue)
			searchParams.search['nj'] = "#= '" + njValue + "'";

		 var fymcValue = searchForm.down('#fymc').getRawValue();
		if (fymcValue)
		      searchParams.search['fymc'] = "#= '" + fymcValue+ "'"; 
		      
		 var zymcValue = searchForm.down('#zymc').getValue();
		if (zymcValue)
		      searchParams.search['zydm'] = "#= '" + zymcValue+ "'";

		var xslxValue = searchForm.down('#xslx').getRawValue();
		if (xslxValue)
			searchParams.search['xslx'] = "#= '" + xslxValue + "'";
			
		var shztValue = searchForm.down('#shzt').getRawValue();
		if (shztValue)
	 		searchParams.search['shzt'] = "#= '" + shztValue+ "'";
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
		var pGrid = tab.down('#viewXwKtbgsqList');
		searchForm.getForm().reset();

//		var store = pGrid.getStore(), proxy = store.getProxy();
//		proxy.setExtraParam('params', '');
//		store.load();
		var store = me.getStore('ViewXwKtbgsqStore', {});
		var searchParams = {
			start : 0,
			limit : 15,
			page : 1,
			searchMode : 'simple',
			fieldNames : [],
			order : '',
			search : {}
		};
		searchParams.search['shztm'] = "#in (" + "\'TG\'" + ',' + "\'DSH\'"
				+ ")";
		searchParams.search['yxsh'] = "#= '" + szdwh + "'";
		proxy = store.getProxy();
		proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		store.load();
	}

});
