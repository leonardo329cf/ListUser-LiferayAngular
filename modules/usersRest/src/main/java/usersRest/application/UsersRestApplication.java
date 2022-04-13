package usersRest.application;

import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.portlet.LiferayPortletRequest;
import com.liferay.portal.kernel.service.UserLocalService;
import com.liferay.portal.kernel.util.PortalUtil;

import java.util.Collections;
import java.util.Set;

import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Application;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Request;
import javax.ws.rs.core.Response;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.jaxrs.whiteboard.JaxrsWhiteboardConstants;

/**
 * @author leonardo.ferreira
 */
@Component(property = { JaxrsWhiteboardConstants.JAX_RS_APPLICATION_BASE + "=/users",
		JaxrsWhiteboardConstants.JAX_RS_NAME + "=Users.Rest" }, service = Application.class)
public class UsersRestApplication extends Application {

	public Set<Object> getSingletons() {
		return Collections.<Object>singleton(this);
	}

	@GET
	@Produces("application/json")
	public Response getUsers(@Context Request request) {
		JSONArray userJsonArray = JSONFactoryUtil.createJSONArray();
		
		_userService.getCompanyUsers(20095, 0, 100).stream().forEach((user) -> {
			JSONObject userEntry = JSONFactoryUtil.createJSONObject();
			userEntry.put("id", user.getUserId());
			userEntry.put("fullName", user.getFullName());
			userJsonArray.put(userEntry);
		});

		return Response.status(200).entity(userJsonArray.toJSONString()).build();
	}

	@Reference
	private UserLocalService _userService;
}