
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
