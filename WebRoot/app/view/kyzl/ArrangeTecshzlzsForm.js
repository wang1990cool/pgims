Ext.define('App.view.kyzl.ArrangeTecshzlzsForm',{
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
					   		var viewXwKyzlbshForm = me.up('#viewXwKyzlbshForm');
//					   		alert(1111)
                            viewXwKyzlbshForm.createKYUUID();	
					   	}
					 }
		           
	    		}*/{
	    			xtype: 'combo',
		            itemId: 'cglx',
		            name: 'cglx',
		             editable:false,
		             allowBlank : true,
					blankText : '必填！',
		            fieldLabel : '<font color="red">*</font>成果类型',
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
					   		extraParams: {zdName:'ZdCgzlm'},
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
					    		var zqkhdjForm = me.up('#arrangeTecshzlForm')
					    		zqkhdjForm.down('#cglx').setValue(record[0].data.cglx);
					    		zqkhdjForm.down('#cglxm').setValue(record[0].data.cglxm);
//					    		var viewXwKyzlbshForm = me.up('#viewXwKyzlbshForm');
                            	zqkhdjForm.createKYUUID();	
					    	}
					    }

	    		},{
	    			xtype: 'textfield',
		            itemId: 'fmlxm',
		            name: 'fmlxm',
		            fieldLabel : '<font color="red">*</font>发明类型码',
		            hidden:true
	    		},{
	    			xtype: 'combo',
		            itemId: 'fmlx',
		            name: 'fmlx',
		             editable:false,
		             allowBlank : true,
					blankText : '必填！',
		            fieldLabel : '<font color="red">*</font>发明类型',
		            queryMode : 'remote',
//		            colspan:2,
					displayField : 'fmlx',
					valueField:'fmlx',
					store : Ext.create('Ext.data.Store',{
					autoLoad : true,
					fields : [{name : 'fmlx'},{name : "fmlxm"}],
					proxy : {
					   		type : 'ajax',
					   		url : 'zdGetZD.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {zdName:'ZdFmlxm'},
					   		simpleSortMode : true
					   	},
					   
					sorters : [{
					   		property : 'fmlxm',
					   		direction : 'ASC'
					   	}]
					   }),
					   listeners:{    
						       select:function(combo,record,index){
						        	
//						           var me = this;
//					    		var zqkhdjForm = me.up('#viewXwKyzlbshForm')
					    		me.down('#fmlx').setValue(record[0].data.fmlx);
					    		me.down('#fmlxm').setValue(record[0].data.fmlxm);
						        }    
					  	  }

	    		},{
					xtype : 'textfield',
					itemId : 'zlmc',
					name : 'zlmc',
					colspan:3,
					width:780,
					fieldLabel : '<font color="red">*</font>发明创造名称'
				}/*,{
					xtype : 'textfield',
					itemId : 'kwcbh',
					name : 'kwcbh',
//					colspan:2,
					allowBlank : true,
					blankText : '必填！',
					fieldLabel : '<font color="red">*</font>刊物出版号'
				}*/,{
					xtype : 'textfield',
					itemId : 'fmr',
					name : 'fmr',
					colspan:3,
					width:780,
					allowBlank : true,
					blankText : '必填！',
					fieldLabel : '<font color="red">*</font>发明人'
				},{
					xtype : 'textfield',
					itemId : 'brpm',
					name : 'brpm',
					allowBlank : true,
					blankText : '必填！',
					fieldLabel : '<font color="red">*</font>本人排名'
				},{
					xtype : 'textfield',
					itemId : 'zlfbztm',
					name : 'zlfbztm',
					fieldLabel : '<font color="red">*</font>发表状态码',
					hidden:true
				},{
	    			xtype: 'combo',
		            itemId: 'zlfbzt',
		            name: 'zlfbzt',
		             editable:false,
		             allowBlank : true,
					blankText : '必填！',
		            fieldLabel : '<font color="red">*</font>发表状态',
		            queryMode : 'remote',
//		            colspan:2,
					displayField : 'zlfbzt',
					valueField:'zlfbzt',
					store : Ext.create('Ext.data.Store',{
					autoLoad : true,
					fields : [{name : 'zlfbzt'},{name : "zlfbztm"}],
					proxy : {
					   		type : 'ajax',
					   		url : 'zdGetZD.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {zdName:'ZdZlfbztm'},
					   		simpleSortMode : true
					   	},
					sorters : [{
					   		property : 'zlfbztm',
					   		direction : 'ASC'
					   	}]
					   }),
					    listeners: {
					    	select: function(combo, record, index){
					    		var me = this;
					    		var zqkhdjForm = me.up('#arrangeTecshzlForm')
					    		zqkhdjForm.down('#zlfbzt').setValue(record[0].data.zlfbzt);
					    		zqkhdjForm.down('#zlfbztm').setValue(record[0].data.zlfbztm);
					    	}
					    }

	    		},{
					xtype : 'textfield',
					itemId : 'sqr',
					name : 'sqr',
					fieldLabel : '申请日期',
					format : "Y-m",
		            blankText:'不能为空'
				},{
					xtype : 'textfield',
					itemId : 'kyuuid',
					name : 'kyuuid',
					 colspan:3,
					 width:780,
					fieldLabel : '<font color="red">*</font>科研成果号'
				
				},{
					xtype : 'textfield',
					itemId : 'sqh',
					name : 'sqh',
					fieldLabel : '<font color="red">*</font>申请号'
				},{
					xtype : 'textfield',
					itemId : 'sqggr',
					name : 'sqggr',
					fieldLabel : '<font color="red">*</font>授权公告日',
					format : "Y-m"
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
		            fieldLabel : '<font color="red">*</font>登记信息时间',
		            width:250,
	        		labelWidth:100,
	        		padding:'5 0 0 0',
	        		size:20,
//	        		value: Ext.Date.format(new Date(), 'Y-m-d H:i:s'),
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
				
				},{
					xtype : 'textfield',
					itemId : 'shrgh',
					name : 'shrgh',
					fieldLabel : '录入人工号',
					 hidden:true
				},{
					xtype : 'textfield',
					itemId : 'shr',
					name : 'shr',
					fieldLabel : '录入人',
					hidden:true
				
				},{
					xtype : 'textfield',
					itemId : 'ship',
					name : 'ship',
					fieldLabel : 'ip',
					hidden:true
				},{
	    			xtype: 'textfield',
		            itemId: 'shsj',
		            name: 'shsj',
		            fieldLabel : '<font color="red">*</font>登记信息时间',
		            width:250,
	        		labelWidth:100,
					hidden:true
	        		
	    		},{xtype: 'textareafield',
			    	fieldLabel : '审核意见',
			    	colspan:3,
			    	width: '00%',
    		        height: 50,
    		        cols: 90,
			    	itemId:'shyj',
			    	name:'shyj',
			    	readOnlyCls: 'x-form-item-label',
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
            		 Ext.create('App.view.kyzl.XwKyzlzlbList',{
						itemId: 'xwKyzlzlbList',
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