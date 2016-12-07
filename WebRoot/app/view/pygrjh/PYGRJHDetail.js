Ext.define('App.view.pygrjh.PYGRJHDetail',{
	extend:'Ext.form.Panel',
	alias : 'widget.pygrjhDetail',
	xtype : 'form',
	itemId: 'pygrjhDetail',
	autoWidth: true,
	bodyPadding: 5,
	layout: 'form',
	initComponent:function(){
		var me = this;
		Ext.applyIf(me,{
				dockedItems:[{
				xtype:'toolbar',
				dock:'top',
				layout:{type:'hbox',align:'left',pack:'left'},
				items:[{
					itemId:'enterBtn',
					text:'进入',
					tooltip:'进入',
					iconCls:'search',
					action:'enter'
				}]
			}],
			items:[{
				xtype:'fieldcontainer',
				layout:'hbox',
				defaults:{
					xtype:'textfield',
					labelAlign:'right',
					readOnlyCls:'x-form-item-label'
				},
				items:[{
					xtype:'toolbar',
					style:'background:transparent;height:40',
					border:'0 0 0 0',
					items:[{
						xtype:'textfield',
						itemId:'xh',
						name:'xh',
						fieldLabel:'学号',
						width:220,
						labelWidth:80
					},{
						itemId:'searchXhBtn',
						text:'查找',
						tooltip:'查找',
						iconCls:'search',
						action:'searchXh'
					}
				]}]
			},{xtype:'fieldcontainer',
				layout:'hbox',
				defaults:{
					labelAlign:'right',
					readOnlyCls:'x-form-item-label'
				},
				items:[{
					xtype:'toolbar',
					style:'background:transparent;height:40',
					border:'0 0 0 0',
					items:[{
						xtype:'textfield',
						itemId:'pyfah',
						name:'pyfah',
						fieldLabel:'培养方案号',
						width:220,
						labelWidth:80
					},{
						itemId:'searchPyfahBtn',
						tooltip:'查找',
						iconCls:'search',
						action:'searchPyfah'
					}
				]}]
			}]
		});
		 me.callParent(arguments);
	}
})