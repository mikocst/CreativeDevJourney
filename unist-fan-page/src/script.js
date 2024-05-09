const sidebar = document.querySelector(".sidebar")
const menuBtn = document.querySelector(".menu-button")

function showSideBar() {
    sidebar.style.display = "flex"
}

function hideSideBar() {
    sidebar.style.display = "none"
}

document.addEventListener('click', e => {
    if (!menuBtn.contains(e.target) && e.target !== menuBtn){
        sidebar.style.display = "none"
    }
})

let changeCharacter = (character) => {
    {
        switch(character) 
        {
            case "tsurugi":
                document.getElementById("full").src = "../static/characters/tsurugi-full.svg";
                document.getElementById("details").style.backgroundColor = "#6D3018"
                document.getElementById("name").innerHTML = "Tsurugi";
                document.getElementById("status").innerHTML = "Available"
                document.getElementById("status").style.backgroundColor = "green"
                document.getElementById('character-bio').innerHTML = "As Hyde's friend from high school, he offers a play style suited for beginners with a lot of depth. Through his approach options, meterless reversals, and guard points, you'll be able to suppress your opponents with unstoppable pressure."
                break;  

            case "kaguya":
                document.getElementById("full").src = "../static/characters/kaguya-full.svg";
                document.getElementById("details").style.backgroundColor = "#3E4266"
                document.getElementById("name").innerHTML = "Kaguya";
                document.getElementById("status").innerHTML = "Available"
                document.getElementById("status").style.backgroundColor = "green"
                document.getElementById("character-bio").innerHTML = "Guns and one of the most unique movement mechanics in the game is Kaguya herself. Mix your opponents through swift movement and projectiles and maximize the control you seize of the GRD to overpower your opponents.";
                break;

            case "kuon":
                    document.getElementById("full").src = "../static/characters/kuon-full.svg";
                    document.getElementById("details").style.backgroundColor = "#750115"
                    document.getElementById("name").innerHTML = "Kuon";
                    document.getElementById("status").innerHTML = "Available"
                    document.getElementById("status").style.backgroundColor = "green"
                    document.getElementById("character-bio").innerHTML = "Blades on blades like unlimited blade works. Summon your blades and take control of the screen through large normals but be careful about committing as your opponent may punish you heavily from a missed swing. Keep them out to the best of your abilities.";
                    break;    

            case "uzuki":
                    document.getElementById("full").src = "../static/characters/uzuki-full.svg";
                    document.getElementById("details").style.backgroundColor = "#A05360"
                    document.getElementById("name").innerHTML = "Uzuki";
                    document.getElementById("status").innerHTML = "August 2024"
                    document.getElementById("status").style.backgroundColor = "red"
                    document.getElementById("character-bio").innerHTML = "Fighting alongside Hilda and other spirits, Uzuki plans to unleash her wrath on the universe. As Undernight In Birth's first dlc character, can you defend against her mixups with her summons?";
                    break; 
            
            case "ogre":
                    document.getElementById("full").src = "../static/characters/ogre-full.svg";
                    document.getElementById("details").style.backgroundColor = "#32182A"
                    document.getElementById("name").innerHTML = "Ogre";
                    document.getElementById("status").innerHTML = "February 2025"
                    document.getElementById("status").style.backgroundColor = "red"
                    document.getElementById("character-bio").innerHTML = "After his battle with Amnesia, Ogre fell into the abyss. However, he walks the Earth once again for reasons unknown. What new powers has he gained after spending time in the abyss?";
                        break; 
            
            case "izumi":
                    document.getElementById("full").src = "../static/characters/izumi-full.svg";
                    document.getElementById("details").style.backgroundColor = "#898DC1"
                    document.getElementById("name").innerHTML = "Izumi";
                    document.getElementById("status").innerHTML = "August 2025"
                    document.getElementById("status").style.backgroundColor = "red"
                    document.getElementById("character-bio").innerHTML = "Last but not least, the last character to be introduced into the roster for season one. As the weilder of the key to the door of Night, her intentions are unknown. What is she doing?";
                        break; 
        }
    }
}