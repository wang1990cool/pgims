Ext.define('App.controller.pyfa.FAKCController',{
	extend:'Ext.app.Controller',
	
	models:['pyfa.FAKCModel'],	
	stores:['pyfa.FAKCStore','pyfa.FAKCAllStore','zd.ZdXqbStore'],
	refs : [{
			selector : 'addFakcWin',
			ref : 'addFakcWin'
		}],
	
	init:function(){
			this.control({
				'addFakcWin button[action=add]':{
					click: this.addFAKC
				},
				'addFakcWin button[action=delete]':{
					click:this.deleteFAKC
				},
				'addFakcWin button[action=detail]':{
					click:this.detailFAKC
				},
				'addFakcWin button[action=edit]':{
					click:this.editFAKC
				},
				'addFakcWin button[action=save]':{
					click:this.saveFAKC
				}
			});
		},
	
		addFAKC:function(o, e, eOpts){
				var me = this;
				var win = o.up('window');
				var recs = win.recs;
				var fakcWin = o.up('#addCourseForm');
				var pyfah = recs[0].data.pyfah;
				var bbh = recs[0].data.bbh;
            	var fakcList = win.down('#fakcList');

				var application = me.getApplication();
	        	var controller = application.getController('App.controller.pyfa.AddFAKCController');
			    controller.onLaunch(pyfah,bbh,fakcList);
		},
		
		deleteFAKC:function(o, e, eOpts){
			var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
			if(recs.length == 0){
				Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
			}else{
				var fakcList = o.up('#fakcList');
				var store = fakcList.getStore();
				var records = fakcList.getSelectionModel().getSelection();
				store.remove(records);
			}
	},
		
		detailFAKC:function(o, e, eOpts){
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
		
		editFAKC:function(o, e, eOpts){
				var rec = getSelRec(o.up('gridpanel'));
				var fakcList =  o.ownerCt.ownerCt
			   if(rec != undefined){
					var win = new Ext.Window({
						layout:'fit',
						itemId:'fakcEditWin',
						autoShow:true,
						title:'修改课程',
						iconCls:'edit_16',
			            width: 755,
		           	    height: 460,
			            closeAction:'hide',
			    		resizable:false,
			    		shadow:true,
			    		modal:true,
			    		closable:true,
			    		animCollapse:true,
			    		autoShow:true,
			    		fakcList:fakcList,
	    				items: [Ext.create('App.view.pyfa.FAKCEdit')]
					});
				var fakcForm = win.down('form');
	        	fakcForm.loadForm(rec);
	        	fakcForm.setViewForm();
	        }
		},
		
		saveFAKC:function(o, e, eOtps){
			var me = this;
			var win = o.up('#addFakcWin');
			var recs = win.recs;
			var pyfahValue = recs[0].data.pyfah
			
			var fakcStore = win.down('#fakcList').getStore();
			var JSONList = [];
			//获得Store中的数据
			var flag = true;
			for (var i = 0; i < fakcStore.getCount(); i++) { 
				var record = fakcStore.getAt(i); // 获得每条数据
				if(record.data.kclb == '' || record.data.kcxz == '' || record.data.kcsx == ''
						|| record.data.ksxs=='' || record.data.kkxq==''){
					Ext.MessageBox.alert('提示','请将课程列表、课程性质、课程属性、' +
							'考试形式和开课学期填写完整！');
					flag = false;
				}
				var jsonObject = me.jsonParse(record);
				JSONList.push(JSON.stringify(jsonObject));
			}
			if(flag){
				Ext.Ajax.request({
						url : 'fakcSaveFakc.action?pyfah=' + pyfahValue,
						waitTitle : '提示',
						method : 'post',
						params:{datas:JSONList},
						waitMsg : '正在提交数据请稍候...',
						success : function(response, opts) {
							var result = Ext.decode(response.responseText);
							var success = result.result.success;
							if(success){
								var msg = "保存成功！";
								Ext.MessageBox.show({
						           title: '提示',
						           msg: msg,
						           buttons: Ext.MessageBox.OK,
						           icon: Ext.MessageBox.INFO,
						           fn: function(id, msg){
						           	  var searchParams = {
												searchMode : 'simple',
												search : {}
										};
										searchParams.search['pyfah'] = "= '" + pyfahValue + "'";
							        	var proxy =  fakcStore.getProxy();
							        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
							        	fakcStore.load();
								    }  
						        });
							}else{
								var errmsg = "保存失败！";
								Ext.MessageBox.show({
						           title: '错误',
						           msg: errmsg,
						           buttons: Ext.MessageBox.OK,
						           icon: Ext.MessageBox.ERROR
						        });
							}
						}
					});
			}
		},
			
		jsonParse :function(record){
		 		var jsonObject =  JSON.parse(Ext.encode(record.data));
				for(var item in jsonObject){
					if(jsonObject[item] == null){
					       jsonObject[item] = ""; //将null值转为空的字符串
					}
					if(item == 'id'){
						jsonObject[item] = ""
					}
			   }
			   return jsonObject;
		 },
		onLaunch : function(o,recs) {
			        	var win = Ext.create('App.view.pyfa.AddFAKCWindow',{
			        			recs:recs
			        	});
						 var rec = getSelRec(o.up('gridpanel'));
			        	var searchParams = {
								start : 0,
								page : 1,
								searchMode : 'simple',
								fieldNames : [],
								order : '',
								search : {}
						};
			        	var pGrid = win.down('#addCourseForm').down('#fakcList');
			        	pGrid.down('#add').setVisible(true);
			        	pGrid.down('#edit').setVisible(true);
			        	pGrid.down('#delete').setVisible(true);
			        	pGrid.isDetail = false;
			        	for (var col in pGrid.exportCols) {
								searchParams.fieldNames.push(col);
						}
						searchParams.search['pyfah'] = "= '" + rec.data.pyfah + "'";
			        	var store = pGrid.getStore();
			        	var proxy =  store.getProxy();
			        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
			        	store.load();
//			        	var addCouseForm = win.down('#addCourseForm');
//			        	addCouseForm.loadForm(rec);
			        	
			}
})
