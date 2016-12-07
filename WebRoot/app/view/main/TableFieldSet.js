Ext.define('App.view.main.TableFieldSet', {
	extend: 'Ext.form.FieldSet',
	alias: 'widget.tablefieldset',
	
	columns:3,
    autoHeight:true,
    collapsible: false,
    border:'0 0 0 0',
    padding:'5 5 10 5',
    defaults: {
		xtype: 'textfield',
		autoHeight : true,
		labelAlign : 'right',
//		beforeLabelTextTpl: '<span style="color:red;font-weight:bold" data-qtip="必填">*</span>',
		width:280,
		labelWidth:120,
		padding:'5 0 0 0'
	},
	
    initComponent: function() {
        var me = this;

        Ext.apply(me, {
        	layout:{
        		type:'table',
        		columns: me.columns,
        		tableAttrs:{ 
        			style:'width:100%;text-align:center;border:1px solid #B3D0EE;border-collapse:collapse;empty-cells:show;', 
        			align:'center'
        		},
        		tdAttrs:{
        			style:'border: 1px solid rgb(179, 208, 238);',
        			align:'left'
        		}
        	}
        });
        me.callParent(arguments);
    }
});