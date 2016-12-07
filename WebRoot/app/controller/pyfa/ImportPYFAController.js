Ext.define('App.controller.pyfa.ImportPYFAController',{
	extend:'Ext.app.Controller',
	
	models:['pyfa.FAKCModel','pyfa.KCKModel'],
	stores:['pyfa.FAKCStore','pyfa.KCKStore','pyfa.FAKCAllStore','zd.ZdXqbStore'],
	
	refs : [{
		selector : 'importPyfaWin',
		ref : 'importPyfaWin'
	}],

	init:function(){
			this.control({
				'importPyfaWin button[action=add]':{
					click: this.addFAKC
				},
				'importPyfaWin button[action=delete]':{
					click:this.deleteFAKC
				},
				'importPyfaWin button[action=detail]':{
					click:this.detailFAKC
				},
				'importPyfaWin button[action=edit]':{
					click:this.editFAKC
				},
				'importPyfaWin button[action=save]':{
					click:this.savePYFA
				},
				'importPyfaWin button[action=ok]':{
					click:this.submitPYFA
				},
				'importPyfaWin button[action=uploadAttach]':{
					click:this.uploadAttach
				},
				'importPyfaWin button[action=delAttach]':{
					click:this.delAttach
				},
				'importPyfaWin button[action=import]':{
					click:this.importPyfa
				},
				'pyfaDialog button[action=pyfaDetail]':{
					click:this.pyfaDetail
				},
				'pyfaDialog button[action=importPyfa]':{
					click:this.importPyfa
				},
				'pyfaDialog button[action=searchPyfa]':{
					click:this.searchPyfa
				},
				'pyfaDialog button[action=searchAllPyfa]':{
					click:this.searchAllPyfa
				}
			});
		},
		
			importPyfa:function(o,e,e0pts){
				var win = o.up('window');
				var pyfaList = win.down('#pyfaList');
				var recs = pyfaList.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
						Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
						var pyfahValue = recs[0].data.pyfah;
						var me = this;
					 	var importPyfaWin = Ext.create('App.view.pyfa.ImportPYFAWindow',{
						 	itemId:'importPyfaWin'
						 });
						var pyfaForm  =  importPyfaWin.down('#pyfaForm');
						var fakcList = importPyfaWin.down('#fakcList');
						var searchParams = {
								start : 0,page : 1,searchMode : 'simple',order : '',search : {}};
								
				      	var store = me.getStore('FAKCGetAllStore');var proxy =  store.getProxy();
						searchParams.search['pyfah'] = "= '" + pyfahValue + "'";
				    	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				    	store.load({
					       	callback:function(){
									var fakcList = importPyfaWin.down('#fakcList');
									var fakcStore = fakcList.getStore();
									fakcStore.removeAll();// 删除store中的数据
									if(store.getCount() > 0){
										for(var i = 0;i < store.getCount();i++){
											var rec = store.getAt(i);
											var jsonObject = JSON.parse(Ext.encode(rec.data));
											var kcJson = {};
											for(var item in jsonObject){
													kcJson[item] = jsonObject[item];
											}
											kcJson['id'] = '';
											kcJson['pyfah'] = '';
											kcJson['bbh'] = '';
											fakcStore.add(kcJson)
										}
									}
									
							}
				    	});
				    	pyfaForm.down('#dwmc').setValue(recs[0].data.dwmc)
				    	pyfaForm.down('#dwh').setValue(recs[0].data.dwh)
				    	pyfaForm.down('#zymc').setValue(recs[0].data.zymc)
				    	pyfaForm.down('#zydm').setValue(recs[0].data.zydm)
				    	pyfaForm.down('#xslx').setValue(recs[0].data.xslx)
				    	pyfaForm.down('#xslxm').setValue(recs[0].data.xslxm)
					}
			},
	
		pyfaDetail:function(o, e, eOpts){
	  	    var rec = getSelRec(o.up('gridpanel'));
			var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
			if (recs.length == 0) {
				Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
			} else if (recs.length > 1) {
				Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
			} else if (recs.length == 1) {
					pyfaAllDetailWin = Ext.create('App.view.search.PYFADetailWindow',{
	 			 		itemId:'pyfaAllDetailWin'
	 				 });
				 var pyfaDetailForm = pyfaAllDetailWin.down('#pyfaDetailForm');
				 
				 var  pyfaDetail = pyfaDetailForm.down('#pyfaDetail')
				 pyfaDetail.loadForm(rec);
        		 pyfaDetail.setViewForm();
	 			 pyfaAllDetailWin.show();
	  	 }
	},
	
		importFA:function(o, e, eOpts){
			     var win = new Ext.Window({
				   		itemId:'exportPyfaWin',
						title:'培养方案',
						iconCls:'add_16',
						width: 880,
						height: 550,
						constrainHeader:true,
						layout:'fit',
						closeAction:'hide',
						resizable:false,
						shadow:true,
						modal:true,
						closable:true,
						animCollapse:true,
						autoScroll:true,
						autoShow:true,
						items:[Ext.create('App.view.pyfa.PYFADialog',{
							itemId:'pyfaDialog',
							margin:'0 0 0 0'
						})]
					});
			 var searchParams = {
						start : 0,page : 1,searchMode : 'simple',order : '',search : {}
				};
				
				searchParams.search['ztm'] = "= 'TG'";
				var pGrid = win.down('pyfaDialog').down('#pyfaList');
	            var store = pGrid.getStore(), proxy = store.getProxy();
	            proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	            store.load();
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
				var toolbar = pGrid.down('#toolbar');
				toolbar.moveFirst()
				var proxy = store.getProxy();
				proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
				store.load();
	},
	
		searchAllPyfa:function(o,e,eOpts){
				var win = o.up('window');
				var searchForm = win.down('#searchForm');
				var pGrid = win.down('#pyfaList');
				searchForm.getForm().reset();
				
//				var toolbar = pGrid.down('#toolbar');
//				toolbar.moveFirst()
				
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
	
		delAttach:function(o, e, eOpts ){
				var me = this;
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if(recs.length == 0){
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				}else{
					var JSONList = [];
					for(var i = 0;i < recs.length;i++){
						JSONList.push(JSON.stringify(recs[i].data));
					}
				    Ext.Ajax.request({
			    		url:'pyfaFileDeleteAttach.action',
			    		method: 'get',
			    		params: {datas: JSONList},
			    		success: function (response) {
				 			var responseMessage = Ext.JSON.decode(response.responseText);
				 			if (responseMessage.success) {
				 					me.getStore('AttachStore').load()
				                     Ext.Msg.show({title:"提示",msg:'删除成功！',
				                     buttons: Ext.Msg.OK, icon: Ext.Msg.INFO});
				                 }
						},
			            failure: function (response) {          	
			    		}});
				}
		},
		
		savePYFA:function(o, e, eOpts ){
			var me = this;
			var win = o.up('window');
			var pyfaImportForm = win.down('#pyfaImportForm');
			var pyfaForm = pyfaImportForm.down('#pyfaForm');
			var tab = pyfaImportForm.getActiveTab();
			
			if(tab == pyfaImportForm.child('#pyfaFormTab')){
				me.savePyfa(pyfaForm);// 保存培养方案
			}else if(tab == pyfaImportForm.child('#fakcListTab')){
				me.saveFakc(pyfaForm);// 保存方案课程
			}else if(tab == pyfaImportForm.child('#attachDataTab')){
				me.saveAttach(pyfaImportForm);
			}
		},
		
	saveAttach:function(pyfaImportForm){
			var me = this;
			var attachList = pyfaImportForm.down('#uploadAttachList');
			var pyfaForm = pyfaImportForm.down('#pyfaForm');
			var pyfahValue = pyfaForm.down('#pyfah').getValue();
			
			var attachStore = attachList.getStore();
			if(attachStore.getCount() > 0){
				var form = pyfaForm.getForm();
				pyfaForm.down('#ztm').setValue('CG');
				pyfaForm.down('#zt').setValue('草稿状态');
			
				var JSONpyfa = []
				values = form.getValues();
		  	 	JSONpyfa.push(JSON.stringify(values));
				
				var JSONList = [];
				attachStore.each(function(record){
					var jsonObject = me.jsonParse(record);
					JSONList.push(JSON.stringify(jsonObject));
				})
		
					Ext.Ajax.request({
						url : 'pyfaSaveAttach.action?billNo=' + pyfahValue,
						waitTitle : '提示',
						method : 'post',
						params:{datas:JSONList,pyfaDatas:JSONpyfa},
						waitMsg : '正在提交数据请稍候...',
						success : function(response, opts) {
							var result = Ext.decode(response.responseText);
							var success = result.result.success;
							if(success){
								var msg = "保存成功！";
								Ext.MessageBox.show({
						           title: '提示',
						           msg: msg,
						           buttons: Ext.MessageBox.OK,
						           icon: Ext.MessageBox.INFO,
						           fn: function(id, msg){
						           	  var searchParams = {
												searchMode : 'simple',
												search : {}
										};
							        
										searchParams.search['billNo'] = "= '" + pyfahValue + "'";
							        	var store = attachList.getStore(), proxy =  store.getProxy();
							        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
							        	store.load();
								    }  
						        });
							}else{
								var errmsg = "保存失败！";
								Ext.MessageBox.show({
						           title: '错误',
						           msg: errmsg,
						           buttons: Ext.MessageBox.OK,
						           icon: Ext.MessageBox.ERROR
						        });
							}
						}
					});
				
			}else{
					Ext.MessageBox.alert('提示','请先上传附件！');
			}
		},
		
		jsonParse :function(record){
	 		var jsonObject =  JSON.parse(Ext.encode(record.data));
			for(var item in jsonObject){
				if(jsonObject[item] == null){
				       jsonObject[item] = ""; //将null值转为空的字符串
				}
				if(item == 'id'){
					jsonObject[item] = ""
				}
		   }
		   return jsonObject;
	 },
		
	    saveFakc:function(pyfaForm){
			var me = this;
			var pyfahValue = pyfaForm.down('#pyfah').getValue();
			var fakcListTab = pyfaForm.up('#pyfaImportForm').down('#fakcListTab');
			var fakcStore = fakcListTab.down('#fakcList').getStore();
			var JSONList = [];
			//获得Store中的数据
			var flag = true;
			for (var i = 0; i < fakcStore.getCount(); i++) { 
				var record = fakcStore.getAt(i); // 获得每条数据
				if(record.data.kclb == '' || record.data.kcxz == '' || record.data.kcsx == ''
						|| record.data.ksxs=='' || record.data.kkxq==''){
					Ext.MessageBox.alert('提示','请将课程列表、课程性质、课程属性、' +
							'考试形式和开课学期填写完整！');
					flag = false;
					break;
				}
				var jsonObject = me.jsonParse(record);
				JSONList.push(JSON.stringify(jsonObject));
			}
			if(flag){
				var pyfahValue = fakcStore.getAt(0).get('pyfah');
				var bbhValue = fakcStore.getAt(0).get('bbh');
				if(pyfahValue != '' && bbhValue !=''){
				Ext.Ajax.request({
						url : 'fakcSaveFakc.action?pyfah=' + pyfahValue,
						waitTitle : '提示',
						method : 'post',
						params:{datas:JSONList},
						waitMsg : '正在提交数据请稍候...',
						success : function(response, opts) {
							var result = Ext.decode(response.responseText);
							var success = result.result.success;
							if(success){
								var msg = "保存成功！";
								Ext.MessageBox.show({
						           title: '提示',
						           msg: msg,
						           buttons: Ext.MessageBox.OK,
						           icon: Ext.MessageBox.INFO,
						           fn: function(id, msg){
						           	  var lists = Ext.ComponentQuery.query('#fakcList');
						           	  var list = lists[lists.length - 1]
						           	  var searchParams = {
												searchMode : 'simple',
												search : {}
										};
										searchParams.search['pyfah'] = "= '" + pyfahValue + "'";
							        	var store = list.getStore();
							        	var proxy =  store.getProxy();
							        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
							        	store.load();
								    }  
						        });
							}else{
								var errmsg = "保存失败！";
								Ext.MessageBox.show({
						           title: '错误',
						           msg: errmsg,
						           buttons: Ext.MessageBox.OK,
						           icon: Ext.MessageBox.ERROR
						        });
							}
						}
					});
				}else{
					Ext.MessageBox.alert('提示','请先保存培养方案！');
				}
			}
		},
		
		// 保存培养方案
//		savePyfa:function(pyfaForm){
//			var me = this;
//	    	if(pyfaForm.down('#upload').getValue().length >0){ 
//					me.upload(pyfaForm);
//			}else{
//				 	me.addPyfa(pyfaForm);
//			}
//		},
//		
//		//附件上传和保存培养方案
//	    upload: function(pyfaForm){
//	    	var me = this;
//	    	var form = pyfaForm.getForm();
//	    	if (form.isValid()) {
//	            form.submit({
//	                clientValidation: true,
//	                url: 'pyfaFileUpload.action',
//	                method: 'post',
//	                success: function (form, action) {
//	               	    pyfaForm.down('#fjdz').setValue(action.result.filePath);
//	                	me.addPyfa(pyfaForm);
//	                },
//	                failure: function (form, action) {
//	                	if(action.result.msg != null)
//	                		Ext.Msg.show({title:"提示",msg:action.result.msg,buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
//	                	else{
//	                          var fileName = form.findField('upload').value;
//	                          Ext.Msg.show({title:"提示",msg:'文件： ' + fileName + ' 上传失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
//	                	}
//	                }
//	            });
//	        }
//	    },
		
	  //保存培养方案
	  savePyfa: function (pyfaForm){
	  		var me = this;
			var form = pyfaForm.getForm();
			var pyfahValue = pyfaForm.down('#pyfah').getValue();
			Ext.Ajax.request({
				url:'pyfaCheckByPyfah.action?pyfah='+pyfahValue,
				method : 'post',
				success : function(response, opts) {
					var result = Ext.decode(response.responseText);
					var success = result.result.success;
					if(success){
						Ext.MessageBox.alert('提示', '该培养方案已经存在！');
					}else{
						if (form.isValid()){
							pyfaForm.down('#ztm').setValue('CG');
							pyfaForm.down('#zt').setValue('草稿状态');
							pyfaForm.down('#bzrgh').setValue(userName);
							pyfaForm.down('#bzr').setValue(userCName);
							
							var JSONobj = []
							values = form.getValues();
						    JSONobj.push(JSON.stringify(values));
						    Ext.Ajax.request({
								url : 'pyfaAdd.action',
								waitTitle : '提示',
								method : 'post',
								params:{datas:JSONobj},
								waitMsg : '正在提交数据请稍候...',
								success : function(response, opts) {
									var result = Ext.decode(response.responseText);
									var success = result.result.success;
									var id = result.id;
									if(success){
										var msg = "保存成功！";
										Ext.MessageBox.show({
								           title: '提示',
								           msg: msg,
								           buttons: Ext.MessageBox.OK,
								           icon: Ext.MessageBox.INFO,
								           fn: function(id, msg){
								           	  Ext.StoreMgr.lookup('PYFAStore').load();
										    }  
								        });
									     if(pyfaForm.isAdd){
								      		me.setView(pyfaForm);
								      		me.setFakcValue(pyfaForm)
								      		pyfaForm.down('#id').setValue(id);
								        }
								}else{
										var errmsg = "保存失败！";
										Ext.MessageBox.show({
								           title: '错误',
								           msg: errmsg,
								           buttons: Ext.MessageBox.OK,
								           icon: Ext.MessageBox.ERROR,
								           fn: function(id, msg){  
								        	   pyfaForm.getForm().reset();
										    }  
								        });
									}
								}
							});
						}else
				           Ext.MessageBox.show({
				      			title: '提示',
				      			msg: '请完整填写信息！',
				      			buttons: Ext.MessageBox.OK,
				     			icon: Ext.MessageBox.WARNING
				           });
					}
				}
			})
		},
		
		// 保存培养方案后，设置样式
		setView:function(pyfaForm){
			var pyfaImportForm = pyfaForm.up('window');
			var fakcListTab =   pyfaImportForm.down('#fakcListTab');
		 	fakcListTab.setDisabled(false);
		 	
		 	var attachDataTab = pyfaImportForm.down('#attachDataTab');
		 	attachDataTab.setDisabled(false);
		 	
		    var textfields =  pyfaForm.query('textfield');
			for(var i in textfields){
				textfields[i].setReadOnly(true);
				var style = "background:none; border:0px";
				textfields[i].setFieldStyle(style);
			}
			pyfaForm.down('#bzFieldset').setBorder('1 1 1 1');
		},
		
		setFakcValue:function(pyfaForm){
				var win = pyfaForm.up('window');
				var fakcList = win.down('#fakcList');
				var store = fakcList.getStore();
				if(store.getCount() > 0 ){
					var kcRecs = [];
					for(var i = 0;i < store.getCount();i++){
						var rec = store.getAt(i);
						var jsonObject = JSON.parse(Ext.encode(rec.data));
						var kcJson = {};
						for(var item in jsonObject){
								kcJson[item] = jsonObject[item];
						}
						kcJson['id'] = '';
						kcJson['pyfah'] = pyfaForm.down('#pyfah').getValue();
						kcJson['bbh'] = pyfaForm.down('#bbh').getValue();
						kcRecs.push(kcJson)
					}
					var count = store.getCount();
					for(var j = 0 ; j < count; j++){
						store.removeAt(0)
					}
					store.add(kcRecs)
				}
		},
			
		submitPYFA:function(o, e, eOpts){
			var me = this;
			var win = o.up('window');
			var fakcListTab = win.down('#pyfaImportForm').down('#fakcListTab');
			
			var pyfaFormTab = win.down('#pyfaImportForm').down('#pyfaFormTab');
			pyfaFormTab.down('#zt').setValue('待审核状态');
			pyfaFormTab.down('#ztm').setValue('DSH');
			
			var pyfaForm =  pyfaFormTab.down('#pyfaForm');
			var form = pyfaForm.getForm();
			if (form.isValid()){
				var JSONobj = []
				values = form.getValues();
				JSONobj.push(JSON.stringify(values));
				
				var pyfahValue = pyfaForm.down('#pyfah').getValue();
				var fakcStore = fakcListTab.down('#fakcList').getStore();
				var JSONList = [];
				//获得Store中的数据
				var flag = true;
				for (var i = 0; i < fakcStore.getCount(); i++) { 
					var record = fakcStore.getAt(i); // 获得每条数据
					if(record.data.kclb == '' || record.data.kcxz == '' || record.data.kcsx == ''
							|| record.data.ksxs=='' || record.data.kkxq==''){
						Ext.MessageBox.alert('提示','请将课程列表、课程性质、课程属性、' +
								'考试形式和开课学期填写完整！');
						flag = false;
						JSONList = [];
						break;
					}
				}
				if(flag){
					me.setFakcValue(pyfaForm);
					fakcStore.each(function(rec){
						var jsonObject = me.jsonParse(rec);
						JSONList.push(JSON.stringify(jsonObject));
					})
				    Ext.Ajax.request({
						url : 'pyfaUpdateZt.action?pyfah=' + pyfahValue,
						waitTitle : '提示',
						method : 'post',
						params:{datas:JSONobj,fakcDatas:JSONList},
						success : function(response, opts) {
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
						           	  Ext.StoreMgr.lookup('PYFAStore').load();
					        		  win.close();
								    }  
						        });
							}
						},
						failure : function(form, action) {
							var errmsg = "提交失败！";
							 Ext.MessageBox.show({
					           title: '错误',
					           msg: errmsg,
					           buttons: Ext.MessageBox.OK,
					           icon: Ext.MessageBox.ERROR,
					           fn: function(id, msg){  
					        	   form.getForm().reset();
							    }  
					       });
						}
					})
				}
			}else{
			 Ext.MessageBox.show({
	      			title: '提示',
	      			msg: '请完整填写信息！',
	      			buttons: Ext.MessageBox.OK,
	     			icon: Ext.MessageBox.WARNING
	           });
		}
	  },
		
	  
	  
	  
