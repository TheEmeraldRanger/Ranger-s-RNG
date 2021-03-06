var story = document.getElementById("storyGen")
var backstory = document.getElementById("backstoryGen")
var scenario = document.getElementById("scenarioGen")
var event = document.getElementById("eventGen")

var result = document.getElementById("storyresult")


story.onclick = function() {
    var rando = Math.floor(Math.random() * 4)+1
    switch(rando){
        case 1:
            result.textContent = "The " + nameFactionAdj() + " " + nameFaction() + " of " + namePlace() + " has declared war against The " + findAbj() + " " + nameFactionAdj() +" " + nameFaction() + " of " + namePlace() + ". Your team of adventurers are quickly pulled into the fight as conscripts."
            break
        case 2:
            result.textContent = "The " + findAbj() + " Days are coming, your team of fellow adventurers venture out to prepare for them as well as hopefully obtain glory in the land of " + namePlace()
            break
        case 3:
            result.textContent = "Your village has been raided while your team of adventurers were out hunting. The matter now is to what to do to start over your lives, as your only belongings now are your weapons and some money."
            break
        case 4:
            result.textContent = "War has broken out in the land of " + namePlace() + ". Your team of adventurers just been pulled into conscription in the " + nameFactionAdj() + " " + nameFaction() + " of " + namePlace() + ". Good luck as war seems to be coming to your faction, so what will you all do to prepare?"
            break
    }
}
backstory.onclick = function() {
    var rando = Math.floor(Math.random() * 12)+1
    switch(rando){
        case 1:
            result.textContent = "You came from the " + nameFactionAdj() + " " + nameFaction() + " of " + namePlace() + ". You are pretty good at " + findSkillz() + " and pretty bad at " + findSkillz() + "."
            break
        case 2:
            result.textContent = "You've been recently exiled from the " + nameFactionAdj() + " " + nameFaction() + " of " + namePlace() + " and seek to obtain redemption. The reason for being exiled is attempted robbery of a high ranking official. You are pretty good at " + findSkillz() + " and pretty bad at " + findSkillz() + "."
            break
        case 3:
            result.textContent = "You came from a freezer in the supermarket. You are pretty good at " + findSkillz() + " and pretty bad at " + findSkillz() + "."
            break
        case 4:
            result.textContent = "You came from the long lost lands of " + namePlace() + ". You are pretty good at " + findSkillz() + " and pretty bad at " + findSkillz() + "."
            break
        case 5:
            result.textContent = "You're a military officer of the " + nameFactionAdj() + " " + nameFaction() + ". You are pretty good at " + findSkillz() + " and pretty bad at " + findSkillz() + "."
            break
        case 6:
            result.textContent = "You're secretly a wanted person, hunted by bounty hunters of many lands. You are pretty good at " + findSkillz() + " and pretty bad at " + findSkillz() + "."
            break
        case 7:
            result.textContent = "You came from a joke that went too far. You are pretty good at " + findSkillz() + " and pretty bad at " + findSkillz() + "."
            break
        case 8:
            result.textContent = "You came from a noble family and have legal ownership of the fief of " + namePlace() + ". You serve the national leader(s) of " + nameFactionAdj() + " " + nameFaction() + ". You are pretty good at " + findSkillz() + " and pretty bad at " + findSkillz() + "."
            break
        case 9:
            result.textContent = "You came from a noble family, but have been betrayed by your peers. You were exiled from your home country, The " + nameFactionAdj() + " " + nameFaction() + ". You are pretty good at " + findSkillz() + " and pretty bad at " + findSkillz() + "."
            break
        case 10:
            result.textContent = "You don't remember your past life, but you are glad that you've joined the guild of adventurers. You are pretty good at " + findSkillz() + " and pretty bad at " + findSkillz() + "."
            break
        case 11:
            result.textContent = "You originated from The " + nameFactionAdj() + " " + nameFaction() + " of " + namePlace() + ". You are pretty good at " + findSkillz() + " and pretty bad at " + findSkillz() + "."
            break
        case 12:
            result.textContent = "You were looking for a way to join the crusades, but wounded up joining the Adventurers' Guild. You are pretty good at " + findSkillz() + " and pretty bad at " + findSkillz() + "."
     }
}

