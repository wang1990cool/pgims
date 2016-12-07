Ext.define('App.controller.kyjl.ArrangeTecjlController',{
	extend:'Ext.app.Controller',
	
	models : [ 'xs.XsJcxxbModel',
			'kyjl.XwKyjlzlbModel','kyjl.XwKyjlbModel'],
	stores : ['kyjl.XwKyjlzlbStore','kyjl.XwKyjlbStore','zd.ZdShjgmStore'],
//	refs: [{  
//        selector: 'arrangeTecWindow',  
//        ref: 'arrangeTecWindow'  
//    }],
    
	init:function(){
		this.control({
				/*'#arrangeTecWindowjl button[action=searchZjjs]':{
					click:this.searchZjjs
				},*//*'#arrangeTecWindowjlb button[action=searchZjjsms]':{
					click:this.searchZjjsms
				},*//*,
				'arrangeTecWindow button[action=searchZkjs]':{
					click:this.searchZkjs
				},
				'arrangeTecWindow  button[action=searchSyjs]':{
					click:this.searchSyjs
				},*/
				'#arrangeTecWindowjlbjl  button[action=save]':{
					click:this.addJs
				}
			});
		},
		addJs:function(o, e, eOpts){
			var me = this;
			var win = o.up('window');
			var skxxList = win.skxxList;
			var kkjhAddJLForm = win.down('#kkjhAddJLForm');
			var arrangeTecshForm = kkjhAddJLForm.down('#arrangeTecshForm');//审核
			var arrangeTecshjlForm = kkjhAddJLForm.down('#arrangeTecshjlForm');//科研
			var form = kkjhAddJLForm.down('#arrangeTecjbForm');//学生基本信息
			var xwKtbgsqb = form.down('#viewXwDbmsbbb1');
			var xwKtbgsqb1 = arrangeTecshForm.down('#viewXwDbmsbb1');
			var xwKtbgsqb2 = arrangeTecshjlForm.down('#viewXwDbmsb1');
			var json = {}
//			var items = xwKtbgsqb.items;
//			values = form.getValues();
//			xwKtbgsqb1.items.each(function(fsItem){
//			if(fsItem.itemId == 'dbrq'){
//				json[fsItem.itemId] = values.dbrq.replace("T00:00:00", "");///\-/g
//			}else if(fsItem.itemId == 'dbsj'){
//				json[fsItem.itemId] = values.dbsj.replace(/\2008-01-01T0/g, "");
//			}
//		})
		var form = me;
//		var xh = xwKtbgsqb2.down('#xh').getValue();
		json['xh'] = xwKtbgsqb2.down('#xh').getValue();
		
		json['ztm'] = xwKtbgsqb1.down('#ztm').getValue();
		json['zt'] = xwKtbgsqb1.down('#zt').getValue();
		json['shrgh'] = xwKtbgsqb1.down('#shrgh').getValue();
		json['shr'] = xwKtbgsqb1.down('#shr').getValue();
		json['shsj'] = xwKtbgsqb1.down('#shsj').getValue();
		json['shyj'] = xwKtbgsqb1.down('#shyj').getValue();
		json['shjg'] = xwKtbgsqb1.down('#shjg').getValue();
		json['shjgm'] = xwKtbgsqb1.down('#shjgm').getValue();
		
		json['id'] = xwKtbgsqb2.down('#id').getValue();
		json['cglxm'] = xwKtbgsqb2.down('#cglxm').getValue();
		json['xn'] = xwKtbgsqb2.down('#xn').getValue();
		json['xq'] = xwKtbgsqb2.down('#xq').getValue();
		json['cglx'] = xwKtbgsqb2.down('#cglx').getValue();
		json['hjcgmc'] = xwKtbgsqb2.down('#hjcgmc').getValue();
		json['hjrq'] = xwKtbgsqb2.down('#hjrq').getValue();
		
		json['kjjlbm'] = xwKtbgsqb2.down('#kjjlbm').getValue();
		json['kjjlb'] = xwKtbgsqb2.down('#kjjlb').getValue();
		json['jldjm'] = xwKtbgsqb2.down('#jldjm').getValue();
		json['jldj'] = xwKtbgsqb2.down('#jldj').getValue();
		json['jlpzh'] = xwKtbgsqb2.down('#jlpzh').getValue();
		json['bjdw'] = xwKtbgsqb2.down('#bjdw').getValue();
		json['hjmd'] = xwKtbgsqb2.down('#hjmd').getValue();
		
		json['brpm'] = xwKtbgsqb2.down('#brpm').getValue();
		json['xmlym'] = xwKtbgsqb2.down('#xmlym').getValue();
		json['xmly'] = xwKtbgsqb2.down('#xmly').getValue();
		
		json['kyuuid'] = xwKtbgsqb2.down('#kyuuid').getValue();
		json['lrrgh'] = xwKtbgsqb2.down('#lrrgh').getValue();
		
		json['lrr'] = xwKtbgsqb2.down('#lrr').getValue();
		json['lrip'] = xwKtbgsqb2.down('#lrip').getValue();
		json['lrsj'] = xwKtbgsqb2.down('#lrsj').getValue();
//		var ztmm=xwKtbgsqb1.down('#ztmm').down('#audit').getValue();
//		alert(ztmm)
//		alert(ztmm)
//		if(ztm=='')
		if(json['zt'] == ''){
		json['ztm'] = '2';
		json['zt'] = '初审通过'}
		if(json['zt'] == '初审通过')
		{json['ztm'] = '2';
		json['zt'] = '初审通过';
		}else if(json['zt'] == '初审未通过')
		{json['ztm'] = '3';
		json['zt'] = '初审未通过';}
//		alert(json['ztm'])
			alert(Ext.encode(json))
//		    JSONobj.push(JSON.stringify(values));
//		if(json['xn'] && json['xq'] && json['xh'] && json['lwtm'] &&
//			json['dbdd'] && json['dbrq'] && json['dbsj'] && json['ydrs']
//			&&json['sdrs'] &&json['qxrs']&&json['bjtyps']&&json['bjbtyps']&&json['bjqqps']){
			if(json['shjgm']){	
			Ext.Ajax.request({
				url : 'xwKyjlbEdit.action',
				waitTitle : '提示',
				method : 'post',
				params:{datas:Ext.encode(json)},
//				params:{datas:JSONobj},
				success : function(response, opts) {
					var result = Ext.decode(response.responseText);
					var success = result.result.success;
					var id = result.id;
					if(success){
						var msg = "保存成功！";
						Ext.MessageBox.show({
				           title: '提示',
				           msg: msg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.INFO,
					       fn: function(id, msg){
					    	 	 skxxList.getStore().load()
				        			win.close();
							    } 
				        });
					}else{
						var errmsg = "保存失败！";
						Ext.MessageBox.show({
				           title: '错误',
				           msg: errmsg,
				           buttons: Ext.MessageBox.OK,
				           icon: Ext.MessageBox.ERROR,
				           fn: function(id, msg){  
				        	   me.getForm().reset();
						    }  
				        });
					}
				}
			});
			}
			else {var errmsg = "请选择审查结果！";
					 Ext.MessageBox.show({
			           title: '错误',
			           msg: errmsg,
			           buttons: Ext.MessageBox.OK,
			           icon: Ext.MessageBox.ERROR
//			           icon: Ext.MessageBox.WARNING,
//			           fn: function(id, msg){  
//			        	   form.getForm().reset();
//					    }  
			       });}
		},
			
  		/*detailJs:function(o, e, eOpts){
				var rec = getSelRec(o.up('gridpanel'));
				if (rec != undefined) {
					var xnjgbWins = Ext.ComponentQuery.query('#xnjgbWin1');
					if (xnjgbWins.length > 0) {
						var win = xnjgbWins[0];
						win.setTitle('教师详情');
						win.setIconCls('edit_16');
						win.show();
					} else {
						var win = new Ext.Window({
									itemId : 'xnjgbWin1',
									title : '教师详情',
									iconCls : 'add_16',
									layout : 'fit',
									width : 900,
									height : 600,
									closeAction : 'hide',
									resizable : false,
									shadow : true,
									modal : true,
									closable : true,
									animCollapse : true,
									autoShow : true,
									items : [Ext.create(
											'App.view.rs.XnjgbForm', {
												autoScroll : true,
												isAdd : false,// 测试
												imgUrl : 'XnjgbgetImage.action',
												imgId : 'gh',
												postUrl : "xnjgb"
											})],
									buttons : [{
												itemId : 'cancelBtn',
												text : '取消',
												handler : function() {
													this.up('window').close();
												}
											}]
								});
					}
					var xnjgbForm = win.down('form');
					xnjgbForm.edit(rec);
					xnjgbForm.loadForm(rec);
					xnjgbForm.down('#upImgBtn').hide();
					
					var textfields = xnjgbForm.query('textfield');
					for (var i in textfields) {
						textfields[i].setReadOnly(true);
						var style = "background:none; border : 0px;";
						textfields[i].setFieldStyle(style);
					}
				}
			},*/
		
			onLaunch : function(o,skxxList,kyuuid) {
				var win;
				var recs = o.ownerCt.ownerCt.getSelectionModel().getSelection();
				var win = Ext.create('App.view.kyjl.ArrangeTecjlWindow',{
						skxxList:skxxList,
						kyuuid:kyuuid,
						x : 300,
						y : 3,
						width : 900,
						height : 570
				});
//				win.down('#arrangeTecshForm').loadForm(recs[0])
				win.down('#arrangeTecshjlForm').loadForm(recs[0])
				win.down('#arrangeTecjbForm').loadForm(recs[0])
				win.down('#arrangeTecshjlForm').setViewdForm();
				win.down('#arrangeTecjbForm').setViewForm();
				var xwKyjlzlbStore = win.down('#xwKyjlzlbList').getStore('XwKyjlzlbStore');
				var xwKyjlzlbProxy = xwKyjlzlbStore.getProxy();
				var searchParams = {
					searchMode : 'simple',
					search : {}
				};
				searchParams.search['kyuuid'] = "#= '" + kyuuid + "'";
				xwKyjlzlbProxy.setExtraParam('params', Ext.JSON.encode(searchParams));
//									    	   var store = win.xwKyjlzlbList.getStore();
			    	   xwKyjlzlbStore.load();
				win.show();
			}
	})