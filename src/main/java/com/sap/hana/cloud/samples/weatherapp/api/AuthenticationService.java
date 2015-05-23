package com.sap.hana.cloud.samples.weatherapp.api;



import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;

/**
 * {@link AuthenticationService}
 * 
 * @author Matthias Steiner
 * @version 0.1
 */
@Path("/auth")
@Produces({ MediaType.APPLICATION_JSON })
public class AuthenticationService 
{
	@GET
	@Path("/")
	@Produces({ MediaType.TEXT_PLAIN })
	public String getRemoteUser(@Context SecurityContext ctx)
	{
		String retVal = "anonymous"; 
		
		try
		{
			retVal = ctx.getUserPrincipal().getName();
		}
		catch (Exception ex)
		{
			ex.printStackTrace(); // lazy 
		}
		
		
		return retVal;
	}
}
