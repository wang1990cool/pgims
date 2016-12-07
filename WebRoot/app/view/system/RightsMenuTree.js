Ext.define('App.view.system.RightsMenuTree', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.rightsMenuTree',

	config: { parentId: 0 ,checkNodes:[]},
	border: false,
	split: true,
	rootVisible: false,
    lines: false,
    autoScroll: true,
    collapsible: true,
    viewConfig: {
        onCheckboxChange: function (e, t) {
            var item = e.getTarget(this.getItemSelector(), this
                .getTargetEl()), record;
            if (item) {
                record = this.getRecord(item);
                var check = !record.get('checked');
                record.set('checked', check);

                if (check) {
                    record.bubble(function (parentNode) {
                        parentNode.set('checked', true);
                    });
                    record.cascadeBy(function (node) {
                        node.set('checked', true);
                    });
                } else {
                    record.cascadeBy(function (node) {
                        node.set('checked', false);
                    });
                }
            }
        }
    },
	
    initComponent: function() {
        var me = this;
        
        me.store = Ext.create('App.store.system.TreeStore',{
            model: 'App.model.main.TreeModel',
            storeId: 'TreeStore',
            proxy: {
                type: 'ajax',
                url: 'rightgetAllocateMenus.action',
                actionMethods: 'post',
                reader: {type: 'json'}
            },
            root: {id: me.getParentId(),expanded: false}
		});

        Ext.applyIf(me, {
        });
              
        me.callParent(arguments);
    },
    
    afterRender: function( o, eOpts ){
    	var me = this;
    	
    	me.expandAll(me.setRoleMenu,me);
    },
    
    resetTree: function(root) {  //重置权限菜单树
    	var me = this;
    	
        if (root != null) {
        	root.eachChild(function (child) {
        		child.set('checked', false);
                me.resetTree(child);
           });
        }
    },
    
    setTreeCheck: function(root) { //勾选已分配菜单
    	var me = this;
    	
        if (root != null) {
        	root.eachChild(function (child) {
                for (var i = 0; i < me.getCheckNodes().length; i++) {
                    if (child.internalId == me.getCheckNodes()[i].id) {
                        child.set('checked', true);
                        me.setTreeCheck(child);
                    }
                }
            });
        }
    },
    
    setRoleMenu: function(){  //加载角色已分配权限菜单
    	var me = this;
    	
        Ext.defer(function(){
        	var root = me.getRootNode();
        	me.resetTree(root);
        	me.setTreeCheck(root);
        }, 500);
    }
    
});