Ext.define('App.view.pyfa.FAKCEdit',{
	extend:'Ext.form.Panel',
	alias : 'widget.fakcEdit',
	xtype : 'form',
	itemId: 'fakcEdit',
	initComponent: function(){
		var me = this;
		Ext.applyIf(me,{
		items:[{
			xtype:'fieldset',
			border:'0 0 0 0',
			width:720,
			autoHeight:true,
			autoWidth:false,
			collapsible:false,
			readOnly:true,
			margin:'10 10 0 10',
			padding:'5 5 10 5',
			defaults:{
				xtype:'textfield',
				readOnlyCls:'x-form-item-label',
				autoHeight:true,
				labelAlign:'right',
				width:280,
	        	labelWidth:100,
				padding:'5 0 0 0',
				size:20
			},
			layout:{
				type:'table',
				columns:2,
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
						xtype: 'textfield',
						itemId: 'bbh',
						name: 'bbh',
						fieldLabel: '版本号',
						hidden:true
					},{
						xtype: 'textfield',
						itemId: 'pyfah',
						name: 'pyfah',
						fieldLabel: '培养方案号',
						hidden:true
					},{
						xtype: 'textfield',
						itemId: 'kch',
						name: 'kch',
						fieldLabel: '课程号'
					},{
						xtype: 'textfield',
						itemId: 'kcmc',
						name: 'kcmc',
						fieldLabel: '课程名称'
					},{
						xtype: 'textfield',
						itemId: 'dwmc',
						name: 'dwmc',
						fieldLabel: '开课单位',
						allowBlank: true
					},{
						xtype: 'textfield',
						itemId: 'xslx',
						name: 'xslx',
						fieldLabel: '学时类型'
					},{
								xtype: 'textfield',
								itemId: 'kcxf',
								name: 'kcxf',
								fieldLabel: '课程学分',
								allowBlank: true
							},{
								xtype: 'textfield',
								itemId: 'zxs',
								name: 'zxs',
								fieldLabel: '总学时',
								allowBlank: true
							},{
								xtype: 'textfield',
								itemId: 'llxs',
								name: 'llxs',
								fieldLabel: '理论学时',
								allowBlank: true
							},{
								xtype: 'textfield',
								itemId: 'syxs',
								name: 'syxs',
								fieldLabel: '实验学时',
								allowBlank: true
						    },{
								xtype: 'textfield',
								itemId: 'ggkbzm',
								name: 'ggkbzm',
								fieldLabel: '公共课编制码',
								hidden:true
						    },{
								xtype: 'textfield',
								itemId: 'ggkbz',
								name: 'ggkbz',
								fieldLabel: '公共课'
						    },{
						xtype: 'textfield',
						itemId: 'kkdwh',
						name: 'kkdwh',
						fieldLabel: '开课单位号',
						allowBlank: true,
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
							   		var form = me.up('#fakcEdit')
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
									   		var form = me.up('#fakcEdit')
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
									   		var form = me.up('#fakcEdit')
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
									   		var form = me.up('#fakcEdit')
									    	form.down('#ksxsm').setValue(record[0].data.ksxsm);
									   	}
									   }
							},{
								xtype : 'combo',
							    editable : false,
							    queryMode : 'local',
							    displayField : 'mc',
							    itemId:'kkxq',
								name:'kkxq',
								fieldLabel:'开课学期<font color="red">*</font>',
							    allowBlank: false,
								blankText: '必填',
							    store : Ext.create('Ext.data.Store',{
							   	autoLoad : true,
							   	fields : [{name : 'bm'},
							   	          {name : "mc"}],
							   	proxy : {
							   		type : 'ajax',
							   		url : 'zdGetZD.action',
							   		actionMethods : 'post',
							   		reader : {
							   			root : 'result.list',
							   			totalProperty : 'totalProperty'
							   		},
							   		extraParams: {zdName:'ZdXqb'},
							   		simpleSortMode : true
							   	},
							   	sorters : [{
							   		property : 'bm',
							   		direction : 'ASC'
							   	}]
							   })
							}
						    ,{xtype:'label'}]
				 },{
					xtype:'fieldset',
					autoHeight:true,
					title:'备注:',
					collapsible: false,
					width:720,
					margin:'5 10 10 10',
					padding:'5 5 10 5',
					items:[{
						xtype:'textareafield',
						width:710,
						itemId:'bz',
						name:'bz',
						readOnlyCls:'x-item-disabled'
					}]
		}],
		 buttons: [{
            	text: '保存',
            	iconCls:'save_16',
                handler: me.submit
            },{
        	    text: '返回',
        	    iconCls:'return_16',
                handler: function () {
                    me.up('window').close();
                }
            }]
	});
	     me.callParent(arguments);
	},
	
    setViewForm :function(){
    	var me = this;
    	var textfields =  me.query('textfield');
    		for(var i in textfields){
    				if(textfields[i].itemId == 'kclb' || textfields[i].itemId == 'kcxz'
    					|| textfields[i].itemId == 'ksxs' || textfields[i].itemId == 'kcsx'|| 
    					textfields[i].itemId == 'kkxq')
    							continue;
					textfields[i].setReadOnly(true);
					var style = "background:none; border:0px";
					textfields[i].setFieldStyle(style);
    		}
    		
//    	var textareafields = me.query('textareafield');
//		for(var i in textareafields){
//			textareafields[i].setReadOnly(true);
//			var style = "background:none,border:0px;";
//			textareafields[i].setFieldStyle(style);
//		}
    },
    
	 loadForm: function(rec){
    	var me = this;
        me.loadRecord(rec);
    },
    
    submit:function(){
    	var me = this;
    	var fakcEdit = me.up('#fakcEdit');
    	var form = me.up('form');
    	var values = form.getValues(); 
    	var flag = values.kclb.length > 0 && values.kcxz.length > 0 && 
    						values.kcsx.length > 0 && values.ksxs.length >0 && values.kkxq.length> 0
    	if(!flag){
   			 Ext.MessageBox.show({
      			title: '提示',
      			msg: '请完整填写信息！',
      			buttons: Ext.MessageBox.OK,
     			icon: Ext.MessageBox.WARNING
           });
    	}else{
    			var win = me.up('window');
    			var list = win.fakcList;
				//获得开课计划明细的store
//				var addCourseForms = Ext.ComponentQuery.query('#addCourseForm');
//				var addCourseForm = addCourseForms[addCourseForms.length - 1];
//				var list = addCourseForm.down('#fakcList');
				var store = list.getStore();
				
				var records = list.getSelectionModel().getSelection();// 获得选中行的数据
				var rowid = store.indexOf(records[0]) //获得选中行的行号
				// 生成的新的记录
				var jsonObject = JSON.parse(Ext.encode(values))
				var fakcJson = {}
				for(var item in jsonObject){
					var itemId = '#' + item;
					 fakcJson[item] = fakcEdit.down(itemId).getValue();
				 }
				store.remove(records); // 删除选中行
				store.insert(rowid,fakcJson) // 重新插入新的record
				
				me.up('window').close();
    	}
    }
    
