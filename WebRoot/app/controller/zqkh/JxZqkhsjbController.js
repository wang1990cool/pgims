Ext.define('App.controller.zqkh.JxZqkhsjbController', {
	extend : 'Ext.app.Controller',

	models : ['zqkh.JxZqkhsjbModel'
			],
	stores : ['zqkh.JxZqkhsjbStore'],//,'kt.XwKtbgsqbStore'

	refs : [{
				selector : 'jxZqkhsjbSearchForm',
				ref : 'jxZqkhsjbSearchForm'
			}],

	init : function() {
		this.control({
					'#jxZqkhsjbList' : {
						itemdblclick : this.itemDblClick
					},
					'#jxZqkhsjbList gridtoolbar combo[itemId=numCmb]' : {
						render : this.initPageSize,
						select : this.setPageSize
					},
					'#jxZqkhsjbList gridtoolbar button[action=detail]' : {
						click : this.detail
					},
					'#jxZqkhsjbList gridtoolbar button[action=Add]' : {
						click : this.Add
					},
					'#jxZqkhsjbList gridtoolbar button[action=del]' : {
						click : this.del
					},
					'#jxZqkhsjbList gridtoolbar button[action=editsj]' : {
						click : this.editClasssj
					},
					'#jxZqkhsjbList gridtoolbar button[itemId=schShowBtn]' : {
						render : this.setSchShowText
					},

					'#jxZqkhsjbList gridtoolbar button[action=showSearch]' : {
						click : this.showSearch
					},
					'#jxZqkhsjbList  button[action=tjedit]' : {
						click : this.tjedit
					},
					'#jxZqkhsjbList  button[action=tjchedit]' : {
						click : this.tjchedit
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
		var store = me.getStore('JxZqkhsjbStore', {});
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
		proxy.setExtraParam('params','');
		store.load();
	},
	
	excelBtnRender : function(o, e, eOpts) {
		o.actionUrl = 'jxZqkhsjbtoExcel.action'
	},

	onLaunch : function(record) {
		var me = this;
		var center = me.getCenter();
		var tab = center.down('#M' + record.get('parentId'));
		var removePanel = tab.down('#content');
		tab.remove(removePanel);
		var contentPanel = Ext.create('App.view.zqkh.JxZqkhsjbContentPanel',
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
	
del : function(o, e, eOpts) {
				var me = this;

				var action = "jxZqkhsjbDel.action";
				var ids = getSelIds(o.up('gridpanel'), 'id');
				if (ids.length == 0)
					return;
				var store = me.getStore('JxZqkhsjbStore');
				DoDelete(action, 'id', ids, store);
			},
	detail : function(o, e, eOpts) {
		var rec = getSelRec(o.up('gridpanel'));
		if (rec != undefined) {
			var win = new Ext.Window({
						itemId : 'jxZqkhsjbWin',
						iconCls : 'detail_16',
						autoShow : true,
						title : '详情',
						layout : 'fit',
						x : 300,
						y : 3,
						width : 850,
						height : 400,
						closeAction : 'destroy',
						resizable : false,
						shadow : true,
						modal : true,
						closable : true,
						animCollapse : true,
						autoShow : true,
						items : [Ext.create('App.view.zqkh.JxZqkhsjbForm')]
					});
			var jxZqkhsjbForm = win.down('form');
				jxZqkhsjbForm.loadForm(rec)
			var kssj = rec.data.kssj;
			var year = kssj.substring(0, 4);
			var month = kssj.substring(5, 7);
			var day = kssj.substring(8, 10);
			kssj = year + "-" + month + "-" + day;
			jxZqkhsjbForm.down('#kssj').setValue(kssj);
			var jssj = rec.data.jssj;
			var year = jssj.substring(0, 4);
			var month = jssj.substring(5, 7);
			var day = jssj.substring(8, 10);
			jssj = year + "-" + month + "-" + day;
			jxZqkhsjbForm.down('#jssj').setValue(jssj);
			var textfields = jxZqkhsjbForm.query('textfield');
			for (var i in textfields) {
				textfields[i].setReadOnly(true);
				var style = "background:none; border:0px";
				textfields[i].setFieldStyle(style);
			}
		}
	},
	
		Add : function(o, e, eOpts) {
			var me = this;
			var win = new Ext.Window({
						itemId : 'jxZqkhsjbshWin',
						iconCls : 'detail_16',
						autoShow : true,
						title : '添加控制时间信息',
						layout : 'fit',
						x : 300,
						y : 3,
						width : 850,
						height : 400,
						closeAction : 'destroy',
						resizable : false,
						shadow : true,
						modal : true,
						closable : true,
						animCollapse : true,
						autoShow : true,
						items : [Ext.create('App.view.zqkh.JxZqkhsjbshForm')]
					});
	},
	
	editClasssj : function(o, e, eOpts) {
		var rec = getSelRec(o.up('gridpanel'));
		if(rec == undefined){Ext.MessageBox.alert('提示', '请选择要进行操作的记录！');
		}else if (rec != undefined) {
			var win = new Ext.Window({
						itemId : 'jxZqkhsjbshsjWin',
						iconCls : 'detail_16',
						autoShow : true,
						title : '修改设置信息',
						layout : 'fit',
						x : 300,
						y : 3,
						width : 850,
						height : 400,
						closeAction : 'destroy',
						resizable : false,
						shadow : true,
						modal : true,
						closable : true,
						animCollapse : true,
						autoShow : true,
						items : [Ext
								.create('App.view.zqkh.JxZqkhsjbshsjForm')]
					});
			var jxZqkhsjbshsjForm = win.down('form');
			jxZqkhsjbshsjForm.loadForm(rec)
			var kssj = rec.data.kssj;
			var year = kssj.substring(0, 4);
			var month = kssj.substring(5, 7);
			var day = kssj.substring(8, 10);
			kssj = year + "-" + month + "-" + day;
			jxZqkhsjbshsjForm.down('#kssj').setValue(kssj);
			var jssj = rec.data.jssj;
			var year = jssj.substring(0, 4);
			var month = jssj.substring(5, 7);
			var day = jssj.substring(8, 10);
			jssj = year + "-" + month + "-" + day;
			jxZqkhsjbshsjForm.down('#jssj').setValue(jssj);
			jxZqkhsjbshsjForm.setViewForm();
		}
	},
	tjedit : function(o, e, eOpts) {
		var rec = getSelRec(o.up('gridpanel'));
		// alert(rec.data.ztm)
		if(rec == undefined){
		Ext.MessageBox.alert('提示', '请选择一条数据记录！');
		}else if (rec.data.xwbz == '1') {
			Ext.MessageBox.alert('提示', '已提交，无法再次操作！');
		} else if (rec.data.xwbz == '0') {
			var sznj = rec.get('sznj');
			var xn = rec.get('xn');
			var xq = rec.get('xq');
			var fyh = rec.get('fyh');
			var zydm = rec.get('zydm');
			var xslxm = rec.get('xslxm');
			var xwbz = "1";
//			var zt = "已提交"
			Ext.Ajax.request({
						url : 'jxZqkhsjbchangeFlowFlag.action',
						method : 'get',
						params : {
							sznj : sznj,
							xn : xn,
							xq : xq,
							fyh : fyh,
							zydm : zydm,
							xslxm : xslxm,
							xwbz : xwbz
						},
						success : function(response) {
							var responseMessage = Ext.JSON
									.decode(response.responseText);
							Ext.MessageBox.alert('提示', '提交成功！');
							var jxZqkhsjbLists = Ext.ComponentQuery.query('#jxZqkhsjbList');
								if (jxZqkhsjbLists.length > 0) {
									var jxZqkhsjbList = jxZqkhsjbLists[0];
									var store = jxZqkhsjbList.getStore();
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
		}else if (rec.data.xwbz == '0') {
			Ext.MessageBox.alert('提示', '未提交，无法操作！');
		} else if (rec.data.xwbz == '1') {
			var sznj = rec.get('sznj');
			var xn = rec.get('xn');
			var xq = rec.get('xq');
			var fyh = rec.get('fyh');
			var zydm = rec.get('zydm');
			var xslxm = rec.get('xslxm');
			var xwbz = "0";
			Ext.Ajax.request({
						url : 'jxZqkhsjbchangeFlowFlag.action',
						method : 'get',
						params : {
							sznj : sznj,
							xn : xn,
							xq : xq,
							fyh : fyh,
							zydm : zydm,
							xslxm : xslxm,
							xwbz : xwbz
						},
						success : function(response) {
							var responseMessage = Ext.JSON
									.decode(response.responseText);
							Ext.MessageBox.alert('提示', '撤销成功！');
							var jxZqkhsjbLists = Ext.ComponentQuery.query('#jxZqkhsjbList');
								if (jxZqkhsjbLists.length > 0) {
									var jxZqkhsjbList = jxZqkhsjbLists[0];
									var store = jxZqkhsjbList.getStore();
									store.load();
								}
						},
						failure : function(response) {
						}
					});
	}},
	refreshClass : function(o, e, eOpts) {
		var jxZqkhsjbLists = Ext.ComponentQuery.query('#jxZqkhsjbList');
		if (jxZqkhsjbLists.length > 0) {
			var jxZqkhsjbList = jxZqkhsjbLists[0];
			var store = jxZqkhsjbList.getStore();
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
		var pGrid = tab.down('#jxZqkhsjbList'), store = me
				.getStore('JxZqkhsjbStore');
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
		var pGrid = tab.down('#jxZqkhsjbList');
		searchForm.getForm().reset();

//		var store = pGrid.getStore(), proxy = store.getProxy();
//		proxy.setExtraParam('params', '');
//		store.load();
		var store = me.getStore('JxZqkhsjbStore', {});
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
