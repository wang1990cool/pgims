Ext.define('App.view.cjdy.CjmxDetail',{
	extend:'Ext.form.Panel',
	alias : 'widget.cjmxDetail',
	xtype : 'form',
	itemId: 'cjmxDetail',
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
					itemId:'xn',
					name:'xn',
					fieldLabel:'学年'
				},{
					xtype:'textfield',
					itemId:'xq',
					name:'xq',
					fieldLabel:'学期'
				},{
					xtype:'textfield',
					itemId:'zjjs',
					name:'zjjs',
					fieldLabel:'主讲教师'
				},{
						xtype: 'textfield',
						itemId: 'kcxf',
						name: 'kcxf',
						fieldLabel: '课程学分',
						allowBlank: true
					},{
					xtype:'textfield',
					itemId:'ksxzm',
					name:'ksxzm',
					fieldLabel:'考试性质码'
				},{
					xtype:'textfield',
					itemId:'ksxz',
					name:'ksxz',
					fieldLabel:'考试性质'
				},{
					xtype:'textfield',
					itemId:'ksfsm',
					name:'ksfsm',
					fieldLabel:'考试方式码'
				},{
					xtype:'textfield',
					itemId:'ksfs',
					name:'ksfs',
					fieldLabel:'考试方式'
				},{
					xtype:'textfield',
					itemId:'cjlxm',
					name:'cjlxm',
					fieldLabel:'成绩类型码'
				},{
					xtype:'textfield',
					itemId:'cjlx',
					name:'cjlx',
					fieldLabel:'成绩类型'
				},{
					xtype:'textfield',
					itemId:'kccj',
					name:'kccj',
					fieldLabel:'课程成绩'
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
    }
    
//	 loadForm: function(rec){
//    	var me = this;
//    	rec.data.kkxq
//        me.loadRecord(rec);
//    }

    

	}
);