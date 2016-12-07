Ext.define('App.controller.skxx.DivideSkxxmxController', {
			extend : 'Ext.app.Controller',

			models : ['skxx.ViewSkxxmxModel','skxx.SKXXModel'],
			stores : ['skxx.ViewSkxxmxStore','skxx.SKXXStore'],

			refs: [{  
		        selector: 'divideSkxxmxForm',  
		        ref: 'divideSkxxmxForm'  
		    }],
			
			init : function() {
				this.control({
					'divideSkxxmxForm button[action=ok]':{
						click : this.ok
					}
				})
			},
			// 确定
			ok:function(o, e, eOpts){
				var me = this;
				var win = o.up('window');
				var skxxmxList = win.skxxmxList;
				var skxxList = win.skxxList;
				var operation = win.operation;
				var form = o.up('#divideSkxxmxForm');
				var jhrsValue = form.down('#jhrs').getValue();
				
				//合班和独立班级
					var fbsValue = form.down('#fbs').getValue();//分班数
					if(fbsValue.length == 0){
						Ext.MessageBox.alert('提示','请输入分班数！');
					}else{
						if(fbsValue == 1){
							me.addSkxx(form); // 添加skxx
						}else{
						
						//授课信息表
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
						
						var xn = form.down('#xn').getValue();
						var xq = form.down('#xq').getValue();
						var kch = form.down('#kch').getValue();
						var prefixion = xn + '-'+ xq + '-'+ kch + '-';
						
						skxxJson['kkkh'] = ''
						skxxJson['ddzxapbz'] = form.down('#ddzxapbz').getSubmitValue();
						skxxJson['sjzxapbz'] = form.down('#sjzxapbz').getSubmitValue();
						// 授课计划关系表
						var skjhJson = {};
						 skjhJson['id'] = '';
			   			 skjhJson['kkkh'] = '';
			   			 skjhJson['kkjhh'] = form.down('#kkjhh').getValue();
			   		 	 skjhJson['kch'] = kch;
			   			 
						Ext.Ajax.request({
							url:'skxxDivideBj.action?fbs=' + fbsValue + '&prefixion=' + prefixion,
							method:'post',
							params:{datas:Ext.encode(skxxJson),skjhDatas:Ext.encode(skjhJson)},
							success:function(response, opts){
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
							           	    win.close();
							        	}  
							        });	
								}
							}
						})
						}
					}
			},
			
			
			addSkxx:function(form){
				var me = this;
				var win = form.up('#skxxmxDetailWin')
				var skxxmxList = win.skxxmxList;
				var skxxList = win.skxxList;
				var operation = win.operation;
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
								itemId:'divideSkxxmxWin',
								title:'分班',
								iconCls:'add_16',
					            width: 755,
				           	    height: 500,
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
			    				items: [Ext.create('App.view.skxx.DivideSkxxmxForm')]
							});
						var form = win.down('#divideSkxxmxForm');
						me.setFormData(o,form)
			}
		})