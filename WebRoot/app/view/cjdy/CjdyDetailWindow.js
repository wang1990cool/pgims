Ext.define('App.view.cjdy.CjdyDetailWindow',{
		    extend:'Ext.window.Window',
		    alias:'widget.cjdyDetailWin',
	   		itemId:'cjdyDetailWin',
			title:'学生信息',
			iconCls:'detail_16',
			width: 800,
			height: 460,
			constrainHeader:true,
			layout:'fit',
			closeAction:'hide',
			resizable:false,
			shadow:true,
			modal:true,
			closable:true,
			animCollapse:true,
//			autoScroll:true,
			autoShow:true,
			dockedItems:[{
				xtype:'toolbar',
				itemId: 'toolbar',
				dock:'top',
				margin:'0 0 0 0',
				items:[			 
				{
	        	    text: '退出',
	        	    iconCls:'return_16',
	                handler: function () {
	                	var me = this;
	                    me.up('window').close();
	                }
				}]
			}],
			bodyStyle:{
				background: '#fff'
			},
			
			initComponent:function(){
				var me = this;
				Ext.applyIf(me,{
					items:[Ext.create('App.view.cjdy.CjdyDetailForm',{
							itemId:'cjdyDetailForm'
						})]
				}),
			    me.callParent(arguments);
			    
			   var xsxxDetail= Ext.create('App.view.cjdy.XsxxDetail',{
			    	itemId:'xsxxDetail',
					baseCls: 'my-panel-no-border'
				})
				
					var addCjmxForm = Ext.create('App.view.cjdy.AddCjmxForm',{
						itemId:'addCjmxForm',
						baseCls:'my-panel-no-border'
				})
				
				me.down('#xsxxDetailTab').add(xsxxDetail);
				me.down('#cjmxListTab').add(addCjmxForm);
		  }
})