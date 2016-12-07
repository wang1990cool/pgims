Ext.define('App.view.yx.JbxxDetail',{
	extend: 'Ext.form.Panel',
	alias: 'widget.jbxxDetail',
	itemId: 'jbxxDetail',
	layout: 'auto',
	autoScroll: true,
	readOnlyStyle : 'background:none; border : 0px;font-weight:bold;',

	
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
					itemId : 'zkzh',
					name : 'zkzh',
					fieldLabel : '准考证号'
				},{
					xtype : 'textfield',
					itemId : 'xm',
					name : 'xm',
					fieldLabel : '姓名'
				},{
					xtype : 'textfield',
					itemId : 'xh',
					name : 'xh',
					fieldLabel : '学号'
				
				},{
	    			xtype: 'textfield',
		            itemId: 'xb',
		            name: 'xb',
		            fieldLabel:'性别'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'mz',
		            name: 'mz',
		            fieldLabel : '民族'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'zzmm',
		            name: 'zzmm',
		            fieldLabel : '政治面貌'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'csrq',
		            name: 'csrq',
		            fieldLabel : '出生日期',
		            format : "Y-m-d"
	    		},{
	    			xtype: 'textfield',
		            itemId: 'sfzh',
		            name: 'sfzh',
		            fieldLabel : '身份证号'
		           
	    		},{
	    			xtype: 'textfield',
		            itemId: 'txdz',
		            name: 'txdz',
		            fieldLabel : '通讯地址',
		            hidden:true
	    		},{
	    			xtype: 'textfield',
		            itemId: 'hf',
		            name: 'hf',
		            fieldLabel : '婚否'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'lxdh',
		            name: 'lxdh',
		            fieldLabel : '联系电话'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'yddh',
		            name: 'yddh',
		            fieldLabel : '移动电话'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'dzxx',
		            name: 'dzxx',
		            fieldLabel : '电子邮箱'
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
	
//	loadForm: function() {
//		
//		var me = this;
//		Ext.Ajax.request({
//    		url:'yxXsjbxxgetYxXsjbxx.action',
//    		method: 'get',
//    		params:{zkzh:zkzh},
//    		success: function (response) {
//    	 		var responseMessage = Ext.JSON.decode(response.responseText);
//				var data = responseMessage.result.list[0];
//				 me.down('#zkzh').setValue(data.zkzh);
//		        me.down('#xm').setValue(data.xm);
//		        me.down('#xh').setValue(data.xh);
//		        me.down('#xb').setValue(data.xb);
//		        me.down('#mz').setValue(data.mz);
//		        me.down('#csrq').setValue(data.csrq);
//		        me.down('#sfzh').setValue(data.sfzh);
//		        me.down('#zzmm').setValue(data.zzmm);
//		        me.down('#hf').setValue(data.hf);
//		        me.down('#lxdh').setValue(data.lxdh);
//		        me.down('#yddh').setValue(data.yddh);
//		        me.down('#dzxx').setValue(data.dzxx);
//		        
//			},
//            failure: function (response) {   
//            	
//    		}});
//	}
	
	
});