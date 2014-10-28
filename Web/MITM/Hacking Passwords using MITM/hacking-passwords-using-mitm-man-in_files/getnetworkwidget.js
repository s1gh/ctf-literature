if(typeof(networkedblogs)=="undefined") {
	document.write("<span style='color:red'>NetworkedBlogs widget not installed correctly</span>");
}
else {
    // Constants
	if (typeof(networkedblogs.nwidget)=="undefined") {
		networkedblogs.nwidget = {};
	}
    networkedblogs.url = "http://www.networkedblogs.com/";
    networkedblogs.nwidget.url = "http://nwidget.networkedblogs.com/";

    // Functions
	networkedblogs.nwidget.popupFollow = function() {
	    window.open (networkedblogs.url + "blog/" + networkedblogs.shortName + "/popup",
	        "NetworkedBlogs", "status=1,toolbar=1,scrollbars=1,width=670,height=450");
	    return false;
	};

   	// This function calculates the fittable count of fans according to the given client area.
	networkedblogs.nwidget.getFanCount = function(w, h) {
		var xFanCount = Math.floor(w / (35 + 2 * 3)); // image + margin
		var yFanCount = Math.floor(h / (35 + 2 * 3)); // image + margin
		return xFanCount*yFanCount;
	};


  // Code starts here (embedded in a function to use local variables)
  networkedblogs.nwidget.init = function() {
    var n = networkedblogs.nwidget;
    var container = document.getElementById("networkedblogs_nwidget_container");
    var widget = document.getElementById("networkedblogs_nwidget_widget");
    var body = document.getElementById("networkedblogs_nwidget_body");

    // Get width and height
    if (typeof(n.width) == "undefined"){
      if (container.clientWidth > 0){
        n.width = container.clientWidth;
      }
      else {
        // IE not ready, re-run in 100ms.
        setTimeout(networkedblogs.nwidget.init, 100);
        return;
      }
    }
    if (typeof(n.height) == "undefined"){
      if (container.clientHeight > 0){
        n.height = container.clientHeight - container.style.paddingTop.replace("px", "");
      }
      else {
        // IE not ready, re-run in 100ms.
        setTimeout(networkedblogs.nwidget.init, 100);
        return;
      }
    }
    widget.style.width = (n.width - 2) + "px";  // 2 = borders
    widget.style.height = n.height + "px";
    body.style.height = (n.height - 54) + "px";  // 54 = height of button + logo

    // Calculate how many followers we can fit.
    n.fanCount = n.getFanCount(n.width - 2 /* margins */, n.height - 54 /* logo + button */ - 10 /*buffer*/);

    // create iframe.
    n.iframe = document.createElement("iframe");
    n.iframe.id = "networkedblogs_nwidget_iframe";
    n.iframe.frameBorder = "0";
    n.iframe.marginHeight = "0";
    n.iframe.marginWidth = "0";
    n.iframe.width = "100%";
    n.iframe.height = "100%";
    n.iframe.scrolling = "no";
    if (typeof(n.fanCount) == "number")
      n.iframe.src = n.url + "getnetworkwidgetmain?bid=" + networkedblogs.blogId.toString() +
      "&fancount=" + n.fanCount.toString();
    else
      n.iframe.src = n.url + "getnetworkwidgetmain?bid=" + networkedblogs.blogId.toString()
    body.appendChild(n.iframe);
    document.getElementById("networkedblogs_nwidget_follow").getElementsByTagName("a")[0].onclick = n.popupFollow;
  };

  networkedblogs.is_send = false;
  networkedblogs.timer = false;

  networkedblogs.checkVisibility = function()
  {
    if (networkedblogs.is_send)
      return;

    var elem = document.getElementById('networkedblogs_nwidget_container');

    var scrollTop = networkedblogs.getWindowTop();
    var scrollBottom = scrollTop + networkedblogs.getWindowHeight();
    var elemTop = networkedblogs.getElemTop(elem);
    var elemBottom = elemTop + elem.clientHeight;

    // i.e. increase height of the element
    // to start loading early
    elemTop = elemTop - 100;
    elemBottom = elemBottom + 100;

    var send_request = false;

    // if height of the window or elem is 0 (top = bottom)
    // than we also send request
    if ((scrollTop == scrollBottom) || (elemTop == elemBottom))
      send_request = true;

    // can we see window?
    if ((elemTop <= scrollBottom) && (elemBottom >= scrollTop))
      send_request = true;

    if (send_request)
      networkedblogs.send_request();
  };

  networkedblogs.getWindowTop = function()
  {
    // http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
    var scrOfY = 0;
    if( typeof( window.pageYOffset ) == 'number' ) {
      //Netscape compliant
      scrOfY = window.pageYOffset;
    } else if( document.body && document.body.scrollTop ) {
      //DOM compliant
      scrOfY = document.body.scrollTop;
    } else if( document.documentElement && document.documentElement.scrollTop ) {
      //IE6 standards compliant mode
      scrOfY = document.documentElement.scrollTop;
    }

    return scrOfY;
  };

  networkedblogs.getWindowHeight = function()
  {
    var height = 0;

    // in Internet Explorer (backward-compatibility mode): 
    if (document.body && document.body.offsetWidth)
     height = document.body.offsetHeight;

    // in Internet Explorer (standards mode, document.compatMode=='CSS1Compat'): 
    if (document.compatMode=='CSS1Compat' &&
        document.documentElement &&
        document.documentElement.offsetWidth )
      height = document.documentElement.offsetHeight;

    // in most other browsers: 
    if (window.innerWidth && window.innerHeight)
      height = window.innerHeight;

    return height;
  };

  networkedblogs.getElemTop = function(elem)
  {
    var curtop = 0;
    if (elem.offsetParent) {
      do {
        curtop += elem.offsetTop;
      } while (elem = elem.offsetParent);
    }
    return curtop;
  };

  networkedblogs.send_request = function()
  {
    networkedblogs.is_send = true;
    clearInterval(networkedblogs.timer);

    networkedblogs.nwidget.init();
  };

  networkedblogs.timer = setInterval(networkedblogs.checkVisibility, 100);
}
