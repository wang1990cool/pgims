Ext.define('App.view.xs.TyXsJcxxxDetail', {
    extend: 'Ext.form.Panel',
    alias: 'widget.tyXsJcxxxDetail',
 
   
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	            itemId:'xsJcxxb',
	            autoHeight:true,
//				autoWidth:false,
//	            autoHeight:true,
	            collapsible: true,
	            padding:'5 5 10 5',
	            margin:'15 15 0 15',
	            border:'0 0 0 0',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:232,
	        		labelWidth:100,
	        	    padding:'3 3 0 3',
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
                items: [ {
					xtype : 'textfield',
					itemId : 'xh',
					name : 'xh',
					fieldLabel : '学号',
					value : userName
				},{
					xtype : 'textfield',
					itemId : 'xm',
					name : 'xm',
					fieldLabel : '姓名',
     				value : userCName
				},{
	    			xtype: 'textfield',
		            itemId: 'sznj',
		            name: 'sznj',
		            fieldLabel:'年级'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'fymc',
		            name: 'fymc',
		            fieldLabel : '学院名称'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'zymc',
		            name: 'zymc',
		            fieldLabel : '专业名称'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'xwlb',
		            name: 'xwlb',
		            fieldLabel : '学位类别'
	    		},
	    			{
	    			xtype: 'textfield',
		            itemId: 'pycc',
		            name: 'pycc',
		            fieldLabel : '培养层次'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'xslx',
		            name: 'xslx',
		            fieldLabel : '学生类型'
		           
	    		},{
	    			xtype: 'textfield',
		            itemId: 'dsh',
		            name: 'dsh',
		            fieldLabel : '导师号',
		            hidden:true
	    		},{
	    			xtype: 'textfield',
		            itemId: 'dsxm',
		            name: 'dsxm',
		            fieldLabel : '导师姓名'
	    		}]
	        }]
        });
       me.callParent(arguments);
    }
    
});