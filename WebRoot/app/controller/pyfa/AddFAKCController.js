Ext.define('App.controller.pyfa.AddFAKCController',{
	extend:'Ext.app.Controller',
	
	models:['pyfa.FAKCModel','pyfa.KCKModel'],	
	stores:['pyfa.FAKCStore','pyfa.KCKStore','pyfa.FAKCAllStore','zd.ZdXqbStore'],
	views:['pyfa.KCKDialogList','pyfa.KCKDialog'],
	
	init:function(){
			this.control({
				'kckDialog button[action=search]':{
					click:this.search
				},
				'kckDialog button[action=searchAll]':{
					click:this.searchAll
				},
				'kckDialogList  button[action=detail]':{
					click:this.detailFakc
				},
				'kckDialogList  button[action=ok]':{
					click:this.addFakc
				}
			})
		},
		
			search:function(o, e, eOpts){
					var kckForm = o.up('#kckDialog');
					var searchForm = kckForm.down('#searchForm');
					var searchParams = {
						start : 0,
						limit : 15,
						page : 1,
						searchMode : 'simple',
						fieldNames : [],
						order : '',
						search : {}
					};
					var pGrid = kckForm.down('#kckDialogList');
					var store = pGrid.getStore();
					for (var col in pGrid.exportCols) {
						searchParams.fieldNames.push(col);
					}
	
					var tFields = searchForm.query('textfield(true)');
					for (var i in tFields) {
						if (tFields[i].value)
							searchParams.search[tFields[i].name] = "#like '%" + Ext.String.trim( tFields[i].value )  + "%'";
					}
					var pyccValue = searchForm.down('#pycc').getValue();
					if(pyccValue){
						searchParams.search['pyccm']="#= '" + pyccValue + "'";
					}
					var sfggkcValue = searchForm.down('#ggkbz').getValue();
					if(sfggkcValue){
						searchParams.search['ggkbzm']="#= '" + sfggkcValue + "'";
					}
					var kkdwValue = searchForm.down('#kkdw').getValue();
					if(kkdwValue){
						searchParams.search['kkdwh']="#= '" + kkdwValue + "'";
					}
					
					
					var proxy = store.getProxy();
					proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
					store.load({callback:function(){
						var toolbar = pGrid.down('#toolbar');
						toolbar.moveFirst()
					}});
	},
	
	searchAll:function(o, e, eOpts){
			var kckForm = o.up('#kckDialogWin');
			var searchForm = kckForm.down('#searchForm');
        	var pGrid = kckForm.down('#kckDialogList');
        	searchForm.getForm().reset();
        	
//        	var toolbar = pGrid.down('#toolbar');
//			toolbar.moveFirst();
        	
        	var store = pGrid.getStore(), proxy = store.getProxy();
        	proxy.setExtraParam('params', '');
        	store.load();
	},
	
	detailFakc:function(o, e, eOpts){
		var rec = getSelRec(o.up('gridpanel'));
		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
		if (recs.length == 0) {
			Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
		} else if (recs.length > 1) {
			Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
		} else if (recs.length == 1) {
				var win = new Ext.Window({
					layout:'fit',
					itemId:'kckWin1',
					autoShow:true,
					title:'课程详情',
					iconCls:'detail_16',
		            width: 755,
	           	    height: 580,
		            closeAction:'hide',
		    		resizable:false,
		    		shadow:true,
		    		modal:true,
		    		closable:true,
		    		constrainHeader:true,
		    		animCollapse:true,
		    		autoShow:true,
    				items: [Ext.create('App.view.pyfa.KCKDetail')]
				});
			var kckForm = win.down('form');
            kckForm.loadForm(rec);
            kckForm.setViewForm();
		}
	},
	
	addFakc:function(o, e, eOpts){	
			var me = this;
			var kckWin = o.up('#kckDialogWin')
       		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
       		if(recs.length == 0){
       				Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
       		}else{
       			var win = o.up('window');
       			var pyfahValue = win.pyfah;
       			var bbhValue = win.bbh;
       			var list = win.fakcList;
//       		var pyfaForms = Ext.ComponentQuery.query('#pyfaForm');
//				var pyfaForm = pyfaForms[pyfaForms.length - 1];
//				
//				//获得方案课程的store
//				var addCourseForms = Ext.ComponentQuery.query('#addCourseForm');
//				var addCourseForm = addCourseForms[addCourseForms.length - 1];
//				var list = addCourseForm.down('#fakcList');
				var store = list.getStore();
				// 赋值
//				var pyfahValue = pyfaForm.down('#pyfah').getValue()
//				var bbhValue = pyfaForm.down('#bbh').getValue()	
				//获得选择行的数据
				var kckList = o.up('#kckDialogList');
				var kckRecs = kckList.getSelectionModel().getSelection();
				var existKc = '';
				for(var i = 0;i < kckRecs.length;i++){
					var jsonObject = JSON.parse(Ext.encode(kckRecs[i].data)); //将每条数据转为json对象
					var kcJson = {} //存放每条方案课程
					
					// 判断课程是否已经存在于方案课程Store中
					var isKcExist = false
					var kcmcStr;
					for(var j = 0;j < store.getCount();j++){
						var  record = store.getAt(j);
						if(kckRecs[i].data.kch == record.data.kch){
							existKc +=  record.data.kcmc +'(' + record.data.kch + '),' + ' <br/><br/>'
//							kkjhmxStore.remove(record)
							isKcExist = true;
							break;
						}
					}
					
					if(!isKcExist){
						for(var item in jsonObject){
							if(item == 'id'){ // 若item为id则赋为空字符
								kcJson['id'] = '';
							}else if(item == 'kkdw'){
								kcJson['dwmc'] = jsonObject['kkdw'];
							}else{
								kcJson[item] = jsonObject[item];
							}
				    		kcJson['pyfah'] = pyfahValue;
				    		kcJson['bbh'] = bbhValue;
			    		 }
			    		store.insert(0,kcJson)
					}
					if(existKc!=''){
						Ext.MessageBox.alert('提示', existKc  +  '培养方案中已存在！');
					}
				}
       		}
	},
	
//	addFakc:function(o, e, eOpts){
//		var kckWin = o.up('#kckWin')
//		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
//		if (recs.length == 0) {
//			Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
//		} else if (recs.length > 1) {
//			Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
//		} else if (recs.length == 1) {
//					var pyfah = kckWin.down('#pyfah').getValue();
//					var kch = recs[0].data.kch;
//					Ext.Ajax.request({
//						url : "fakcCheckFakcIsExist.action?pyfah=" + pyfah +"&kch=" + kch,
//						method : 'post',
//						success : function(response, opts) {
//							var result = Ext.decode(response.responseText);
//							var success = result.result.success;
//							if(success){
//								Ext.MessageBox.alert('提示', '该课程已经存在！');
//							}else{
//								var recsJSON = Ext.encode(recs[0].data) ;//获得json
//							    var recsJSONobj = 	JSON.parse(recsJSON);// 转为json对象
//							    recsJSONobj['pyfah'] = kckWin.down('#pyfah').getValue();//将pyfah加入每条记录的json对象中
//							    recsJSONobj['bbh'] = kckWin.down('#bbh').getValue();//将bbh加入每条记录的json对象中
//								var extraWin = new Ext.Window({
//									itemId:'addExtraCourse',
//									title:'制定课程',
//									iconCls:'add_16',
//									 width: 355,
//									height: 255,
//									closeAction:'hide',
//									constrainHeader:true,
//									resizable:false,
//									shadow:true,
//									closable:true,
//						    		animCollapse:true,
//						    		autoHeight : true,
//						    		autoScroll:true,
//						    		autoShow:true,
//						    		items:[Ext.create('App.view.pyfa.ExtraFAKCForm')]
//							});
//							var extraFAKCForm = extraWin.down('form');
//							extraFAKCForm.loadRecs(recsJSONobj);
//						  }
//						}
//				});
//		}
//	},
	
	 onLaunch: function(pyfah,bbh,fakcList){
	 	var me = this;
	 	var kckWin;
//	 	var kckWins = Ext.ComponentQuery.query('#kckDialogWin');
//	 	if(kckWins.length > 0){
//	 		kckWin = kckWins[0];
//	 	}else{
	     	 var kckWin = new Ext.Window({
		   		itemId:'kckDialogWin',
				title:'课程库',
				iconCls:'add_16',
				width: 695,
				height: 560,
				constrainHeader:true,
				x:620,
				layout:'fit',
				closeAction:'hide',
				resizable:false,
				shadow:true,
				modal:true,
				closable:true,
				animCollapse:true,
				autoShow:true,
				fakcList:fakcList,
				pyfah:pyfah,
				bbh:bbh,
				items:[
			   	  Ext.create('App.view.pyfa.KCKDialog',{
			   	  	itemId:'kckDialog'
			   	  })]
			});
//	 	}
//			kckWin.down('#pyfah').setValue(pyfah);
//			kckWin.down('#bbh').setValue(bbh);
            var pGrid = kckWin.down('#kckDialog').down('#kckDialogList');
            var store = pGrid.getStore(), proxy = store.getProxy();
            proxy.setExtraParam('params', '');
            
          	kckWin.down('#searchForm').getForm().reset();
          	
//            var courseForms = Ext.ComponentQuery.query('#addCourseForm');
//            var courseForm = courseForms[courseForms.length - 1];
//            var fakcGrid = courseForm.down('#fakcList');
//            var fakcStore = fakcGrid.getStore();
            store.load();
            kckWin.show();
//	        store.addListener('load',function(){
//		       var records=[];//存放选中记录
//		       for(var i = 0;i < fakcStore.getCount();i++){
//		 			var rec = fakcStore.getAt(i);
//		 			var kch = rec.data.kch;
//			        for(var j = 0;j < store.getCount();j++){  
//			      	  var record = store.getAt(j);  
//			          if(record.data.kch == kch){//根据后台数据判断那些记录默认选中
//			          	pGrid.getSelectionModel().select(j,true,false);
////			          	pGrid.getSelectionModel().deselectRow(j);
//			          }  
//			   	 }  
//		       }
//		    });
//		    pGrid.getSelectionModel().deselectRow(rowNumber);
//            store.load();
	 }
})