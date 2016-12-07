Ext.define('App.view.rs.JgxxList', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.jgxxList',
			store : 'JgxxStore',
			columnLines : true,
			title : '教工信息',
			frame : true,
			layout:'auto',
			loadMask : true,
			viewConfig : {
				stripeRows : true
			},
			selModel : {
				selType : 'checkboxmodel'
			},

			initComponent : function() {
				var me = this;
				var exportCols = {
					gh : '教师工号',
					xm : '教师姓名',
					xb:'性别',
					mz:'民族',
					zzmm:'政治面貌',
					csrq : '出生日期',
					csd:'出生地',
					jgd:'籍贯地',
					zjlx:'证件类型',
					zjhm:'证件号码',
					xl:'学历',
					xw:'学位',
					byyx:'毕业院校',
					byzy:'毕业专业',
					byny:'毕业时间',
					gzny:'工作时间',
					zc:'职称',
					xzzw:'行政职务',
					szdwh:'工作单位号',
					szdw:'工作单位',
					yddh:'移动电话',
					lxdh:'联系电话',
					bgdh:'办公电话',
					dzyx:'电子邮箱',
					grzy:'个人主页',
					jstxh:'即时通信号',
					yzbm:'邮政编码',
					txdz:'通信地址',
					jsly:'教师来源',
					dslb:'导师类别',
					dszt:'导师状态',
					spny:'受聘年月',
					jpny:'解聘年月',
//					xkfx:'学科方向',
//					grjj:'个人简历',
					sfyx:'是否有效',
					bz:'备注'
				};

				Ext.applyIf(me, {
							exportCols : exportCols,
							columns : [{text : exportCols['gh'],width : 80,dataIndex : 'gh',sortable : true}, 
									   {text : exportCols['xm'],width : 80,dataIndex : 'xm',sortable : true},
									    {text : exportCols['szdwh'],width : 80,dataIndex : 'szdwh',sortable : true,hidden:true},
									    {text : exportCols['szdw'],width : 200,dataIndex : 'szdw',sortable : true},
									     {text : exportCols['jsly'],width : 100,dataIndex : 'jsly',sortable : true},
									      {text : exportCols['dslb'],width : 100,dataIndex : 'dslb',sortable : true},
									    {text : exportCols['zc'],width : 160,dataIndex : 'zc',sortable : true},
									   {text : exportCols['xb'],width : 80,dataIndex : 'xb',sortable : true},
									   {text : exportCols['mz'],width : 80,dataIndex : 'mz',sortable : true}, 
									   {text : exportCols['zzmm'],width : 120,dataIndex : 'zzmm',sortable : true},
									   {text : exportCols['csrq'],width : 100,dataIndex : 'csrq',sortable : true  ,hidden : true},
									   {text : exportCols['jgd'],width : 100,dataIndex : 'jgd',sortable : true  ,hidden : true}, 
									   {text : exportCols['zjlx'],width : 100,dataIndex : 'zjlx',sortable : true ,hidden : true},
									   {text : exportCols['zjhm'],width : 150,dataIndex : 'zjhm',sortable : true  ,hidden : true},
									   {text : exportCols['xl'],width : 100,dataIndex : 'xl',sortable : true  ,hidden : true}, 
									   {text : exportCols['xw'],width : 100,dataIndex : 'xw',sortable : true  ,hidden : true},
									   {text : exportCols['byyx'],width : 150,dataIndex : 'byyx',sortable : true,hidden:true}, 
									   {text : exportCols['byzy'],width : 100,dataIndex : 'byzy',sortable : true ,hidden : true}, 
									   {text : exportCols['byny'],width : 100,dataIndex : 'byny',sortable : true  ,hidden : true}, 
									   {text : exportCols['gzny'],width : 100,dataIndex : 'gzny',sortable : true  ,hidden : true}
//									   , 
//									   {text : exportCols['sgzny'],width : 100,dataIndex : 'sgzny',sortable : true  ,hidden : true}, 
//									   {text : exportCols['xzzw'],width : 100,dataIndex : 'xzzw',sortable : true  ,hidden : true}, 
//									   {text : exportCols['szdw'],width : 100,dataIndex : 'szdw',sortable : true  /*,hidden : true*/},
//									   {text : exportCols['yddh'],width : 100,dataIndex : 'yddh',sortable : true},
//									   {text : exportCols['lxdh'],width : 100,dataIndex : 'lxdh',sortable : true ,hidden : true},
//									   {text : exportCols['bgdh'],width : 100,dataIndex : 'bgdh',sortable : true ,hidden : true},
//									   {text : exportCols['jtdh'],width : 100,dataIndex : 'jtdh',sortable : true ,hidden : true},
//									   {text : exportCols['dzxx'],width : 100,dataIndex : 'dzxx',sortable : true ,hidden : true},
//									   {text : exportCols['grzy'],width : 100,dataIndex : 'grzy',sortable : true ,hidden : true},
//									   {text : exportCols['jstxh'],width : 100,dataIndex : 'jstxh',sortable : true ,hidden : true},
//									   {text : exportCols['yzbm'],width : 100,dataIndex : 'yzbm',sortable : true ,hidden : true},
//									   {text : exportCols['txdz'],width : 100,dataIndex : 'txdz',sortable : true ,hidden : true},
//									   {text : exportCols['sfyx'],width : 100,dataIndex : 'sfyx',sortable : true ,hidden : true},
//									   {text : exportCols['bz'],width : 100,dataIndex : 'bz',sortable : true,hidden:true}
									 ],
							dockedItems : [
									Ext.create('App.view.main.GridToolbar', {
												itemId : 'gridtoolbar',
												dock : 'top'
												/*insertBtns : ['-', {
															itemId : 'detailBtn',
															text : '查看',
															tooltip : '查看',
															iconCls : 'assign_16',
															action : 'detail'
														}]*/
											}),
									Ext.create('Ext.PagingToolbar', {
												itemId:'toolbar',
												pageSize : pSize,
												dock : 'bottom',
												store : me.store,
												displayInfo : true,
												displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
												emptyMsg : '没有数据',
												plugins : Ext.create('Ext.ux.ProgressBarPager',{})
											})]
						});

				me.callParent(arguments);
			}

		});
