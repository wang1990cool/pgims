package edu.ahut.util;

import java.util.Map;
import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

public class AuthorizationInterceptor extends AbstractInterceptor {
	private static final long serialVersionUID = -4714594601063674293L;
	private String ignoreActions;

	public String getIgnoreActios() {
		return ignoreActions;
	}

	public void setIgnoreActions(String ignoreActions) {
		this.ignoreActions = ignoreActions;
	}

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		ActionContext ctx = invocation.getInvocationContext();
		Map<?, ?> session = ctx.getSession();
		Object user = session.get("webUser");
		if (user != null) {
			return invocation.invoke();
		} else {
			return Action.LOGIN;
		}
	}
}
