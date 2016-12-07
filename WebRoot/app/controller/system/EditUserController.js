Ext.define('App.controller.system.EditUserController', {
    extend: 'Ext.app.Controller',
    
    init: function() {
		this.control({
			'userForm button[action=searchJg]': {
				click:this.searchJg
			},
			'userForm button[action=submitUser]':{
				click:this.editUser				
			}
		});
    },
    
    getCenter: function(){
    	return this.application.getController('main.MainController').getCenter();
    },
    
    initStore:function(){
    	var me = this;
    	var store = me.getStore('UserStore'), proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    },
    
    onLaunch:function(o){
    	var rec = getSelRec(o.up('gridpanel'));
    	if(rec != undefined){
        	var userWins = Ext.ComponentQuery.query('#editUserWin');
        	if(userWins.length > 0) {
        		var win = userWins[0];
        		win.setTitle('修改用户');
        		win.setIconCls('edit_16');
        		win.show();
        	}else{
            	var win = new Ext.Window({
            		itemId:'editUserWin',
            		autoShow: true,
            		title:'修改用户',
            		iconCls:'edit_16',
                    layout: 'fit',
                    width: 385,
           		    height: 400,
                    closeAction:'hide',
            		resizable:false,
            		shadow:true,
            		modal:true,
            		closable:true,
            		animCollapse:true,
            		autoShow:true,
                    items: [Ext.create('App.view.system.UserForm')]
                });
        	}
        	var userForm = win.down('form');
        	userForm.isAdd = false;
        	userForm.loadForm(rec);
        	userForm.down('#userName').setReadOnly(true);
        	userForm.down('#roleCode').setValue(rec.raw.webRole.roleCode);
    	}
    },
    
    searchJg:function(o, e, eOpts){
		var me = this
		var application = me.getApplication();
        var controller = application.getController('App.controller.system.JGXXController');
	    controller.onLaunch(o);
    },
   
       editUser:function(o,e,eOpts){
		var me = this;
		var form = o.up('form');
		
		if (form.isValid()){
			values = form.getValues();
			var JSONobj = [];
		    JSONobj.push(JSON.stringify(values));
		    Ext.Ajax.request({
				url : 'userEdit.action',
				waitTitle : '提示',
				actionMethods : 'post',
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
				           	  var store = me.getStore('UserStore');
				           	  store.load()
				        	  o.up('window').close();
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
				},
				failure : function(form, action) {
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
			});
    	}else
            Ext.MessageBox.show({
       			title: '提示',
       			msg: '请完整填写信息！',
       			buttons: Ext.MessageBox.OK,
      			icon: Ext.MessageBox.WARNING
            });
    }
});
