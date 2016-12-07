   Ext.define('App.view.cjdy.AddCjmxForm',{
   				extend:'Ext.panel.Panel',
   				itemId:'addCjmxForm',
   				items:[{
   						xtype:'fieldset',
   						title:'',
        	            border:'0 0 0 0',
        	         	margin:'0 0 0 0',
        	         	padding:'0 0 0 0',
        	            items: [
        	            Ext.create('App.view.cjdy.CjList',{
        	            		itemId:'cjList',
        	            		title:'',
	        	        		store: 'ViewJxCjcxAllStore',
	        	        		height:375
	        	           })]
	        	       }]
   	 			});
