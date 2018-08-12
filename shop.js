var shop = document.getElementById("shopGen")

var sresult = document.getElementById("shopresult")

shop.onclick = function() {
    sresult.textContent = "The shop currently has the following in stock: " + findWAbj() + " " + nameMaterial() + " " + chooseEquip() + ", " + findWAbj() + " " + nameMaterial() + " " + chooseEquip() + ", " + findWAbj() + " " + nameMaterial() + " " + chooseEquip() + ", " + findWAbj() + " " + nameMaterial() + " " + chooseEquip() + ", " + findWAbj() + " " + nameMaterial() + " " + chooseEquip() + "."
}

function chooseEquip(){
    var rmelee = Math.floor(Math.random() * 18)+1
    var rranged = Math.floor(Math.random() * 18)+1
    var rmagic = Math.floor(Math.random() * 18)+1
    var rarmor = Math.floor(Math.random() * 18)+1
    var ritemclass = Math.floor(Math.random()*4)+1
    switch(ritemclass){
        case 1:
            //Melee Weapons
            switch(rmelee){
                case 1:
                    i = "Basic Sword"
                    return i
                case 2:
                    i = "Spear"
                    return i
                case 3:
                    i = "Knife"
                    return i
                case 4:
                    i = "Polearm"
                    return i
                case 5:
                    i = "Lance"
                    return i
                case 6:
                    i = "Jousting Lance"
                    return i
                case 7:
                    i = "Pike"
                    return i
                case 8:
                    i = "Shortsword"
                    return i
                case 9:
                    i = "Longsword"
                    return i
                case 10:
                    i = "Axe"
                    return i
                case 11:
                    i = "Battleaxe"
                    return i
                case 12:
                    i = "Dagger"
                    return i
                case 13:
                    i = "Saber"
                    return i
                case 14:
                    i = "Cavalry Saber"
                    return i
                case 15:
                    i = "Hammer"
                    return i
                case 16:
                    i = "Battle Hammer"
                    return i 
                case 17:
                    i = "Broadsword"
                    return i
                case 18:
                    i = "Gladius"
                    return i
            }
        case 2:
            //Ranged Weapons
            switch(rranged){
                case 1:
                case 2:
                case 3:
                case 4:
                    i = "pistol"
                    return i
                case 5:
                    i = "prototype pistol"
                    return i
                case 6:
                    i = "repeating pistol"
                    return i
                case 7:
                case 8:
                case 9:
                    i = "rifle"
                    return i
                case 10:
                    i = "lever-action"
                    return i
                case 11:
                    i = "bolt-action"
                    return i
                case 12:
                case 13:
                case 14:
                    i = "blunderbuss"
                    return i
                case 15:
                    i = "double-barrel"
                    return i
                case 16:
                case 17:
                case 18:
                    i = "bow"
                    return i
            }
        case 3:
            //Magic Weapons
            switch(rmagic){
                case 1:
                case 2:
                case 3:
                    i = "orb";
                    return i;
                case 4:
                case 5:
                case 6:
                    i = "wand";
                    return i;
                case 7:
                case 8:
                    i = "staff";
                    return i;
                case 9:
                case 10:
                    i = "book";
                    return i;
                case 11:
                case 12:
                    i = "spellbook";
                    return i;
                case 13:
                    i = "enchanting orb"
                    return i;
                case 14:
                    i = "mana orb";
                    return i;
                case 15:
                    i = "healing staff";
                    return i;
                case 16:
                    i = "orb of knowledge";
                    return i;
                case 17:
                    i = "enhanced wand";
                    return i;
                case 18:
                    i = "charming staff";
                    return i;
            }
        case 4:
            //Armor
            switch(rarmor){
                case 1:
                    i = "chainmail"
                    return i;
                case 2:
                    i = "breastplate"
                    return i;
                case 3:
                    i = "tunic";
                    return i;
                case 4:
                    i = "cloak";
                    return i;
                case 5:
                    i = "jacket"
                    return i;
                case 6:
                    i = "pants";
                    return i;
                case 7:
                    i = "chainmail leggings";
                    return i;
                case 8:
                    i = "heavily armored leggings";
                    return i;
                case 9:
                    i = "hood";
                    return i;
                case 10:
                    i = "hat";
                    return i;
                case 11:
                    i = "helm";
                    return i;
                case 12:
                    i = "helmet";
                    return i;
                case 13:
                    i = "vest";
                    return i;
                case 14:
                    i = "arm paddings";
                    return i;
                case 15:
                    i = "leg paddings";
                    return i;
                case 16:
                    i = "pads";
                    return i;
                case 17:
                    i = "shorts";
                    return i;
                case 18:
                    i = "shirt";
                    return i;
            }
    }
}
function nameMaterial(){
    var random = Math.floor(Math.random() * 32)+1
    switch(random){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            M = "Wooden";
            return M;
        case 6:
        case 7:
            M = "Rusty";
            return M;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
            M = "Bronze";
            return M;
        case 19:
        case 20:
        case 21:
        case 22:
            M = "Iron";
            return M;
        case 23:
        case 24:
        case 25:
            M = "Steel";
            return M;
        case 26:
            M = "Jewel";
            return M;
        case 27:
            M = "Golden";
            return M;
        case 28:
            M = "Diamond";
            return M;
        case 29:
            M = "Soulstone";
            return M;
        case 30:
            M = "Emerald";
            return M;
        case 31:
            M = "Ruby"
            return M;
        case 32:
            M = "Sapphire"
            return M;
    }
}
function findWAbj() {
    var random = Math.floor(Math.random()*48)+1
    switch(random){
        case 1:
        abjW = "Merciful";
        return abjW;
    case 2:
        abjW = "Bloody";
        return abjW;
    case 3:
        abjW = "Factory New";
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
        abjW = "Magical";
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
        abjW = "Military";
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
    case 25:
        abjW = "Vampiric";
        return abjW;
    case 26:
        abjW = "Well Crafted";
        return abjW;
    case 27:
        abjW = "Homemade";
        return abjW
    case 28:
        abjW = "Sharp";
        return abjW;
    case 29:
        abjW = "Honorable";
        return abjW;
    case 30:
        abjW = "Hot"
        return abjW;
    case 31:
        abjW = "Expensive"
        return abjW;
    case 32:
        abjW = "Light"
        return abjW;
    case 33:
        abjW = "Heavy";
        return abjW;
    case 34:
        abjW = "Imported";
        return abjW;
    case 35:
        abjW = "Balanced";
        return abjW;
    case 36:
        abjW = "Skillful";
        return abjW;
    case 37:
        abjW = "Engineer's";
        return abjW;
    case 38:
        abjW = "Knight's";
        return abjW;
    case 39:
        abjW = "Guard's";
        return abjW;
    case 40:
        abjW = "Standard";
        return abjW;
    case 41:
        abjW = "Outlaw's";
        return abjW;
    case 42:
        abjW = "Soldier's";
        return abjW;
    case 43:
        abjW = "Militiaman's";
        return abjW;
    case 44:
        abjW = "Builder's";
        return abjW;
    case 45:
        abjW = "Master's";
        return abjW;
    case 46:
        abjW = "King's";
        return abjW;
    case 47:
        abjW = "Craftsman's";
        return abjW;
    case 48:
        abjW = "Blacksmith's";
        return abjW;
    }
}
