/*  Created By:
 ________                 __   ____  __.__  __    __                 
 \______ \ _____ ________/  |_|    |/ _|__|/  |__/  |_  ____   ____  
  |    |  \\__  \\_  __ \   __\      < |  \   __\   __\/ __ \ /    \ 
  |    `   \/ __ \|  | \/|  | |    |  \|  ||  |  |  | \  ___/|   |  \
 /_______  (____  /__|   |__| |____|__ \__||__|  |__|  \___  >___|  /
         \/     \/                    \/                   \/     \/ 
 JSRPG Engine Version 0.25
*/
//Item Values
var item = {
	fists: {
		name:"Fists",
		weapon:true,
		usable:false,
		desc:"A punchything, you shouldn't be able to see this",
		gfx:"fist.png",
		dam_min:1,
		dam_max:4,
	},
	shortsword: {
		name:"Short Sword",
		weapon:true,
		usable:false,
		desc:"A sword to poke things",
		gfx:"sword.png",
		dam_min:3,
		dam_max:7,
		block:"addline('You play around with the sword and cut yourself!'); dmg(Math.random() * (item.shortsword.dam_max - item.shortsword.dam_min) + item.shortsword.dam_min)",
	},
	test2: {
		name:"Cool Sword",
		weapon:true,
		usable:false,
		desc:"A cooler sword!",
		gfx:"coolsword.png",
		dam_min:12,
		dam_max:28,
	},
	test3: {
		name:"Healing Potion",
		usable:true,
		desc:"A healing potion",
		gfx:"potion.png",
		block:"dmg(-15);",
		consumable:true,
	},
	club: {
		name:"Goblin Club",
		weapon:true,
		usable:false,
		desc:"A club retrieved from a goblin!",
		gfx:"club.png",
		dam_min:6,
		dam_max:20,
	}
};
//Unit Values
var unit = {
	goblin: {
		name:"Goblin",
		hpmax:14,
		hp:14,
		dam_min:12,
		dam_max:36,
		desc:"A mean, green, hate machine!",
	},
	bargoblin: {
		name:"Goblin",
		hpmax:14,
		hp:14,
		dam_min:6,
		dam_max:20,
		desc:"A mean, green, hate machine!",
		endblock:"room.testroom.desc = 'Stone walls surround you, surprisingly warm and comfortable as banners and wood <b onClick=dotrigger(trigger.countersword); >counter</b> and furniture spread out to fill the space. There is a stone set of <exit onClick=setroom(0) >stairs</exit> in the end of the room.'",
		loot:[item.test3,item.club],
		loottable:[{item:item.test2,chance:0.5},{item:item.shortsword,chance:0.9}],
		lootmoney:[0,20],
	}
};
//Quest Values
//Room Values
var room = {
testroom: {
		name:"Lobby",
		desc:"Stone walls surround you, surprisingly warm and comfortable as banners and wood <b onClick='dotrigger(trigger.countersword);' >counter</b> and furniture spread out to fill the space. There is a stone set of <exit onClick=setroom(0) >stairs</exit> in the end of the room. A <b onClick='dotrigger(trigger.bargob);'>mean, green, hate machine</b> sits glaring at you.",
		exits:["testroom2"],
		exitmsgs:["You climb up the stairs."],
	},
	testroom2: {
		name:"Storage room",
		desc:"The room is stone with a single window. A <b onClick=dotrigger(trigger.fishsign) >sign</b> is on the wall. There is a descending set of <exit onClick=setroom(0) >stairs</exit> as well as ones that <exit onClick=setroom(1) >ascend</exit>.",
		exits:["testroom","middleroom"],
		exitmsgs:["You go down the stairs","You climb up the stairs."],
	},
	middleroom: {
		name:"Top floor",
		desc:"There is a curved ceiling of wood. The <exit onClick=setroom(0) >stairs</exit> are behind you. there is a <exit onClick=setroom(1) >chute</exit> that seems to drop to the ground floor.",
		exits:["testroom2","testroom"],
		exitmsgs:["You go down the stairs","You go down the chute."],
	},
};
//Trigger Values
var trigger = {
fishsign: {
block:"alert('fish')",
active:true,
loop:true,
},
bargob: {
block:"encounter(unit.bargoblin);",
active:true,
},
countersword: {
block:"addline('You find a <i>Short Sword</i> behind the counter.'); additem(item.shortsword);",
nblock:"addline('You find nothing behind the counter.')",
active:true,
},
};
//Dialogue Values
var scenes = {
	start:[
		"This is a test dialogue",
		"Please ignore.",
		"PlEAse ignore.",
		"This is anota test dialogue"
	],
};
//End of file