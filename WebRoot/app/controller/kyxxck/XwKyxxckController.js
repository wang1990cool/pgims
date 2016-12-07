Ext.define('App.controller.kyxxck.XwKyxxckController',{
	extend:'Ext.app.Controller',
	
	models:['kylw.XwKylwbModel','kyzl.XwKyzlbModel','kyzz.XwKyzzbModel'
	,'kylw.ViewXwKylwzbModel','kyzl.ViewXwKyzlbModel','kyzz.ViewXwKyzzbModel','kyjl.ViewXwKyjlbModel'],	
    stores: ['kylw.XwKylwbStore','kyzl.XwKyzlbStore','kyzz.XwKyzzbStore',
    'kylw.ViewXwKylwzbCKStore','kyzl.ViewXwKyzlbCKStore','kyzz.ViewXwKyzzbCKStore','kyjl.ViewXwKyjlbCKStore'],
	
	init:function(){
		this.control({
			'#xwKylwbList button[itemId=schShowBtn]' : {
				render : this.setSchShowText
			  },
		   '#xwKylwbList button[action=showSearch]' : {
				      click : this.showSearch
			},
			'#xwKyxxckSearchForm button[action=search]':{
				click: this.search
			},
			'#xwKyxxckSearchForm button[action=searchAll]':{
				click: this.searchAll
			},
			'#xwKylwbList button[action=xwKylwbDetail]':{
				click:this.detailLW
			},
			'#xwKyzzbList button[action=xwKyzzbDetail]':{
				click:this.detailZZ
			},
			'#xwKyjlbList button[action=xwKyjlbDetail]':{
				click:this.detailJL
			},
//			'#xwKylwbList button[action=arrangeCourseList]':{
//				click:this.arrangeCourseList
//			},
//			'#xwKylwbList button[action=arrangeCourseGrid]':{
//				click:this.arrangeCourseGrid
//			},
//			'#xwKyzlbList button[action=delete]':{
//				click:this.deletePkjl
//			},
//			'#xwKyzlbList button[action=pkjlEdit]':{
//					click:this.editPkjl
//			},
			'#xwKyzlbList button[action=xwKyzlbDetail]':{
				click:this.detailZL
			}
		});
	},
			search : function(o, e, eOpts) {
				var me = this;
				var tab = me.getCenter().getActiveTab();
				var searchForm = tab.down('#xwKyxxckSearchForm');
				var searchParams = {
					start : 0,
					limit : 15,
					page : 1,
					searchMode : 'simple',
					order : '',
					search : {}
				};

				var xwKylwbList = tab.down('#xwKylwbList'), xwKylwbStore = xwKylwbList.getStore();
				var pkjlList = tab.down('#xwKyzlbList'), pkjlStore = pkjlList.getStore();
				var xwKyzzbList = tab.down('#xwKyzzbList'), xwKyzzbStore = xwKyzzbList.getStore();
				var xwKyjlbList = tab.down('#xwKyjlbList'), xwKyjlbStore = xwKyjlbList.getStore();
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
				
//				var njValue = searchForm.down('#sznj').getValue();
//				if (njValue)
//					searchParams.search['nj'] = "#= '" + njValue + "'";
//				
				var fymcValue = searchForm.down('#fymc').getRawValue();
				alert(fymcValue)
				if (fymcValue)
					searchParams.search['fymc'] = "#= '" + fymcValue + "'";
		
				var zymcValue = searchForm.down('#zymc').getRawValue();
				if (zymcValue)
					searchParams.search['zymc'] = "#= '" + zymcValue + "'";
		
				var xslxValue = searchForm.down('#xslx').getRawValue();
				if (xslxValue)
					searchParams.search['xslx'] = "#= '" + xslxValue + "'";
			var ztValue = searchForm.down('#zt').getRawValue();
//			alert(ztValue)
				if (ztValue)
					searchParams.search['zt'] = "#= '" + ztValue + "'";
			
//		 var shztValue = searchForm.down('#shzt').getRawValue();
				
				var xwKylwbProxy = xwKylwbStore.getProxy();
				xwKylwbProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				xwKylwbStore.load();
				
				var pkjlProxy = pkjlStore.getProxy();
				pkjlProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				pkjlStore.load();
				
				var xwKyzzbProxy = xwKyzzbStore.getProxy();
				xwKyzzbProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				xwKyzzbStore.load();
				
				var xwKyjlbProxy = xwKyjlbStore.getProxy();
				xwKyjlbProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				xwKyjlbStore.load();
			},

				searchAll : function(o, e, eOpts) {
					var me = this;
					var tab = me.getCenter().getActiveTab();
					
					var searchForm = tab.down('#xwKyxxckSearchForm');
					var xwKylwbList = tab.down('#xwKylwbList'), xwKylwbStore = xwKylwbList.getStore();
					var pkjlList = tab.down('#xwKyzlbList'), pkjlStore = pkjlList.getStore();
					var xwKyzzbList = tab.down('#xwKyzzbList'), xwKyzzbStore = xwKyzzbList.getStore();
					var xwKyjlbList = tab.down('#xwKyjlbList'), xwKyjlbStore = xwKyjlbList.getStore();
					searchForm.getForm().reset();
					
					var xwKylwbProxy = xwKylwbStore.getProxy();
					xwKylwbProxy.setExtraParam('params', '');
					xwKylwbStore.load();
				
					var pkjlProxy = pkjlStore.getProxy();
					pkjlProxy.setExtraParam('params', '');
					pkjlStore.load();
					
					var xwKyzzbProxy = xwKyzzbStore.getProxy();
					xwKyzzbProxy.setExtraParam('params', '');
					xwKyzzbStore.load();
					
					var xwKyjlbProxy = xwKyjlbStore.getProxy();
					xwKyjlbProxy.setExtraParam('params', '');
					xwKyjlbStore.load();
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
detailLW : function(o, e, eOpts){
					var me = this;
					var rec = getSelRec(o.up('gridpanel'));
					var kyuuid =rec.data.kyuuid;
					if(rec == undefined){
					Ext.MessageBox.alert('提示', '请选择一条数据记录！');}
					else if(rec != undefined){
					var skxxList = o.up('#xwKylwbList')
					var application = me.getApplication();
	        		var controller = application.getController('App.controller.kylw.ArrangeTeckyxqController');
			  	    controller.onLaunch(o,skxxList,kyuuid);
					}
			},
			
			detailZZ : function(o, e, eOpts){
					var me = this;
					var rec = getSelRec(o.up('gridpanel'));
					var kyuuid =rec.data.kyuuid;
					if(rec == undefined){
					Ext.MessageBox.alert('提示', '请选择一条数据记录！');}
					else if(rec != undefined){
					var skxxList = o.up('#xwKyzzbList')
					var application = me.getApplication();
	        		var controller = application.getController('App.controller.kyzz.ArrangeTeczzxqController');
			  	    controller.onLaunch(o,skxxList,kyuuid);
					}
					},
		
	detailZL : function(o, e, eOpts){
					var me = this;
					var rec = getSelRec(o.up('gridpanel'));
					var kyuuid =rec.data.kyuuid;
					if(rec == undefined){
					Ext.MessageBox.alert('提示', '请选择一条数据记录！');}
					else if(rec != undefined){
					var skxxList = o.up('#xwKyzlbList')
					var application = me.getApplication();
	        		var controller = application.getController('App.controller.kyzl.ArrangeTeczlxqController');
			  	    controller.onLaunch(o,skxxList,kyuuid);
					}
					},
					
		detailJL : function(o, e, eOpts){
					var me = this;
					var rec = getSelRec(o.up('gridpanel'));
					var kyuuid =rec.data.kyuuid;
					if(rec == undefined){
					Ext.MessageBox.alert('提示', '请选择一条数据记录！');}
					else if(rec != undefined){
					var skxxList = o.up('#xwKyjlbList')
					var application = me.getApplication();
	        		var controller = application.getController('App.controller.kyjl.ArrangeTecjlxqController');
			  	    controller.onLaunch(o,skxxList,kyuuid);
					}
					},
	/*	editPkjl: function(o, e, eOpts){
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
							var xwKylwbList = o.ownerCt.ownerCt.ownerCt.ownerCt.down('#xwKylwbList');
							var pkjlList = o.ownerCt.ownerCt.ownerCt.ownerCt.down('#xwKyzlbList');
							var application = me.getApplication();
			        		var controller = application.getController('App.controller.jxpk.PKEditController');
					  	    controller.onLaunch(o,xwKylwbList,pkjlList);
						}
					}
				}
		
		},*/
	
	/*	deletePkjl: function(o, e, eOpts){
    			var me = this;
    			var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
    				var pkztm = recs[0].data.pkztm;
    				var ggkbzm = recs[0].data.ggkbzm;
					if(pkztm == '1'){
						Ext.MessageBox.alert('提示', '该课程不能删除！');
					}else{
						if(roleCode == 'Academy' && ggkbzm == '1'){
								Ext.MessageBox.alert('提示', '该角色不能删除公共课！');
						}else{
							if (recs.length == 0) {
								Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
							}else {
								Ext.MessageBox.confirm("确认",  "确定删除？",
										function(btn){
											if(btn == 'yes'){
												var ids = getSelIds(o.up('gridpanel'),'id');
												Ext.Ajax.request({
													url:'xwKyzlbDel.action?ids=' + ids,
								 		 			method:'get',
								 		 			success : function(response, opts) {
														var result = Ext.decode(response.responseText);
														var success = result.result.success;
														if(success){
															 me.getStore('XwKyzlbStore').load();
															 me.getStore('XwKylwbStore').load();
														}
								 		 			}
												})
											}
									})
								}
							}
					}
    		},
	
			xwKylwbDetail:function(o, e, eOpts){
		  	   var rec = getSelRec(o.up('gridpanel'));
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
					var win;
					var xwKylwbDetailWins = Ext.ComponentQuery.query('#xwKylwbDetailWin');
				if(xwKylwbDetailWins.length > 0){
					win = xwKylwbDetailWins[0];
				}else{
		            	var win = new Ext.Window({
		            		itemId:'xwKylwbDetailWin',
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
		                    items: [Ext.create('App.view.xwKylwb.SKXXDetail')],
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
		        	var detailForm = win.down('#xwKylwbDetail');
		        	detailForm.loadForm(rec);
		        	detailForm.setView();
		        	win.show();
		  	  }
		},*/
		
	/*	arrangeCourseList:function(o, e, eOpts){
				var me = this;
          		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
						var xwKylwbList = o.ownerCt.ownerCt.ownerCt.ownerCt.down('#xwKylwbList');
						var pkjlList = o.ownerCt.ownerCt.ownerCt.ownerCt.down('#xwKyzlbList');
						var application = me.getApplication();
		        		var controller = application.getController('App.controller.jxpk.PKController');
				  	    controller.onLaunch(o,xwKylwbList,pkjlList);
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
						var xwKylwbList = o.ownerCt.ownerCt.ownerCt.ownerCt.down('#xwKylwbList');
						var pkjlList = o.ownerCt.ownerCt.ownerCt.ownerCt.down('#xwKyzlbList');
						var application = me.getApplication();
		        		var controller = application.getController('App.controller.jxpk.PKByGridController');
				  	    controller.onLaunch(o,xwKylwbList,pkjlList);
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
          },*/
			
			getCenter : function() {
				return this.application.getController('main.MainController').getCenter();
			},
			
			
			initStore : function() {
				var me = this;
				
				var store = me.getStore('ViewXwKyzzbCKStore'), proxy = store.getProxy();
					proxy.setExtraParam('params', '');
					store.load({callback:function(){
									var xwKylwbStore = me.getStore('ViewXwKylwzbCKStore'), xwKylwbProxy = xwKylwbStore.getProxy();
							xwKylwbProxy.setExtraParam('params', '');
						xwKylwbStore.load();
						
						var xwKylwbStore = me.getStore('ViewXwKyzlbCKStore'), xwKylwbProxy = xwKylwbStore.getProxy();
							xwKylwbProxy.setExtraParam('params', '');
						xwKylwbStore.load();
						
						var xwKylwbStore = me.getStore('ViewXwKyjlbCKStore'), xwKylwbProxy = xwKylwbStore.getProxy();
							xwKylwbProxy.setExtraParam('params', '');
						xwKylwbStore.load();
					}});
				
//				
//							
//				var pkjlAllStore = me.getStore('XwKyzlbAllStore'), pkjlAllProxy = pkjlAllStore.getProxy();
//				pkjlAllProxy.setExtraParam('params', '');
//				pkjlAllStore.load();
				
				
				
			},
			
			onLaunch : function(record) {
				var me = this;
				var center = me.getCenter();
				var tab = center.down('#M' + record.get('parentId'));
				var removePanel = tab.down('#content');
				tab.remove(removePanel);
				var contentPanel = Ext.create('App.view.kyxxck.XwKyxxckContentPanel',
						{
							itemId : 'content',
							parentId : record.get('id')
						}); 
				tab.add(contentPanel);
				center.setActiveTab(tab);
				me.initStore();
			}
	})
