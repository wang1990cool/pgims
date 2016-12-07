Ext.define('App.controller.rs.JgxxController', {
			extend : 'Ext.app.Controller',

			models : ['rs.JgxxModel'],
			stores : ['rs.JgxxStore','zd.ZdXzqhmStore','zd.ZdXbmStore',
			          'zd.ZdMzmStore','zd.ZdZzmmmStore','zd.ZdXlmStore',
			          'zd.ZdXwmStore','zd.ViewXxDwxxStore','zd.ZdSfzjlxmStore',
			          'zd.ZdDslbmStore','zd.ZdDsztmStore','zd.ZdJslymStore','zd.ZdJgzcbStore'],

			refs : [{
						selector : 'jgxxList > jgxxSearchForm',
						ref : 'jgxxSearchForm'
					}],

			init : function() {
				this.control({
							'jgxxList gridtoolbar combo[itemId=numCmb]' : {
								render : this.initPageSize,
								select : this.setPageSize
							},

							'jgxxList gridtoolbar button[action=toExcel]' : {
								render : this.excelBtnRender
							},
							'jgxxList gridtoolbar button[itemId=schShowBtn]' : {
								render : this.setSchShowText
							},
							'jgxxList gridtoolbar button[action=showSearch]' : {
								click : this.showSearch
							},
							'jgxxList gridtoolbar button[action=add]' : {
								click : this.addJgxx
							},
							'jgxxList gridtoolbar button[action=edit]' : {
								click : this.editJgxx
							},
							'jgxxList gridtoolbar button[action=delete]' : {
								click : this.deleteJgxx
							},
							'jgxxList button[action=detail]' : {
								click : this.detailJgxx
							},
							'jgxxList' : {
								itemdblclick : function(o, record, item, index,e, eOpts) {
									var detailBtn = o.up('grid')	.down('#detailBtn');
									if (!detailBtn.disabled && !detailBtn.hidden)
										detailBtn.fireEvent('click', detailBtn);
								}
							},
							'jgxxSearchForm button[action=search]' : {
								click : this.search
							},
							'jgxxSearchForm button[action=searchAll]' : {
								click : this.searchAll
							},
							'jgxxSearchForm button[action=advacedSearch]' : {
								click : this.advacedSearch
							}
						});
			},

			getCenter : function() {
				return this.application.getController('main.MainController')
						.getCenter();
			},

			initStore : function() {
				var me = this;

				var store = me.getStore('JgxxStore'), proxy = store.getProxy();
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
				Ext.Ajax.request({
			                    url: 'xzqhm.action',
			                    method: 'post',
			                    autosync: true,
			                    params:{dicTabName:'ZD_XZQHM'},
			                    scope: this,
			                    success: function (response) {
			                        var responseMessage = Ext.JSON.decode(response.responseText);
			                        var data = responseMessage.result.list[0].children;
			                        var treeStore = Ext.create('Ext.data.TreeStore', {
									    storeId: 'ZdXzqhmStore',
									    proxy: {
									        type: 'memory',
									        data:data,
									        reader: {
									            type: 'json'
									        }
									    },
									    root:{expanded: true}
									});
			                        if (responseMessage.success) 
										this.store = treeStore;
			                        else
			                            Ext.Msg.show({title:"提示",msg:'数据加载失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
			                    },
			                    failure: function (response) {
			                    	Ext.Msg.show({title:"提示",msg:'数据加载失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
			                    }
			                })
		               Ext.Ajax.request({
		                    url: 'xzqhm.action',
		                    method: 'post',
		                    autosync: true,
		                    params:{dicTabName:'ZD_XZQHM'},
		                    scope: this,
		                    success: function (response) {
		                        var responseMessage = Ext.JSON.decode(response.responseText);
		                        var data = responseMessage.result.list[0].children;
		                        var treeStore = Ext.create('Ext.data.TreeStore', {
								    storeId: 'ZdXzqhmStore',
								    proxy: {
								        type: 'memory',
								        data:data,
								        reader: {
								            type: 'json'
								        }
								    },
								    root:{expanded: true}
								});
		                        if (responseMessage.success) 
									this.store = treeStore;
		                        else
		                            Ext.Msg.show({title:"提示",msg:'数据加载失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
		                    },
		                    failure: function (response) {
		                    	Ext.Msg.show({title:"提示",msg:'数据加载失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
		                    }
		                })
			                
				var contentPanel = Ext.create('App.view.rs.JgxxbContentPanel',
						{
							itemId : 'content',
							parentId : record.get('id'),
							autoScroll : true
						});

				tab.add(contentPanel);
				center.setActiveTab(tab);
			},

			excelBtnRender : function(o, e, eOpts) {
				o.actionUrl = 'jgxxtoExcel.action'
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

			addJgxx : function(o, e, eOpts) {
				new Ext.Window({
							itemId : 'jgxxWin',
							title : '添加教工信息',
							iconCls : 'add_16',
							layout : 'fit',
							width : 900,
							height : 600,
							closeAction : 'hide',
							resizable : false,
							shadow : true,
							modal : true,
							closable : true,
							animCollapse : true,
							autoShow : true,
							items : [Ext.create('App.view.rs.JgxxForm', {
										autoScroll : true,
										isAdd : true,
										imgUrl : 'jgxxgetImage.action',
										imgId : 'gh',
										postUrl : "jgxx"
									})],
							buttons : [{
										itemId : 'saveBtn',
										text : '保存',
										iconCls:'save_16',
										handler : function() {
											this.up('window').down('form')
													.submit();
										}
									}, {
										itemId : 'cancelBtn',
										text : '退出',
										 iconCls:'return_16',
										handler : function() {
											this.up('window').close();
										}
									}]
						});
			},

			editJgxx : function(o, e, eOpts) {
				var rec = getSelRec(o.up('gridpanel'));
				if (rec != undefined) {
//					var jgxxWins = Ext.ComponentQuery.query('#jgxxWin');
//					if (jgxxWins.length > 0) {
//						var win = jgxxWins[0];
//						win.setTitle('修改教工信息');
//						win.setIconCls('edit_16');
//						win.show();
//					} else {
						var win = new Ext.Window({
									itemId : 'jgxxWin',
									title : '修改教工信息',
									iconCls : 'edit_16',
									layout : 'fit',
									width : 900,
									height : 600,
									closeAction : 'hide',
									resizable : false,
									shadow : true,
									modal : true,
									closable : true,
									animCollapse : true,
									autoShow : true,
									items : [Ext.create(
											'App.view.rs.JgxxForm', {
												autoScroll : true,
												isAdd : false,
												imgUrl : 'jgxxgetImage.action',
												imgId : 'gh',
												postUrl : "jgxx"
											})],
									buttons : [{
										itemId : 'saveBtn',
										text : '保存',
											iconCls:'save_16',
										handler : function() {
											this.up('window').down('form').submit();
										}
									}, {
										itemId : 'cancelBtn',
										text : '退出',
											 iconCls:'return_16',
										handler : function() {
											this.up('window').close();
										}
									}]
								});
//					}
					var jgxxForm = win.down('form');
					jgxxForm.down('#gh').setReadOnly(true);
					jgxxForm.edit(rec);
					jgxxForm.loadForm(rec);
					
					/*var xnjgbForm = win.down('form');
					if(editTime == 0){
						Ext.defer(function() {
								xnjgbForm.loadForm(rec);
								xnjgbForm.edit(rec);
							}, 500);
							editTime ++;
					}else{
						xnjgbForm.loadRecord(rec);
						xnjgbForm.edit(rec);
					}*/
					//加载过程中设置延时
				}
			},

			deleteJgxx : function(o, e, eOpts) {
				var me = this;
				var action = "jgxxDel.action";
				var ids = getSelIds(o.up('gridpanel'), 'id');
				if (ids.length == 0)
					return;
				var store = me.getStore('JgxxStore');
				DoDelete(action, 'id', ids, store);
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

				var pGrid = tab.down('#jgxxList'), store = me
						.getStore('JgxxStore');/* store = pGrid.getStore(); */
				for (var col in pGrid.exportCols) {
					searchParams.fieldNames.push(col);
				}

				var tFields = searchForm.query('textfield(true)');
				for (var i in tFields) {
					if (tFields[i].value)
						searchParams.search[tFields[i].name] = "#like '%"
								+ Ext.String.trim( tFields[i].value )  + "%'";
				}

				// var roleCodeValue = searchForm.down('#roleName').getValue();
				// if(roleCodeValue)
				// searchParams.search['roleCode']="#= '" + roleCodeValue + "'";

//				var xbmValue = searchForm.down('#xbm').getValue();
//				if (xbmValue) {
//					searchParams.search['xbm'] = "#= '" + xbmValue + "'";
//				}

//				var mzmValue = searchForm.down('#mzm').getValue();
//				if (mzmValue) {
//					searchParams.search['mzm'] = "#= '" + mzmValue + "'";
//				}

//				var zzmmmValue = searchForm.down('#zzmmm').getValue();
//				if (zzmmmValue) {
//					searchParams.search['zzmmm'] = "#= '" + zzmmmValue + "'";
//				}

//				var xlValue = searchForm.down('#xlm').getValue();
//				if (xlValue) {
//					searchParams.search['xlm'] = "#= '" + xlValue + "'";
//				}

//				var xwValue = searchForm.down('#xwm').getValue();
//				if (xwValue) {
//					searchParams.search['xwm'] = "#= '" + xwValue + "'";
//				}

				var szdwValue = searchForm.down('#szdwh').getValue();
				if (szdwValue) {
					searchParams.search['szdwh'] = "#= '" + szdwValue + "'";
				}
				
				var jslyValue = searchForm.down('#jsly').getValue();
				if (jslyValue) {
					searchParams.search['jslym'] = "#= '" + jslyValue + "'";
				}
				var dslbValue = searchForm.down('#dslb').getValue();
				if (dslbValue) {
					searchParams.search['dslbm'] = "#= '" + dslbValue + "'";
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
				var pGrid = tab.down('#jgxxList'), store = me.getStore('JgxxStore');
				searchForm.getForm().reset();

				var proxy = store.getProxy();
				proxy.setExtraParam('params', '');
				store.load();
			},

			detailJgxx : function(o, e, eOpts) {
				var rec = getSelRec(o.up('gridpanel'));
				if (rec != undefined) {
					var jgxxWins = Ext.ComponentQuery.query('#jgxxDetailWin');
					if (jgxxWins.length > 0) {
						var win = jgxxWins[0];
						win.setTitle('教工详情');
						win.setIconCls('detail_16');
						win.show();
					} else {
						var win = new Ext.Window({
									itemId : 'jgxxDetailWin',
									title : '教工详情',
									iconCls : 'detail_16',
									layout : 'fit',
									width : 900,
									height : 600,
									closeAction : 'hide',
									resizable : false,
									shadow : true,
									modal : true,
									closable : true,
									animCollapse : true,
									autoShow : true,
									items : [Ext.create(
											'App.view.rs.JgxxForm', {
												autoScroll : true,
												isAdd : false,// 测试
												imgUrl : 'jgxxgetImage.action',
												imgId : 'gh',
												postUrl : "jgxx"
											})],
									buttons : [{
												itemId : 'cancelBtn',
												text : '退出',
											    iconCls:'return_16',
												handler : function() {
													this.up('window').close();
												}
											}]
								});
					}
					
					/*var xnjgbForm = win.down('form');
					if(detailTime == 0){
						Ext.defer(function() {
								xnjgbForm.loadForm(rec);
								xnjgbForm.edit(rec);
								xnjgbForm.down('#upImgBtn').hide();
							}, 500);
							detailTime ++;
					}else{
						xnjgbForm.loadRecord(rec);
						xnjgbForm.edit(rec);
					    xnjgbForm.down('#upImgBtn').hide();
					}*/
					
					
					
					
					var jgxxForm = win.down('form');
					jgxxForm.edit(rec);
					jgxxForm.loadForm(rec);
					jgxxForm.down('#upImgBtn').hide();
					/*Ext.defer(function() {
								xnjgbForm.loadForm(rec);
								xnjgbForm.edit(rec);
								xnjgbForm.down('#upImgBtn').hide();
							}, 400);*/
							//加载过程中设置延时

					var textfields = jgxxForm.query('textfield');
					for (var i in textfields) {
						textfields[i].setReadOnly(true);
						var style = "background:none; border : 0px;";
						textfields[i].setFieldStyle(style);
					}
				}
			},

			advacedSearch : function(o, e, eOpts) {

			}
		});
