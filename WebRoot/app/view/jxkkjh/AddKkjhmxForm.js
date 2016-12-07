   Ext.define('App.view.jxkkjh.AddKkjhmxForm',{
   				extend:'Ext.panel.Panel',
   				itemId:'addKkjhmxForm',
   				items:[{
   						xtype:'fieldset',
   						title:'',
        	            border:'0 0 0 0',
        	         	margin:'0 0 0 0',
        	         	padding:'0 0 0 0',
        	            items: [
        	            Ext.create('App.view.jxkkjh.KKJHMXList',{
        	            		itemId:'kkjhmxList',
        	            		title:'',
	        	        		store: 'KKJHMXAllStore',
	        	        		height:375
	        	           })]
	        	       }]
   	 			});
