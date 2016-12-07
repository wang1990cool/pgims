Ext.define('App.view.zqkh.ZqkhDjForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.zqkhdjForm',
    itemId:'zqkhdjForm',
 
    initComponent: function() {
        var me = this;
		
        Ext.applyIf(me, {
			items: [

			{
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '考核信息',
	            itemId : 'zqkhdj',
	            collapsible: true,
	            padding:'5 5 10 5',
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
					columns:2,
					tableAttrs:{ 
						style:"width:100%;text-align:center;border:1px solid #B3D0EE;border-collapse:collapse;empty-cells:show;", 
						align:'center'
					},
					tdAttrs:{
						align:'left',
						style:"border: 1px solid rgb(179, 208, 238);"
					}
				},
				items: [ {
					xtype : 'textfield',
					itemId : 'id',
					name : 'id',
					hidden:true,
					fieldLabel : 'ID'
	            }, {
	    			xtype: 'hiddenfield',
	            	itemId:'xh',
	            	name:'xh',
	            	value : userName
	            },{ xtype: 'hiddenfield',
		            itemId: 'xn',
		            name: 'xn',
		            fieldLabel: '学年'
    	        },{
	    	          xtype: 'hiddenfield',
			          itemId: 'xq',
			          name: 'xq',
		              fieldLabel: '学期'
    	        },{
//	    			xtype: 'textareafield',
	            	xtype: 'hiddenfield',
		            itemId: 'lwtm',
		            name: 'lwtm',
//		            height:30,
		            fieldLabel : '论文题目'
	    		},{
	    			xtype: 'hiddenfield',//
		            itemId: 'khrq',
		            name: 'khrq',
//		            width:250,
		            fieldLabel : '考核日期',
		            format : "Y-m-d"
//		            hidden:true
	    		},{
	    			xtype: 'hiddenfield',
		            itemId: 'jczz',
		            name: 'jczz',
		            fieldLabel : '检查组长'

	    		},{
	    			xtype: 'hiddenfield',
		            itemId: 'dlxz',
		            name: 'dlxz',
		            fieldLabel : '考核领导小组组长'

	    		},{
	    			xtype: 'hiddenfield',
		            itemId: 'dskhdjm',
		            name: 'dskhdjm',
		            fieldLabel : '导师考核等级码'

	    		},{
						xtype : 'combo',
					    itemId : 'dskhdj',
					    name : 'dskhdj',
					    fieldLabel : '导师考核等级',
					    editable : false,
						 tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{mc}'+ 
				      	   '</div>'+
				        '</tpl>',
					    queryMode : 'local',
					    displayField : 'mc',
					    store : Ext.create('Ext.data.Store',{
				        	autoLoad:true,
				            storeId: 'ZdKhdjbStore',
				            remoteSort: true,
				            fields : [{name : 'bm'}, {name : 'mc'},{name :'pxh'}],
							proxy : {
								type : 'ajax',
								url : 'zdGetZD.action',
								actionMethods : 'post',
								reader : {
									root : 'result.list',
									totalProperty : 'totalProperty'
								},
								extraParams : {
									zdName : 'ZdKhdjb'
								},
								simpleSortMode : true
							},
							sorters : [{
										property : 'pxh',
										direction : 'ASC'
							}]
				        }),
				        listeners: {
					    	select: function(combo, record, index){
					    		var me = this;
					    		var zqkhdjForm = me.up('#zqkhdjForm')
					    		zqkhdjForm.down('#dskhdjm').setValue(record[0].data.bm);
					    	}
					    }
					},{
	    			xtype: 'hiddenfield',
		            itemId: 'xzkhdjm',
		            name: 'xzkhdjm',
		            fieldLabel : '考核小组等级码'

	    		},{
						xtype : 'combo',
					    itemId : 'xzkhdj',
					    name : 'xzkhdj',
					    fieldLabel : '考核小组等级',
					    editable : false,
						 tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{mc}'+ 
				      	   '</div>'+
				        '</tpl>',
					    queryMode : 'local',
					    displayField : 'mc',
					    store : Ext.create('Ext.data.Store',{
				        	autoLoad:true,
				            storeId: 'ZdKhdjbStore',
				            remoteSort: true,
				            fields : [{name : 'bm'}, {name : 'mc'},{name :'pxh'}],
							proxy : {
								type : 'ajax',
								url : 'zdGetZD.action',
								actionMethods : 'post',
								reader : {
									root : 'result.list',
									totalProperty : 'totalProperty'
								},
								extraParams : {
									zdName : 'ZdKhdjb'
								},
								simpleSortMode : true
							},
							sorters : [{
										property : 'pxh',
										direction : 'ASC'
							}]
				        }),
				        listeners: {
					    	select: function(combo, record, index){
					    		var me = this;
					    		var zqkhdjForm = me.up('#zqkhdjForm')
					    		zqkhdjForm.down('#xzkhdjm').setValue(record[0].data.bm);
					    	}
					    }
					},{
	    			xtype: 'hiddenfield',
		            itemId: 'xykhdjm',
		            name: 'xykhdjm',
		            fieldLabel : '学院考核等级码'

	    		},{
						xtype : 'combo',
					    itemId : 'xykhdj',
					    name : 'xykhdj',
					    fieldLabel : '学院考核等级',
					    editable : false,
						 tpl:'<tpl for=".">' +  
				            '<div class="x-boundlist-item">' +  '{mc}'+ 
				      	   '</div>'+
				        '</tpl>',
					    queryMode : 'local',
					    displayField : 'mc',
					    store : Ext.create('Ext.data.Store',{
				        	autoLoad:true,
				            storeId: 'ZdKhdjbStore',
				            remoteSort: true,
				            fields : [{name : 'bm'}, {name : 'mc'},{name :'pxh'}],
							proxy : {
								type : 'ajax',
								url : 'zdGetZD.action',
								actionMethods : 'post',
								reader : {
									root : 'result.list',
									totalProperty : 'totalProperty'
								},
								extraParams : {
									zdName : 'ZdKhdjb'
								},
								simpleSortMode : true
							},
							sorters : [{
										property : 'pxh',
										direction : 'ASC'
							}]
				        }),
				        listeners: {
					    	select: function(combo, record, index){
					    		var me = this;
					    		var zqkhdjForm = me.up('#zqkhdjForm')
					    		zqkhdjForm.down('#xykhdjm').setValue(record[0].data.bm);
					    	}
					    }
					},{
	    			xtype: 'hiddenfield',
		            itemId: 'shztm',
		            name: 'shztm',
		            fieldLabel : '审核状态码',
		            hidden:true
	    		},{
	    			xtype: 'hiddenfield',
		            itemId: 'shzt',
		            name: 'shzt',
		            fieldLabel : '审核状态',
		            hidden:true
	    		},{
	    			xtype: 'combo',
		            itemId: 'shyj',
		            name: 'shyj',
		            fieldLabel : '审核意见',
		            editable : false,
					valueField:'shyj',
					displayField:'shyj',
					mode:'local',
					hidden:true,
					store: Ext.create('Ext.data.Store',{
					fields: ['shyj', 'zt'],
					data: [
						{"zt": '0', "shyj": "同意"},
						{"zt": '1', "shyj": "不同意"}
					]
				})
	    		},{
	    			xtype: 'datefield',
		            itemId: 'shsj',
		            name: 'shsj',
		            fieldLabel : '审核时间',
		            width:250,
	        		labelWidth:100,
	        		padding:'5 0 0 0',
	        		size:20,
	        		hidden:true
	    		},{
	    			xtype: 'textfield',
		            itemId: 'shrgh',
		            name: 'shrgh',
		            fieldLabel : '审核人工号',
		            hidden:true,
		            value : userName
	    		},{
	    			xtype: 'hiddenfield',
		            itemId: 'shr',
		            name: 'shr',
		            fieldLabel : '审核人',
		            value : userCName
//		            hidden:true
	    		},{
	    			xtype: 'textfield',
		            itemId: 'ship',
		            name: 'ship',
		            hidden:true
	    		}
	    
		        ]}
		        	
		        	
			],
 buttons: [{
				itemId:'saveBtn',
		        text: '保存',
		        iconCls:'save_16',
		        handler: function(){
		        	this.up('window').down('form').Submit();
		        	this.up('window').hide();
		        }
		    },{
		    	itemId:'cancelBtn',
		        text: '退出',
		        iconCls:'return_16',
		        handler: function() {
		        	this.up('window').hide();
		        }
		    }]	   
				   });
       me.callParent(arguments);
    },
    
    loadForm : function(rec){
		var me = this;
		me.loadRecord(rec);
	},

	Submit: function (){
		var me = this;
		var zqkhdj = me.down('#zqkhdj'); 
		var json = {}
		var items = zqkhdj.items;
		values = me.form.getValues();
		zqkhdj.items.each(function(fsItem){
			json[fsItem.itemId] = fsItem.getValue();
			if(fsItem.itemId == 'khrq'){
				json[fsItem.itemId] = values.khrq.replace(/\-/g, "");
			}else{
				json[fsItem.itemId] = fsItem.getValue();
			}
		})
	

		    Ext.Ajax.request({
				url : 'zqkhEdit.action',
				waitTitle : '提示',
				actionMethods : 'post',
				params:{datas:Ext.encode(json)},
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
				           icon: Ext.MessageBox.INFO
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
    	
	},
	setViewForm :function(){
    	var me = this;
		var textfields =  me.query('textfield');
		for(var i in textfields){
			textfields[i].setReadOnly(true);
		}
    }
	
});