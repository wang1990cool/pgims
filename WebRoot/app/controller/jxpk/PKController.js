Ext.define('App.controller.jxpk.PKController',{
	extend:'Ext.app.Controller',
	
	models:['jxpk.KzpjsModel'],	
	stores:['jxpk.KzpjsStore','jxpk.JxPkjlCtStore'],
	refs: [{  
        selector: 'pkWindow',  
        ref: 'pkWindow'  
    }],
    
	init:function(){
		this.control({
				'pkWindow button[action=save]':{
					click:this.savePk
				},
				'pkWindow button[action=searchJs]':{
					click:this.searchKzpjs
				},
				'pkWindow button[action=searchZjjs]':{
					click:this.searchZjjs
				},
				'pkWindow button[action=searchZkjs]':{
					click:this.searchZkjs
				},
				'pkWindow button[action=searchSyjs]':{
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
			var pkForm = pkWin.down('#pkForm');
//			var pkGrid = pkWin.down('#pkGrid')
			pkForm.setPksj(); // 获得时间
			var ddzxapbz = pkForm.down('#ddzxapbz').getSubmitValue();
			var sjzxapbz = pkForm.down('#sjzxapbz').getSubmitValue();
			
			var zjjsValue = pkForm.down('#zjjs').getValue();
			if(zjjsValue == ''){
				Ext.MessageBox.alert('提示','请将主讲教师填写完整！')
			}else{
			
				if(ddzxapbz == '1' &&  sjzxapbz == '1'){
					me.noConflictAndAddPkjl(pkWin)
				}else if(ddzxapbz == '0' &&  sjzxapbz == '1'){
					var jsmcValue = pkForm.down('#jsmc').getValue();
					if(jsmcValue.length == 0){
						Ext.MessageBox.alert('提示','请将教室填写完整！')
					}else{
							me.noConflictAndAddPkjl(pkWin)
					}
				}else if(ddzxapbz == '1' &&  sjzxapbz == '0'){
					var kcsjValue = pkForm.down('#kcsj').getValue();
					var kczsValue =  pkForm.down('#kczs').getValue();
					var kcjcValue = pkForm.down('#kcjc').getValue();
					
					if(kczsValue == undefined) kczsValue = '';
					if(kcjcValue == undefined) kcjcValue = ''
					
					var lxz = pkForm.down('#lxzRadio').getValue();
					var tz = pkForm.down('#tzRadio').getValue();
					
					if(lxz){
							var kszComboValue = pkForm.down('#kszCombo').getValue();
							var jszComboValue = pkForm.down('#jszCombo').getValue();
							if(kcjcValue.length == 0|| kcsjValue == null || 
								kszComboValue == null || jszComboValue == null){
									Ext.MessageBox.alert('提示','请将时间填写完整！')
							}else{
								var kcjc = pkForm.getKcjc();
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
						if(kcjcValue.length == 0
							|| kcsjValue == null || kczsValue.length == 0){
								Ext.MessageBox.alert('提示','请将时间填写完整！')
						}else{
								var kcjc = pkForm.getKcjc();
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
					var jsmcValue = pkForm.down('#jsmc').getValue();
					var kczsValue =  pkForm.down('#kczs').getValue();
					var kcjcValue = pkForm.down('#kcjc').getValue();
					
					if(kczsValue == undefined) kczsValue = '';
					if(kcjcValue == undefined) kcjcValue = ''
					
					var kcsjValue = pkForm.down('#kcsj').getValue();
					var lxz = pkForm.down('#lxzRadio').getValue();
					var tz = pkForm.down('#tzRadio').getValue();
					if(lxz){
						var kszComboValue = pkForm.down('#kszCombo').getValue();
						var jszComboValue = pkForm.down('#jszCombo').getValue();
						if( jsmcValue.length == 0 || kcjcValue.length == 0 || 
							kcsjValue == null || kszComboValue == null || jszComboValue == null){
									Ext.MessageBox.show({
						      			title: '提示',
						      			msg: '请完整填写信息！',
						      			buttons: Ext.MessageBox.OK,
						     			icon: Ext.MessageBox.WARNING
					          	 });	  
							}else{
								var kcjc = pkForm.getKcjc();
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
								var kcjc = pkForm.getKcjc();
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
			}
		},
		
		noConflictAndAddPkjl:function(pkWin){
				var me = this;
				var skxxList = pkWin.skxxList;
				var pkjlList = pkWin.pkjlList;
				var pkForm = pkWin.down('#pkForm');
				var values = pkForm.getForm().getValues();
				var jsonObject = JSON.parse(Ext.encode(values))
				
				var ddzxapbz = pkForm.down('#ddzxapbz').getSubmitValue();
				var sjzxapbz = pkForm.down('#sjzxapbz').getSubmitValue();
				
				var pkjlJson = {}
				for(var item in jsonObject){
					var itemId = '#' + item;
					if(pkForm.down(itemId) != null)
						 pkjlJson[item] = pkForm.down(itemId).getValue();
				 }
				pkjlJson['id'] = ''
				pkjlJson['czrzh'] = gh;
				pkjlJson['czr'] = xm;
				pkjlJson['sjzxapbz'] = sjzxapbz
				pkjlJson['ddzxapbz'] = ddzxapbz;
				if(sjzxapbz != '1'){
					pkForm.setPksj(); // 获得时间
					pkjlJson['kcsj'] = pkForm.getKcsj();
					pkjlJson['kcjc'] = pkForm.getKcjc();  // 课程节次
					pkjlJson['kczs'] = pkForm.getKczs(); // 课程周数
					pkjlJson['dszbzm'] = pkForm.getDszbzm();
					pkjlJson['dszbz'] = pkForm.getDszbz();
					var kcsj = pkForm.getKcsj(); //课程时间
					var kkjc = "(" + pkForm.getKcjc() + ")"
					
					var dszbzm = pkForm.getDszbzm();
					var kkzs = '';
					if(dszbzm == '0'){// 全周
						var kczsArray = pkForm.getKczs().split('/');
						if(kczsArray.length > 1){
							kkzs = "第" + kczsArray[0] + "-" + kczsArray[kczsArray.length-1] + "周"
						}else{
							kkzs = "第" + kczsArray[0] + "周"
						}
					}else{// 单周or跳周
							kkzs = "第" + pkForm.getKczs() + "周";
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
 		 			url:'jxPkjlAdd.action',
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
					           		pkWin.down('#kcsjm').setValue('');
					           		pkWin.down('#kcsj').setValue(null);
					           		pkWin.down('#kszCombo').setValue(null);
					           		pkWin.down('#jszCombo').setValue(null);
					           		pkWin.down('#kczs').clearAll();
					           		pkWin.down('#kcjc').clearAll();
//					           		pkWin.close();
					        	}  
					        });	
						}
 		 			}
 		 		})
		},
		
		conflictAndAddPkjl:function(pkWin){
				var me = this;
				var pkForm = pkWin.down('#pkForm');
				pkForm.setPksj(); // 获得时间
				var values = pkForm.getForm().getValues();
				var jsonObject = JSON.parse(Ext.encode(values))
				
				var ddzxapbz = pkForm.down('#ddzxapbz').getSubmitValue();
				var sjzxapbz = pkForm.down('#sjzxapbz').getSubmitValue();
				
				var pkjlJson = {}
				for(var item in jsonObject){
					var itemId = '#' + item;
					if(pkForm.down(itemId) != null)
						 pkjlJson[item] = pkForm.down(itemId).getValue();
				 }
				pkjlJson['id'] = ''
				pkjlJson['kcsj'] = pkForm.getKcsj();
				pkjlJson['kcjc'] = pkForm.getKcjc();  // 课程节次
				pkjlJson['kczs'] = pkForm.getKczs(); // 课程周数
				pkjlJson['dszbzm'] = pkForm.getDszbzm();
				pkjlJson['dszbz'] = pkForm.getDszbz();
				
				pkjlJson['czrzh'] = gh;
				pkjlJson['czr'] = xm;
				pkjlJson['sjzxapbz'] = sjzxapbz
				pkjlJson['ddzxapbz'] = ddzxapbz;
				pkjlJson['pkztm'] = '0'
				Ext.Ajax.request({
 		 			url:'jxPkjlCheckIsConflict.action',
 		 			method:'post',
 		 			params:{datas:Ext.encode(pkjlJson)},
 		 			success : function(response, opts) {
						var result = Ext.decode(response.responseText);
						var success = result.result.success;
							var kcsj = pkForm.getKcsj(); //课程时间
							var kkjc = "(" + pkForm.getKcjc() + ")"
							
							var dszbzm = pkForm.getDszbzm();
							var kkzs = '';
							if(dszbzm == '0'){// 全周
								var kczsArray = pkForm.getKczs().split('/');
								if(kczsArray.length > 1){
									kkzs = "第" + kczsArray[0] + "-" + kczsArray[kczsArray.length-1] + "周"
								}else{
									kkzs = "第" + kczsArray[0] + "周"
								}
							}else{// 单周or跳周
									kkzs = "第" + pkForm.getKczs() + "周";
							}
							var kksj = kcsj + kkjc + kkzs // 开课时间
							pkjlJson['kksj'] = kksj;
						if(!success){
								me.addPkjl(pkjlJson,pkWin,'');
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
 		 			url:'jxPkjlAdd.action',
 		 			method:'post',
 		 			params:{datas:Ext.encode(pkjlJson),ctKcList:JSONList,otherDatas:Ext.encode(otherJson)},
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
					           		pkWin.down('#kcsjm').setValue('');
					           		pkWin.down('#kcsj').setValue(null);
					           		pkWin.down('#kszCombo').setValue(null);
					           		pkWin.down('#jszCombo').setValue(null);
					           		pkWin.down('#kczs').clearAll();
					           		pkWin.down('#kcjc').clearAll();
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
			var win = Ext.create('App.view.jxpk.PKWindow',{
				itemId:'pkWindow',
				skxxList:skxxList,
				pkjlList:pkjlList,
				recs:recs
			});
			var pkForm = win.down('#pkForm');
//			var pkGrid = win.down('#pkPanel').down('#pkGrid')
//			pkForm.loadForm(recs[0])
	    	var textfields =  pkForm.query('textfield');
    		for(var i in textfields){
    			var itemId = textfields[i].itemId;
				if(itemId != 'undefined' && recs[0].get(itemId) != 'undefined' ){
					pkForm.down('#' + itemId).setValue(recs[0].get(itemId));
				}
			}
			pkForm.down('#ckjs').setValue(recs[0].data.kkdd);
			pkForm.down('#cksj').setValue(recs[0].data.kksj)
			pkForm.setViewForm();
//			pkGrid.setKch(recs[0].data.kch);
//			pkGrid.setKcmc(recs[0].data.kcmc);
		}
	})
