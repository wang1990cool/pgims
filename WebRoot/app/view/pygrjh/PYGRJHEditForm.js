Ext.define('App.view.pygrjh.PYGRJHEditForm',{
	extend:'Ext.tab.Panel',
	bodyPadding:0,
	alias : 'widget.pygrjhEditForm',
	border:'0 0 0 0',
	itemId: 'pygrjhEditForm',
	layout:'fit',
	items:[{
		title:'学生基本信息',
		itemId:'xsjbxxFormTab',
		border:'0 0 0 0'
	},{
		title: '个人计划课程',
		itemId:'grjhkcListTab',
//		disabled:true,
		items:[{
			xtype:'textfield',
			itemId:'xh',
			fieldLabel:'学号',
			hidden:true,
			width:220
		},{
			xtype:'textfield',
			itemId:'nj',
			fieldLabel:'年级',
			hidden:true,
			width:220
		},{
			xtype:'textfield',
			itemId:'zydm',
			fieldLabel:'专业代码',
			hidden:true,
			width:220
		}],
		listeners:{
			render:function(obj){
				var me = this;
				var courseForms = Ext.ComponentQuery.query('#addGrjhkcForm');
				if(courseForms.length > 0) {
	        		var form = courseForms[0];
	        		form.setBorder('0 0 0 0')
	        		me.add(form);
	        	}else{
	        		var form = Ext.create('App.view.pygrjh.AddGrjhkcForm',{
							itemId:'addGrjhkcForm',
							baseCls:'my-panel-no-border'
					})
					me.add(form);
	        	}
				var searchParams = {
						start : 0,
						page : 1,
						searchMode : 'simple',
						fieldNames : [],
						order : '',
						search : {}
				};
	        	var pGrid = me.down('#grjhkcList');
	        	for (var col in pGrid.exportCols) {
						searchParams.fieldNames.push(col);
				}
				
				var pygrjhEditForm = me.up('#pygrjhEditForm');
				var xsJcxxForm = pygrjhEditForm.down('#xsJcxxForm');
				var xhValue = xsJcxxForm.down('#xh').getValue();
				
				searchParams.search['xh'] = "= '" + xhValue + "'";
	        	var store = pGrid.getStore();
	        	var proxy =  store.getProxy();
	        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	        	store.load();
			}
		}
   }]
})