Ext.define('App.controller.kyjl.ArrangeTecjlxqController',{
	extend:'Ext.app.Controller',
	
	models : [ 'xs.XsJcxxbModel',
			'kyjl.XwKyjlzlbModel','kyjl.XwKyjlbModel'],
	stores : ['kyjl.XwKyjlzlbStore','kyjl.XwKyjlbStore','zd.ZdShjgmStore'],
//	refs: [{  
//        selector: 'arrangeTecWindow',  
//        ref: 'arrangeTecWindow'  
//    }],
    
	init:function(){
		this.control({
			});
		},
		
			onLaunch : function(o,skxxList,kyuuid) {
				var win;
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				var win = Ext.create('App.view.kyjl.ArrangeTecjlxqWindow',{
						skxxList:skxxList,
						kyuuid:kyuuid,
						x : 300,
						y : 3,
						width : 900,
						height : 570
				});
//				win.down('#arrangeTecshForm').loadForm(recs[0])
				win.down('#arrangeTecshjlForm').loadForm(recs[0])
				win.down('#arrangeTecjbForm').loadForm(recs[0])
				win.down('#arrangeTecshjlForm').setViewdForm();
				win.down('#arrangeTecjbForm').setViewForm();
				win.down('#arrangeTecshxqForm').loadForm(recs[0]);
				win.down('#arrangeTecshxqForm').setViewForm();
				var xwKyjlzlbStore = win.down('#xwKyjlzlbList').getStore('XwKyjlzlbStore');
				var xwKyjlzlbProxy = xwKyjlzlbStore.getProxy();
				var searchParams = {
					searchMode : 'simple',
					search : {}
				};
				searchParams.search['kyuuid'] = "#= '" + kyuuid + "'";
				xwKyjlzlbProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
//									    	   var store = win.xwKyjlzlbList.getStore();
			    	   xwKyjlzlbStore.load();
				win.show();
			}
	})
