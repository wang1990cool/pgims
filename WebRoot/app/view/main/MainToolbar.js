Ext.define('App.view.main.MainToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.maintoolbar',
    
    initComponent: function() {
        var me = this;
        
        Ext.applyIf(me, {
        	items:['用户：',xm,'-','部门：',dept,'-',{
        		xtype: 'button',
        		cls:'x-tool-img x-tool-collapse-top',
        		handler:function(o, e, eOpts){
        			var headerPanel = Ext.getCmp('headerPanel');
        			
    				if(!headerPanel.hidden){
    					headerPanel.hide();
    					o.removeCls('x-tool-img x-tool-collapse-top');
    					o.addCls('x-tool-img x-tool-expand-bottom');
    				}else{
    					headerPanel.show();
    					o.removeCls('x-tool-img x-tool-expand-bottom');
    					o.addCls('x-tool-img x-tool-collapse-top');
    				}
        		}},'->',
        		Ext.create('Ext.Img', {
                    height: 24,
                    width: 24,
        			cls: 'clock_24'
				}),
        		Ext.create('Ext.toolbar.TextItem', {text: Ext.Date.format(new Date(), 'Y年m月d日  H:i:s'),
        			listeners: {
        				'render':{
        					fn: function(t){
                                Ext.TaskManager.start({
                                    run: function(){
                                        Ext.fly(t.getEl()).update(Ext.Date.format(new Date(), 'Y年m月d日  H:i:s'));
                                    },
                                    interval: 1000
                                });
                           }
                       }
                   }	
               }),'-',
               Ext.create('App.view.main.ThemeToolbar',{
            	   itemId:'options-toolbar'
               })]
        });

        me.callParent(arguments);
    }
});
