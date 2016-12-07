Ext.define('App.view.cjlr.CJLRForm',{
		  extend: 'Ext.form.Panel',
		   alias: 'widget.cjlrForm',
     	   dockedItems:[{
				xtype:'toolbar',
				itemId: 'toolbar',
				dock:'top',
				margin:'0 0 0 0',
				items:[{
					itemId:'saveBtn',
					text:'保存',
					tooltip:'保存',
					iconCls:'save_16',
					handler: function(){
						this.up('form').submit(this);
					}
				},
				'-',{
					itemId:'OKBtn',
					text:'提交',	
					tooltip:'',
					iconCls:'ok_16',
					handler: function(){
						this.up('form').submit(this);
					}
					
				}
			]
			}],
	   		itemId:'cjlrForm',

			initComponent:function(){
				var me = this;
				Ext.applyIf(me,{
					items:[Ext.create('App.view.cjlr.CJLREditForm',{
							itemId:'cjlrEditForm'
						})]
				})
			 me.callParent(arguments);
				          
	        var kcxxForm = Ext.create('App.view.cjlr.KCXXForm',{
					itemId:'kcxxForm',
			    	baseCls: 'my-panel-no-border'
			})
			var addCjmxForm= Ext.create('App.view.cjlr.AddCjmxForm',{
					itemId:'addCjmxForm',
					baseCls:'my-panel-no-border'
			})
			
			me.down('#cjlrEditForm').down('#kcxxFormTab').add(kcxxForm);
			me.down('#cjlrEditForm').down('#cjmxListTab').add(addCjmxForm);
		 },
		 
		 
		 submit: function(Objbtn){
			var me = this;
			var msg = Objbtn.itemId == 'saveBtn' ? '保存' : '提交';
			var flag = Objbtn.itemId == 'saveBtn' ? '0' : '1';
			
			
			var cjxxData = {
	        	jxCjjlbData: null,
	        	jxCjmxbData: null
	        };
	        
			if(!this.generateObj(epaData,flag)){
				return false;
			}
//			
//			var JSONObj = Ext.JSON.encode(epaData);
//			
//			Ext.MessageBox.confirm(msg, '确认' + msg + '？', function (btn) {
//				if(btn == "yes"){
//					Ext.Ajax.request({
//						url:'epaSaveData.action',
//						method:'POST',
//						autosync: true,
//						params:{epaData: JSONObj},
//						scope: this,
//						success: function(response){
//							var responseMessage = Ext.JSON.decode(response.responseText);
//			                if (responseMessage.success) {
//			                     Ext.Msg.show({title:"提示",msg:'数据' + msg + '成功！',
//			                     buttons: Ext.Msg.OK, 
//			                     icon: Ext.Msg.INFO,
//			                     fn: function(id, msg){
//			                     	if(me.pageGrid != null){
//						        	   me.pageGrid.getStore().reload();
//			                     	}
//			                     	 if(Objbtn.itemId == 'Submit')
//						        	   me.up('window').close();
//							     	}  
//							    });
//			                 }
//			                else
//			                    Ext.Msg.show({title:"提示",msg:'数据' + msg + '失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
//			             },
//						failure: function (response) {
//			                Ext.Msg.show({title:"提示",msg:'数据' + msg + '失败！',buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
//			            }
//			      });
//		    }});
	}
})