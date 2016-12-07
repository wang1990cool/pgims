Ext.define('App.view.yx.EditBdztForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.editBdztForm',
    itemId:'editBdztForm',
    autoScroll : true,
    stores:'YxXsjbxxb',
 
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
			items: [{
	           xtype: 'fieldset',
				title:'报到信息',
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
	            title: '报到信息',
                items: [{
	    			xtype: 'hiddenfield',
		            itemId: 'bdztm',
		            name: 'bdztm',
		            fieldLabel : '报到状态码'
	    		   },{
                    xtype: 'radiogroup',
                    itemId: 'bdzt',
                    name: 'bdzt',
                    height: 20,
                    width: 231,
                    colspan:2,
                    fieldLabel: '报到状态',
                    items: [{
                        xtype: 'radiofield',
                        name: 'bdzt',
                        inputValue:true,
                        boxLabel: '已报到', 
//                        checked:true,
                        listeners:{
                                    change:function(o,newValue,oldValue,eOpts){
											if(newValue){
												me.down('#bdztm').setValue('1');
											}
									}
                                    
                                    }
                        
                    },{
                        xtype: 'radiofield',
                        name: 'bdzt',
                        inputValue:false,
                        boxLabel: '未报到',
                        listeners:{
                                   change:function(o,newValue,oldValue,eOpts){
											if(newValue){
												me.down('#bdztm').setValue('0');
											}
									    }
                                    }
                    }]
                }]
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
		        	this.up('window').down('form').Submit();
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
	
	
	Submit: function (){
		var me = this;
		var json = {}
		var form = me;
		
//		json['bdzt'] = form.down('#bdzt').getValue();
		json['bdztm'] = form.down('#bdztm').getValue();
		alert(json['bdztm'])
		
		    Ext.Ajax.request({
				url : 'yxXsjbxxEdit.action',
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
				        var yxXsjbxxList = Ext.ComponentQuery.query('#yxXsjbxxList');
							 if(yxXsjbxxList.length > 0) {
								 var yxXsjbxxList = yxXsjbxxList[0];
								 var store = yxXsjbxxList.getStore();
									 store.load();
								}
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
    	
	}
});