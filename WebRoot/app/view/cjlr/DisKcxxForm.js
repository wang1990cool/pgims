Ext.define('App.view.cjlr.DisKcxxForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.disKcxxForm',
    itemId:'disKcxxForm',
    border:'0 0 0 0',
 	isAdd:true,
 	readOnlyStyle : 'background:none; border : 0px;font-weight:bold;',
 	
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
	            items: [
	            	
	            		{
	            		xtype:'textfield',
						itemId:'kch',
						name:'kch',
						fieldLabel : '课程号'
	            	},{
	            		xtype:'textfield',
						itemId:'kcmc',
						name:'kcmc',
						fieldLabel : '课程名称'
	            	},
	            		{
		            	xtype: 'textfield',
		            	itemId:'kcxf',
		            	name:'kcxf',
		            	readOnly:true,
		            	fieldLabel:'课程学分',
		            	hidden:true
		            },
		            	{
						xtype:'textfield',
						itemId:'zjjsh',
						name:'zjjsh',
//						value:gh,
						fieldLabel : '主讲教师号'
					},{
						xtype:'textfield',
						itemId:'zjjs',
						name:'zjjs',
//						value:xm,
						fieldLabel:'主讲教师'
					},
//						{
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
					},{
						xtype : 'textfield',
						itemId : 'xq',
						name : 'xq',
						readOnly:true,
						fieldLabel : '学期'
					},
//						{
//						xtype:'textfield',
//						itemId:'ksxsm',
//						name:'ksxsm',
//						fieldLabel:'考试形式码',
//						hidden:true
//					},
//						{
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
//					{
//						xtype: 'textfield',
//						itemId:'ksxs',
//						name:'ksxs',
//						fieldLabel:'考试形式'
//					},
					{
						xtype:'datefield',
						itemId:'ksrq',
						name:'ksrq',
						fieldLabel:'考试日期',
						format : "Y-m-d"
					},{
						xtype:'textfield',
						itemId:'ksdd',
						name:'ksdd',
						fieldLabel:'考试地点'
					},{
						xtype:'textfield',
						itemId:'ksfsm',
						name:'ksfsm',
						fieldLabel:'考试方式码',
						hidden:true
					},
						{
						xtype:'textfield',
						itemId:'ksfs',
						name:'ksfs',
						fieldLabel:'考试方式'
					},
						{
		            	xtype: 'textfield',
		            	itemId:'cjlxm',
		            	name:'cjlxm',
		            	fieldLabel:'成绩类型码',
		            	hidden:true
		            },{
		            	xtype: 'textfield',
		            	itemId:'cjlx',
		            	name:'cjlx',
		            	readOnly:true,
		            	fieldLabel:'成绩类型'
		            },
		            {
		            	xtype: 'textfield',
		            	itemId:'pscj',
		            	name:'pscj',
		            	readOnly:true,
		            	fieldLabel:'有无平时成绩'
		            },{
		            	
		            	xtype: 'textfield',
		            	itemId:'ywpscj',
		            	name:'ywpscj',
		            	readOnly:true,
		            	hidden:true,
		            	fieldLabel:'有无平时成绩'
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
			            	width:120,
							labelWidth:80,
							margin: '0 0 0 20'
			            },{
			            	xtype: 'label',
			            	name: '%',
			            	text: '%',
			            	margin: '3 0 0 5'
			            }
		        	]},{
		            	xtype: 'textfield',
		            	itemId:'cjlrrgh',
		            	name:'cjlrrgh',
		            	value:gh,
		            	fieldLabel:'成绩录入人工号',
		            	hidden:true
		            	},
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

										
		},
		
		setViewForm :function(){
    	var me = this;
    	  	
		var textfields =  me.query('textfield');
		for(var i in textfields){
			textfields[i].setReadOnly(true);
			textfields[i].setFieldStyle(me.readOnlyStyle);
		}
    }
	 

});