package com.sap.hana.cloud.samples.weatherapp.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Model object representing a single {@link FavoriteCity} instance.
 * 
 * @author Matthias Steiner
 * @version 0.1
 */
@Entity
@Table(name = "WEATHERAPP_CITY")
@NamedQueries({@NamedQuery(name = "FavoriteCities", query = "SELECT c FROM FavoriteCity c"), 
	           @NamedQuery(name = "FavoriteCityById", query = "SELECT c FROM FavoriteCity c WHERE c.id = :id")})

@XmlRootElement(name = "city")
@XmlAccessorType(XmlAccessType.FIELD)
public class FavoriteCity extends BaseObject implements Serializable
{
	/**
	 * The <code>serialVersionUID</code> of the {@link FavoriteCity} class.
	 */
	private static final long serialVersionUID = 1L;

	@Column(name="ID", length = 36, nullable=true)
	String id = null;
	
	@Column(name="NAME", length = 128, nullable=true)
	String name = null;
	
	@Column(name="COUNTRY", length = 2, nullable=true)
	String countryCode = null;

	public String getId()
	{
		return id;
	}
	
	public void setId(String id)
	{
		this.id = id;
	}
	
	public String getName() 
	{
		return name;
	}

	public void setName(String name) 
	{
		this.name = name;
	}

	public String getCountryCode() 
	{
		return countryCode;
	}

	public void setCountryCode(String countryCode) 
	{
		this.countryCode = countryCode;
	}
}
