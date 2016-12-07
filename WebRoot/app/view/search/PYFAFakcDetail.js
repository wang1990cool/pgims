Ext.define('App.view.search.PYFAFakcDetail',{
	extend:'Ext.form.Panel',
	alias : 'widget.pyfaFakcDetail',
	xtype : 'form',
	itemId: 'pyfaFakcDetail',
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
				readOnly:true,
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
						xtype: 'textfield',
						itemId: 'bbh',
						name: 'bbh',
						fieldLabel: '版本号'
					},{
						xtype: 'textfield',
						itemId: 'pyfah',
						name: 'pyfah',
						fieldLabel: '培养方案号'
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
						itemId: 'dwmc',
						name: 'dwmc',
						fieldLabel: '开课单位',
						allowBlank: true
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
						xtype:'textfield',
						itemId:'kkxq',
						name:'kkxq',
						fieldLabel:'开课学期',
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
				    }]
				 },{
					xtype:'fieldset',
					autoHeight:true,
					title:'备注:',
					collapsible: false,
					width:720,
					margin:'5 10 10 10',
					padding:'5 5 10 5',
					layout:'fit',
					items:[{
						xtype:'textareafield',
						readOnly:true,
						itemId:'bz',
						name:'bz'
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
//    				var style = "background:none; border:0px;font-weight:bold";
    			textfields[i].setFieldStyle(style);
    		}
    		var textareafields = me.query('textareafield');
			for(var i in textareafields){
				textareafields[i].setReadOnly(true);
				var style = "background:none";
				textareafields[i].setFieldStyle(style);
			}
    },
    
	 loadForm: function(rec){
    	var me = this;
        me.loadRecord(rec);
    }
	}
);