/* eslint-disable max-params */
sap.ui.define([
	// Include the dependencies by their namespace
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Sorter"
],
// the dependencies are passed to this function in the same order
function(Controller, Sorter) {
	"use strict";

	return Controller.extend("sap.hana.cloud.samples.weather_app.view.List", {

		_showWeatherInfoForListItem: function(oListItem) {
			// Get the binding context from the list item
			// The binding context contains the model data for the data record
			// that is displayed by the list item.
			// By passing the path of the binding context to the router, we
			// can use it on the Details view and bind the view to the path
			// so that the same data can be displayed
			// The check for the context before reading the path is just a
			// workaround for the first example where no model is invoked
			var oRouter = this.getOwnerComponent().getRouter(), oContext = oListItem.getBindingContext(), sPath = oContext ? oContext.getPath() : "0";

			oRouter.navTo("Details", {
				id: oContext.getProperty().id,
				path: encodeURIComponent(sPath)
			});
		},

		handleHomeButtonPress: function( /* oEvent */) {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("Launchpad");
		},

		handleListItemPress: function(oEvent) {
			var oListItem = oEvent.getParameter("listItem");
			this._showWeatherInfoForListItem(oListItem);
		},

		handleSearch: function(oEvent) {
			var sTerm = oEvent.getParameter("query");

			var oAppModel = this.getView().getModel();

			jQuery.getJSON("api/v1/weather?q=" + sTerm).done(function(mData) {
				oAppModel.setData([
					{
						id: mData.id,
						name: mData.name
					}
				]);
			});
		}
	});
});
