Ext.define('App.view.main.TopMenu', {
    extend: 'Ext.view.View',
    alias: 'widget.topMenu',

    initComponent: function() {
        var me = this;
        
        me.store = Ext.create('Ext.data.Store', {
        	model: 'App.model.main.MenuTreeModel',
 		   	proxy: {type: 'memory'},
 		   	data:[{id:'back',text:'',iconCls:'styles/images/Icon/back_32.png',url:'',param:''},
 		   	      {id:'forward',text:'',iconCls:'styles/images/Icon/forward_32.png',url:'',param:''},
 		   	      {id:'refresh',text:'',iconCls:'styles/images/Icon/refresh_32.png',url:'',param:''},
 		   	      {id:'pwdset',text:'',iconCls:'styles/images/Icon/pwdset_32.png',url:'',param:''},
 		   	      {id:'exit',text:'',iconCls:'styles/images/Icon/exit_32.png',url:'',param:''}]
		});

        Ext.applyIf(me, {
            overItemCls: 'top-bar-over',
            style:'background-image:url(styles/images/system/bg.png)',
            itemTpl: [
              '<tpl for=".">',
                  '<div class="top-bar-wrap" id="{id:stripTags}">',
                      '<div class="top-bar"><img src="{iconCls}" title="{text:htmlEncode}"></div>',
                      '<span class="x-editable">{text:htmlEncode}</span>',
                  '</div>',
              '</tpl>'
            ]
        });

        me.callParent(arguments);
    }
});