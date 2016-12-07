Ext.define('App.view.pyfa.SubmitPYFAWindow',{
		   extend:'Ext.window.Window',
		   alias:'widget.submitPyfaWin',
		   itemId:'submitPyfaWin',
     	   dockedItems:[{
				xtype:'toolbar',
				itemId: 'toolbar',
				dock:'top',
				margin:'0 0 0 0',
				items:[{
					itemId:'submitBtn',
					text:'审核',
					tooltip:'审核',
					iconCls:'ok_16',
					action:'ok'
				},'-',{
	        	    text: '退出',
	        	    iconCls:'return_16',
	                handler: function () {
	                	var me = this;
	                    me.up('window').close();
	                }
				}]
			}],
	   		itemId:'submitPyfaWin',
			title:'审核',
			iconCls:'ok_16',
			width: 765,
			height: 610,
			constrainHeader:true,
			layout:'auto',
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
					items:[Ext.create('App.view.audit.AuditDetailForm',{
							itemId:'auditDetailForm'
						}),
						Ext.create('App.view.pyfa.PYFASubmitForm',{
							itemId:'pyfaSubmitForm'
						})]
				})
			   me.callParent(arguments);
			   
			  	var pyfaDetail = Ext.create('App.view.pyfa.PYFADetail',{
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
				
				
			 	   me.down('#pyfaSubmitForm').down('#pyfaDetailTab').add(pyfaDetail);
			 	   me.down('#pyfaSubmitForm').down('#fakcListTab').add(addCourseForm);
			       me.down('#pyfaSubmitForm').down('#attachDataTab').add(uploadPanel);
		  }
})