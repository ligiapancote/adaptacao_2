
function get_request_var(name){
	if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
	return decodeURIComponent(name[1]);
}

$(".tooltip").tooltipsy({
	offset: [0, 10],
	css: {
		'padding': '10px',
		/*'max-width': '400px',*/
		'color': '#303030',
		'background-color': '#f5f5b5',
		'border': '1px solid #deca7e',
		'-moz-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
		'-webkit-box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
		'box-shadow': '0 0 10px rgba(0, 0, 0, .5)',
		'text-shadow': 'none'
	}
});

if( get_request_var('review') ){
	$('#controls').addClass('hidden');
}else{
	$('#return_hook').addClass('hidden');
}

$('#return_hook').on('click', function(){
	window.history.back();
});