	Ext.define('App.view.jxkkjh.KKJHAddForm',{
		extend:'Ext.tab.Panel',
		bodyPadding:0,
		border:'0 0 0 0',
		itemId: 'kkjhAddForm',
		layout:'fit',
		items:[{
			title:'开课计划',
			itemId:'kkjhFormTab',
			border:'0 0 0 0',
//			items:[Ext.create('App.view.jxkkjh.KKJHForm',{
//					itemId:'kkjhForm',
//			    	baseCls: 'my-panel-no-border'
//			})],
			listeners:{
				beforeshow:function(){
				  var kkjhAddWins = Ext.ComponentQuery.query('#kkjhAddWin');
				   var saveBtn = kkjhAddWins[kkjhAddWins.length-1].down('#saveBtn');
				   saveBtn.setDisabled(true);
				}
			}
		},{
			title: '开课计划课程',
			itemId:'kkjhmxListTab',
			disabled:true,
//			items:[Ext.create('App.view.jxkkjh.AddKkjhmxForm',{
//					itemId:'addKkjhmxForm',
//					baseCls:'my-panel-no-border'
//			})],
			listeners:{
				beforeshow:function(){
				   var kkjhAddWins = Ext.ComponentQuery.query('#kkjhAddWin');
				   var saveBtn = kkjhAddWins[kkjhAddWins.length-1].down('#saveBtn');
				   saveBtn.setDisabled(false);
				},
				render:function(obj){
					var me = this;
//					var kkjhmxForms = Ext.ComponentQuery.query('#addKkjhmxForm');
//					if(kkjhmxForms.length > 0) {
//		        		var form = kkjhmxForms[0];
//		        		form.setBorder('0 0 0 0')
//		        		me.add(form);
//		        	}else{
//		        		var form = Ext.create('App.view.jxkkjh.AddKkjhmxForm',{
//								itemId:'addKkjhmxForm',
//								baseCls:'my-panel-no-border'
//						})
//						me.add(form);
//		        	}
		        	 var pGrid = me.down('#kkjhmxList');
		        	 pGrid.isDetail = false;
		        	pGrid.down('#addKc').setVisible(true);
		        	pGrid.down('#importKc').setVisible(true);
		        	pGrid.down('#addOutKc').setVisible(true);
		        	pGrid.down('#edit').setVisible(true);
		        	pGrid.down('#delete').setVisible(true);
		        	 pGrid.getStore().removeAll();
				}
			}
	 	}]
})