Ext.define('App.view.attachData.UploadForm',{
	extend: 'Ext.form.Panel',
//	alias: 'widget.uploadForm',
	itemId:'uploadForm',
	initComponent: function(){
		var me = this;
		
		Ext.applyIf(me,{
			bodyStyle:'padding:5px 5px 0',
		    autoWidth: true,
		    fieldDefaults: {
		        msgTarget: 'side',
		        labelWidth: 70
		    },
	   		defaults: { anchor: '100%'},
			items:[{
				xtype:'filefield',
				itemId:'upload',
				name:'upload',			
				fieldLabel:'<font color="red">* </font>附件名称',
				allowBlank: false,
                editable: false,
                margin: '10 20 15 10',
	            blankText: '必填！',	  
				buttonText: '选择文件'	
				
			}
//			,{
//				xtype: 'label',
//				html: '请上传:',
//				margin: '0 20 0 10',
//				maxWidth: 30
//			}
			],
		    buttons: [{
				itemId:'saveBtn',
		        text: '确定',
		        iconCls:'save_16',
		        handler: function(){
		        	var me = this;
		        	var store = Ext.create('App.store.attachData.ViewPyfaFileTypeStore');
		        	var fileName = this.up('form').down('#upload').getValue();
		        	if(fileName.length > 0){
	//		        	var start = fileName.indexOf(".");
	//		        	var name = fileName.substring(start+1,fileName.length);
			        	var fileType = fileName.substring(fileName.lastIndexOf(".")+1); 
			        	store.load({callback:function(){
			        		var index = store.find('fileType',fileType)
							if(index == -1){
								Ext.MessageBox.alert("提示","上传附件格式不符合规定，请重新选择！");
							}else{
								me.up('#uploadForm').upload();
							}
			        	}});
		        	}else{
		        		Ext.MessageBox.alert("提示","请先上传文件！");
		        	}
		        	}
		    },{
		    	itemId:'cancelBtn',
		        text: '取消',
		        iconCls:'return_16',
		        handler: function() {
		        	this.up('window').close();
		        }
		    }]	  
		});
		
		me.callParent(arguments);
	},

	upload: function(){
		var me = this;
		var form = me;
		var wjlxmStore = Ext.create('App.store.zd.ZdWjlxmStore');
	    wjlxmStore.load({callback:function(){
				var index = wjlxmStore.find('wjlxm','PYFA');
				var wjml = '';
				if(index != -1){
					wjml = wjlxmStore.getAt(index).get('wjml');
				}
				var Cname = form.down('#upload').getValue();
				if(Cname.indexOf('C:\\fakepath\\') >= 0){
					var attachCname = Cname.substring(12,Cname.length);
				}else{
					var attachCname = Cname;
				}
				var billNo = me.up('window').billNo
			    var params = { wjml: wjml };
			    if (form.isValid()) {
			        form.submit({
			            clientValidation: true,
			            url: 'pyfaFileUploadAttach.action',
			            actionMethods: 'post',
			            params: params,
			            waitTitle: '请稍候...',
			            waitMsg: '正在上传附件请稍候...',
			            success: function (form, action) {
			            	if (action.result.success) {
			            		var result = action.result.fileResult;
			            		var record = {
			            			id: '',
			            			billNo: billNo,
			            			attachName: result[0].fileName,
			            			attachCname: attachCname,
			            			attachUrl: result[0].fileUrl,
			            			uploadTime: result[0].uploadTime
			            		}
			            		me.up('window').pGrid.getStore().insert(0,record);
			            		me.up('window').close();
			            	 }
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
	    })
	}
});