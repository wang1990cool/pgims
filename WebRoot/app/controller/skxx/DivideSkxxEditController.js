Ext.define('App.controller.skxx.DivideSkxxEditController',{
	extend:'Ext.app.Controller',
	
	models : ['rs.JgxxModel'],
	stores : ['rs.JgxxStore','zd.ZdXzqhmStore','skxx.DivideSkxxStore',
			      'zd.ViewXxDwxxStore','zd.ZdSfzjlxmStore','skxx.MergeSkxxmxStore'],
	refs: [{  
        selector: 'divideSkxxEditWindow',  
        ref: 'divideSkxxEditWindow'  
    }],
    
	init:function(){
		this.control({
				'divideSkxxEditWindow button[action=searchZjjs]':{
					click:this.searchZjjs
				},
				'divideSkxxEditWindow button[action=searchZkjs]':{
					click:this.searchZkjs
				},
				'divideSkxxEditWindow  button[action=searchSyjs]':{
					click:this.searchSyjs
				},
				'divideSkxxEditWindow  button[action=save]':{
					click:this.saveClass
				},
				'divideSkxxEditWindow button[action=add]':{
						click : this.addClass
					},
				'divideSkxxEditWindow button[action=delete]':{
					click : this.deleteClass
				},
				'divideSkxxEditWindow button[action=edit]':{
					click : this.editClass
				},
				'divideSkxxEditWindow button[action=detail]':{
					click : this.detailClass
				}
			});
		},
			detailClass:function(o,e,eOpts){
		  	   var rec = getSelRec(o.up('gridpanel'));
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
					var win;
					var skxxDetailWins = Ext.ComponentQuery.query('#skxxDetailWin');
					if(skxxDetailWins.length > 0){
						win = skxxDetailWins[0];
						win.show();
					}else{
		            	var win = new Ext.Window({
		            		itemId:'skxxDetailWin',
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
		                    items: [Ext.create('App.view.skxx.SKXXDetail')],
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
		        	var detailForm = win.down('#skxxDetail');
		        	detailForm.loadForm(rec);
		        	detailForm.setView();
		  	  }
				
			},
			editClass:function(o,e,eOpts){
				var me = this;
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
					var win = o.up('window');
					var skxxList = win.skxxList;
					var divideList = o.up('grid');
					var application = me.getApplication();
		            var controller = application.getController('App.controller.skxx.EditSkxxController');
				    controller.onLaunch(o,divideList,skxxList);
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
			
		saveClass:function(o, e, eOpts){
				var me = this;
				var win = o.up('window');
				var skxxmxList = win.skxxmxList;
				var skxxList = win.skxxList;
			
				var JSONList = [];
		   	    //获得skxxmx的json
		   	    var skxxJson = {}
		   	    var form = win.down('form')
				var textfields =  form.query('textfield');
				for(var i in textfields){
					skxxJson[textfields[i].itemId] = textfields[i].getValue();
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
					           		if(skxxmxList !=null)
          	        					skxxmxList.getStore().load();
					           		win.close();
					        	}  
					        });	
						}
					}
 		 		})
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
		
		setSkxxData:function(recs,list,kkkhArray){
			var me = this;
			var kchValue = recs[0].data.kch;
			me.getSkxx(recs,kchValue,kkkhArray,list);
		},
			
			getSkxx:function(recs,kchValue,kkkhArray,list){
					Ext.Ajax.request({
							url:'skxxGetDivideSkxx.action',
							method : 'post',
							params:{kkkhArray:kkkhArray.join(','),kch:kchValue},
							success : function(response, opts) {
								var result = Ext.decode(response.responseText);
								var success = result.result.success;
								if(success){
									var skxxList = result.result.list;
									for(var i = 0;i < skxxList.length;i++){
										if(skxxList[i].kkkh == recs[0].data.kkkh){
											continue;
										}else{
											var jsonObject = JSON.parse(Ext.encode(skxxList[i])); //将每条数据转为json对象
											var skxxJson = {} //存放每条开课计划明细
											for(var item in jsonObject){
												skxxJson[item] = jsonObject[item];
								    		 }
									  	  list.getStore().insert(0,skxxJson)
										}
									}
								}
							}
						})
			},
		
			onLaunch : function(o,ggkbz,kkkhArray,skxxmxList,skxxList) {
					var me = this;
					var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
					var win = Ext.create('App.view.skxx.DivideSkxxEditWindow',{
						itemId:'divideSkxxEditWindow',
						ggkbz:ggkbz,
						skxxmxList:skxxmxList,
						skxxList:skxxList
					});
					win.down('#divdeSkxxEditForm').loadForm(recs[0])
					win.down('#divdeSkxxEditForm').setViewForm();
					var list = win.down('#divideSkxxList');
					list.getStore().removeAll();
					me.setSkxxData(recs,list,kkkhArray)
			}
	})
