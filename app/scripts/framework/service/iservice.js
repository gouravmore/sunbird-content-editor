/* istanbul ignore next */
org.ekstep.services.iService = Class.extend({
	/**
     * @member {object} requestHeaders
     * @memberof org.ekstep.services.iService
     */
	requestHeaders: {
		'headers': {
			'content-type': 'application/json',
			'user-id': 'content-editor',
			'X-Authenticated-User-Token': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ1WXhXdE4tZzRfMld5MG5PS1ZoaE5hU0gtM2lSSjdXU25ibFlwVVU0TFRrIn0.eyJqdGkiOiIxOGQwYWU0MC04ZGU5LTRkYzEtYmY2Ny0wZDY5NDE3ZTQ3YzQiLCJleHAiOjE1ODQ2OTI3NDUsIm5iZiI6MCwiaWF0IjoxNTg0NTE5OTQ1LCJpc3MiOiJodHRwczovL2Rldi5zdW5iaXJkZWQub3JnL2F1dGgvcmVhbG1zL3N1bmJpcmQiLCJzdWIiOiJmOjVhOGEzZjJiLTM0MDktNDJlMC05MDAxLWY5MTNiYzBmZGUzMTo5NWU0OTQyZC1jYmU4LTQ3N2QtYWViZC1hZDhlNmRlNGJmYzgiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiIxOWZlYzVhYi03NGM1LTQ4YzgtOTQ5ZS01NGU5MTY4MzcwZDMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vZGV2LmNlbnRyYWxpbmRpYS5jbG91ZGFwcC5henVyZS5jb20vIiwiaHR0cDovL2Rldi5jZW50cmFsaW5kaWEuY2xvdWRhcHAuYXp1cmUuY29tLyJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiIiLCJuYW1lIjoiUmV2aWV3ZXIgVXNlciIsInByZWZlcnJlZF91c2VybmFtZSI6Im50cHRlc3QxMDMiLCJnaXZlbl9uYW1lIjoiUmV2aWV3ZXIiLCJmYW1pbHlfbmFtZSI6IlVzZXIiLCJlbWFpbCI6InVzZXJ0ZXN0MTNAdGVzdHNzLmNvbSJ9.QTqtYxB64HR1SAQ-eIHF5vsroMdJdnHPQLJFcybtDaKywYb_sbwH3ZflYvCr68xNQ9Zr8PYTntW3rSIUL-P9J71LorvPfIHg1nfb7odEh9p8BUmtL4tle7bhnHhhsK6K5X9ofcBdr3Ked89f1hI3uLmlAIaQWMaWiYrQuZJDvs2hDp-UEhaIJ4_J-IGQ9SdQSEWOLQEjZcr9-_BoD5u2YlAKejkQtZAjIgWXpCuoLQ3EDSyYtND8Aqb2RXRzl207d25f2QSCO5ZNoYbvRW2EVUW-_gNd4SGiTRIHQrR5S-z7mDn9Apg9roMaSbO9kmaaP2FkHaFPDPeIx5c_JdLl5Q',
			'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ1WXhXdE4tZzRfMld5MG5PS1ZoaE5hU0gtM2lSSjdXU25ibFlwVVU0TFRrIn0.eyJqdGkiOiI0ZGYxNTc2Yi1lZTNiLTRmZmQtYjdkZi1hZjEyNGU1Zjg1NzciLCJleHAiOjE1ODM5MDk5MjgsIm5iZiI6MCwiaWF0IjoxNTgzNzM3MTI4LCJpc3MiOiJodHRwczovL2Rldi5zdW5iaXJkZWQub3JnL2F1dGgvcmVhbG1zL3N1bmJpcmQiLCJzdWIiOiJmOjVhOGEzZjJiLTM0MDktNDJlMC05MDAxLWY5MTNiYzBmZGUzMTo5NWU0OTQyZC1jYmU4LTQ3N2QtYWViZC1hZDhlNmRlNGJmYzgiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiI1MTcyNTFhMS01ZDBmLTQxNzAtOTZmZC04MTM2Y2UxNTBiNTYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vZGV2LmNlbnRyYWxpbmRpYS5jbG91ZGFwcC5henVyZS5jb20vIiwiaHR0cDovL2Rldi5jZW50cmFsaW5kaWEuY2xvdWRhcHAuYXp1cmUuY29tLyJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiIiLCJuYW1lIjoiUmV2aWV3ZXIgVXNlciIsInByZWZlcnJlZF91c2VybmFtZSI6Im50cHRlc3QxMDMiLCJnaXZlbl9uYW1lIjoiUmV2aWV3ZXIiLCJmYW1pbHlfbmFtZSI6IlVzZXIiLCJlbWFpbCI6InVzZXJ0ZXN0MTNAdGVzdHNzLmNvbSJ9.FFg9esbTvtp75oac8BCjD2g1St02V2GOErYPwAm18cFJdobArpFbfS81Ikr8iifbXaPiKABYsNwB4KRAz6INTWORJ6QALcpy7dC-NXtGeOtzqwIQUiryoXyLB9iqg2pvNTDEKNpLDmM_Gv2NnPq7_X_LKsSsYq09dA8cpyoBs2vTXOeSOMElb6tgfKAT6wo5wklr0oMldvLgvZLMc8hTX-cD0FEEv_VWeuZ3KU0BqsqKP6xvcBz3yu6-R2tTN6V7pUA7LEXYCG_iEHnGo09JQkisQChOlRPWwAr7-k7gHTUVffDB7t3TKL_Qkxx-Q95umUu6gqUsHf74-afcJM2qHA'
		}
	},
	getBaseURL: function () {
		return org.ekstep.services.config.baseURL
	},
	getAPISlug: function () {
		return org.ekstep.services.config.apislug
	},
	getConfig: function (configKey, _default) {
		return org.ekstep.services.config[configKey] || _default
	},
	init: function (config) {
		this.initService(config)
	},
	initService: function (config) {},
	_dispatchTelemetry: function (data) {
		var status = data.res.responseCode || data.res.statusText
		org.ekstep.services.telemetryService.apiCall({ 'path': encodeURIComponent(data.url), 'method': data.method, 'request': data.request, 'response': '', 'responseTime': data.res.responseTime, 'status': status, 'uip': '' })
	},
	_call: function (ajaxSettings, config, cb) {
		var requestTimestamp; var instance = this
		config = config || {}
		ajaxSettings.headers = config.headers || {}
		ajaxSettings.beforeSend = function (xhrObject, settings) {
			requestTimestamp = (new Date()).getTime()
		}
		ajaxSettings.success = function (res) {
			res.responseTime = (new Date()).getTime() - requestTimestamp
			var request = ajaxSettings.type === 'POST' ? ajaxSettings.data : {}
			instance._dispatchTelemetry({ url: ajaxSettings.url, method: ajaxSettings.type, request: request, res: res })
			res = { data: res }
			cb(null, res)
		}
		ajaxSettings.error = function (err) {
			err.responseTime = (new Date()).getTime() - requestTimestamp
			if(err && err.status === 401 && err.statusText === "Unauthorized") {
				ecEditor.dispatchEvent("org.ekstep.contenteditor:Unauthorized");
			} else {
				cb(err, null);
			}
			var request = ajaxSettings.type === 'POST' ? ajaxSettings.data : {}
			instance._dispatchTelemetry({ url: ajaxSettings.url, method: ajaxSettings.type, request: request, res: err })
		}

		if (!_.isUndefined(config.contentType)) ajaxSettings.contentType = config.contentType
		if (!_.isUndefined(config.cache)) ajaxSettings.cache = config.cache
		if (!_.isUndefined(config.processData)) ajaxSettings.processData = config.processData
		if (!_.isUndefined(config.enctype)) ajaxSettings.enctype = config.enctype

		org.ekstep.pluginframework.jQuery.ajax(ajaxSettings)
	},
	get: function (url, config, cb) {
		this._call({ type: 'GET', url: url }, config, cb)
	},
	put: function (url, data, config, cb) {
		// eslint-disable-next-line
		if (typeof cb !== 'function') throw 'iservice expects callback to be function'
		if (typeof data === 'object' && _.isUndefined(config.contentType)) data = JSON.stringify(data)
		this._call({ type: 'PUT', url: url, data: data }, config, cb)
	},
	post: function (url, data, config, cb) {
		// eslint-disable-next-line
		if (typeof cb !== 'function') throw 'iservice expects callback to be function'
		if (typeof data === 'object' && _.isUndefined(config.contentType)) data = JSON.stringify(data)
		this._call({ type: 'POST', url: url, data: data }, config, cb)
	},
	patch: function (url, data, config, cb) {
		// eslint-disable-next-line
		if (typeof cb !== 'function') throw 'iservice expects callback to be function'
		if (typeof data === 'object' && _.isUndefined(config.contentType)) data = JSON.stringify(data)
		this._call({ type: 'PATCH', url: url, data: data }, config, cb)
	},
	delete: function (url, config, cb) {
		// eslint-disable-next-line
		if (typeof cb !== 'function') throw 'iservice expects callback to be function'
		this._call({ type: 'DELETE', url: url }, config, cb)
	},
	/**
     * Utility function which is used to call http post request
     * @param  {string}   url      API url
     * @param  {object}   data     APT request data
     * @param  {object}   headers  API headers
     * @param  {Function} callback returns error and response as arguments
     * @memberof org.ekstep.services.iService
     */
	postFromService: function (url, data, headers, callback) {
		this.post(url, data, headers, function (err, res) {
			callback(err, res)
		})
	},
	/**
     * Utility function which is used to call http get request
     * @param  {string}   url      API url
     * @param  {object}   headers  API headers
     * @param  {Function} callback returns error and response as arguments
     * @memberof org.ekstep.services.iService
     */
	getFromService: function (url, headers, callback) {
		this.get(url, headers, function (err, res) {
			callback(err, res)
		})
	}
})