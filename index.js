
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
echo ":github: Bearer GH_TOKEN" >> ~/.gem/credentials
gem build refactored-adventure.gemspec
gem push --key github --host https://rubygems.pkg.github.com/reaper787 refactored-adventure-1.0.0.gem
