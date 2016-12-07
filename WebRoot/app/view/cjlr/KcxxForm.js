Ext.define('App.view.cjlr.KcxxForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.kcxxForm',
    itemId:'kcxxForm',
    border:'0 0 0 0',
 	isAdd:true,
 	
    initComponent: function() {
        var me = this;
        var required = '<span style="color:red;font-weight:bold" data-qtip="必填">*</span>';
        Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	            autoHeight:true,
	            padding:'5 5 5 5',
	            margin:'15 15 0 15',
	            border:'0 0 0 0',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:240,
	        		labelWidth:100,
	        		padding:'3 0 0 0',
	        		size:20
	        	},
				layout:{
					type:'table',
					columns:2,
					tableAttrs:{ 
						style:"width:100%;text-align:center;border:1px solid #B3D0EE;border-collapse:collapse;empty-cells:show;", 
						align:'center'
					},
					tdAttrs:{
						align:'left',
						style:"border: 1px solid rgb(179, 208, 238);"
					}
				},
	            items: [{
	            		xtype:'textfield',
						itemId:'kch',
						name:'kch',
						fieldLabel : '课程号',
						readOnly:true
	            	},{
	            		xtype:'textfield',
						itemId:'kcmc',
						name:'kcmc',
						fieldLabel : '课程名称',
						readOnly:true
	            	},{
		            	xtype: 'textfield',
		            	itemId:'kcxf',
		            	name:'kcxf',
		            	readOnly:true,
		            	fieldLabel:'课程学分',
		            	hidden:true
		            },{
						xtype:'textfield',
						itemId:'zjjsh',
						name:'zjjsh',
//						value:gh,
						fieldLabel : '主讲教师号',
						readOnly:true
					},{
						xtype:'textfield',
						itemId:'zjjs',
						name:'zjjs',
//						value:xm,
						readOnly:true,
						fieldLabel:'主讲教师'
					},{
			            	xtype: 'textfield',
			            	itemId:'id',
			            	name:'id',
			            	fieldLabel:'id',
			            	hidden:true
			            },
//			            	{
//						xtype:'textfield',
//						itemId:'kch',
//						name:'kch',
//						hidden:true,
//						fieldLabel:'课程号'
//					},
//					{
//						xtype:'textfield',
//						itemId:'kcmc',
//						name:'kcmc',
//						hidden:true,
//						fieldLabel:'课程名称'
//					},
//						{
//						xtype : 'combo',
//					    itemId : 'kcmc',
//					    name : 'kcmc',
//					    fieldLabel : '课程名称',
//					    allowBlank:false,
//					    editable : false,
//					    listConfig:{
//					     	maxHeight : 160
//					     },
//					    queryMode : 'local',
//					    displayField : 'kcmc',
//					    matchFieldWidth : false,
//					    store : Ext.create('Ext.data.Store',{
//				        	autoLoad:true,
//				        	pageSize: pSize,
//				            model: 'App.model.cjlr.ViewJxCjlrModel',
//				            fields:[{name:'kch'},{name:'kcmc'},{name:'kcxf'},{name:'kkkh'}],
//				            remoteSort: true,
//				            proxy: {
//				                type: 'ajax',
//				                url: 'viewJxCjlrgetAll.action',
//				                actionMethod: 'POST',
//				                reader: {
//				                	idProperty:'iid',
//				                    root: 'result.list',
//				                    totalProperty: 'result.total'
//				                },
//				                simpleSortMode: true,
//				                extraParams:{
//				                	params:''
//				                }
//				            },
//				            sorters:[{property:'id',direction:'DESC'}]
//				        }),
//						listeners:{
//						   	select:function(combo, record, index){
//						  		var kkkh = record[0].get('kkkh');
//						  		Ext.Ajax.request({
//									url : 'jxCjjlgetByKkkh.action',
//									method : 'post',
//									params:{kkkh:kkkh},
//									success : function(response, opts) {
//										var result = Ext.decode(response.responseText);
//										var success = result.result.success;
//										var list = result.result.list;
//										if(success){
//											me.setDefaultData(record,list)
//										}else{
//											me.down('#kch').setValue(record[0].get('kch'));
//						   					me.down('#kcxf').setValue(record[0].get('kcxf'));
//						   					me.down('#kkkh').setValue(record[0].get('kkkh'));
//										}
//									}
//						  		})
//						   	}
//						 }
//					},
						{
							xtype:'textfield',
							itemId:'kkkh',
							name:'kkkh',
							fieldLabel:'开课课号',
							hidden:true
						},{
							xtype : 'textfield',
							itemId : 'xn',
							name : 'xn',
							readOnly:true,
							fieldLabel : '学年'
//							value: xn
						},{
							xtype : 'textfield',
							itemId : 'xq',
							name : 'xq',
							readOnly:true,
							fieldLabel : '学期'
//							value: xq
						},
//							{
//						xtype:'textfield',
//						itemId:'ksxsm',
//						name:'ksxsm',
//						fieldLabel:'考试形式码',
//						hidden:true
//					},{
//						xtype : 'combo',
//				    itemId : 'ksxs',
//				    name : 'ksxs',
//				    fieldLabel : '考试形式',
//				    displayField : 'ksxs',
//				    listeners:{
//				   	select:function(combo, record, index){
//				   		me.down('#ksxsm').setValue(record[0].get('ksxsm'));
//				   		}
//					 },
//				    store : Ext.create('Ext.data.Store',{
//				   	autoLoad : true,
//				   	fields : [{name : 'ksxsm'},
//				   	          {name : "ksxs"}],
//				   	proxy : {
//				   		type : 'ajax',
//				   		url : 'zdGetZD.action',
//				   		actionMethods : 'post',
//				   		reader : {
//				   			root : 'result.list',
//				   			totalProperty : 'totalProperty'
//				   		},
//				   		extraParams: {zdName:'ZdKsxsm'},
//				   		simpleSortMode : true
//				   	},
//				   	sorters : [{
//				   		property : 'ksxsm',
//				   		direction : 'ASC'
//				   	}]
//				   })
//					},
						{
						xtype:'datefield',
						itemId:'ksrq',
						name:'ksrq',
						fieldLabel:'考试日期',
						format : "Y-m-d",
						beforeLabelTextTpl: required,
		            	allowBlank:false,
		            	editable : false,
						blankText : '必填！'
//						hidden:true
					},{
						xtype:'textfield',
						itemId:'ksdd',
						name:'ksdd',
						fieldLabel:'考试地点'
//						beforeLabelTextTpl: required,
//		            	allowBlank:false,
//						blankText : '必填！'
//						hidden:true
					},{
						xtype:'textfield',
						itemId:'ksfsm',
						name:'ksfsm',
						fieldLabel:'考试方式码',
						hidden:true
					},{
						xtype:'combo',
						itemId:'ksfs',
						name:'ksfs',
						editable : false,
						fieldLabel:'考试方式',
						displayField:'mc',
		            	valueField:'bm',
						hidden:false,
						listeners:{
					   	select:function(combo, record, index){
					   		me.down('#ksfsm').setValue(record[0].get('bm'));
					   		}
						 },
						store : Ext.create('Ext.data.Store',{
				   		autoLoad : true,
				   	 	fields : [{name : 'bm'},
				   	               {name : "mc"},
				   	               {name : "pxh"}],
				   	    proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			  root : 'result.list',
				   			  totalProperty : 'totalProperty'
				   		},
				   		extraParams: {zdName:'ZdKsfsm'},
				   		simpleSortMode : true
				   	  },
				   	    sorters : [{
				   		property : 'pxh',
				   		direction : 'ASC'
				   	}]
				   }),
					   sortable:false
					},{
		            	xtype: 'textfield',
		            	itemId:'cjlxm',
		            	name:'cjlxm',
		            	fieldLabel:'成绩类型码',
		            	hidden:true
		            },{
		            	xtype: 'combo',
		            	itemId:'cjlx',
		            	name:'cjlx',
		            	fieldLabel:'成绩类型',
		            	editable : false,
		            	displayField:'mc',
		            	valueField:'bm',
						store : Ext.create('Ext.data.Store',{
				   		autoLoad : true,
				   	 	fields : [{name : 'bm'},
				   	               {name : "mc"},
				   	               {name:'pxh'}],
				   	    proxy : {
				   		type : 'ajax',
				   		url : 'zdGetZD.action',
				   		actionMethods : 'post',
				   		reader : {
				   			  root : 'result.list',
				   			  totalProperty : 'totalProperty'
				   		},
				   		extraParams: {zdName:'ZdCjlxm'},
				   		simpleSortMode : true
				   	  },
				   	    sorters : [{
				   		property : 'pxh',
				   		direction : 'ASC'
				   	}]
				   }),
				 	sortable:false,
					beforeLabelTextTpl: required,
	            	allowBlank:false,
					blankText : '必填！',
					listeners:{
				   	select:function(combo, record, index){
				   		var me = this;
				   		var cjlxm = me.up('#kcxxForm').down('#cjlxm');
				   		cjlxm.setValue(record[0].data.bm);
				   	}}},{
				   		xtype: 'combo',
		            	itemId:'ywpscj',
		            	name:'ywpscj',
		            	fieldLabel:'有无平时成绩',
		            	editable : false,
		            	displayField:'mc',
		            	valueField:'bm',
						store : Ext.create('Ext.data.Store',{
				   		autoLoad : true,
				   	 	fields : [{name : 'bm'},
				   	               {name : "mc"}
				   	              ],
				   		data:[{"bm":1,"mc":"有"},{"bm":0,"mc":"无"}]			   	   
//				   	    sorters : [{
//				   		property : 'pxh',
//				   		direction : 'ASC'
//				   	}]
				   }),
				 	sortable:false,
					beforeLabelTextTpl: required,
	            	allowBlank:false,
					blankText : '必填！',
					listeners:{
				   	select:function(combo, record, index){
				   		var me = this;
				   		if(record[0].data.bm == '1'){
                    			me.up('#kcxxForm').down('#pscjbl').setReadOnly(false);
                    	}else{
                    			me.up('#kcxxForm').down('#pscjbl').setReadOnly(true);
                    			me.up('#kcxxForm').down('#pscjbl').reset();
                    	}
				   	}}	
				   	
				   	},{
		        	xtype: 'fieldcontainer',
		        	layout:'hbox',
		        	defaults:{labelAlign: 'right'},
		        	items:[
			        		{
			            	xtype: 'textfield',
			            	itemId: 'pscjbl',
			            	name: 'pscjbl',
			            	fieldLabel : '平时成绩比例',
	//		            	regex:/^[1-9][0-9]{0,1}$/,
			            	regex:/^(0|[1-9]\d|0)$/,
			            	regexText:'请输入0-100以内的整数！',
			            	width:120,
							labelWidth:80,
							margin: '0 0 0 20'
	//		            	beforeLabelTextTpl: required,
	//		            	allowBlank:false,
	//						blankText : '必填！'
			            },{
			            	xtype: 'label',
			            	name: '%',
			            	text: '%',
			            	margin: '3 0 0 5'
			            }
		        	]},
        	
		            	
		            	{
		            	xtype: 'textfield',
		            	itemId:'cjlrrgh',
		            	name:'cjlrrgh',
		            	value:gh,
		            	fieldLabel:'成绩录入人工号',
		            	hidden:true
		            },/*{
						xtype:'textfield',
						itemId:'jhrs',
						name:'jhrs',
						fieldLabel:'计划人数',
						allowBlank : false,	
						blankText : '必填！'
//					},*/
//	{
//						xtype:'textfield',
//						itemId:'cjlrsj',
//						name:'cjlrsj',
//						hidden:true,
//						value: Ext.Date.format(new Date(), 'Y-m-d H:i:s'),
//						fieldLabel:'成绩录入时间'
//					},
						{
						xtype:'textfield',
						itemId:'sjzt',
						name:'sjzt',
						fieldLabel:'数据状态',
						hidden:true
					}]
			        },{
				xtype: 'label',
				html: '<span style="color:red;margin-left:20;margin-top:20">*</span>平时成绩比例为系统计算总分时平时成绩所占的比例，请输入0-100之间的整数!',
				margin: '0 20 0 10',
				maxWidth: 30
			}
					] 
