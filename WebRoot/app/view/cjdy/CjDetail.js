Ext.define('App.view.cjdy.CjDetail', {
    extend: 'Ext.form.Panel',
    xtype : 'form',
    alias: 'widget.cjDetail',
    itemId:'cjDetail',
    initComponent: function() {
        var me = this;
//        me.autoScroll(true);
        Ext.applyIf(me, {
			items: [Ext.create('App.view.xs.TyXsJcxxDetail'),
		        {
	            xtype: 'fieldset',
	            autoHeight:true,
	            title: '课程成绩',
	            itemId : 'kccjxx',
	            collapsible: true,
	            padding:'5 5 10 5',
	            margin:'15 15 0 15',
	            border:'0 0 0 0',
	            defaults: {
	        		xtype: 'textfield',
	        		readOnlyCls: 'x-form-item-label',
	        		autoHeight : true,
	        		labelAlign : "right",
	        		width:250,
	        		labelWidth:100,
	        	    padding:'3 3 0 3',
	        		size:20
	        	},
				
			   items: [
			       Ext.create('App.view.cjdy.CjList',{
						itemId: 'cjList',
						height:'auto',
						width:'700'
					})

	            ]}
			],
			buttons: [{
		    	itemId:'cancelBtn',
		        text: '退出',
		        iconCls:'return_16',
		        handler: function() {
		        	this.up('window').hide();
		        }
		    }]
				   });
       me.callParent(arguments);
    },
    loadForm : function(rec){
		var me = this;
		me.loadRecord(rec);
	},
	setViewForm :function(){
    	var me = this;
		var textfields =  me.query('textfield');
		for(var i in textfields){
			textfields[i].setReadOnly(true);
		}
    }
	
});