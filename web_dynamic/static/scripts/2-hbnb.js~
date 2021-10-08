$(document).ready(function () {
  const lst = {};
  $('input[type=checkbox]').change(function () {
    if (this.checked) {
      lst[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete lst[$(this).attr('data-id')];
    }

    const amenities = Object.values(lst);
    if (amenities.length > 0) {
      $('.amenities > h4').text(amenities.join(', '));
    } else {
      $('.amenities > h4').html('&nbsp;');
    }
  });
  $(function () {
    $.ajax({
      type: 'GET',
      url: 'http://0.0.0.0:5001/api/v1/status/',
      success: function (response) {
        if (response.status === 200 || response.status === 'OK') {
          $('div#api_status').addClass('available');
        }
      }
    });
  });
});
