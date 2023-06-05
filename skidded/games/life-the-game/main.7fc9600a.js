parcelRequire = function (e, r, t, n)
{
	var i, o = "function" == typeof parcelRequire && parcelRequire,
		u = "function" == typeof require && require;

	function f(t, n)
	{
		if (!r[t])
		{
			if (!e[t])
			{
				var i = "function" == typeof parcelRequire && parcelRequire;
				if (!n && i) return i(t, !0);
				if (o) return o(t, !0);
				if (u && "string" == typeof t) return u(t);
				var c = new Error("Cannot find module '" + t + "'");
				throw c.code = "MODULE_NOT_FOUND", c
			}
			p.resolve = function (r)
			{
				return e[t][1][r] || r
			}, p.cache = {};
			var l = r[t] = new f.Module(t);
			e[t][0].call(l.exports, p, l, l.exports, this)
		}
		return r[t].exports;

		function p(e)
		{
			return f(p.resolve(e))
		}
	}
	f.isParcelRequire = !0, f.Module = function (e)
	{
		this.id = e, this.bundle = f, this.exports = {}
	}, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t)
	{
		e[r] = [function (e, r)
		{
			r.exports = t
		},
		{}]
	};
	for (var c = 0; c < t.length; c++) try
	{
		f(t[c])
	}
	catch (e)
	{
		i || (i = e)
	}
	if (t.length)
	{
		var l = f(t[t.length - 1]);
		"object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function ()
		{
			return l
		}) : n && (this[n] = l)
	}
	if (parcelRequire = f, i) throw i;
	return f
}(
{
	"HmIA": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		}), exports.ASSETSPATH = {
			ENDSCREEN: "./assets/endTexts/",
			AUDIO: "./assets/audio/",
			GENERIC: "./assets/generic/",
			BUTTONS: "./assets/buttons/",
			FONTS: "./assets/fonts/",
			ANIMATIONS: "./assets/animations/",
			PHYSICS: "./assets/physics/",
			LOAD: "./assets/00load/",
			MENU: "./assets/main_game/0Start/",
			BIRTH: "./assets/main_game/1Birth/",
			TALK: "./assets/main_game/3talk/",
			SCHOOL: "./assets/main_game/4school/",
			PUBERTY: "./assets/main_game/5puberty/",
			FINDHER: "./assets/main_game/6findher/",
			BEERPONG: "./assets/main_game/7beerpong/",
			COFFEE: "./assets/main_game/8coffee/",
			MARRIAGE: "./assets/main_game/9marriage/",
			KIDS: "./assets/main_game/10kids/",
			MIDLIFE: "./assets/main_game/11midlife/",
			GRANDCHILDREN: "./assets/main_game/12grandchildren/",
			PILLS: "./assets/main_game/13pills/",
			DIE: "./assets/main_game/14die/",
			HOME_BUTTON: "./assets/buttons/home/",
			ARCADE_SCREEN: "./assets/_arcade/arcade_menu/",
			INSTRUMENT: "./assets/_arcade/instrument/",
			GRID_FILL: "./assets/_arcade/grid_fill/",
			DISTRACTION: "./assets/_arcade/distraction/",
			BURGER: "./assets/_arcade/burger/"
		}, exports.CONST = {
			ANALYTICS:
			{
				VERSION: "web1.1.3"
			},
			REGISTRY:
			{
				ADBLOCKENABLED: "adblockEnabled",
				SKIPUSED: "skipUsed"
			},
			GAMESTATE:
			{
				START: "START",
				PLAYING: "PLAYING",
				WIN: "WIN",
				LOSE: "LOSE",
				LOADNEXTLEVEL: "LOAD"
			},
			TAGS:
			{
				ARCADE: "ARCADE_TAG"
			},
			SCENES:
			{
				LOAD: "LOAD",
				PROGRESSIVE_LOAD: "PROGRESSIVE_LOAD",
				SOUNDTRACK: "SOUNDTRACK",
				MENU: "MENU",
				BIRTH: "BIRTH",
				TALK: "TALK",
				SCHOOL: "SCHOOL",
				PUBERTY: "PUBERTY",
				FINDHER: "FINDHER",
				BEERPONG: "BEERPONG",
				COFFEE: "COFFEE",
				MARRIAGE: "MARRIAGE",
				KIDS: "KIDS",
				MIDLIFE: "MIDLIFE",
				GRANDCHILDREN: "GRANDCHILDREN",
				PILLS: "PILLS",
				DIE: "DIE",
				CREDITS: "CREDITS",
				ARCADE: "ARCADE_SCREEN",
				ARCADE_MINIGAME_LOADING: "ARCADE_MINIGAME_LOADING",
				INSTRUMENT: "INSTRUMENT",
				GRID_FILL: "GRID_FILL",
				DISTRACTION: "DISTRACTION",
				BURGER: "BURGER"
			},
			STORAGE_KEYS:
			{
				PROGRESS: "game_progress"
			},
			AUDIO:
			{
				SOUNDTRACK: exports.ASSETSPATH.AUDIO + "soundtrack.mp3",
				SOUNDTRACK_SHORT: exports.ASSETSPATH.AUDIO + "soundtrackShort.mp3",
				GRAB: exports.ASSETSPATH.AUDIO + "paperGrab.mp3",
				POP: exports.ASSETSPATH.AUDIO + "pop.mp3",
				TALK: exports.ASSETSPATH.AUDIO + "talking.mp3",
				CRY: exports.ASSETSPATH.AUDIO + "babyCry.mp3",
				BOUNCE: exports.ASSETSPATH.AUDIO + "bounce.mp3",
				DIESONG: exports.ASSETSPATH.AUDIO + "funeralsong.mp3",
				LIGHTNING: exports.ASSETSPATH.AUDIO + "lightningStrike.mp3",
				NOOO: exports.ASSETSPATH.AUDIO + "noooo.mp3",
				INSTRUMENT_1: exports.ASSETSPATH.AUDIO + "instrument/1.mp3",
				INSTRUMENT_2: exports.ASSETSPATH.AUDIO + "instrument/2.mp3",
				INSTRUMENT_3: exports.ASSETSPATH.AUDIO + "instrument/3.mp3",
				INSTRUMENT_4: exports.ASSETSPATH.AUDIO + "instrument/4.mp3",
				INSTRUMENT_5: exports.ASSETSPATH.AUDIO + "instrument/5.mp3",
				INSTRUMENT_6: exports.ASSETSPATH.AUDIO + "instrument/6.mp3",
				INSTRUMENT_7: exports.ASSETSPATH.AUDIO + "instrument/7.mp3",
				FLASH: exports.ASSETSPATH.AUDIO + "arcade/flash.mp3",
				HELLO: exports.ASSETSPATH.AUDIO + "arcade/hello.mp3",
				INSTRUMENT_FAIL: exports.ASSETSPATH.AUDIO + "arcade/instrument-fail.mp3",
				LOSE: exports.ASSETSPATH.AUDIO + "arcade/lose.mp3",
				PING_1: exports.ASSETSPATH.AUDIO + "arcade/ping-1.mp3",
				PING_2: exports.ASSETSPATH.AUDIO + "arcade/ping-2.mp3",
				TRASH: exports.ASSETSPATH.AUDIO + "arcade/trash.mp3",
				TV_OFF: exports.ASSETSPATH.AUDIO + "arcade/tv-turn-off.mp3",
				TV_ON: exports.ASSETSPATH.AUDIO + "arcade/tv-turn-on.mp3",
				VIBRATE: exports.ASSETSPATH.AUDIO + "arcade/vibrate.mp3",
				WIN: exports.ASSETSPATH.AUDIO + "arcade/win.mp3"
			},
			GENERIC:
			{
				TUTORIAL_HAND: exports.ASSETSPATH.GENERIC + "tutorialHand.png"
			},
			BUTTONS:
			{
				TRYAGAIN: exports.ASSETSPATH.BUTTONS + "try_again.png",
				SKIP: exports.ASSETSPATH.BUTTONS + "skip.png",
				SPINNER: exports.ASSETSPATH.BUTTONS + "spinner.png",
				ORANGE: exports.ASSETSPATH.BUTTONS + "orange.png",
				PURPLE: exports.ASSETSPATH.BUTTONS + "purple.png",
				RED: exports.ASSETSPATH.BUTTONS + "red.png",
				BACK: exports.ASSETSPATH.BUTTONS + "back.png",
				SOUND_ON: exports.ASSETSPATH.BUTTONS + "sound-on.png",
				SOUND_OFF: exports.ASSETSPATH.BUTTONS + "sound-off.png"
			},
			FONT:
			{
				ATLAS: exports.ASSETSPATH.FONTS + "blogger.png",
				XML: exports.ASSETSPATH.FONTS + "blogger.xml"
			},
			ANIMATIONS:
			{
				SCHOOLEND: exports.ASSETSPATH.ANIMATIONS + "schoolEnd.json",
				PUBERTYEND: exports.ASSETSPATH.ANIMATIONS + "pubertyEnd.json",
				COFFEEEND: exports.ASSETSPATH.ANIMATIONS + "coffeeEnd.json",
				FINDHEREND: exports.ASSETSPATH.ANIMATIONS + "findherEnd.json",
				MARRIAGEFROWN: exports.ASSETSPATH.ANIMATIONS + "marriageFrown.json",
				MARRIAGEWIN: exports.ASSETSPATH.ANIMATIONS + "marriageWin.json",
				DADHEAD: exports.ASSETSPATH.ANIMATIONS + "daddyHead.json",
				KIDSSHOOTBABY: exports.ASSETSPATH.ANIMATIONS + "kidsShootBaby.json",
				MIDLIFELEFTFOOT: exports.ASSETSPATH.ANIMATIONS + "midlifeLeftFoot.json",
				MIDLIFERIGHTFOOT: exports.ASSETSPATH.ANIMATIONS + "midlifeRightFoot.json",
				MIDLIFEWIN: exports.ASSETSPATH.ANIMATIONS + "midlifeWin.json",
				GRANDPAMOVE: exports.ASSETSPATH.ANIMATIONS + "grandpaMove.json",
				GRANDPALEFTHAND: exports.ASSETSPATH.ANIMATIONS + "grandpaLeftHand.json",
				GRANDPARIGHTHAND: exports.ASSETSPATH.ANIMATIONS + "grandpaRightHand.json",
				KIDTORSO: exports.ASSETSPATH.ANIMATIONS + "kidTorso.json",
				KIDLEFTLEG: exports.ASSETSPATH.ANIMATIONS + "kidLeftLeg.json",
				KIDRIGHTLEG: exports.ASSETSPATH.ANIMATIONS + "kidRightLeg.json",
				KIDDIEFIRE: exports.ASSETSPATH.ANIMATIONS + "dieFire.json",
				KIDDIEELECTRIC: exports.ASSETSPATH.ANIMATIONS + "dieElectric.json",
				PILLSEND: exports.ASSETSPATH.ANIMATIONS + "pillsEnd.json"
			},
			PHYSICS:
			{
				PILLS: exports.ASSETSPATH.PHYSICS + "PillsShapes.json",
				BEERPONG: exports.ASSETSPATH.PHYSICS + "beerpongShapes.json"
			},
			MENU:
			{
				BACKGROUND: exports.ASSETSPATH.MENU + "background.png",
				CLOUDS: exports.ASSETSPATH.MENU + "clouds.png",
				NATURE: exports.ASSETSPATH.MENU + "nature.png",
				TITLE_TEXT: exports.ASSETSPATH.MENU + "title_text.png",
				CHARACTER: exports.ASSETSPATH.MENU + "character.png"
			},
			HOME_BUTTON:
			{
				BACKGROUND: exports.ASSETSPATH.HOME_BUTTON + "bg.png",
				CHECK: exports.ASSETSPATH.HOME_BUTTON + "check.png",
				CHECK_HIGHLIGHT: exports.ASSETSPATH.HOME_BUTTON + "check_highlight.png",
				X: exports.ASSETSPATH.HOME_BUTTON + "x.png",
				X_HIGHLIGHT: exports.ASSETSPATH.HOME_BUTTON + "x_highlight.png",
				HIGHLIGHT: exports.ASSETSPATH.HOME_BUTTON + "highlight.png",
				NORMAL: exports.ASSETSPATH.HOME_BUTTON + "normal.png"
			},
			BIRTH:
			{
				BACKGROUND: exports.ASSETSPATH.BIRTH + "background.png",
				BABY: exports.ASSETSPATH.BIRTH + "baby.png",
				CLICKER: exports.ASSETSPATH.BIRTH + "clicker.png",
				MAMICA1: exports.ASSETSPATH.BIRTH + "mamica-1.png",
				MAMICA2: exports.ASSETSPATH.BIRTH + "mamica-2.png",
				MAMICA3: exports.ASSETSPATH.BIRTH + "mamica-3.png",
				MAMICA4: exports.ASSETSPATH.BIRTH + "mamica-4.png",
				MAMICA5: exports.ASSETSPATH.BIRTH + "mamica-5.png",
				PUSH: exports.ASSETSPATH.BIRTH + "push.png",
				STROLLER: exports.ASSETSPATH.BIRTH + "stroler.png",
				SWING: exports.ASSETSPATH.BIRTH + "swing.png",
				END: exports.ASSETSPATH.ENDSCREEN + "birth.png"
			},
			TALK:
			{
				STARTBACKGROUND: exports.ASSETSPATH.TALK + "startBackground.png",
				ENDSTRETCH: exports.ASSETSPATH.TALK + "end-stretch.png",
				ENDBACKGROUND: exports.ASSETSPATH.TALK + "end.png",
				NOTE_1: exports.ASSETSPATH.TALK + "note-1.png",
				NOTE_2: exports.ASSETSPATH.TALK + "note-2.png",
				NOTE_3: exports.ASSETSPATH.TALK + "note-3.png",
				NOTE_4: exports.ASSETSPATH.TALK + "note-4.png",
				STRETCHBACKGROUND: exports.ASSETSPATH.TALK + "stretch.png",
				TAP: exports.ASSETSPATH.TALK + "tap.png",
				SMILE: exports.ASSETSPATH.TALK + "smile.png",
				END: exports.ASSETSPATH.ENDSCREEN + "talk.png"
			},
			SCHOOL:
			{
				BACKGROUND: exports.ASSETSPATH.SCHOOL + "background.png",
				BOY: exports.ASSETSPATH.SCHOOL + "boy.png",
				NOTE_3: exports.ASSETSPATH.SCHOOL + "3.png",
				NOTE_4: exports.ASSETSPATH.SCHOOL + "4.png",
				NOTE_17: exports.ASSETSPATH.SCHOOL + "17.png",
				NOTE_20: exports.ASSETSPATH.SCHOOL + "20.png",
				NOTE_27: exports.ASSETSPATH.SCHOOL + "27.png",
				NOTE_H2NO: exports.ASSETSPATH.SCHOOL + "h2no.png",
				NOTE_YES: exports.ASSETSPATH.SCHOOL + "yes.png",
				WINIMAGE: exports.ASSETSPATH.SCHOOL + "a-plus.png",
				LOSEIMAGE: exports.ASSETSPATH.SCHOOL + "f-minus.png",
				END: exports.ASSETSPATH.ENDSCREEN + "school.png"
			},
			PUBERTY:
			{
				BACKGROUND: exports.ASSETSPATH.PUBERTY + "background-and-boy.png",
				BRACES: exports.ASSETSPATH.PUBERTY + "braces.png",
				PARTICLE: exports.ASSETSPATH.PUBERTY + "drop.png",
				PIMPLE: exports.ASSETSPATH.PUBERTY + "little-pimple.png",
				POP_TEXT: exports.ASSETSPATH.PUBERTY + "pop.png",
				END: exports.ASSETSPATH.ENDSCREEN + "puberty.png"
			},
			FINDHER:
			{
				FOREGROUND: exports.ASSETSPATH.FINDHER + "findher.png",
				WHITEBACKGROUND: exports.ASSETSPATH.FINDHER + "white.png",
				SWIPETEXT: exports.ASSETSPATH.FINDHER + "swipe.png",
				LIKE_OVERLAY: exports.ASSETSPATH.FINDHER + "LIKE.png",
				NOPE_OVERLAY: exports.ASSETSPATH.FINDHER + "NOPE.png",
				CUTIE_1: exports.ASSETSPATH.FINDHER + "cutie-1.png",
				CUTIE_2: exports.ASSETSPATH.FINDHER + "cutie-2.png",
				CUTIE_3: exports.ASSETSPATH.FINDHER + "cutie-3.png",
				NOTCUTE_1: exports.ASSETSPATH.FINDHER + "not-so-cute-1.png",
				NOTCUTE_2: exports.ASSETSPATH.FINDHER + "not-so-cute-2.png",
				ZOIDBERG: exports.ASSETSPATH.FINDHER + "zoidberg.png",
				WINIMAGE: exports.ASSETSPATH.FINDHER + "its-a-match.png",
				WRONG_1: exports.ASSETSPATH.FINDHER + "tindher-wrong.png",
				WRONG_2: exports.ASSETSPATH.FINDHER + "wrong-2-tindher.png",
				WRONG_3: exports.ASSETSPATH.FINDHER + "tindher-wrong-3.png",
				WRONG_4: exports.ASSETSPATH.FINDHER + "tindher-wrong-4.png"
			},
			BEERPONG:
			{
				BACKGROUND: exports.ASSETSPATH.BEERPONG + "background.png",
				DUNKTEXT: exports.ASSETSPATH.BEERPONG + "dunk-it.png",
				CUP_FRONT: exports.ASSETSPATH.BEERPONG + "FRONT.png",
				CUP_BACK: exports.ASSETSPATH.BEERPONG + "BACK.png",
				BALL: exports.ASSETSPATH.BEERPONG + "ball.png",
				BLACK_CIRCLE: exports.ASSETSPATH.BEERPONG + "blackCircle.png",
				END: exports.ASSETSPATH.ENDSCREEN + "beerpong.png"
			},
			COFFEE:
			{
				BACKGROUND: exports.ASSETSPATH.COFFEE + "background.png",
				MAKECOFFEETEXT: exports.ASSETSPATH.COFFEE + "make-coffee.png",
				CUP_CHEESE: exports.ASSETSPATH.COFFEE + "cheese-cup.png",
				NORMAL_CHEESE: exports.ASSETSPATH.COFFEE + "cheese-normal.png",
				CUP_COFFEE: exports.ASSETSPATH.COFFEE + "coffee-cup.png",
				NORMAL_COFFEE: exports.ASSETSPATH.COFFEE + "coffee.png",
				CUP_EGG: exports.ASSETSPATH.COFFEE + "egg-cup.png",
				NORMAL_EGG: exports.ASSETSPATH.COFFEE + "egg.png",
				CUP_MILK: exports.ASSETSPATH.COFFEE + "milk-cup.png",
				NORMAL_MILK: exports.ASSETSPATH.COFFEE + "milk.png",
				CUP_PEPPER: exports.ASSETSPATH.COFFEE + "pepper-cup.png",
				NORMAL_PEPPER: exports.ASSETSPATH.COFFEE + "pepper.png",
				CUP_SALT: exports.ASSETSPATH.COFFEE + "salt-cup.png",
				NORMAL_SALT: exports.ASSETSPATH.COFFEE + "salt.png",
				CUP_SCREW: exports.ASSETSPATH.COFFEE + "screw-cup.png",
				NORMAL_SCREW: exports.ASSETSPATH.COFFEE + "screw.png",
				CUP_SUGAR: exports.ASSETSPATH.COFFEE + "sugar-cup.png",
				NORMAL_SUGAR: exports.ASSETSPATH.COFFEE + "sugar.png",
				CUP_TOMATO: exports.ASSETSPATH.COFFEE + "tomato-cup.png",
				NORMAL_TOMATO: exports.ASSETSPATH.COFFEE + "tomato.png",
				WINIMAGE: exports.ASSETSPATH.COFFEE + "coffee-right-01.png",
				LOSEIMAGE: exports.ASSETSPATH.COFFEE + "coffee-wrong-boss.png",
				END: exports.ASSETSPATH.ENDSCREEN + "coffee.png"
			},
			MARRIAGE:
			{
				BACKGROUND: exports.ASSETSPATH.MARRIAGE + "background.png",
				BACKGROUND_OVERLAY: exports.ASSETSPATH.MARRIAGE + "suit-up-2.png",
				HANDS: exports.ASSETSPATH.MARRIAGE + "hands.png",
				PANTS_1: exports.ASSETSPATH.MARRIAGE + "pants-1.png",
				PANTS_2: exports.ASSETSPATH.MARRIAGE + "pants-2.png",
				PANTS_3: exports.ASSETSPATH.MARRIAGE + "pants-3.png",
				PANTS_4: exports.ASSETSPATH.MARRIAGE + "pants-4.png",
				PANTS_5: exports.ASSETSPATH.MARRIAGE + "pants-5.png",
				SHIRT_1: exports.ASSETSPATH.MARRIAGE + "shirt-1-no-sleve.png",
				SHIRT_2: exports.ASSETSPATH.MARRIAGE + "shirt-2.png",
				SHIRT_3: exports.ASSETSPATH.MARRIAGE + "shirt-3.png",
				SHIRT_4: exports.ASSETSPATH.MARRIAGE + "shirt-4.png",
				SHIRT_5: exports.ASSETSPATH.MARRIAGE + "shirt-5.png",
				SHOES_1: exports.ASSETSPATH.MARRIAGE + "shoes-1.png",
				SHOES_2: exports.ASSETSPATH.MARRIAGE + "shoes-2.png",
				SHOES_3: exports.ASSETSPATH.MARRIAGE + "shoes-3.png",
				SLEEVE: exports.ASSETSPATH.MARRIAGE + "sleve.png",
				WINIMAGE: exports.ASSETSPATH.MARRIAGE + "married.png",
				END: exports.ASSETSPATH.ENDSCREEN + "marriage.png"
			},
			KIDS:
			{
				BABY_2: exports.ASSETSPATH.KIDS + "baby-2.png",
				BABY_3: exports.ASSETSPATH.KIDS + "baby-3.png",
				BABY_4: exports.ASSETSPATH.KIDS + "baby-4.png",
				MAMICA1: exports.ASSETSPATH.KIDS + "birth.png",
				MAMICA2: exports.ASSETSPATH.KIDS + "birth-2.png",
				MAMICA3: exports.ASSETSPATH.KIDS + "birth-3.png",
				MAMICA4: exports.ASSETSPATH.KIDS + "birth-4.png",
				MAMICA5: exports.ASSETSPATH.KIDS + "birth-5.png",
				DADBOD: exports.ASSETSPATH.KIDS + "body.png",
				DADHEAD: exports.ASSETSPATH.KIDS + "head.png",
				TEXT_1: exports.ASSETSPATH.KIDS + "TEXT-1.png",
				TEXT_2: exports.ASSETSPATH.KIDS + "TEXT-2.png",
				TEXT_3: exports.ASSETSPATH.KIDS + "TEXT-3.png",
				TEXT_4: exports.ASSETSPATH.KIDS + "TEXT-4.png",
				TEXT_5: exports.ASSETSPATH.KIDS + "TEXT-5.png",
				END: exports.ASSETSPATH.ENDSCREEN + "kids.png"
			},
			MIDLIFE:
			{
				BACKGROUND: exports.ASSETSPATH.MIDLIFE + "background.png",
				ENDLESSBACKGROUND: exports.ASSETSPATH.MIDLIFE + "endless.png",
				PICKTEXT: exports.ASSETSPATH.MIDLIFE + "pick-drop.png",
				BODY: exports.ASSETSPATH.MIDLIFE + "body.png",
				FEET: exports.ASSETSPATH.MIDLIFE + "feet-one.png",
				HEAD: exports.ASSETSPATH.MIDLIFE + "head.png",
				LIST: exports.ASSETSPATH.MIDLIFE + "list.png",
				BEER: exports.ASSETSPATH.MIDLIFE + "beer.png",
				CANDY: exports.ASSETSPATH.MIDLIFE + "candy.png",
				CAR: exports.ASSETSPATH.MIDLIFE + "car.png",
				CD: exports.ASSETSPATH.MIDLIFE + "cd.png",
				PANTIES: exports.ASSETSPATH.MIDLIFE + "panties.png",
				TICKET: exports.ASSETSPATH.MIDLIFE + "ticket.png",
				WEIGHTS: exports.ASSETSPATH.MIDLIFE + "weights.png",
				WINIMAGE: exports.ASSETSPATH.MIDLIFE + "midlife-happy.png",
				ENDEVERYTHING: exports.ASSETSPATH.MIDLIFE + "endEverything.png",
				END: exports.ASSETSPATH.MIDLIFE + "end.png"
			},
			GRANDCHILDREN:
			{
				BACKGROUND: exports.ASSETSPATH.GRANDCHILDREN + "background.png",
				DRAGTEXT: exports.ASSETSPATH.GRANDCHILDREN + "drag-drop-2.png",
				HANDS_LEFT: exports.ASSETSPATH.GRANDCHILDREN + "hands-left.png",
				HANDS_RIGHT: exports.ASSETSPATH.GRANDCHILDREN + "hands-right.png",
				GRANDPA: exports.ASSETSPATH.GRANDCHILDREN + "grandpa.png",
				KID1: exports.ASSETSPATH.GRANDCHILDREN + "kid-1.png",
				KID2: exports.ASSETSPATH.GRANDCHILDREN + "kid-2.png",
				KID3: exports.ASSETSPATH.GRANDCHILDREN + "kid-3.png",
				END: exports.ASSETSPATH.ENDSCREEN + "grandchildren.png"
			},
			PILLS:
			{
				BACKGROUND: exports.ASSETSPATH.PILLS + "background.png",
				BOX1: exports.ASSETSPATH.PILLS + "box.png",
				BOX2: exports.ASSETSPATH.PILLS + "box-2.png",
				BOX3: exports.ASSETSPATH.PILLS + "box-3.png",
				BIGBOX: exports.ASSETSPATH.PILLS + "big-box.png",
				PILL1: exports.ASSETSPATH.PILLS + "pill-1.png",
				PILL2: exports.ASSETSPATH.PILLS + "pill-2.png",
				PILL3: exports.ASSETSPATH.PILLS + "pill-3.png",
				GRANDPA: exports.ASSETSPATH.PILLS + "grandpa.png",
				SORTTEXT: exports.ASSETSPATH.PILLS + "sort.png",
				TABLE: exports.ASSETSPATH.PILLS + "table.png",
				END: exports.ASSETSPATH.ENDSCREEN + "pills.png"
			},
			DIE:
			{
				BACKGROUND: exports.ASSETSPATH.DIE + "Death.png",
				END: exports.ASSETSPATH.DIE + "end.png"
			},
			CREDITS:
			{
				END: exports.ASSETSPATH.ENDSCREEN + "credits.png"
			},
			ARCADE_SCREEN:
			{
				BACKGROUND: exports.ASSETSPATH.ARCADE_SCREEN + "background.png",
				DARK_LAYER: exports.ASSETSPATH.ARCADE_SCREEN + "dark.png",
				HOME_BUTTON: exports.ASSETSPATH.ARCADE_SCREEN + "home.png",
				NEW: exports.ASSETSPATH.ARCADE_SCREEN + "new.png",
				BURGER: exports.ASSETSPATH.ARCADE_SCREEN + "burger.png",
				BURGER_SELECTED: exports.ASSETSPATH.ARCADE_SCREEN + "burger_selected.png",
				INSTRUMENT: exports.ASSETSPATH.ARCADE_SCREEN + "instrument.png",
				INSTRUMENT_SELECTED: exports.ASSETSPATH.ARCADE_SCREEN + "instrument_selected.png",
				GRIDFILL: exports.ASSETSPATH.ARCADE_SCREEN + "gridfill.png",
				GRIDFILL_SELECTED: exports.ASSETSPATH.ARCADE_SCREEN + "gridfill_selected.png",
				DISTRACTION: exports.ASSETSPATH.ARCADE_SCREEN + "distraction.png",
				DISTRACTION_SELECTED: exports.ASSETSPATH.ARCADE_SCREEN + "distraction_selected.png",
				MAIN_GAME: exports.ASSETSPATH.ARCADE_SCREEN + "main_game.png",
				MAIN_GAME_SELECTED: exports.ASSETSPATH.ARCADE_SCREEN + "main_game_selected.png",
				NEW_LEVELS: exports.ASSETSPATH.ARCADE_SCREEN + "new_levels.png"
			},
			INSTRUMENT:
			{
				BACKGROUND: exports.ASSETSPATH.INSTRUMENT + "bg.png",
				CHARACTER_BODY: exports.ASSETSPATH.INSTRUMENT + "char.png",
				CHARACTER_HEAD: exports.ASSETSPATH.INSTRUMENT + "char-head.png",
				HAND_LEFT: exports.ASSETSPATH.INSTRUMENT + "handLeft.png",
				HAND_RIGHT_TOP: exports.ASSETSPATH.INSTRUMENT + "handRightTop.png",
				HAND_RIGHT_BOTTOM: exports.ASSETSPATH.INSTRUMENT + "handRightBottom.png",
				TABLE: exports.ASSETSPATH.INSTRUMENT + "table.png",
				HEART: exports.ASSETSPATH.INSTRUMENT + "heart_full.png",
				HEART_EMPTY: exports.ASSETSPATH.INSTRUMENT + "heart_empty.png",
				BAR_WHITE_1: exports.ASSETSPATH.INSTRUMENT + "white/1.png",
				BAR_WHITE_2: exports.ASSETSPATH.INSTRUMENT + "white/2.png",
				BAR_WHITE_3: exports.ASSETSPATH.INSTRUMENT + "white/3.png",
				BAR_WHITE_4: exports.ASSETSPATH.INSTRUMENT + "white/4.png",
				BAR_WHITE_5: exports.ASSETSPATH.INSTRUMENT + "white/5.png",
				BAR_WHITE_6: exports.ASSETSPATH.INSTRUMENT + "white/6.png",
				BAR_WHITE_7: exports.ASSETSPATH.INSTRUMENT + "white/7.png",
				BAR_DARK_1: exports.ASSETSPATH.INSTRUMENT + "dark/1.png",
				BAR_DARK_2: exports.ASSETSPATH.INSTRUMENT + "dark/2.png",
				BAR_DARK_3: exports.ASSETSPATH.INSTRUMENT + "dark/3.png",
				BAR_DARK_4: exports.ASSETSPATH.INSTRUMENT + "dark/4.png",
				BAR_DARK_5: exports.ASSETSPATH.INSTRUMENT + "dark/5.png",
				BAR_DARK_6: exports.ASSETSPATH.INSTRUMENT + "dark/6.png",
				BAR_DARK_7: exports.ASSETSPATH.INSTRUMENT + "dark/7.png",
				END: exports.ASSETSPATH.INSTRUMENT + "end/end.png",
				BACK: exports.ASSETSPATH.INSTRUMENT + "end/back.png",
				BACK_2: exports.ASSETSPATH.INSTRUMENT + "end/back_2.png",
				CONTINUE: exports.ASSETSPATH.INSTRUMENT + "end/continue.png",
				TRY_AGAIN: exports.ASSETSPATH.INSTRUMENT + "end/try_again.png",
				TRY_AGAIN_2: exports.ASSETSPATH.INSTRUMENT + "end/try_again_2.png",
				NEW_BEST: exports.ASSETSPATH.INSTRUMENT + "end/new-best.png"
			},
			GRID_FILL:
			{
				BACKGROUND: exports.ASSETSPATH.GRID_FILL + "background.png",
				HANDS: exports.ASSETSPATH.GRID_FILL + "hands.png",
				CAMERA: exports.ASSETSPATH.GRID_FILL + "camera.png",
				SCREEN: exports.ASSETSPATH.GRID_FILL + "screen.png",
				BLOCK_BLUE: exports.ASSETSPATH.GRID_FILL + "blue.png",
				BLOCK_GREEN: exports.ASSETSPATH.GRID_FILL + "green.png",
				BLOCK_ORANGE: exports.ASSETSPATH.GRID_FILL + "orange.png",
				BLOCK_PURPLE: exports.ASSETSPATH.GRID_FILL + "purple.png",
				BLOCK_RED: exports.ASSETSPATH.GRID_FILL + "red.png",
				BLOCK_YELLOW: exports.ASSETSPATH.GRID_FILL + "yellow.png",
				BLOCK_GREY: exports.ASSETSPATH.GRID_FILL + "grey.png",
				END: exports.ASSETSPATH.GRID_FILL + "end_screen/end.png",
				BACK: exports.ASSETSPATH.GRID_FILL + "end_screen/back.png",
				CONTINUE: exports.ASSETSPATH.GRID_FILL + "end_screen/continue.png",
				NEW_BEST: exports.ASSETSPATH.GRID_FILL + "end_screen/new_best.png",
				TRY_AGAIN: exports.ASSETSPATH.GRID_FILL + "end_screen/try_again.png",
				TRY_AGAIN_2: exports.ASSETSPATH.GRID_FILL + "end_screen/try_again_2.png",
				ARCADE: exports.ASSETSPATH.GRID_FILL + "end_screen/arcade.png",
				COUNTDOWN_1: exports.ASSETSPATH.GRID_FILL + "countdown/slider1.png",
				COUNTDOWN_2: exports.ASSETSPATH.GRID_FILL + "countdown/slider2.png",
				COUNTDOWN_3: exports.ASSETSPATH.GRID_FILL + "countdown/slider3.png"
			},
			DISTRACTION:
			{
				BACKGROUND: exports.ASSETSPATH.DISTRACTION + "background.png",
				WINDOW_BACK: exports.ASSETSPATH.DISTRACTION + "window_back.png",
				WINDOW_FRONT: exports.ASSETSPATH.DISTRACTION + "window_front.png",
				CHARACTER: exports.ASSETSPATH.DISTRACTION + "character.png",
				ARM: exports.ASSETSPATH.DISTRACTION + "arm.png",
				HAND: exports.ASSETSPATH.DISTRACTION + "hand.png",
				CLOUD: exports.ASSETSPATH.DISTRACTION + "cloud.png",
				PHONE: exports.ASSETSPATH.DISTRACTION + "phone/phone.png",
				PHONE_BUZZ_1: exports.ASSETSPATH.DISTRACTION + "phone/phone_buzz_1.png",
				PHONE_BUZZ_2: exports.ASSETSPATH.DISTRACTION + "phone/phone_buzz_2.png",
				PHONE_MESSAGE_1: exports.ASSETSPATH.DISTRACTION + "phone/phone_message_1.png",
				PHONE_MESSAGE_2: exports.ASSETSPATH.DISTRACTION + "phone/phone_message_2.png",
				PHONE_MESSAGE_3: exports.ASSETSPATH.DISTRACTION + "phone/phone_message_3.png",
				PHONE_SHADOW: exports.ASSETSPATH.DISTRACTION + "phone/phone_shadow.png",
				TV_TEXT_0: exports.ASSETSPATH.DISTRACTION + "tv/0.png",
				TV_TEXT_1: exports.ASSETSPATH.DISTRACTION + "tv/1.png",
				TV_TEXT_2: exports.ASSETSPATH.DISTRACTION + "tv/2.png",
				TV_TEXT_3: exports.ASSETSPATH.DISTRACTION + "tv/3.png",
				TV_TEXT_4: exports.ASSETSPATH.DISTRACTION + "tv/4.png",
				TV_PADDLE: exports.ASSETSPATH.DISTRACTION + "tv/rectangle.png",
				TV_BALL: exports.ASSETSPATH.DISTRACTION + "tv/tv-ball.png",
				TV_SCREEN_DARK: exports.ASSETSPATH.DISTRACTION + "tv/dark_screen.png",
				TV_SCREEN_LIGHT: exports.ASSETSPATH.DISTRACTION + "tv/light-screen.png",
				WINDOW_HAND: exports.ASSETSPATH.DISTRACTION + "window/waving-hand.png",
				WINDOW_CHARACTER: exports.ASSETSPATH.DISTRACTION + "window/window_character.png",
				BALL_1: exports.ASSETSPATH.DISTRACTION + "ball/ball_1.png",
				BALL_2: exports.ASSETSPATH.DISTRACTION + "ball/ball_2.png",
				BALL_3: exports.ASSETSPATH.DISTRACTION + "ball/ball_3.png",
				BALL_4: exports.ASSETSPATH.DISTRACTION + "ball/ball_4.png",
				BALL_5: exports.ASSETSPATH.DISTRACTION + "ball/ball_5.png",
				BALL_6: exports.ASSETSPATH.DISTRACTION + "ball/ball_6.png",
				END: exports.ASSETSPATH.DISTRACTION + "end/end.png",
				BACK: exports.ASSETSPATH.DISTRACTION + "end/back.png",
				BACK_2: exports.ASSETSPATH.DISTRACTION + "end/back_2.png",
				CONTINUE: exports.ASSETSPATH.DISTRACTION + "end/continue.png",
				TRY_AGAIN: exports.ASSETSPATH.DISTRACTION + "end/try_again.png",
				TRY_AGAIN_2: exports.ASSETSPATH.DISTRACTION + "end/try_again_2.png",
				NEW_BEST: exports.ASSETSPATH.DISTRACTION + "end/new-best.png",
				COUNTDOWN_1: exports.ASSETSPATH.DISTRACTION + "countdown/slider1.png",
				COUNTDOWN_2: exports.ASSETSPATH.DISTRACTION + "countdown/slider2.png",
				COUNTDOWN_3: exports.ASSETSPATH.DISTRACTION + "countdown/slider3.png"
			},
			BURGER:
			{
				BACKGROUND: exports.ASSETSPATH.BURGER + "background.png",
				ROPE: exports.ASSETSPATH.BURGER + "rope.png",
				BOARD: exports.ASSETSPATH.BURGER + "board.png",
				HAND: exports.ASSETSPATH.BURGER + "hand.png",
				PLATE: exports.ASSETSPATH.BURGER + "plate.png",
				PLATE_OUTLINE: exports.ASSETSPATH.BURGER + "plate_outline.png",
				TRASH: exports.ASSETSPATH.BURGER + "trash.png",
				TRASH_OUTLINE: exports.ASSETSPATH.BURGER + "trash_outline.png",
				TRASH_TOP: exports.ASSETSPATH.BURGER + "trash_top.png",
				TIMER: exports.ASSETSPATH.BURGER + "timer_bg.png",
				TIMER_CIRCLE: exports.ASSETSPATH.BURGER + "circle_white.png",
				PAPER: exports.ASSETSPATH.BURGER + "paper/paper.png",
				I_BUN_BOTTOM: exports.ASSETSPATH.BURGER + "ingredients/bun_bottom.png",
				I_BUN_TOP: exports.ASSETSPATH.BURGER + "ingredients/bun_top.png",
				I_CHEESE: exports.ASSETSPATH.BURGER + "ingredients/cheese.png",
				I_EGGS: exports.ASSETSPATH.BURGER + "ingredients/eggs.png",
				I_LETTUCE: exports.ASSETSPATH.BURGER + "ingredients/lettuce.png",
				I_PATTY: exports.ASSETSPATH.BURGER + "ingredients/patty.png",
				I_TOMATO: exports.ASSETSPATH.BURGER + "ingredients/tomato.png",
				I_S_BUN_BOTTOM: exports.ASSETSPATH.BURGER + "ingredients/shadow/bun_bottom.png",
				I_S_BUN_TOP: exports.ASSETSPATH.BURGER + "ingredients/shadow/bun_top.png",
				I_S_CHEESE: exports.ASSETSPATH.BURGER + "ingredients/shadow/cheese.png",
				I_S_EGGS: exports.ASSETSPATH.BURGER + "ingredients/shadow/eggs.png",
				I_S_LETTUCE: exports.ASSETSPATH.BURGER + "ingredients/shadow/lettuce.png",
				I_S_PATTY: exports.ASSETSPATH.BURGER + "ingredients/shadow/patty.png",
				I_S_TOMATO: exports.ASSETSPATH.BURGER + "ingredients/shadow/tomato.png",
				P_S_BUN_BOTTOM: exports.ASSETSPATH.BURGER + "paper/saturated/bun_bottom.png",
				P_S_BUN_TOP: exports.ASSETSPATH.BURGER + "paper/saturated/bun_top.png",
				P_S_CHEESE: exports.ASSETSPATH.BURGER + "paper/saturated/cheese.png",
				P_S_EGGS: exports.ASSETSPATH.BURGER + "paper/saturated/egg.png",
				P_S_LETTUCE: exports.ASSETSPATH.BURGER + "paper/saturated/salad.png",
				P_S_PATTY: exports.ASSETSPATH.BURGER + "paper/saturated/patty.png",
				P_S_TOMATO: exports.ASSETSPATH.BURGER + "paper/saturated/tomato.png",
				ARCADE_BUTTON: exports.ASSETSPATH.BURGER + "end/arcade_button.png",
				BACK_TO_ARCADE: exports.ASSETSPATH.BURGER + "end/back_to_arcade.png",
				BURGERS_TEXT: exports.ASSETSPATH.BURGER + "end/burgers_text.png",
				CONTINUE_BUTTON: exports.ASSETSPATH.BURGER + "end/continue_button.png",
				END: exports.ASSETSPATH.BURGER + "end/end_screen.png",
				TRY_AGAIN_BUTTON: exports.ASSETSPATH.BURGER + "end/try_again_button.png",
				TRY_AGAIN_BUTTON_2: exports.ASSETSPATH.BURGER + "end/try_again_button_2.png",
				NEW_BEST: exports.ASSETSPATH.BURGER + "end/new_best.png"
			}
		};
	},
	{}],
	"ublV": [function (require, module, exports)
	{
		"use strict";
		var e = e || function (e, n)
		{
			var t = {},
				i = t.lib = {},
				r = function () {},
				s = i.Base = {
					extend: function (e)
					{
						r.prototype = this;
						var n = new r;
						return e && n.mixIn(e), n.hasOwnProperty("init") || (n.init = function ()
						{
							n.$super.init.apply(this, arguments)
						}), n.init.prototype = n, n.$super = this, n
					},
					create: function ()
					{
						var e = this.extend();
						return e.init.apply(e, arguments), e
					},
					init: function () {},
					mixIn: function (e)
					{
						for (var n in e) e.hasOwnProperty(n) && (this[n] = e[n]);
						e.hasOwnProperty("toString") && (this.toString = e.toString)
					},
					clone: function ()
					{
						return this.init.prototype.extend(this)
					}
				},
				o = i.WordArray = s.extend(
				{
					init: function (e, n)
					{
						e = this.words = e || [], this.sigBytes = null != n ? n : 4 * e.length
					},
					toString: function (e)
					{
						return (e || d).stringify(this)
					},
					concat: function (e)
					{
						var n = this.words,
							t = e.words,
							i = this.sigBytes;
						if (e = e.sigBytes, this.clamp(), i % 4)
							for (var r = 0; r < e; r++) n[i + r >>> 2] |= (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (i + r) % 4 * 8;
						else if (65535 < t.length)
							for (r = 0; r < e; r += 4) n[i + r >>> 2] = t[r >>> 2];
						else n.push.apply(n, t);
						return this.sigBytes += e, this
					},
					clamp: function ()
					{
						var n = this.words,
							t = this.sigBytes;
						n[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, n.length = e.ceil(t / 4)
					},
					clone: function ()
					{
						var e = s.clone.call(this);
						return e.words = this.words.slice(0), e
					},
					random: function (n)
					{
						for (var t = [], i = 0; i < n; i += 4) t.push(4294967296 * e.random() | 0);
						return new o.init(t, n)
					}
				}),
				a = t.enc = {},
				d = a.Hex = {
					stringify: function (e)
					{
						var n = e.words;
						e = e.sigBytes;
						for (var t = [], i = 0; i < e; i++)
						{
							var r = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
							t.push((r >>> 4).toString(16)), t.push((15 & r).toString(16))
						}
						return t.join("")
					},
					parse: function (e)
					{
						for (var n = e.length, t = [], i = 0; i < n; i += 2) t[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
						return new o.init(t, n / 2)
					}
				},
				u = a.Latin1 = {
					stringify: function (e)
					{
						var n = e.words;
						e = e.sigBytes;
						for (var t = [], i = 0; i < e; i++) t.push(String.fromCharCode(n[i >>> 2] >>> 24 - i % 4 * 8 & 255));
						return t.join("")
					},
					parse: function (e)
					{
						for (var n = e.length, t = [], i = 0; i < n; i++) t[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
						return new o.init(t, n)
					}
				},
				c = a.Utf8 = {
					stringify: function (e)
					{
						try
						{
							return decodeURIComponent(escape(u.stringify(e)))
						}
						catch (n)
						{
							throw Error("Malformed UTF-8 data")
						}
					},
					parse: function (e)
					{
						return u.parse(unescape(encodeURIComponent(e)))
					}
				},
				l = i.BufferedBlockAlgorithm = s.extend(
				{
					reset: function ()
					{
						this._data = new o.init, this._nDataBytes = 0
					},
					_append: function (e)
					{
						"string" == typeof e && (e = c.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
					},
					_process: function (n)
					{
						var t = this._data,
							i = t.words,
							r = t.sigBytes,
							s = this.blockSize,
							a = r / (4 * s);
						if (n = (a = n ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * s, r = e.min(4 * n, r), n)
						{
							for (var d = 0; d < n; d += s) this._doProcessBlock(i, d);
							d = i.splice(0, n), t.sigBytes -= r
						}
						return new o.init(d, r)
					},
					clone: function ()
					{
						var e = s.clone.call(this);
						return e._data = this._data.clone(), e
					},
					_minBufferSize: 0
				});
			i.Hasher = l.extend(
			{
				cfg: s.extend(),
				init: function (e)
				{
					this.cfg = this.cfg.extend(e), this.reset()
				},
				reset: function ()
				{
					l.reset.call(this), this._doReset()
				},
				update: function (e)
				{
					return this._append(e), this._process(), this
				},
				finalize: function (e)
				{
					return e && this._append(e), this._doFinalize()
				},
				blockSize: 16,
				_createHelper: function (e)
				{
					return function (n, t)
					{
						return new e.init(t).finalize(n)
					}
				},
				_createHmacHelper: function (e)
				{
					return function (n, t)
					{
						return new v.HMAC.init(e, t).finalize(n)
					}
				}
			});
			var v = t.algo = {};
			return t
		}(Math);
		! function (n)
		{
			for (var t = e, i = (s = t.lib).WordArray, r = s.Hasher, s = t.algo, o = [], a = [], d = function (e)
				{
					return 4294967296 * (e - (0 | e)) | 0
				}, u = 2, c = 0; 64 > c;)
			{
				var l;
				e:
				{
					l = u;
					for (var v = n.sqrt(l), g = 2; g <= v; g++)
						if (!(l % g))
						{
							l = !1;
							break e
						} l = !0
				}
				l && (8 > c && (o[c] = d(n.pow(u, .5))), a[c] = d(n.pow(u, 1 / 3)), c++), u++
			}
			var f = [];
			s = s.SHA256 = r.extend(
			{
				_doReset: function ()
				{
					this._hash = new i.init(o.slice(0))
				},
				_doProcessBlock: function (e, n)
				{
					for (var t = this._hash.words, i = t[0], r = t[1], s = t[2], o = t[3], d = t[4], u = t[5], c = t[6], l = t[7], v = 0; 64 > v; v++)
					{
						if (16 > v) f[v] = 0 | e[n + v];
						else
						{
							var g = f[v - 15],
								m = f[v - 2];
							f[v] = ((g << 25 | g >>> 7) ^ (g << 14 | g >>> 18) ^ g >>> 3) + f[v - 7] + ((m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10) + f[v - 16]
						}
						g = l + ((d << 26 | d >>> 6) ^ (d << 21 | d >>> 11) ^ (d << 7 | d >>> 25)) + (d & u ^ ~d & c) + a[v] + f[v], m = ((i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22)) + (i & r ^ i & s ^ r & s), l = c, c = u, u = d, d = o + g | 0, o = s, s = r, r = i, i = g + m | 0
					}
					t[0] = t[0] + i | 0, t[1] = t[1] + r | 0, t[2] = t[2] + s | 0, t[3] = t[3] + o | 0, t[4] = t[4] + d | 0, t[5] = t[5] + u | 0, t[6] = t[6] + c | 0, t[7] = t[7] + l | 0
				},
				_doFinalize: function ()
				{
					var e = this._data,
						t = e.words,
						i = 8 * this._nDataBytes,
						r = 8 * e.sigBytes;
					return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = n.floor(i / 4294967296), t[15 + (r + 64 >>> 9 << 4)] = i, e.sigBytes = 4 * t.length, this._process(), this._hash
				},
				clone: function ()
				{
					var e = r.clone.call(this);
					return e._hash = this._hash.clone(), e
				}
			});
			t.SHA256 = r._createHelper(s), t.HmacSHA256 = r._createHmacHelper(s)
		}(Math),
		function ()
		{
			var n = e,
				t = n.enc.Utf8;
			n.algo.HMAC = n.lib.Base.extend(
			{
				init: function (e, n)
				{
					e = this._hasher = new e.init, "string" == typeof n && (n = t.parse(n));
					var i = e.blockSize,
						r = 4 * i;
					n.sigBytes > r && (n = e.finalize(n)), n.clamp();
					for (var s = this._oKey = n.clone(), o = this._iKey = n.clone(), a = s.words, d = o.words, u = 0; u < i; u++) a[u] ^= 1549556828, d[u] ^= 909522486;
					s.sigBytes = o.sigBytes = r, this.reset()
				},
				reset: function ()
				{
					var e = this._hasher;
					e.reset(), e.update(this._iKey)
				},
				update: function (e)
				{
					return this._hasher.update(e), this
				},
				finalize: function (e)
				{
					var n = this._hasher;
					return e = n.finalize(e), n.reset(), n.finalize(this._oKey.clone().concat(e))
				}
			})
		}(),
		function ()
		{
			var n = e,
				t = n.lib.WordArray;
			n.enc.Base64 = {
				stringify: function (e)
				{
					var n = e.words,
						t = e.sigBytes,
						i = this._map;
					e.clamp(), e = [];
					for (var r = 0; r < t; r += 3)
						for (var s = (n[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (n[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | n[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, o = 0; 4 > o && r + .75 * o < t; o++) e.push(i.charAt(s >>> 6 * (3 - o) & 63));
					if (n = i.charAt(64))
						for (; e.length % 4;) e.push(n);
					return e.join("")
				},
				parse: function (e)
				{
					var n = e.length,
						i = this._map;
					(r = i.charAt(64)) && (-1 != (r = e.indexOf(r)) && (n = r));
					for (var r = [], s = 0, o = 0; o < n; o++)
						if (o % 4)
						{
							var a = i.indexOf(e.charAt(o - 1)) << o % 4 * 2,
								d = i.indexOf(e.charAt(o)) >>> 6 - o % 4 * 2;
							r[s >>> 2] |= (a | d) << 24 - s % 4 * 8, s++
						} return t.create(r, s)
				},
				_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
			}
		}(),
		function (e)
		{
			! function (e)
			{
				e[e.Undefined = 0] = "Undefined", e[e.Debug = 1] = "Debug", e[e.Info = 2] = "Info", e[e.Warning = 3] = "Warning", e[e.Error = 4] = "Error", e[e.Critical = 5] = "Critical"
			}(e.EGAErrorSeverity || (e.EGAErrorSeverity = {})),
			function (e)
			{
				e[e.Undefined = 0] = "Undefined", e[e.Start = 1] = "Start", e[e.Complete = 2] = "Complete", e[e.Fail = 3] = "Fail"
			}(e.EGAProgressionStatus || (e.EGAProgressionStatus = {})),
			function (e)
			{
				e[e.Undefined = 0] = "Undefined", e[e.Source = 1] = "Source", e[e.Sink = 2] = "Sink"
			}(e.EGAResourceFlowType || (e.EGAResourceFlowType = {})),
			function (e)
			{
				e[e.Undefined = 0] = "Undefined", e[e.Clicked = 1] = "Clicked", e[e.Show = 2] = "Show", e[e.FailedShow = 3] = "FailedShow", e[e.RewardReceived = 4] = "RewardReceived"
			}(e.EGAAdAction || (e.EGAAdAction = {})),
			function (e)
			{
				e[e.Undefined = 0] = "Undefined", e[e.Unknown = 1] = "Unknown", e[e.Offline = 2] = "Offline", e[e.NoFill = 3] = "NoFill", e[e.InternalError = 4] = "InternalError", e[e.InvalidRequest = 5] = "InvalidRequest", e[e.UnableToPrecache = 6] = "UnableToPrecache"
			}(e.EGAAdError || (e.EGAAdError = {})),
			function (e)
			{
				e[e.Undefined = 0] = "Undefined", e[e.Video = 1] = "Video", e[e.RewardedVideo = 2] = "RewardedVideo", e[e.Playable = 3] = "Playable", e[e.Interstitial = 4] = "Interstitial", e[e.OfferWall = 5] = "OfferWall", e[e.Banner = 6] = "Banner"
			}(e.EGAAdType || (e.EGAAdType = {})),
			function (e)
			{
				! function (e)
				{
					e[e.NoResponse = 0] = "NoResponse", e[e.BadResponse = 1] = "BadResponse", e[e.RequestTimeout = 2] = "RequestTimeout", e[e.JsonEncodeFailed = 3] = "JsonEncodeFailed", e[e.JsonDecodeFailed = 4] = "JsonDecodeFailed", e[e.InternalServerError = 5] = "InternalServerError", e[e.BadRequest = 6] = "BadRequest", e[e.Unauthorized = 7] = "Unauthorized", e[e.UnknownResponseCode = 8] = "UnknownResponseCode", e[e.Ok = 9] = "Ok", e[e.Created = 10] = "Created"
				}(e.EGAHTTPApiResponse || (e.EGAHTTPApiResponse = {}))
			}(e.http || (e.http = {})),
			function (e)
			{
				! function (e)
				{
					e[e.Undefined = 0] = "Undefined", e[e.EventValidation = 1] = "EventValidation", e[e.Database = 2] = "Database", e[e.Init = 3] = "Init", e[e.Http = 4] = "Http", e[e.Json = 5] = "Json"
				}(e.EGASdkErrorCategory || (e.EGASdkErrorCategory = {})),
				function (e)
				{
					e[e.Undefined = 0] = "Undefined", e[e.BusinessEvent = 1] = "BusinessEvent", e[e.ResourceEvent = 2] = "ResourceEvent", e[e.ProgressionEvent = 3] = "ProgressionEvent", e[e.DesignEvent = 4] = "DesignEvent", e[e.ErrorEvent = 5] = "ErrorEvent", e[e.InitHttp = 9] = "InitHttp", e[e.EventsHttp = 10] = "EventsHttp", e[e.ProcessEvents = 11] = "ProcessEvents", e[e.AddEventsToStore = 12] = "AddEventsToStore", e[e.AdEvent = 20] = "AdEvent"
				}(e.EGASdkErrorArea || (e.EGASdkErrorArea = {})),
				function (e)
				{
					e[e.Undefined = 0] = "Undefined", e[e.InvalidCurrency = 1] = "InvalidCurrency", e[e.InvalidShortString = 2] = "InvalidShortString", e[e.InvalidEventPartLength = 3] = "InvalidEventPartLength", e[e.InvalidEventPartCharacters = 4] = "InvalidEventPartCharacters", e[e.InvalidStore = 5] = "InvalidStore", e[e.InvalidFlowType = 6] = "InvalidFlowType", e[e.StringEmptyOrNull = 7] = "StringEmptyOrNull", e[e.NotFoundInAvailableCurrencies = 8] = "NotFoundInAvailableCurrencies", e[e.InvalidAmount = 9] = "InvalidAmount", e[e.NotFoundInAvailableItemTypes = 10] = "NotFoundInAvailableItemTypes", e[e.WrongProgressionOrder = 11] = "WrongProgressionOrder", e[e.InvalidEventIdLength = 12] = "InvalidEventIdLength", e[e.InvalidEventIdCharacters = 13] = "InvalidEventIdCharacters", e[e.InvalidProgressionStatus = 15] = "InvalidProgressionStatus", e[e.InvalidSeverity = 16] = "InvalidSeverity", e[e.InvalidLongString = 17] = "InvalidLongString", e[e.DatabaseTooLarge = 18] = "DatabaseTooLarge", e[e.DatabaseOpenOrCreate = 19] = "DatabaseOpenOrCreate", e[e.JsonError = 25] = "JsonError", e[e.FailHttpJsonDecode = 29] = "FailHttpJsonDecode", e[e.FailHttpJsonEncode = 30] = "FailHttpJsonEncode", e[e.InvalidAdAction = 31] = "InvalidAdAction", e[e.InvalidAdType = 32] = "InvalidAdType", e[e.InvalidString = 33] = "InvalidString"
				}(e.EGASdkErrorAction || (e.EGASdkErrorAction = {})),
				function (e)
				{
					e[e.Undefined = 0] = "Undefined", e[e.Currency = 1] = "Currency", e[e.CartType = 2] = "CartType", e[e.ItemType = 3] = "ItemType", e[e.ItemId = 4] = "ItemId", e[e.Store = 5] = "Store", e[e.FlowType = 6] = "FlowType", e[e.Amount = 7] = "Amount", e[e.Progression01 = 8] = "Progression01", e[e.Progression02 = 9] = "Progression02", e[e.Progression03 = 10] = "Progression03", e[e.EventId = 11] = "EventId", e[e.ProgressionStatus = 12] = "ProgressionStatus", e[e.Severity = 13] = "Severity", e[e.Message = 14] = "Message", e[e.AdAction = 15] = "AdAction", e[e.AdType = 16] = "AdType", e[e.AdSdkName = 17] = "AdSdkName", e[e.AdPlacement = 18] = "AdPlacement"
				}(e.EGASdkErrorParameter || (e.EGASdkErrorParameter = {}))
			}(e.events || (e.events = {}))
		}(n || (n = {}));
		var n, t = n.EGAErrorSeverity,
			i = n.EGAProgressionStatus,
			r = n.EGAResourceFlowType;
		! function (e)
		{
			! function (e)
			{
				var n;
				! function (e)
				{
					e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Info = 2] = "Info", e[e.Debug = 3] = "Debug"
				}(n || (n = {}));
				var t = function ()
				{
					function e()
					{
						e.debugEnabled = !1
					}
					return e.setInfoLog = function (n)
					{
						e.instance.infoLogEnabled = n
					}, e.setVerboseLog = function (n)
					{
						e.instance.infoLogVerboseEnabled = n
					}, e.i = function (t)
					{
						if (e.instance.infoLogEnabled)
						{
							var i = "Info/" + e.Tag + ": " + t;
							e.instance.sendNotificationMessage(i, n.Info)
						}
					}, e.w = function (t)
					{
						var i = "Warning/" + e.Tag + ": " + t;
						e.instance.sendNotificationMessage(i, n.Warning)
					}, e.e = function (t)
					{
						var i = "Error/" + e.Tag + ": " + t;
						e.instance.sendNotificationMessage(i, n.Error)
					}, e.ii = function (t)
					{
						if (e.instance.infoLogVerboseEnabled)
						{
							var i = "Verbose/" + e.Tag + ": " + t;
							e.instance.sendNotificationMessage(i, n.Info)
						}
					}, e.d = function (t)
					{
						if (e.debugEnabled)
						{
							var i = "Debug/" + e.Tag + ": " + t;
							e.instance.sendNotificationMessage(i, n.Debug)
						}
					}, e.prototype.sendNotificationMessage = function (e, t)
					{
						switch (t)
						{
						case n.Error:
							console.error(e);
							break;
						case n.Warning:
							console.warn(e);
							break;
						case n.Debug:
							"function" == typeof console.debug ? console.debug(e) : console.log(e);
							break;
						case n.Info:
							console.log(e)
						}
					}, e.instance = new e, e.Tag = "GameAnalytics", e
				}();
				e.GALogger = t
			}(e.logging || (e.logging = {}))
		}(n || (n = {})),
		function (n)
		{
			! function (t)
			{
				var i = n.logging.GALogger,
					r = function ()
					{
						function n()
						{}
						return n.getHmac = function (n, t)
						{
							var i = e.HmacSHA256(t, n);
							return e.enc.Base64.stringify(i)
						}, n.stringMatch = function (e, n)
						{
							return !(!e || !n) && n.test(e)
						}, n.joinStringArray = function (e, n)
						{
							for (var t = "", i = 0, r = e.length; i < r; i++) i > 0 && (t += n), t += e[i];
							return t
						}, n.stringArrayContainsString = function (e, n)
						{
							if (0 === e.length) return !1;
							for (var t in e)
								if (e[t] === n) return !0;
							return !1
						}, n.encode64 = function (e)
						{
							e = encodeURI(e);
							var t, i, r, s, o, a = "",
								d = 0,
								u = 0,
								c = 0;
							do {
								r = (t = e.charCodeAt(c++)) >> 2, s = (3 & t) << 4 | (i = e.charCodeAt(c++)) >> 4, o = (15 & i) << 2 | (d = e.charCodeAt(c++)) >> 6, u = 63 & d, isNaN(i) ? o = u = 64 : isNaN(d) && (u = 64), a = a + n.keyStr.charAt(r) + n.keyStr.charAt(s) + n.keyStr.charAt(o) + n.keyStr.charAt(u), t = i = d = 0, r = s = o = u = 0
							} while (c < e.length);
							return a
						}, n.decode64 = function (e)
						{
							var t, r, s, o, a = "",
								d = 0,
								u = 0,
								c = 0;
							/[^A-Za-z0-9\+\/\=]/g.exec(e) && i.w("There were invalid base64 characters in the input text. Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='. Expect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
							do {
								t = n.keyStr.indexOf(e.charAt(c++)) << 2 | (s = n.keyStr.indexOf(e.charAt(c++))) >> 4, r = (15 & s) << 4 | (o = n.keyStr.indexOf(e.charAt(c++))) >> 2, d = (3 & o) << 6 | (u = n.keyStr.indexOf(e.charAt(c++))), a += String.fromCharCode(t), 64 != o && (a += String.fromCharCode(r)), 64 != u && (a += String.fromCharCode(d)), t = r = d = 0, s = o = u = 0
							} while (c < e.length);
							return decodeURI(a)
						}, n.timeIntervalSince1970 = function ()
						{
							var e = new Date;
							return Math.round(e.getTime() / 1e3)
						}, n.createGuid = function ()
						{
							return (n.s4() + n.s4() + "-" + n.s4() + "-4" + n.s4().substr(0, 3) + "-" + n.s4() + "-" + n.s4() + n.s4() + n.s4()).toLowerCase()
						}, n.s4 = function ()
						{
							return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
						}, n.keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n
					}();
				t.GAUtilities = r
			}(n.utilities || (n.utilities = {}))
		}(n || (n = {})),
		function (e)
		{
			! function (n)
			{
				var t = e.logging.GALogger,
					i = e.utilities.GAUtilities,
					r = e.events.EGASdkErrorCategory,
					s = e.events.EGASdkErrorArea,
					o = e.events.EGASdkErrorAction,
					a = e.events.EGASdkErrorParameter,
					d = function ()
					{
						return function (e, n, t, i, r)
						{
							this.category = e, this.area = n, this.action = t, this.parameter = i, this.reason = r
						}
					}();
				n.ValidationResult = d;
				var u = function ()
				{
					function n()
					{}
					return n.validateBusinessEvent = function (e, i, u, c, l)
					{
						return n.validateCurrency(e) ? i < 0 ? (t.w("Validation fail - business event - amount. Cannot be less than 0. Failed amount: " + i), new d(r.EventValidation, s.BusinessEvent, o.InvalidAmount, a.Amount, i + "")) : n.validateShortString(u, !0) ? n.validateEventPartLength(c, !1) ? n.validateEventPartCharacters(c) ? n.validateEventPartLength(l, !1) ? n.validateEventPartCharacters(l) ? null : (t.w("Validation fail - business event - itemId: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + l), new d(r.EventValidation, s.BusinessEvent, o.InvalidEventPartCharacters, a.ItemId, l)) : (t.w("Validation fail - business event - itemId. Cannot be (null), empty or above 64 characters. String: " + l), new d(r.EventValidation, s.BusinessEvent, o.InvalidEventPartLength, a.ItemId, l)) : (t.w("Validation fail - business event - itemType: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + c), new d(r.EventValidation, s.BusinessEvent, o.InvalidEventPartCharacters, a.ItemType, c)) : (t.w("Validation fail - business event - itemType: Cannot be (null), empty or above 64 characters. String: " + c), new d(r.EventValidation, s.BusinessEvent, o.InvalidEventPartLength, a.ItemType, c)) : (t.w("Validation fail - business event - cartType. Cannot be above 32 length. String: " + u), new d(r.EventValidation, s.BusinessEvent, o.InvalidShortString, a.CartType, u)) : (t.w("Validation fail - business event - currency: Cannot be (null) and need to be A-Z, 3 characters and in the standard at openexchangerates.org. Failed currency: " + e), new d(r.EventValidation, s.BusinessEvent, o.InvalidCurrency, a.Currency, e))
					}, n.validateResourceEvent = function (u, c, l, v, g, f, m)
					{
						return u == e.EGAResourceFlowType.Undefined ? (t.w("Validation fail - resource event - flowType: Invalid flow type."), new d(r.EventValidation, s.ResourceEvent, o.InvalidFlowType, a.FlowType, "")) : c ? i.stringArrayContainsString(f, c) ? l > 0 ? v ? n.validateEventPartLength(v, !1) ? n.validateEventPartCharacters(v) ? i.stringArrayContainsString(m, v) ? n.validateEventPartLength(g, !1) ? n.validateEventPartCharacters(g) ? null : (t.w("Validation fail - resource event - itemId: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + g), new d(r.EventValidation, s.ResourceEvent, o.InvalidEventPartCharacters, a.ItemId, g)) : (t.w("Validation fail - resource event - itemId: Cannot be (null), empty or above 64 characters. String: " + g), new d(r.EventValidation, s.ResourceEvent, o.InvalidEventPartLength, a.ItemId, g)) : (t.w("Validation fail - resource event - itemType: Not found in list of pre-defined available resource itemTypes. String: " + v), new d(r.EventValidation, s.ResourceEvent, o.NotFoundInAvailableItemTypes, a.ItemType, v)) : (t.w("Validation fail - resource event - itemType: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + v), new d(r.EventValidation, s.ResourceEvent, o.InvalidEventPartCharacters, a.ItemType, v)) : (t.w("Validation fail - resource event - itemType: Cannot be (null), empty or above 64 characters. String: " + v), new d(r.EventValidation, s.ResourceEvent, o.InvalidEventPartLength, a.ItemType, v)) : (t.w("Validation fail - resource event - itemType: Cannot be (null)"), new d(r.EventValidation, s.ResourceEvent, o.StringEmptyOrNull, a.ItemType, "")) : (t.w("Validation fail - resource event - amount: Float amount cannot be 0 or negative. Value: " + l), new d(r.EventValidation, s.ResourceEvent, o.InvalidAmount, a.Amount, l + "")) : (t.w("Validation fail - resource event - currency: Not found in list of pre-defined available resource currencies. String: " + c), new d(r.EventValidation, s.ResourceEvent, o.NotFoundInAvailableCurrencies, a.Currency, c)) : (t.w("Validation fail - resource event - currency: Cannot be (null)"), new d(r.EventValidation, s.ResourceEvent, o.StringEmptyOrNull, a.Currency, ""))
					}, n.validateProgressionEvent = function (i, u, c, l)
					{
						if (i == e.EGAProgressionStatus.Undefined) return t.w("Validation fail - progression event: Invalid progression status."), new d(r.EventValidation, s.ProgressionEvent, o.InvalidProgressionStatus, a.ProgressionStatus, "");
						if (l && !c && u) return t.w("Validation fail - progression event: 03 found but 01+02 are invalid. Progression must be set as either 01, 01+02 or 01+02+03."), new d(r.EventValidation, s.ProgressionEvent, o.WrongProgressionOrder, a.Undefined, u + ":" + c + ":" + l);
						if (c && !u) return t.w("Validation fail - progression event: 02 found but not 01. Progression must be set as either 01, 01+02 or 01+02+03"), new d(r.EventValidation, s.ProgressionEvent, o.WrongProgressionOrder, a.Undefined, u + ":" + c + ":" + l);
						if (!u) return t.w("Validation fail - progression event: progression01 not valid. Progressions must be set as either 01, 01+02 or 01+02+03"), new d(r.EventValidation, s.ProgressionEvent, o.WrongProgressionOrder, a.Undefined, (u || "") + ":" + (c || "") + ":" + (l || ""));
						if (!n.validateEventPartLength(u, !1)) return t.w("Validation fail - progression event - progression01: Cannot be (null), empty or above 64 characters. String: " + u), new d(r.EventValidation, s.ProgressionEvent, o.InvalidEventPartLength, a.Progression01, u);
						if (!n.validateEventPartCharacters(u)) return t.w("Validation fail - progression event - progression01: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + u), new d(r.EventValidation, s.ProgressionEvent, o.InvalidEventPartCharacters, a.Progression01, u);
						if (c)
						{
							if (!n.validateEventPartLength(c, !0)) return t.w("Validation fail - progression event - progression02: Cannot be empty or above 64 characters. String: " + c), new d(r.EventValidation, s.ProgressionEvent, o.InvalidEventPartLength, a.Progression02, c);
							if (!n.validateEventPartCharacters(c)) return t.w("Validation fail - progression event - progression02: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + c), new d(r.EventValidation, s.ProgressionEvent, o.InvalidEventPartCharacters, a.Progression02, c)
						}
						if (l)
						{
							if (!n.validateEventPartLength(l, !0)) return t.w("Validation fail - progression event - progression03: Cannot be empty or above 64 characters. String: " + l), new d(r.EventValidation, s.ProgressionEvent, o.InvalidEventPartLength, a.Progression03, l);
							if (!n.validateEventPartCharacters(l)) return t.w("Validation fail - progression event - progression03: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " + l), new d(r.EventValidation, s.ProgressionEvent, o.InvalidEventPartCharacters, a.Progression03, l)
						}
						return null
					}, n.validateDesignEvent = function (e)
					{
						return n.validateEventIdLength(e) ? n.validateEventIdCharacters(e) ? null : (t.w("Validation fail - design event - eventId: Non valid characters. Only allowed A-z, 0-9, -_., ()!?. String: " + e), new d(r.EventValidation, s.DesignEvent, o.InvalidEventIdCharacters, a.EventId, e)) : (t.w("Validation fail - design event - eventId: Cannot be (null) or empty. Only 5 event parts allowed seperated by :. Each part need to be 32 characters or less. String: " + e), new d(r.EventValidation, s.DesignEvent, o.InvalidEventIdLength, a.EventId, e))
					}, n.validateErrorEvent = function (i, u)
					{
						return i == e.EGAErrorSeverity.Undefined ? (t.w("Validation fail - error event - severity: Severity was unsupported value."), new d(r.EventValidation, s.ErrorEvent, o.InvalidSeverity, a.Severity, "")) : n.validateLongString(u, !0) ? null : (t.w("Validation fail - error event - message: Message cannot be above 8192 characters."), new d(r.EventValidation, s.ErrorEvent, o.InvalidLongString, a.Message, u))
					}, n.validateAdEvent = function (i, u, c, l)
					{
						return i == e.EGAAdAction.Undefined ? (t.w("Validation fail - error event - severity: Severity was unsupported value."), new d(r.EventValidation, s.AdEvent, o.InvalidAdAction, a.AdAction, "")) : u == e.EGAAdType.Undefined ? (t.w("Validation fail - ad event - adType: Ad type was unsupported value."), new d(r.EventValidation, s.AdEvent, o.InvalidAdType, a.AdType, "")) : n.validateShortString(c, !1) ? n.validateString(l, !1) ? null : (t.w("Validation fail - ad event - message: Ad placement cannot be above 64 characters."), new d(r.EventValidation, s.AdEvent, o.InvalidString, a.AdPlacement, l)) : (t.w("Validation fail - ad event - message: Ad SDK name cannot be above 32 characters."), new d(r.EventValidation, s.AdEvent, o.InvalidShortString, a.AdSdkName, c))
					}, n.validateSdkErrorEvent = function (e, i, a, d, u)
					{
						return !!n.validateKeys(e, i) && (a === r.Undefined ? (t.w("Validation fail - sdk error event - type: Category was unsupported value."), !1) : d === s.Undefined ? (t.w("Validation fail - sdk error event - type: Area was unsupported value."), !1) : u !== o.Undefined || (t.w("Validation fail - sdk error event - type: Action was unsupported value."), !1))
					}, n.validateKeys = function (e, n)
					{
						return !(!i.stringMatch(e, /^[A-z0-9]{32}$/) || !i.stringMatch(n, /^[A-z0-9]{40}$/))
					}, n.validateCurrency = function (e)
					{
						return !!e && !!i.stringMatch(e, /^[A-Z]{3}$/)
					}, n.validateEventPartLength = function (e, n)
					{
						return !(!n || e) || !!e && !(e.length > 64)
					}, n.validateEventPartCharacters = function (e)
					{
						return !!i.stringMatch(e, /^[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}$/)
					}, n.validateEventIdLength = function (e)
					{
						return !!e && !!i.stringMatch(e, /^[^:]{1,64}(?::[^:]{1,64}){0,4}$/)
					}, n.validateEventIdCharacters = function (e)
					{
						return !!e && !!i.stringMatch(e, /^[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}(:[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}){0,4}$/)
					}, n.validateAndCleanInitRequestResponse = function (e, n)
					{
						if (null == e) return t.w("validateInitRequestResponse failed - no response dictionary."), null;
						var i = {};
						try
						{
							var r = e.server_ts;
							if (!(r > 0)) return t.w("validateInitRequestResponse failed - invalid value in 'server_ts' field."), null;
							i.server_ts = r
						}
						catch (u)
						{
							return t.w("validateInitRequestResponse failed - invalid type in 'server_ts' field. type=" + typeof e.server_ts + ", value=" + e.server_ts + ", " + u), null
						}
						if (n)
						{
							try
							{
								var s = e.configs;
								i.configs = s
							}
							catch (u)
							{
								return t.w("validateInitRequestResponse failed - invalid type in 'configs' field. type=" + typeof e.configs + ", value=" + e.configs + ", " + u), null
							}
							try
							{
								var o = e.configs_hash;
								i.configs_hash = o
							}
							catch (u)
							{
								return t.w("validateInitRequestResponse failed - invalid type in 'configs_hash' field. type=" + typeof e.configs_hash + ", value=" + e.configs_hash + ", " + u), null
							}
							try
							{
								var a = e.ab_id;
								i.ab_id = a
							}
							catch (u)
							{
								return t.w("validateInitRequestResponse failed - invalid type in 'ab_id' field. type=" + typeof e.ab_id + ", value=" + e.ab_id + ", " + u), null
							}
							try
							{
								var d = e.ab_variant_id;
								i.ab_variant_id = d
							}
							catch (u)
							{
								return t.w("validateInitRequestResponse failed - invalid type in 'ab_variant_id' field. type=" + typeof e.ab_variant_id + ", value=" + e.ab_variant_id + ", " + u), null
							}
						}
						return i
					}, n.validateBuild = function (e)
					{
						return !!n.validateShortString(e, !1)
					}, n.validateSdkWrapperVersion = function (e)
					{
						return !!i.stringMatch(e, /^(unity|unreal|gamemaker|cocos2d|construct|defold|godot) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/)
					}, n.validateEngineVersion = function (e)
					{
						return !(!e || !i.stringMatch(e, /^(unity|unreal|gamemaker|cocos2d|construct|defold|godot) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/))
					}, n.validateUserId = function (e)
					{
						return !!n.validateString(e, !1) || (t.w("Validation fail - user id: id cannot be (null), empty or above 64 characters."), !1)
					}, n.validateShortString = function (e, n)
					{
						return !(!n || e) || !(!e || e.length > 32)
					}, n.validateString = function (e, n)
					{
						return !(!n || e) || !(!e || e.length > 64)
					}, n.validateLongString = function (e, n)
					{
						return !(!n || e) || !(!e || e.length > 8192)
					}, n.validateConnectionType = function (e)
					{
						return i.stringMatch(e, /^(wwan|wifi|lan|offline)$/)
					}, n.validateCustomDimensions = function (e)
					{
						return n.validateArrayOfStrings(20, 32, !1, "custom dimensions", e)
					}, n.validateResourceCurrencies = function (e)
					{
						if (!n.validateArrayOfStrings(20, 64, !1, "resource currencies", e)) return !1;
						for (var r = 0; r < e.length; ++r)
							if (!i.stringMatch(e[r], /^[A-Za-z]+$/)) return t.w("resource currencies validation failed: a resource currency can only be A-Z, a-z. String was: " + e[r]), !1;
						return !0
					}, n.validateResourceItemTypes = function (e)
					{
						if (!n.validateArrayOfStrings(20, 32, !1, "resource item types", e)) return !1;
						for (var i = 0; i < e.length; ++i)
							if (!n.validateEventPartCharacters(e[i])) return t.w("resource item types validation failed: a resource item type cannot contain other characters than A-z, 0-9, -_., ()!?. String was: " + e[i]), !1;
						return !0
					}, n.validateDimension01 = function (e, n)
					{
						return !e || !!i.stringArrayContainsString(n, e)
					}, n.validateDimension02 = function (e, n)
					{
						return !e || !!i.stringArrayContainsString(n, e)
					}, n.validateDimension03 = function (e, n)
					{
						return !e || !!i.stringArrayContainsString(n, e)
					}, n.validateArrayOfStrings = function (e, n, i, r, s)
					{
						var o = r;
						if (o || (o = "Array"), !s) return t.w(o + " validation failed: array cannot be null. "), !1;
						if (0 == i && 0 == s.length) return t.w(o + " validation failed: array cannot be empty. "), !1;
						if (e > 0 && s.length > e) return t.w(o + " validation failed: array cannot exceed " + e + " values. It has " + s.length + " values."), !1;
						for (var a = 0; a < s.length; ++a)
						{
							var d = s[a] ? s[a].length : 0;
							if (0 === d) return t.w(o + " validation failed: contained an empty string. Array=" + JSON.stringify(s)), !1;
							if (n > 0 && d > n) return t.w(o + " validation failed: a string exceeded max allowed length (which is: " + n + "). String was: " + s[a]), !1
						}
						return !0
					}, n.validateClientTs = function (e)
					{
						return !(e < -4294967294 || e > 4294967294)
					}, n
				}();
				n.GAValidator = u
			}(e.validators || (e.validators = {}))
		}(n || (n = {})),
		function (e)
		{
			! function (e)
			{
				var n = function ()
				{
					return function (e, n, t)
					{
						this.name = e, this.value = n, this.version = t
					}
				}();
				e.NameValueVersion = n;
				var t = function ()
				{
					return function (e, n)
					{
						this.name = e, this.version = n
					}
				}();
				e.NameVersion = t;
				var i = function ()
				{
					function e()
					{}
					return e.touch = function () {}, e.getRelevantSdkVersion = function ()
					{
						return e.sdkGameEngineVersion ? e.sdkGameEngineVersion : e.sdkWrapperVersion
					}, e.getConnectionType = function ()
					{
						return e.connectionType
					}, e.updateConnectionType = function ()
					{
						navigator.onLine ? "ios" === e.buildPlatform || "android" === e.buildPlatform ? e.connectionType = "wwan" : e.connectionType = "lan" : e.connectionType = "offline"
					}, e.getOSVersionString = function ()
					{
						return e.buildPlatform + " " + e.osVersionPair.version
					}, e.runtimePlatformToString = function ()
					{
						return e.osVersionPair.name
					}, e.getBrowserVersionString = function ()
					{
						var n, t = navigator.userAgent,
							i = t.match(/(opera|chrome|safari|firefox|ubrowser|msie|trident|fbav(?=\/))\/?\s*(\d+)/i) || [];
						if (0 == i.length && "ios" === e.buildPlatform) return "webkit_" + e.osVersion;
						if (/trident/i.test(i[1])) return "IE " + ((n = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "");
						if ("Chrome" === i[1] && null != (n = t.match(/\b(OPR|Edge|UBrowser)\/(\d+)/))) return n.slice(1).join(" ").replace("OPR", "Opera").replace("UBrowser", "UC").toLowerCase();
						if (i[1] && "fbav" === i[1].toLowerCase() && (i[1] = "facebook", i[2])) return "facebook " + i[2];
						var r = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"];
						return null != (n = t.match(/version\/(\d+)/i)) && r.splice(1, 1, n[1]), r.join(" ").toLowerCase()
					}, e.getDeviceModel = function ()
					{
						return "unknown"
					}, e.getDeviceManufacturer = function ()
					{
						return "unknown"
					}, e.matchItem = function (e, n)
					{
						var i, r, s, o, a = new t("unknown", "0.0.0"),
							d = 0,
							u = 0;
						for (d = 0; d < n.length; d += 1)
							if (new RegExp(n[d].value, "i").test(e))
							{
								if (i = new RegExp(n[d].version + "[- /:;]([\\d._]+)", "i"), o = "", (r = e.match(i)) && r[1] && (s = r[1]), s)
								{
									var c = s.split(/[._]+/);
									for (u = 0; u < Math.min(c.length, 3); u += 1) o += c[u] + (u < Math.min(c.length, 3) - 1 ? "." : "")
								}
								else o = "0.0.0";
								return a.name = n[d].name, a.version = o, a
							} return a
					}, e.sdkWrapperVersion = "javascript 4.1.4", e.osVersionPair = e.matchItem([navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor].join(" "), [new n("windows_phone", "Windows Phone", "OS"), new n("windows", "Win", "NT"), new n("ios", "iPhone", "OS"), new n("ios", "iPad", "OS"), new n("ios", "iPod", "OS"), new n("android", "Android", "Android"), new n("blackBerry", "BlackBerry", "/"), new n("mac_osx", "Mac", "OS X"), new n("tizen", "Tizen", "Tizen"), new n("linux", "Linux", "rv"), new n("kai_os", "KAIOS", "KAIOS")]), e.buildPlatform = e.runtimePlatformToString(), e.deviceModel = e.getDeviceModel(), e.deviceManufacturer = e.getDeviceManufacturer(), e.osVersion = e.getOSVersionString(), e.browserVersion = e.getBrowserVersionString(), e
				}();
				e.GADevice = i
			}(e.device || (e.device = {}))
		}(n || (n = {})),
		function (e)
		{
			! function (e)
			{
				var n = function ()
				{
					function e(n)
					{
						this.deadline = n, this.ignore = !1, this.async = !1, this.running = !1, this.id = ++e.idCounter
					}
					return e.idCounter = 0, e
				}();
				e.TimedBlock = n
			}(e.threading || (e.threading = {}))
		}(n || (n = {})),
		function (e)
		{
			! function (e)
			{
				var n = function ()
				{
					function e(e)
					{
						this.comparer = e, this._subQueues = {}, this._sortedKeys = []
					}
					return e.prototype.enqueue = function (e, n)
					{
						-1 === this._sortedKeys.indexOf(e) && this.addQueueOfPriority(e), this._subQueues[e].push(n)
					}, e.prototype.addQueueOfPriority = function (e)
					{
						var n = this;
						this._sortedKeys.push(e), this._sortedKeys.sort(function (e, t)
						{
							return n.comparer.compare(e, t)
						}), this._subQueues[e] = []
					}, e.prototype.peek = function ()
					{
						if (this.hasItems()) return this._subQueues[this._sortedKeys[0]][0];
						throw new Error("The queue is empty")
					}, e.prototype.hasItems = function ()
					{
						return this._sortedKeys.length > 0
					}, e.prototype.dequeue = function ()
					{
						if (this.hasItems()) return this.dequeueFromHighPriorityQueue();
						throw new Error("The queue is empty")
					}, e.prototype.dequeueFromHighPriorityQueue = function ()
					{
						var e = this._sortedKeys[0],
							n = this._subQueues[e].shift();
						return 0 === this._subQueues[e].length && (this._sortedKeys.shift(), delete this._subQueues[e]), n
					}, e
				}();
				e.PriorityQueue = n
			}(e.threading || (e.threading = {}))
		}(n || (n = {})),
		function (e)
		{
			! function (n)
			{
				var t, i, r = e.logging.GALogger;
				! function (e)
				{
					e[e.Equal = 0] = "Equal", e[e.LessOrEqual = 1] = "LessOrEqual", e[e.NotEqual = 2] = "NotEqual"
				}(t = n.EGAStoreArgsOperator || (n.EGAStoreArgsOperator = {})),
				function (e)
				{
					e[e.Events = 0] = "Events", e[e.Sessions = 1] = "Sessions", e[e.Progression = 2] = "Progression"
				}(i = n.EGAStore || (n.EGAStore = {}));
				var s = function ()
				{
					function e()
					{
						this.eventsStore = [], this.sessionsStore = [], this.progressionStore = [], this.storeItems = {};
						try
						{
							"object" == typeof localStorage ? (localStorage.setItem("testingLocalStorage", "yes"), localStorage.removeItem("testingLocalStorage"), e.storageAvailable = !0) : e.storageAvailable = !1
						}
						catch (n)
						{}
					}
					return e.isStorageAvailable = function ()
					{
						return e.storageAvailable
					}, e.isStoreTooLargeForEvents = function ()
					{
						return e.instance.eventsStore.length + e.instance.sessionsStore.length > e.MaxNumberOfEntries
					}, e.select = function (n, i, r, s)
					{
						void 0 === i && (i = []), void 0 === r && (r = !1), void 0 === s && (s = 0);
						var o = e.getStore(n);
						if (!o) return null;
						for (var a = [], d = 0; d < o.length; ++d)
						{
							for (var u = o[d], c = !0, l = 0; l < i.length; ++l)
							{
								var v = i[l];
								if (u[v[0]]) switch (v[1])
								{
								case t.Equal:
									c = u[v[0]] == v[2];
									break;
								case t.LessOrEqual:
									c = u[v[0]] <= v[2];
									break;
								case t.NotEqual:
									c = u[v[0]] != v[2];
									break;
								default:
									c = !1
								}
								else c = !1;
								if (!c) break
							}
							c && a.push(u)
						}
						return r && a.sort(function (e, n)
						{
							return e.client_ts - n.client_ts
						}), s > 0 && a.length > s && (a = a.slice(0, s + 1)), a
					}, e.update = function (n, i, r)
					{
						void 0 === r && (r = []);
						var s = e.getStore(n);
						if (!s) return !1;
						for (var o = 0; o < s.length; ++o)
						{
							for (var a = s[o], d = !0, u = 0; u < r.length; ++u)
							{
								var c = r[u];
								if (a[c[0]]) switch (c[1])
								{
								case t.Equal:
									d = a[c[0]] == c[2];
									break;
								case t.LessOrEqual:
									d = a[c[0]] <= c[2];
									break;
								case t.NotEqual:
									d = a[c[0]] != c[2];
									break;
								default:
									d = !1
								}
								else d = !1;
								if (!d) break
							}
							if (d)
								for (u = 0; u < i.length; ++u)
								{
									var l = i[u];
									a[l[0]] = l[1]
								}
						}
						return !0
					}, e.delete = function (n, i)
					{
						var r = e.getStore(n);
						if (r)
							for (var s = 0; s < r.length; ++s)
							{
								for (var o = r[s], a = !0, d = 0; d < i.length; ++d)
								{
									var u = i[d];
									if (o[u[0]]) switch (u[1])
									{
									case t.Equal:
										a = o[u[0]] == u[2];
										break;
									case t.LessOrEqual:
										a = o[u[0]] <= u[2];
										break;
									case t.NotEqual:
										a = o[u[0]] != u[2];
										break;
									default:
										a = !1
									}
									else a = !1;
									if (!a) break
								}
								a && (r.splice(s, 1), --s)
							}
					}, e.insert = function (n, t, i, r)
					{
						void 0 === i && (i = !1), void 0 === r && (r = null);
						var s = e.getStore(n);
						if (s)
							if (i)
							{
								if (!r) return;
								for (var o = !1, a = 0; a < s.length; ++a)
								{
									var d = s[a];
									if (d[r] == t[r])
									{
										for (var u in t) d[u] = t[u];
										o = !0;
										break
									}
								}
								o || s.push(t)
							}
						else s.push(t)
					}, e.save = function (n)
					{
						e.isStorageAvailable() ? (localStorage.setItem(e.StringFormat(e.KeyFormat, n, e.EventsStoreKey), JSON.stringify(e.instance.eventsStore)), localStorage.setItem(e.StringFormat(e.KeyFormat, n, e.SessionsStoreKey), JSON.stringify(e.instance.sessionsStore)), localStorage.setItem(e.StringFormat(e.KeyFormat, n, e.ProgressionStoreKey), JSON.stringify(e.instance.progressionStore)), localStorage.setItem(e.StringFormat(e.KeyFormat, n, e.ItemsStoreKey), JSON.stringify(e.instance.storeItems))) : r.w("Storage is not available, cannot save.")
					}, e.load = function (n)
					{
						if (e.isStorageAvailable())
						{
							try
							{
								e.instance.eventsStore = JSON.parse(localStorage.getItem(e.StringFormat(e.KeyFormat, n, e.EventsStoreKey))), e.instance.eventsStore || (e.instance.eventsStore = [])
							}
							catch (t)
							{
								r.w("Load failed for 'events' store. Using empty store."), e.instance.eventsStore = []
							}
							try
							{
								e.instance.sessionsStore = JSON.parse(localStorage.getItem(e.StringFormat(e.KeyFormat, n, e.SessionsStoreKey))), e.instance.sessionsStore || (e.instance.sessionsStore = [])
							}
							catch (t)
							{
								r.w("Load failed for 'sessions' store. Using empty store."), e.instance.sessionsStore = []
							}
							try
							{
								e.instance.progressionStore = JSON.parse(localStorage.getItem(e.StringFormat(e.KeyFormat, n, e.ProgressionStoreKey))), e.instance.progressionStore || (e.instance.progressionStore = [])
							}
							catch (t)
							{
								r.w("Load failed for 'progression' store. Using empty store."), e.instance.progressionStore = []
							}
							try
							{
								e.instance.storeItems = JSON.parse(localStorage.getItem(e.StringFormat(e.KeyFormat, n, e.ItemsStoreKey))), e.instance.storeItems || (e.instance.storeItems = {})
							}
							catch (t)
							{
								r.w("Load failed for 'items' store. Using empty store."), e.instance.progressionStore = []
							}
						}
						else r.w("Storage is not available, cannot load.")
					}, e.setItem = function (n, t, i)
					{
						var r = e.StringFormat(e.KeyFormat, n, t);
						i ? e.instance.storeItems[r] = i : r in e.instance.storeItems && delete e.instance.storeItems[r]
					}, e.getItem = function (n, t)
					{
						var i = e.StringFormat(e.KeyFormat, n, t);
						return i in e.instance.storeItems ? e.instance.storeItems[i] : null
					}, e.getStore = function (n)
					{
						switch (n)
						{
						case i.Events:
							return e.instance.eventsStore;
						case i.Sessions:
							return e.instance.sessionsStore;
						case i.Progression:
							return e.instance.progressionStore;
						default:
							return r.w("GAStore.getStore(): Cannot find store: " + n), null
						}
					}, e.instance = new e, e.MaxNumberOfEntries = 2e3, e.StringFormat = function (e)
					{
						for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
						return e.replace(/{(\d+)}/g, function (e, t)
						{
							return n[t] || ""
						})
					}, e.KeyFormat = "GA::{0}::{1}", e.EventsStoreKey = "ga_event", e.SessionsStoreKey = "ga_session", e.ProgressionStoreKey = "ga_progression", e.ItemsStoreKey = "ga_items", e
				}();
				n.GAStore = s
			}(e.store || (e.store = {}))
		}(n || (n = {})),
		function (e)
		{
			! function (n)
			{
				var t = e.validators.GAValidator,
					i = e.utilities.GAUtilities,
					r = e.logging.GALogger,
					s = e.store.GAStore,
					o = e.device.GADevice,
					a = e.store.EGAStore,
					d = e.store.EGAStoreArgsOperator,
					u = function ()
					{
						function e()
						{
							this.availableCustomDimensions01 = [], this.availableCustomDimensions02 = [], this.availableCustomDimensions03 = [], this.availableResourceCurrencies = [], this.availableResourceItemTypes = [], this.configurations = {}, this.remoteConfigsListeners = [], this.sdkConfigDefault = {}, this.sdkConfig = {}, this.progressionTries = {}, this._isEventSubmissionEnabled = !0
						}
						return e.setUserId = function (n)
						{
							e.instance.userId = n, e.cacheIdentifier()
						}, e.getIdentifier = function ()
						{
							return e.instance.identifier
						}, e.isInitialized = function ()
						{
							return e.instance.initialized
						}, e.setInitialized = function (n)
						{
							e.instance.initialized = n
						}, e.getSessionStart = function ()
						{
							return e.instance.sessionStart
						}, e.getSessionNum = function ()
						{
							return e.instance.sessionNum
						}, e.getTransactionNum = function ()
						{
							return e.instance.transactionNum
						}, e.getSessionId = function ()
						{
							return e.instance.sessionId
						}, e.getCurrentCustomDimension01 = function ()
						{
							return e.instance.currentCustomDimension01
						}, e.getCurrentCustomDimension02 = function ()
						{
							return e.instance.currentCustomDimension02
						}, e.getCurrentCustomDimension03 = function ()
						{
							return e.instance.currentCustomDimension03
						}, e.getGameKey = function ()
						{
							return e.instance.gameKey
						}, e.getGameSecret = function ()
						{
							return e.instance.gameSecret
						}, e.getAvailableCustomDimensions01 = function ()
						{
							return e.instance.availableCustomDimensions01
						}, e.setAvailableCustomDimensions01 = function (n)
						{
							t.validateCustomDimensions(n) && (e.instance.availableCustomDimensions01 = n, e.validateAndFixCurrentDimensions(), r.i("Set available custom01 dimension values: (" + i.joinStringArray(n, ", ") + ")"))
						}, e.getAvailableCustomDimensions02 = function ()
						{
							return e.instance.availableCustomDimensions02
						}, e.setAvailableCustomDimensions02 = function (n)
						{
							t.validateCustomDimensions(n) && (e.instance.availableCustomDimensions02 = n, e.validateAndFixCurrentDimensions(), r.i("Set available custom02 dimension values: (" + i.joinStringArray(n, ", ") + ")"))
						}, e.getAvailableCustomDimensions03 = function ()
						{
							return e.instance.availableCustomDimensions03
						}, e.setAvailableCustomDimensions03 = function (n)
						{
							t.validateCustomDimensions(n) && (e.instance.availableCustomDimensions03 = n, e.validateAndFixCurrentDimensions(), r.i("Set available custom03 dimension values: (" + i.joinStringArray(n, ", ") + ")"))
						}, e.getAvailableResourceCurrencies = function ()
						{
							return e.instance.availableResourceCurrencies
						}, e.setAvailableResourceCurrencies = function (n)
						{
							t.validateResourceCurrencies(n) && (e.instance.availableResourceCurrencies = n, r.i("Set available resource currencies: (" + i.joinStringArray(n, ", ") + ")"))
						}, e.getAvailableResourceItemTypes = function ()
						{
							return e.instance.availableResourceItemTypes
						}, e.setAvailableResourceItemTypes = function (n)
						{
							t.validateResourceItemTypes(n) && (e.instance.availableResourceItemTypes = n, r.i("Set available resource item types: (" + i.joinStringArray(n, ", ") + ")"))
						}, e.getBuild = function ()
						{
							return e.instance.build
						}, e.setBuild = function (n)
						{
							e.instance.build = n, r.i("Set build version: " + n)
						}, e.getUseManualSessionHandling = function ()
						{
							return e.instance.useManualSessionHandling
						}, e.isEventSubmissionEnabled = function ()
						{
							return e.instance._isEventSubmissionEnabled
						}, e.getABTestingId = function ()
						{
							return e.instance.abId
						}, e.getABTestingVariantId = function ()
						{
							return e.instance.abVariantId
						}, e.prototype.setDefaultId = function (n)
						{
							this.defaultUserId = n || "", e.cacheIdentifier()
						}, e.getDefaultId = function ()
						{
							return e.instance.defaultUserId
						}, e.getSdkConfig = function ()
						{
							var n = 0;
							for (var t in e.instance.sdkConfig) 0 === n && (i = t), ++n;
							if (i && n > 0) return e.instance.sdkConfig;
							var i;
							n = 0;
							for (var t in e.instance.sdkConfigCached) 0 === n && (i = t), ++n;
							return i && n > 0 ? e.instance.sdkConfigCached : e.instance.sdkConfigDefault
						}, e.isEnabled = function ()
						{
							return !!e.instance.initAuthorized
						}, e.setCustomDimension01 = function (n)
						{
							e.instance.currentCustomDimension01 = n, s.setItem(e.getGameKey(), e.Dimension01Key, n), r.i("Set custom01 dimension value: " + n)
						}, e.setCustomDimension02 = function (n)
						{
							e.instance.currentCustomDimension02 = n, s.setItem(e.getGameKey(), e.Dimension02Key, n), r.i("Set custom02 dimension value: " + n)
						}, e.setCustomDimension03 = function (n)
						{
							e.instance.currentCustomDimension03 = n, s.setItem(e.getGameKey(), e.Dimension03Key, n), r.i("Set custom03 dimension value: " + n)
						}, e.incrementSessionNum = function ()
						{
							var n = e.getSessionNum() + 1;
							e.instance.sessionNum = n
						}, e.incrementTransactionNum = function ()
						{
							var n = e.getTransactionNum() + 1;
							e.instance.transactionNum = n
						}, e.incrementProgressionTries = function (n)
						{
							var t = e.getProgressionTries(n) + 1;
							e.instance.progressionTries[n] = t;
							var i = {};
							i.progression = n, i.tries = t, s.insert(a.Progression, i, !0, "progression")
						}, e.getProgressionTries = function (n)
						{
							return n in e.instance.progressionTries ? e.instance.progressionTries[n] : 0
						}, e.clearProgressionTries = function (n)
						{
							n in e.instance.progressionTries && delete e.instance.progressionTries[n];
							var t = [];
							t.push(["progression", d.Equal, n]), s.delete(a.Progression, t)
						}, e.setKeys = function (n, t)
						{
							e.instance.gameKey = n, e.instance.gameSecret = t
						}, e.setManualSessionHandling = function (n)
						{
							e.instance.useManualSessionHandling = n, r.i("Use manual session handling: " + n)
						}, e.setEnabledEventSubmission = function (n)
						{
							e.instance._isEventSubmissionEnabled = n
						}, e.getEventAnnotations = function ()
						{
							var n = {
								v: 2
							};
							n.user_id = e.instance.identifier, n.client_ts = e.getClientTsAdjusted(), n.sdk_version = o.getRelevantSdkVersion(), n.os_version = o.osVersion, n.manufacturer = o.deviceManufacturer, n.device = o.deviceModel, n.browser_version = o.browserVersion, n.platform = o.buildPlatform, n.session_id = e.instance.sessionId, n[e.SessionNumKey] = e.instance.sessionNum;
							var i = o.getConnectionType();
							if (t.validateConnectionType(i) && (n.connection_type = i), o.gameEngineVersion && (n.engine_version = o.gameEngineVersion), e.instance.configurations)
							{
								var r = 0;
								for (var s in e.instance.configurations)
								{
									r++;
									break
								}
								r > 0 && (n.configurations = e.instance.configurations)
							}
							return e.instance.abId && (n.ab_id = e.instance.abId), e.instance.abVariantId && (n.ab_variant_id = e.instance.abVariantId), e.instance.build && (n.build = e.instance.build), n
						}, e.getSdkErrorEventAnnotations = function ()
						{
							var n = {
								v: 2
							};
							n.category = e.CategorySdkError, n.sdk_version = o.getRelevantSdkVersion(), n.os_version = o.osVersion, n.manufacturer = o.deviceManufacturer, n.device = o.deviceModel, n.platform = o.buildPlatform;
							var i = o.getConnectionType();
							return t.validateConnectionType(i) && (n.connection_type = i), o.gameEngineVersion && (n.engine_version = o.gameEngineVersion), n
						}, e.getInitAnnotations = function ()
						{
							var n = {};
							return e.getIdentifier() || e.cacheIdentifier(), n.user_id = e.getIdentifier(), n.sdk_version = o.getRelevantSdkVersion(), n.os_version = o.osVersion, n.platform = o.buildPlatform, e.getBuild() ? n.build = e.getBuild() : n.build = null, n.session_num = e.getSessionNum(), n.random_salt = e.getSessionNum(), n
						}, e.getClientTsAdjusted = function ()
						{
							var n = i.timeIntervalSince1970(),
								r = n + e.instance.clientServerTimeOffset;
							return t.validateClientTs(r) ? r : n
						}, e.sessionIsStarted = function ()
						{
							return 0 != e.instance.sessionStart
						}, e.cacheIdentifier = function ()
						{
							e.instance.userId ? e.instance.identifier = e.instance.userId : e.instance.defaultUserId && (e.instance.identifier = e.instance.defaultUserId)
						}, e.ensurePersistedStates = function ()
						{
							s.isStorageAvailable() && s.load(e.getGameKey());
							var n = e.instance;
							n.setDefaultId(null != s.getItem(e.getGameKey(), e.DefaultUserIdKey) ? s.getItem(e.getGameKey(), e.DefaultUserIdKey) : i.createGuid()), n.sessionNum = null != s.getItem(e.getGameKey(), e.SessionNumKey) ? Number(s.getItem(e.getGameKey(), e.SessionNumKey)) : 0, n.transactionNum = null != s.getItem(e.getGameKey(), e.TransactionNumKey) ? Number(s.getItem(e.getGameKey(), e.TransactionNumKey)) : 0, n.currentCustomDimension01 ? s.setItem(e.getGameKey(), e.Dimension01Key, n.currentCustomDimension01) : (n.currentCustomDimension01 = null != s.getItem(e.getGameKey(), e.Dimension01Key) ? s.getItem(e.getGameKey(), e.Dimension01Key) : "", n.currentCustomDimension01), n.currentCustomDimension02 ? s.setItem(e.getGameKey(), e.Dimension02Key, n.currentCustomDimension02) : (n.currentCustomDimension02 = null != s.getItem(e.getGameKey(), e.Dimension02Key) ? s.getItem(e.getGameKey(), e.Dimension02Key) : "", n.currentCustomDimension02), n.currentCustomDimension03 ? s.setItem(e.getGameKey(), e.Dimension03Key, n.currentCustomDimension03) : (n.currentCustomDimension03 = null != s.getItem(e.getGameKey(), e.Dimension03Key) ? s.getItem(e.getGameKey(), e.Dimension03Key) : "", n.currentCustomDimension03);
							var t = null != s.getItem(e.getGameKey(), e.SdkConfigCachedKey) ? s.getItem(e.getGameKey(), e.SdkConfigCachedKey) : "";
							if (t)
							{
								var r = JSON.parse(i.decode64(t));
								r && (n.sdkConfigCached = r)
							}
							var o = e.getSdkConfig();
							n.configsHash = o.configs_hash ? o.configs_hash : "", n.abId = o.ab_id ? o.ab_id : "", n.abVariantId = o.ab_variant_id ? o.ab_variant_id : "";
							var d = s.select(a.Progression);
							if (d)
								for (var u = 0; u < d.length; ++u)
								{
									var c = d[u];
									c && (n.progressionTries[c.progression] = c.tries)
								}
						}, e.calculateServerTimeOffset = function (e)
						{
							return e - i.timeIntervalSince1970()
						}, e.validateAndCleanCustomFields = function (n)
						{
							var t = {};
							if (n)
							{
								var s = 0;
								for (var o in n)
								{
									var a = n[o];
									if (o && a)
										if (s < e.MAX_CUSTOM_FIELDS_COUNT)
										{
											var d = new RegExp("^[a-zA-Z0-9_]{1," + e.MAX_CUSTOM_FIELDS_KEY_LENGTH + "}$");
											if (i.stringMatch(o, d))
											{
												var u = typeof a;
												if ("string" === u || a instanceof String)
												{
													var c = a;
													c.length <= e.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH && c.length > 0 ? (t[o] = c, ++s) : r.w("validateAndCleanCustomFields: entry with key=" + o + ", value=" + a + " has been omitted because its value is an empty string or exceeds the max number of characters (" + e.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH + ")")
												}
												else if ("number" === u || a instanceof Number)
												{
													var l = a;
													t[o] = l, ++s
												}
												else r.w("validateAndCleanCustomFields: entry with key=" + o + ", value=" + a + " has been omitted because its value is not a string or number")
											}
											else r.w("validateAndCleanCustomFields: entry with key=" + o + ", value=" + a + " has been omitted because its key contains illegal character, is empty or exceeds the max number of characters (" + e.MAX_CUSTOM_FIELDS_KEY_LENGTH + ")")
										}
									else r.w("validateAndCleanCustomFields: entry with key=" + o + ", value=" + a + " has been omitted because it exceeds the max number of custom fields (" + e.MAX_CUSTOM_FIELDS_COUNT + ")");
									else r.w("validateAndCleanCustomFields: entry with key=" + o + ", value=" + a + " has been omitted because its key or value is null")
								}
							}
							return t
						}, e.validateAndFixCurrentDimensions = function ()
						{
							t.validateDimension01(e.getCurrentCustomDimension01(), e.getAvailableCustomDimensions01()) || e.setCustomDimension01(""), t.validateDimension02(e.getCurrentCustomDimension02(), e.getAvailableCustomDimensions02()) || e.setCustomDimension02(""), t.validateDimension03(e.getCurrentCustomDimension03(), e.getAvailableCustomDimensions03()) || e.setCustomDimension03("")
						}, e.getConfigurationStringValue = function (n, t)
						{
							return e.instance.configurations[n] ? e.instance.configurations[n].toString() : t
						}, e.isRemoteConfigsReady = function ()
						{
							return e.instance.remoteConfigsIsReady
						}, e.addRemoteConfigsListener = function (n)
						{
							e.instance.remoteConfigsListeners.indexOf(n) < 0 && e.instance.remoteConfigsListeners.push(n)
						}, e.removeRemoteConfigsListener = function (n)
						{
							var t = e.instance.remoteConfigsListeners.indexOf(n);
							t > -1 && e.instance.remoteConfigsListeners.splice(t, 1)
						}, e.getRemoteConfigsContentAsString = function ()
						{
							return JSON.stringify(e.instance.configurations)
						}, e.populateConfigurations = function (n)
						{
							var t = n.configs;
							if (t)
							{
								e.instance.configurations = {};
								for (var i = 0; i < t.length; ++i)
								{
									var r = t[i];
									if (r)
									{
										var s = r.key,
											o = r.value,
											a = r.start_ts ? r.start_ts : Number.MIN_VALUE,
											d = r.end_ts ? r.end_ts : Number.MAX_VALUE,
											u = e.getClientTsAdjusted();
										s && o && u > a && u < d && (e.instance.configurations[s] = o)
									}
								}
							}
							e.instance.remoteConfigsIsReady = !0;
							var c = e.instance.remoteConfigsListeners;
							for (i = 0; i < c.length; ++i) c[i] && c[i].onRemoteConfigsUpdated()
						}, e.CategorySdkError = "sdk_error", e.MAX_CUSTOM_FIELDS_COUNT = 50, e.MAX_CUSTOM_FIELDS_KEY_LENGTH = 64, e.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH = 256, e.instance = new e, e.DefaultUserIdKey = "default_user_id", e.SessionNumKey = "session_num", e.TransactionNumKey = "transaction_num", e.Dimension01Key = "dimension01", e.Dimension02Key = "dimension02", e.Dimension03Key = "dimension03", e.SdkConfigCachedKey = "sdk_config_cached", e
					}();
				n.GAState = u
			}(e.state || (e.state = {}))
		}(n || (n = {})),
		function (e)
		{
			! function (n)
			{
				var t = e.utilities.GAUtilities,
					i = e.logging.GALogger,
					r = function ()
					{
						function e()
						{}
						return e.execute = function (n, r, s, o)
						{
							var a = new Date;
							if (e.timestampMap[r] || (e.timestampMap[r] = a), e.countMap[r] || (e.countMap[r] = 0), (a.getTime() - e.timestampMap[r].getTime()) / 1e3 >= 3600 && (e.timestampMap[r] = a, e.countMap[r] = 0), !(e.countMap[r] >= e.MaxCount))
							{
								var d = t.getHmac(o, s),
									u = new XMLHttpRequest;
								u.onreadystatechange = function ()
								{
									if (4 === u.readyState)
									{
										if (!u.responseText) return;
										if (200 != u.status) return void i.w("sdk error failed. response code not 200. status code: " + u.status + ", description: " + u.statusText + ", body: " + u.responseText);
										e.countMap[r] = e.countMap[r] + 1
									}
								}, u.open("POST", n, !0), u.setRequestHeader("Content-Type", "application/json"), u.setRequestHeader("Authorization", d);
								try
								{
									u.send(s)
								}
								catch (c)
								{
									console.error(c)
								}
							}
						}, e.MaxCount = 10, e.countMap = {}, e.timestampMap = {}, e
					}();
				n.SdkErrorTask = r
			}(e.tasks || (e.tasks = {}))
		}(n || (n = {})),
		function (e)
		{
			! function (n)
			{
				var t = e.state.GAState,
					i = e.logging.GALogger,
					r = e.utilities.GAUtilities,
					s = e.validators.GAValidator,
					o = e.tasks.SdkErrorTask,
					a = e.events.EGASdkErrorCategory,
					d = e.events.EGASdkErrorArea,
					u = e.events.EGASdkErrorAction,
					c = e.events.EGASdkErrorParameter,
					l = function ()
					{
						function e()
						{
							this.protocol = "https", this.hostName = "api.gameanalytics.com", this.version = "v2", this.remoteConfigsVersion = "v1", this.baseUrl = this.protocol + "://" + this.hostName + "/" + this.version, this.remoteConfigsBaseUrl = this.protocol + "://" + this.hostName + "/remote_configs/" + this.remoteConfigsVersion, this.initializeUrlPath = "init", this.eventsUrlPath = "events", this.useGzip = !1
						}
						return e.prototype.requestInit = function (i, r)
						{
							var s = t.getGameKey(),
								o = this.remoteConfigsBaseUrl + "/" + this.initializeUrlPath + "?game_key=" + s + "&interval_seconds=0&configs_hash=" + i,
								a = t.getInitAnnotations(),
								d = JSON.stringify(a);
							if (d)
							{
								var u = this.createPayloadData(d, this.useGzip),
									c = [];
								c.push(d), e.sendRequest(o, u, c, this.useGzip, e.initRequestCallback, r)
							}
							else r(n.EGAHTTPApiResponse.JsonEncodeFailed, null)
						}, e.prototype.sendEventsInArray = function (i, r, s)
						{
							if (0 != i.length)
							{
								var o = t.getGameKey(),
									a = this.baseUrl + "/" + o + "/" + this.eventsUrlPath,
									d = JSON.stringify(i);
								if (d)
								{
									var u = this.createPayloadData(d, this.useGzip),
										c = [];
									c.push(d), c.push(r), c.push(i.length.toString()), e.sendRequest(a, u, c, this.useGzip, e.sendEventInArrayRequestCallback, s)
								}
								else s(n.EGAHTTPApiResponse.JsonEncodeFailed, null, r, i.length)
							}
						}, e.prototype.sendSdkErrorEvent = function (n, r, a, d, u, c, l)
						{
							if (t.isEventSubmissionEnabled() && s.validateSdkErrorEvent(c, l, n, r, a))
							{
								var v, g = this.baseUrl + "/" + c + "/" + this.eventsUrlPath,
									f = "",
									m = t.getSdkErrorEventAnnotations(),
									E = e.sdkErrorCategoryString(n);
								m.error_category = E, f += E;
								var p = e.sdkErrorAreaString(r);
								m.error_area = p, f += ":" + p;
								var S = e.sdkErrorActionString(a);
								m.error_action = S;
								var A = e.sdkErrorParameterString(d);
								if (A.length > 0 && (m.error_parameter = A), u.length > 0)
								{
									var h = u;
									if (u.length > e.MAX_ERROR_MESSAGE_LENGTH) h = u.substring(0, e.MAX_ERROR_MESSAGE_LENGTH);
									m.reason = h
								}
								var y = [];
								y.push(m), (v = JSON.stringify(y)) ? o.execute(g, f, v, l) : i.w("sendSdkErrorEvent: JSON encoding failed.")
							}
						}, e.sendEventInArrayRequestCallback = function (i, r, s, o)
						{
							void 0 === o && (o = null);
							o[0], o[1];
							var l, v, g = o[2],
								f = parseInt(o[3]);
							l = i.responseText, v = i.status;
							var m = e.instance.processRequestResponse(v, i.statusText, l, "Events");
							if (m == n.EGAHTTPApiResponse.Ok || m == n.EGAHTTPApiResponse.Created || m == n.EGAHTTPApiResponse.BadRequest)
							{
								var E = l ? JSON.parse(l) :
								{};
								if (null == E) return s(n.EGAHTTPApiResponse.JsonDecodeFailed, null, g, f), void e.instance.sendSdkErrorEvent(a.Http, d.EventsHttp, u.FailHttpJsonDecode, c.Undefined, l, t.getGameKey(), t.getGameSecret());
								n.EGAHTTPApiResponse.BadRequest, s(m, E, g, f)
							}
							else s(m, null, g, f)
						}, e.sendRequest = function (e, n, i, s, o, a)
						{
							var d = new XMLHttpRequest,
								u = t.getGameSecret(),
								c = r.getHmac(u, n),
								l = [];
							for (var v in l.push(c), i) l.push(i[v]);
							if (d.onreadystatechange = function ()
								{
									4 === d.readyState && o(d, e, a, l)
								}, d.open("POST", e, !0), d.setRequestHeader("Content-Type", "application/json"), d.setRequestHeader("Authorization", c), s) throw new Error("gzip not supported");
							try
							{
								d.send(n)
							}
							catch (g)
							{
								console.error(g.stack)
							}
						}, e.initRequestCallback = function (i, r, o, l)
						{
							void 0 === l && (l = null);
							var v, g;
							l[0], l[1];
							v = i.responseText, g = i.status;
							var f = v ? JSON.parse(v) :
								{},
								m = e.instance.processRequestResponse(g, i.statusText, v, "Init");
							if (m == n.EGAHTTPApiResponse.Ok || m == n.EGAHTTPApiResponse.Created || m == n.EGAHTTPApiResponse.BadRequest)
							{
								if (null == f) return o(n.EGAHTTPApiResponse.JsonDecodeFailed, null, "", 0), void e.instance.sendSdkErrorEvent(a.Http, d.InitHttp, u.FailHttpJsonDecode, c.Undefined, v, t.getGameKey(), t.getGameSecret());
								if (m !== n.EGAHTTPApiResponse.BadRequest)
								{
									var E = s.validateAndCleanInitRequestResponse(f, m === n.EGAHTTPApiResponse.Created);
									E ? o(m, E, "", 0) : o(n.EGAHTTPApiResponse.BadResponse, null, "", 0)
								}
								else o(m, null, "", 0)
							}
							else o(m, null, "", 0)
						}, e.prototype.createPayloadData = function (e, n)
						{
							if (n) throw new Error("gzip not supported");
							return e
						}, e.prototype.processRequestResponse = function (e, t, i, r)
						{
							return i ? 200 === e ? n.EGAHTTPApiResponse.Ok : 201 === e ? n.EGAHTTPApiResponse.Created : 0 === e || 401 === e ? n.EGAHTTPApiResponse.Unauthorized : 400 === e ? n.EGAHTTPApiResponse.BadRequest : 500 === e ? n.EGAHTTPApiResponse.InternalServerError : n.EGAHTTPApiResponse.UnknownResponseCode : n.EGAHTTPApiResponse.NoResponse
						}, e.sdkErrorCategoryString = function (e)
						{
							switch (e)
							{
							case a.EventValidation:
								return "event_validation";
							case a.Database:
								return "db";
							case a.Init:
								return "init";
							case a.Http:
								return "http";
							case a.Json:
								return "json"
							}
							return ""
						}, e.sdkErrorAreaString = function (e)
						{
							switch (e)
							{
							case d.BusinessEvent:
								return "business";
							case d.ResourceEvent:
								return "resource";
							case d.ProgressionEvent:
								return "progression";
							case d.DesignEvent:
								return "design";
							case d.ErrorEvent:
								return "error";
							case d.InitHttp:
								return "init_http";
							case d.EventsHttp:
								return "events_http";
							case d.ProcessEvents:
								return "process_events";
							case d.AddEventsToStore:
								return "add_events_to_store"
							}
							return ""
						}, e.sdkErrorActionString = function (e)
						{
							switch (e)
							{
							case u.InvalidCurrency:
								return "invalid_currency";
							case u.InvalidShortString:
								return "invalid_short_string";
							case u.InvalidEventPartLength:
								return "invalid_event_part_length";
							case u.InvalidEventPartCharacters:
								return "invalid_event_part_characters";
							case u.InvalidStore:
								return "invalid_store";
							case u.InvalidFlowType:
								return "invalid_flow_type";
							case u.StringEmptyOrNull:
								return "string_empty_or_null";
							case u.NotFoundInAvailableCurrencies:
								return "not_found_in_available_currencies";
							case u.InvalidAmount:
								return "invalid_amount";
							case u.NotFoundInAvailableItemTypes:
								return "not_found_in_available_item_types";
							case u.WrongProgressionOrder:
								return "wrong_progression_order";
							case u.InvalidEventIdLength:
								return "invalid_event_id_length";
							case u.InvalidEventIdCharacters:
								return "invalid_event_id_characters";
							case u.InvalidProgressionStatus:
								return "invalid_progression_status";
							case u.InvalidSeverity:
								return "invalid_severity";
							case u.InvalidLongString:
								return "invalid_long_string";
							case u.DatabaseTooLarge:
								return "db_too_large";
							case u.DatabaseOpenOrCreate:
								return "db_open_or_create";
							case u.JsonError:
								return "json_error";
							case u.FailHttpJsonDecode:
								return "fail_http_json_decode";
							case u.FailHttpJsonEncode:
								return "fail_http_json_encode"
							}
							return ""
						}, e.sdkErrorParameterString = function (e)
						{
							switch (e)
							{
							case c.Currency:
								return "currency";
							case c.CartType:
								return "cart_type";
							case c.ItemType:
								return "item_type";
							case c.ItemId:
								return "item_id";
							case c.Store:
								return "store";
							case c.FlowType:
								return "flow_type";
							case c.Amount:
								return "amount";
							case c.Progression01:
								return "progression01";
							case c.Progression02:
								return "progression02";
							case c.Progression03:
								return "progression03";
							case c.EventId:
								return "event_id";
							case c.ProgressionStatus:
								return "progression_status";
							case c.Severity:
								return "severity";
							case c.Message:
								return "message"
							}
							return ""
						}, e.instance = new e, e.MAX_ERROR_MESSAGE_LENGTH = 256, e
					}();
				n.GAHTTPApi = l
			}(e.http || (e.http = {}))
		}(n || (n = {})),
		function (e)
		{
			var n, t, i, r, s, o, a, d, u, c, l;
			n = e.events || (e.events = {}), t = e.store.GAStore, i = e.store.EGAStore, r = e.store.EGAStoreArgsOperator, s = e.state.GAState, o = e.logging.GALogger, a = e.utilities.GAUtilities, d = e.http.EGAHTTPApiResponse, u = e.http.GAHTTPApi, c = e.validators.GAValidator, l = function ()
			{
				function l()
				{}
				return l.addSessionStartEvent = function ()
				{
					if (s.isEventSubmissionEnabled())
					{
						var e = {};
						e.category = l.CategorySessionStart, s.incrementSessionNum(), t.setItem(s.getGameKey(), s.SessionNumKey, s.getSessionNum().toString()), l.addDimensionsToEvent(e), l.addEventToStore(e), o.i("Add SESSION START event"), l.processEvents(l.CategorySessionStart, !1)
					}
				}, l.addSessionEndEvent = function ()
				{
					if (s.isEventSubmissionEnabled())
					{
						var e = s.getSessionStart(),
							n = s.getClientTsAdjusted() - e;
						n < 0 && (o.w("Session length was calculated to be less then 0. Should not be possible. Resetting to 0."), n = 0);
						var t = {};
						t.category = l.CategorySessionEnd, t.length = n, l.addDimensionsToEvent(t), l.addEventToStore(t), o.i("Add SESSION END event."), l.processEvents("", !1)
					}
				}, l.addBusinessEvent = function (e, n, i, r, a, d)
				{
					if (void 0 === a && (a = null), s.isEventSubmissionEnabled())
					{
						var v = c.validateBusinessEvent(e, n, a, i, r);
						if (null == v)
						{
							var g = {};
							s.incrementTransactionNum(), t.setItem(s.getGameKey(), s.TransactionNumKey, s.getTransactionNum().toString()), g.event_id = i + ":" + r, g.category = l.CategoryBusiness, g.currency = e, g.amount = n, g[s.TransactionNumKey] = s.getTransactionNum(), a && (g.cart_type = a), l.addDimensionsToEvent(g), l.addFieldsToEvent(g, s.validateAndCleanCustomFields(d)), o.i("Add BUSINESS event: {currency:" + e + ", amount:" + n + ", itemType:" + i + ", itemId:" + r + ", cartType:" + a + "}"), l.addEventToStore(g)
						}
						else u.instance.sendSdkErrorEvent(v.category, v.area, v.action, v.parameter, v.reason, s.getGameKey(), s.getGameSecret())
					}
				}, l.addResourceEvent = function (n, t, i, r, a, d)
				{
					if (s.isEventSubmissionEnabled())
					{
						var v = c.validateResourceEvent(n, t, i, r, a, s.getAvailableResourceCurrencies(), s.getAvailableResourceItemTypes());
						if (null == v)
						{
							n === e.EGAResourceFlowType.Sink && (i *= -1);
							var g = {},
								f = l.resourceFlowTypeToString(n);
							g.event_id = f + ":" + t + ":" + r + ":" + a, g.category = l.CategoryResource, g.amount = i, l.addDimensionsToEvent(g), l.addFieldsToEvent(g, s.validateAndCleanCustomFields(d)), o.i("Add RESOURCE event: {currency:" + t + ", amount:" + i + ", itemType:" + r + ", itemId:" + a + "}"), l.addEventToStore(g)
						}
						else u.instance.sendSdkErrorEvent(v.category, v.area, v.action, v.parameter, v.reason, s.getGameKey(), s.getGameSecret())
					}
				}, l.addProgressionEvent = function (n, t, i, r, a, d, v)
				{
					if (s.isEventSubmissionEnabled())
					{
						var g = l.progressionStatusToString(n),
							f = c.validateProgressionEvent(n, t, i, r);
						if (null == f)
						{
							var m, E = {};
							m = i ? r ? t + ":" + i + ":" + r : t + ":" + i : t, E.category = l.CategoryProgression, E.event_id = g + ":" + m;
							var p = 0;
							d && n != e.EGAProgressionStatus.Start && (E.score = a), n === e.EGAProgressionStatus.Fail && s.incrementProgressionTries(m), n === e.EGAProgressionStatus.Complete && (s.incrementProgressionTries(m), p = s.getProgressionTries(m), E.attempt_num = p, s.clearProgressionTries(m)), l.addDimensionsToEvent(E), l.addFieldsToEvent(E, s.validateAndCleanCustomFields(v)), o.i("Add PROGRESSION event: {status:" + g + ", progression01:" + t + ", progression02:" + i + ", progression03:" + r + ", score:" + a + ", attempt:" + p + "}"), l.addEventToStore(E)
						}
						else u.instance.sendSdkErrorEvent(f.category, f.area, f.action, f.parameter, f.reason, s.getGameKey(), s.getGameSecret())
					}
				}, l.addDesignEvent = function (e, n, t, i)
				{
					if (s.isEventSubmissionEnabled())
					{
						var r = c.validateDesignEvent(e);
						if (null == r)
						{
							var a = {};
							a.category = l.CategoryDesign, a.event_id = e, t && (a.value = n), l.addDimensionsToEvent(a), l.addFieldsToEvent(a, s.validateAndCleanCustomFields(i)), o.i("Add DESIGN event: {eventId:" + e + ", value:" + n + "}"), l.addEventToStore(a)
						}
						else u.instance.sendSdkErrorEvent(r.category, r.area, r.action, r.parameter, r.reason, s.getGameKey(), s.getGameSecret())
					}
				}, l.addErrorEvent = function (e, n, t)
				{
					if (s.isEventSubmissionEnabled())
					{
						var i = l.errorSeverityToString(e),
							r = c.validateErrorEvent(e, n);
						if (null == r)
						{
							var a = {};
							a.category = l.CategoryError, a.severity = i, a.message = n, l.addDimensionsToEvent(a), l.addFieldsToEvent(a, s.validateAndCleanCustomFields(t)), o.i("Add ERROR event: {severity:" + i + ", message:" + n + "}"), l.addEventToStore(a)
						}
						else u.instance.sendSdkErrorEvent(r.category, r.area, r.action, r.parameter, r.reason, s.getGameKey(), s.getGameSecret())
					}
				}, l.addAdEvent = function (n, t, i, r, a, d, v, g)
				{
					if (s.isEventSubmissionEnabled())
					{
						var f = l.adActionToString(n),
							m = l.adTypeToString(t),
							E = l.adErrorToString(a),
							p = c.validateAdEvent(n, t, i, r);
						if (null == p)
						{
							var S = {};
							S.category = l.CategoryAds, S.ad_sdk_name = i, S.ad_placement = r, S.ad_type = m, S.ad_action = f, n == e.EGAAdAction.FailedShow && E.length > 0 && (S.ad_fail_show_reason = E), !v || t != e.EGAAdType.RewardedVideo && t != e.EGAAdType.Video || (S.ad_duration = d), l.addDimensionsToEvent(S), l.addFieldsToEvent(S, s.validateAndCleanCustomFields(g)), o.i("Add AD event: {ad_sdk_name:" + i + ", ad_placement:" + r + ", ad_type:" + m + ", ad_action:" + f + (n == e.EGAAdAction.FailedShow && E.length > 0 ? ", ad_fail_show_reason:" + E : "") + (!v || t != e.EGAAdType.RewardedVideo && t != e.EGAAdType.Video ? "" : ", ad_duration:" + d) + "}"), l.addEventToStore(S)
						}
						else u.instance.sendSdkErrorEvent(p.category, p.area, p.action, p.parameter, p.reason, s.getGameKey(), s.getGameSecret())
					}
				}, l.processEvents = function (e, d)
				{
					if (s.isEventSubmissionEnabled()) try
					{
						var c = a.createGuid();
						d && (l.cleanupEvents(), l.fixMissingSessionEndEvents());
						var v = [];
						v.push(["status", r.Equal, "new"]);
						var g = [];
						g.push(["status", r.Equal, "new"]), e && (v.push(["category", r.Equal, e]), g.push(["category", r.Equal, e]));
						var f = [];
						f.push(["status", c]);
						var m = t.select(i.Events, v);
						if (!m || 0 == m.length) return o.i("Event queue: No events to send"), void l.updateSessionStore();
						if (m.length > l.MaxEventCount)
						{
							if (!(m = t.select(i.Events, v, !0, l.MaxEventCount))) return;
							var E = m[m.length - 1].client_ts;
							if (v.push(["client_ts", r.LessOrEqual, E]), !(m = t.select(i.Events, v))) return;
							g.push(["client_ts", r.LessOrEqual, E])
						}
						if (o.i("Event queue: Sending " + m.length + " events."), !t.update(i.Events, f, g)) return;
						for (var p = [], S = 0; S < m.length; ++S)
						{
							var A = m[S],
								h = JSON.parse(a.decode64(A.event));
							0 != h.length && p.push(h)
						}
						u.instance.sendEventsInArray(p, c, l.processEventsCallback)
					}
					catch (y)
					{
						o.e("Error during ProcessEvents(): " + y.stack), u.instance.sendSdkErrorEvent(n.EGASdkErrorCategory.Json, n.EGASdkErrorArea.ProcessEvents, n.EGASdkErrorAction.JsonError, n.EGASdkErrorParameter.Undefined, y.stack, s.getGameKey(), s.getGameSecret())
					}
				}, l.processEventsCallback = function (e, n, s, a)
				{
					var u = [];
					if (u.push(["status", r.Equal, s]), e === d.Ok) t.delete(i.Events, u), o.i("Event queue: " + a + " events sent.");
					else if (e === d.NoResponse)
					{
						var c = [];
						c.push(["status", "new"]), o.w("Event queue: Failed to send events to collector - Retrying next time"), t.update(i.Events, c, u)
					}
					else
					{
						if (n)
						{
							var l, v = 0;
							for (var g in n) 0 == v && (l = n[g]), ++v;
							e === d.BadRequest && l.constructor === Array ? o.w("Event queue: " + a + " events sent. " + v + " events failed GA server validation.") : o.w("Event queue: Failed to send events.")
						}
						else o.w("Event queue: Failed to send events.");
						t.delete(i.Events, u)
					}
				}, l.cleanupEvents = function ()
				{
					t.update(i.Events, [
						["status", "new"]
					])
				}, l.fixMissingSessionEndEvents = function ()
				{
					if (s.isEventSubmissionEnabled())
					{
						var e = [];
						e.push(["session_id", r.NotEqual, s.getSessionId()]);
						var n = t.select(i.Sessions, e);
						if (n && 0 != n.length)
						{
							o.i(n.length + " session(s) located with missing session_end event.");
							for (var d = 0; d < n.length; ++d)
							{
								var u = JSON.parse(a.decode64(n[d].event)),
									c = u.client_ts - n[d].timestamp;
								c = Math.max(0, c), u.category = l.CategorySessionEnd, u.length = c, l.addEventToStore(u)
							}
						}
					}
				}, l.addEventToStore = function (e)
				{
					if (s.isEventSubmissionEnabled())
						if (s.isInitialized()) try
						{
							if (t.isStoreTooLargeForEvents() && !a.stringMatch(e.category, /^(user|session_end|business)$/)) return o.w("Database too large. Event has been blocked."), void u.instance.sendSdkErrorEvent(n.EGASdkErrorCategory.Database, n.EGASdkErrorArea.AddEventsToStore, n.EGASdkErrorAction.DatabaseTooLarge, n.EGASdkErrorParameter.Undefined, "", s.getGameKey(), s.getGameSecret());
							var d = s.getEventAnnotations(),
								c = a.encode64(JSON.stringify(d));
							for (var v in e) d[v] = e[v];
							var g = JSON.stringify(d);
							o.ii("Event added to queue: " + g);
							var f = {
								status: "new"
							};
							f.category = d.category, f.session_id = d.session_id, f.client_ts = d.client_ts, f.event = a.encode64(JSON.stringify(d)), t.insert(i.Events, f), e.category == l.CategorySessionEnd ? t.delete(i.Sessions, [
								["session_id", r.Equal, d.session_id]
							]) : ((f = {}).session_id = d.session_id, f.timestamp = s.getSessionStart(), f.event = c, t.insert(i.Sessions, f, !0, "session_id")), t.isStorageAvailable() && t.save(s.getGameKey())
						}
					catch (v)
					{
						o.e("addEventToStore: error"), o.e(v.stack), u.instance.sendSdkErrorEvent(n.EGASdkErrorCategory.Database, n.EGASdkErrorArea.AddEventsToStore, n.EGASdkErrorAction.DatabaseTooLarge, n.EGASdkErrorParameter.Undefined, v.stack, s.getGameKey(), s.getGameSecret())
					}
					else o.w("Could not add event: SDK is not initialized")
				}, l.updateSessionStore = function ()
				{
					if (s.sessionIsStarted())
					{
						var e = {};
						e.session_id = s.instance.sessionId, e.timestamp = s.getSessionStart(), e.event = a.encode64(JSON.stringify(s.getEventAnnotations())), t.insert(i.Sessions, e, !0, "session_id"), t.isStorageAvailable() && t.save(s.getGameKey())
					}
				}, l.addDimensionsToEvent = function (e)
				{
					e && (s.getCurrentCustomDimension01() && (e.custom_01 = s.getCurrentCustomDimension01()), s.getCurrentCustomDimension02() && (e.custom_02 = s.getCurrentCustomDimension02()), s.getCurrentCustomDimension03() && (e.custom_03 = s.getCurrentCustomDimension03()))
				}, l.addFieldsToEvent = function (e, n)
				{
					e && n && Object.keys(n).length > 0 && (e.custom_fields = n)
				}, l.resourceFlowTypeToString = function (n)
				{
					return n == e.EGAResourceFlowType.Source || n == e.EGAResourceFlowType[e.EGAResourceFlowType.Source] ? "Source" : n == e.EGAResourceFlowType.Sink || n == e.EGAResourceFlowType[e.EGAResourceFlowType.Sink] ? "Sink" : ""
				}, l.progressionStatusToString = function (n)
				{
					return n == e.EGAProgressionStatus.Start || n == e.EGAProgressionStatus[e.EGAProgressionStatus.Start] ? "Start" : n == e.EGAProgressionStatus.Complete || n == e.EGAProgressionStatus[e.EGAProgressionStatus.Complete] ? "Complete" : n == e.EGAProgressionStatus.Fail || n == e.EGAProgressionStatus[e.EGAProgressionStatus.Fail] ? "Fail" : ""
				}, l.errorSeverityToString = function (n)
				{
					return n == e.EGAErrorSeverity.Debug || n == e.EGAErrorSeverity[e.EGAErrorSeverity.Debug] ? "debug" : n == e.EGAErrorSeverity.Info || n == e.EGAErrorSeverity[e.EGAErrorSeverity.Info] ? "info" : n == e.EGAErrorSeverity.Warning || n == e.EGAErrorSeverity[e.EGAErrorSeverity.Warning] ? "warning" : n == e.EGAErrorSeverity.Error || n == e.EGAErrorSeverity[e.EGAErrorSeverity.Error] ? "error" : n == e.EGAErrorSeverity.Critical || n == e.EGAErrorSeverity[e.EGAErrorSeverity.Critical] ? "critical" : ""
				}, l.adActionToString = function (n)
				{
					return n == e.EGAAdAction.Clicked || n == e.EGAAdAction[e.EGAAdAction.Clicked] ? "clicked" : n == e.EGAAdAction.Show || n == e.EGAAdAction[e.EGAAdAction.Show] ? "show" : n == e.EGAAdAction.FailedShow || n == e.EGAAdAction[e.EGAAdAction.FailedShow] ? "failed_show" : n == e.EGAAdAction.RewardReceived || n == e.EGAAdAction[e.EGAAdAction.RewardReceived] ? "reward_received" : ""
				}, l.adErrorToString = function (n)
				{
					return n == e.EGAAdError.Unknown || n == e.EGAAdError[e.EGAAdError.Unknown] ? "unknown" : n == e.EGAAdError.Offline || n == e.EGAAdError[e.EGAAdError.Offline] ? "offline" : n == e.EGAAdError.NoFill || n == e.EGAAdError[e.EGAAdError.NoFill] ? "no_fill" : n == e.EGAAdError.InternalError || n == e.EGAAdError[e.EGAAdError.InternalError] ? "internal_error" : n == e.EGAAdError.InvalidRequest || n == e.EGAAdError[e.EGAAdError.InvalidRequest] ? "invalid_request" : n == e.EGAAdError.UnableToPrecache || n == e.EGAAdError[e.EGAAdError.UnableToPrecache] ? "unable_to_precache" : ""
				}, l.adTypeToString = function (n)
				{
					return n == e.EGAAdType.Video || n == e.EGAAdType[e.EGAAdType.Video] ? "video" : n == e.EGAAdType.RewardedVideo || n == e.EGAAdError[e.EGAAdType.RewardedVideo] ? "rewarded_video" : n == e.EGAAdType.Playable || n == e.EGAAdError[e.EGAAdType.Playable] ? "playable" : n == e.EGAAdType.Interstitial || n == e.EGAAdError[e.EGAAdType.Interstitial] ? "interstitial" : n == e.EGAAdType.OfferWall || n == e.EGAAdError[e.EGAAdType.OfferWall] ? "offer_wall" : n == e.EGAAdType.Banner || n == e.EGAAdError[e.EGAAdType.Banner] ? "banner" : ""
				}, l.CategorySessionStart = "user", l.CategorySessionEnd = "session_end", l.CategoryDesign = "design", l.CategoryBusiness = "business", l.CategoryProgression = "progression", l.CategoryResource = "resource", l.CategoryError = "error", l.CategoryAds = "ads", l.MaxEventCount = 500, l
			}(), n.GAEvents = l
		}(n || (n = {})),
		function (e)
		{
			! function (n)
			{
				var t = e.logging.GALogger,
					i = e.state.GAState,
					r = e.events.GAEvents,
					s = function ()
					{
						function e()
						{
							this.blocks = new n.PriorityQueue(
							{
								compare: function (e, n)
								{
									return e - n
								}
							}), this.id2TimedBlockMap = {}, e.startThread()
						}
						return e.createTimedBlock = function (e)
						{
							void 0 === e && (e = 0);
							var t = new Date;
							return t.setSeconds(t.getSeconds() + e), new n.TimedBlock(t)
						}, e.performTaskOnGAThread = function (t, i)
						{
							void 0 === i && (i = 0);
							var r = new Date;
							r.setSeconds(r.getSeconds() + i);
							var s = new n.TimedBlock(r);
							s.block = t, e.instance.id2TimedBlockMap[s.id] = s, e.instance.addTimedBlock(s)
						}, e.performTimedBlockOnGAThread = function (n)
						{
							e.instance.id2TimedBlockMap[n.id] = n, e.instance.addTimedBlock(n)
						}, e.scheduleTimer = function (t, i)
						{
							var r = new Date;
							r.setSeconds(r.getSeconds() + t);
							var s = new n.TimedBlock(r);
							return s.block = i, e.instance.id2TimedBlockMap[s.id] = s, e.instance.addTimedBlock(s), s.id
						}, e.getTimedBlockById = function (n)
						{
							return n in e.instance.id2TimedBlockMap ? e.instance.id2TimedBlockMap[n] : null
						}, e.ensureEventQueueIsRunning = function ()
						{
							e.instance.keepRunning = !0, e.instance.isRunning || (e.instance.isRunning = !0, e.scheduleTimer(e.ProcessEventsIntervalInSeconds, e.processEventQueue))
						}, e.endSessionAndStopQueue = function ()
						{
							i.isInitialized() && (t.i("Ending session."), e.stopEventQueue(), i.isEnabled() && i.sessionIsStarted() && (r.addSessionEndEvent(), i.instance.sessionStart = 0))
						}, e.stopEventQueue = function ()
						{
							e.instance.keepRunning = !1
						}, e.ignoreTimer = function (n)
						{
							n in e.instance.id2TimedBlockMap && (e.instance.id2TimedBlockMap[n].ignore = !0)
						}, e.setEventProcessInterval = function (n)
						{
							n > 0 && (e.ProcessEventsIntervalInSeconds = n)
						}, e.prototype.addTimedBlock = function (e)
						{
							this.blocks.enqueue(e.deadline.getTime(), e)
						}, e.run = function ()
						{
							clearTimeout(e.runTimeoutId);
							try
							{
								for (var n; n = e.getNextBlock();)
									if (!n.ignore)
										if (n.async)
										{
											if (!n.running)
											{
												n.running = !0, n.block();
												break
											}
										}
								else n.block();
								return void(e.runTimeoutId = setTimeout(e.run, e.ThreadWaitTimeInMs))
							}
							catch (i)
							{
								t.e("Error on GA thread"), t.e(i.stack)
							}
						}, e.startThread = function ()
						{
							e.runTimeoutId = setTimeout(e.run, 0)
						}, e.getNextBlock = function ()
						{
							var n = new Date;
							return e.instance.blocks.hasItems() && e.instance.blocks.peek().deadline.getTime() <= n.getTime() ? e.instance.blocks.peek().async && e.instance.blocks.peek().running ? e.instance.blocks.peek() : e.instance.blocks.dequeue() : null
						}, e.processEventQueue = function ()
						{
							r.processEvents("", !0), e.instance.keepRunning ? e.scheduleTimer(e.ProcessEventsIntervalInSeconds, e.processEventQueue) : e.instance.isRunning = !1
						}, e.instance = new e, e.ThreadWaitTimeInMs = 1e3, e.ProcessEventsIntervalInSeconds = 8, e
					}();
				n.GAThreading = s
			}(e.threading || (e.threading = {}))
		}(n || (n = {})),
		function (e)
		{
			var n = e.threading.GAThreading,
				t = e.logging.GALogger,
				i = e.store.GAStore,
				r = e.state.GAState,
				s = e.http.GAHTTPApi,
				o = e.device.GADevice,
				a = e.validators.GAValidator,
				d = e.http.EGAHTTPApiResponse,
				u = e.utilities.GAUtilities,
				c = e.events.GAEvents,
				l = function ()
				{
					function l()
					{}
					return l.init = function ()
					{
						if (o.touch(), l.methodMap.configureAvailableCustomDimensions01 = l.configureAvailableCustomDimensions01, l.methodMap.configureAvailableCustomDimensions02 = l.configureAvailableCustomDimensions02, l.methodMap.configureAvailableCustomDimensions03 = l.configureAvailableCustomDimensions03, l.methodMap.configureAvailableResourceCurrencies = l.configureAvailableResourceCurrencies, l.methodMap.configureAvailableResourceItemTypes = l.configureAvailableResourceItemTypes, l.methodMap.configureBuild = l.configureBuild, l.methodMap.configureSdkGameEngineVersion = l.configureSdkGameEngineVersion, l.methodMap.configureGameEngineVersion = l.configureGameEngineVersion, l.methodMap.configureUserId = l.configureUserId, l.methodMap.initialize = l.initialize, l.methodMap.addBusinessEvent = l.addBusinessEvent, l.methodMap.addResourceEvent = l.addResourceEvent, l.methodMap.addProgressionEvent = l.addProgressionEvent, l.methodMap.addDesignEvent = l.addDesignEvent, l.methodMap.addErrorEvent = l.addErrorEvent, l.methodMap.addErrorEvent = l.addErrorEvent, l.methodMap.setEnabledInfoLog = l.setEnabledInfoLog, l.methodMap.setEnabledVerboseLog = l.setEnabledVerboseLog, l.methodMap.setEnabledManualSessionHandling = l.setEnabledManualSessionHandling, l.methodMap.setEnabledEventSubmission = l.setEnabledEventSubmission, l.methodMap.setCustomDimension01 = l.setCustomDimension01, l.methodMap.setCustomDimension02 = l.setCustomDimension02, l.methodMap.setCustomDimension03 = l.setCustomDimension03, l.methodMap.setEventProcessInterval = l.setEventProcessInterval, l.methodMap.startSession = l.startSession, l.methodMap.endSession = l.endSession, l.methodMap.onStop = l.onStop, l.methodMap.onResume = l.onResume, l.methodMap.addRemoteConfigsListener = l.addRemoteConfigsListener, l.methodMap.removeRemoteConfigsListener = l.removeRemoteConfigsListener, l.methodMap.getRemoteConfigsValueAsString = l.getRemoteConfigsValueAsString, l.methodMap.isRemoteConfigsReady = l.isRemoteConfigsReady, l.methodMap.getRemoteConfigsContentAsString = l.getRemoteConfigsContentAsString, "undefined" != typeof window && void 0 !== window.GameAnalytics && void 0 !== window.GameAnalytics.q)
						{
							var e = window.GameAnalytics.q;
							for (var t in e) l.gaCommand.apply(null, e[t])
						}
						window.addEventListener("beforeunload", function ()
						{
							console.log("addEventListener unload"), n.endSessionAndStopQueue()
						})
					}, l.gaCommand = function ()
					{
						for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
						n.length > 0 && n[0] in e.GameAnalytics.methodMap && (n.length > 1 ? e.GameAnalytics.methodMap[n[0]].apply(null, Array.prototype.slice.call(n, 1)) : e.GameAnalytics.methodMap[n[0]]())
					}, l.configureAvailableCustomDimensions01 = function (e)
					{
						void 0 === e && (e = []), n.performTaskOnGAThread(function ()
						{
							l.isSdkReady(!0, !1) ? t.w("Available custom dimensions must be set before SDK is initialized") : r.setAvailableCustomDimensions01(e)
						})
					}, l.configureAvailableCustomDimensions02 = function (e)
					{
						void 0 === e && (e = []), n.performTaskOnGAThread(function ()
						{
							l.isSdkReady(!0, !1) ? t.w("Available custom dimensions must be set before SDK is initialized") : r.setAvailableCustomDimensions02(e)
						})
					}, l.configureAvailableCustomDimensions03 = function (e)
					{
						void 0 === e && (e = []), n.performTaskOnGAThread(function ()
						{
							l.isSdkReady(!0, !1) ? t.w("Available custom dimensions must be set before SDK is initialized") : r.setAvailableCustomDimensions03(e)
						})
					}, l.configureAvailableResourceCurrencies = function (e)
					{
						void 0 === e && (e = []), n.performTaskOnGAThread(function ()
						{
							l.isSdkReady(!0, !1) ? t.w("Available resource currencies must be set before SDK is initialized") : r.setAvailableResourceCurrencies(e)
						})
					}, l.configureAvailableResourceItemTypes = function (e)
					{
						void 0 === e && (e = []), n.performTaskOnGAThread(function ()
						{
							l.isSdkReady(!0, !1) ? t.w("Available resource item types must be set before SDK is initialized") : r.setAvailableResourceItemTypes(e)
						})
					}, l.configureBuild = function (e)
					{
						void 0 === e && (e = ""), n.performTaskOnGAThread(function ()
						{
							l.isSdkReady(!0, !1) ? t.w("Build version must be set before SDK is initialized.") : a.validateBuild(e) ? r.setBuild(e) : t.i("Validation fail - configure build: Cannot be null, empty or above 32 length. String: " + e)
						})
					}, l.configureSdkGameEngineVersion = function (e)
					{
						void 0 === e && (e = ""), n.performTaskOnGAThread(function ()
						{
							l.isSdkReady(!0, !1) || (a.validateSdkWrapperVersion(e) ? o.sdkGameEngineVersion = e : t.i("Validation fail - configure sdk version: Sdk version not supported. String: " + e))
						})
					}, l.configureGameEngineVersion = function (e)
					{
						void 0 === e && (e = ""), n.performTaskOnGAThread(function ()
						{
							l.isSdkReady(!0, !1) || (a.validateEngineVersion(e) ? o.gameEngineVersion = e : t.i("Validation fail - configure game engine version: Game engine version not supported. String: " + e))
						})
					}, l.configureUserId = function (e)
					{
						void 0 === e && (e = ""), n.performTaskOnGAThread(function ()
						{
							l.isSdkReady(!0, !1) ? t.w("A custom user id must be set before SDK is initialized.") : a.validateUserId(e) ? r.setUserId(e) : t.i("Validation fail - configure user_id: Cannot be null, empty or above 64 length. Will use default user_id method. Used string: " + e)
						})
					}, l.initialize = function (e, i)
					{
						void 0 === e && (e = ""), void 0 === i && (i = ""), o.updateConnectionType();
						var s = n.createTimedBlock();
						s.async = !0, l.initTimedBlockId = s.id, s.block = function ()
						{
							l.isSdkReady(!0, !1) ? t.w("SDK already initialized. Can only be called once.") : a.validateKeys(e, i) ? (r.setKeys(e, i), l.internalInitialize()) : t.w("SDK failed initialize. Game key or secret key is invalid. Can only contain characters A-z 0-9, gameKey is 32 length, gameSecret is 40 length. Failed keys - gameKey: " + e + ", secretKey: " + i)
						}, n.performTimedBlockOnGAThread(s)
					}, l.addBusinessEvent = function (e, t, i, r, s)
					{
						void 0 === e && (e = ""), void 0 === t && (t = 0), void 0 === i && (i = ""), void 0 === r && (r = ""), void 0 === s && (s = ""), o.updateConnectionType(), n.performTaskOnGAThread(function ()
						{
							l.isSdkReady(!0, !0, "Could not add business event") && c.addBusinessEvent(e, t, i, r, s,
							{})
						})
					}, l.addResourceEvent = function (t, i, r, s, a)
					{
						void 0 === t && (t = e.EGAResourceFlowType.Undefined), void 0 === i && (i = ""), void 0 === r && (r = 0), void 0 === s && (s = ""), void 0 === a && (a = ""), o.updateConnectionType(), n.performTaskOnGAThread(function ()
						{
							l.isSdkReady(!0, !0, "Could not add resource event") && c.addResourceEvent(t, i, r, s, a,
							{})
						})
					}, l.addProgressionEvent = function (t, i, r, s, a)
					{
						void 0 === t && (t = e.EGAProgressionStatus.Undefined), void 0 === i && (i = ""), void 0 === r && (r = ""), void 0 === s && (s = ""), o.updateConnectionType(), n.performTaskOnGAThread(function ()
						{
							if (l.isSdkReady(!0, !0, "Could not add progression event"))
							{
								var e = "number" == typeof a;
								c.addProgressionEvent(t, i, r, s, e ? a : 0, e,
								{})
							}
						})
					}, l.addDesignEvent = function (e, t)
					{
						o.updateConnectionType(), n.performTaskOnGAThread(function ()
						{
							if (l.isSdkReady(!0, !0, "Could not add design event"))
							{
								var n = "number" == typeof t;
								c.addDesignEvent(e, n ? t : 0, n,
								{})
							}
						})
					}, l.addErrorEvent = function (t, i)
					{
						void 0 === t && (t = e.EGAErrorSeverity.Undefined), void 0 === i && (i = ""), o.updateConnectionType(), n.performTaskOnGAThread(function ()
						{
							l.isSdkReady(!0, !0, "Could not add error event") && c.addErrorEvent(t, i,
							{})
						})
					}, l.addAdEventWithNoAdReason = function (t, i, r, s, a)
					{
						void 0 === t && (t = e.EGAAdAction.Undefined), void 0 === i && (i = e.EGAAdType.Undefined), void 0 === r && (r = ""), void 0 === s && (s = ""), void 0 === a && (a = e.EGAAdError.Undefined), o.updateConnectionType(), n.performTaskOnGAThread(function ()
						{
							l.isSdkReady(!0, !0, "Could not add ad event") && c.addAdEvent(t, i, r, s, a, 0, !1,
							{})
						})
					}, l.addAdEventWithDuration = function (t, i, r, s, a)
					{
						void 0 === t && (t = e.EGAAdAction.Undefined), void 0 === i && (i = e.EGAAdType.Undefined), void 0 === r && (r = ""), void 0 === s && (s = ""), void 0 === a && (a = 0), o.updateConnectionType(), n.performTaskOnGAThread(function ()
						{
							l.isSdkReady(!0, !0, "Could not add ad event") && c.addAdEvent(t, i, r, s, e.EGAAdError.Undefined, a, !0,
							{})
						})
					}, l.addAdEvent = function (t, i, r, s)
					{
						void 0 === t && (t = e.EGAAdAction.Undefined), void 0 === i && (i = e.EGAAdType.Undefined), void 0 === r && (r = ""), void 0 === s && (s = ""), o.updateConnectionType(), n.performTaskOnGAThread(function ()
						{
							l.isSdkReady(!0, !0, "Could not add ad event") && c.addAdEvent(t, i, r, s, e.EGAAdError.Undefined, 0, !1,
							{})
						})
					}, l.setEnabledInfoLog = function (e)
					{
						void 0 === e && (e = !1), n.performTaskOnGAThread(function ()
						{
							e ? (t.setInfoLog(e), t.i("Info logging enabled")) : (t.i("Info logging disabled"), t.setInfoLog(e))
						})
					}, l.setEnabledVerboseLog = function (e)
					{
						void 0 === e && (e = !1), n.performTaskOnGAThread(function ()
						{
							e ? (t.setVerboseLog(e), t.i("Verbose logging enabled")) : (t.i("Verbose logging disabled"), t.setVerboseLog(e))
						})
					}, l.setEnabledManualSessionHandling = function (e)
					{
						void 0 === e && (e = !1), n.performTaskOnGAThread(function ()
						{
							r.setManualSessionHandling(e)
						})
					}, l.setEnabledEventSubmission = function (e)
					{
						void 0 === e && (e = !1), n.performTaskOnGAThread(function ()
						{
							e ? (r.setEnabledEventSubmission(e), t.i("Event submission enabled")) : (t.i("Event submission disabled"), r.setEnabledEventSubmission(e))
						})
					}, l.setCustomDimension01 = function (e)
					{
						void 0 === e && (e = ""), n.performTaskOnGAThread(function ()
						{
							a.validateDimension01(e, r.getAvailableCustomDimensions01()) ? r.setCustomDimension01(e) : t.w("Could not set custom01 dimension value to '" + e + "'. Value not found in available custom01 dimension values")
						})
					}, l.setCustomDimension02 = function (e)
					{
						void 0 === e && (e = ""), n.performTaskOnGAThread(function ()
						{
							a.validateDimension02(e, r.getAvailableCustomDimensions02()) ? r.setCustomDimension02(e) : t.w("Could not set custom02 dimension value to '" + e + "'. Value not found in available custom02 dimension values")
						})
					}, l.setCustomDimension03 = function (e)
					{
						void 0 === e && (e = ""), n.performTaskOnGAThread(function ()
						{
							a.validateDimension03(e, r.getAvailableCustomDimensions03()) ? r.setCustomDimension03(e) : t.w("Could not set custom03 dimension value to '" + e + "'. Value not found in available custom03 dimension values")
						})
					}, l.setEventProcessInterval = function (e)
					{
						n.performTaskOnGAThread(function ()
						{
							n.setEventProcessInterval(e)
						})
					}, l.startSession = function ()
					{
						if (r.isInitialized())
						{
							var e = n.createTimedBlock();
							e.async = !0, l.initTimedBlockId = e.id, e.block = function ()
							{
								r.isEnabled() && r.sessionIsStarted() && n.endSessionAndStopQueue(), l.resumeSessionAndStartQueue()
							}, n.performTimedBlockOnGAThread(e)
						}
					}, l.endSession = function ()
					{
						l.onStop()
					}, l.onStop = function ()
					{
						n.performTaskOnGAThread(function ()
						{
							try
							{
								n.endSessionAndStopQueue()
							}
							catch (e)
							{}
						})
					}, l.onResume = function ()
					{
						var e = n.createTimedBlock();
						e.async = !0, l.initTimedBlockId = e.id, e.block = function ()
						{
							l.resumeSessionAndStartQueue()
						}, n.performTimedBlockOnGAThread(e)
					}, l.getRemoteConfigsValueAsString = function (e, n)
					{
						return void 0 === n && (n = null), r.getConfigurationStringValue(e, n)
					}, l.isRemoteConfigsReady = function ()
					{
						return r.isRemoteConfigsReady()
					}, l.addRemoteConfigsListener = function (e)
					{
						r.addRemoteConfigsListener(e)
					}, l.removeRemoteConfigsListener = function (e)
					{
						r.removeRemoteConfigsListener(e)
					}, l.getRemoteConfigsContentAsString = function ()
					{
						return r.getRemoteConfigsContentAsString()
					}, l.getABTestingId = function ()
					{
						return r.getABTestingId()
					}, l.getABTestingVariantId = function ()
					{
						return r.getABTestingVariantId()
					}, l.internalInitialize = function ()
					{
						r.ensurePersistedStates(), i.setItem(r.getGameKey(), r.DefaultUserIdKey, r.getDefaultId()), r.setInitialized(!0), l.newSession(), r.isEnabled() && n.ensureEventQueueIsRunning()
					}, l.newSession = function ()
					{
						t.i("Starting a new session."), r.validateAndFixCurrentDimensions(), s.instance.requestInit(r.instance.configsHash, l.startNewSessionCallback)
					}, l.startNewSessionCallback = function (e, s)
					{
						if (e !== d.Ok && e !== d.Created || !s) e == d.Unauthorized ? (t.w("Initialize SDK failed - Unauthorized"), r.instance.initAuthorized = !1) : (e === d.NoResponse || e === d.RequestTimeout ? t.i("Init call (session start) failed - no response. Could be offline or timeout.") : e === d.BadResponse || e === d.JsonEncodeFailed || e === d.JsonDecodeFailed ? t.i("Init call (session start) failed - bad response. Could be bad response from proxy or GA servers.") : e !== d.BadRequest && e !== d.UnknownResponseCode || t.i("Init call (session start) failed - bad request or unknown response."), null == r.instance.sdkConfig ? null != r.instance.sdkConfigCached ? (t.i("Init call (session start) failed - using cached init values."), r.instance.sdkConfig = r.instance.sdkConfigCached) : (t.i("Init call (session start) failed - using default init values."), r.instance.sdkConfig = r.instance.sdkConfigDefault) : t.i("Init call (session start) failed - using cached init values."), r.instance.initAuthorized = !0);
						else
						{
							var o = 0;
							if (s.server_ts)
							{
								var a = s.server_ts;
								o = r.calculateServerTimeOffset(a)
							}
							if (s.time_offset = o, e != d.Created)
							{
								var v = r.getSdkConfig();
								v.configs && (s.configs = v.configs), v.configs_hash && (s.configs_hash = v.configs_hash), v.ab_id && (s.ab_id = v.ab_id), v.ab_variant_id && (s.ab_variant_id = v.ab_variant_id)
							}
							r.instance.configsHash = s.configs_hash ? s.configs_hash : "", r.instance.abId = s.ab_id ? s.ab_id : "", r.instance.abVariantId = s.ab_variant_id ? s.ab_variant_id : "", i.setItem(r.getGameKey(), r.SdkConfigCachedKey, u.encode64(JSON.stringify(s))), r.instance.sdkConfigCached = s, r.instance.sdkConfig = s, r.instance.initAuthorized = !0
						}
						if (r.instance.clientServerTimeOffset = r.getSdkConfig().time_offset ? r.getSdkConfig().time_offset : 0, r.populateConfigurations(r.getSdkConfig()), !r.isEnabled()) return t.w("Could not start session: SDK is disabled."), void n.stopEventQueue();
						n.ensureEventQueueIsRunning();
						var g = u.createGuid();
						r.instance.sessionId = g, r.instance.sessionStart = r.getClientTsAdjusted(), c.addSessionStartEvent();
						var f = n.getTimedBlockById(l.initTimedBlockId);
						null != f && (f.running = !1), l.initTimedBlockId = -1
					}, l.resumeSessionAndStartQueue = function ()
					{
						r.isInitialized() && (t.i("Resuming session."), r.sessionIsStarted() || l.newSession())
					}, l.isSdkReady = function (e, n, i)
					{
						return void 0 === n && (n = !0), void 0 === i && (i = ""), i && (i += ": "), e && !r.isInitialized() ? (n && t.w(i + "SDK is not initialized"), !1) : e && !r.isEnabled() ? (n && t.w(i + "SDK is disabled"), !1) : !(e && !r.sessionIsStarted()) || (n && t.w(i + "Session has not started yet"), !1)
					}, l.initTimedBlockId = -1, l.methodMap = {}, l
				}();
			e.GameAnalytics = l
		}(n || (n = {})), n.GameAnalytics.init();
		var s = n.GameAnalytics.gaCommand;
		module.exports = n;
	},
	{}],
	"G1z3": [function (require, module, exports)
	{
		"use strict";
		var e = this && this.__extends || function ()
		{
			var e = function (t, n)
			{
				return (e = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (e, t)
					{
						e.__proto__ = t
					} || function (e, t)
					{
						for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
					})(t, n)
			};
			return function (t, n)
			{
				function a()
				{
					this.constructor = t
				}
				e(t, n), t.prototype = null === n ? Object.create(n) : (a.prototype = n.prototype, new a)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var t = require("../CONST"),
			n = require("gameanalytics"),
			a = function (a)
			{
				function i()
				{
					var e = a.call(this,
					{
						key: t.CONST.SCENES.LOAD,
						active: !0,
						pack:
						{
							files: [
							{
								type: "image",
								key: "loadBG",
								url: "./assets/00load/LTGBackground.png"
							},
							{
								type: "image",
								key: "loadLogo",
								url: "./assets/00load/LTGLogo.png"
							}]
						}
					}) || this;
					return e.gameLaunched = !1, e
				}
				return e(i, a), i.prototype.init = function ()
				{
					var e = this;
					this.registry.set(t.CONST.REGISTRY.ADBLOCKENABLED, !1), PokiSDK.init().then(function () {}).catch(function ()
					{
						e.registry.set(t.CONST.REGISTRY.ADBLOCKENABLED, !0)
					}), PokiSDK.setDebug(!1);
					var n, a, i = ["top", "indexOf", "aHR0cHM6Ly9wb2tpLmNvbS9zaXRlbG9jaw==", "hostname", "length", "location", "LnBva2ktZ2RuLmNvbQ==", "href"];
					n = i, a = 430,
						function (e)
						{
							for (; --e;) n.push(n.shift())
						}(++a);
					var o = function (e, t)
					{
						return i[e -= 0]
					};
					! function ()
					{
						for (var e = ["bG9jYWxob3N0", "LnBva2kuY29t", o("0x0")], t = !1, n = window[o("0x7")][o("0x5")], a = 0; a < e[o("0x6")]; a++)
						{
							var i = atob(e[a]);
							if (-1 !== n[o("0x3")](i, n.length - i.length))
							{
								t = !0;
								break
							}
						}
						if (t)
						{
							var s = o("0x4"),
								r = atob(s);
							window.location[o("0x1")] = r, window[o("0x2")][o("0x7")] !== window[o("0x7")] && (window[o("0x2")][o("0x7")] = window[o("0x7")])
						}
					}(), this.initAnalytics()
				}, i.prototype.initAnalytics = function ()
				{
					n.GameAnalytics.configureBuild(t.CONST.ANALYTICS.VERSION), n.GameAnalytics.initialize("d8108fb16b8816bf3093b5cc1acf879d", "0cee8e77f0f4680b57fe3f6d0c7f02d0971e2f54"), this.remoteConf.initialize()
				}, i.prototype.loadSceneImages = function (e)
				{
					for (var t in e) this.load.image(e[t], e[t])
				}, i.prototype.loadStartSceneImages = function ()
				{
					this.loadSceneImages(t.CONST.BUTTONS), this.loadSceneImages(t.CONST.GENERIC), this.loadSceneImages(t.CONST.HOME_BUTTON), this.loadSceneImages(t.CONST.MENU), this.loadSceneImages(t.CONST.ARCADE_SCREEN)
				}, i.prototype.loadFonts = function ()
				{
					this.load.bitmapFont(t.CONST.FONT.ATLAS, t.CONST.FONT.ATLAS, t.CONST.FONT.XML)
				}, i.prototype.loadStartAudio = function ()
				{
					this.load.audio(t.CONST.AUDIO.SOUNDTRACK_SHORT, t.CONST.AUDIO.SOUNDTRACK_SHORT)
				}, i.prototype.preload = function ()
				{
					var e = this;
					this.add.image(0, -32, "loadBG").setOrigin(0, 0), this.add.image(426.5, 180, "loadLogo").setScale(.7), this.loadStartSceneImages(), this.loadFonts(), this.loadStartAudio();
					var t = this.add.graphics(
					{
						fillStyle:
						{
							color: 4763335
						}
					}).setDepth(1);
					this.add.graphics().fillStyle(16777215, .5).fillRect(150, this.game.renderer.height / 2 + 90, this.game.renderer.width - 300, 50), PokiSDK.gameLoadingStart(), this.load.on("progress", function (n)
					{
						PokiSDK.gameLoadingProgress(
						{
							percentageDone: n
						}), t.fillRect(150, e.game.renderer.height / 2 + 90, (e.game.renderer.width - 300) * n, 50)
					}), this.load.on("complete", function ()
					{
						PokiSDK.gameLoadingFinished()
					}), this.hidePreloadScreen()
				}, i.prototype.create = function ()
				{
					var e = this;
					this.registry.get(t.CONST.REGISTRY.ADBLOCKENABLED) ? n.GameAnalytics.addDesignEvent("Ads:Adblock:Enabled") : n.GameAnalytics.addDesignEvent("Ads:Adblock:Disabled"), n.GameAnalytics.addDesignEvent("General:LocalStorage:" + (this.storagePlugin.isLocalStorageSupported() ? "Enabled" : "Disableds")), this.scene.launch(t.CONST.SCENES.SOUNDTRACK), this.scene.launch(t.CONST.SCENES.PROGRESSIVE_LOAD), this.remoteConf.configsAvailable() ? (this.LaunchGame(), n.GameAnalytics.addDesignEvent("Configs:Load:OnTime")) : (this.remoteConf.setConfigsCallback(function ()
					{
						e.gameLaunched || n.GameAnalytics.addDesignEvent("Configs:Load:Delayed"), e.LaunchGame()
					}), setTimeout(function ()
					{
						e.gameLaunched || n.GameAnalytics.addDesignEvent("Configs:Load:Timeout"), e.LaunchGame(!0)
					}, 2e3))
				}, i.prototype.LaunchGame = function (e)
				{
					void 0 === e && (e = !1), this.gameLaunched || (this.scene.start(t.CONST.SCENES.MENU), this.gameLaunched = !0)
				}, i.prototype.hidePreloadScreen = function ()
				{
					document.getElementById("preloadDiv").style.display = "none", document.getElementsByTagName("canvas")[0].style.zIndex = 1
				}, i
			}(Phaser.Scene);
		exports.LoadScene = a;
	},
	{
		"../CONST": "HmIA",
		"gameanalytics": "ublV"
	}],
	"bbF/": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../CONST"),
			t = {
				openOnStart: !1,
				duration: 300,
				easeIn: "Quad.easeOut",
				easeOut: "Quad.easeIn",
				closedPosition:
				{
					x: 426.5,
					y: -240
				},
				openPosition:
				{
					x: 426.5,
					y: 257
				}
			},
			i = {
				grid:
				{
					center:
					{
						x: 0,
						y: 23
					},
					yOffset: 72,
					xOffset: 215
				},
				newOffset:
				{
					x: 85,
					y: -59
				},
				highscoreOffset:
				{
					x: -66,
					y: 55,
					fontSize: 25
				},
				minigames: [
				{
					scene: e.CONST.SCENES.INSTRUMENT,
					defaultImage: e.CONST.ARCADE_SCREEN.INSTRUMENT,
					selectedImage: e.CONST.ARCADE_SCREEN.INSTRUMENT_SELECTED,
					isMinigame: !0,
					isArcade: !0,
					position: 3,
					rcPosition: 0
				},
				{
					scene: e.CONST.SCENES.BURGER,
					defaultImage: e.CONST.ARCADE_SCREEN.BURGER,
					selectedImage: e.CONST.ARCADE_SCREEN.BURGER_SELECTED,
					isMinigame: !0,
					isArcade: !0,
					position: 0,
					rcPosition: 1
				},
				{
					scene: e.CONST.SCENES.DISTRACTION,
					defaultImage: e.CONST.ARCADE_SCREEN.DISTRACTION,
					selectedImage: e.CONST.ARCADE_SCREEN.DISTRACTION_SELECTED,
					isMinigame: !0,
					isArcade: !0,
					position: 1,
					rcPosition: 2
				},
				{
					scene: e.CONST.SCENES.GRID_FILL,
					defaultImage: e.CONST.ARCADE_SCREEN.GRIDFILL,
					selectedImage: e.CONST.ARCADE_SCREEN.GRIDFILL_SELECTED,
					isMinigame: !0,
					isArcade: !0,
					position: 2,
					rcPosition: 3
				},
				{
					scene: e.CONST.SCENES.BIRTH,
					defaultImage: e.CONST.ARCADE_SCREEN.MAIN_GAME,
					selectedImage: e.CONST.ARCADE_SCREEN.MAIN_GAME_SELECTED,
					isMinigame: !0,
					isArcade: !1,
					position: 4
				},
				{
					scene: "",
					defaultImage: e.CONST.ARCADE_SCREEN.NEW_LEVELS,
					selectedImage: "",
					isMinigame: !1,
					isArcade: !1,
					position: 5
				}]
			},
			s = function ()
			{
				function s(i)
				{
					this.hasNewGames = !1, this.arcadeButtonPositions = "3012", this.scene = i, this.progressiveLoadScene = this.scene.registry.get(e.CONST.SCENES.PROGRESSIVE_LOAD), this.darkBg = i.add.image(0, 0, e.CONST.ARCADE_SCREEN.DARK_LAYER).setOrigin(0, 0).setDepth(49).setAlpha(0), this.cont = i.add.container(this.scene.game.renderer.width / 2, this.scene.game.renderer.height / 2 + 15).setDepth(50), this.getRemoteConfig(), t.openOnStart ? this.cont.setPosition(t.openPosition.x, t.openPosition.y) : this.cont.setPosition(t.closedPosition.x, t.closedPosition.y), this.buildUi()
				}
				return s.prototype.getRemoteConfig = function ()
				{
					this.arcadeButtonPositions = this.scene.remoteConf.getConfig("gO")
				}, s.prototype.open = function ()
				{
					this.prioritizeLoading(), this.animate(!0)
				}, s.prototype.prioritizeLoading = function ()
				{
					this.progressiveLoadScene && this.progressiveLoadScene.prioritizeChunksWithTag(e.CONST.TAGS.ARCADE)
				}, s.prototype.close = function ()
				{
					this.animate(!1), this.scene.setButtonsInteractive(!0)
				}, s.prototype.animate = function (e)
				{
					this.moveTween && this.moveTween.stop(), this.moveTween = this.scene.tweens.add(
					{
						targets: this.cont,
						x: e ? t.openPosition.x : t.closedPosition.x,
						y: e ? t.openPosition.y : t.closedPosition.y,
						duration: t.duration,
						ease: e ? t.easeIn : t.easeOut
					}), this.fadeTween && this.fadeTween.stop(), this.fadeTween = this.scene.tweens.add(
					{
						targets: this.darkBg,
						alpha: e ? 1 : 0,
						duration: t.duration,
						ease: e ? t.easeIn : t.easeOut
					})
				}, s.prototype.buildUi = function ()
				{
					var t = this,
						s = this.scene.add.image(0, 0, e.CONST.ARCADE_SCREEN.BACKGROUND),
						n = this.scene.add.image(-318, -175, e.CONST.ARCADE_SCREEN.HOME_BUTTON);
					n.setInteractive(
					{
						useHandCursor: !0,
						pixelPerfect: !0
					}), n.on("pointerup", function ()
					{
						t.close()
					}), this.cont.add([s, n]), i.minigames.forEach(function (e)
					{
						return t.buildMinigameButton(e, t.cont)
					})
				}, s.prototype.buildMinigameButton = function (t, s)
				{
					var n = this,
						o = t.isArcade ? parseInt(this.arcadeButtonPositions[t.rcPosition]) : t.position,
						a = this.getButtonPosition(o),
						r = this.scene.add.image(a.x, a.y, t.defaultImage);
					r.setInteractive(
					{
						useHandCursor: !0,
						pixelPerfect: !0
					}), s.add(r);
					var c = this.scene.add.image(a.x + i.newOffset.x, a.y + i.newOffset.y, e.CONST.ARCADE_SCREEN.NEW).setAngle(-5);
					if (t.isMinigame)
					{
						var d = this.scene.add.image(a.x, a.y, t.selectedImage).setAlpha(0);
						r.on("pointerover", function ()
						{
							d.setAlpha(1), n.shakeTag(c, -5)
						}), r.on("pointerout", function ()
						{
							d.setAlpha(0)
						}), s.add(d);
						var g = this.getHighscore(t.scene),
							h = this.scene.add.bitmapText(a.x + i.highscoreOffset.x, a.y + i.highscoreOffset.y, e.CONST.FONT.ATLAS, g.toString(), i.highscoreOffset.fontSize / (g.toString().length > 5 ? g.toString().length / 5 : 1)).setOrigin(.5).setCenterAlign();
						t.isArcade || (h.text = ""), s.add(h), r.on("pointerup", function ()
						{
							n.handlePlayButtonClick(t.scene)
						})
					}
					else r.on("pointerup", function ()
					{
						n.shakeTag(r, 0)
					});
					s.add(c), !t.isArcade || this.hasBeenPlayed(t.scene) ? c.setAlpha(0) : this.hasNewGames = !0
				}, s.prototype.shakeTag = function (e, t)
				{
					var i = this;
					e.setAngle(t), this.scene.tweens.add(
					{
						targets: e,
						angle: "+=5",
						duration: 500,
						ease: function (e)
						{
							return i.wiggle(e, 1, 1)
						},
						onComplete: function ()
						{
							e.setAngle(t)
						}
					})
				}, s.prototype.getButtonPosition = function (e)
				{
					var t = i.grid.center.y + (e >= 3 ? i.grid.yOffset : -i.grid.yOffset);
					return {
						x: i.grid.center.x + (e % 3 == 0 ? -i.grid.xOffset : e % 3 == 1 ? 0 : i.grid.xOffset),
						y: t
					}
				}, s.prototype.handlePlayButtonClick = function (t)
				{
					this.progressiveLoadScene.isSceneLoaded(t) ? this.scene.scene.start(t) : this.scene.scene.start(e.CONST.SCENES.ARCADE_MINIGAME_LOADING,
					{
						next: t
					})
				}, s.prototype.hasBeenPlayed = function (e)
				{
					return !!this.scene.storagePlugin.getItem(e + "highscore")
				}, s.prototype.getHighscore = function (e)
				{
					var t = this.scene.storagePlugin.getItem(e + "highscore");
					return t ? parseInt(t) : 0
				}, s.prototype.wiggle = function (e, t, i)
				{
					var s = e * Math.PI * 2 * t,
						n = e * (2 * Math.PI * i + Math.PI / 2);
					return Math.sin(s) * Math.cos(n)
				}, s.prototype.hasNewArcadeGames = function ()
				{
					return this.hasNewGames
				}, s
			}();
		exports.ArcadePopup = s;
	},
	{
		"../CONST": "HmIA"
	}],
	"OuK+": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, n)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
					})(e, n)
			};
			return function (e, n)
			{
				function o()
				{
					this.constructor = e
				}
				t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../components/ArcadePopup"),
			n = require("../CONST"),
			o = function (o)
			{
				function r()
				{
					var t = o.call(this,
					{
						key: n.CONST.SCENES.MENU
					}) || this;
					return t.cloudMovementSpeed = 25, t.isArcadeEnabled = !0, t
				}
				return t(r, o), r.prototype.init = function ()
				{
					this.registry.set(n.CONST.REGISTRY.SKIPUSED, !1)
				}, r.prototype.preload = function () {}, r.prototype.create = function ()
				{
					var t = this;
					this.getRemoteConfig(), this.createClouds(), this.createSoundButton(), this.add.image(0, 0, n.CONST.MENU.BACKGROUND).setOrigin(0, 0).setDepth(0), this.add.image(0, 480, n.CONST.MENU.NATURE).setOrigin(0, 1).setDepth(2), this.add.image(335, 272, n.CONST.MENU.CHARACTER).setDepth(3), this.add.image(577, 160, n.CONST.MENU.TITLE_TEXT).setDepth(3), this.buttons = [];
					var o = new i(this, 577, 287, n.CONST.BUTTONS.RED, "PLAY", function ()
					{
						t.scene.start(n.CONST.SCENES.BIRTH)
					});
					if (this.buttons.push(o), this.canContinueGame() && "true" === this.remoteConf.getConfig("hBe"))
					{
						var r = new i(this, 577, 445, n.CONST.BUTTONS.ORANGE, "CONTINUE", function ()
						{
							t.scene.start(t.getProgressScene())
						}, 30);
						this.buttons.push(r)
					}
					if (this.isArcadeEnabled)
					{
						this.arcadePopup = new e.ArcadePopup(this);
						var s = new i(this, 577, 366, n.CONST.BUTTONS.PURPLE, "ARCADE", function ()
						{
							t.arcadePopup.open(), t.setButtonsInteractive(!1)
						}, 35);
						if (this.buttons.push(s), this.arcadePopup.hasNewArcadeGames())
						{
							var a = this.add.image(68, -22, n.CONST.ARCADE_SCREEN.NEW).setDepth(5);
							this.tweens.add(
							{
								targets: a,
								angle: "+=5",
								duration: 500,
								hold: 2500,
								repeat: -1,
								ease: function (e)
								{
									return t.wiggle(e, 1, 1)
								}
							}), s.add(a)
						}
						this.openArcade()
					}
					for (var u = 577, c = 287, p = 65, d = 0; d < this.buttons.length; d++) this.buttons[d].setPosition(u, c + d * p)
				}, r.prototype.canContinueGame = function ()
				{
					var t = this.storagePlugin.getItem(n.CONST.STORAGE_KEYS.PROGRESS);
					return t && t != n.CONST.SCENES.DIE && t != n.CONST.SCENES.CREDITS
				}, r.prototype.getProgressScene = function ()
				{
					return this.storagePlugin.getItem(n.CONST.STORAGE_KEYS.PROGRESS)
				}, r.prototype.getRemoteConfig = function ()
				{
					this.isArcadeEnabled = "true" === this.remoteConf.getConfig("aE")
				}, r.prototype.wiggle = function (t, e, n)
				{
					var o = t * Math.PI * 2 * e,
						i = t * (2 * Math.PI * n + Math.PI / 2);
					return Math.sin(o) * Math.cos(i)
				}, r.prototype.openArcade = function ()
				{
					var t = this.storagePlugin.getItem("openArcadePopup", "");
					t && 1 == parseInt(t) && (this.arcadePopup.open(), this.setButtonsInteractive(!1), this.storagePlugin.setItem("openArcadePopup", "0"))
				}, r.prototype.setButtonsInteractive = function (t)
				{
					this.buttons.forEach(function (e)
					{
						e.overrideInteractive(t)
					})
				}, r.prototype.createClouds = function ()
				{
					for (var t = [], e = 0; e < 3; e++)
					{
						var o = this.add.image(-this.game.renderer.width * (e - 1), 20, n.CONST.MENU.CLOUDS).setOrigin(0, 0).setDepth(1);
						t.push(o)
					}
					this.clouds = this.add.group(t)
				}, r.prototype.createSoundButton = function ()
				{
					var t = this;
					this.soundButton = this.add.image(30, this.renderer.height - 30, this.audioPlugin.isAudioEnabled() ? n.CONST.BUTTONS.SOUND_ON : n.CONST.BUTTONS.SOUND_OFF).setDepth(3).setInteractive(
					{
						useHandCursor: !0
					}).setScale(.7), this.soundButton.on("pointerup", function ()
					{
						var e = t.audioPlugin.toggleAudioEnabled();
						t.soundButton.setTexture(e ? n.CONST.BUTTONS.SOUND_ON : n.CONST.BUTTONS.SOUND_OFF)
					})
				}, r.prototype.update = function (t, e)
				{
					this.updateClouds()
				}, r.prototype.updateClouds = function ()
				{
					var t = this;
					this.clouds && this.clouds.getChildren().forEach(function (e)
					{
						e.x += t.cloudMovementSpeed * t.game.loop.delta / 1e3, e.x >= t.game.renderer.width && (e.x -= 2 * t.game.renderer.width)
					})
				}, r
			}(Phaser.Scene);
		exports.MenuScene = o;
		var i = function (e)
		{
			function o(t, o, i, r, s, a, u)
			{
				void 0 === u && (u = 40);
				var c = e.call(this, t, o, i) || this;
				c.bgImage = c.scene.add.image(0, 0, r);
				var p = c.scene.add.bitmapText(0, 0, n.CONST.FONT.ATLAS, s, u).setOrigin(.5, .4);
				return c.add([c.bgImage, p]), t.add.existing(c), c.setDepth(3), c.bgImage.on("pointerup", function ()
				{
					a()
				}), c.bgImage.on("pointerover", function ()
				{
					c.animateButton(!0)
				}), c.bgImage.on("pointerout", function ()
				{
					c.animateButton(!1)
				}), c.overrideInteractive(!0), c
			}
			return t(o, e), o.prototype.animateButton = function (t)
			{
				this.buttonTween && this.buttonTween.stop(), this.buttonTween = this.scene.tweens.add(
				{
					targets: this,
					scaleX: t ? 1.05 : 1,
					scaleY: t ? 1.05 : 1,
					ease: "Quad.easeInOut",
					duration: 75,
					repeat: 0,
					yoyo: !1
				})
			}, o.prototype.overrideInteractive = function (t)
			{
				t ? this.bgImage.setInteractive(
				{
					useHandCursor: !0,
					pixelPerfect: !0
				}) : this.bgImage.disableInteractive()
			}, o
		}(Phaser.GameObjects.Container);
	},
	{
		"../components/ArcadePopup": "bbF/",
		"../CONST": "HmIA"
	}],
	"QxR8": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, s)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s])
					})(e, s)
			};
			return function (e, s)
			{
				function i()
				{
					this.constructor = e
				}
				t(e, s), e.prototype = null === s ? Object.create(s) : (i.prototype = s.prototype, new i)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../CONST"),
			s = function (s)
			{
				function i()
				{
					return s.call(this,
					{
						key: e.CONST.SCENES.SOUNDTRACK
					}) || this
				}
				return t(i, s), i.prototype.create = function ()
				{
					this.music = this.sound.add(e.CONST.AUDIO.SOUNDTRACK_SHORT,
					{
						loop: !0,
						mute: !1
					}), this.music.play(), this.registry.set(e.CONST.SCENES.SOUNDTRACK, this)
				}, i.prototype.pauseMusic = function (t)
				{
					t ? this.music.pause() : this.music.resume()
				}, i.prototype.switchMusic = function ()
				{
					var t = this.sound.add(e.CONST.AUDIO.SOUNDTRACK,
					{
						loop: !0,
						mute: !1,
						seek: this.music.seek
					});
					t.play(), this.music.isPaused && t.pause(), t.setSeek(this.music.seek), this.music.stop(), this.music = t
				}, i
			}(Phaser.Scene);
		exports.SoundtrackScene = s;
	},
	{
		"../CONST": "HmIA"
	}],
	"qoOj": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var t = function ()
		{
			function t(t, i, e)
			{
				void 0 === e && (e = 60), this.animTimer = 0, this.isAnimating = !1, this.loop = !1, this.xOffset = 0, this.yOffset = 0, this.angleOffset = 0, this.scaleMultiplierX = 1, this.scaleMultiplierY = 1, this.xOverride = 0, this.yOverride = 0, this.image = t, this.animationJson = i, this.animFPS = e, this.animTimer = 0, this.isAnimating = !1, this.duration = 1e3 * i.frames.length / e, this.image.animation = this
			}
			return t.prototype.setLoop = function (t)
			{
				return this.loop = t, this
			}, t.prototype.setOffset = function (t, i)
			{
				return this.xOffset = t, this.yOffset = i, this
			}, t.prototype.setAngleOffset = function (t)
			{
				return this.angleOffset = t, this
			}, t.prototype.setScaleMultiplier = function (t, i)
			{
				return void 0 === i && (i = 0), this.scaleMultiplierX = t, this.scaleMultiplierY = 0 === i ? t : i, this
			}, t.prototype.setDepth = function (t)
			{
				return this.image.setDepth(t), this
			}, t.prototype.setScrollFactor = function (t, i)
			{
				return this.image.setScrollFactor(t, i), this
			}, t.prototype.setDraggable = function (t)
			{
				return this.image.setInteractive(
				{
					useHandCursor: !0
				}), t.setDraggable(this.image), this
			}, t.prototype.setPositionOverride = function (t, i, e)
			{
				return void 0 === e && (e = !0), this.xOverride = t, e && (this.yOverride = i), this
			}, t.prototype.GetPositionOverride = function ()
			{
				return {
					x: this.xOverride,
					y: this.yOverride
				}
			}, t.prototype.GetOffset = function ()
			{
				return {
					x: this.xOffset,
					y: this.yOffset
				}
			}, t.prototype.update = function (t)
			{
				this.isAnimating && (this.positionImageOnAnimation(this.animTimer), this.updateTimer(t))
			}, t.prototype.updateTimer = function (t)
			{
				this.animTimer += t, this.animTimer >= this.duration && (this.loop ? this.animTimer = 0 : this.isAnimating = !1)
			}, t.prototype.start = function ()
			{
				return this.isAnimating = !0, this
			}, t.prototype.pause = function ()
			{
				return this.isAnimating = !1, this
			}, t.prototype.stop = function ()
			{
				return this.animTimer = 0, this.isAnimating = !1, this
			}, t.prototype.setAnimation = function (t)
			{
				return this.animationJson = t, this.animTimer = 0, this.duration = 1e3 * t.frames.length / this.animFPS, this
			}, t.prototype.positionImageOnAnimation = function (t)
			{
				var i = Math.floor(t * (this.animFPS / 1e3));
				i >= this.animationJson.frames.length && (i = this.animationJson.frames.length - 1);
				var e = this.animationJson.frames[i];
				this.image.setPosition(e.x + this.xOffset + this.xOverride, e.y + this.yOffset + this.yOverride).setScale(parseFloat(e.scaleX) * this.scaleMultiplierX, parseFloat(e.scaleY) * this.scaleMultiplierY).setAngle(parseFloat(e.angle) + this.angleOffset)
			}, t
		}();
		exports.UnityAnimation = t;
	},
	{}],
	"fGrI": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, n)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
					})(e, n)
			};
			return function (e, n)
			{
				function o()
				{
					this.constructor = e
				}
				t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../CONST"),
			n = function (n)
			{
				function o(t, e, o)
				{
					var r = n.call(this, t, e, o) || this;
					return r.opened = !1, r.pointerOverButton = !1, r.mainButton = r.createMainButton(), r.innerContainer = r.createInnerContainer(), r.updateDisplay(), r.add([r.innerContainer, r.mainButton]), t.add.existing(r), r.setScale(.75), r.setScrollFactor(0), r
				}
				return t(o, n), o.prototype.createMainButton = function ()
				{
					var t = this,
						n = this.scene.add.image(0, 0, e.CONST.HOME_BUTTON.NORMAL).setInteractive(
						{
							useHandCursor: !0,
							pixelPerfect: !0,
							alphaTolerance: 1
						}).setScrollFactor(0);
					return n.on("pointerup", function ()
					{
						t.handleMainButtonClick()
					}), n.on("pointerover", function ()
					{
						t.pointerOverButton = !0, t.updateDisplay()
					}), n.on("pointerout", function ()
					{
						t.pointerOverButton = !1, t.updateDisplay()
					}), n
				}, o.prototype.handleMainButtonClick = function ()
				{
					this.opened = !this.opened, this.updateDisplay()
				}, o.prototype.createInnerContainer = function ()
				{
					var t = this,
						n = this.scene.add.image(0, 0, e.CONST.HOME_BUTTON.BACKGROUND).setScrollFactor(0),
						o = this.scene.add.image(-14.2, -4.4, e.CONST.HOME_BUTTON.CHECK).setScrollFactor(0),
						r = this.createInnerButton(-11, -4.4, e.CONST.HOME_BUTTON.CHECK_HIGHLIGHT, function ()
						{
							t.loadMenuScene()
						}).setScrollFactor(0),
						i = this.scene.add.image(51, -3.7, e.CONST.HOME_BUTTON.X).setScrollFactor(0),
						a = this.createInnerButton(51, -3.7, e.CONST.HOME_BUTTON.X_HIGHLIGHT, function ()
						{
							t.handleMainButtonClick()
						}).setScrollFactor(0),
						c = this.scene.add.container(92, 0).setScrollFactor(0);
					return c.add([n, o, r, i, a]), c
				}, o.prototype.createInnerButton = function (t, e, n, o)
				{
					var r = this.scene.add.image(t, e, n).setAlpha(.01).setInteractive(
					{
						useHandCursor: !0,
						pixelPerfect: !0,
						alphaTolerance: 0
					});
					return r.on("pointerup", function ()
					{
						o()
					}), r.on("pointerover", function ()
					{
						r.alpha = 1
					}), r.on("pointerout", function ()
					{
						r.alpha = .01
					}), r
				}, o.prototype.updateDisplay = function ()
				{
					this.mainButton.setTexture(this.opened || this.pointerOverButton ? e.CONST.HOME_BUTTON.HIGHLIGHT : e.CONST.HOME_BUTTON.NORMAL), this.innerContainer.setVisible(this.opened)
				}, o.prototype.addExitEvent = function (t)
				{
					this.onExit = t
				}, o.prototype.loadMenuScene = function ()
				{
					this.onExit && this.onExit(), this.scene.scene.start(e.CONST.SCENES.MENU)
				}, o
			}(Phaser.GameObjects.Container);
		exports.default = n;
	},
	{
		"../CONST": "HmIA"
	}],
	"Qwd5": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
			{
				var t = function (e, i)
				{
					return (t = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function (e, i)
				{
					function s()
					{
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s)
				}
			}(),
			e = this && this.__importDefault || function (t)
			{
				return t && t.__esModule ? t :
				{
					default: t
				}
			};
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var i = require("../../CONST"),
			s = require("./Animation"),
			a = e(require("../../components/HomeButton")),
			r = require("gameanalytics"),
			o = function (e)
			{
				function o(t)
				{
					var i = e.call(this,
					{
						key: t.sceneName
					}) || this;
					return i.rewardedBreakRequested = !1, i.sceneName = t.sceneName, i.nextScene = t.nextScene, i.duration = t.duration, i.showCountdown = void 0 === t.showCountdown || t.showCountdown, i.showHomeButton = void 0 === t.showHomeButton || t.showHomeButton, i.startScreenColor = t.startScreenColor, i.startText = t.startText, i.startTextYOrigin = void 0 === t.startTextYOrigin ? .25 : t.startTextYOrigin, i.startTextColor = t.startTextColor, i.failImage = t.endScreen ? t.endScreen : "", i.showSkipButton = void 0 === t.showSkipButton || t.showSkipButton, i.timeToStart = void 0 === t.timeToStart ? 1e3 : t.timeToStart, i.buttonPositions = t.endButtons, i.waitingToLoad = !1, i.isArcadeMinigame = void 0 !== t.isArcadeMinigame && t.isArcadeMinigame, i
				}
				return t(o, e), o.prototype.init = function ()
				{
					this.animations = [], this.progressiveLoadScene = this.registry.get(i.CONST.SCENES.PROGRESSIVE_LOAD), this.rewardedBreakRequested = !1, this._init()
				}, o.prototype.preload = function ()
				{
					this._preload()
				}, o.prototype.create = function ()
				{
					var t = this;
					this.saveProgress(), this.createStartUI(), this.createGameplayUI(), this.createLoseUI(), this.createLoadUI(), this.changeGameState(i.CONST.GAMESTATE.START);
					var e = this.areAllAssetsLoaded();
					e ? this._create() : this.waitingToLoad = !0, this.audioPlugin.beforeCommercialBreak(), PokiSDK.commercialBreak().then(function ()
					{
						t.audioPlugin.afterCommercialBreak(), e ? t.createStartTimer() : (t.createWaitingUI(), t.waitingToLoad = !0)
					})
				}, o.prototype.saveProgress = function ()
				{
					this.isArcadeMinigame || this.storagePlugin.setItem(i.CONST.STORAGE_KEYS.PROGRESS, this.sceneName)
				}, o.prototype.createWaitingUI = function ()
				{
					var t = this.add.image(this.game.renderer.width / 2, this.game.renderer.height - 50, i.CONST.BUTTONS.SPINNER).setDepth(1002).setTint(this.startTextColor).setVisible(!0);
					this.tweens.add(
					{
						targets: t,
						angle: "+=360",
						duration: 1e3,
						ease: "Linear",
						repeat: -1
					})
				}, o.prototype.createStartUI = function ()
				{
					var t = this.add.graphics(
						{
							fillStyle:
							{
								color: this.startScreenColor
							}
						}).fillRect(0, 0, this.game.renderer.width, this.game.renderer.height).setDepth(1e3).setVisible(!1),
						e = this.add.bitmapText(this.game.renderer.width / 2, this.game.renderer.height / 2, i.CONST.FONT.ATLAS, this.startText, 150).setOrigin(.5, this.startTextYOrigin).setDepth(1001).setVisible(!1).setTint(this.startTextColor).setCenterAlign();
					this.startUI = this.add.group([t, e],
					{
						active: !1
					}), this.startUI.getChildren().forEach(function (t)
					{
						t.setScrollFactor(0)
					})
				}, o.prototype.createGameplayUI = function ()
				{
					this.progressBar = this.add.graphics(
					{
						fillStyle:
						{
							color: 1381653,
							alpha: this.showCountdown ? .7 : 0
						}
					}).fillRect(0, 0, this.game.renderer.width, 14).setDepth(100).setVisible(!1), this.progressBarBackground = this.add.graphics(
					{
						fillStyle:
						{
							color: 2697513,
							alpha: this.showCountdown ? .3 : 0
						}
					}).fillRect(0, 0, this.game.renderer.width, 14).setDepth(99).setVisible(!1), this.gameplayUI = this.add.group([this.progressBar, this.progressBarBackground],
					{
						active: !1
					}), this.gameplayUI.getChildren().forEach(function (t)
					{
						t.setScrollFactor(0)
					})
				}, o.prototype.createLoseUI = function ()
				{
					var t = this,
						e = [];
					if ("" != this.failImage)
					{
						var s = this.add.image(0, 0, this.failImage).setOrigin(0, 0).setDepth(1002).setVisible(!1);
						e.push(s)
					}
					if (this.showHomeButton && "true" === this.remoteConf.getConfig("hBe"))
					{
						var r = new a.default(this, 40, 40).setDepth(1005).setVisible(!1).setScrollFactor(0, 0, !0);
						e.push(r)
					}
					if (!this.showSkipButton || this.registry.get(i.CONST.REGISTRY.ADBLOCKENABLED) || this.registry.get(i.CONST.REGISTRY.SKIPUSED))
					{
						var o = this.addButton(this.buttonPositions.normalNoSkip.x, this.buttonPositions.normalNoSkip.y, i.CONST.BUTTONS.TRYAGAIN, this.buttonPositions.normalNoSkip.scale, function ()
						{
							t.restartGame()
						});
						e.push(o)
					}
					else
					{
						var n = this.addButton(this.buttonPositions.normalWithSkip.x, this.buttonPositions.normalWithSkip.y, i.CONST.BUTTONS.TRYAGAIN, this.buttonPositions.normalWithSkip.scale, function ()
						{
							t.restartGame()
						});
						e.push(n);
						var h = this.addButton(this.buttonPositions.skip.x, this.buttonPositions.skip.y, i.CONST.BUTTONS.SKIP, this.buttonPositions.skip.scale, function ()
						{
							t.skipLevel()
						});
						e.push(h)
					}
					this.getCustomLoseUIElements().forEach(function (t)
					{
						t.setVisible(!1).setDepth(t.depth + 1003), e.push(t)
					}), this.loseUI = this.add.group(e,
					{
						active: !1
					}), this.loseUI.getChildren().forEach(function (t)
					{
						t.setScrollFactor(0)
					})
				}, o.prototype.getCustomLoseUIElements = function ()
				{
					return []
				}, o.prototype.createLoadUI = function ()
				{
					var t = this.scene.get(this.nextScene),
						e = this.add.graphics(
						{
							fillStyle:
							{
								color: t.startScreenColor
							}
						}).fillRect(0, 0, this.game.renderer.width, this.game.renderer.height).setDepth(1e3).setVisible(!1),
						s = this.add.bitmapText(this.game.renderer.width / 2, this.game.renderer.height / 2, i.CONST.FONT.ATLAS, t.startText, 150).setOrigin(.5, t.startTextYOrigin).setDepth(1001).setVisible(!1).setTint(t.startTextColor).setCenterAlign(),
						a = this.add.image(this.game.renderer.width / 2, this.game.renderer.height - 50, i.CONST.BUTTONS.SPINNER).setDepth(1002).setTint(t.startTextColor).setVisible(!1);
					this.tweens.add(
					{
						targets: a,
						angle: "+=360",
						duration: 1e3,
						ease: "Linear",
						repeat: -1
					}), this.loadUI = this.add.group([e, s, a],
					{
						active: !1
					}), this.loadUI.getChildren().forEach(function (t)
					{
						t.setScrollFactor(0)
					})
				}, o.prototype.addButton = function (t, e, i, s, a)
				{
					var r = this.add.image(t, e, i).setScale(s, s).setVisible(!1).setDepth(1003).setInteractive(
					{
						useHandCursor: !0
					});
					return r.on("pointerdown", a, this), r
				}, o.prototype.changeGameState = function (t)
				{
					var e = !0;
					switch (t === this.currentState && (e = !1), t)
					{
					case i.CONST.GAMESTATE.START:
						this.setChildrenVisible(this.startUI, !0);
						break;
					case i.CONST.GAMESTATE.PLAYING:
						PokiSDK.gameplayStart(), this.setChildrenVisible(this.gameplayUI, !0);
						break;
					case i.CONST.GAMESTATE.LOSE:
					case i.CONST.GAMESTATE.WIN:
						break;
					case i.CONST.GAMESTATE.LOADNEXTLEVEL:
						this.setChildrenVisible(this.loadUI, !0);
						break;
					default:
						e = !1
					}
					if (e)
					{
						switch (this.currentState)
						{
						case i.CONST.GAMESTATE.START:
							this.setChildrenVisible(this.startUI, !1);
							break;
						case i.CONST.GAMESTATE.PLAYING:
							PokiSDK.gameplayStop(), this.setChildrenVisible(this.gameplayUI, !1);
							break;
						case i.CONST.GAMESTATE.LOSE:
							this.setChildrenVisible(this.loseUI, !1);
							break;
						case i.CONST.GAMESTATE.WIN:
						}
						this.currentState = t
					}
				}, o.prototype.showLoseUI = function (t)
				{
					this.setChildrenVisible(this.loseUI, t)
				}, o.prototype.setChildrenVisible = function (t, e)
				{
					t.getChildren().forEach(function (t)
					{
						t.setVisible(e)
					})
				}, o.prototype.update = function (t, e)
				{
					this.waitingToLoad ? this.areAllAssetsLoaded() && (this.waitingToLoad = !1, this.restartGame()) : (this.isCurrentState(i.CONST.GAMESTATE.PLAYING) && this.updateGameplayTimer(), this.isCurrentState(i.CONST.GAMESTATE.LOADNEXTLEVEL) && this.areAllAssetsLoaded(this.nextScene) && this.loadNextScene(), this._update(t, e), this.updateAnimations(e))
				}, o.prototype.updateGameplayTimer = function ()
				{
					this.gameplayTimer && this.progressBar.setX(-this.game.renderer.width * this.gameplayTimer.getProgress()).setVisible(!0)
				}, o.prototype.updateAnimations = function (t)
				{
					this.animations.forEach(function (e)
					{
						e.update(t)
					})
				}, o.prototype.createStartTimer = function ()
				{
					this.startTimer = this.time.addEvent(
					{
						delay: this.timeToStart,
						callback: this.startGame,
						callbackScope: this
					})
				}, o.prototype.startGame = function ()
				{
					this.changeGameState(i.CONST.GAMESTATE.PLAYING), this.onGameStarted(), this.clearTimers(), this.gameplayTimer = this.time.addEvent(
					{
						delay: this.duration,
						callback: this.triggerTimeout,
						callbackScope: this
					}), r.GameAnalytics.addProgressionEvent(r.EGAProgressionStatus.Start, this.sceneName)
				}, o.prototype.onGameStarted = function () {}, o.prototype.triggerTimeout = function ()
				{
					this.clearTimers(), this._timeout()
				}, o.prototype.clearTimers = function ()
				{
					this.startTimer && (this.startTimer.paused = !0, this.startTimer.remove()), this.gameplayTimer && (this.gameplayTimer.paused = !0, this.gameplayTimer.remove()), this.winGameTimer && (this.winGameTimer.paused = !0, this.winGameTimer.remove())
				}, o.prototype.winGame = function (t)
				{
					void 0 === t && (t = 0), this.changeGameState(i.CONST.GAMESTATE.WIN), this.clearTimers(), this.winGameTimer = this.time.addEvent(
					{
						delay: t,
						callback: this.handleWinGame,
						callbackScope: this
					}), r.GameAnalytics.addProgressionEvent(r.EGAProgressionStatus.Complete, this.sceneName)
				}, o.prototype.handleWinGame = function ()
				{
					PokiSDK.happyTime(.5), this._afterWin(), this.loadNextScene()
				}, o.prototype.loadNextScene = function ()
				{
					this.areAllAssetsLoaded(this.nextScene) ? (this.scene.stop(this.sceneName), this.scene.start(this.nextScene)) : this.changeGameState(i.CONST.GAMESTATE.LOADNEXTLEVEL)
				}, o.prototype.loseGame = function (t)
				{
					void 0 === t && (t = 0), this.changeGameState(i.CONST.GAMESTATE.LOSE), this.clearTimers(), this.winGameTimer = this.time.addEvent(
					{
						delay: t,
						callback: this.handleLoseGame,
						callbackScope: this
					}), r.GameAnalytics.addProgressionEvent(r.EGAProgressionStatus.Fail, this.sceneName)
				}, o.prototype.handleLoseGame = function ()
				{
					this.showLoseUI(!0), this._afterLoss()
				}, o.prototype.restartGame = function (t)
				{
					void 0 === t && (t = !1), !t && this.rewardedBreakRequested || (this.scene.stop(this.sceneName), this.scene.start(this.sceneName))
				}, o.prototype.skipLevel = function ()
				{
					var t = this;
					this.rewardedBreakRequested || (this.rewardedBreakRequested = !0, this.audioPlugin.beforeCommercialBreak(), PokiSDK.rewardedBreak().then(function (e)
					{
						t.audioPlugin.afterCommercialBreak(), e ? (r.GameAnalytics.addDesignEvent("Ads:Rewarded:Completed"), t.loadNextScene(), t.registry.set(i.CONST.REGISTRY.SKIPUSED, !0)) : (t.rewardedBreakRequested = !1, console.log("Ad failed!"), r.GameAnalytics.addDesignEvent("Ads:Rewarded:Failed"))
					}))
				}, o.prototype.arcadeContinueLevel = function (t)
				{
					var e = this;
					this.rewardedBreakRequested || (this.rewardedBreakRequested = !0, this.audioPlugin.beforeCommercialBreak(), PokiSDK.rewardedBreak().then(function (i)
					{
						e.audioPlugin.afterCommercialBreak(), i ? (r.GameAnalytics.addDesignEvent("Ads:Rewarded:Completed"), e.storagePlugin.setItem(e.sceneName + "restart", JSON.stringify(t)), e.restartGame(!0)) : (e.rewardedBreakRequested = !1, console.log("Ad failed!"), r.GameAnalytics.addDesignEvent("Ads:Rewarded:Failed"))
					}))
				}, o.prototype.isCurrentState = function (t)
				{
					return this.currentState === t
				}, o.prototype.changeGameplayTimerDuration = function (t)
				{
					this.gameplayTimer && (this.gameplayTimer.elapsed -= t)
				}, o.prototype.addAnimation = function (t, e, i)
				{
					void 0 === i && (i = 60);
					var a = this.add.image(0, 0, t).setScale(0, 0),
						r = this.cache.json.get(e),
						o = new s.UnityAnimation(a, r, i);
					return this.animations.push(o), o
				}, o.prototype.getUnityY = function (t)
				{
					return 4.5 - 9 * t / 480
				}, o.prototype.getRandomInt = function (t, e)
				{
					return t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t + 1)) + t
				}, o.prototype.getDetune = function ()
				{
					return this.getRandomInt(-200, 200)
				}, o.prototype.areAllAssetsLoaded = function (t)
				{
					return void 0 === t && (t = this.sceneName), this.progressiveLoadScene.isSceneLoaded(t)
				}, o.prototype.setHighscore = function (t)
				{
					this.storagePlugin.setItem(this.getHighscoreKey(), t.toString())
				}, o.prototype.getHighscore = function ()
				{
					var t = this.storagePlugin.getItem(this.getHighscoreKey(), "");
					return t ? parseInt(t) : -1
				}, o.prototype.getHighscoreKey = function ()
				{
					return this.sceneName + "highscore"
				}, o.prototype.sendFinalScoreAnalyticsEvent = function (t)
				{
					r.GameAnalytics.addDesignEvent(this.sceneName + ":FinalScore", Math.round(t))
				}, o.prototype.setDebugDraggable = function (t)
				{
					t.setInteractive(
					{
						useHandCursor: !0,
						draggable: !0
					}), t.on("drag", function (e, i, s)
					{
						t.setPosition(i, s)
					}), t.on("dragend", function (e, i, s, a)
					{
						console.log("Image position: {x: " + t.x + ", y: " + t.y + "}")
					})
				}, o
			}(Phaser.Scene);
		exports.MinigameScene = o;
	},
	{
		"../../CONST": "HmIA",
		"./Animation": "qoOj",
		"../../components/HomeButton": "fGrI",
		"gameanalytics": "ublV"
	}],
	"0w1H": [function (require, module, exports)
	{
		"use strict";
		var i = this && this.__extends || function ()
		{
			var i = function (t, e)
			{
				return (i = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (i, t)
					{
						i.__proto__ = t
					} || function (i, t)
					{
						for (var e in t) t.hasOwnProperty(e) && (i[e] = t[e])
					})(t, e)
			};
			return function (t, e)
			{
				function s()
				{
					this.constructor = t
				}
				i(t, e), t.prototype = null === e ? Object.create(e) : (s.prototype = e.prototype, new s)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var t = require("../CONST"),
			e = require("./generic/MinigameScene"),
			s = function (e)
			{
				function s()
				{
					var i = e.call(this,
					{
						sceneName: t.CONST.SCENES.BIRTH,
						duration: 6e3,
						startScreenColor: 12713947,
						startText: "GET BORN!",
						startTextColor: 3289650,
						endScreen: t.CONST.BIRTH.END,
						nextScene: t.CONST.SCENES.TALK,
						endButtons:
						{
							normalNoSkip:
							{
								x: 426.5,
								y: 411,
								scale: 1.3
							},
							normalWithSkip:
							{
								x: 283,
								y: 411,
								scale: 1.3
							},
							skip:
							{
								x: 570,
								y: 411,
								scale: 1.3
							}
						}
					}) || this;
					return i.mamice = [], i.clickableWidth = 100, i.missTimePunishment = 500, i.clickerSwingTime = 750, i.swingStartX = 277, i.swingEndX = 807, i.babyPositions = [
					{
						rot: 80,
						x: 242,
						y: 257
					},
					{
						rot: 90,
						x: 262,
						y: 263
					},
					{
						rot: 89,
						x: 275,
						y: 263
					},
					{
						rot: 87,
						x: 289,
						y: 265
					},
					{
						rot: 87,
						x: 301,
						y: 263
					}], i
				}
				return i(s, e), s.prototype._init = function ()
				{
					this.clickerMovingRight = !0, this.swingTimer = 0, this.hits = 0, this.mamice = []
				}, s.prototype._preload = function () {}, s.prototype._create = function ()
				{
					var i = this,
						e = this.add.image(0, 0, t.CONST.BIRTH.BACKGROUND).setOrigin(0, 0);
					e.setInteractive(), e.on("pointerdown", function ()
					{
						i.handleClick()
					}), this.baby = this.add.image(301, 266, t.CONST.BIRTH.BABY).setAngle(87.5).setScale(.67, .67), this.add.image(145, 433, t.CONST.BIRTH.PUSH), this.add.image(717, 262, t.CONST.BIRTH.STROLLER).setDepth(100), this.swing = this.add.image(542, 429, t.CONST.BIRTH.SWING), this.clicker = this.add.image(542, 429, t.CONST.BIRTH.CLICKER), this.createMamice(226, 299), this.setMamicaState(this.hits), this.winAudio = this.sound.add(t.CONST.AUDIO.CRY,
					{
						loop: !1
					})
				}, s.prototype.createMamice = function (i, e)
				{
					var s = this;
					[t.CONST.BIRTH.MAMICA1, t.CONST.BIRTH.MAMICA2, t.CONST.BIRTH.MAMICA3, t.CONST.BIRTH.MAMICA4, t.CONST.BIRTH.MAMICA5].forEach(function (t)
					{
						s.mamice.push(s.add.image(i, e, t).setVisible(!1).setDepth(150))
					})
				}, s.prototype.setMamicaState = function (i)
				{
					if (i >= this.mamice.length) this.triggerWin();
					else
					{
						for (var t = 0; t < this.mamice.length; t++) this.mamice[t].setVisible(t === i);
						this.baby.setPosition(this.babyPositions[i].x, this.babyPositions[i].y).setAngle(this.babyPositions[i].rot)
					}
				}, s.prototype._update = function (i, e)
				{
					if (this.isCurrentState(t.CONST.GAMESTATE.PLAYING)) this.moveClicker(e);
					else if (this.isCurrentState(t.CONST.GAMESTATE.WIN))
					{
						if (!this.babyFollow) return;
						this.babyFollow.update(e)
					}
				}, s.prototype.moveClicker = function (i)
				{
					this.clickerMovingRight ? (this.swingTimer += i / this.clickerSwingTime, this.swingTimer >= 1 && (this.clickerMovingRight = !this.clickerMovingRight, this.swingTimer = 1)) : (this.swingTimer -= i / this.clickerSwingTime, this.swingTimer <= 0 && (this.clickerMovingRight = !this.clickerMovingRight, this.swingTimer = 0)), this.clicker.x = Phaser.Math.Interpolation.SmoothStep(this.swingTimer, this.swingStartX, this.swingEndX)
				}, s.prototype.handleClick = function ()
				{
					this.isCurrentState(t.CONST.GAMESTATE.PLAYING) && (this.isClickerWithinLimits() ? (this.hits++, this.setMamicaState(this.hits)) : (this.changeGameplayTimerDuration(-this.missTimePunishment), this.cameras.main.flash(200, 255, 64, 43)))
				}, s.prototype.isClickerWithinLimits = function ()
				{
					return Phaser.Math.Difference(this.clicker.x, this.swing.x) < this.clickableWidth
				}, s.prototype._timeout = function ()
				{
					this.loseGame()
				}, s.prototype._afterLoss = function () {}, s.prototype._afterWin = function ()
				{
					this.winAudio.stop()
				}, s.prototype.triggerWin = function ()
				{
					this.winGame(1500), this.winAnim(), this.winAudio.play()
				}, s.prototype.winAnim = function ()
				{
					var i = new Phaser.Curves.Path(310, 256).splineTo([527, 129, 733, 246]);
					this.babyFollow = this.add.follower(i, 0, 0, t.CONST.BIRTH.BABY).setAngle(87.5).setScale(.67, .67), this.babyFollow.startFollow(
					{
						positionOnPath: !0,
						duration: 1e3,
						rotateToPath: !1,
						from: 0,
						to: 1
					}), this.babyFollow.lifeTimer = 0, this.babyFollow.update = function (i)
					{
						this.lifeTimer += i, this.lifeTimer > 1e3 || this.setAngle(this.angle + 360 * i / 1e3)
					}, this.baby.setVisible(!1)
				}, s
			}(e.MinigameScene);
		exports.BirthScene = s;
	},
	{
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5"
	}],
	"P8E+": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, i)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function (e, i)
			{
				function n()
				{
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../CONST"),
			i = require("./generic/MinigameScene"),
			n = function (i)
			{
				function n()
				{
					var t = i.call(this,
					{
						sceneName: e.CONST.SCENES.SCHOOL,
						duration: 7e3,
						startScreenColor: 16630649,
						startText: "STUDY!",
						startTextColor: 3289650,
						endScreen: e.CONST.SCHOOL.END,
						nextScene: e.CONST.SCENES.PUBERTY,
						endButtons:
						{
							normalNoSkip:
							{
								x: 426.5,
								y: 386,
								scale: 1.3
							},
							normalWithSkip:
							{
								x: 283,
								y: 386,
								scale: 1.3
							},
							skip:
							{
								x: 570,
								y: 386,
								scale: 1.3
							}
						}
					}) || this;
					return t.noteValues = [
					{
						x: 505,
						y: 189,
						path: e.CONST.SCHOOL.NOTE_3
					},
					{
						x: 594,
						y: 195,
						path: e.CONST.SCHOOL.NOTE_4
					},
					{
						x: 605,
						y: 355,
						path: e.CONST.SCHOOL.NOTE_17
					},
					{
						x: 693,
						y: 289,
						path: e.CONST.SCHOOL.NOTE_20
					},
					{
						x: 703,
						y: 369,
						path: e.CONST.SCHOOL.NOTE_27
					},
					{
						x: 540,
						y: 285,
						path: e.CONST.SCHOOL.NOTE_H2NO
					},
					{
						x: 695,
						y: 206,
						path: e.CONST.SCHOOL.NOTE_YES
					}], t.endPoints = [
					{
						x: 265,
						y: 276,
						note: e.CONST.SCHOOL.NOTE_3
					},
					{
						x: 316,
						y: 183,
						note: e.CONST.SCHOOL.NOTE_17
					},
					{
						x: 305,
						y: 343,
						note: e.CONST.SCHOOL.NOTE_20
					}], t.maxEndDistance = 54, t.animFPS = 60, t.animTimer = 0, t.notes = [], t.isAnimating = !1, t
				}
				return t(n, i), n.prototype._init = function ()
				{
					this.notes = [], this.animTimer = 0, this.isAnimating = !1
				}, n.prototype._preload = function () {}, n.prototype._create = function ()
				{
					this.add.image(456, 240, e.CONST.SCHOOL.BACKGROUND), this.boyImage = this.add.image(425, 394, e.CONST.SCHOOL.BOY).setDepth(100), this.createNotes(), this.endAnimation = this.cache.json.get(e.CONST.ANIMATIONS.SCHOOLEND)
				}, n.prototype.createNotes = function ()
				{
					var t = this;
					this.noteValues.forEach(function (e)
					{
						t.notes.push(t.add.image(e.x, e.y, e.path).setDepth(50).setInteractive(t.input.makePixelPerfect(50)))
					}), this.notes.forEach(function (e)
					{
						t.input.setDraggable(e)
					}), this.input.on("dragstart", function (t, i)
					{
						this.children.bringToTop(i), this.children.bringToTop(this.boyImage), this.sound.play(e.CONST.AUDIO.GRAB,
						{
							detune: this.getDetune()
						})
					}, this), this.input.on("drag", function (t, e, i, n)
					{
						e.x = i, e.y = n
					}), this.input.on("dragend", function (t, i, n)
					{
						this.sound.play(e.CONST.AUDIO.GRAB,
						{
							detune: this.getDetune()
						})
					}, this)
				}, n.prototype._update = function (t, e)
				{
					this.isAnimating && (this.animTimer += e, this.positionImageOnAnimation(this.animTimer, this.endImage, this.endAnimation))
				}, n.prototype._timeout = function ()
				{
					this.checkForWin()
				}, n.prototype.checkForWin = function ()
				{
					var t = this,
						e = !0;
					this.endPoints.forEach(function (i)
					{
						for (var n = 0; n < t.notes.length; n++)
						{
							var o = t.notes[n];
							if (o.texture.key === i.note) Phaser.Math.Distance.Between(o.x, o.y, i.x, i.y) > t.maxEndDistance && (e = !1)
						}
					}), e ? this.triggerWin() : this.triggerLoss()
				}, n.prototype._afterLoss = function ()
				{
					this.notes.forEach(function (t)
					{
						t.setVisible(!1)
					}), this.boyImage.setVisible(!1), this.endImage.setVisible(!1)
				}, n.prototype._afterWin = function ()
				{
					this.endImage.setVisible(!1)
				}, n.prototype.triggerLoss = function ()
				{
					this.loseGame(1500), this.endGameAnim(!1)
				}, n.prototype.triggerWin = function ()
				{
					this.winGame(1500), this.endGameAnim(!0), this.children.bringToTop(this.endImage)
				}, n.prototype.endGameAnim = function (t)
				{
					var i = t ? e.CONST.SCHOOL.WINIMAGE : e.CONST.SCHOOL.LOSEIMAGE;
					this.endImage = this.add.image(0, 0, i).setScale(0, 0).setDepth(900), this.animTimer = 0, this.isAnimating = !0
				}, n.prototype.positionImageOnAnimation = function (t, e, i, n, o, s, a)
				{
					void 0 === n && (n = 0), void 0 === o && (o = 0), void 0 === s && (s = 0), void 0 === a && (a = 1);
					var r = Math.floor(t * (this.animFPS / 1e3));
					r >= i.frames.length && (r = i.frames.length - 1);
					var h = i.frames[r];
					e.setPosition(h.x + n, h.y + o).setScale(parseFloat(h.scaleX) * a, parseFloat(h.scaleY) * a).setAngle(parseFloat(h.angle) + s)
				}, n
			}(i.MinigameScene);
		exports.SchoolScene = n;
	},
	{
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5"
	}],
	"cK6z": [function (require, module, exports)
	{
		"use strict";
		var e = this && this.__extends || function ()
		{
			var e = function (t, i)
			{
				return (e = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (e, t)
					{
						e.__proto__ = t
					} || function (e, t)
					{
						for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
					})(t, i)
			};
			return function (t, i)
			{
				function a()
				{
					this.constructor = t
				}
				e(t, i), t.prototype = null === i ? Object.create(i) : (a.prototype = i.prototype, new a)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var t = require("../CONST"),
			i = require("./generic/MinigameScene"),
			a = function (i)
			{
				function a()
				{
					var e = i.call(this,
					{
						sceneName: t.CONST.SCENES.PUBERTY,
						duration: 15e3,
						startScreenColor: 16040447,
						startText: "PUBERTY!",
						startTextColor: 3289650,
						endScreen: t.CONST.PUBERTY.END,
						nextScene: t.CONST.SCENES.FINDHER,
						endButtons:
						{
							normalNoSkip:
							{
								x: 426.5,
								y: 411,
								scale: 1.3
							},
							normalWithSkip:
							{
								x: 283,
								y: 411,
								scale: 1.3
							},
							skip:
							{
								x: 570,
								y: 411,
								scale: 1.3
							}
						}
					}) || this;
					e.animationAngle = 0, e.spawnRate = {
						min: 300,
						max: 700
					}, e.pimpleSize = {
						start: .2,
						end: 1
					}, e.pimpleTimeToSplash = 2500, e.pimpleTimeToDestroy = 300, e.animFPS = 60, e.spawnAreas = [
					{
						x1: 325,
						x2: 515,
						y1: 200,
						y2: 415
					},
					{
						x1: 290,
						x2: 325,
						y1: 200,
						y2: 390
					},
					{
						x1: 250,
						x2: 290,
						y1: 220,
						y2: 330
					},
					{
						x1: 515,
						x2: 560,
						y1: 260,
						y2: 390
					},
					{
						x1: 560,
						x2: 600,
						y1: 220,
						y2: 350
					},
					{
						x1: 330,
						x2: 380,
						y1: 160,
						y2: 200
					}], e.spawnTimer = 0, e.pimples = [], e.animTimer = 0, e.isAnimating = !1;
					var a = 0;
					return e.spawnAreas.forEach(function (e)
					{
						a += (e.x2 - e.x1) * (e.y2 - e.y1), e.areaSum = a
					}), e
				}
				return e(a, i), a.prototype._init = function ()
				{
					this.spawnTimer = 0, this.pimples = [], this.animTimer = 0, this.isAnimating = !1
				}, a.prototype._preload = function () {}, a.prototype._create = function ()
				{
					this.input.topOnly = !1, this.add.image(442, 380, t.CONST.PUBERTY.BACKGROUND).setScale(1.252, 1.252).setDepth(0), this.add.image(135, 424, t.CONST.PUBERTY.POP_TEXT).setDepth(1), this.createParticles(), this.endAnimation = this.cache.json.get(t.CONST.ANIMATIONS.PUBERTYEND)
				}, a.prototype.createParticles = function ()
				{
					var e = this.add.particles(t.CONST.PUBERTY.PARTICLE).setDepth(9);
					this.popParticles = e.createEmitter(
					{
						active: !0,
						visible: !0,
						on: !1,
						frequency: -1,
						gravityY: 1e3,
						timeScale: 1,
						blendMode: 0,
						accelerationY: -200,
						lifespan: 500,
						scale:
						{
							start: 1,
							end: 0,
							ease: "Quad.easeOut"
						},
						speed:
						{
							min: -530,
							max: 530,
							ease: "Linear"
						}
					}), this.failParticles = e.createEmitter(
					{
						active: !0,
						visible: !0,
						on: !1,
						radial: !0,
						frequency: 50,
						maxParticles: 200,
						gravityY: 1e3,
						timeScale: 1,
						blendMode: 0,
						accelerationY: -100,
						quantity: 2,
						lifespan: 2e3,
						scale:
						{
							start: 1,
							end: 0,
							ease: "Quad.easeOut"
						},
						speed:
						{
							min: -530,
							max: 530,
							ease: "Linear"
						}
					})
				}, a.prototype._update = function (e, i)
				{
					this.isAnimating && (this.animTimer += i, this.positionImageOnAnimation(this.animTimer, this.endImage, this.endAnimation, 0, 250, this.animationAngle, 1.1)), this.isCurrentState(t.CONST.GAMESTATE.PLAYING) && (this.spawnTimer -= i, this.spawnTimer <= 0 && (this.spawnTimer = this.calculateNewTimer(), this.spawnPimple()), this.pimples.forEach(function (e)
					{
						e.update(i)
					}))
				}, a.prototype.calculateNewTimer = function ()
				{
					return this.spawnRate.min + Math.random() * (this.spawnRate.max - this.spawnRate.min)
				}, a.prototype.spawnPimple = function ()
				{
					var e = this,
						i = this.calculateNewSpawnPosition(),
						a = this.add.image(i.x, i.y, t.CONST.PUBERTY.PIMPLE).setDepth(10).setInteractive(
						{
							useHandCursor: !0
						}).setScale(this.pimpleSize.start, this.pimpleSize.start);
					a.on("pointerdown", function ()
					{
						a.destroy()
					}), a.lifeTime = 0, a.deathTime = 0, a.deathSize = 1, a.isAlive = !0, a.failed = !1, a.update = function (t)
					{
						if (a.isAlive)
						{
							if (a.lifeTime += t, a.lifeTime > e.pimpleTimeToSplash) return a.failed = !0, void a.destroy();
							var i = e.pimpleSize.start + a.lifeTime / e.pimpleTimeToSplash * (e.pimpleSize.end - e.pimpleSize.start);
							a.setScale(i, i)
						}
						else
						{
							if (a.deathTime += t, a.deathTime > e.pimpleTimeToDestroy) return void a.setVisible(!1);
							i = a.deathSize - a.deathTime / e.pimpleTimeToDestroy * a.deathSize;
							a.setScale(i, i)
						}
					}, a.destroy = function ()
					{
						a.isAlive && (a.isAlive = !1, a.setInteractive(!1), a.deathSize = a.scaleX, a.failed ? (a.setVisible(!1), e.triggerLoss(), e.failParticles.setPosition(a.x, a.y).start()) : (e.sound.play(t.CONST.AUDIO.POP,
						{
							detune: e.getDetune()
						}), e.popParticles.explode(30, a.x, a.y)))
					}, this.pimples.push(a)
				}, a.prototype.calculateNewSpawnPosition = function ()
				{
					for (var e = this.spawnAreas[this.spawnAreas.length - 1].areaSum, t = Math.floor(Math.random() * e), i = 0; i < this.spawnAreas.length; i++)
						if (this.spawnAreas[i].areaSum >= t) return {
							x: this.randomIntFromInterval(this.spawnAreas[i].x1, this.spawnAreas[i].x2),
							y: this.randomIntFromInterval(this.spawnAreas[i].y1, this.spawnAreas[i].y2)
						}
				}, a.prototype.randomIntFromInterval = function (e, t)
				{
					return Math.floor(Math.random() * (t - e + 1) + e)
				}, a.prototype._timeout = function ()
				{
					this.triggerWin()
				}, a.prototype._afterLoss = function () {}, a.prototype._afterWin = function () {}, a.prototype.triggerWin = function ()
				{
					this.winGame(2300), this.animationAngle = 0, this.endGameAnim()
				}, a.prototype.triggerLoss = function ()
				{
					this.loseGame(1500), this.animationAngle = 180, this.endGameAnim()
				}, a.prototype.endGameAnim = function ()
				{
					this.endImage = this.add.image(0, 0, t.CONST.PUBERTY.BRACES).setScale(0, 0).setDepth(5), this.animTimer = 0, this.isAnimating = !0
				}, a.prototype.positionImageOnAnimation = function (e, t, i, a, n, s, r)
				{
					void 0 === a && (a = 0), void 0 === n && (n = 0), void 0 === s && (s = 0), void 0 === r && (r = 1);
					var o = Math.floor(e * (this.animFPS / 1e3));
					o >= i.frames.length && (o = i.frames.length - 1);
					var p = i.frames[o];
					t.setPosition(p.x + a, p.y + n).setScale(parseFloat(p.scaleX) * r, parseFloat(p.scaleY) * r).setAngle(parseFloat(p.angle) + s)
				}, a
			}(i.MinigameScene);
		exports.PubertyScene = a;
	},
	{
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5"
	}],
	"vTe4": [function (require, module, exports)
	{
		"use strict";
		var e = this && this.__extends || function ()
		{
			var e = function (t, i)
			{
				return (e = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (e, t)
					{
						e.__proto__ = t
					} || function (e, t)
					{
						for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
					})(t, i)
			};
			return function (t, i)
			{
				function n()
				{
					this.constructor = t
				}
				e(t, i), t.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var t = require("../CONST"),
			i = require("./generic/MinigameScene"),
			n = function (i)
			{
				function n()
				{
					var e = i.call(this,
					{
						sceneName: t.CONST.SCENES.TALK,
						duration: 17e3,
						startScreenColor: 12713983,
						startText: "TALK!",
						startTextColor: 3289650,
						endScreen: t.CONST.TALK.END,
						nextScene: t.CONST.SCENES.SCHOOL,
						endButtons:
						{
							normalNoSkip:
							{
								x: 505,
								y: 411,
								scale: 1.25
							},
							normalWithSkip:
							{
								x: 362,
								y: 411,
								scale: 1.25
							},
							skip:
							{
								x: 649,
								y: 411,
								scale: 1.25
							}
						}
					}) || this;
					return e.timeToReachMaxSpeed = 7e3, e.maxSpeed = 426.5, e.noteScrollOffset = 70, e.notePositions = [
					{
						x: 490,
						y: 281,
						key: t.CONST.TALK.NOTE_4
					},
					{
						x: 638,
						y: 124,
						key: t.CONST.TALK.NOTE_3
					},
					{
						x: 799,
						y: 285,
						key: t.CONST.TALK.NOTE_2
					},
					{
						x: 968,
						y: 127,
						key: t.CONST.TALK.NOTE_1
					},
					{
						x: 1274,
						y: 265,
						key: t.CONST.TALK.NOTE_4
					},
					{
						x: 1137,
						y: 190,
						key: t.CONST.TALK.NOTE_2
					},
					{
						x: 1660,
						y: 117,
						key: t.CONST.TALK.NOTE_3
					},
					{
						x: 1777,
						y: 256,
						key: t.CONST.TALK.NOTE_2
					},
					{
						x: 1914,
						y: 189,
						key: t.CONST.TALK.NOTE_4
					},
					{
						x: 2135,
						y: 112,
						key: t.CONST.TALK.NOTE_3
					},
					{
						x: 2318,
						y: 283,
						key: t.CONST.TALK.NOTE_1
					},
					{
						x: 2463,
						y: 148,
						key: t.CONST.TALK.NOTE_2
					},
					{
						x: 2608,
						y: 283,
						key: t.CONST.TALK.NOTE_3
					},
					{
						x: 2901,
						y: 143,
						key: t.CONST.TALK.NOTE_4
					},
					{
						x: 3099,
						y: 265,
						key: t.CONST.TALK.NOTE_3
					},
					{
						x: 3326,
						y: 139,
						key: t.CONST.TALK.NOTE_1
					},
					{
						x: 3563,
						y: 281,
						key: t.CONST.TALK.NOTE_4
					},
					{
						x: 3751,
						y: 287,
						key: t.CONST.TALK.NOTE_3
					},
					{
						x: 3929,
						y: 284,
						key: t.CONST.TALK.NOTE_1
					},
					{
						x: 4181,
						y: 209,
						key: t.CONST.TALK.NOTE_4
					},
					{
						x: 4426,
						y: 130,
						key: t.CONST.TALK.NOTE_3
					},
					{
						x: 4657,
						y: 215,
						key: t.CONST.TALK.NOTE_2
					},
					{
						x: 4851,
						y: 293,
						key: t.CONST.TALK.NOTE_1
					},
					{
						x: 5024,
						y: 187,
						key: t.CONST.TALK.NOTE_3
					},
					{
						x: 5254,
						y: 284,
						key: t.CONST.TALK.NOTE_3
					},
					{
						x: 5425,
						y: 91,
						key: t.CONST.TALK.NOTE_2
					},
					{
						x: 5609,
						y: 95,
						key: t.CONST.TALK.NOTE_1
					}], e.timer = 0, e.speed = 0, e.notes = [], e.reachedEnd = !1, e.onGameStarted = function ()
					{
						e.audio.play()
					}, e
				}
				return e(n, i), n.prototype._init = function ()
				{
					this.timer = 0, this.speed = 0, this.notes = [], this.reachedEnd = !1
				}, n.prototype._preload = function () {}, n.prototype._create = function ()
				{
					this.cameras.main.setBounds(0, 0, 8e3, 480), this.add.image(6664, 240, t.CONST.TALK.ENDSTRETCH).setScale(578, 1), this.add.image(3449, 240, t.CONST.TALK.STRETCHBACKGROUND).setScale(33.148, 1), this.add.image(0, 0, t.CONST.TALK.STARTBACKGROUND).setOrigin(0, 0).setDepth(0), this.add.image(252, 89, t.CONST.TALK.TAP), this.add.image(5763, 240, t.CONST.TALK.ENDBACKGROUND), this.add.image(6091, 305, t.CONST.TALK.SMILE).setScale(.15, .15).setAngle(9.6), this.createNotes(), this.audio = this.sound.add(t.CONST.AUDIO.TALK,
					{
						loop: !1
					})
				}, n.prototype.createNotes = function ()
				{
					var e = this;
					this.notePositions.forEach(function (t)
					{
						var i = e.add.image(t.x, t.y, t.key).setScale(.86, .86).setInteractive().setDepth(10);
						i.isAlive = !0, i.on("pointerdown", function ()
						{
							i.playDeathAnimation(), i.isAlive = !1
						}), i.update = function (e)
						{
							i.isAlive && i.checkBounds()
						}, i.checkBounds = function ()
						{
							i.x < e.cameras.main.scrollX - e.noteScrollOffset && e.triggerLoss()
						}, i.playDeathAnimation = function ()
						{
							e.tweens.timeline(
							{
								tweens: [
								{
									targets: i,
									angle: "-=14",
									duration: 116,
									ease: "Sine.easeInOut"
								},
								{
									targets: i,
									angle: "+=180",
									duration: 300,
									ease: "Sine.easeIn"
								}]
							}), e.tweens.timeline(
							{
								tweens: [
								{
									targets: i,
									scaleX: "*=1.5",
									scaleY: "*=1.5",
									duration: 116,
									ease: "Sine.easeInOut"
								},
								{
									targets: i,
									scaleX: 0,
									scaleY: 0,
									duration: 300,
									ease: "Sine.easeIn"
								}]
							})
						}, e.notes.push(i)
					})
				}, n.prototype._update = function (e, i)
				{
					this.isCurrentState(t.CONST.GAMESTATE.START) || (this.moveCamera(i), this.isCurrentState(t.CONST.GAMESTATE.PLAYING) && this.notes.forEach(function (e)
					{
						e.update(i)
					}))
				}, n.prototype.moveCamera = function (e)
				{
					this.reachedEnd || (this.timer += e / this.timeToReachMaxSpeed, this.speed = Phaser.Math.Interpolation.SmoothStep(this.timer, 0, this.maxSpeed), this.cameras.main.scrollX = this.cameras.main.scrollX + this.speed * e / 1e3)
				}, n.prototype._timeout = function ()
				{
					this.triggerWin()
				}, n.prototype._afterLoss = function () {}, n.prototype._afterWin = function ()
				{
					this.audio.pause()
				}, n.prototype.triggerWin = function ()
				{
					this.reachedEnd = !0, this.winGame(1e3)
				}, n.prototype.triggerLoss = function ()
				{
					this.audio.pause(), this.loseGame(0)
				}, n
			}(i.MinigameScene);
		exports.TalkScene = n;
	},
	{
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5"
	}],
	"46sR": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, n)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
					})(e, n)
			};
			return function (e, n)
			{
				function i()
				{
					this.constructor = e
				}
				t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../CONST"),
			n = require("./generic/MinigameScene"),
			i = function (n)
			{
				function i()
				{
					var t = n.call(this,
					{
						sceneName: e.CONST.SCENES.COFFEE,
						duration: 6e3,
						startScreenColor: 16748688,
						startText: "INTERN!",
						startTextColor: 3289650,
						endScreen: e.CONST.COFFEE.END,
						nextScene: e.CONST.SCENES.MARRIAGE,
						endButtons:
						{
							normalNoSkip:
							{
								x: 439,
								y: 368,
								scale: 1.25
							},
							normalWithSkip:
							{
								x: 300,
								y: 368,
								scale: 1.25
							},
							skip:
							{
								x: 589,
								y: 368,
								scale: 1.25
							}
						}
					}) || this;
					return t.ingredientConfig = [
					{
						cupImage: e.CONST.COFFEE.CUP_COFFEE,
						normalImage: e.CONST.COFFEE.NORMAL_COFFEE,
						startX: 99,
						startY: 108,
						correct: !0
					},
					{
						cupImage: e.CONST.COFFEE.CUP_EGG,
						normalImage: e.CONST.COFFEE.NORMAL_EGG,
						startX: 525,
						startY: 68,
						correct: !1
					},
					{
						cupImage: e.CONST.COFFEE.CUP_MILK,
						normalImage: e.CONST.COFFEE.NORMAL_MILK,
						startX: 780,
						startY: 386,
						correct: !0
					},
					{
						cupImage: e.CONST.COFFEE.CUP_PEPPER,
						normalImage: e.CONST.COFFEE.NORMAL_PEPPER,
						startX: 201,
						startY: 191,
						correct: !1
					},
					{
						cupImage: e.CONST.COFFEE.CUP_SALT,
						normalImage: e.CONST.COFFEE.NORMAL_SALT,
						startX: 650,
						startY: 167,
						correct: !1
					},
					{
						cupImage: e.CONST.COFFEE.CUP_SCREW,
						normalImage: e.CONST.COFFEE.NORMAL_SCREW,
						startX: 174,
						startY: 380,
						correct: !1
					},
					{
						cupImage: e.CONST.COFFEE.CUP_SUGAR,
						normalImage: e.CONST.COFFEE.NORMAL_SUGAR,
						startX: 771,
						startY: 91,
						correct: !0
					},
					{
						cupImage: e.CONST.COFFEE.CUP_TOMATO,
						normalImage: e.CONST.COFFEE.NORMAL_TOMATO,
						startX: 52,
						startY: 279,
						correct: !1
					},
					{
						cupImage: e.CONST.COFFEE.CUP_CHEESE,
						normalImage: e.CONST.COFFEE.NORMAL_CHEESE,
						startX: 644,
						startY: 322,
						correct: !1
					}], t.cupPosition = {
						x: 426.5,
						y: 240
					}, t.maxCupDistance = 85.33, t.animFPS = 60, t.ingredients = [], t.cupIngredientDepth = 10, t.correctCounter = 0, t.wrongCounter = 0, t.animTimer = 0, t.isAnimating = !1, t
				}
				return t(i, n), i.prototype._init = function ()
				{
					this.ingredients = [], this.cupIngredientDepth = 10, this.correctCounter = 0, this.wrongCounter = 0, this.animTimer = 0, this.isAnimating = !1
				}, i.prototype._preload = function () {}, i.prototype._create = function ()
				{
					this.add.image(0, 0, e.CONST.COFFEE.BACKGROUND).setOrigin(0, 0).setDepth(0), this.add.image(426.5, 431, e.CONST.COFFEE.MAKECOFFEETEXT).setDepth(1), this.spawnIngredients(), this.endAnimation = this.cache.json.get(e.CONST.ANIMATIONS.COFFEEEND)
				}, i.prototype.spawnIngredients = function ()
				{
					var t = this;
					this.ingredientConfig.forEach(function (e)
					{
						var n = t.add.image(t.cupPosition.x, t.cupPosition.y, e.cupImage).setVisible(!1),
							i = t.add.image(e.startX, e.startY, e.normalImage).setDepth(50).setInteractive(t.input.makePixelPerfect());
						t.input.setDraggable(i), t.ingredients.push(
						{
							key: e.normalImage,
							normal: i,
							cup: n,
							correct: e.correct,
							putInCup: function (e, n)
							{
								e.normal.setActive(!1).setVisible(!1), e.cup.setVisible(!0).setDepth(n), e.correct ? t.correctCounter++ : t.wrongCounter++
							}
						})
					}), this.input.on("dragstart", function (t, n)
					{
						this.isCurrentState(e.CONST.GAMESTATE.PLAYING) && (this.children.bringToTop(n), this.sound.play(e.CONST.AUDIO.GRAB,
						{
							detune: this.getDetune()
						}))
					}, this), this.input.on("drag", function (t, e, n, i)
					{
						e.x = n, e.y = i
					}), this.input.on("dragend", function (t, n, i)
					{
						this.isCurrentState(e.CONST.GAMESTATE.PLAYING) && (this.PutInCup(n), this.sound.play(e.CONST.AUDIO.GRAB,
						{
							detune: this.getDetune()
						}))
					}, this)
				}, i.prototype.PutInCup = function (t)
				{
					var e = this;
					Phaser.Math.Distance.Between(t.x, t.y, this.cupPosition.x, this.cupPosition.y) > this.maxCupDistance || this.ingredients.forEach(function (n)
					{
						if (n.key === t.texture.key) return e.cupIngredientDepth += 1, void n.putInCup(n, e.cupIngredientDepth)
					})
				}, i.prototype._update = function (t, e)
				{
					this.isAnimating && (this.animTimer += e, this.positionImageOnAnimation(this.animTimer, this.endImage, this.endAnimation))
				}, i.prototype._timeout = function ()
				{
					this.checkForWin()
				}, i.prototype.checkForWin = function ()
				{
					3 == this.correctCounter && 0 == this.wrongCounter ? this.triggerWin() : this.triggerLoss()
				}, i.prototype._afterLoss = function ()
				{
					this.hideIngredients()
				}, i.prototype._afterWin = function ()
				{
					this.hideIngredients()
				}, i.prototype.hideIngredients = function ()
				{
					this.ingredients.forEach(function (t)
					{
						t.normal.setVisible(!1), t.cup.setVisible(!1)
					})
				}, i.prototype.triggerWin = function ()
				{
					this.winGame(1500), this.endGameAnim(!0)
				}, i.prototype.triggerLoss = function ()
				{
					this.loseGame(1500), this.endGameAnim(!1)
				}, i.prototype.endGameAnim = function (t)
				{
					var n = t ? e.CONST.COFFEE.WINIMAGE : e.CONST.COFFEE.LOSEIMAGE;
					this.endImage = this.add.image(0, 0, n).setScale(0, 0).setDepth(900), this.animTimer = 0, this.isAnimating = !0
				}, i.prototype.positionImageOnAnimation = function (t, e, n, i, r, o, s)
				{
					void 0 === i && (i = 0), void 0 === r && (r = 0), void 0 === o && (o = 0), void 0 === s && (s = 1);
					var a = Math.floor(t * (this.animFPS / 1e3));
					a >= n.frames.length && (a = n.frames.length - 1);
					var c = n.frames[a];
					e.setPosition(c.x + i, c.y + r).setScale(parseFloat(c.scaleX) * s, parseFloat(c.scaleY) * s).setAngle(parseFloat(c.angle) + o)
				}, i
			}(n.MinigameScene);
		exports.CoffeeScene = i;
	},
	{
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5"
	}],
	"BKKe": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, i)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function (e, i)
			{
				function r()
				{
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../CONST"),
			i = require("./generic/MinigameScene"),
			r = function (i)
			{
				function r()
				{
					var t = i.call(this,
					{
						sceneName: e.CONST.SCENES.FINDHER,
						duration: 2e4,
						startScreenColor: 15137693,
						startText: "DATE!",
						startTextColor: 3289650,
						nextScene: e.CONST.SCENES.BEERPONG,
						endButtons:
						{
							normalNoSkip:
							{
								x: 426.5,
								y: 416,
								scale: 1.3
							},
							normalWithSkip:
							{
								x: 319,
								y: 418,
								scale: 1
							},
							skip:
							{
								x: 534,
								y: 418,
								scale: 1
							}
						}
					}) || this;
					return t.maxCardXDifference = 213, t.maxCardRotation = 20, t.cardReturnTime = 250, t.cardsConfig = [
					{
						cardImage: e.CONST.FINDHER.CUTIE_2,
						mustLike: !0,
						failImage: e.CONST.FINDHER.WRONG_1,
						isFinal: !0
					},
					{
						cardImage: e.CONST.FINDHER.ZOIDBERG,
						mustLike: !0,
						failImage: e.CONST.FINDHER.WRONG_4,
						isFinal: !1
					},
					{
						cardImage: e.CONST.FINDHER.CUTIE_3,
						mustLike: !0,
						failImage: e.CONST.FINDHER.WRONG_1,
						isFinal: !1
					},
					{
						cardImage: e.CONST.FINDHER.NOTCUTE_2,
						mustLike: !1,
						failImage: e.CONST.FINDHER.WRONG_3,
						isFinal: !1
					},
					{
						cardImage: e.CONST.FINDHER.NOTCUTE_1,
						mustLike: !1,
						failImage: e.CONST.FINDHER.WRONG_2,
						isFinal: !1
					},
					{
						cardImage: e.CONST.FINDHER.CUTIE_1,
						mustLike: !0,
						failImage: e.CONST.FINDHER.WRONG_1,
						isFinal: !1
					}], t.animFPS = 45, t.cards = [], t.currentCard = 0, t.animTimer = 0, t.isAnimating = !1, t
				}
				return t(r, i), r.prototype._init = function ()
				{
					this.cards = [], this.animTimer = 0, this.isAnimating = !1, this.currentCard = 0
				}, r.prototype._preload = function () {}, r.prototype._create = function ()
				{
					var t = this;
					this.add.image(0, 0, e.CONST.FINDHER.FOREGROUND).setOrigin(0, 0).setDepth(90), this.add.image(426.5, 240, e.CONST.FINDHER.WHITEBACKGROUND), this.add.image(489, 416, e.CONST.PUBERTY.PIMPLE).setScale(1.1, 1.1).setDepth(80).setInteractive(
					{
						useHandCursor: !0
					}).on("pointerdown", function ()
					{
						t.currentCard < 0 || (t.cards[t.currentCard].timer = 3 * t.cardReturnTime, t.cards[t.currentCard].fullTimer = t.cards[t.currentCard].timer, t.likeCard(!0, t.cards[t.currentCard]))
					}, this), this.add.image(370, 416, e.CONST.PUBERTY.PIMPLE).setScale(1.1, 1.1).setDepth(80).setInteractive(
					{
						useHandCursor: !0
					}).on("pointerdown", function ()
					{
						t.currentCard < 0 || (t.cards[t.currentCard].timer = 3 * t.cardReturnTime, t.cards[t.currentCard].fullTimer = t.cards[t.currentCard].timer, t.likeCard(!1, t.cards[t.currentCard]))
					}, this), this.createCards(), this.endAnimation = this.cache.json.get(e.CONST.ANIMATIONS.FINDHEREND)
				}, r.prototype.likeCard = function (t, e)
				{
					e.tempPosition = {
						x: e.x,
						y: e.y
					}, e.liked = t, e.isActive = !1, t ? e.config.mustLike ? e.config.isFinal && this.triggerWin() : this.triggerLose(e.config.failImage) : e.config.mustLike && this.triggerLose(e.config.failImage), this.currentCard--
				}, r.prototype.createCards = function ()
				{
					var t = this;
					this.cardsConfig.forEach(function (i)
					{
						var r = t.add.image(426.5, 220, i.cardImage).setInteractive(
						{
							useHandCursor: !0
						});
						r.likeImage = t.add.image(282.5 - r.x, 127.5 - r.y, e.CONST.FINDHER.LIKE_OVERLAY).setAngle(-25).setScale(.75), r.nopeImage = t.add.image(562.4 - r.x, 133.3 - r.y, e.CONST.FINDHER.NOPE_OVERLAY).setAngle(25).setScale(.75), r.content = t.add.container(r.x, r.y, [r.likeImage, r.nopeImage]), r.config = i, r.rotationMultiplier = t.maxCardRotation / t.maxCardXDifference, r.tempPosition = {
							x: r.x,
							y: r.y
						}, r.timer = 0, r.fullTimer = 250, r.isDragging = !1, r.isActive = !0, r.liked = !1, t.cards.push(r), t.input.setDraggable(r), r.update = function (t, e)
						{
							var i = -(e.x - 426.5);
							e.setAngle(i * e.rotationMultiplier), e.content.setAngle(e.angle), e.likeImage.setAlpha(-i / 186), e.nopeImage.setAlpha(+i / 186), !e.isDragging && e.timer >= 0 && (e.timer -= t, e.isActive ? (e.x = Phaser.Math.Interpolation.SmoothStep(e.timer / e.fullTimer, 426.5, e.tempPosition.x), e.y = Phaser.Math.Interpolation.SmoothStep(e.timer / e.fullTimer, 220, e.tempPosition.y)) : e.x = Phaser.Math.Interpolation.SmoothStep(e.timer / e.fullTimer, e.liked ? 959 : -106, e.tempPosition.x), e.content.x = e.x, e.content.y = e.y)
						}
					}), this.input.on("dragstart", function (t, i)
					{
						this.isCurrentState(e.CONST.GAMESTATE.PLAYING) && i.isActive && (i.isDragging = !0, i.timer = this.cardReturnTime, i.fullTimer = i.timer)
					}, this), this.input.on("drag", function (t, i, r, n)
					{
						this.isCurrentState(e.CONST.GAMESTATE.PLAYING) && i.isActive && (i.x = r, i.y = n, i.content.x = r, i.content.y = n)
					}, this), this.input.on("dragend", function (t, i, r)
					{
						this.isCurrentState(e.CONST.GAMESTATE.PLAYING) && i.isActive && (i.isDragging = !1, i.tempPosition = {
							x: i.x,
							y: i.y
						}, i.x > 586 ? this.likeCard(!0, i) : i.x < 266 && this.likeCard(!1, i))
					}, this), this.currentCard = this.cards.length - 1
				}, r.prototype._update = function (t, e)
				{
					this.isAnimating && (this.animTimer += e, this.positionImageOnAnimation(this.animTimer, this.endImage, this.endAnimation)), this.cards.forEach(function (t)
					{
						t.update(e, t)
					})
				}, r.prototype._timeout = function ()
				{
					this.triggerLose(e.CONST.FINDHER.WRONG_1)
				}, r.prototype._afterLoss = function () {}, r.prototype._afterWin = function () {}, r.prototype.triggerWin = function ()
				{
					this.winGame(2e3), this.endGameAnim()
				}, r.prototype.triggerLose = function (t)
				{
					this.add.image(0, 0, t).setOrigin(0, 0).setDepth(1e3), this.loseGame()
				}, r.prototype.endGameAnim = function ()
				{
					this.endImage = this.add.image(0, 0, e.CONST.FINDHER.WINIMAGE).setScale(0, 0).setDepth(900), this.animTimer = 0, this.isAnimating = !0
				}, r.prototype.positionImageOnAnimation = function (t, e, i, r, n, a, s)
				{
					void 0 === r && (r = 0), void 0 === n && (n = 0), void 0 === a && (a = 0), void 0 === s && (s = 1);
					var o = Math.floor(t * (this.animFPS / 1e3));
					o >= i.frames.length && (o = i.frames.length - 1);
					var c = i.frames[o];
					e.setPosition(c.x + r, c.y + n).setScale(parseFloat(c.scaleX) * s, parseFloat(c.scaleY) * s).setAngle(parseFloat(c.angle) + a)
				}, r
			}(i.MinigameScene);
		exports.FindherScene = r;
	},
	{
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5"
	}],
	"Erhn": [function (require, module, exports)
	{
		"use strict";
		var e = this && this.__extends || function ()
		{
			var e = function (t, s)
			{
				return (e = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (e, t)
					{
						e.__proto__ = t
					} || function (e, t)
					{
						for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s])
					})(t, s)
			};
			return function (t, s)
			{
				function i()
				{
					this.constructor = t
				}
				e(t, s), t.prototype = null === s ? Object.create(s) : (i.prototype = s.prototype, new i)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var t = require("../CONST"),
			s = require("./generic/MinigameScene"),
			i = function (s)
			{
				function i()
				{
					var e = s.call(this,
					{
						sceneName: t.CONST.SCENES.MARRIAGE,
						duration: 15e3,
						startScreenColor: 15700464,
						startText: "GET\nMARRIED!",
						startTextYOrigin: .45,
						startTextColor: 3289650,
						endScreen: t.CONST.MARRIAGE.END,
						nextScene: t.CONST.SCENES.KIDS,
						endButtons:
						{
							normalNoSkip:
							{
								x: 426.5,
								y: 411,
								scale: 1.3
							},
							normalWithSkip:
							{
								x: 283,
								y: 411,
								scale: 1.3
							},
							skip:
							{
								x: 570,
								y: 411,
								scale: 1.3
							}
						}
					}) || this;
					return e.clothesConfigs = [
					{
						imageName: t.CONST.MARRIAGE.SHIRT_1,
						startPos:
						{
							x: 121,
							y: 119
						},
						dressedPos:
						{
							x: 427.5,
							y: 283
						},
						type: 0,
						isRequired: !0,
						scale: 1,
						depth: 11
					},
					{
						imageName: t.CONST.MARRIAGE.SHIRT_2,
						startPos:
						{
							x: 121,
							y: 338
						},
						dressedPos:
						{
							x: 427.5,
							y: 283
						},
						type: 0,
						isRequired: !1,
						scale: 1,
						depth: 14
					},
					{
						imageName: t.CONST.MARRIAGE.SHIRT_3,
						startPos:
						{
							x: 121,
							y: 223.5
						},
						dressedPos:
						{
							x: 427.5,
							y: 283
						},
						type: 0,
						isRequired: !1,
						scale: 1,
						depth: 12
					},
					{
						imageName: t.CONST.MARRIAGE.SHIRT_4,
						startPos:
						{
							x: 121,
							y: 392
						},
						dressedPos:
						{
							x: 427.5,
							y: 266
						},
						type: 0,
						isRequired: !1,
						scale: 1,
						depth: 15
					},
					{
						imageName: t.CONST.MARRIAGE.SHIRT_5,
						startPos:
						{
							x: 121,
							y: 298
						},
						dressedPos:
						{
							x: 427.5,
							y: 283
						},
						type: 0,
						isRequired: !1,
						scale: 1.2,
						depth: 13
					},
					{
						imageName: t.CONST.MARRIAGE.PANTS_1,
						startPos:
						{
							x: 749,
							y: 107
						},
						dressedPos:
						{
							x: 426.5,
							y: 398
						},
						type: 1,
						isRequired: !0,
						scale: 1,
						depth: 11
					},
					{
						imageName: t.CONST.MARRIAGE.PANTS_2,
						startPos:
						{
							x: 749,
							y: 195
						},
						dressedPos:
						{
							x: 425.5,
							y: 378
						},
						type: 1,
						isRequired: !1,
						scale: 1,
						depth: 14
					},
					{
						imageName: t.CONST.MARRIAGE.PANTS_3,
						startPos:
						{
							x: 749,
							y: 129
						},
						dressedPos:
						{
							x: 426,
							y: 383.5
						},
						type: 1,
						isRequired: !1,
						scale: 1,
						depth: 12
					},
					{
						imageName: t.CONST.MARRIAGE.PANTS_4,
						startPos:
						{
							x: 749,
							y: 298
						},
						dressedPos:
						{
							x: 425.5,
							y: 393
						},
						type: 1,
						isRequired: !1,
						scale: 1,
						depth: 15
					},
					{
						imageName: t.CONST.MARRIAGE.PANTS_5,
						startPos:
						{
							x: 749,
							y: 162
						},
						dressedPos:
						{
							x: 426.5,
							y: 386
						},
						type: 1,
						isRequired: !1,
						scale: 1,
						depth: 13
					},
					{
						imageName: t.CONST.MARRIAGE.SHOES_1,
						startPos:
						{
							x: 681,
							y: 406
						},
						dressedPos:
						{
							x: 423,
							y: 450
						},
						type: 2,
						isRequired: !1,
						scale: 1,
						depth: 11
					},
					{
						imageName: t.CONST.MARRIAGE.SHOES_2,
						startPos:
						{
							x: 590,
							y: 406
						},
						dressedPos:
						{
							x: 423,
							y: 450
						},
						type: 2,
						isRequired: !0,
						scale: 1,
						depth: 11
					},
					{
						imageName: t.CONST.MARRIAGE.SHOES_3,
						startPos:
						{
							x: 766,
							y: 406
						},
						dressedPos:
						{
							x: 423,
							y: 450
						},
						type: 2,
						isRequired: !1,
						scale: 1,
						depth: 11
					}], e.dressedPositions = [
					{
						type: 0,
						x: 426.5,
						y: 288
					},
					{
						type: 1,
						x: 426.5,
						y: 392
					},
					{
						type: 2,
						x: 426.5,
						y: 452
					}], e.maxDropDistance = 80, e.animFPS = 60, e.clothes = [], e.animTimer = 0, e.isAnimating = !1, e.isWinAnimation = !1, e
				}
				return e(i, s), i.prototype._init = function ()
				{
					this.clothes = [], this.dressedClothes = Array.apply(null, Array(3)).map(function () {}), this.animTimer = 0, this.isAnimating = !1, this.isWinAnimation = !1
				}, i.prototype._preload = function () {}, i.prototype._create = function ()
				{
					this.add.image(0, 0, t.CONST.MARRIAGE.BACKGROUND).setOrigin(0, 0).setDepth(0), this.add.image(563.5, 92.8, t.CONST.MARRIAGE.BACKGROUND_OVERLAY).setDepth(1), this.add.image(424, 297, t.CONST.MARRIAGE.HANDS).setDepth(20), this.createClothes(), this.endAnimationWin = this.cache.json.get(t.CONST.ANIMATIONS.MARRIAGEWIN), this.endAnimationLose = this.cache.json.get(t.CONST.ANIMATIONS.MARRIAGEFROWN)
				}, i.prototype.createClothes = function ()
				{
					var e = this;
					this.clothesConfigs.forEach(function (t)
					{
						var s = e.add.image(t.startPos.x, t.startPos.y, t.imageName).setInteractive(
						{
							useHandCursor: !0
						}).setScale(t.scale, t.scale).setDepth(t.depth);
						s.config = t, s.isDressed = !1, s.setDressed = function (e)
						{
							s.isDressed = e, s.isDressed ? (s.x = s.config.dressedPos.x, s.y = s.config.dressedPos.y, s.setDepth(9)) : (s.x = s.config.startPos.x, s.y = s.config.startPos.y, s.setDepth(s.config.depth))
						}, s.dress = function ()
						{
							s.setDressed(!0), e.dressedClothes[s.config.type] && e.dressedClothes[s.config.type].setDressed(!1), e.dressedClothes[s.config.type] = s
						}, e.input.setDraggable(s)
					}), this.input.on("dragstart", function (e, s)
					{
						this.isCurrentState(t.CONST.GAMESTATE.PLAYING) && (s.isDressed || this.sound.play(t.CONST.AUDIO.GRAB,
						{
							detune: this.getDetune()
						}))
					}, this), this.input.on("drag", function (e, t, s, i)
					{
						t.isDressed || (t.x = s, t.y = i)
					}), this.input.on("dragend", function (e, s, i)
					{
						this.isCurrentState(t.CONST.GAMESTATE.PLAYING) && (s.isDressed || this.tryDress(s))
					}, this)
				}, i.prototype.tryDress = function (e)
				{
					var s = this;
					this.dressedPositions.forEach(function (i)
					{
						i.type == e.config.type && (Phaser.Math.Distance.Between(i.x, i.y, e.x, e.y) <= s.maxDropDistance ? (e.dress(), s.sound.play(t.CONST.AUDIO.BOUNCE,
						{
							detune: s.getDetune()
						}), s.checkForWin() && s.triggerWin()) : s.sound.play(t.CONST.AUDIO.GRAB,
						{
							detune: s.getDetune()
						}))
					})
				}, i.prototype._update = function (e, t)
				{
					this.isAnimating && (this.animTimer += t, this.isWinAnimation ? this.positionImageOnAnimation(this.animTimer, this.endImage, this.endAnimationWin) : this.positionImageOnAnimation(this.animTimer, this.endImage, this.endAnimationLose, 0, -100))
				}, i.prototype._timeout = function ()
				{
					this.checkForWin() ? this.triggerWin() : this.triggerLoss()
				}, i.prototype.checkForWin = function ()
				{
					for (var e = 0; e < this.dressedClothes.length; e++)
						if (null == this.dressedClothes[e] || !this.dressedClothes[e].config.isRequired) return !1;
					return !0
				}, i.prototype._afterLoss = function () {}, i.prototype._afterWin = function () {}, i.prototype.triggerLoss = function ()
				{
					this.loseGame(1e3), this.endGameAnim(!1)
				}, i.prototype.triggerWin = function ()
				{
					this.winGame(1500), this.endGameAnim(!0)
				}, i.prototype.endGameAnim = function (e)
				{
					this.isWinAnimation = e;
					var s = e ? t.CONST.MARRIAGE.WINIMAGE : t.CONST.TALK.SMILE;
					this.endImage = this.add.image(0, 0, s).setScale(0, 0).setDepth(900), this.animTimer = 0, this.isAnimating = !0
				}, i.prototype.positionImageOnAnimation = function (e, t, s, i, n, o, r)
				{
					void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === o && (o = 0), void 0 === r && (r = 1);
					var a = Math.floor(e * (this.animFPS / 1e3));
					a >= s.frames.length && (a = s.frames.length - 1);
					var d = s.frames[a];
					t.setPosition(d.x + i, d.y + n).setScale(parseFloat(d.scaleX) * r, parseFloat(d.scaleY) * r).setAngle(parseFloat(d.angle) + o)
				}, i
			}(s.MinigameScene);
		exports.MarriageScene = i;
	},
	{
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5"
	}],
	"F9xU": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (i, e)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, i)
					{
						t.__proto__ = i
					} || function (t, i)
					{
						for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e])
					})(i, e)
			};
			return function (i, e)
			{
				function s()
				{
					this.constructor = i
				}
				t(i, e), i.prototype = null === e ? Object.create(e) : (s.prototype = e.prototype, new s)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var i = require("../CONST"),
			e = require("./generic/MinigameScene"),
			s = function (e)
			{
				function s()
				{
					var t = e.call(this,
					{
						sceneName: i.CONST.SCENES.KIDS,
						duration: 2e4,
						startScreenColor: 12713947,
						startText: "GET\nKIDS!",
						startTextYOrigin: .45,
						startTextColor: 3289650,
						endScreen: i.CONST.KIDS.END,
						nextScene: i.CONST.SCENES.MIDLIFE,
						endButtons:
						{
							normalNoSkip:
							{
								x: 426.5,
								y: 394,
								scale: 1.25
							},
							normalWithSkip:
							{
								x: 283,
								y: 394,
								scale: 1.25
							},
							skip:
							{
								x: 570,
								y: 394,
								scale: 1.25
							}
						}
					}) || this;
					return t.mamice = [], t.clickableWidth = 100, t.missTimePunishment = 500, t.clickerSwingTime = 1500, t.swingStartX = 277, t.swingEndX = 807, t.babies = [i.CONST.BIRTH.BABY, i.CONST.KIDS.BABY_2, i.CONST.KIDS.BABY_3, i.CONST.KIDS.BABY_4, i.CONST.KIDS.BABY_3], t.textNames = [
					{
						name: i.CONST.KIDS.TEXT_1,
						x: 630
					},
					{
						name: i.CONST.KIDS.TEXT_2,
						x: 682
					},
					{
						name: i.CONST.KIDS.TEXT_3,
						x: 625
					},
					{
						name: i.CONST.KIDS.TEXT_4,
						x: 464
					},
					{
						name: i.CONST.KIDS.TEXT_5,
						x: 697
					}], t
				}
				return t(s, e), s.prototype._init = function ()
				{
					this.clickerMovingRight = !0, this.swingTimer = 0, this.hits = 0, this.mamice = [], this.texts = []
				}, s.prototype._preload = function () {}, s.prototype._create = function ()
				{
					var t = this,
						e = this.add.image(0, 0, i.CONST.BIRTH.BACKGROUND).setOrigin(0, 0);
					e.setInteractive(), e.on("pointerdown", function ()
					{
						t.handleClick()
					}), this.add.image(145, 433, i.CONST.BIRTH.PUSH), this.add.image(717, 262, i.CONST.BIRTH.STROLLER).setDepth(100), this.swing = this.add.image(542, 429, i.CONST.BIRTH.SWING), this.clicker = this.add.image(542, 429, i.CONST.BIRTH.CLICKER), this.add.image(156, 272.5, i.CONST.KIDS.DADBOD).setDepth(110).setScale(1, 1.437), this.addAnimation(i.CONST.KIDS.DADHEAD, i.CONST.ANIMATIONS.DADHEAD, 60).setDepth(111).setLoop(!0).setOffset(0, -185).start(), this.createMamice(226, 299), this.setMamicaState(this.hits), this.createTexts(), this.audio = this.sound.add(i.CONST.AUDIO.CRY,
					{
						loop: !1
					})
				}, s.prototype.createMamice = function (t, e)
				{
					var s = this;
					[i.CONST.KIDS.MAMICA1, i.CONST.KIDS.MAMICA2, i.CONST.KIDS.MAMICA3, i.CONST.KIDS.MAMICA4, i.CONST.KIDS.MAMICA5].forEach(function (i)
					{
						s.mamice.push(s.add.image(t, e, i).setVisible(!1).setDepth(150))
					})
				}, s.prototype.createTexts = function ()
				{
					var t = this;
					this.textNames.forEach(function (i)
					{
						var e = t.add.image(i.x, 58, i.name).setDepth(20).setVisible(!1);
						t.texts.push(e)
					})
				}, s.prototype.handleClick = function ()
				{
					this.isCurrentState(i.CONST.GAMESTATE.PLAYING) && (this.isClickerWithinLimits() ? (this.hits++, this.playBabyAnimation(this.hits), this.showText(this.hits), this.setMamicaState(this.hits), this.playAudio()) : (this.changeGameplayTimerDuration(-this.missTimePunishment), this.cameras.main.flash(200, 255, 64, 43)))
				}, s.prototype.playBabyAnimation = function (t)
				{
					t <= this.babies.length && this.addAnimation(this.babies[t - 1], i.CONST.ANIMATIONS.KIDSSHOOTBABY, 60).setScaleMultiplier(.65).setDepth(90).setLoop(!1).start()
				}, s.prototype.playAudio = function ()
				{
					this.audio.play()
				}, s.prototype.showText = function (t)
				{
					t <= this.texts.length && (this.texts.forEach(function (t)
					{
						t.setVisible(!1)
					}), this.texts[t - 1].setVisible(!0))
				}, s.prototype.isClickerWithinLimits = function ()
				{
					return Phaser.Math.Difference(this.clicker.x, this.swing.x) < this.clickableWidth
				}, s.prototype.setMamicaState = function (t)
				{
					if (t >= this.mamice.length) this.triggerWin();
					else
						for (var i = 0; i < this.mamice.length; i++) this.mamice[i].setVisible(i === t)
				}, s.prototype._update = function (t, e)
				{
					this.isCurrentState(i.CONST.GAMESTATE.PLAYING) && this.moveClicker(e)
				}, s.prototype.moveClicker = function (t)
				{
					this.clickerMovingRight ? (this.swingTimer += t / this.clickerSwingTime, this.swingTimer >= 1 && (this.clickerMovingRight = !this.clickerMovingRight, this.swingTimer = 1)) : (this.swingTimer -= t / this.clickerSwingTime, this.swingTimer <= 0 && (this.clickerMovingRight = !this.clickerMovingRight, this.swingTimer = 0)), this.clicker.x = Phaser.Math.Interpolation.SmoothStep(this.swingTimer, this.swingStartX, this.swingEndX)
				}, s.prototype._timeout = function ()
				{
					this.triggerLoss()
				}, s.prototype._afterLoss = function ()
				{
					this.audio.stop()
				}, s.prototype._afterWin = function ()
				{
					this.audio.stop()
				}, s.prototype.triggerWin = function ()
				{
					this.winGame(1500)
				}, s.prototype.triggerLoss = function ()
				{
					this.loseGame()
				}, s
			}(e.MinigameScene);
		exports.KidsScene = s;
	},
	{
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5"
	}],
	"FSea": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, o)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o)
			{
				function n()
				{
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../CONST"),
			o = require("./generic/MinigameScene"),
			n = function (o)
			{
				function n()
				{
					return o.call(this,
					{
						sceneName: e.CONST.SCENES.CREDITS,
						duration: 5e3,
						startScreenColor: 12713947,
						startText: "",
						startTextColor: 3289650,
						nextScene: e.CONST.SCENES.MENU,
						timeToStart: 0,
						endButtons:
						{
							normalNoSkip:
							{
								x: 426.5,
								y: 386,
								scale: 1.3
							},
							normalWithSkip:
							{
								x: 283,
								y: 386,
								scale: 1.3
							},
							skip:
							{
								x: 570,
								y: 386,
								scale: 1.3
							}
						}
					}) || this
				}
				return t(n, o), n.prototype._init = function () {}, n.prototype._preload = function () {}, n.prototype._create = function ()
				{
					this.add.image(0, 0, e.CONST.CREDITS.END).setOrigin(0, 0)
				}, n.prototype._update = function (t, e) {}, n.prototype._timeout = function ()
				{
					this.winGame()
				}, n.prototype._afterLoss = function () {}, n.prototype._afterWin = function () {}, n
			}(o.MinigameScene);
		exports.CredistScene = n;
	},
	{
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5"
	}],
	"L3T3": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, o)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o)
			{
				function i()
				{
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (i.prototype = o.prototype, new i)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../CONST"),
			o = require("./generic/MinigameScene"),
			i = function (o)
			{
				function i()
				{
					return o.call(this,
					{
						sceneName: e.CONST.SCENES.DIE,
						duration: 1e4,
						startScreenColor: 0,
						startText: "DIE!",
						startTextColor: 5395026,
						nextScene: e.CONST.SCENES.CREDITS,
						timeToStart: 6e3,
						endButtons:
						{
							normalNoSkip:
							{
								x: 426.5,
								y: 386,
								scale: 1.3
							},
							normalWithSkip:
							{
								x: 283,
								y: 386,
								scale: 1.3
							},
							skip:
							{
								x: 570,
								y: 386,
								scale: 1.3
							}
						}
					}) || this
				}
				return t(i, o), i.prototype._init = function () {}, i.prototype._preload = function () {}, i.prototype._create = function ()
				{
					this.add.image(0, 0, e.CONST.DIE.BACKGROUND).setOrigin(0, 0), this.dieSong = this.sound.add(e.CONST.AUDIO.DIESONG,
					{
						loop: !1
					}), this.thunder = this.sound.add(e.CONST.AUDIO.LIGHTNING,
					{
						loop: !1
					}), this.dieSong.play(), this.thunder.play(), this.pauseMusic(!0)
				}, i.prototype.pauseMusic = function (t)
				{
					this.registry.get(e.CONST.SCENES.SOUNDTRACK).pauseMusic(t)
				}, i.prototype._update = function (t, e) {}, i.prototype._timeout = function ()
				{
					this.triggerWin()
				}, i.prototype._afterLoss = function () {}, i.prototype._afterWin = function ()
				{
					this.dieSong.stop(), this.thunder.stop(), this.pauseMusic(!1)
				}, i.prototype.triggerWin = function ()
				{
					this.add.image(0, 0, e.CONST.DIE.END).setOrigin(0, 0).setDepth(10), this.winGame(12e3)
				}, i
			}(o.MinigameScene);
		exports.DieScene = i;
	},
	{
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5"
	}],
	"pzlu": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, i)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function (e, i)
			{
				function r()
				{
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../CONST"),
			i = require("./generic/MinigameScene"),
			r = function (i)
			{
				function r()
				{
					var t = i.call(this,
					{
						sceneName: e.CONST.SCENES.PILLS,
						duration: 3e4,
						startScreenColor: 12706815,
						startText: "STAY\nHEALTHY!",
						startTextYOrigin: .45,
						startTextColor: 3289650,
						endScreen: e.CONST.PILLS.END,
						nextScene: e.CONST.SCENES.DIE,
						endButtons:
						{
							normalNoSkip:
							{
								x: 466,
								y: 410,
								scale: 1.3
							},
							normalWithSkip:
							{
								x: 322,
								y: 410,
								scale: 1.3
							},
							skip:
							{
								x: 610,
								y: 410,
								scale: 1.3
							}
						}
					}) || this;
					return t.springForceMultiplier = 1, t.pillsConfig = [
					{
						x: 545,
						y: 249,
						image: e.CONST.PILLS.PILL2
					},
					{
						x: 638,
						y: 214,
						image: e.CONST.PILLS.PILL1
					},
					{
						x: 669,
						y: 257,
						image: e.CONST.PILLS.PILL3
					},
					{
						x: 759,
						y: 310,
						image: e.CONST.PILLS.PILL2
					},
					{
						x: 707,
						y: 174,
						image: e.CONST.PILLS.PILL2
					},
					{
						x: 559,
						y: 199,
						image: e.CONST.PILLS.PILL3
					},
					{
						x: 773,
						y: 221,
						image: e.CONST.PILLS.PILL3
					},
					{
						x: 573,
						y: 316,
						image: e.CONST.PILLS.PILL1
					},
					{
						x: 745,
						y: 264,
						image: e.CONST.PILLS.PILL1
					}], t.boxesConfig = [
					{
						x: 410,
						y: 335,
						image: e.CONST.PILLS.BOX1,
						requiredPill: e.CONST.PILLS.PILL3,
						maxPillDistance: 55
					},
					{
						x: 246,
						y: 335,
						image: e.CONST.PILLS.BOX2,
						requiredPill: e.CONST.PILLS.PILL2,
						maxPillDistance: 55
					},
					{
						x: 89,
						y: 335,
						image: e.CONST.PILLS.BOX3,
						requiredPill: e.CONST.PILLS.PILL1,
						maxPillDistance: 55
					}], t.pills = [], t.boxes = [], t
				}
				return t(r, i), r.prototype._init = function ()
				{
					this.pills = [], this.boxes = []
				}, r.prototype._preload = function () {}, r.prototype._create = function ()
				{
					this.add.image(0, 0, e.CONST.PILLS.BACKGROUND).setOrigin(0, 0).setDepth(0), this.add.image(426.5, 447.46, e.CONST.PILLS.SORTTEXT).setDepth(8).setScale(.87, .87), this.grandpa = this.add.image(426.5, 240, e.CONST.PILLS.GRANDPA).setDepth(1), this.initPhysics(), this.spawnBoxes(), this.spawnPills()
				}, r.prototype.initPhysics = function ()
				{
					this.physicsShapes = this.cache.json.get(e.CONST.PHYSICS.PILLS), this.matter.world.setBounds(0, 0, this.game.renderer.width, this.game.renderer.height);
					this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, e.CONST.PILLS.TABLE).setDepth(2);
					this.matter.add.rectangle(this.game.renderer.width / 2, 440, this.game.renderer.width, 100,
					{
						isStatic: !0
					})
				}, r.prototype.spawnPills = function ()
				{
					var t = this,
						e = this.matter.world.nextGroup(!1);
					this.matter.add.mouseSpring(
					{
						length: 0,
						stiffness: .003,
						angularStiffness: 0,
						collisionFilter:
						{
							group: e
						}
					}), this.pillsConfig.forEach(function (i)
					{
						var r = t.matter.add.image(i.x, i.y, i.image, null,
						{
							chamfer:
							{
								radius: 32
							}
						}).setScale(.44, .44).setDepth(10).setInteractive().setCollisionGroup(e);
						r.isDragging = !1, t.pills.push(r)
					})
				}, r.prototype.spawnBoxes = function ()
				{
					var t = this;
					this.matter.add.image(665, 335, e.CONST.PILLS.BIGBOX, null,
					{
						shape: this.physicsShapes.bigbox
					}).setDepth(9);
					this.boxesConfig.forEach(function (e)
					{
						var i = t.matter.add.image(e.x, e.y, e.image, null,
						{
							shape: t.physicsShapes.box
						}).setDepth(9);
						i.maxPillDistance = e.maxPillDistance, i.requiredPill = e.requiredPill, i.isPillInside = function (e)
						{
							var r = t.rotateAroundPoint(
							{
								x: e.x,
								y: e.y
							},
							{
								x: i.x,
								y: i.y
							}, i.angle);
							return Math.abs(r.x - i.x) < i.maxPillDistance && Math.abs(r.y - i.y) < i.maxPillDistance
						}, t.boxes.push(i)
					})
				}, r.prototype.rotateAroundPoint = function (t, e, i)
				{
					var r = Math.cos(i),
						s = Math.sin(i);
					t.x -= e.x, t.y -= e.y;
					var n = t.x * r - t.y * s,
						a = t.x * s + t.y * r;
					return t.x = n + e.x, t.y = a + e.y, t
				}, r.prototype._update = function (t, i)
				{
					if (this.isCurrentState(e.CONST.GAMESTATE.PLAYING))
					{
						this.grandpa.x;
						this.grandpa.x = Phaser.Math.Interpolation.SmoothStep(.1, this.grandpa.x, this.input.activePointer.x), this.checkPills()
					}
				}, r.prototype.checkPills = function ()
				{
					for (var t = 0, e = this.boxes; t < e.length; t++)
						for (var i = e[t], r = 0, s = this.pills; r < s.length; r++)
						{
							var n = s[r];
							if (i.requiredPill === n.texture.key && !i.isPillInside(n)) return
						}
					this.triggerWin()
				}, r.prototype._timeout = function ()
				{
					this.loseGame()
				}, r.prototype._afterLoss = function () {}, r.prototype._afterWin = function () {}, r.prototype.triggerWin = function ()
				{
					this.addAnimation(e.CONST.TALK.SMILE, e.CONST.ANIMATIONS.PILLSEND, 60).setOffset(this.grandpa.x - this.game.renderer.width / 2, 0).setDepth(2).setLoop(!1).start(), this.winGame(1e3)
				}, r
			}(i.MinigameScene);
		exports.PillsScene = r;
	},
	{
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5"
	}],
	"HOaP": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, i)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function (e, i)
			{
				function s()
				{
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../CONST"),
			i = require("./generic/MinigameScene"),
			s = function (i)
			{
				function s()
				{
					var t = i.call(this,
					{
						sceneName: e.CONST.SCENES.MIDLIFE,
						duration: 15e3,
						startScreenColor: 12713983,
						startText: "MIDLIFE\nCRISIS!",
						startTextYOrigin: .45,
						startTextColor: 3289650,
						nextScene: e.CONST.SCENES.GRANDCHILDREN,
						endButtons:
						{
							normalNoSkip:
							{
								x: 430,
								y: 361,
								scale: 1.3
							},
							normalWithSkip:
							{
								x: 322,
								y: 361,
								scale: 1
							},
							skip:
							{
								x: 537,
								y: 361,
								scale: 1
							}
						}
					}) || this;
					return t.timeToReachMaxSpeed = 5e3, t.maxSpeed = 326.5, t.objectConfig = [
					{
						image: e.CONST.MIDLIFE.BEER,
						x: 530,
						y: 140,
						required: !1,
						scale: 1
					},
					{
						image: e.CONST.MIDLIFE.CAR,
						x: 869,
						y: 149,
						required: !0,
						scale: 1.48
					},
					{
						image: e.CONST.MIDLIFE.CANDY,
						x: 1244,
						y: 115,
						required: !1,
						scale: 1.5
					},
					{
						image: e.CONST.COFFEE.NORMAL_CHEESE,
						x: 1562,
						y: 120,
						required: !1,
						scale: 1
					},
					{
						image: e.CONST.COFFEE.NORMAL_COFFEE,
						x: 1859,
						y: 100,
						required: !1,
						scale: 1
					},
					{
						image: e.CONST.COFFEE.NORMAL_MILK,
						x: 2200,
						y: 100,
						required: !1,
						scale: 1
					},
					{
						image: e.CONST.MIDLIFE.WEIGHTS,
						x: 2598,
						y: 106,
						required: !0,
						scale: 1.65
					},
					{
						image: e.CONST.MIDLIFE.PANTIES,
						x: 3045,
						y: 106,
						required: !1,
						scale: 1.65
					},
					{
						image: e.CONST.COFFEE.NORMAL_PEPPER,
						x: 3465,
						y: 122,
						required: !1,
						scale: 1.65
					},
					{
						image: e.CONST.MIDLIFE.TICKET,
						x: 3927,
						y: 117,
						required: !0,
						scale: 1.36
					}], t.cartPos = {
						x: 165,
						y: 310
					}, t.maxDistance = {
						x: 165,
						y: 50
					}, t.timer = 0, t.speed = 0, t
				}
				return t(s, i), s.prototype._init = function ()
				{
					this.objects = [], this.timer = 0, this.speed = 0
				}, s.prototype._preload = function () {}, s.prototype._create = function ()
				{
					this.add.image(9779, 262, e.CONST.MIDLIFE.ENDLESSBACKGROUND).setDepth(9).setScale(45, 1), this.add.image(0, 0, e.CONST.MIDLIFE.BACKGROUND).setOrigin(0, 0).setDepth(10), this.add.image(745, 413, e.CONST.MIDLIFE.LIST).setDepth(11).setScrollFactor(0), this.spawnJack(), this.initPhysics(), this.spawnObjects()
				}, s.prototype.initPhysics = function ()
				{
					this.matter.world.setBounds(0, 0, 1e4, this.game.renderer.height), this.collisionShelf = this.matter.world.nextCategory(), this.collisionOther = this.matter.world.nextCategory(), this.collisionNone = this.matter.world.nextCategory(), this.matter.add.rectangle(5e3, 222, 9300, 15,
					{
						isStatic: !0,
						collisionFilter:
						{
							category: this.collisionShelf
						}
					})
				}, s.prototype.spawnObjects = function ()
				{
					var t = this,
						e = this.matter.world.nextGroup(!1);
					this.matter.add.mouseSpring(
					{
						length: 0,
						stiffness: 1,
						angularStiffness: 0,
						collisionFilter:
						{
							group: e
						}
					}), this.objectConfig.forEach(function (i)
					{
						var s = t.matter.add.image(i.x, i.y, i.image, null,
						{}).setDepth(17).setScale(i.scale, i.scale).setInteractive(
						{
							useHandCursor: !0
						}).setCollisionGroup(e);
						s.inCart = !1, s.relativeJackPos, s.required = i.required, s.config = i, s.setCollisionCategory(t.collisionOther), s.setCollidesWith([t.collisionOther, t.collisionShelf, 1]), s.putInCart = function ()
						{
							s.inCart = !0, s.setCollisionGroup(t.collisionNone), s.setCollidesWith([]), s.setStatic(!0), s.relativeJackPos = {
								x: s.x - t.jack.x,
								y: s.y - t.jack.y
							}
						}, s.update = function ()
						{
							s.inCart && s.setPosition(t.jack.x + s.relativeJackPos.x, t.jack.y + s.relativeJackPos.y)
						}, t.objects.push(s)
					}), this.matter.world.on("dragstart", function (t, e)
					{
						for (var i = 0, s = [this.collisionOther, 1], r = 0; r < s.length; r++) i |= s[r];
						t.collisionFilter.mask = i
					}, this), this.matter.world.on("dragend", function (t, e)
					{
						var i = this;
						this.objects.forEach(function (e)
						{
							e.body === t && Math.abs(e.x - i.jack.x - i.cartPos.x) < i.maxDistance.x && Math.abs(e.y - i.cartPos.y) < i.maxDistance.y && e.putInCart()
						})
					}, this)
				}, s.prototype.spawnJack = function ()
				{
					var t = this,
						i = this.add.image(333, 333, e.CONST.MIDLIFE.BODY).setDepth(20);
					this.addAnimation(e.CONST.MIDLIFE.FEET, e.CONST.ANIMATIONS.MIDLIFERIGHTFOOT, 60).setLoop(!0).setDepth(18).setScaleMultiplier(2.7, 9.6).setOffset(12, 0).setScrollFactor(0, 0).start(), this.addAnimation(e.CONST.MIDLIFE.FEET, e.CONST.ANIMATIONS.MIDLIFELEFTFOOT, 60).setLoop(!0).setDepth(18).setScaleMultiplier(2.26, 9.5).setOffset(12, 0).setScrollFactor(0, 0).start();
					this.add.image(156, 161, e.CONST.MIDLIFE.HEAD).setDepth(22).setScrollFactor(0, 0), i.update = function (i, s)
					{
						t.isCurrentState(e.CONST.GAMESTATE.PLAYING) && (s.x += t.speed * i / 1e3)
					}, this.cameras.main.startFollow(i, !1, 1, 0, i.x - this.cameras.main.x - this.game.renderer.width / 2, i.y - this.cameras.main.y - this.game.renderer.height / 2), this.jack = i
				}, s.prototype._update = function (t, e)
				{
					this.calculateSpeed(e), this.jack.update(e, this.jack), this.objects.forEach(function (t)
					{
						return t.update()
					})
				}, s.prototype.calculateSpeed = function (t)
				{
					this.isCurrentState(e.CONST.GAMESTATE.START) || (this.timer += t / this.timeToReachMaxSpeed, this.speed = Phaser.Math.Interpolation.SmoothStep(this.timer, 0, this.maxSpeed))
				}, s.prototype._timeout = function ()
				{
					this.checkForWin()
				}, s.prototype.checkForWin = function ()
				{
					for (var t = !0, e = !0, i = !0, s = 0, r = this.objects; s < r.length; s++)
					{
						var o = r[s];
						o.inCart ? (i = !1, o.required || (e = !1)) : (o.required && (e = !1), t = !1)
					}
					e && !i ? this.triggerWin() : this.triggerLoss(t)
				}, s.prototype._afterLoss = function () {}, s.prototype._afterWin = function () {}, s.prototype.triggerLoss = function (t)
				{
					this.add.image(this.jack.x - 333, 0, t ? e.CONST.MIDLIFE.ENDEVERYTHING : e.CONST.MIDLIFE.END).setOrigin(0, 0).setDepth(999), this.loseGame()
				}, s.prototype.triggerWin = function ()
				{
					this.addAnimation(e.CONST.MIDLIFE.WINIMAGE, e.CONST.ANIMATIONS.MIDLIFEWIN, 60).setOffset(this.jack.x - 333, 0).setLoop(!1).setDepth(999).start(), this.winGame(1500)
				}, s
			}(i.MinigameScene);
		exports.MidlifeScene = s;
	},
	{
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5"
	}],
	"hwyb": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, i)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function (e, i)
			{
				function n()
				{
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../CONST"),
			i = require("./generic/MinigameScene"),
			n = function (i)
			{
				function n()
				{
					var t = i.call(this,
					{
						sceneName: e.CONST.SCENES.GRANDCHILDREN,
						duration: 13e3,
						startScreenColor: 12961221,
						startText: "GRAND\nCHILDREN!",
						startTextYOrigin: .35,
						startTextColor: 1118481,
						endScreen: e.CONST.GRANDCHILDREN.END,
						nextScene: e.CONST.SCENES.PILLS,
						endButtons:
						{
							normalNoSkip:
							{
								x: 426.5,
								y: 75,
								scale: 1.3
							},
							normalWithSkip:
							{
								x: 283,
								y: 75,
								scale: 1.3
							},
							skip:
							{
								x: 570,
								y: 75,
								scale: 1.3
							}
						}
					}) || this;
					return t.moveSpeed = 107, t.deathDistance = 10, t.scaleMultiplier = .0115, t.legScaleMultiplier = 2.175, t.kidConfig = [
					{
						spawnPos:
						{
							x: 594,
							y: 258
						},
						targetPos:
						{
							x: 219,
							y: 208
						},
						image: e.CONST.GRANDCHILDREN.KID1,
						legOffset:
						{
							x: 4,
							y: 8
						},
						electric: !0
					},
					{
						spawnPos:
						{
							x: 246,
							y: 278
						},
						targetPos:
						{
							x: 747,
							y: 303
						},
						image: e.CONST.GRANDCHILDREN.KID2,
						legOffset:
						{
							x: 4,
							y: 8
						},
						electric: !1
					},
					{
						spawnPos:
						{
							x: 766,
							y: 389
						},
						targetPos:
						{
							x: 182,
							y: 352
						},
						image: e.CONST.GRANDCHILDREN.KID3,
						legOffset:
						{
							x: 4,
							y: 16
						},
						electric: !1
					}], t.walls = [
					{
						k: 1,
						n: -440
					},
					{
						k: 0,
						n: 200
					},
					{
						k: -1,
						n: 434
					}], t.kids = [], t
				}
				return t(n, i), n.prototype._init = function ()
				{
					this.kids = []
				}, n.prototype._preload = function () {}, n.prototype._create = function ()
				{
					this.add.image(0, 0, e.CONST.GRANDCHILDREN.BACKGROUND).setOrigin(0, 0).setDepth(0), this.add.image(358, 73, e.CONST.GRANDCHILDREN.DRAGTEXT).setScale(.78, .78).setDepth(1), this.addGrandpa(), this.spawnKids(), this.audio = this.sound.add(e.CONST.AUDIO.NOOO,
					{
						loop: !1
					})
				}, n.prototype.addGrandpa = function ()
				{
					this.addAnimation(e.CONST.GRANDCHILDREN.GRANDPA, e.CONST.ANIMATIONS.GRANDPAMOVE, 60).setDepth(10).setLoop(!0).start(), this.addAnimation(e.CONST.GRANDCHILDREN.HANDS_LEFT, e.CONST.ANIMATIONS.GRANDPALEFTHAND, 60).setDepth(11).setLoop(!0).start(), this.addAnimation(e.CONST.GRANDCHILDREN.HANDS_RIGHT, e.CONST.ANIMATIONS.GRANDPARIGHTHAND, 60).setDepth(11).setLoop(!0).start()
				}, n.prototype.spawnKids = function ()
				{
					var t = this;
					this.kidConfig.forEach(function (i)
					{
						var n = t.createKidAnim(i.image, e.CONST.ANIMATIONS.KIDTORSO, i.spawnPos,
						{
							x: 0,
							y: 0
						}, 12).setDraggable(t.input);
						n.rightLeg = t.createKidAnim(e.CONST.MIDLIFE.FEET, e.CONST.ANIMATIONS.KIDRIGHTLEG, i.spawnPos, i.legOffset, 11).setScaleMultiplier(1, 2.175), n.leftLeg = t.createKidAnim(e.CONST.MIDLIFE.FEET, e.CONST.ANIMATIONS.KIDLEFTLEG, i.spawnPos, i.legOffset, 11).setScaleMultiplier(1, 2.175), n.leftLegOffset = n.leftLeg.GetOffset(), n.rightLegOffset = n.rightLeg.GetOffset(), n.config = i, n.isAlive = !0, n.isDragging = !1, n.getMoveVector = function (t)
						{
							var e = n.config.targetPos.x - n.GetPositionOverride().x,
								i = n.config.targetPos.y - n.GetPositionOverride().y,
								o = Math.sqrt(e * e + i * i);
							return {
								x: t * e / o,
								y: t * i / o,
								mag: o
							}
						}, n.setPos = function (e, i)
						{
							var o = t.getMaxYWalls(e, i);
							n.setPositionOverride(e, o), n.rightLeg.setPositionOverride(e, o), n.leftLeg.setPositionOverride(e, o)
						}, n.checkForDeath = function (e)
						{
							e < t.deathDistance && n.kill()
						}, n.kill = function ()
						{
							n.isAlive = !1, t.triggerLose(), n.setLoop(n.config.electric).setAnimation(t.cache.json.get(n.config.electric ? e.CONST.ANIMATIONS.KIDDIEELECTRIC : e.CONST.ANIMATIONS.KIDDIEFIRE))
						}, n.onUpdate = function (e)
						{
							if (n.isAlive)
							{
								var i = n.getMoveVector(t.moveSpeed * e / 1e3);
								n.isDragging || n.setPos(n.GetPositionOverride().x + i.x, n.GetPositionOverride().y + i.y), n.checkForDeath(i.mag)
							}
							n.updateScale()
						}, n.updateScale = function ()
						{
							var e = t.scaleMultiplier * Math.pow(Math.abs(t.getUnityY(n.GetPositionOverride().y) - 10), 2);
							n.setScaleMultiplier(e), n.leftLeg.setScaleMultiplier(e, e * t.legScaleMultiplier), n.rightLeg.setScaleMultiplier(e, e * t.legScaleMultiplier), n.leftLeg.setOffset(n.leftLegOffset.x, n.leftLegOffset.y - 50 * (1 - e)), n.rightLeg.setOffset(n.rightLegOffset.x, n.rightLegOffset.y - 50 * (1 - e));
							var i = n.GetPositionOverride().y;
							n.setDepth(i), n.leftLeg.setDepth(i - 1), n.rightLeg.setDepth(i - 1)
						}, t.kids.push(n)
					}), this.input.on("drag", function (t, e, i, n)
					{
						e.animation.setPos(i, n)
					}, this), this.input.on("dragstart", function (t, e)
					{
						e.animation.isDragging = !0
					}, this), this.input.on("dragend", function (t, e, i)
					{
						e.animation.isDragging = !1
					}, this)
				}, n.prototype.createKidAnim = function (t, e, i, n, o)
				{
					return this.addAnimation(t, e, 60).setDepth(o).setLoop(!0).setOffset(-594 + n.x, -258 + n.y).setPositionOverride(i.x, i.y).start()
				}, n.prototype.getMaxYWalls = function (t, e)
				{
					for (var i = e, n = 0, o = this.walls; n < o.length; n++)
					{
						var r = o[n],
							s = r.k * t + r.n;
						s > i && (i = s)
					}
					return i
				}, n.prototype._update = function (t, i)
				{
					this.isCurrentState(e.CONST.GAMESTATE.PLAYING) && this.kids.forEach(function (t)
					{
						return t.onUpdate(i)
					})
				}, n.prototype._timeout = function ()
				{
					this.triggerWin()
				}, n.prototype._afterLoss = function () {}, n.prototype._afterWin = function () {}, n.prototype.triggerLose = function ()
				{
					this.audio.play(), this.loseGame(1e3)
				}, n.prototype.triggerWin = function ()
				{
					this.winGame(1e3)
				}, n
			}(i.MinigameScene);
		exports.GrandchildrenScene = n;
	},
	{
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5"
	}],
	"Dfpu": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var i = require("../CONST"),
			t = 30,
			e = 700,
			s = 3,
			d = .5,
			h = function ()
			{
				function h(e, s, d, h, l, a, n, o)
				{
					this.speed = a, this.startPos = {
						x: s,
						y: d
					}, this.gravityScale = n, this.minY = o, this.projectionPointsGroup = e.add.group(
					{
						classType: Phaser.GameObjects.Image,
						key: i.CONST.BEERPONG.BLACK_CIRCLE,
						repeat: t,
						alpha: .3,
						active: !1,
						visible: !1
					}), this.hiddenBall = e.matter.add.image(s, d, i.CONST.BEERPONG.BALL, null).setFrictionAir(0).setCircle().setScale(h, h).setMass(l), this.hiddenBall.setVisible(!1), this.hiddenBall.setStatic(!0), this.hideHiddenBall()
				}
				return h.prototype.updateProjectionPoints = function (i, t)
				{
					this.projectionPointsGroup.children.each(function (i)
					{
						i.setVisible(!1), i.setActive(!1)
					}), this.hiddenBall.x = this.startPos.x, this.hiddenBall.y = this.startPos.y, this.hiddenBall.setVisible(!1), this.hiddenBall.setStatic(!1);
					var h = {
						x: this.hiddenBall.x,
						y: this.hiddenBall.y
					};
					this.hiddenBall.body.force.y = 0, this.hiddenBall.body.force.x = 0, this.hiddenBall.setVelocity((i - this.startPos.x) * this.speed, (t - this.startPos.y) * this.speed);
					var l = [],
						a = 0,
						n = 0;
					do {
						if (n += 1, this.hiddenBall.body.force.y += this.hiddenBall.body.mass * this.gravityScale * .001, Phaser.Physics.Matter.Matter.Body.update(this.hiddenBall.body, 16.666666666666668, 1, 1), this.hiddenBall.body.force.x = 0, this.hiddenBall.body.force.y = 0, this.hiddenBall.body.torque = 0, n >= s)
						{
							var o = Phaser.Math.Distance.Between(h.x, h.y, this.hiddenBall.x, this.hiddenBall.y);
							this.hiddenBall.y < this.minY && l.push(
							{
								x: this.hiddenBall.x,
								y: this.hiddenBall.y
							}), h.x = this.hiddenBall.x, h.y = this.hiddenBall.y, a += o, n = 0
						}
					} while (a < e);
					this.hideHiddenBall();
					for (var r = 0; r < l.length; r += 1)
					{
						var y = l[r],
							B = this.projectionPointsGroup.getFirstDead();
						B && (B.setScale(d), B.x = y.x, B.y = y.y, B.setVisible(!0), B.setActive(!0))
					}
				}, h.prototype.hideHiddenBall = function ()
				{
					this.hiddenBall.x = 9999, this.hiddenBall.y = 9999
				}, h
			}();
		exports.default = h;
	},
	{
		"../CONST": "HmIA"
	}],
	"WZbq": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
			{
				var t = function (e, i)
				{
					return (t = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function (e, i)
				{
					function s()
					{
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s)
				}
			}(),
			e = this && this.__importDefault || function (t)
			{
				return t && t.__esModule ? t :
				{
					default: t
				}
			};
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var i = require("../CONST"),
			s = require("./generic/MinigameScene"),
			a = e(require("../components/ProjectionLine")),
			n = function (e)
			{
				function s()
				{
					var t = e.call(this,
					{
						sceneName: i.CONST.SCENES.BEERPONG,
						duration: 1e4,
						startScreenColor: 16645986,
						startText: "SPORTS!",
						startTextColor: 3289650,
						endScreen: i.CONST.BEERPONG.END,
						nextScene: i.CONST.SCENES.COFFEE,
						endButtons:
						{
							normalNoSkip:
							{
								x: 426.5,
								y: 75,
								scale: 1.25
							},
							normalWithSkip:
							{
								x: 272,
								y: 75,
								scale: 1.25
							},
							skip:
							{
								x: 540,
								y: 75,
								scale: 1.25
							}
						}
					}) || this;
					return t.speed = .15, t.ballMass = 100, t.cupMass = 800, t.ballScale = .75, t.gravityScale = 1.81, t.ballStartPos = {
						x: 236,
						y: 211
					}, t.maxBallCupDistance = 22, t.cupsConfig = [
					{
						x: 752,
						y: 307,
						scale: .75
					},
					{
						x: 606,
						y: 307,
						scale: .75
					},
					{
						x: 680,
						y: 307,
						scale: .75
					}], t.aimingConfig = {
						from:
						{
							x: 284,
							y: 127
						},
						to:
						{
							x: 327,
							y: 114
						},
						duration: 1500
					}, t.cupBackYOffset = 50, t.cupBackXOffset = 3, t.cups = [], t.allCupsFilled = !1, t.endTimer = null, t
				}
				return t(s, e), s.prototype._init = function ()
				{
					this.balls = [], this.projectionLine = null, this.cups = [], this.allCupsFilled = !1, this.endTimer = null, this.aimingImage = null
				}, s.prototype._preload = function () {}, s.prototype._create = function ()
				{
					var t = this;
					this.add.image(0, 0, i.CONST.BEERPONG.BACKGROUND).setOrigin(0, 0).setDepth(0), this.add.image(520, 410, i.CONST.BEERPONG.DUNKTEXT).setDepth(1), this.initPhysics(), this.input.on("pointerdown", function (e)
					{
						t.throwBall()
					}), this.initAiming(), this.createCups()
				}, s.prototype.initAiming = function ()
				{
					this.aimingImage = this.add.image(this.aimingConfig.from.x, this.aimingConfig.from.y, i.CONST.TALK.NOTE_1).setDepth(100).setScale(.5).setVisible(!1), this.tweens.add(
					{
						targets: this.aimingImage,
						x: this.aimingConfig.to.x,
						y: this.aimingConfig.to.y,
						ease: "Sine.easeInOut",
						duration: this.aimingConfig.duration,
						repeat: -1,
						yoyo: !0
					}), this.projectionLine = new a.default(this, this.ballStartPos.x, this.ballStartPos.y, this.ballScale, this.ballMass, this.speed, this.gravityScale, 260)
				}, s.prototype.createCups = function ()
				{
					var t = this;
					this.cupsConfig.forEach(function (e)
					{
						t.add.image(e.x - t.cupBackXOffset, e.y - t.cupBackYOffset, i.CONST.BEERPONG.CUP_BACK).setDepth(3).setScale(e.scale);
						var s = t.matter.add.image(e.x, e.y, i.CONST.BEERPONG.CUP_FRONT, null,
						{
							shape: t.physicsShapes.FRONT
						}).setDepth(9).setStatic(!0).setFriction(.7).setMass(t.cupMass).setScale(e.scale);
						s.label = "cup" + e.x, t.cups.push(s)
					})
				}, s.prototype.initPhysics = function ()
				{
					this.physicsShapes = this.cache.json.get(i.CONST.PHYSICS.BEERPONG), this.matter.add.rectangle(526, 337, 610, 25,
					{
						isStatic: !0
					}), this.matter.world.setGravity(0, this.gravityScale)
				}, s.prototype.throwBall = function ()
				{
					var t = this,
						e = this.createBall();
					e.isShot = !1, e.update = function (i)
					{
						if (!e.isShot)
						{
							e.isShot = !0;
							var s = t.GetSpeedFrom(
							{
								x: e.x,
								y: e.y
							},
							{
								x: t.aimingImage.x,
								y: t.aimingImage.y
							});
							e.setStatic(!1), e.setVelocity(s.x, s.y)
						}
					}, this.balls.push(e)
				}, s.prototype.createBall = function ()
				{
					return this.matter.add.image(this.ballStartPos.x, this.ballStartPos.y, i.CONST.BEERPONG.BALL, null,
					{
						label: "ball"
					}).setFrictionAir(0).setDepth(5).setCircle().setBounce(.7).setFriction(.4).setScale(this.ballScale, this.ballScale).setMass(this.ballMass).setStatic(!0)
				}, s.prototype.GetSpeedFrom = function (t, e)
				{
					return {
						x: (e.x - t.x) * this.speed,
						y: (e.y - t.y) * this.speed
					}
				}, s.prototype._update = function (t, e)
				{
					this.balls.forEach(function (t)
					{
						t.update(e)
					}), this.projectionLine.updateProjectionPoints(this.aimingImage.x, this.aimingImage.y), this.checkForWin()
				}, s.prototype.checkForWin = function ()
				{
					var t = this;
					this.isCurrentState(i.CONST.GAMESTATE.PLAYING) && (this.updateCups(), null == this.endTimer && this.allCupsFilled && (this.endTimer = this.time.delayedCall(1e3, function ()
					{
						t.tryTriggerWin()
					}, null, this)))
				}, s.prototype.tryTriggerWin = function ()
				{
					this.updateCups(), this.allCupsFilled && this.triggerWin()
				}, s.prototype.updateCups = function ()
				{
					var t = this;
					this.cups.forEach(function (e)
					{
						e.filled = !1;
						for (var i = 0, s = t.balls; i < s.length; i++)
						{
							var a = s[i];
							if (Phaser.Math.Distance.Between(a.x, a.y, e.x, e.y) < t.maxBallCupDistance)
							{
								e.filled = !0;
								break
							}
						}
					}), this.allCupsFilled = !0;
					for (var e = 0, i = this.cups; e < i.length; e++)
					{
						if (!i[e].filled)
						{
							this.allCupsFilled = !1;
							break
						}
					}
				}, s.prototype._timeout = function ()
				{
					null != this.endTimer && this.endTimer.destroy(), this.updateCups(), this.allCupsFilled ? this.winGame(0) : this.loseGame()
				}, s.prototype._afterLoss = function () {}, s.prototype._afterWin = function () {}, s.prototype.triggerWin = function ()
				{
					this.winGame(0)
				}, s
			}(s.MinigameScene);
		exports.BeerpongScene = n;
	},
	{
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5",
		"../components/ProjectionLine": "Dfpu"
	}],
	"gvug": [function (require, module, exports)
	{
		"use strict";
		var i;
		Object.defineProperty(exports, "__esModule",
			{
				value: !0
			}),
			function (i)
			{
				i[i.JSON = 1] = "JSON", i[i.IMAGE = 2] = "IMAGE", i[i.AUDIO = 3] = "AUDIO"
			}(i || (i = {}));
		var e = function ()
		{
			function e(i, e)
			{
				this.loadScene = i, this.requiredFor = void 0 === e.requiredFor ? [] : e.requiredFor, this.imagesKey = void 0 !== e.imagesKey && e.imagesKey, this.animations = void 0 !== e.animations && e.animations, this.physics = void 0 !== e.physics && e.physics, this.audio = void 0 !== e.audio && e.audio, this.loadedCallback = void 0 !== e.loadedCallback && e.loadedCallback, this.tag = void 0 === e.tag ? [] : e.tag, this.loaded = !1, this.loading = !1, this.remainingFiles = []
			}
			return e.prototype.Load = function ()
			{
				this.loading = !0, this.loadFiles(this.imagesKey, i.IMAGE), this.loadFiles(this.animations, i.JSON), this.loadFiles(this.physics, i.JSON), this.loadFiles(this.audio, i.AUDIO), this.checkIfLoaded()
			}, e.prototype.isBlockingScene = function (i)
			{
				return !this.loaded && -1 !== this.requiredFor.indexOf(i)
			}, e.prototype.handleFileComplete = function (i)
			{
				var e = this.remainingFiles.indexOf(i); - 1 !== e && (this.remainingFiles.splice(e, 1), this.checkIfLoaded())
			}, e.prototype.checkIfLoaded = function ()
			{
				this.loaded = 0 == this.remainingFiles.length, this.loaded && (this.loading = !1, this.loadedCallback && this.loadedCallback())
			}, e.prototype.loadFiles = function (e, t)
			{
				if (e)
					for (var o in e)
						if (!this.isAlreadyLoaded(e[o], t))
						{
							switch (t)
							{
							case i.JSON:
								this.loadScene.load.json(e[o], e[o]);
								break;
							case i.AUDIO:
								this.loadScene.load.audio(e[o], e[o]);
								break;
							case i.IMAGE:
								this.loadScene.load.image(e[o], e[o])
							}
							this.remainingFiles.push(e[o])
						}
			}, e.prototype.hasTag = function (i)
			{
				return this.tag.some(function (e)
				{
					return e === i
				})
			}, e.prototype.isLoaded = function ()
			{
				return this.loaded
			}, e.prototype.isLoading = function ()
			{
				return this.loading
			}, e.prototype.isAlreadyLoaded = function (i, e)
			{
				var t = this.GetCacheDataForKey(i, e);
				return !(void 0 === t || "__MISSING" === t)
			}, e.prototype.GetCacheDataForKey = function (e, t)
			{
				switch (t)
				{
				case i.JSON:
					return this.loadScene.cache.json.get(e);
				case i.AUDIO:
					return this.loadScene.cache.audio.get(e);
				case i.IMAGE:
					return this.loadScene.textures.get(e).key
				}
			}, e
		}();
		exports.default = e;
	},
	{}],
	"Y/W/": [function (require, module, exports)
	{
		"use strict";
		var N = this && this.__extends || function ()
			{
				var N = function (S, O)
				{
					return (N = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (N, S)
						{
							N.__proto__ = S
						} || function (N, S)
						{
							for (var O in S) S.hasOwnProperty(O) && (N[O] = S[O])
						})(S, O)
				};
				return function (S, O)
				{
					function e()
					{
						this.constructor = S
					}
					N(S, O), S.prototype = null === O ? Object.create(O) : (e.prototype = O.prototype, new e)
				}
			}(),
			S = this && this.__importDefault || function (N)
			{
				return N && N.__esModule ? N :
				{
					default: N
				}
			};
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var O = require("../CONST"),
			e = S(require("../components/ProgressiveLoadChunk")),
			T = function (S)
			{
				function T()
				{
					var N = S.call(this,
					{
						key: O.CONST.SCENES.PROGRESSIVE_LOAD
					}) || this;
					return N.loadQueue = [], N.loadedChunks = [], N.currentChunk = 0, N
				}
				return N(T, S), T.prototype.init = function ()
				{
					var N = this;
					this.registry.set(O.CONST.SCENES.PROGRESSIVE_LOAD, this), this.loadQueue = [new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.BIRTH],
						imagesKey: O.CONST.BIRTH,
						audio: [O.CONST.AUDIO.CRY]
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.TALK],
						imagesKey: O.CONST.TALK,
						audio: [O.CONST.AUDIO.TALK]
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.SOUNDTRACK],
						audio: [O.CONST.AUDIO.SOUNDTRACK],
						loadedCallback: function ()
						{
							N.registry.get(O.CONST.SCENES.SOUNDTRACK).switchMusic()
						}
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.SCHOOL],
						imagesKey: O.CONST.SCHOOL,
						animations: [O.CONST.ANIMATIONS.SCHOOLEND],
						audio: [O.CONST.AUDIO.GRAB]
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.PUBERTY],
						imagesKey: O.CONST.PUBERTY,
						animations: [O.CONST.ANIMATIONS.PUBERTYEND],
						audio: [O.CONST.AUDIO.POP]
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.FINDHER],
						imagesKey: O.CONST.FINDHER,
						animations: [O.CONST.ANIMATIONS.FINDHEREND]
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.BEERPONG],
						imagesKey: O.CONST.BEERPONG,
						physics: [O.CONST.PHYSICS.BEERPONG]
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.COFFEE],
						imagesKey: O.CONST.COFFEE,
						animations: [O.CONST.ANIMATIONS.COFFEEEND],
						audio: [O.CONST.AUDIO.GRAB]
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.MARRIAGE],
						imagesKey: O.CONST.MARRIAGE,
						animations: [O.CONST.ANIMATIONS.MARRIAGEWIN, O.CONST.ANIMATIONS.MARRIAGEFROWN],
						audio: [O.CONST.AUDIO.GRAB, O.CONST.AUDIO.BOUNCE]
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.KIDS],
						imagesKey: O.CONST.KIDS,
						animations: [O.CONST.ANIMATIONS.KIDSSHOOTBABY, O.CONST.ANIMATIONS.DADHEAD],
						audio: [O.CONST.AUDIO.CRY]
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.MIDLIFE, O.CONST.SCENES.GRANDCHILDREN],
						imagesKey: O.CONST.MIDLIFE,
						animations: [O.CONST.ANIMATIONS.MIDLIFELEFTFOOT, O.CONST.ANIMATIONS.MIDLIFERIGHTFOOT, O.CONST.ANIMATIONS.MIDLIFEWIN]
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.GRANDCHILDREN],
						imagesKey: O.CONST.GRANDCHILDREN,
						animations: [O.CONST.ANIMATIONS.GRANDPAMOVE, O.CONST.ANIMATIONS.GRANDPALEFTHAND, O.CONST.ANIMATIONS.GRANDPARIGHTHAND, O.CONST.ANIMATIONS.KIDTORSO, O.CONST.ANIMATIONS.KIDRIGHTLEG, O.CONST.ANIMATIONS.KIDLEFTLEG, O.CONST.ANIMATIONS.KIDDIEELECTRIC, O.CONST.ANIMATIONS.KIDDIEFIRE],
						audio: [O.CONST.AUDIO.NOOO]
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.PILLS],
						imagesKey: O.CONST.PILLS,
						animations: [O.CONST.ANIMATIONS.PILLSEND],
						physics: [O.CONST.PHYSICS.PILLS]
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.DIE],
						imagesKey: O.CONST.DIE,
						audio: [O.CONST.AUDIO.DIESONG, O.CONST.AUDIO.LIGHTNING]
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.CREDITS],
						imagesKey: O.CONST.CREDITS
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.INSTRUMENT],
						imagesKey: O.CONST.INSTRUMENT,
						audio: [O.CONST.AUDIO.INSTRUMENT_1, O.CONST.AUDIO.INSTRUMENT_2, O.CONST.AUDIO.INSTRUMENT_3, O.CONST.AUDIO.INSTRUMENT_4, O.CONST.AUDIO.INSTRUMENT_5, O.CONST.AUDIO.INSTRUMENT_6, O.CONST.AUDIO.INSTRUMENT_7, O.CONST.AUDIO.INSTRUMENT_FAIL, O.CONST.AUDIO.WIN, O.CONST.AUDIO.LOSE],
						tag: [O.CONST.TAGS.ARCADE, O.CONST.SCENES.INSTRUMENT]
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.BURGER],
						imagesKey: O.CONST.BURGER,
						audio: [O.CONST.AUDIO.GRAB, O.CONST.AUDIO.WIN, O.CONST.AUDIO.LOSE, O.CONST.AUDIO.TRASH],
						tag: [O.CONST.TAGS.ARCADE, O.CONST.SCENES.BURGER]
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.DISTRACTION],
						imagesKey: O.CONST.DISTRACTION,
						audio: [O.CONST.AUDIO.HELLO, O.CONST.AUDIO.PING_1, O.CONST.AUDIO.PING_2, O.CONST.AUDIO.LOSE, O.CONST.AUDIO.TV_OFF, O.CONST.AUDIO.TV_ON, O.CONST.AUDIO.VIBRATE, O.CONST.AUDIO.BOUNCE, O.CONST.AUDIO.POP, O.CONST.AUDIO.LOSE],
						tag: [O.CONST.TAGS.ARCADE, O.CONST.SCENES.DISTRACTION]
					}), new e.default(this,
					{
						requiredFor: [O.CONST.SCENES.GRID_FILL],
						imagesKey: O.CONST.GRID_FILL,
						audio: [O.CONST.AUDIO.FLASH, O.CONST.AUDIO.WIN, O.CONST.AUDIO.LOSE],
						tag: [O.CONST.TAGS.ARCADE, O.CONST.SCENES.GRID_FILL]
					})]
				}, T.prototype.preload = function ()
				{
					var N = this;
					this.load.on("filecomplete", function (S, O)
					{
						N.currChunk && N.currChunk.handleFileComplete(S)
					}, this)
				}, T.prototype.update = function ()
				{
					this.loadNextChunkNew()
				}, T.prototype.loadNextChunkNew = function ()
				{
					(0 != this.loadQueue.length || this.currChunk) && (this.currChunk ? (this.currChunk.isLoaded() || this.currChunk.isLoading() || (this.currChunk.Load(), this.load.start()), this.currChunk.isLoaded() && (this.loadedChunks.push(this.currChunk), this.currChunk = void 0)) : this.currChunk = this.loadQueue.shift())
				}, T.prototype.prioritizeChunksWithTag = function (N)
				{
					var S = this.loadQueue.filter(function (S)
						{
							return S.hasTag(N)
						}),
						O = this.loadQueue.filter(function (S)
						{
							return !S.hasTag(N)
						});
					this.loadQueue = S.concat(O)
				}, T.prototype.isSceneLoaded = function (N)
				{
					if (this.currChunk && this.currChunk.isBlockingScene(N)) return !1;
					for (var S = 0, O = this.loadQueue; S < O.length; S++)
					{
						if (O[S].isBlockingScene(N)) return !1
					}
					return !0
				}, T
			}(Phaser.Scene);
		exports.ProgressiveLoadScene = T;
	},
	{
		"../CONST": "HmIA",
		"../components/ProgressiveLoadChunk": "gvug"
	}],
	"2k0m": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../../CONST"),
			t = 16,
			s = 15,
			i = 1.2,
			a = 100,
			n = "Quad.easeOut";
		exports.SIM_CLICK_PRE_ANIM_DURATION = 250;
		var o, h = 200;
		! function (e)
		{
			e[e.Playing = 1] = "Playing", e[e.Listening = 2] = "Listening", e[e.Transitioning = 3] = "Transitioning"
		}(o = exports.KeyState || (exports.KeyState = {}));
		var r = function ()
		{
			function r(e, a, n)
			{
				var h = this;
				this.mouseOver = !1, this.key = a.key, this.audio = a.audio;
				var r = a.x,
					c = a.y;
				this.darkImage = e.add.image(r, c, a.darkImage).setDepth(s).setInteractive(
				{
					useHandCursor: !0,
					pixelPerfect: !0,
					alphaTolerance: 1
				}), this.darkImage.on("pointerover", function ()
				{
					h.mouseOver = !0, h.state == o.Playing && h.setHighlight(!0)
				}).on("pointerout", function ()
				{
					h.mouseOver = !1, h.state == o.Playing && h.setHighlight(!1)
				}).on("pointerdown", function ()
				{
					h.state == o.Playing && h.click()
				}), this.whiteImage = e.add.image(r, c, a.whiteImage).setDepth(t).setAlpha(0), this.errorImage = e.add.image(r, c, a.whiteImage).setDepth(t + .1).setScale(i).setAlpha(0).setTint(16711680), this.scene = e, this.state = n
			}
			return r.prototype.bounce = function ()
			{
				this.whiteImage.setScale(1, 1), this.darkImage.setScale(1, 1), this.setHighlight(!0)
			}, r.prototype.setHighlight = function (e, t)
			{
				void 0 === t && (t = a), this.darkTween && this.darkTween.stop(), this.whiteTween && this.whiteTween.stop(), e ? (this.whiteTween = this.scene.tweens.add(
				{
					targets: this.whiteImage,
					alpha: 1,
					scaleX: i,
					scaleY: i,
					ease: n,
					duration: t
				}), this.darkTween = this.scene.tweens.add(
				{
					targets: this.darkImage,
					scaleX: i,
					scaleY: i,
					ease: n,
					duration: t
				})) : (this.whiteTween = this.scene.tweens.add(
				{
					targets: this.whiteImage,
					alpha: 0,
					scaleX: 1,
					scaleY: 1,
					ease: n,
					duration: t
				}), this.darkTween = this.scene.tweens.add(
				{
					targets: this.darkImage,
					scaleX: 1,
					scaleY: 1,
					ease: n,
					duration: t
				}))
			}, r.prototype.click = function ()
			{
				var e = this;
				this.bounce(), setTimeout(function ()
				{
					e.scene.sound.play(e.audio)
				}, exports.SIM_CLICK_PRE_ANIM_DURATION), this.state == o.Playing && this.clickCallback()
			}, r.prototype.simulateClick = function ()
			{
				var e = this;
				this.setHighlight(!0, exports.SIM_CLICK_PRE_ANIM_DURATION), setTimeout(function ()
				{
					e.bounce(), e.scene.sound.play(e.audio)
				}, exports.SIM_CLICK_PRE_ANIM_DURATION), setTimeout(function ()
				{
					e.setHighlight(!1, h)
				}, exports.SIM_CLICK_PRE_ANIM_DURATION + h)
			}, r.prototype.displayMistake = function ()
			{
				var t = this;
				setTimeout(function ()
				{
					t.scene.sound.play(e.CONST.AUDIO.INSTRUMENT_FAIL)
				}, exports.SIM_CLICK_PRE_ANIM_DURATION), this.scene.tweens.add(
				{
					targets: this.errorImage,
					alpha: 1,
					ease: n,
					duration: exports.SIM_CLICK_PRE_ANIM_DURATION,
					hold: 500,
					yoyo: !0
				})
			}, r.prototype.updateState = function (e)
			{
				this.state = e, this.setHighlight(this.mouseOver && this.state == o.Playing)
			}, r
		}();
		exports.Key = r;
	},
	{
		"../../CONST": "HmIA"
	}],
	"AFF7": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var t = require("../../CONST"),
			e = require("./Key"),
			a = require("../../scenes/InstrumentScene"),
			i = {
				startPosition:
				{
					x: 400,
					y: 255
				},
				head:
				{
					xOffset: -3,
					yOffset: -32
				},
				leftHand:
				{
					xOffset: 45,
					yOffset: -10
				},
				rightHandTop:
				{
					xOffset: -53,
					yOffset: -13
				},
				rightHandBottom:
				{
					xOffset: -120,
					yOffset: 9
				}
			},
			n = {
				1:
				{
					charX: 320,
					charY: 240
				},
				2:
				{
					charX: 392,
					charY: 248
				},
				3:
				{
					charX: 464,
					charY: 256
				},
				4:
				{
					charX: 535,
					charY: 265
				},
				5:
				{
					charX: 606,
					charY: 273
				},
				6:
				{
					charX: 679,
					charY: 281
				},
				7:
				{
					charX: 750,
					charY: 290
				},
				idle:
				{
					charX: 350,
					charY: 255
				},
				playStart:
				{
					charX: 500,
					charY: 260
				}
			},
			s = function ()
			{
				function s(e, a)
				{
					this.scene = e, this.state = a, this.updateState(a), this.character = this.scene.add.image(i.startPosition.x, i.startPosition.y, t.CONST.INSTRUMENT.CHARACTER_BODY).setDepth(5).setOrigin(.7, .18), this.leftHand = this.scene.add.image(0, 0, t.CONST.INSTRUMENT.HAND_LEFT).setDepth(4).setOrigin(.06, .72), this.rightHandTop = this.scene.add.image(0, 0, t.CONST.INSTRUMENT.HAND_RIGHT_TOP).setDepth(7).setOrigin(.85, .7), this.rightHandBottom = this.scene.add.image(0, 0, t.CONST.INSTRUMENT.HAND_RIGHT_BOTTOM).setDepth(17).setOrigin(.37, .35), this.head = this.scene.add.image(0, 0, t.CONST.INSTRUMENT.CHARACTER_HEAD).setDepth(6).setOrigin(.4, .9), this.updateBodyPosition(), this.scene.events.on("update", this.update, this)
				}
				return s.prototype.updateState = function (t)
				{
					t == a.GameState.Playing ? this.startPlayingAnimation() : t == a.GameState.Listening || t == a.GameState.Transitioning && (this.state == a.GameState.Listening ? this.transitionAnimationListenToPlay() : this.state == a.GameState.Playing && this.startIdleAnimation()), this.state = t
				}, s.prototype.startIdleAnimation = function ()
				{
					var t = this;
					this.scene.time.addEvent(
					{
						delay: 500,
						callback: function ()
						{
							t.stopRightHandAnim(), t.scene.tweens.add(
							{
								targets: t.character,
								x: n.idle.charX,
								y: n.idle.charY,
								ease: "Quad.easeInOut",
								duration: 500,
								repeat: 0,
								yoyo: !1
							}), t.stopLeftHandAnim(), t.leftHandAnim = t.scene.tweens.add(
							{
								targets: t.leftHand,
								angle: 50,
								ease: "Cubic.easeInOut",
								duration: 500
							}), t.stopRightHandAnim(), t.rightHandAnim = t.scene.tweens.add(
							{
								targets: t.rightHandBottom,
								angle: -90,
								ease: "Cubic.easeInOut",
								duration: 1e3
							})
						},
						callbackScope: this
					})
				}, s.prototype.startPlayingAnimation = function ()
				{
					this.startLeftHandAnim(), this.startRightHandAnim()
				}, s.prototype.transitionAnimationListenToPlay = function ()
				{
					this.scene.tweens.add(
					{
						targets: this.character,
						x: n.playStart.charX,
						y: n.playStart.charY,
						ease: "Quad.easeInOut",
						duration: 500,
						repeat: 0,
						yoyo: !1,
						delay: 300
					}), this.stopLeftHandAnim(), this.leftHandAnim = this.scene.tweens.add(
					{
						targets: this.leftHand,
						angle: 0,
						ease: "Cubic.easeInOut",
						duration: 1e3
					}), this.stopRightHandAnim(), this.rightHandAnim = this.scene.tweens.add(
					{
						targets: this.rightHandBottom,
						angle: 0,
						ease: "Cubic.easeInOut",
						duration: 1e3
					})
				}, s.prototype.updateBodyPosition = function ()
				{
					var t = function (t, e, a, i)
					{
						void 0 === i && (i = !1), t.setPosition(e.x + a.xOffset, e.y + a.yOffset), i && t.setRotation(e.rotation)
					};
					t(this.leftHand, this.character, i.leftHand), t(this.rightHandTop, this.character, i.rightHandTop), t(this.rightHandBottom, this.rightHandTop, i.rightHandBottom), t(this.head, this.character, i.head)
				}, s.prototype.startLeftHandAnim = function ()
				{
					this.stopLeftHandAnim(), this.leftHandAnim = this.scene.tweens.add(
					{
						targets: this.leftHand,
						angle: -5,
						ease: "Cubic.easeInOut",
						duration: 1e3,
						repeat: -1,
						yoyo: !0
					})
				}, s.prototype.stopLeftHandAnim = function ()
				{
					this.leftHandAnim && this.leftHandAnim.stop()
				}, s.prototype.startRightHandAnim = function ()
				{
					this.stopRightHandAnim(), this.rightHandAnim = this.scene.tweens.add(
					{
						targets: this.rightHandBottom,
						angle: -4,
						ease: "Cubic.easeInOut",
						duration: 1e3,
						repeat: -1,
						yoyo: !0
					})
				}, s.prototype.stopRightHandAnim = function ()
				{
					this.rightHandAnim && this.rightHandAnim.stop()
				}, s.prototype.animateNote = function (t)
				{
					var a = e.SIM_CLICK_PRE_ANIM_DURATION;
					this.scene.tweens.add(
					{
						targets: this.character,
						x: n[t.key].charX,
						y: n[t.key].charY,
						ease: "Quad.easeInOut",
						duration: .9 * a,
						repeat: 0,
						yoyo: !1
					}), this.stopRightHandAnim(), this.scene.tweens.add(
					{
						targets: this.rightHandBottom,
						angle: -20,
						ease: "Cubic.easeInOut",
						duration: .1 * a,
						repeat: 0,
						delay: a - .25 * a,
						yoyo: !1
					}), this.scene.tweens.add(
					{
						targets: this.rightHandBottom,
						angle: 20,
						ease: "Cubic.easeInOut",
						duration: .15 * a,
						repeat: 0,
						yoyo: !1,
						delay: a - .15 * a
					}), this.scene.tweens.add(
					{
						targets: this.rightHandBottom,
						angle: 0,
						ease: "Cubic.easeInOut",
						duration: .2 * a,
						repeat: 0,
						yoyo: !1,
						delay: a,
						onComplete: function ()
						{
							this.startRightHandAnim()
						},
						onCompleteScope: this
					})
				}, s.prototype.update = function ()
				{
					this.updateBodyPosition()
				}, s
			}();
		exports.Character = s;
	},
	{
		"../../CONST": "HmIA",
		"./Key": "2k0m",
		"../../scenes/InstrumentScene": "t8lp"
	}],
	"m7La": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, r)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
					})(e, r)
			};
			return function (e, r)
			{
				function n()
				{
					this.constructor = e
				}
				t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../CONST"),
			r = function (r)
			{
				function n(t, n, o, s, u)
				{
					void 0 === u && (u = e.CONST.BUTTONS.BACK);
					var i = r.call(this, s, n, o, u) || this;
					return s.storagePlugin.setItem("openArcadePopup", "1"), i.setInteractive(
					{
						useHandCursor: !0
					}), i.on("pointerup", function ()
					{
						s.rewardedBreakRequested || s.scene.start(t)
					}), s.add.existing(i), i
				}
				return t(n, r), n
			}(Phaser.GameObjects.Image);
		exports.default = r;
	},
	{
		"../CONST": "HmIA"
	}],
	"uCKR": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, r)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
					})(e, r)
			};
			return function (e, r)
			{
				function n()
				{
					this.constructor = e
				}
				t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = function (e)
		{
			function r(t, r, n, o)
			{
				var i = e.call(this, n, t, r, o) || this;
				return i.setInteractive(
				{
					useHandCursor: !0
				}), i.on("pointerup", function ()
				{
					n.restartGame()
				}), n.add.existing(i), i
			}
			return t(r, e), r
		}(Phaser.GameObjects.Image);
		exports.default = e;
	},
	{}],
	"Bfr5": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, r)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
					})(e, r)
			};
			return function (e, r)
			{
				function n()
				{
					this.constructor = e
				}
				t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = function (e)
		{
			function r(t, r, n, o, i)
			{
				var u = e.call(this, n, t, r, o) || this;
				return u.setInteractive(
				{
					useHandCursor: !0
				}), u.on("pointerup", function ()
				{
					var t = i();
					n.arcadeContinueLevel(t)
				}), n.add.existing(u), u
			}
			return t(r, e), r
		}(Phaser.GameObjects.Image);
		exports.default = e;
	},
	{}],
	"ZEuw": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var t = require("../../CONST"),
			e = {
				position:
				{
					x: 47,
					y: 45
				},
				spacing: 54,
				depth: 10,
				anim:
				{
					duration: 500,
					ease: "Quad.easeInOut"
				}
			},
			s = function ()
			{
				function t(t, s)
				{
					this.hearts = [], this.scene = t;
					for (var i = 0; i < s; i++) this.hearts.push(new a(t, e.position.x + i * e.spacing, e.position.y, !0))
				}
				return t.prototype.updateHearts = function (t)
				{
					for (var e = 0; e < this.hearts.length; e++) this.hearts[e].setState(e < t)
				}, t
			}();
		exports.HeartDisplay = s;
		var a = function ()
		{
			function s(s, a, i, n)
			{
				this.scene = s, this.bg = s.add.image(a, i, t.CONST.INSTRUMENT.HEART_EMPTY).setDepth(e.depth), this.heart = s.add.image(a, i, t.CONST.INSTRUMENT.HEART).setDepth(e.depth + 1), this.isFull = n, n || this.heart.setAlpha(0)
			}
			return s.prototype.setState = function (t)
			{
				this.isFull = t;
				var s = t ? 1 : 0;
				this.fadeTween && this.fadeTween.stop(), this.fadeTween = this.scene.tweens.add(
				{
					targets: this.heart,
					alpha: s,
					delay: 250,
					duration: e.anim.duration,
					ease: e.anim.ease
				})
			}, s
		}();
	},
	{
		"../../CONST": "HmIA"
	}],
	"t8lp": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
			{
				var t = function (e, i)
				{
					return (t = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function (e, i)
				{
					function n()
					{
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
				}
			}(),
			e = this && this.__importDefault || function (t)
			{
				return t && t.__esModule ? t :
				{
					default: t
				}
			};
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var i, n = require("../CONST"),
			s = require("./generic/MinigameScene"),
			r = require("../components/Instruments/Key"),
			o = require("../components/Instruments/Character"),
			a = e(require("../components/BackButton")),
			h = e(require("../components/TryAgainButton")),
			c = e(require("../components/ContinueButton")),
			u = require("../components/Instruments/HeartDisplay"),
			g = e(require("../components/HomeButton"));
		! function (t)
		{
			t[t.Playing = 1] = "Playing", t[t.Listening = 2] = "Listening", t[t.Transitioning = 3] = "Transitioning"
		}(i = exports.GameState || (exports.GameState = {}));
		var S = function (e)
		{
			function s()
			{
				var t = e.call(this,
				{
					sceneName: n.CONST.SCENES.INSTRUMENT,
					duration: 999999999,
					showCountdown: 0,
					showHomeButton: !1,
					timeToStart: 1e3,
					startScreenColor: 13294144,
					startText: "LISTEN\nAND REPEAT!",
					startTextYOrigin: .45,
					startTextColor: 3289650,
					endScreen: n.CONST.INSTRUMENT.END,
					showSkipButton: !1,
					nextScene: n.CONST.SCENES.BIRTH,
					endButtons:
					{
						normalNoSkip:
						{
							x: -426.5,
							y: 386,
							scale: 1.3
						},
						normalWithSkip:
						{
							x: 283,
							y: 386,
							scale: 1.3
						},
						skip:
						{
							x: 570,
							y: 386,
							scale: 1.3
						}
					},
					isArcadeMinigame: !0
				}) || this;
				return t.minigameConfig = {
					lives: 3,
					startDifficulty: 2,
					notesPerDifficulty: 1,
					delayBeforeListeningStart: 2e3,
					delayBeforePlayingStart: 1e3,
					noteLength:
					{
						min: 500,
						max: 1250,
						step: 250
					}
				}, t.keysConfig = [
				{
					key: 1,
					x: 205,
					y: 305,
					darkImage: n.CONST.INSTRUMENT.BAR_DARK_1,
					whiteImage: n.CONST.INSTRUMENT.BAR_WHITE_1,
					audio: n.CONST.AUDIO.INSTRUMENT_1
				},
				{
					key: 2,
					x: 278,
					y: 314,
					darkImage: n.CONST.INSTRUMENT.BAR_DARK_2,
					whiteImage: n.CONST.INSTRUMENT.BAR_WHITE_2,
					audio: n.CONST.AUDIO.INSTRUMENT_2
				},
				{
					key: 3,
					x: 360,
					y: 320,
					darkImage: n.CONST.INSTRUMENT.BAR_DARK_3,
					whiteImage: n.CONST.INSTRUMENT.BAR_WHITE_3,
					audio: n.CONST.AUDIO.INSTRUMENT_3
				},
				{
					key: 4,
					x: 433,
					y: 332,
					darkImage: n.CONST.INSTRUMENT.BAR_DARK_4,
					whiteImage: n.CONST.INSTRUMENT.BAR_WHITE_4,
					audio: n.CONST.AUDIO.INSTRUMENT_4
				},
				{
					key: 5,
					x: 500,
					y: 340,
					darkImage: n.CONST.INSTRUMENT.BAR_DARK_5,
					whiteImage: n.CONST.INSTRUMENT.BAR_WHITE_5,
					audio: n.CONST.AUDIO.INSTRUMENT_5
				},
				{
					key: 6,
					x: 575,
					y: 348,
					darkImage: n.CONST.INSTRUMENT.BAR_DARK_6,
					whiteImage: n.CONST.INSTRUMENT.BAR_WHITE_6,
					audio: n.CONST.AUDIO.INSTRUMENT_6
				},
				{
					key: 7,
					x: 642,
					y: 358,
					darkImage: n.CONST.INSTRUMENT.BAR_DARK_7,
					whiteImage: n.CONST.INSTRUMENT.BAR_WHITE_7,
					audio: n.CONST.AUDIO.INSTRUMENT_7
				}], t.isRestart = !1, t.keys = [], t.state = i.Listening, t.difficulty = 1, t.currentSong = [], t.currentSongIndex = -1, t.nextNoteTime = 0, t.currentScore = 0, t
			}
			return t(s, e), s.prototype._init = function ()
			{
				this.keys = [], this.state = i.Listening, this.currentSong = [], this.currentSongIndex = -1, this.nextNoteTime = 0, this.currentLives = this.minigameConfig.lives, this.currentScore = 0, this.difficulty = this.minigameConfig.startDifficulty, this.currentLives = this.minigameConfig.lives, this.isRestart = this.checkForRestart()
			}, s.prototype.checkForRestart = function ()
			{
				var t = this.sceneName + "restart",
					e = this.storagePlugin.getItem(t, "");
				if (e)
				{
					var i = JSON.parse(e);
					return this.difficulty = i.difficulty, this.currentScore = i.score, this.currentSong = i.song, this.storagePlugin.removeItem(t), !0
				}
				return !1
			}, s.prototype._preload = function () {}, s.prototype._create = function ()
			{
				var t = this;
				this.createBackground(), this.createCharacter(), this.createKeys(), this.pauseMusic(!0), this.heartDisplay = new u.HeartDisplay(this, this.currentLives), this.homeButton = new g.default(this, 40, this.renderer.height - 40).setDepth(30).setScrollFactor(0, 0, !0).setScale(.75), this.homeButton.addExitEvent(function ()
				{
					t.pauseMusic(!1)
				}), this.startListeningPhase(!0)
			}, s.prototype.onGameStarted = function () {}, s.prototype.createBackground = function ()
			{
				this.add.image(0, 0, n.CONST.INSTRUMENT.BACKGROUND).setOrigin(0, 0).setDepth(0).setScale(1.05, 1), this.add.image(0, 480, n.CONST.INSTRUMENT.TABLE).setOrigin(0, 1).setDepth(10)
			}, s.prototype.createCharacter = function ()
			{
				this.character = new o.Character(this, i.Playing)
			}, s.prototype.createKeys = function ()
			{
				var t = this;
				this.keysConfig.forEach(function (e)
				{
					var i = new r.Key(t, e, r.KeyState.Playing);
					i.clickCallback = function ()
					{
						t.handleKeyClick(e.key)
					}, t.keys.push(i)
				})
			}, s.prototype.startListeningPhase = function (t)
			{
				var e = this;
				void 0 === t && (t = !1), t || this.sound.play(n.CONST.AUDIO.WIN,
				{
					volume: .2,
					delay: .75
				}), this.updateGameState(i.Transitioning), this.time.addEvent(
				{
					delay: this.minigameConfig.delayBeforeListeningStart,
					callback: function ()
					{
						e.updateGameState(i.Listening), t || (e.difficulty += 1), e.currentSongIndex = -1, e.updateCurrentSong()
					},
					callbackScope: this
				})
			}, s.prototype.startPlayingPhase = function ()
			{
				var t = this;
				this.updateGameState(i.Transitioning), this.time.addEvent(
				{
					delay: this.minigameConfig.delayBeforePlayingStart,
					callback: function ()
					{
						t.updateGameState(i.Playing), t.currentSongIndex = 0
					},
					callbackScope: this
				})
			}, s.prototype.updateCurrentSong = function ()
			{
				for (var t = this.difficulty * this.minigameConfig.notesPerDifficulty, e = this.currentSong.length; e < t; e++) this.currentSong.push(this.getRandomNote())
			}, s.prototype.getRandomNote = function ()
			{
				var t = this.keysConfig[this.getRandomInt(0, this.keysConfig.length - 1)],
					e = Math.round((this.minigameConfig.noteLength.max - this.minigameConfig.noteLength.min) / this.minigameConfig.noteLength.step),
					i = this.minigameConfig.noteLength.min + this.getRandomInt(0, e) * this.minigameConfig.noteLength.step;
				return {
					key: t.key,
					time: i
				}
			}, s.prototype.updateGameState = function (t)
			{
				this.state = t, this.keys.forEach(function (e)
				{
					e.updateState(t)
				}), this.character.updateState(t)
			}, s.prototype.handleKeyClick = function (t)
			{
				this.character.animateNote(
				{
					key: t,
					time: 500
				}), t != this.currentSong[this.currentSongIndex].key ? this.handleWrongNote(t) : this.handleCorrectNote()
			}, s.prototype.handleCorrectNote = function ()
			{
				this.currentScore++, this.currentSongIndex++, this.currentSongIndex >= this.currentSong.length && this.startListeningPhase()
			}, s.prototype.handleWrongNote = function (t)
			{
				this.currentLives--, this.heartDisplay.updateHearts(this.currentLives), this.keys.forEach(function (e)
				{
					e.key == t && e.displayMistake()
				}), this.currentLives <= 0 ? this.triggerLose() : this.startListeningPhase(!0)
			}, s.prototype._update = function (t, e)
			{
				this.updateListeningPhase(t)
			}, s.prototype.updateListeningPhase = function (t)
			{
				this.state == i.Listening && (this.currentSongIndex >= this.currentSong.length ? this.startPlayingPhase() : t > this.nextNoteTime && this.playNextNote(t))
			}, s.prototype.playNextNote = function (t)
			{
				if (this.currentSongIndex++, !(this.currentSongIndex >= this.currentSong.length))
				{
					var e = this.currentSong[this.currentSongIndex];
					this.nextNoteTime = t + e.time, this.keys.forEach(function (t)
					{
						t.key == e.key && t.simulateClick()
					})
				}
			}, s.prototype._timeout = function () {}, s.prototype._afterLoss = function ()
			{
				this.pauseMusic(!1)
			}, s.prototype._afterWin = function () {}, s.prototype.triggerLose = function ()
			{
				var t = this;
				this.homeButton.setVisible(!1), setTimeout(function ()
				{
					t.sound.play(n.CONST.AUDIO.LOSE)
				}, 750), this.saveAndDisplayScore(), this.updateGameState(i.Transitioning), this.loseGame(2e3)
			}, s.prototype.triggerWin = function ()
			{
				this.winGame(1e3)
			}, s.prototype.saveAndDisplayScore = function ()
			{
				var t = this.currentScore,
					e = this.getHighscore(),
					i = t > e;
				this.displayScore(t, i, e), i && this.setHighscore(t), this.sendFinalScoreAnalyticsEvent(t)
			}, s.prototype.displayScore = function (t, e, i)
			{
				this.endScoreDisplay.text = t.toString();
				var n = this.endScoreDisplay.text.length;
				1 == n && (this.endScoreDisplay.x = 241, this.highscoreImage.x = 272, this.highscoreImage.y = 320), 2 == n && (this.endScoreDisplay.x = 230, this.highscoreImage.x = 272, this.highscoreImage.y = 319), n >= 3 && (this.endScoreDisplay.x = 222, this.highscoreImage.x = 277, this.highscoreImage.y = 320), this.highscoreImage.setAlpha(e ? 1 : 0)
			}, s.prototype.pauseMusic = function (t)
			{
				this.registry.get(n.CONST.SCENES.SOUNDTRACK).pauseMusic(t)
			}, s.prototype.getCustomLoseUIElements = function ()
			{
				var t = this;
				return this.highscoreImage = this.add.image(277, 320, n.CONST.INSTRUMENT.NEW_BEST).setDepth(3), this.endScoreDisplay = this.add.text(224, 318, "123",
				{
					fontFamily: "bloggerSans",
					fontSize: 35,
					color: "#EB5166",
					align: "center"
				}).setDepth(2), this.isRestart || this.registry.get(n.CONST.REGISTRY.ADBLOCKENABLED) ? [new a.default(n.CONST.SCENES.MENU, 150, 402, this, n.CONST.INSTRUMENT.BACK_2).setScale(1.1), new h.default(299, 391, this, n.CONST.INSTRUMENT.TRY_AGAIN_2).setScale(1.1).setDepth(2), this.endScoreDisplay, this.highscoreImage] : [new a.default(n.CONST.SCENES.MENU, 235, 439, this, n.CONST.INSTRUMENT.BACK).setScale(1.1), new c.default(304, 389, this, n.CONST.INSTRUMENT.CONTINUE, function ()
				{
					return t.getContinueData()
				}).setScale(1.1), new h.default(153, 397, this, n.CONST.INSTRUMENT.TRY_AGAIN).setDepth(2), this.endScoreDisplay, this.highscoreImage]
			}, s.prototype.getContinueData = function ()
			{
				return {
					difficulty: this.difficulty,
					score: this.currentScore,
					song: this.currentSong
				}
			}, s
		}(s.MinigameScene);
		exports.InstrumentScene = S;
	},
	{
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5",
		"../components/Instruments/Key": "2k0m",
		"../components/Instruments/Character": "AFF7",
		"../components/BackButton": "m7La",
		"../components/TryAgainButton": "uCKR",
		"../components/ContinueButton": "Bfr5",
		"../components/Instruments/HeartDisplay": "ZEuw",
		"../components/HomeButton": "fGrI"
	}],
	"+4WN": [function (require, module, exports)
	{
		"use strict";
		var e = this && this.__extends || function ()
			{
				var e = function (t, n)
				{
					return (e = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (e, t)
						{
							e.__proto__ = t
						} || function (e, t)
						{
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						})(t, n)
				};
				return function (t, n)
				{
					function i()
					{
						this.constructor = t
					}
					e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
				}
			}(),
			t = this && this.__importDefault || function (e)
			{
				return e && e.__esModule ? e :
				{
					default: e
				}
			};
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var n = require("../CONST"),
			i = t(require("../components/BackButton")),
			r = function (t)
			{
				function r()
				{
					return t.call(this,
					{
						key: n.CONST.SCENES.ARCADE_MINIGAME_LOADING
					}) || this
				}
				return e(r, t), r.prototype.preload = function () {}, r.prototype.init = function (e)
				{
					this.progressiveLoadScene = this.registry.get(n.CONST.SCENES.PROGRESSIVE_LOAD), this.nextScene = e.next
				}, r.prototype.create = function ()
				{
					this.nextScene && this.progressiveLoadScene.prioritizeChunksWithTag(this.nextScene), this.add.image(0, 0, n.CONST.MENU.BACKGROUND).setOrigin(0, 0).setDepth(0), new i.default(n.CONST.SCENES.MENU, 50, 50, this), this.createLoadingText(), this.createSpinner()
				}, r.prototype.createLoadingText = function ()
				{
					this.add.bitmapText(this.game.renderer.width / 2, this.game.renderer.height / 2, n.CONST.FONT.ATLAS, "LOADING", 75).setOrigin(.5, .25).setDepth(1001).setCenterAlign()
				}, r.prototype.createSpinner = function ()
				{
					var e = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, n.CONST.BUTTONS.SPINNER).setDepth(1002).setVisible(!0);
					this.tweens.add(
					{
						targets: e,
						angle: "+=360",
						duration: 1e3,
						ease: "Linear",
						repeat: -1
					})
				}, r.prototype.update = function (e, t)
				{
					this.nextScene && this.progressiveLoadScene.isSceneLoaded(this.nextScene) && this.loadNextScene()
				}, r.prototype.loadNextScene = function ()
				{
					this.scene.start(this.nextScene)
				}, r
			}(Phaser.Scene);
		exports.ArcadeMinigameLoadingScene = r;
	},
	{
		"../CONST": "HmIA",
		"../components/BackButton": "m7La"
	}],
	"lLId": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, n)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
					})(e, n)
			};
			return function (e, n)
			{
				function o()
				{
					this.constructor = e
				}
				t(e, n), e.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../../CONST"),
			n = {
				width: 250,
				height: 15,
				depth: 40,
				startTween:
				{
					from:
					{
						y: -100
					},
					ease: "Quad.easeOut",
					duration: 500
				},
				endTween:
				{
					to:
					{
						y: -100
					},
					ease: "Quad.easeIn",
					duration: 500,
					delay: 500
				}
			},
			o = function (o)
			{
				function i(t)
				{
					var e = o.call(this, t.scene, t.position.x, n.startTween.from.y) || this;
					return e.countdownStartX = 0, e.countdownMoveX = 0, e.config = t, e.currentDuration = t.duration, e.isCountingDown = !1, e.setScale(.9), e.createChildren(), e.setLoadingBarPercentage(1), e.setScrollFactor(0), t.scene.add.existing(e), e.config.scene.tweens.add(
					{
						targets: e,
						y: t.position.y,
						ease: n.startTween.ease,
						duration: n.startTween.duration
					}), e
				}
				return t(i, o), i.prototype.startCountdown = function ()
				{
					return this.timer = this.config.scene.time.addEvent(
					{
						delay: this.config.duration,
						callback: this.config.onComplete
					}), this.isCountingDown = !0, this
				}, i.prototype.stopCountdown = function ()
				{
					this.timer.paused = !0, this.config.scene.tweens.add(
					{
						targets: this,
						y: n.endTween.to.y,
						ease: n.endTween.ease,
						duration: n.endTween.duration,
						delay: n.endTween.delay
					})
				}, i.prototype.getRemainingTimeShare = function ()
				{
					return 1 - this.timer.getProgress()
				}, i.prototype.getElapsedTime = function ()
				{
					return this.timer.getProgress() * this.currentDuration
				}, i.prototype.getTotalTime = function ()
				{
					return this.currentDuration
				}, i.prototype.destroy = function ()
				{
					this.timer.remove(!1), this.maskShape.destroy(), o.prototype.destroy.call(this)
				}, i.prototype.createChildren = function ()
				{
					var t = this.config.scene.add.image(0, 0, e.CONST.GRID_FILL.COUNTDOWN_1),
						o = this.config.scene.add.image(1, 2, e.CONST.GRID_FILL.COUNTDOWN_3);
					this.countdownImage = this.config.scene.add.image(this.x + 1, this.y + 2, e.CONST.GRID_FILL.COUNTDOWN_2).setScrollFactor(0).setScale(this.scaleX, this.scaleY), this.maskShape = this.config.scene.add.graphics().fillStyle(16777215, 0).beginPath().fillRect(this.countdownImage.getTopLeft().x, 0, this.countdownImage.displayWidth, 500).setDepth(n.depth + 1), this.countdownStartX = this.maskShape.x, this.countdownMoveX = this.countdownImage.displayWidth;
					var i = this.maskShape.createGeometryMask();
					this.countdownImage.setMask(i), this.add([t, o])
				}, i.prototype.setLoadingBarPercentage = function (t)
				{
					this.maskShape.x = this.countdownStartX - (1 - t) * this.countdownMoveX
				}, i.prototype.onUpdate = function ()
				{
					this.isCountingDown && (this.setLoadingBarPercentage(this.getRemainingTimeShare()), this.updateCountdownDisplay())
				}, i.prototype.updateCountdownDisplay = function ()
				{
					this.countdownImage && this.countdownImage.setPosition(this.x + 1, this.y + 2).setDepth(this.depth + 1)
				}, i
			}(Phaser.GameObjects.Container);
		exports.Countdown = o;
	},
	{
		"../../CONST": "HmIA"
	}],
	"FMD+": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, i)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function (e, i)
			{
				function s()
				{
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../../CONST"),
			i = {
				invalidBlockColor: e.CONST.GRID_FILL.BLOCK_GREY,
				defaultDepth: 20,
				dragDepth: 21,
				moveTween:
				{
					duration: 100,
					spawnDuration: 300,
					ease: "Back.easeOut"
				},
				fadeTween:
				{
					duration: 500,
					delay: 100,
					ease: "Quad.easeInOut"
				}
			},
			s = function (s)
			{
				function o(t, o, r, a, n)
				{
					var d = s.call(this, r, r.game.renderer.width / 2, r.game.renderer.height + 200, e.CONST.BUTTONS.BACK) || this;
					return d.gameLost = !1, d.config = t, d.gridOrigin = a, d.cellSize = n, d.shape = o, d.setDepth(i.defaultDepth), d.setDisplaySize(d.cellSize + 1, d.cellSize), d.setInteractive(
					{
						useHandCursor: !0,
						draggable: !0
					}), d.on("dragstart", function (t, e, i)
					{
						d.shape.handleDragStart(d.x, d.y)
					}), d.on("drag", function (t, e, i)
					{
						d.gameLost || d.shape.handleDrag(e, i)
					}), d.on("dragend", function (t, e, i, s)
					{
						d.gameLost || d.shape.handleDragEnd()
					}), r.add.existing(d), d
				}
				return t(o, s), o.prototype.handleDragStart = function ()
				{
					this.depth = i.dragDepth, this.startX = this.x, this.startY = this.y
				}, o.prototype.updateDragPosition = function (t, e)
				{
					this.x = this.startX + t, this.y = this.startY + e
				}, o.prototype.setGridPosition = function (t, e)
				{
					void 0 === e && (e = !1), this.depth = i.defaultDepth, this.gridPos = {
						x: this.config.gridOffset.x + t.x,
						y: this.config.gridOffset.y + t.y
					};
					var s = this.getWorldPos(this.gridPos);
					return this.shape.scene.tweens.add(
					{
						targets: this,
						x: s.x,
						y: s.y,
						ease: i.moveTween.ease,
						duration: e ? i.moveTween.spawnDuration : i.moveTween.duration
					}), this
				}, o.prototype.getWorldPos = function (t)
				{
					return {
						x: this.gridOrigin.x + this.cellSize * (t.x + .5),
						y: this.gridOrigin.y + this.cellSize * (t.y + .5)
					}
				}, o.prototype.fadeOut = function ()
				{
					this.disableInteractive();
					var t = this.getWorldPos(this.gridPos),
						e = this.shape.scene.add.image(t.x, t.y, i.invalidBlockColor).setDepth(i.dragDepth + 1).setScale(this.scaleX, this.scaleY).setAlpha(1).setTintFill(16777215);
					this.shape.scene.tweens.add(
					{
						targets: e,
						alpha: 0,
						ease: i.fadeTween.ease,
						duration: i.fadeTween.duration,
						delay: i.fadeTween.delay,
						onComplete: function ()
						{
							e.destroy()
						}
					})
				}, o.prototype.onGameLost = function ()
				{
					this.disableInteractive(), this.gameLost = !0
				}, o.prototype.setHighlight = function (t)
				{
					this.setTexture(t ? this.shape.getBlockColor() : i.invalidBlockColor)
				}, o.prototype.getGridPos = function ()
				{
					return this.gridPos
				}, o
			}(Phaser.GameObjects.Image);
		exports.Block = s;
	},
	{
		"../../CONST": "HmIA"
	}],
	"lvwm": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var t = require("../../CONST"),
			i = require("./Block"),
			s = function ()
			{
				function s(t, i, s)
				{
					var o = this;
					this.scene = t, this.config = i, this.gridManager = s, this.gridPos = this.config.startPos, this.lastFrameGridPos = this.gridPos, this.lastValidGridPos = this.gridPos, this.blocks = [], i.blocks.forEach(function (t)
					{
						o.blocks.push(o.spawnBlock(t))
					}), this.gridManager.updateOccupancyMap(this, !0), this.displayPositionValidity(!0)
				}
				return s.prototype.spawnBlock = function (t)
				{
					return new i.Block(t, this, this.scene, this.gridManager.getGridOrigin(), this.gridManager.getCellSize()).setGridPosition(this.gridPos, !0)
				}, s.prototype.handleDragStart = function (i, s)
				{
					this.dragStartX = i, this.dragStartY = s, this.gridManager.updateOccupancyMap(this, !1), this.blocks.forEach(function (t)
					{
						t.handleDragStart()
					}), this.scene.sound.play(t.CONST.AUDIO.GRAB,
					{
						detune: this.scene.getDetune()
					})
				}, s.prototype.handleDrag = function (t, i)
				{
					var s = this;
					this.dragXDiff = t - this.dragStartX, this.dragYDiff = i - this.dragStartY;
					var o = this.getDragGridPos();
					if (o.x !== this.lastFrameGridPos.x || o.y !== this.lastFrameGridPos.y)
					{
						var r = this.gridManager.isGridPosValid(o, this);
						this.displayPositionValidity(r), r && (this.lastValidGridPos = o)
					}
					this.lastFrameGridPos = o, this.blocks.forEach(function (t)
					{
						t.updateDragPosition(s.dragXDiff, s.dragYDiff)
					})
				}, s.prototype.handleDragEnd = function ()
				{
					var i = this;
					this.gridPos = this.lastValidGridPos, this.blocks.forEach(function (t)
					{
						t.setGridPosition(i.gridPos)
					}), this.displayPositionValidity(!0), this.gridManager.updateOccupancyMap(this, !0), this.gridManager.checkForBoardCompleted(), this.scene.sound.play(t.CONST.AUDIO.GRAB,
					{
						detune: this.scene.getDetune()
					})
				}, s.prototype.displayPositionValidity = function (t)
				{
					this.blocks.forEach(function (i)
					{
						i.setHighlight(t)
					})
				}, s.prototype.fadeOut = function ()
				{
					this.blocks.forEach(function (t)
					{
						return t.fadeOut()
					})
				}, s.prototype.onGameLost = function ()
				{
					this.blocks.forEach(function (t)
					{
						return t.onGameLost()
					})
				}, s.prototype.destroy = function ()
				{
					this.blocks.forEach(function (t)
					{
						return t.destroy()
					})
				}, s.prototype.getDragGridPos = function ()
				{
					return {
						x: this.gridPos.x + Math.round(this.dragXDiff / this.gridManager.getCellSize()),
						y: this.gridPos.y + Math.round(this.dragYDiff / this.gridManager.getCellSize())
					}
				}, s.prototype.collidesWith = function (t, i)
				{
					return !1
				}, s.prototype.getGridPosition = function ()
				{
					return this.gridPos
				}, s.prototype.getBlockColor = function ()
				{
					return this.config.blockColor
				}, s.prototype.getBlocks = function ()
				{
					return this.blocks
				}, s
			}();
		exports.Shape = s;
	},
	{
		"../../CONST": "HmIA",
		"./Block": "FMD+"
	}],
	"xrWB": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var t = require("../../CONST"),
			i = require("./Shape"),
			o = function ()
			{
				function o(i, o, e, r)
				{
					this.availableBlockColors = [t.CONST.GRID_FILL.BLOCK_BLUE, t.CONST.GRID_FILL.BLOCK_GREEN, t.CONST.GRID_FILL.BLOCK_ORANGE, t.CONST.GRID_FILL.BLOCK_PURPLE, t.CONST.GRID_FILL.BLOCK_RED, t.CONST.GRID_FILL.BLOCK_YELLOW], this.scene = i, this.position = o, this.shapeConfig = this.interpretGridConfig(e), this.occupancyMap = [], this.cellSize = r[this.rowCount].cellSize, this.position.y += r[this.rowCount].yOffset
				}
				return o.prototype.interpretGridConfig = function (t)
				{
					this.availableBlockColors = Phaser.Utils.Array.Shuffle(this.availableBlockColors).slice();
					for (var i = [], o = t.g, e = t.b, r = t.n, s = 0; s < e.length; s++)
					{
						var n = {
							blocks: [],
							startPos:
							{
								x: e[s][0],
								y: e[s][1]
							},
							blockColor: this.getRandomBlockColor()
						};
						i[s] = n
					}
					for (s = 0; s < o.length; s++)
						for (var h = 0; h < o[s].length; h++)
						{
							i[o[s][h]].blocks.push(
							{
								gridOffset:
								{
									x: h,
									y: s
								}
							})
						}
					return this.rowCount = o.length, this.columnCount = o[0].length, this.gridName = r, i
				}, o.prototype.getRandomBlockColor = function ()
				{
					var i = this.availableBlockColors.pop();
					return i || t.CONST.GRID_FILL.BLOCK_BLUE
				}, o.prototype.createGrid = function ()
				{
					var o = this;
					this.gridBg = this.scene.add.grid(this.position.x, this.position.y, this.columnCount * this.cellSize, this.rowCount * this.cellSize, this.cellSize, this.cellSize, 7697524).setDepth(11), this.imageBg = this.scene.add.image(this.position.x, this.position.y, t.CONST.GRID_FILL.SCREEN).setDepth(10).setDisplaySize(this.columnCount * this.cellSize + 5, this.rowCount * this.cellSize + 5), this.gridOrigin = this.gridBg.getTopLeft(), this.shapes = [], this.shapeConfig.forEach(function (t)
					{
						o.shapes.push(new i.Shape(o.scene, t, o))
					})
				}, o.prototype.getCellSize = function ()
				{
					return this.cellSize
				}, o.prototype.getGridOrigin = function ()
				{
					return this.gridOrigin
				}, o.prototype.gridToWorldPosition = function (t)
				{
					return new Phaser.Math.Vector2(this.gridOrigin.x + t.x * this.cellSize, this.gridOrigin.y + t.y * this.cellSize)
				}, o.prototype.isGridPosValid = function (t, i)
				{
					var o = this;
					return !i.getBlocks().some(function (i)
					{
						var e = {
							x: t.x + i.config.gridOffset.x,
							y: t.y + i.config.gridOffset.y
						};
						return o.occupancyMap[e.x.toString() + e.y.toString()]
					})
				}, o.prototype.updateOccupancyMap = function (t, i)
				{
					var o = this;
					t.getBlocks().forEach(function (t)
					{
						var e = t.getGridPos();
						o.occupancyMap[e.x.toString() + e.y.toString()] = i
					})
				}, o.prototype.checkForBoardCompleted = function ()
				{
					this.isBoardCompleted() && this.scene.onLevelCompleted()
				}, o.prototype.handleLevelCompleted = function ()
				{
					this.shapes.forEach(function (t)
					{
						return t.fadeOut()
					})
				}, o.prototype.isBoardCompleted = function ()
				{
					for (var t = 0; t < this.columnCount; t++)
						for (var i = 0; i < this.rowCount; i++)
							if (!this.occupancyMap[t.toString() + i.toString()]) return !1;
					return !0
				}, o.prototype.onGameLost = function ()
				{
					this.shapes.forEach(function (t)
					{
						return t.onGameLost()
					})
				}, o.prototype.destroy = function ()
				{
					this.gridBg.destroy(), this.imageBg.destroy(), this.shapes.forEach(function (t)
					{
						return t.destroy()
					})
				}, o.prototype.getGridName = function ()
				{
					return this.gridName
				}, o
			}();
		exports.default = o;
	},
	{
		"../../CONST": "HmIA",
		"./Shape": "lvwm"
	}],
	"EEx1": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		}), exports.levels = {
			easy: [
			{
				n: "e1",
				g: [
					[1, 1, 1, 2],
					[0, 1, 1, 2],
					[0, 0, 0, 2],
					[3, 3, 2, 2]
				],
				b: [
					[3, 6],
					[-1, 8],
					[-6, 6],
					[0, 3]
				]
			},
			{
				n: "e2",
				g: [
					[0, 1, 1, 1, 1],
					[0, 1, 0, 0, 1],
					[0, 1, 1, 0, 1],
					[0, 0, 0, 0, 1],
					[1, 1, 1, 1, 1]
				],
				b: [
					[3, 8],
					[-2, 7]
				]
			},
			{
				n: "e3",
				g: [
					[0, 0, 2, 2, 2, 3],
					[0, 0, 2, 1, 2, 3],
					[1, 0, 2, 1, 2, 3],
					[1, 1, 1, 1, 2, 3]
				],
				b: [
					[0, 7],
					[3, 6],
					[5, 6],
					[-7, 6]
				]
			},
			{
				n: "e4",
				g: [
					[0, 1, 2, 2, 2],
					[0, 1, 1, 2, 2],
					[0, 0, 1, 2, 2]
				],
				b: [
					[5, 5],
					[-3, 5],
					[-1, 5]
				]
			},
			{
				n: "e5",
				g: [
					[0, 1, 1, 1, 3],
					[0, 0, 0, 1, 3],
					[2, 2, 0, 1, 3],
					[2, 2, 0, 3, 3]
				],
				b: [
					[5, 6],
					[1, 7],
					[-1, 5],
					[-3, 6]
				]
			},
			{
				n: "e6",
				g: [
					[3, 3, 1, 1],
					[3, 0, 0, 1],
					[3, 2, 0, 0],
					[3, 2, 2, 2]
				],
				b: [
					[-1, 5],
					[3, 7],
					[-4, 5],
					[3, 6]
				]
			},
			{
				n: "e7",
				g: [
					[0, 2, 2],
					[0, 2, 1],
					[0, 1, 1]
				],
				b: [
					[1, 5],
					[-3, 5],
					[2, 6],
					[0, 0]
				]
			},
			{
				n: "e8",
				g: [
					[0, 3, 3, 3, 3],
					[0, 0, 0, 0, 1],
					[2, 2, 2, 2, 1],
					[2, 2, 2, 1, 1]
				],
				b: [
					[1, 7],
					[1, 6],
					[-3, 5],
					[-2, 6]
				]
			},
			{
				n: "e9",
				g: [
					[0, 0, 0, 1, 2],
					[1, 1, 0, 1, 2],
					[2, 1, 1, 1, 2],
					[2, 2, 2, 2, 2]
				],
				b: [
					[1, 7],
					[-3, 6],
					[2, 6]
				]
			},
			{
				n: "e10",
				g: [
					[2, 2, 0, 0],
					[1, 2, 0, 3],
					[1, 2, 2, 3],
					[1, 1, 3, 3]
				],
				b: [
					[1, 7],
					[0, 5],
					[1, 7],
					[-4, 5]
				]
			},
			{
				n: "e11",
				g: [
					[0, 0, 0, 1, 1, 1],
					[3, 3, 0, 0, 1, 1],
					[3, 3, 2, 2, 1, 1],
					[3, 3, 2, 2, 1, 1]
				],
				b: [
					[7, 7],
					[-8, 6],
					[-2, 5],
					[4, 5]
				]
			},
			{
				n: "e12",
				g: [
					[0, 0, 0, 0, 0],
					[2, 2, 2, 1, 0],
					[3, 3, 2, 1, 1],
					[3, 3, 2, 1, 1]
				],
				b: [
					[7, 7],
					[-3, 5],
					[3, 5],
					[-4, 5]
				]
			},
			{
				n: "e13",
				g: [
					[0, 0, 3, 3],
					[0, 1, 3, 3],
					[0, 1, 2, 2],
					[1, 1, 2, 2]
				],
				b: [
					[-3, 6],
					[-1, 6],
					[3, 5],
					[0, 6]
				]
			},
			{
				n: "e14",
				g: [
					[0, 0, 0, 1, 2, 2],
					[0, 0, 0, 1, 2, 2],
					[1, 0, 0, 1, 2, 2],
					[1, 0, 0, 1, 2, 2],
					[1, 1, 1, 1, 2, 2]
				],
				b: [
					[-2, 8],
					[5, 7],
					[-2, 7]
				]
			},
			{
				n: "e15",
				g: [
					[0, 0, 1, 2],
					[1, 0, 1, 2],
					[1, 0, 1, 2],
					[1, 1, 1, 2]
				],
				b: [
					[-3, 6],
					[4, 6],
					[-2, 6]
				]
			},
			{
				n: "e16",
				g: [
					[0, 0, 0, 3, 3],
					[0, 0, 3, 3, 3],
					[0, 3, 3, 2, 3],
					[1, 1, 3, 2, 2],
					[1, 1, 1, 2, 2]
				],
				b: [
					[3, 8],
					[1, 7],
					[-5, 7],
					[-2, 7]
				]
			},
			{
				n: "e17",
				g: [
					[0, 2, 2, 2, 2],
					[0, 0, 1, 2, 2],
					[0, 0, 1, 1, 1]
				],
				b: [
					[4, 5],
					[-2, 5],
					[-6, 6]
				]
			},
			{
				n: "e18",
				g: [
					[0, 0, 1, 2, 2],
					[0, 0, 1, 1, 2],
					[0, 0, 1, 2, 2]
				],
				b: [
					[-1, 5],
					[3, 5],
					[-1, 5]
				]
			},
			{
				n: "e19",
				g: [
					[0, 1, 2, 3, 4],
					[0, 1, 2, 3, 4],
					[0, 1, 2, 3, 4]
				],
				b: [
					[2, 5],
					[-1, 5],
					[2, 5],
					[-5, 5],
					[2, 5]
				]
			},
			{
				n: "e20",
				g: [
					[0, 0, 0, 0, 3, 3],
					[1, 2, 2, 2, 3, 3],
					[1, 1, 1, 2, 3, 3]
				],
				b: [
					[3, 5],
					[2, 4],
					[-4, 4],
					[-4, 5]
				]
			},
			{
				n: "e21",
				g: [
					[0, 0, 0, 0, 1, 3],
					[2, 1, 1, 1, 1, 3],
					[2, 1, 3, 3, 3, 3],
					[2, 2, 2, 2, 3, 3]
				],
				b: [
					[3, 7],
					[-4, 6],
					[1, 5],
					[4, 6]
				]
			},
			{
				n: "e22",
				g: [
					[0, 1, 1, 1, 2],
					[0, 1, 0, 0, 2],
					[0, 1, 0, 0, 2],
					[0, 0, 0, 2, 2]
				],
				b: [
					[-2, 6],
					[1, 7],
					[1, 6]
				]
			},
			{
				n: "e23",
				g: [
					[0, 1, 2, 2, 2, 3],
					[0, 1, 2, 1, 2, 3],
					[0, 1, 1, 1, 2, 3],
					[0, 0, 0, 0, 2, 3]
				],
				b: [
					[-1, 6],
					[4, 7],
					[-1, 6],
					[-1, 6]
				]
			},
			{
				n: "e24",
				g: [
					[0, 3, 3, 3, 3, 3],
					[0, 2, 2, 2, 2, 2],
					[0, 0, 0, 0, 0, 0],
					[1, 1, 1, 1, 1, 0]
				],
				b: [
					[4, 6],
					[-5, 3],
					[-4, 6],
					[-2, 8]
				]
			},
			{
				n: "e25",
				g: [
					[0, 0, 0, 2, 2],
					[1, 0, 2, 2, 2],
					[1, 1, 1, 1, 2]
				],
				b: [
					[1, 6],
					[-3, 4],
					[2, 5]
				]
			},
			{
				n: "e26",
				g: [
					[0, 0, 0, 2, 2],
					[0, 1, 1, 2, 2],
					[0, 1, 2, 2, 2],
					[0, 1, 2, 2, 2],
					[1, 1, 1, 2, 2]
				],
				b: [
					[-2, 8],
					[3, 6],
					[-2, 7]
				]
			},
			{
				n: "e27",
				g: [
					[0, 1, 1, 1, 1],
					[0, 2, 2, 2, 3],
					[0, 0, 2, 3, 3]
				],
				b: [
					[5, 5],
					[0, 7],
					[0, 4],
					[-4, 5]
				]
			},
			{
				n: "e28",
				g: [
					[1, 1, 1, 1, 0],
					[1, 1, 1, 0, 0],
					[1, 1, 0, 0, 0],
					[1, 0, 0, 0, 0]
				],
				b: [
					[-3, 6],
					[3, 6]
				]
			},
			{
				n: "e29",
				g: [
					[1, 1, 2, 0],
					[1, 2, 2, 0],
					[1, 0, 0, 0]
				],
				b: [
					[-5, 5],
					[0, 5],
					[3, 5]
				]
			}],
			normal: [
			{
				n: "n1",
				g: [
					[1, 1, 1, 2, 4],
					[1, 1, 2, 2, 4],
					[1, 3, 3, 3, 4],
					[0, 0, 0, 0, 4]
				],
				b: [
					[-2, 4],
					[5, 6],
					[1, 6],
					[0, 4],
					[-7, 6]
				]
			},
			{
				n: "n2",
				g: [
					[0, 0, 0, 1, 1],
					[3, 3, 0, 0, 1],
					[3, 2, 2, 2, 1],
					[3, 3, 2, 1, 1]
				],
				b: [
					[-1, 8],
					[1, 6],
					[-3, 4],
					[2, 5]
				]
			},
			{
				n: "n3",
				g: [
					[0, 0, 0, 2, 2],
					[0, 0, 1, 1, 2],
					[1, 1, 1, 2, 2],
					[3, 3, 3, 3, 3]
				],
				b: [
					[0, 7],
					[3, 5],
					[-5, 6],
					[0, 3]
				]
			},
			{
				n: "n4",
				g: [
					[3, 3, 2, 0, 0],
					[3, 2, 2, 0, 0],
					[3, 2, 1, 0, 0],
					[3, 2, 1, 1, 1]
				],
				b: [
					[-1, 6],
					[-2, 6],
					[3, 6],
					[-1, 6]
				]
			},
			{
				n: "n5",
				g: [
					[0, 0, 0, 4, 4, 4],
					[3, 1, 0, 4, 1, 4],
					[3, 1, 1, 1, 1, 2],
					[3, 3, 3, 2, 2, 2]
				],
				b: [
					[5, 7],
					[-1, 7],
					[-2, 4],
					[4, 5],
					[-5, 6]
				]
			},
			{
				n: "n6",
				g: [
					[0, 0, 0, 0, 0],
					[0, 3, 4, 4, 5],
					[1, 3, 3, 4, 5],
					[1, 3, 3, 4, 5],
					[1, 1, 5, 5, 5]
				],
				b: [
					[-2, 10],
					[3, 5],
					[0, 0],
					[-1, 6],
					[-5, 6],
					[1, 6]
				]
			},
			{
				n: "n7",
				g: [
					[0, 0, 0, 0, 0, 1],
					[4, 0, 3, 1, 1, 1],
					[4, 3, 3, 3, 2, 2],
					[4, 4, 4, 2, 2, 2]
				],
				b: [
					[1, 6],
					[-2, 7],
					[-5, 5],
					[4, 6],
					[4, 6],
					[0, 0]
				]
			},
			{
				n: "n9",
				g: [
					[0, 1, 1, 1, 1],
					[0, 0, 0, 2, 1],
					[3, 3, 0, 2, 1],
					[3, 2, 2, 2, 2],
					[3, 3, 3, 3, 2]
				],
				b: [
					[3, 8],
					[2, 7],
					[-4, 6],
					[1, 7]
				]
			},
			{
				n: "n10",
				g: [
					[0, 1, 1, 1, 1],
					[0, 0, 3, 3, 1],
					[2, 3, 3, 3, 3],
					[2, 2, 2, 2, 3]
				],
				b: [
					[2, 8],
					[0, 6],
					[3, 5],
					[-3, 5]
				]
			},
			{
				n: "n11",
				g: [
					[0, 0, 3, 3, 3],
					[2, 0, 0, 3, 1],
					[2, 2, 0, 1, 1],
					[2, 2, 2, 1, 1]
				],
				b: [
					[0, 7],
					[3, 5],
					[3, 5],
					[-4, 8]
				]
			},
			{
				n: "n12",
				g: [
					[0, 1, 1, 2],
					[0, 1, 2, 2],
					[0, 1, 1, 2],
					[3, 1, 2, 3],
					[3, 3, 3, 3]
				],
				b: [
					[3, 8],
					[-3, 7],
					[2, 7],
					[-1, 7]
				]
			},
			{
				n: "n13",
				g: [
					[0, 1, 1, 2, 3],
					[0, 1, 2, 2, 3],
					[0, 1, 2, 2, 3],
					[0, 1, 4, 4, 3],
					[0, 0, 4, 4, 3]
				],
				b: [
					[3, 7],
					[-1, 8],
					[-4, 8],
					[1, 7],
					[-1, 6]
				]
			},
			{
				n: "n14",
				g: [
					[0, 4, 4, 4, 4],
					[0, 0, 0, 3, 4],
					[1, 1, 0, 3, 3],
					[1, 1, 1, 3, 2],
					[1, 2, 2, 2, 2]
				],
				b: [
					[4, 9],
					[3, 5],
					[-2, 4],
					[-6, 6],
					[-2, 9]
				]
			},
			{
				n: "n15",
				g: [
					[0, 0, 1, 1, 2, 2],
					[0, 0, 0, 1, 2, 2],
					[1, 1, 1, 1, 3, 3],
					[3, 3, 3, 3, 3, 3],
					[3, 3, 4, 4, 4, 4]
				],
				b: [
					[3, 7],
					[5, 8],
					[-7, 7],
					[-3, 6],
					[-2, 6]
				]
			},
			{
				n: "n16",
				g: [
					[0, 0, 0, 3, 3, 3],
					[0, 0, 1, 0, 3, 3],
					[1, 1, 2, 3, 2, 2],
					[1, 1, 1, 2, 2, 2]
				],
				b: [
					[-3, 8],
					[5, 5],
					[-1, 6],
					[-3, 6]
				]
			},
			{
				n: "n17",
				g: [
					[0, 0, 0, 2, 2, 2],
					[0, 1, 0, 2, 3, 3],
					[0, 1, 0, 3, 3, 3],
					[1, 1, 1, 1, 1, 1],
					[4, 4, 4, 4, 4, 4]
				],
				b: [
					[5, 8],
					[-2, 7],
					[-3, 8],
					[-1, 7],
					[0, 3]
				]
			},
			{
				n: "n18",
				g: [
					[0, 0, 0, 2, 3, 3],
					[0, 1, 1, 2, 3, 3],
					[0, 1, 1, 2, 2, 2],
					[0, 1, 1, 1, 1, 1]
				],
				b: [
					[-1, 6],
					[2, 5],
					[-1, 7],
					[-4, 7]
				]
			},
			{
				n: "n19",
				g: [
					[0, 0, 0, 0, 2, 3],
					[0, 1, 2, 2, 2, 3],
					[0, 1, 2, 2, 2, 3],
					[1, 1, 1, 1, 2, 3],
					[3, 3, 3, 3, 3, 3]
				],
				b: [
					[2, 7],
					[0, 7],
					[-5, 7],
					[1, 7]
				]
			},
			{
				n: "n20",
				g: [
					[0, 0, 0, 1, 1, 2],
					[3, 0, 0, 4, 1, 2],
					[3, 3, 0, 4, 1, 2],
					[3, 3, 4, 4, 4, 2]
				],
				b: [
					[-2, 6],
					[-1, 6],
					[-4, 6],
					[5, 5],
					[1, 6]
				]
			},
			{
				n: "n21",
				g: [
					[0, 0, 0, 0, 3],
					[0, 1, 1, 0, 3],
					[0, 1, 2, 3, 3],
					[1, 1, 2, 2, 2]
				],
				b: [
					[0, 6],
					[3, 5],
					[-5, 4],
					[2, 6]
				]
			},
			{
				n: "n22",
				g: [
					[0, 1, 1, 1, 1, 3],
					[0, 0, 1, 1, 3, 3],
					[0, 0, 2, 2, 3, 3],
					[0, 2, 2, 2, 2, 2]
				],
				b: [
					[4, 6],
					[5, 7],
					[-5, 5],
					[-3, 6]
				]
			},
			{
				n: "n23",
				g: [
					[0, 0, 3, 3, 3],
					[0, 0, 1, 1, 3],
					[1, 0, 1, 2, 2],
					[1, 1, 1, 2, 2]
				],
				b: [
					[5, 6],
					[1, 6],
					[-6, 4],
					[-3, 6]
				]
			}],
			hard: [
			{
				n: "h1",
				g: [
					[0, 0, 3, 3, 3, 3],
					[0, 0, 3, 4, 3, 3],
					[0, 0, 4, 4, 4, 3],
					[0, 1, 1, 4, 2, 3],
					[0, 0, 1, 2, 2, 2],
					[1, 1, 1, 2, 2, 2]
				],
				b: [
					[2, 9],
					[5, 7],
					[-5, 7],
					[-9, 10],
					[6, 7]
				]
			},
			{
				n: "h2",
				g: [
					[0, 0, 0, 0, 0, 4],
					[2, 2, 2, 1, 0, 4],
					[2, 3, 3, 1, 0, 4],
					[2, 2, 3, 1, 1, 4],
					[3, 3, 3, 4, 4, 4]
				],
				b: [
					[3, 7],
					[-4, 6],
					[2, 7],
					[4, 6],
					[-4, 7]
				]
			},
			{
				n: "h3",
				g: [
					[0, 0, 0, 0, 0, 3],
					[3, 3, 3, 3, 0, 3],
					[1, 1, 4, 3, 3, 3],
					[1, 1, 4, 4, 4, 4],
					[5, 5, 5, 5, 5, 5],
					[2, 2, 2, 2, 2, 2]
				],
				b: [
					[2, 9],
					[-1, 7],
					[8, 5],
					[-1, 11],
					[-8, 8],
					[6, 8]
				]
			},
			{
				n: "h4",
				g: [
					[0, 0, 0, 0, 1, 1],
					[0, 3, 0, 0, 0, 1],
					[3, 3, 2, 2, 2, 1],
					[3, 3, 2, 4, 2, 1],
					[3, 2, 2, 4, 4, 4],
					[3, 3, 3, 3, 4, 4]
				],
				b: [
					[3, 12],
					[-6, 9],
					[-2, 9],
					[7, 7],
					[-1, 6]
				]
			},
			{
				n: "h5",
				g: [
					[0, 0, 0, 0, 0, 4],
					[0, 0, 1, 2, 2, 4],
					[1, 1, 1, 1, 2, 4],
					[3, 2, 1, 2, 2, 4],
					[3, 2, 2, 2, 2, 4],
					[3, 3, 3, 3, 4, 4]
				],
				b: [
					[1, 12],
					[4, 9],
					[-4, 9],
					[1, 5],
					[3, 8],
					[0, 0]
				]
			},
			{
				n: "h6",
				g: [
					[0, 0, 5, 4, 4, 4],
					[0, 0, 5, 4, 4, 3],
					[0, 0, 5, 5, 5, 3],
					[0, 1, 5, 5, 5, 3],
					[0, 1, 1, 2, 2, 3],
					[1, 1, 2, 2, 2, 3]
				],
				b: [
					[3, 8],
					[0, 5],
					[-3, 8],
					[-6, 7],
					[-7, 9],
					[3, 10]
				]
			},
			{
				n: "h7",
				g: [
					[0, 1, 1, 1, 1, 1],
					[0, 0, 0, 0, 4, 4],
					[2, 2, 2, 3, 3, 4],
					[2, 2, 3, 3, 3, 4],
					[2, 3, 3, 3, 4, 4]
				],
				b: [
					[-2, 10],
					[4, 8],
					[3, 5],
					[1, 7],
					[-3, 6]
				]
			},
			{
				n: "h8",
				g: [
					[0, 0, 0, 2, 3, 3],
					[1, 0, 0, 2, 3, 3],
					[1, 1, 1, 2, 3, 3],
					[1, 4, 2, 2, 2, 3],
					[4, 4, 4, 4, 4, 3]
				],
				b: [
					[3, 10],
					[2, 6],
					[-2, 7],
					[1, 7],
					[-2, 7]
				]
			},
			{
				n: "h9",
				g: [
					[0, 1, 1, 1, 1, 1],
					[0, 1, 2, 2, 1, 3],
					[0, 0, 2, 2, 3, 3],
					[4, 4, 4, 2, 2, 3],
					[4, 4, 4, 2, 2, 3]
				],
				b: [
					[6, 9],
					[-3, 10],
					[0, 7],
					[0, 6],
					[-1, 4]
				]
			}]
		};
		var n = [
		{
			n: "5x5",
			g: [
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			],
			b: [
				[0, 7]
			]
		},
		{
			n: "5x4",
			g: [
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			],
			b: [
				[0, 6]
			]
		},
		{
			n: "5x3",
			g: [
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			],
			b: [
				[0, 5]
			]
		},
		{
			n: "4x4",
			g: [
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0]
			],
			b: [
				[0, 6]
			]
		},
		{
			n: "4x3",
			g: [
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0]
			],
			b: [
				[0, 5]
			]
		},
		{
			n: "3x3",
			g: [
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0]
			],
			b: [
				[0, 5]
			]
		},
		{
			n: "6x6",
			g: [
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0]
			],
			b: [
				[0, 8]
			]
		},
		{
			n: "6x4",
			g: [
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0]
			],
			b: [
				[0, 6]
			]
		},
		{
			n: "6x5",
			g: [
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0]
			],
			b: [
				[0, 7]
			]
		}];
	},
	{}],
	"GPs/": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, o)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o)
			{
				function r()
				{
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (r.prototype = o.prototype, new r)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = {
				textColor: "#ffffff",
				tweenDuration: 300
			},
			o = function (o)
			{
				function r(t)
				{
					var e = o.call(this, t.scene, t.position.x, t.position.y) || this;
					return e.currentScore = 0, e.config = t, e.setScrollFactor(0), e.createChildren(), t.scene.add.existing(e), e
				}
				return t(r, o), r.prototype.setScore = function (t)
				{
					var e = this.currentScore;
					this.currentScore = t, this.animateScoreChange(e, this.currentScore)
				}, r.prototype.animateScoreChange = function (t, o)
				{
					var r = this,
						n = this.scoreText;
					this.config.scene.tweens.addCounter(
					{
						from: t,
						to: o,
						duration: e.tweenDuration,
						onUpdate: function (t)
						{
							var e = Math.floor(t.getValue());
							n.text = e.toString()
						}
					}), this.scene.tweens.add(
					{
						targets: this,
						x: "+=10",
						y: "+=10",
						duration: e.tweenDuration,
						ease: function (t)
						{
							return r.wiggle(t, 3, 2)
						}
					})
				}, r.prototype.wiggle = function (t, e, o)
				{
					var r = t * Math.PI * 2 * e,
						n = t * (2 * Math.PI * o + Math.PI / 2);
					return Math.sin(r) * Math.cos(n)
				}, r.prototype.createChildren = function ()
				{
					this.scoreText = this.config.scene.add.text(0, 0, "0",
					{
						fontFamily: "bloggerSans",
						fontSize: 35,
						color: e.textColor,
						align: "center"
					}), this.add([this.scoreText])
				}, r
			}(Phaser.GameObjects.Container);
		exports.ScoreDisplay = o;
	},
	{}],
	"IUNx": [function (require, module, exports)
	{
		"use strict";
		var e = this && this.__extends || function ()
			{
				var e = function (t, i)
				{
					return (e = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (e, t)
						{
							e.__proto__ = t
						} || function (e, t)
						{
							for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
						})(t, i)
				};
				return function (t, i)
				{
					function r()
					{
						this.constructor = t
					}
					e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
				}
			}(),
			t = this && this.__importDefault || function (e)
			{
				return e && e.__esModule ? e :
				{
					default: e
				}
			};
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var i = t(require("../components/BackButton")),
			r = t(require("../components/ContinueButton")),
			o = require("../components/grid_fill/Countdown"),
			n = t(require("../components/grid_fill/GridManager")),
			s = require("../components/grid_fill/Levels"),
			a = require("../components/grid_fill/ScoreDisplay"),
			l = t(require("../components/HomeButton")),
			u = t(require("../components/TryAgainButton")),
			c = require("../CONST"),
			h = require("./generic/MinigameScene"),
			d = require("gameanalytics"),
			p = {
				levels:
				{
					spawnNewDelay: 1300,
					startCountdownDelay: 1300,
					cameraTweenDuration: 1e3,
					cameraTweenDelay: 300,
					cameraTweenHold: 300,
					cameraTween: "Back.easeInOut"
				},
				difficulty:
				{
					levelChances: [
					{
						level:
						{
							from: -1,
							to: 5
						},
						easy: 1,
						normal: 0,
						hard: 0
					},
					{
						level:
						{
							from: 5,
							to: 10
						},
						easy: .5,
						normal: .5,
						hard: 0
					},
					{
						level:
						{
							from: 10,
							to: 20
						},
						easy: .2,
						normal: .6,
						hard: .2
					},
					{
						level:
						{
							from: 10,
							to: 20
						},
						easy: .2,
						normal: .6,
						hard: .2
					},
					{
						level:
						{
							from: 20,
							to: 999999
						},
						easy: .1,
						normal: .45,
						hard: .45
					}]
				},
				scoring:
				{
					progressMultiplier: 1.08,
					defaultScorePerShape: 4,
					timeMultiplier: 2
				},
				grid: [
				{
					yOffset: 1337,
					cellSize: 1337
				},
				{
					yOffset: 30,
					cellSize: 37
				},
				{
					yOffset: 30,
					cellSize: 37
				},
				{
					yOffset: 30,
					cellSize: 37
				},
				{
					yOffset: 30,
					cellSize: 33
				},
				{
					yOffset: 30,
					cellSize: 28
				},
				{
					yOffset: 30,
					cellSize: 24
				}],
				cameraPos:
				{
					y: 175
				}
			},
			m = function (t)
			{
				function h()
				{
					var e = t.call(this,
					{
						sceneName: c.CONST.SCENES.GRID_FILL,
						duration: 999999999,
						showCountdown: 0,
						showHomeButton: !1,
						timeToStart: 1e3,
						startScreenColor: 6214655,
						startText: "FILL THE\nGRID!",
						startTextYOrigin: .45,
						startTextColor: 3289650,
						endScreen: c.CONST.GRID_FILL.END,
						showSkipButton: !1,
						nextScene: c.CONST.SCENES.BIRTH,
						endButtons:
						{
							normalNoSkip:
							{
								x: -426.5,
								y: 386,
								scale: 1.3
							},
							normalWithSkip:
							{
								x: 283,
								y: 386,
								scale: 1.3
							},
							skip:
							{
								x: 570,
								y: 386,
								scale: 1.3
							}
						},
						isArcadeMinigame: !0
					}) || this;
					return e.difficulty = {
						durationMultiplier: .96,
						defaultShapeCount: 3,
						defaultDuration: 25e3,
						minimumDuration: 1e4
					}, e.isRestart = !1, e
				}
				return e(h, t), h.prototype._init = function ()
				{
					this.levelsCompleted = 0, this.currentScore = 0, this.isRestart = this.checkForRestart(), this.levelQueue = {
						easy: [],
						normal: [],
						hard: []
					}, this.prepareLevelQueue(), this.countdown = void 0, this.getRemoteConfig()
				}, h.prototype.getRemoteConfig = function ()
				{
					var e = this.remoteConf.getConfig("gG").split(";");
					this.difficulty.durationMultiplier = parseFloat(e[0]), this.difficulty.defaultShapeCount = parseInt(e[1]), this.difficulty.defaultDuration = 100 * parseInt(e[2]), this.difficulty.minimumDuration = 100 * parseInt(e[3])
				}, h.prototype.checkForRestart = function ()
				{
					var e = this.sceneName + "restart",
						t = this.storagePlugin.getItem(e, "");
					if (t)
					{
						var i = JSON.parse(t);
						return this.levelsCompleted = i.levels, this.currentScore = i.score, this.storagePlugin.removeItem(e), !0
					}
					return !1
				}, h.prototype.prepareLevelQueue = function (e, t, i)
				{
					void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === i && (i = !0), e && (this.levelQueue.easy = Phaser.Utils.Array.Shuffle(s.levels.easy.slice())), t && (this.levelQueue.normal = Phaser.Utils.Array.Shuffle(s.levels.normal.slice())), i && (this.levelQueue.hard = Phaser.Utils.Array.Shuffle(s.levels.hard.slice()))
				}, h.prototype._preload = function () {}, h.prototype._create = function ()
				{
					this.createBackground(), this.gameplayScoreDisplay = new a.ScoreDisplay(
					{
						scene: this,
						position:
						{
							x: 30,
							y: 10
						}
					}), this.gameplayScoreDisplay.setScore(this.currentScore), this.homeButton = new l.default(this, 40, this.renderer.height - 40).setDepth(30).setScrollFactor(0, 0, !0).setScale(.75)
				}, h.prototype.onGameStarted = function ()
				{
					this.createNewGrid(), this.createNewCountdown()
				}, h.prototype.createBackground = function ()
				{
					this.add.image(0, 0, c.CONST.GRID_FILL.BACKGROUND).setOrigin(0, 0).setDepth(0).setScrollFactor(0), this.add.image(this.game.renderer.width / 2, p.cameraPos.y + 5, c.CONST.GRID_FILL.HANDS).setDepth(10), this.add.image(this.game.renderer.width / 2, p.cameraPos.y, c.CONST.GRID_FILL.CAMERA).setDepth(9)
				}, h.prototype.createNewGrid = function ()
				{
					this.currentLevel = this.getNextLevel(this.levelsCompleted), this.gridManager = new n.default(this,
					{
						x: this.game.renderer.width / 2,
						y: p.cameraPos.y
					}, this.currentLevel, p.grid), this.gridManager.createGrid()
				}, h.prototype.destroyCurrentGrid = function ()
				{
					this.gridManager.destroy()
				}, h.prototype.createNewCountdown = function ()
				{
					var e = this;
					this.countdown = new o.Countdown(
					{
						scene: this,
						position:
						{
							x: this.game.renderer.width / 2,
							y: 17
						},
						duration: this.getLevelDuration(this.currentLevel),
						onComplete: function ()
						{
							e.triggerLose()
						}
					}).startCountdown()
				}, h.prototype.getLevelDuration = function (e)
				{
					e.g[0].length, e.g.length;
					var t = e.b.length / this.difficulty.defaultShapeCount,
						i = Math.pow(this.difficulty.durationMultiplier, this.levelsCompleted);
					return Math.max(this.difficulty.defaultDuration * t * i, this.difficulty.minimumDuration)
				}, h.prototype.getNextLevel = function (e)
				{
					var t = p.difficulty.levelChances.filter(function (t)
						{
							return t.level.from <= e && t.level.to > e
						})[0],
						i = Math.random();
					return (i -= t.easy) <= 0 ? this.getRandomLevel(this.levelQueue.easy) : (i -= t.normal) <= 0 ? this.getRandomLevel(this.levelQueue.normal) : (i -= t.hard) <= 0 ? this.getRandomLevel(this.levelQueue.hard) : (console.log("This shouldnt happen."), this.getRandomLevel(this.levelQueue.normal))
				}, h.prototype.getRandomLevel = function (e)
				{
					return e.length < 1 && this.prepareLevelQueue(), e.pop()
				}, h.prototype.onLevelCompleted = function ()
				{
					var e = this;
					this.sound.play(c.CONST.AUDIO.FLASH), setTimeout(function ()
					{
						e.sound.play(c.CONST.AUDIO.WIN,
						{
							detune: e.getDetune()
						})
					}, 400), this.sendLevelAnalyticsEvent(!0), this.levelsCompleted++, this.updateScore(), this.countdown.stopCountdown(), this.gridManager.handleLevelCompleted(), this.animateCameraNextLevel(), setTimeout(function ()
					{
						e.destroyCurrentGrid(), e.createNewGrid()
					}, p.levels.spawnNewDelay), setTimeout(function ()
					{
						e.countdown.destroy(), e.createNewCountdown()
					}, p.levels.spawnNewDelay + p.levels.startCountdownDelay)
				}, h.prototype.updateScore = function ()
				{
					var e = p.scoring.defaultScorePerShape * this.currentLevel.b.length,
						t = p.scoring.timeMultiplier * this.countdown.getRemainingTimeShare(),
						i = Math.pow(p.scoring.progressMultiplier, this.levelsCompleted);
					this.currentScore += Math.round(e * t * i), this.gameplayScoreDisplay.setScore(this.currentScore)
				}, h.prototype.animateCameraNextLevel = function ()
				{
					this.tweens.add(
					{
						targets: this.cameras.main,
						scrollY: "-=480",
						ease: p.levels.cameraTween,
						duration: p.levels.cameraTweenDuration,
						yoyo: !0,
						repeat: 0,
						delay: p.levels.cameraTweenDelay,
						hold: p.levels.cameraTweenHold
					})
				}, h.prototype._update = function (e, t)
				{
					this.countdown && this.countdown.onUpdate()
				}, h.prototype._timeout = function () {}, h.prototype._afterLoss = function () {}, h.prototype._afterWin = function () {}, h.prototype.triggerLose = function ()
				{
					this.homeButton.setVisible(!1), this.sound.play(c.CONST.AUDIO.LOSE,
					{
						volume: 4
					}), this.sendLevelAnalyticsEvent(!1), this.sendFinalScoreAnalyticsEvent(this.currentScore), this.saveAndDisplayScore(), this.gridManager.onGameLost(), this.loseGame(2e3)
				}, h.prototype.triggerWin = function ()
				{
					this.winGame(1e3)
				}, h.prototype.saveAndDisplayScore = function ()
				{
					var e = this.currentScore,
						t = e > this.getHighscore();
					this.endScoreDisplay.text = e.toString(), this.highscoreImage.setAlpha(t ? 1 : 0);
					var i = this.endScoreDisplay.text.length;
					this.highscoreImage.setPosition(this.highscoreImage.x + 17 * i, this.highscoreImage.y - 1.4 * i), t && this.setHighscore(e)
				}, h.prototype.getCustomLoseUIElements = function ()
				{
					var e = this;
					return this.endScoreDisplay = this.add.text(500, 250, "123456",
					{
						fontFamily: "bloggerSans",
						fontSize: 35,
						color: "#B7A26E",
						align: "center"
					}).setAngle(-4), this.highscoreImage = this.add.image(503, 291.4, c.CONST.GRID_FILL.NEW_BEST), this.isRestart || this.registry.get(c.CONST.REGISTRY.ADBLOCKENABLED) ? [new i.default(c.CONST.SCENES.MENU, 524, 334, this, c.CONST.GRID_FILL.ARCADE), new u.default(632, 329, this, c.CONST.GRID_FILL.TRY_AGAIN_2), this.endScoreDisplay, this.highscoreImage] : [new i.default(c.CONST.SCENES.MENU, 615, 365, this, c.CONST.GRID_FILL.BACK), new r.default(627, 328, this, c.CONST.GRID_FILL.CONTINUE, function ()
					{
						return e.getContinueData()
					}), new u.default(520, 333, this, c.CONST.GRID_FILL.TRY_AGAIN), this.endScoreDisplay, this.highscoreImage]
				}, h.prototype.getContinueData = function ()
				{
					return {
						levels: this.levelsCompleted,
						score: this.currentScore
					}
				}, h.prototype.sendLevelAnalyticsEvent = function (e)
				{
					var t = e ? "Completed" : "Failed",
						i = this.gridManager.getGridName(),
						r = e ? this.countdown.getElapsedTime() : this.countdown.getTotalTime();
					d.GameAnalytics.addDesignEvent(this.sceneName + ":" + i + ":" + t, Math.round(r))
				}, h
			}(h.MinigameScene);
		exports.GridFillScene = m;
	},
	{
		"../components/BackButton": "m7La",
		"../components/ContinueButton": "Bfr5",
		"../components/grid_fill/Countdown": "lLId",
		"../components/grid_fill/GridManager": "xrWB",
		"../components/grid_fill/Levels": "EEx1",
		"../components/grid_fill/ScoreDisplay": "GPs/",
		"../components/HomeButton": "fGrI",
		"../components/TryAgainButton": "uCKR",
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5",
		"gameanalytics": "ublV"
	}],
	"SttI": [function (require, module, exports)
	{
		"use strict";
		var t;
		Object.defineProperty(exports, "__esModule",
			{
				value: !0
			}),
			function (t)
			{
				t[t.Deactivated = 0] = "Deactivated", t[t.Starting = 1] = "Starting", t[t.Active = 2] = "Active", t[t.Ending = 3] = "Ending"
			}(t = exports.DistractionState || (exports.DistractionState = {}));
		var i = function ()
		{
			function i(t, i)
			{
				this.disabled = !1, this.pendingActivation = !1, this.pendingDeactivation = !1, this.scene = t, this.config = i
			}
			return i.prototype.init = function ()
			{
				this.changeState(t.Deactivated)
			}, i.prototype.setCallbacks = function (t, i)
			{
				this.activeCallback = t, this.deactivatedCallback = i
			}, i.prototype.activate = function ()
			{
				this.canActivate() ? (this.pendingActivation = !1, this.changeState(t.Starting)) : this.pendingActivation = !0
			}, i.prototype.deactivate = function ()
			{
				this.state !== t.Starting ? this.isActive() && (this.changeState(t.Ending), this.pendingDeactivation = !1) : this.pendingDeactivation = !0
			}, i.prototype.changeState = function (t)
			{
				this.state = t, this.handleStateChange(t)
			}, i.prototype.handleStateChange = function (i)
			{
				if (!this.disabled) switch (i)
				{
				case t.Deactivated:
					this.deactivatedCallback && this.deactivatedCallback(), this.onDeactivated(), this.pendingActivation && this.activate();
					break;
				case t.Starting:
					this.onStarting();
					break;
				case t.Active:
					this.activeCallback && this.activeCallback(), this.onActivated(), this.pendingDeactivation && this.deactivate();
					break;
				case t.Ending:
					this.onEnding();
					break;
				default:
					console.log("Unrecognized state: " + i)
				}
			}, i.prototype.isActive = function ()
			{
				return this.state === t.Active
			}, i.prototype.canActivate = function ()
			{
				return this.state === t.Deactivated
			}, i.prototype.isPendingActivation = function ()
			{
				return this.pendingActivation
			}, i.prototype.forceDisable = function ()
			{
				this.disabled = !0, this.onEnding()
			}, i
		}();
		exports.default = i;
	},
	{}],
	"p/cI": [function (require, module, exports)
	{
		"use strict";
		var e = this && this.__extends || function ()
			{
				var e = function (t, n)
				{
					return (e = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (e, t)
						{
							e.__proto__ = t
						} || function (e, t)
						{
							for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
						})(t, n)
				};
				return function (t, n)
				{
					function i()
					{
						this.constructor = t
					}
					e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
				}
			}(),
			t = this && this.__importStar || function (e)
			{
				if (e && e.__esModule) return e;
				var t = {};
				if (null != e)
					for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
				return t.default = e, t
			};
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var n = require("../../../CONST"),
			i = t(require("../Distraction")),
			o = {
				vibration:
				{
					duration: 1e3,
					timeBetweenPulses: 500
				},
				startTime: 500,
				endTime: 500
			},
			a = function (t)
			{
				function a(e, i)
				{
					var o = t.call(this, e, i) || this;
					o.phoneContainer = e.add.container(i.x, i.y).setDepth(i.depth), o.phoneImg = e.add.image(0, 0, n.CONST.DISTRACTION.PHONE), o.phoneScreenImg = e.add.image(3, -6, n.CONST.DISTRACTION.PHONE_MESSAGE_3).setAlpha(0), o.phoneBuzz_1 = e.add.image(-85, 15, n.CONST.DISTRACTION.PHONE_BUZZ_1).setAlpha(0), o.phoneBuzz_2 = e.add.image(35, -47, n.CONST.DISTRACTION.PHONE_BUZZ_2).setAlpha(0);
					var a = e.add.image(0, 16, n.CONST.DISTRACTION.PHONE_SHADOW);
					return o.phoneImg.setInteractive(
					{
						useHandCursor: !0,
						pixelPerfect: !0,
						alphaTolerance: 1
					}), o.phoneImg.on("pointerup", function ()
					{
						o.handleClick()
					}), o.phoneContainer.add([a, o.phoneImg, o.phoneScreenImg, o.phoneBuzz_1, o.phoneBuzz_2]), o.init(), o
				}
				return e(a, t), a.prototype.handleClick = function ()
				{
					this.deactivate()
				}, a.prototype.onDeactivated = function ()
				{
					this.phoneImg.clearTint()
				}, a.prototype.onStarting = function ()
				{
					var e = this;
					this.startVibrating(), setTimeout(function ()
					{
						e.changeState(i.DistractionState.Active)
					}, o.startTime)
				}, a.prototype.onActivated = function () {}, a.prototype.onEnding = function ()
				{
					var e = this;
					this.stopVibrating(), setTimeout(function ()
					{
						e.changeState(i.DistractionState.Deactivated)
					}, o.endTime)
				}, a.prototype.onGameLost = function ()
				{
					this.phoneImg.disableInteractive()
				}, a.prototype.startVibrating = function ()
				{
					var e = this,
						t = this.phoneScreenImg;
					t.setAlpha(1);
					var i = this.scene;
					this.screenTween = this.scene.tweens.addCounter(
					{
						from: 0,
						to: 3,
						duration: 3 * o.vibration.duration,
						onUpdate: function (e)
						{
							switch (Math.floor(e.getValue()))
							{
							case 0:
								if (t.texture.key === n.CONST.DISTRACTION.PHONE_MESSAGE_1) break;
								t.setTexture(n.CONST.DISTRACTION.PHONE_MESSAGE_1), i.sound.play(n.CONST.AUDIO.POP,
								{
									detune: -200,
									volume: 5
								});
								break;
							case 1:
								if (t.texture.key === n.CONST.DISTRACTION.PHONE_MESSAGE_2) break;
								t.setTexture(n.CONST.DISTRACTION.PHONE_MESSAGE_2), i.sound.play(n.CONST.AUDIO.POP,
								{
									detune: 0,
									volume: 5
								});
								break;
							case 2:
								if (t.texture.key === n.CONST.DISTRACTION.PHONE_MESSAGE_3) break;
								t.setTexture(n.CONST.DISTRACTION.PHONE_MESSAGE_3), i.sound.play(n.CONST.AUDIO.POP,
								{
									detune: 200,
									volume: 5
								})
							}
						}
					}), this.vibratingTween = this.scene.tweens.add(
					{
						targets: this.phoneContainer,
						x: "+=2",
						y: "+=2",
						angle: "+=1",
						duration: o.vibration.duration,
						hold: o.vibration.timeBetweenPulses,
						ease: function (t)
						{
							return e.wiggle(t, 5, 5)
						},
						onStart: function ()
						{
							e.scene.sound.play(n.CONST.AUDIO.VIBRATE,
							{
								volume: 14
							})
						},
						onRepeat: function ()
						{
							e.scene.sound.play(n.CONST.AUDIO.VIBRATE,
							{
								volume: 14
							})
						},
						repeat: -1
					}), this.vibratingTimeline = this.scene.tweens.timeline(
					{
						targets: [this.phoneBuzz_1, this.phoneBuzz_2],
						loop: -1,
						tweens: [
						{
							alpha: 1,
							duration: 100,
							hold: o.vibration.duration - 500,
							ease: "Quad.easeInOut"
						},
						{
							alpha: 0,
							duration: 400,
							hold: o.vibration.timeBetweenPulses,
							ease: "Quad.easeInOut"
						}]
					})
				}, a.prototype.stopVibrating = function ()
				{
					this.vibratingTimeline && this.vibratingTimeline.stop(), this.vibratingTween && this.vibratingTween.stop(), this.screenTween && this.screenTween.stop(), this.phoneBuzz_1.setAlpha(0), this.phoneBuzz_2.setAlpha(0), this.phoneScreenImg.setAlpha(0), this.phoneScreenImg.setTexture(n.CONST.DISTRACTION.PHONE_MESSAGE_3), this.phoneContainer.setAngle(0).setPosition(this.config.x, this.config.y)
				}, a.prototype.wiggle = function (e, t, n)
				{
					var i = e * Math.PI * 2 * t,
						o = e * (2 * Math.PI * n + Math.PI / 2);
					return Math.sin(i) * Math.cos(o)
				}, a
			}(i.default);
		exports.default = a;
	},
	{
		"../../../CONST": "HmIA",
		"../Distraction": "SttI"
	}],
	"4njW": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var t = {
				difficulty:
				{
					spawnTime:
					{
						start:
						{
							min: 2e3,
							max: 3e3
						},
						end:
						{
							min: 500,
							max: 1500
						}
					}
				},
				score:
				{
					max: 100
				}
			},
			i = function ()
			{
				function t(i, r, a)
				{
					var s = this;
					this.difficultyConfig = {
						timeToReachEnd: 3e4,
						defaultScoreSpeed: -25,
						activeDistractionSpeedChange: 15,
						startSpawnTimeMultiplier: 1,
						endSpawnTimeMultipler: 1
					}, this.distractions = [], this.lastActiveCount = 0, this.scene = a, this.getRemoteConfig(), this.distractions = i, this.spawner = new o(this), this.score = new e, this.survivalTimer = new n(r), this.distractions.forEach(function (t)
					{
						t.setCallbacks(s.onDistractionActivated, s.onDistractionDeactivated)
					}), t.activeCount = 0
				}
				return t.prototype.getRemoteConfig = function ()
				{
					var t = this.scene.remoteConf.getConfig("gD").split(";");
					this.difficultyConfig.timeToReachEnd = 1e3 * parseInt(t[0]), this.difficultyConfig.defaultScoreSpeed = -1 * parseInt(t[1]), this.difficultyConfig.activeDistractionSpeedChange = parseInt(t[2]), this.difficultyConfig.startSpawnTimeMultiplier = parseInt(t[3]) / 100, this.difficultyConfig.endSpawnTimeMultipler = parseInt(t[4]) / 100
				}, t.prototype._update = function (t, i)
				{
					this.spawner._update(t, i), this.getActiveCount() != this.lastActiveCount && (this.lastActiveCount = this.getActiveCount(), this.score.updateScoreChangeSpeed(this.getActiveCount(), this)), this.score.updateScore(i), this.survivalTimer.updateTime(i)
				}, t.prototype.onDistractionActivated = function ()
				{
					t.activeCount++
				}, t.prototype.onDistractionDeactivated = function ()
				{
					t.activeCount--
				}, t.prototype.startSpawning = function ()
				{
					this.survivalTimer.startTiming(), this.spawner.startSpawning()
				}, t.prototype.onGameLost = function ()
				{
					this.distractions.forEach(function (t)
					{
						return t.onGameLost()
					}), this.survivalTimer.stopTiming()
				}, t.prototype.getActiveCount = function ()
				{
					return t.activeCount
				}, t.prototype.getDistractions = function ()
				{
					return this.distractions
				}, t.prototype.getScore = function ()
				{
					return this.score.getCurrentScore()
				}, t.prototype.getSurvivalTimeInSeconds = function ()
				{
					return Math.round(this.getSurvivalTime() / 1e3)
				}, t.prototype.getSurvivalTime = function ()
				{
					return this.survivalTimer.getTime()
				}, t.activeCount = 0, t
			}();
		exports.default = i;
		var e = function ()
			{
				function i()
				{
					this.currentScore = 0, this.scoreChangeSpeed = 0
				}
				return i.prototype.updateScoreChangeSpeed = function (t, i)
				{
					this.scoreChangeSpeed = i.difficultyConfig.defaultScoreSpeed + t * i.difficultyConfig.activeDistractionSpeedChange
				}, i.prototype.updateScore = function (i)
				{
					this.currentScore += this.scoreChangeSpeed * i / 1e3, this.currentScore = Math.min(Math.max(this.currentScore, 0), t.score.max)
				}, i.prototype.getCurrentScore = function ()
				{
					return this.currentScore
				}, i
			}(),
			n = function ()
			{
				function t(t)
				{
					this.time = 0, this.isAlive = !1, this.time = t
				}
				return t.prototype.updateTime = function (t)
				{
					this.isAlive && (this.time += t)
				}, t.prototype.startTiming = function ()
				{
					this.isAlive = !0
				}, t.prototype.stopTiming = function ()
				{
					this.isAlive = !1
				}, t.prototype.getTime = function ()
				{
					return this.time
				}, t
			}(),
			o = function ()
			{
				function i(t)
				{
					this.nextSpawnTimer = 0, this.isSpawning = !1, this.dManager = t
				}
				return i.prototype.startSpawning = function ()
				{
					this.isSpawning = !0, this.calculateNextSpawnTime()
				}, i.prototype._update = function (t, i)
				{
					this.isSpawning && (this.nextSpawnTimer -= i, this.nextSpawnTimer < 0 && (this.spawnRandomDistraction(), this.calculateNextSpawnTime()))
				}, i.prototype.spawnRandomDistraction = function ()
				{
					var t = [];
					(this.dManager.getDistractions().forEach(function (i)
					{
						i.isPendingActivation() || t.push(i)
					}), 0 != t.length) && Phaser.Utils.Array.GetRandom(t).activate()
				}, i.prototype.calculateNextSpawnTime = function ()
				{
					var i = t.difficulty.spawnTime,
						e = Math.min(this.dManager.getSurvivalTime() / this.dManager.difficultyConfig.timeToReachEnd, 1),
						n = Phaser.Math.Linear(i.start.min * this.dManager.difficultyConfig.startSpawnTimeMultiplier, i.end.min * this.dManager.difficultyConfig.endSpawnTimeMultipler, e),
						o = Phaser.Math.Linear(i.start.max * this.dManager.difficultyConfig.startSpawnTimeMultiplier, i.end.max * this.dManager.difficultyConfig.endSpawnTimeMultipler, e);
					this.nextSpawnTimer = this.getRandomInt(n, o)
				}, i.prototype.getRandomInt = function (t, i)
				{
					return t = Math.ceil(t), i = Math.floor(i), Math.floor(Math.random() * (i - t + 1)) + t
				}, i
			}();
	},
	{}],
	"qWNQ": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
			{
				var t = function (e, n)
				{
					return (t = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
						})(e, n)
				};
				return function (e, n)
				{
					function a()
					{
						this.constructor = e
					}
					t(e, n), e.prototype = null === n ? Object.create(n) : (a.prototype = n.prototype, new a)
				}
			}(),
			e = this && this.__importStar || function (t)
			{
				if (t && t.__esModule) return t;
				var e = {};
				if (null != t)
					for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
				return e.default = t, e
			};
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var n = require("../../../CONST"),
			a = e(require("../Distraction")),
			i = {
				animation:
				{
					movement:
					{
						duration: 750,
						ease:
						{
							in: "Quad.easeOut",
							out: "Quad.easeIn"
						},
						from:
						{
							x: -225,
							y: 30
						}
					},
					images: [
					{
						key: n.CONST.DISTRACTION.BALL_1,
						offset:
						{
							x: 20,
							y: 0
						}
					},
					{
						key: n.CONST.DISTRACTION.BALL_2,
						offset:
						{
							x: 0,
							y: 0
						}
					},
					{
						key: n.CONST.DISTRACTION.BALL_3,
						offset:
						{
							x: 0,
							y: 1
						}
					},
					{
						key: n.CONST.DISTRACTION.BALL_4,
						offset:
						{
							x: 0,
							y: -5
						}
					},
					{
						key: n.CONST.DISTRACTION.BALL_5,
						offset:
						{
							x: 0,
							y: 2
						}
					},
					{
						key: n.CONST.DISTRACTION.BALL_6,
						offset:
						{
							x: 0,
							y: 1
						}
					}]
				}
			},
			o = function (e)
			{
				function o(t, a)
				{
					var o = e.call(this, t, a) || this;
					return o.container = t.add.container(a.x + i.animation.movement.from.x, a.y + i.animation.movement.from.y).setDepth(a.depth), o.ballImg = t.add.image(0, 0, n.CONST.DISTRACTION.BALL_1), o.ballImg.setInteractive(
					{
						useHandCursor: !0,
						pixelPerfect: !0,
						alphaTolerance: 1
					}), o.ballImg.on("pointerup", function ()
					{
						o.handleClick()
					}), o.setBallImage(0), o.container.add([o.ballImg]), o.init(), o
				}
				return t(o, e), o.prototype.animateMovement = function (t)
				{
					this.moveTween && this.moveTween.stop(), this.container.setPosition(this.config.x + (t ? i.animation.movement.from.x : 0), this.config.y + (t ? i.animation.movement.from.y : 0)), this.moveTween = this.scene.tweens.add(
					{
						targets: this.container,
						x: this.config.x + (t ? 0 : i.animation.movement.from.x),
						y: this.config.y + (t ? 0 : i.animation.movement.from.y),
						ease: t ? i.animation.movement.ease.in : i.animation.movement.ease.out,
						duration: i.animation.movement.duration,
						repeat: 0
					})
				}, o.prototype.animateBallImages = function (t)
				{
					this.imgTween && this.imgTween.stop(), this.setBallImage(t ? 0 : i.animation.images.length - 1), this.imgTween = this.scene.tweens.addCounter(
					{
						targets: this,
						from: t ? 0 : i.animation.images.length + .3,
						to: t ? i.animation.images.length + .3 : 0,
						ease: t ? i.animation.movement.ease.in : i.animation.movement.ease.out,
						repeat: 0,
						delay: 0,
						duration: i.animation.movement.duration,
						onUpdate: function (t, e, n)
						{
							var a = Math.max(0, Math.floor(t.getValue() - 1));
							this.setBallImage(a)
						},
						onUpdateScope: this
					})
				}, o.prototype.setBallImage = function (t)
				{
					t = Math.round(t) % i.animation.images.length;
					var e = i.animation.images[t];
					this.ballImg.setTexture(e.key), this.ballImg.setPosition(e.offset.x, e.offset.y)
				}, o.prototype.animateActive = function (t)
				{
					var e = this;
					t ? this.activeTween = this.scene.tweens.add(
					{
						targets: this.ballImg,
						scaleX: 1.1,
						scaleY: 1.1,
						ease: "Quad.easeOut",
						duration: 400,
						repeat: -1,
						yoyo: !0,
						onStart: function ()
						{
							e.scene.sound.play(n.CONST.AUDIO.BOUNCE,
							{
								detune: e.scene.getDetune(),
								volume: 2
							})
						},
						onRepeat: function ()
						{
							e.scene.sound.play(n.CONST.AUDIO.BOUNCE,
							{
								detune: e.scene.getDetune(),
								volume: 2
							})
						}
					}) : (this.ballImg.setScale(1), this.activeTween && this.activeTween.stop())
				}, o.prototype.handleClick = function ()
				{
					this.deactivate()
				}, o.prototype.onDeactivated = function ()
				{
					this.ballImg.clearTint()
				}, o.prototype.onStarting = function ()
				{
					var t = this;
					this.animateBallImages(!0), this.animateMovement(!0), setTimeout(function ()
					{
						t.changeState(a.DistractionState.Active)
					}, i.animation.movement.duration)
				}, o.prototype.onActivated = function ()
				{
					this.animateActive(!0)
				}, o.prototype.onEnding = function ()
				{
					var t = this;
					this.animateBallImages(!1), this.animateMovement(!1), this.animateActive(!1), setTimeout(function ()
					{
						t.changeState(a.DistractionState.Deactivated)
					}, i.animation.movement.duration)
				}, o.prototype.onGameLost = function ()
				{
					this.ballImg.disableInteractive()
				}, o
			}(a.default);
		exports.default = o;
	},
	{
		"../../../CONST": "HmIA",
		"../Distraction": "SttI"
	}],
	"WsIZ": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
			{
				var t = function (e, n)
				{
					return (t = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
						})(e, n)
				};
				return function (e, n)
				{
					function a()
					{
						this.constructor = e
					}
					t(e, n), e.prototype = null === n ? Object.create(n) : (a.prototype = n.prototype, new a)
				}
			}(),
			e = this && this.__importStar || function (t)
			{
				if (t && t.__esModule) return t;
				var e = {};
				if (null != t)
					for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
				return e.default = t, e
			};
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var n = require("../../../CONST"),
			a = e(require("../Distraction")),
			i = {
				animation:
				{
					movement:
					{
						duration: 800,
						ease:
						{
							in: "Back.easeOut",
							out: "Back.easeIn"
						},
						from:
						{
							x: 0,
							y: 150
						}
					}
				},
				hand:
				{
					duration: 500,
					x: 5,
					y: -50,
					angle:
					{
						from: 30,
						to: 15
					}
				}
			},
			o = function (e)
			{
				function o(t, a)
				{
					var o = e.call(this, t, a) || this;
					return o.container = t.add.container(a.x + i.animation.movement.from.x, a.y + i.animation.movement.from.y).setDepth(a.depth), o.characterImg = t.add.image(-29.6, -51, n.CONST.DISTRACTION.WINDOW_CHARACTER), o.handImg = t.add.image(i.hand.x, i.hand.y, n.CONST.DISTRACTION.WINDOW_HAND).setAngle(i.hand.angle.from).setOrigin(.12, .87), o.characterImg.on("pointerup", function ()
					{
						o.handleClick()
					}), o.container.add([o.handImg, o.characterImg]), o.init(), o.animateHand(), o
				}
				return t(o, e), o.prototype.animateMovement = function (t)
				{
					this.scene.sound.play(n.CONST.AUDIO.HELLO,
					{
						detune: this.scene.getDetune(),
						volume: 2
					}), this.moveTween && this.moveTween.stop(), this.container.setPosition(this.config.x + (t ? i.animation.movement.from.x : 0), this.config.y + (t ? i.animation.movement.from.y : 0)), this.container.setScale(1, t ? .7 : 1), this.moveTween = this.scene.tweens.add(
					{
						targets: this.container,
						x: this.config.x + (t ? 0 : i.animation.movement.from.x),
						y: this.config.y + (t ? 0 : i.animation.movement.from.y),
						scaleY: t ? 1 : .7,
						ease: t ? i.animation.movement.ease.in : i.animation.movement.ease.out,
						duration: i.animation.movement.duration,
						repeat: 0
					})
				}, o.prototype.animateHand = function ()
				{
					this.scene.tweens.add(
					{
						targets: this.handImg,
						angle: i.hand.angle.to,
						ease: "Quad.easeInOut",
						duration: i.hand.duration,
						repeat: -1,
						yoyo: !0
					})
				}, o.prototype.animateActive = function (t)
				{
					t ? this.activeTween = this.scene.tweens.add(
					{
						targets: this.container,
						scaleY: 1.05,
						ease: "Quad.easeOut",
						duration: 250,
						repeat: -1,
						yoyo: !0
					}) : (this.container.setScale(1), this.activeTween && this.activeTween.stop())
				}, o.prototype.handleClick = function ()
				{
					this.deactivate()
				}, o.prototype.onDeactivated = function () {}, o.prototype.onStarting = function ()
				{
					var t = this;
					this.characterImg.setInteractive(
					{
						useHandCursor: !0,
						pixelPerfect: !0,
						alphaTolerance: 1
					}), this.animateMovement(!0), setTimeout(function ()
					{
						t.changeState(a.DistractionState.Active)
					}, i.animation.movement.duration)
				}, o.prototype.onActivated = function ()
				{
					this.animateActive(!0)
				}, o.prototype.onEnding = function ()
				{
					var t = this;
					this.characterImg.disableInteractive(), this.animateActive(!1), this.animateMovement(!1), setTimeout(function ()
					{
						t.changeState(a.DistractionState.Deactivated)
					}, i.animation.movement.duration)
				}, o.prototype.onGameLost = function ()
				{
					this.characterImg.disableInteractive()
				}, o
			}(a.default);
		exports.default = o;
	},
	{
		"../../../CONST": "HmIA",
		"../Distraction": "SttI"
	}],
	"GKzk": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
			{
				var t = function (e, a)
				{
					return (t = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a])
						})(e, a)
				};
				return function (e, a)
				{
					function i()
					{
						this.constructor = e
					}
					t(e, a), e.prototype = null === a ? Object.create(a) : (i.prototype = a.prototype, new i)
				}
			}(),
			e = this && this.__importStar || function (t)
			{
				if (t && t.__esModule) return t;
				var e = {};
				if (null != t)
					for (var a in t) Object.hasOwnProperty.call(t, a) && (e[a] = t[a]);
				return e.default = t, e
			};
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var a = require("../../../CONST"),
			i = e(require("../Distraction")),
			o = {
				ballBounds:
				{
					x:
					{
						from: -62,
						to: 77
					},
					y:
					{
						from: -47,
						to: 45
					}
				},
				ballSpeed:
				{
					x:
					{
						from: 50,
						to: 70
					},
					y:
					{
						from: -50,
						to: 50
					},
					yChangeMax: 100
				},
				paddleTrigger:
				{
					left: -10,
					right: 25
				}
			},
			n = function (e)
			{
				function n(t, i)
				{
					var o = e.call(this, t, i) || this;
					return o.ballSpeed = {
						x: 90,
						y: 30
					}, o.container = t.add.container(i.x, i.y).setDepth(i.depth), o.tvBackground = t.add.image(0, 0, a.CONST.DISTRACTION.TV_SCREEN_DARK), o.tvBackground.setInteractive(
					{
						useHandCursor: !0,
						pixelPerfect: !0,
						alphaTolerance: 1
					}), o.tvBackground.on("pointerup", function ()
					{
						o.handleClick()
					}), o.pongContainer = t.add.container(0, 0), o.scoreLeft = t.add.image(-5, -37, a.CONST.DISTRACTION.TV_TEXT_0), o.scoreRight = t.add.image(20, -37, a.CONST.DISTRACTION.TV_TEXT_0), o.paddleLeft = t.add.image(-65, -3, a.CONST.DISTRACTION.TV_PADDLE), o.paddleRight = t.add.image(80, -3, a.CONST.DISTRACTION.TV_PADDLE), o.ball = t.add.image(0, 0, a.CONST.DISTRACTION.TV_BALL).setScale(1.5), o.pongContainer.add([o.scoreLeft, o.scoreRight, o.paddleLeft, o.paddleRight, o.ball]), o.pongContainer.setVisible(!1), o.container.add([o.tvBackground, o.pongContainer]), o.init(), o.scene.events.on("update", o.update, o), o
				}
				return t(n, e), n.prototype.update = function (t, e)
				{
					this.updateBallPosition(e), this.updatePaddlePosition(e)
				}, n.prototype.updateBallPosition = function (t)
				{
					if (this.ball.setPosition(this.ball.x + this.ballSpeed.x * t / 1e3, this.ball.y + this.ballSpeed.y * t / 1e3), this.ball.x > o.ballBounds.x.to || this.ball.x < o.ballBounds.x.from)
					{
						this.canActivate() || this.scene.sound.play(a.CONST.AUDIO.PING_2,
						{
							volume: 2
						}), this.ballSpeed.x = -1 * this.ballSpeed.x, this.ball.x > o.ballBounds.x.to ? this.ball.x = o.ballBounds.x.to : this.ball.x = o.ballBounds.x.from;
						var e = Phaser.Math.Between(-o.ballSpeed.yChangeMax, o.ballSpeed.yChangeMax);
						this.ballSpeed.y = Phaser.Math.Clamp(this.ballSpeed.y + e, o.ballSpeed.y.from, o.ballSpeed.y.to)
					}(this.ball.y > o.ballBounds.y.to || this.ball.y < o.ballBounds.y.from) && (this.canActivate() || this.scene.sound.play(a.CONST.AUDIO.PING_1,
					{
						volume: 2
					}), this.ballSpeed.y = -1 * this.ballSpeed.y)
				}, n.prototype.updatePaddlePosition = function (t)
				{
					this.ball.x < o.paddleTrigger.left && (this.paddleLeft.y = Phaser.Math.Interpolation.SmoothStep((this.ball.x - this.paddleLeft.x) / (o.paddleTrigger.left - this.paddleLeft.x), this.ball.y, this.paddleLeft.y)), this.ball.x > o.paddleTrigger.right && (this.paddleRight.y = Phaser.Math.Interpolation.SmoothStep((this.ball.x - this.paddleRight.x) / (o.paddleTrigger.right - this.paddleRight.x), this.ball.y, this.paddleRight.y))
				}, n.prototype.handleClick = function ()
				{
					this.deactivate()
				}, n.prototype.onDeactivated = function ()
				{
					this.tvBackground.clearTint()
				}, n.prototype.onStarting = function ()
				{
					var t = this;
					this.scene.sound.play(a.CONST.AUDIO.TV_ON,
					{
						volume: 2
					}), this.pongContainer.setVisible(!0), this.tvBackground.setTexture(a.CONST.DISTRACTION.TV_SCREEN_LIGHT), this.scoreLeft.setTexture(this.getRandomScoreText()), this.scoreRight.setTexture(this.getRandomScoreText()), setTimeout(function ()
					{
						t.changeState(i.DistractionState.Active)
					}, 500)
				}, n.prototype.getRandomScoreText = function ()
				{
					return Phaser.Utils.Array.GetRandom([a.CONST.DISTRACTION.TV_TEXT_0, a.CONST.DISTRACTION.TV_TEXT_1, a.CONST.DISTRACTION.TV_TEXT_2, a.CONST.DISTRACTION.TV_TEXT_3, a.CONST.DISTRACTION.TV_TEXT_4])
				}, n.prototype.onActivated = function () {}, n.prototype.onEnding = function ()
				{
					var t = this;
					this.scene.sound.play(a.CONST.AUDIO.TV_ON,
					{
						volume: 2
					}), this.pongContainer.setVisible(!1), this.tvBackground.setTexture(a.CONST.DISTRACTION.TV_SCREEN_DARK), setTimeout(function ()
					{
						t.changeState(i.DistractionState.Deactivated)
					}, 500)
				}, n.prototype.onGameLost = function ()
				{
					this.tvBackground.disableInteractive()
				}, n
			}(i.default);
		exports.default = n;
	},
	{
		"../../../CONST": "HmIA",
		"../Distraction": "SttI"
	}],
	"d5Jt": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var t = require("../../CONST"),
			i = function ()
			{
				function i(t)
				{
					this.countdownStartX = 0, this.countdownMoveX = 0, this.config = t, this.createImages(), this.displayScore(0)
				}
				return i.prototype.createImages = function ()
				{
					this.config.scene.add.image(this.config.position.x, this.config.position.y, t.CONST.DISTRACTION.COUNTDOWN_1).setDepth(this.config.depth), this.config.scene.add.image(this.config.position.x, this.config.position.y, t.CONST.DISTRACTION.COUNTDOWN_2).setDepth(this.config.depth + 1), this.countdownImage = this.config.scene.add.image(this.config.position.x, this.config.position.y, t.CONST.DISTRACTION.COUNTDOWN_3).setDepth(this.config.depth + 2), this.maskShape = this.config.scene.add.graphics().fillStyle(16777215, 0).beginPath().fillRect(this.countdownImage.getTopLeft().x, 0, this.countdownImage.displayWidth, 500).setDepth(this.config.depth + 3), this.countdownStartX = this.maskShape.x, this.countdownMoveX = this.countdownImage.displayWidth;
					var i = this.maskShape.createGeometryMask();
					this.countdownImage.setMask(i)
				}, i.prototype.displayScore = function (t)
				{
					var i = Phaser.Math.Clamp(t / this.config.maxValue, 0, 1);
					this.maskShape.x = this.countdownStartX - (1 - i) * this.countdownMoveX
				}, i
			}();
		exports.Countdown = i;
	},
	{
		"../../CONST": "HmIA"
	}],
	"vbrQ": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
			{
				var t = function (e, i)
				{
					return (t = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function (e, i)
				{
					function r()
					{
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
				}
			}(),
			e = this && this.__importDefault || function (t)
			{
				return t && t.__esModule ? t :
				{
					default: t
				}
			};
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var i = require("../CONST"),
			r = require("./generic/MinigameScene"),
			s = e(require("../components/BackButton")),
			n = e(require("../components/distraction/distractions/PhoneDistraction")),
			a = e(require("../components/distraction/DistractionManager")),
			o = e(require("../components/distraction/distractions/BallDistraction")),
			c = e(require("../components/distraction/distractions/WindowDistraction")),
			h = e(require("../components/distraction/distractions/TvDistraction")),
			u = e(require("../components/TryAgainButton")),
			p = e(require("../components/ContinueButton")),
			d = require("../components/distraction/Countdown"),
			l = {
				loseScore: 100,
				distractions:
				{
					phone:
					{
						x: 730,
						y: 430,
						depth: 5
					},
					ball:
					{
						x: 190,
						y: 395,
						depth: 5
					},
					window:
					{
						x: 142,
						y: 315,
						depth: 2
					},
					tv:
					{
						x: 748,
						y: 164,
						depth: 5
					}
				}
			},
			T = function (e)
			{
				function r()
				{
					var t = e.call(this,
					{
						sceneName: i.CONST.SCENES.DISTRACTION,
						duration: 999999999,
						showCountdown: 0,
						showHomeButton: !1,
						timeToStart: 1e3,
						startScreenColor: 16765952,
						startText: "KEEP YOUR\nFOCUS!",
						startTextYOrigin: .45,
						startTextColor: 3289650,
						endScreen: i.CONST.DISTRACTION.END,
						showSkipButton: !1,
						nextScene: i.CONST.SCENES.BIRTH,
						endButtons:
						{
							normalNoSkip:
							{
								x: -426.5,
								y: 386,
								scale: 1.3
							},
							normalWithSkip:
							{
								x: 283,
								y: 386,
								scale: 1.3
							},
							skip:
							{
								x: 570,
								y: 386,
								scale: 1.3
							}
						},
						isArcadeMinigame: !0
					}) || this;
					return t.isRestart = !1, t.startSurvivalTime = 0, t.playerLost = !1, t
				}
				return t(r, e), r.prototype._init = function ()
				{
					this.distractions = [], this.distractionManager = null, this.playerLost = !1, this.startSurvivalTime = 0, this.isRestart = this.checkForRestart()
				}, r.prototype.checkForRestart = function ()
				{
					var t = this.sceneName + "restart",
						e = this.storagePlugin.getItem(t, "");
					if (e)
					{
						var i = JSON.parse(e);
						return this.startSurvivalTime = i.time, this.storagePlugin.removeItem(t), !0
					}
					return !1
				}, r.prototype._preload = function () {}, r.prototype._create = function ()
				{
					this.createBackground(), this.createCharacter(), this.createDistractions(), this.createDistractionDisplay()
				}, r.prototype.createBackground = function ()
				{
					this.add.image(0, 0, i.CONST.DISTRACTION.BACKGROUND).setOrigin(0, 0).setDepth(3), this.add.image(140.8, 176.3, i.CONST.DISTRACTION.WINDOW_FRONT).setDepth(4), this.add.image(137.8, 189, i.CONST.DISTRACTION.WINDOW_BACK).setDepth(1), this.add.image(427, 76, i.CONST.DISTRACTION.CLOUD).setDepth(45)
				}, r.prototype.createCharacter = function ()
				{
					new g(this)
				}, r.prototype.createDistractions = function ()
				{
					var t, e = new n.default(this, l.distractions.phone),
						i = new o.default(this, l.distractions.ball),
						r = new c.default(this, l.distractions.window),
						s = new h.default(this, l.distractions.tv);
					(t = this.distractions).push.apply(t, [e, i, r, s]), this.distractionManager = new a.default(this.distractions, this.startSurvivalTime, this)
				}, r.prototype.createDistractionDisplay = function ()
				{
					this.countdown = new d.Countdown(
					{
						scene: this,
						position:
						{
							x: 407,
							y: 41
						},
						maxValue: 100,
						depth: 50
					})
				}, r.prototype._update = function (t, e)
				{
					this.distractionManager._update(t, e), this.checkScore()
				}, r.prototype.checkScore = function ()
				{
					var t = this.distractionManager.getScore();
					this.updateDistractionDisplay(t), t >= l.loseScore && this.triggerLose()
				}, r.prototype.updateDistractionDisplay = function (t)
				{
					this.countdown.displayScore(t)
				}, r.prototype.onGameStarted = function ()
				{
					this.distractionManager.startSpawning()
				}, r.prototype._timeout = function () {}, r.prototype._afterLoss = function () {}, r.prototype._afterWin = function () {}, r.prototype.triggerLose = function ()
				{
					var t = this;
					this.playerLost || (this.playerLost = !0, this.sound.play(i.CONST.AUDIO.LOSE,
					{
						volume: 4
					}), this.distractionManager.onGameLost(), this.saveAndDisplayScore(), setTimeout(function ()
					{
						t.distractions.forEach(function (t)
						{
							return t.forceDisable()
						})
					}, 2e3), this.loseGame(2e3))
				}, r.prototype.triggerWin = function ()
				{
					this.winGame(1e3)
				}, r.prototype.saveAndDisplayScore = function ()
				{
					var t = this.calculateScore(),
						e = this.getHighscore(),
						i = t > e;
					this.displayScore(t, i, e), i && this.setHighscore(t), this.sendFinalScoreAnalyticsEvent(t)
				}, r.prototype.calculateScore = function ()
				{
					return this.distractionManager.getSurvivalTimeInSeconds()
				}, r.prototype.displayScore = function (t, e, i)
				{
					this.survivalTimeText.text = t.toString();
					var r = this.survivalTimeText.text.length;
					1 == r && (this.survivalTimeText.x = 504, this.survivalTimeText.y = 152, this.highscoreImage.x = 501, this.highscoreImage.y = 152), 2 == r && (this.survivalTimeText.x = 491, this.survivalTimeText.y = 150, this.highscoreImage.x = 489, this.highscoreImage.y = 151), 3 == r && (this.survivalTimeText.x = 476.3, this.survivalTimeText.y = 151.6, this.highscoreImage.x = 476.8, this.highscoreImage.y = 152.6), r >= 4 && (this.survivalTimeText.x = 462.5, this.survivalTimeText.y = 150.8, this.highscoreImage.x = 460.5, this.highscoreImage.y = 152.6), this.highscoreImage.setAlpha(e ? 1 : 0)
				}, r.prototype.getCustomLoseUIElements = function ()
				{
					var t = this;
					return this.highscoreImage = this.add.image(484, 152, i.CONST.DISTRACTION.NEW_BEST).setDepth(3), this.survivalTimeText = this.add.text(484, 152, "123",
					{
						fontFamily: "bloggerSans",
						fontSize: 35,
						color: "#C92A88",
						align: "center"
					}).setDepth(2), this.isRestart || this.registry.get(i.CONST.REGISTRY.ADBLOCKENABLED) ? [new s.default(i.CONST.SCENES.MENU, 686, 231, this, i.CONST.DISTRACTION.BACK).setScale(1.1), new u.default(710.5, 302, this, i.CONST.DISTRACTION.TRY_AGAIN_2).setScale(1.1).setDepth(2), this.survivalTimeText, this.highscoreImage] : [new s.default(i.CONST.SCENES.MENU, 733, 380, this, i.CONST.DISTRACTION.BACK_2).setScale(1.1), new p.default(713, 303, this, i.CONST.DISTRACTION.CONTINUE, function ()
					{
						return t.getContinueData()
					}).setScale(1.1), new u.default(680, 233, this, i.CONST.DISTRACTION.TRY_AGAIN).setDepth(2), this.survivalTimeText, this.highscoreImage]
				}, r.prototype.getContinueData = function ()
				{
					return {
						time: this.distractionManager.getSurvivalTime()
					}
				}, r
			}(r.MinigameScene);
		exports.DistractionScene = T;
		var g = function ()
		{
			function t(t)
			{
				this.scene = t, this.container = t.add.container(420, 237).setDepth(4), this.characterArm = t.add.container(-40, 65);
				var e = t.add.image(0, 0, i.CONST.DISTRACTION.ARM).setOrigin(.8, .1);
				this.characterArm.add([e]), this.characterHand = t.add.container(-40, 65), this.handImage = t.add.image(-20, 80, i.CONST.DISTRACTION.HAND).setOrigin(.3, .6), this.characterHand.add([this.handImage]);
				var r = t.add.image(0, 0, i.CONST.DISTRACTION.CHARACTER);
				this.container.add([this.characterArm, r, this.characterHand]), this.animate(t)
			}
			return t.prototype.animate = function (t)
			{
				this.characterArm.setAngle(-20), this.characterHand.setAngle(-20), t.tweens.timeline(
				{
					targets: [this.characterArm, this.characterHand],
					loop: -1,
					tweens: [
					{
						angle: 5,
						duration: 5e3,
						ease: "Quad.easeInOut",
						hold: 300,
						onStart: function ()
						{
							this.setWriteAnimation(!0)
						},
						onStartScope: this
					},
					{
						angle: -20,
						duration: 500,
						ease: "Quad.easeInOut",
						onStart: function ()
						{
							this.setWriteAnimation(!1)
						},
						onStartScope: this
					}]
				})
			}, t.prototype.setWriteAnimation = function (t)
			{
				var e = this;
				this.writeTween && this.writeTween.stop(), t && (this.writeTween = this.scene.tweens.add(
				{
					targets: this.handImage,
					angle: "+=2",
					duration: 5e3,
					hold: 750,
					yoyo: !0,
					repeat: -1,
					ease: function (t)
					{
						return e.wiggle(t, 7, 7)
					}
				}))
			}, t.prototype.wiggle = function (t, e, i)
			{
				var r = t * Math.PI * 2 * e,
					s = t * (2 * Math.PI * i + Math.PI / 2);
				return Math.sin(r) * Math.cos(s)
			}, t
		}();
	},
	{
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5",
		"../components/BackButton": "m7La",
		"../components/distraction/distractions/PhoneDistraction": "p/cI",
		"../components/distraction/DistractionManager": "4njW",
		"../components/distraction/distractions/BallDistraction": "qWNQ",
		"../components/distraction/distractions/WindowDistraction": "WsIZ",
		"../components/distraction/distractions/TvDistraction": "GKzk",
		"../components/TryAgainButton": "uCKR",
		"../components/ContinueButton": "Bfr5",
		"../components/distraction/Countdown": "d5Jt"
	}],
	"gSBN": [function (require, module, exports)
	{
		"use strict";
		var e = this && this.__extends || function ()
		{
			var e = function (t, n)
			{
				return (e = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (e, t)
					{
						e.__proto__ = t
					} || function (e, t)
					{
						for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
					})(t, n)
			};
			return function (t, n)
			{
				function s()
				{
					this.constructor = t
				}
				e(t, n), t.prototype = null === n ? Object.create(n) : (s.prototype = n.prototype, new s)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var t, n = require("../CONST"),
			s = {
				handTexture: n.CONST.GENERIC.TUTORIAL_HAND,
				origin:
				{
					x: .7,
					y: .26
				},
				pressedPos:
				{
					x: 32,
					y: -35,
					angle: 0
				},
				hoverPos:
				{
					x: 40,
					y: -40,
					angle: 30
				},
				startAnim:
				{
					ease: "Quad.easeInOut",
					duration: 300,
					delay: 100,
					hold: 150
				},
				moveAnim:
				{
					ease: "Quad.easeInOut",
					delay: 150,
					hold: 150
				},
				endAnim:
				{
					ease: "Quad.easeInOut",
					duration: 300,
					delay: 150,
					hold: 300
				}
			};
		! function (e)
		{
			e[e.Deactivated = 0] = "Deactivated", e[e.Starting = 1] = "Starting", e[e.Moving = 2] = "Moving", e[e.Ending = 3] = "Ending"
		}(t || (t = {}));
		var o = function (o)
		{
			function a(e, n)
			{
				var a = o.call(this, n, e.spawnPos.x, e.spawnPos.y) || this;
				return a.setDepth(e.depth), a.config = e, a.currentState = t.Deactivated, a.setHandState(t.Deactivated), a.hasMoveAnim = void 0 !== e.moveAnim, a.handImage = n.add.image(s.pressedPos.x, s.pressedPos.y, s.handTexture).setOrigin(s.origin.x, s.origin.y).setAngle(s.pressedPos.angle), a.add([a.handImage]), n.add.existing(a), a
			}
			return e(a, o), a.prototype.setHandState = function (e)
			{
				switch (this.currentState = e, e)
				{
				case t.Deactivated:
					this.onDeactivated();
					break;
				case t.Starting:
					this.onStarting();
					break;
				case t.Moving:
					this.onMoving();
					break;
				case t.Ending:
					this.onEnding()
				}
			}, a.prototype.fade = function (e)
			{
				this.fadeTween && this.fadeTween.stop(), this.fadeTween = this.scene.tweens.add(
				{
					targets: this,
					alpha: e ? 1 : 0,
					duration: 200,
					ease: "Quad.easeInOut"
				})
			}, a.prototype.onDeactivated = function ()
			{
				this.handTween && this.handTween.stop(), this.moveTween && this.moveTween.stop(), this.fade(!1)
			}, a.prototype.onStarting = function ()
			{
				var e = this;
				this.fade(!0), this.setPosition(this.config.spawnPos.x, this.config.spawnPos.y), this.handImage.setPosition(s.hoverPos.x, s.hoverPos.y).setAngle(s.hoverPos.angle), this.handTween && this.handTween.stop(), this.handTween = this.scene.tweens.add(
				{
					targets: this.handImage,
					x: s.pressedPos.x,
					y: s.pressedPos.y,
					angle: s.pressedPos.angle,
					ease: s.startAnim.ease,
					duration: s.startAnim.duration,
					repeat: 0,
					yoyo: !1,
					delay: s.startAnim.delay,
					hold: s.startAnim.hold,
					onComplete: function ()
					{
						e.setHandState(t.Moving)
					}
				})
			}, a.prototype.onMoving = function ()
			{
				var e = this;
				this.hasMoveAnim && this.config.moveAnim ? (this.moveTween && this.moveTween.stop(), this.moveTween = this.scene.tweens.add(
				{
					targets: this,
					x: this.config.moveAnim.movePos.x,
					y: this.config.moveAnim.movePos.y,
					ease: s.moveAnim.ease,
					duration: this.config.moveAnim.time,
					repeat: 0,
					yoyo: !1,
					delay: s.moveAnim.delay,
					hold: s.moveAnim.hold,
					onComplete: function ()
					{
						e.setHandState(t.Ending)
					}
				})) : this.setHandState(t.Ending)
			}, a.prototype.onEnding = function ()
			{
				var e = this;
				this.handImage.setPosition(s.pressedPos.x, s.pressedPos.y).setAngle(s.pressedPos.angle), this.handTween && this.handTween.stop(), this.handTween = this.scene.tweens.add(
				{
					targets: this.handImage,
					x: s.hoverPos.x,
					y: s.hoverPos.y,
					angle: s.hoverPos.angle,
					ease: s.endAnim.ease,
					duration: s.endAnim.duration,
					repeat: 0,
					yoyo: !1,
					delay: s.endAnim.delay,
					onComplete: function ()
					{
						e.hasMoveAnim && e.fade(!1), setTimeout(function ()
						{
							e.currentState == t.Ending && e.setHandState(t.Starting)
						}, s.endAnim.hold)
					}
				})
			}, a.prototype.show = function ()
			{
				this.currentState == t.Deactivated && this.setHandState(t.Starting)
			}, a.prototype.hide = function ()
			{
				this.currentState != t.Deactivated && this.setHandState(t.Deactivated)
			}, a.prototype.isActivated = function ()
			{
				return this.currentState != t.Deactivated
			}, a.prototype.displayDebugGizmos = function (e, t)
			{
				e.add.image(t.spawnPos.x, t.spawnPos.y, n.CONST.BUTTONS.BACK).setTint(65280).setDepth(20).setScale(.2);
				if (t.moveAnim) e.add.image(t.moveAnim.movePos.x, t.moveAnim.movePos.y, n.CONST.BUTTONS.BACK).setTint(16776960).setDepth(20).setScale(.2)
			}, a
		}(Phaser.GameObjects.Container);
		exports.TutorialHand = o;
	},
	{
		"../CONST": "HmIA"
	}],
	"miVk": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var t = require("../TutorialHand"),
			e = {
				depth: 100,
				handMoveTime: 1500,
				hintCountdown:
				{
					first: 2e3,
					general: 4e3
				},
				generalLocations:
				{
					center:
					{
						x: 427,
						y: 240
					},
					serve:
					{
						x: 725,
						y: 325
					},
					recycle:
					{
						x: 114,
						y: 144
					}
				}
			},
			n = function ()
			{
				function n(n, i)
				{
					this.hintCountdown = e.hintCountdown.first, this.scene = n, this.ingredientHands = this.createIngredientHands(i), this.serveHand = new t.TutorialHand(
					{
						spawnPos: e.generalLocations.serve,
						depth: e.depth
					}, this.scene), this.recycleHand = new t.TutorialHand(
					{
						spawnPos: e.generalLocations.recycle,
						depth: e.depth
					}, this.scene), this.isDragging = !1, this.isHintActive = !1, this.gameEnded = !1, this.resetCountdown(2e3)
				}
				return n.prototype.createIngredientHands = function (n)
				{
					var i = this,
						s = [];
					return n.forEach(function (n)
					{
						var o = new t.TutorialHand(
						{
							spawnPos: n.spawn,
							moveAnim:
							{
								movePos: e.generalLocations.center,
								time: e.handMoveTime
							},
							depth: e.depth
						}, i.scene);
						s.push(
						{
							ingredient: n.ingredient,
							hand: o
						})
					}), s
				}, n.prototype.onUpdate = function (t)
				{
					this.isDragging || this.isHintActive || this.gameEnded || this.updateCountdown(t)
				}, n.prototype.updateCountdown = function (t)
				{
					this.hintCountdown -= t, this.hintCountdown <= 0 && this.activateNextHint()
				}, n.prototype.resetCountdown = function (t)
				{
					this.hintCountdown = t + e.hintCountdown.first
				}, n.prototype.activateNextHint = function ()
				{
					this.isHintActive = !0, this.activeHand && this.activeHand.hide(), this.activeHand = this.getNextHand(), this.activeHand.show()
				}, n.prototype.getNextHand = function ()
				{
					var t;
					if (this.scene.isBurgerCompleted()) t = this.serveHand;
					else if (this.scene.isBurgerCorrect())
					{
						var e = this.scene.getNextIngredient();
						t = this.ingredientHands.filter(function (t)
						{
							return t.ingredient === e
						})[0].hand
					}
					else t = this.recycleHand;
					return t
				}, n.prototype.deactivateCurrentHint = function (t)
				{
					void 0 === t && (t = 0), this.isHintActive = !1, this.activeHand && this.activeHand.hide(), this.resetCountdown(t)
				}, n.prototype.handleDrag = function (t)
				{
					this.isDragging = t, t && this.deactivateCurrentHint()
				}, n.prototype.handleEndGame = function ()
				{
					this.gameEnded = !0, this.deactivateCurrentHint()
				}, n.prototype.handleButtonClick = function ()
				{
					this.deactivateCurrentHint(1500)
				}, n
			}();
		exports.BurgerHintSystem = n;
	},
	{
		"../TutorialHand": "gSBN"
	}],
	"Sg00": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../../CONST"),
			t = {
				position:
				{
					x: 427,
					y: 240
				},
				maxIngredientDistance: 90,
				nextIngredientPositionChange:
				{
					x: 0,
					y: -15
				},
				containerDepth: 10,
				interactive:
				{
					heightPerIngredient: 15,
					defaultHeight: 40
				}
			},
			n = function ()
			{
				function n(e)
				{
					this.currentIngredients = [], this.isDragging = !1, this.scene = e, this.resetBurger()
				}
				return n.prototype.addIngredient = function (e)
				{
					this.burgerContainer.add([e.imgShadow, e]), e.addToBurger(this.burgerContainer, this.nextIngredientPosition, 0 === this.currentIngredients.length), this.currentIngredients.push(e), this.nextIngredientPosition.y -= e.config.height, this.burgerContainer.disableInteractive(), this.burgerContainer.setInteractive(
					{
						hitArea: new Phaser.Geom.Rectangle(-e.displayWidth / 2, -e.displayHeight / 2, e.displayWidth, this.currentIngredients[0].displayHeight + this.currentIngredients.length * t.interactive.heightPerIngredient),
						hitAreaCallback: Phaser.Geom.Rectangle.Contains,
						useHandCursor: !0,
						draggable: !0
					}), this.scene.onIngredientAdded(this.currentIngredients.length)
				}, n.prototype.serve = function ()
				{
					this.serveAnimation(), this.resetBurger()
				}, n.prototype.recycle = function ()
				{
					this.recycleAnimation(), this.resetBurger()
				}, n.prototype.isInRange = function (e, n)
				{
					return Phaser.Math.Distance.Between(e, n, t.position.x + this.nextIngredientPosition.x, t.position.y + this.nextIngredientPosition.y) < t.maxIngredientDistance
				}, n.prototype.getCurrentIngredientTypes = function ()
				{
					return this.currentIngredients.map(function (e)
					{
						return e.getIngredientType()
					})
				}, n.prototype.resetBurger = function ()
				{
					var e = this;
					this.burgerContainer = this.scene.add.container(t.position.x, t.position.y).setDepth(t.containerDepth), this.burgerContainer.on("dragstart", function (t, n, i)
					{
						e.isDragging = !0, e.handleDragStart()
					}), this.burgerContainer.on("drag", function (t, n, i)
					{
						e.isDragging && e.handleDrag(n, i)
					}), this.burgerContainer.on("dragend", function (t, n, i, r)
					{
						e.isDragging = !1, e.handleDragEnd()
					}), this.nextIngredientPosition = {
						x: 0,
						y: 0
					}, this.currentIngredients = []
				}, n.prototype.handleDragStart = function ()
				{
					this.scene.onIngredientDrag(!0), this.scene.sound.play(e.CONST.AUDIO.GRAB,
					{
						detune: this.scene.getDetune()
					})
				}, n.prototype.handleDrag = function (e, t)
				{
					this.burgerContainer.setPosition(e, t)
				}, n.prototype.handleDragEnd = function ()
				{
					this.scene.onIngredientDrag(!1), this.scene.sound.play(e.CONST.AUDIO.GRAB,
					{
						detune: this.scene.getDetune()
					}), this.moveTween && this.moveTween.stop(), this.moveTween = this.scene.tweens.add(
					{
						targets: this.burgerContainer,
						x: t.position.x,
						y: t.position.y,
						duration: 500,
						ease: "Quad.easeOut"
					})
				}, n.prototype.serveAnimation = function ()
				{
					var e = this.burgerContainer;
					this.scene.tweens.add(
					{
						targets: this.burgerContainer,
						y: "-=315",
						duration: 500,
						delay: 700,
						ease: "Back.easeInOut",
						onComplete: function ()
						{
							e.destroy()
						}
					})
				}, n.prototype.recycleAnimation = function ()
				{
					var e = this.burgerContainer;
					this.scene.tweens.add(
					{
						targets: this.burgerContainer,
						y: "+=700",
						duration: 500,
						delay: 500,
						ease: "Back.easeIn",
						onComplete: function ()
						{
							e.destroy()
						}
					})
				}, n.prototype.getBurgerPosition = function ()
				{
					return {
						x: this.burgerContainer.x,
						y: this.burgerContainer.y
					}
				}, n.prototype.isBurgerDragging = function ()
				{
					return this.isDragging
				}, n
			}();
		exports.BurgerManager = n;
	},
	{
		"../../CONST": "HmIA"
	}],
	"t5dw": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (i, e)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, i)
					{
						t.__proto__ = i
					} || function (t, i)
					{
						for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e])
					})(i, e)
			};
			return function (i, e)
			{
				function n()
				{
					this.constructor = i
				}
				t(i, e), i.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var i = require("../../CONST"),
			e = {
				text:
				{
					size: 35,
					colorString: "#F76B68",
					colorNum: 16214888
				},
				depth: 65
			},
			n = function (n)
			{
				function r(t)
				{
					var i = n.call(this, t.scene, t.position.x, t.position.y) || this;
					return i.config = t, i.currentDuration = 1e3, i.remainingDuration = 0, i.isCountingDown = !1, i.createChildren(), i.setDepth(e.depth), t.scene.add.existing(i), t.scene.events.on("update", i.onUpdate, i), i
				}
				return t(r, n), r.prototype.start = function (t)
				{
					return this.currentDuration = t, this.remainingDuration = t, this.isCountingDown = !0, this
				}, r.prototype.pause = function ()
				{
					this.isCountingDown = !1
				}, r.prototype.restart = function (t, i)
				{
					var e = this;
					this.isCountingDown = !1;
					var n = this.getRemainingTimeShare();
					this.currentDuration = t, this.remainingDuration = this.currentDuration * n, this.config.scene.tweens.addCounter(
					{
						from: this.remainingDuration,
						to: this.currentDuration,
						ease: "Quad.easeInOut",
						duration: i / 2,
						onUpdate: function (t)
						{
							var i = Math.floor(t.getValue());
							this.remainingDuration = i, this.updateDisplay()
						},
						onUpdateScope: this
					}), setTimeout(function ()
					{
						e.start(t)
					}, i)
				}, r.prototype.createChildren = function ()
				{
					this.bg = this.config.scene.add.image(0, 0, i.CONST.BURGER.TIMER), this.text = this.config.scene.add.text(-12, -13, "0:00",
					{
						fontFamily: "bloggerSans",
						fontSize: e.text.size,
						color: e.text.colorString,
						align: "center"
					}), this.radialMask = this.config.scene.add.graphics(), this.radialMask.setPosition(-40.5, 3.5), this.radialMask.setAngle(-90).setScale(1, -1);
					var t = this.config.scene.add.image(-41.4, 1.6, i.CONST.BURGER.TIMER_CIRCLE).setScale(.94, 1);
					this.add([this.bg, this.text, t, this.radialMask])
				}, r.prototype.onUpdate = function (t, i)
				{
					this.isCountingDown && (this.remainingDuration -= i, this.remainingDuration < 0 && (this.remainingDuration = 0, this.config.onComplete(), this.pause()), this.updateDisplay())
				}, r.prototype.updateDisplay = function ()
				{
					var t = this.getRemainingTimeShare();
					this.text.text = this.formatTimeText(this.remainingDuration), this.updateMask(t)
				}, r.prototype.updateMask = function (t)
				{
					var i = Phaser.Math.DegToRad(360 * t);
					this.radialMask.clear(), this.radialMask.lineStyle(22.5, e.text.colorNum, 1), this.radialMask.beginPath(), this.radialMask.arc(0, 0, 11.25, 0, i, !1), this.radialMask.strokePath(), this.radialMask.closePath()
				}, r.prototype.formatTimeText = function (t)
				{
					var i = Math.floor(t / 1e3 % 60);
					return Math.floor(t / 6e4 % 60) + ":" + (i < 10 ? "0" + i : i)
				}, r.prototype.getRemainingTimeShare = function ()
				{
					return this.remainingDuration / this.currentDuration
				}, r.prototype.getElapsedTime = function ()
				{
					return this.currentDuration - this.remainingDuration
				}, r.prototype.getTotalTime = function ()
				{
					return this.currentDuration
				}, r
			}(Phaser.GameObjects.Container);
		exports.Countdown = n;
	},
	{
		"../../CONST": "HmIA"
	}],
	"Zapb": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var t = require("../../CONST"),
			e = {
				anchor:
				{
					x: 425,
					y: 800
				},
				origin:
				{
					x: 1,
					y: .33
				},
				texture: t.CONST.BURGER.HAND,
				depth: 50,
				angleOffset: -90
			},
			i = function ()
			{
				function t(t)
				{
					this.follow = !0, this.scene = t, this.hand = t.add.image(420, 216, e.texture).setDepth(e.depth).setOrigin(e.origin.x, e.origin.y), this.scene.events.on("update", this.update, this)
				}
				return t.prototype.update = function ()
				{
					this.updateHandPosition()
				}, t.prototype.updateHandPosition = function ()
				{
					if (this.follow)
					{
						this.hand.x = this.scene.input.activePointer.x, this.hand.y = this.scene.input.activePointer.y;
						var t = Phaser.Math.RadToDeg(Math.atan2(e.anchor.x - this.hand.x, e.anchor.y - this.hand.y));
						this.hand.setAngle(e.angleOffset - t)
					}
				}, t.prototype.setFollow = function (t)
				{
					this.follow = t
				}, t
			}();
		exports.default = i;
	},
	{
		"../../CONST": "HmIA"
	}],
	"sZPP": [function (require, module, exports)
	{
		"use strict";
		var e = this && this.__extends || function ()
		{
			var e = function (t, n)
			{
				return (e = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (e, t)
					{
						e.__proto__ = t
					} || function (e, t)
					{
						for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
					})(t, n)
			};
			return function (t, n)
			{
				function a()
				{
					this.constructor = t
				}
				e(t, n), t.prototype = null === n ? Object.create(n) : (a.prototype = n.prototype, new a)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var t = require("../../CONST"),
			n = {
				dragDepth: 20,
				spawnMove:
				{
					duration: 500,
					ease: "Quad.easeOut"
				},
				burgerMove:
				{
					duration: 200,
					ease: "Back.easeIn"
				},
				fade:
				{
					duration: 500,
					ease: "Quad.easeInOut"
				},
				shadowOffset:
				{
					x: 6.5,
					y: 4
				}
			},
			a = function (a)
			{
				function i(e, t, n)
				{
					var i = a.call(this, t, e.spawn.x, e.spawn.y, e.texture) || this;
					return i.addedToBurger = !1, i.isDragging = !1, i.config = e, i.spawner = n, i.setInteractive(
					{
						useHandCursor: !0,
						draggable: !0,
						pixelPerfect: !0
					}), i.setAlpha(0), i.setOrigin(e.origin.x, e.origin.y), i.fade(!0), i.setDepth(e.depth), i.imgShadow = t.add.image(0, 0, i.config.shadow_texture).setOrigin(i.originX, i.originY).setTint(3487029).setAlpha(.3 * i.alpha), i.updateShadow(), i.on("dragstart", function (e, n, a)
					{
						i.isDragging = !0, i.handleDragStart(t)
					}), i.on("drag", function (e, t, n)
					{
						i.isDragging && i.handleDrag(t, n)
					}), i.on("dragend", function (e, n, a, s)
					{
						i.isDragging = !1, i.handleDragEnd(t)
					}), t.add.existing(i), i
				}
				return e(i, a), i.prototype.updateShadow = function ()
				{
					this.imgShadow.x = this.x + n.shadowOffset.x, this.imgShadow.y = this.y + n.shadowOffset.y, this.imgShadow.setDepth(this.depth - 2), this.isDragging || this.addedToBurger || this.imgShadow.setAlpha(.3 * this.alpha)
				}, i.prototype.handleDragStart = function (e)
				{
					this.setDepth(n.dragDepth), this.updateShadow(), this.fadeShadow(!1), e.onIngredientDrag(!0), this.scene.sound.play(t.CONST.AUDIO.GRAB,
					{
						detune: this.scene.getDetune()
					})
				}, i.prototype.handleDrag = function (e, t)
				{
					this.setPosition(e, t), this.updateShadow()
				}, i.prototype.handleDragEnd = function (e)
				{
					this.scene.sound.play(t.CONST.AUDIO.GRAB,
					{
						detune: this.scene.getDetune()
					}), this.spawner.onIngredientDropped(this.x, this.y), this.updateShadow(), e.onIngredientDrag(!1)
				}, i.prototype.addToBurger = function (e, t, a)
				{
					var i = this;
					a && this.fadeShadow(!0), this.addedToBurger = !0, this.disableInteractive(), this.x -= e.x, this.y -= e.y, this.moveTween && this.moveTween.stop(), this.moveTween = this.scene.tweens.add(
					{
						targets: this,
						x: t.x,
						y: t.y,
						duration: n.burgerMove.duration,
						ease: n.burgerMove.ease,
						onUpdate: function ()
						{
							i.updateShadow()
						}
					})
				}, i.prototype.moveToSpawn = function ()
				{
					var e = this;
					this.moveTween && this.moveTween.stop(), this.moveTween = this.scene.tweens.add(
					{
						targets: this,
						x: this.config.spawn.x,
						y: this.config.spawn.y,
						duration: n.spawnMove.duration,
						ease: n.spawnMove.ease,
						onUpdate: function ()
						{
							e.setDepth(e.config.depth), e.updateShadow()
						}
					}), this.fadeShadow(!0)
				}, i.prototype.getIngredientType = function ()
				{
					return this.config.ingredient
				}, i.prototype.fade = function (e)
				{
					var t = this;
					this.fadeTween && this.fadeTween.stop(), this.fadeTween = this.scene.tweens.add(
					{
						targets: this,
						alpha: e ? 1 : 0,
						duration: n.fade.duration,
						ease: n.fade.ease,
						onUpdate: function ()
						{
							t.updateShadow()
						}
					})
				}, i.prototype.fadeShadow = function (e)
				{
					this.scene.tweens.add(
					{
						targets: this.imgShadow,
						alpha: e ? .3 : 0,
						duration: 250,
						ease: n.fade.ease
					})
				}, i
			}(Phaser.GameObjects.Image);
		exports.Ingredient = a;
	},
	{
		"../../CONST": "HmIA"
	}],
	"sU+w": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("./Ingredient"),
			n = function ()
			{
				function n(e, n, t)
				{
					this.burger = n, this.config = e, this.scene = t, this.currentIngredient = this.spawnNewIngredient()
				}
				return n.prototype.spawnNewIngredient = function ()
				{
					return new e.Ingredient(this.config, this.scene, this)
				}, n.prototype.onIngredientDropped = function (e, n)
				{
					this.burger.isInRange(e, n) ? (this.burger.addIngredient(this.currentIngredient), this.currentIngredient = this.spawnNewIngredient()) : this.currentIngredient.moveToSpawn()
				}, n.prototype.disable = function ()
				{
					this.currentIngredient.isDragging = !1, this.currentIngredient.disableInteractive(), this.currentIngredient.moveToSpawn()
				}, n
			}();
		exports.IngredientSpawner = n;
	},
	{
		"./Ingredient": "sZPP"
	}],
	"kdGH": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		}), exports.recipes = {
			first:
			{
				ingredients: [6, 1, 3, 5, 4, 7]
			},
			short: [
			{
				ingredients: [6, 1, 7]
			},
			{
				ingredients: [6, 1, 3, 7]
			},
			{
				ingredients: [6, 1, 5, 7]
			},
			{
				ingredients: [6, 4, 5, 7]
			},
			{
				ingredients: [6, 2, 3, 7]
			},
			{
				ingredients: [6, 5, 6, 7]
			},
			{
				ingredients: [6, 5, 7]
			},
			{
				ingredients: [6, 4, 2, 7]
			},
			{
				ingredients: [6, 1, 1, 7]
			},
			{
				ingredients: [6, 1, 4, 7]
			},
			{
				ingredients: [6, 4, 3, 7]
			},
			{
				ingredients: [6, 1, 2, 1, 7]
			},
			{
				ingredients: [6, 5, 2, 4, 7]
			},
			{
				ingredients: [6, 5, 3, 3, 7]
			},
			{
				ingredients: [6, 3, 2, 4, 7]
			},
			{
				ingredients: [6, 5, 5, 5, 7]
			},
			{
				ingredients: [6, 4, 2, 1, 7]
			},
			{
				ingredients: [6, 2, 4, 3, 7]
			},
			{
				ingredients: [6, 3, 6, 3, 7]
			},
			{
				ingredients: [6, 3, 2, 5, 7]
			},
			{
				ingredients: [6, 3, 6, 5, 7]
			},
			{
				ingredients: [6, 4, 6, 1, 7]
			},
			{
				ingredients: [6, 2, 6, 5, 7]
			}],
			normal: [
			{
				ingredients: [6, 3, 5, 3, 5, 7]
			},
			{
				ingredients: [6, 2, 4, 1, 5, 7]
			},
			{
				ingredients: [6, 4, 2, 4, 2, 4, 7]
			},
			{
				ingredients: [6, 5, 1, 3, 5, 7]
			},
			{
				ingredients: [6, 4, 2, 3, 1, 5, 7]
			},
			{
				ingredients: [6, 1, 3, 1, 3, 1, 7]
			},
			{
				ingredients: [6, 1, 3, 5, 4, 7]
			},
			{
				ingredients: [6, 5, 2, 2, 2, 2, 7]
			},
			{
				ingredients: [6, 3, 5, 5, 2, 7]
			},
			{
				ingredients: [6, 3, 5, 6, 3, 5, 7]
			},
			{
				ingredients: [6, 2, 5, 6, 2, 5, 7]
			},
			{
				ingredients: [6, 2, 6, 5, 2, 7]
			},
			{
				ingredients: [6, 6, 1, 5, 3, 7]
			},
			{
				ingredients: [6, 5, 6, 5, 1, 7]
			},
			{
				ingredients: [6, 3, 1, 2, 5, 7]
			},
			{
				ingredients: [6, 3, 1, 3, 2, 7]
			},
			{
				ingredients: [6, 5, 2, 1, 2, 7]
			}],
			meme: [
			{
				ingredients: [6, 4, 1, 4, 1, 4, 7]
			},
			{
				ingredients: [6, 5, 5, 5, 5, 7]
			},
			{
				ingredients: [6, 6, 7]
			},
			{
				ingredients: [6, 3, 5]
			},
			{
				ingredients: [6, 4, 7]
			},
			{
				ingredients: [2]
			},
			{
				ingredients: [6, 6, 6, 6, 7]
			},
			{
				ingredients: [3, 5, 3]
			},
			{
				ingredients: [5, 1, 5, 1, 5]
			},
			{
				ingredients: [5, 4, 5]
			}]
		};
	},
	{}],
	"8YQW": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("../../CONST"),
			i = require("./Recipes"),
			t = {
				1:
				{
					sat: e.CONST.BURGER.P_S_EGGS
				},
				2:
				{
					sat: e.CONST.BURGER.P_S_LETTUCE
				},
				3:
				{
					sat: e.CONST.BURGER.P_S_CHEESE
				},
				4:
				{
					sat: e.CONST.BURGER.P_S_TOMATO
				},
				5:
				{
					sat: e.CONST.BURGER.P_S_PATTY
				},
				6:
				{
					sat: e.CONST.BURGER.P_S_BUN_BOTTOM
				},
				7:
				{
					sat: e.CONST.BURGER.P_S_BUN_TOP
				}
			},
			r = {
				normalBurgersAfter: 5,
				memeBurgersAfter: 10
			},
			n = function ()
			{
				function e(e)
				{
					this.scene = e, this.recipeDisplay = new s(e), this.recipeQueue = []
				}
				return e.prototype.nextRecipe = function (e, t, n)
				{
					var s = this;
					return void 0 === n && (n = !1), (this.recipeQueue.length < 1 || t == r.normalBurgersAfter || t == r.memeBurgersAfter) && this.refillQueue(t), this.currentRecipe = this.recipeQueue.pop(), n && 0 == t && (this.currentRecipe = i.recipes.first), setTimeout(function ()
					{
						s.recipeDisplay.displayRecipe(s.currentRecipe)
					}, e), this.currentRecipe
				}, e.prototype.refillQueue = function (e)
				{
					var t, n, s, p;
					e < r.normalBurgersAfter ? (t = this.recipeQueue).push.apply(t, i.recipes.short) : e == r.normalBurgersAfter ? (n = this.recipeQueue).push.apply(n, i.recipes.normal) : e == r.memeBurgersAfter ? (s = this.recipeQueue).push.apply(s, i.recipes.meme) : (p = this.recipeQueue).push.apply(p, i.recipes.short.concat(i.recipes.normal, i.recipes.meme)), this.recipeQueue = Phaser.Utils.Array.Shuffle(this.recipeQueue)
				}, e.prototype.isBurgerCompleted = function (e)
				{
					var i = e.getCurrentIngredientTypes(),
						t = this.currentRecipe.ingredients;
					if (i.length != t.length) return !1;
					for (var r = 0; r < t.length; r++)
						if (i[r] !== t[r]) return !1;
					return !0
				}, e.prototype.isBurgerCorrect = function (e)
				{
					for (var i = e.getCurrentIngredientTypes(), t = this.currentRecipe.ingredients, r = 0; r < i.length; r++)
						if (i[r] !== t[r]) return !1;
					return !0
				}, e.prototype.getNextIngredient = function (e)
				{
					var i = e.getCurrentIngredientTypes(),
						t = this.currentRecipe.ingredients;
					return !(i.length >= t.length) && t[i.length]
				}, e.prototype.getCurrentRecipeName = function ()
				{
					return this.currentRecipe.ingredients.join("")
				}, e.prototype.getCurrentRecipeLength = function ()
				{
					return this.currentRecipe.ingredients.length
				}, e
			}();
		exports.RecipeManager = n;
		var s = function ()
		{
			function i(e)
			{
				this.DisplayConfig = {
					pos:
					{
						active:
						{
							x: 749,
							y: 41
						},
						inactive:
						{
							x: 940,
							y: 64
						}
					},
					tween:
					{
						ease: "Quad.easeInOut",
						duration: 500
					},
					depth: 70,
					display:
					{
						startPos:
						{
							x: -12,
							y: 90
						},
						change:
						{
							x: 2.14,
							y: -16.4
						}
					}
				}, this.scene = e
			}
			return i.prototype.displayRecipe = function (e)
			{
				this.currentRecipeDisplay && this.slideRecipe(!1), this.currentRecipeDisplay = this.createRecipeContainer(e), this.slideRecipe(!0)
			}, i.prototype.createRecipeContainer = function (i)
			{
				var t = this.scene.add.container(this.DisplayConfig.pos.inactive.x, this.DisplayConfig.pos.inactive.y).setDepth(this.DisplayConfig.depth),
					r = this.scene.add.image(0, 0, e.CONST.BURGER.PAPER).setOrigin(.69, .19),
					n = this.spawnIngredients(i);
				return t.add([r].concat(n)), t
			}, i.prototype.spawnIngredients = function (e)
			{
				for (var i = this.DisplayConfig.display.startPos.x - this.DisplayConfig.display.change.x * e.ingredients.length / 2, r = this.DisplayConfig.display.startPos.y - this.DisplayConfig.display.change.y * e.ingredients.length / 2, n = [], s = 0; s < e.ingredients.length; s++) n.push(this.scene.add.image(i + s * this.DisplayConfig.display.change.x, r + s * this.DisplayConfig.display.change.y, t[e.ingredients[s]].sat));
				return n
			}, i.prototype.slideRecipe = function (e)
			{
				this.scene.tweens.add(
				{
					targets: this.currentRecipeDisplay,
					x: e ? this.DisplayConfig.pos.active.x : this.DisplayConfig.pos.inactive.x,
					y: e ? this.DisplayConfig.pos.active.y : this.DisplayConfig.pos.inactive.y,
					ease: this.DisplayConfig.tween.ease,
					duration: this.DisplayConfig.tween.duration,
					delay: e ? 2 * this.DisplayConfig.tween.duration : 0
				})
			}, i
		}();
	},
	{
		"../../CONST": "HmIA",
		"./Recipes": "kdGH"
	}],
	"qS0G": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
			{
				var t = function (e, i)
				{
					return (t = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(e, i)
				};
				return function (e, i)
				{
					function n()
					{
						this.constructor = e
					}
					t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
				}
			}(),
			e = this && this.__importDefault || function (t)
			{
				return t && t.__esModule ? t :
				{
					default: t
				}
			};
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var i, n = e(require("../components/BackButton")),
			r = require("../components/burger/BurgerHintSystem"),
			s = require("../components/burger/BurgerManager"),
			o = require("../components/burger/Countdown"),
			u = e(require("../components/burger/Hand")),
			a = require("../components/burger/IngredientSpawner"),
			h = require("../components/burger/RecipeManager"),
			c = e(require("../components/ContinueButton")),
			g = e(require("../components/TryAgainButton")),
			d = require("../CONST"),
			p = require("./generic/MinigameScene"),
			l = require("gameanalytics");
		! function (t)
		{
			t[t.Egg = 1] = "Egg", t[t.Lettuce = 2] = "Lettuce", t[t.Cheese = 3] = "Cheese", t[t.Tomato = 4] = "Tomato", t[t.Patty = 5] = "Patty", t[t.BunBottom = 6] = "BunBottom", t[t.BunTop = 7] = "BunTop"
		}(i = exports.IngredientsEnum || (exports.IngredientsEnum = {})), exports.FIRST_BURGER_COMPLETED_KEY = "firstBurgerCompleted";
		var f = {
				ingredients: [
				{
					ingredient: i.Egg,
					spawn:
					{
						x: 110,
						y: 419
					},
					texture: d.CONST.BURGER.I_EGGS,
					shadow_texture: d.CONST.BURGER.I_S_EGGS,
					height: 10,
					depth: 5,
					origin:
					{
						x: .5,
						y: .5
					}
				},
				{
					ingredient: i.Lettuce,
					spawn:
					{
						x: 309,
						y: 375
					},
					texture: d.CONST.BURGER.I_LETTUCE,
					shadow_texture: d.CONST.BURGER.I_S_LETTUCE,
					height: 10,
					depth: 5,
					origin:
					{
						x: .5,
						y: .5
					}
				},
				{
					ingredient: i.Cheese,
					spawn:
					{
						x: 196,
						y: 343
					},
					texture: d.CONST.BURGER.I_CHEESE,
					shadow_texture: d.CONST.BURGER.I_S_CHEESE,
					height: 5,
					depth: 5,
					origin:
					{
						x: .5,
						y: .37
					}
				},
				{
					ingredient: i.Tomato,
					spawn:
					{
						x: 199,
						y: 248
					},
					texture: d.CONST.BURGER.I_TOMATO,
					shadow_texture: d.CONST.BURGER.I_S_TOMATO,
					height: 7,
					depth: 5,
					origin:
					{
						x: .5,
						y: .5
					}
				},
				{
					ingredient: i.Patty,
					spawn:
					{
						x: 263,
						y: 167
					},
					texture: d.CONST.BURGER.I_PATTY,
					shadow_texture: d.CONST.BURGER.I_S_PATTY,
					height: 15,
					depth: 5,
					origin:
					{
						x: .5,
						y: .5
					}
				},
				{
					ingredient: i.BunBottom,
					spawn:
					{
						x: 72,
						y: 317
					},
					texture: d.CONST.BURGER.I_BUN_BOTTOM,
					shadow_texture: d.CONST.BURGER.I_S_BUN_BOTTOM,
					height: 12,
					depth: 5,
					origin:
					{
						x: .5,
						y: .5
					}
				},
				{
					ingredient: i.BunTop,
					spawn:
					{
						x: 50,
						y: 260
					},
					texture: d.CONST.BURGER.I_BUN_TOP,
					shadow_texture: d.CONST.BURGER.I_S_BUN_TOP,
					height: 12,
					depth: 6,
					origin:
					{
						x: .5,
						y: .5
					}
				}]
			},
			B = function (e)
			{
				function i()
				{
					var t = e.call(this,
					{
						sceneName: d.CONST.SCENES.BURGER,
						duration: 999999999,
						showCountdown: 0,
						showHomeButton: !1,
						timeToStart: 1e3,
						startScreenColor: 16750848,
						startText: "BURGER\nMADNESS!",
						startTextYOrigin: .45,
						startTextColor: 3289650,
						endScreen: d.CONST.BURGER.END,
						showSkipButton: !1,
						nextScene: d.CONST.SCENES.BIRTH,
						endButtons:
						{
							normalNoSkip:
							{
								x: -426.5,
								y: 386,
								scale: 1.3
							},
							normalWithSkip:
							{
								x: 283,
								y: 386,
								scale: 1.3
							},
							skip:
							{
								x: 570,
								y: 386,
								scale: 1.3
							}
						},
						isArcadeMinigame: !0
					}) || this;
					return t.isRestart = !1, t.isFirstBurger = !0, t.ingredients = [], t.currentScore = 0, t.difficulty = {
						baseTime: 3e3,
						defaultTimePerIngredient: 3e3,
						minimumTimePerIngredient: 1e3,
						durationMultiplier: .96,
						firstBurgerTime: 12e4
					}, t
				}
				return t(i, e), i.prototype._init = function ()
				{
					this.ingredients = [], this.currentScore = 0, this.isRestart = this.checkForRestart(), this.getRemoteConfig(), this.isFirstBurger = !JSON.parse(this.storagePlugin.getItem(exports.FIRST_BURGER_COMPLETED_KEY, "false"))
				}, i.prototype.getRemoteConfig = function ()
				{
					var t = this.remoteConf.getConfig("gB").split(";");
					this.difficulty.durationMultiplier = parseFloat(t[0]), this.difficulty.baseTime = 100 * parseInt(t[1]), this.difficulty.defaultTimePerIngredient = 100 * parseInt(t[2]), this.difficulty.minimumTimePerIngredient = 100 * parseInt(t[3])
				}, i.prototype.checkForRestart = function ()
				{
					var t = this.sceneName + "restart",
						e = this.storagePlugin.getItem(t, "");
					if (e)
					{
						var i = JSON.parse(e);
						return this.currentScore = i.score, this.storagePlugin.removeItem(t), !0
					}
					return !1
				}, i.prototype._preload = function () {}, i.prototype._create = function ()
				{
					this.createBackground(), this.createRecipe(), this.createBurger(), this.createIngredients(), this.createButtons(), this.createCountdown(), this.hand = new u.default(this), this.serveAnim = new S(this), this.trashAnim = new m(this), this.hintSystem = new r.BurgerHintSystem(this, f.ingredients)
				}, i.prototype.createBackground = function ()
				{
					this.add.image(0, 0, d.CONST.BURGER.BACKGROUND).setOrigin(0, 0).setDepth(0), this.add.image(0, 0, d.CONST.BURGER.ROPE).setOrigin(0, 0).setDepth(60), this.add.image(427, 218, d.CONST.BURGER.BOARD).setDepth(1)
				}, i.prototype.createRecipe = function ()
				{
					this.recipe = new h.RecipeManager(this)
				}, i.prototype.createBurger = function ()
				{
					this.burger = new s.BurgerManager(this)
				}, i.prototype.createIngredients = function ()
				{
					var t = this;
					f.ingredients.forEach(function (e)
					{
						var i = new a.IngredientSpawner(e, t.burger, t);
						t.ingredients.push(i)
					})
				}, i.prototype.createButtons = function ()
				{
					var t = this;
					this.serveButton = new y(728, 329, -38, -34, d.CONST.BURGER.PLATE_OUTLINE, d.CONST.BURGER.PLATE, function ()
					{
						t.tryServeBurger()
					}, this), this.trashButton = new y(89.5, 131, 59, -1, d.CONST.BURGER.TRASH_OUTLINE, d.CONST.BURGER.TRASH, function ()
					{
						t.tryRecycleBurger()
					}, this)
				}, i.prototype.createCountdown = function ()
				{
					var t = this;
					this.countdown = new o.Countdown(
					{
						scene: this,
						position:
						{
							x: 85,
							y: 47
						},
						onComplete: function ()
						{
							t.onCountdownCompleted()
						}
					})
				}, i.prototype.onCountdownCompleted = function ()
				{
					this.sendBurgerAnalyticsEvent(!1, !0), this.triggerLose()
				}, i.prototype.onIngredientDrag = function (t)
				{
					this.hintSystem.handleDrag(t)
				}, i.prototype.tryServeBurger = function ()
				{
					var t = this;
					this.countdown.isCountingDown && (this.forceShowButtonOutline(!1), this.recipe.isBurgerCompleted(this.burger) ? (setTimeout(function ()
					{
						t.sound.play(d.CONST.AUDIO.WIN,
						{
							detune: t.getDetune()
						})
					}, 400), this.sendBurgerAnalyticsEvent(!0), this.currentScore++, this.showNextRecipe(), this.storagePlugin.setItem(exports.FIRST_BURGER_COMPLETED_KEY, (!0).toString())) : (this.sendBurgerAnalyticsEvent(!1, !1), this.triggerLose()), this.hintSystem.handleButtonClick(), this.burger.serve(), this.serveAnim.animate())
				}, i.prototype.tryRecycleBurger = function ()
				{
					this.forceShowButtonOutline(!1), this.hintSystem.handleButtonClick(), this.burger.recycle(), this.trashAnim.animate()
				}, i.prototype.isBurgerCompleted = function ()
				{
					return this.recipe.isBurgerCompleted(this.burger)
				}, i.prototype.isBurgerCorrect = function ()
				{
					return this.recipe.isBurgerCorrect(this.burger)
				}, i.prototype.getNextIngredient = function ()
				{
					return this.recipe.getNextIngredient(this.burger)
				}, i.prototype.showNextRecipe = function ()
				{
					this.forceShowButtonOutline(!1);
					var t = this.recipe.nextRecipe(750, this.currentScore, this.isFirstBurger),
						e = this.getNextBurgerDuration(t);
					this.isFirstBurger && 0 == this.currentScore && (e = this.difficulty.firstBurgerTime), this.countdown.restart(e, 1750)
				}, i.prototype.getNextBurgerDuration = function (t)
				{
					var e = Math.pow(this.difficulty.durationMultiplier, this.currentScore),
						i = this.difficulty.defaultTimePerIngredient * e;
					return this.difficulty.baseTime + t.ingredients.length * Math.max(i, this.difficulty.minimumTimePerIngredient)
				}, i.prototype._update = function (t, e)
				{
					this.checkBurgerButtonDistance(), this.hintSystem.onUpdate(e)
				}, i.prototype.onIngredientAdded = function (t)
				{
					t >= this.recipe.getCurrentRecipeLength() && this.forceShowButtonOutline(!0)
				}, i.prototype.forceShowButtonOutline = function (t)
				{
					this.serveButton.forceFade(t), this.trashButton.forceFade(t)
				}, i.prototype.checkBurgerButtonDistance = function ()
				{
					this.serveButton.checkBurgerVicinity(this.burger.getBurgerPosition().x, this.burger.getBurgerPosition().y, !this.burger.isBurgerDragging()), this.trashButton.checkBurgerVicinity(this.burger.getBurgerPosition().x, this.burger.getBurgerPosition().y, !this.burger.isBurgerDragging())
				}, i.prototype.onGameStarted = function ()
				{
					this.showNextRecipe()
				}, i.prototype._timeout = function () {}, i.prototype._afterLoss = function () {}, i.prototype._afterWin = function () {}, i.prototype.triggerLose = function ()
				{
					var t = this;
					setTimeout(function ()
					{
						t.sound.play(d.CONST.AUDIO.LOSE,
						{
							volume: 4
						})
					}, 500), this.sendFinalScoreAnalyticsEvent(this.currentScore), this.saveAndDisplayScore(), this.countdown.pause(), this.ingredients.forEach(function (t)
					{
						return t.disable()
					}), this.hintSystem.handleEndGame(), this.serveButton.disableInteractive(), this.trashButton.disableInteractive(), setTimeout(function ()
					{
						t.hand.setFollow(!1), t.add.graphics().fillStyle(5460819, .33).fillRect(0, 0, t.game.renderer.width, t.game.renderer.height).setDepth(500)
					}, 2e3), this.loseGame(2e3)
				}, i.prototype.triggerWin = function () {}, i.prototype.saveAndDisplayScore = function ()
				{
					var t = this.currentScore,
						e = this.getHighscore(),
						i = t > e;
					this.displayScore(t, i, e), i && this.setHighscore(t)
				}, i.prototype.displayScore = function (t, e, i)
				{
					this.endScoreDisplay.text = t.toString();
					var n = this.endScoreDisplay.text.length;
					this.burgerImage.setPosition(this.burgerImage.x + 20 * n, this.burgerImage.y - 1 * n), this.highscoreImage.setPosition(this.burgerImage.x + 54, this.burgerImage.y + 17), this.highscoreImage.setAlpha(e ? 1 : 0)
				}, i.prototype.getCustomLoseUIElements = function ()
				{
					var t = this;
					return this.endScoreDisplay = this.add.text(525, 200, "123",
					{
						fontFamily: "bloggerSans",
						fontSize: 35,
						color: "#ED8340",
						align: "center"
					}).setAngle(-4).setDepth(2), this.burgerImage = this.add.image(600, 214, d.CONST.BURGER.BURGERS_TEXT).setScale(.55).setDepth(2), this.highscoreImage = this.add.image(680, 225, d.CONST.BURGER.NEW_BEST).setDepth(2), this.isRestart || this.registry.get(d.CONST.REGISTRY.ADBLOCKENABLED) ? [new n.default(d.CONST.SCENES.MENU, 515, 375, this, d.CONST.BURGER.ARCADE_BUTTON).setAngle(0).setScale(.55).setDepth(2), new g.default(660, 367, this, d.CONST.BURGER.TRY_AGAIN_BUTTON).setAngle(0).setScale(.55).setDepth(2), this.endScoreDisplay, this.burgerImage, this.highscoreImage] : [new n.default(d.CONST.SCENES.MENU, 588, 412, this, d.CONST.BURGER.BACK_TO_ARCADE).setScale(.55), new c.default(663, 356, this, d.CONST.BURGER.CONTINUE_BUTTON, function ()
					{
						return t.getContinueData()
					}).setScale(.55), new g.default(515, 364, this, d.CONST.BURGER.TRY_AGAIN_BUTTON_2).setScale(.55), this.endScoreDisplay, this.burgerImage, this.highscoreImage]
				}, i.prototype.getContinueData = function ()
				{
					return {
						score: this.currentScore
					}
				}, i.prototype.sendBurgerAnalyticsEvent = function (t, e)
				{
					void 0 === e && (e = !1);
					var i = t ? "Completed" : e ? "TooSlow" : "Wrong",
						n = this.recipe.getCurrentRecipeName(),
						r = t ? this.countdown.getElapsedTime() : this.countdown.getTotalTime();
					l.GameAnalytics.addDesignEvent(this.sceneName + ":" + n + ":" + i, Math.round(r))
				}, i
			}(p.MinigameScene);
		exports.BurgerScene = B;
		var y = function (e)
			{
				function i(t, i, n, r, s, o, u, a)
				{
					var h = e.call(this, a, t, i, o) || this;
					return h.isEnabled = !0, h.maxBurgerDistance = 100, h.isHovering = !1, h.isForcedFadeIn = !1, h.isBurgerClose = !1, h.outlineVisible = !1, h.outline = a.add.image(t + n, i + r, s).setAlpha(0), h.onClickFun = u, h.setInteractive(
					{
						useHandCursor: !0
					}), h.on("pointerup", function ()
					{
						h.isEnabled && (u(), h.isEnabled = !1, setTimeout(function ()
						{
							h.isEnabled = !0
						}, 1500))
					}), h.on("pointerover", function ()
					{
						h.isEnabled && (h.isHovering = !0, h.updateOutline())
					}), h.on("pointerout", function ()
					{
						h.isHovering = !1, h.updateOutline()
					}), a.add.existing(h), h
				}
				return t(i, e), i.prototype.checkBurgerVicinity = function (t, e, i)
				{
					Phaser.Math.Distance.Between(this.x, this.y, t, e) < this.maxBurgerDistance ? (this.isBurgerClose = !0, this.updateOutline(), i && this.isEnabled && this.onClickFun()) : (this.isBurgerClose = !1, this.updateOutline())
				}, i.prototype.updateOutline = function ()
				{
					var t = this.isHovering || this.isForcedFadeIn || this.isBurgerClose;
					this.outlineVisible != t && (this.outlineVisible = t, this.fadeOutline(this.outlineVisible))
				}, i.prototype.fadeOutline = function (t)
				{
					this.fadeTween && this.fadeTween.stop(), this.fadeTween = this.scene.tweens.add(
					{
						targets: this.outline,
						alpha: t ? 1 : 0,
						duration: 200,
						ease: "Quad.easeOut"
					})
				}, i.prototype.forceFade = function (t)
				{
					this.isForcedFadeIn = t, this.updateOutline()
				}, i
			}(Phaser.GameObjects.Image),
			S = function ()
			{
				function t(t)
				{
					this.conf = {
						move:
						{
							x: 427,
							y: 240
						},
						startPos:
						{
							x: 427,
							y: -75
						},
						ease: "Back.easeInOut",
						duration: 500,
						hold: 200
					}, this.scene = t;
					var e = t.add.image(0, 0, d.CONST.BURGER.PLATE),
						i = t.add.image(19, -339, d.CONST.BURGER.HAND).setAngle(90);
					this.cont = t.add.container(this.conf.startPos.x, this.conf.startPos.y).setDepth(9), this.cont.add([e, i])
				}
				return t.prototype.animate = function ()
				{
					this.tween && this.tween.stop(), this.tween = this.scene.tweens.add(
					{
						targets: this.cont,
						x: this.conf.move.x,
						y: this.conf.move.y,
						ease: this.conf.ease,
						duration: this.conf.duration,
						hold: this.conf.hold,
						yoyo: !0
					})
				}, t
			}(),
			m = function ()
			{
				function t(t)
				{
					this.conf = {
						move:
						{
							x: 424,
							y: 400
						},
						startPos:
						{
							x: 424,
							y: 590
						},
						ease: "Back.easeInOut",
						duration: 500,
						hold: 500
					}, this.scene = t, this.bin = t.add.image(this.conf.startPos.x, this.conf.startPos.y, d.CONST.BURGER.TRASH).setScale(1.5).setDepth(7), this.bin_front = t.add.image(this.conf.startPos.x, this.conf.startPos.y, d.CONST.BURGER.TRASH_TOP).setScale(1.5).setDepth(11).setOrigin(.49, .49)
				}
				return t.prototype.animate = function ()
				{
					this.scene.sound.play(d.CONST.AUDIO.TRASH,
					{
						volume: 8
					}), this.tween && this.tween.stop(), this.tween = this.scene.tweens.add(
					{
						targets: [this.bin, this.bin_front],
						x: this.conf.move.x,
						y: this.conf.move.y,
						ease: this.conf.ease,
						duration: this.conf.duration,
						hold: this.conf.hold,
						yoyo: !0
					})
				}, t
			}();
	},
	{
		"../components/BackButton": "m7La",
		"../components/burger/BurgerHintSystem": "miVk",
		"../components/burger/BurgerManager": "Sg00",
		"../components/burger/Countdown": "t5dw",
		"../components/burger/Hand": "Zapb",
		"../components/burger/IngredientSpawner": "sU+w",
		"../components/burger/RecipeManager": "8YQW",
		"../components/ContinueButton": "Bfr5",
		"../components/TryAgainButton": "uCKR",
		"../CONST": "HmIA",
		"./generic/MinigameScene": "Qwd5",
		"gameanalytics": "ublV"
	}],
	"mgQq": [function (require, module, exports)
	{
		"use strict";
		var e = this && this.__extends || function ()
		{
			var e = function (t, o)
			{
				return (e = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (e, t)
					{
						e.__proto__ = t
					} || function (e, t)
					{
						for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
					})(t, o)
			};
			return function (t, o)
			{
				function n()
				{
					this.constructor = t
				}
				e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var t = require("gameanalytics"),
			o = [
			{
				key: "aE",
				value: "true"
			},
			{
				key: "gO",
				value: "3012"
			},
			{
				key: "gB",
				value: "0.96;25;27;8"
			},
			{
				key: "gD",
				value: "80;30;18;80;35"
			},
			{
				key: "gG",
				value: "0.96;4;250;100"
			},
			{
				key: "hBe",
				value: "true"
			}],
			n = function (n)
			{
				function i(e)
				{
					var t = n.call(this, e) || this;
					return t.remoteConfigsAvailable = !1, t.initialized = !1, t
				}
				return e(i, n), i.prototype.initialize = function ()
				{
					var e = this,
						o = {
							onRemoteConfigsUpdated: function ()
							{
								e.onRemoteConfigUpdated()
							}
						};
					t.GameAnalytics.addRemoteConfigsListener(o), this.initialized = !0
				}, i.prototype.onRemoteConfigUpdated = function ()
				{
					this.remoteConfigsAvailable = !0, this.configsCallback && this.configsCallback()
				}, i.prototype.logConfigs = function ()
				{
					console.log("REMOTE CONFIGS "), console.log("aE: " + this.getConfig("aE")), console.log("gO: " + this.getConfig("gO")), console.log("gB: " + this.getConfig("gB")), console.log("gD: " + this.getConfig("gD")), console.log("gG: " + this.getConfig("gG"))
				}, i.prototype.configsAvailable = function ()
				{
					return this.remoteConfigsAvailable
				}, i.prototype.setConfigsCallback = function (e)
				{
					this.configsCallback = e
				}, i.prototype.getConfig = function (e, n)
				{
					void 0 === n && (n = !1);
					var i = o.filter(function (t)
					{
						return t.key == e
					})[0];
					return n ? i.value : t.GameAnalytics.getRemoteConfigsValueAsString(e, i.value)
				}, i
			}(Phaser.Plugins.BasePlugin);
		exports.RemoteConfigPlugin = n;
	},
	{
		"gameanalytics": "ublV"
	}],
	"njVE": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, i)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(e, i)
			};
			return function (e, i)
			{
				function o()
				{
					this.constructor = e
				}
				t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = "audioEnabled",
			i = function (i)
			{
				function o(t)
				{
					var o = i.call(this, t) || this;
					return o.storagePlugin = t.get("StoragePlugin"), o.audioEnabled = JSON.parse(o.storagePlugin.getItem(e, "true")), o.isCommercialBreak = !1, o.pluginManager.game.sound.mute = !o.audioEnabled, o.initialized = !1, o
				}
				return t(o, i), o.prototype.initialize = function ()
				{
					this.initialized = !0
				}, o.prototype.toggleAudioEnabled = function ()
				{
					return this.audioEnabled = !this.audioEnabled, this.storagePlugin.setItem(e, this.audioEnabled.toString()), this.updateAudioMute(), this.isAudioEnabled()
				}, o.prototype.isAudioEnabled = function ()
				{
					return this.audioEnabled
				}, o.prototype.beforeCommercialBreak = function ()
				{
					this.isCommercialBreak = !0, this.updateAudioMute()
				}, o.prototype.afterCommercialBreak = function ()
				{
					this.isCommercialBreak = !1, this.updateAudioMute()
				}, o.prototype.updateAudioMute = function ()
				{
					this.pluginManager.game.sound.mute = !this.audioEnabled || this.isCommercialBreak
				}, o
			}(Phaser.Plugins.BasePlugin);
		exports.AudioPlugin = i;
	},
	{}],
	"sPrd": [function (require, module, exports)
	{
		"use strict";

		function e(e)
		{
			var t = {};

			function r()
			{
				try
				{
					var t = "__some_random_key_you_are_not_going_to_use__";
					return e().setItem(t, t), e().removeItem(t), !0
				}
				catch (r)
				{
					return !1
				}
			}
			return {
				isSupported: r,
				getItem: function (n)
				{
					return r() ? e().getItem(n) : t.hasOwnProperty(n) ? t[n] : null
				},
				setItem: function (n, o)
				{
					r() ? e().setItem(n, o) : t[n] = String(o)
				},
				removeItem: function (n)
				{
					r() ? e().removeItem(n) : delete t[n]
				},
				clear: function ()
				{
					r() ? e().clear() : t = {}
				},
				key: function (n)
				{
					return r() ? e().key(n) : Object.keys(t)[n] || null
				},
				get length()
				{
					return r() ? e().length : Object.keys(t).length
				}
			}
		}
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		}), exports.storageFactory = void 0, exports.storageFactory = e;
	},
	{}],
	"PL6t": [function (require, module, exports)
	{
		"use strict";
		var t = this && this.__extends || function ()
		{
			var t = function (e, o)
			{
				return (t = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
					})(e, o)
			};
			return function (e, o)
			{
				function r()
				{
					this.constructor = e
				}
				t(e, o), e.prototype = null === o ? Object.create(o) : (r.prototype = o.prototype, new r)
			}
		}();
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("storage-factory"),
			o = e.storageFactory(function ()
			{
				return localStorage
			}),
			r = function (e)
			{
				function r(t)
				{
					var o = e.call(this, t) || this;
					return o.initialized = !1, o
				}
				return t(r, e), r.prototype.initialize = function ()
				{
					this.initialized = !0
				}, r.prototype.getItem = function (t, e)
				{
					void 0 === e && (e = "");
					var r = o.getItem(t);
					return r || e
				}, r.prototype.setItem = function (t, e)
				{
					o.setItem(t, e)
				}, r.prototype.removeItem = function (t)
				{
					o.removeItem(t)
				}, r.prototype.isLocalStorageSupported = function ()
				{
					try
					{
						var t = "isLocalStorageSupported";
						return localStorage.setItem(t, t), localStorage.removeItem(t), !0
					}
					catch (e)
					{
						return !1
					}
				}, r
			}(Phaser.Plugins.BasePlugin);
		exports.StoragePlugin = r;
	},
	{
		"storage-factory": "sPrd"
	}],
	"jP6t": [function (require, module, exports)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: !0
		});
		var e = require("./scenes/LoadScene"),
			n = require("./scenes/MenuScene"),
			r = require("./scenes/SoundtrackScene"),
			i = require("./scenes/BirthScene"),
			c = require("./scenes/SchoolScene"),
			s = require("./scenes/PubertyScene"),
			u = require("./scenes/TalkScene"),
			S = require("./scenes/CoffeeScene"),
			a = require("./scenes/FindherScene"),
			g = require("./scenes/MarriageScene"),
			t = require("./scenes/KidsScene"),
			l = require("./scenes/CreditsScene"),
			o = require("./scenes/DieScene"),
			d = require("./scenes/PillsScene"),
			q = require("./scenes/MidlifeScene"),
			P = require("./scenes/GrandchildrenScene"),
			p = require("./scenes/BeerpongScene"),
			m = require("./scenes/ProgressiveLoadScene"),
			h = require("./scenes/InstrumentScene"),
			f = require("./scenes/ArcadeMinigameLoadingScene"),
			M = require("./scenes/GridFillScene"),
			C = require("./scenes/DistractionScene"),
			k = require("./scenes/BurgerScene"),
			y = require("./plugins/RemoteConfigPlugin"),
			B = require("./plugins/AudioPlugin"),
			L = require("./plugins/StoragePlugin"),
			b = new Phaser.Game(
			{
				width: 853,
				height: 480,
				plugins:
				{
					global: [
					{
						key: "StoragePlugin",
						plugin: L.StoragePlugin,
						mapping: "storagePlugin",
						start: !0
					},
					{
						key: "RemoteConfigPlugin",
						plugin: y.RemoteConfigPlugin,
						mapping: "remoteConf",
						start: !0
					},
					{
						key: "AudioPlugin",
						plugin: B.AudioPlugin,
						mapping: "audioPlugin",
						start: !0
					}]
				},
				scale:
				{
					mode: Phaser.Scale.FIT
				},
				scene: [e.LoadScene, m.ProgressiveLoadScene, r.SoundtrackScene, n.MenuScene, f.ArcadeMinigameLoadingScene, i.BirthScene, u.TalkScene, c.SchoolScene, s.PubertyScene, a.FindherScene, p.BeerpongScene, S.CoffeeScene, g.MarriageScene, t.KidsScene, q.MidlifeScene, P.GrandchildrenScene, d.PillsScene, o.DieScene, l.CredistScene, h.InstrumentScene, M.GridFillScene, C.DistractionScene, k.BurgerScene],
				physics:
				{
					default: "matter",
					matter:
					{
						debug: !1
					}
				}
			});
	},
	{
		"./scenes/LoadScene": "G1z3",
		"./scenes/MenuScene": "OuK+",
		"./scenes/SoundtrackScene": "QxR8",
		"./scenes/BirthScene": "0w1H",
		"./scenes/SchoolScene": "P8E+",
		"./scenes/PubertyScene": "cK6z",
		"./scenes/TalkScene": "vTe4",
		"./scenes/CoffeeScene": "46sR",
		"./scenes/FindherScene": "BKKe",
		"./scenes/MarriageScene": "Erhn",
		"./scenes/KidsScene": "F9xU",
		"./scenes/CreditsScene": "FSea",
		"./scenes/DieScene": "L3T3",
		"./scenes/PillsScene": "pzlu",
		"./scenes/MidlifeScene": "HOaP",
		"./scenes/GrandchildrenScene": "hwyb",
		"./scenes/BeerpongScene": "WZbq",
		"./scenes/ProgressiveLoadScene": "Y/W/",
		"./scenes/InstrumentScene": "t8lp",
		"./scenes/ArcadeMinigameLoadingScene": "+4WN",
		"./scenes/GridFillScene": "IUNx",
		"./scenes/DistractionScene": "vbrQ",
		"./scenes/BurgerScene": "qS0G",
		"./plugins/RemoteConfigPlugin": "mgQq",
		"./plugins/AudioPlugin": "njVE",
		"./plugins/StoragePlugin": "PL6t"
	}]
},
{}, ["jP6t"], null)
//# sourceMappingURL=main.7fc9600a.js.map