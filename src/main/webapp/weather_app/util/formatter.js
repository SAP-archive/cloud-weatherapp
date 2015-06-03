jQuery.sap.declare("sap.hana.cloud.samples.weather_app.util.formatter");

sap.hana.cloud.samples.weather_app.util.formatter =  {

	_iconMap : {
		"01d" : "wi-day-sunny",
		"02d" : "wi-day-sunny-overcast",
		"03d" : "wi-day-cloudy",
		"04d" : "wi-day-cloudy",
		"09d" : "wi-day-rain-mix",
		"10d" : "wi-day-rain",
		"11d" : "wi-day-thunderstorm",
		"13d" : "wi-day-snow",
		"50d" : "wi-day-fog",
		"01n" : "wi-night-clear",
		"02n" : "wi-night-partly-cloudy",
		"03n" : "wi-night-cloudy",
		"04n" : "wi-night-cloudy",
		"09n" : "wi-night-alt-showers",
		"10n" : "wi-night-alt-rain",
		"11n" : "wi-night-thunderstorm",
		"13n" : "wi-night-snow",
		"50n" : "wi-night-fog"
	},
	
	temperature : function(value)
	{
		return Math.round(value) + " °C";
	},
	
	direction : function(value)
	{
		return Math.round(value / 15) * 15;
	},
	
	direction_icon : function(value)
	{
		return "wi wi-wind-default _" + sap.hana.cloud.samples.weather_app.util.formatter.direction(value) + "-deg";
	}
}
