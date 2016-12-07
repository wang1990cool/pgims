Ext.define('App.view.yx.YxXsjbxxHList',{
	extend: 'Ext.grid.Panel',
	alias: 'widget.yxXsjbxxHList',
	
	store: 'YxXsjbxxbHStore',
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
//			id:'序号',zkzh:'准考证号',xm:'姓名',xh:'学号',xb:'性别',lqxy:'录取学院',lqzy:'录取专业',lqlb:'录取类别',nj:'年级'
			  id:'序号',nj:'年级',zkzh:'准考证号',bmh:'报名号',xh:'学号',sftms:'是否推免生',sfyzy:'是否一志愿',zsbh:'证书编号',xm:'姓名',zxf:'总学费',
			  dyxnxf:'第一学年学费',xz:'学制',jcf:'教材费',zsf:'住宿费',tjf:'体检费',yktf:'一卡通费',ylbxf:'医疗保险费',
			  hj:'合计',lqxym:'录取学院码',lqxy:'录取学院',lqzym:'录取专业码',lqzy:'录取专业',bddd:'报到地点',xmpy:'姓名拼音',
              xb:'性别',jgdm:'籍贯地码',jgd:'籍贯所在地',hf:'婚否',zjlx:'证件类型',sfzh:'身份证号',csrq:'出生日期',csdm:'出生地码',csd:'出生所在地',
              hkdm:'户口地码',hkd:'户口所在地',hkdz:'户口地址',dadm:'档案地码', dad:'档案所在地',dadw:'档案单位',dadz:'档案地址',dayb:'档案编码',
              gzdw:'工作单位',gzjl:'工作简历',jcqk:'奖惩情况',jtcy:'家庭成员',txdz:'通讯地址',txyb:'通讯邮编',lxdh:'联系电话',
              yddh:'移动电话',dzxx:'电子邮箱',ksly:'考生来源',bbydw:'本毕业单位',bbyzy:'本毕业专业',bkbyny:'本科毕业年月', 
              xlm:'学历码',xl:'学历',xwm:'学位码',xw:'学位',mz:'民族',zzmm:'政治面貌',lqlb:'录取类别',rxfsm:'入学方式码',rxfs:'入学方式',
              zp:'照片',bz:'备注',bdztm:'报到状态',xslxm:'学生类型码',xslx:'学生类型'
		};
		
		Ext.applyIf(me,{
			exportCols:exportCols,
			columns: [
				{ text: exportCols['id'], width:80, dataIndex: 'id', sortable:true,hidden:true},
				{ text: exportCols['zkzh'], width:120, dataIndex: 'zkzh', sortable:true},
				{ text: exportCols['xm'], width:70, dataIndex: 'xm', sortable:true},
				{ text: exportCols['xh'], width:100, dataIndex: 'xh', sortable:true},
				{ text:	exportCols['xb'],width: 50,dataIndex : 'xb', sortable:true},
				{ text: exportCols['nj'],width:60, dataIndex: 'nj', sortable:true},
				{ text: exportCols['sftms'],width:60, dataIndex: 'sftms', sortable:true,hidden:true},
				{ text: exportCols['sfyzy'],width:60, dataIndex: 'sfyzy', sortable:true,hidden:true},
				{ text: exportCols['lqxy'],width:200, dataIndex: 'lqxy', sortable:true},
				{ text: exportCols['lqzy'],width:160, dataIndex: 'lqzy', sortable:true},
				{ text: exportCols['lqlb'],width:160, dataIndex: 'lqlb', sortable:true},
				{ text: exportCols['xslx'], width:150, dataIndex: 'xslx', sortable:true},
				{ text: exportCols['bmh'], width:80, dataIndex: 'bmh', sortable:true,hidden:true},
				{ text: exportCols['zsbh'], width:80, dataIndex: 'zsbh', sortable:true,hidden:true},
				{ text: exportCols['xmpy'], width:80, dataIndex: 'xmpy', sortable:true,hidden:true},
				{ text: exportCols['csrq'], width:80, dataIndex: 'csrq', sortable:true,hidden:true},
				{ text: exportCols['zjlx'], width:80, dataIndex: 'zjlx', sortable:true,hidden:true},
				{ text: exportCols['sfzh'], width:80, dataIndex: 'sfzh', sortable:true,hidden:true},
				{ text: exportCols['xz'], width:80, dataIndex: 'xz', sortable:true,hidden:true},
				{ text: exportCols['lqxym'], width:80, dataIndex: 'lqxym', sortable:true,hidden:true},
				{ text: exportCols['lqzym'], width:80, dataIndex: 'lqzym', sortable:true,hidden:true},
				{ text: exportCols['xslxm'], width:80, dataIndex: 'xslxm', sortable:true,hidden:true},
				{ text: exportCols['rxfsm'], width:80, dataIndex: 'rxfsm', sortable:true,hidden:true},
				{ text: exportCols['rxfs'], width:80, dataIndex: 'rxfs', sortable:true,hidden:true},
				{ text: exportCols['bddd'], width:80, dataIndex: 'bddd', sortable:true,hidden:true},
				{ text: exportCols['zzmm'], width:80, dataIndex: 'zzmm', sortable:true,hidden:true},
				{ text: exportCols['mz'], width:80, dataIndex: 'mz', sortable:true,hidden:true},
				{ text: exportCols['hf'], width:80, dataIndex: 'hf', sortable:true,hidden:true},
				{ text: exportCols['jgdm'], width:80, dataIndex: 'jgdm', sortable:true,hidden:true},
				{ text: exportCols['jgd'], width:80, dataIndex: 'jgd', sortable:true,hidden:true},
				{ text: exportCols['csdm'], width:80, dataIndex: 'csdm', sortable:true,hidden:true},
				{ text: exportCols['csd'], width:80, dataIndex: 'csd', sortable:true,hidden:true},
				{ text: exportCols['hkdm'], width:80, dataIndex: 'hkdm', sortable:true,hidden:true},
				{ text: exportCols['hkd'], width:80, dataIndex: 'hkd', sortable:true,hidden:true},
				{ text: exportCols['hkdz'], width:80, dataIndex: 'hkdz', sortable:true,hidden:true},
				{ text: exportCols['dadm'], width:80, dataIndex: 'dadm', sortable:true,hidden:true},
				{ text: exportCols['dad'], width:80, dataIndex: 'dad', sortable:true,hidden:true},
				{ text: exportCols['dadw'], width:80, dataIndex: 'dadw', sortable:true,hidden:true},
				{ text: exportCols['dadz'], width:80, dataIndex: 'dadz', sortable:true,hidden:true},
				{ text: exportCols['dayb'], width:80, dataIndex: 'dayb', sortable:true,hidden:true},
				{ text: exportCols['gzdw'], width:80, dataIndex: 'gzdw', sortable:true,hidden:true},
				{ text: exportCols['gzjl'], width:80, dataIndex: 'gzjl', sortable:true,hidden:true},
				{ text: exportCols['jcqk'], width:80, dataIndex: 'jcqk', sortable:true,hidden:true},
				{ text: exportCols['jtcy'], width:80, dataIndex: 'jtcy', sortable:true,hidden:true},
				{ text: exportCols['txdz'], width:80, dataIndex: 'txdz', sortable:true,hidden:true},
				{ text: exportCols['txyb'], width:80, dataIndex: 'txyb', sortable:true,hidden:true},
				{ text: exportCols['lxdh'], width:80, dataIndex: 'lxdh', sortable:true,hidden:true},
				{ text: exportCols['yddh'], width:80, dataIndex: 'yddh', sortable:true,hidden:true},
				{ text: exportCols['dzxx'], width:80, dataIndex: 'dzxx', sortable:true,hidden:true},
				{ text: exportCols['ksly'], width:80, dataIndex: 'ksly', sortable:true,hidden:true},
				{ text: exportCols['bbydw'], width:80, dataIndex: 'bbydw', sortable:true,hidden:true},
				{ text: exportCols['bbyzy'], width:80, dataIndex: 'bbyzy', sortable:true,hidden:true},
				{ text: exportCols['bkbyny'], width:80, dataIndex: 'bkbyny', sortable:true,hidden:true},
				{ text: exportCols['xlm'], width:80, dataIndex: 'xlm', sortable:true,hidden:true},
				{ text: exportCols['xl'], width:80, dataIndex: 'xl', sortable:true,hidden:true},
				{ text: exportCols['xwm'], width:80, dataIndex: 'xwm', sortable:true,hidden:true},
				{ text: exportCols['xw'], width:80, dataIndex: 'xw', sortable:true,hidden:true},
				{ text: exportCols['zxf'], width:80, dataIndex: 'zxf', sortable:true,hidden:true},
				{ text: exportCols['dyxnxf'], width:80, dataIndex: 'dyxnxf', sortable:true,hidden:true},
				{ text: exportCols['jcf'], width:80, dataIndex: 'jcf', sortable:true,hidden:true},
				{ text: exportCols['zsf'], width:80, dataIndex: 'zsf', sortable:true,hidden:true},
				{ text: exportCols['tjf'], width:80, dataIndex: 'tjf', sortable:true,hidden:true},
				{ text: exportCols['yktf'], width:80, dataIndex: 'yktf', sortable:true,hidden:true},
				{ text: exportCols['ylbxf'], width:80, dataIndex: 'ylbxf', sortable:true,hidden:true},
				{ text: exportCols['hj'], width:80, dataIndex: 'hj', sortable:true,hidden:true},
				{ text: exportCols['zp'], width:80, dataIndex: 'zp', sortable:true,hidden:true},
				{ text: exportCols['bz'], width:80, dataIndex: 'bz', sortable:true,hidden:true},
				{ text: exportCols['bdztm'], width:80, dataIndex: 'bdztm', sortable:true,hidden:true}
				
			],
			dockedItems: [
				Ext.create('App.view.main.GridToolbar',{
    	    	   itemId:'gridtoolbar',
    	    	   dock: 'top',
    	    	   items: [{
					    	text:'详情',
					    	itemId:'detail',
					    	iconCls:'detail_16',
					    	action:'detail'
					    },'-', {
							itemId : 'addBtn',
							text : '导入',
							tooltip : '导入',
							iconCls : 'add_16',
							handler: function () {
		                	
							    	var win = new Ext.Window({
							    		itemId:'lsXsjbxxExcleWin',
							    		autoShow: true,
							    		title:'导入Excle',
							    		iconCls:'add_16',
							            layout: 'fit',
							            width: 360,
							            autoHeigth: true,
							            closeAction:'destroy',
							    		resizable:false,
							    		shadow:true,
							    		modal:true,
							    		closable:true,
							    		animCollapse:true,
							    		autoShow:true,
							            items: [Ext.create('App.view.yx.YxXsjbxxHExcleUpForm')]
							        });
							
		                }
						}, '-', {
							itemId : 'eportBtn',
							xtype : 'excelExport',
							action : 'toExcel'
						},/*'-', {
							itemId : 'addZpBtn',
							text : '照片导入',
							tooltip : '照片导入',
							iconCls : 'add_16',
							action : 'add'
						}, */'-', {
							itemId:'deleteDataBtn',
				            text:'清空',
				            tooltip:'清空',
				            iconCls:'rss_delete',
				            action:'deleteData'
				 	}, '-', '->', '-', {
							itemId : 'schShowBtn',
							iconCls : 'searchForm',
							action : 'showSearch'
						}, '-','每页',{
						    itemId: 'numCmb',
						    name: 'numCmb',
						    xtype: 'combo',
						    width: 50,
						    blankText: '必须选择页面大小!',
							store: Ext.StoreMgr.lookup('main.PageStore'),
						    value: pSize,
						    editable: false,
						    displayField: 'abbr',
						    valueField: 'value',
						    queryMode: 'local'
						}, '条']
    	       }),
			    Ext.create('Ext.PagingToolbar', {
		        itemId:'toolbar',
		        pageSize: pSize,
		        dock: 'bottom',
		        store: me.store,
		        displayInfo: true,
		        displayMsg: '显示 {0} - {1} 条，共计 {2} 条',
		        emptyMsg: '没有数据',
		        plugins: Ext.create('Ext.ux.ProgressBarPager', {})
		    })]
        });
        me.callParent(arguments);
        }     	
});







