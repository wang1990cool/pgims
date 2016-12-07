Ext.define('App.view.ktbg.ViewXwKtbgsqshForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.viewXwKtbgsqshForm',
    itemId:'viewXwKtbgsqshForm',
 
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
		            itemId: 'shzt',
		            name: 'shzt',
		            fieldLabel : '审批状态',
		            hidden:true
	    		   },{
	    			xtype: 'textfield',
		            itemId: 'shztm',
		            name: 'shztm',
		            fieldLabel : '审批状态码',
		            hidden:true
	    		   },{
                    xtype: 'radiogroup',
                    itemId: 'shztm',
                    name: 'shztm',
                    height: 20,
                    width: 231,
                    colspan:3,
                    fieldLabel: '<font color="red">*</font>审核结果',
                    items: [{
                        xtype: 'radiofield',
                        name: 'audit',
                        inputValue:true,
                        boxLabel: '同意', 
                        checked: true,
                        listeners:{
                                    change:function(o,newValue,oldValue,eOpts){
											if(newValue){
												me.down('#shzt').setValue('审核通过');
												me.down('#shztm').setValue('TG');
											}
									}
                                    
                                    }
                        
                    },{
                        xtype: 'radiofield',
                        name: 'audit',
                        inputValue:false,
                        boxLabel: '退回',
                        listeners:{
                                   change:function(o,newValue,oldValue,eOpts){
											if(newValue){
												me.down('#shzt').setValue('审核未通过');
												me.down('#shztm').setValue('WTG');
											}
									    }
                                    }
                    }]
                },{
	    			xtype: 'textfield',
		            itemId: 'shr',
		            name: 'shr',
		            fieldLabel : '<font color="red">*</font>审核人',
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
	        		
	    		},{xtype: 'textareafield',
			    	fieldLabel : '审核意见',
			    	colspan:3,
			    	width: '00%',
    		        height: 50,
    		        cols: 90,
			    	itemId:'shyj',
			    	name:'shyj',
			    	readOnlyCls: 'x-form-item-label'
	    		}]
	        }, 
				{
	            xtype: 'fieldset',
	            itemId:'xsJcxxb',
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
	            title: '学生基本信息',
            items: [
	            	{
					xtype : 'textfield',
					itemId : 'xh',
					name : 'xh',
					fieldLabel : '学号'
				},{
					xtype : 'textfield',
					itemId : 'xm',
					name : 'xm',
					fieldLabel : '姓名'
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
	    		},{
	    			xtype: 'textfield',
		            itemId: 'xslx',
		            name: 'xslx',
		            fieldLabel : '学生类型'
		           
	    		},{
	    			xtype: 'textfield',
		            itemId: 'pycc',
		            name: 'pycc',
		            fieldLabel : '培养层次'
		           
	    		},{
	    			xtype: 'textfield',
		            itemId: 'dsh',
		            name: 'dsh',
		            fieldLabel : '导师工号',
		            hidden:true
		            
	    		},{
	    			xtype: 'textfield',
		            itemId: 'dsxm',
		            name: 'dsxm',
		            fieldLabel : '导师姓名'
	    		}]
	        }, 
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
//	        		autoHeight : true,
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
			    	fieldLabel : '<font color="red">*</font>审核意见',
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
		            itemId: 'saveBtn',
		            text:'确定',
		            tooltip:'确定',
		            iconCls:'save_16',
		            handler: function(){
		        	this.up('window').down('form').xsSubmit();
		        	this.up('window').hide();
		        }
				},'-',{
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
	loadEditViewXwKtbgsqValue:function(rec){
		var me = this;
		var fs = me.down('#viewXwKtbgsq');
		var jsonObj = JSON.parse(Ext.encode(rec.data));
		fs.items.each(function(item){
			if(item.itemId != undefined){
				var itemId = '#'+item.itemId;
				fs.down(itemId).setValue(jsonObj[item.itemId])
			}
		})
	},
	loadXsjcxxValue:function(rec){
		var me = this;
		var fs = me.down('#xsJcxx');
		var jsonObj = JSON.parse(Ext.encode(rec.data));
		fs.items.each(function(item){
			if(item.itemId != undefined){
				var itemId = '#'+item.itemId;
				fs.down(itemId).setValue(jsonObj[item.itemId])
			}
		})
	},
	
	loadXwKtbgsqbValue:function(rec){
		var me = this;
		var fs = me.down('#viewXwKtbgsq')
		var jsonObj = JSON.parse(Ext.encode(rec.data));
		fs.items.each(function(item){
//			alert(item.itemId)
			if(item.itemId !='id'){
				var itemId = '#'+item.itemId;
				fs.down(itemId).setValue(jsonObj[item.itemId])
			}
		})
	},
	xsSubmit: function (){
		var me = this;
		var xwKtbgsqb = me.down('#xwKtbgsqb'); 
		var json = {}
		var items = xwKtbgsqb.items;
		values = me.form.getValues();
		xwKtbgsqb.items.each(function(fsItem){
			json[fsItem.itemId] = fsItem.getValue();
			if(fsItem.itemId == 'jhktrq'){
				json[fsItem.itemId] = values.jhktrq.replace(/\-/g, "");
			}else if(fsItem.itemId == 'jhktsj'){
				json[fsItem.itemId] = values.jhktsj.replace(/\2008-01-01T0/g, "");
			}else{
				json[fsItem.itemId] = fsItem.getValue();
			}
		})
		var form = me;
		json['shzt'] = form.down('#shzt').getRawValue();
		json['xh'] = form.down('#xh').getValue();
		json['xm'] = form.down('#xm').getValue();
		json['shztm'] = form.down('#shztm').getValue();
		json['shyj'] = form.down('#shyj').getValue();
		if(json['shzt'] == '审核通过')
		{json['shztm'] = 'TG';
		}else if(json['shzt'] == '审核未通过')
		{json['shztm'] = 'WTG';}
//		alert(json['shztm'])
		
//		alert(Ext.encode(json))
			
//			alert(Ext.encode(json['jhktrq']))
		    Ext.Ajax.request({
				url : 'xwKtbgsqbEdit.action',
				waitTitle : '提示',
				actionMethods : 'post',
				params:{datas:Ext.encode(json)},
				waitMsg : '正在提交数据请稍候...',
				success : function(response, opts) {
					var result = Ext.decode(response.responseText);
					var success = result.result.success;
					if(success){
						var msg = "审核成功！";
						Ext.MessageBox.show({
				           title: '提示',
				           msg: msg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.INFO
				        });
				         var viewXwKtbgsqList = Ext.ComponentQuery.query('#viewXwKtbgsqList');
							 if(viewXwKtbgsqList.length > 0) {
								 var viewXwKtbgsqList = viewXwKtbgsqList[0];
								 var store = viewXwKtbgsqList.getStore();
									 store.load();
								}
					}
				},
				failure : function(form, action) {
					var errmsg = "审核失败！";
					 Ext.MessageBox.show({
			           title: '错误',
			           msg: errmsg,
			           buttons: Ext.MessageBox.OK,
			           icon: Ext.MessageBox.ERROR,
//			           icon: Ext.MessageBox.WARNING,
			           fn: function(id, msg){  
			        	   form.getForm().reset();
					    }  
			       });
				}
			});
    	
	},
	setViewForm :function(){
    	var me = this;
		var textfields =  me.query('textfield');
		for(var i in textfields){
			textfields[i].setReadOnly(true);
		}
    }
	
});