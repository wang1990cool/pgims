Ext.define('App.controller.skxx.GgkZxkkjhController', {
			extend : 'Ext.app.Controller',

			models : ['skxx.ZxkkjhModel','skxx.SKXXModel','skxx.SKJHGXModel'],
			stores : ['skxx.GgkZxkkjhStore','skxx.SKXXStore','skxx.SKJHGXStore','zd.TyXnbStore'],
//			refs : [{
//						selector : 'viewSkxxmxList > skxxmxSearchForm',
//						ref : 'skxxmxSearchForm'
//			}],
			
			init : function() {
				this.control({
				'#ggkZxkkjhList combo[itemId=numCmb]': {
						render: this.initPageSize,
						select: this.setPageSize
					},
				  '#ggkZxkkjhList button[itemId=schShowBtn]' : {
							render : this.setSchShowText
				   },
				   '#ggkZxkkjhList button[action=showSearch]' : {
					      click : this.showSearch
					},
					'#ggkZxkkjhList button[action=detail]':{
						click : this.detailSkxxmx
					},
					'#ggkZxkkjhList button[action=merge]':{
						click : this.mergeClass
					},
					'#ggkZxkkjhList button[action=independent]':{
						click : this.independentClass
					},
					'#ggkZxkkjhList button[action=divide]':{
						click : this.divideClass
					},
					'#ggkZxkkjhList button[action=skxx]':{
						click: this.skxx
					},
			    	'#skxxListGGK combo[itemId=numSkxxCmb]': {
						render: this.initPageSize,
						select: this.setPageSize
					},
					 '#skxxListGGK button[itemId=schSkxxShowBtn]' : {
							render : this.setSkxxSchShowText
				   },
				   '#skxxListGGK button[action=showSearch]' : {
					      click : this.showSkxxSearch
					},
					'#skxxListGGK button[action=delete]':{
						click: this.deleteClass
					},
					'#skxxListGGK button[action=edit]':{
						click: this.editClass
					},
					'#skxxListGGK button[action=detail]':{
						click: this.detailClass
					},
					'#skxxListGGK button[action=arrangeTeacher]':{
						click: this.arrangeTeacher
					},
					'#ggkSearchForm button[action=search]' : {
						click : this.search
					},
					'#ggkSearchForm button[action=searchAll]' : {
						click : this.searchAll
					},
					'#ggkSkxxSearchForm button[action=search]' : {
						click : this.skxxSearch
					},
					'#ggkSkxxSearchForm button[action=searchAll]' : {
						click : this.skxxSearchAll
					}
				})
			},
			
			deleteClass:function(o,e,eOpts){
				var me = this;
				var skxx
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if(recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作的记录！');
				}else{
					var kkkhArr = new Array(); // 保存开课课号
					var skjhStore = Ext.StoreMgr.lookup('SKJHGXStore');
					var merge = divide = independent = false;
					
					// 判断要删除的课程的类型，是否是合班、分班或独立班级
					skjhStore.load({callback:function(){
						for(var i = 0;i < recs.length;i++){
							var kkkhTemp = new Array(); // 保存当前KKKH在skjhStore中存在的数量
							skjhStore.each(function(record){
								if(recs[i].data.kkkh == record.get('kkkh')){
									kkkhTemp.push(record.get('kkkh'))
								}
							})
							if(kkkhTemp.length > 1){ //若大于1，表示是合班
								kkkhArr.push(kkkhTemp[0]);
								merge = true;
							}else if(kkkhTemp.length == 1){ // 分班或独立班级
								var rec = skjhStore.findRecord('kkkh', recs[i].data.kkkh);// 找到要删除的记录
								// 判断是否有其他分班
								var temp = new Array();//若分班存在，保存分班，若长度为1表示没有分班
								skjhStore.each(function(record){
									if(rec.get('kch') == record.get('kch')
										&& rec.get('kkjhh') == record.get('kkjhh'))	{
											temp.push(record.get('kkkh'))
									}
								})
								if(temp.length > 1){
										for(var i = 0; i < temp.length;i++)
											kkkhArr.push(temp[i])
									}
									else if(temp.length == 1){
										kkkhArr.push(temp[0])
									}
							}
						}
							Ext.MessageBox.confirm("确认","确认删除？",function(btn){
								if(btn == 'yes'){
									Ext.Ajax.request({
										url:'skxxDelBj.action?kkkhArr=' + kkkhArr,
										method:'post',
										success:function(response, opts){
											var result = Ext.decode(response.responseText);
											var success = result.result.success;
											if(success){
												var msg = "删除成功！";
												Ext.MessageBox.show({
										           title: '提示',
										           msg: msg,
										           buttons: Ext.MessageBox.OK,
										           icon: Ext.MessageBox.INFO,
										           fn: function(id, msg){
										           	    var  lists = Ext.ComponentQuery.query('#ggkZxkkjhList');
					          	        		     	 var list = lists[lists.length - 1];
					          	        			     list.getStore().load();
										          		
					          	        			      var  skxxLists = Ext.ComponentQuery.query('#skxxListGGK');
	          	        								  var skxxList = skxxLists[skxxLists.length - 1];
	          	        								  skxxList.getStore().load();
										        	}  
										        });	
											}
										}
									})
								}
							})
//						}
					}});
				}
			},
			
			detailSkxxmx:function(o, e, eOpts){
		  	   var rec = getSelRec(o.up('gridpanel'));
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
					var win;
					var skxxDetailWins = Ext.ComponentQuery.query('#skxxmxDetailWin');
					if(skxxDetailWins.length > 0){
						win = skxxDetailWins[0];
					}else{
			            	var win = new Ext.Window({
			            		itemId:'skxxmxDetailWin',
			            		autoShow: true,
			            		title:'详情',
			            		iconCls:'detail_16',
			                    width: 765,
							   height: 600,
			                    closeAction:'hide',
			            		resizable:false,
			            		shadow:true,
			            		modal:true,
			            		closable:true,
			            		constrainHeader:true,
			            		animCollapse:true,
			          		    bodyStyle :"overflow-x:hidden;overflow-y:auto",
			                    items: [Ext.create('App.view.skxx.SkxxmxDetailForm')],
			                    buttons: [{
					        	    text: '退出',
					        	    iconCls:'return_16',
					                handler: function () {
					                	var me = this;
					                    me.up('window').close();
					                }
					            }] 
			                });
					}
			        	var detailForm = win.down('#skxxmxDetailForm');
			        	detailForm.loadForm(rec);
			        	detailForm.setViewForm();
			        	win.show();
			  	  }
			},
			
		 detailClass:function(o,e,eOpts){
		  	   var rec = getSelRec(o.up('gridpanel'));
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
					var win;
					var skxxDetailWins = Ext.ComponentQuery.query('#skxxDetailWin');
					if(skxxDetailWins.length > 0){
						win = skxxDetailWins[0];
						win.show();
					}else{
		            	var win = new Ext.Window({
		            		itemId:'skxxDetailWin',
		            		title:'授课信息详情',
		            		iconCls:'detail_16',
		                    width: 800,
						   height: 600,
		                    closeAction:'hide',
		            		resizable:false,
		            		shadow:true,
		            		modal:true,
		            		closable:true,
		            		constrainHeader:true,
		            		animCollapse:true,
		            		autoShow:true,
		            	    bodyStyle :"overflow-x:hidden;overflow-y:auto",
		                    items: [Ext.create('App.view.skxx.SKXXDetail')],
		                    buttons: [{
				        	    text: '退出',
				        	    iconCls:'return_16',
				                handler: function () {
				                	var me = this;
				                    me.up('window').close();
				                }
				            }] 
		                });
					}
		        	var detailForm = win.down('#skxxDetail');
		        	detailForm.loadForm(rec);
		        	detailForm.setView();
		  	  }
			},
			
			arrangeTeacher:function(o, e, eOpts){
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if(recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作的记录！');
				}else if(recs.length > 1){
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				}else if(recs.length == 1){
					var me = this;
					var skxxList = o.up('#skxxListGGK')	
					var application = me.getApplication();
	        		var controller = application.getController('App.controller.skxx.ArrangeTecController');
			  	    controller.onLaunch(o,skxxList);
				}
			},
			
			editClass:function(o, e, eOpts){
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if(recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作的记录！');
				}else if(recs.length > 1){
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				}else if(recs.length == 1){
					var me  = this;
					var skxxList = o.up('#skxxListGGK')
				 	var skxxmxList = o.ownerCt.ownerCt.ownerCt.down('#ggkZxkkjhList');
					var application = me.getApplication();
					var kkkhValue = recs[0].data.kkkh;
					var kchValue = recs[0].data.kch
					var skjhStore = Ext.StoreMgr.lookup('SKJHGXStore');
					skjhStore.load({callback:function(){
							var kkkhTemp = new Array(); // 保存当前KKKH在skjhStore中存在的数量
							skjhStore.each(function(record){
								if(recs[0].data.kkkh == record.get('kkkh')){
									kkkhTemp.push(record.get('kkkh'))
								}
							})
							if(kkkhTemp.length > 1){ //若大于1，表示是合班
				        		var controller = application.getController('App.controller.skxx.MergeSkxxEditController');
						  	    controller.onLaunch(o,'ggk',skxxmxList,skxxList);
							}else if(kkkhTemp.length == 1){ // 合班或独立班级
								var rec = skjhStore.findRecord('kkkh', recs[0].data.kkkh);
								// 判断是否有其他分班
								var kkkhArray = new Array();//若分班存在，保存分班，若长度为1表示没有分班
								skjhStore.each(function(record){
									if(rec.get('kch') == record.get('kch')
										&& rec.get('kkjhh') == record.get('kkjhh'))	{
											kkkhArray.push(record.get('kkkh'))
									}
								})
							if(kkkhArray.length > 1){
									var controller = application.getController('App.controller.skxx.DivideSkxxEditController');
							  	    controller.onLaunch(o,'ggk',kkkhArray,skxxmxList,skxxList);
							}else if(kkkhArray.length == 1){
									var controller = application.getController('App.controller.skxx.EditSkxxController');
							  	     controller.onLaunch(o,null,skxxList);
							}
						}
					}
				})
			}
	},
			
			skxxSearch : function(o, e, eOpts) {
				var me = this;
				var tab = me.getCenter().getActiveTab();
				var searchForm = tab.down('#ggkSkxxSearchForm');
				var searchParams = {
					start : 0,
					limit : 15,
					page : 1,
					searchMode : 'simple',
					fieldNames : [],
					order : '',
					search : {}
				};

				var pGrid = tab.down('#skxxListGGK'), store = pGrid.getStore();
				for (var col in pGrid.exportCols) {
					searchParams.fieldNames.push(col);
				}

				var tFields = searchForm.query('textfield(true)');
				for (var i in tFields) {
					if (tFields[i].value && tFields[i].hidden == false)
						searchParams.search[tFields[i].name] = "#like '%" + Ext.String.trim( tFields[i].value ) + "%'";
				}
				var pydwhValue = searchForm.down('#pydw').getValue();
				if(pydwhValue){
					searchParams.search['pydwh']="#like '%" + pydwhValue + "%'";
				}
				
				var kkdwValue = searchForm.down('#kkdw').getValue();
				if(kkdwValue){
					searchParams.search['kkdwh']="#= '" + kkdwValue + "'";
				}
				
				var zymcValue = searchForm.down('#zymc').getValue();
				if(zymcValue){
					searchParams.search['zydm']="#like '%" + zymcValue + "%'";
				}
				searchParams.search['ggkbzm']="#= '1'";
				
				
				var proxy = store.getProxy();
				proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				store.load({callback:function(){
					var toolbar = pGrid.down('#toolbar');
					toolbar.moveFirst()
				}});
			},
			
			skxxSearchAll : function(o, e, eOpts) {
				var me = this;
				var tab = me.getCenter().getActiveTab();
				var searchParams = {
					start : 0,
					limit : 15,
					page : 1,
					searchMode : 'simple',
					order : '',
					search : {}
				};
				var searchForm = tab.down('#ggkSkxxSearchForm');
				searchParams.search['ggkbzm']="#= '1'";
				var pGrid = tab.down('#skxxListGGK');
				searchForm.getForm().reset();
				
				
				var store = pGrid.getStore(),proxy= store.getProxy();
				proxy.setExtraParam('params',Ext.JSON.encode(searchParams));
				store.load();
			},
			search : function(o, e, eOpts) {
				var me = this;
				var tab = me.getCenter().getActiveTab();
				var searchForm = tab.down('#ggkSearchForm');
				var searchParams = {
					start : 0,
					limit : 15,
					page : 1,
					searchMode : 'simple',
					fieldNames : [],
					order : '',
					search : {}
				};

				var pGrid = tab.down('#ggkZxkkjhList'), store = pGrid.getStore();
				for (var col in pGrid.exportCols) {
					searchParams.fieldNames.push(col);
				}

				var tFields = searchForm.query('textfield(true)');
				for (var i in tFields) {
					if (tFields[i].value && tFields[i].hidden == false)
						searchParams.search[tFields[i].name] = "#like '%" +  Ext.String.trim( tFields[i].value )+ "%'";
				}
				var pydwValue = searchForm.down('#pydw').getValue();
				if(pydwValue){
					searchParams.search['pydwh']="#= '" + pydwValue + "'";
				}
				
				var kkdwValue = searchForm.down('#kkdw').getValue();
				if(kkdwValue){
					searchParams.search['kkdwh']="#= '" + kkdwValue + "'";
				}
				
				var xkzyValue = searchForm.down('#xkzy').getValue();
				if(xkzyValue){
					searchParams.search['xkzym']="#= '" + xkzyValue + "'";
				}
				
				var xslxValue = searchForm.down('#xslx').getValue();
				if(xslxValue){
					searchParams.search['xslxm']="#= '" + xslxValue + "'";
				}
//			    searchParams.search['ggkbzm']="#= '1'";
//				var fymcValue = searchForm.down('#fymc').getValue();
//				if(fymcValue){
//					searchParams.search['yxsh']="#= '" + fymcValue + "'";
//				}
//				var xslxValue = searchForm.down('#xslx').getValue();
//				if(xslxValue){
//					searchParams.search['xslxm']="#= '" + xslxValue + "'";
//				}
				
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
				
				var searchForm = tab.down('#ggkSearchForm');
				var pGrid = tab.down('#ggkZxkkjhList');
				searchForm.getForm().reset();
				
//				var searchParams = {
//					start : 0,
//					limit : 15,
//					page : 1,
//					searchMode : 'simple',
//					order : '',
//					search : {}
//				};
//			   searchParams.search['ggkbzm']="#= '1'";

				
				var store = me.getStore('GgkZxkkjhStore'), proxy = store.getProxy();
				proxy.setExtraParam('params','');
				store.load();
			},
			
			skxx:function(o, e, e0pts){
				var me = this;
				var application = me.getApplication();
		        var controller = application.getController('App.controller.skxx.SkxxDialogController');
		  	    controller.onLaunch(o); 
			},
			
			mergeClass:function(o, e, e0pts){
				var me = this;
//				var rec = getSelRec(o.up('gridpanel'));
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if(recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作的记录！');
				}else if(recs.length < 2){
					Ext.MessageBox.alert('提示', '请至少选择2条记录进行合班！');
				}else if(recs.length >=2){
					var isMerge = true;
					var firstKch = recs[0].data.kch;
					var firstXq = recs[0].data.xq;
					var firstXn = recs[0].data.xn;
				 	for(var i = 1; i < recs.length ;i++){
						if(recs[i].data.kch != firstKch){
							Ext.MessageBox.alert('提示','请选择一样的课程进行合班！');
							isMerge = false;
							break;
						}else if(recs[i].data.xq != firstXq){
							Ext.MessageBox.alert('提示','请选择相同学期的课程进行合班！');
							isMerge = false;
							break;
						}else if(recs[i].data.xn != firstXn){
							Ext.MessageBox.alert('提示','请选择相同学年的课程进行合班！');
							isMerge = false;
							break;
						}
				 	}
				 	if(isMerge){
				 		var skxxmxList = o.up('#ggkZxkkjhList');
				 		var skxxList = o.ownerCt.ownerCt.ownerCt.down('#skxxListGGK');
				 		
				 		var application = me.getApplication();
		        		var controller = application.getController('App.controller.skxx.MergeSkxxmxController');
				  	    controller.onLaunch(o,skxxmxList,skxxList,'ggk');
				 		
//						var application = me.getApplication();
//		        		var controller = application.getController('App.controller.skxx.AddSkxxmxController');
//				  	    controller.onLaunch(o,'merge','ggk');
				 	}
				}
			},
			
			divideClass:function(o, e, eOpts){
			    var me = this;
		   		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if(recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作的记录！');
				}else if(recs.length > 1){
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				}else if(recs.length == 1){
					var me = this;
					var skxxmxList = o.up('#ggkZxkkjhList');
				 	var skxxList = o.ownerCt.ownerCt.ownerCt.down('#skxxListGGK');
					var application = me.getApplication();
	        		var controller = application.getController('App.controller.skxx.DivideSkxxmxController');
			  	    controller.onLaunch(o,'ggk',skxxmxList,skxxList);
				}
			},
			
		   independentClass:function(o, e, eOpts){
		   		var me = this;
		   	    var skxxmxList = o.up('#ggkZxkkjhList');
		   		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if(recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作的记录！');
				}else if(recs.length > 1){
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				}else if(recs.length == 1){
					var me = this;
					var skxxmxList = o.up('#ggkZxkkjhList');
				 	var skxxList = o.ownerCt.ownerCt.ownerCt.down('#skxxListGGK');

					var application = me.getApplication();
	        		var controller = application.getController('App.controller.skxx.IndependentSkxxmxController');
			  	    controller.onLaunch(o,'ggk',skxxmxList,skxxList);
				}
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
				var searchForm = me.getCenter().down('#ggkSearchForm');
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
				var searchForm = tab.down('#ggkSearchForm');
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

			showSkxxSearch : function(o, e, eOpts) {
				var me = this;
				var tab = me.getCenter().getActiveTab();
				var searchForm = tab.down('#ggkSkxxSearchForm');
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
			
			setSkxxSchShowText : function(o, eOpts) {
				var me = this;
				var searchForm = me.getCenter().down('#ggkSkxxSearchForm');
				if (searchForm)
					if (!searchForm.hidden) {
						o.setText('隐藏查询');
						o.setTooltip('隐藏查询');
					} else {
						o.setText('显示查询');
						o.setTooltip('显示查询');
					}
			},


		 excelBtnRender: function(o, e, eOpts){
			   o.actionUrl = 'kkjhtoExcel.action'
		  },
			
			getCenter : function() {
				return this.application.getController('main.MainController').getCenter();
			},

			initStore : function() {
				var me = this;
				var store = me.getStore('GgkZxkkjhStore');
				var skxxStore = me.getStore('SKXXStore');
				var skxxProxy = skxxStore.getProxy();
				
				var searchParams = {
					start : 0,
					limit : 15,
					page : 1,
					searchMode : 'simple',
					order : '',
					search : {}
				};
			    searchParams.search['ggkbzm']="#= '1'";
//			    if(roleCode == 'Academy'){
//					searchParams.search['kkdwh']="#= '" + szdwh + "'";
//			    }
				skxxProxy.setExtraParam('params', Ext.JSON.encode(searchParams));

				proxy = store.getProxy();
				proxy.setExtraParam('params','');
				store.load();
				skxxStore.load();
//				skxxStore.load()
//				skxxStore.filterBy(function(record) {
//                      return record.get('ggkbzm') == '1';   
//                  });
				var skjhgxStore = me.getStore('SKJHGXStore'), skjhgxProxy = skjhgxStore.getProxy();
				skjhgxProxy.setExtraParam('params', '');
				skjhgxStore.load();
			},
			

//			getPanel:function(){
//		    	var me = this;
//		    	return me.getSkxxGgkZxkkjhContentPanelView();
//		    },
			
			onLaunch : function(record) {
				var me = this;
				var center = me.getCenter();
				var tab = center.down('#M' + record.get('parentId'));
				var removePanel = tab.down('#content');
				tab.remove(removePanel);
				var contentPanel = Ext.create('App.view.skxx.GgkZxkkjhContentPanel',
						{
							itemId : 'content',
							parentId : record.get('id')
						});
				tab.add(contentPanel);
				center.setActiveTab(tab);
				
				Ext.Ajax.request({
				url:'jxPksjCheckSj.action',
	 			method:'get',
	 			success : function(response, opts) {
					var result = Ext.decode(response.responseText);
					var success = result.result.success;
					if(success){
						me.initStore();
					}else{
						Ext.MessageBox.alert('提示', '当前不在合班分班时间范围内！');
						contentPanel.down('#skxxListGGK').setDisabled(true);
						contentPanel.down('#ggkZxkkjhList').setDisabled(true);
						contentPanel.down('#ggkSearchForm').setDisabled(true);
						contentPanel.down('#ggkSkxxSearchForm').setDisabled(true);
					}
					}
				});
				
			}
		})