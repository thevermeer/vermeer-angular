// Angular MAIN Module of the namespace vaSite
// vaSite
// Expands the DOM to include concept-past, concept-present, concept-future and concept-tabs tags

// Angular Module Namespace Declaration
// ['site-directives'] injects dependency for definition from siteDOM.js, included in index.html 
(function() {
  var app = angular.module('vaSite', ['site-directives']);

	//Root controller for the site/application
   app.controller('vaSiteController', function(){
    this.concepts = JSONData;
    this.menuactive = "";
    this.getActiveMenu = function(){
      return this.activemenu;
    }; // end getActiveMenu
    this.setActiveMenu = function(value){
      this.activemenu = value;
    }; // end setActiveMenu
  }); //end vaSiteController


  var JSONData = [{
      name: 'Idea',
      tagline: 'The Idea Will Grow',
      description: "Product Designer and Software Developer",
      notes: "My career has spanned 16 years and is rooted in innovation that begins with design and extends through the lifecycle of products and brands.",
      presentFile: "inc/idea.html",
      historyFile: "inc/ideahistory.html", 
      futureFile: "inc/ideafuture.html"
    }, {
      name: 'Method',
      tagline: 'The Medium is the Method',
      description: "Full-Stack Software Design and Application Development",
      notes:"My extensive career in banking operations, business services, marketing and technology is leveraged into the spirit of innovation and development of products, brands and ideas. Below is a brief synopsis via brands of the various development environments I have coded and designed solutions with.",
      presentFile: "inc/method.html",
      historyFile: "inc/methodhistory.html",
      futureFile: "inc/methodhistory.html"
    }, {
      name: 'Function',
      tagline: 'The Function is the Form',
      description: "A Career set against a backdrop of opportunity, passion and wisdom",
      notes:"Innovating through the entire lifecycle of software solutions has proven to hold a bounty of possibilities. Through time, assuming various roles, I have worked to manifest a number of different products for various markets. I have found myself becoming progressively more involved in the business goals and marketing mandates in product development and bring with me strength in branding, marketing and productization.",
      presentFile: "inc/function.html",
      historyFile: "inc/functionhistory.html",
      futureFile: "inc/future.html"
    }];
})();


// JQuery Init
  	// In: None; Out: None;
  	// Pre: JQuery1.10+ is included, well defined, JQueryUI
  	// Post: 1) Assigns Click Handler to class of main menu for animation
  	//       2) Executes testAmin() 
  	$(function() {
     	$('.js--triggerAnimation').click(function(e){
      		e.preventDefault();
      		var anim = 'fadeInUp';
      		testAnim(anim);
    	});  //END Click Handler
    }); // Ends Anonymous Init Fn
  
  	// testAnim
  	// In: X assumed CSS class string from Animate.js denoting the animation type of the transition based on menu click; 
  	// Out: None;
  	// Pre: Animate.js, js--triggerAnimation class defined in body as NAV elements
  	// Post: Animated transition of main menu
  function testAnim(x) {
    $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
    $('#conceptdiv').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
  };