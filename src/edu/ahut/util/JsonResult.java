package edu.ahut.util;

import java.util.List;

public class JsonResult {
	private List<?> list;
	private long total;
	private boolean success;
	private String msg;
	
	public JsonResult(){
	}
	
	public JsonResult(List<?> lst,long total){
		this.setList(lst);
		this.setTotal(total);
	}
	
	public List<?> getList() {
		return list;
	}
	
	public void setList(List<?> list) {
		this.list = list;
	}
	
	public long getTotal() {
		return total;
	}
	
	public void setTotal(long total) {
		this.total = total;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}
}