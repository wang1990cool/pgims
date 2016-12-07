Ext.define('App.view.kttjsh.ViewXwKtbgzlzbshForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.viewXwKtbgzlzbshForm',
    itemId:'viewXwKtbgzlzbshForm',
 
    initComponent: function() {
        var me = this;
		
        Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	            itemId:'xwKtbgzb1',
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
                    colspan:2,
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
                }/*,{
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
    		    }*/,{
	    			xtype: 'textfield',
		            itemId: 'dsshsj',
		            name: 'dsshsj',
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
			    	itemId:'sdshyj',
			    	name:'dsshyj',
			    	readOnlyCls: 'x-form-item-label'
	    		}]
	        }, 
				/*{
	            xtype: 'fieldset',
	            itemId:'fjzl',
	            autoHeight:true,
	            collapsible: true,
	            padding:'5 5 10 5',
	            margin:'15 15 0 15',
	            border:'0 0 0 0',
	            title: '附件资料信息',
            items: [
            		 Ext.create('App.view.kttjsh.XwKtbgzlbList',{
						itemId: 'xwKtbgzlbList',
						height:'auto',
						width:'792'
					})
	            	]
	        }, */
			{
	            xtype: 'fieldset',
	            title: '报告申请信息',
	            collapsible: true,
	            itemId : 'xwKtbgzb',
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
					hidden:true
				},{
					xtype : 'textfield',
					itemId : 'xh',
					name : 'xh',
					fieldLabel : '<font color="red">*</font>学号'
				},{
					xtype : 'textfield',
					itemId : 'xm',
					name : 'xm',
					fieldLabel : '<font color="red">*</font>姓名',
     				value : userCName
				},{
	    			xtype: 'textfield',
		            itemId: 'xn',
		            name: 'xn',
		            fieldLabel:'<font color="red">*</font>学年'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'xq',
		            name: 'xq',
		            fieldLabel : '<font color="red">*</font>学期'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'lwtm',
		            name: 'lwtm',
		            fieldLabel : '<font color="red">*</font>论文题目'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'lwlxm',
		            name: 'lwlxm',
		            fieldLabel : '论文类型码',
		            hidden:true
	    		},{
	    			xtype: 'combo',
		            itemId: 'lwlx',
		            name: 'lwlx',
		            fieldLabel : '<font color="red">*</font>文件类型',
		            queryMode : 'remote',
					displayField : 'lwlx',
					valueField:'lwlxm',
					store : Ext.create('Ext.data.Store',{
					autoLoad : true,
					fields : [{name : 'lwlx'},{name : "lwlxm"}],
					proxy : {
					   		type : 'ajax',
					   		url : 'zdGetZD.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {zdName:'ZdLwlxm'},
					   		simpleSortMode : true
					   	},
					sorters : [{
					   		property : 'lwlxm',
					   		direction : 'ASC'
					   	}]
					   }),
					    listeners: {
					    	select: function(combo, record, index){
					    		var me = this;
					    		var zqkhdjForm = me.up('#viewXwKtbgzlzbForm')
					    		zqkhdjForm.down('#lwlx').setValue(record[0].data.lwlx);
					    		zqkhdjForm.down('#lwlxm').setValue(record[0].data.lwlxm);
					    	}
					    }

					   
	    		},{
	    			xtype: 'textfield',
		            itemId: 'ktmc',
		            name: 'ktmc',
		            fieldLabel : '<font color="red">*</font>开题名称'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'ktlym',
		            name: 'ktlym',
		            fieldLabel : '开题来源码',
		            hidden:true
	    		},{
	    			xtype: 'combo',
		            itemId: 'ktly',
		            name: 'ktly',
		            fieldLabel : '<font color="red">*</font>开题来源',
		            queryMode : 'remote',
					displayField : 'ktly',
					valueField:'ktlym',
					store : Ext.create('Ext.data.Store',{
					autoLoad : true,
					fields : [{name : 'ktly'},{name : "ktlym"}],
					proxy : {
					   		type : 'ajax',
					   		url : 'zdGetZD.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {zdName:'ZdKtlym'},
					   		simpleSortMode : true
					   	},
					sorters : [{
					   		property : 'ktlym',
					   		direction : 'ASC'
					   	}]
					   }),
					    listeners: {
					    	select: function(combo, record, index){
					    		var me = this;
					    		var zqkhdjForm = me.up('#viewXwKtbgzlzbForm')
					    		zqkhdjForm.down('#ktly').setValue(record[0].data.ktly);
					    		zqkhdjForm.down('#ktlym').setValue(record[0].data.ktlym);
					    	}
					    }

	    		},{
	    			xtype: 'textfield',
		            itemId: 'ktfzr',
		            name: 'ktfzr',
		            fieldLabel : '开题负责人'
	    		},{
	    			xtype: 'datefield',
		            itemId: 'ktrq',
		            name: 'ktrq',
		            fieldLabel : '<font color="red">*</font>计划开题日期',
		            format : "Y-m-d",
		            allowBlank : false,
					blankText : '必填！'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'ktdd',
		            name: 'ktdd',
		            fieldLabel : '<font color="red">*</font>开题地点'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'pszzz',
		            name: 'pszzz',
		            fieldLabel : '评审组组长'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'shztm',
		            name: 'shztm',
		            fieldLabel : '审核状态码',
		            hidden:true
	    		},{
	    			xtype: 'textfield',
		            itemId: 'shzt',
		            name: 'shzt',
		            fieldLabel : '审核状态',
		            hidden:true
		            
	    		},{xtype: 'textareafield',
			    	fieldLabel : '导师审核意见',
			    	colspan:3,
			    	width: '100%',
    		        height: 50,
    		        cols: 90,
			    	itemId:'dsshyj',
			    	name:'dsshyj',
			    	readOnlyCls: 'x-form-item-label',
			    	hidden:true
	    		},{
	    			xtype: 'textfield',
		            itemId: 'dsshsj',
		            name: 'dsshsj',
		            fieldLabel : '导师审核时间',
		            width:250,
	        		labelWidth:100,
	        		padding:'5 0 0 0',
	        		size:20,
	        		value: Ext.Date.format(new Date(), 'Y-m-d H:i:s'),
    				readOnly: true,
    				fieldStyle:'background:none; border : 0px;font-weight:bold;',
		            hidden:true
	    		},{
	    			xtype: 'textfield',
		            itemId: 'bz',
		            name: 'bz',
		            fieldLabel : '备注',
		            hidden:true
	    		}
		        ]}, 
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
            		 Ext.create('App.view.kttjsh.XwKtbgzlbList',{
						itemId: 'xwKtbgzlbList',
						height:'auto',
						width:'792'
					})
	            	]
	        }
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
		var xwKtbgzb = me.down('#xwKtbgzb'); 
		var json = {}
		var items = xwKtbgzb.items;
		values = me.form.getValues();
		xwKtbgzb.items.each(function(fsItem){
			if(fsItem.itemId == 'ktrq'){
				json[fsItem.itemId] = values.ktrq.replace(/\-/g, "");
			}else /*if(fsItem.itemId == 'jhktsj'){
				json[fsItem.itemId] = values.jhktsj.replace(/\2008-01-01T0/g, "");
			}else*/{
				json[fsItem.itemId] = fsItem.getValue();
			}
		})
		var form = me;
		json['shzt'] = form.down('#shzt').getRawValue();
		json['xh'] = form.down('#xh').getValue();
		json['xm'] = form.down('#xm').getValue();
		json['shztm'] = form.down('#shztm').getValue();
		json['dsshyj'] = form.down('#dsshyj').getValue();
		if(json['shzt'] == '审核通过')
		{json['shztm'] = 'TG';
		}else if(json['shzt'] == '审核未通过')
		{json['shztm'] = 'WTG';}
//		alert(Ext.encode(json))
		    Ext.Ajax.request({
				url : 'xwKtbgzbEdit.action',
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
				         var viewXwKtbgzlzbList = Ext.ComponentQuery.query('#viewXwKtbgzlzbSeachList');
							 if(viewXwKtbgzlzbList.length > 0) {
								 var viewXwKtbgzlzbList = viewXwKtbgzlzbList[0];
								 var store = viewXwKtbgzlzbList.getStore();
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