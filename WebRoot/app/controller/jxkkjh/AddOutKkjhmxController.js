Ext.define('App.controller.jxkkjh.AddOutKkjhmxController',{
	extend:'Ext.app.Controller',
	
	models:['pyfa.FAKCModel','pyfa.KCKModel'],	
	stores:['pyfa.FAKCStore','pyfa.KCKStore','pyfa.FAKCAllStore'],
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
					click:this.detailKc
			 },
				'kckDialogList  button[action=ok]':{
					click:this.addOutKc
			  }
		});
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
							searchParams.search[tFields[i].name] = "#like '%" +Ext.String.trim( tFields[i].value ) + "%'";
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
					store.load();
			},
	
			searchAll:function(o, e, eOpts){
					var kckForm = o.up('#kckKkjhmxWin');
					var searchForm = kckForm.down('#searchForm');
		        	var pGrid = kckForm.down('#kckDialogList');
		        	searchForm.getForm().reset();
		        	
		        	var store = pGrid.getStore(), proxy = store.getProxy();
		        	proxy.setExtraParam('params', '');
		        	store.load();
			},
			
				detailKc:function(o, e, eOpts){
					var rec = getSelRec(o.up('gridpanel'));
					var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
					if (recs.length == 0) {
						Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
					} else if (recs.length > 1) {
						Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
					} else if (recs.length == 1) {
							var win = new Ext.Window({
								layout:'fit',
								itemId:'kckKkjhmxDetailWin',
								autoShow:true,
								title:'课程详情',
								iconCls:'detail_16',
					            width: 755,
				           	    height: 565,
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
				
	addOutKc:function(o, e, eOpts){
		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
		if (recs.length == 0) {
			Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
		} else if (recs.length > 1) {
			Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
		} else if (recs.length == 1) {
			var isKcExist = false;
			var addKkjhmxForms = Ext.ComponentQuery.query('#addKkjhmxForm');
			var addKkjhmxForm = addKkjhmxForms[addKkjhmxForms.length -1];
			var kkjhmxList = addKkjhmxForm.down('#kkjhmxList');
			var store =  kkjhmxList.getStore();
			for(var i = 0;i < store.getCount();i++){
				var record = store.getAt(i);
				if(recs[0].data.kch == record.data.kch){
					isKcExist = true;
					Ext.MessageBox.alert('提示', '课程已经存在！');
					break;
				}
			}
			if(!isKcExist){
				var recsJSON = Ext.encode(recs[0].data) ;//获得json
			    var recsJSONobj = 	JSON.parse(recsJSON);// 转为json对象
				var extraWin = new Ext.Window({
					itemId:'addExtraCourse',
					title:'添加课程',
					iconCls:'add_16',
					width: 355,
					height: 225,
					closeAction:'hide',
					constrainHeader:true,
					resizable:false,
					shadow:true,
					closable:true,
		    		animCollapse:true,
		    		autoHeight : true,
		    		autoScroll:true,
		    		autoShow:true,
		    		items:[Ext.create('App.view.jxkkjh.AddExtraKCForm')]
			});
			var extraFAKCForm = extraWin.down('form');
			extraFAKCForm.loadRecs(recsJSONobj);
		 }
	  }
	},
		
//        addOutKc:function(o, e, eOpts){
//			var me = this;
//       		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
//       		if(recs.length == 0){
//       				Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
//       		}else{
//				var kkjhForms = Ext.ComponentQuery.query('#kkjhForm');
//				var kkjhForm = kkjhForms[kkjhForms.length - 1];
//				
//				//获得开课计划明细的store
//				var addKkjhmxForms = Ext.ComponentQuery.query('#addKkjhmxForm');
//				var addKkjhmxForm = addKkjhmxForms[addKkjhmxForms.length - 1];
//				var list = addKkjhmxForm.down('#kkjhmxList');
//				var kkjhmxStore = list.getStore();
//				
//				// 赋值
//				var kkjhhValue = kkjhForm.down('#kkjhh').getValue()
//				var jhrsValue = kkjhForm.down('#jhrs').getValue()		
//				
//				//获得选择行的数据
//				var kckList = o.up('#kckDialogList');
//				var kckRecs = kckList.getSelectionModel().getSelection();
//			
//				for(var i = 0;i < kckRecs.length;i++){
//					var jsonObject = JSON.parse(Ext.encode(kckRecs[i].data)); //将每条数据转为json对象
//					var kkjhmxJson = {} //存放每条开课计划明细
//					
//					// 判断课程是否已经存在于开课计划明细Store中
//					var isKcExist = false
//					for(var j = 0;j < kkjhmxStore.getCount();j++){
//						var  record = kkjhmxStore.getAt(j);
//						if(kckRecs[i].data.kch == record.data.kch){
//							isKcExist = true;
//							break;
//						}
//					}
//					
//					if(!isKcExist){
//						for(var item in jsonObject){
//							if(item == 'id'){ // 若item为id则赋为空字符
//								kkjhmxJson['id'] = '';
//							}else if(item == 'ggkbzm'){
//								kkjhmxJson['ggkbzm'] = jsonObject['ggkbzm'];
//								kkjhmxJson['ggkbz'] = (jsonObject['ggkbzm'] == 1)?'是':'否'
//							}else{
//								kkjhmxJson[item] = jsonObject[item];
//							}
//				    		kkjhmxJson['kkjhh'] = kkjhhValue;
//				    		kkjhmxJson['jhrs'] = jhrsValue;
//			    		 }
//			    		kkjhmxStore.insert(0,kkjhmxJson)
//					}
//				}
//       		}
//		},
		
		detailFakc:function(o, e, Opts){
				var rec = getSelRec(o.up('gridpanel'));
			   if(rec != undefined){
	        		var fakcWins = Ext.ComponentQuery.query('#fakcWin');
	        		if(fakcWins.length > 0) {
		        		var win = fakcWins[0];
		        		win.setTitle('课程详情');
		        		win.setIconCls('detail_16');
		        		win.show();
	        	}else{
					var win = new Ext.Window({
						layout:'fit',
						itemId:'fakcWin',
						autoShow:true,
						title:'课程详情',
						iconCls:'detail_16',
			            width: 755,
		           	    height: 470,
			            closeAction:'hide',
			    		resizable:false,
			    		shadow:true,
			    		modal:true,
			    		constrainHeader:true,
			    		closable:true,
			    		animCollapse:true,
			    		autoShow:true,
	    				items: [Ext.create('App.view.pyfa.FAKCDetail')]
					});
	        	}
				var fakcForm = win.down('form');
	        	fakcForm.loadForm(rec);
	        	fakcForm.setViewForm();
	        }
		},
		
		onLaunch : function(o) {
		 	 var me = this;
		     var kckKkjhmxWin = new Ext.Window({
			   		itemId:'kckKkjhmxWin',
					title:'课程库',
					iconCls:'add_16',
					width: 685,
					height: 545,
					constrainHeader:true,
					x:620,
					y:20,
					layout:'fit',
					closeAction:'hide',
					resizable:false,
					shadow:true,
					modal:true,
					closable:true,
					animCollapse:true,
					autoScroll:true,
					autoShow:true,
					items:[
				   	  Ext.create('App.view.pyfa.KCKDialog',{
				   	  	itemId:'kckDialog'
				   	  })]
				});
	            var pGrid = kckKkjhmxWin.down('#kckDialog').down('#kckDialogList');
	            var store = pGrid.getStore(), proxy = store.getProxy();
	            proxy.setExtraParam('params', '');
	            store.load();
			}
})
