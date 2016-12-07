Ext.define('App.view.kttjsh.ViewXwKtbgzlzbshsjForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.viewXwKtbgzlzbshsjForm',
    itemId:'viewXwKtbgsqshsjForm',
 
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
			items: [{
	            xtype: 'fieldset',
	            title: '申请信息',
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
					 hidden:true,
					fieldLabel : '<font color="red">*</font>学号',
					value : userName
				},{
					xtype : 'textfield',
					itemId : 'xm',
					name : 'xm',
					 hidden:true,
					fieldLabel : '<font color="red">*</font>姓名',
     				value : userCName
				},{
	    			xtype: 'textfield',
		            itemId: 'xn',
		            name: 'xn',
		             hidden:true,
		            fieldLabel:'<font color="red">*</font>学年'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'xq',
		            name: 'xq',
		             hidden:true,
		            fieldLabel : '<font color="red">*</font>学期'
	    		},{
	    			xtype: 'textfield',
		            itemId: 'lwtm',
		            name: 'lwtm',
		             hidden:true,
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
				    hidden:true,
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
		            hidden:true,
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
		             hidden:true,
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
		            fieldLabel : '开题负责人',
		            hidden:true
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
		            fieldLabel : '评审组组长',
		             hidden:true
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
		            
	    		},{
	    			xtype: 'textfield',
		            itemId: 'dsshyj',
		            name: 'dsshyj',
		            fieldLabel : '导师审核意见',
		            hidden:true
	    		},{
	    			xtype: 'datefield',
		            itemId: 'dsshsj',
		            name: 'dsshsj',
		            fieldLabel : '审批时间',
		            width:250,
	        		labelWidth:100,
	        		padding:'5 0 0 0',
	        		size:20,
	        		hidden:true
	    		},{
	    			xtype: 'textfield',
		            itemId: 'bz',
		            name: 'bz',
		            fieldLabel : '备注',
		            hidden:true
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
		var xwKtbgzb = me.down('#xwKtbgzb'); 
		var json = {}
		var items = xwKtbgzb.items;
		values = me.form.getValues();
		xwKtbgzb.items.each(function(fsItem){
			json[fsItem.itemId] = fsItem.getValue();
			if(fsItem.itemId == 'ktrq'){
				json[fsItem.itemId] = values.ktrq.replace(/\-/g, "");
			}else /*if(fsItem.itemId == 'jhktsj'){
				json[fsItem.itemId] = values.jhktsj.replace(/\2008-01-01T0/g, "");
			}else*/{
				json[fsItem.itemId] = fsItem.getValue();
			}
		})
		
		var form = me;
		json['shzt'] = form.down('#shzt').getValue();
		json['xh'] = form.down('#xh').getValue();
//		json['xm'] = form.down('#xm').getValue();
		json['shztm'] = form.down('#shztm').getValue();
		json['xn'] = form.down('#xn').getValue();
		json['xq'] = form.down('#xq').getValue();
		json['lwtm'] = form.down('#lwtm').getValue();
		
		json['ktlym'] = form.down('#ktlym').getValue();
		json['ktly'] = form.down('#ktly').getValue();
		json['ktmc'] = form.down('#ktmc').getValue();
		json['lwlxm'] = form.down('#lwlxm').getValue();
		json['lwlx'] = form.down('#lwlx').getValue();
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
						var msg = "修改成功！";
						Ext.MessageBox.show({
				           title: '提示',
				           msg: msg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.INFO
				        });
					}
				},
				failure : function(form, action) {
					var errmsg = "修改失败！";
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