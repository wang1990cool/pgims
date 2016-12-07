Ext.define('App.view.tbk.TBKEditForm',{
	extend:'Ext.form.Panel',
	xtype : 'form',
	itemId: 'tbkEditForm',
	alias: 'widget.tbkEditForm',
	
	callback : Ext.emptyFn, 
    config: {
        /**
         * 开始周
         */
    	ksz: null,
        /**
         * 结束周
         */
    	jsz: null,
        /**
         * 起止周
         */
    	qzz: null,
        /**
         * 单双周标记码
         */
    	dszbzm: null,
        /**
         * 单双周标记
         */
    	dszbz: null,
        /**
         * 课程周次
         */
        kczs: null,
        kcsjm:null,
        /**
         * 课程时间
         */
        kcsj: null,
        /**
         * 课程节次
         */
        kcjc: null
    },
    
   required : '<span style="color:red;font-weight:bold" data-qtip="必填">*</span>',
    readOnlyStyle : 'background:none; border : 0px;font-weight:bold;',
	
	initComponent: function(){
		var me = this;
		var KCSJStore = Ext.create('Ext.data.Store', {
        	storeId:'KCSJStore',
		    fields: ['abbr', 'value'],
		    data : [{'abbr':'周1', 'value':1},{'abbr':'周2', 'value':2},{'abbr':'周3', 'value':3},{'abbr':'周4','value':4},{'abbr':'周5','value':5},
		            {'abbr':'周6', 'value':6},{'abbr':'周7', 'value':7}]
        });
           		var KCStore = Ext.create('Ext.data.Store', {
        	storeId:'KCStore',
		    fields: ['value', 'text'],
		    data : [{ 'value':'1', 'text': '第1周'},{ 'value':'2', 'text': '第2周'},{ 'value':'3', 'text': '第3周'},
                           { 'value':'4', 'text': '第4周'},{ 'value':'5', 'text': '第5周'},{ 'value':'6', 'text': '第6周'},
                           { 'value':'7', 'text': '第7周'},{ 'value':'8', 'text': '第8周'},{ 'value':'9', 'text': '第9周'},
                           { 'value':'10', 'text': '第10周'},{ 'value':'11', 'text': '第11周'},{ 'value':'12', 'text': '第12周'},
                           { 'value':'13', 'text': '第13周'},{ 'value':'14', 'text': '第14周'},{ 'value':'15', 'text': '第15周'},
                           {'value' :'16', 'text': '第16周'},{ 'value':'17', 'text': '第17周'},{ 'value':'18', 'text': '第18周'},
                           { 'value':'19', 'text': '第19周'},{ 'value':'20', 'text': '第20周'},{ 'value':'21', 'text': '第21周'},
                           { 'value':'22', 'text': '第22周'},{ 'value':'23', 'text': '第23周'},{ 'value':'24', 'text': '第24周'},
                           { 'value':'25', 'text': '第25周'},{ 'value':'26', 'text': '第26周'},{ 'value':'27', 'text': '第27周'}
                           ]
        });
        
        var KCZSStore = Ext.create('Ext.data.TreeStore', {
            root: {
         	   id:'0',
                expanded: true,
                children: [{ id:'1', text: '第1周', checked: false, leaf: true },{ id:'2', text: '第2周', checked: false, leaf: true },{ id:'3', text: '第3周', checked: false, leaf: true },
                           { id:'4', text: '第4周', checked: false, leaf: true },{ id:'5', text: '第5周', checked: false, leaf: true },{ id:'6', text: '第6周', checked: false, leaf: true },
                           { id:'7', text: '第7周', checked: false, leaf: true },{ id:'8', text: '第8周', checked: false, leaf: true },{ id:'9', text: '第9周', checked: false, leaf: true },
                           { id:'10', text: '第10周', checked: false, leaf: true },{ id:'11', text: '第11周', checked: false, leaf: true },{ id:'12', text: '第12周', checked: false, leaf: true },
                           { id:'13', text: '第13周', checked: false, leaf: true },{ id:'14', text: '第14周', checked: false, leaf: true },{ id:'15', text: '第15周', checked: false, leaf: true },
                           { id:'16', text: '第16周', checked: false, leaf: true },{ id:'17', text: '第17周', checked: false, leaf: true },{ id:'18', text: '第18周', checked: false, leaf: true },
                           { id:'19', text: '第19周', checked: false, leaf: true },{ id:'20', text: '第20周', checked: false, leaf: true },{ id:'21', text: '第21周', checked: false, leaf: true },
                           { id:'22', text: '第22周', checked: false, leaf: true },{ id:'23', text: '第23周', checked: false, leaf: true },{ id:'24', text: '第24周', checked: false, leaf: true },
                           { id:'25', text: '第25周', checked: false, leaf: true },{ id:'26', text: '第26周', checked: false, leaf: true },{ id:'27', text: '第27周', checked: false, leaf: true }
//                           ,
//                           { text: "homework",id:'28' ,checked: false,expanded: true, children: [
//                                                                          { text: "book report", id:'29',checked: false,leaf: true },
//                                                                          { text: "algebra", id:'30',checked: false,leaf: true}
//                                                                      ]}
                           ]
            }
        });
        
       var KCJCStore = Ext.create('Ext.data.TreeStore', {
           root: {
        	   id:'0',
               expanded: true,
               children: [{ id:'1', text: '第1节', checked: false, leaf: true },{ id:'2', text: '第2节', checked: false, leaf: true },{ id:'3', text: '第3节', checked: false, leaf: true },
                          { id:'4', text: '第4节', checked: false, leaf: true },{ id:'5', text: '第5节', checked: false, leaf: true },{ id:'6', text: '第6节', checked: false, leaf: true },
                          { id:'7', text: '第7节', checked: false, leaf: true },{ id:'8', text: '第8节', checked: false, leaf: true },{ id:'9', text: '第9节', checked: false, leaf: true },
                          { id:'10', text: '第10节', checked: false, leaf: true },{ id:'11', text: '第11节', checked: false, leaf: true }]
           }
       });
		Ext.applyIf(me,{
		items:[{
			xtype:'fieldset',
			border:'0 0 0 0',
			width:555,
			autoHeight:true,
			autoWidth:false,
			collapsible:false,
			readOnly:true,
			margin:'15 15 0 15',
			padding:'5 5 10 5',
			defaults:{
				xtype:'textfield',
				readOnlyCls:'x-form-item-label',
				autoHeight:true,
				labelAlign:'right',
				width:430,
	        	labelWidth:100,
				padding:'5 0 0 0',
				size:20
			},
			layout:{
				type:'table',
				columns:1,
				tableAttrs:{ 
						style:"width:100%;text-align:center;border:0px solid #B3D0EE;border-collapse:collapse;empty-cells:show;", 
						align:'center'
				},
				 tdAttrs:{
						align:'left',
						style:"border: 1px solid rgb(179, 208, 238);"
				}
			},
				  items:[{
		            	xtype: 'textfield',
		            	itemId: 'id',
		            	name: 'id',
		            	hidden:true
					},{
						xtype: 'textfield',
						itemId: 'kch',
						name: 'kch',
						fieldLabel: '课程号',
						hidden:true
					},{
						xtype: 'textfield',
						itemId: 'kcmc',
						name: 'kcmc',
						fieldLabel: '课程名称'
					},{
	            	xtype:'textfield',
	            	itemId:'pydwh',
	            	name:'pydwh',
	            	fieldLabel:'培养单位号',
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'pydw',
	            	name:'pydw',
	            	width:490,
	            	fieldLabel:'培养单位'
	            },{
	            	xtype:'textfield',
	            	itemId:'zydm',
	            	name:'zydm',
	            	fieldLabel:'专业代码',
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'zymc',
	            	name:'zymc',
	            	width:490,
	            	fieldLabel:'专业名称'
	            },{
				        xtype: 'checkboxgroup',
				        fieldLabel: '自行安排',
				        vertical: true,
				        width:220,
				        items: [
				                { 
					              boxLabel: '时间',
					              name: 'sjzxapbz',
					              itemId:'sjzxapbz',
					              inputValue: '1',
					              uncheckedValue: '0',
					             width:60,
	        					labelWidth:40,
	        					listeners:{
	        						change:function(o,newValue,oldValue,eOpts){
										if(newValue){
											me.down('#kcsj').setValue('');
											me.down('#kcjc').clearAll();
											me.down('#kczs').clearAll();
											me.down('#kcsj').setDisabled(true);
											me.down('#kcjc').setDisabled(true)
											me.down('#kczs').setDisabled(true)
											
											me.down('#lxzBox').setDisabled(true)
											me.down('#sflxz').setDisabled(true)
											
											me.down('#kszCombo').setValue(null);
											me.down('#jszCombo').setValue(null)
										}else{
											me.down('#kcsj').setDisabled(false);
											me.down('#kcjc').setDisabled(false);
											me.down('#kczs').setDisabled(false)
											me.down('#lxzBox').setDisabled(false)
											me.down('#sflxz').setDisabled(false)
										}
	        						}
	        					}
				             },
				            {
					            boxLabel: '地点', 
					            itemId:'ddzxapbz',
					            name: 'ddzxapbz', 
					            inputValue: '1', 
					            uncheckedValue: '0',
					            width:60,
	        					labelWidth:40,
	        					listeners:{
	        						change:function(o,newValue,oldValue,eOpts){
										if(newValue){
											me.down('#jsbh').setValue('');
											me.down('#jsmc').setValue('');
											me.down('#jsmc').setDisabled(true);
											me.down('#searchJsBtn').setVisible(false)
										}else{
											me.down('#jsmc').setDisabled(false);
											me.down('#searchJsBtn').setVisible(true)
										}
	        						}
	        					}
				            }
				        ]
					},{
						xtype: 'textfield',
						itemId: 'zjjsh',
						name: 'zjjsh',
						fieldLabel: '主讲教师号'
						,
						hidden:true
				    },{
        	       xtype:'fieldcontainer',
			       layout:'hbox',
			       itemId:'zjjsField',
			     width:470,
				   defaults:{
				 	  	padding:'3 0 0 0',
						labelAlign:'right'
					},
					items:[{
						xtype:'textfield',
						itemId:'zjjs',
						name:'zjjs',
						fieldLabel:'主讲教师',
					    width:430,
					  	readOnly:true,
						labelWidth:100,
						listeners:{
							blur:function(text){
								if(text.getValue().length == 0){
									me.down('#zjjsh').setValue('');
								}
							}
						}
					},{
						xtype:'toolbar',
						style:'background:transparent;',
						border:'0 0 0 0',
						layout:{type:'hbox',align:'center',pack:'center'},
						items:[{
									itemId:'searchZjjsBtn',
									tooltip:'查询',
									action:'searchZjjs',
									iconCls:'search',
									margin:'0 0 0 1'
				}]}]},{
						xtype: 'textfield',
						itemId: 'zkjsh',
						name: 'zkjsh',
						fieldLabel: '助课教师号',
						hidden:true
				    },{
        	       xtype:'fieldcontainer',
			       layout:'hbox',
			       itemId:'zkjsField',
			       hidden:true,
			         width:475,
				   defaults:{
				 	  	padding:'3 0 0 0',
						labelAlign:'right'
					},
					items:[{
						xtype:'textfield',
						itemId:'zkjs',
						name:'zkjs',
						fieldLabel:'助课教师',
					  	width:430,
						labelWidth:100,
						readOnly:true,
						listeners:{
							blur:function(text){
								if(text.getValue().length == 0){
									me.down('#zkjsh').setValue('');
								}
							}
						}
					},{
						xtype:'toolbar',
						style:'background:transparent;',
						border:'0 0 0 0',
						layout:{type:'hbox',align:'center',pack:'center'},
						items:[{
									itemId:'searchZkjsBtn',
									tooltip:'查询',
									action:'searchZkjs',
									iconCls:'search',
									margin:'0 0 0 1'
				},{
									tooltip:'清空',
									iconCls:'delete_16',
									listeners:{
										click:function(){
											me.down('#zkjsh').setValue('');
											me.down('#zkjs').setValue('')
										}
									}
						}]}]},{
						xtype: 'textfield',
						itemId: 'syjsh',
						name: 'syjsh',
						fieldLabel: '实验教师号',
						hidden:true
				    },{
        	       xtype:'fieldcontainer',
			       layout:'hbox',
			        itemId:'syjsField',
			        hidden:true,
			      width:475,
				   defaults:{
				 	  	padding:'3 0 0 0',
						labelAlign:'right'
					},
					items:[{
						xtype:'textfield',
						itemId:'syjs',
						name:'syjs',
						fieldLabel:'实验教师',
					  	width:430,
						labelWidth:100,
						readOnly:true,
						listeners:{
							blur:function(text){
								if(text.getValue().length == 0){
									me.down('#syjsh').setValue('');
								}
							}
						}
					},{
						xtype:'toolbar',
						style:'background:transparent;',
						border:'0 0 0 0',
						layout:{type:'hbox',align:'center',pack:'center'},
						items:[{
									itemId:'searchSyjsBtn',
									tooltip:'查询',
									action:'searchSyjs',
									iconCls:'search',
									margin:'0 0 0 1'
				},{
									tooltip:'清空',
									iconCls:'delete_16',
									listeners:{
										click:function(){
											me.down('#syjsh').setValue('');
											me.down('#syjs').setValue('')
										}
									}
						}]}]},{
						xtype: 'textfield',
						itemId: 'jsbh',
						name: 'jsbh',
						fieldLabel: '教室编号',
						hidden:true
					},{
        	       xtype:'fieldcontainer',
			       layout:'hbox',
			         width:470,
				   defaults:{
				 	  	padding:'3 0 0 0',
						labelAlign:'right'
					},
					items:[{
						xtype:'textfield',
						itemId:'jsmc',
						name:'jsmc',
						fieldLabel:'教室',
						width:430,
					  	readOnly:true,
						labelWidth:100
					},{
						xtype:'toolbar',
						style:'background:transparent;',
						border:'0 0 0 0',
						layout:{type:'hbox',align:'center',pack:'center'},
						items:[{
									itemId:'searchJsBtn',
									tooltip:'查询',
									action:'searchJs',
									iconCls:'search',
									margin:'0 0 0 1'
					}]}]},{
				        xtype: 'radiogroup',
				        fieldLabel: '是否连续周',
				        itemId:'sflxz',
				        width:220,
				        vertical: true,
				        items: [
				            {
				               boxLabel: '连续周',
				               width:80,
	        				   labelWidth:40,
	        				   itemId:'lxzRadio',
				         	   name: 'lxz',
				         	   inputValue: '1', checked: true,
				         	 	listeners:{
					           		change:function(o,newValue,oldValue,eOpts){
											if(newValue){
//												me.down('#kczs').clearAll();
												me.down('#lxzBox').setVisible(true);
												me.down('#kczs').setVisible(false);
											}
									}
				           		}},
				            {	
				            	boxLabel: '跳周',
				                width:80,
	        					labelWidth:40,
	        					itemId:'tzRadio',
				           		name: 'lxz',
				           		inputValue: '2',
				           		listeners:{
					           		change:function(o,newValue,oldValue,eOpts){
											if(newValue){
//												me.down('#kszCombo').setValue('');
//												me.down('#jszCombo').setValue('');
												me.down('#lxzBox').setVisible(false);
												me.down('#kczs').setVisible(true);
											}
									}
				           		}
				           	}
				        ]
			 },{
        	       xtype:'fieldcontainer',
        	       itemId:'lxzBox',
			       layout:'hbox',
//			       hidden:true,
			       width:470,
				   defaults:{
						labelAlign:'right'
					},
					items:[{
	                    xtype: 'combo',
	                    itemId:'kszCombo',
	                    fieldLabel: '周次',
	                    editable: false,
					    displayField: 'text',
					    valueField: 'value',
					    queryMode: 'local',
					    store:'KCStore',
					    width:249,
						labelWidth:100,
						listeners:{
							select:function(combo,the,eOpts){
								var jszValue = Number(me.down('#jszCombo').getValue());
								var kszValue = Number(this.getValue());
								if(kszValue > jszValue && jszValue != 0){
									Ext.MessageBox.alert('提示', '起始周不得大于结束周！');
									this.setValue('');
								}
							}
						}
	                },{
							margin: '5 10 0 10',
							xtype:'label',
							text:' 至 '
						},{
	                    xtype: 'combo',
	                    itemId:'jszCombo',
	                    editable: false,
					    displayField: 'text',
					    valueField: 'value',
					    queryMode: 'local',
					    store:'KCStore',
					    width:149,
					   	listeners:{
							select:function(){
								var kszValue = Number(me.down('#kszCombo').getValue());
								var jszValue = Number(this.getValue());
								if(jszValue < kszValue && kszValue != 0){
									Ext.MessageBox.alert('提示', '结束周不得小于开始周！');
									this.setValue('');
								}
							}
						}
	                }]
					},{
	                    xtype: 'treeCombo',
	                    itemId:'kczs',
	                    fieldLabel: '周次',
	                    displayField:'text',
	    		        valueField:'id',
	    		        value:'',
	                    rootVisible: false,
					    store:KCZSStore
	                },{
	                	xtype:'textfield',
	                	itemId:'kcsjm',
	                	name:'kcsjm',
	                    fieldLabel: '课程时间码',
	                    hidden:true
	                },{
	                    xtype: 'combo',
	                    itemId:'kcsj',
	                    fieldLabel: '时间',
	                    editable: false,
					    displayField: 'abbr',
//					    valueField: 'value',
					    queryMode: 'local',
					    store:'KCSJStore',
					     listeners:{
						   	select:function(combo, record, index){
						    	me.down('#kcsjm').setValue(record[0].data.value);
						   	  }
						   }
	                },{
	                    xtype: 'treeCombo',
	                    itemId:'kcjc',
	                    fieldLabel: '节次',
	                    displayField:'text',
	    		        valueField:'id',
	    		        value:'',
	                    rootVisible: false,
					    store:KCJCStore
	            },{
	            	xtype:'textfield',
	            	itemId:'pkztm',
	            	name:'pkztm',
	            	fieldLabel:'排课状态码',
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'czrzh',
	            	name:'czrzh',
	            	fieldLabel:'操作人账号',
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'czr',
	            	name:'czr',
	            	fieldLabel:'操作人',
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'czsj',
	            	name:'czsj',
	            	fieldLabel:'操作时间',
	            	value: Ext.Date.format(new Date(), 'Y-m-d H:i:s'),
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'kksj',
	            	name:'kksj',
	            	fieldLabel:'开课时间',
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'xn',
	            	name:'xn',
	            	fieldLabel:'学年',
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'xq',
	            	name:'xq',
	            	fieldLabel:'学期',
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'kkkh',
	            	name:'kkkh',
	            	fieldLabel:'开课课号',
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'kclbm',
	            	name:'kclbm',
	            	fieldLabel:'课程类别码',
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'kclb',
	            	name:'kclb',
	            	fieldLabel:'课程类别',
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'ggkbzm',
	            	name:'ggkbzm',
	            	fieldLabel:'公共课标志码',
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'ggkbz',
	            	name:'ggkbz',
	            	fieldLabel:'公共课标志',
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'dszbzm',
	            	name:'dszbzm',
	            	fieldLabel:'单双周标志码',
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'dszbz',
	            	name:'dszbz',
	            	fieldLabel:'单双周标志',
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'kkdwh',
	            	name:'kkdwh',
	            	fieldLabel:'开课单位',
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'kkdw',
	            	name:'kkdw',
	            	fieldLabel:'开课单位',
	            	hidden:true
	            }]
			 }]
	});
	     me.callParent(arguments);
	},
	
	 loadForm: function(rec){
    	var me = this;
        me.loadRecord(rec);
    },
      setViewForm :function(){
    	var me = this;
    	var textfields =  me.query('textfield');
    		for(var i in textfields){
    				if( textfields[i].itemId == 'kcmc' || textfields[i].itemId == 'pydw' 
    					|| textfields[i].itemId == 'zymc'){
    							textfields[i].setReadOnly(true);
		    					var style = "background:none; border:0px";
		    					textfields[i].setFieldStyle(style);
    					}
    		}
    },
    
     setPksj: function(){
    	var me = this;
		var lxz = me.down('#lxzRadio').getValue();
		var tz = me.down('#tzRadio').getValue();
		if(lxz){
			var kczs=''
			var kszValue = Number(me.down('#kszCombo').getValue());
   			var jszValue = Number(me.down('#jszCombo').getValue());
   			
			for(var i = kszValue; i <= jszValue; i++){
				kczs += i + '/';
			}
			kczs = kczs.substring(0,kczs.length - 1);
			me.setKczs(kczs);
		}else{
		   	me.setKczs(me.down('#kczs').getValue());
		}
    	me.setKcsjm(me.down('#kcsjm').getValue());
    	me.setKcsj(me.down('#kcsj').getValue());
    	me.setKcjc(me.down('#kcjc').getValue());
    	
    	me.setPkxx();
    	me.callback();
    	
//    	alert(me.getKczs());
//    	alert(me.getKsz() + "|" + me.getJsz() + "|" + me.getQzz());
//    	alert(me.getDszbzm());
//    	alert(me.getDszbz());
    	
    },
    
    setPkxx: function(){
    	var me = this;
    	
    	var kczs = me.getKczs();
    	if(kczs){
    		var kczsArr = kczs.split('/');
    		var fs = kczsArr[0], ls = kczsArr[kczsArr.length - 1], f = parseInt(fs), l = parseInt(ls);
    		me.setKsz(fs), me.setJsz(ls), me.setQzz(fs + '-' + ls);
    		
    		if(l-f == kczsArr.length -1){
    			me.setDszbzm('0'),me.setDszbz('全周');
    		}else{
    	    	if(f%2==1){
	    			me.setDszbzm('1'),me.setDszbz('单周');
	    		}else{
	    			me.setDszbzm('2'),me.setDszbz('双周');
	    		}
    	    	
    	    	for(var i = f, j = 0; j < kczsArr.length; i+=2,j++) 
    	    		if(kczsArr[j]!=i.toString()){
    	    			me.setDszbzm('3'),me.setDszbz('跳周');
    	    		}
    		}
    	}
    
    	me.setKcsjm(me.down('#kcsjm').getValue());
    	me.setKcsj(me.down('#kcsj').getValue());
    	me.setKcjc(me.down('#kcjc').getValue());
    	    	
//    	me.down('#dszbzm').setValue(me.getDszbzm());
//    	me.down('#dszbz').setValue(me.getDszbz());
    }
    
});