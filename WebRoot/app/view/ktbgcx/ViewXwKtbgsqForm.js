Ext.define('App.view.ktbgcx.ViewXwKtbgsqForm', {
    extend: 'Ext.form.Panel',
    xtype : 'form',
    alias: 'widget.viewXwKtbgsqForm',
    itemId:'viewXwKtbgsqForm',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	            itemId:'viewXwKtbgsq1',
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
	            title: '审批信息',
            items: [{
	    			xtype: 'textfield',
		            itemId: 'shztm',
		            name: 'shztm',
		            fieldLabel : '审批状态码',
		            hidden:true
	    		},{
	    			xtype: 'combo',
		            itemId: 'shzt',
		            name: 'shzt',
		            colspan:3,
		            fieldLabel : '<font color="red">*</font>审批状态',
		            queryMode : 'remote',
//		            colspan:2,
					    displayField : 'shzt',
					    valueField:'shztm',
					    store : Ext.create('Ext.data.Store',{
					   	autoLoad : true,
					   	fields : [{name : 'shzt'},
					   	            {name : "shztm"}],
					   	proxy : {
					   		type : 'ajax',
					   		url : 'zdGetZD.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {zdName:'ZdShztm'},
					   		simpleSortMode : true
					   	},
					   	sorters : [{
					   		property : 'shztm',
					   		direction : 'ASC'
					   	}]
					   })
	    		},{
	    			xtype: 'textfield',
		            itemId: 'shr',
		            name: 'shr',
		            fieldLabel : '<font color="red">*</font>审  核  人',
		            value : userCName
	    		},{
    		        xtype: "textfield",
    		        fieldLabel : '<font color="red">*</font>审核人工号',
    		        itemId:'shrgh',
    		        name:'shrgh',
    		        value: userName
    		    },{
	    			xtype: 'textfield',
		            itemId: 'shsj',
		            name: 'shsj',
		            fieldLabel : '<font color="red">*</font>审批时间',
		            width:250,
	        		labelWidth:100,
	        		padding:'5 0 0 0',
	        		size:20,
	        		value: Ext.Date.format(new Date(), 'Y-m-d H:i:s'),
    				readOnly: true,
    				fieldStyle:'background:none; border : 0px;font-weight:bold;'
	        		
	    		}
	    		,{xtype: 'textareafield',
			    	fieldLabel : '审核意见',
			    	colspan:3,
			    	width: '100%',
    		        height: 50,
    		        cols: 90,
			    	itemId:'shyj',
			    	name:'shyj',
			    	readOnlyCls: 'x-form-item-label'
	    		}]
	        }, 
				Ext.create('App.view.xs.TyXsJcxxDetail'),
			{
	            xtype: 'fieldset',
	            title: '申请信息',
	            collapsible: true,
	            itemId : 'xwKtbgsqb',
	            padding:'5 5 10 5',
	            margin:'15 15 0 15',
	            border:'0 0 0 0',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		//autoHeight : true,
	        		labelAlign : "right",
	        		width:250,
	        		labelWidth:100,
	        	    padding:'3 0 0 0',
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
					itemId : 'id',
					name : 'id',
					fieldLabel : 'ID',
					hidden:true
	            },{
	    			xtype: 'textareafield',
		            itemId: 'lwtm',
		            name: 'lwtm',
		            width:700,
		            colspan:3,
		            height:25,
		            fieldLabel : '<font color="red">*</font>论文题目',
		            blankText:'不能为空'
	    		},{
	    			xtype: 'datefield',
		            itemId: 'jhktrq',
		            name: 'jhktrq',
		            fieldLabel : '<font color="red">*</font>计划开题日期',
		            format : "Y-m-d",
		            blankText:'不能为空'
	    		},{
	    			xtype: 'timefield',
		            itemId: 'jhktsj',
		            name: 'jhktsj',
		            fieldLabel : '<font color="red">*</font>计划开题时间',
		            format : 'H:i',
		            minValue: '8:00',
			        maxValue: '20:00',
			        increment: 30,
			        editable : false,
			        blankText:'不能为空'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'jhktdd',
		            name: 'jhktdd',
		            fieldLabel : '<font color="red">*</font>计划开题地点',
		            blankText:'不能为空'

	    		},{
	    			xtype: 'hiddenfield',
		            itemId: 'shsj',
		            name: 'shsj',
		            fieldLabel : '<font color="red">*</font>审批时间',
		            width:250,
	        		labelWidth:100,
	        		padding:'5 0 0 0',
	        		size:20,
	        		value: Ext.Date.format(new Date(), 'Y-m-d H:i:s'),
    				readOnly: true,
    				fieldStyle:'background:none; border : 0px;font-weight:bold;'
	        		
	    		}
	    		,{xtype: 'textareafield',
			    	fieldLabel : '审核意见',
			    	hidden:true,
			    	colspan:3,
			    	width: '00%',
    		        height: 50,
    		        cols: 90,
			    	itemId:'shyj',
			    	name:'shyj',
			    	readOnlyCls: 'x-form-item-label'
	    		},{
	    			xtype: 'hiddenfield',
		            itemId: 'shr',
		            name: 'shr',
//		            hidden:true,
		            fieldLabel : '<font color="red">*</font>审核人',
		            value : userCName
	    		},{
    		        xtype: "hiddenfield",
    		        fieldLabel : '<font color="red">*</font>审核人工号',
    		        itemId:'shrgh',
    		        name:'shrgh',
//    		        hidden:true,
    		        value: userName
    		    },{
			    	xtype: 'textareafield',
			    	fieldLabel : '<font color="red">*</font>论文简介',
			    	colspan:3,
			    	 autoHeight:true, 
			    	width:780,//835
			    	height:150,
			    	itemId:'lwjj',
			    	name:'lwjj',
			    	readOnlyCls: 'x-form-item-label'
		        }
		        ]}
			],
 		dockedItems: [{
			    xtype: 'toolbar',
			    itemId:'auditToolbar',
			    dock: 'top',
			    items:[{
		            itemId: 'cancelBtn',
		            text:'退出',
		            tooltip:'退出',
		            iconCls:'return_16',
		            handler: function () {
		            	me.up('window').close();
		            }
				}]
			}]
				   });
       me.callParent(arguments);
    },
    
    loadForm : function(rec){
		var me = this;
		me.loadRecord(rec);
	},
	setViewForm :function(){
    	var me = this;
		var textfields =  me.query('textfield');
		for(var i in textfields){
			textfields[i].setReadOnly(true);
		}
    }
	
});