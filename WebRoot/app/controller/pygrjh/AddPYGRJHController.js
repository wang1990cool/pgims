Ext.define('App.controller.pygrjh.AddPYGRJHController',{
	extend:'Ext.app.Controller',
	
	models:['pygrjh.PYGRJHModel','pygrjh.PYGRJHKCModel'],	
	stores:['pygrjh.PYGRJHStore','pygrjh.PYGRJHKCStore','pygrjh.PYGRJHKCAllStore'],
	
	refs : [{
			selector : 'grjhAddWin',
			ref : 'grjhAddWin'
		}],
		
	init:function(){
		this.control({
			'pygrjhAddForm button[action=searchXh]':{
				click:this.searchXh
			},
			'pygrjhAddForm button[action=searchPyfah]':{
				click:this.searchPyfah
			},
			'grjhAddWin button[action=ok]':{
				click:this.submitGrjh
			},
			'grjhAddWin button[action=save]':{
				click:this.saveGrjh
			},
			'pygrjhAddForm button[action=importKc]':{
				click:this.importKc
			},			
			'pygrjhAddForm button[action=addKc]':{
				click:this.addKc
			},
			'pygrjhAddForm button[action=detail]':{
				click:this.detailGrjhkc
			},
			'pygrjhAddForm button[action=edit]':{
				click:this.editGrjhkc
			},
			'pygrjhAddForm button[action=delete]':{
				click:this.deleteKc
			}
		});
	},
	
	//个人计划详情
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
		        		win.setTitle('课程修改');
		        		win.setIconCls('edit_16');
		        		win.show();
	        	}else{
					var win = new Ext.Window({
						layout:'fit',
						itemId:'grjhkcEdit',
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
	    				items: [Ext.create('App.view.pygrjh.PYGRJHKCEdit')]
					});
	        	}
				var grjhForm = win.down('form');
	        	grjhForm.loadForm(rec);
	        	grjhForm.setViewForm();
	        }
	},
	
	//导入个人计划课程
	 importKc:function(o, e, eOpts){
	 	 var pygrjhAddForm = o.up('#grjhkcListTab').up('#pygrjhAddForm');
		var xsJcxxForm = pygrjhAddForm.down('#xsJcxxForm');
		var pyfahValue = xsJcxxForm.down('#pyfah').getValue();
	 	var me = this;
	 	var application = me.getApplication();
    	var controller = application.getController('App.controller.pygrjh.ImportGrjhkcController');
	    controller.onLaunch(pyfahValue);	
	 },
	 
	 //增加个人计划课程
	 addKc:function(o, e, eOpts){
	 	var pygrjhAddForm = o.up('#grjhkcListTab').up('#pygrjhAddForm');
		var xsJcxxForm = pygrjhAddForm.down('#xsJcxxForm');
		var pyfahValue = xsJcxxForm.down('#pyfah').getValue();
	 	var me = this;
	 	var application = me.getApplication();
    	var controller = application.getController('App.controller.pygrjh.AddGrjhkcController');
	    controller.onLaunch(pyfahValue);	
	 },
	
	 // 删除个人计划课程
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
	
	//提交审核个人计划
	submitGrjh:function(o, e, eOpts){
		var me = this;
		var win = o.up('window');
		var xsjbxxFormTab = win.down('#pygrjhAddForm').down('#xsjbxxFormTab');
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
	
	//保存个人计划
	saveGrjh:function(o, e, eOpts ){
		var me = this;
		var win = o.up('window');
		var pygrjhAddForm = win.down('#pygrjhAddForm');
		var xsJcxxForm = pygrjhAddForm.down('#xsJcxxForm');
		var tab = pygrjhAddForm.getActiveTab();
		
		if(tab == pygrjhAddForm.child('#xsjbxxFormTab')){
			me.addGrjhZb(xsJcxxForm); // 保存个人计划详情
		}else if(tab == pygrjhAddForm.child('#grjhkcListTab')){
			me.addGrjhkc(xsJcxxForm);// 保存个人计划课程
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
		var grjhkcListTab = xsJcxxForm.up('#pygrjhAddForm').down('#grjhkcListTab');
		var pygrjhkcStore = grjhkcListTab.down('#grjhkcList').getStore();
		var JSONList = [];
		if(pygrjhkcStore.getCount() > 0){
			//获得Store中的数据
			for (var i = 0; i < pygrjhkcStore.getCount(); i++) { 
				var record = pygrjhkcStore.getAt(i); // 获得每条数据
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
				           	  Ext.StoreMgr.lookup('PYGRJHKCAllStore').load();
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
		var xhValue = xsJcxxForm.down('#xh').getValue();
		var form = xsJcxxForm.getForm();
		if(form.isValid()){
			Ext.Ajax.request({
				url:'pygrjhCheckByXh.action?xh='+xhValue, //判断该学生是否存在
				method : 'post',
				success : function(response, opts) {
					var result = Ext.decode(response.responseText);
					var success = result.result.success;
					if(success){
						Ext.MessageBox.alert('提示', '该学生已经存在！');
				}else{
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
							           	  me.setView(xsJcxxForm)
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
				}
				}
				})
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
//			var win = xsJcxxForm.up('#grjhAddWin');
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
			xsJcxxForm.down('#searchXhBtn').setVisible(false);
			xsJcxxForm.down('#searchPyfahBtn').setVisible(false);
			
			xsJcxxForm.up('#grjhAddWin').down('#grjhkcListTab').setDisabled(false);
			
     		xsJcxxForm.up('#grjhAddWin').down('#saveBtn').setDisabled(true);
			
     		var grjhAddWin = Ext.ComponentQuery.query('#grjhAddWin');
     		var okBtn = grjhAddWin[grjhAddWin.length-1].down('#OKBtn');
     		okBtn.setDisabled(false)
	},
	
	// 查找学号
	searchXh:function(){
		var me = this;
		var application = me.getApplication();
    	var controller = application.getController('App.controller.pygrjh.XsJcxxController');
	    controller.onLaunch();	
	},
	
	//查找培养方案
	searchPyfah:function(o, e, Opts){
		var me = this;
		var xsJcxxForm = o.up('#xsJcxxForm');
		var xhValue = xsJcxxForm.down('#xh').getValue();
		if(xhValue.length == 0){
			Ext.MessageBox.alert('提示','请先选择学生！')
		}else{
			var zydmValue = xsJcxxForm.down('#zydm').getValue();
			var xslxmValue = xsJcxxForm.down('#xslxm').getValue();
			var application = me.getApplication();
    		var controller = application.getController('App.controller.pygrjh.PYFAController');
	   		controller.onLaunch(zydmValue,xslxmValue,'addGrjh');	
		}
	},
	
		onLaunch : function(record) {
			// 添加xsjcxxForm
			var xsJcxxForm = Ext.create('App.view.pygrjh.XSJCXXForm',{
					itemId:'xsJcxxForm',
					baseCls: 'my-panel-no-border'
			})
			var grjhAddwin = Ext.create('App.view.pygrjh.AddPYGRJHWindow');
			grjhAddwin.down('#xsjbxxFormTab').add(xsJcxxForm);
			grjhAddwin.show();
			}
	})
