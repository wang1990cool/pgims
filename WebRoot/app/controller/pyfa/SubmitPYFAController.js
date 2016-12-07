Ext.define('App.controller.pyfa.SubmitPYFAController',{
	extend:'Ext.app.Controller',
	
	models:['pyfa.FAKCModel','pyfa.PYFAModel'],
	stores:['pyfa.FAKCStore','pyfa.FAKCAllStore','zd.ZdXqbStore'],
	
	refs : [{
		selector : 'submitPyfaWin',
		ref : 'submitPyfaWin'
	}],
	init:function(){
			this.control({
				'submitPyfaWin button[action=ok]':{
					click:this.submitPyfa
				},
				'submitPyfaWin button[action=detail]':{
					click:this.detailFakc
				}
			});
		},
		
		detailFakc:function(o, e, eOpts){
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
			    		constrainHeader:true,
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
		
		shzt :'',
		submitPyfa:function(o, e, eOtps){
			var me = this;
			var win = o.up('#submitPyfaWin');
			var auditDetailForm = win.down('#auditDetailForm');
			var shcz = auditDetailForm.down('#shcz').getValue();
			
			shzt = me.shzt;
			var flag = true;
			var form = win.down('#pyfaDetail');
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
						url : 'pyfaSubmit.action', 
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
						           	  me.getStore('PYFAStore').load();
						           	  me.getStore('PYFATGStore').load();
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
					var win = Ext.create('App.view.pyfa.SubmitPYFAWindow');
					
					var auditDetailForm = win.down('#auditDetailForm');
					auditDetailForm.loadForm(auditDetail)
					me.shzt = shzt;
					var pyfaDetail = win.down('#pyfaSubmitForm').down('#pyfaDetail')
					pyfaDetail.setViewForm();
					pyfaDetail.loadForm(recs[0]);
				}
		 }
})