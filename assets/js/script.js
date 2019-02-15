var life = 1

function addGhost(){

    var ghost = document.createElement("img");
    ghost.setAttribute("id", "ghost");
    ghost.setAttribute("src", "assets/imagens/fantasma.gif");
    var dvPrincipal = document.getElementById("container");

    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 450);

    ghost.setAttribute("style", "left: " + p1 + "px; top: " + p2 + "px;");
    ghost.setAttribute("onclick", "kickout(this)");


    if(document.getElementById("ghost")) {

        document.getElementById("ghost").remove();

        if(life > 3) {
            window.location.href="fim.html"
        } else {
            document.getElementById("v" + life).src = "assets/imagens/coracao_vazio.png";
            life++
        }
    }

    dvPrincipal.appendChild(ghost);

}

function kickout(obj) {

    var dvPrincipal = document.getElementById("container");
    var scores = document.getElementById("score").innerHTML ++;
    dvPrincipal.removeChild(obj);

}

function start() {
    setInterval(addGhost, 1200);
}

function startGame(){
    window.location.href = "app.html";
}

