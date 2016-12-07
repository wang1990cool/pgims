Ext.define('App.view.skxx.SkxxmxDetailForm',{
	extend:'Ext.form.Panel',
	alias : 'widget.skxxmxDetailForm',
	xtype : 'form',
	itemId: 'skxxmxDetailForm',
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
			margin:'0 10 0 10',
			padding:'10 5 5 5',
			defaults:{
				xtype:'textfield',
				readOnlyCls:'x-form-item-label',
				autoHeight:true,
				readOnly:false,
				labelAlign:'right',
				width:240,
	        	labelWidth:100,
	        	padding:'5 0 0 0',
				size:50
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
		            	itemId: 'id',
		            	name: 'id',
		            	hidden:true
					},{
						xtype: 'textfield',
						itemId: 'kkkh',
						name: 'kkkh',
						fieldLabel: '开课课号',
						hidden:true
					},{
						xtype: 'textfield',
						itemId: 'kkjhh',
						name: 'kkjhh',
						fieldLabel: '开课计划号'
					},{
						xtype: 'textfield',
						itemId: 'kch',
						name: 'kch',
						fieldLabel: '课程号',
						hidden:true
					},{
						xtype: 'textfield',
						itemId: 'kcmc',
						name: 'kcmc',
						fieldLabel: '课程名称'
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
						itemId: 'pydwh',
						name: 'pydwh',
						hidden:true,
						fieldLabel: '培养单位号'
					},{
						xtype: 'textfield',
						itemId: 'pydw',
						name: 'pydw',
						fieldLabel: '培养单位'
					},{
						xtype: 'textfield',
						itemId: 'xkzym',
						name: 'xkzym',
						hidden:true,
						fieldLabel: '专业代码'
					},{
						xtype: 'textfield',
						itemId: 'xkzy',
						name: 'xkzy',
						fieldLabel: '专业名称'
					},{
						xtype: 'textfield',
						itemId: 'xslx',
						name: 'xslx',
						fieldLabel: '学生类型'
					},{
						xtype: 'textfield',
						itemId: 'xn',
						name: 'xn',
						fieldLabel: '学年'
					},{
						xtype: 'textfield',
						itemId: 'xq',
						name: 'xq',
						fieldLabel: '学期'
					},{
						xtype: 'textfield',
						itemId: 'xslxm',
						name: 'xslxm',
						fieldLabel: '学生类型码',
						hidden:true
					},{
						xtype: 'textfield',
						itemId: 'kcxf',
						name: 'kcxf',
						fieldLabel: '课程学分'
					},{
						xtype: 'textfield',
						itemId: 'kcxslx',
						name: 'kcxslx',
						fieldLabel: '学时类型'
					},{
						xtype: 'textfield',
						itemId: 'zxs',
						name: 'zxs',
						fieldLabel: '总学时'
					},{
						xtype: 'textfield',
						itemId: 'llxs',
						name: 'llxs',
						fieldLabel: '理论学时'
					},{
						xtype: 'textfield',
						itemId: 'syxs',
						name: 'syxs',
						fieldLabel: '实验学时'
				    },{
						xtype: 'textfield',
						itemId: 'mzxs',
						name: 'mzxs',
						fieldLabel: '每周学时'
					},{
						xtype: 'textfield',
						itemId: 'kclb',
						name: 'kclb',
						fieldLabel: '课程类别'
					},{
						xtype: 'textfield',
						itemId: 'kcxz',
						name: 'kcxz',
						fieldLabel: '课程性质'
					},{
						xtype: 'textfield',
						itemId: 'kcsx',
						name: 'kcsx',
						fieldLabel: '课程属性'
					},{
						xtype: 'textfield',
						itemId: 'ggkbz',
						name: 'ggkbz',
						fieldLabel: '公共课程'
					},{
						xtype: 'textfield',
						itemId: 'jhrs',
						name: 'jhrs',
						fieldLabel: '计划人数'
					},{
						xtype: 'textfield',
						itemId: 'xkrs',
						name: 'xkrs',
						hidden:true,
						fieldLabel: '选课人数'
					},{
						xtype: 'textfield',
						itemId: 'yxrs',
						name: 'yxrs',
						hidden:true,
						fieldLabel: '有效人数'
					},{
						xtype:'textfield',
						itemId:'ksz',
						name:'ksz',
						fieldLabel:'开始周'
					},{
						xtype: 'textfield',
						itemId: 'jsz',
						name: 'jsz',
						fieldLabel: '结束周'
					},{
						xtype: 'textfield',
						itemId: 'qzz',
						name: 'qzz',
						fieldLabel: '起至周',
						hidden:true
					},{
						xtype: 'textfield',
						itemId: 'zjjs',
						name: 'zjjs',
						fieldLabel: '主讲教师'
					},{
						xtype: 'textfield',
						itemId: 'zkjs',
						name: 'zkjs',
						fieldLabel: '助课教师'
					},{
						xtype: 'textfield',
						itemId: 'syjs',
						name: 'syjs',
						fieldLabel: '实验教师'
					},{
						xtype: 'textfield',
						itemId: 'zjjsh',
						name: 'zjjsh',
						fieldLabel: '主讲教师号',
						hidden:true
				    },{
						xtype: 'textfield',
						itemId: 'zkjsh',
						name: 'zkjsh',
						fieldLabel: '助课教师号',
						hidden:true
				    },{
						xtype: 'textfield',
						itemId: 'syjsh',
						name: 'syjsh',
						fieldLabel: '实验教师号',
						hidden:true
				    },{
				        xtype: 'checkboxgroup',
				        fieldLabel: '自行安排',
				        vertical: true,
				        hidden:true,
				        colspan:2,
				        items: [
				       	 { 
					              boxLabel: '时间',
					              name: 'sjzxapbz',
					              itemId:'sjzxapbz',
					              inputValue: '1',
					              uncheckedValue: '0',
					             width:60,
	        					labelWidth:40,
	        					listeners:{
	        						check:function(){
	        							alert('e')
	        						}
	        					}
				             },
				            {
					            boxLabel: '地点', 
					            itemId:'ddzxapbz',
					            name: 'ddzxapbz', 
					            inputValue: '1', 
					            uncheckedValue: '0',
					            width:60,
	        					labelWidth:40
				            }
				        ],
				            listeners:{
				            	'check':function(){
				            		alert('e')	
				            	}
				            }
					},{xtype:'label',itemId:'labelTemp',hidden:true}
					,{
						xtype: 'textfield',
						itemId: 'kksj',
						name: 'kksj',
						colspan:2,
						width:595,
						fieldLabel: '开课时间'
					},{
						xtype: 'textfield',
						itemId: 'kkdd',
						name: 'kkdd',
						colspan:2,
						width:595,
						fieldLabel: '开课地点'
					},{
				    	xtype: 'textfield',
						itemId: 'ggkbzm',
						name: 'ggkbzm',
						fieldLabel: '公共课程码',
						hidden:true
				    },{
						xtype: 'textfield',
						itemId: 'ztm',
						name: 'ztm',
						hidden:true,
						fieldLabel: '状态码'
					},{
						xtype: 'textfield',
						itemId: 'zt',
						name: 'zt',
						hidden:true,
						fieldLabel: '状态'
					}]
		 },{
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '备注:',
	            collapsible: false,
	            margin:'5 10 10 10',
	            width:720,
	            padding:'5 10 10 10',
	            layout:'fit',
				items:[{
			    	xtype: 'textareafield',
			    	itemId:'bz',
			    	name:'bz'
		        }]
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
					var style = "background:none; border:0px";
					textfields[i].setFieldStyle(style);
    		}
    }
 }
);