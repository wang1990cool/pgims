	Ext.define('App.view.pygrjh.PYGRJHAddForm',{
		extend:'Ext.tab.Panel',
		bodyPadding:0,
		alias : 'widget.pygrjhAddForm',
		border:'0 0 0 0',
		itemId: 'pygrjhAddForm',
	//	id: 'pygrjhAddForm',
		layout:'fit',
		items:[{
			title:'学生基本信息',
			itemId:'xsjbxxFormTab',
			border:'0 0 0 0',
			listeners:{
				beforeshow:function(){
					var grjhAddWins = Ext.ComponentQuery.query('#grjhAddWin');
					var grjhAddWin = grjhAddWins[grjhAddWins.length - 1];
					grjhAddWin.down('#saveBtn').setDisabled(true);
				}
			}
		},{
			title: '个人计划课程',
			itemId:'grjhkcListTab',
			disabled:true,
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
				beforeshow:function(){
					var grjhAddWins = Ext.ComponentQuery.query('#grjhAddWin');
					var grjhAddWin = grjhAddWins[grjhAddWins.length - 1];
					grjhAddWin.down('#saveBtn').setDisabled(false);
				},
				render:function(obj){
					var me = this;
					var grjhkcForms = Ext.ComponentQuery.query('#addGrjhkcForm');
					if(grjhkcForms.length > 0) {
		        		var form = grjhkcForms[0];
		        		form.setBorder('0 0 0 0')
		        		me.add(form);
		        	}else{
		        		var form = Ext.create('App.view.pygrjh.AddGrjhkcForm',{
								itemId:'addGrjhkcForm',
								baseCls:'my-panel-no-border'
						})
						me.add(form);
		        	}
		        	 var pGrid = me.down('#grjhkcList');
		        	 pGrid.getStore().removeAll();
				}
			}
	 	}]
})