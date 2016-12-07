Ext.define('App.controller.pyfa.PYFAController',{
	extend:'Ext.app.Controller',
	
	models:['attachData.AttachModel','pyfa.PYFAModel','pyfa.FAKCModel','audit.AuditFlowLinkModel','audit.AuditDetailModel'],	
	stores:['attachData.AttachStore','pyfa.PYFAStore','pyfa.FAKCStore','pyfa.FAKCAllStore','zd.ZdXqbStore','pyfa.PYFATGStore',
				'pyfa.PYFAGetAllStore','pyfa.PYFAAllStore','pyfa.FAKCGetAllStore','pyfa.FAKCDetailStore','attachData.ViewPyfaFileTypeStore','audit.AuditFlowLinkStore','zd.ZdShztmStore','zd.ZdPyfsmStore','audit.AuditDetailStore'],
	
//    refs: [{  
//        selector: 'pyfaList > pyfaSearchForm',  
//        ref: 'pyfaSearchForm'  
//    }],
    
    flowCode:'PYFA',
    
	init:function(){
		this.control({
		  'pyfaList combo[itemId=numCmb]': {
				render: this.initPageSize,
				select: this.setPageSize
			},
		  'pyfaList button[itemId=schShowBtn]' : {
					render : this.setSchShowText
		   },
		   'pyfaList button[action=showSearch]' : {
			      click : this.showSearch
			},
			'pyfaList button[action=add]':{
				click:this.addPyfa
			},
			'pyfaList button[action=edit]':{
				click:this.editPyfa
			},
			'pyfaList button[action=delete]':{
				click:this.deletePyfa
			},
			'pyfaList button[action=detail]':{
				click:this.detailPyfa
			},
//			'pyfaList gridtoolbar button[action=download]':{
//				click:this.downloadPyfaFj
//			},
			'pyfaList button[action=addCourse]':{
				click:this.addCourse
			},
			'pyfaList button[action=withdraw]':{
				click:this.withdrawPYFA
			},
			'pyfaList button[action=auditDetail]':{
				click:this.auditDetail
			},
			'pyfaList button[action=submit]':{
				click:this.submitPyfa
			},
			'pyfaList button[action=toExcel]': {
					render: this.excelBtnRender
			 },
			 '#pyfaTgList button[action=detailTg]':{
					click:this.detailTgPyfa			 	
			 },
			'pyfaSearchForm button[action=search]' : {
				click : this.search
			},
			'pyfaSearchForm button[action=searchAll]' : {
				click : this.searchAll
			},
			'pyfaList button[action=import]':{
				click:this.importPyfa
			}
//			,
//			'uploadAttachList button[action=uploadAttach]':{
//				click:this.uploadAttach
//			}
		});
	},
	
	
		importPyfa:function(o, e, eOpts){
					var me = this;
					var application = me.getApplication();
		        	var controller = application.getController('App.controller.pyfa.ImportPYFAController');
				    controller.onLaunch(o);
		},
	
	searchPyfa:function(o, e,eOpts){
				var searchParams = {
					start : 0,
					limit : 15,
					page : 1,
					searchMode : 'simple',
					fieldNames : [],
					order : '',
					search : {}
				};
				var win = o.up('window');
				var searchForm = win.down('#searchForm');
				var pGrid = win.down('#pyfaList'), store = pGrid.getStore();
				
				for (var col in pGrid.exportCols) {
					searchParams.fieldNames.push(col);
				}

				var tFields = searchForm.query('textfield(true)');
				for (var i in tFields) {
					if (tFields[i].value && tFields[i].hidden == false)
						searchParams.search[tFields[i].name] = "#like '%" + Ext.String.trim( tFields[i].value )  + "%'";
				}
				var zymcValue = searchForm.down('#zymc').getValue();
				if(zymcValue){
					searchParams.search['zydm']="#= '" + zymcValue + "'";
				}
				var dwmcValue = searchForm.down('#dwmc').getValue();
				if(dwmcValue){
					searchParams.search['dwh']="#= '" + dwmcValue + "'";
				}
				var xslxValue = searchForm.down('#xslx').getValue();
				if(xslxValue){
					searchParams.search['xslxm']="#= '" + xslxValue + "'";
				}
				var proxy = store.getProxy();
				proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				store.load();
	},
	
	searchAllPyfa:function(o,e,eOpts){
				var win = o.up('window');
				var searchForm = win.down('#searchForm');
				var pGrid = win.down('#pyfaList');
				searchForm.getForm().reset();
				
				var store = pGrid.getStore(), proxy = store.getProxy();
				proxy.setExtraParam('params', '');
				store.load();
			
	},
	
	uploadAttach:function(o, e,eOpts){
		var pyfaValue = o.up('window').down('#pyfaFormTab').down('#pyfah').getValue();
		var uploadAttachList = o.up('window').down('#uploadAttachList');
		var me = this;
		var win = Ext.create('Ext.window.Window',{
				layout:'fit',
				width:380,
				closeAction:'destroy',
				height:150,
				resizable:false,
				shadow:true,
				autoShow:true,
				title:'附件上传',
				modal:true,
				closable:true,
				bodyStyle:'padding:5 5 5 5',
				billNo:pyfaValue,
				pGrid:uploadAttachList,
				animCollapse:true,
				items: [
					Ext.create('App.view.attachData.UploadForm',{
						itemId: 'uploadForm'
					})
				]
		});
	},
	
	    setSchShowText: function(o, eOpts){
	    	var me = this;
			var tab = me.getCenter().getActiveTab();
			var searchForm = tab.down('#searchForm');
			if(searchForm)
				if(!searchForm.hidden){
					o.setText('隐藏查询');
					o.setTooltip('隐藏查询');
				}else{
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

				var pGrid = tab.down('#pyfaList'), store = pGrid.getStore();
				for (var col in pGrid.exportCols) {
					searchParams.fieldNames.push(col);
				}

				var tFields = searchForm.query('textfield(true)');
				for (var i in tFields) {
					if (tFields[i].value && tFields[i].hidden == false)
						searchParams.search[tFields[i].name] = "#like '%" + Ext.String.trim( tFields[i].value )  + "%'";
				}
				var zymcValue = searchForm.down('#zymc').getValue();
				if(zymcValue){
					searchParams.search['zydm']="#= '" + zymcValue + "'";
				}
				var dwmcValue = searchForm.down('#dwmc').getValue();
				if(dwmcValue){
					searchParams.search['dwh']="#= '" + dwmcValue + "'";
				}
				var xslxValue = searchForm.down('#xslx').getValue();
				if(xslxValue){
					searchParams.search['xslxm']="#= '" + xslxValue + "'";
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
				var pGrid = tab.down('#pyfaList');
				searchForm.getForm().reset();
				
//				var toolbar = pGrid.down('#toolbar');
//				toolbar.moveFirst();
				
				var store = me.getStore('PYFAStore'), proxy = store.getProxy();
				proxy.setExtraParam('params', '');
				store.load({callback:function(){
					var toolbar = pGrid.down('#toolbar');
					toolbar.moveFirst()
				}});
			},
		
			excelBtnRender: function(o, e, eOpts){
				o.operation = 'add';
			    o.actionUrl = 'pyfatoExcel.action';
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
		    
			addPyfa:function(o, e, eOpts){
//				if(userName != 'admin'){
					var me = this;
					var application = me.getApplication();
		        	var controller = application.getController('App.controller.pyfa.AddPYFAController');
				    controller.onLaunch(o);
//				}else{
//					Ext.MessageBox.alert('提示','该用户不能增加培养方案！');
//				}
			},
	
			editPyfa:function(o, e, eOpts){
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
						if (recs.length == 0) {
							Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
						} else if (recs.length > 1) {
							Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
						} else if (recs.length == 1) {
							if(recs[0].data.ztm == 'CG' || recs[0].data.ztm == 'WTG'){
									var me = this;
									var application = me.getApplication();
						        	var controller = application.getController('App.controller.pyfa.EditPYFAController');
								    controller.onLaunch(o);
					    	}else{
								Ext.MessageBox.alert('提示','此培养方案不可以修改！');
							}
					}
		  	},
			
		  deletePyfa:function(o, e, eOpts){
//		  		if(!isSuperRight){
		  	    var rec = getSelRec(o.up('gridpanel'));
		  		var me = this;
		  		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
		  		if(recs.length == 0){
		  			Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
		  		}else{
		  			var flag = true;
		  			for(var i = 0; i < recs.length;i++){ //判断是否存在不是草稿状态的培养方案
		  				if(recs[i].data.ztm != 'CG'){
		  					flag = false;
		  					break;
		  				}
		  			}
		  			if(flag){
						var action = "pyfaDel.action";
						var ids = getSelIds(o.up('gridpanel'),'pyfah');
						if(ids.length ==0) return;
						var store = me.getStore('PYFAStore');
						DoDelete(action,'pyfah',ids, store);
		  			}else{
		  				Ext.MessageBox.alert('提示', '只能删除草稿状态的培养方案，请重新选择！');
		  			}
		  		}
//		  		}
//		  		else{
//		  				Ext.MessageBox.alert('提示','该用户不能删除开课计划！');
//		  		}
		  },
		  
		  detailTgPyfa:function(o, e, eOpts){
		  	   var rec = getSelRec(o.up('gridpanel'));
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
						var pyfaDetail = Ext.create('App.view.pyfa.PYFADetail',{
							baseCls: 'my-panel-no-border'
						});
		            	var win = new Ext.Window({
		            		itemId:'pyfaTgDetailWin',
		            		autoShow: true,
		            		title:'培养方案详情',
		            		iconCls:'detail_16',
		                    layout: 'fit',
		                    width: 755,
		                    height: 425,
		                    closeAction:'destory',
		            		resizable:false,
		            		shadow:true,
		            		modal:true,
		            		closable:true,
		            		constrainHeader:true,
		            		animCollapse:true,
		            		autoShow:true,
		                    items: [Ext.create('App.view.pyfa.PYFADetailForm',{
		                    	itemId:'pyfaDetailForm'
		                    })],
		                    buttons: [{
				        	    text: '退出',
				        	    iconCls:'return_16',
				                handler: function () {
				                		var me = this;
					                    me.up('#pyfaTgDetailWin').close();
				                }
				            }]
		          });
		            win.down('#pyfaDetailTab').add(pyfaDetail);
		        	var fakcListTab = win.down('#fakcListTab');
		        	fakcListTab.down('#fakcList').isDetail = true;
		        	fakcListTab.down('#pyfah').setValue(rec.data.pyfah);
		        	pyfaDetail.loadForm(rec);
		        	pyfaDetail.setViewForm();
		  	 }
		
		  },
		  
  		detailPyfa:function(o, e, eOpts){
		  	   var rec = getSelRec(o.up('gridpanel'));
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
					var me = this;
					var application = me.getApplication();
		        	var controller = application.getController('App.controller.pyfa.DetailPYFAController');
				    controller.onLaunch(o);
				}
		},
		  
		  
		addCourse:function(o, e, eOpts){ 
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
					if(recs[0].data.ztm == 'CG' || recs[0].data.ztm == 'WTG'){
						var me = this;
						var application = me.getApplication();
			        	var controller = application.getController('App.controller.pyfa.FAKCController');
					    controller.onLaunch(o,recs);
		      	   	}else{
					  	 	Ext.MessageBox.alert('提示','此培养方案不可以设置课程！');
					   	}
			 }
		},
			
		withdrawPYFA:function(o, e, eOpts){
//			if(!isSuperRight){
				var rec = getSelRec(o.up('gridpanel'));
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
					if(rec.data.ztm == 'CG'){
						Ext.MessageBox.alert('提示', '该培养方案已经是草稿状态！');
					}else if(rec.data.ztm == 'DSH'){
						var pyfah = rec.data.pyfah;
						var ztm = 'CG';
						var zt = encodeURI(encodeURI("草稿状态"));
						Ext.Ajax.request({
							url:'pyfaUpdateZtm.action?pyfah='+ pyfah + '&ztm=' + ztm + '&zt=' +zt,
							method:'post',
							success:function(response, opts){
								var result = Ext.decode(response.responseText);
								var success = result.result.success;
								if(success){
									var msg = "撤回成功！";
									Ext.MessageBox.show({
							           title: '提示',
							           msg: msg,
							           buttons: Ext.MessageBox.OK,
							           icon: Ext.MessageBox.INFO,
							           fn: function(id, msg){
							           	  Ext.StoreMgr.lookup('PYFAStore').load();
									    }  
							        });
								}
							},
							failure : function(form, action) {
								var errmsg = "撤回失败！";
								 Ext.MessageBox.show({
						           title: '错误',
						           msg: errmsg,
						           buttons: Ext.MessageBox.OK,
						           icon: Ext.MessageBox.ERROR,
						           fn: function(id, msg){  
								    }  
						       });
							}
						})
					}else{
							Ext.MessageBox.alert('提示', '该培养方案不可以撤回！');
					}
				}
//			}else{
//				Ext.MessageBox.alert('提示','该用户不能撤回培养方案！');
//			}
	  },
	  
	  auditDetail:function(o,e,eOpts){
	  	var me = this;
	  	var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
			if (recs.length == 0) {
				Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
			} else if (recs.length > 1) {
				Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
			} else if (recs.length == 1) {
				var auditDetailWins = Ext.ComponentQuery.query('#auditDetailWin');
				var win;
				if(auditDetailWins.length > 0){
					win = auditDetailWins[0];
				}else{
					 win = new Ext.Window({
						itemId:'auditDetailWin',
						title:'审批记录',
						iconCls:'detail_16',
						width: 805,
						height: 460,
						constrainHeader:true,
						layout:'fit',
						closeAction:'hide',
						resizable:false,
						shadow:true,
						modal:true,
						closable:true,
						animCollapse:true,
			//			autoScroll:true,
						autoShow:true,
						bodyStyle:{
							background: '#fff'
						},
						items:[Ext.create('App.view.audit.AuditDetailList',{
							itemId:'auditDetailList',
							title:'',
							margin:'0 0 0 0'
						})]
				})
				}
					var searchParams = {
						start : 0,
						page : 1,
						searchMode : 'simple',
						fieldNames : [],
						order : '',
						search : {}
				};
	        	var pGrid = win.down('#auditDetailList');
	        	for (var col in pGrid.exportCols) {
						searchParams.fieldNames.push(col);
				}
				searchParams.search['proNo'] = "= '" + recs[0].data.pyfah + "'";
	        	var store = pGrid.getStore();
	        	var proxy =  store.getProxy();
	        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	        	store.load();
	        	win.show();
			}
	  },
	  
	  
		  	submitPyfa:function(o, e, eOpts){
		  		var me = this;
				if(userName != 'admin'){
				  	var rec = getSelRec(o.up('gridpanel'));
				  	if(rec != undefined){
				  		var flagCode = rec.data.ztm;
				  		if(flagCode == 'CG' || flagCode == 'WTG'){
				  			Ext.MessageBox.alert('提示','请先提交！');
				  		}else if(flagCode == 'TG'){
				  			Ext.MessageBox.alert('提示','该培养方案已经审核通过！');
				  		}else{
				  			var linkRec = me.getFlowLinkRecord(flagCode)
					  		if(linkRec != undefined){
						  		var auditDetail = me.setAuditDetailDefaultValue(rec)
								//审核状态
								var shzt = {};
								if(flagCode == 'WTG'){
									shzt['shztm'] = 'CG';
									shzt['shzt'] = '草稿状态';
								}else if(flagCode == 'CG'){
									shzt['shztm'] = 'DSH';
									shzt['shzt'] = '待审核状态';
								}else{
									shzt['shztm'] = linkRec.get('nextFlagCode');
									shzt['shzt'] = linkRec.get('nodeName')
								}
								
						  		var application = me.getApplication();
					        	var controller = application.getController('App.controller.pyfa.SubmitPYFAController');
							    controller.onLaunch(o,shzt,auditDetail);
					  		}else{
				  				Ext.MessageBox.alert('提示','请先添加审批流程！');
				  			}
				  		}
			  		}
		  		}else {
			  			Ext.MessageBox.alert('提示','该用户不可以审核培养方案！');
			  		}
			},
			
			getFlowLinkRecord:function(flagCode){
				var me = this;
				var linkStore = me.getStore('AuditFlowLinkStore');
				var index = linkStore.findBy(function(record ,id){
					return record.get('auditRole') == roleCode && record.get('flowCode') == me.flowCode
							&& record.get('flagCode') == flagCode;
				})
				return linkStore.getAt(index)
			},
			
			setAuditDetailDefaultValue:function(rec){
				var me = this;
				var auditDetail = {};
				auditDetail['userName'] = userName;
			    auditDetail['userCname'] = userCName;
				auditDetail['flowCode'] = me.flowCode;
				auditDetail['flagCode'] = rec.data.ztm;
				auditDetail['proNo'] = rec.data.pyfah;
				return auditDetail;
			},
			
	  		getShzt:function(shztm){
	  			var me = this;
	  			var ztStore = me.getStore('ZdShztmStore');
	  			var index = ztStore.find('shztm',shztm);
	  			if(index == -1)
	  				shzt = '';
	  			else 
	  		    	var shzt = ztStore.getAt(index).get('shzt');
	  		    return shzt;
	  		},
	  	
	  		
			getCenter : function() {
			    return this.application.getController('main.MainController').getCenter();
			},
			
			initStore:function(){
				var me = this;
				var store = me.getStore('PYFAStore'), proxy = store.getProxy();
				proxy.setExtraParam('params','');
				proxy.setExtraParam('operation','init');
				store.load();
				
				var linkStore = me.getStore('AuditFlowLinkStore'),linkProxy = linkStore.getProxy();
				linkProxy.setExtraParam('params','');
				linkStore.load();
				
		
				var fakcStore = me.getStore('FAKCGetAllStore'),fakcProxy = fakcStore.getProxy();
				fakcProxy.setExtraParam('params','');
				fakcStore.load();
			},
			
			setOperationBtn:function(contentPanel){
				var pyfaList = contentPanel.down('#pyfaList');
				if(roleCode == 'GSJX'){
					
				}else if(roleCode == 'Academy'){
					pyfaList.down('#submitBtn').setVisible(false);
				}else if(roleCode == 'School'){
					pyfaList.down('#withdrawBtn').setVisible(false);
					pyfaList.down('#addBtn').setVisible(false);
					pyfaList.down('#editBtn').setVisible(false);
					pyfaList.down('#deleteBtn').setVisible(false);
					pyfaList.down('#chooseCourseBtn').setVisible(false);
				}else if(roleCode == 'SuperAdmin'){
				
				}else if(roleCode == 'Personal'){
				
				}
			},
			
			
//			setOperationBtn:function(contentPanel){
//				if(!isSuperRight){
//					var me = this;
//					var linkStore = me.getStore('AuditFlowLinkStore');
//					var flag = false;
//					for(var i = 0;i < linkStore.getCount();i++){//判断该角色是否有审批流程
//						if(linkStore.getAt(i).get('auditRole') == roleCode){
//							flag = true;
//							break;
//						} 
//					}
//					var pyfaList = contentPanel.down('#pyfaList');
//					if(!flag){
//						pyfaList.down('#submitBtn').setVisible(false);
//					}else{
//						if(roleCode != 'GSJX'){
//							pyfaList.down('#withdrawBtn').setVisible(false);
//							pyfaList.down('#addBtn').setVisible(false);
//							pyfaList.down('#editBtn').setVisible(false);
//							pyfaList.down('#deleteBtn').setVisible(false);
//							pyfaList.down('#chooseCourseBtn').setVisible(false);
//						}
//					}
//				}
//			},
			
			onLaunch : function(record) {
				var me = this;
				me.initStore();
				var center = me.getCenter();
				var tab = center.down('#M' + record.get('parentId'));
				var removePanel = tab.down('#content');
				tab.remove(removePanel);
				var contentPanel = Ext.create('App.view.pyfa.PYFAContentPanel',
						{
							itemId : 'content',
							parentId : record.get('id'),
							autoScroll: true
						});
//				if(isSuperRight){
//					contentPanel.down('#pyfaTgList').setVisible(false);
//				}
				tab.add(contentPanel);
				center.setActiveTab(tab);
				me.setOperationBtn(contentPanel);
			}
})
