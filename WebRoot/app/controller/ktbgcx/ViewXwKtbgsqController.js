Ext.define('App.controller.ktbgcx.ViewXwKtbgsqController', {
	extend : 'Ext.app.Controller',

	models : ['ktbg.ViewXwKtbgsqModel', 'xs.XsJcxxbModel',
			'ktbg.XwKtbgsqbModel'],
	stores : ['ktbg.ViewXwKtbgsqStore', 'xs.XsJcxxbStore',
			'ktbg.XwKtbgsqbStore', 'zd.ViewXxJxdwStore',
			'zd.ViewXkDwxkzyStore', 'zd.ZdShztmStore'],

	refs : [{
				selector : 'viewXwKtbgsqSearchForm',
				ref : 'viewXwKtbgsqSearchForm'
			}],

	init : function() {
		this.control({

					'#viewXwKtbgsqSearchList' : {
						itemdblclick : this.itemDblClick
					},

					'#viewXwKtbgsqSearchList gridtoolbar combo[itemId=numCmb]' : {
						render : this.initPageSize,
						select : this.setPageSize
					},
					'#viewXwKtbgsqSearchList gridtoolbar button[action=detail]' : {
						click : this.detail
					},
					//			'viewXwKtbgsqList gridtoolbar button[action=edit]': {
					//				click: this.editClass
					//			},

					'#viewXwKtbgsqSearchList gridtoolbar button[action=edit]' : {
						click : this.editClass
					},
					'#viewXwKtbgsqSearchList gridtoolbar button[action=withdraw]' : {
						click : this.withdrawKkjh
					},
					'#viewXwKtbgsqSearchList gridtoolbar button[action=refresh]' : {
						click : this.refreshClass
					},
					'#viewXwKtbgsqSearchList gridtoolbar button[action=toExcel]' : {
						render : this.excelBtnRender
					},
					'#viewXwKtbgsqSearchList gridtoolbar button[itemId=schShowBtn]' : {
						render : this.setSchShowText
					},

					'#viewXwKtbgsqSearchList gridtoolbar button[action=showSearch]' : {
						click : this.showSearch
					},

					'#searchFormktbgcx button[action=search]' : {
						click : this.search
					},
					'#searchFormktbgcx button[action=searchAll]' : {
						click : this.searchAll
					}
				});
	},

	getCenter : function() {
		return this.application.getController('main.MainController')
				.getCenter();
	},

	initStore : function() {
		var me = this;
		var store = me.getStore('ViewXwKtbgsqStore');
		//    	var searchParams = {
		//				start:0, limit:15, page: 1, searchMode:'simple',
		//				fieldNames:[], order:'',
		//				search:{}
		//    	};
		//    	var ztmll= 'TG';
		//    	searchParams.search['shztm'] = "#= '" + ztmll + "'";
		proxy = store.getProxy();
		proxy.setExtraParam('params', '');
		store.load();
	},
	
	excelBtnRender : function(o, e, eOpts) {
		o.actionUrl = 'viewXwKtbgsqtoExcel.action'
	},
	
	setSchShowText : function(o, eOpts) {
		var me = this;
		var searchForm = me.getCenter().down('#searchFormktbgcx');
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
		var searchForm = tab.down('#searchFormktbgcx');
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

	onLaunch : function(record) {
		var me = this;
		var center = me.getCenter();
		var tab = center.down('#M' + record.get('parentId'));

		var removePanel = tab.down('#content');
		tab.remove(removePanel);
		var contentPanel = Ext.create(
				'App.view.ktbgcx.ViewXwKtbgsqContentPanel', {
					itemId : 'content',
					parentId : record.get('id')
				});
		tab.add(contentPanel);
		center.setActiveTab(tab);
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
			//					else{
			//							Ext.MessageBox.alert('提示', '该培开课计划不可以撤回！');
			//					}
		}
		//			}else{
		//				Ext.MessageBox.alert('提示','该用户不能撤回开课计划！');
		//			}
	},
	
	detail : function(o, e, eOpts) {
		var rec = getSelRec(o.up('gridpanel'));
		if (rec != undefined) {
			var win = new Ext.Window({
						itemId : 'viewXwKtbgsqWin',
						iconCls : 'detail_16',
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
						closable : true,
constrain :true,  
						animCollapse : true,
						autoShow : true,
						items : [Ext.create('App.view.ktbgcx.ViewXwKtbgsqForm')]
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
		if (rec.data.shzt == '审核通过') {
			Ext.MessageBox.alert('提示', '审查通过，不能再次审核操作！');
		} else if (rec.data.shzt == '草稿状态') {
			Ext.MessageBox.alert('提示', '草稿状态，申请未提交，不能进行审核操作！');
		} else if (rec != undefined) {
			var win = new Ext.Window({
						itemId : 'viewXwKtbgsqshWin',
						iconCls : 'detail_16',
						autoShow : true,
						title : '审核申请信息',
						layout : 'fit',
						x : 300,
						y : 200,
						width : 750,
						height : 450,
						closeAction : 'destroy',
						resizable : false,
						shadow : true,
						modal : true,
						closable : true,
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
			viewXwKtbgsqshForm.down('#jhktrq').setValue(jhktrq);
			viewXwKtbgsqshForm.down('#shzt').setValue(shzts);
			viewXwKtbgsqshForm.down('#shr').setValue(userCName);
			viewXwKtbgsqshForm.down('#shrgh').setValue(userName);
			var me = this;
			var textfields = viewXwKtbgsqshForm.query('textfield');
			for (var i in textfields) {
				if (textfields[i].itemId == 'lwtm'
						|| textfields[i].itemId == 'jhktrq'
						|| textfields[i].itemId == 'jhktsj'
						|| textfields[i].itemId == 'jhktdd'
						|| textfields[i].itemId == 'lwjj'
						|| textfields[i].itemId == 'shr'
						|| textfields[i].itemId == 'shrgh') {
					textfields[i].setReadOnly(true);
					var style = "background:none; border:0px";
					textfields[i].setFieldStyle(style);
				}
			}
			//			if(textfields[i].itemId == 'shzt')
		}
	},
	
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
		var searchForm = tab.down('#searchFormktbgcx');
		var searchParams = {
			start : 0,
			limit : 15,
			page : 1,
			searchMode : 'simple',
			fieldNames : [],
			order : '',
			search : {}
		};
		
		var pGrid = tab.down('#viewXwKtbgsqSearchList'), store = me
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
		var njValue = searchForm.down('#sznj').getValue();
		if (njValue)
			searchParams.search['nj'] = "#= '" + njValue + "'";
		
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
	 		
		var jhktrqBTime = Ext.Date.format(searchForm.down('#jhktrqBTime').getValue(),'Y-m-d').replace(/\-/g, "");
		var jhktrqETime = Ext.Date.format(searchForm.down('#jhktrqETime').getValue(),'Y-m-d').replace(/\-/g, "");
		
		if(jhktrqBTime && jhktrqETime  ){
			if(parseInt(jhktrqBTime) <= parseInt(jhktrqETime)){
			searchParams.search['jhktrq']="#between '" + jhktrqBTime + "' and '" + jhktrqETime + "'";
			}else{
				Ext.Msg.show({title:"提示",msg:"结束时间不得小于起始时间！",buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
				return null;
			}
		}else if(jhktrqBTime && jhktrqETime == "" ){
			 	Ext.Msg.show({title:"提示",msg:"结束时间不能为空！",buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
				return null;
		}else if(jhktrqBTime == ""  && jhktrqETime){
			 	Ext.Msg.show({title:"提示",msg:"开始时间不能为空！",buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
				return null;
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

		var searchForm = tab.down('#searchFormktbgcx');
		var pGrid = tab.down('#viewXwKtbgsqSearchList');
		searchForm.getForm().reset();

		var store = pGrid.getStore(), proxy = store.getProxy();
		proxy.setExtraParam('params', '');
		store.load();
	}

});
