Ext.define('App.controller.jxkkjh.KKJHController', {
			extend : 'Ext.app.Controller',

			models : ['jxkkjh.KKJHModel','jxkkjh.KKJHMXModel','main.PageModel',
				'audit.AuditFlowLinkModel','audit.AuditDetailModel'],
			stores : ['jxkkjh.KKJHStore','jxkkjh.KKJHTGStore','audit.AuditFlowLinkStore',
				'zd.TyNjbStore','zd.ZdXqbStore','main.PageStore','audit.AuditDetailStore'],

			refs : [{
						selector : 'kkjhList > kkjhSearchForm',
						ref : 'kkjhSearchForm'
					}],

			init : function() {
				this.control({
				'kkjhList combo[itemId=numCmb]': {
						render: this.initPageSize,
						select: this.setPageSize
					},
				  'kkjhList button[itemId=schShowBtn]' : {
							render : this.setSchShowText
				   },
				   'kkjhList button[action=showSearch]' : {
					      click : this.showSearch
					},
					'kkjhList button[action=add]':{
						click : this.addKKJH
					},
					'kkjhList button[action=delete]':{
						click:this.deleteKKJH
					},
					'kkjhList button[action=edit]':{
						click:this.editKKJH
					},
					'kkjhList button[action=detail]':{
						click:this.detailKKJH
					},
					'kkjhList button[action=withdraw]':{
						click:this.withdrawKkjh
					},
					'kkjhList button[action=submit]':{
						click:this.submitKkjh
					},
					'kkjhList button[action=auditDetail]':{
						click:this.auditDetail
					},
					'kkjhSearchForm button[action=search]' : {
						click : this.search
					},
					
					'kkjhSearchForm button[action=searchAll]' : {
						click : this.searchAll
					},
					'kkjhList button[action=toExcel]': {
						render: this.excelBtnRender
					 }
				})
			},
			
			flowCode:'KKJH',
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
		 		 o.operation = 'add'
			   o.actionUrl = 'kkjhtoExcel.action'
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

				var pGrid = tab.down('#kkjhList'), store = pGrid.getStore();
				for (var col in pGrid.exportCols) {
					searchParams.fieldNames.push(col);
				}

			var tFields = searchForm.query('textfield(true)');
				for (var i in tFields) {
					if (tFields[i].value && tFields[i].hidden == false)
						searchParams.search[tFields[i].name] = "#like '%" + Ext.String.trim( tFields[i].value )  + "%'";
				}
				var xnValue = searchForm.down('#xn').getValue();
				if(xnValue){
					searchParams.search['xn']="#= '" + xnValue + "'";
				}
				
				var xqValue = searchForm.down('#xq').getValue();
				if(xqValue){
					searchParams.search['xq']="#= '" + xqValue + "'";
				}
				
				var pydwhValue = searchForm.down('#pydwh').getValue();
				if(pydwhValue){
					searchParams.search['pydwh']="#= '" + pydwhValue + "'";
				}
				
				var xkzymValue = searchForm.down('#xkzym').getValue();
				if(xkzymValue){
					searchParams.search['xkzym']="#= '" + xkzymValue + "'";
				}
				
				var xslxmValue = searchForm.down('#xslxm').getValue();
				if(xslxmValue){
					searchParams.search['xslxm']="#= '" + xslxmValue + "'";
				}
				
				var njValue = searchForm.down('#nj').getValue();
				if(njValue){
					searchParams.search['nj']="#= '" + njValue + "'";
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
		var pGrid = tab.down('#kkjhList');
		searchForm.getForm().reset();

//		var toolbar = pGrid.down('#toolbar');
//		toolbar.moveFirst()
		var store = pGrid.getStore(), proxy = store.getProxy();
		proxy.setExtraParam('params', '');
		store.load();
	},
			
	detailKKJH:function(o, e, eOpts){ 
			var me = this;
			var application = me.getApplication();
        	var controller = application.getController('App.controller.jxkkjh.DetailKKJHController');
		    controller.onLaunch(o);
		},
			
		addKKJH:function(o, e, eOpts){
//			Ext.StoreMgr.lookup('PYGRJHKCStore').removeAll();
//			if(!isSuperRight){
				var me = this;
				var application = me.getApplication();
	        	var controller = application.getController('App.controller.jxkkjh.AddKKJHController');
			    controller.onLaunch(o);
//			}else{
//				Ext.MessageBox.alert('提示','该用户不能增加开课计划！');
//			}
		},
			
			
		 editKKJH: function( o, e, eOpts ){
	 			var me = this;
				var application = me.getApplication();
	        	var controller = application.getController('App.controller.jxkkjh.EditKKJHController');
			    controller.onLaunch(o);
    		},
    	
		  deleteKKJH:function(o, e, eOpts){
//		  	if(!isSuperRight){
		  	    var rec = getSelRec(o.up('gridpanel'));
		  		var me = this;
		  		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
		  		if(recs.length == 0){
		  			Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
		  		}else{
		  			var flag = true;
		  			for(var i = 0; i < recs.length;i++){
		  				if(recs[i].data.ztm != 'CG'){
		  					flag = false;
		  					break;
		  				}
		  			}
		  			if(flag){		    	
						var action = "kkjhDel.action";
						var ids = getSelIds(o.up('gridpanel'),'kkjhh');
						if(ids.length ==0) return;
						var store =  me.getStore('KKJHStore');
						DoDelete(action,'kkjhh',ids, store);
				}else{
		  				Ext.MessageBox.alert('提示', '存在不是草稿状态的记录，请重新选择！');
		  			}
		  		}
//		  	}else{
//		  		Ext.MessageBox.alert('提示','该用户不能删除开课计划！');
//		  	}
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
				searchParams.search['proNo'] = "= '" + recs[0].data.kkjhh + "'";
	        	var store = pGrid.getStore();
	        	var proxy =  store.getProxy();
	        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	        	store.load();
	        	win.show();
			}
	  },
		  			
		withdrawKkjh:function(o, e, eOpts){
//			if(!isSuperRight){
				var rec = getSelRec(o.up('gridpanel'));
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
					if(rec.data.ztm == 'CG'){
						Ext.MessageBox.alert('提示', '该开课计划已经是草稿状态！');
					}else if(rec.data.ztm == 'DSH'){
						var kkjhh = rec.data.kkjhh;
						var ztm = 'CG';
						var zt = encodeURI(encodeURI("草稿状态"));
						Ext.Ajax.request({
							url:'kkjhUpdateZtm.action?kkjhh='+ kkjhh + '&ztm=' + ztm + '&zt=' +zt,
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
							           	  Ext.StoreMgr.lookup('KKJHStore').load();
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
					}
					else{
							Ext.MessageBox.alert('提示', '该开课计划不可以撤回！');
					}
				}
//			}else{
//				Ext.MessageBox.alert('提示','该用户不能撤回开课计划！');
//			}
	  },
		  
		  	submitKkjh:function(o, e, eOpts){
		  		var me = this;
		  		if(!isSuperRight){
				  	var rec = getSelRec(o.up('gridpanel'));
				  	if(rec != undefined){
				  		var flagCode = rec.data.ztm;
				  		if(flagCode == 'CG' || flagCode == 'WTG'){
				  			Ext.MessageBox.alert('提示','请先提交！');
				  		}else if(flagCode == 'TG'){
				  			Ext.MessageBox.alert('提示','该开课计划已经审核通过！');
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
					        	var controller = application.getController('App.controller.jxkkjh.SubmitKKJHController');
							    controller.onLaunch(o,shzt,auditDetail);
					  		}else{
					  			Ext.MessageBox.alert('提示','请先添加审批流程！');
					  		}
				  		}
				  	}
		  		}
		  		else {
			  			Ext.MessageBox.alert('提示','该用户不可以审核开课计划！');
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
				auditDetail['proNo'] = rec.data.kkjhh;
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

			initStore : function() {
				var me = this;
				var store = me.getStore('KKJHStore');
				proxy = store.getProxy();
				proxy.setExtraParam('params', '');
				proxy.setExtraParam('operation', 'init');
				store.load();
			},

			setOperationBtn:function(contentPanel){
				var kkjhList = contentPanel.down('#kkjhList');
				if(roleCode == 'GSJX'){
					
				}else if(roleCode == 'Academy'){
					kkjhList.down('#submitBtn').setVisible(false);
				}else if(roleCode == 'School'){
					kkjhList.down('#withdrawBtn').setVisible(false);
					kkjhList.down('#addBtn').setVisible(false);
					kkjhList.down('#editBtn').setVisible(false);
					kkjhList.down('#deleteBtn').setVisible(false);
				}else if(roleCode == 'SuperAdmin'){
				
				}else if(roleCode == 'Personal'){
				
				}
			},
			
//			setOperationBtn:function(contentPanel){
//				if(!isSuperRight){
//					var me = this;
//					var linkStore = me.getStore('AuditFlowLinkStore');
//					var flag = false;
//					for(var i = 0;i < linkStore.getCount();i++){
//						if(linkStore.getAt(i).get('auditRole') == roleCode){
//							flag = true;
//							break;
//						}
//					}
//					var kkjhList = contentPanel.down('#kkjhList');
//					if(!flag){
//						kkjhList.down('#submitBtn').setVisible(false);
//					}else{
//						kkjhList.down('#withdrawBtn').setVisible(false);
//						kkjhList.down('#addBtn').setVisible(false);
//						kkjhList.down('#editBtn').setVisible(false);
//						kkjhList.down('#deleteBtn').setVisible(false);
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
				var contentPanel = Ext.create('App.view.jxkkjh.KKJHContentPanel',
						{
							itemId : 'content',
							parentId : record.get('id')
						});
//				if(isSuperRight){
//					contentPanel.down('#kkjhTgList').setVisible(false);
//				}
				tab.add(contentPanel);
				center.setActiveTab(tab);
				me.setOperationBtn(contentPanel);
			}
		})