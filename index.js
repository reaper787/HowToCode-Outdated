
function intro(){
            alert("welcome to my webpage");
            }
$(document).ready(function(){
   $("#story-tittle").hover(function(){
   $(this).css("color", "black");
   },
   function(){
   $(this).hide();
   });    
});
