Ext.define('App.view.search.KKJHDetailWindow',{
		    extend:'Ext.window.Window',
		    alias:'widget.kkjhDetailWin',
	   		itemId:'kkjhDetailWin',
			title:'详情',
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
					items:[Ext.create('App.view.search.KKJHDetailForm',{
							itemId:'kkjhDetailForm'
						})]
				}),
			    me.callParent(arguments);
			   var kkjhDetail =  Ext.create('App.view.search.KKJHDetail',{
			   		itemId:'kkjhDetail',
					baseCls: 'my-panel-no-border'
				})
				
				var kkjhAddKkjhmxForm =  Ext.create('App.view.search.KKJHAddKkjhmxForm',{
						itemId:'kkjhAddKkjhmxForm',
						baseCls:'my-panel-no-border'
				})
				me.down('#kkjhDetailTab').add(kkjhDetail);
				me.down('#kkjhmxListTab').add(kkjhAddKkjhmxForm);
		  }
})