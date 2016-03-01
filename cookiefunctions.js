function setCookie(cookieName, cookieValue, cookiePath, cookieExpires)
{
	cookieValue = escape(cookieValue);
	if (cookieExpires == "")
	{
		var nowDate = new Date();
		nowDate.setMonth(nowDate.getMonth() + 6);
		cookieExpires = nowDate.toGMTString();
	}
	if (cookiePath != "")
	{
		cookiePath = ";Path=" + cookiePath;
	}
	document.cookie = cookieName + "=" + cookieValue + ";expires=" + cookieExpires + cookiePath;
}

function getCookie(cookieName)
{
	var cookie = document.cookie;
	var cookieIndex = cookie.indexOf(" " + cookieName + "=");
	var cookieValue;
	if (cookieIndex == -1)
	{
		cookieIndex = cookie.indexOf(cookieName + "=");
	}
	if (cookieIndex == -1)
	{
		cookieValue = null;
	}
	else
	{
		var cookieStart = cookie.indexOf("=", cookieIndex) + 1;
		var cookieEnd = cookie.indexOf(";", cookieIndex);
		if (cookieEnd == -1)
		{
			cookieEnd = cookie.length;
		}
		cookieValue = cookie.substring(cookieStart, cookieEnd);
	}
	return unescape(cookieValue);
	
			
}
	
	
	