Ext.define('App.view.yx.YxSjkzForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.yxSjkzForm',
   
    xtype: 'form',
    frame:true,
    autoWidth: true,
    bodyStyle:'padding:10 10 10 10',
    defaultType: 'textfield',
    defaults: {
    	anchor: '100%',
    	readOnlyCls: 'x-item-disabled',
    	labelAlign : "right"
	},
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 85,
        width: 160
    },
 
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
			items: [{
            	xtype: 'hiddenfield',
            	itemId: 'id',
            	name: 'id'
			},{
            	xtype: 'textfield',
            	itemId: 'nj',
            	name: 'nj',
            	fieldLabel: '<font color="red">*</font>年级',
            	allowBlank: false,
                blankText: '必填！'
//                readOnly: true
			},{
				xtype : 'datefield',
				itemId : 'kssj',
				name : 'kssj',
				fieldLabel : '<font color="red">*</font>开始时间',
				format: 'Y-m-d',
				allowBlank: false,
				 blankText: '必填！'
			},{
				xtype : 'datefield',
				itemId : 'jssj',
				name : 'jssj',
				fieldLabel : '<font color="red">*</font>结束时间',
				format: 'Y-m-d',
				allowBlank: false,
				 blankText: '必填！'
			},{
            	xtype: 'textfield',
            	itemId: 'bz',
            	name: 'bz',
            	fieldLabel: '备&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp注'
			}],
	        buttons : [{
				itemId : 'saveBtn',
				text : '保存',
				handler : function() {
					this.up('form').submit();
				}
			}, {
				itemId : 'cancelBtn',
				text : '取消',
				handler : function() {
					this.up('window').close();
				}
			}]
        });
       me.callParent(arguments);
    },
    
    loadForm : function(rec){
		var me = this;
		me.loadRecord(rec);
	},
	
	edit: function(rec){
		var me = this;
		var form = me.up('window').down('form');
		var values = rec.data;
		
		for(var fieldName in values){
     		var field = me.form.findField(fieldName=='id'?'idCode':fieldName);
     		if(field != null){	
     			if(field.xtype == 'datefield'){
     				if(values[field.name] != null)
     					if(values[field.name].indexOf('-') == -1)
	     					{
	     						var year = values[field.name].substring(0,4);
	     						var month = values[field.name].substring(4,6);
	     						var day = values[field.name].substring(6,8);
	     						values[field.name] = year+ "-" +month+ "-" +day;
	     					}
 				}
 			}
		}
	},
	
	 submit: function (){
		var me = this;
		
		if (me.form.isValid()){
			values = me.form.getValues();
			if(values.kssj != null){ values.kssj = values.kssj.replace(/\-/g, ""); };
			if(values.jssj != null){ values.jssj = values.jssj.replace(/\-/g, ""); }
			var JSONobj = [];
		    JSONobj.push(JSON.stringify(values));
		    Ext.Ajax.request({
				url : "yxSjkzEdit.action",
				waitTitle : '提示',
				actionMethods : 'post',
				params:{datas:JSONobj},
				waitMsg : '正在提交数据请稍候...',
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
				        	  Ext.StoreMgr.lookup('YxSjkzbStore').reload();
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
				failure : function(form, action) {
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