event.onclick = function(){
    var randnum = Math.floor(Math.random() * 40)+1
    switch(randnum){
        case 1:
            result.textContent = "//BREAKING NEWS// This country has been invaded by " + nameFactionAdj() + " " + nameFaction() + " of " + namePlace() + ". The reason for invasion was " + nameReason();
            break;
        case 2:
            result.textContent = "There's a concert being held at a nearby city. Would your team like to go?";
            break;
        case 3:
            result.textContent = "//BREAKING NEWS// The country's " + nameImportantPerson() + " has died. Currently, people are debating over a successor."
            break;
        case 4:
            result.textContent = "A battle-royale-style tournament is being hosted at the town/city you're currently at. The rewards are promising, so would you like to attend."
            break;
        case 5:
            result.textContent = "A crime has been reported in your location. Would you like to assist the local guard in this matter?"
            break;
        case 6:
            result.textContent = "A bounty has been set on one of your teammates."
            break;
        case 7:
            result.textContent = "A nearby town/city has just been attacked by raiders."
            break;
        case 8:
            result.textContent = "A teammate has just been pickpocketed and lost a chunk of their funds."
            break;
        case 9:
            result.textContent = "As your team wandered, you've just came across a meme caravan selling goods. Would you like to check it out?"
            break;
        case 10:
            result.textContent = "Your city is starting to be sieged."
            break;
        case 11:
            result.textContent = "You've just found a lost wallet, what do you do?"
            break;
        case 12:
            result.textContent = "The city's " + nameImportantPerson() + " has just been kidnapped!"
            break;
        case 13:
            result.textContent = "Your team has just been accused of a crime and is now surrounded by the town guard."
            break;
        case 14:
            result.textContent = "Nothing happened today."
            break;
            
    }
}

scenario.onclick = function(){
    var rando = Math.floor(Math.random() * 10)+1
    switch(rando){
        case 1:
            result.textContent = "Your team has spotted smoke in the horizon.";
            break;
        case 2:
            result.textContent = "Your team has just been ambushed while travelling.";
            break;
        case 3:
            result.textContent = "While your team is traveling, you have come across a caravan being robbed.";
            break;
        case 4:
            result.textContent = "Your team spotted several travellers in distress while traveling.";
            break;
        case 5:
            result.textContent = "Your team spotted a mysterious nearby cave while travelling.";
            break;
        case 6:
            result.textContent = "Nothing happened."
            break;
        case 7:
            result.textContent = "Your team has been ambushed by wild animals."
            break;
        case 8:
            result.textContent = "Your team has been ambushed by bandits."
            break;
        case 9:
            result.textContent = "The sounds of sword-edges meeting and shouts of fighting can be heard nearby."
            break;
        case 10:
            result.textContent = "Your has just been ambushed by rogues."
            break;
    }
}

function findAbj() {
    var random = Math.floor(Math.random() * 24)+1
    var abjW = 0;
    switch(random){
        case 1:
            abjW = "Merciful";
            return abjW;
        case 2:
            abjW = "Bloody";
            return abjW;
        case 3:
            abjW = "Hungry";
            return abjW;
        case 4:
            abjW = "Annoying";
            return abjW;
        case 5:
            abjW = "Merciless";
            return abjW;
        case 6:
            abjW = "Evil";
            return abjW;
        case 7:
            abjW = "Derpy";
            return abjW;
        case 8:
            abjW = "Rebellious";
            return abjW;
        case 9:
            abjW = "Tanky";
            return abjW;
        case 10:
            abjW = "Young";
            return abjW;
        case 11:
            abjW = "Old";
            return abjW;
        case 12:
            abjW = "New";
            return abjW;
        case 13:
            abjW = "Explosive";
            return abjW;
        case 14:
            abjW = "Flammable";
            return abjW;
        case 15:
            abjW = "Poisonous";
            return abjW;
        case 16:
            abjW = "Bright";
            return abjW;
        case 17:
            abjW = "Dark";
            return abjW;
        case 18:
            abjW = "Sad";
            return abjW;
        case 19:
            abjW = "Happy";
            return abjW;
        case 20:
            abjW = "Heroic";
            return abjW;
        case 21:
            abjW = "Defensive";
            return abjW;
        case 22:
            abjW = "Offensive";
            return abjW;
        case 23:
            abjW = "Tough"
            return abjW;
        case 24:
            abjW = "Talking"
            return abjW;
    }
}

