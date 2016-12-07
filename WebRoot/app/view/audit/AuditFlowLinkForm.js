Ext.define('App.view.audit.AuditFlowLinkForm',{
	extend: 'Ext.form.Panel',
	alias: 'widget.auditFlowLinkForm',
	
	required : '<span style="color:red;font-weight:bold" data-qtip="必填">*</span>',
    readOnlyStyle : 'background:none; border : 0px;font-weight:bold;',
   
    isAdd:true,
    isDetail:false,
	initComponent:function(){
		var me = this;
		
		Ext.applyIf(me,{
			 items: [Ext.create('App.view.main.TableFieldSet',{
            	margin: '10 5 5 5',
				items: [{
					xtype: 'hiddenfield',
					itemId: 'id',
					name:　'id'
				},{
					xtype: 'textfield',
					itemId: 'oid',
					name: 'oid',
					fieldLabel: '排序号',
					beforeLabelTextTpl: me.required,
					allowBlank : false,
					blankText : '必填！'
				},{
					xtype: 'textfield',
					itemId: 'nodeName',
					name: 'nodeName',
					fieldLabel: '节点名称',
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
					blankText : '必填！'
				},{
					xtype: 'combo',
					itemId: 'auditRole',
					name: 'auditRole',
					fieldLabel: '审核角色',
					displayField:'roleName',
					valueField:'roleCode',
					beforeLabelTextTpl: me.required,
					allowBlank : false,
					blankText : '必填！',
				    store :'RoleStore'
				},{
					xtype: 'textfield',
					itemId: 'flagCode',
					name: 'flagCode',
					fieldLabel: '当前状态码',
					beforeLabelTextTpl: me.required,
					allowBlank : false,
					blankText : '必填！',
					listeners: {
						focus:function(){
							var roleValue = me.down('#auditRole').getValue();
							if(roleValue == null){
									this.setValue('')
								   Ext.MessageBox.alert('提示', '请先选择角色！');
							}
						},
			           	blur : function( o, The, eOpts ){
			           		var me = this;
			           		var form = me.up('form');
			           		var flagvalue = me.getValue();
			           		var roleValue = form.down('#auditRole').getValue();
			           		var flowCodeValue = form.down('#flowCode').getValue();
				        	Ext.Ajax.request({
				        	    async: false,
				        		url: 'flowLinkCheckFlagCode.action',
				        		actionMethods: 'post',
				        		params: { flagCode: flagvalue, roleCode:roleValue,flowCode:flowCodeValue},
				        		success: function (response) {
				        		    var result = Ext.JSON.decode(response.responseText).result;
				        			if (result.success) {
				        			    Ext.MessageBox.alert('提示',roleValue + '角色'+'flowCodeValue' +'流程的状态'+ flagvalue + '  已经存在！');
				        			   	me.reset();
				        			}
				        		}
				        	});
			           	}
	                }
				},{
					xtype: 'textfield',
					itemId: 'nextFlagCode',
					name: 'nextFlagCode',
					fieldLabel: '下一状态码',
					beforeLabelTextTpl: me.required,
					allowBlank : false,
					blankText : '必填！'
				},{
					xtype: 'combo',
    	        	itemId:'isPass',
    	        	name:'isPass',
    	            fieldLabel: '有效',
    	            value:'',
    			    store: Ext.create('Ext.data.Store', {
    					fields: ['value', 'abbr'],
    				    data: [{ 'value': 1, 'abbr': '是' },
    					    { 'value': -1, 'abbr': '否' }]
    				}),
    			    editable: false,
    			    displayField: 'abbr',
    			    valueField: 'value',
    			    queryMode: 'local',
    				beforeLabelTextTpl: me.required,
    				allowBlank : false,
    				blankText : '必填！',
    				 colspan:3
				},{
					xtype: 'textareafield',
					itemId: 'auditScope',
					name: 'auditScope',
					fieldLabel: '审核范围',
					labelAlign : 'right',
    				labelWidth:117,
    				width:'97%',
    		        height: 80,
    		        cols: 115,
    		        colspan:3
				},{
    				xtype: 'textareafield',
    				itemId:'memo',
    		        name: 'memo',
    		        fieldLabel: '备注',
    				labelAlign : 'right',
    				labelWidth:117,
    				width:'97%',
    		        height: 80,
    		        cols: 115,
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
    
	submitForm: function (){
		var me = this;
		var form = me.up('form');
		
		if (form.isValid()){
			values = form.getValues();
			var JSONobj = [];
		    JSONobj.push(JSON.stringify(values));
   			form.submit({
   	            waitTitle: '提示',
   	            url : 'flowLink' + (me.isAdd?'add.action':'edit.action'),
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