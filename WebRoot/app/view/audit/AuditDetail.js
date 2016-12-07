Ext.define('App.view.audit.AuditDetail',{
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
					fieldLabel: '操作人'
				},{
					xtype: 'textfield',
					itemId: 'userCname',
					name: 'userCname',
					fieldLabel: '用户姓名'
				},{
					xtype: 'textfield',
					itemId: 'proNo',
					name: 'proNo',
					fieldLabel: '项目码'
				},{
					xtype: 'textfield',
					itemId: 'flagCode',
					name: 'flagCode',
					fieldLabel: '状态码'
				},{
					xtype: 'textfield',
					itemId: 'flowCode',
					name: 'flowCode',
					fieldLabel: '流程码'
				},{
					xtype: 'textfield',
					itemId: 'auditDate',
					name: 'auditDate',
//					value: Ext.Date.format(new Date(), 'Y-m-d H:i:s'),
					fieldLabel: '审核日期'
				},{
    				xtype: 'textareafield',
    				itemId:'auditOpinion',
    		        name: 'auditOpinion',
    		        fieldLabel: '审核意见',
    				labelAlign : 'right',
    				labelWidth:117,
    		        height: 60,
    		        width:650,
    		        colspan:3
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
			textfields[i].setFieldStyle(me.readOnlyStyle);
		}
    },
    
	loadDetailForm : function(rec){
		var me = this;
		me.loadRecord(rec)	
	}
	
});