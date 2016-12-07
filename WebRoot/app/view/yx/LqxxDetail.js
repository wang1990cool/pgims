Ext.define('App.view.yx.LqxxDetail',{
	extend: 'Ext.form.Panel',
	alias: 'widget.lqxxDetail',
	itemId: 'lqxxDetail',
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
	            title: '录取信息',
                items: [ {
					xtype : 'textfield',
					itemId : 'lqxy',
					name : 'lqxy',
					fieldLabel : '录取学院'
				},{
					xtype : 'textfield',
					itemId : 'lqzy',
					name : 'lqzy',
					fieldLabel : '录取专业'
				},{
	    			xtype: 'textfield',
		            itemId: 'lqlb',
		            name: 'lqlb',
		            fieldLabel:'录取类别'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'xh',
		            name: 'xh',
		            fieldLabel : '学号'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'rxfs',
		            name: 'rxfs',
		            fieldLabel : '入学方式'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'xz',
		            name: 'xz',
		            fieldLabel : '学制'
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
//		        me.down('#xm').setValue(data.xm);
//		        me.down('#xb').setValue(data.xb);
//		        me.down('#mz').setValue(data.mz);
//		        me.down('#csrq').setValue(data.csrq);
//		        me.down('#sfzh').setValue(data.sfzh);
//		        me.down('#zzmm').setValue(data.zzmm);
//		        me.down('#xwlb').setValue(data.xwlb);
//		        me.down('#hf').setValue(data.hf);
//		        me.down('#txdz').setValue(data.txdz);
//		        me.down('#lxdh').setValue(data.lxdh);
//		        me.down('#yddh').setValue(data.yddh);
//		        me.down('#dzyx').setValue(data.dzyx);
//		        
//			},
//            failure: function (response) {   
//            	
//    		}});
//	}
	
	
});