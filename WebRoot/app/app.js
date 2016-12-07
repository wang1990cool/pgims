Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'extjs/ux/');
Ext.Loader.setPath('Ext.app', 'app/');

Ext.application({
   requires: [
      'Ext.tab.*',
      'Ext.ux.extend.SelectField',
      'Ext.ux.extend.GridSearch', 
      'Ext.ux.extend.ExcelExport',
      'Ext.ux.extend.TreeGridFilter',
      'Ext.ux.extend.TreePathPicker',
      'Ext.ux.extend.FileDownload',
      'Ext.ux.TabCloseMenu',
      'Ext.ux.TreePicker',
   	   'Ext.ux.extend.TreeCombo',
   	  'App.view.jxpk.TreeCombo',
      'Ext.ux.statusbar.StatusBar',
      'Ext.ux.grid.FiltersFeature',
      'Ext.ux.ProgressBarPager'
   ],
	
    autoCreateViewport: false,
    controllers: [
          'main.MainController'
    ],
    name: 'App',
    appFolder: 'app',
    
    launch: function() {
    	if (userName != null) 
    		Ext.create('App.view.main.MainView');
    }
});
