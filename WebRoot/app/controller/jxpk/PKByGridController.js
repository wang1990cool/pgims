Ext.define('App.controller.jxpk.PKByGridController',{
	extend:'Ext.app.Controller',
	
	models:['jxpk.KzpjsModel','jxpk.PksjModel'],	
	stores:['jxpk.KzpjsStore','jxpk.JxPkjlCtStore','jxpk.PksjStore'],
	refs: [{  
        selector: 'pkByGridWindow',  
        ref: 'pkByGridWindow'  
    }],
    
	init:function(){
		this.control({
				'pkByGridWindow button[action=save]':{
					click:this.savePk
				},
				'pkByGridWindow button[action=searchJs]':{
					click:this.searchKzpjs
				},
				'pkByGridWindow button[action=searchZjjs]':{
					click:this.searchZjjs
				},
				'pkByGridWindow button[action=searchZkjs]':{
					click:this.searchZkjs
				},
				'pkByGridWindow button[action=searchSyjs]':{
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
			var pkGrid = pkWin.down('#pkGrid');
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
					var kczsValue =  pkForm.down('#kczs').getValue();
					if(kczsValue == undefined) kczsValue = '';
					
					var lxz = pkForm.down('#lxzRadio').getValue();
					var tz = pkForm.down('#tzRadio').getValue();
					
					pkForm.setPksj()
					var kcjcValue = pkForm.getKcjc();
					var kcsjmValue = pkForm.getKcsjm();
					
					if(lxz){
							var kszComboValue = pkForm.down('#kszCombo').getValue();
							var jszComboValue = pkForm.down('#jszCombo').getValue();
							
							if(kcjcValue.length == 0|| 
								kszComboValue == null || jszComboValue == null){
									Ext.MessageBox.alert('提示','请将时间填写完整！')
							}else{
								me.noConflictAndAddPkjl(pkWin)		
							}
					}else{
						if(kcjcValue.length == 0 || kczsValue.length == 0){
								Ext.MessageBox.alert('提示','请将时间填写完整！')
						}else{
								me.noConflictAndAddPkjl(pkWin)		
						}
					}
				}else if(ddzxapbz == '0' &&  sjzxapbz == '0'){
					var jsmcValue = pkForm.down('#jsmc').getValue();
					var kczsValue =  pkForm.down('#kczs').getValue();
					
					if(kczsValue == undefined) kczsValue = '';
					
					pkForm.setPksj()
					var kcjcValue = pkForm.getKcjc();
					var kcsjmValue = pkForm.getKcsjm();
					
					var lxz = pkForm.down('#lxzRadio').getValue();
					var tz = pkForm.down('#tzRadio').getValue();
					if(lxz){
						var kszComboValue = pkForm.down('#kszCombo').getValue();
						var jszComboValue = pkForm.down('#jszCombo').getValue();
						if( jsmcValue.length == 0 || kcjcValue.length == 0 || 
							kszComboValue == null || jszComboValue == null){
									Ext.MessageBox.show({
						      			title: '提示',
						      			msg: '请完整填写信息！',
						      			buttons: Ext.MessageBox.OK,
						     			icon: Ext.MessageBox.WARNING
					          	 });	  
							}else{
									me.conflictAndAddPkjl(pkWin)		
							
							}
					}else{
						if(jsmcValue.length == 0 || kcjcValue.length == 0
							||  kczsValue.length == 0){
								Ext.MessageBox.show({
						      			title: '提示',
						      			msg: '请完整填写信息！',
						      			buttons: Ext.MessageBox.OK,
						     			icon: Ext.MessageBox.WARNING
					          	 });
						}else{
							me.conflictAndAddPkjl(pkWin)		
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
					pkjlJson['kcsjm'] =  pkForm.getKcsjm();
					pkjlJson['kcsj'] = '周' + pkForm.getKcsjm();
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
					var kksj = pkjlJson['kcsj'] + kkjc + kkzs // 开课时间
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
//							me.initPkGrid(pkWin);
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
					           		pkWin.down('#kszCombo').setValue(null);
					           		pkWin.down('#jszCombo').setValue(null);
					           		pkWin.down('#kczs').clearAll();
					           		me.initPkGrid(pkWin);
//					           		pkWin.close();
					        	}  
					        });	
						}
 		 			}
 		 		})
		},
		
	initPkGrid:function(pkWin){
		var me = this;
    	var pkGrid = pkWin.down('#pkGrid');
    	var json =   [{ '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
    	{ '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
    	{ '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
    	{ '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
    	{ '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
    	{ '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
    	{ '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
    	{ '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
    	{ '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
    	{ '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null },
    	{ '1': null, '2':null, '3':null, '4':null, '5':null , '6':null, '7':null }]
    	
		pkGrid.setJc(new Array(11))
		pkGrid.setWeekNum(0)
		pkGrid.setRowIndex(0);
		pkGrid.setCellIndex(0);
		pkGrid.setCurJc(0);
		pkGrid.orgPkGridArr = new Array(11);
    	
    	var store = pkGrid.getStore();
		for(var j = 0 ; j < 11; j++){
			store.removeAt(0)
		}
		pkGrid.getStore().add(json)
	},
	
	  getOccupied:function(pkWin,kczs,jsbh){
    	var me = this;
    	var pkGrid = pkWin.down('#pkGrid');
    	var pkForm = pkWin.down('#pkForm');
    	var xn = pkForm.down('#xn').getValue();
    	var xq = pkForm.down('#xq').getValue();
    	var ggkbzm = pkForm.down('#ggkbzm').getValue();
    	var kkdwh =  pkForm.down('#kkdwh').getValue();
  		Ext.Ajax.request({
			url:'jxPkjlgetOccupied.action',
			method:'post',
			params:{kczs:kczs,jsbh:jsbh,xn:xn,xq:xq,ggkbzm:ggkbzm,kkdwh:kkdwh},
			success : function(response, opts) {
				var result = Ext.decode(response.responseText);
				var success = result.result.success;
				if(success){
					var msg = result.result.msg;
				
					pkGrid.setJc(new Array(11))
					pkGrid.setWeekNum(0)
					pkGrid.setRowIndex(0);
					pkGrid.setCellIndex(0);
					pkGrid.setCurJc(0);
					pkGrid.orgPkGridArr = new Array(11);
					var store = pkGrid.getStore();
					for(var j = 0 ; j < 11; j++){
						store.removeAt(0)
					}
					pkGrid.getStore().add(Ext.decode(msg))
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
				pkjlJson['kcsjm'] =  pkForm.getKcsjm();
				pkjlJson['kcsj'] = '周' + pkForm.getKcsjm();
				pkjlJson['kcjc'] = pkForm.getKcjc();  // 课程节次
				pkjlJson['kczs'] = pkForm.getKczs(); // 课程周数
				pkjlJson['dszbzm'] = pkForm.getDszbzm();
				pkjlJson['dszbz'] = pkForm.getDszbz();
				
				pkjlJson['czrzh'] = gh;
				pkjlJson['czr'] = xm;
				pkjlJson['sjzxapbz'] = sjzxapbz
				pkjlJson['ddzxapbz'] = ddzxapbz;
				pkjlJson['pkztm'] = '0';
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
							var kksj = pkjlJson['kcsj']  + kkjc + kkzs // 开课时间
							pkjlJson['kksj'] = kksj;
						if(!success){
								me.addPkjl(pkjlJson,pkWin,'');
						}else{
								var ctList = result.result.list;
								var msg = ''
								var ctids = '';
								for(var i = 0;i < ctList.length ; i++){
										if(i == (ctList.length-1)){
											ctids += ctList[i].id;
										}else{
											ctids += ctList[i].id + ',';
										}
									}
									pkjlJson['ctid'] = ctids
									me.addPkjl(pkjlJson,pkWin,ctList);
						}
					}
 		 		})
		},
		
		addPkjl:function(pkjlJson,pkWin,ctList){
			var me = this;
			var pkForm = pkWin.down('#pkForm')
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
					           		pkWin.down('#kszCombo').setValue(null);
					           		pkWin.down('#jszCombo').setValue(null);
					           		pkWin.down('#kczs').clearAll();
					           		var kczs =  pkForm.getKczs();
					           		var jsbh = pkForm.down('#jsbh').getValue();
					           		me.getOccupied(pkWin,kczs,jsbh);
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
			var win = Ext.create('App.view.jxpk.PKByGridWindow',{
				itemId:'pkWindow',
				skxxList:skxxList,
				pkjlList:pkjlList,
				recs:recs
			});
			var pkForm = win.down('#pkForm');
			var pkGrid = win.down('#pkGrid')
//			pkForm.loadForm(recs[0])
	    	var textfields =  pkForm.query('textfield');
    		for(var i in textfields){
    			var itemId = textfields[i].itemId;
				if(itemId != 'undefined' && recs[0].get(itemId) != 'undefined' ){
					pkForm.down('#' + itemId).setValue(recs[0].get(itemId));
				}
			}
			
			pkGrid.setJc(new Array(11))
			
			pkForm.down('#ckjs').setValue(recs[0].data.kkdd);
			pkForm.down('#cksj').setValue(recs[0].data.kksj)
			pkForm.setViewForm();
			pkGrid.setKch(recs[0].data.kch);
			pkGrid.setKcmc(recs[0].data.kcmc);
		}
	})
