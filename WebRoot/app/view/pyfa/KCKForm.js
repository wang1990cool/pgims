Ext.define('App.view.pyfa.KCKForm',{
	extend:'Ext.form.Panel',
	alias : 'widget.kckForm',
	xtype : 'form',
	itemId: 'kckForm',
	isAdd:true,
	initComponent: function(){
		var me = this;
		Ext.applyIf(me,{
		items:[{
			xtype:'fieldset',
			border:'0 0 0 0',
			width:720,
			autoHeight:true,
			autoWidth:false,
			collapsible:false,
			readOnly:true,
			margin:'10 10 0 10',
			padding:'5 5 10 5',
			defaults:{
				xtype:'textfield',
				readOnlyCls:'x-item-disabled',
				autoHeight:true,
				labelAlign:'right',
				width:280,
	        	labelWidth:100,
				padding:'5 0 0 0',
				size:20
			},
			layout:{
				type:'table',
				columns:2,
				tableAttrs:{ 
						style:"width:100%;text-align:center;border:0px solid #B3D0EE;border-collapse:collapse;empty-cells:show;", 
						align:'center'
				},
				 tdAttrs:{
						align:'left',
						style:"border: 1px solid rgb(179, 208, 238);"
				}
			},
				  items:[{
		            	xtype: 'hiddenfield',
		            	itemId: 'id',
		            	name: 'id'
					},{
						xtype: 'textfield',
						itemId: 'kch',
						name: 'kch',
						fieldLabel: '课程号<font color="red">*</font>',
						allowBlank: false,
						blankText: '必填',
							listeners:{
							blur:function(){
									var me = this;
									var kckForm = me.up('#kckForm');
									if(kckForm.isAdd){
										var kch = me.getValue();
										Ext.Ajax.request({
											url : "kckCheckByKch.action?kch=" + kch ,
											method : 'post',
											success : function(response, opts) {
												var result = Ext.decode(response.responseText);
												var success = result.result.success;
												if(success){
													Ext.MessageBox.alert('提示', '课程号已经存在！');
													me.setValue('');
												}
											}
										})
									}
							}
					}
					},{
						xtype: 'textfield',
						itemId: 'kcmc',
						name: 'kcmc',
						fieldLabel: '课程名称<font color="red">*</font>',
						width:320,
						allowBlank: false,
						blankText: '必填'
					},{
						xtype: 'textfield',
						itemId: 'kcywmc',
						name: 'kcywmc',
						fieldLabel: '课程英文名',
						allowBlank: true
					},{
						xtype: 'textfield',
						itemId: 'kkdwh',
						name: 'kkdwh',
						hidden:true,
						fieldLabel: '开课单位号',
						allowBlank: true
					},{
						xtype : 'combo',
					    itemId : 'kkdw',
					    name : 'kkdw',
					    fieldLabel : '开课单位<font color="red">*</font>',
					    	allowBlank: false,
						blankText: '必填',
					    editable : false,
					    listConfig:{
					     	maxHeight : 160,
					     	maxWidth:300
					     },
					     matchFieldWidth : false,
					    queryMode : 'local',
					    displayField : 'dwmc',
					    store : Ext.create('Ext.data.Store',{
					   	autoLoad : true,
					   	fields : [{name : 'dwh'},
					   	            {name : "dwmc"}],
					   	proxy : {
					   		type : 'ajax',
					   		url : 'zdGetZD.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {zdName:'ViewXxJxdw'},
					   		simpleSortMode : true
					   	},
					   	sorters : [{
					   		property : 'dwh',
					   		direction : 'ASC'
					   	}]
					   }),
					   	 listeners: {
					    	select: function(combo, record, index){
					    		var me = this;
					    		var kckForm = me.up('#kckForm')
					    		kckForm.down('#kkdwh').setValue(record[0].data.dwh);
					    	}
					    }
					},{
						xtype: 'hiddenfield',
						itemId: 'xslxm',
						name: 'xslxm',
						fieldLabel: '学时类型码<font color="red">*</font>',
						allowBlank: false,
						blankText: '必填'
					},{
						xtype: 'combo',
						itemId: 'xslx',
						name: 'xslx',
						fieldLabel: '学时类型<font color="red">*</font>',
						queryMode: 'local',
						editable: false,
					    displayField: 'xslx',
					    allowBlank: false,
						blankText: '必填',
					    store: Ext.create('Ext.data.Store',{
					    	fields: ['xslx','xslxm'],
					    	data:[
					    		{'xslx':'学时','xslxm':'1'},
					    		{'xslx':'周时','xslxm':'2'}
					    	]
					    }),
					    listeners:{
					    	select:function(combo, record, index){
					    		var me = this;
					    		var kckForm = me.up('#kckForm')
					    		kckForm.down('#xslxm').setValue(record[0].data.xslxm);
					    	}
					    }
					},{
						xtype: 'hiddenfield',
						itemId: 'pyccm',
						name: 'pyccm',
						fieldLabel: '培养层次码<font color="red">*</font>',
						allowBlank: false,
						blankText: '必填'
					},{
						xtype : 'combo',
					    itemId : 'pycc',
					    name : 'pycc',
					    fieldLabel : '培养层次<font color="red">*</font>',
					    allowBlank: false,
						blankText: '必填',
					    editable : false,
					    listConfig:{
					     	maxHeight : 160
					     },
					    queryMode : 'local',
					    displayField : 'pycc',
//					  	 tpl:'<tpl for=".">' +  
//				            '<div class="x-boundlist-item">' +  '{pycc}'+ 
//				      	   '</div>'+
//				        '</tpl>',
					    store : Ext.create('Ext.data.Store',{
					   	autoLoad : true,
					   	fields : [{name : 'pyccm'},
					   	            {name : "pycc"}],
					   	proxy : {
					   		type : 'ajax',
					   		url : 'zdGetZD.action',
					   		actionMethods : 'post',
					   		reader : {
					   			root : 'result.list',
					   			totalProperty : 'totalProperty'
					   		},
					   		extraParams: {zdName:'ZdPyccm'},
					   		simpleSortMode : true
					   	},
//					   	listeners:{
//					   		load:function(store, records, options){
//					   				var data = {pyccm:'',pycc:''};
//									 store.insert(0,data); 
//					   		}
//					   	},
					   	sorters : [{
					   		property : 'pyccm',
					   		direction : 'ASC'
					   	}]
					   }),
						 listeners: {
					    	select: function(combo, record, index){
					    		var me = this;
					    		var kckForm = me.up('#kckForm')
					    		kckForm.down('#pyccm').setValue(record[0].data.pyccm);
					    	}
					    }
					},{
						xtype: 'textfield',
						itemId: 'kcxf',
						name: 'kcxf',
						fieldLabel: '课程学分<font color="red">*</font>',
						allowBlank: false,
						blankText: '必填'
					},{
						xtype: 'textfield',
						itemId: 'llxs',
						name: 'llxs',
						fieldLabel: '理论学时<font color="red">*</font>',
						allowBlank: false,
						blankText: '必填',
						listeners:{
							focus:function(){
								
							},
							blur:function(){
								var me = this;
								var syxsValue = parseInt(me.up('#kckForm').down('#syxs').getValue());
								var llxsValue = parseInt(this.getValue());
								if(isNaN(syxsValue))
									syxsValue = 0;
								if(isNaN(llxsValue))
									llxsValue = 0;
								var zxsValue = syxsValue + llxsValue
								me.up('#kckForm').down('#zxs').setValue(zxsValue);
							}
						}
					},{
						xtype: 'textfield',
						itemId: 'syxs',
						name: 'syxs',
						fieldLabel: '实验学时<font color="red">*</font>',
						allowBlank: false,
						blankText: '必填',
						listeners:{
							blur:function(){
								var me = this;
								var llxsValue = parseInt(me.up('#kckForm').down('#llxs').getValue());
								var syxsValue = parseInt(this.getValue());
								if(isNaN(syxsValue))
									syxsValue = 0;
								if(isNaN(llxsValue))
									llxsValue = 0;
								var zxsValue = syxsValue + llxsValue
								me.up('#kckForm').down('#zxs').setValue(zxsValue);
							}
						}
				    },{
						xtype: 'textfield',
						itemId: 'zxs',
						name: 'zxs',
						fieldLabel: '总学时<font color="red">*</font>',
						allowBlank: false,
						blankText: '必填',
						listeners:{
							focus:function(){
								var me = this;
								var llxsValue = parseInt(me.up('#kckForm').down('#llxs').getValue());
								var syxsValue = parseInt(me.up('#kckForm').down('#syxs').getValue());
								if(isNaN(syxsValue))
									syxsValue = 0;
								if(isNaN(llxsValue))
									llxsValue = 0;
								var zxsValue = syxsValue + llxsValue
								me.setValue(zxsValue);
							},
							blur:function(){
								var me = this;
								var llxsValue = parseInt(me.up('#kckForm').down('#llxs').getValue());
								var syxsValue = parseInt(me.up('#kckForm').down('#syxs').getValue());
								if(isNaN(syxsValue))
									syxsValue = 0;
								if(isNaN(llxsValue))
									llxsValue = 0;
								var zxsValue = syxsValue + llxsValue
								if(zxsValue != parseInt(me.getValue())){
										Ext.MessageBox.alert('提示', '总学时应为理论学时和实验学时之和！');
										me.setValue(zxsValue);
								}
							}
						}
					},{
						xtype: 'textfield',
						itemId: 'mzxs',
						name: 'mzxs',
						fieldLabel: '每周学时'
					},{
						xtype: 'textfield',
						itemId: 'ggkbzm',
						name: 'ggkbzm',
						hidden:true,
						fieldLabel: '公共课',
						allowBlank: true
					},{
						xtype: 'combo',
						itemId: 'ggkbz',
						name: 'ggkbz',
						fieldLabel: '公共课程<font color="red">*</font>',
						allowBlank: false,
						blankText: '必填',
						queryMode: 'local',
						editable: false,
						triggerAction: 'all',
						selectOnFocus: true,  
					    displayField: 'ggkbz',
//					    tpl:'<tpl for=".">' +  
//				            '<div class="x-boundlist-item">' +  '{ggkbz}'+ 
//				      	   '</div>'+
//				        '</tpl>',
					    store:Ext.create('Ext.data.Store',{
				        	autoLoad:true,      
				            remoteSort: true,
				            fields : [
				            	{name : 'ggkbz'},{name : "ggkbzm"},{name : "pxh"}
				            ],
						   	proxy : {
						   		type : 'ajax',
						   		url : 'zdGetZD.action',
						   		actionMethods : 'post',
						   		reader : {
						   			idProperty:'iid',
						   			root : 'result.list',
						   			totalProperty : 'totalProperty'
						   		},
						   		extraParams : {
									zdName : 'ZdGgkbzm'
								},
						   		simpleSortMode : true
						   	},
//							 listeners:{
//							   		load:function(store,records,options){
//							   			var data = {ggkbz:'',ggkbzm:'',pxh:''};
//							   			store.insert(0,data); 
//							   		}
//							   	},
						   	sorters : [{
						   		property : 'pxh',
						   		direction : 'ASC'
						   	}]
        
					    }),
					    listeners:{
					    	select:function(combo, record, index){
					    		var me = this;
					    		var kckForm = me.up('#kckForm')
					    		kckForm.down('#ggkbzm').setValue(record[0].data.ggkbzm);
					    	}
					    }
					},{
						xtype: 'combo',
						itemId: 'xsxwbz',
						name: 'xsxwbz',
						fieldLabel: '学术型课程<font color="red">*</font>',
						queryMode: 'local',
						editable: false,
					    displayField: 'xsxwbz',
					    valueField:'xsxwbzm',
					    allowBlank: false,
						blankText: '必填',
					    store: Ext.create('Ext.data.Store',{
					    	fields: ['xsxwbz','xsxwbzm'],
					    	data:[
					    		{'xsxwbz':'是','xsxwbzm':'1'},
					    		{'xsxwbz':'否','xsxwbzm':'0'}
					    	]
					    })
					},{
						xtype: 'combo',
						itemId: 'zyxwbz',
						name: 'zyxwbz',
						fieldLabel: '专业型课程<font color="red">*</font>',
						queryMode: 'local',
						editable: false,
					    displayField: 'zyxwbz',
					    valueField:'zyxwbzm',
					    allowBlank: false,
						blankText: '必填',
					    store: Ext.create('Ext.data.Store',{
					    	fields: ['zyxwbz','zyxwbzm'],
					    	data:[
					    		{'zyxwbz':'是','zyxwbzm':'1'},
					    		{'zyxwbz':'否','zyxwbzm':'0'}
					    	]
					    })
					},{
						xtype: 'combo',
						itemId: 'sfyx',
						name: 'sfyx',
						fieldLabel: '是否有效<font color="red">*</font>',
						queryMode: 'local',
						editable: false,
					    displayField: 'sfyx',
					    valueField:'sfyxm',
					    allowBlank: false,
						blankText: '必填',
					    store: Ext.create('Ext.data.Store',{
					    	fields: ['sfyx','sfyxm'],
					    	data:[
					    		{'sfyx':'是','sfyxm':'1'},
					    		{'sfyx':'否','sfyxm':'0'}
					    	]
					    })
					}]
			 },{
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '简介:',
	            collapsible: false,
	            border:'0 0 0 0',
	            margin:'5 10 10 10',
	            width:720,
	            padding:'5 5 10 5',
	            layout:'fit',
				items:[{
			    	xtype: 'textareafield',
			    	itemId:'kcjj',
			    	name:'kcjj',
			    	readOnlyCls: 'x-item-disabled'
		        }]
		},{
			xtype:'fieldset',
			autoHeight:true,
			border:'0 0 0 0',
			title:'备注:',
			collapsible: false,
			width:720,
			margin:'10 10 10 10',
			padding:'5 5 10 5',
			layout:'fit',
			items:[{
				xtype:'textareafield',
				itemId:'bz',
				name:'bz',
				readOnlyCls:'x-item-disabled'
			}]
		}],
		 buttons: [{
            	text: '保存',
            	iconCls:'save_16',
                handler: me.submit
            }, {
        	    text: '返回',
        	    iconCls:'return_16',
                handler: function () {
                    me.up('window').close();
                }
            }]
	});
	     me.callParent(arguments);
	},
	
	 loadForm: function(rec){
    	var me = this;
        me.loadRecord(rec);
    },
    
     submit: function (){
		var me = this;
		var form = me.up('form');		
		if (form.isValid()){
			values = form.getValues();
			var JSONobj = [];
		    JSONobj.push(JSON.stringify(values));
		    Ext.Ajax.request({
				url : 'kck' + (form.isAdd?'Add.action':'Edit.action'),
				waitTitle : '提示',
				method : 'post',
				params:{datas:JSONobj},
				waitMsg : '正在提交数据请稍候...',
				success : function(response, opts) {
					var result = Ext.decode(response.responseText);
					var success = result.result.success;
					if(success){
						var msg = "保存成功！";
						Ext.MessageBox.show({
				           title: '提示',
				           msg: msg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.INFO,
				           fn: function(id, msg){
				           	  Ext.StoreMgr.lookup('KCKStore').load();
			        		  me.up('window').close();
						    }  
				        });
					}else{
						var errmsg = "保存失败！";
						Ext.MessageBox.show({
				           title: '错误',
				           msg: errmsg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.ERROR,
				           fn: function(id, msg){  
				        	   form.getForm().reset();
						    }  
				        });
					}
				},
				failure : function(form, action) {
					var errmsg = "保存失败！";
					 Ext.MessageBox.show({
			           title: '错误',
			           msg: errmsg,
			           buttons: Ext.MessageBox.OK,
			           icon: Ext.MessageBox.ERROR,
			           fn: function(id, msg){  
			        	   form.getForm().reset();
					    }  
			       });
				}
			});
		}else
           Ext.MessageBox.show({
      			title: '提示',
      			msg: '请完整填写信息！',
      			buttons: Ext.MessageBox.OK,
     			icon: Ext.MessageBox.WARNING
           });
	}
});