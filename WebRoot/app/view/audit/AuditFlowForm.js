Ext.define('App.view.audit.AuditFlowForm',{
	extend: 'Ext.form.Panel',
	alias: 'widget.auditFlowForm',
	itemId:'auditFlowForm',
	required : '<span style="color:red;font-weight:bold" data-qtip="必填">*</span>',
    readOnlyStyle : 'background:none; border : 0px;font-weight:bold;',
   
    isAdd:true,
    
	initComponent:function(){
		var me = this;
		
		Ext.applyIf(me,{
			 items: [Ext.create('App.view.main.TableFieldSet',{
			 	columns:1,
            	margin: '15 5 5 5',
				items: [{
					xtype: 'hiddenfield',
					itemId: 'id',
					name:　'id'
				},{
					xtype: 'textfield',
					itemId: 'flowName',
					name: 'flowName',
					fieldLabel: '流程名',
					beforeLabelTextTpl: me.required,
			    	allowBlank : false,
					blankText : '必填！'
				},{
					xtype: 'textfield',
					itemId: 'flowCode',
					name: 'flowCode',
					fieldLabel: '流程码',
					beforeLabelTextTpl: me.required,
					allowBlank : false,
					blankText : '必填！',
					listeners:{
						blur:function(o, The, eOpts){
			           		var me = this;
			           		if(me.up('#auditFlowForm').isAdd){
				           		var value = me.getValue();
					        	Ext.Ajax.request({
					        	    async: false,
					        		url: 'auditFlowCheckFlowCode.action',
					        		actionMethods: 'post',
					        		params: { flowCode: value },
					        		success: function (response) {
					        		    var result = Ext.JSON.decode(response.responseText).result;
					        			if (result.success) {
					        			    Ext.MessageBox.alert('提示', '该流程码：  '+ value + '  已经存在！');
					        			   	me.reset();
					        			}
					        		}
					        	});
			           		}
						}
					}
				},{
    				xtype: 'textareafield',
    				itemId:'bz',
    		        name: 'bz',
    		        fieldLabel: '备注',
    				labelAlign : 'right',
    				labelWidth:117,
    		        height: 80,
    		        width:500,
    		        colspan:3
    		    }]
			})],
			dockedItems: [
				Ext.create('Ext.toolbar.Toolbar',{
					itemId:'auditToolbar',
					dock: 'top',
					items:[{
			            itemId: 'saveBtn',
			            text:'保存',
			            tooltip:'保存',
			            iconCls:'save_16',
			            handler: me.submitForm,
			            pageGrid:me.pageGrid,
			            isAdd: me.isAdd
					},'-',{
			            itemId: 'cancelBtn',
			            text:'返回',
			            tooltip:'返回',
			            iconCls:'return_16',
			            handler: function () {
			            	me.up('window').close();
			            }
					}]
			})]
		});
		
		me.callParent(arguments);
	},
	
	 setViewForm :function(){
    	var me = this;
    	  	
		var textfields =  me.query('textfield');
		for(var i in textfields){
			textfields[i].setReadOnly(true);
			var style = "background:none; border : 0px;";
			textfields[i].setFieldStyle(me.readOnlyStyle);
		}
  
		var filefields = me.query('filefield');
		for(var i in filefields)
			filefields[i].setDisabled(true);
		
		me.down('#saveBtn').setVisible(false);
    },
    
    loadForm : function(rec){
		var me = this;
		me.loadRecord(rec);
	},
	
    loadViewForm : function(rec){
		var me = this;
		me.loadForm(rec);
		me.setViewForm();
	},
	
   setDetailView :function(){
    	var me = this;
		var textfields =  me.query('textfield');
		for(var i in textfields){
			textfields[i].setReadOnly(true);
			var style = "background:none; border : 0px;";
			textfields[i].setFieldStyle(me.readOnlyStyle);
		}
    },
    
	submitForm: function (){
		var me = this;
		var form = me.up('form');
		
		if (form.isValid()){
			values = form.getValues();
			var JSONobj = [];
		    JSONobj.push(JSON.stringify(values));
   			form.submit({
   	            waitTitle: '提示',
   	            url : 'auditFlow' + (me.isAdd?'add.action':'edit.action'),
				actionMethods : 'post',
				params:{datas:JSONobj},
				success: function (form,action) {
					if (action.result.success) {
						var msg = "保存成功！";
						Ext.MessageBox.show({
				           title: '提示',
				           msg: msg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.INFO,
				           fn: function(id, msg){
				           	  me.pageGrid.getStore().reload();
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
				        	   form.getForm().reset();
						    }  
				        });
					} 
				},
                failure: function (form, action) {
					var errmsg = "保存失败！";
					 Ext.MessageBox.show({
			           title: '错误',
			           msg: errmsg,
			           buttons: Ext.MessageBox.OK,
			           icon: Ext.MessageBox.ERROR,
			           fn: function(id, msg){  
//			        	   form.getForm().reset();
					    }  
			       });
				}
			});
		}
    }
});