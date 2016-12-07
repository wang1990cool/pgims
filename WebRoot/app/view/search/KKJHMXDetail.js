Ext.define('App.view.search.KKJHMXDetail',{
	extend:'Ext.form.Panel',
	alias : 'widget.kkjhmxDetail',
	xtype : 'form',
	itemId: 'kkjhmxDetail',
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
						xtype:'textfield',
						itemId:'ksz',
						name:'ksz',
						fieldLabel:'开始周'
					},{
						xtype:'textfield',
						itemId:'jsz',
						name:'jsz',
						fieldLabel:'结束周'
					},{
				  		xtype: 'textfield',
						itemId: 'qzz',
						name: 'qzz',
						fieldLabel: '起至周',
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
					itemId:'bzFieldset',
					border:'0 0 0 0',
					title:'备注:',
					collapsible: false,
					width:710,
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
    			textfields[i].setReadOnly(true);
    			var style = "background:none; border:0px";
    			textfields[i].setFieldStyle(style);
    		}
    		me.down('#bzFieldset').setBorder('1 1 1 1');
    },
    
	 loadForm: function(rec){
    	var me = this;
    	rec.data.kkxq
        me.loadRecord(rec);
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