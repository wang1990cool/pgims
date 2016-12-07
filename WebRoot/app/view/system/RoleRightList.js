Ext.define('App.view.system.RoleRightList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.roleRightList',
	store: 'RoleRightStore',
	columnLines: true,
	itemId:'roleRightList',
	title:'角色权利',
    loadMask: true,
    autoScroll:true,
   	isDetail:false,
    viewConfig: { 
   		 stripeRows: true 
    },
    selModel:{
    	selType:'checkboxmodel'
    },
    
    initComponent:function(){
    	var me = this;
    	
    	Ext.applyIf(me,{
    		columns:[
    			{text: '权限编码', width: 100,dataIndex: 'rightCode'},
    			{text:'权限名称', width:100, dataIndex:'rightName'},
    			{text:'过滤条件', width:120,dataIndex:'rightFilter'},
    			{text:'备注', width:100, dataIndex:'memo',flex:1}
    		],
    				dockedItems:[{
        	            		dock: 'top',
   							    xtype: 'toolbar',
   							    items:[
//   							    	{
//   							    	text:'详情', 
//   							    	tooltip:'详情',
//   							    	itemId:'detail',
//   							    	iconCls:'detail_16',
//   							    	action:'detail'
//   							    },
   							    	{
   							    	text:'确定',
   							    	tooltip:'确定',
   							    	itemId:'add',
   							    	iconCls:'add_16',
   							    	action:'add'
   							    }]
   						}],
   						
			  listeners:{  
//				itemdblclick: function(o, record, item, index, e, eOpts){
//					var detailBtn = o.up('grid').down('#detail');
//					if(!detailBtn.disabled && !detailBtn.hidden)
//						detailBtn.fireEvent('click',detailBtn);
//				}
			}
   	   });
       me.callParent(arguments);
    }
});
