  /************************************************************************************
  This is your Page Code. The appAPI.ready() code block will be executed on every page load.
  For more information please visit our docs site: http://docs.crossrider.com
*************************************************************************************/

appAPI.ready(function($) {

    // Place your code here (you can also define new functions above this scope)
    // The $ object is the extension's jQuery object

	// if(window.location.indexOf("optimizely.com") < 0) return;

	alert("hi");

    $("h1.logo").html("easeCommerce : <span style='font-size:80%'>ease into commerce</span>");

});
