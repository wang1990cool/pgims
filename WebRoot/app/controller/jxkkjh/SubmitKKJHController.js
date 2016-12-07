Ext.define('App.controller.jxkkjh.SubmitKKJHController',{
	extend:'Ext.app.Controller',
	
	models : ['jxkkjh.KKJHMXModel'],
	stores : ['jxkkjh.KKJHMXAllStore','zd.ZdXqbStore'],

	
	refs : [{
		selector : 'submitKkjhWin',
		ref : 'submitKkjhWin'
	}],
	init:function(){
			this.control({
				'submitKkjhWin button[action=ok]':{
					click:this.submitKkjh
				},
				'submitKkjhWin button[action=detail]':{
					click:this.detailKKJHMX
				}
			});
		},
		
			//个人计划详情
	detailKKJHMX:function(o, e, eOpts){
		var rec = getSelRec(o.up('gridpanel'));
			   if(rec != undefined){
	        		var wins = Ext.ComponentQuery.query('#kkjhmxDetailWin');
	        		if(wins.length > 0) {
		        		var win = wins[0];
		        		win.setTitle('课程详情');
		        		win.setIconCls('detail_16');
		        		win.show();
	        	}else{
					var win = new Ext.Window({
						layout:'fit',
						itemId:'kkjhmxDetailWin',
						autoShow:true,
						title:'课程详情',
						iconCls:'detail_16',
			            width: 755,
		           	    height: 340,
			            closeAction:'hide',
			    		resizable:false,
			    		shadow:true,
			    		modal:true,
			    		constrainHeader:true,
			    		closable:true,
			    		animCollapse:true,
			    		autoShow:true,
	    				items: [Ext.create('App.view.jxkkjh.KKJHMXDetail')]
					});
	        	}
				var kkjhmxForm = win.down('form');
	        	kkjhmxForm.loadForm(rec);
	        	kkjhmxForm.setViewForm();
	        }
	},
		
		shzt :'',
		submitKkjh:function(o, e, eOtps){
			var me = this;
			var win = o.up('#submitKkjhWin');
			var auditDetailForm = win.down('#auditDetailForm');
			var shcz = auditDetailForm.down('#shcz').getValue();
			
			shzt = me.shzt;
			var flag = true;
			var form = win.down('#kkjhDetail');
			var ztmValue = form.down('#ztm').getValue();
			if(shcz == 'agree'){
				form.down('#ztm').setValue(shzt['shztm']);
				form.down('#zt').setValue(shzt['shzt']);
			}else if(shcz == 'callback'){
				if(ztmValue == 'WTG'){
					flag = false;
					Ext.MessageBox.alert('提示', '该培养方案已经审核未通过，不可打回！');
				}else{
					form.down('#ztm').setValue('WTG');
					form.down('#zt').setValue('审核未通过');
				}
			}
			
			if(flag){
				if (auditDetailForm.isValid()){
					var auditDetailValues = auditDetailForm.getForm().getValues();
					var values = form.getForm().getValues();
					var JSONobj = [];
				    JSONobj.push(JSON.stringify(auditDetailValues));
				    JSONobj.push(JSON.stringify(values))
				    Ext.Ajax.request({
						url : 'kkjhSubmit.action', 
						waitTitle : '提示',
						method : 'post',
						params:{datas:JSONobj},
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
						           	  me.getStore('KKJHStore').load();
						           	  me.getStore('KKJHTGStore').load();
	//					           	  Ext.StoreMgr.lookup('PYFAStore').load();
					        		  win.close();
								    }  
						        });
							}else{
								var errmsg = "保存失败！";
								Ext.MessageBox.show({
						           title: '错误',
						           msg: errmsg,
						           buttons: Ext.MessageBox.OK,
						           icon: Ext.MessageBox.ERROR,
						           fn: function(id, msg){  
						        	   form.getForm().reset();
								    }  
						        });
							}
						}
					});
				}else
		           Ext.MessageBox.show({
		      			title: '提示',
		      			msg: '请完整填写信息！',
		      			buttons: Ext.MessageBox.OK,
		     			icon: Ext.MessageBox.WARNING
		           });
			}
		},
	  		
		 onLaunch: function(o,shzt,auditDetail){
				var me = this;
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
					var kkjhDetailwin = Ext.create('App.view.jxkkjh.SubmitKKJHWindow');
					var kkjhDetail = kkjhDetailwin.down('#kkjhSubmitForm').down('#kkjhDetail')
					kkjhDetail.loadForm(recs[0]);
					kkjhDetail.setView();
					
					var auditDetailForm = kkjhDetailwin.down('#auditDetailForm');
					auditDetailForm.loadForm(auditDetail)
					me.shzt = shzt;
			}
		 }
})