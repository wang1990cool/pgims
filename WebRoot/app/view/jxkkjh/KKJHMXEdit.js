Ext.define('App.view.jxkkjh.KKJHMXEdit',{
	extend:'Ext.form.Panel',
	alias : 'widget.kkjhmxEdit',
	xtype : 'form',
	itemId: 'kkjhmxEdit',
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
				  		itemId:'kkjhh',
				  		name:'kkjhh',
				  		fieldLabel:'开课计划号',
				  		hidden:true
				  },{
						xtype:'textfield',
						itemId:'ksz',
						name:'ksz',
						fieldLabel:'开始周',
					    margin:'3 0 3 0',
						regex:/^[1-9]\d{0,1}$/,
						listeners:{
							blur:function(){
								var jszValue = parseInt(me.down('#jsz').getValue());
								var kszValue = parseInt(this.getValue());
								if(isNaN(jszValue))
									jszValue = 1;
								if(isNaN(kszValue))
									kszValue = 1;
								if(kszValue > jszValue && me.down('#jsz').getValue().length != 0){
									Ext.MessageBox.alert('提示', '起始周不得大于结束周！');
									this.setValue('');
								}
							}
						}
					},{
						xtype:'textfield',
						itemId:'jsz',
						name:'jsz',
						fieldLabel:'结束周',
					    margin:'3 0 3 0',
						regex:/^[1-9]\d{0,1}$/,
						listeners:{
							blur:function(){
								var kszValue = parseInt(me.down('#ksz').getValue());
								var jszValue = parseInt(this.getValue());
								if(isNaN(jszValue))
									jszValue = 1;
								if(isNaN(kszValue))
									kszValue = 1;
								if(jszValue < kszValue && me.down('#ksz').getValue().length != 0){
									Ext.MessageBox.alert('提示', '结束周不得小于开始周！');
									this.setValue('');
								}
							}
						}
					},{
				  		xtype: 'textfield',
						itemId: 'qzz',
						name: 'qzz',
						fieldLabel: '起至周',
						hidden: true
				  },{
						xtype: 'textfield',
						itemId: 'jhrs',
						name: 'jhrs',
						fieldLabel: '计划人数',
						hidden: true
					},{
						xtype: 'textfield',
						itemId: 'ggkbzm',
						name: 'ggkbzm',
						fieldLabel: '公共课标志码',
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
				    margin:'3 0 3 0',
				    fieldLabel : '课程类别',
//				    allowBlank: false,
//					blankText: '必填',
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
					    	me.down('#kclbm').setValue(record[0].data.kclbm);
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
				     margin:'3 0 3 0',
				    fieldLabel : '课程性质',
//				    allowBlank: false,
//					blankText: '必填',
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
					    	me.down('#kcxzm').setValue(record[0].data.kcxzm);
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
				     margin:'3 0 3 0',
				    fieldLabel : '课程属性',
//				    allowBlank: false,
//					blankText: '必填',
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
					    	me.down('#kcsxm').setValue(record[0].data.kcsxm);
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
				     margin:'3 0 3 0',
				    fieldLabel : '考试形式',
//				    allowBlank: false,
//					blankText: '必填',
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
					    	me.down('#ksxsm').setValue(record[0].data.ksxsm);
					   	}
					   }
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
						xtype: 'textfield',
						itemId: 'kkdwh',
						name: 'kkdwh',
						fieldLabel: '开课单位号',
						hidden:true
				 },{
						xtype: 'textfield',
						itemId: 'kkdw',
						name: 'kkdw',
						fieldLabel: '开课单位'
				},{
						xtype: 'textfield',
						itemId: 'xslxm',
						name: 'xslxm',
						fieldLabel: '学时类型码',
						allowBlank: false,
						blankText: '必填',
						hidden:true
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
						itemId: 'mzxs',
						name: 'mzxs',
						fieldLabel: '每周学时',
						hidden: true
					},{
						xtype: 'textfield',
						itemId: 'sfyx',
						name: 'sfyx',
						fieldLabel: '是否有效',
						hidden: true
					},{
						xtype: 'textfield',
						itemId: 'ggkbz',
						name: 'ggkbz',
						fieldLabel: '公共课程'
					}]
				 },{
					xtype:'fieldset',
					autoHeight:true,
					hidden:true,
					itemId:'bzFieldset',
					border:'0 0 0 0',
					title:'备注:',
					collapsible: false,
					width:755,
					margin:'10 15 10 15',
					padding:'5 5 5 5',
					layout:'fit',
					items:[{
						xtype:'textareafield',
						itemId:'bz',
						name:'bz',
						readOnlyCls:'x-item-disabled'
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
    			if(textfields[i].itemId == 'ksz' || textfields[i].itemId == 'jsz')
    				continue;
    			if(textfields[i].itemId == 'kclb' && textfields[i].getValue().length == 0){
    				continue;
    			}else if(textfields[i].itemId == 'kcxz' && textfields[i].getValue().length == 0){
    				continue;
    			}else if(textfields[i].itemId == 'kcsx' && textfields[i].getValue().length == 0){
    				continue;
    			}else if(textfields[i].itemId == 'ksxs' && textfields[i].getValue().length == 0){
    				continue;
    			}
    			
    			textfields[i].setReadOnly(true);
    			var style = "background:none; border:0px";
    			textfields[i].setFieldStyle(style);
    		}
    },
    
	 loadForm: function(rec){
    	var me = this;
    	rec.data.kkxq
        me.loadRecord(rec);
    },
    
    submit:function(){
    	var me = this;
    	var kkjhmxEdit = me.up('#kkjhmxEdit');
    	var form = me.up('form');
    	var values = form.getValues(); 
    	var flag = values.kclb.length > 0 && values.kcxz.length > 0 && 
    						values.kcsx.length > 0 && values.ksxs.length >0 && values.ksz.length > 0 && values.jsz.length > 0
    	if(!flag){
   			 Ext.MessageBox.show({
      			title: '提示',
      			msg: '请完整填写信息！',
      			buttons: Ext.MessageBox.OK,
     			icon: Ext.MessageBox.WARNING
           });
    	}else{
				//获得开课计划明细的store
				var addKkjhmxForms = Ext.ComponentQuery.query('#addKkjhmxForm');
				var addKkjhmxForm = addKkjhmxForms[addKkjhmxForms.length - 1];
				var list = addKkjhmxForm.down('#kkjhmxList');
				var store = list.getStore();
				
				var records = list.getSelectionModel().getSelection();// 获得选中行的数据
				var rowid = store.indexOf(records[0]) //获得选中行的行号
				
				// 生成的新的记录
				var jsonObject = JSON.parse(Ext.encode(values))
				var kkjhmxJson = {}
				for(var item in jsonObject){
					var itemId = '#' + item;
					 kkjhmxJson[item] = kkjhmxEdit.down(itemId).getValue();
				 }
				kkjhmxJson['qzz'] = kkjhmxJson['ksz'] + ' ~ ' + kkjhmxJson['jsz'];
				store.remove(records); // 删除选中行
				store.insert(rowid,kkjhmxJson) // 重新插入新的record
				
		//		var kkxq = store.getAt(rowid).get('kkxq')
		//		setKkxq(kkxqValue)
		//		store.load();
				me.up('window').close();
    	}
           
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