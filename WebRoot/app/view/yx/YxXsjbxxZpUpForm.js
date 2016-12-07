Ext.define('App.view.yx.YxXsjbxxZpUpForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.yxXsjbxxZpUpForm',
	
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
				buttonText: '选择文件'/*,
				regex:/(xls)|(XLS)/i,
				regexText:'上传文件必须是zip类型文件！'*/
			},{
				xtype: 'label',
				html: '请上传zip类型文件,文件内照片请以身份证号命名！',
				margin: '0 20 0 10',
				maxWidth: 30
			}],
            buttons: [{
            	itemId:'saveBtn',
		        text: '确定',
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
			    var fileName = form.down('#upload').getValue();
				var fileType = fileName.substring(fileName.lastIndexOf(".")+1); 
						
				if(fileType == 'zip'){
			    form.submit({
					url : 'yxXsjbxxFileUpZp.action',
					waitTitle : '提示',
					actionMethods : 'post',
//						params:params,
					waitMsg : '正在导入照片请稍候...',
					success : function(form, action) {
						if(action.result.success){
							var msg = "照片导入成功！";
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
						var errmsg = "照片导入失败";
						Ext.MessageBox.show({
				           title: '错误',
				           msg: errmsg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.ERROR
				        });
					}
					},
					failure : function(form, action) {
						var errmsg = "照片导入失败";
						 Ext.MessageBox.show({
				           title: '错误',
				           msg: errmsg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.ERROR
				       });
					}
				});
	    	}else{
				 Ext.MessageBox.alert("提示","上传资料格式不符合规定，请重新选择！");
			}
		  }	
	}
});
