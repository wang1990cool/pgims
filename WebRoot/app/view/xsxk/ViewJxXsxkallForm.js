Ext.define('App.view.xsxk.ViewJxXsxkallForm',{
	extend:'Ext.form.Panel',
	xtype : 'form',
	itemId: 'viewJxXsxkallForm',
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
            	itemId: 'xh',
            	name: 'xh',
            	fieldLabel: '学号',
            	 Visible:false

			},{
            	xtype: 'textfield',
            	itemId: 'xm',
            	name: 'xm',
            	fieldLabel: '学生姓名',
            	Visible:false
				},{
            	xtype: 'textfield',
            	itemId: 'kch',
            	name: 'kch',
            	fieldLabel: '课程号',
            	 Visible:false,
            	beforeLabelTextTpl: ''

			},{
            	xtype: 'textfield',
            	itemId: 'kcmc',
            	name: 'kcmc',
            	fieldLabel: '课程名称',
            	 Visible:false,
            	beforeLabelTextTpl: ''
			},{
            	xtype: 'textfield',
            	itemId: 'fymc',
            	name: 'fymc',
            	fieldLabel: '所在学院',
            	 Visible:false,
            	beforeLabelTextTpl: ''         
			},{
            	xtype: 'textfield',
            	itemId: 'zymc',
            	name: 'zymc',
            	fieldLabel: '专业名称',
            	 Visible:false,
            	beforeLabelTextTpl: ''         
			},{
            	xtype: 'textfield',
            	itemId: 'xslx',
            	name: 'xslx',
            	fieldLabel: '学生类型',
            	 Visible:false,
            	beforeLabelTextTpl: ''         
			},{
            	xtype: 'textfield',
            	itemId: 'kcxslx',
            	name: 'kcxslx',
            	fieldLabel: '学时类型',
            	 Visible:false,
            	beforeLabelTextTpl: ''         
			},{
            	xtype: 'textfield',
            	itemId: 'zxs',
            	name: 'zxs',
            	fieldLabel: '总学时',
            	 Visible:false,
            	beforeLabelTextTpl: ''         
			},{
            	xtype: 'textfield',
            	itemId: 'llxs',
            	name: 'llxs',
            	fieldLabel: '理论学时',
            	 Visible:false,
            	beforeLabelTextTpl: ''         
			},{
            	xtype: 'textfield',
            	itemId: 'syxs',
            	name: 'syxs',
            	fieldLabel: '实验学时',
            	 Visible:false,
            	beforeLabelTextTpl: ''         
			},{
            	xtype: 'textfield',
            	itemId: 'ggkbz',
            	name: 'ggkbz',
            	fieldLabel: '公共课标志',
            	 Visible:false,
            	beforeLabelTextTpl: ''         
			},{
            	xtype: 'textfield',
            	itemId: 'kcxf',
            	name: 'kcxf',
            	fieldLabel: '课程学分',
            	 Visible:false,
            	beforeLabelTextTpl: ''         
			},{
            	xtype: 'textfield',
            	itemId: 'zjjs',
            	name: 'zjjs',
            	fieldLabel: '主讲教师',
            	 Visible:false,
            	beforeLabelTextTpl: ''         
			},{
            	xtype: 'textfield',
            	itemId: 'kksj',
            	name: 'kksj',
            	fieldLabel: '开课时间',
            	 Visible:false,
            	beforeLabelTextTpl: ''         
			},{
            	xtype: 'textfield',
            	itemId: 'kkdd',
            	name: 'kkdd',
            	fieldLabel: '开课地点',
            	 Visible:false,
            	beforeLabelTextTpl: ''         
			}]
		 }],
		 buttons: [{
        	    text: '退出',
        	    iconCls:'return_16',
                handler: function () {
                    me.up('window').close();
                }
            }]
	});
	     me.callParent(arguments);
	},
	
	 loadForm: function(rec){
    	var me = this;
        me.loadRecord(rec);
    },
    
    setViewForm :function(){
    	var me = this;
		var textfields =  me.query('textfield');
		for(var i in textfields){
			textfields[i].setReadOnly(true);
//			var style = "background:none; border:0px;font-weight:bold";
			var style = "background:none; border:0px";
			textfields[i].setFieldStyle(style);
		}
    }
    
 }
);