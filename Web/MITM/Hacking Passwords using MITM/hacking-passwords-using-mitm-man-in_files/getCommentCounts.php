var counts = [], linkUrls = [], targets = [], ids = [];IDHasLoaded = true;var theCount = 0;
var links = document.getElementsByTagName("a");
for ( var i = 0, lnk_len = links.length; i < lnk_len; i++ ) {
	if ( links[i].className == "IDCommentsReplace" ) {
		links[i].innerHTML = counts[theCount];
		links[i].href = linkUrls[theCount];
		links[i].id = ids[theCount];
		links[i].target = targets[theCount];
		links[i].className = "comment-link";
		theCount++;
	}
}

if ( 0 == theCount ) {
	var safety = 0;
	var spans = document.getElementsByTagName("span");
	var id_lng = ids.length;
	var sp_lng = spans.length;
	while ( theCount < id_lng && safety < 2 * id_lng ) {
		for ( var i = 0; i < sp_lng; i++ ) {
			if ( "IDShowCommentLink" + spans[i].id == ids[theCount] ) {
				spans[i].parentNode.href = linkUrls[theCount];
				spans[i].parentNode.id = ids[theCount];
				spans[i].parentNode.target = targets[theCount];
				spans[i].parentNode.className = "comment-link";
				spans[i].parentNode.innerHTML = counts[theCount];
				theCount++;
			}
		}
		safety++;
	}
}if( typeof(IDCounted) == "undefined" ) {
	var IDCounted;
	_qoptions = [{ labels:"comment-links", qacct:"p-94D6e1NDscLvI"},{qacct:"p-18-mFEk4J448M", labels:"type.intensedebate.embed"}];
	IDcountIT();
}
	
function IDcountIT() {
	var newScript  = document.createElement('script');
	newScript.type = 'text/javascript';
	newScript.src  = '//edge.quantserve.com/quant.js';
	document.getElementsByTagName('head')[0].appendChild(newScript);
}