function nameFaction(){
    var random = Math.floor(Math.random() * 24)+1
    switch (random){
        case 1:
            F = "Union";
            return F;
        case 2:
            F = "Federation";
            return F;
        case 3: 
            F = "Alliance";
            return F;
        case 4:
            F = "Kingdom";
            return F;
        case 5:
            F = "Republic";
            return F;
        case 6:
            F = "Empire";
            return F;
        case 7:
            F = "Country"
            return F;
        case 8:
            F = "Council"
            return F;
        case 9:
            F = "School";
            return F;
        case 10:
            F = "Flotilla";
            return F;
        case 11:
            F = "Album";
            return F;
        case 12:
            F = "Theatre";
            return F;
        case 13:
            F = "Bois";
            return F;
        case 14:
            F = "City-State";
            return F;
        case 15:
            F = "Army";
            return F;
        case 16:
            F = "Fleet"
            return F;;
        case 17:
            F = "Nation";
            return F;
        case 18:
            F = "Confederacy";
            return F;
        case 19:
            F = "Organization";
            return F;
        case 20:
            F = "Group";
            return F;
        case 21:
            F = "Fields";
            return F;
        case 22:
            F = "Tribe";
            return F;
        case 23:
            F = "Guild";
            return F;
        case 24:
            F = "Democracy";
            return F;
    }
}

function nameFactionAdj(){
    var random = Math.floor(Math.random() * 34)+1
    switch (random){
        case 1:
            R = "Human";
            return R;
        case 2:
            R = "Elven";
            return R;
        case 3:
            R = "Orcish";
            return R;
        case 4:
            R = "Dwarven";
            return R;
        case 5:
            R = "Magical";
            return R;
        case 6: 
            R = "Goblin";
            return R;
        case 7:
            R = "Golem";
            return R;
        case 8:
            R = "Skybound";
            return R;
        case 9:
            R = "Seaside";
            return R;
        case 10:
            R = "Honorable";
            return R;
        case 11:
            R = "Barbaric";
            return R;
        case 12:
            R = "Corrupt";
            return R;
        case 13:
            R = "Holy";
            return R;
        case 14:
            R = "Dark";
            return R;
        case 15:
            R = "Student";
            return R;
        case 16:
            R = "Meme"
            return R;
        case 17:
            R = "Emo"
            return R;
        case 18:
            R = "Aaron's"
            return R;
        case 19:
            R = "Automation";
            return R;
        case 20:
            R = "Spicy";
            return R;
        case 21:
            R = "Power-hungry";
            return R;
        case 22:
            R = "Hopeful";
            return R;
        case 23:
            R = "Dying";
            return R;
        case 24:
            R = "Funny"
            return R;
        case 25:
            R = "Happy"
            return R;
        case 26:
            R = "Sad"
            return R;
        case 27:
            R = "Economic"
            return R;
        case 28:
            R = "Powerful"
            return R;
        case 29:
            R = "Heroic"
            return R;
        case 30:
             R = "Great"
             return R;
        case 31:
            R = "People's";
            return R;
        case 32:
            R = "Loli's";
            return R;
        case 33:
            R = "Traps'";
            return R;
        case 34:
            R = "Patriotic";
            return R;
    }
}

