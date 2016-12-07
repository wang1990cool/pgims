Ext.define('App.view.kyzz.ArrangeTecshzsForm',{
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
	            itemId:'viewXwDbmsbb1',
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
	            title: '审核信息',
            items: [{
	    			xtype: 'textfield',
		            itemId: 'zt',
		            name: 'zt',
		            fieldLabel : '审批状态',
		            hidden:true
	    		   },{
	    			xtype: 'textfield',
		            itemId: 'ztm',
		            name: 'ztm',
		            fieldLabel : '审批状态码',
		            hidden:true
	    		   },{
                    xtype: 'radiogroup',
                    itemId: 'ztmm',
                    name: 'ztmm',
                    height: 20,
                    width: 231,
//                    colspan:3,
                    fieldLabel: '<font color="red">*</font>审核结果',
                    items: [{
                        xtype: 'radiofield',
                        name: 'ztmm',
                        inputValue:true,
                        boxLabel: '同意', 
                        checked: true,
                        listeners:{
                                    change:function(o,newValue,oldValue,eOpts){
											if(newValue){
												me.down('#zt').setValue('终审通过');
												me.down('#ztm').setValue('4');
											}
									}
                                    
                                    }
                        
                    },{
                        xtype: 'radiofield',
                        name: 'ztmm',
                        inputValue:false,
                        boxLabel: '退回',
                        listeners:{
                                   change:function(o,newValue,oldValue,eOpts){
											if(newValue){
												me.down('#zt').setValue('终审未通过');
												me.down('#ztm').setValue('5');
											}
									    }
                                    }
                    }]
                },{
					xtype : 'textfield',
					itemId : 'shjgm',
					name : 'shjgm',
					fieldLabel : '<font color="red">*</font>发表状态码',
					hidden:true
				},{
	    			xtype: 'combo',
		            itemId: 'shjg',
		            name: 'shjg',
		             editable:false,
		            fieldLabel : '<font color="red">*</font>审查结果',
		            queryMode : 'remote',
		            colspan:2,
					displayField : 'shjg',
					valueField:'shjgm',
					store : Ext.create('Ext.data.Store',{
					autoLoad : true,
					fields : [{name : 'shjg'},{name : "shjgm"}],
					proxy : {
					   		type : 'ajax',
					   		url : 'zdGetZD.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {zdName:'ZdShjgm'},
					   		simpleSortMode : true
					   	},
					sorters : [{
					   		property : 'shjgm',
					   		direction : 'ASC'
					   	}]
					   }),
					    listeners: {
					    	select: function(combo, record, index){
					    		var me = this;
					    		var zqkhdjForm = me.up('#arrangeTecshzsForm')
					    		zqkhdjForm.down('#shjg').setValue(record[0].data.shjg);
					    		zqkhdjForm.down('#shjgm').setValue(record[0].data.shjgm);
					    	}
					    }

	    		},{
	    			xtype: 'textfield',
		            itemId: 'zsr',
		            name: 'zsr',
		            fieldLabel : '<font color="red">*</font>审核人',
		            value : userCName,
    		        readOnly: true,
    				fieldStyle:'background:none; border : 0px;font-weight:bold;'
	    		},{
    		        xtype: "textfield",
    		        fieldLabel : '<font color="red">*</font>审核人工号',
    		        itemId:'zsrgh',
    		        name:'zsrgh',
    		        value: userName,
    		        readOnly: true,
    				fieldStyle:'background:none; border : 0px;font-weight:bold;'
    		    },{
	    			xtype: 'textfield',
		            itemId: 'zssj',
		            name: 'zssj',
		            fieldLabel : '<font color="red">*</font>审批时间',
		            width:250,
	        		labelWidth:100,
	        		padding:'5 0 0 0',
	        		size:20,
	        		value: Ext.Date.format(new Date(), 'Y-m-d H:i:s'),
    				readOnly: true,
    				fieldStyle:'background:none; border : 0px;font-weight:bold;'
	        		
	    		},{xtype: 'textareafield',
			    	fieldLabel : '审核意见',
			    	colspan:3,
			    	width: '00%',
    		        height: 50,
    		        cols: 90,
			    	itemId:'zsyj',
			    	name:'zsyj',
			    	readOnlyCls: 'x-form-item-label'
	    		}
	    		]
	        }]
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
//    	alert(111)
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