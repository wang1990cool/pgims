Ext.define('App.view.pygrjh.PYGRJHKCEdit',{
	extend:'Ext.form.Panel',
	alias : 'widget.pygrjhkcEdit',
	xtype : 'form',
	itemId: 'pygrjhkcEdit',
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
			padding:'5 5 5 5',
			defaults:{
				xtype:'textfield',
				readOnlyCls:'x-form-item-label',
				autoHeight:true,
				labelAlign:'right',
				width:280,
	        	labelWidth:100,
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
						xtype:'textfield',
						itemId:'kkxq',
						name:'kkxq',
						fieldLabel:'开课学期',
					    allowBlank: false,
					    margin:'3 0 3 0',
						blankText: '必填',
						regex:/^[1-5]$/
					},{
				  		xtype: 'textfield',
						itemId: 'xh',
						name: 'xh',
						fieldLabel: '学号'
//						,
//						hidden: true
				  },{
						xtype: 'textfield',
						itemId: 'bbh',
						name: 'bbh',
						fieldLabel: '版本号',
						hidden: true
					},{
						xtype: 'textfield',
						itemId: 'pyfah',
						name: 'pyfah',
						fieldLabel: '培养方案号',
						hidden: true
					},{
						xtype: 'textfield',
						itemId: 'nj',
						name: 'nj',
						fieldLabel: '年级',
						hidden: true
					},{
						xtype: 'textfield',
						itemId: 'zydm',
						name: 'zydm',
						fieldLabel: '专业代码',
						hidden: true
					},{
						xtype: 'textfield',
						itemId: 'kch',
						name: 'kch',
						hidden:true,
						fieldLabel: '课程号',
						allowBlank: false,
						blankText: '必填'
					},{
						xtype: 'textfield',
						itemId: 'kcmc',
						name: 'kcmc',
						fieldLabel: '课程名称',
						allowBlank: false,
						blankText: '必填'
					},{
					xtype:'textfield',
					itemId:'kclbm',
					name:'kclbm',
					fieldLabel:'课程类别码',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'kclb',
					name:'kclb',
					fieldLabel:'课程类别'
				},{
					xtype:'textfield',
					itemId:'kcxzm',
					name:'kcxzm',
					fieldLabel:'课程性质码',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'kcxz',
					name:'kcxz',
					fieldLabel:'课程性质'
				},{
					xtype:'textfield',
					itemId:'kcsxm',
					name:'kcsxm',
					fieldLabel:'课程属性码',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'kcsx',
					name:'kcsx',
					fieldLabel:'课程属性'
				},{
					xtype:'textfield',
					itemId:'ksxsm',
					name:'ksxsm',
					fieldLabel:'考试形式码',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'ksxs',
					name:'ksxs',
					fieldLabel:'考试形式'
				},{
						xtype: 'textfield',
						itemId: 'xslxm',
						name: 'xslxm',
						fieldLabel: '学时类型码',
						allowBlank: false,
						blankText: '必填'
					},{
						xtype: 'textfield',
						itemId: 'xslx',
						name: 'xslx',
						fieldLabel: '学时类型',
						allowBlank: false,
						blankText: '必填'
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
						itemId: 'sfyx',
						name: 'sfyx',
						fieldLabel: '是否有效',
						allowBlank: true
				    }]
				 }],
		 buttons: [{
		 		 text: '确定',
            	iconCls:'ok_16',
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
    			if(textfields[i].itemId == 'kkxq')
    				continue;
    			textfields[i].setReadOnly(true);
    			var style = "background:none; border:0px";
    			textfields[i].setFieldStyle(style);
    		}
    },
    
	 loadForm: function(rec){
    	var me = this;
        me.loadRecord(rec);
    },
    
    submit:function(){
    	var me = this;
    	var pygrjhkcEdit = me.up('#pygrjhkcEdit');
    	var form = me.up('form');
    	var values = form.getValues(); 
    	if (form.isValid()){
		    	// 获得grjhkcList
		    	var addGrjhkcForms = Ext.ComponentQuery.query('#addGrjhkcForm');
				var addGrjhkcForm = addGrjhkcForms[addGrjhkcForms.length - 1];
				var list = addGrjhkcForm.down('#grjhkcList');
				var store = list.getStore();
				
				var records = list.getSelectionModel().getSelection();// 获得选中行的数据
				var rowid = store.indexOf(records[0]) //获得选中行的行号
				
				// 生成的新的记录
				var jsonObject = JSON.parse(Ext.encode(values))
				var grjhkcJson = {}
				for(var item in jsonObject){
					var itemId = '#' + item;
					 grjhkcJson[item] = pygrjhkcEdit.down(itemId).getValue();
				 }
				store.remove(records); // 删除选中行
				store.insert(rowid,grjhkcJson) // 重新插入新的record
				
		//		var kkxq = store.getAt(rowid).get('kkxq')
		//		setKkxq(kkxqValue)
		//		store.load();
				me.up('window').close();
    	}else
           Ext.MessageBox.show({
      			title: '提示',
      			msg: '请完整填写信息！',
      			buttons: Ext.MessageBox.OK,
     			icon: Ext.MessageBox.WARNING
           });
    }
//    ,
    
//   submit: function (){
//		var me = this;
//		var form = me.up('form');		
//		if (form.isValid()){
//			values = form.getValues();
//			var JSONobj = [];
//		    JSONobj.push(JSON.stringify(values));
//		    Ext.Ajax.request({
//				url : 'grjhkcEdit.action',
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
//				           	  Ext.StoreMgr.lookup('PYGRJHKCStore').load()
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