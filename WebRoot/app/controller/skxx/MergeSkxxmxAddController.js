Ext.define('App.controller.skxx.MergeSkxxmxAddController',{
	extend:'Ext.app.Controller',
	
			models : ['skxx.ZxkkjhModel','skxx.SKXXModel','skxx.SKJHGXModel'],
			stores : ['skxx.MergeSkxxmxStore','skxx.GgkZxkkjhStore','skxx.SKXXStore','skxx.SKJHGXStore','zd.TyXnbStore'],

	
	init:function(){
		this.control({
				'ggkSkxxmxDialog button[action=search]':{
					click:this.search
				},
				'ggkSkxxmxDialog button[action=searchAll]':{
					click:this.searchAll
				},
				'ggkSkxxmxDialog  button[action=detail]':{
					click:this.detailJs
				},
				'ggkSkxxmxDialog  button[action=ok]':{
					click:this.addClass
				}
			});
	},
			search:function(o, e, eOpts){
					var dialog = o.up('window');
					var searchForm = dialog.down('#searchForm');
					var searchParams = {
						start : 0,
						limit : 15,
						page : 1,
						searchMode : 'simple',
						fieldNames : [],
						order : '',
						search : {}
					};
					var pGrid = dialog.down('#ggkZxkkjhList');
					var store = pGrid.getStore();
					for (var col in pGrid.exportCols) {
						searchParams.fieldNames.push(col);
					}
	
					var tFields = searchForm.query('textfield(true)');
					for (var i in tFields) {
						if (tFields[i].value)
							searchParams.search[tFields[i].name] = "#like '%" +  Ext.String.trim( tFields[i].value ) + "%'";
					}
//					var kkdwValue = searchForm.down('#kkdw').getValue();
//					if(kkdwValue){
//						searchParams.search['kkdwh']="#= '" + kkdwValue + "'";
//					}
					var pydwValue = searchForm.down('#pydw').getValue();
					if(pydwValue){
						searchParams.search['pydwh']="#= '" + pydwValue + "'";
					}
					
					var xkzyValue = searchForm.down('#xkzy').getValue();
					if(xkzyValue){
						searchParams.search['xkzyh']="#= '" + xkzyValue + "'";
					}
					
					var xslxValue = searchForm.down('#xslx').getValue();
					if(xslxValue){
						searchParams.search['xslxm']="#= '" + xslxValue + "'";
					}
					
					var proxy = store.getProxy();
					proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
					store.load();
			},
			
			searchAll:function(o, e, eOpts){
				var dialog = o.up('window');
				var searchForm = dialog.down('#searchForm');
            	var pGrid = dialog.down('#ggkZxkkjhList');
            	searchForm.getForm().reset();
            	
            	var store = pGrid.getStore(), proxy = store.getProxy();
            	proxy.setExtraParam('params', '');
            	store.load();
			},
			 
          addClass:function( o, e, eOpts ){
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				}else{
					var win = o.up('window');
					var skxxmxWindow = win.skxxmxWin
//					var mergeSkxxmxWindows = Ext.ComponentQuery.query('#mergeSkxxmxWindow');
//					var mergeSkxxmxWindow = mergeSkxxmxWindows[mergeSkxxmxWindows.length -1];
					var skxxmxForm = skxxmxWindow.down('form');
					
					var mergeSkxxmxList =	skxxmxWindow.down('#mergeSkxxmxList');
					var mergeSkxxmxStore = mergeSkxxmxList.getStore();
					var firstRecord = mergeSkxxmxStore.getAt(0).data;
					var firstKch = firstRecord.kch;
					var firstXq = firstRecord.xq;
					var firstXn = firstRecord.xn;
					
					var isMerge = true;
				 	for(var i = 0; i < recs.length ;i++){
						if(recs[i].data.kch != firstKch){
							isMerge = false
							Ext.MessageBox.alert('提示','请选择一样的课程进行合班！');
							break;
						}else if(recs[i].data.xq != firstXq){
							isMerge = false
							Ext.MessageBox.alert('提示','请选择相同学期的课程进行合班！');
							break;
						}else if(recs[i].data.xn != firstXn){
							isMerge = false
							Ext.MessageBox.alert('提示','请选择相同学年的课程进行合班！');
							break;
						}
				 	}
				 	if(	isMerge){
				 		var isExist = true; 
						for(var i = 0;i < recs.length;i++){
							for(var j = 0;j < mergeSkxxmxStore.getCount();j++){
								if(recs[i].data.kkjhh == mergeSkxxmxStore.getAt(j).data.kkjhh){
									isExist = false;
									break;
								}
							}
							if(isExist){
								var jsonObject = JSON.parse(Ext.encode(recs[i].data)); //将每条数据转为json对象
								var skxxmxJson = {} //存放每条开课计划明细
								for(var item in jsonObject){
									skxxmxJson[item] = jsonObject[item];
					    		 }
						  		 mergeSkxxmxStore.insert(0,skxxmxJson)
							}
						}
						
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
				   		}
				   		
			 		 		skxxmxForm.down('#jhrs').setValue(jhrs);
			 		 		skxxmxForm.down('#pydwh').setValue(pydwh);
			 		 		skxxmxForm.down('#pydw').setValue(pydw);
			 		 		skxxmxForm.down('#zydm').setValue(zydm);
			 		 		skxxmxForm.down('#zymc').setValue(zymc);
				 	}
				}
          },
          
			onLaunch : function(o,skxxmxWin) {
					var win = new Ext.Window({
				   		itemId:'ggkSkxxmxDialogWin',
						title:'课程信息',
						iconCls:'add_16',
						width: 875,
						height: 550,
						constrainHeader:true,
						layout:'fit',
						closeAction:'hide',
						resizable:false,
						shadow:true,
						modal:true,
						closable:true,
						animCollapse:true,
						autoScroll:true,
						autoShow:true,
						skxxmxWin:skxxmxWin,
						items:[Ext.create('App.view.skxx.GgkSKXXMXDialog',{
							itemId:'ggkSkxxmxDialog'
						})]
					});
				var searchForm = win.down('#searchForm');
       			 searchForm.getForm().reset();
				var pGrid = win.down('#ggkZxkkjhList');
				 var store = pGrid.getStore(), proxy = store.getProxy();
       			 proxy.setExtraParam('params', '');
       			 store.load();
			}
	})
