   Ext.define('App.view.search.KKJHAddKkjhmxForm',{
   				extend:'Ext.panel.Panel',
   				itemId:'kkjhAddKkjhmxForm',
   				items:[{
   						xtype:'fieldset',
   						title:'',
        	            border:'0 0 0 0',
        	         	margin:'0 0 0 0',
        	         	padding:'0 0 0 0',
        	            items: [
        	            Ext.create('App.view.search.KKJHMXList',{
        	            		itemId:'kkjhmxList',
        	            		title:'',
	        	        		store: 'KKJHMXAllStore',
	        	        		height:375
	        	           })]
	        	       }]
   	 			});
