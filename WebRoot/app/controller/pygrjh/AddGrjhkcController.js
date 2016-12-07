Ext.define('App.controller.pygrjh.AddGrjhkcController',{
	extend:'Ext.app.Controller',
	
	models:['pygrjh.PYGRJHKCModel','pyfa.FAKCModel'],	
	stores:['pygrjh.PYGRJHKCStore','pyfa.FAKCStore','pyfa.FAKCAllStore','pygrjh.JHFAKCAllStore'],
	
	init:function(){
		this.control({
			'grjhkcDialog button[action=searchPyfah]':{
				click:this.searchPyfah
			},
			'grjhkcDialog button[action=addKc]':{
				click:this.addKc
			},
			'grjhkcDialog button[action=detail]':{
				click:this.detailFakc
			}
		});
	},
		//查找培养方案
		searchPyfah:function(o, e, Opts){
			var me = this;
			var application = me.getApplication();
    		var controller = application.getController('App.controller.pygrjh.PYFAController');
	   		controller.onLaunch('all','all','addGrjhkc');	
		},
			
        addKc:function(o, e, eOpts){
			var me = this;
       		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
       		if(recs.length == 0){
       				Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
       		}else{
				var xsJcxxForms = Ext.ComponentQuery.query('#xsJcxxForm');
				var xsJcxxForm = xsJcxxForms[xsJcxxForms.length - 1];
				
				//获得个人计划课程的store
				var addGrjhkcForms = Ext.ComponentQuery.query('#addGrjhkcForm');
				var addGrjhkcForm = addGrjhkcForms[addGrjhkcForms.length - 1];
				var list = addGrjhkcForm.down('#grjhkcList');
				var grjhkcStore = list.getStore();
				
				// 赋值
				var xhValue = xsJcxxForm.down('#xh').getValue()
				var pyfahValue = xsJcxxForm.down('#pyfah').getValue();
				var njValue = xsJcxxForm.down('#nj').getValue();
				var zydmValue = xsJcxxForm.down('#zydm').getValue();
				
				//获得选择行的数据
				var fakcList = o.up('#fakcList');
				var fakcRecs = fakcList.getSelectionModel().getSelection();
			
				for(var i = 0;i < fakcRecs.length;i++){
					var jsonObject = JSON.parse(Ext.encode(fakcRecs[i].data)); //将每条数据转为json对象
					var grjhkcJson = {} //存放每条个人计划课程
					
					// 判断课程是否已经存在于个人计划课程Store中
					var isKcExist = false
					for(var j = 0;j < grjhkcStore.getCount();j++){
						var  grjhkcRec = grjhkcStore.getAt(j);
						if(fakcRecs[i].data.kch == grjhkcRec.data.kch){
							isKcExist = true;
							break;
						}
					}
					
					if(!isKcExist){
						for(var item in jsonObject){
							if(item == 'id'){ // 若item为id则赋为空字符
								grjhkcJson['id'] = '';
							}else{
				    			grjhkcJson[item] = jsonObject[item];
							}
				    		grjhkcJson['xh'] = xhValue;
				    		grjhkcJson['pyfah'] = pyfahValue;
				    		grjhkcJson['nj'] = njValue;
				    		grjhkcJson['zydm'] = zydmValue;
			    		 }
			    		grjhkcStore.insert(0,grjhkcJson)
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
		           	    height: 440,
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
				   		itemId:'addGrjhkcWin',
						title:'方案课程',
						iconCls:'add_16',
						width: 710,
						height: 520,
						x:620,
						y:30,
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
						items:[Ext.create('App.view.pygrjh.GRJHKCDialog',{
							itemId:'grjhkcDialog'
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
				var pGrid = win.down('grjhkcDialog').down('#fakcList');
	            var store = pGrid.getStore(), proxy = store.getProxy();
	            proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	            store.load();
	            
	            pGrid.down('#pyfah').setValue(pyfahValue);
	            pGrid.down('#addKc').setVisible(true)
			}
})
