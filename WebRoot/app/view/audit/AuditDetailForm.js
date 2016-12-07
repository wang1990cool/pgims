Ext.define('App.view.audit.AuditDetailForm',{
	extend: 'Ext.form.Panel',
	alias: 'widget.auditDetailForm',
	itemId:'auditDetailForm',
	required : '<span style="color:red;font-weight:bold" data-qtip="必填">*</span>',
    readOnlyStyle : 'background:none; border : 0px;font-weight:bold;',

	initComponent:function(){
		var me = this;
		
		Ext.applyIf(me,{
			 items: [Ext.create('App.view.main.TableFieldSet',{
			 	columns:2,
            	margin: '5 5 0 5',
				items: [{
					xtype: 'hiddenfield',
					itemId: 'id',
					name:　'id'
				},{
					xtype: 'textfield',
					itemId: 'userName',
					name: 'userName',
					fieldLabel: '操作人',
					readOnly:true
				},{
					xtype:'combo',
					itemId:'shcz',
					fieldLabel:'操作',
					beforeLabelTextTpl: me.required,
					allowBlank : false,
					displayField:'yj',
					valueField:'shcz',
					blankText : '必填！',
					store:Ext.create('Ext.data.Store',{
						    fields: ['shcz','yj'],
					    	data:[
					    		{'shcz':'agree','yj':'同意'},
					    		{'shcz':'callback','yj':'不同意'}
					    	]
					}),
					listeners:{
						select:function(combo, record, index){
							var auditOpinion = me.down('#auditOpinion')
							if(auditOpinion.getValue().length == 0)
								auditOpinion.setValue(record[0].data.yj);
						}
					}
				},{
					xtype: 'textfield',
					itemId: 'userCname',
					name: 'userCname',
					fieldLabel: '用户姓名',
					hidden:true,
					readOnly:true
				},{
					xtype: 'textfield',
					itemId: 'proNo',
					name: 'proNo',
					fieldLabel: '项目码',
					hidden:true
				},{
					xtype: 'textfield',
					itemId: 'flagCode',
					name: 'flagCode',
					fieldLabel: '状态码',
					hidden:true
				},{
					xtype: 'textfield',
					itemId: 'flowCode',
					name: 'flowCode',
					fieldLabel: '流程码',
					hidden:true
				},{
					xtype: 'textfield',
					itemId: 'auditDate',
					name: 'auditDate',
					value: Ext.Date.format(new Date(), 'Y-m-d H:i:s'),
					fieldLabel: '审核日期',
					hidden:true
				},{
    				xtype: 'textareafield',
    				itemId:'auditOpinion',
    		        name: 'auditOpinion',
    		        fieldLabel: '审核意见',
    		     	beforeLabelTextTpl: me.required,
    				labelAlign : 'right',
    				labelWidth:117,
    		        height: 60,
    		        width:650,
    		        colspan:3,
    		        allowBlank:false
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
			textfields[i].hidden  = false;
			textfields[i].setFieldStyle(me.readOnlyStyle);
		}
    },
    
    loadForm : function(rec){
		var me = this;
		var jsonObject = JSON.parse(Ext.encode(rec));
		for(var item in jsonObject){
			var itemId = '#' + item
			me.down(itemId).setValue(jsonObject[item]);
		}
	},
	
	loadDetailForm : function(rec){
		var me = this;
		me.loadRecord(rec)	
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
    }

});