Ext.define('App.controller.jxpk.JxPkjlController',{
	extend:'Ext.app.Controller',
	
	models:['jxpk.JxPkjlModel','skxx.SKXXModel','jxpk.PksjModel'],	
    stores: ['jxpk.SkxxAllStore','jxpk.JxPkjlStore','jxpk.SkxxStore','jxpk.JxPkjlCtStore','jxpk.PksjStore','jxpk.JxPkjlAllStore'],
	
	init:function(){
		this.control({
			'#skxxList button[itemId=schShowBtn]' : {
				render : this.setSchShowText
			  },
		   '#skxxList button[action=showSearch]' : {
				      click : this.showSearch
			},
			'#pkSearchForm button[action=search]':{
				click: this.search
			},
			'#pkSearchForm button[action=searchAll]':{
				click: this.searchAll
			},
			'#skxxList button[action=skxxDetail]':{
				click:this.skxxDetail
			},
			'#skxxList button[action=arrangeCourseList]':{
				click:this.arrangeCourseList
			},
			'#skxxList button[action=arrangeCourseGrid]':{
				click:this.arrangeCourseGrid
			},
			'#jxPkjlList button[action=delete]':{
				click:this.deletePkjl
			},
			'#jxPkjlList button[action=pkjlEdit]':{
					click:this.editPkjl
			},
			'#jxPkjlList button[action=pkjlDetail]':{
				click:this.detailPkjl
			}
		});
	},
			exportCourse : function(o, e, eOpts) {
//				var list = o.up('#jxPkjlList');
//				var me = this;
//				o.on('click',me.exportButtonClick())
			},
			
			exportButtonClick:function(){
			},
			
			search : function(o, e, eOpts) {
				var me = this;
				Ext.Ajax.request({
					url:'jxPksjCheckSj.action',
 		 			method:'get',
 		 			success : function(response, opts) {
						var result = Ext.decode(response.responseText);
						var success = result.result.success;
						if(success){
					var tab = me.getCenter().getActiveTab();
					var searchForm = tab.down('#pkSearchForm');
					var searchParams = {
						start : 0,
						limit : 15,
						page : 1,
						searchMode : 'simple',
						order : '',
						search : {}
					};
	
					var skxxList = tab.down('#skxxList'), skxxStore = skxxList.getStore();
					var pkjlList = tab.down('#jxPkjlList'), pkjlStore = pkjlList.getStore();
					var tFields = searchForm.query('textfield(true)');
					for (var i in tFields) {
						if (tFields[i].value)
							searchParams.search[tFields[i].name] = "#like '%" + Ext.String.trim( tFields[i].value )+ "%'";
					}
					
					var xnValue = searchForm.down('#xn').getValue();
					if(xnValue){
						searchParams.search['xn']="#like '%" + xnValue + "%'";
					}
					
					var xqValue = searchForm.down('#xq').getValue();
					if(xqValue){
						searchParams.search['xq']="#like '%" + xqValue + "%'";
					}
					
					var kkdwValue = searchForm.down('#kkdw').getValue();
					if(kkdwValue){
						searchParams.search['kkdwh']="#like '%" + kkdwValue + "%'";
					}
					
					var skxxProxy = skxxStore.getProxy();
					skxxProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
					skxxStore.load();
					
					var pkjlProxy = pkjlStore.getProxy();
					pkjlProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
					pkjlStore.load();
				}
 		 			}
				});
			},

				searchAll : function(o, e, eOpts) {
					var me = this;
					Ext.Ajax.request({
					url:'jxPksjCheckSj.action',
 		 			method:'get',
 		 			success : function(response, opts) {
						var result = Ext.decode(response.responseText);
						var success = result.result.success;
						if(success){
							var tab = me.getCenter().getActiveTab();
							
							var searchForm = tab.down('#pkSearchForm');
							var skxxList = tab.down('#skxxList'), skxxStore = skxxList.getStore();
							var pkjlList = tab.down('#jxPkjlList'), pkjlStore = pkjlList.getStore();
							searchForm.getForm().reset();
							
							var skxxProxy = skxxStore.getProxy();
							skxxProxy.setExtraParam('params', '');
							skxxStore.load();
						
							var pkjlProxy = pkjlStore.getProxy();
							pkjlProxy.setExtraParam('params', '');
							pkjlStore.load();
						}
 		 			}
					});
				},
	
			setSchShowText : function(o, eOpts) {
				var me = this;
				var searchForm = me.getCenter().down('#pkSearchForm');
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
				var searchForm = tab.down('#pkSearchForm');
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
		detailPkjl:function(o, e, eOpts){
			var me = this;
			var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
			if (recs.length == 0) {
				Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
			} else if (recs.length > 1) {
				Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
			} else if (recs.length == 1) {
					var win;
					var skxxDetailWins = Ext.ComponentQuery.query('#pkjlDetailWin');
				if(skxxDetailWins.length > 0){
					win = skxxDetailWins[0];
				}else{
		             win = new Ext.Window({
		            		itemId:'pkjlDetailWin',
		            		autoShow: true,
		            		title:'排课记录详情',
		            		iconCls:'detail_16',
		                    width: 780,
							height: 350,
		                    closeAction:'hide',
		            		resizable:false,
		            		shadow:true,
		            		modal:true,
		            		closable:true,
		            		constrainHeader:true,
		            		animCollapse:true,
		            		autoShow:true,
		            		bodyStyle:{
								background: '#fff'
							},
		                    items: [Ext.create('App.view.jxpk.JxPkjlForm')],
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
		        	var detailForm = win.down('#jxPkjlForm');
		        	detailForm.loadForm(recs[0]);
		        	detailForm.setView();
		        	detailForm.down('#czsj').setValue((recs[0].data.czsj).replace('T',' '))
		        	win.show();
		  	  
			}
		},
	
		editPkjl: function(o, e, eOpts){
				var me = this;
          		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
					var pkztm = recs[0].data.pkztm;
					var ggkbzm = recs[0].data.ggkbzm;
					
					if(pkztm == '1'){
						Ext.MessageBox.alert('提示', '该课程不能修改！');
					}else{
						if(roleCode == 'Academy' && ggkbzm == '1'){
							Ext.MessageBox.alert('提示', '该角色不能修改公共课！');
						}else{
							var skxxList = o.ownerCt.ownerCt.ownerCt.ownerCt.down('#skxxList');
							var pkjlList = o.ownerCt.ownerCt.ownerCt.ownerCt.down('#jxPkjlList');
							var application = me.getApplication();
			        		var controller = application.getController('App.controller.jxpk.PKEditController');
					  	    controller.onLaunch(o,skxxList,pkjlList);
						}
					}
				}
		
		},
	
		deletePkjl: function(o, e, eOpts){
    			var me = this;
    			var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
					if(pkztm == '1'){
						Ext.MessageBox.alert('提示', '该课程不能删除！');
					}else{
						if(roleCode == 'Academy' && ggkbzm == '1'){
								Ext.MessageBox.alert('提示', '该角色不能删除公共课！');
						}else{
							if (recs.length == 0) {
								Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
							}else {
									var pkztm = recs[0].data.pkztm;
    								var ggkbzm = recs[0].data.ggkbzm;
								Ext.MessageBox.confirm("确认",  "确定删除？",
										function(btn){
											if(btn == 'yes'){
												var ids = getSelIds(o.up('gridpanel'),'id');
												Ext.Ajax.request({
													url:'jxPkjlDel.action?ids=' + ids,
								 		 			method:'get',
								 		 			success : function(response, opts) {
														var result = Ext.decode(response.responseText);
														var success = result.result.success;
														if(success){
															 me.getStore('JxPkjlStore').load();
															 me.getStore('SkxxStore').load();
														}
								 		 			}
												})
											}
									})
								}
							}
					}
    		},
	
			skxxDetail:function(o, e, eOpts){
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
		
		arrangeCourseList:function(o, e, eOpts){
				var me = this;
          		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
						var skxxList = o.ownerCt.ownerCt.ownerCt.ownerCt.down('#skxxList');
						var pkjlList = o.ownerCt.ownerCt.ownerCt.ownerCt.down('#jxPkjlList');
						var application = me.getApplication();
		        		var controller = application.getController('App.controller.jxpk.PKController');
				  	    controller.onLaunch(o,skxxList,pkjlList);
					}
		},
		
		arrangeCourseGrid:function(o, e, eOpts){
				var me = this;
          		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
						var skxxList = o.ownerCt.ownerCt.ownerCt.ownerCt.down('#skxxList');
						var pkjlList = o.ownerCt.ownerCt.ownerCt.ownerCt.down('#jxPkjlList');
						var application = me.getApplication();
		        		var controller = application.getController('App.controller.jxpk.PKByGridController');
				  	    controller.onLaunch(o,skxxList,pkjlList);
					}
		},
		
			 
          addPyfa:function( o, e, eOpts ){
          	 	var me = this;
          		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
					 var operationValue = o.up('#pyfaDialogWin').down('#operation').getValue();//获得操作类型
					 	 var kkjhForms = Ext.ComponentQuery.query('#kkjhForm');
			    		 var kkjhForm = kkjhForms[kkjhForms.length - 1];
			    		 kkjhForm.down('#pyfah').setValue(recs[0].data.pyfah);
			    		 kkjhForm.down('#pyfa').setValue(recs[0].data.pyfamc);
			    		 kkjhForm.down('#bbh').setValue(recs[0].data.bbh);
			    		 kkjhForm.down('#pyfs').setValue(recs[0].data.pyfs);
			    		 kkjhForm.down('#pyfsm').setValue(recs[0].data.pyfsm);
			    	 var pyfaDialogWin = o.up('#pyfaDialogWin')
			    	 pyfaDialogWin.close();
				}
          },
			
			getCenter : function() {
				return this.application.getController('main.MainController').getCenter();
			},
			
			
			initStore : function() {
				var me = this;
				var store = me.getStore('JxPkjlStore'), proxy = store.getProxy();
					proxy.setExtraParam('params', '');
					store.load({callback:function(){
						var skxxStore = me.getStore('SkxxStore'), skxxProxy = skxxStore.getProxy();
						skxxProxy.setExtraParam('params', '');
						skxxStore.load();
					}});
							
//				var pkjlAllStore = me.getStore('JxPkjlAllStore'), pkjlAllProxy = pkjlAllStore.getProxy();
//				pkjlAllProxy.setExtraParam('params', '');
//				pkjlAllStore.load();
			},
			
			
			onLaunch : function(record) {
				var me = this;
				var center = me.getCenter();
				var tab = center.down('#M' + record.get('parentId'));
				var removePanel = tab.down('#content');
				tab.remove(removePanel);
				
				var contentPanel = Ext.create('App.view.jxpk.PKContentPanel',{
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
							
							var pkjlList  = contentPanel.down('#jxPkjlList');
							var skxxList = contentPanel.down('#skxxList');
							var pkjlStore  = pkjlList.getStore(),pkjlProxy = pkjlStore.getProxy();
							var skxxStore  = skxxList.getStore(),skxxProxy = skxxStore.getProxy();
							
							pkjlProxy.setExtraParam('pkType', 'ggk');
							skxxProxy.setExtraParam('pkType', 'ggk');
							
							skxxList.pkjlList = pkjlList
							me.initStore();
					}else{
						Ext.MessageBox.alert('提示', '当前不在排课时间范围内！');
						contentPanel.down('#skxxList').setDisabled(true);
						contentPanel.down('#jxPkjlList').setDisabled(true);
					}
			}
				});
			}
		})
