Ext.define('App.controller.yx.YxSjkzController', {
    extend: 'Ext.app.Controller',
    
    models: ['yx.YxSjkzbModel'],
    stores: ['yx.YxSjkzbStore'],
    views:['yx.YxSjkzContentPanel'],
    
    init: function() {
		this.control({
			'yxSjkzList gridtoolbar combo[itemId=numCmb]': {
				render: this.initPageSize,
				select: this.setPageSize
			},
			
			'yxSjkzList  button[action=edit]': {
				click: this.editSjkz
			}
			
		});
    },
    
    getCenter: function(){
    	return this.application.getController('main.MainController').getCenter();
    },
    
//    getPanel:function(){
//    	var me = this;
//    	return me.getYxYxSjkzContentPanelView();
//    },
    
    initStore:function(){
    	var me = this;
    	
    	var store = me.getStore('YxSjkzbStore'), proxy = store.getProxy();
    	proxy.setExtraParam('params', '');
    	store.load();
    },
    
//    onLaunch:function(record){
//    	var me = this;
//    	me.initStore();
//    },
    
    onLaunch : function(record) {
				var me = this;
				me.initStore();
				var center = me.getCenter();
				var tab = center.down('#M' + record.get('parentId'));
				var removePanel = tab.down('#content');
				tab.remove(removePanel);
				var contentPanel = Ext.create('App.view.yx.YxSjkzContentPanel',
						{
							itemId : 'content',
							parentId : record.get('id')
						});
				tab.add(contentPanel);
				center.setActiveTab(tab);
			},
    
    initPageSize: function(o, e, eOpts){
    	o.setValue(pSize);
    },
    
    setPageSize: function(o, e, eOpts){
    	var pGrid = o.up('gridpanel');
        pSize = o.getValue();
        pGrid.store.pageSize = pSize;
        pGrid.store.load();
    },
    
    editSjkz: function( o, e, eOpts ){
		var rec = getSelRec(o.up('gridpanel'));
		if (rec != undefined) {
			var yxSjkzWins = Ext.ComponentQuery.query('#yxSjkzWin');
			if (yxSjkzWins.length > 0) {
				var win = yxSjkzWins[0];
				win.setTitle('时间控制');
				win.setIconCls('edit_16');
				win.show();
			} else {
				var win = new Ext.Window({
					itemId : 'yxSjkzWin',
					title : '时间控制',
					iconCls : 'edit_16',
					layout : 'fit',
					width : 300,
					height : 200,
					closeAction : 'hide',
					resizable : false,
					shadow : true,
					modal : true,
					closable : true,
					animCollapse : true,
					autoShow : true,
					items : [Ext.create(
						'App.view.yx.YxSjkzForm', {
							itemId:'yxSjkzForm',
							autoScroll : true,
							isAdd : false
						})]
				});
			}
			var yxSjkzForm = win.down('form');
			var textfields = yxSjkzForm.query('textfield');
			yxSjkzForm.edit(rec);
			yxSjkzForm.loadForm(rec);
		}
	}

});