function namePlace() {
    var random = Math.floor(Math.random() * 25)+1
    switch(random){
        case 1:
            P = "Arkandia";
            return P;
        case 2:
            P = "Arcadia";
            return P;
        case 3:
            P = "the West";
            return P;
        case 4:
            P = "the East";
            return P;
        case 5:
            P = "the North";
            return P;
        case 6:
            P = "the South";
            return P;
        case 7:
            P = "Iberialand";
            return P;
        case 8:
            P = "Holla";
            return P;
        case 9:
            P = "Pearce";
            return P;
        case 10:
            P = "Hollia";
            return P;
        case 11:
            P = "Aurora";
            return P;
        case 12:
            P = "Kamino";
            return P;
        case 13:
            P = "Sta";
            return P;
        case 14:
            P = "Nah";
            return P;
        case 15:
            P = "Kenobia";
            return P;
        case 16:
            P = "Rexia";
            return P;
        case 17:
            P = "Northland";
            return P;
        case 18:
            P = "Westland";
            return P;
        case 19: 
            P = "Eastland";
            return P;
        case 20:
            P = "Southland";
            return P;
        case 21:
            P = "Secura";
            return P;
        case 22:
            P = "Windland";
            return P;
        case 23:
            P = "Yodia";
            return P;
        case 24:
            P = "Tanland";
            return P;
        case 25:
            P = "Skyia"
            return P;
    }
}

function findSkillz() {
    var random = Math.floor(Math.random() * 90)+1
    switch(random){
        case 1:
            S = "nothing apparently"
            return S
        case 2:
            S = "marksmanship"
            return S
        case 3:
            S = "close combat"
            return S
        case 4:
            S = "staying alive"
            return S
        case 5:
            S = "persuasion"
            return S
        case 6:
            S = "being hated"
            return S
        case 7:
            S = "crafting"
            return S
        case 8:
            S = "finding things"
            return S
        case 9: 
            S = "strength"
            return S
        case 10:
            S = "healing"
            return S
        case 11:
            S = "making the worst decisions and surviving"
            return S
        case 12:
            S = "speed"
            return S
        case 13:
            S = "regreting everything"
            return S
        case 14:
            S = "surviving the wilderness"
            return S
        case 15:
            S = "international politics"
            return S
        case 16:
            S = "cheering teammates up"
            return S
        case 17:
            S = "just being lucky"
            return S
        case 18:
            S = "spotting targets"
            return S
        case 19:
            S = "making bad jokes at the worst times possible"
            return S
        case 20:
            S = "bribery"
            return S
        case 21:
            S = "management"
            return S
        case 22:
            S = "leadership"
            return S
        case 23:
            S = "living in a freezer (apparently)"
            return S
        case 24:
            S = "living in an hot oven (apparently)"
            return S
        case 25:
            S = "being happy no matter the situation"
            return S
        case 26:
            S = "eating"
            return S
        case 27:
            S = "bearing no shame"
            return S
        case 28:
            S = "charisma"
            return S
        case 29:
            S = "acting"
            return S
        case 30:
            S = "recruiting"
            return S
        case 31:
            S = "making money"
            return S
        case 32:
            S = "detecting traps"
            return S
        case 33:
            S = "disabling traps"
            return S
        case 34:
            S = "traps in general as a topic"
            return S
        case 35:
            S = "building things"
            return S
        case 36:
            S = "'accidentially' going blue on blue"
            return S
        case 37:
            S = "accidentially killing my teammates many times"
            return S
        case 38:
            S = "politics"
            return S
        case 39:
            S = "fire magic"
            return S
        case 40:
            S = "water magic"
            return S
        case 41:
            S = "frost magic"
            return S
        case 42:
            S = "thunder magic"
            return S
        case 43:
            S = "poison magic"
            return S
        case 44: 
            S = "technology"
            return S
        case 45:
            S = "holy magic"
            return S
        case 46:
            S = "dark magic"
            return S
        case 47:
            S = "being an emo"
            return S
        case 48:
            S = "drinking and not ending up drunk"
            return S
        case 49:
            S = "RNG (hopefully...)"
            return S
        case 50:
            S = "not being ok"
            return S
        case 51:
            S = "reviving teammates"
            return S
        case 52:
            S = "falling"
            return S
        case 53:
            S = "tripping on air"
            return S
        case 54:
            S = "dropping the beat"
            return S
        case 55:
            S = "being hunted"
            return S
        case 56:
            S = "memes"
            return S
        case 57:
            S = "being considerate"
            return S
        case 58:
            S = "situational awareness"
            return S
        case 59:
            S = "whining"
            return S
        case 60:
            S = "not thinking before speaking"
            return S
        case 61:
            S = "chaos"
            return S
        case 62:
            S = "being afraid of everything"
            return S
        case 63:
            S = "taking things very seriously"
            return S
        case 64:
            S = "taming animals"
            return S
        case 65:
            S = "collaborating with animals"
            return S
        case 66:
            S = "teamwork"
            return S
        case 67:
            S = "singing"
            return S
        case 68:
            S = "tripping"
            return S
        case 69:
            S = "explaining things"
            return S 
        case 70:
            S = "teaching"
            return S
        case 71:
            S = "showing appreciation"
            return S
        case 72:
            S = "following the law"
            return S
        case 73:
            S = "getting exiled"
            return S
        case 74:
            S = "planning for retirement"
            return S
        case 75:
            S = "with animals in general"
            return S
        case 76:
            S = "decisions"
            return S
        case 77:
            S = "making hard decisions"
            return S
        case 78:
            S = "breaking stuff"
            return S
        case 79:
            S = "rage"
            return S
        case 80:
            S = "anger management"
            return S
        case 81:
            S = "trolling"
            return S
        case 82:
            S = "pranks"
            return S
        case 83:
            S = "breaking equipment"
            return S
        case 84:
            S = "saving people"
            return S
        case 85:
            S = "cosplaying"
            return S
        case 86:
            S = "blowing stuff up"
            return S
        case 87:
            S = "surviving riots";
            return S;
        case 88:
            S = "deep fried memes"
            return S;
        case 89:
            S = "being a meme historian";
            return S;
        case 90:
            S = "being useless";
            return S;
        case 91:
            S = "being a joke";
            return S;
        case 92:
            S = "getting targeted too often";
            return S;
        case 93:
            S = "being a hero";
            return S;
        case 94:
            S = "being a villain";
            return S;
        case 95:
            S = "idk (how would I know *shrugs*)";
            return S;
        case 96:
            S = "history";
            return S;
        case 97:
            S = "#noregrets";
            return S;
        case 98:
            S = "social media";
            return S;
        case 99:
            S = "getting a divorce";
            return S;
        case 100:
            S = "obtaining intel";
            return S;
        case 101:
            S = "stuff...";
            return S;
        }  
}


