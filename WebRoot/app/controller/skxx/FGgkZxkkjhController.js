Ext.define('App.controller.skxx.FGgkZxkkjhController', {
			extend : 'Ext.app.Controller',

			models : ['skxx.ZxkkjhModel','skxx.SKXXModel','skxx.SKJHGXModel'],
			stores : ['skxx.FGgkZxkkjhStore','skxx.SKXXStore','skxx.SKJHGXStore'],
			
//			refs : [{
//						selector : 'viewSkxxmxList',
//						ref : 'viewSkxxmxList'
//			}],
			
			init : function() {
				this.control({
				'#fGgkZxkkjhList combo[itemId=numCmb]': {
						render: this.initPageSize,
						select: this.setPageSize
					},
				  '#fGgkZxkkjhList button[itemId=schShowBtn]' : {
							render : this.setSchShowText
				   },
				   '#fGgkZxkkjhList button[action=showSearch]' : {
					      click : this.showSearch
					},
					'#fGgkZxkkjhList button[action=detail]':{
						click : this.detailSkxxmx
					},
					'#fGgkZxkkjhList button[action=merge]':{
						click : this.mergeClass
					},
					'#fGgkZxkkjhList button[action=independent]':{
						click : this.independentClass
					},
					'#fGgkZxkkjhList button[action=divide]':{
						click : this.divideClass
					},
					'#fGgkZxkkjhList button[action=skxx]':{
						click : this.skxx
					},
					'#fggkSearchForm button[action=search]':{
						click: this.search
					},
					'#fggkSearchForm button[action=searchAll]':{
						click: this.searchAll
					},
					'#skxxListFGGK button[action=delete]':{
						click: this.deleteClass
					},
					'#skxxListFGGK button[action=detail]':{
						click: this.detailClass
					},
					'#skxxListFGGK button[action=arrangeTeacher]':{
						click: this.arrangeTeacher
					},
					 '#skxxListFGGK button[action=edit]':{
						click: this.editClass
					},
					'#skxxListFGGK combo[itemId=numSkxxCmb]': {
						render: this.initPageSize,
						select: this.setPageSize
					},
					 '#skxxListFGGK button[itemId=schSkxxShowBtn]' : {
							render : this.setSkxxSchShowText
				   },
				   '#skxxListFGGK button[action=showSearch]' : {
					      click : this.showSkxxSearch
					},
					
					'#fggkSkxxSearchForm button[action=search]' : {
						click : this.skxxSearch
					},
					'#fggkSkxxSearchForm button[action=searchAll]' : {
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
							}else if(kkkhTemp.length == 1){ // 合班或独立班级
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
									}else if(temp.length == 1){
										kkkhArr.push(temp[0])
									}
							}
						}
						
//						if(divide){
//							Ext.MessageBox.confirm("确认","确认删除其他相关分班？",function(btn){
//								if(btn == 'yes'){
//									Ext.Ajax.request({
//										url:'skxxDelBj.action?kkkhArr=' + kkkhArr,
//										method:'post',
//										success:function(response, opts){
//											var result = Ext.decode(response.responseText);
//											var success = result.result.success;
//											if(success){
//												var msg = "删除成功！";
//												Ext.MessageBox.show({
//										           title: '提示',
//										           msg: msg,
//										           buttons: Ext.MessageBox.OK,
//										           icon: Ext.MessageBox.INFO,
//										           fn: function(id, msg){
//										           		 var  lists = Ext.ComponentQuery.query('#fGgkZxkkjhList');
//					          	        		     	 var list = lists[lists.length - 1];
//					          	        			     list.getStore().load();
//										          		  var  skxxLists = Ext.ComponentQuery.query('#skxxListFGGK');
//	          	        								  var skxxList = skxxLists[skxxLists.length - 1];
//	          	        								  skxxList.getStore().load();
//										        	}  
//										        });	
//											}
//										}
//									})
//								}
//							})
//						}else {
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
										           	    var  lists = Ext.ComponentQuery.query('#fGgkZxkkjhList');
					          	        		     	 var list = lists[lists.length - 1];
					          	        			     list.getStore().load();
 	        			     							 var  skxxLists = Ext.ComponentQuery.query('#skxxListFGGK');
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
					var skxxList = o.up('#skxxListFGGK')
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
					var skxxList = o.up('#skxxListFGGK')
				 	var skxxmxList = o.ownerCt.ownerCt.ownerCt.down('#fGgkZxkkjhList');
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
			skxx:function(o, e, eOpts){
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
				 	for(var i = 1; i < recs.length ;i++){
						if(recs[i].data.kch != firstKch){
							Ext.MessageBox.alert('提示','请选择一样的课程进行合班！');
							isMerge = false;
							break;
						}else if(recs[i].data.xq != firstXq){
							Ext.MessageBox.alert('提示','请选择相同学期的课程进行合班！');
							isMerge = false;
							break;
						}
				 	}
				 	if(isMerge){
				 		var skxxmxList = o.up('#fGgkZxkkjhList');
				 		var skxxList = o.ownerCt.ownerCt.ownerCt.down('#skxxListFGGK');
				 		
				 		var application = me.getApplication();
		        		var controller = application.getController('App.controller.skxx.MergeSkxxmxController');
				  	    controller.onLaunch(o,skxxmxList,skxxList,'fGgk');
				  	    
//						var application = me.getApplication();
//		        		var controller = application.getController('App.controller.skxx.AddFSkxxmxController');
//				  	    controller.onLaunch(o,'merge','fggk');
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
			 		var skxxmxList = o.up('#fGgkZxkkjhList');
				 	var skxxList = o.ownerCt.ownerCt.ownerCt.down('#skxxListFGGK');
					var application = me.getApplication();
	        	  	var controller = application.getController('App.controller.skxx.DivideSkxxmxController');
			  	    controller.onLaunch(o,'fGgk',skxxmxList,skxxList);
				}
			},
			
		   independentClass:function(o, e, eOpts){
		   		var me = this;
		   	    var skxxmxList = o.up('#viewSkxxmxList');
		   		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if(recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作的记录！');
				}else if(recs.length > 1){
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				}else if(recs.length == 1){
					var me = this;
					var skxxmxList = o.up('#fGgkZxkkjhList');
				 	var skxxList = o.ownerCt.ownerCt.ownerCt.down('#skxxListFGGK');
					var application = me.getApplication();
	        		var controller = application.getController('App.controller.skxx.IndependentSkxxmxController');
			  	    controller.onLaunch(o,'fGgk',skxxmxList,skxxList);
				}
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
				var searchForm = me.getCenter().down('#fggkSearchForm');
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
				var searchForm = tab.down('#fggkSearchForm');
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
				var searchForm = tab.down('#fggkSkxxSearchForm');
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
				var searchForm = me.getCenter().down('#fggkSkxxSearchForm');
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
		  
		  			
			skxxSearch : function(o, e, eOpts) {
				var me = this;
				var tab = me.getCenter().getActiveTab();
				var searchForm = tab.down('#fggkSkxxSearchForm');
				var searchParams = {
					start : 0,
					limit : 15,
					page : 1,
					searchMode : 'simple',
					fieldNames : [],
					order : '',
					search : {}
				};

				var pGrid = tab.down('#skxxListFGGK'), store = pGrid.getStore();
				for (var col in pGrid.exportCols) {
					searchParams.fieldNames.push(col);
				}

				var tFields = searchForm.query('textfield(true)');
				for (var i in tFields) {
					if (tFields[i].value && tFields[i].hidden == false)
						searchParams.search[tFields[i].name] = "#like '%" +  Ext.String.trim( tFields[i].value ) + "%'";
				}
				var pydwValue = searchForm.down('#pydw').getValue();
				if(pydwValue){
					searchParams.search['pydwh']="#like '%" + pydwValue + "%'";
				}
				
				var kkdwValue = searchForm.down('#kkdw').getValue();
				if(kkdwValue){
					searchParams.search['kkdwh']="#= '" + kkdwValue + "'";
				}
				
				var zymcValue = searchForm.down('#zymc').getValue();
				if(zymcValue){
					searchParams.search['zydm']="#like '%" + zymcValue + "%'";
				}
//				searchParams.search['kkdwh']="#= '" + szdwh + "'";
				var proxy = store.getProxy();
				proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				store.load();
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
				var searchForm = tab.down('#fggkSkxxSearchForm');
//				searchParams.search['kkdwh']="#= '" + szdwh + "'";
				var pGrid = tab.down('#skxxListFGGK');
				searchForm.getForm().reset();
				
				var store = pGrid.getStore(),proxy= store.getProxy();
				proxy.setExtraParam('params',Ext.JSON.encode(searchParams));
				store.load();
			},
		  
			search : function(o, e, eOpts) {
				var me = this;
				var tab = me.getCenter().getActiveTab();
				var searchForm = tab.down('#fggkSearchForm');
				var searchParams = {
					start : 0,
					limit : 15,
					page : 1,
					searchMode : 'simple',
					fieldNames : [],
					order : '',
					search : {}
				};

				var pGrid = tab.down('#fGgkZxkkjhList'), store = pGrid.getStore();
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
				
				var proxy = store.getProxy();
				proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				store.load();
			},

			searchAll : function(o, e, eOpts) {
				var me = this;
				var tab = me.getCenter().getActiveTab();
				var searchForm = tab.down('#fggkSearchForm');
				var pGrid = tab.down('#fGgkZxkkjhList');
				
				
				searchForm.getForm().reset();
				
				var searchParams = {
					start : 0,
					limit : 15,
					page : 1,
					searchMode : 'simple',
					order : '',
					search : {}
				};
				searchParams.search['ggkbzm'] = "#= '0'"
				var store = pGrid.getStore(), proxy = store.getProxy();
				proxy.setExtraParam('params', Ext.encode(searchParams));
				store.load();
		},
			
			
			getCenter : function() {
				return this.application.getController('main.MainController').getCenter();
			},

			initStore : function() {
				var me = this;
				var store = me.getStore('FGgkZxkkjhStore');
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
			    searchParams.search['ggkbzm']="#= '0'";
			    if(roleCode == 'Academy'){
			 	  	searchParams.search['kkdwh']="#= '" + szdwh + "'";
			    }
				skxxProxy.setExtraParam('params', Ext.JSON.encode(searchParams));

				proxy = store.getProxy();
				proxy.setExtraParam('params','');
				store.load();
				skxxStore.load();
//				skxxStore.load()
//				skxxStore.filterBy(function(record) {
//                      return record.get('ggkbzm') == '1';   
//                  });
			},

			onLaunch : function(record) {
				var me = this;
				var center = me.getCenter();
				var tab = center.down('#M' + record.get('parentId'));
				var removePanel = tab.down('#content');
				tab.remove(removePanel);
				var contentPanel = Ext.create('App.view.skxx.FGgkZxkkjhContentPanel',
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
						contentPanel.down('#skxxListFGGK').setDisabled(true);
						contentPanel.down('#fGgkZxkkjhList').setDisabled(true);
						contentPanel.down('#fggkSearchForm').setDisabled(true);
						contentPanel.down('#fggkSkxxSearchForm').setDisabled(true);
					}
					}
				});
			}
		})