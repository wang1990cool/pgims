package edu.ahut.util;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.lang.StringUtils;
import edu.ahut.model.TreeNode;
import net.sf.json.JSONObject;

public class CommonUtil {
	static public String getIpAddr(HttpServletRequest request) {
		String ip = request.getHeader("x-forwarded-for");
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("WL-Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getRemoteAddr();
		}
		
		return ip;
	}

	
	static public String[] getFiledName(Object o){ 
		Field[] fields=o.getClass().getDeclaredFields(); 
		String[] fieldNames=new String[fields.length]; 
		for(int i=0;i<fields.length;i++){ 
			fieldNames[i]=fields[i].getName(); 
		} 
		
		return fieldNames; 
	}
	
	static public String getFilter(JSONObject search) {
		List<String> filterLst = new ArrayList<String>();
		try {
			for (Iterator<?> iter = search.keys(); iter.hasNext();){
				String fieldName = iter.next().toString();
				filterLst.add(fieldName + search.getString(fieldName).replace("#", " "));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return StringUtils.join(filterLst," and ");
	}
	
	static public String getOrders(String searchParams){
		String order = null;
		
		if(!searchParams.equals("")){
			JSONObject jsonParam = null;
			try {
				jsonParam = JSONObject.fromObject(searchParams);
			} catch (Exception e) {
				e.printStackTrace();
			}
			order = jsonParam.getString("order");
		}
		
		return order;
	}
	
	static public String getSearch(String searchParams){
		String filter = null;
		
		if(!searchParams.equals("")){
			JSONObject jsonParam = null;
			try {
				jsonParam = JSONObject.fromObject(searchParams);
			} catch (Exception e) {
				e.printStackTrace();
			}

//			String fieldNames = jsonParam.getString("fieldNames");
			String searchMode = jsonParam.getString("searchMode");
			JSONObject search = (JSONObject) jsonParam.get("search");
			
			if(searchMode.equals("simple") && !"".equals(jsonParam.get("search")))
				filter = getFilter(search);
			else
				;
		}
		
		return filter;
	}
	
	static public String MergeFilter(String pFilter, String searchParams){
		String filter = getSearch(searchParams);
		String filters = pFilter;
		if(filters != null && !filters.isEmpty() && filter != null && !filter.isEmpty()){
			filters += " and " + filter;
		}
		else if(filter != null && !filter.isEmpty())
			filters = filter;
		return filters;
	}
	
//	static public JSONObject getCols(JSONObject colsObj) {
//		JSONObject colsMap = new JSONObject();
//		try {
//			for (Iterator<?> iter = colsObj.keys(); iter.hasNext();){
//				String fieldName = iter.next().toString();
//				colsMap.put(fieldName, colsObj.getString(fieldName));
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		
//		return colsMap;
//	}

	static public TreeNode addNode(TreeNode root ,TreeNode node){
		if(root != null){
			List<TreeNode> children = root.getChildren();
			if(node.getParentid()!=null && node.getParentid().equals(root.getId())){			
				children.add(node);
				root.setChildren(children);
			}else{
				for(TreeNode child: children){
					addNode(child,node);
				}
			}
		}
		return root;
	}
}
