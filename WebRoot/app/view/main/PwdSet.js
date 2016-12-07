Ext.define('App.view.main.PwdSet', {
    extend: 'Ext.window.Window',
    alias : 'widget.pwdSet',
    
    title : '密码设置',
	layout:'fit',
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	items :[{
	            xtype: 'form',
	            frame:true,
	            autoWidth: true,
	            bodyStyle:'padding:20 50 50 50',
	            defaultType: 'textfield',
	            defaults: {anchor: '100%'},
	            fieldDefaults: {
	                msgTarget: 'side',
	                labelWidth: 75,
	                width: 120
	            },
	            items: [{
	            	xtype: 'hiddenfield',
                    name:'userName',
                    value:userName
            	},{
	            	xtype: 'textfield',
	                fieldLabel: '旧密码',
	                allowBlank:false,
	                blankText:'旧密码不能为空！',
	                name: 'userPwd',
	        		enableKeyEvents: true  
	            },{
	            	xtype: 'textfield',
	                fieldLabel: '新密码',
	                allowBlank:false,
	                blankText:'新密码不能为空！',
	                name: 'newUserPwd',
	        		enableKeyEvents: true,  
	                listeners: {
	        			'keypress':function(form, e) {
	               			if (e.getKey() == e.ENTER) {  
	        	                this.nextSibling().focus(); 
	        	            } 
	            		}
	                }
	            },{
	            	xtype: 'textfield',
	                fieldLabel: '新密码确认',
	                allowBlank:false,
	                blankText:'新密码确认不能为空！',
	                name: 'againUserPwd',
	        		enableKeyEvents: true, 
	                listeners: {
	        			'keypress':function(form, e) {
	               			if (e.getKey() == e.ENTER) {  
	        	                submit(); 
	        	            } 
	            		}
	                }
	            }],
	        	buttons: [{
	            	text: '保存',
	            	iconCls:'save_16',
	        	    handler: me.submit
	        	},{
	        	    text: '返回',
	        	    iconCls:'return_16',
	        	    handler: function(){
	        	    	me.close();
	        	    }
	        	}] 
        	}]
        });
        
        this.callParent(arguments);
    },

	submit: function(){
		var me = this;
		
		var pwdForm = this.up('window').down('form').getForm();
    	var oldPwd = pwdForm.findField('userPwd').getValue();
    	var newPwd = pwdForm.findField('newUserPwd').getValue();
    	var againPwd = pwdForm.findField('againUserPwd').getValue();
    	
    	if(oldPwd == newPwd){
    		ShowErrorMsg('提示','新密码和旧密码相同！');
    	}
    	else if(newPwd != againPwd){
    		ShowErrorMsg('提示','密码输入不一致！');
    	}
    	else{
			values = pwdForm.getValues();
			var JSONobj = [];
		    JSONobj.push(JSON.stringify(values));
		    Ext.Ajax.request({
				url : 'userPwdSet.action',
				waitTitle : '提示',
				actionMethods : 'post',
				params:{datas:JSONobj},
				waitMsg : '正在提交数据请稍候...',
				success : function(response, opts) {
					var result = Ext.decode(response.responseText);
					var success = result.result.success;
					var msg = result.result.msg;
					if(success){
						Ext.MessageBox.show({
					           title: '提示',
					           msg: msg,
					           buttons: Ext.MessageBox.OK,
					           icon: Ext.MessageBox.INFO,
					           fn: function(id, msg){  
					        	  me.up('window').close();
							    }  
				        });
					}else{
						Ext.MessageBox.show({
					           title: '错误',
					           msg: msg,
					           buttons: Ext.MessageBox.OK,
					           icon: Ext.MessageBox.ERROR,
					           fn: function(id, msg){  
					        	   pwdForm.reset();
							    }  
				        });
					}
				},
				failure : function(form, action) {
					var errmsg = "密码设置失败！";
					 Ext.MessageBox.show({
			           title: '错误',
			           msg: errmsg,
			           buttons: Ext.MessageBox.OK,
			           icon: Ext.MessageBox.ERROR,
			           fn: function(id, msg){  
			        	   pwdForm.reset();
					    }  
			       });
				}
			});
    	}
	}
});