Ext.define('App.view.skzl.SKZLUploadForm',{
	extend: 'Ext.form.Panel',
	alias: 'widget.skzlUploadForm',
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
				fieldLabel:'<font color="red">* </font>资料名称',
				allowBlank: false,
                editable: false,
                margin: '20 20 15 10',
	            blankText: '必填！',	  
				buttonText: '选择文件'	
				
			}
			,{
				xtype: 'label',
				html: '请上传pdf格式文件！',
				margin: '0 20 0 10',
				maxWidth: 30
			}
			],
		    buttons: [{
				itemId:'saveBtn',
		        text: '确定',
		        iconCls:'save_16',
//		        action:'save',
		        handler: function(){
						var win = me.up('window');
						var form = me;
						
						var rec = win.rec;
						var skzlList = win.skzlList;
						var zllxm = rec.get('zllxm');
						var zllx = rec.get('zllx');
						
						var wjlxmStore = Ext.create('App.store.zd.ZdWjlxmStore');
						wjlxmStore.load({callback:function(){
							var index = wjlxmStore.find('wjlxm',zllxm);
							var wjml = '';
							if(index != -1){
								wjml = wjlxmStore.getAt(index).get('wjml');
							}
						
					    if (form.isValid()) {
					    	var fileName = form.down('#upload').getValue();
							var fileType = fileName.substring(fileName.lastIndexOf(".")+1); 
							
							if(fileType == 'pdf'){
							
							var zlJson = {};		
							var jsonObject = JSON.parse(Ext.encode(rec.data));
							for(var item in jsonObject){
								zlJson[item] = jsonObject[item];
							}
							zlJson['zlscsj'] =  Ext.Date.format(new Date(), 'Y-m-d H:i:s');
							zlJson['zlscr'] = xm;
							
							zlJson['zlwj'] = rec.get('kkkh') + '-' + zllxm;
					//		zlJson['zlwjmc'] = recs[0].get('kcmc') + '(' + recs[0].get('kch') + ')' + zllx;
							zlJson['ztm'] = '1';
							zlJson['zt'] = '草稿';
					    	var params = { datas: Ext.encode(zlJson), wjml:wjml};
					        form.submit({
					            clientValidation: true,
					            url: 'skzlFileUploadZl.action',
					            actionMethods: 'post',
					            params: params,
					            waitTitle: '请稍候...',
					            waitMsg: '正在上传资料请稍候...',
					            success: function (form, action) {
					            	if (action.result.success) {
				//	            		var result = action.result.fileResult;
					            		skzlList.getStore().load();
					            		win.close();
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
							}else{
									Ext.MessageBox.alert("提示","上传资料格式不符合规定，请重新选择！");
							}
				 	   }
					}})
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
	}
});