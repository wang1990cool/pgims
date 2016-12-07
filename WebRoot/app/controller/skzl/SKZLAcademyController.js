Ext.define('App.controller.skzl.SKZLAcademyController', {
			extend : 'Ext.app.Controller',

			models : ['skzl.SKZLModel'],
			stores : ['skzl.SKZLStore','zd.ZdWjlxmStore'],
			
			refs : [{
						selector : 'skzlSearchForm',
						ref : 'skzlSearchForm'
					}],

			
			init : function() {
				this.control({
							'skzlSearchList combo[itemId=numCmb]': {
								render: this.initPageSize,
								select: this.setPageSize
							},
						  'skzlSearchList button[itemId=schShowBtn]' : {
							render : this.setSchShowText
						   },
						   'skzlSearchList button[action=showSearch]' : {
							      click : this.showSearch
							},
							'skzlSearchList  button[action=detail]':{
								click: this.detailSkzl
							},
							'skzlSearchForm button[action=search]' : {
								click : this.search
							},
							'skzlSearchForm button[action=searchAll]' : {
								click : this.searchAll
							}
						})
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

				var pGrid = tab.down('#skzlList'), store = pGrid.getStore();
				for (var col in pGrid.exportCols) {
					searchParams.fieldNames.push(col);
				}

				var tFields = searchForm.query('textfield(true)');
				for (var i in tFields) {
					if (tFields[i].value)
						searchParams.search[tFields[i].name] = "#like '%" +Ext.String.trim( tFields[i].value ) + "%'";
				}
				
				var kkdwValue = searchForm.down('#kkdw').getValue();
				if(kkdwValue){
					searchParams.search['kkdwh']="#= '" + kkdwValue + "'";
				}
				
				var zllxmValue = searchForm.down('#zllxm').getValue();
				if(zllxmValue){
					searchParams.search['zllxm']="#= '" + zllxmValue + "'";
				}
				var xnValue = searchForm.down('#xn').getValue();
				if(xnValue){
					searchParams.search['xn']="#= '" + xnValue + "'";
				}
				var xqValue = searchForm.down('#xq').getValue();
				if(xqValue){
					searchParams.search['xq']="#= '" + xqValue + "'";
				}
				
				var ztValue = searchForm.down('#ztm').getValue();
				if(ztValue){
					searchParams.search['ztm']="#= '" + ztValue + "'";
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
				var pGrid = tab.down('#skzlList');
				searchForm.getForm().reset();

				var store = me.getStore('SKZLStore'), proxy = store.getProxy();
				proxy.setExtraParam('params', '');
				store.load();
			},
	    
	verifySkzl:function(o, e, eOpts){
		var me = this;
		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
		if (recs.length == 0) {
			Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
		} else{
				var flag = true;
				for(var i = 0; i < recs.length; i++){
					if(recs[i].get('ztm') != '2') flag = false;
				}
				if(flag){
					Ext.MessageBox.confirm("确认","确定确认？",function(btn){
							if(btn == 'yes'){
								var JSONList = [];
								//获得Store中的数据
								var flag = true;
								for (var i = 0; i < recs.length; i++) { 
									var zlJson = {};		
									var jsonObject = JSON.parse(Ext.encode(recs[i].data));
									for(var item in jsonObject){
										zlJson[item] = jsonObject[item];
									}
									zlJson['ztm'] = '3';
									zlJson['zt'] = '已确认';
									JSONList.push(JSON.stringify(zlJson));
								}
								Ext.Ajax.request({
										url:'skzlEditBatch.action',
										method:'post',
										params:{datas:JSONList},
										success:function(response, opts){
											var result = Ext.decode(response.responseText);
											var success = result.result.success;
											if(success){
												var msg = "确认成功！";
												Ext.MessageBox.show({
										           title: '提示',
										           msg: msg,
										           buttons: Ext.MessageBox.OK,
										           icon: Ext.MessageBox.INFO,
										           fn: function(id, msg){
										          		me.getStore('SKZLStore').load();
										        	}  
										        });	
											}
										}
									})
							}
					})
				}else{
						Ext.MessageBox.alert('提示', '只能确认已提交状态的数据，请重新选择！');
				}
			}
	    },
	    
	    withdrawSkzl:function(o, e, eOpts){
			var me = this;
			var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
			if (recs.length == 0) {
				Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
			} else{
				var flag = true;
				for(var i = 0; i < recs.length; i++){
					if(recs[i].get('ztm') != '2') flag = false;
				}
				if(flag){
					Ext.MessageBox.confirm("确认","确定打回？",function(btn){
							if(btn == 'yes'){
								var JSONList = [];
								//获得Store中的数据
								var flag = true;
								for (var i = 0; i < recs.length; i++) { 
									var zlJson = {};		
									var jsonObject = JSON.parse(Ext.encode(recs[i].data));
									for(var item in jsonObject){
										zlJson[item] = jsonObject[item];
									}
									zlJson['ztm'] = '1';
									zlJson['zt'] = '草稿';
									JSONList.push(JSON.stringify(zlJson));
								}
								Ext.Ajax.request({
										url:'skzlEditBatch.action',
										method:'post',
										params:{datas:JSONList},
										success:function(response, opts){
											var result = Ext.decode(response.responseText);
											var success = result.result.success;
											if(success){
												var msg = "确认成功！";
												Ext.MessageBox.show({
										           title: '提示',
										           msg: msg,
										           buttons: Ext.MessageBox.OK,
										           icon: Ext.MessageBox.INFO,
										           fn: function(id, msg){
										          		me.getStore('SKZLStore').load();
										        	}  
										        });	
											}
										}
									})
							}
					})
				}else{
						Ext.MessageBox.alert('提示', '只能打回已提交状态的数据，请重新选择！');
				}
			}
	    },
	    
	   deleteSkzl:function(o, e, eOpts){
	   		var me = this;
	   		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
	   		if (recs.length == 0) {
				Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
			}else if (recs.length > 1) {
				Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
			}else{
			var ztm = recs[0].get('ztm');
			if(ztm == '0'){
				Ext.MessageBox.alert('提示', '请先上传资料！');
			}else if(ztm == '2'){
				Ext.MessageBox.alert('提示', '教学资料已经提交，不能删除资料！');
			}else if(ztm == '3'){
				Ext.MessageBox.alert('提示', '教学资料已经确认，不能删除资料！');
			}else if(ztm == '1'){
					Ext.MessageBox.confirm("确认","确定删除资料？",function(btn){
							if(btn == 'yes'){
								var zlJson = {};		
								var jsonObject = JSON.parse(Ext.encode(recs[0].data));
								for(var item in jsonObject){
									zlJson[item] = jsonObject[item];
								}
								zlJson['ztm'] = '0';
								zlJson['zt'] = '未上传';
								zlJson['zlwj'] = null;
								zlJson['zlscsj'] = null;
								zlJson['zlscr'] = null;
								zlJson['zlscip'] = null;
								zlJson['zlwj'] = null;
								
								Ext.Ajax.request({
										url:'skzlFileDeleteZl.action',
										method:'post',
										params:{datas:Ext.encode(zlJson)},
										success:function(response, opts){
											var result = Ext.decode(response.responseText);
											var success = result.success;
											if(success){
												var msg = "删除资料成功！";
												Ext.MessageBox.show({
										           title: '提示',
										           msg: msg,
										           buttons: Ext.MessageBox.OK,
										           icon: Ext.MessageBox.INFO,
										           fn: function(id, msg){
										          		me.getStore('SKZLStore').load();
										        	}  
										        });	
											}
										}
									})
							}
					})
			}
		 }
	   },
	    
	 okSkzl:function(o, e, eOpts){
		var me = this;
		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
		if (recs.length == 0) {
			Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
		} else if (recs.length > 1) {
			Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
		}else{
			var ztm = recs[0].get('ztm');
			if(ztm == '0'){
				Ext.MessageBox.alert('提示', '请先上传教学资料！');
			}else if(ztm == '2'){
				Ext.MessageBox.alert('提示', '教学资料已经提交！');
			}else if(ztm == '3'){
				Ext.MessageBox.alert('提示', '教学资料已经确认，不得提交！');
			}else if(ztm == '1'){
					Ext.MessageBox.confirm("确认","确定提交？",function(btn){
							if(btn == 'yes'){
								var zlJson = {};		
								var jsonObject = JSON.parse(Ext.encode(recs[0].data));
								for(var item in jsonObject){
									zlJson[item] = jsonObject[item];
								}
								zlJson['ztm'] = '2';
								zlJson['zt'] = '已提交';
								Ext.Ajax.request({
										url:'skzlEdit.action',
										method:'post',
										params:{datas:Ext.encode(zlJson)},
										success:function(response, opts){
											var result = Ext.decode(response.responseText);
											var success = result.result.success;
											if(success){
												var msg = "提交成功！";
												Ext.MessageBox.show({
										           title: '提示',
										           msg: msg,
										           buttons: Ext.MessageBox.OK,
										           icon: Ext.MessageBox.INFO,
										           fn: function(id, msg){
										          		me.getStore('SKZLStore').load();
										        	}  
										        });	
											}
										}
									})
							}
					})
			}
		}
	},
	    
	    uploadSkzl:function(o, e, eOpts){
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {	  
					var ztm = recs[0].get('ztm');
					if(ztm == '2' || ztm == '3'){
						Ext.MessageBox.alert('提示', '该状态不能上传资料！');
					}else{
						var me = this;
						var application = me.getApplication();
		        		var controller = application.getController('App.controller.skzl.SKZLUploadController');
				  	    controller.onLaunch(o);
					}
				}
	    },

		    setPageSize: function(o, e, eOpts){
		    	var pGrid = o.up('gridpanel');
		        pSize = o.getValue();
		        pGrid.store.pageSize = pSize;
		        pGrid.store.load();
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

		 excelBtnRender: function(o, e, eOpts){
			   o.actionUrl = 'kcktoExcel.action'
		  },
		  

			detailSkzl:function(o, e, eOpts){
				var rec = getSelRec(o.up('gridpanel'));
			   if(rec != undefined){
	        		var skzlWins = Ext.ComponentQuery.query('#skzlDetailWin');
	        		if(skzlWins.length > 0) {
		        		var win = skzlWins[0];
		        		win.setTitle('资料详情');
		        		win.setIconCls('detail_16');
		        		win.show();
	        	}else{
					var win = new Ext.Window({
						layout:'fit',
						itemId:'skzlDetailWin',
						autoShow:true,
						title:'资料详情',
						iconCls:'detail_16',
			            width: 755,
		           	    height: 320,
			            closeAction:'hide',
			    		resizable:false,
			    		shadow:true,
			    		modal:true,
			    		constrainHeader:true,
			    		closable:true,
			    		animCollapse:true,
			    		autoShow:true,
	    				items: [Ext.create('App.view.skzl.SKZLDetail')]
					});
	        	}
				var skzlDetail = win.down('form');
	        	skzlDetail.loadForm(rec);
	        	skzlDetail.setView();
	        	}
			},


			getCenter : function() {
				return this.application.getController('main.MainController').getCenter();
			},

			initStore : function() {
				var me = this;
				var store = me.getStore('SKZLStore'), proxy = store.getProxy();
				proxy.setExtraParam('params', '');
				store.load();
//				var wjlxStore = me.getStore('ZdWjlxmStore')
//				var wjlxProxy = wjlxStore.getProxy();
//				wjlxProxy.setExtraParam('params', '');
//				wjlxStore.load();
			},

			setOperationBtn:function(contentPanel){
				var skzlList = contentPanel.down('#skzlList');
				if(roleCode == 'GSJX'){
					skzlList.down('#uploadBtn').setVisible(false);
					skzlList.down('#deleteBtn').setVisible(false);
					skzlList.down('#okBtn').setVisible(false);
				}else if(roleCode == 'Academy'){
					
				}else if(roleCode == 'School'){
					
				}else if(roleCode == 'SuperAdmin'){
					
				}else if(roleCode == 'Personal'){
					skzlList.down('#withdrawBtn').setVisible(false);
					skzlList.down('#verifyBtn').setVisible(false);
				}
			},
			
			onLaunch : function(record) {
				var me = this;
				me.initStore();
				var center = me.getCenter();
				var tab = center.down('#M' + record.get('parentId'));
				var removePanel = tab.down('#content');
				tab.remove(removePanel);
				var contentPanel = Ext.create('App.view.skzl.SKZLSearchContentPanel',
						{
							itemId : 'content',
							parentId : record.get('id')
						});

				tab.add(contentPanel);
				center.setActiveTab(tab);
//				me.setOperationBtn(contentPanel);
			}
		})