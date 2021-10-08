$("document").ready({
   const lst = {};
    $("input[type=checkbox]").change(function (){

	if (this.checked){
	    lst[$(this).attr('data-id')] = $(this).attr('data-name');
	} else {
	    delete lst[$(this).attr('data-id')]
	}

	
	const amenities = Object.values(lst);
	if (amenities.length > 0){
	    $('.amenities > h4').text(amenities.join(', '));
	} else {
	    $('.amenities > h4').html('&nbsp;')
	}
    }
 });
});
