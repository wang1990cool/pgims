Ext.define('App.controller.kttjsh.ViewXwKtbgzlzbController', {
	extend : 'Ext.app.Controller',

	models : ['kttjsh.ViewXwKtbgzlzbModel', 'kttjsh.XwKtbgzbModel',
			'kttjsh.XwKtbgzlbModel'],
	stores : ['kttjsh.XwKtbgzbStore', 'kttjsh.XwKtbgzlbStore',
			'kttjsh.ViewXwKtbgzlzbStore','zd.ZdFwqbStore'],// ,'kt.XwKtbgsqbStore'

	refs : [{
				selector : 'viewXwKtbgzlzbSearchForm',
				ref : 'viewXwKtbgzlzbSearchForm'
			}],

	init : function() {
		this.control({

					'#viewXwKtbgzlzbSeachList' : {
						itemdblclick : this.itemDblClick
					},

					'#viewXwKtbgzlzbSeachList gridtoolbar combo[itemId=numCmb]' : {
						render : this.initPageSize,
						select : this.setPageSize
					},
					'#viewXwKtbgzlzbSeachList gridtoolbar button[action=detail]' : {
						click : this.detail
					},
					'#viewXwKtbgzlzbSeachList gridtoolbar button[action=edit]' : {
						click : this.editClass
					},
					'viewXwKtbgzlzbList gridtoolbar button[action=editsj]' : {
						click : this.editClasssj
					},
					'#viewXwKtbgzlzbSeachList gridtoolbar button[action=withdraw]' : {
						click : this.withdrawKkjh
					},
					'viewXwKtbgzlzbList gridtoolbar button[action=refresh]' : {
						click : this.refreshClass
					},
					'viewXwKtbgzlzbList gridtoolbar button[action=toExcel]' : {
						render : this.excelBtnRender
					},
					'#viewXwKtbgzlzbSeachList gridtoolbar button[itemId=schShowBtn]' : {
						render : this.setSchShowText
					},

					'#viewXwKtbgzlzbSeachList gridtoolbar button[action=showSearch]' : {
						click : this.showSearch
					},

					'#searchFormzl button[action=search]' : {
						click : this.search
					},
					'#searchFormzl button[action=searchAll]' : {
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
		var searchForm = me.getCenter().down('#searchFormzl');
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
		var searchForm = tab.down('#searchFormzl');
		if (searchForm)
			if (searchForm.hidden) {// hidden
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
		var store = me.getStore('ViewXwKtbgzlzbStore', {});
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
		// alert(Ext.JSON.encode(searchParams))
		proxy = store.getProxy();
		proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		store.load();
	},
	/*
	 * excelBtnRender: function(o, e, eOpts){ o.actionUrl =
	 * 'viewXwKtbgsqtoExcel.action' },
	 */

	onLaunch : function(record) {
		var me = this;
		var center = me.getCenter();
		var tab = center.down('#M' + record.get('parentId'));

		var removePanel = tab.down('#content');
		tab.remove(removePanel);
		var contentPanel = Ext.create(
				'App.view.kttjsh.ViewXwKtbgzlzbContentPanel', {
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
		// if(!isSuperRight){
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
				var dsshyj = encodeURI(encodeURI(""));
//				var shr = encodeURI(encodeURI(""));
				Ext.Ajax.request({
							url : 'xwKtbgzbUpdateZtm.action?xh=' + xh
									+ '&shztm=' + shztm + '&shzt=' + shzt
									+ '&dsshyj=' + dsshyj,
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
//													Ext.StoreMgr
//															.lookup('ViewXwKtbgzlzbStore')
//															.load();
												}
											});
											var viewXwKtbgsqLists = Ext.ComponentQuery.query('#viewXwKtbgzlzbSeachList');
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
				var dsshyj = encodeURI(encodeURI(""));
//				var shr = encodeURI(encodeURI(""));
				Ext.Ajax.request({
							url : 'xwKtbgzbUpdateZtm.action?xh=' + xh
									+ '&shztm=' + shztm + '&shzt=' + shzt
									+ '&dsshyj=' + dsshyj,
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
//													Ext.StoreMgr
//															.lookup('ViewXwKtbgzlzbStore')
//															.load();
												}
											});
											var viewXwKtbgsqLists = Ext.ComponentQuery.query('#viewXwKtbgzlzbSeachList');
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
						itemId : 'viewXwKtbgzlzbWin',
						iconCls : 'detail_16',
						autoShow : true,
						title : '详情',
						layout : 'fit',
						x : 300,
						y : 3,
						width : 850,
						height : 550,
						closeAction : 'destroy',
						resizable : false,
						shadow : true,
						modal : true,
						closable : true,
constrain :true,  
						animCollapse : true,
						autoShow : true,
						items : [Ext
								.create('App.view.kttjsh.ViewXwKtbgzlzbForm')]
					});
			var viewXwKtbgzlzbForm = win.down('form');
			viewXwKtbgzlzbForm.loadForm(rec)
			var rq = rec.data.ktrq;
			var year = rq.substring(0, 4);
			var month = rq.substring(4, 6);
			var day = rq.substring(6, 8);
			ktrq = year + "-" + month + "-" + day;
			viewXwKtbgzlzbForm.down('#ktrq').setValue(ktrq);
			if (rec.data.dsshsj) {
				var dsshsj = rec.data.dsshsj;
				var yearsj = dsshsj.substring(0, 10);
				var monthsj = dsshsj.substring(11, 19);
				dsshsj = yearsj + " " + monthsj;
				viewXwKtbgzlzbForm.down('#dsshsj').setValue(dsshsj);
			}
			var textfields = viewXwKtbgzlzbForm.query('textfield');
			for (var i in textfields) {
				textfields[i].setReadOnly(true);
				var style = "background:none; border:0px";
				textfields[i].setFieldStyle(style);
			}
		}
		var me = this;
		var xh = rec.data.xh
		var xwKtbgzlbStore = me.getStore('XwKtbgzlbStore');
		var xwKtbgzlbProxy = xwKtbgzlbStore.getProxy();
		var searchParams = {
			searchMode : 'simple',
			search : {}
		};
		searchParams.search['xh'] = "#= '" + xh + "'";
		xwKtbgzlbProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		xwKtbgzlbStore.load({
			callback : function(records, operation, success) {
				var tab = me.getCenter().getActiveTab();
				var viewXwKtbgzlzbForm = tab.down('#viewXwKtbgzlzbForm');
				if (records[0] != undefined && viewXwKtbgzlzbForm != null )
					viewXwKtbgzlzbForm.loadForm(records[0]);
			}
		})
	},

	editClass : function(o, e, eOpts) {
		var rec = getSelRec(o.up('gridpanel'));
		// alert(rec.data.xh)
		if (rec.data.shzt == '审核通过') {
			Ext.MessageBox.alert('提示', '审查通过，不能再次审核操作！');
		} else if (rec.data.shzt == '草稿状态') {
			Ext.MessageBox.alert('提示', '草稿状态，申请未提交，不能进行审核操作！');
		} else if (rec != undefined) {
			var win = new Ext.Window({
						itemId : 'viewXwKtbgzlzbshWin',
						iconCls : 'detail_16',
						autoShow : true,
						title : '审核报告信息',
						layout : 'fit',
						x : 300,
						y : 3,
						width : 850,
						height : 550,
						closeAction : 'destroy',
						resizable : false,
						shadow : true,
						modal : true,
constrain :true,  
						closable : true,
						animCollapse : true,
						autoShow : true,
						items : [Ext
								.create('App.view.kttjsh.ViewXwKtbgzlzbshForm')]
					});
			var viewXwKtbgzlzbshForm = win.down('form');
			viewXwKtbgzlzbshForm.loadForm(rec)
			var shzts = '审核通过';
			var rq = rec.data.ktrq;
			var year = rq.substring(0, 4);
			var month = rq.substring(4, 6);
			var day = rq.substring(6, 8);
			ktrq = year + "-" + month + "-" + day;
			dsshsj = Ext.Date.format(new Date(), 'Y-m-d H:i:s');
			viewXwKtbgzlzbshForm.down('#dsshsj').setValue(dsshsj);
			viewXwKtbgzlzbshForm.down('#ktrq').setValue(ktrq);
			viewXwKtbgzlzbshForm.down('#shzt').setValue(shzts);

			var textfields = viewXwKtbgzlzbshForm.query('textfield');
			for (var i in textfields) {
				if (textfields[i].itemId == 'xh'
						|| textfields[i].itemId == 'xm'
						|| textfields[i].itemId == 'xn'
						|| textfields[i].itemId == 'xq'
						|| textfields[i].itemId == 'lwtm'
						|| textfields[i].itemId == 'ktly'
						|| textfields[i].itemId == 'ktmc'
						|| textfields[i].itemId == 'ktfzr'
						|| textfields[i].itemId == 'lwlx'
						|| /* textfields[i].itemId == 'ktrq' || */
						/* textfields[i].itemId == 'ktdd'|| *//*textfields[i].itemId == 'pszzz'
						||*/ textfields[i].itemId == 'dsshsj') {
					textfields[i].setReadOnly(true);
					var style = "background:none; border:0px";
					textfields[i].setFieldStyle(style);
				}
			}
		}
		var me = this;
		var xh = rec.data.xh
		var xwKtbgzlbStore = me.getStore('XwKtbgzlbStore');
		var xwKtbgzlbProxy = xwKtbgzlbStore.getProxy();
		var searchParams = {
			searchMode : 'simple',
			search : {}
		};
		searchParams.search['xh'] = "#= '" + xh + "'";
		xwKtbgzlbProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		xwKtbgzlbStore.load({
			callback : function(records, operation, success) {
				var tab = me.getCenter().getActiveTab();
				var viewXwKtbgzlzbshForm = tab.down('#viewXwKtbgzlzbshForm');
				if (records[0] != undefined && viewXwKtbgzlzbshForm != null )
					viewXwKtbgzlzbshForm.loadForm(records[0]);
			}
		})
	},

	editClasssj : function(o, e, eOpts) {
		var rec = getSelRec(o.up('gridpanel'));
		if (rec.data.shzt == '审核通过') {
			Ext.MessageBox.alert('提示', '审查通过，不能进行修改操作！');
		} else if (rec.data.shzt == '草稿状态') {
			Ext.MessageBox.alert('提示', '草稿状态，申请未提交，不能进行修改操作！');
		} else if (rec != undefined) {
			var win = new Ext.Window({
						itemId : 'viewXwKtbgzlzbshsjWin',
						iconCls : 'detail_16',
						autoShow : true,
						title : '修改报告信息',
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
								.create('App.view.kttjsh.ViewXwKtbgzlzbshsjForm')]
					});
			var viewXwKtbgzlzbshsjForm = win.down('form');
			viewXwKtbgzlzbshsjForm.loadForm(rec)
			// alert(rec.data.jhktrq)
			var rq = rec.data.ktrq;
			var year = rq.substring(0, 4);
			var month = rq.substring(4, 6);
			var day = rq.substring(6, 8);
			ktrq = year + "-" + month + "-" + day;

			viewXwKtbgzlzbshsjForm.down('#ktrq').setValue(ktrq);
		}
	},
	// editClass:function(o, e, eOpts){
	// var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
	// if(recs.length == 0) {
	// Ext.MessageBox.alert('提示', '请选择要进行操作的记录！');
	// }else if(recs.length > 1){
	// Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
	// }else if(recs.length == 1){
	// var me = this;
	// // var viewXwKtbgsqList = o.up('#viewXwKtbgsqList')
	// var application = me.getApplication();
	// var controller =
	// application.getController('App.controller.ktbg.EditViewXwKtbgsqController');
	// controller.onLaunch(o/*,viewXwKtbgsqList*/);
	// }
	// },

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
		var searchForm = tab.down('#searchFormzl');
		var searchParams = {
			start : 0,
			limit : 15,
			page : 1,
			searchMode : 'simple',
			fieldNames : [],
			order : '',
			search : {}
		};
		var pGrid = tab.down('#viewXwKtbgzlzbSeachList'), store = me
				.getStore('ViewXwKtbgzlzbStore');
		for (var col in pGrid.exportCols) {
			searchParams.fieldNames.push(col);
		}

		var tFields = searchForm.query('textfield(true)');
		for (var i in tFields) {
			if (tFields[i].value && tFields[i].hidden == false)
				searchParams.search[tFields[i].name] = "#like '%"
						+ Ext.String.trim(tFields[i].value) + "%'";
		}
		// searchParams.search['shztm'] = "#in (" + "\'TG\'" +',' + "\'DSH\'" +
		// ")";
		var xnValue = searchForm.down('#xn').getRawValue();
		if (xnValue)
			searchParams.search['xn'] = "#= '" + njValue + "'";

		var fymcValue = searchForm.down('#xq').getRawValue();
		if (fymcValue)
			searchParams.search['xq'] = "#= '" + fymcValue + "'";

		var zymcValue = searchForm.down('#xh').getValue();
		if (zymcValue)
			searchParams.search['xh'] = "#= '" + zymcValue + "'";

		var xslxValue = searchForm.down('#xm').getRawValue();
		if (xslxValue)
			searchParams.search['xm'] = "#= '" + xslxValue + "'";

		var fymcValue = searchForm.down('#fymc').getRawValue();
		if (fymcValue)
			searchParams.search['fymc'] = "#= '" + fymcValue + "'";

		var zymcValue = searchForm.down('#zymc').getRawValue();
		if (zymcValue)
			searchParams.search['zymc'] = "#= '" + zymcValue + "'";

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
//
		var searchForm = tab.down('#searchFormzl');
		var pGrid = tab.down('#viewXwKtbgzlzbSeachList');
		searchForm.getForm().reset();
//		
//		var store = pGrid.getStore(), proxy = store.getProxy();
//		proxy.setExtraParam('params', '');
//		store.load();
		var store = me.getStore('ViewXwKtbgzlzbStore', {});
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
		// alert(Ext.JSON.encode(searchParams))
		proxy = store.getProxy();
		proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		store.load();
	}

});
