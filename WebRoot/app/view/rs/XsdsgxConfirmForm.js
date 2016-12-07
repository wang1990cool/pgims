Ext.define('App.view.rs.XsdsgxConfirmForm',{
	extend:'Ext.form.Panel',
	alias:'widget.xsdsgxConfirmForm',
	
	initComponent:function(){
		var me = this;
		Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	            autoHeight:true,
	            collapsible: false,
	            padding:'5 5 10 5',
	            margin:'10 10 10 10',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:250,
	        		labelWidth:80,
	        		padding:'5 0 0 0',
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
				title:'学生信息',
				items:[{
					xtype : 'textfield',
					itemId : 'xsxm',
					name : 'xsxm',
					fieldLabel : '学生姓名',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},{
					xtype : 'textfield',
					itemId : 'xh',
					name : 'xh',
					fieldLabel : '学号',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},{
					xtype : 'textfield',
					itemId : 'nj',
					name : 'nj',
					fieldLabel : '年级',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},{
					xtype : 'textfield',
					itemId : 'fymc',
					name : 'fymc',
					fieldLabel : '所在学院',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},{
					xtype : 'textfield',
					itemId : 'zymc',
					name : 'zymc',
					fieldLabel : '所在专业',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},{
					xtype : 'textfield',
					itemId : 'xwlb',
					name : 'xwlb',
					fieldLabel : '学位类别',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},{
					xtype : 'textfield',
					itemId : 'jylb',
					name : 'jylb',
					fieldLabel : '教育类别',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},{
					xtype : 'textfield',
					itemId : 'pycc',
					name : 'pycc',
					fieldLabel : '培养层次',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},{
					xtype : 'textfield',
					itemId : 'xslx',
					name : 'xslx',
					fieldLabel : '学生类型',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				}]
			},{
	            xtype: 'fieldset',
	            autoHeight:true,
	            collapsible: false,
	            padding:'5 5 10 5',
	            margin:'0 10 10 10',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:250,
	        		labelWidth:80,
	        		padding:'5 0 0 0',
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
				title:'导师信息',
				items:[{
					xtype : 'textfield',
					itemId : 'xm',
					name : 'xm',
					fieldLabel : '导师姓名',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},{
					xtype : 'textfield',
					itemId : 'gh',
					name : 'gh',
					fieldLabel : '导师工号',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},/*{
					xtype : 'textfield',
					itemId : 'xb',
					name : 'xb',
					fieldLabel : '性别',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},{
					xtype : 'textfield',
					itemId : 'mz',
					name : 'mz',
					fieldLabel : '民族',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},*/{
					xtype : 'textfield',
					itemId : 'zzmm',
					name : 'zzmm',
					fieldLabel : '政治面貌',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},{
					xtype : 'textfield',
					itemId : 'gzdw',
					name : 'gzdw',
					fieldLabel : '工作单位',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},{
					xtype : 'textfield',
					itemId : 'szdw',
					name : 'szdw',
					fieldLabel : '所在部门',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},{
					xtype : 'textfield',
					itemId : 'zc',
					name : 'zc',
					fieldLabel : '职称',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},{
					xtype : 'textfield',
					itemId : 'dslb',
					name : 'dslb',
					fieldLabel : '导师类别',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},{
					xtype : 'textfield',
					itemId : 'jsly',
					name : 'jsly',
					fieldLabel : '教师来源',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				},{
					xtype : 'textfield',
					itemId : 'dszt',
					name : 'dszt',
					fieldLabel : '导师状态',
					readOnly: true,
					fieldStyle: "background:none; border : 0px;"
				}]
			}]
		});
		me.callParent(arguments);//通过它可以执行父类的Ext.form.Panel方法，传的argument参数是所有js函数都存在的一个变量，
                                //其中保存了当前函数的所有参数
	},
	
	
	
	loadForm : function(rec){
		var me = this;
		me.loadRecord(rec);
	},
	
	submit: function (){
		var me = this;	
		if (me.form.isValid()){
		    values = me.form.getValues();
		    
			var JSONobj = [];
		    JSONobj.push(JSON.stringify(values));
		    
		    Ext.Ajax.request({
   	            waitTitle: '提示',
   	            url: "xsDsGxConfirm.action",
   	            actionMethod: 'post',
   	            params:{datas:JSONobj},
   	            waitMsg: '正在保存数据，请稍候...',
   	            success: function (response, opts) {
   	            	var result = Ext.decode(response.responseText);
					var success = result.result.success;
					if (success) {
		                Ext.Msg.show({title:"提示",msg:'数据保存成功！',
		                    fn:function(){
		                    	me.up('window').close();
								me.fatherWin.close();
								Ext.StoreMgr.lookup('XsdsgxXsJcxxStore').reload();
		                    },buttons: Ext.Msg.OK, icon: Ext.Msg.INFO});
    	 			}else{
        	 			Ext.MessageBox.show({
               			title: '提示',
               			msg: '数据保存失败program！' + action.result.msg,
               			buttons: Ext.MessageBox.OK,
              			icon: Ext.MessageBox.ERROR
                    	});	
    	 			} 
				},
             failure: function (form, action) {
             	if(action.result != undefined && action.result.msg != null)
             		Ext.Msg.show({title:"提示",msg:action.result.msg,buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
             	else{ 
                     Ext.Msg.show({title:"提示",msg:'数据保存失败remote！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
             	}
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
});