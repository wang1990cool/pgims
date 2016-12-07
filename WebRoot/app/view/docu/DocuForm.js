Ext.define('App.view.docu.DocuForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.docuForm',
    
    isAdd:true,
    layout:'form',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	            autoHeight:true,
	            collapsible: true,
	            padding:'5 5 10 5',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-item-disabled',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:220,
	        		labelWidth:80,
	        		padding:'3 0 0 0',
	        		size:20
	        	},
				layout:{
					type:'table',
					columns:2,
					tableAttrs:{ 
						style:"width:100%;text-align:center;border:1px solid #B3D0EE;border-collapse:collapse;empty-cells:show;", 
						align:'center'
					},
					tdAttrs:{
						align:'left',
						style:"border: 1px solid rgb(179, 208, 238);"
					}
				},
	            title: '文件信息',
	            items: [{
	                xtype: "hiddenfield",
	                itemId:'id',
	                name:'id'
	            },{
	                xtype: "hiddenfield",
	                itemId:'fileName',
	                name:'fileName',
	                allowBlank : false
	            },{
	                xtype: "hiddenfield",
	                itemId:'fileUrl',
	                name:'fileUrl',
	                allowBlank : false
	            },{
					xtype : 'textfield',
					itemId : 'fileNo',
					name : 'fileNo',
					fieldLabel : '<font color="red">*</font>文件编号',
					allowBlank : false,
					blankText : '必填！'
				},{
					xtype : 'combo',
					itemId : 'fileTypeCode',
					name : 'fileTypeCode',
					fieldLabel : '<font color="red">*</font>文件类型',
					allowBlank : false,
					blankText : '必填！',
		  			triggerAction: 'all',
		            editable: false,
		            forceSelection: true, 
					queryMode : 'local',
					displayField : 'codeName',
					valueField : 'codeId',
					store:'zdWjlxStore'
				},{
					xtype : 'textfield',
					itemId : 'fileCName',
					name : 'fileCName',
					fieldLabel : '<font color="red">*</font>文件名称',
					allowBlank : false,
					blankText : '必填！'
				},{
			    	xtype: 'textfield',
			    	itemId:'fileUnit',
			    	name:'fileUnit',
			    	fieldLabel: '发布单位'
		        },,{	
		            xtype: 'datefield',
		            itemId: 'fileTime',
		            name: 'fileTime',
		            format : "Y-m-d",
		            fieldLabel: '发布时间'
	            }]
	        },{
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '文件摘要',
	            collapsible: true,
	            padding:'5 5 10 5',
	            layout:'fit',
				items:[{
			    	xtype: 'textareafield',
			    	itemId:'fileAbstract',
			    	name:'fileAbstract',
			    	readOnlyCls: 'x-item-disabled'
		        }]
	        },{
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '文件上传',
	            collapsible: true,
	            padding:'5 5 10 5',
				items:[Ext.create('App.view.docu.FileUploadForm',{
					itemId:'fileUploadForm'
				})]
	        }],
	        buttons: [{
				itemId:'saveBtn',
		        text: '保存',
		        iconCls:'save',
		        handler: function(){
		        	me.submit();
		        }
		    },{
		    	itemId:'cancelBtn',
		        text: '取消',
		        iconCls:'return',
		        handler: function() {
		          me.up('window').hide();
		        }
		    }]
        });
        
       me.callParent(arguments);
       me.setForm();
    },
    
    setForm :function(){
    	var me = this;
    	  	
    	if(me.readOnly){
    		var textfields =  me.query('textfield');
    		for(var i in textfields)
    			textfields[i].setReadOnly(true);
	  
    		var filefields = me.query('filefield');
    		for(var i in filefields)
    			filefields[i].setDisabled(true);
	   }
    },
    
    loadForm: function(rec){
    	var me = this;
    	
    	me.isAdd = false;
    	me.loadRecord(rec);
    	
    	var values = rec.data;
		var exField = {};
     	for(var fieldName in values){
     		if(!(fieldName in exField)){
     			var field = me.form.findField(fieldName);
     			if(field != undefined){
	     			switch(field.xtype){
	     				case 'datefield':
	     					field.setValue(new Date(Date.parse(values[field.name].replace('T',' ').replace(/-/g,"/"))));
	     					break;
	     				case 'combo':
	     					field.setValue(values[field.name]);
	     					break;
	     				case 'treepathpicker':
	     					field.setRawValue(values['provinceName']);
	     					break;
	     				default:
	     					field.setValue(values[field.name]);
	     					break;
	     			}
     			}
     		}
		}
    },
    
    submit:function(){
    	var me = this;
    	
		var form = me;
		
		var fileUrl = form.down('#fileUrl');
		if(fileUrl.getValue()==''){
			Ext.MessageBox.show({
      			title: '提示',
      			msg: '请上传文件！',
      			buttons: Ext.MessageBox.OK,
     			icon: Ext.MessageBox.WARNING
           });
		}else{
			if (form.isValid()){
				values = form.getValues();
				var JSONobj = [];
			    JSONobj.push(JSON.stringify(values));
			    
			    Ext.Ajax.request({
					url : 'docu' + (form.isAdd?'Add.action':'Edit.action'),
					waitTitle : '提示',
					method : 'post',
					params:{datas:JSONobj},
					waitMsg : '正在提交数据，请稍候...',
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
					        	   	var tab = Ext.getCmp('mainContent').getActiveTab();
				            		var store = tab.down('#docuList').getStore();
					        	   	store.load();
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
					           fn: function(id, msg){  
							    }  
					        });
						}
					},
					failure : function(response, action) {
						var errmsg = "保存失败！";
						 Ext.MessageBox.show({
				           title: '错误',
				           msg: errmsg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.ERROR,
				           fn: function(id, msg){  
						    }  
				       });
					}
				})
			}else
	           Ext.MessageBox.show({
	      			title: '提示',
	      			msg: '请完整填写信息！',
	      			buttons: Ext.MessageBox.OK,
	     			icon: Ext.MessageBox.WARNING
	           });
		}
    }
});