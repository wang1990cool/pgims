Ext.define('App.controller.skxx.EditSkxxController',{
	extend:'Ext.app.Controller',
	
	models : ['rs.JgxxModel'],
	stores : ['rs.JgxxStore','zd.ViewXxDwxxStore','zd.ZdSfzjlxmStore','skxx.MergeSkxxmxStore'],
	refs: [{  
        selector: 'skxxEditWindow',  
        ref: 'skxxEditWindow'  
    }],
    
	init:function(){
		this.control({
				'skxxEditWindow button[action=searchZjjs]':{
					click:this.searchZjjs
				},
				'skxxEditWindow button[action=searchZkjs]':{
					click:this.searchZkjs
				},
				'skxxEditWindow  button[action=searchSyjs]':{
					click:this.searchSyjs
				},
				'skxxEditWindow  button[action=save]':{
					click:this.saveClass
				},
				'skxxEditWindow button[action=add]':{
						click : this.addClass
					},
				'skxxEditWindow button[action=delete]':{
					click : this.deleteClass
				}
			});
		},
			saveClass:function(o,e,eOpts){
				var me = this;
				var win = o.up('window');
				var divideList = win.divideList;
				if(divideList != null){
					me.divideEdit(win);
				}else if(divideList == null){
					me.otherEdit(win);
				}
			},
			
			otherEdit:function(win){
				var skxxList = win.skxxList;
				var form = win.down('#skxxEditForm');
				var values = form.getForm().getValues();
				var jsonObject = JSON.parse(Ext.encode(values))
				var skxxJson = {}
				for(var item in jsonObject){
					var itemId = '#' + item;
					 skxxJson[item] = form.down(itemId).getValue();
				 }
				if(form.down('#ksz').getValue().length != 0 && form.down('#jsz').getValue().length){
					skxxJson['qzz'] = skxxJson['ksz'] + ' ~ ' + skxxJson['jsz'];
				}
				skxxJson['ddzxapbz'] = form.down('#ddzxapbz').getSubmitValue();
				skxxJson['sjzxapbz'] = form.down('#sjzxapbz').getSubmitValue();
				
				Ext.Ajax.request({
	 		 			url:'skxxEdit.action',
	 		 			method:'post',
	 		 			params:{datas:Ext.encode(skxxJson)},
	 		 			success : function(response, opts) {
							var result = Ext.decode(response.responseText);
							var success = result.result.success;
							if(success){
								var msg = "修改成功！";
								Ext.MessageBox.show({
						           title: '提示',
						           msg: msg,
						           buttons: Ext.MessageBox.OK,
						           icon: Ext.MessageBox.INFO,
						           fn: function(id, msg){
										skxxList.getStore().load();
						           		win.close();
						        	}  
						        });	
							}
						}
	 		 		})
			},
			
			divideEdit:function(win){
					var divideList = win.divideList;
					var store = divideList.getStore();
					var skxxList = win.skxxList;
					var form = win.down('#skxxEditForm');
					var values = form.getForm().getValues();
					
					// 生成的新的记录
					var jsonObject = JSON.parse(Ext.encode(values))
					var skxxJson = {}
					for(var item in jsonObject){
						var itemId = '#' + item;
						 skxxJson[item] = form.down(itemId).getValue();
					 }
					if(form.down('#ksz').getValue().length != 0 && form.down('#jsz').getValue().length){
						skxxJson['qzz'] = skxxJson['ksz'] + ' ~ ' + skxxJson['jsz'];
					}
					skxxJson['ddzxapbz'] = form.down('#ddzxapbz').getSubmitValue();
					skxxJson['sjzxapbz'] = form.down('#sjzxapbz').getSubmitValue();
					
					Ext.Ajax.request({
	 		 			url:'skxxEdit.action',
	 		 			method:'post',
	 		 			params:{datas:Ext.encode(skxxJson)},
	 		 			success : function(response, opts) {
							var result = Ext.decode(response.responseText);
							var success = result.result.success;
							if(success){
								var msg = "修改成功！";
								Ext.MessageBox.show({
						           title: '提示',
						           msg: msg,
						           buttons: Ext.MessageBox.OK,
						           icon: Ext.MessageBox.INFO,
						           fn: function(id, msg){
										var records = divideList.getSelectionModel().getSelection();// 获得选中行的数据
										var rowid = store.indexOf(records[0]) //获得选中行的行号
						           		store.remove(records); // 删除选中行
										store.insert(rowid,skxxJson) // 重新插入新的record
										skxxList.getStore().load();
						           		win.close();
						        	}  
						        });	
							}
						}
	 		 		})
			},
			
			searchZjjs:function(o, e, eOpts){
				var me = this
				var win = o.up('window');
				var form = win.down('form')
				var application = me.getApplication();
		        var controller = application.getController('App.controller.skxx.JGXXController');
				 controller.onLaunch(o,'zjjs',form);
			},
			
			searchZkjs:function(o, e, eOpts){
				var me = this
				var win = o.up('window');
				var form = win.down('form')
				var application = me.getApplication();
		        var controller = application.getController('App.controller.skxx.JGXXController');
				 controller.onLaunch(o,'zkjs',form);
			},
			
			searchSyjs:function(o, e, eOpts){
				var me = this
				var win = o.up('window');
				var form = win.down('form')
				var application = me.getApplication();
		        var controller = application.getController('App.controller.skxx.JGXXController');
				 controller.onLaunch(o,'syjs',form);
			},
		
			addClass:function(o, e, eOpts){
				var me = this
				var win = o.up('window');
				var ggkbz = win.ggkbz;
				alert(ggkbz)
				var application = me.getApplication();
				if(ggkbz == 'ggk'){
			        var controller = application.getController('App.controller.skxx.MergeSkxxmxAddController');
				    controller.onLaunch(o,'edit',win)
				}else if(ggkbz == 'fGgk'){
					 var controller = application.getController('App.controller.skxx.MergeFSkxxmxAddController');
				    controller.onLaunch(o,'edit',win)
				}
			}, 
			
		addJs:function(o, e, eOpts){
			var me = this;
			var win = o.up('#skxxEditWin')
			var form = win.down('#skxxEditForm');
			var JSONobj = []
			values = form.getValues();
		    JSONobj.push(JSON.stringify(values));
			 Ext.Ajax.request({
				url : 'skxxEdit.action',
				waitTitle : '提示',
				method : 'post',
				params:{datas:JSONobj},
				success : function(response, opts) {
					var result = Ext.decode(response.responseText);
					var success = result.result.success;
					var id = result.id;
					if(success){
						var msg = "修改成功！";
						Ext.MessageBox.show({
				           title: '提示',
				           msg: msg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.INFO,
					       fn: function(id, msg){
					       		me.getStore('SKXXStore').load();
//					           	if(classTypeValue == 'GGK'){
//						           	  var  skxxGGKLists = Ext.ComponentQuery.query('#skxxListGGK');
//		  	        		     	  var skxxGGKList = skxxGGKLists[skxxGGKLists.length - 1];
//		  	        			      skxxGGKList.getStore().load();
//					           	}else if(classTypeValue == 'FGGK'){
//					           		  var  skxxFGGKLists = Ext.ComponentQuery.query('#skxxListFGGK');
//		  	        		     	  var skxxFGGKList = skxxFGGKLists[skxxFGGKLists.length - 1];
//		  	        			      skxxFGGKList.getStore().load();
//					           	}else if(classTypeValue == 'ALL'){
//					           			me.getStore('SKXXStore').load();
//					           	}
				        			win.close();
							    } 
				        });
					}else{
						var errmsg = "修改成功！";
						Ext.MessageBox.show({
				           title: '错误',
				           msg: errmsg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.ERROR,
				           fn: function(id, msg){  
//				        	   me.getForm().reset();
						    }  
				        });
					}
				}
			});
		},
			
			
//          addJs:function( o, e, eOpts ){
//          	 	var me = this;
//          	 	var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
//          	 	
//          	 	var jslxCombo = o.ownerCt.down('#jslxCombo');
//          	 	var jslxValue = jslxCombo.getValue();
//          	 	
//          	 	if(recs.length == 0){
//          	 		Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
//          	 	}else{
//          	 		var  list = Ext.ComponentQuery.query('#skxxList');
//	          	    var skxxList = list[list.length - 1];
//	          	    var rec = skxxList.getSelectionModel().getSelection();
//	          	    var kkkh = rec[0].data.kkkh;
//	          	    
//          	 		if(jslxValue == 'zkjs'){
//          	 			var zkjsh = recs[0].data.gh;
//						var zkjs = recs[0].data.xm
//						for(var i = 1; i < recs.length; i++){
//							zkjsh += '/' + recs[i].data.gh;
//							zkjs += '/' + recs[i].data.xm;
//						}
//						me.addTec(zkjsh,zkjs,kkkh,jslxValue);
//	          	 	}else{
//	          	 		if(recs.length > 1){
//							Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
//	          	 		}else if(recs.length == 1){
//	          	 			var ghValue = recs[0].data.gh;
//	          	 			var xmValue = recs[0].data.xm;
//	          	 			me.addTec(ghValue,xmValue,kkkh,jslxValue);
//	          	 		}
//	          	 	}
//          	 	}
//          },
//         
//        addTec:function(gh,xm,kkkh,jslx){
//        	Ext.Ajax.request({
//        		url:'skxxAddTec.action?gh=' + gh + '&xm=' + encodeURI(encodeURI(xm)) +
//        				'&kkkh=' + kkkh + '&jslx=' + jslx,
//        		method:'post',
//        		success:function(response,opts){
//        			var result = Ext.decode(response.responseText);
//					var success = result.result.success;
//					if(success){
//						var msg = "添加教师成功！";
//						Ext.MessageBox.show({
//				           title: '提示',
//				           msg: msg,
//				           buttons: Ext.MessageBox.OK,
//				           icon: Ext.MessageBox.INFO,
//				           fn: function(id, msg){
//				           	  Ext.StoreMgr.lookup('JgxxStore').load();
//				        	}  
//				        });	
//					}
//        		}
//        	})
//        },
          
  		detailJs:function(o, e, eOpts){
				var rec = getSelRec(o.up('gridpanel'));
				if (rec != undefined) {
					var xnjgbWins = Ext.ComponentQuery.query('#xnjgbWin1');
					if (xnjgbWins.length > 0) {
						var win = xnjgbWins[0];
						win.setTitle('教师详情');
						win.setIconCls('edit_16');
						win.show();
					} else {
						var win = new Ext.Window({
									itemId : 'xnjgbWin1',
									title : '教师详情',
									iconCls : 'add_16',
									layout : 'fit',
									width : 900,
									height : 600,
									closeAction : 'hide',
									resizable : false,
									shadow : true,
									modal : true,
									closable : true,
									animCollapse : true,
									autoShow : true,
									items : [Ext.create(
											'App.view.rs.XnjgbForm', {
												autoScroll : true,
												isAdd : false,// 测试
												imgUrl : 'XnjgbgetImage.action',
												imgId : 'gh',
												postUrl : "xnjgb"
											})],
									buttons : [{
												itemId : 'cancelBtn',
												text : '取消',
												handler : function() {
													this.up('window').close();
												}
											}]
								});
					}
					var xnjgbForm = win.down('form');
					xnjgbForm.edit(rec);
					xnjgbForm.loadForm(rec);
					xnjgbForm.down('#upImgBtn').hide();
					
					var textfields = xnjgbForm.query('textfield');
					for (var i in textfields) {
						textfields[i].setReadOnly(true);
						var style = "background:none; border : 0px;";
						textfields[i].setFieldStyle(style);
					}
				}
			},
		
		setSkxxmxData:function(recs,list){
				var me = this;
				var kkkhValue = recs[0].data.kkkh;
				var kchValue = recs[0].data.kch
				me.getSkxxmx(kkkhValue,kchValue,list)
		},
			
			getSkxxmx:function(kkkhValue,kchValue,list){
					Ext.Ajax.request({
							url:'skxxGetSkxxmx.action',
							method : 'post',
							params:{kkkh:kkkhValue,kch:kchValue},
							success : function(response, opts) {
								var result = Ext.decode(response.responseText);
								var success = result.result.success;
								if(success){
									var skxxmxList = result.result.list;
									for(var i = 0;i < skxxmxList.length;i++){
											var jsonObject = JSON.parse(Ext.encode(skxxmxList[i])); //将每条数据转为json对象
											var skxxmxJson = {} //存放每条开课计划明细
											for(var item in jsonObject){
												skxxmxJson[item] = jsonObject[item];
								    		 }
									  	  list.getStore().insert(0,skxxmxJson)
										}
								}
							}
						})
		},
		
			onLaunch : function(o,divideList,skxxList) {
				var me  = this;
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
//				var win;
//				var skxxEditWins = Ext.ComponentQuery.query('#skxxEditWin');
//				if(skxxEditWins.length > 0){
//					win = skxxEditWins[0];
//				}else{
					var win = Ext.create('App.view.skxx.SKXXEditWindow',{
						itemId:'skxxEditWin',
						divideList:divideList,
						skxxList:skxxList
					});
//				}
				win.down('#skxxEditForm').loadForm(recs[0])
				win.down('#skxxEditForm').setViewForm();
				win.show();
			}
	})
