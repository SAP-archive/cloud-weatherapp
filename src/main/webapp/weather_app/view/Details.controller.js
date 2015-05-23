/* eslint-disable max-params */
sap.ui.define([
	// Include the dependencies by their namespace
	"sap/ui/core/mvc/Controller"
],
// the dependencies are passed to this function in the same order
function(Controller) {
	"use strict";

	return Controller.extend("sap.hana.cloud.samples.weather_app.view.Details", {

		// The onInit method is called automatically by the framework when
		// the view instance has been created
		onInit: function() {
			var oView = this.getView(), oRouter = this.getOwnerComponent().getRouter();

			oRouter.attachRouteMatched(function(oEvent) {
				// The 'routeMatched' event is fired whenever a navigation route
				// matched...
				var mParameters = oEvent.getParameters();
				if (mParameters.view === oView) {
					// ... but we only want to respond to the event if the route for this
					// view/controller was matched
					// We then get some parameters from the route parameters
					// and bind the view to the product from the url
					var mArguments = oEvent.getParameter("arguments");
					var sId = mArguments.id;

					var aData = oView.getModel().getData();

					for (var i = 0; i < aData.length; i++) {

						if (aData[i].id === sId) {
							break;
						}

					}

					oView.bindElement("/" + i);

					// Detail model
					var oAppModel = new sap.ui.model.json.JSONModel();

					jQuery.getJSON("api/v1/cities/" + sId + "/weather").done(function(mData) {
						oAppModel.setData(mData);
					});

					oView.setModel(oAppModel, "details");

					oView.getParent().to(oView);
				}
			});
		},

		formatAddToFavVisible: function(sGuid) {

			if (sGuid) {
				return false;
			} else {
				return true;
			}

		},

		formatRemoveFromFavVisible: function(sGuid) {
			return !this.formatAddToFavVisible(sGuid);
		},

		handleRemoveFromFavorite: function(oEvent) {

			var oContext = oEvent.getSource().getBindingContext();
			var sId = oContext.getProperty().id;

			var that = this;
			$.ajax({
				url: "api/v1/cities/" + sId,
				method: "DELETE",
				success: function(oResult, oResponse) {

					that.getView().getModel().setData(oResult);

				}
			});

		},

		handleAddToFavorite: function(oEvent) {

			var oData = oEvent.getSource().getModel("details").getData();

			var that = this;
			$.ajax({
				url: "api/v1/cities/",
				method: "POST",
				contentType: "application/json",
				dataType: "json",
				data: JSON.stringify({
					"id": oData.id,
					"name": oData.name
				}),
				success: function(oResult, oResponse) {

					that.getView().getModel().setData(oResult);

				}
			});

		}

	});
});
