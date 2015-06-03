sap.ui.define([
	"jquery.sap.global",
	"sap/ui/thirdparty/sinon"
], function(jQuery, sinon) {

	sinon = sinon || window.sinon; // strange side effect right now that sinon param is undefined!
	
	var iResponseDelay = 2000; // delay for async callback
	var sBaseUrl = "api/v1";
	
	// local model for fake service
	var aCities = [{
		"id" : "2643743",
		"createdAt" : 1432036282473,
		"lastModifiedAt" : 1432036282473,
		"createdBy" : null,
		"lastModifiedBy" : null,
		"name" : "London",
		"countryCode" : "UK"
	}, {
		"id" : "2158177",
		"createdAt" : 1432036285557,
		"lastModifiedAt" : 1432036285557,
		"createdBy" : null,
		"lastModifiedBy" : null,
		"name" : "Melbourne",
		"countryCode" : "AU"
	}];
	
	var aWeather = {
		"2158177" : {
			"coord" : {
				"lon" : 144.96,
				"lat" : -37.81
			},
			"sys" : {
				"message" : 0.1001,
				"country" : "AU",
				"sunrise" : 1432070251,
				"sunset" : 1432106148
			},
			"weather" : [ {
				"id" : 501,
				"main" : "Rain",
				"description" : "moderate rain",
				"icon" : "10d"
			} ],
			"base" : "stations",
			"main" : {
				"temp" : 284.845,
				"temp_min" : 284.845,
				"temp_max" : 284.845,
				"pressure" : 1007.7,
				"sea_level" : 1026.95,
				"grnd_level" : 1007.7,
				"humidity" : 99
			},
			"wind" : {
				"speed" : 3.72,
				"deg" : 218.001
			},
			"clouds" : {
				"all" : 92
			},
			"rain" : {
				"3h" : 3.145
			},
			"dt" : 1432103790,
			"id" : 2158177,
			"name" : "Melbourne",
			"cod" : 200
		}
	}
	
	// intercept the XHR calls and respond with mock data!
	var oXHR = sinon.useFakeXMLHttpRequest();
	oXHR.useFilters = true;
	oXHR.addFilter(function(sMethod, sUrl) {
		return sUrl.indexOf(sBaseUrl) !== 0;
	});
	
	oXHR.onCreate = function(oRequest) {
		oRequest.onSend = function() {
			var iStatus, mHeaders, sContent, bMatched = false;
			
			var sMethod = oRequest.method && oRequest.method.toUpperCase();
			var sUrl = oRequest.url;
			var bAsync = oRequest.async;
			
			var aMatches; // local var to store the matches from the RegExp in the if statements
			
			// type: GET cities
			if (sMethod === "GET" && 
				(aMatches = new RegExp(sBaseUrl + "/cities").exec(sUrl)) != null) {
				iStatus = 200;
				mHeaders = {
					"Content-Type": "application/json"
				};
				sContent = JSON.stringify(aCities);
				bMatched = true;
			}
			
			// type: GET weather
			else if (sMethod === "GET" && 
				(aMatches = new RegExp(sBaseUrl + "/weather\\?id\\=(.*)").exec(sUrl)) != null) {
				iStatus = 200;
				mHeaders = {
					"Content-Type": "application/json"
				};
				sContent = JSON.stringify(aWeather[aMatches[1]]);
				bMatched = true;
			}
			
			if (bMatched) {
				// async or sync response
				if (bAsync === true) {
					setTimeout(function() {
						oRequest.respond(iStatus, mHeaders, sContent)
					}, iResponseDelay);
				} else {
					oRequest.respond(iStatus, mHeaders, sContent)
				}
			} else {
				oRequest.respond(500, {}, "Internal Server Error");
			}
			
		};
	}
	
});