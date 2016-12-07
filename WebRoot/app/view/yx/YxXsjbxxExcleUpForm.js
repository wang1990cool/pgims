Ext.define('App.view.yx.YxXsjbxxExcleUpForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.yxXsjbxxExcleUpForm',
	
    xtype: 'form',
    frame:true,
    autoWidth: true,
    bodyStyle:'padding:20 50 50 50',
    defaultType: 'textfield',
    defaults: {
    	anchor: '100%',
//    	readOnlyCls: 'x-item-disabled',
    	labelAlign : "right"
	},
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 75,
        width: 120
    },
    bodyStyle: 'background:#fff; padding:10 25 10 25;',
	
	initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
				xtype: 'filefield',
				itemId: 'upload',
				name: 'upload',
				emptyText: '请添加文件',
				fieldLabel: '添加',
				labelWidth:30,
				labelAlign:'right',
				width:155,
				buttonText: '浏览...',
				regex:/(xls)|(XLS)/i,
				regexText:'上传文件必须是xls类型文件！'
			}],
            buttons: [{
            	text: '数据导入',
            	iconCls:'save_16',
                handler: function(){
                	me.upload();
                }
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
    
    upload: function (){
		var me = this;
		var form = me;
		if (form.isValid()){
			values = form.getValues();
			var JSONobj = [];
		    JSONobj.push(JSON.stringify(values));
		    
		    form.submit({
//		    	url:'yxXsjbxxUpExcel.action',
				url : 'yxXsjbxxFileUpExcel.action',
				waitTitle : '提示',
				actionMethods : 'post',
//				params:{datas:JSONobj},
				waitMsg : '正在导入数据请稍候...',
				success : function(form, action) {
					if(action.result.success){
						var msg = "数据录入成功！";
						Ext.MessageBox.show({
				           title: '提示',
				           msg: msg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.INFO,
				           fn: function(id, msg){
				           		Ext.StoreMgr.lookup('YxXsjbxxbStore').reload();
				        	   me.up('window').close();
						    }
				        });
					}else{
						var errmsg = "数据导入失败";
						Ext.MessageBox.show({
				           title: '错误',
				           msg: errmsg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.ERROR
				        });
					}
				},
				failure : function(form, action) {
					var errmsg = "数据导入失败";
					 Ext.MessageBox.show({
			           title: '错误',
			           msg: errmsg,
			           buttons: Ext.MessageBox.OK,
			           icon: Ext.MessageBox.ERROR/*,
			           fn: function(id, msg){  
			        	   form.getForm().reset();
					    }  */
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
    
})
