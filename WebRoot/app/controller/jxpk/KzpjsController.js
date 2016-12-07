Ext.define('App.controller.jxpk.KzpjsController',{
	extend:'Ext.app.Controller',
	
	models:['jxpk.KzpjsModel'],	
	stores:['jxpk.KzpjsStore'],
//	views:['pyfa.KCKDialogList','pyfa.KCKDialog'],
	
	init:function(){
			this.control({
				'kzpjsDialog button[action=search]':{
					click:this.search
				},
				'kzpjsDialog button[action=searchAll]':{
					click:this.searchAll
				},
				'kzpjsDialog  button[action=detail]':{
					click:this.detailKzpjs
				},
				'kzpjsDialog  button[action=ok]':{
					click:this.addKzpjs
				}
			})
		},
		
			search:function(o, e, eOpts){
					var win = o.up('window');
					var pkWin = win.pkWin;
					var recs = pkWin.recs;
					var xn = recs[0].data.xn;
					var xq = recs[0].data.xq;
					var kkdwh = recs[0].data.kkdwh;
					
					var searchForm = win.down('#searchForm');
					var searchParams = {
						start : 0,
						limit : 15,
						page : 1,
						searchMode : 'simple',
						fieldNames : [],
						order : '',
						search : {}
					};
					var pGrid = win.down('#kzpjsList');
					var store = pGrid.getStore();
					for (var col in pGrid.exportCols) {
						searchParams.fieldNames.push(col);
					}
	
					var tFields = searchForm.query('textfield(true)');
					for (var i in tFields) {
						if (tFields[i].value)
							searchParams.search[tFields[i].name] = "#like '%" + Ext.String.trim( tFields[i].value )  + "%'";
					}
//					var pyccValue = searchForm.down('#pycc').getValue();
//					if(pyccValue){
//						searchParams.search['pyccm']="#= '" + pyccValue + "'";
//					}

					searchParams.search['xn']="#= '" + xn + "'";	
					searchParams.search['xq']="#= '" + xq + "'";	
					searchParams.search['sydwbh']="#= '" + kkdwh + "'";	
					var proxy = store.getProxy();
					proxy.setExtraParam('params', Ext.JSON.encode(searchParams));
					store.load();
	},
	
	searchAll:function(o, e, eOpts){
			var win = o.up('window');
			var pkWin = win.pkWin;
			var recs = pkWin.recs;
			var xn = recs[0].data.xn;
			var xq = recs[0].data.xq;
			var kkdwh = recs[0].data.kkdwh;
			var searchParams = {
				start : 0,
				limit : 15,
				page : 1,
				searchMode : 'simple',
				order : '',
				search : {}
			};
			searchParams.search['xn']="#= '" + xn + "'";	
			searchParams.search['xq']="#= '" + xq + "'";	
			searchParams.search['sydwbh']="#= '" + kkdwh + "'";	
			
			var searchForm = win.down('#searchForm');
        	var pGrid = win.down('#kzpjsList');
        	searchForm.getForm().reset();
        	
        	var store = pGrid.getStore(), proxy = store.getProxy();
             proxy.setExtraParam('params', Ext.encode(searchParams));
        	store.load();
	},
	
//	detailFakc:function(o, e, eOpts){
//		var rec = getSelRec(o.up('gridpanel'));
//		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
//		if (recs.length == 0) {
//			Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
//		} else if (recs.length > 1) {
//			Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
//		} else if (recs.length == 1) {
//				var win = new Ext.Window({
//					layout:'fit',
//					itemId:'kckWin1',
//					autoShow:true,
//					title:'课程详情',
//					iconCls:'detail_16',
//		            width: 755,
//	           	    height: 580,
//		            closeAction:'hide',
//		    		resizable:false,
//		    		shadow:true,
//		    		modal:true,
//		    		closable:true,
//		    		constrainHeader:true,
//		    		animCollapse:true,
//		    		autoShow:true,
//    				items: [Ext.create('App.view.pyfa.KCKDetail')]
//				});
//			var kckForm = win.down('form');
//            kckForm.loadForm(rec);
//            kckForm.setViewForm();
//		}
//	},
	
	addKzpjs:function(o, e, eOpts){	
			var me = this;
			var kckWin = o.up('#kckDialogWin')
       		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
       		if(recs.length == 0){
       			Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
       		}else if(recs.length > 1){
       			Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
       		}else{
       			var pkztm = recs[0].data.pkztm;
       			if(pkztm != '1'){
	       			var win = o.up('window');
	     			var pkWin = win.pkWin;
	     			var jsbh = recs[0].data.jsbh;
					var jsmc = recs[0].data.jsmc
	     			pkWin.down('#jsbh').setValue(jsbh);
	     			pkWin.down('#jsmc').setValue(jsmc);
	     			win.close();
       			}else{
       				Ext.MessageBox.alert('提示', '该课程不能进行排课！');
       			}
       		}
	},
	
	 onLaunch: function(pkWin){
	 	var me = this;
//	 	var kzpjsWins = Ext.ComponentQuery.query('#kzpjsDialogWin');
//	 	if(kzpjsWins.length > 0){
//	 		kzpjsWins = kzpjsWins[0];
//	 	}else{
	     	var kzpjsWin = new Ext.Window({
		   		itemId:'kzpjsDialogWin',
				title:'可支配教室',
				iconCls:'add_16',
				width: 895,
				height: 540,
				constrainHeader:true,
				layout:'fit',
				closeAction:'hide',
				resizable:false,
				shadow:true,
				modal:true,
				closable:true,
				animCollapse:true,
				autoShow:true,
				pkWin:pkWin,
				items:[
			   	  Ext.create('App.view.jxpk.KzpjsDialog',{
			   	  	itemId:'kzpjsDialog'
			   	  })]
			});
//	 	}
		    var pGrid = kzpjsWin.down('#kzpjsDialog').down('#kzpjsList');
            var store = pGrid.getStore(), proxy = store.getProxy();
            
			var recs = pkWin.recs;
			var xn = recs[0].data.xn;
			var xq = recs[0].data.xq;
			var kkdwh = recs[0].data.kkdwh;
			
				var searchParams = {
						start : 0,
						limit : 15,
						page : 1,
						searchMode : 'simple',
						order : '',
						search : {}
					};
			searchParams.search['xn']="#= '" + xn + "'";	
			searchParams.search['xq']="#= '" + xq + "'";	
			searchParams.search['sydwbh']="#= '" + kkdwh + "'";	
            proxy.setExtraParam('params', Ext.encode(searchParams));
    		        
          	kzpjsWin.down('#searchForm').getForm().reset();
            store.load();
	 	
			kzpjsWin.show();
	 }
})