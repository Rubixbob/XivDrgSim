var actions = [
	{ name: "True Thrust",
	  shortName: "TT",
	  potency: 150,
	  type: "Weaponskill",
	  group: "combo1"},
	{ name: "Vorpal Thrust",
	  shortName: "VT",
	  potency: 260,
	  type: "Weaponskill",
	  group: "combo1"},
	{ name: "Full Thrust",
	  shortName: "FT",
	  potency: 450,
	  type: "Weaponskill",
	  group: "combo1"},
	{ name: "Fang and Claw",
	  shortName: "FC",
	  potency: 300,
	  effectName: "Enhanced Wheeling Thrust",
	  effectDuration: 10,
	  type: "Weaponskill",
	  group: "combo1"},

	{ name: "Impulse Drive",
	  shortName: "ID",
	  potency: 200,
	  type: "Weaponskill",
	  group: "combo2"},
	{ name: "Disembowel",
	  shortName: "DE",
	  potency: 240,
	  effectValue: 1.05,
	  effectDuration: 30,
	  type: "Weaponskill",
	  group: "combo2"},
	{ name: "Chaos Thrust",
	  shortName: "CT",
	  potency: 280,
	  dotPotency: 35,
	  dotDuration: 30,
	  type: "Weaponskill",
	  group: "combo2"},
	{ name: "Wheeling Thrust",
	  shortName: "WT",
	  potency: 300,
	  effectName: "Sharpened Fang and Claw",
	  effectDuration: 10,
	  type: "Weaponskill",
	  group: "combo2"},

	{ name: "Heavy Thrust",
	  shortName: "HT",
	  potency: 190,
	  effectValue: 1.1,
	  effectDuration: 30,
	  type: "Weaponskill",
	  group: "miscgcd"},
	{ name: "Piercing Talon",
	  shortName: "PT",
	  potency: 120,
	  type: "Weaponskill",
	  group: "miscgcd"},
	{ name: "Doom Spike",
	  shortName: "DS",
	  potency: 140,
	  type: "Weaponskill",
	  group: "miscgcd"},
	{ name: "Sonic Thrust",
	  shortName: "ST",
	  potency: 180,
	  type: "Weaponskill",
	  group: "miscgcd"},

	{ name: "Blood for Blood",
	  shortName: "BfB",
	  effectValue: 1.15,
	  effectDuration: 20,
	  recast: 80,
	  type: "Ability",
	  group: "buff"},
	{ name: "Dragon Sight",
	  shortName: "DS",
	  effectValue: 1.1,
	  effectDuration: 20,
	  recast: 120,
	  type: "Ability",
	  group: "buff"},
	{ name: "Battle Litany",
	  shortName: "BL",
	  effectValue: 0.15,
	  effectDuration: 20,
	  recast: 180,
	  type: "Ability",
	  group: "buff"},
	{ name: "Life Surge",
	  shortName: "LS",
	  effectDuration: 10,
	  recast: 50,
	  type: "Ability",
	  group: "buff"},
	{ name: "Blood of the Dragon",
	  shortName: "BotD",
	  effectValue: 0.3,
	  effectDuration: 20,
	  recast: 30,
	  type: "Ability",
	  group: "buff"},
	{ name: "Potion",
	  shortName: "Pot",
	  effectValue: 225,
	  effectDuration: 30,
	  recast: 270,
	  animLock: 1.3,
	  type: "Ability",
	  group: "buff"},

	{ name: "Jump",
	  shortName: "Jump",
	  potency: 260,
	  effectName: "Dive Ready",
	  effectDuration: 15,
	  recast: 30,
	  animLock: 1.3,
	  type: "Ability",
	  group: "ogcd"},
	{ name: "Spineshatter Dive",
	  shortName: "SSD",
	  potency: 210,
	  effectName: "Dive Ready",
	  effectDuration: 15,
	  recast: 60,
	  animLock: 1.3,
	  type: "Ability",
	  group: "ogcd"},
	{ name: "Dragonfire Dive",
	  shortName: "DFD",
	  potency: 320,
	  recast: 120,
	  animLock: 1.3,
	  type: "Ability",
	  group: "ogcd"},
	{ name: "Mirage Dive",
	  shortName: "MD",
	  potency: 210,
	  recast: 1,
	  type: "Ability",
	  group: "ogcd"},
	{ name: "Geirskogul",
	  shortName: "GK",
	  potency: 230,
	  recast: 30,
	  type: "Ability",
	  group: "ogcd"},
	{ name: "Nastrond",
	  shortName: "NS",
	  potency: 330,
	  recast: 10,
	  type: "Ability",
	  group: "ogcd"},
	{ name: "Elusive Jump",
	  shortName: "EJ",
	  recast: 30,
	  animLock: 1.3,
	  type: "Ability",
	  group: "ogcd"},

	{ name: "Second Wind",
	  shortName: "SW",
	  potency: 500,
	  recast: 120,
	  type: "Ability",
	  group: "crossrole"},
	{ name: "Arm's Length",
	  shortName: "AL",
	  effectDuration: 5,
	  recast: 60,
	  type: "Ability",
	  group: "crossrole"},
	{ name: "Leg Sweep",
	  shortName: "LS",
	  recast: 40,
	  type: "Ability",
	  group: "crossrole"},
	{ name: "Diversion",
	  shortName: "Div",
	  effectDuration: 30,
	  recast: 120,
	  type: "Ability",
	  group: "crossrole"},
	{ name: "Invigorate",
	  shortName: "Inv",
	  potency: 400,
	  recast: 120,
	  type: "Ability",
	  group: "crossrole"},
	{ name: "Bloodbath",
	  shortName: "BB",
	  effectDuration: 20,
	  recast: 90,
	  type: "Ability",
	  group: "crossrole"},
	{ name: "Goad",
	  shortName: "Goad",
	  potency: 30,
	  effectDuration: 30,
	  recast: 180,
	  type: "Ability",
	  group: "crossrole"},
	{ name: "Feint",
	  shortName: "Feint",
	  effectDuration: 10,
	  recast: 120,
	  type: "Ability",
	  group: "crossrole"},
	{ name: "Crutch",
	  shortName: "Crutch",
	  potency: 150,
	  recast: 90,
	  type: "Ability",
	  group: "crossrole"},
	{ name: "True North",
	  shortName: "TN",
	  effectDuration: 15,
	  recast: 150,
	  type: "Ability",
	  group: "crossrole"},

	{ name: "Delay",
	  shortName: "Delay",
	  animLock: 1.05,
	  type: "Ability",
	  group: "other"}
];

var defaultAnimLock = 0.7;
var scale = 60;