//		saveFakc:function(o, e, eOpts){
//				var me = this;
//				var fakcWin = o.up('#pyfaImportForm').down('#fakcListTab');
//				var pyfah = fakcWin.down('#pyfah').getValue();
//				var bbh = fakcWin.down('#bbh').getValue();
//
//				var application = me.getApplication();
//	        	var controller = application.getController('App.controller.pyfa.AddFAKCController');
//			    controller.onLaunch(pyfah,bbh);
//		},
		
			addFAKC:function(o, e, eOpts){
				var me = this;
				var win = o.up('window');
				var pyfah = win.down('#pyfah').getValue();
				var bbh = win.down('#bbh').getValue();		
            	var fakcList = o.up('#fakcList')
				var application = me.getApplication();
	        	var controller = application.getController('App.controller.pyfa.AddFAKCController');
			    controller.onLaunch(pyfah,bbh,fakcList);
		},
		
		deleteFAKC:function(o, e, eOpts){
			var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
			if(recs.length == 0){
				Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
			}else{
				var fakcList = o.up('#fakcList');
				var store = fakcList.getStore();
				var records = fakcList.getSelectionModel().getSelection();
				store.remove(records);
			}
	},
		
		detailFAKC:function(o, e, eOpts){
			var rec = getSelRec(o.up('gridpanel'));
			   if(rec != undefined){
	        		var fakcWins = Ext.ComponentQuery.query('#fakcWin');
	        		if(fakcWins.length > 0) {
		        		var win = fakcWins[0];
		        		win.setTitle('课程详情');
		        		win.setIconCls('detail_16');
		        		win.show();
	        	}else{
					var win = new Ext.Window({
						layout:'fit',
						itemId:'fakcWin',
						autoShow:true,
						title:'课程详情',
						iconCls:'detail_16',
			            width: 755,
		           	    height: 450,
			            closeAction:'hide',
			    		resizable:false,
			    		shadow:true,
			    		modal:true,
			    		constrainHeader:true,
			    		closable:true,
			    		animCollapse:true,
			    		autoShow:true,
	    				items: [Ext.create('App.view.pyfa.FAKCDetail')]
					});
	        	}
				var fakcForm = win.down('form');
	        	fakcForm.loadForm(rec);
	        	fakcForm.setViewForm();
	        }
		},
		
		editFAKC:function(o, e, eOpts){
				var rec = getSelRec(o.up('gridpanel'));
				var fakcList = o.ownerCt.ownerCt
			   if(rec != undefined){
//	        		var fakcWins = Ext.ComponentQuery.query('#fakcEditWin');
//	        		if(fakcWins.length > 0) {
//		        		var win = fakcWins[0];
//		        		win.setTitle('修改课程');
//		        		win.setIconCls('edit_16');
//		        		win.show();
//	        	}else{
					var win = new Ext.Window({
						layout:'fit',
						itemId:'fakcEditWin',
						autoShow:true,
						title:'修改课程',
						iconCls:'edit_16',
			            width: 755,
		           	    height: 460,
			            closeAction:'hide',
			    		resizable:false,
			    		shadow:true,
			    		modal:true,
			    		closable:true,
			    		constrainHeader:true,
			    		animCollapse:true,
			    		autoShow:true,
			    		fakcList:fakcList,
	    				items: [Ext.create('App.view.pyfa.FAKCEdit')]
					});
	        	}
				var fakcForm = win.down('form');
	        	fakcForm.loadForm(rec);
	        	fakcForm.setViewForm();
//	        }
		},
		
		 onLaunch: function(o){
			     var win = new Ext.Window({
				   		itemId:'importPyfaWin',
						title:'培养方案',
						iconCls:'add_16',
						width: 880,
						height: 550,
						constrainHeader:true,
						layout:'fit',
						closeAction:'hide',
						resizable:false,
						shadow:true,
						modal:true,
						closable:true,
						animCollapse:true,
						autoScroll:true,
						autoShow:true,
						items:[Ext.create('App.view.pyfa.PYFADialog',{
							itemId:'pyfaDialog',
							margin:'0 0 0 0'
						})]
					});
			 var searchParams = {
						start : 0,page : 1,searchMode : 'simple',order : '',search : {}
				};
				
				searchParams.search['ztm'] = "= 'TG'";
				var pGrid = win.down('pyfaDialog').down('#pyfaList');
	            var store = pGrid.getStore(), proxy = store.getProxy();
	            proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	            store.load();
		 }
})