function showSideBar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}

function hideSideBar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
}

let changeCharacter = (character) => {
    {
        switch(character) 
        {
            case "tsurugi":
                document.getElementById("full").src = "../static/characters/tsurugi-full.svg";
                document.getElementById("name").innerHTML = "Tsurugi";
                break;  

            case "kaguya":
                document.getElementById("full").src = "../static/characters/kaguya-full.svg";
                document.getElementById("name").innerHTML = "Kaguya";
                break;
        }
    }
}