Ext.define('App.controller.pygrjh.EditPYGRJHController',{
	extend:'Ext.app.Controller',
	
	models:['pygrjh.PYGRJHModel','pygrjh.PYGRJHKCModel'],	
	stores:['pygrjh.PYGRJHStore','pygrjh.PYGRJHKCStore'],
	
	refs : [{
			selector : 'grjhEditWin',
			ref : 'grjhEditWin'
		}],
	init:function(){
		this.control({
			'pygrjhEditForm button[action=searchPyfah]':{
				click:this.searchPyfah
			},
			'grjhEditWin button[action=ok]':{
				click:this.submitGrjh
			},
			'grjhEditWin button[action=save]':{
				click:this.saveGrjh
			},
			'pygrjhEditForm button[action=importKc]':{
				click:this.importKc
			},			
			'pygrjhEditForm button[action=addKc]':{
				click:this.addKc
			},
			'pygrjhEditForm button[action=delete]':{
				click:this.deleteKc
			},
			'pygrjhEditForm button[action=edit]':{
				click:this.editGrjhkc
			},
			'pygrjhEditForm button[action=detail]':{
				click:this.detailGrjhkc
			}
		});
	},
	
	detailGrjhkc:function(o, e, eOpts){
		var rec = getSelRec(o.up('gridpanel'));
			   if(rec != undefined){
	        		var grjhkcWins = Ext.ComponentQuery.query('#grjhkcDetail');
	        		if(grjhkcWins.length > 0) {
		        		var win = grjhkcWins[0];
		        		win.setTitle('课程详情');
		        		win.setIconCls('detail_16');
		        		win.show();
	        	}else{
					var win = new Ext.Window({
						layout:'fit',
						itemId:'grjhkcDetail',
						autoShow:true,
						title:'课程详情',
						iconCls:'detail_16',
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
	    				items: [Ext.create('App.view.pygrjh.PYGRJHKCDetail')]
					});
	        	}
				var grjhForm = win.down('form');
	        	grjhForm.loadForm(rec);
	        	grjhForm.setViewForm();
	        }
	},
		//修改个人计划课程
		editGrjhkc:function(o, e, eOpts){
			var rec = getSelRec(o.up('gridpanel'));
			   if(rec != undefined){
	        		var grjhkcWins = Ext.ComponentQuery.query('#grjhkcEdit');
	        		if(grjhkcWins.length > 0) {
		        		var win = grjhkcWins[0];
		        		win.setTitle('课程详情');
		        		win.setIconCls('detail_16');
		        		win.show();
	        	}else{
					var win = new Ext.Window({
						layout:'fit',
						itemId:'grjhkcEdit',
						autoShow:true,
						title:'课程详情',
						iconCls:'detail_16',
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
	    				items: [Ext.create('App.view.pygrjh.PYGRJHKCEdit')]
					});
	        	}
				var grjhForm = win.down('form');
	        	grjhForm.loadForm(rec);
	        	grjhForm.setViewForm();
	        }
	},
	
	//导入课程
	 importKc:function(o, e, eOpts){
	 	var pygrjhEditForm = o.up('#grjhkcListTab').up('#pygrjhEditForm');
		var xsJcxxForm = pygrjhEditForm.down('#xsJcxxForm');
		var pyfahValue = xsJcxxForm.down('#pyfah').getValue();
	 	var me = this;
	 	var application = me.getApplication();
    	var controller = application.getController('App.controller.pygrjh.ImportGrjhkcController');
	    controller.onLaunch(pyfahValue);	
	 },
	 
	 //添加课程
	 addKc:function(o, e, eOpts){
	 	var pygrjhEditForm = o.up('#grjhkcListTab').up('#pygrjhEditForm');
		var xsJcxxForm = pygrjhEditForm.down('#xsJcxxForm');
		var pyfahValue = xsJcxxForm.down('#pyfah').getValue();
	 	var me = this;
	 	var application = me.getApplication();
    	var controller = application.getController('App.controller.pygrjh.AddGrjhkcController');
	    controller.onLaunch(pyfahValue);	
	 },
	 
//	
//	importKc:function(o, e, eOpts){
//		var me = this;
//		var pygrjhEditForm = o.up('#grjhkcListTab').up('#pygrjhEditForm');
//		var xsJcxxForm = pygrjhEditForm.down('#xsJcxxForm');
//		// 赋值
//		var xhValue = xsJcxxForm.down('#xh').getValue()
//		var pyfahValue = xsJcxxForm.down('#pyfah').getValue();
//		var njValue = xsJcxxForm.down('#nj').getValue();
//		var zydmValue = xsJcxxForm.down('#zydm').getValue()
//		
//		Ext.Ajax.request({
//			url:'grjhkcFakcList.action?pyfah=' + pyfahValue,
//			method:'post',
//			success:function(response, opts){
//				var result = Ext.decode(response.responseText);
//				var success = result.result.success;
//				if(success){
//					var list = result.result.list;
//					Ext.StoreMgr.lookup('PYGRJHKCStore').removeAll();
//					for(var i = 0; i < list.length;i++){
//						var jsonObject =  JSON.parse(Ext.encode(list[i])); //转为Json对象
//						var grjhkcJson = {}
//						for(var item in jsonObject){
//							if(item == 'id')
//								grjhkcJson['id'] = '';
//							else
//				    			grjhkcJson[item] = jsonObject[item];
//				    		grjhkcJson['xh'] = xhValue;
//				    		grjhkcJson['pyfah'] = pyfahValue;
//				    		grjhkcJson['nj'] = njValue;
//				    		grjhkcJson['zydm'] = zydmValue;
//			    		 }
//			    		Ext.StoreMgr.lookup('PYGRJHKCStore').insert(0,grjhkcJson)
//					}
//				}
//			}
//		})
//	},
	
	 //删除课程
	deleteKc:function(o, e, eOpts){
		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
		if(recs.length == 0){
			Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
		}else{
			var grjhkcList = o.up('#grjhkcListTab').down('#grjhkcList');
			var store = grjhkcList.getStore();
			var records = grjhkcList	.getSelectionModel().getSelection();
			store.remove(records);
		}
	},
	
	//提交审核，更新状态
	submitGrjh:function(o, e, eOpts){
		var me = this;
		var win = o.up('window');
		var xsjbxxFormTab = win.down('#pygrjhEditForm').down('#xsjbxxFormTab');
		xsjbxxFormTab.down('#zt').setValue('待审状态');
		xsjbxxFormTab.down('#ztm').setValue('2');
		var form = xsjbxxFormTab.down('#xsJcxxForm').getForm();
		var JSONobj = []
		values = form.getValues();
		JSONobj.push(JSON.stringify(values));
	    Ext.Ajax.request({
			url : 'pygrjhUpdateZt.action',
			waitTitle : '提示',
			method : 'post',
			params:{datas:JSONobj},
			waitMsg : '正在提交数据请稍候...',
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
			           	  var pygrjhList = Ext.getCmp('pygrjhList');
				          pygrjhList.getStore().load()
		        		  win.close();
					    }  
			        });
				}
			},
			failure : function(form, action) {
				var errmsg = "保存失败！";
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
	},
	
	//保存
	saveGrjh:function(o, e, eOpts ){
		var me = this;
		var win = o.up('window');
		var pygrjhEditForm = win.down('#pygrjhEditForm');
		
		var xsJcxxForm = pygrjhEditForm.down('#xsJcxxForm');
		var tab = pygrjhEditForm.getActiveTab();
		
		if(tab == pygrjhEditForm.child('#xsjbxxFormTab')){
			me.addGrjhZb(xsJcxxForm);//保存grjhZb
		}else if(tab == pygrjhEditForm.child('#grjhkcListTab')){
			me.addGrjhkc(xsJcxxForm);//保存grjhkc
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
	
	 // grjhkcListTab的保存
	addGrjhkc:function(xsJcxxForm){
		var me = this;
		var xhValue = xsJcxxForm.down('#xh').getValue();
		var grjhkcListTab = xsJcxxForm.up('#pygrjhEditForm').down('#grjhkcListTab');
		var pygrjhkcStore = grjhkcListTab.down('#grjhkcList').getStore();
		var JSONList = [];
		if(pygrjhkcStore.getCount() > 0){
			//获得Store中的数据
			for (var i = 0; i < pygrjhkcStore.getCount(); i++) { 
				var record = pygrjhkcStore.getAt(i);
				var jsonObject = me.jsonParse(record);
				JSONList.push(JSON.stringify(jsonObject));
			}
		}
		Ext.Ajax.request({
				url : 'grjhkcSaveGrjhkc.action?xh=' + xhValue,
				waitTitle : '提示',
				method : 'post',
				params:{datas:JSONList},
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
				           	  Ext.StoreMgr.lookup('PYGRJHKCStore').load();
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
	},
	
	// 个人计划总表的保存
	addGrjhZb:function(xsJcxxForm){
		var me = this;
		var form = xsJcxxForm.getForm();
		if (form.isValid()){
			xsJcxxForm.down('#ztm').setValue('1');
			xsJcxxForm.down('#zt').setValue('草稿状态');
			var JSONobj = []
			values = form.getValues();
		    JSONobj.push(JSON.stringify(values));
		    Ext.Ajax.request({
				url : 'pygrjhAdd.action',
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
				           	  var pygrjhList = Ext.getCmp('pygrjhList');
				           	  pygrjhList.getStore().load();
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
	setView:function(xsJcxxForm){
//			var win = xsJcxxForm.up('#grjhEditWin');
//			var grjhkcTab = win.down('#grjhkcListTab');
//			grjhkcTab.down('#xh').setValue(xsJcxxForm.down('#xh').getValue());
//			grjhkcTab.down('#nj').setValue(xsJcxxForm.down('#nj').getValue());
//			grjhkcTab.down('#zydm').setValue(xsJcxxForm.down('#zydm').getValue());
			
			var textfields =  xsJcxxForm.query('textfield');
			for(var i in textfields){
				textfields[i].setReadOnly(true);
				var style = "background:none; border:0px";
				textfields[i].setFieldStyle(style);
			}
	},
	
	
	//查找培养方案
	searchPyfah:function(o, e, Opts){
		var me = this;
		var xsJcxxForm = o.up('#xsJcxxForm');
		var zydmValue = xsJcxxForm.down('#zydm').getValue();
		var xslxmValue = xsJcxxForm.down('#xslxm').getValue();
		var application = me.getApplication();
   		var controller = application.getController('App.controller.pygrjh.PYFAController');
   		controller.onLaunch(zydmValue,xslxmValue,'editGrjh');	
	},
	
			onLaunch : function(o) {
				var rec = getSelRec(o.up('gridpanel'));
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
					if(rec.data.ztm != '1'){
						Ext.MessageBox.alert('提示','此培养方案处于待审状态，不可以修改！');
				}else{
						var xsJcxxForm = Ext.create('App.view.pygrjh.XSJCXXForm',{
							itemId:'xsJcxxForm',
							baseCls: 'my-panel-no-border'
						})
						var grjhEditWin = Ext.create('App.view.pygrjh.EditPYGRJHWindow');
						grjhEditWin.down('#xsjbxxFormTab').add(xsJcxxForm);
						grjhEditWin.show();
						xsJcxxForm.loadForm(rec);
						xsJcxxForm.setEditView();
					}
				}
			}
})
