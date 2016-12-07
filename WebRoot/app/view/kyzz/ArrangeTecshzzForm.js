Ext.define('App.view.kyzz.ArrangeTecshzzForm',{
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
	            itemId:'viewXwDbmsb1',
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
	            title: '记录信息',
            items: [{
	    			xtype: 'textfield',
		            itemId: 'id',
		            name: 'id',
		            fieldLabel : '序号',
		            hidden:true
	    		   },{
	    			xtype: 'textfield',
		            itemId: 'xh',
		            name: 'xh',
		            fieldLabel : '<font color="red">*</font>学号',
		             value: userName
	    		   },{
	    			xtype: 'textfield',
		            itemId: 'xm',
		            name: 'xm',
		            fieldLabel : '<font color="red">*</font>姓名',
		            value : userCName
	    		},{
    		        xtype: "textfield",
    		        fieldLabel : '<font color="red">*</font>学年',
    		        itemId:'xn',
    		        name:'xn',
    		        value: xn
    		    },{
	    			xtype: 'textfield',
		            itemId: 'xq',
		            name: 'xq',
		            fieldLabel : '<font color="red">*</font>学期',
		             value: xq
	        		
	    		},{
	    			xtype: 'textfield',
		            itemId: 'cglxm',
		            name: 'cglxm',
		            fieldLabel : '<font color="red">*</font>课题来源码',
//		             value: '1',
		            hidden:true
	    		},/*,{
	    			xtype: 'textfield',
		            itemId: 'cglx',
		            name: 'cglx',
		            fieldLabel : '<font color="red">*</font>成果类型',
		            value: '论文',
		            listeners:{
					   	select:function(combo, record, index){
					   		var me = this;
					   		var viewXwKyzzbshForm = me.up('#viewXwKyzzbshForm');
//					   		alert(1111)
                            viewXwKyzzbshForm.createKYUUID();	
					   	}
					 }
		           
	    		}*/{
	    			xtype: 'combo',
		            itemId: 'cglx',
		            name: 'cglx',
		             editable:false,
		            fieldLabel : '<font color="red">*</font>成果类型'/*,
		            queryMode : 'remote',
//		            colspan:2,
					displayField : 'cglx',
					valueField:'cglxm',
					store : Ext.create('Ext.data.Store',{
					autoLoad : true,
					fields : [{name : 'cglx'},{name : "cglxm"}],
					proxy : {
					   		type : 'ajax',
					   		url : 'zdGetZD.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {zdName:'ZdCgzzm'},
					   		simpleSortMode : true
					   	},
					sorters : [{
					   		property : 'cglxm',
					   		direction : 'ASC'
					   	}]
					   }),
					    listeners: {
					    	select: function(combo, record, index){
					    		var me = this;
					    		var zqkhdjForm = me.up('#viewXwKyzzbshForm')
					    		zqkhdjForm.down('#cglx').setValue(record[0].data.cglx);
					    		zqkhdjForm.down('#cglxm').setValue(record[0].data.cglxm);
//					    		var viewXwKyzzbshForm = me.up('#viewXwKyzzbshForm');
                            	zqkhdjForm.createKYUUID();	
					    	}
					    }*/

	    		},{
	    			xtype: 'textfield',
		            itemId: 'zzlbm',
		            name: 'zzlbm',
		            fieldLabel : '<font color="red">*</font>著作类别码',
		            hidden:true
	    		},{
	    			xtype: 'combo',
		            itemId: 'zzlb',
		            name: 'zzlb',
		             editable:false,
		            fieldLabel : '<font color="red">*</font>著作类别'/*,
		            queryMode : 'remote',
//		            colspan:2,
					displayField : 'zzlb',
					valueField:'zzlbm',
					store : Ext.create('Ext.data.Store',{
					autoLoad : true,
					fields : [{name : 'zzlb'},{name : "zzlbm"}],
					proxy : {
					   		type : 'ajax',
					   		url : 'zdGetZD.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {zdName:'ZdZzlbm'},
					   		simpleSortMode : true
					   	},
					sorters : [{
					   		property : 'zzlbm',
					   		direction : 'ASC'
					   	}]
					   }),
					    listeners: {
					    	select: function(combo, record, index){
					    		var me = this;
					    		var zqkhdjForm = me.up('#viewXwKyzzbshForm')
					    		zqkhdjForm.down('#zzlb').setValue(record[0].data.zzlb);
					    		zqkhdjForm.down('#zzlbm').setValue(record[0].data.zzlbm);
					    	}
					    }
*/
	    		},{
					xtype : 'textfield',
					itemId : 'zzmc',
					name : 'zzmc',
					colspan:3,
					width:780,
					fieldLabel : '<font color="red">*</font>著作名称'
				},{
					xtype : 'textfield',
					itemId : 'cbs',
					name : 'cbs',
					colspan:2,
					width:450,
					fieldLabel : '<font color="red">*</font>出版社'
				},{
					xtype : 'textfield',
					itemId : 'isbn',
					name : 'isbn',
					fieldLabel : '<font color="red">*</font>ISBN号'
				},{
					xtype : 'textfield',
					itemId : 'lwzz',
					name : 'lwzz',
					colspan:3,
					width:780,
					fieldLabel : '<font color="red">*</font>著作署名'
				},{
					xtype : 'textfield',
					itemId : 'zzzs',
					name : 'zzzs',
					fieldLabel : '<font color="red">*</font>著作字数'
				},{
					xtype : 'textfield',
					itemId : 'brzzzs',
					name : 'brzzzs',
					fieldLabel : '<font color="red">*</font>本人著作字数'
				},{
					xtype : 'textfield',
					itemId : 'xmlym',
					name : 'xmlym',
					fieldLabel : '<font color="red">*</font>项目来源码',
					hidden:true
				},{
	    			xtype: 'combo',
		            itemId: 'xmly',
		            name: 'xmly',
		             editable:false,
		            fieldLabel : '<font color="red">*</font>项目来源'/*,
		            queryMode : 'remote',
//		            colspan:2,
					displayField : 'xmly',
					valueField:'xmlym',
					store : Ext.create('Ext.data.Store',{
					autoLoad : true,
					fields : [{name : 'xmly'},{name : "xmlym"}],
					proxy : {
					   		type : 'ajax',
					   		url : 'zdGetZD.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {zdName:'ZdXmlym'},
					   		simpleSortMode : true
					   	},
					sorters : [{
					   		property : 'xmlym',
					   		direction : 'ASC'
					   	}]
					   }),
					    listeners: {
					    	select: function(combo, record, index){
					    		var me = this;
					    		var zqkhdjForm = me.up('#viewXwKyzzbshForm')
					    		zqkhdjForm.down('#xmly').setValue(record[0].data.xmly);
					    		zqkhdjForm.down('#xmlym').setValue(record[0].data.xmlym);
					    	}
					    }*/

	    		},{
					xtype : 'datefield',
					itemId : 'cbrq',
					name : 'cbrq',
					fieldLabel : '<font color="red">*</font>出版日期',
					format : "Ym",
		            blankText:'不能为空'
				},{
					xtype : 'textfield',
					itemId : 'kyuuid',
					name : 'kyuuid',
//					 colspan:2,
//					 width:780,
					fieldLabel : '<font color="red">*</font>科研成果号'
				
				},{
					xtype : 'textfield',
					itemId : 'lrrgh',
					name : 'lrrgh',
					fieldLabel : '录入人工号',
					 value: userName,
					 hidden:true
				},{
					xtype : 'textfield',
					itemId : 'lrr',
					name : 'lrr',
					fieldLabel : '录入人',
					value : userCName,
					hidden:true
				
				},{
					xtype : 'textfield',
					itemId : 'lrip',
					name : 'lrip',
					fieldLabel : 'ip',
					hidden:true
				},{
	    			xtype: 'textfield',
		            itemId: 'lrsj',
		            name: 'lrsj',
		            fieldLabel : '<font color="red">*</font>登记时间',
		            width:250,
	        		labelWidth:100,
	        		padding:'5 0 0 0',
	        		size:20,
	        		value: Ext.Date.format(new Date(), 'Y-m-d H:i:s'),
    				readOnly: true,
    				fieldStyle:'background:none; border : 0px;font-weight:bold;'
	        		
	    		},{
					xtype : 'textfield',
					itemId : 'ztm',
					name : 'ztm',
					fieldLabel : '状态码',
//					 value: userName,
					 hidden:true
				},{
					xtype : 'textfield',
					itemId : 'zt',
					name : 'zt',
					fieldLabel : '状态',
//					value : userCName,
					hidden:true
				
				}
	    		]
	        },
		        {
	            xtype: 'fieldset',
	            itemId:'fjzl',
	            autoHeight:true,
	            collapsible: true,
	            padding:'5 5 10 5',
	            margin:'15 15 0 15',
	            border:'0 0 0 0',
	            title: '附件资料信息',
            items: [
            		 Ext.create('App.view.kyzz.XwKyzzzlbList',{
						itemId: 'xwKyzzzlbList',
						height:'auto',
						width:'600'
					})
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
			if(textfields[i].itemId == 'xq' ||
					textfields[i].itemId == 'xn'||
					textfields[i].itemId == 'tt'||
					textfields[i].itemId == 'xm'||
					textfields[i].itemId == 'xh'||
					textfields[i].itemId == 'lwtm'){
//				continue;
			textfields[i].setReadOnly(true);
			var style = "background:none; border:0px";
			textfields[i].setFieldStyle(style);
					}
		}
//		me.down('#zxap').setDisabled(true)
    },
    setViewdForm :function(){
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