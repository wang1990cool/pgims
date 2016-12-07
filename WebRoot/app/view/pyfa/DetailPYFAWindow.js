Ext.define('App.view.pyfa.DetailPYFAWindow',{
		   extend:'Ext.window.Window',
		  alias:'widget.detailPyfaWin',
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
	   		itemId:'editPyfaWin',
			title:'详情',
			iconCls:'detail_16',
			width: 765,
			height: 480,
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
			bodyStyle:{
				background: '#fff'
			},

			initComponent:function(){
				var me = this;
				Ext.applyIf(me,{
					items:[Ext.create('App.view.pyfa.PYFADetailForm',{
							itemId:'pyfaDetailForm'
						})]
				})
			    	me.callParent(arguments);
			    	
			    var pyfaForm = Ext.create('App.view.pyfa.PYFADetail',{
							itemId:'pyfaDetail',
							baseCls: 'my-panel-no-border'
				})
				
				var addCourseForm = Ext.create('App.view.pyfa.AddCourseForm',{
							itemId:'addCourseForm',
							baseCls:'my-panel-no-border'
					})
				
				var uploadPanel =Ext.create('App.view.attachData.UploadPanel',{
						itemId:'uploadPanel',
						baseCls:'my-panel-no-border'
				})
				
				
			 	   me.down('#pyfaDetailTab').add(pyfaForm);
			 	   me.down('#fakcListTab').add(addCourseForm);
			       me.down('#attachDataTab').add(uploadPanel);
		  }
})