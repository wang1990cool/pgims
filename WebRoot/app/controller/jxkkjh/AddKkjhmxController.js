Ext.define('App.controller.jxkkjh.AddKkjhmxController',{
	extend:'Ext.app.Controller',
	
	models:['jxkkjh.KKJHMXModel','pyfa.FAKCModel'],	
	stores:['jxkkjh.KKJHMXAllStore','pyfa.FAKCStore','pyfa.FAKCAllStore'],
	
	init:function(){
		this.control({
			'fakcDialog button[action=searchPyfah]':{
				click:this.searchPyfah
			},
			'fakcDialog button[action=addKc]':{
				click:this.addKc
			},
			'fakcDialog button[action=detail]':{
				click:this.detailFakc
			},
			'fakcDialog button[action=search]':{
				click:this.search
			},
			'fakcDialog button[action=searchAll]':{
				click:this.searchAll
			}
		});
	},
	
			search:function(o, e, eOpts){
					var win = o.up('window');
					var pyfahValue = win.pyfahValue;
					var fakcForm = o.up('#fakcDialog');
					var searchForm = fakcForm.down('#searchForm');
					var searchParams = {
						searchMode : 'simple',
						fieldNames : [],
						order : '',
						search : {}
					};
					var pGrid = fakcForm.down('#fakcList');
					var store = pGrid.getStore();
					for (var col in pGrid.exportCols) {
						searchParams.fieldNames.push(col);
					}
	
					var tFields = searchForm.query('textfield(true)');
					for (var i in tFields) {
						if (tFields[i].value)
							searchParams.search[tFields[i].name] = "#like '%" + Ext.String.trim( tFields[i].value )  + "%'";
					}
					var sfggkcValue = searchForm.down('#ggkbz').getValue();
					if(sfggkcValue){
						searchParams.search['ggkbzm']="#= '" + sfggkcValue + "'";
					}
					searchParams.search['pyfah'] = "= '" + pyfahValue + "'";
					var proxy = store.getProxy();
					proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
					store.load();
	},
	
	searchAll:function(o, e, eOpts){
			var win = o.up('window');
			var pyfahValue = win.pyfahValue;
			var fakcForm = o.up('#fakcDialog');
			var searchForm = fakcForm.down('#searchForm');
        	var pGrid = fakcForm.down('#fakcList');
        	searchForm.getForm().reset();
        	
//        	var toolbar = pGrid.down('#toolbar');
//			toolbar.moveFirst();
        	var searchParams = {
						searchMode : 'simple',
						order : '',
						search : {}
			};
        	searchParams.search['pyfah'] = "= '" + pyfahValue + "'";
        	var store = pGrid.getStore(), proxy = store.getProxy();
        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
        	store.load();
	},
		//查找培养方案
		searchPyfah:function(o, e, Opts){
			var me = this;
			var application = me.getApplication();
    		var controller = application.getController('App.controller.pygrjh.PYFAController');
	   		controller.onLaunch('all','addGrjhkc');	
		},
			
        addKc:function(o, e, eOpts){
			var me = this;
       		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
       		if(recs.length == 0){
       				Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
       		}else{
				var kkjhForms = Ext.ComponentQuery.query('#kkjhForm');
				var kkjhForm = kkjhForms[kkjhForms.length - 1];
				
				//获得开课计划明细的store
				var addKkjhmxForms = Ext.ComponentQuery.query('#addKkjhmxForm');
				var addKkjhmxForm = addKkjhmxForms[addKkjhmxForms.length - 1];
				var list = addKkjhmxForm.down('#kkjhmxList');
				var kkjhmxStore = list.getStore();
				
				// 赋值
				var kkjhhValue = kkjhForm.down('#kkjhh').getValue()
				var jhrsValue = kkjhForm.down('#jhrs').getValue()		
				
				//获得选择行的数据
				var fakcList = o.up('#fakcList');
				var fakcRecs = fakcList.getSelectionModel().getSelection();
			
				var existKc = '';
				for(var i = 0;i < fakcRecs.length;i++){
					var jsonObject = JSON.parse(Ext.encode(fakcRecs[i].data)); //将每条数据转为json对象
					var kkjhmxJson = {} //存放每条开课计划明细
					
					// 判断课程是否已经存在于开课计划明细Store中
					var isKcExist = false
					for(var j = 0;j < kkjhmxStore.getCount();j++){
						var  record = kkjhmxStore.getAt(j);
						if(fakcRecs[i].data.kch == record.data.kch){
							existKc +=  record.data.kcmc +'(' + record.data.kch + '),' + ' <br/><br/>'
//							kkjhmxStore.remove(record)
							isKcExist = true;
							break;
						}
					}
					
					if(!isKcExist){
						for(var item in jsonObject){
							if(item == 'id'){ // 若item为id则赋为空字符
								kkjhmxJson['id'] = '';
							}else if(item == 'dwmc'){
								kkjhmxJson['kkdw'] = jsonObject[item];
							}else if(item == 'ggkbzm'){
								kkjhmxJson['ggkbzm'] = jsonObject['ggkbzm'];
								kkjhmxJson['ggkbz'] = (jsonObject['ggkbzm'] == 1)?'公共课程':'非公共课程'
							}else{
								kkjhmxJson[item] = jsonObject[item];
							}
				    		kkjhmxJson['kkjhh'] = kkjhhValue;
				    		kkjhmxJson['jhrs'] = jhrsValue;
			    		 }
			    		kkjhmxStore.insert(0,kkjhmxJson)
					}
					if(existKc!=''){
						Ext.MessageBox.alert('提示', existKc  +  '开课计划中已存在！');
					}
				}
       		}
		},
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
		           	    height: 450,
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
			onLaunch : function(pyfahValue) {
			     var win = new Ext.Window({
				   		itemId:'addKkjhmxWin',
						title:'方案课程',
						iconCls:'add_16',
						width: 870,
						height: 520,
						x:420,
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
						pyfahValue:pyfahValue,
						items:[Ext.create('App.view.jxkkjh.FAKCDialog',{
							itemId:'fakcDialog',
							margin:'0 0 0 0'
						})]
					});
					
			 var searchParams = {
						start : 0,
						page : 1,
						searchMode : 'simple',
						fieldNames : [],
						order : '',
						search : {}
				};
				
				searchParams.search['pyfah'] = "= '" + pyfahValue + "'";
				var pGrid = win.down('fakcDialog').down('#fakcList');
	            var store = pGrid.getStore(), proxy = store.getProxy();
	            proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	            store.load();
	            
	            pGrid.down('#addKc').setVisible(true)
			}
})
