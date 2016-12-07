Ext.define('App.view.yx.XsbdSubmitForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.xsbdSubmitForm',
    title:'查询条件',
    autoWidth: true,
    bodyPadding: 5,
    layout:'form',
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me,{
        	items:[{
        	xtype: 'fieldcontainer',
        	layout:'hbox',
        	defaults:{labelAlign: 'right'},
				items:[{
					xtype : 'textfield',
					itemId : 'xh',
					name : 'xh',
					fieldLabel : '学号',
					width:250,
	        		labelWidth:100,
	        	    padding:'5 3 0 3',
					listeners: {  
                    specialkey: function(field,e){    
                        if (e.getKey()==Ext.EventObject.ENTER){    
                             var form = field.up('xsbdContentPanel').down('xsbdForm');
                             form.show(); 
                        }  
                    }  
                }
				},{
					xtype : 'textfield',
					itemId : 'xm',
					name : 'xm',
					fieldLabel : '姓名',
					width:250,
	        		labelWidth:100,
	        	    padding:'5 3 0 125',
					listeners: {  
                    specialkey: function(field,e){    
                        if (e.getKey()==Ext.EventObject.ENTER){    
                             var form = field.up('xsbdContentPanel').down('xsbdForm');
                             form.show(); 
                        }  
                    }  
                }
				},{
					xtype:'toolbar',
					style:'background:transparent;',
					border:'0 0 0 0',
					layout:{type:'hbox',align:'left',pack:'left'},
					items:[{
							itemId : 'submitBtn',
							text : '报到',
							iconCls : 'ok_16',
							action : 'submit'
				}]
					},{
					xtype:'toolbar',
					style:'background:transparent;',
					border:'0 0 0 0',
					layout:{type:'hbox',align:'left',pack:'left'},
					items:[{
							itemId : 'printBtn',
							text : '打印报告单',
							iconCls : 'printer_16',
							action : 'print'
				}]
					}]
				}]
	        });
        me.callParent(arguments);
    }
});