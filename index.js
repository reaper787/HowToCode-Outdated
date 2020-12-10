
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


            var dancer1;
var dancer2;

whenSetup(function () {
  setBackgroundEffectWithPalette("fireworks", "rave");
  makeNewDanceSpriteGroup(9, "ALIEN", "circle");
  changeMoveEachLR("ALIEN", "rand", -1);
  makeNewDanceSprite("MOOSE", 'dancer1', {x: 200, y: 200});
  changeMoveLR('dancer1', "rand", -1);
  setForegroundEffectExtended("confetti");
  makeNewDanceSprite("CAT", 'dancer2', {x: 200, y: 100});
});

everySeconds(4, "measures", function () {
  changeMoveLR('dancer1', "rand", -1);
  changeMoveLR('dancer2', "rand", -1);
});
