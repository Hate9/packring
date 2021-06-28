/*ajaxRequest: sends a simple asynchronous ajax request and returns the response
  parameters:
  url: the string url to which to send the request
  cache: a boolean specifying whether or not to cache the requested data. if set to false, predefined request headers will be sent to prevent caching
  responseType: a string representing the expected response type of the resource
  formData: either the FormData object or an associative array which will be converted to a FormData object, which will be sent
  headers: an associative array representing the keys and values of request headers to be sent
*/
function ajaxRequest(url, cache = true, responseType = "", formData = null, headers = null) {
	return new Promise(resolve => {
		let xhr = new XMLHttpRequest();
		
		xhr.responseType = responseType;
		
		if (!(formData instanceof FormData) && formData != null) {
			let tempFormData = new FormData();
			for (let key in formData) {
				tempFormData.append(key, formData[key]);
			}
			formData = tempFormData;
		}
		
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				resolve(this.responseText);
			}
		};
		xhr.open(formData == null ? "GET" : "POST", url, true);
		
		if (!cache) {
			xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate");
			xhr.setRequestHeader("Pragma", "no-cache");
			xhr.setRequestHeader("Expires", "Fri, 01 Jan 1990 00:00:00 GMT");
		}
		
		if (headers != null) {
			for (let key in headers) {
				xhr.setRequestHeader(key, headers[key]);
			}
		}
		xhr.send(formData);
	});
}