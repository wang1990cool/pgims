Ext.define('App.view.audit.AuditFlowLinkList', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.auditFlowLinkList',
	
	store: 'AuditFlowLinkStore',
    columnLines: true,
    title: '审核流程',
    autoScroll:true,
    frame: true,
    layout:'fit',
    loadMask: true,
    viewConfig: { stripeRows: true },
    selModel: {  
        selType:'checkboxmodel'  
    }, 
	
	initComponent: function() {
        var me = this;
        
        var exportCols = {
            oid: '排序号',nodeName:'节点名称', flowCode: '流程码', flagCode: '当前状态码', nextFlagCode: '下一状态码', 
            auditRole: '审核角色', auditScope: '审核范围',
        	isPass: '有效', memo: '备注'
        };
        
        Ext.applyIf(me, {
        	exportCols:exportCols,
            columns: [
            	{ text: exportCols['oid'], width: 80, dataIndex: 'oid',sortabel: true },
            	{ text: exportCols['nodeName'], width: 100, dataIndex: 'nodeName', sortable: false },
            	{ text: exportCols['flowCode'], width: 100, dataIndex: 'flowCode', sortable: false },
            	{ text: exportCols['flagCode'], width: 100, dataIndex: 'flagCode', sortable: false },
            	{ text: exportCols['nextFlagCode'], width: 100, dataIndex: 'nextFlagCode', sortable: false },
            	{ text: exportCols['auditRole'], width: 100, dataIndex: 'auditRole', sortable: false },
//            	{ text: exportCols['auditScope'], width: 150, dataIndex: 'auditScope', sortable: false},
            	{ text: exportCols['isPass'], width: 60, dataIndex: 'isPass', sortable: false,flex:1,
					renderer:function(value){
		            	if (value == 1) return '是';
		            	else return '否';
	            }},
            	{ text: exportCols['memo'], width: 200, dataIndex: 'memo', sortable: false,hidden:true}
		    ],
   				dockedItems:[{
            		dock: 'top',
				    xtype: 'toolbar',
				    items:[{
				    	text:'详情', 
				    	tooltip:'详情',
				    	itemId:'detail',
				    	iconCls:'detail_16',
				    	action:'detail'
				    },'-',{
				    	text:'增加',
				    	tooltip:'增加',
				    	itemId:'add',
				    	iconCls:'add_16',
				    	action:'add'
				    },'-',{
				    	text:'修改',
				    	tooltip:'修改',
				    	itemId:'edit',
				    	iconCls:'edit_16',
				    	action:'edit'
				    },'-',{
				    	text:'删除',
				    	tooltip:'删除',
				    	itemId:'delete',
				    	iconCls:'delete_16',
				    	action:'delete'
				    }
//   							    ,'-',{
//					            	itemId:'eportBtn',
//						            xtype: 'excelExport',
//						            actionUrl:'fakctoExcel.action'
//					         	 }
		         	 ]
   			}]
        });

        me.callParent(arguments);
    }
});
