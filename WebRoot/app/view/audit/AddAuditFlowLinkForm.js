   Ext.define('App.view.audit.AddAuditFlowLinkForm',{
   				extend:'Ext.panel.Panel',
   				alias:'widget.addAuditFlowLinkForm',
   				itemId:'addAuditFlowLinkForm',
   				width: 790,
   				items:[{
   						xtype:'fieldset',
   						title:'',
        	            border:'0 0 0 0',
        	         	margin:'0 0 0 0',
        	            padding:"5 8 1 10",
        	            width:785,
        	            items: [{
			    			xtype:'textfield',
			    			itemId:'flowCode',
			    			fieldLabel:'流程码',
			    			hidden:true
			    		},
        	            Ext.create('App.view.audit.AuditFlowLinkList',{
        	            		itemId:'auditFlowLinkList',
        	            		title:'',
	        	        		store: 'AuditFlowLinkStore',
	        	        		height:330
	        	           })]
	        	       }]
   	 			});
