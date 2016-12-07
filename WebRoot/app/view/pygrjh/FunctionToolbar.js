Ext.define('App.view.pygrjh.FunctionToolbar',{
	extend:'Ext.form.Panel',
	itemId:'functionToolbar',
	alias:'widget.functionToolbar',
	autoWidth: true,
	layout: 'auto',
	border:'0 0 0 0',
	baseCls: 'my-panel-no-border',
	height:27,
   dockedItems:[{
				xtype:'toolbar',
				dock:'top',
				margin:'0 0 5 0',
				items:[{
					itemId:'saveBtn',
					text:'保存',
					tooltip:'保存',
					iconCls:'save_16',
					action:'save'
				},'-',{
					itemId:'OKBtn',
					text:'提交审核',
					tooltip:'提交审核',
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
			}]
})