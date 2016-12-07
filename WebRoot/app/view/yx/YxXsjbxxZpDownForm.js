Ext.define('App.view.yx.YxXsjbxxZpDownForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.yxXsjbxxZpDownForm',
	
    xtype: 'form',
    frame:true,
    autoWidth: true,
    bodyStyle:'padding:20 50 50 50',
    defaultType: 'textfield',
    defaults: {
    	anchor: '100%',
//    	readOnlyCls: 'x-item-disabled',
    	labelAlign : "right"
	},
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 75,
        width: 120
    },
    bodyStyle: 'background:#fff; padding:10 25 10 25;',
	
	initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        	
        	 items: [{
        			xtype: 'radiogroup',
            		  items: [{
                        xtype: 'radiofield',
                        name: 'zpmm',
                        inputValue:'xh',
                        boxLabel: '学号命名'
                    }/*,{
                        xtype: 'radiofield',
                        name: 'zpmm',
                         inputValue:'zkzh',
                        boxLabel: '准考证号命名'
                    }*/,{
                        xtype: 'radiofield',
                        name: 'zpmm',
                         inputValue:'sfzh',
                        boxLabel: '身份证号命名'
                    }]
                     }],
            buttons: [{
				            xtype: 'FileDownloader',
				            itemId: 'fileDownloader',
				            width: 0,
				            height: 0
		       			},{
            	itemId:'saveBtn',
		        text: '确定',
		        iconCls:'save_16',
                handler: function(form){
                			var zpmmfs = this.up('form').getValues()["zpmm"];
		            		var downloader = this.up('form').down('#fileDownloader');
		            		downloader.load({
		            			params: {zpmmfs:zpmmfs},
		            			url: 'yxXsjbxxFileDownloadZp.action'
		            		});
                }
            },{
        	    text: '返回',
        	    iconCls:'return_16',
                handler: function () {
                    me.up('window').close();
                }
            }]
        });

        me.callParent(arguments);
    }
    
});
