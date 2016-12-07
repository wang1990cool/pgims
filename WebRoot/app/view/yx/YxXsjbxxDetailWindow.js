Ext.define('App.view.yx.YxXsjbxxDetailWindow',{
		    extend:'Ext.window.Window',
		    alias:'widget.yxXsjbxxDetailWin',
	   		itemId:'yxXsjbxxDetailWin',
			title:'基本信息',
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
					items:[Ext.create('App.view.yx.YxXsjbxxDetailForm',{
							itemId:'yxXsjbxxDetailForm'
						})]
				}),
			    me.callParent(arguments);
			    
			   var jbxxDetail= Ext.create('App.view.yx.JbxxDetail',{
			    	itemId:'jbxxDetail',
					baseCls: 'my-panel-no-border'
				})
				
				var bkxxDetail = Ext.create('App.view.yx.BkxxDetail',{
					itemId:'bkxxDetail',
					baseCls:'my-panel-no-border'
				})
				
//				var rxcjDetail = Ext.create('App.view.yx.RxcjDetail',{
//					itemId:'rxcjDetail',
//					baseCls:'my-panel-no-border'
//				})
				
				var lqxxDetail = Ext.create('App.view.yx.LqxxDetail',{
					itemId:'lqxxDetail',
					baseCls:'my-panel-no-border'
				})
				
				me.down('#jbxxDetailTab').add(jbxxDetail);
				me.down('#bkxxDetailTab').add(bkxxDetail);
//				me.down('#rxcjDetailTab').add(rxcjDetail);
				me.down('#lqxxDetailTab').add(lqxxDetail);
		  }
})