Ext.define('App.controller.kyzz.ViewXwKyzzbController', {
	extend : 'Ext.app.Controller',

	models : ['kyzz.ViewXwKyzzbModel', 'xs.XsJcxxbModel','kyzz.XwKyzzbModel','kyzz.XwKyzzzlbModel'],
	stores : ['zd.ZdFwqbStore','kyzz.ViewXwKyzzbStore','zd.ZdSztmStore','xs.XsJcxxbStore','kyzz.XwKyzzbStore','kyzz.XwKyzzzlbStore'],

	refs : [{
				selector : 'viewXwKyzzbSearchForm',
				ref : 'viewXwKyzzbSearchForm'
			}],

	init : function() {
		this.control({
					'#viewXwKyzzbList' : {
						itemdblclick : this.itemDblClick
					},
					'#viewXwKyzzbList gridtoolbar combo[itemId=numCmb]' : {
						render : this.initPageSize,
						select : this.setPageSize
					},
					'#viewXwKyzzbList gridtoolbar button[action=detail]' : {
						click : this.detail
					},
					'#viewXwKyzzbList  button[action=add]' : {
						click : this.Add
					},
					'#viewXwKyzzbList  button[action=tjedit]' : {
						click : this.tjedit
					},
					'#viewXwKyzzbList  button[action=tjchedit]' : {
						click : this.tjchedit
					},
					'#xwLwkyzzzlbList  button[action=zlUpload]' : {
						click : this.zlUpload
					},
					'#viewXwKyzzbList button[action=delete]' : {
						click : this.del
					},
					'#viewXwKyzzbList gridtoolbar button[action=editsj]' : {
						click : this.editClass
					},
					'#viewXwKyzzbList gridtoolbar button[action=delete]' : {
						click : this.deletexx
					},
					 '#viewXwKyzzbList gridtoolbar button[action=searchXh]': {
					 click : this.searchXh
					 },
					'#viewXwKyzzbList gridtoolbar button[itemId=schShowBtn]' : {
						render : this.setSchShowText
					},

					'#viewXwKyzzbList gridtoolbar button[action=showSearch]' : {
						click : this.showSearch
					},

					'#searchForm button[action=search]' : {
						click : this.search
					},
					'#searchForm button[action=searchAll]' : {
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
		var store = me.getStore('ViewXwKyzzbStore', {});
		var searchParams = {
			start : 0,
			limit : 15,
			page : 1,
			searchMode : 'simple',
			fieldNames : [],
			order : '',
			search : {}
		};
		// searchParams.search['shztm'] = "#in (" + "\'TG\'" + ',' + "\'DSH\'"
		// + ")";
		// searchParams.search['yxsh'] = "#= '" + szdwh + "'";
		// alert(Ext.JSON.encode(searchParams))
		proxy = store.getProxy();
		proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		store.load();
	},

	excelBtnRender : function(o, e, eOpts) {
		o.actionUrl = 'viewXwKyzzbtoExcel.action'
	},

	onLaunch : function(record) {
		var me = this;
		var center = me.getCenter();
		var tab = center.down('#M' + record.get('parentId'));
		var removePanel = tab.down('#content');
		tab.remove(removePanel);
		var contentPanel = Ext.create(
				'App.view.kyzz.ViewXwKyzzbContentPanel', {
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
		pGrid.store.load({
					callback : function() {
						var toolbar = pGrid.down('#toolbar');
						toolbar.moveFirst()
					}
				});
	},

	itemDblClick : function(o, record, item, index, e, eOpts) {
		var me = this;
		me.detail(o, e, eOpts);
	},
	
	/*withdrawKkjh : function(o, e, eOpts) {
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
				var shyj = encodeURI(encodeURI(""));
				var shr = encodeURI(encodeURI(""));
				Ext.Ajax.request({
							url : 'xwKtbgsqbUpdateZtm.action?xh=' + xh
									+ '&shztm=' + shztm + '&shzt=' + shzt
									+ '&shyj=' + shyj + '&shr=' + shr,
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
	},*/

	/*detail : function(o, e, eOpts) {
		var rec = getSelRec(o.up('gridpanel'));
		if(rec == undefined){Ext.MessageBox.alert('提示', '请选择一条数据记录！');}
		else if (rec != undefined) {
			var win = new Ext.Window({
						itemId : 'viewXwKyzzbWin',
						iconCls : 'detail_16',
						autoShow : true,
						title : '详情',
						autoScroll : true,
						layout : 'auto',
						x : 300,
						y : 3,
						width : 950,
						height : 550,
						constrainHeader : true,
						closeAction : 'destroy',
						resizable : false,
						shadow : true,
						modal : true,
						closable : true,
						animCollapse : true,
						autoShow : true,
						items : [Ext.create('App.view.kyzz.ViewXwKyzzbForm')]
					});
			var viewXwKyzzbshForm = win.down('#viewXwKyzzbForm');
			viewXwKyzzbshForm.loadForm(rec)
			 var sj = rec.data.lrsj;
			 var yearsj = sj.substring(0,10);
			 var monthsj = sj.substring(11,19);
			 lrsj = yearsj+ " " +monthsj;
			viewXwKyzzbshForm.down('#lrsj').setValue(lrsj);
			
		}
		var textfields = viewXwKyzzbshForm.query('textfield');
				 for(var i in textfields) 
				 	{ 
							textfields[i].setReadOnly(true); 
							var style ="background:none; border:0px";
							  textfields[i].setFieldStyle(style);
							}
		var me = this;
		var xh = rec.data.xh
		var xwKtbgzlbStore = me.getStore('XwLwkyzzzlbStore');
		var xwKtbgzlbProxy = xwKtbgzlbStore.getProxy();
		var searchParams = {
			searchMode : 'simple',
			search : {}
		};
		searchParams.search['xh'] = "#= '" + xh + "'";
		// alert(xh)
		xwKtbgzlbProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		xwKtbgzlbStore.load({
					callback : function(records, operation, success) {
						var tab = me.getCenter().getActiveTab();
						var viewXwLwsszlzbshForm = tab
								.down('#viewXwKyzzbForm');
						if (records[0] != undefined
								&& viewXwLwsszlzbshForm != null)
							viewXwLwsszlzbshForm.loadForm(records[0]);
					}
				})
	},*/


	Add:function(o, e, eOpts){
					var me = this;
					var skxxList = o.up('#viewXwKyzzbList')
					var application = me.getApplication();
	        		var controller = application.getController('App.controller.kyzz.ArrangeTecController');
			  	    controller.onLaunch(o,skxxList);
			},
     searchXh:function(o, e, eOpts){
					var me = this;
					var skxxList = o.up('#viewXwKyzzbList')
					var application = me.getApplication();
	        		var controller = application.getController('App.controller.xs.XsJcxxbController');
			  	    controller.onLaunch(o,skxxList);
			},
	editClass : function(o, e, eOpts){
					var me = this;
					var rec = getSelRec(o.up('gridpanel'));
					var kyuuid =rec.data.kyuuid;
					// alert(rec.data.ztm)
					if(rec == undefined){
					Ext.MessageBox.alert('提示', '请选择一条数据记录！');
					}else if (rec.data.ztm == '2'||rec.data.ztm == '4') {
						Ext.MessageBox.alert('提示', '已审核，无法再次操作！');
					}else if (rec.data.ztm == '3'||rec.data.ztm == '5') {
						Ext.MessageBox.alert('提示', '审核未通过，无法再次操作！');
					} else if (rec.data.ztm == '1') {
					var skxxList = o.up('#viewXwKyzzbList')
					var application = me.getApplication();
	        		var controller = application.getController('App.controller.kyzz.ArrangeTeczzController');
			  	    controller.onLaunch(o,skxxList,kyuuid);
					}
			},
detail : function(o, e, eOpts){
					var me = this;
					var rec = getSelRec(o.up('gridpanel'));
					var kyuuid =rec.data.kyuuid;
					// alert(rec.data.ztm)
					if(rec == undefined){
					Ext.MessageBox.alert('提示', '请选择一条数据记录！');}
					else if(rec != undefined){
					var skxxList = o.up('#viewXwKyzzbList')
					var application = me.getApplication();
	        		var controller = application.getController('App.controller.kyzz.ArrangeTeczzxqController');
			  	    controller.onLaunch(o,skxxList,kyuuid);
					}
			},

	tjedit : function(o, e, eOpts) {
		var rec = getSelRec(o.up('gridpanel'));
		// alert(rec.data.ztm)
		if(rec == undefined){
		Ext.MessageBox.alert('提示', '请选择一条数据记录！');
		}else if (rec.data.ztm == '1') {
			Ext.MessageBox.alert('提示', '提交状态，无法撤回！');
		}else if (rec.data.ztm == '4'||rec.data.ztm == '5') {
			Ext.MessageBox.alert('提示', '不在权限范围内，无法撤回！');
		} else if (rec.data.ztm == '2'||rec.data.ztm == '3') {
			var kyuuid = rec.get('kyuuid');
			var xh = rec.get('xh');
			var ztm = "1";
			var zt = "已提交";
			var shrgh = "";
			var shr = "";
			var shsj = "";
			var shyj = "";
			var shjgm = "";
			var shjg = "";
			Ext.Ajax.request({
						url : 'xwKyzzbchangeFlowFlag.action',
						method : 'get',
						params : {
							xh : xh,
							kyuuid : kyuuid,
							ztm : ztm,
							zt : zt,
							shrgh : shrgh,
							shr : shr,
							shsj : shsj,
							shyj : shyj,
							shjgm : shjgm,
							shjg : shjg
						},
						success : function(response) {
							var responseMessage = Ext.JSON
									.decode(response.responseText);
							Ext.MessageBox.alert('提示', '撤回成功！');
							var viewXwKyzzbLists = Ext.ComponentQuery
									.query('#viewXwKyzzbList');
							if (viewXwKyzzbLists.length > 0) {
								var viewXwKyzzbList = viewXwKyzzbLists[0];
								var store = viewXwKyzzbList.getStore();
								store.load();
							}
						},
						failure : function(response) {
						}
					});
		}

		// }
	},
	tjchedit : function(o, e, eOpts) {
		var rec = getSelRec(o.up('gridpanel'));
		// alert(rec.data.ztm)
		if(rec == undefined){
			Ext.MessageBox.alert('提示', '请选择一条数据记录！');
		}else if (rec.data.ztm == '0') {
			Ext.MessageBox.alert('提示', '未提交，无法操作！');
		} else if (rec.data.ztm == '1') {
			var xh = rec.get('xh');
			var ztm = "0";
			var zt = "未提交"
			Ext.Ajax.request({
						url : 'xwDbjlbchangeFlowFlag.action',
						method : 'get',
						params : {
							xh : xh,
							ztm : ztm,
							zt : zt
						},
						success : function(response) {
							var responseMessage = Ext.JSON
									.decode(response.responseText);
							Ext.MessageBox.alert('提示', '撤销成功！');
							var viewXwKyzzbLists = Ext.ComponentQuery
									.query('#viewXwKyzzbList');
							if (viewXwKyzzbLists.length > 0) {
								var viewXwKyzzbList = viewXwKyzzbLists[0];
								var store = viewXwKyzzbList.getStore();
								store.load();
							}
						},
						failure : function(response) {
						}
					});
		}
	},
del : function(o) {
//		var me = this;
//		var rec = getSelRec(o.up('gridpanel'));
		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
		if (recs.length == 0) {
								Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
							}else if(recs == undefined){
									Ext.MessageBox.alert('提示', '请选择一条数据记录！');
								}else {
								Ext.MessageBox.confirm("确认",  "确定删除？",
										function(btn){
											if(btn == 'yes'){
												var ids = getSelIds(o.up('gridpanel'),'id');
												Ext.Ajax.request({
													url:'xwDbjlbDel.action?ids=' + ids,
								 		 			method:'get',
								 		 			success : function(response, opts) {
														var result = Ext.decode(response.responseText);
														var success = result.result.success;
														alert(success)
														if(success){
//															 me.getStore('XwDbmsbStore').load();
															o.up('gridpanel').getStore().load();
														}
								 		 			}
												})
											}
									})
								}

	},
//del : function(o, e, eOpts) {
//				var me = this;
//
//				var action = "xwDbmsbDel.action";
//				var ids = getSelIds(o.up('gridpanel'), 'id');
//				if (ids.length == 0)
//					return;
//				var store = me.getStore('XwDbmsbStore');
//				DoDelete(action, 'id', ids, store);
//			},

	refreshClass : function(o, e, eOpts) {
		var viewXwKyzzbLists = Ext.ComponentQuery
				.query('#viewXwKyzzbList');
		if (viewXwKyzzbLists.length > 0) {
			var viewXwKyzzbList = viewXwKyzzbLists[0];
			var store = viewXwKyzzbList.getStore();
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
		var pGrid = tab.down('#viewXwKyzzbList'), store = me
				.getStore('ViewXwKyzzbStore');
		for (var col in pGrid.exportCols) {
			searchParams.fieldNames.push(col);
		}

		var tFields = searchForm.query('textfield(true)');
		for (var i in tFields) {
			if (tFields[i].value && tFields[i].hidden == false)
				searchParams.search[tFields[i].name] = "#like '%"
						+ Ext.String.trim(tFields[i].value) + "%'";
		}
 var fymcValue = searchForm.down('#fymc').getValue();
		if (fymcValue)
		      searchParams.search['fyh'] = "#= '" + fymcValue+ "'"; 
		      
		 var zymcValue = searchForm.down('#zymc').getRawValue();
		if (zymcValue)
		      searchParams.search['zymc'] = "#= '" + zymcValue+ "'";
		       
		var xslxValue = searchForm.down('#xslx').getRawValue();
		if (xslxValue)
	 		searchParams.search['xslx'] = "#= '" + xslxValue+ "'";
	 	
	 		var shztValue = searchForm.down('#zt').getRawValue();
//	 		alert(shztValue)
		if (shztValue)
	 		searchParams.search['zt'] = "#= '" + shztValue+ "'";
		//			
//		var shztValue = searchForm.down('#shzt').getRawValue();
//		if (shztValue)
//			searchParams.search['shzt'] = "#= '" + shztValue + "'";
//		var proxy = store.getProxy();
		proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
//		store.load({
//					callback : function() {
//						var toolbar = pGrid.down('#toolbar');
//						toolbar.moveFirst()
//					}
//				});
		store.load();
	},

	searchAll : function(o, e, eOpts) {
		var me = this;
		var tab = me.getCenter().getActiveTab();

		var searchForm = tab.down('#searchForm');
		var pGrid = tab.down('#viewXwKyzzbList');
		searchForm.getForm().reset();

		// var store = pGrid.getStore(), proxy = store.getProxy();
		// proxy.setExtraParam('params', '');
		// store.load();
		var store = me.getStore('ViewXwKyzzbStore', {});
		var searchParams = {
			start : 0,
			limit : 15,
			page : 1,
			searchMode : 'simple',
			fieldNames : [],
			order : '',
			search : {}
		};
		// searchParams.search['shztm'] = "#in (" + "\'TG\'" + ',' + "\'DSH\'"
		// + ")";
		// searchParams.search['yxsh'] = "#= '" + szdwh + "'";
		proxy = store.getProxy();
		proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		store.load();
	}

});
