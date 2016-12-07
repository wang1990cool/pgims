Ext.define('App.controller.jxkkjh.EditKKJHController',{
	extend:'Ext.app.Controller',
	
	models : ['jxkkjh.XSLXModel','jxkkjh.KKJHMXModel','pyfa.FAKCModel'],
	stores : ['jxkkjh.XSLXStore','jxkkjh.KKJHMXAllStore','pyfa.FAKCStore','zd.ZdXqbStore'],
	
	refs : [{
			selector : 'kkjhEditWin',
			ref : 'kkjhEditWin'
		}],
		
	init:function(){
		this.control({
			'kkjhEditWin button[action=searchPyfah]':{
				click:this.searchPyfah
			},
			'kkjhEditWin button[action=ok]':{
				click:this.submitKkjh
			},
			'kkjhEditWin button[action=save]':{
				click:this.saveKkjh
			},
			'kkjhEditWin button[action=importKc]':{
				click:this.importKc
			},			
			'kkjhEditWin button[action=addKc]':{
				click:this.addKc
			},
			'kkjhEditWin button[action=addOutKc]':{
				click:this.addOutKc
			},
			'kkjhEditWin button[action=detail]':{
				click:this.detailKKJHMX
			},
			'kkjhEditWin button[action=edit]':{
				click:this.editKc
			},
			'kkjhEditWin button[action=delete]':{
				click:this.deleteKc
			}
		});
	},
	
	addOutKc:function(o, e, eOpts){
			var me = this;
			var application = me.getApplication();
        	var controller = application.getController('App.controller.jxkkjh.AddOutKkjhmxController');
		    controller.onLaunch(o);
	},
	
	//个人计划详情
	detailKKJHMX:function(o, e, eOpts){
		var rec = getSelRec(o.up('gridpanel'));
			   if(rec != undefined){
	        		var wins = Ext.ComponentQuery.query('#kkjhmxDetailWin');
	        		if(wins.length > 0) {
		        		var win = wins[0];
		        		win.setTitle('课程详情');
		        		win.setIconCls('detail_16');
		        		win.show();
	        	}else{
					var win = new Ext.Window({
						layout:'fit',
						itemId:'kkjhmxDetailWin',
						autoShow:true,
						title:'课程详情',
						iconCls:'detail_16',
			            width: 755,
		           	    height: 440,
			            closeAction:'hide',
			    		resizable:false,
			    		shadow:true,
			    		modal:true,
			    		constrainHeader:true,
			    		closable:true,
			    		animCollapse:true,
			    		autoShow:true,
	    				items: [Ext.create('App.view.jxkkjh.KKJHMXDetail')]
					});
	        	}
				var kkjhmxForm = win.down('form');
	        	kkjhmxForm.loadForm(rec);
	        	kkjhmxForm.setViewForm();
	        }
	},
	
	editKc:function(o, e, eOpts){
			var rec = getSelRec(o.up('gridpanel'));
			var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
			if (recs.length == 0) {
				Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
			} else if (recs.length > 1) {
				Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
			} else if (recs.length == 1) {
				var win = new Ext.Window({
					layout:'fit',
					itemId:'kkjhmxEditWin',
					autoShow:true,
					title:'课程修改',
					iconCls:'edit_16',
		            width: 755,
	           	    height: 340,
		            closeAction:'hide',
		    		resizable:false,
		    		shadow:true,
		    		modal:true,
		    		constrainHeader:true,
		    		closable:true,
		    		animCollapse:true,
		    		autoShow:true,
					items: [Ext.create('App.view.jxkkjh.KKJHMXEdit')]
				});
				var kkjhmxEditform = win.down('form');
		    	kkjhmxEditform.loadForm(rec);
		    	kkjhmxEditform.setViewForm();
			}
	},
	
	//导入个人计划课程
	 importKc:function(o, e, eOpts){
	 	var me = this;
		var kkjhEditForm = o.up('#kkjhmxListTab').up('#kkjhEditForm');
		var kkjhForm = kkjhEditForm.down('#kkjhForm');
		var pyfahValue = kkjhForm.down('#pyfah').getValue();
	 	var application = me.getApplication();
    	var controller = application.getController('App.controller.jxkkjh.ImportKkjhmxController');
	    controller.onLaunch(pyfahValue);	
	 },
	 
	 //增加个人计划课程
	 addKc:function(o, e, eOpts){
	 	var me = this;
	 	var kkjhAddForm = o.up('#kkjhmxListTab').up('#kkjhEditForm');
		var kkjhForm = kkjhAddForm.down('#kkjhForm');
		var pyfahValue = kkjhForm.down('#pyfah').getValue();
	 	var application = me.getApplication();
    	var controller = application.getController('App.controller.jxkkjh.AddKkjhmxController');
	    controller.onLaunch(pyfahValue);	
	 },
	
	 // 删除个人计划课程
	deleteKc:function(o, e, eOpts){
		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
		if(recs.length == 0){
			Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
		}else{
			var kkjhmxList = o.up('#kkjhmxListTab').down('#kkjhmxList');
			var store = kkjhmxList.getStore();
			var records = kkjhmxList.getSelectionModel().getSelection();
			store.remove(records);
		}
	},
	
	//提交审核个人计划
	submitKkjh:function(o, e, eOpts){
			var me = this;
			var win = o.up('window');
			var kkjhmxListTab = win.down('#kkjhEditForm').down('#kkjhmxListTab');
			var kkjhFormTab = win.down('#kkjhEditForm').down('#kkjhFormTab');
			
			kkjhFormTab.down('#zt').setValue('待审核状态');
			kkjhFormTab.down('#ztm').setValue('DSH');
			
			var kkjhForm = kkjhFormTab.down('#kkjhForm');
			var form = kkjhForm.getForm();
			var JSONobj = []
			values = form.getValues();
			JSONobj.push(JSON.stringify(values));
			
			var kkjhhValue = kkjhForm.down('#kkjhh').getValue();
			var kkjhmxStore = kkjhmxListTab.down('#kkjhmxList').getStore();
			var proxy = kkjhmxStore.getProxy();
			var searchParams = {start : 0,searchMode : 'simple',order : '',search : {}};

			searchParams.search['kkjhh'] = "= '" + kkjhhValue + "'";
			proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
			
			kkjhmxStore.load({callback:function(){
				var JSONList = [];
				//获得Store中的数据
				var flag = true;
				for (var i = 0; i < kkjhmxStore.getCount(); i++) { 
					var record = kkjhmxStore.getAt(i); // 获得每条数据
					if(record.data.ksz == '' || record.data.jsz == ''){
						Ext.MessageBox.alert('提示','请将开始周和结束周填写完整！');
						flag = false;
						JSONList = [];
						break;
					}
					var jsonObject = me.jsonParse(record);
					JSONList.push(JSON.stringify(jsonObject));
				}
				if(flag){
				    Ext.Ajax.request({
						url : 'kkjhSubmitKkjh.action?kkjhh=' + kkjhhValue,
						waitTitle : '提示',
						method : 'post',
						params:{datas:JSONobj,kkjhmxDatas:JSONList},
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
						           	  Ext.StoreMgr.lookup('KKJHStore').load();
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
			}})
	},
	
	//保存个人计划
	saveKkjh:function(o, e, eOpts ){
		var me = this;
		var win = o.up('window');
		var kkjhAddForm = win.down('#kkjhEditForm');
		var kkjhForm = kkjhAddForm.down('#kkjhForm');
		var tab = kkjhAddForm.getActiveTab();
		
		if(tab == kkjhAddForm.child('#kkjhFormTab')){
			me.addKkjhzb(kkjhForm); // 保存个人计划详情
		}else if(tab == kkjhAddForm.child('#kkjhmxListTab')){
			me.addKkjhmx(kkjhForm);// 保存个人计划课程
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
	
	 // kkjhmxListTab的保存
	addKkjhmx:function(kkjhForm){
		var me = this;
		var kkjhhValue = kkjhForm.down('#kkjhh').getValue();
		var kkjhmxListTab = kkjhForm.up('#kkjhEditForm').down('#kkjhmxListTab');
		var kkjhmxStore = kkjhmxListTab.down('#kkjhmxList').getStore();
		var JSONList = [];
		//获得Store中的数据
		var flag = true;
		for (var i = 0; i < kkjhmxStore.getCount(); i++) { 
			var record = kkjhmxStore.getAt(i); // 获得每条数据
			if(record.data.ksz == '' || record.data.jsz == ''){
				Ext.MessageBox.alert('提示','请将开始周和结束周填写完整！');
				flag = false;
			}
			var jsonObject = me.jsonParse(record);
			JSONList.push(JSON.stringify(jsonObject));
		}
		
		var form = kkjhForm.getForm();
		kkjhForm.down('#ztm').setValue('CG');
		kkjhForm.down('#zt').setValue('草稿状态');
		var JSONobj = []
		values = form.getValues();
	    JSONobj.push(JSON.stringify(values));
	    
		if(flag){
			Ext.Ajax.request({
					url : 'jhmxSaveKkjhmx.action?kkjhh=' + kkjhhValue,
					waitTitle : '提示',
					method : 'post',
					params:{datas:JSONList,kkjhDatas:JSONobj},
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
					             var lists = Ext.ComponentQuery.query('#kkjhmxList');
					           	  var list = lists[lists.length - 1]
					           	  var searchParams = {
											searchMode : 'simple',
											search : {}
									};
						        
									searchParams.search['kkjhh'] = "= '" + kkjhhValue + "'";
						        	var store = list.getStore();
						        	var proxy =  store.getProxy();
						        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
						        	store.load();
						        	
						        	me.getStore('KKJHStore').load();
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
		}
	},
	
	// 个人计划总表的保存
	addKkjhzb:function(kkjhForm){
		var me = this;
		var form = kkjhForm.getForm();
		if (form.isValid()){
			kkjhForm.down('#ztm').setValue('CG');
			kkjhForm.down('#zt').setValue('草稿状态');
			var JSONobj = []
			values = form.getValues();
		    JSONobj.push(JSON.stringify(values));
		    Ext.Ajax.request({
				url : 'kkjhEdit.action',
				waitTitle : '提示',
				method : 'post',
				params:{datas:JSONobj},
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
				          		me.getStore('KKJHStore').load();
						    }  
				        });
					}else{
						var errmsg = "保存失败！";
						Ext.MessageBox.show({
				           title: '错误',
				           msg: errmsg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.ERROR,
				           fn: function(id, msg){  
				        	 	form.reset();
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
	},
	
	// 保存后设置样式
	setView:function(kkjhForm){
			var textfields =  kkjhForm.query('textfield');
			for(var i in textfields){
				textfields[i].setReadOnly(true);
				var style = "background:none; border:0px";
				textfields[i].setFieldStyle(style);
			}
			kkjhForm.down('#searchPyfahBtn').setVisible(false);
			kkjhForm.down('#bzFieldset').setBorder('1 1 1 1');
//			kkjhForm.up('window').down('#kkListTab').setDisabled(false);
     	
//     		var grjhAddWin = Ext.ComponentQuery.query('#grjhAddWin');
//     		var okBtn = grjhAddWin[grjhAddWin.length-1].down('#OKBtn');
//     		okBtn.setDisabled(false)
	},
	
	
	//查找培养方案
	searchPyfah:function(o, e, Opts){
		var me = this;
		var kkjhForm = o.up('#kkjhForm');
		var xkzymValue = kkjhForm.down('#xkzym').getValue();
		if(xkzymValue == null){
			Ext.MessageBox.alert('提示','请先选择专业！')
		}else{
			var application = me.getApplication();
	    	var controller = application.getController('App.controller.jxkkjh.PYFAController');
		   	controller.onLaunch(xkzymValue);	
		}
	},
	
		onLaunch : function(o) {
				var rec = getSelRec(o.up('gridpanel'));
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
					if(rec.data.ztm == 'CG' || rec.data.ztm == 'WTG'){
						var win = Ext.create('App.view.jxkkjh.KKJHEditWindow');
						var kkjhForm = win.down('#kkjhForm')
					    win.show();
						kkjhForm.loadForm(rec);
						kkjhForm.setEditView();
					}else{
							Ext.MessageBox.alert('提示','此开课计划不可以修改！');
						}
				}
			}
	})
