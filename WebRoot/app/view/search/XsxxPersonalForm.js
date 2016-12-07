Ext.define('App.view.search.XsxxPersonalForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.xsxxPersonalForm',
    itemId:'xsxxPersonalForm',
 
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	            autoHeight:true,
	            collapsible: true,
	            padding:'5 5 10 5',
	           
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:250,
	        		labelWidth:100,
	        		padding:'5 0 0 0',
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
	            title: '基本信息',
	            items: [{
	            	xtype: 'hiddenfield',
	            	itemId:'id',
	            	name:'id'
	            },{
					xtype : 'textfield',
					itemId : 'xm',
					name : 'xm',
					fieldLabel : '<font color="red">*</font>姓名',
					allowBlank : false,
					blankText : '必填！'
				},{
					xtype : 'textfield',
					itemId : 'xmpy',
					name : 'xmpy',
					fieldLabel : '姓名拼音'				
				},{
		            xtype: 'container',
		            rowspan:6,
		            layout: {
					    type: 'vbox',
					    align: 'center'
					},
		            items:[{
		            	xtype: 'container',
		            	items:[{
							xtype: 'image',
							itemId:'rxzp',
							shrinkWrap:true,
							height:160,
							width:120,
							src:'styles/images/none.jpg',
							getImage: function(buffer) {
							    var binary = ''
							        var bytes = new Uint8Array( buffer )
							        var len = bytes.byteLength;
							        for (var i = 0; i < len; i++) {
							            binary += String.fromCharCode( bytes[ i ] )
							        }
						        return window.btoa( binary );
							}
		                }]
		            }
	                ]
	        	},{
				    itemId : 'xb',
				    name : 'xb',
				    fieldLabel : '性别'
	    		},{	
				  	xtype: 'datefield',
			        itemId: 'csrq',
			        name: 'csrq',
			        fieldLabel: '出生日期',
			        format : "Y-m-d",
			        width:250,
        			labelWidth:100,
        			padding:'5 0 0 0',
        			size:20
		        },{
				    itemId : 'gjdqmc',
				    name : 'gjdqmc',
				    fieldLabel : '国籍'
	    	   },{
					itemId : 'mz',
					name : 'mz',
					fieldLabel : '民族'
	    	  },{
	            	itemId: 'csd',
	            	name: 'csd',
	            	fieldLabel: '出生地'
			  },{
	            	itemId: 'jgd',
	            	name: 'jgd',
	            	fieldLabel: '籍贯地'
			  },{
					itemId : 'zjlx',
					name : 'zjlx',
					fieldLabel : '证件类型码'
	    	 },{
					itemId : 'zjhm',
					name : 'zjhm',
					fieldLabel : '身份证号码'
			 },{
					itemId : 'zzmm',
					name : 'zzmm',
					fieldLabel : '政治面貌'
	    	 },{
					itemId : 'hyzk',
					name : 'hyzk',
					fieldLabel : '婚姻状况'
    		 }]
	        },{
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '学籍信息',
	            collapsible: true,
	            padding:'5 5 10 5',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:250,
	        		labelWidth:100,
	        		padding:'5 0 0 0',
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
					xtype : 'textfield',
					itemId : 'xh',
					name : 'xh',
					fieldLabel : '<font color="red">*</font>学号',
					allowBlank : false,
					blankText : '必填！'
				},{
					itemId : 'xslx',
					name : 'xslx',
					fieldLabel : '学生类型'
	    		},{
					itemId : 'rxfs',
					name : 'rxfs',
					fieldLabel : '入学方式'
	    	   },{
					itemId : 'jylb',
					name : 'jylb',
					fieldLabel : '教育类别'
	    	  },{
					itemId : 'xwlb',
					name : 'xwlb',
					fieldLabel : '学位类别'
	         },{
					itemId:'xz',
					name:'xz',
					fieldLabel: '学制'
			 },{
			        itemId:'fymc',
			        name:'fymc',
			        fieldLabel: '所在学院'
			 },{
			        itemId:'zymc',
			        name:'zymc',
			        fieldLabel: '专业名称'
		     },{
			        itemId:'bjmc',
			        name:'bjmc',
			        fieldLabel: '班級名称'
		     },{
					itemId: 'dsxm',
					name: 'dsxm',
					fieldLabel: '导师姓名'
			},{
			        itemId:'yjfx',
			        name:'yjfx',
			        fieldLabel: '研究方向'
			},{
					itemId : 'pycc',
					name : 'pycc',
					fieldLabel : '培养层次'
	    	},{
					itemId:'sznj',
					name:'sznj',
					fieldLabel:'所在年级'
			},{
			        xtype: 'datefield',
			        itemId: 'rxrq',
			        name: 'rxrq',
	                fieldLabel: '入学日期',
				    format : "Y-m-d",
				    width:250,
	                labelWidth:100,
	        	    padding:'5 0 0 0',
	        	    size:20
			},{					
			        xtype: 'datefield',
			        itemId: 'yjbyrq',
			        name: 'yjbyrq',
	                fieldLabel: '预计毕业日期',
				    format : "Y-m-d",
				    width:250,
	                labelWidth:100,
	        	    padding:'5 0 0 0',
	        	    size:20
			},{
					itemId : 'sfbd',
					name : 'sfbd',
					fieldLabel : '是否报到'
	    	},{	    			
					itemId : 'sfzx',
					name : 'sfzx',
					fieldLabel : '是否在校'
	    	},{
					itemId : 'dqzt',
					name : 'dqzt',
					fieldLabel : '当前状态'
			}]		       
	      },{
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '备注',
	            collapsible: true,
	            padding:'5 5 10 5',	   
	            layout:'auto',
				items:[{
			    	xtype: 'textareafield',
			    	colspan:3,
			    	width:835,
			    	itemId:'bz',
			    	name:'bz',
			    	readOnlyCls: 'x-form-item-label'
		        }]
	        }]
        });
       me.callParent(arguments);
    },
    
    edit: function(rec){
    	var me = this;
		var values = rec.data;
		for(var fieldName in values){
     		var field = me.form.findField(fieldName=='id'?'idCode':fieldName);
     		if(field != null){	
     			if(field.xtype == 'datefield'){
     				if(values[field.name] != null)
     					if(values[field.name].indexOf('-') == -1)
	     					{
	     						var year = values[field.name].substring(0,4);
	     						var month = values[field.name].substring(4,6);
	     						var day = values[field.name].substring(6,8);
	     						values[field.name] = year+ "-" +month+ "-" +day;
	     					}
     				}
     			}
		}
     				
		if(getBrowserName().indexOf('IE')!= -1){ 
			var imgCtr = me.down('#rxzp');
			imgCtr.setSrc(me.imgUrl + '?'+ me.imgId +'='+ values[me.imgId]);
		}else{ 
			var imgCtr = me.down('#rxzp');
			var url;
			if(values['rxzp']!=null)
				url = 'data:image/jpeg;base64,' + imgCtr.getImage(values['rxzp']);
			else
				url = "styles/images/none.jpg";
			imgCtr.setSrc(url);
		}
//		me.form.findField('upload').setFieldLabel("照片");
//		me.form.findField('upload').allowBlank = true;
    }
  
});