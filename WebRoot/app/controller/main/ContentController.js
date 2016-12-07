Ext.define('App.controller.main.ContentController', {
    extend: 'Ext.app.Controller',
    
    init: function() {
		this.control({
		    'contentMenuTree': {
		    	itemclick: this. contentMenuTreeClick ,
		    	load : this.firstNodeLoad
		    }
		});
    },
    
    getCenter: function(){
    	return this.application.getController('main.MainController').getCenter();
    },
    
    onLaunch:function(record){
    	var me = this;
    	
    	var center = me.getCenter();
		var tab = center.down('#M'+record.get('id'));
		
		if (tab == undefined) {
            tab = Ext.create('App.view.system.SystemMainPanel',{
	        	itemId:'M' + record.get('id'),
	        	title:record.get('text'),
	        	iconCls:record.get('iconCls'),
	        	parentId:record.get('id'),
	        	closable: true,
	        	closeAction: 'destroy',
	        	autoScroll:true
	        });
	        
			var center = this.application.getController('main.MainController').getCenter();
	        center.add(tab);
		}
		center.setActiveTab(tab);
    },
    
    contentMenuTreeClick:function(o, record, item, index, e, eOpts){
    	var me = this;
    	
    	if(record.get('leaf')){
        	var controllerName = "App.controller." + record.raw.url;
        	var application = me.getApplication();
        	var controller = application.getController(controllerName);
        	controller.onLaunch(record);    		
    	}
    },
    
    firstNodeLoad: function(o, node, records, successful, eOpts ){
    	var me = this;
    	
        Ext.defer(function(){
        	var center = me.getCenter();
        	var contentMenuTree = center.getActiveTab().down('#contentMenuTree');
        	var root = contentMenuTree.getRootNode();
        	if(root.hasChildNodes()){
        		var node = root.getChildAt(0);
        		contentMenuTree.getSelectionModel().select(node);
        		var record = o.getNodeById(node.getId());
        		contentMenuTree.fireEvent('itemclick',node,record);
        	}
        }, 500);
    }
});
