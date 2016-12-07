Ext.define('App.view.main.CenterTabPanel', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.centerTabPanel',
	
    layout:'fit',
    flex: 1,
    enableTabScroll : true, 
	deferredRender : false,
	acriveTab:'0',
    plugins: Ext.create('Ext.ux.TabCloseMenu', { 
		ptype: "tabscrollermenu",
        maxText: 15,
        pageSize: 5,
		closeTabText: '关闭当前页面',
		closeOthersTabsText: '关闭其他页面',
		closeAllTabsText: '关闭所有页面',
        extraItemsTail: ['-',{
            text: '是否可关闭',
            checked: true,
            hideOnClick: true,
            handler: function (item) {
                currentItem.tab.setClosable(item.checked);
            }
        }],
        listeners: {
            aftermenu: function () {
                currentItem = null;
            },
            beforemenu: function (menu, item) {
                var menuitem = menu.child('*[text="是否可关闭"]');
                currentItem = item;
                menuitem.setChecked(item.closable);
            }
        }
    }),
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
			items: [{
				xtype:'panel',
				title:"我的桌面",
				iconCls:'home_16',
				layout: {
				    type: 'vbox',
				    align: 'center'
				},
				bodyCls: 'centerbg',
				items:[Ext.create('App.view.main.MenuView',{
	                itemId:'normalMenuView',
	                padding:'5 0 0 60',
	                height: 100,
	                width: 800,
	                store: Ext.create('Ext.data.Store', {
	                	autoLoad:true,
	                	model: 'App.model.main.MenuTreeModel',
	                    proxy: {
	                        type: 'ajax',
	                        url: 'getMenus.action',
	                        actionMethods: 'post',
	                        reader: {type: 'json'},
	                        extraParams:{node:10000}
	                    }
	            	})
				}),Ext.create('App.view.main.MenuView',{
	                itemId:'mainMenuView',
	                padding:'30 0 0 0',
	                height: 800,
	                width: 800,
	                store: Ext.create('Ext.data.Store', {
	                	autoLoad:true,
	                	model: 'App.model.main.MenuTreeModel',
	                    proxy: {
	                        type: 'ajax',
	                        url: 'getMenus.action',
	                        actionMethods: 'post',
	                        reader: {type: 'json'},
	                        extraParams:{node:0}
	                    }
	            	})
				})],    
			    reload: function(){
			    	var me = this;
			    	
			    	normalMenuView = me.down('#normalMenuView');
			    	mainMenuView = me.down('#mainMenuView');
			    	normalMenuView.getStore().reload();
			    	mainMenuView.getStore().reload();
			    }
			}]
        });
        me.callParent(arguments);
    }
});