Ext.define('App.view.pyfa.PYFAAddForm',{
	extend:'Ext.tab.Panel',
	alias : 'widget.pyfaAddForm',
	border:'0 0 0 0',
	itemId: 'pyfaAddForm',
	id: 'pyfaAddForm',
	layout:'fit',
	items:[{
		title: '培养方案',
		itemId:'pyfaFormTab',
		listeners:{
			beforeshow:function(obj){
			  var addPyfaWins = Ext.ComponentQuery.query('#addPyfaWin');
			   var saveBtn = addPyfaWins[addPyfaWins.length-1].down('#saveBtn');
			   saveBtn.setDisabled(true);
			}
		}
	},{
		title: '方案课程',
		itemId:'fakcListTab',
		disabled:true,
		listeners:{
			beforeshow:function(obj){
			  var addPyfaWins = Ext.ComponentQuery.query('#addPyfaWin');
			   var saveBtn = addPyfaWins[addPyfaWins.length-1].down('#saveBtn');
			   saveBtn.setDisabled(false);
			},
			render:function(obj){
			   var addPyfaWins = Ext.ComponentQuery.query('#addPyfaWin');
			   var saveBtn = addPyfaWins[addPyfaWins.length-1].down('#saveBtn');
			   
				var me = this;
				
				 var pyfaAddForm = me.up('#pyfaAddForm');
				var pyfaForm = pyfaAddForm.down('#pyfaForm');
				var pyfahValue = pyfaForm.down('#pyfah').getValue();
				var searchParams = {
						start : 0,
						page : 1,
						searchMode : 'simple',
						fieldNames : [],
						order : '',
						search : {}
				};
	        	var pGrid = me.down('#fakcList');
        	   	pGrid.down('#add').setVisible(true);
		        pGrid.down('#edit').setVisible(true);
		        pGrid.down('#delete').setVisible(true);
	        	for (var col in pGrid.exportCols) {
						searchParams.fieldNames.push(col);
				}
				searchParams.search['pyfah'] = "= '" + pyfahValue + "'";
	        	var store = pGrid.getStore();
	        	var proxy =  store.getProxy();
	        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	        	store.load();
			}
		}
 },{
 	title: '附件',
 	itemId:'attachDataTab' ,
 	border:'0 0 0 0',
 	disabled:true,
 	listeners:{
 		beforeshow:function(obj){
		  		var addPyfaWins = Ext.ComponentQuery.query('#addPyfaWin');
		 	  var saveBtn = addPyfaWins[addPyfaWins.length-1].down('#saveBtn');
		  		 saveBtn.setDisabled(false);
		},
		render:function(obj){
				var me = this;
				
	        	var pyfaAddForm = me.up('#pyfaAddForm');
				var pyfaForm = pyfaAddForm.down('#pyfaForm');
				var pyfaValue = pyfaForm.down('#pyfah').getValue();//获得培养方案号
				
				var pGrid = me.down('#uploadAttachList');
				var searchParams = {
						searchMode : 'simple',
						order : '',
						search : {}
				};
	        	
				searchParams.search['billNo'] = "= '" + pyfaValue + "'";
	        	var store = pGrid.getStore(),proxy =  store.getProxy();
	        	proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
	        	store.load();
		}}
 }
 ]
})