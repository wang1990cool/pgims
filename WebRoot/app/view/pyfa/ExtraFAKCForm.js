Ext.onReady(function(){
var JSONfakc = {};
var JSONkck = {};
Ext.define('App.view.pyfa.ExtraFAKCForm',{
	extend:'Ext.form.Panel',
	alias : 'widget.extraFAKCForm',
	xtype : 'form',
	itemId: 'extraFAKCForm',
	initComponent:function(){
		var me = this;
		Ext.applyIf(me,{
			items:[{
				xtype:'fieldset',
				border:'0 0 0 0',
				width:320,
				autoHeight:true,
				autoWidth:false,
				collapsible:false,
				readOnly:true,
				margin:'10 10 0 10',
				padding:'5 5 10 5',
				defaults:{
					xtype:'textfield',
					readOnlyCls:'x-item-disabled',
					autoHeight:true,
					labelAlign:'right',
					width:280,
		        	labelWidth:100,
					padding:'5 0 0 0',
					size:20
				},
				layout:{
					type:'table',
					columns:1,
					tableAttrs:{ 
							style:"width:100%;text-align:center;border:0px solid #B3D0EE;border-collapse:collapse;empty-cells:show;", 
							align:'center'
					},
					 tdAttrs:{
							align:'left',
							style:"border: 1px solid rgb(179, 208, 238);"
					}
				},
				items:[{
					xtype:'textfield',
					itemId:'id',
					name:'id',
					fieldLabel:'ID',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'kclbm',
					name:'kclbm',
					fieldLabel:'课程类别码',
					hidden:true
				},{
					xtype : 'combo',
				    itemId : 'kclb',
				    name : 'kclb',
				    fieldLabel : '课程类别<font color="red">*</font>',
				    allowBlank: false,
					blankText: '必填',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'kclb',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'kclbm'},
				   	          {name : "kclb"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams: {zdName:'ZdKclbm'},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
				   		property : 'kclbm',
				   		direction : 'ASC'
				   	}]
				   }),
					   listeners:{
					   	select:function(combo, record, index){
					   		var me = this;
					   		var form = me.up('#extraFAKCForm')
					    	form.down('#kclbm').setValue(record[0].data.kclbm);
					   	}
					   }
				},{
					xtype:'textfield',
					itemId:'kcxzm',
					name:'kcxzm',
					fieldLabel:'课程性质码',
					hidden:true
				},{
					xtype : 'combo',
				    itemId : 'kcxz',
				    name : 'kcxz',
				    fieldLabel : '课程性质<font color="red">*</font>',
				    allowBlank: false,
					blankText: '必填',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'kcxz',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'kcxzm'},
				   	          {name : "kcxz"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams: {zdName:'ZdKcxzm'},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
				   		property : 'kcxzm',
				   		direction : 'ASC'
				   	}]
				   }),
					   listeners:{
					   	select:function(combo, record, index){
					   		var me = this;
					   		var form = me.up('#extraFAKCForm')
					    	form.down('#kcxzm').setValue(record[0].data.kcxzm);
					   	}
					   }
				},{
							xtype:'textfield',
							itemId:'kcsxm',
							name:'kcsxm',
							fieldLabel:'课程属性码',
							hidden:true
					},{
					xtype : 'combo',
				    itemId : 'kcsx',
				    name : 'kcsx',
				    fieldLabel : '课程属性<font color="red">*</font>',
				    allowBlank: false,
					blankText: '必填',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'kcsx',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'kcsxm'},
				   	          {name : "kcsx"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams: {zdName:'ZdKcsxm'},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
				   		property : 'kcsxm',
				   		direction : 'ASC'
				   	}]
				   }),
					   listeners:{
					   	select:function(combo, record, index){
					   		var me = this;
					   		var form = me.up('#extraFAKCForm')
					    	form.down('#kcsxm').setValue(record[0].data.kcsxm);
					   	}
					   }
					},{
							xtype:'textfield',
							itemId:'ksxsm',
							name:'ksxsm',
							fieldLabel:'考试形式码',
							hidden:true
					},{
							xtype:'textfield',
							itemId:'ztm',
							name:'ztm',
							fieldLabel:'状态码',
							value:'1',
							hidden:true
					},{
							xtype:'textfield',
							itemId:'zt',
							name:'zt',
							fieldLabel:'状态',
							value:'草稿状态',
							hidden:true
					},{
					xtype : 'combo',
				    itemId : 'ksxs',
				    name : 'ksxs',
				    fieldLabel : '考试形式<font color="red">*</font>',
				    allowBlank: false,
					blankText: '必填',
				    editable : false,
				    queryMode : 'local',
				    displayField : 'ksxs',
				    store : Ext.create('Ext.data.Store',{
				   	autoLoad : true,
				   	fields : [{name : 'ksxsm'},
				   	          {name : "ksxs"}],
				   	proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			root : 'result.list',
				   			totalProperty : 'totalProperty'
				   		},
				   		extraParams: {zdName:'ZdKsxsm'},
				   		simpleSortMode : true
				   	},
				   	sorters : [{
				   		property : 'ksxsm',
				   		direction : 'ASC'
				   	}]
				   }),
					   listeners:{
					   	select:function(combo, record, index){
					   		var me = this;
					   		var form = me.up('#extraFAKCForm')
					    	form.down('#ksxsm').setValue(record[0].data.ksxsm);
					   	}
					   }
				},{
							xtype:'textfield',
							itemId:'kkxq',
							name:'kkxq',
							fieldLabel:'开课学期<font color="red">*</font>',
							regex:/^[1-5,]$/,
						    allowBlank: false,
							blankText: '必填'
					}]
			}],
			 buttons: [{
            	text: '保存',
            	iconCls:'save_16',
                handler: me.submit
            }, {
        	    text: '返回',
        	    iconCls:'return_16',
                handler: function () {
                    me.up('window').close();
                }
            }]
		});
		 me.callParent(arguments);
	},
	
	loadRecs:function(recs){
    	 for(var item in recs){
    	 	if(item == 'id')
    	 		continue;
    	 	JSONfakc[item] = recs[item];
    	 }
//    	 alert(Ext.encode(JSONfakc));
	},
	
     jsonParse :function(record){
         var jsonObject =  JSON.parse(Ext.encode(record));
            for(var item in jsonObject){
					if(jsonObject[item] == null){
				       jsonObject[item] = ""; //将null值转为空的字符串
				     }
			  }
			return Ext.encode(jsonObject);
     },
      
	 submit: function (){
		var me = this;
		var form = me.up('form');	
		var extraFAKCForm = me.up('#extraFAKCForm');
		if (form.isValid()){
			values = form.getValues();
			for(var item in values){
				JSONfakc[item] = values[item];
			}
			var JSONfackParse = extraFAKCForm.jsonParse(JSONfakc);
		    Ext.Ajax.request({
				url : 'fakcAdd.action',
				waitTitle : '提示',
				method : 'post',
				params:{datas:JSONfackParse},
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
				           	  
				           	  var addCourseForm = Ext.getCmp('addCourseForm');
				           	  var fakcList = addCourseForm.down('#fakcList');
				           	  fakcList.getStore().load();
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
	
//	submit: function (){
//		var me = this;
//		var form = me.up('form');		
//		if (form.isValid()){
//			values = form.getValues();
//			for(var item in values){
//				JSONfakc[item] = values[item];
//			}
//			Ext.StoreMgr.lookup('FAKCStore').insert(0,JSONfakc);
//			Ext.StoreMgr.lookup('KCKStore').load();
//			JSONfakc = JSONkck;
//		    me.up('window').close();
//		}else
//           Ext.MessageBox.show({
//      			title: '提示',
//      			msg: '请完整填写信息！',
//      			buttons: Ext.MessageBox.OK,
//     			icon: Ext.MessageBox.WARNING
//           });
//	}
})
});