Ext.define('App.controller.system.AddRoleController', {
    extend: 'Ext.app.Controller',
    
    refs: [{  
        selector: 'roleForm',  
        ref: 'roleForm'  
    }],
    
    
    init: function() {
		this.control({
			'roleForm button[action=searchRight]': {
				click:this.searchRight
			},
			'roleForm button[action=addRole]':{
				click:this.addRole				
			}
		});
    },
    
    
    onLaunch:function(){
    	new Ext.Window({
    		itemId:'roleWin',
    		title:'增加角色',
    		iconCls:'add_16',
            layout: 'fit',
            width: 390,
            height: 300,
            closeAction:'hide',
    		resizable:false,
    		shadow:true,
    		modal:true,
    		closable:true,
    		animCollapse:true,
    		autoShow:true,
            items: [Ext.create('App.view.system.RoleForm',{
            	itemId:'roleForm'
            })]
        });
    },
    
    searchRight:function(o, e, eOpts){
		var me = this
		var application = me.getApplication();
        var controller = application.getController('App.controller.system.RoleRightController');
	    controller.onLaunch(o);
    },
    
    addRole:function(o,e,eOpts){
		var me = this;
		var form = o.up('form');
		
		if (form.isValid()){
			values = form.getValues();
			var rightCode = values.rightCode;
//			var rightcode = (values.rightcode).toString().replace(/\s/g, "");//去掉空格
			var JSONobj = [];
			var val = JSON.parse(Ext.encode(values));
			delete val['rightCode'];
			
		    Ext.Ajax.request({
				url : 'role' + (form.isAdd?'Add.action':'Edit.action'),
				waitTitle : '提示',
				actionMethods : 'post',
				params:{datas:Ext.encode(val),rightCode:rightCode},
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
				        	  Ext.StoreMgr.lookup('RoleStore').reload();
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
