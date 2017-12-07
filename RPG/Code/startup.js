/*  Created By:
 ________                 __   ____  __.__  __    __                 
 \______ \ _____ ________/  |_|    |/ _|__|/  |__/  |_  ____   ____  
  |    |  \\__  \\_  __ \   __\      < |  \   __\   __\/ __ \ /    \ 
  |    `   \/ __ \|  | \/|  | |    |  \|  ||  |  |  | \  ___/|   |  \
 /_______  (____  /__|   |__| |____|__ \__||__|  |__|  \___  >___|  /
         \/     \/                    \/                   \/     \/ 
 JSRPG Engine Version 0.25
*/
//Startup Commands
enemy = {name:"Unknown",hpmax:0,hp:0,dam_min:0,dam_max:0,desc:"Unknown"};
avatar = "ava.png"; //when changing this variable, it simply changes the file it searches for. when set to "ava.png", it will set the protrait to Graphics/ava.png
charname = "Unknown";
encountered = false;
maxhp = 70;
hp = 70;
curdam_min = 1;
curdam_max = 4;
moneygfx = "memes.png"
money = 0;
currencydef = "pickle";
pcurrencydef = "pickles";
curwep = {
name:"Fists",
weapon:true,
usable:false,
desc:"A punchything, you shouldn't be able to see this",
gfx:"fist.png",
dam_min:1,
dam_max:4,
};
inventory = [];
usingitem = 0;
hitfor = 0;
hitto = 0;
curroom = "";
dialogue = false;
curdia = 0;
diaindex = null;
curroom = room.testroom;
updatehud();
addline("Successfully initialized!");
//End of file