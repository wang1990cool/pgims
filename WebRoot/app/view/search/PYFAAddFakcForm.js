   Ext.define('App.view.search.PYFAAddFakcForm',{
   				extend:'Ext.panel.Panel',
   				itemId:'pyfaAddFakcForm',
   				width: 750,
   				height: 400,
   				border:'0 0 0 0',
   				items:[{
   						xtype:'fieldset',
   						title:'',
        	            border:'0 0 0 0',
        	         	margin:'0 0 0	 0',
        	            padding:"0 0 0 0",
        	            items: [
        	            Ext.create('App.view.search.PYFAFakcList',{
        	            		itemId:'pyfaFakcList',
        	            		title:'',
	        	        		store: 'FAKCDetailStore',
	        	        		height:395
	        	           })]
	        	       }]
   	 });
