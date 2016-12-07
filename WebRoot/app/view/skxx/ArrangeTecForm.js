Ext.define('App.view.skxx.ArrangeTecForm',{
	extend:'Ext.form.Panel',
	alias : 'widget.arrangeTecForm',
	xtype : 'form',
	itemId: 'arrangeTecForm',
	initComponent: function(){
		var me = this;
		Ext.applyIf(me,{
		items:[{
			xtype:'fieldset',
			border:'0 0 0 0',
		width:755,
			autoHeight:true,
			autoWidth:false,
			collapsible:false,
			readOnly:true,
			margin:'0 10 0 10',
			padding:'5 5 5 5',
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
						width:290,
						hidden:true,
						fieldLabel: '开课课号'
					},{
						xtype: 'textfield',
						itemId: 'kkjhh',
						name: 'kkjhh',
						fieldLabel: '开课计划号',
						hidden:true
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
					},{xtype:'label',hidden:true},{
						xtype: 'textfield',
						itemId: 'pydwh',
						name: 'pydwh',
						hidden:true,
						fieldLabel: '培养单位号'
					},{
						xtype: 'textfield',
						itemId: 'pydw',
						name: 'pydw',
						colspan:2,
							width:650,
						fieldLabel: '培养单位'
					},{
						xtype: 'textfield',
						itemId: 'zydm',
						name: 'zydm',
						hidden:true,
						fieldLabel: '专业代码'
					},{
						xtype: 'textfield',
						itemId: 'zymc',
						name: 'zymc',
						colspan:2,
						width:650,
						fieldLabel: '专业名称'
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
						fieldLabel: '学时类型码',
						hidden:true
					},{
						xtype: 'textfield',
						itemId: 'kcxf',
						name: 'kcxf',
						fieldLabel: '课程学分'
					},{
						xtype: 'textfield',
						itemId: 'xslx',
						name: 'xslx',
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
						hidden:true,
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
						itemId: 'kkdd',
						name: 'kkdd',
						colspan:2,
						width:650,
						fieldLabel: '开课地点'
					},{
						xtype: 'textfield',
						itemId: 'kksj',
						name: 'kksj',
						colspan:2,
						width:650,
						fieldLabel: '开课时间'
					},{
				        xtype: 'checkboxgroup',
				        fieldLabel: '自行安排',
				        vertical: true,
				        items: [
				            { 
					              boxLabel: '时间',
					              name: 'sjzxapbz',
					              itemId:'sjzxapbz',
					              inputValue: '1',
					              uncheckedValue: '0',
					             width:60,
	        					labelWidth:40,
	        					 readOnly:true
				             },
				            {
					            boxLabel: '地点', 
					            itemId:'ddzxapbz',
					            name: 'ddzxapbz', 
					            inputValue: '1', 
					            uncheckedValue: '0',
					            width:60,
	        					labelWidth:40,
	        					 readOnly:true
				            }
				        ]
					},{
						xtype: 'textfield',
						itemId: 'zjjsh',
						name: 'zjjsh',
						fieldLabel: '主讲教师号',
						hidden:true
				    },{
        	       xtype:'fieldcontainer',
			       layout:'hbox',
			       itemId:'zjjsField',
			       width:290,
				   defaults:{
				 	  	padding:'3 0 0 0',
						labelAlign:'right'
					},
					items:[{
						xtype:'textfield',
						itemId:'zjjs',
						name:'zjjs',
						fieldLabel:'主讲教师',
					  	width:240,
					  	readOnly:true,
						labelWidth:100,
						listeners:{
							blur:function(text){
								if(text.getValue().length == 0){
									me.down('#zjjsh').setValue('');
								}
							}
						}
					},{
						xtype:'toolbar',
						style:'background:transparent;',
						border:'0 0 0 0',
						layout:{type:'hbox',align:'center',pack:'center'},
						items:[{
									itemId:'searchZjjsBtn',
									tooltip:'查询',
									action:'searchZjjs',
									iconCls:'search',
									margin:'0 0 0 1'
						},{
									itemId:'clearAll',
									tooltip:'清空',
									action:'clearAll',
									iconCls:'delete_16',
									listeners:{
										click:function(){
											me.down('#zjjsh').setValue('');
											me.down('#zjjs').setValue('')
										}
									}
						}]}]},{
						xtype: 'textfield',
						itemId: 'zkjsh',
						name: 'zkjsh',
						fieldLabel: '助课教师号',
						hidden:true
				    },{
        	       xtype:'fieldcontainer',
			       layout:'hbox',
			       itemId:'zkjsField',
			        width:290,
				   defaults:{
				 	  	padding:'3 0 0 0',
						labelAlign:'right'
					},
					items:[{
						xtype:'textfield',
						itemId:'zkjs',
						name:'zkjs',
						fieldLabel:'助课教师',
					  	width:240,
					  	readOnly:true,
						labelWidth:100,
						listeners:{
							blur:function(text){
										if(text.getValue().length == 0){
									me.down('#zkjsh').setValue('');
								}
							}
						}
					},{
						xtype:'toolbar',
						style:'background:transparent;',
						border:'0 0 0 0',
						layout:{type:'hbox',align:'center',pack:'center'},
						items:[{
									itemId:'searchZkjsBtn',
									tooltip:'查询',
									action:'searchZkjs',
									iconCls:'search',
									margin:'0 0 0 1'
				},{
									tooltip:'清空',
									iconCls:'delete_16',
									listeners:{
										click:function(){
											me.down('#zkjsh').setValue('');
											me.down('#zkjs').setValue('')
										}
									}
						}]}]},{
						xtype: 'textfield',
						itemId: 'syjsh',
						name: 'syjsh',
						fieldLabel: '实验教师号',
						hidden:true
				    },{
        	       xtype:'fieldcontainer',
			       layout:'hbox',
			        itemId:'syjsField',
			       width:290,
				   defaults:{
				 	  	padding:'3 0 0 0',
						labelAlign:'right'
					},
					items:[{
						xtype:'textfield',
						itemId:'syjs',
						name:'syjs',
						fieldLabel:'实验教师',
					  	width:240,
					  	readOnly:true,
						labelWidth:100,
						listeners:{
							blur:function(text){
								if(text.getValue().length == 0){
									me.down('#syjsh').setValue('');
								}
							}
						}
					},{
						xtype:'toolbar',
						style:'background:transparent;',
						border:'0 0 0 0',
						layout:{type:'hbox',align:'center',pack:'center'},
						items:[{
									itemId:'searchSyjsBtn',
									tooltip:'查询',
									action:'searchSyjs',
									iconCls:'search',
									margin:'0 0 0 1'
				},{
									tooltip:'清空',
									iconCls:'delete_16',
									listeners:{
										click:function(){
											me.down('#syjsh').setValue('');
											me.down('#syjs').setValue('')
										}
									}
						}]}]},{
				    	xtype: 'textfield',
						itemId: 'ggkbzm',
						name: 'ggkbzm',
						fieldLabel: '公共课程码',
						hidden:true
				    },{
				    	xtype: 'textfield',
						itemId: 'ggkbz',
						name: 'ggkbz',
						fieldLabel: '公共课程',
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
//	            border:'1 1 0 0',
	            collapsible: false,
	            margin:'5 10 10 10',
	       	   width:755,
	            padding:'5 5 10 5',
	            layout:'fit',
				items:[{
			    	xtype: 'textareafield',
			    	itemId:'bz',
			    	name:'bz'
		        }]
		}]
//		,
//		 buttons: [{
//        	    text: '确定',
//        	    iconCls:'save_16',
//        	    itemId:'ok',
//        	    action:'ok'
//      	  },{
//        	    text: '退出',
//        	    iconCls:'return_16',
//                handler: function () {
//                    me.up('window').close();
//                }
//            }]
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
			if(textfields[i].itemId == 'zjjs' ||
					textfields[i].itemId == 'zkjs' || textfields[i].itemId == 'syjs')
				continue;
			textfields[i].setReadOnly(true);
			var style = "background:none; border:0px";
			textfields[i].setFieldStyle(style);
		}
//		me.down('#zxap').setDisabled(true)
    }
 }
);