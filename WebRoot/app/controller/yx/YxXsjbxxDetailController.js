Ext.define('App.controller.yx.YxXsjbxxDetailController',{
	extend:'Ext.app.Controller',
	
	models: ['yx.YxXsjbxxbModel'],
    stores:['yx.YxXsjbxxbStore'],
	
	refs : [{
			selector : 'yxXsjbxxDetailWin',
			ref : 'yxXsjbxxDetailWin'
		}],
		
	
		onLaunch : function(o) {
		var rec = getSelRec(o.up('gridpanel'))
		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
		if(recs.length == 0){
			Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
		} else if (recs.length > 1) {
			Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
		} else if (recs.length == 1) {
				detailYxXsjbxxWin = Ext.create('App.view.yx.YxXsjbxxDetailWindow',{
 			 		itemId:'yxXsjbxxDetailWin'
 				 });
				 detailYxXsjbxxWin.down('#jbxxDetailTab').add(jbxxDetail);
				 var jbxxDetail = detailYxXsjbxxWin.down('#jbxxDetail');
				 jbxxDetail.loadForm(rec);
        		 jbxxDetail.setView();
	 			 detailYxXsjbxxWin.show();
	 			 
	 			 var bkxxDetail = detailYxXsjbxxWin.down('#bkxxDetail');
				 bkxxDetail.loadForm(rec);
        		 bkxxDetail.setView();
	 			 detailYxXsjbxxWin.show();
	 			 
//	 			 var rxcjDetail = detailYxXsjbxxWin.down('#rxcjDetail');
//				 rxcjDetail.loadForm(rec);
//        		 rxcjDetail.setView();
//	 			 detailYxXsjbxxWin.show();
	 			 
	 			 var lqxxDetail = detailYxXsjbxxWin.down('#lqxxDetail');
				 lqxxDetail.loadForm(rec);
        		 lqxxDetail.setView();
	 			 detailYxXsjbxxWin.show();
	  	 }
	}
	})