function nameReason() {
    var random = Math.floor(Math.random() * 20)+1
    var RE = 0
    switch(random){
        case 1:
            RE = "violation of an international treaty";
            return RE;
        case 2:
            RE = "totally not oil";
            return RE;
        case 3:
            RE = "RREEEEEEEEEEEEEEEE";
            return RE;
        case 4:
            RE = "no apparent reason";
            return RE;
        case 5:
            RE = "to obtain land";
            return RE;
        case 6:
            RE = "conquest";
            return RE;
        case 7:
            RE = "a reason that people forgot already";
            return RE;
        case 8:
            RE = "military buildup that places an ally/self in possible danger";
            return RE;
        case 9:
            RE = "terrorism";
            return RE;
        case 10:
            RE = "supporting terrorism";
            return RE;
        case 11:
            RE = "supporting the Dark Arts";
            return RE;
        case 12:
            RE = "being dangerous";
            return RE;
        case 13:
            RE = "having/researching/producing dangerous weapons";
            return RE;
        case 14:
            RE = "a horrible reason";
            return RE;
        case 15:
            RE = "resources";
            return RE;
        case 16:
            RE = "a dishonest reason";
            return RE;
        case 17:
            RE = "treason";
            return RE;
    }
}

function nameImportantPerson() {
    var random = Math.floor(Math.random() * 5)+1
    var P = 0
    switch(random){
        case 1:
            P = "king";
            return P;
        case 2:
            P = "prince";
            return P;
        case 3:
            P = "president";
            return P;
        case 4:
            P = "prime minister";
            return P;
        case 5:
            P = "random famous person that's kinda well known."
            return P;
    }
}
