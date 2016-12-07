Ext.define('App.view.cjlr.DisCjlrPan',{
	extend: 'Ext.tab.Panel',
	alias: 'widget.disCjlrPan',
    activeTab: 0,
	deferredRender: false,   
	tabPosition: 'top',  
	
	
	initComponent: function(){
		var me = this;
		
		Ext.applyIf(me,{
			items:[
		 		
	            Ext.create('App.view.cjlr.DisKcxxForm',{
			    	itemId: 'disKcxxForm',
			    	title: '课程信息'
			    }),
			    
			    Ext.create('App.view.cjlr.DisAddCjmxForm',{
					itemId:'disAddCjmxForm',
					baseCls:'my-panel-no-border',
					title:'成绩录入',
//					sjzt: me.sjzt,
					listeners:{
		        		beforeactivate:function( tab,  eOpts ){
		        			    var kcxxForm = tab.up('#disCjlrPan').down('#disKcxxForm');
		        			    var cjmxList = tab.up('#disCjlrPan').down('#disCjmxList');
		        			    var cjlxm = kcxxForm.down('#cjlxm').getValue();
		        			    var ywpscj = kcxxForm.down('#ywpscj').getValue();
//		        			    if( cjlxm == '' || cjlxm == null){
//		        			    	Ext.Msg.show({title:'提示', msg:'请先选择成绩类型，再点击成绩录入！',buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
//		        			    	return false;
//		        			    }
//		        			    if(ywpscj != 0 && ywpscj != 1){
//		        			    	alert(ywpscj);
//		        			    	Ext.Msg.show({title:'提示', msg:'请先选择有无平时成绩，再点击成绩录入！',buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
//		        			    	return false;
//		        			    }
		        			    if( cjlxm == '1'){
		        			    	cjmxList.columns[7].show();
		        			    	cjmxList.columns[8].hide();
		        			    }else{
		        			    	cjmxList.columns[7].hide();
		        			    	cjmxList.columns[8].show();
		        			    }
		        			    if(ywpscj == '1'){
		        			    	cjmxList.columns[6].show();
		        			    }else{
		        			    	cjmxList.columns[6].hide();
		        			    }
		        				
		        		}
		        	}
				})
			]
		});
		
		me.callParent(arguments);
	}
	
	
//	pass: function(){
//		var me = this;
//		var form = me.down('#disKcxxForm');
//		var kkkh = form.down('#kkkh').getValue();
//		
//		Ext.Ajax.request({
//				url:'cjlrPass.action',
//				method:'POST',
//				autosync: true,
//				params:{kkkh: kkkh},
//				scope: this,
//				success: function(response){
//					var responseMessage = Ext.JSON.decode(response.responseText);
//	                if (responseMessage.result.success) {
//	                     Ext.Msg.show({title:"提示",msg:'确认成功！',
//	                     buttons: Ext.Msg.OK, 
//	                     icon: Ext.Msg.INFO,
//	                       fn: function(id, msg){
//		                     	if(me.pageGrid != null){
//					        	   me.pageGrid.getStore().reload();
//					        	   me.up('window').close();
//		                  }}
//					    });
//	                 }
//	                else
//	                    Ext.Msg.show({title:"提示",msg:'失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
//	             },
//				failure: function (response) {
//	                Ext.Msg.show({title:"提示",msg:'失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
//	            }
//	      });
//	}
//	submit: function(Objbtn){
//		var me = this;
//		
//		var msg = Objbtn.itemId == 'Save' ? '保存' : '提交';
//		var flag = Objbtn.itemId == 'Save' ? '0' : '1';
//		var cjbl = null;
//		var cjxxData = {
//			jxCjjlbData: null,
//			jxCjmxbData:null
//		}
//        
//		if(!this.generateObj(cjxxData,flag)){
//			return false;
//		}
//		var kcxxForm = me.down('#kcxxForm');
//		var JSONObj = Ext.JSON.encode(cjxxData);
//		
//		Ext.MessageBox.confirm(msg, '确认' + msg + '？', function (btn) {
//			if(btn == "yes"){
//				Ext.Ajax.request({
//					url:'cjlrSaveData.action',
//					method:'POST',
//					autosync: true,
//					params:{cjxxData: JSONObj,flag: flag},
//					scope: this,
//					success: function(response){
//						var responseMessage = Ext.JSON.decode(response.responseText);
//		                if (responseMessage.result.success) {
//		                     Ext.Msg.show({title:"提示",msg:'数据' + msg + '成功！',
//		                     buttons: Ext.Msg.OK, 
//		                     icon: Ext.Msg.INFO,
//		                     fn: function(id, msg){
//		                     	if(me.pageGrid != null){
//					        	   me.pageGrid.getStore().reload();
//		                     	}
////		                     	 if(Objbtn.itemId == 'Submit')
//					        	  me.up('window').close();
//						     	}  
//						    });
//		                 }
//		                else
//		                    Ext.Msg.show({title:"提示",msg:'数据' + msg + '失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
//		             },
//					failure: function (response) {
//		                Ext.Msg.show({title:"提示",msg:'数据' + msg + '失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
//		            }
//		      });
//	    }});
//	},
	
//	generateObj:function(cjxxData, flag){
//		var me = this;
//		
//        var jxCjjlbData;
//		var	jxCjmxbData = [];
//		
//		var kcxxForm = me.down('#kcxxForm');
//		var cjmxList = me.down('#cjmxList');
//		
//		
//		jxCjjlbData = kcxxForm.getValues();
//		jxCjjlbData.ksxs = kcxxForm.down('#ksxs').getRawValue();
//		jxCjjlbData.ksfs = kcxxForm.down('#ksfs').getRawValue();
//		jxCjjlbData.cjlx = kcxxForm.down('#cjlx').getRawValue();
//		var cjmxStore = cjmxList.getStore();
//		var yw = null;//有无平时成绩  有 ： 1， 无 ： 0
//		var cjlxm = null; // 成绩类型  百分制： 1， 五分制： 2
//		
//		if(flag == '1'){
//			var count = 0;
//			
//			for(var o in jxCjjlbData){	
//				
//				if(o == 'cjlxm' ||  o == 'kkrq' || o == 'kkdd'){
//					if(jxCjjlbData[o] == null || jxCjjlbData[o] == ""){
//						Ext.Msg.show({title:'提示', msg:'课程信息填写不完整！',buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
//						return null;
//					}
//					if(o == 'cjlxm'){
//						cjlxm = jxCjjlbData[o];
//					}
//				}
//				if(o == 'ywpscj' && jxCjjlbData[o] != 1 && jxCjjlbData[o] != 0){
//						Ext.Msg.show({title:'提示', msg:'课程信息填写不完整！',buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
//						return null;
//				}else if( o == 'ywpscj'){
//						yw = jxCjjlbData[o];
//				}
//				if( o == 'pscjbl' && yw == 1){
//					if(jxCjjlbData[o] == null ||jxCjjlbData[o] == ""){
//						Ext.Msg.show({title:'提示', msg:'请填写平时成绩比例！',buttons: Ext.Msg.OK,icon: Ext.Msg.WARNING});
//						return null;
//					}
//				}
//			}
//		}
//		
//		cjmxStore.each(function(rec){
//					
//			var record = {
//				id: '',
//				kkkh: rec.data.kkkh,
//				xh: rec.data.xh,
//				xm: rec.data.xm,
//				ksxzm: rec.data.ksxzm,
//				ksxz: rec.data.ksxz,
//				pscj: rec.data.pscj,
//				fslkscj: rec.data.fslkscj,
//				kcdjcjm: rec.data.kcdjcjm,
//				djlkscj: rec.data.djlkscj,
//				kccj: rec.data.kccj
//			};
//			jxCjmxbData.push(record);
//		});
//		cjxxData.jxCjjlbData =jxCjjlbData;
//		cjxxData.jxCjjlbData.ksrq = cjxxData.jxCjjlbData.ksrq.replace(/\-/g, "");
//		cjxxData.jxCjjlbData.sjzt = flag;
//		cjxxData.jxCjmxbData = jxCjmxbData;
//		return true;
//	}
})