//					 buttons: [{
//		            	text: '保存',
//		            	itemId:'saveBtn',
//		            	iconCls:'save_16',
//		            	action:'save'
////		                handler:me.submit
//		            }]
		        });
      			 me.callParent(arguments);
	    },
	    
	      loadForm:function(rec){
	      		var me = this;
	        	me.loadRecord(rec);
	      },
	      
	   
	      setEditView:function(){
		  		var me = this;
		  		var textfields = me.query('textfield');
		  		for(var i in textfields){
		  			if(textfields[i].itemId == 'xn' || textfields[i].itemId == 'xq'||
		  			   textfields[i].itemId == 'bz')
		  				continue;
		  			textfields[i].setReadOnly(true);
		  			var style = 'background:none; border:0px;font-weight:bold';
		  				textfields[i].setFieldStyle(style);
		  		}
	      },
		  		

		setDefaultData:function(record,list){
			var me = this;
			var form = me;
    		var recJSON = Ext.encode(list[0]) ;
    	    var jsonObject =  JSON.parse(recJSON);
    	    for(var item in jsonObject){
	    	     var itemId = "#" + item + "";
	    	 	form.down(itemId).setValue(jsonObject[item]);
    		 }
    		
//			form.down('#id').setValue(list[0].id);
//			form.down('#kch').setValue(record[0].get('kch'));
//			form.down('#kcxf').setValue(record[0].get('kcxf'));
//			form.down('#kkkh').setValue(record[0].get('kkkh'));
//			form.down('#ksxs').setValue(list[0].ksxs);
//			form.down('#ksxsm').setValue(list[0].ksxs);

										
		}
	 

});