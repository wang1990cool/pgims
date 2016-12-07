Ext.define('App.controller.skxx.SKXXController', {
			extend : 'Ext.app.Controller',

			models : ['skxx.SKXXModel','skxx.SKJHGXModel','skxx.ViewSkxxmxModel'],
			stores : ['skxx.SKXXStore','skxx.SKJHGXStore','skxx.ViewSkxxmxStore'],

//			refs: [{  
//		        selector: 'skxxList > skxxSearchForm',  
//		        ref: 'skxxSearchForm'  
//		    }],
			
			init : function() {
				this.control({
				'#skxxList combo[itemId=numCmb]': {
						render: this.initPageSize,
						select: this.setPageSize
					},
				  '#skxxList button[itemId=schShowBtn]' : {
							render : this.setSchShowText
				   },
				   '#skxxList button[action=showSearch]' : {
					      click : this.showSearch
					},
					'#skxxList button[action=edit]':{
						click:this.editClass
					},
					'#skxxList button[action=detail]':{
						click:this.detailClass
					},
					'#skxxList  button[action=delete]':{
						click : this.deleteClass
					},
					'#skxxList button[action=arrangeTeacher]':{
						click: this.arrangeTeacher
					},
					'#skxxSearchForm button[action=search]':{
						click: this.search
					},
					'#skxxSearchForm button[action=searchAll]':{
						click: this.searchAll
					},
					'#skxxList button[action=toExcel]': {
						render: this.excelBtnRender
					 }
				})
			},
			
			excelBtnRender: function(o, e, eOpts){
			    o.actionUrl = 'skxxtoExcel.action';
			 },
			
			arrangeTeacher:function(o, e, eOpts){
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if(recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作的记录！');
				}else if(recs.length > 1){
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				}else if(recs.length == 1){
					var me = this;
					var skxxList = o.up('#skxxList')
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
					var skxxList = o.up('#skxxList')
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
						  	    controller.onLaunch(o,'ggk',null,skxxList);
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
							  	    controller.onLaunch(o,'ggk',kkkhArray,null,skxxList);
							}else if(kkkhArray.length == 1){
									var controller = application.getController('App.controller.skxx.EditSkxxController');
							  	     controller.onLaunch(o,null,skxxList);
							}
						}
					}
				})
			}
	},
			
			detailClass:function(o, e, eOpts){
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
				}else{
		            	var win = new Ext.Window({
		            		itemId:'skxxDetailWin',
		            		autoShow: true,
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
		        	win.show();
		  	  }
			},
			
			deleteClass:function(o, e, eOpts){
				var me = this;
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
							}
							)
							
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
									if(temp.length > 1){
										for(var i = 0; i < temp.length;i++)
											kkkhArr.push(temp[i])
	//									divide = true;
									}
									else if(temp.length == 1){
										kkkhArr.push(temp[0])
	//									indepedent = true;
									}
								})
							}
						}
//						
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
//										           		 
//										          		 Ext.StoreMgr.lookup('SKXXStore').load();
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
										           		 
										          		 Ext.StoreMgr.lookup('SKXXStore').load();
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
				var searchForm = me.getCenter().down('#skxxSearchForm');
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
				var searchForm = tab.down('#skxxSearchForm');
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
			   o.actionUrl = 'skxxtoExcel.action'
		  },
		  
			search : function(o, e, eOpts) {
				var me = this;
				var tab = me.getCenter().getActiveTab();
				var searchForm = tab.down('#skxxSearchForm');
				var searchParams = {
					start : 0,
					limit : 15,
					page : 1,
					searchMode : 'simple',
					fieldNames : [],
					order : '',
					search : {}
				};

				var pGrid = tab.down('#skxxList'), store = pGrid.getStore();
				for (var col in pGrid.exportCols) {
					searchParams.fieldNames.push(col);
				}

				var tFields = searchForm.query('textfield(true)');
				for (var i in tFields) {
					if (tFields[i].value)
						searchParams.search[tFields[i].name] = "#like '%" + Ext.String.trim( tFields[i].value )+ "%'";
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
				
				var toolbar = pGrid.down('#toolbar');
				toolbar.moveFirst()
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
		
		var searchForm = tab.down('#skxxSearchForm');
		var pGrid = tab.down('#skxxList');
		searchForm.getForm().reset();

		
//		var toolbar = pGrid.down('#toolbar');
//		toolbar.moveFirst()
		var store = pGrid.getStore(), proxy = store.getProxy();
		proxy.setExtraParam('params', '');
		store.load();
	},
			
	detailKKJH:function(o, e, eOpts){
		
	},
			
		addKKJH:function(o, e, eOpts){
//			Ext.StoreMgr.lookup('PYGRJHKCStore').removeAll();
			var me = this;
			var application = me.getApplication();
        	var controller = application.getController('App.controller.jxkkjh.AddKKJHController');
		    controller.onLaunch(o);
		},
			
		  deleteKKJH:function(o, e, eOpts){
		    	var me = this;
				var action = "kkjhDel.action";
				var ids = getSelIds(o.up('gridpanel'),'kkjhh');
				if(ids.length ==0) return;
				var store =  Ext.getCmp('kkjhList').getStore();
				DoDelete(action,'kkjhh',ids, store);
		  },

			getCenter : function() {
				return this.application.getController('main.MainController').getCenter();
			},

			initStore : function() {
				var me = this;
				var store = me.getStore('SKXXStore');
				proxy = store.getProxy();
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
				var contentPanel = Ext.create('App.view.skxx.SKXXContentPanel',
						{
							itemId : 'content',
							parentId : record.get('id')
						});
				tab.add(contentPanel);
				center.setActiveTab(tab);
			}
		})