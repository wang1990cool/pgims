Ext.define('App.controller.cjdy.CjdyDetailController',{
	extend:'Ext.app.Controller',
	
	models : ['xs.XsJcxxbModel','cjdy.ViewJxCjcxAllModel'],
	stores : ['cjdy.CjdyStore','cjdy.ViewJxCjcxAllStore'],
	
	refs : [{
			selector : 'cjdyDetailWin',
			ref : 'cjdyDetailWin'
		}],
		
	init:function(){
		this.control({
			'cjdyDetailWin button[action=detail]':{
				click:this.detailCjmx
			}
		});
	},
	
	detailCjmx:function(o, e, eOpts){
		var rec = getSelRec(o.up('gridpanel'));
			   if(rec != undefined){
	        		var wins = Ext.ComponentQuery.query('#cjmxDetailWin');
	        		if(wins.length > 0) {
		        		var win = wins[0];
		        		win.setTitle('课程成绩详情');
		        		win.setIconCls('detail_16');
		        		win.show();
	        	}else{
					var win = new Ext.Window({
						layout:'fit',
						itemId:'cjmxDetailWin',
						autoShow:true,
						title:'课程成绩详情',
						iconCls:'detail_16',
			            width: 755,
		           	    height: 440,
			            closeAction:'hide',
			    		resizable:false,
			    		shadow:true,
			    		modal:true,
			    		constrainHeader:true,
			    		closable:true,
			    		animCollapse:true,
			    		autoShow:true,
	    				items: [Ext.create('App.view.cjdy.CjmxDetail')]
					});
	        	}
				var cjmxForm = win.down('form');
	        	cjmxForm.loadForm(rec);
	        	cjmxForm.setViewForm();
	        }
	},
	
	
	
		onLaunch : function(o) {
		var rec = getSelRec(o.up('gridpanel'))
		var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
		if(recs.length == 0){
			Ext.MessageBox.alert('提示', '请选择要进行操作记录！');
		} else if (recs.length > 1) {
			Ext.MessageBox.alert('提示', '每次只能选择一条记录！');
		} else if (recs.length == 1) {
				detailCjdyWin = Ext.create('App.view.cjdy.CjdyDetailWindow',{
 			 		itemId:'cjdyDetailWin'
 				 });
				 detailCjdyWin.down('#xsxxDetailTab').add(xsxxDetail);
				 var xsxxDetail = detailCjdyWin.down('#xsxxDetail');
				 xsxxDetail.loadForm(rec);
        		 xsxxDetail.setView();
	 			 detailCjdyWin.show();
	  	 }
	}
	})
