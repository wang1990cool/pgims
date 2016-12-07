Ext.define('App.view.system.RoleRightPanel',{
	extend:'Ext.form.Panel',
	alias:'widget.roleRightPanel',
	itemId:'roleRightPanel',
	initComponent:function(){
		var me = this;
		Ext.apply(me,{
					autoWidth: true,
					bodyPadding: 0,
					margin:'0 0 0 0',
					items:[
			   		 	Ext.create('App.view.system.RoleRightList',{
			   		 		padding:'0 0 0 0',
			   		 		title:'',
			   		 		itemId:'roleRightList',
							height: 430
			   		 })
			   ]
		})
	 me.callParent(arguments);
	}
})