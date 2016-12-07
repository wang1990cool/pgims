Ext.define('App.view.pygrjh.XSJCXXForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.xsJcxxForm',
    itemId:'xsJcxxForm',
//    id:'xsjcxxFormId',
    border:'0 0 0 0',
 	baseCls: 'my-panel-no-border',
 	isAdd:true,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	            autoHeight:true,
	            padding:'5 5  5',
	            margin:'30 15 0 15',
	            border:'0 0 0 0',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:270,
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
		        	       xtype:'fieldcontainer',
					       layout:'hbox',
						   defaults:{
						   		padding:'3 0 0 0',
								labelAlign:'right'
							},
							items:[{
								xtype:'textfield',
								itemId:'xh',
								name:'xh',
								fieldLabel:'学号',
							  	width:240,
								labelWidth:100,
								allowBlank : false,	
								blankText : '必填！',
								listeners:{
				            		blur:function(obj){
				            			var me = this;
				            			var xsJcxxForm = me.up('#xsJcxxForm');
				            			var xh = obj.getValue();
				            			if(xh.length > 0){
					            			 Ext.Ajax.request({
					            			 	url:'pygrjhGetXsxx.action?xh='+xh,
					            			 	method:'post',
					            			 	success:function(response,opts){
					            			 		var result = Ext.decode(response.responseText);
					            			 		var success = result.result.success;
					            			 		if(success){
					            			 			var list = result.result.list;
					            			 			if(list.length == 0){
					            			 				Ext.MessageBox.alert('提示','该学号不存在！');
					            			 				obj.setValue('')
					            			 			}else{
					            			 					var listJson = Ext.encode(list[0]);
					            			 					 var jsonObject =  JSON.parse(listJson);
														    	 for(var item in jsonObject){
														    	 	var itemId = "#" + item + "";
															    	 if(xsJcxxForm.down(itemId) == null || item == 'id')
															    		continue;
														    	 	xsJcxxForm.down(itemId).setValue(jsonObject[item]);
														    	 }	
														    	 xsJcxxForm.setView();
					            			 			}
					            			 		}
					            			 	}
					            			 })
				            			}
				            		}
				            	}
							},{
								xtype:'toolbar',
								style:'background:transparent;',
								border:'0 0 0 0',
								layout:{type:'hbox',align:'center',pack:'center'},
								items:[{
											itemId:'searchXhBtn',
//											text:'查询',
											tooltip:'查询',
											action:'searchXh',
											iconCls:'search',
											margin:'0 0 0 1'
						}]}]},{
		        	       xtype:'fieldcontainer',
					       layout:'hbox',
						   defaults:{
						 	  	padding:'3 0 0 0',
								labelAlign:'right'
							},
							items:[{
								xtype:'textfield',
								itemId:'pyfah',
								name:'pyfah',
								fieldLabel:'培养方案号',
							  	width:240,
							  	readOnly:true,
								labelWidth:100,
								allowBlank:false,
								BlankText:'必填'
							},{
								xtype:'toolbar',
								style:'background:transparent;',
								border:'0 0 0 0',
								layout:{type:'hbox',align:'center',pack:'center'},
								items:[{
											itemId:'searchPyfahBtn',
//											text:'查询',
											tooltip:'查询',
											action:'searchPyfah',
											iconCls:'search',
											margin:'0 0 0 1'
						}]}]},{
	            	xtype: 'textfield',
	            	itemId:'id',
	            	name:'id',
	            	fieldLabel:'id',
	            	hidden:true
	            },
