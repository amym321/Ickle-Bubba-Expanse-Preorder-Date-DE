

    (function( jQuery ){
  var $module = jQuery('#m-1680004114790').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1680004114735').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1681215046393').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  (function( jQuery ){
  // var $module = jQuery('#m-1679325869592').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1680004114757').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  (function(jQuery) {
  var $module = jQuery('#m-1680004114848').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);(function(jQuery) {
  var $module = jQuery('#m-1680004114826').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {
      document.dispatchEvent(new CustomEvent('variant:change', {
        detail : {
          variant: variant
        }
      }));
    }
  });
})(window.GemQuery || jQuery);(function( jQuery ){
  // var $module = jQuery('#m-1680535405161').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1685454784079').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1685454784090').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function(jQuery) {
    var $module = jQuery('#m-1685455190091').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    (function(jQuery) {
    var $module = jQuery('#m-1685455057276').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1685454784105').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1685454784055').children('.module');
  $module.gfV2HeroBanner({});
  
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1680004114740').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
  
    
  
    (function( jQuery ){
  var $module = jQuery('#m-1680004114755').children('.module');
  $module.gfV3ProductDesc();
})( window.GemQuery || jQuery );
  
    
  (function( jQuery ){
  // var $module = jQuery('#m-1680004114878').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1680004114851').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    (function( jQuery ){
  // var $module = jQuery('#m-1683102384122').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
  window.__gfFlowActions = []; window.__gfFlowActions.push([{"source":{"id":"#e-1685454784107","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685454784107","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":350}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685454784010","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685454784010","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":350}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#m-1685454784124","target":".module"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685454784031","actions":[{"key":"scrollToId","type":2,"data":{"delay":0,"duration":500,"marginTop":30}}],"rename":"Text Block: #e-1685454784031"}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685454950053","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685454950053","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":350}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685455173204","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685455173204","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":350}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685454967989","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685454967989","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":350}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685455207503","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685455207503","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":350}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685455231232","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685455231232","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":350}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685455006055","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685455006055","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":350}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685455259200","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685455259200","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":350}}]}]}]);window.__gfFlowActions.push([{"source":{"id":"#e-1685455039450","target":".gf_button"},"events":[{"key":"click"}],"targets":[{"id":"#e-1685455039450","actions":[{"key":"slideUp","type":2,"data":{"delay":0,"duration":350}}]}]}]); window.__gfV1FlowActions.init();