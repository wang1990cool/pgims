Ext.define('App.view.zqkh.ZqkhShForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.zqkhshForm',
    itemId:'zqkhshForm',
    autoScroll : true,
 
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
			items: [{
	           xtype: 'fieldset',
				title:'审核信息',
				width:722,
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
	        		padding:'5 0 0 0',
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
	            title: '审核信息',
                items: [{
	    			xtype: 'hiddenfield',
		            itemId: 'shzt',
		            name: 'shzt',
		            fieldLabel : '审批状态'
	    		   },{
	    			xtype: 'hiddenfield',
		            itemId: 'shztm',
		            name: 'shztm',
		            fieldLabel : '审批状态码'
	    		   },{
                    xtype: 'radiogroup',
                    itemId: 'shjg',
                    name: 'shjg',
                    height: 20,
                    width: 231,
                    colspan:2,
                    fieldLabel: '<font color="red">*</font>审核结果',
                    items: [{
                        xtype: 'radiofield',
                        name: 'shjg',
                        inputValue:true,
                        boxLabel: '同意', 
                        checked:true,
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
                        name: 'shjg',
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
    		        xtype: "hiddenfield",
    		        itemId:'shrgh',
    		        name:'shrgh',
    		        value: userName
    		    },{
    				xtype : 'textfield',
    				itemId : 'shr',
    				name : 'shr',
    				value: userCName,
    				fieldLabel : '审核人'
    			},{
    				xtype: 'textfield',
		            itemId: 'shsj',
		            name: 'shsj',
		            fieldLabel : '审核时间',
    				value: Ext.Date.format(new Date(), 'Y-m-d H:i:s'),
    				readOnly: true
//    				fieldStyle:'background:none; border : 0px;font-weight:bold;'
    			},{
    				xtype: 'textareafield',
    				itemId:'shyj',
    		        name: 'shyj',
    		        fieldLabel: '审核意见',
    				labelAlign : 'right',
    				labelWidth:100,
    				width: 600,
    		        height: 50,
    		        cols: 100,
    		        colspan:2
    			}]
    		    },
	    		{
	            xtype: 'fieldset',
	            title: '审核信息',
	            collapsible: true,
	            itemId : 'zqkhsh',
	            width:722,
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
				items: [{
					xtype : 'textfield',
					itemId : 'id',
					name : 'id',
					hidden:true,
					fieldLabel : 'ID'
	            },  {
	    			xtype: 'hiddenfield',
	            	itemId:'xh',
	            	name:'xh'
//	            	value : userName
	            },{ xtype: 'textfield',
		            itemId: 'xn',
		            name: 'xn',
		            fieldLabel: '学年'
    	        },{
	    	          xtype: 'textfield',
			          itemId: 'xq',
			          name: 'xq',
		              fieldLabel: '学期'
    	        },{
//	    			xtype: 'textareafield',
	            	xtype: 'textfield',
		            itemId: 'lwtm',
		            name: 'lwtm',
		            colspan:2,
		            width:670,
//		            height:30,
		            fieldLabel : '论文题目'
	    		},{
	    			xtype: 'datefield',//
		            itemId: 'khrq',
		            name: 'khrq',
//		            width:250,
		            fieldLabel : '考核日期',
		            format : "Y-m-d"
	    		},{
	    			xtype: 'textfield',
		            itemId: 'jczz',
		            name: 'jczz',
		            fieldLabel : '检查组长'

	    		},{
	    			xtype: 'textfield',
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
					    fieldLabel : '<font color="red">*</font>导师考核等级',
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
					    		var zqkhShForm = me.up('#zqkhshForm')
					    		zqkhShForm.down('#dskhdjm').setValue(record[0].data.bm);
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
					    fieldLabel : '<font color="red">*</font>考核小组等级',
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
					    		var zqkhShForm = me.up('#zqkhshForm')
					    		zqkhShForm.down('#xzkhdjm').setValue(record[0].data.bm);
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
					    fieldLabel : '<font color="red">*</font>学院考核等级',
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
					    		var zqkhShForm = me.up('#zqkhshForm')
					    		zqkhShForm.down('#xykhdjm').setValue(record[0].data.bm);
					    	}
					    }
					},{
	    			xtype: 'textfield',
		            itemId: 'ship',
		            name: 'ship',
		            hidden:true
	    		}
	    
		        ]},
				/*{
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
		            itemId: 'dsh',//dsgh',
		            name: 'dsh',
		            fieldLabel : '导师工号'
		            
	    		},{
	    			xtype: 'textfield',
		            itemId: 'dsxm',
		            name: 'dsxm',
		            fieldLabel : '导师姓名'
	    		}]
	        }, */
		
		        {
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '附件预览',
	            itemId : 'fjyl',
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
				
			   items: [
			       Ext.create('App.view.zqkh.ZqkhzlList',{
						itemId: 'zqkhzlList',
						height:'auto',
						width:'700'
					})

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
		        	this.up('window').down('form').Submit();
//		        	this.up('window').hide();
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
	
	
	Submit: function (){
		var me = this;
		var zqkhsh = me.down('#zqkhsh'); 
		var json = {}
		var items = zqkhsh.items;
		values = me.form.getValues();
		zqkhsh.items.each(function(fsItem){
			json[fsItem.itemId] = fsItem.getValue();
			if(fsItem.itemId == 'khrq'){
				json[fsItem.itemId] = values.khrq.replace(/\-/g, "");
			}else{
				json[fsItem.itemId] = fsItem.getValue();
			}
		})
		
		var form = me;
		json['shr'] = userName;
		json['shrgh'] = userCName;
		json['shzt'] = form.down('#shzt').getValue();
		json['shztm'] = form.down('#shztm').getValue();
		json['shsj'] = form.down('#shsj').getValue();
		json['shyj'] = form.down('#shyj').getValue();
		if(json['shzt'] == '审核通过')
		{json['shztm'] = 'TG';
		}else if(json['shzt'] == '审核未通过')
		{json['shztm'] = 'WTG';}

		
		 if(json['dskhdj'] == null || json['xzkhdj'] == null || json['xykhdj'] == null){
             var errmsg = "请填写审核等级信息！";
			 Ext.MessageBox.show({
	            title: '错误',
	            msg: errmsg,
	            buttons: Ext.MessageBox.OK,
	            icon: Ext.MessageBox.ERROR,
	            fn: function(id, msg){  
			        form.getForm().reset();
			 }
			 });
        }else{
		
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
						var msg = "审核成功！";
						Ext.MessageBox.show({
				           title: '提示',
				           msg: msg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.INFO
				        });
				        var zqkhList = Ext.ComponentQuery.query('#zqkhList');
							 if(zqkhList.length > 0) {
								 var zqkhList = zqkhList[0];
								 var store = zqkhList.getStore();
									 store.load();
								}
								form.up('window').hide();
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
    	
	}
	},
	setViewForm :function(){
    	var me = this;
		var textfields =  me.query('textfield');
		for(var i in textfields){
			textfields[i].setReadOnly(true);
		}
    }
	
});