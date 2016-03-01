function HttpRequest(sUrl, fpCallback)
{
	this.request = this.createXmlHttpRequest();
	this.request.open("GET", sUrl, true);
	
	var tempRequest = this.request;
	function request_readystatechange()
	{
		if (tempRequest.readyState == 4)
		{
			if (tempRequest.status == 200)
			{
				fpCallback(tempRequest.responseText);
			}
			else
			{
				alert("An error occurred trying to contact the server.");
			}
		
		}
	}
	
	this.request.onreadystatechange = request_readystatechange;
}

HttpRequest.prototype.createXmlHttpRequest = function ()
{
	if (window.XMLHttpRequest)
	{
		var oHttp = new XMLHttpRequest();
		oHttp.overrideMimeType("application/json");
		return oHttp;
	}
	else if (window.ActiveXObject)
	{
		var versions =
		[
			"MSXML2XmlHttp.6.0",
			"MSXML2.XmlHttp.3.0"
		];
		
		for (var i = 0; i < version.length; i++)
		{
			try
			{
				var oHttp = new ActiveXObject(versions[i]);
				return oHttp;
			}
			catch (error)
			{
				//do nothing here
			}
		}
	}
	
	alert("You browser doesn't support XMLHttp");
}

HttpRequest.prototype.send = function ()
{
	this.request.send(null);
}