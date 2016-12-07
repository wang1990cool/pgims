Ext.define('App.controller.pyfa.DetailPYFAController',{
	extend:'Ext.app.Controller',
	
	models:['pyfa.FAKCModel','pyfa.KCKModel'],
	stores:['pyfa.FAKCStore','pyfa.KCKStore','pyfa.FAKCAllStore','zd.ZdXqbStore'],
	
	refs : [{
		selector : 'pyfaAllDetailWin',
		ref : 'pyfaAllDetailWin'
	}],
	
	init:function(){
			this.control({
				'pyfaAllDetailWin button[action=detail]':{
					click:this.detailFakc
				}
			});
		},
		
		detailFakc:function(o, e, eOpts){
			var rec = getSelRec(o.up('gridpanel'));
			   if(rec != undefined){
	        		var fakcWins = Ext.ComponentQuery.query('#fakcWin');
	        		if(fakcWins.length > 0) {
		        		var win = fakcWins[0];
		        		win.setTitle('课程详情');
		        		win.setIconCls('detail_16');
		        		win.show();
	        	}else{
					var win = new Ext.Window({
						layout:'fit',
						itemId:'fakcWin',
						autoShow:true,
						title:'课程详情',
						iconCls:'detail_16',
			            width: 755,
		           	    height: 450,
			            closeAction:'hide',
			    		resizable:false,
			    		shadow:true,
			    		modal:true,
			    		closable:true,
			    		constrainHeader:true,
			    		animCollapse:true,
			    		autoShow:true,
	    				items: [Ext.create('App.view.pyfa.FAKCDetail')]
					});
	        	}
				var fakcForm = win.down('form');
	        	fakcForm.loadForm(rec);
	        	fakcForm.setViewForm();
	        }
		},
		
		 onLaunch: function(o){
		  	   var rec = getSelRec(o.up('gridpanel'));
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				if (recs.length == 0) {
					Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
				} else if (recs.length > 1) {
					Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
				} else if (recs.length == 1) {
//					var uploadPanel =Ext.create('App.view.attachData.UploadPanel',{
//							itemId:'uploadPanel',
//							baseCls:'my-panel-no-border'
//					})
					pyfaAllDetailWin = Ext.create('App.view.search.PYFADetailWindow',{
	 			 		itemId:'pyfaAllDetailWin'
	 				 });
		
//					 detailPyfaWin.down('#attachDataTab').add(uploadPanel);
					 var pyfaDetailForm = pyfaAllDetailWin.down('#pyfaDetailForm');
					 var  pyfaDetail = pyfaDetailForm.down('#pyfaDetail')
					 pyfaDetail.loadForm(rec);
	        		 pyfaDetail.setViewForm();
		 			 pyfaAllDetailWin.show();
		  	 }
		}
})