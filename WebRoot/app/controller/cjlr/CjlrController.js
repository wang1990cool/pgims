Ext.define('App.controller.cjlr.CjlrController', {
    extend: 'Ext.app.Controller',
    
    models: ['cjlr.JxCjtjsjbModel','cjlr.ViewJxCjlrModel','cjlr.ViewJxCjmxModel','cjlr.KcztModel','cjlr.JxCjmxbModel'],
    stores: ['cjlr.ViewJxCjmxStore','cjlr.JxCjmxbStore','cjlr.JxCjtjsjbStore','zd.TyXnbStore','cjlr.ViewJxCjlrStore','cjlr.JxKcztStore'],
    
        refs: [{  
        selector: 'kcxxForm',  
        ref: 'kcxxForm'  
    }],
    
    init: function() {
		this.control({
			'cjlrForm button[action=save]':{
				click:this.saveKcxx
			},
			
			'cjlrForm button[action=submit]':{
				click:this.subKcxx
			},
			
			'kcztList button[action=import]':{
				click:this.impo
			},
			
			'kcztList button[action=display]':{
				click:this.display
			},
			
//			'kcztList button[action=reback]':{
//				click:this.reback
//			},
			
			'kcztList' : {
				itemdblclick: this.itemDblClick
			},
			
			'jxCjmxList button[action=delete]':{
				click: this.del
			}
		});
    },
    
    initStore:function(record){
    	var me = this;
    },
    
   
    getCenter: function(){
    	return this.application.getController('main.MainController').getCenter();
    },
    
     getPanel:function(){
    	var me = this;
    	return me.getJxJxSkxxbContentPanelView();
    },
    
    impo: function(o, e, eOpts){
    	var me = this;
		var rec = getSelRec(o.up('gridpanel'));
		var grid = o.up('gridpanel');
		if(rec != undefined){
			var kkkh = rec.data.kkkh;
			var kcxf =  rec.data.kcxf;
			var kch = rec.data.kch;
			var kcmc = rec.data.kcmc;
			var sjzt = rec.data.sjzt;
			var zjjs = rec.data.zjjs;
			var zjjsh = rec.data.zjjsh;
			var xn = rec.data.xn;
			var xq = rec.data.xq;
			var zt = null;
		
//		
			Ext.Ajax.request({
	    		url:'jxCjtjsjgetSj.action',
	    		method: 'get',
	    		params: { xn: xn, xq: xq},
	    		success: function (response) {
	    			var result = Ext.decode(response.responseText);
//			    			var cjxxData = result.result.list[0];
	    			if(result.result.success){
							if(sjzt != '1'){
								if(sjzt == '' || sjzt == null || sjzt == '3'){
									zt = 'null';
								}else if(sjzt == '0'){
									zt = '0';
								}
								
								var tabPan = Ext.create('App.view.cjlr.CjlrPan',{
								    	itemId: 'cjlrPan',
								        pageGrid:o.up('gridpanel'),
								        sjzt: zt,
								        kkkh: kkkh
								});
							    
							    var kcxxForm = tabPan.down('#kcxxForm');
							    kcxxForm.down('#kcxf').setValue(kcxf);
								kcxxForm.down('#kkkh').setValue(kkkh);
								kcxxForm.down('#kch').setValue(kch);
								kcxxForm.down('#kcmc').setValue(kcmc);
								kcxxForm.down('#zjjsh').setValue(zjjsh);
								kcxxForm.down('#zjjs').setValue(zjjs);
								kcxxForm.down('#xn').setValue(xn);
								kcxxForm.down('#xq').setValue(xq);
							    
								var applyWin = Ext.create('Ext.window.Window',{
									itemId: 'enterWin',
									frame:true,
									layout: 'fit',
									autoShow: true,
									width:1000,
									height:600,
									closeAction:'hide',
									resizable:false,
									maximizable: true,
									constrainHeader:true,
									collapsible:false,
									enableDrag:true,
									shadow:false,
									modal:true,
									closable:true,
									bodyStyle:'padding:5',
									animCollapse:true,
									title:kch+"  "+ kcmc + "  "+'成绩录入',
									items:[tabPan],
									dockedItems : [{
										dock : 'top',
										xtype : 'toolbar',
										items : [{		
											itemId: 'Save',
											text : '保存',
											iconCls: 'save_16',
											tooltip : '保存 ',
											handler:function(){
												this.up('window').down('#cjlrPan').submit(this);
											}
										},'-',{
											itemId: 'Submit',
											text: '提交',
											iconCls: 'topArrow',
											tooltip: '提交',
											handler: function(){
												this.up('window').down('#cjlrPan').submit(this);
											}
											
										},'-',{					
											text: '关闭',
										    iconCls:'return_16',
											tooltip: '关闭',
											handler:function(){
												this.up('window').close();
											}
										}]
								    }]
								});
					
								if(sjzt == '' || sjzt == null || sjzt == '3'){
									Ext.Ajax.request({
							    		url:'cjlrGenCjmx.action',
							    		method: 'get',
							    		params: { kkkh: kkkh,kch: kch, xn: xn,xq: xq},
							    		success: function (response) {
							    			grid.getStore().load();
							    			var cjmxList = tabPan.down('#cjmxList');
							    			var kcxxForm = tabPan.down('#kcxxForm');
							    			kcxxForm.down('#sjzt').setValue('0');
							    			sjzt = '0';
											var store = cjmxList.getStore();
											var searchParams = {
													start : 0,
													page : 1,
													searchMode : 'simple',
													order : '',
													search : {}
											};
											searchParams.search['kkkh'] = "= '" + kkkh + "'";
										    var proxy =  store.getProxy();
										    proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
										    store.load({callback:function(records, options, success){
										    	store.each(function(rec){
										    		if(rec.data.ksxz == '' || rec.data.ksxz　 == null){
										    			rec.data.ksxz = '正常考试';
										    		}
										    		if(rec.data.ksxzm == '' || rec.data.ksxzm == null){
										    			rec.data.ksxzm = '1';
										    		}
										    	})
										    }});
							    		},
							            failure: function (response) {          	
							    		}});
								}else{
									var cjmxList = tabPan.down('#cjmxList');
									var store = cjmxList.getStore();
									var searchParams = {
											start : 0,
											page : 1,
											searchMode : 'simple',
											order : '',
											search : {}
									};
									searchParams.search['kkkh'] = "= '" + kkkh + "'";
								    var proxy =  store.getProxy();
								    proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
								    store.load({callback:function(records, options, success){
								    	store.each(function(rec){
								    		if(rec.data.ksxz == '' || rec.data.ksxz　 == null){
								    			rec.data.ksxz = '正常考试';
								    		}
								    		if(rec.data.ksxzm == '' || rec.data.ksxzm == null){
								    			rec.data.ksxzm = '1';
								    		}
								    	})
								    }});
								}
							    		
							}else if(sjzt == '1'){
							
								Ext.Msg.show({title:'提示', msg:'本门课程信息已提交，无法进行录入！',buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
						        return false;
							}
				
							Ext.Ajax.request({
							    		url:'cjlrGetData.action',
							    		method: 'get',
							    		params: { kkkh: kkkh},
							    		success: function (response) {
							    			var result = Ext.decode(response.responseText);
							    			var cjxxData = result.result.list[0];
							    			var cjjlData = cjxxData.jxCjjlbData;
							    			
				//			    			kcxxForm.down('#ksxsm').setValue(cjjlData.ksxsm);
				//			    			kcxxForm.down('#ksxs').setValue(cjjlData.ksxs);
							    			var ksrq = cjjlData.ksrq;
							    			if(ksrq != null){
							    				var year = ksrq.substring(0,4);
					     						var month = ksrq.substring(4,6);
					     						var day = ksrq.substring(6,8);
					     						ksrq = year+ "-" +month+ "-" +day;
							    				kcxxForm.down('#ksrq').setValue(ksrq);
							    			}
							    			kcxxForm.down('#ksdd').setValue(cjjlData.ksdd);
							    			kcxxForm.down('#ksfsm').setValue(cjjlData.ksfsm);
							    			kcxxForm.down('#ksfs').setValue(cjjlData.ksfs);
							    			kcxxForm.down('#cjlx').setValue(cjjlData.cjlx);
							    			kcxxForm.down('#cjlxm').setValue(cjjlData.cjlxm);
							    			kcxxForm.down('#sjzt').setValue(cjjlData.sjzt);
							    			kcxxForm.down('#pscjbl').setValue(cjjlData.pscjbl);
							    			if(sjzt != 1){
							    				kcxxForm.down('#ywpscj').setValue(cjjlData.ywpscj);
							    			}else{
							    				if(cjjlData.ywpscj == 1){
							    					kcxxForm.down('#pscj').setValue('有');
							    				}else if(cjjlData.ywpscj == 0){
							    					kcxxForm.down('#pscj').setValue('无');
							    				}
							    				kcxxForm.down('#ywpscj').setValue(cjjlData.ywpscj);
							    			}
										},
							            failure: function (response) {          	
							    		}});
							    		
				 }else{
	    			Ext.Msg.show({title:'提示', msg:'本门课程当前不在录入成绩时间范围内！',buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
	    		      return false;
	    			}
	    		}
	       })
		}
	 },
				    
  	display: function(o, e, eOpts){
  		var me = this;
		var rec = getSelRec(o.up('gridpanel'));
		if(rec != undefined){
			var kkkh = rec.data.kkkh;
			var kcxf =  rec.data.kcxf;
			var kch = rec.data.kch;
			var kcmc = rec.data.kcmc;
			var sjzt = rec.data.sjzt;
			var zjjs = rec.data.zjjs;
			var zjjsh = rec.data.zjjsh;
			var xn = rec.data.xn;
			var xq = rec.data.xq;
			var zt = null;
			if(sjzt == '1'){
				
				var tabPan = Ext.create('App.view.cjlr.DisCjlrPan',{
				    	itemId: 'disCjlrPan',
				        pageGrid:o.up('gridpanel')
				});
				
				var cjmxList = tabPan.down('#cjmxList');
				var kcxxForm = tabPan.down('#disKcxxForm');
				kcxxForm.setViewForm();
			    kcxxForm.down('#kcxf').setValue(kcxf);
				kcxxForm.down('#kkkh').setValue(kkkh);
				kcxxForm.down('#kch').setValue(kch);
				kcxxForm.down('#kcmc').setValue(kcmc);
				kcxxForm.down('#xn').setValue(xn);
				kcxxForm.down('#xq').setValue(xq);
				kcxxForm.down('#zjjsh').setValue(zjjsh);
				kcxxForm.down('#zjjs').setValue(zjjs);
			    
				var applyWin = Ext.create('Ext.window.Window',{
					itemId: 'enterWin',
					frame:true,
					layout: 'fit',
					autoShow: true,
					width:1000,
					height:600,
					closeAction:'hide',
					resizable:false,
					maximizable: true,
					constrainHeader:true,
					collapsible:false,
					enableDrag:true,
					shadow:false,
					modal:true,
					closable:true,
					bodyStyle:'padding:5',
					animCollapse:true,
					title:kch+"  "+ kcmc + "  "+'成绩录入',
					items:[tabPan],
					dockedItems : [{
						dock : 'top',
						xtype : 'toolbar',
						items : [{
				                xtype: 'FileDownloader',
				                itemId: 'fileDownloader',
				                width: 0,
				                height: 0
				            },
							{	
								itemId : 'pdfDownloader',
								text : '打印预览',
								tooltip : '打印预览 ',
								iconCls : 'download_16',
//								hidden: (sjzt == '2'?false:true),
							    listeners: {
							        click: {
							            fn: function(){ 
							            	Ext.Ajax.request({
									    		url:'cjlrtoPDF.action',
									    		method: 'get',
									    		params: { kkkh: kkkh},
									    		success: function (response) {
									    			var result = Ext.decode(response.responseText);
									    			window.open(result.msg); 
												},
									            failure: function (response) {    
									    		}});
//											var pdfParam = {kkkh:kkkh};
//											var downloader = this.up('window').down('#fileDownloader');
//											downloader.load({
//												params : pdfParam,
//												url: 'cjlrtoPDF.action',
//												success: function (response) {
//			    										alert("hehe");
//												},
//									            failure: function (response) {  
//									            		alert("meme");
//									    		}});
//											
//											window.open(o.params); 
							            }
							        }
					    }},'-',
							{					
							text: '关闭',
						    iconCls:'return_16',
							tooltip: '关闭',
							handler:function(){
								this.up('window').close();
							}
						}]
				    }]
				});
				var cjmxList = tabPan.down('#disCjmxList');
				var store = cjmxList.getStore();
				var searchParams = {
						start : 0,
						page : 1,
						searchMode : 'simple',
						order : '',
						search : {}
				};
				searchParams.search['kkkh'] = "= '" + kkkh + "'";
			    var proxy =  store.getProxy();
			    proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
			    store.load();
			
			}else{
				Ext.Msg.show({title:'提示', msg:'本门课程信息不是提交状态，无法查看详情！',buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
		        return false;
			}
			
			Ext.Ajax.request({
			    		url:'cjlrGetData.action',
			    		method: 'get',
			    		params: { kkkh: kkkh},
			    		success: function (response) {
			    			var result = Ext.decode(response.responseText)
			    			var cjxxData = result.result.list[0];
			    			var cjjlData = cjxxData.jxCjjlbData;
			    			
//			    			kcxxForm.down('#ksxsm').setValue(cjjlData.ksxsm);
//			    			kcxxForm.down('#ksxs').setValue(cjjlData.ksxs);
			    			var ksrq = cjjlData.ksrq;
			    			if(ksrq != null){
			    				var year = ksrq.substring(0,4);
	     						var month = ksrq.substring(4,6);
	     						var day = ksrq.substring(6,8);
	     						ksrq = year+ "-" +month+ "-" +day;
			    				kcxxForm.down('#ksrq').setValue(ksrq);
			    			}
			    			kcxxForm.down('#ksdd').setValue(cjjlData.ksdd);
			    			kcxxForm.down('#ksfsm').setValue(cjjlData.ksfsm);
			    			kcxxForm.down('#ksfs').setValue(cjjlData.ksfs);
			    			kcxxForm.down('#cjlx').setValue(cjjlData.cjlx);
			    			kcxxForm.down('#cjlxm').setValue(cjjlData.cjlxm);
			    			kcxxForm.down('#sjzt').setValue(cjjlData.sjzt);
			    			kcxxForm.down('#pscjbl').setValue(cjjlData.pscjbl);
			    			if(sjzt != 1){
			    				kcxxForm.down('#ywpscj').setValue(cjjlData.ywpscj);
			    			}else{
			    				if(cjjlData.ywpscj == 1){
			    					kcxxForm.down('#pscj').setValue('有');
			    				}else if(cjjlData.ywpscj == 0){
			    					kcxxForm.down('#pscj').setValue('无');
			    				}
			    				kcxxForm.down('#ywpscj').setValue(cjjlData.ywpscj);
			    			}
			    			
			    				
			    			
			    			
						},
			            failure: function (response) {          	
			    		}});
		}
  	},
    
  	
  	itemDblClick: function(o, record, item, index, e, eOpts){
    	var me = this;
    	
    	me.display(o,e,eOpts);
	},
	
    /* saveKcxx:function(o,e,Opts){
    	var kcxxForm = o.up('#kcxxForm');
 		var me = this;
		var form = kcxxForm.getForm();
 		if (form.isValid()){
 			var JSONobj = []
 			values = form.getValues();
 		    values.ksrq = values.ksrq.replace(/\-/g, "");	
 		    JSONobj.push(JSON.stringify(values));
 		    Ext.Ajax.request({
 				url : 'viewJxCjmxgetCjmx.action',
 				waitTitle : '提示',
 				method : 'post',
 				params:{kkkh:values.kkkh},
 				waitMsg : '正在提交数据请稍候...',
 				success : function(response, opts) {
 					var result = Ext.decode(response.responseText);
 					var success = result.result.success;
 					if(success){
 						var lists = result.result.list;
 						var JSONCjmxList  = [];
 						if(lists.length > 0){
 							for(var i = 0; i < lists.length;i++){
 								var jsonCjmx = {};
 								jsonCjmx['id'] = '';
 								jsonCjmx['kkkh'] = lists[i].kkkh;
 								jsonCjmx['xm'] = lists[i].xm;
 								jsonCjmx['xh'] = lists[i].xh;
 								JSONCjmxList.push(JSON.stringify(jsonCjmx));
 							}
 						}
 							
 					    Ext.Ajax.request({
 							url : 'jxCjjlAdd.action',
 							waitTitle : '提示',
 							method : 'post',
 							params:{datas:JSONobj,cjmxDatas:JSONCjmxList,kkkh:values.kkkh},
 							    waitMsg : '正在提交数据请稍候...',
							    success : function(response, opts) {
 								var result = Ext.decode(response.responseText);
 								var success = result.result.success;
 								if(success){
// 									var msg = "保存成功！";
// 									Ext.MessageBox.show({
// 							           title: '提示',
// 							           msg: msg,
// 							           buttons: Ext.MessageBox.OK,
// 							           icon: Ext.MessageBox.INFO,
// 							           fn: function(id, msg){
// 			//			        		  me.up('window').close();
// 									    }  
// 							        });
// 							        if(kcxxForm.isAdd){
// 							      		kcxxForm.down('#id').setValue(id);
// 							        }
 								}else{
 									var errmsg = "保存失败！";
 									Ext.MessageBox.show({
 							           title: '错误',
 							           msg: errmsg,
 							           buttons: Ext.MessageBox.OK,
 							           icon: Ext.MessageBox.ERROR,
 							           fn: function(id, msg){  
 //							        	   me.getForm().reset();
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
 //						        	   me.getForm().reset();
 								    }  
 						       });
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
    },*/
   
    getCenter: function(){
    	return this.application.getController('main.MainController').getCenter();
    },
    
 
  
   checkTime:function(){
    	var me = this;
    	var jxCjtjsjbStore = me.getStore('JxCjtjsjbStore');
//    	alert(jxCjtjsjbStore.getCount())
    	var tyXnbStore = me.getStore('TyXnbStore');
//    	tyXnbStore.load();
    	alert(jxCjtjsjbStore.getCount());
    },
    
    
    
    setFormData:function(contentPanel){
//    	contentPanel.down('#xn').setValue(xn);
//    	contentPanel.down('#xq').setValue(xq);
    	
    },
    
    onLaunch:function(record){
    	var me = this;
    	me.initStore();
    	
		var center = me.getCenter();
		var tab = center.down('#M' + record.get('parentId'));
		var removePanel = tab.down('#content');
		tab.remove(removePanel);
		var contentPanel = Ext.create('App.view.cjlr.CjlrContentPan',
				{
					itemId : 'content',
					parentId : record.get('id'),
					autoScroll: true
				});
		tab.add(contentPanel);
		center.setActiveTab(tab);
		me.setFormData(contentPanel);
//		Ext.Ajax.request({
//    		url:'jxSksjbgetXksj.action',
//    		method: 'get',
//    		params: { },
//    		success: function (response) {
//    	 		var responseMessage = Ext.JSON.decode(response.responseText);
////    	 		var list = responseMessage.result.list;
////    	 		var xn = list[0].xn;
////    	 		var xq = list[0].xq;
//    	 		var success = responseMessage.result.success;
//    	 		if(success){
//    	 			me.initStore();
//    	 			Ext.defer(function(){
////	    	 			me.getCenter().getActiveTab().down('#allCourseList').show();
////	    	 			me.getCenter().getActiveTab().down('#ownMajorForm').down('#myCourseList1').show();
////	    	 			me.getCenter().getActiveTab().down('#otherMajorForm').down('#myCourseList2').show();
////	    	 			me.getCenter().getActiveTab().down('#majorCourseList').show();
//	    	 	    },500)
//
//    	 		}else{
//    	 			Ext.Msg.show({title:'提示', msg:responseMessage.result.msg,buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
//					return false;
//    	 		}
//			},
//            failure: function (response) {   
//            	
//    	}});
	   },
	   
//	   add:function(o, e, eOpts){
//		   	var form = Ext.create('App.view.cjlr.CjmxAddForm',{
//	            layout:'auto',
//	            showType:'panel',
//	            bodyStyle:'padding:5',
//	            autoScroll:true
//	        });
//	    	
//	    	var win = Ext.create('Ext.window.Window',{
//	    		frame:true,
//	    		itemId:'cjmxWin',
//				layout:'fit',
//				autoShow: true,
//				width:400,
//				height:200,
//				closeAction:'hide',
//				resizable:false,
//				maximizable: false,
//				constrainHeader:true,
//				collapsible:false,
//				enableDrag:true,
//				shadow:false,
//				modal:true,
//				closable:true,
//				bodyStyle:'padding:5',
//				animCollapse:true,
//				title:'增加成绩明细',
//	    		items:[form]
//	    		
//	    	});
//	   }
	   del: function(o, e, eOpts){
	   		var me = this;
			var rec = getSelRec(o.up('gridpanel'));
			if(rec != undefined){
				var xh = rec.get('xh');
				var kkkh = rec.get('kkkh');
				Ext.MessageBox.confirm('提示框','确认删除学号 ：' + xh,function(btn){
					if(btn == 'yes'){
						Ext.Ajax.request({
							url:'jxCjmxdel.action',
							method: 'get',
							params: { kkkh: kkkh , xh: xh},
							success: function (response) {
						 		var responseMessage = Ext.JSON.decode(response.responseText);
						 		var success = responseMessage.result.success;
						 		if(success){
						 			Ext.Msg.show({title:'提示', msg:"删除成功！",buttons: Ext.Msg.OK,icon: Ext.Msg.INFO});
		//				 			o.up('gridpanel').getStore().load();
						 			o.up('gridpanel').getStore().remove(rec);
						 		}else{
						 		
						 		}
							},
					        failure: function (response) {   
					        	
						}});
					}else{
						return false;
					}
				});
			}
	   }
	   
	   
//	   reback: function(o, e, eOpts){
//	    	var me = this;
//			var rec = getSelRec(o.up('gridpanel'));
//			var grid = o.up('gridpanel');
//			if(rec != undefined){
//				var sjzt = rec.data.sjzt;
//				var kkkh = rec.data.kkkh;
//				if(sjzt == '1'){
//					Ext.Ajax.request({
//				    		url:'cjlrReback.action',
//				    		method: 'get',
//				    		params: { kkkh: kkkh},
//				    		success: function (response) {
//				    			var result = Ext.decode(response.responseText)
//				    			if(result.result.success){
//				    				Ext.Msg.show({title:'提示', msg:'撤回成功！',buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
//				    				grid.getStore().load();
//			        				return false;
//				    			}
//							},
//				            failure: function (response) {          	
//				    		}});
//				}else{
//					Ext.Msg.show({title:'提示', msg:'本门课程信息不是提交状态，无法进行撤回！',buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
//			        return false;
//				}
//			}
//    }
	   
});
