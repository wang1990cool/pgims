Ext.define('App.controller.main.MainController', {
    extend: 'Ext.app.Controller',
    
    models: ['main.MenuTreeModel','main.PageModel'],
    stores: ['main.MenuTreeStore','main.PageStore'],
    views: ['main.HeaderPanel','main.CenterPanel'],
    
    init: function() {
		this.control({
		    'topMenu': {
		    	itemclick: this. topMenuClick 
		    },
		    'menuView':{
		    	itemclick: this. mainMenuClick 
		    }
		});
    },
    
    getCenter: function(){
    	return Ext.getCmp('mainContent');
    },
    
    topMenuClick:function(o, record, item, index, e, eOpts){
    	var me = this;
		var center = me.getCenter();
		var tab = center.getActiveTab();
		switch(index){
    		case 0: // back 
    			center.setActiveTab(tab.previousSibling());
    			break;
    		case 1: // forward 
    			center.setActiveTab(tab.nextSibling());
    			break;
    		case 2: // reload
    			tab.reload();
    			break;
    		case 3: // password set
    	    	Ext.create('App.view.main.PwdSet',{
    	    		itemId:'pwdSetWin',
    	    		height:200,
    	    		width:360,
    	    		iconCls:'pwd_16',
    	    		closeAction:'hide',
    	    		resizable:false,
    	    		shadow:true,
    	    		modal:true,
    	    		closable:true,
    	    		animCollapse:true,
    	    		autoShow:true
    	    	});
    			break;	
    		case 4: // exit 
    			var theme = getTheme();
				
			 	Ext.MessageBox.confirm('提示','确认退出？',function(btn){
		           if(btn=="yes")
		               Ext.Ajax.request({
		                    url: 'exit.action',
		                    actionMethods: 'post',
		                    autosync: true,
		                    scope: this,
		                    success: function (response) {
		                    	Ext.Msg.show({title:'提示', msg:'您已经退出！',buttons: Ext.Msg.OK,icon: Ext.Msg.INFO,fn:function(){
		                    		window.location.href = "index.action" + (theme === 'classic'?'':'?theme='+ theme);
		                    	}});
		                    },
		                    failure: function (response) {
		                    }
		                });
				});
    			break;
		}
    },
    
    mainMenuClick:function(o, record, item, index, e, eOpts){
    	var me = this;

    	var controllerName = "App.controller." + record.get('url');
    	var application = me.getApplication();
    	var controller = application.getController(controllerName);
//    	controller.init(application);
    	controller.onLaunch(record);
    }
});
