Ext.define('App.view.search.XsJcxxbList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.xsJcxxbAllList',
	
	store: 'XsJcxxbStore',
	columnLines: true,
    title: '学生基本信息',
    
    frame: true,
    loadMask: true,
    viewConfig: { stripeRows: true },
    stripeRows: true,
    selModel: {  
        selType:'checkboxmodel'  
    }, 
	
	initComponent:function() {
		var me = this;
		
		var exportCols = {
			xh:'学号',xm:'姓名',xb:'性别',zzmm:'政治面貌',mz:'民族',xmpy:'姓名拼音',
			csrq:'出生日期',csd:'出生地',jgd:'籍贯地',yxmc:'院校名称',zjlx:'证件类型',zkzh:'准考证号',
			zjhm:'证件号码',xslx:'学生类型',rxrq:'入学日期',sznj:'所在年级',fymc:'所在学院',bjmc:'班级名称',
			zymc:'所在专业',yjfx:'研究方向',xz:'学制',pycc:'培养层次',yjbyrq:'预计毕业日期',jylb:'教育类别',
			xwlb:'学位类别',rxfs:'入学方式',sfbd:'是否报到',sfzx:'是否在校',dqzt:'当前状态',dsxm:'导师姓名',
			hyzk:'婚姻状况',bz:'备注',gjdqmc:'国籍'
					            	           	            	        	          
		};
		
		Ext.applyIf(me,{
			exportCols:exportCols,
			columns: [
				{ text: exportCols['xh'], width:120, dataIndex: 'xh', sortable:true},
				{ text: exportCols['xm'], width:100, dataIndex: 'xm', sortable:true},
				{ text : exportCols['xb'],width: 50,dataIndex : 'xb', sortable:true},		
				{ text: exportCols['fymc'],width:200, dataIndex: 'fymc', sortable:true},
				{ text: exportCols['zymc'],width:160, dataIndex: 'zymc', sortable:true},
				{ text: exportCols['xslx'],width:160, dataIndex: 'xslx', sortable:true},
				{ text: exportCols['sznj'],width:80, dataIndex: 'sznj', sortable:true},
				{ text: exportCols['bjmc'],width:160, dataIndex: 'bjmc', sortable:true,hidden:true},
				{ text: exportCols['zzmm'], width:110, dataIndex: 'zzmm', sortable:true,hidden:true},
				{ text: exportCols['mz'], width:70, dataIndex: 'mz', sortable:true,hidden:true},
				{ text: exportCols['csrq'],width: 100, dataIndex: 'csrq', sortable:true,hidden:true},
				{ text: exportCols['csd'], width:160, dataIndex: 'csd', sortable:true,hidden:true},
				{ text: exportCols['jgd'], width:160, dataIndex: 'jgd', sortable:true,hidden:true},
				{ text: exportCols['yxmc'],width:160, dataIndex: 'yxd', sortable:true,hidden:true},
				{ text: exportCols['xmpy'],width:160, dataIndex: 'xmpy', sortable:true,hidden:true},
				{ text: exportCols['zjlx'],width:80, dataIndex: 'zjlx', sortable:true,hidden:true},
				{ text: exportCols['zjhm'],width:160, dataIndex: 'zjhm', sortable:true,hidden:true},
				{ text: exportCols['rxrq'],width:100, dataIndex: 'rxrq', sortable:true,hidden:true},
				{ text: exportCols['yjfx'],width:100, dataIndex: 'yjfx', sortable:true,hidden:true},
				{ text: exportCols['xz'],width:100, dataIndex: 'xz', sortable:true,hidden:true},
				{ text: exportCols['pycc'],width:100, dataIndex: 'pycc', sortable:true,hidden:true},
				{ text: exportCols['jylb'],width:100, dataIndex: 'jylb', sortable:true,hidden:true},
				{ text: exportCols['xwlb'],width:100, dataIndex: 'xwlb', sortable:true,hidden:true},
				{ text: exportCols['rxfs'],width:100, dataIndex: 'rxfs', sortable:true,hidden:true},
				{ text: exportCols['sfbd'],width:100, dataIndex: 'sfbd', sortable:true,hidden:true},
				{ text: exportCols['sfzx'],width:100, dataIndex: 'sfzx', sortable:true,hidden:true},
				{ text: exportCols['dqzt'],width:100, dataIndex: 'dqzt', sortable:true,hidden:true},
				{ text: exportCols['dsxm'],width:100, dataIndex: 'dsxm', sortable:true},
				{ text: exportCols['hyzk'],width:100, dataIndex: 'hyzk', sortable:true,hidden:true},
				{ text: exportCols['bz'],width:160, dataIndex: 'bz',hidden:true},
				{ text: exportCols['gjdqmc'],width:100, dataIndex: 'gjdqmc', sortable:true,hidden:true},
				{ text: exportCols['yjbyrq'],width:100,dataIndex: 'yjbyrq', sortable:true,hidden:true}
													
			
			],
    		
      	    dockedItems: [
      	    {
      	    	dock:'top',
      	    	xtype:'toolbar',
      	    	items:[{
							itemId : 'detailBtn',
							text : '详情',
							tooltip : '详情',
							iconCls : 'detail_16',
							action : 'detail'
						},'-', {
							itemId : 'eportBtn',
							xtype : 'excelExport',
							action : 'toExcel'
						}, '-', '->', '-', {
							itemId : 'schShowBtn',
							iconCls : 'searchForm',
							action : 'showSearch'
						}, '-', '每页', {
							itemId : 'numCmb',
							name : 'numCmb',
							xtype : 'combo',
							width : 50,
							blankText : '必须选择页面大小!',
							store : Ext.StoreMgr.lookup('main.PageStore'),
							value : pSize,
							editable : false,
							displayField : 'abbr',
							valueField : 'value',
							queryMode : 'local'
						}, '条']
      	    },
   
		    Ext.create('Ext.PagingToolbar', {
		    	itemId:'toolbar',
		        pageSize: pSize,
		        dock: 'bottom',
		        store:  me.store,
		        displayInfo: true,
		        displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
		        emptyMsg: '没有数据',
		        plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		    })]
        });
        me.callParent(arguments);
        }     	
});







