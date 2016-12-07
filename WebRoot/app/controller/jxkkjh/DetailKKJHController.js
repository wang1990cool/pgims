Ext.define('App.controller.jxkkjh.DetailKKJHController',{
	extend:'Ext.app.Controller',
	
	models : ['jxkkjh.XSLXModel','jxkkjh.KKJHMXModel','pyfa.FAKCModel'],
	stores : ['jxkkjh.XSLXStore','jxkkjh.KKJHMXAllStore','pyfa.FAKCStore','zd.ZdXqbStore'],
	
	refs : [{
			selector : 'kkjhDetailWin',
			ref : 'kkjhDetailWin'
		}],
		
	init:function(){
		this.control({
			'kkjhDetailWin button[action=detail]':{
				click:this.detailKKJHMX
			}
		});
	},
	
	//个人计划详情
	detailKKJHMX:function(o, e, eOpts){
		var rec = getSelRec(o.up('gridpanel'));
			   if(rec != undefined){
	        		var wins = Ext.ComponentQuery.query('#kkjhmxDetailWin');
	        		if(wins.length > 0) {
		        		var win = wins[0];
		        		win.setTitle('课程详情');
		        		win.setIconCls('detail_16');
		        		win.show();
	        	}else{
					var win = new Ext.Window({
						layout:'fit',
						itemId:'kkjhmxDetailWin',
						autoShow:true,
						title:'课程详情',
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
	    				items: [Ext.create('App.view.jxkkjh.KKJHMXDetail')]
					});
	        	}
				var kkjhmxForm = win.down('form');
	        	kkjhmxForm.loadForm(rec);
	        	kkjhmxForm.setViewForm();
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
				detailKkjhWin = Ext.create('App.view.search.KKJHDetailWindow',{
 			 		itemId:'kkjhDetailWin'
 				 });
				 detailKkjhWin.down('#kkjhDetailTab').add(kkjhDetail);
				 var kkjhDetail = detailKkjhWin.down('#kkjhDetail');
				 kkjhDetail.loadForm(rec);
        		 kkjhDetail.setView();
	 			 detailKkjhWin.show();
	  	 }
	}
	})