//	            ,{
//	            	xtype:'textfield',
//	            	itemId:'xh',
//	            	name:'xh',
//	            	fieldLabel:'<font color="red">*</font>学号',
//	            	allowBlank:false,
//	            	blankText:'必填！',
//	            	listeners:{
//	            		blur:function(obj){
//	            			var xh = obj.getValue();
//	            			 Ext.Ajax.request({
//	            			 	url:'pygrjhGetXsxx.action?xh='+xh,
//	            			 	method:'post',
//	            			 	success:function(response,opts){
//	            			 		var result = Ext.decode(response.responseText);
//	            			 		var success = result.result.success;
//	            			 		if(success){
//	            			 			var list = result.result.list;
//	            			 			if(list.length == 0){
//	            			 				Ext.MessageBox.alert('提示','该学号不存在！');
//	            			 				obj.setValue('')
//	            			 			}else{
//	            			 					var listJson = Ext.encode(list[0]);
//	            			 					
//	            			 			}
//	            			 		}
//	            			 	}
//	            			 })
//	            		}
//	            	}
//	            }
	            {
					xtype : 'textfield',
					itemId : 'xm',
					name : 'xm',
					width:240,
					readOnly:true,
					fieldLabel : '姓名'
				},{
					xtype : 'textfield',
					itemId : 'nj',
					name : 'nj',
					width:240,
					readOnly:true,
					fieldLabel : '年级'
				},{
					xtype : 'textfield',
					itemId : 'yxsh',
					name : 'yxsh',
					width:240,
					readOnly:true,
					fieldLabel : '院系所号',
	            	hidden:true
				},{
					xtype:'textfield',
					itemId:'fymc',
					name:'fymc',
					width:240,
					readOnly:true,
					fieldLabel:'学院名称'
				},{
	    			xtype : 'textfield',
					itemId : 'zydm',
					name : 'zydm',
					width:240,
					readOnly:true,
					fieldLabel : '专业代码',
					hidden:true
	    		},{
					xtype : 'textfield',
					itemId : 'zymc',
					name : 'zymc',
					width:240,
					readOnly:true,
					fieldLabel : '专业名称'
				},{
					xtype:'textfield',
					itemId:'xwlb',
					name:'xwlb',
					width:240,
					readOnly:true,
					fieldLabel:'学位类别'
				},{
					xtype:'textfield',
					itemId:'jylb',
					name:'jylb',
					width:240,
					readOnly:true,
					fieldLabel:'教育类别'
				},{
					xtype:'textfield',
					itemId:'pycc',
					name:'pycc',
					width:240,
					readOnly:true,
					fieldLabel:'培养层次'
				},{
					xtype:'textfield',
					itemId:'xslxm',
					name:'xslxm',
					width:240,
					readOnly:true,
					fieldLabel:'学生类型码',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'xslx',
					name:'xslx',
					width:240,
					readOnly:true,
					fieldLabel:'学生类型'
				},{
					xtype:'textfield',
					itemId:'dsh',
					name:'dsh',
					fieldLabel:'导师号',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'dsh',
					name:'dsh',
					width:240,
					readOnly:true,
					fieldLabel:'导师号'
				},{
					xtype:'textfield',
					itemId:'ds',
					name:'ds',
					width:240,
					readOnly:true,
					fieldLabel:'导师'
				},{
					xtype:'textfield',
					itemId:'ztm',
					name:'ztm',
					width:240,
					readOnly:true,
					fieldLabel:'状态码',
					hidden:true
				},{
					xtype:'textfield',
					itemId:'zt',
					name:'zt',
					width:240,
					readOnly:true,
					fieldLabel:'状态',
	            	hidden:true
				}]
	        }]	      
        });
       me.callParent(arguments);
    },
    
      loadForm:function(rec){
      		var me = this;
        	me.loadRecord(rec);
      },
      
       setView:function(){
			var me = this;
			var textfields =  me.query('textfield');
			for(var i in textfields){
				if(textfields[i].itemId == 'xh' || textfields[i].itemId == 'pyfah')
					continue;
				textfields[i].setReadOnly(true);
				var style = "background:none; border:0px";
				textfields[i].setFieldStyle(style);
			}
	  },
	  
	  setEditView:function(){
	  		var me = this;
			var textfields =  me.query('textfield');
			for(var i in textfields){
				if(textfields[i].itemId == 'pyfah')
					continue;
				textfields[i].setReadOnly(true);
				var style = "background:none; border:0px";
				textfields[i].setFieldStyle(style);
			}
			me.down('#searchXhBtn').setVisible(false)
	  }
});