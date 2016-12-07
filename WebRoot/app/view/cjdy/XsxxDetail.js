Ext.define('App.view.cjdy.XsxxDetail', {
    extend: 'Ext.form.Panel',
    itemId:'xsxxDetail',
    border:'0 0 0 0',
 	isAdd:true,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
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
		            itemId: 'nj',
		            name: 'nj',
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
	        },
			{
			xtype:'fieldset',
			autoHeight:true,
			itemId:'bzFieldset',
			border:'0 0 0 0',
			title:'备注:',
			collapsible: false,
			width:755,
			margin:'10 15 10 15',
			padding:'5 5 5 5',
			layout:'fit',
			items:[{
				xtype:'textareafield',
				itemId:'bz',
				name:'bz',
				readOnlyCls:'x-item-disabled'
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
				textfields[i].setReadOnly(true);
				var style = "background:none; border:0px";
				textfields[i].setFieldStyle(style);
			}
			me.down('#bzFieldset').setBorder('1 1 1 1');
	  }
	  
});