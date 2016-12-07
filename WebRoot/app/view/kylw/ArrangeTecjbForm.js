Ext.define('App.view.kylw.ArrangeTecjbForm',{
	extend:'Ext.form.Panel',
//	alias : 'widget.arrangeTecForm',
	xtype : 'form',
//	itemId: 'arrangeTecForm',
	isAdd : true,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me,{
		items:[{
	            xtype: 'fieldset',
	            itemId:'viewXwDbmsbbb1',
	            autoHeight:true,
	            collapsible: true,
	            padding:'5 5 10 5',
	            margin:'15 15 0 15',
	            border:'0 0 0 0',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:250,
	        		labelWidth:100,
	        		padding:'5 3 0 3',
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
	            title: '学生基本信息',
            items: [{
					xtype : 'textfield',
					itemId : 'id',
					name : 'id',
					hidden:true,
					fieldLabel : 'ID'
	               },{
					xtype : 'textfield',
					itemId : 'xh',
					name : 'xh',
					fieldLabel : '学号'
//					value : userName
				},{
					xtype : 'textfield',
					itemId : 'xm',
					name : 'xm',
					fieldLabel : '姓名'
//     				value : userCName
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
	    		}
	    		]
	        }]
//		,
//		 buttons: [{
//        	    text: '确定',
//        	    iconCls:'save_16',
//        	    itemId:'ok',
//        	    action:'ok'
//      	  },{
//        	    text: '退出',
//        	    iconCls:'return_16',
//                handler: function () {
//                    me.up('window').close();
//                }
//            }]
	});
	     me.callParent(arguments);
	},
	
	 loadForm: function(rec){
    	var me = this;
        me.loadRecord(rec);
    },
     KqQjTypeSet: function(){
     	alert(111)
    	var me = this;
    	var form = me.up('window').down('form');
    	var xh = form.down('#xh').getValue();
    	var VViewXwLwsszlzbStore = Ext.StoreMgr.lookup('VViewXwLwsszlzbStore');
    	var index = VViewXwLwsszlzbStore.findBy(
    		function(record,id){
    			return record.get('xh') == xh ;
		});
		if(index != -1){
			var lwtm = VViewXwLwsszlzbStore.getAt(index).get('lwtm');
			form.down('#lwtm').setValue(lwtm);
		}
    },
    setViewForm :function(){
    	var me = this;
    	var textfields =  me.query('textfield');
		for(var i in textfields){
			textfields[i].setReadOnly(true);
			var style = "background:none; border:0px";
			textfields[i].setFieldStyle(style);
		}
//		me.down('#zxap').setDisabled(true)
    }
 }
);