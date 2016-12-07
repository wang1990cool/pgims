Ext.define('App.controller.main.SecMenuController', {
    extend: 'Ext.app.Controller',
    
    views: ['main.SecMainPanel'],
    
    init: function() {
		this.control({
		    'secMenuTree': {
		    	itemclick: this. secMenuTreeClick 
		    },
		    'secMenuView':{
		    	itemclick: this. secMenuClick 
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
	        tab = Ext.create('App.view.main.SecMainPanel',{
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
    
    secMenuTreeClick:function(o, record, item, index, e, eOpts){
    	var me = this;
    	
    	if(record.get('leaf')){
        	var controllerName = "App.controller." + record.raw.url;
        	var application = me.getApplication();
        	var controller = application.getController(controllerName);
        	controller.onLaunch(record);    		
    	}
    },
    
    secMenuClick:function(o, record, item, index, e, eOpts){
    	var me = this;
    	
    	var controllerName = "App.controller." + record.get('url');
    	var application = me.getApplication();
    	var controller = application.getController(controllerName);
    	controller.onLaunch(record);
    }
});
