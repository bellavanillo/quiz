
$(document).ready(function() {
  $("form#adopt").submit(function(event) {
    event.preventDefault();

   if (question1 === 'front' && question2 === 'creative' && question5 === 'design' || 'popular') {
    $("img#css").show(); //css
   }


   if (question1 === 'back' && question2 === 'logical' && question5 === 'popular') {
    $("img#java").show(); //java
   }


   if (question1 === 'back' && question2 === 'logical' && question3 === 'yes' question5 === 'business' || 'popular') {
    $("img#c").show(); // c#
   }
