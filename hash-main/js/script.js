let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#btn-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

//contador de jogadas
let player1 = 0;
let player2 = 0;




// adicionar click box
for(let i = 0; i < boxes.length; i++){

    boxes[i].addEventListener("click", function(){
         
        let el = checkEl(player1, player2);
        
        if(this.childNodes.length == 0){
            let cloneEl = el.cloneNode(true);

                this.appendChild(cloneEl);

        //computing
            if(player1 == player2){
                player1++;

                if(secondPlayer == 'ai-player'){
                    //execute play
                    computerPlay()

                    player2++;
                }

            }else{
                player2++;
            }

            // checking winner
            checkWinCondition()
        }
    });
}
// select game mode event
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        
        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = 'none';
        }

        setTimeout( function(){

            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500)
    });
}

//quem joga
function checkEl(player1,player2){
    if(player1 == player2){
        el = x;
    }else{
        el = o;
    }

    return el
}

function checkWinCondition(){

    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //horizontal

    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0 ){

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;
        
        if(b1Child == 'x'
        && b2Child == 'x' 
        && b3Child == 'x' ){
            //x
            declareWinner('x');
        } else if(b1Child == "o" 
        && b2Child ==  "o" 
        && b3Child ==  "o"){
            // o
            declareWinner('o')
        }

    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0 ){

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        
        if(b4Child == 'x'
        && b5Child == 'x' 
        && b6Child == 'x' ){
            //x
            declareWinner('x');
        } else if(b4Child == "o" 
        && b5Child ==  "o" 
        && b6Child ==  "o"){
            // o
            declareWinner('o')
        }

    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0 ){

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        
        if(b7Child == 'x'
        && b8Child == 'x' 
        && b9Child == 'x' ){
            //x
            declareWinner('x');
        } else if(b7Child == "o" 
        && b8Child ==  "o" 
        && b9Child ==  "o"){
            // o
            declareWinner('o')
        }

    }
