Ext.define('App.view.system.MenuAllocateForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.menuAllocateForm',
	
    xtype: 'form',
    frame:true,
    autoWidth: true,
    bodyStyle:'padding:20 50 50 50',
    defaultType: 'textfield',
    defaults: {anchor: '100%',readOnlyCls: 'x-item-disabled'},
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 75,
        width: 120
    },
    config: { parentId: 0,checkNodes:[] },
	
	initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
            	xtype: 'textfield',
            	itemId: 'roleCode',
            	name: 'roleCode',
            	fieldLabel: '角色编码'
			},{
            	xtype: 'textfield',
            	itemId: 'roleName',
            	name: 'roleName',
            	fieldLabel: '角色名称'
			},Ext.create('App.view.system.RightsMenuTree',{
				itemId: 'rightsMenuTree',
				parentId: me.getParentId(),
				checkNodes: me.getCheckNodes(),
				header: false,
				border:1,
				width: 200,
				height: 270
			})
			],
            buttons: [{
            	text: '保存',
            	iconCls:'save_16',
                handler: me.submit
            }, {
        	    text: '返回',
        	    iconCls:'return_16',
                handler: function () {
                    me.up('window').close();
                }
            }]
        });

        me.callParent(arguments);
    },
    
    loadForm: function(){
    	
    },
    
    submit: function (){
		var me = this;
		var form = me.up('form');
		
		values = form.getValues();
		var JSONobj = [];
	    JSONobj.push(JSON.stringify(values));
	    
        var records = me.up('form').down('#rightsMenuTree').getView().getChecked();
        checkedNodes = [];
        Ext.Array.each(records, function (rec) {
            if (rec.get('id') != "0")
            	checkedNodes.push(rec.get('id'));
        });
	    JSONobj.push(checkedNodes);
        
        
	    Ext.Ajax.request({
			url : 'rightAllocateMenu.action',
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
			        	  Ext.StoreMgr.lookup('RoleStore').reload();
			        	  me.up('window').close();
					    }  
			        });
				}else{
					var errmsg = "保存失败！";
					Ext.MessageBox.show({
			           title: '错误',
			           msg: errmsg,
			           buttons: Ext.MessageBox.OK,
			           icon: Ext.MessageBox.ERROR,
			           fn: function(id, msg){ }  
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
		           fn: function(id, msg){ }  
		       });
			}
		});
	}
})
