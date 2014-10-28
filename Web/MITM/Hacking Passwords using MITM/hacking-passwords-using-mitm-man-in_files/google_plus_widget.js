(function(){
	var url = "http://widgetsplus.com/google_plus_widget.php";
	var current_location = window.location.hostname;
	if(typeof pid != 'undefined') {
		url += "?pid="+pid;
	}
	if(typeof current_location != 'undefined') {
	  	url += "&host=" + current_location;
	}
	
	if(typeof mbgc != 'undefined') {
	  	url += "&mbgc="+mbgc;
	}
	if(typeof ww != 'undefined') {
	  	url += "&ww="+ww;
	} else {
		url += "&ww=314";
	}
	if(typeof mbc != 'undefined') {
	  	url += "&mbc="+mbc;
	}
	if(typeof bbc != 'undefined') {
	  	url += "&bbc="+bbc;
	}
	if(typeof bmobc != 'undefined') {
	  	url += "&bmobc="+bmobc;
	}
	if(typeof bbgc != 'undefined') {
	  	url += "&bbgc="+bbgc;
	}
	if(typeof bmoc != 'undefined') {
	  	url += "&bmoc="+bmoc;
	}
	if(typeof bfc != 'undefined') {
	  	url += "&bfc="+bfc;
	}
	if(typeof bmofc != 'undefined') {
	  	url += "&bmofc="+bmofc;
	}  
	if(typeof tlc != 'undefined') {
	  	url += "&tlc="+tlc;
	}
	if(typeof tc != 'undefined') {
	  	url += "&tc="+tc;
	}
	if(typeof nc != 'undefined') {
	  	url += "&nc="+nc;
	}
	if(typeof bc != 'undefined') {
	  	url += "&bc="+bc;
	}
	if(typeof l != 'undefined') {
		url += "&l="+l;
	}
	
	if(typeof t != 'undefined') {
		url += "&t="+t;
	} else {
		url += "&t=Add_me_on";
	}
	
	if(typeof fs != 'undefined') {
		url += "&fs="+fs;
	}
	if(typeof fsb != 'undefined') {
		url += "&fsb="+fsb;
	}
	if(typeof bw != 'undefined') {
		url += "&bw="+bw;
	}
	if(typeof b != 'undefined') {
		url += "&b="+b;
	}
	
	if(typeof ff != 'undefined') {
		url += "&ff="+ff;
	}
	if(typeof lu != 'undefined') {
		url += "&lu="+lu;
	}
	if(typeof wh != 'undefined') {
		
		if(wh < 318) {
			url += "&wh=320";
			wh = 320;
		} else {
			url += "&wh="+wh;
		}
	}else{
		wh = '142';
	}
	if(typeof pc != 'undefined') {
		url += "&pc="+pc;
	}
	if(typeof lg != 'undefined') {
		url += "&lg="+lg;
	}

	if(typeof pid != 'undefined') {
		document.write("<iframe src='" + url + "' frameborder='0' scrolling='no' height='"+wh+"' width='"+ww+"'></iframe>");
	} else {
		document.write('<p>No Google+ ID found</p>');
	}
   	
})()