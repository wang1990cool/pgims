Ext.define('App.controller.skxx.MergeSkxxmxController', {
			extend : 'Ext.app.Controller',

			models : ['skxx.ViewSkxxmxModel','skxx.SKXXModel'],
			stores : ['skxx.ViewSkxxmxStore','skxx.SKXXStore','skxx.MergeSkxxmxStore'],

			refs: [{  
		        selector: 'mergeSkxxmxWindow',  
		        ref: 'mergeSkxxmxWindow'  
		    }],
			
			init : function() {
				this.control({
					'mergeSkxxmxWindow button[action=save]':{
						click : this.saveClass
					},
					'mergeSkxxmxWindow button[action=searchZjjs]':{
						click : this.searchZjjs
					},
					'mergeSkxxmxWindow button[action=searchZkjs]':{
						click : this.searchZkjs
					},
					'mergeSkxxmxWindow button[action=searchSyjs]':{
						click : this.searchSyjs
					},
					'mergeSkxxmxWindow button[action=add]':{
						click : this.addClass
					}
					,
					'mergeSkxxmxWindow button[action=delete]':{
						click : this.deleteClass
					}
				})
			},
			
			deleteClass:function(o, e, eOpts){
				var win = o.up('window');
				var mergeSkxxmxList = win.down('#mergeSkxxmxList');
				var mergeSkxxmxForm = win.down('#mergeSkxxmxForm');
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				}else{
					var mergeSkxxmxStore = mergeSkxxmxList.getStore();
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
				   		
			 		 		mergeSkxxmxForm.down('#jhrs').setValue(jhrs);
			 		 		mergeSkxxmxForm.down('#pydwh').setValue(pydwh);
			 		 		mergeSkxxmxForm.down('#pydw').setValue(pydw);
			 		 		mergeSkxxmxForm.down('#zydm').setValue(zydm);
			 		 		mergeSkxxmxForm.down('#zymc').setValue(zymc);
						}
					}else{
						Ext.MessageBox.alert('提示','合班时，课程不得少于两门！');
					}
				}
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
			
			searchZjjs:function(o, e, eOpts){
				var me = this
				var form = o.up('#mergeSkxxmxForm')
				var application = me.getApplication();
		        var controller = application.getController('App.controller.skxx.JGXXController');
				 controller.onLaunch(o,'zjjs',form);
			},
			
			searchZkjs:function(o, e, eOpts){
				var me = this
				var form = o.up('#mergeSkxxmxForm')
				var application = me.getApplication();
		        var controller = application.getController('App.controller.skxx.JGXXController');
				 controller.onLaunch(o,'zkjs',form);
			},
			
			searchSyjs:function(o, e, eOpts){
				var me = this
				var form = o.up('#mergeSkxxmxForm')
				var application = me.getApplication();
		        var controller = application.getController('App.controller.skxx.JGXXController');
				 controller.onLaunch(o,'syjs',form);
			},
			
			
			saveClass:function(o, e, eOpts){
				var me = this;
				var win = o.up('window');
				var skxxmxList = win.skxxmxList;
				var skxxList = win.skxxList;
				
				var form = win.down('#mergeSkxxmxForm')
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
					 		 			url:'skxxAddSkxxb.action',
					 		 			method:'post',
					 		 			params:{datas:Ext.encode(skxxJson),skjhDatas:JSONList},
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
										           		skxxList.getStore().load();
					          	        			    
//					          	        			    var  ggkZxkkjhLists = Ext.ComponentQuery.query('#ggkZxkkjhList');
//					          	        		     	var ggkZxkkjhList = ggkZxkkjhLists[ggkZxkkjhLists.length - 1];
//					          	        			    ggkZxkkjhList.getStore().load();
					          	        			    
					          	        				skxxmxList.getStore().load();
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
			
			operation:function(o,form,list,skxxmxList){
					var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
						var firstRec = recs[0].data;// 第一条记录
				   		var pydwh = firstRec.pydwh;
				   		var pydw = firstRec.pydw;
				   		var zydm = firstRec.xkzym;
				   		var zymc = firstRec.xkzy;
				   		var jhrs = Number(firstRec.jhrs);
				   		
				   		for(var i = 1; i < recs.length ;i++){
				   				pydwh = pydwh + '/' + recs[i].data.pydwh;
				   				pydw = pydw +'/'+ recs[i].data.pydw;
				   				zydm = zydm + '/' + recs[i].data.xkzym;
				   				zymc = zymc + '/' + recs[i].data.xkzy;
				   			jhrs = jhrs + Number(recs[i].data.jhrs);
				   		}
				   		
		 		 		form.loadForm(recs[0]);
		 		 		form.down('#xslx').setValue(recs[0].data.kcxslx);
		 		 		form.down('#xslxm').setValue(recs[0].data.kcxslxm);
		 		 		form.down('#jhrs').setValue(jhrs);
		 		 		form.down('#pydwh').setValue(pydwh);
		 		 		form.down('#pydw').setValue(pydw);
		 		 		form.down('#zydm').setValue(zydm);
		 		 		form.down('#zymc').setValue(zymc);
						form.setViewForm();
						
						var records = skxxmxList.getSelectionModel().getSelection();
					
						for(var i = 0;i < records.length;i++){
							var jsonObject = JSON.parse(Ext.encode(records[i].data)); //将每条数据转为json对象
							var skxxmxJson = {} //存放每条开课计划明细
							for(var item in jsonObject){
								skxxmxJson[item] = jsonObject[item];
				    		 }
	
					  	  list.getStore().insert(0,skxxmxJson)
						}
				},
			
			onLaunch : function(o,skxxmxList,skxxList,ggkbz) {
				var me = this;
				var win = Ext.create('App.view.skxx.MergeSkxxmxWindow',{
					itemId:'mergeSkxxmxWindow',
					skxxmxList:skxxmxList,
					skxxList:skxxList,
					ggkbz:ggkbz
				});
				var form = win.down('#mergeSkxxmxForm');
				var list = win.down('#mergeSkxxmxList')
				list.getStore().removeAll();
				me.operation(o,form,list,skxxmxList);
				win.show();
			}
		})