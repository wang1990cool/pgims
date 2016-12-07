Ext.define('App.view.docu.FileUploadForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.fileUploadForm',
    
    layout: 'column',
    border:0,
    autoWidth: true,
    autoHeight: true,
    fileUpload : true,
	defaults: {
		xtype: 'textfield',
		autoHeight : true,
		labelAlign : "right",
		width:250,
		labelWidth:100,
		margin:'3 0 0 0',
		size:20
	},
      
    initComponent: function() {
    	var me = this;
        
		Ext.applyIf(me, {
			items: [{
                xtype: 'filefield',
                itemId:'upload',
                name: 'upload',
                columnWidth:0.9,
                fieldLabel: '附件',
                buttonText: '选择附件...',
                autoWidth:true,
                allowBlank:true
            },{
        		itemId:'uploadBtn',
        		xtype: 'button',
                text: '上传',
                iconCls:'upload',
                columnWidth:0.1,
                handler: function(){
                	me.upload();
                }
            }]
		});
		        
        me.callParent(arguments);
    },
    
    upload: function(){
    	var me = this;
    	
    	var form = me;
    	var value = form.down('#upload').getValue();
    	if(value.indexOf('C:\\fakepath\\') >= 0){
    		form.down('#upload').setValue(value.substring(12,value.length));
    	}
    	if (form.isValid()) {
            form.submit({
                clientValidation: true,
                url: 'docufileUpload.action',
                method: 'post',
                waitTitle: '请稍候...',
                waitMsg: '正在上传附件请稍候...',
                success: function (form, action) {
                    if (action.result.success) {
                    	var docuForm = form.owner.up('form');
                    	
                    	var uploadFiles = action.result.fileResult;
                    	docuForm.down('#fileName').setValue(uploadFiles[0].fileName);
                    	docuForm.down('#fileCName').setValue(uploadFiles[0].fileCname);
                    	docuForm.down('#fileUrl').setValue(uploadFiles[0].fileUrl);
                    	docuForm.down('#fileTime').setValue(uploadFiles[0].uploadTime.substr(0,10));
                    	docuForm.down('#upload').setDisabled(true);
                    	docuForm.down('#uploadBtn').setDisabled(true);
                    }
                    
                    Ext.Msg.show({title:"提示",msg:action.result.msg,buttons: Ext.Msg.OK, icon: Ext.Msg.INFO});
                },
                failure: function (form, action) {
                	if(action.result.msg != null)
                		Ext.Msg.show({title:"提示",msg:action.result.msg,buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
                	else{
                          var fileName = form.findField('upload').value;
                          Ext.Msg.show({title:"提示",msg:'文件： ' + fileName + ' 上传失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
                	}
                }
            });
        }
    }
});