//    submit: function (){
//		var me = this;
//		var form = me.up('form');		
//		if (form.isValid()){
//			values = form.getValues();
//			var JSONobj = [];
//		    JSONobj.push(JSON.stringify(values));
//		    Ext.Ajax.request({
//				url : 'fakcEdit.action',
//				waitTitle : '提示',
//				method : 'post',
//				params:{datas:JSONobj},
//				waitMsg : '正在提交数据请稍候...',
//				success : function(response, opts) {
//					var result = Ext.decode(response.responseText);
//					var success = result.result.success;
//					if(success){
//						var msg = "保存成功！";
//						Ext.MessageBox.show({
//				           title: '提示',
//				           msg: msg,
//				           buttons: Ext.MessageBox.OK,
//				           icon: Ext.MessageBox.INFO,
//				           fn: function(id, msg){
//				           	  var addCourseForm = Ext.getCmp('addCourseForm');
//				           	  var fakcList = addCourseForm.down('#fakcList');
//				           	  fakcList.getStore().load();
//			        		  me.up('window').close();
//						    }  
//				        });
//					}else{
//						var errmsg = "保存失败！";
//						Ext.MessageBox.show({
//				           title: '错误',
//				           msg: errmsg,
//				           buttons: Ext.MessageBox.OK,
//				           icon: Ext.MessageBox.ERROR,
//				           fn: function(id, msg){  
//				        	   form.getForm().reset();
//						    }  
//				        });
//					}
//				},
//				failure : function(form, action) {
//					var errmsg = "保存失败！";
//					 Ext.MessageBox.show({
//			           title: '错误',
//			           msg: errmsg,
//			           buttons: Ext.MessageBox.OK,
//			           icon: Ext.MessageBox.ERROR,
//			           fn: function(id, msg){  
//			        	   form.getForm().reset();
//					    }  
//			       });
//				}
//			});
//		}else
//           Ext.MessageBox.show({
//      			title: '提示',
//      			msg: '请完整填写信息！',
//      			buttons: Ext.MessageBox.OK,
//     			icon: Ext.MessageBox.WARNING
//           });
//	}
	}
);