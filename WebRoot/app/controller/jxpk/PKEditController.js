Ext.define('App.controller.jxpk.PKEditController',{
	extend:'Ext.app.Controller',
	
	models:['jxpk.KzpjsModel'],	
	stores:['jxpk.KzpjsStore'],
	refs: [{  
        selector: 'pkEditWindow',  
        ref: 'pkEditWindow'  
    }],
    
	init:function(){
		this.control({
				'pkEditWindow button[action=save]':{
					click:this.savePk
				},
				'pkEditWindow button[action=searchJs]':{
					click:this.searchKzpjs
				},
				'pkEditWindow button[action=searchZjjs]':{
					click:this.searchZjjs
				},
				'pkEditWindow button[action=searchZkjs]':{
					click:this.searchZkjs
				},
				'pkEditWindow button[action=searchSyjs]':{
					click:this.searchSyjs
				}

			});   
		},
		
		searchZjjs:function(o, e, eOpts){
			var me = this;
			var pkWin = o.up('window');
			var application = me.getApplication();
			var controller = application.getController('App.controller.jxpk.JgxxController');
			controller.onLaunch(pkWin,'zjjs');
		},
		
		searchZkjs:function(o, e, eOpts){
			var me = this;
			var pkWin = o.up('window');
			var application = me.getApplication();
			var controller = application.getController('App.controller.jxpk.JgxxController');
			controller.onLaunch(pkWin,'zkjs');
		},
		
		searchSyjs:function(o, e, eOpts){
			var me = this;
			var pkWin = o.up('window');
			var application = me.getApplication();
			var controller = application.getController('App.controller.jxpk.JgxxController');
			controller.onLaunch(pkWin,'syjs');
		},
			
		searchKzpjs:function(o, e, eOpts){
			var me = this;
			var pkWin = o.up('window');
			var application = me.getApplication();
    		var controller = application.getController('App.controller.jxpk.KzpjsController');
	   		controller.onLaunch(pkWin);	
		},
		
		savePk:function(o, e, eOpts){
			var me = this;
			var pkWin = o.up('window');
			var pkEditForm = pkWin.down('#pkEditForm');
			pkEditForm.setPksj(); // 获得时间
			var ddzxapbz = pkEditForm.down('#ddzxapbz').getSubmitValue();
			var sjzxapbz = pkEditForm.down('#sjzxapbz').getSubmitValue();
			
			if(ddzxapbz == '1' &&  sjzxapbz == '1'){
					me.noConflictAndAddPkjl(pkWin)
			}else if(ddzxapbz == '0' &&  sjzxapbz == '1'){
				var jsmcValue = pkEditForm.down('#jsmc').getValue();
				if(jsmcValue.length == 0){
					Ext.MessageBox.alert('提示','请将教室填写完整！')
				}else{
					me.noConflictAndAddPkjl(pkWin)
				}
			}else if(ddzxapbz == '1' &&  sjzxapbz == '0'){
				var kcsjValue = pkEditForm.down('#kcsj').getValue();
				var kczsValue =  pkEditForm.down('#kczs').getValue();
				var kcjcValue = pkEditForm.down('#kcjc').getValue();
				
				if(kczsValue == undefined) kczsValue = '';
				if(kcjcValue == undefined) kcjcValue = ''
				
				var lxz = pkEditForm.down('#lxzRadio').getValue();
				var tz = pkEditForm.down('#tzRadio').getValue();
				
				if(lxz){
						var kszComboValue = pkEditForm.down('#kszCombo').getValue();
						var jszComboValue = pkEditForm.down('#jszCombo').getValue();
						if(kcjcValue.length == 0|| kcsjValue == null || 
							kszComboValue == null || jszComboValue == null){
								Ext.MessageBox.alert('提示','请将时间填写完整！')
						}else{
							var kcjc = pkEditForm.getKcjc();
							var kcjcArr = kcjc.split('/');
							if((kcjcArr.indexOf('4') != -1 && kcjcArr.indexOf('5') != -1)){
								Ext.MessageBox.confirm("确认",  "该课的节次包含了上午和下午，确定继续？",
									function(btn){
										if(btn == 'yes'){
												me.noConflictAndAddPkjl(pkWin)
										}
								})
							}else if((kcjcArr.indexOf('8') != -1 && kcjcArr.indexOf('9') != -1)){
									Ext.MessageBox.confirm("确认",  "该课的节次包含了下午和晚上，确定继续？",
									function(btn){
										if(btn == 'yes'){
													me.noConflictAndAddPkjl(pkWin)
										}
								})
							}else{
									me.noConflictAndAddPkjl(pkWin)
							}
						}
				}else{
					if( kcjcValue.length == 0
						|| kcsjValue == null || kczsValue.length == 0){
							Ext.MessageBox.alert('提示','请将时间填写完整！')
					}else{
						var kcjc = pkEditForm.getKcjc();
						var kcjcArr = kcjc.split('/');
						if((kcjcArr.indexOf('4') != -1 && kcjcArr.indexOf('5') != -1)){
							Ext.MessageBox.confirm("确认",  "该课的节次包含了上午和下午，确定继续？",
								function(btn){
									if(btn == 'yes'){
											me.noConflictAndAddPkjl(pkWin)
									}
							})
						}else if((kcjcArr.indexOf('8') != -1 && kcjcArr.indexOf('9') != -1)){
								Ext.MessageBox.confirm("确认",  "该课的节次包含了下午和晚上，确定继续？",
								function(btn){
									if(btn == 'yes'){
										me.noConflictAndAddPkjl(pkWin)
									}
							})
						}else{
								me.noConflictAndAddPkjl(pkWin)
						}
					}
				}
			}else if(ddzxapbz == '0' &&  sjzxapbz == '0'){
				var jsmcValue = pkEditForm.down('#jsmc').getValue();
				var kcsjValue = pkEditForm.down('#kcsj').getValue();
				var kczsValue =  pkEditForm.down('#kczs').getValue();
				var kcjcValue = pkEditForm.down('#kcjc').getValue();
				
				if(kczsValue == undefined) kczsValue = '';
				if(kcjcValue == undefined) kcjcValue = ''
				
				var kcsjValue = pkEditForm.down('#kcsj').getValue();
				var lxz = pkEditForm.down('#lxzRadio').getValue();
				var tz = pkEditForm.down('#tzRadio').getValue();
				if(lxz){
					var kszComboValue = pkEditForm.down('#kszCombo').getValue();
					var jszComboValue = pkEditForm.down('#jszCombo').getValue();
					if( jsmcValue.length == 0 || kcjcValue.length == 0 || 
						kcsjValue == null || kszComboValue == null || jszComboValue == null){
								Ext.MessageBox.show({
					      			title: '提示',
					      			msg: '请完整填写信息！',
					      			buttons: Ext.MessageBox.OK,
					     			icon: Ext.MessageBox.WARNING
				          	 });	  
						}else{
								var kcjc = pkEditForm.getKcjc();
								var kcjcArr = kcjc.split('/');
								if((kcjcArr.indexOf('4') != -1 && kcjcArr.indexOf('5') != -1)){
									Ext.MessageBox.confirm("确认",  "该课的节次包含了上午和下午，确定继续？",
										function(btn){
											if(btn == 'yes'){
													me.conflictAndAddPkjl(pkWin)
											}
									})
								}else if((kcjcArr.indexOf('8') != -1 && kcjcArr.indexOf('9') != -1)){
										Ext.MessageBox.confirm("确认",  "该课的节次包含了下午和晚上，确定继续？",
										function(btn){
											if(btn == 'yes'){
													me.conflictAndAddPkjl(pkWin)
											}
									})
								}else{
									me.conflictAndAddPkjl(pkWin)
								}
						}
				}else{
					if(jsmcValue.length == 0 || kcjcValue.length == 0
						|| kcsjValue == null || kczsValue.length == 0){
							Ext.MessageBox.show({
					      			title: '提示',
					      			msg: '请完整填写信息！',
					      			buttons: Ext.MessageBox.OK,
					     			icon: Ext.MessageBox.WARNING
				          	 });
					}else{
						var kcjc = pkEditForm.getKcjc();
						var kcjcArr = kcjc.split('/');
						if((kcjcArr.indexOf('4') != -1 && kcjcArr.indexOf('5') != -1)){
							Ext.MessageBox.confirm("确认",  "该课的节次包含了上午和下午，确定继续？",
								function(btn){
									if(btn == 'yes'){
											me.conflictAndAddPkjl(pkWin)
									}
							})
						}else if((kcjcArr.indexOf('8') != -1 && kcjcArr.indexOf('9') != -1)){
								Ext.MessageBox.confirm("确认",  "该课的节次包含了下午和晚上，确定继续？",
								function(btn){
									if(btn == 'yes'){
											me.conflictAndAddPkjl(pkWin)
									}
							})
						}else{
							me.conflictAndAddPkjl(pkWin)
						}
					}
				}
			}
		},
		
		conflictAndAddPkjl:function(pkWin){
				var me = this;
				var pkEditForm = pkWin.down('#pkEditForm');
				pkEditForm.setPksj(); // 获得时间
				var values = pkEditForm.getForm().getValues();
				var jsonObject = JSON.parse(Ext.encode(values))
				
				var ddzxapbz = pkEditForm.down('#ddzxapbz').getSubmitValue();
				var sjzxapbz = pkEditForm.down('#sjzxapbz').getSubmitValue();
			
				
				var pkjlJson = {}
				for(var item in jsonObject){
					var itemId = '#' + item;
					if(pkEditForm.down(itemId) != null)
						 pkjlJson[item] = pkEditForm.down(itemId).getValue();
				 }
				
				pkjlJson['kcsj'] = pkEditForm.getKcsj();
				pkjlJson['kcjc'] = pkEditForm.getKcjc();  // 课程节次
				pkjlJson['kczs'] = pkEditForm.getKczs(); // 课程周数
				pkjlJson['dszbzm'] = pkEditForm.getDszbzm();
				pkjlJson['dszbz'] = pkEditForm.getDszbz();
				pkjlJson['czrzh'] = gh;
				pkjlJson['czr'] = xm;
				pkjlJson['sjzxapbz'] = sjzxapbz
				
				pkjlJson['ddzxapbz'] = ddzxapbz;
				pkEditForm.setPksj();
				
				Ext.Ajax.request({
 		 			url:'jxPkjlCheckIsConflict.action',
 		 			method:'post',
 		 			params:{datas:Ext.encode(pkjlJson)},
 		 			success : function(response, opts) {
							var result = Ext.decode(response.responseText);
							var success = result.result.success;
							var kcsj = pkEditForm.getKcsj(); //课程时间
							var kkjc = "(" + pkEditForm.getKcjc() + ")"
							
							var dszbzm = pkEditForm.getDszbzm();
							var kkzs = '';
							if(dszbzm == '0'){// 全周
								var kczsArray = pkEditForm.getKczs().split('/');
								if(kczsArray.length > 1){
									kkzs = "第" + kczsArray[0] + "-" + kczsArray[kczsArray.length-1] + "周"
								}else{// 单周or跳周
									kkzs = "第" + pkEditForm.getKczs() + "周";
								}
							}else{// 单周or跳周
									kkzs = "第" + pkEditForm.getKczs() + "周";
							}
							var kksj = kcsj + kkjc + kkzs // 开课时间
							pkjlJson['kksj'] = kksj;
						if(!success){
								me.noConflictAndAddPkjl(pkWin);
						}else{
								var ctList = result.result.list;
								var msg = ''
								var ctids = '';
								for(var i = 0;i < ctList.length ; i++){
										msg += ctList[i].kcmc +  "(" + ctList[i].kch + '),' + 
										 ctList[i].zjjs + ','+
										 ctList[i].kksj +  '<br/><br/>'
										if(i == (ctList.length-1)){
											ctids += ctList[i].id;
										}else{
											ctids += ctList[i].id + ',';
										}
									}
								Ext.MessageBox.confirm("确认",  "该课程排课与以下课程存在冲突： <br/><br/>" + msg + "确定继续排课？",
									function(btn){
										if(btn == 'yes'){
											pkjlJson['ctid'] = ctids
											me.addPkjl(pkjlJson,pkWin,ctList);
										}
								})
						}
					}
 		 		})
		},
		
		noConflictAndAddPkjl:function(pkWin){
				var me = this;
				var skxxList = pkWin.skxxList;
				var pkjlList = pkWin.pkjlList;
				var pkEditForm = pkWin.down('#pkEditForm');
				pkEditForm.setPksj(); // 获得时间
				var values = pkEditForm.getForm().getValues();
				var jsonObject = JSON.parse(Ext.encode(values))
				
				var ddzxapbz = pkEditForm.down('#ddzxapbz').getSubmitValue();
				var sjzxapbz = pkEditForm.down('#sjzxapbz').getSubmitValue();
			
				
				var pkjlJson = {}
				for(var item in jsonObject){
					var itemId = '#' + item;
					if(pkEditForm.down(itemId) != null)
						 pkjlJson[item] = pkEditForm.down(itemId).getValue();
				 }
				pkjlJson['czrzh'] = gh;
				pkjlJson['czr'] = xm;
				pkjlJson['sjzxapbz'] = sjzxapbz
				pkjlJson['ddzxapbz'] = ddzxapbz;
				pkEditForm.setPksj();
				if(sjzxapbz != '1'){
					pkjlJson['kcsj'] = pkEditForm.getKcsj();
					pkjlJson['kcjc'] = pkEditForm.getKcjc();  // 课程节次
					pkjlJson['kczs'] = pkEditForm.getKczs(); // 课程周数
					pkjlJson['dszbzm'] = pkEditForm.getDszbzm();
					pkjlJson['dszbz'] = pkEditForm.getDszbz();
					
					var kcsj = pkEditForm.getKcsj(); //课程时间
					var kkjc = "(" + pkEditForm.getKcjc() + ")"
					
					var dszbzm = pkEditForm.getDszbzm();
					var kkzs = '';
					if(dszbzm == '0'){// 全周
						var kczsArray = pkEditForm.getKczs().split('/');
						if(kczsArray.length > 1){
							kkzs = "第" + kczsArray[0] + "-" + kczsArray[kczsArray.length-1] + "周"
						}else{
							kkzs = "第" + kczsArray[0] + "周"
						}
					}else{// 单周or跳周
							kkzs = "第" + pkEditForm.getKczs() + "周";
					}
					var kksj = kcsj + kkjc + kkzs // 开课时间
					pkjlJson['kksj'] = kksj;
				}else{
					pkjlJson['kcsjm'] = '';
					pkjlJson['kcsj'] = '';
					pkjlJson['kczs'] = '';
					pkjlJson['kcjc'] = '';
					pkjlJson['dszbzm'] = '';
					pkjlJson['dszbz'] = '';
					pkjlJson['kksj'] = '自行安排';
				}
				if(ddzxapbz == '1'){
					pkjlJson['jsbh'] = ''
					pkjlJson['jsmc'] = '自行安排';
				}
				pkjlJson['ctid'] = ''
				pkjlJson['pkztm'] = '0'
				
			    var otherJson = {};
				otherJson['zkjsh'] = pkWin.down('#zkjsh').getValue();
				otherJson['zkjs'] = pkWin.down('#zkjs').getValue();
				otherJson['syjsh'] = pkWin.down('#syjsh').getValue();
				otherJson['syjs'] = pkWin.down('#syjs').getValue();
				Ext.Ajax.request({
 		 			url:'jxPkjlEdit.action',
 		 			params:{datas:Ext.encode(pkjlJson)},
 		 			method:'post',
 		 			params:{datas:Ext.encode(pkjlJson),otherDatas:Ext.encode(otherJson)},
 		 			success : function(response, opts) {
 		 				var result = Ext.decode(response.responseText);
						var success = result.result.success;
						if(success){
							var msg = "排课成功！";
							Ext.MessageBox.show({
					           title: '提示',
					           msg: msg,
					           buttons: Ext.MessageBox.OK,
					           icon: Ext.MessageBox.INFO,
					           fn: function(id, msg){
					              	pkjlList.getStore().load({callback:function(){
					           			skxxList.getStore().load();
					           		}});
//					           		pkWin.close();
					        	}  
					        });	
						}
 		 			}
 		 		})
		},
		
		addPkjl:function(pkjlJson,pkWin,ctList){
			var skxxList = pkWin.skxxList;
			var pkjlList = pkWin.pkjlList;
			var JSONList = [];
			for(var i = 0; i < ctList.length; i++){
				var jsonObject = JSON.parse(Ext.encode(ctList[i])); 
				var ctKcJson = {};
				for(var item in jsonObject){
					ctKcJson[item] = jsonObject[item]
				}
				JSONList.push(JSON.stringify(ctKcJson));
			}
			var otherJson = {};
			otherJson['zkjsh'] = pkWin.down('#zkjsh').getValue();
			otherJson['zkjs'] = pkWin.down('#zkjs').getValue();
			otherJson['syjsh'] = pkWin.down('#syjsh').getValue();
			otherJson['syjs'] = pkWin.down('#syjs').getValue();
			
			Ext.Ajax.request({
 		 			url:'jxPkjlEdit.action',
 		 			method:'post',
 		 			params:{datas:Ext.encode(pkjlJson),ctKcList:JSONList,otherDatas:Ext.encode(otherJson)},
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
					           	   	pkjlList.getStore().load({callback:function(){
					           			skxxList.getStore().load();
					           		}});
//					           		pkWin.close();
					        	}  
					        });	
						}
					}
 		 		})
		},
		
		
		initTimeFlag:function(){
			var timeFlag = [64];
			for(var i = 0; i<timeFlag.length; i++)
			//	timeFlag[i] = 0;
			if(kczsArr.length > 0 && kcsjm != "" && kcsjm != null && kcjcArr.length > 0){
				//根据课程周次、节次置二进制数组
				for(var i = 0; i<kczsArr.length; i++){
					for(var j = 0; j < kcjcArr.length; j++){
						var pos = (parseInt(kczsArr[i])-1)*77 + (parseInt(kcsjm)-1)*11 + parseInt(kcjcArr[j]);		
						var xb = parseInt(pos/32);
						var mod = pos % 32;
						timeFlag[xb] |= 1<<mod;
					}	
				}
			}
			return timeFlag;
		},
		
		isConflict:function(){
			
		},
		
		onLaunch : function(o,skxxList,pkjlList) {
			var me = this;
			var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
			var win = Ext.create('App.view.jxpk.PKEditWindow',{
				itemId:'pkEditWindow',
				skxxList:skxxList,
				pkjlList:pkjlList,
				recs:recs
			});
			var pkEditForm = win.down('#pkEditForm');
			var kkkhValue = recs[0].data.kkkh;
			var skxxStore = Ext.StoreMgr.lookup('SkxxStore');
			var index = skxxStore.find('kkkh',kkkhValue);
			if(index != -1){
				pkEditForm.down('#zkjsh').setValue(skxxStore.getAt(index).get('zkjsh'));
				pkEditForm.down('#zkjs').setValue(skxxStore.getAt(index).get('zkjs'));
				pkEditForm.down('#syjsh').setValue(skxxStore.getAt(index).get('syjsh'));
				pkEditForm.down('#syjs').setValue(skxxStore.getAt(index).get('syjs'));
			}
			
		
			pkEditForm.loadForm(recs[0]);
//			pkEditForm.down('#kczs').loadValue(recs[0].data.kczs);
			pkEditForm.down('#kcjc').loadValue(recs[0].data.kcjc);
			pkEditForm.down('#kcsj').setValue(recs[0].data.kcsj);
			pkEditForm.setViewForm();
			
			var dszbzm = recs[0].data.dszbzm;
			if(dszbzm == '0'){
				pkEditForm.down('#lxzRadio').setValue(true)
				pkEditForm.down('#lxzBox').setVisible(true);
				pkEditForm.down('#kczs').setVisible(false);
				var kczsArray = recs[0].data.kczs.split('/');
				pkEditForm.down('#kszCombo').setValue(kczsArray[0]);
				pkEditForm.down('#jszCombo').setValue(kczsArray[kczsArray.length-1]);
				pkEditForm.down('#kszCombo').setRawValue('第' + kczsArray[0] + '周');
				pkEditForm.down('#jszCombo').setRawValue('第' + kczsArray[kczsArray.length-1] + '周');
			}else if(dszbzm == null){
				pkEditForm.down('#lxzRadio').setValue(true)
				pkEditForm.down('#lxzBox').setVisible(true);
				pkEditForm.down('#kczs').setVisible(false);
			}else{
				pkEditForm.down('#lxzBox').setVisible(false);
				pkEditForm.down('#kczs').setVisible(true);
				pkEditForm.down('#tzRadio').setValue(true)
				pkEditForm.down('#kczs').loadValue(recs[0].data.kczs);
			}
		}
	})
