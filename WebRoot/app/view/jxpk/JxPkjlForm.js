Ext.define('App.view.jxpk.JxPkjlForm',{
	extend:'Ext.form.Panel',
	alias : 'widget.jxPkjlForm',
	xtype : 'form',
	itemId: 'jxPkjlForm',
	
	
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
			width:750,
			autoHeight:true,
			autoWidth:false,
			collapsible:false,
			readOnly:true,
			margin:'10 5 45 5',
			padding:'5 0 10 5',
			defaults:{
				xtype:'textfield',
				readOnlyCls:'x-form-item-label',
				autoHeight:true,
				labelAlign:'right',
					width:240,
	        	labelWidth:100,
				padding:'5 0 0 0',
				size:20
			},
			layout:{
				type:'table',
				columns:2,
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
						fieldLabel: '课程号'
					},{
						xtype: 'textfield',
						itemId: 'kcmc',
						name: 'kcmc',
						width:300,
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
	       			colspan:2,
					width:655,
	            	fieldLabel:'培养单位'
	            },{
	            	xtype:'textfield',
	            	itemId:'zydm',
	            	name:'zydm',
	       			colspan:2,
					width:655,
	            	fieldLabel:'专业代码',
	            	hidden:true
	            },{
	            	xtype:'textfield',
	            	itemId:'zymc',
	            	name:'zymc',
	            	colspan:2,
					width:645,
	            	fieldLabel:'专业名称'
	            },{
	            	xtype:'textfield',
	            	itemId:'xn',
	            	name:'xn',
	            	fieldLabel:'学年'
	            },{
	            	xtype:'textfield',
	            	itemId:'xq',
	            	name:'xq',
	            	fieldLabel:'学期'
	            	},{
				        xtype: 'checkboxgroup',
				        fieldLabel: '自行安排',
				        vertical: true,
				        hidden:true,
				        width:220,
				        items: [
				                { 
					              boxLabel: '时间',
					              name: 'sjzxapbz',
					              itemId:'sjzxapbz',
					              inputValue: '1',
					              uncheckedValue: '0',
					             width:60,
	        					labelWidth:40
				             },
				            {
					            boxLabel: '地点', 
					            itemId:'ddzxapbz',
					            name: 'ddzxapbz', 
					            inputValue: '1', 
					            uncheckedValue: '0',
					            width:60,
	        					labelWidth:40
				            }
				        ]
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
	            	fieldLabel:'公共课'
	            },{
						xtype: 'textfield',
						itemId: 'zjjsh',
						name: 'zjjsh',
						fieldLabel: '主讲教师号',
						hidden:true
				    },{
						xtype:'textfield',
						itemId:'zjjs',
						name:'zjjs',
						fieldLabel:'主讲教师'
//					  	readOnly:true,
					},{
	            	xtype:'textfield',
	            	itemId:'kksj',
	            	name:'kksj',
	            	fieldLabel:'开课时间'
	            },{
						xtype: 'textfield',
						itemId: 'jsbh',
						name: 'jsbh',
						fieldLabel: '教室编号',
						hidden:true
					},{
						xtype:'textfield',
						itemId:'jsmc',
						name:'jsmc',
						fieldLabel:'教室',
					  	readOnly:true
					},{
	                    xtype: 'textfield',
	                    itemId:'kcsj',
	                    fieldLabel: '时间',
	                    editable: false,
	                    hidden:true
	                },{
	                    xtype: 'treeCombo',
	                    itemId:'kczs',
	                    fieldLabel: '周次',
						width:645,
	                    displayField:'text',
	    		        valueField:'id',
	    		        value:'',
	                    rootVisible: false,
					    store:KCZSStore,
					    hidden:true
	                },{
	                	xtype:'textfield',
	                	itemId:'kcsjm',
	                	name:'kcsjm',
	                    fieldLabel: '课程时间码',
	                    hidden:true
	                },{
	                    xtype: 'treeCombo',
	                    itemId:'kcjc',
	                    fieldLabel: '节次',
	                    displayField:'text',
	    		        valueField:'id',
	    		        value:'',
						width:645,
	                    rootVisible: false,
	                       store:KCJCStore,
	                    hidden:true
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
	            	fieldLabel:'操作人'
	            },{
	            	xtype:'textfield',
	            	itemId:'czsj',
	            	name:'czsj',
	            	fieldLabel:'操作时间'
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
	            }]
			 }]
	});
	     me.callParent(arguments);
	},
	
	 loadForm: function(rec){
    	var me = this;
        me.loadRecord(rec);
    },
      setView :function(){
    	var me = this;
    	var textfields =  me.query('textfield');
    		for(var i in textfields){
					textfields[i].setReadOnly(true);
					var style = "background:none; border:0px";
					textfields[i].setFieldStyle(style);
    		}
    	
    }
    
});