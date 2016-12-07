Ext.define('App.view.pygrjh.XSJCXXDetail', {
    extend: 'Ext.form.Panel',
    alias: 'widget.xsJcxxDetail',
    itemId:'xsJcxxDetail',
//    id:'xsjcxxFormId',
    border:'0 0 0 0',
 	baseCls: 'my-panel-no-border',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	            autoHeight:true,
	            padding:'5 5 5 5',
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
	            	xtype: 'textfield',
	            	itemId:'id',
	            	name:'id',
	            	fieldLabel:'id',
	            	hidden:true
	            },{
					xtype:'textfield',
					itemId:'xh',
					name:'xh',
					fieldLabel:'学号',
				  	width:240,
					labelWidth:100,
					allowBlank : false,	
					blankText : '必填！'
				},{
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
					fieldLabel:'分院名称'
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
	        }]        }
        );
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
				textfields[i].setReadOnly(true);
				var style = "background:none; border:0px";
				textfields[i].setFieldStyle(style);
			}
	  }
});