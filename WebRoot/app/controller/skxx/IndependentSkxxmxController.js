Ext.define('App.controller.skxx.IndependentSkxxmxController', {
			extend : 'Ext.app.Controller',

			models : ['skxx.ViewSkxxmxModel','skxx.SKXXModel'],
			stores : ['skxx.ViewSkxxmxStore','skxx.SKXXStore'],

			refs: [{  
		        selector: 'independentSkxxmxDetailForm',  
		        ref: 'independentSkxxmxDetailForm'  
		    }],
			
			init : function() {
				this.control({
					'independentSkxxmxDetailForm button[action=ok]':{
						click : this.ok
					},
					'independentSkxxmxDetailForm button[action=searchZjjs]':{
						click : this.searchZjjs
					},
					'independentSkxxmxDetailForm button[action=searchZkjs]':{
						click : this.searchZkjs
					},
					'independentSkxxmxDetailForm button[action=searchSyjs]':{
						click : this.searchSyjs
					}
				})
			},
			
			searchZjjs:function(o, e, eOpts){
				var me = this
				var form = o.up('#independentSkxxmxDetailForm');
				var application = me.getApplication();
		        var controller = application.getController('App.controller.skxx.JGXXController');
				 controller.onLaunch(o,'zjjs',form);
			},
			
			searchZkjs:function(o, e, eOpts){
				var me = this
				var form = o.up('#independentSkxxmxDetailForm');
				var application = me.getApplication();
		        var controller = application.getController('App.controller.skxx.JGXXController');
				 controller.onLaunch(o,'zkjs',form);
			},
			
			searchSyjs:function(o, e, eOpts){
				var me = this
				var form = o.up('#independentSkxxmxDetailForm');
				var application = me.getApplication();
		        var controller = application.getController('App.controller.skxx.JGXXController');
				 controller.onLaunch(o,'syjs',form);
			},
			
			// 确定
			ok:function(o, e, eOpts){
				var me = this;
				var win = o.up('window');
				var skxxmxList = win.skxxmxList;
				var skxxList = win.skxxList;
				var form = o.up('#independentSkxxmxDetailForm');
				me.addSkxx(form);
			},
			
			
			addSkxx:function(form){
				var me = this;
				var win = form.up('#skxxmxDetailWin')
				var skxxmxList = win.skxxmxList;
				var skxxList = win.skxxList;
				var xn = form.down('#xn').getValue();
				var xq = form.down('#xq').getValue();
				var kch = form.down('#kch').getValue();
				var prefixion = xn +'-'+ xq+ '-' + kch +'-';
				
				Ext.Ajax.request({
						url:'skxxGetKkkh.action?prefixion=' + prefixion,
						method:'post',
						success:function(response, opts){
							var result = Ext.decode(response.responseText);
							var success = result.result.success;
							if(success){
							   	    var kkkh = result.result.msg; // 开课课号
							   	   	
							   	    //获得skxxmx的json
							   	    var skxxJson = {}
									var textfields =  form.query('textfield');
									for(var i in textfields){
										if(textfields[i].itemId == 'id')
											continue;
										skxxJson[textfields[i].itemId] = textfields[i].getValue();
									}
									if(form.down('#ksz').getValue().length != 0 && form.down('#jsz').getValue().length){
										skxxJson['qzz'] = skxxJson['ksz'] + ' ~ ' + skxxJson['jsz'];
									}
									skxxJson['kkkh'] = kkkh
									skxxJson['ddzxapbz'] = form.down('#ddzxapbz').getSubmitValue();
									skxxJson['sjzxapbz'] = form.down('#sjzxapbz').getSubmitValue();
									var kch = form.down('#kch').getValue();
									
									// 授课计划关系表
									var skjhJson = {};
									 skjhJson['id'] = '';
						   			 skjhJson['kkkh'] = kkkh;
						   			 skjhJson['kkjhh'] = form.down('#kkjhh').getValue();
						   		 	 skjhJson['kch'] = kch;
						   		 	 
							   		Ext.Ajax.request({
					 		 			url:'skxxAddSkxxb.action',
					 		 			method:'post',
					 		 			params:{datas:Ext.encode(skxxJson),skjhDatas:Ext.encode(skjhJson)},
					 		 			success : function(response, opts) {
											var result = Ext.decode(response.responseText);
											var success = result.result.success;
											if(success){
												var msg = "操作成功！";
												Ext.MessageBox.show({
										           title: '提示',
										           msg: msg,
										           buttons: Ext.MessageBox.OK,
										           icon: Ext.MessageBox.INFO,
										           fn: function(id, msg){
										              skxxmxList.getStore().load();
							            			  skxxList.getStore().load();
//							            			  var skjhgxStore =  Ext.StoreMgr.lookup('SKJHGXStore')
//						            			      var skjhgxProxy = skjhgxStore.getProxy();
//													  skjhgxStore.setExtraParam('params', '');
//													  skjhgxStore.load();
							           			      win.close();
										        	}  
										        });	
											}
										}
					 		 		})
							}
						}
					})
			},
			
			setFormData:function(o,form){
					var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
						
						form.loadForm(recs[0]);
						form.down('#xslx').setValue(recs[0].data.kcxslx);
		 		 		form.down('#xslxm').setValue(recs[0].data.kcxslxm);
						form.down('#zydm').setValue(recs[0].data.xkzym);
						form.down('#zymc').setValue(recs[0].data.xkzy);
						
						form.setViewForm();
				},
			
			onLaunch : function(o,isGgk,skxxmxList,skxxList) {
					var me = this;
					var win = new Ext.Window({
								layout:'fit',
								itemId:'skxxmxDetailWin',
								title:'操作',
								iconCls:'add_16',
					            width: 755,
				           	    height: 470,
					            closeAction:'destroy',
					    		resizable:false,
					    		shadow:true,
					    		modal:true,
					    		constrainHeader:true,
					    		closable:true,
					    		animCollapse:true,
					    		autoShow:true,
					    		skxxList:skxxList,
					    		skxxmxList:skxxmxList,
			    				items: [Ext.create('App.view.skxx.IndependentSkxxmxDetailForm')]
							});
						var form = win.down('#independentSkxxmxDetailForm');
						me.setFormData(o,form)
			}
		})