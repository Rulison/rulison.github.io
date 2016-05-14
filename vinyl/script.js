

$(document).ready(function() {
    jQuery(window).on('resize', function() {
      var width = jQuery(document).width();
      if (width < 685) {
        jQuery('.frame').attr('class','frame twelve columns one-height');
        jQuery('.title').attr('font-size', '100px');
      }
      else if (width < 859) {
        jQuery('.frame').attr('class','frame six columns two-height');
      }
      else if (width < 1146) {
        jQuery('.frame').attr('class','frame four columns three-height');
      }
      else {
        jQuery('.frame').attr('class','frame three columns');
      }
    }).trigger('resize');     

});
