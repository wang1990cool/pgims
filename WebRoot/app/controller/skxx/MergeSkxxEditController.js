Ext.define('App.controller.skxx.MergeSkxxEditController',{
	extend:'Ext.app.Controller',
	
	models : ['rs.JgxxModel'],
	stores : ['rs.JgxxStore',
			          'zd.ViewXxDwxxStore','zd.ZdSfzjlxmStore','skxx.MergeSkxxmxStore'],
	refs: [{  
        selector: 'mergeSkxxEditWindow',  
        ref: 'mergeSkxxEditWindow'  
    }],
    
	init:function(){
		this.control({
				'mergeSkxxEditWindow button[action=searchZjjs]':{
					click:this.searchZjjs
				},
				'mergeSkxxEditWindow button[action=searchZkjs]':{
					click:this.searchZkjs
				},
				'mergeSkxxEditWindow  button[action=searchSyjs]':{
					click:this.searchSyjs
				},
				'mergeSkxxEditWindow  button[action=ok]':{
					click:this.addJs
				},
				'mergeSkxxEditWindow button[action=add]':{
						click : this.addClass
					},
				'mergeSkxxEditWindow button[action=delete]':{
					click : this.deleteClass
				},
				'mergeSkxxEditWindow button[action=save]':{
					click : this.saveClass
				},
				'mergeSkxxEditWindow button[action=delete]':{
					click : this.deleteClass
				},
				'mergeSkxxEditWindow button[action=detail]':{
					click : this.detailSkxxmx
				}
			});
		},
			detailSkxxmx:function(o, e, eOpts){
		  	   var rec = getSelRec(o.up('gridpanel'));
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
					var win;
					var skxxDetailWins = Ext.ComponentQuery.query('#skxxmxDetailWin');
					if(skxxDetailWins.length > 0){
						win = skxxDetailWins[0];
					}else{
			            	var win = new Ext.Window({
			            		itemId:'skxxmxDetailWin',
			            		autoShow: true,
			            		title:'详情',
			            		iconCls:'detail_16',
			                    width: 765,
							   height: 600,
			                    closeAction:'hide',
			            		resizable:false,
			            		shadow:true,
			            		modal:true,
			            		closable:true,
			            		constrainHeader:true,
			            		animCollapse:true,
			          		    bodyStyle :"overflow-x:hidden;overflow-y:auto",
			                    items: [Ext.create('App.view.skxx.SkxxmxDetailForm')],
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
			        	var detailForm = win.down('#skxxmxDetailForm');
			        	detailForm.loadForm(rec);
			        	detailForm.setViewForm();
			        	win.show();
			  	  }
			},
		
			saveClass:function(o, e, eOpts){
				var me = this;
				var win = o.up('window');
				var skxxmxList = win.skxxmxList;
				var skxxList = win.skxxList;
				var recs = win.recs;
				var kkkh = recs[0].data.kkkh;
				var form = win.down('form')
				
		   	    //获得skxxmx的json
		   	    var skxxJson = {}
				var textfields =  form.query('textfield');
				for(var i in textfields){
					skxxJson[textfields[i].itemId] = textfields[i].getValue();
				}
				if(form.down('#ksz').getValue().length != 0 && form.down('#jsz').getValue().length){
					skxxJson['qzz'] = skxxJson['ksz'] + ' ~ ' + skxxJson['jsz'];
				}
				skxxJson['kkkh'] = kkkh
				skxxJson['ddzxapbz'] = form.down('#ddzxapbz').getSubmitValue();
				skxxJson['sjzxapbz'] = form.down('#sjzxapbz').getSubmitValue();
				
				var mergeSkxxmxList = win.down('#mergeSkxxmxList');
				var mergeSkxxmxStore = mergeSkxxmxList.getStore();
				var JSONList = [];
		   		for(var i = 0; i < mergeSkxxmxStore.getCount(); i++){
		   			var record = mergeSkxxmxStore.getAt(i);
		   			var skjhJson = {};
		   			skjhJson['id'] = '';
		   			skjhJson['kkkh'] = kkkh;
		   			skjhJson['kkjhh'] = record.get('kkjhh');
		   			skjhJson['kch'] =record.get('kch');
		   			JSONList.push(JSON.stringify(skjhJson));
		   		}
				
		   		Ext.Ajax.request({
 		 			url:'skxxMergeEdit.action',
 		 			method:'post',
 		 			params:{datas:Ext.encode(skxxJson),skjhDatas:JSONList},
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
					           		if(skxxmxList !=null)
          	        					skxxmxList.getStore().load();
					           		win.close();
					        	}  
					        });	
						}
					}
 		 		})
			},
			
			deleteClass:function(o, e, eOpts){
				var win = o.up('window');
				var list = win.down('grid');
				var form = win.down('form');
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				}else{
					var mergeSkxxmxStore = list.getStore();
					var remainClass = mergeSkxxmxStore.getCount() - recs.length;
					
					if(remainClass >= 2){
						mergeSkxxmxStore.remove(recs);
						var firstRecord = mergeSkxxmxStore.getAt(0).data;
						var pydwh = firstRecord.pydwh;
				   		var pydw = firstRecord.pydw;
				   		var zydm = firstRecord.xkzym;
				   		var zymc = firstRecord.xkzy;
				   		var jhrs = Number(firstRecord.jhrs);
				   		
				   		for(var i = 1; i < mergeSkxxmxStore.getCount() ;i++){
			   				var record = mergeSkxxmxStore.getAt(i);
			   				pydwh = pydwh + '/' + record.get('pydwh')
			   				pydw = pydw +'/'+  record.get('pydw')
			   				zydm = zydm + '/' + record.get('xkzym')
			   				zymc = zymc + '/' +  record.get('xkzy')
			   				jhrs = jhrs + Number( record.get('jhrs'));
				   		
			 		 		form.down('#jhrs').setValue(jhrs);
			 		 		form.down('#pydwh').setValue(pydwh);
			 		 		form.down('#pydw').setValue(pydw);
			 		 		form.down('#zydm').setValue(zydm);
			 		 		form.down('#zymc').setValue(zymc);
						}
					}else{
						Ext.MessageBox.alert('提示','合班时，课程不得少于两门！');
					}
				}
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
				var application = me.getApplication();
				if(ggkbz == 'ggk'){
			        var controller = application.getController('App.controller.skxx.MergeSkxxmxAddController');
				    controller.onLaunch(o,win)
				}else if(ggkbz == 'fGgk'){
					 var controller = application.getController('App.controller.skxx.MergeFSkxxmxAddController');
				    controller.onLaunch(o,win)
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
		
			onLaunch : function(o,ggkbz,skxxmxList,skxxList) {
				var me  = this;
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
//				var win;
//				var skxxEditWins = Ext.ComponentQuery.query('#skxxEditWin');
//				if(skxxEditWins.length > 0){
//					win = skxxEditWins[0];
//				}else{
					var win = Ext.create('App.view.skxx.MergeSkxxEditWindow',{
						itemId:'mergeSkxxEditWindow',
						ggkbz:ggkbz,
						recs:recs,
						skxxmxList:skxxmxList,
						skxxList:skxxList
					});
//				}
				win.down('#skxxEditForm').loadForm(recs[0])
				win.down('#skxxEditForm').setViewForm();
				var list = win.down('#mergeSkxxmxList')
				list.getStore().removeAll();
				me.setSkxxmxData(recs,list);
				win.show();
			}
	})
