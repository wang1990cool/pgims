Ext.define('App.view.cjcx.CjcxForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.cjcxForm',
    itemId:'cjcxForm',
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
					columns:3,
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
						itemId:'xh',
						name:'xh',
						fieldLabel : '学号',
						readOnly:true
	            	},{
	            		xtype:'textfield',
						itemId:'xm',
						name:'xm',
						fieldLabel : '姓名',
						readOnly:true
	            	},{
	            		xtype:'textfield',
						itemId:'sznj',
						name:'sznj',
						fieldLabel : '所在年级',
						readOnly:true
	            	},{
	            		xtype:'textfield',
						itemId:'fymc',
						name:'fymc',
						fieldLabel : '所在学院',
						readOnly:true
	            	},{
	            		xtype:'textfield',
						itemId:'zymc',
						name:'zymc',
						fieldLabel : '所在专业',
						readOnly:true
	            	},{
	            		xtype:'textfield',
						itemId:'xslx',
						name:'xslx',
						fieldLabel : '学生类型',
						readOnly:true
	            	},{
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
	            		xtype:'textfield',
						itemId:'kccj',
						name:'kccj',
						fieldLabel : '课程成绩',
						readOnly:true
	            	},,{
	            		xtype:'textfield',
						itemId:'zjjs',
						name:'zjjs',
						fieldLabel : '主讲教师',
						readOnly:true
	            	},{
	            		xtype:'textfield',
						itemId:'zjjsh',
						name:'zjjsh',
						fieldLabel : '主讲教师号',
						readOnly:true
	            	},{
	            		xtype:'textfield',
						itemId:'szdw',
						name:'szdw',
						fieldLabel : '所在单位',
						readOnly:true
	            	},{
	            		xtype:'textfield',
						itemId:'xn',
						name:'xn',
						fieldLabel : '学年',
						readOnly:true
	            	},{
	            		xtype:'textfield',
						itemId:'xq',
						name:'xq',
						fieldLabel : '学期',
						readOnly:true
	            	}]
			        }] 
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
		  			textfields[i].setReadOnly(true);
		  			var style = 'background:none; border:0px;font-weight:bold';
		  				textfields[i].setFieldStyle(style);
		  		}
	      }
		  		

//		setDefaultData:function(record,list){
//			var me = this;
//			var form = me;
//    		var recJSON = Ext.encode(list[0]) ;
//    	    var jsonObject =  JSON.parse(recJSON);
//    	    for(var item in jsonObject){
//	    	     var itemId = "#" + item + "";
//	    	 	form.down(itemId).setValue(jsonObject[item]);
//    		 }
//    		
////			form.down('#id').setValue(list[0].id);
////			form.down('#kch').setValue(record[0].get('kch'));
////			form.down('#kcxf').setValue(record[0].get('kcxf'));
////			form.down('#kkkh').setValue(record[0].get('kkkh'));
////			form.down('#ksxs').setValue(list[0].ksxs);
////			form.down('#ksxsm').setValue(list[0].ksxs);
//
//										
//		}
	 

});