	Ext.define('App.view.cjdy.CjdyDetailForm',{
		extend:'Ext.tab.Panel',
		bodyPadding:0,
		border:'0 0 0 0',
		itemId: 'cjdyDetailForm',
		layout:'fit',
		items:[{
			title:'学生信息',
			itemId:'xsxxDetailTab',
			border:'0 0 0 0'
		},{
			title: '课程成绩',
			itemId:'cjmxListTab',
			listeners:{
				beforeshow:function(obj){
					var me = this;
					var cjdyDetailForm = me.up('#cjdyDetailForm');
					var detailForm = cjdyDetailForm.down('#xsxxDetail');
					var xhValue = detailForm.down('#xh').getValue();
					
					var searchParams = {
							start : 0,
							page : 1,
							searchMode : 'simple',
							order : '',
							search : {}
					};
					
		        	var pGrid = me.down('#cjList');
					searchParams.search['xh'] = "= '" + xhValue + "'";
		        	var store = pGrid.getStore();
		        	var proxy =  store.getProxy();
		        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
		        	store.load();
				}
			}
	 	}]
})