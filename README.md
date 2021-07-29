## Jogo da Velha
## Description 🖋

Bring JavaScript in a more interactive way, so that you can more quickly and practically understand concepts that are constantly covered within the workspace.

##  Goals 📈
- exercise logic;
- consolidate concepts in JavaScript;
- Use DOM;

## How use 🎮

Click here: 👉🏿 https://andre831.github.io/hash/ 👈🏿

- Select: `🧑👧🏾` or `🤖`;

- the game starts with `❎`;
- the part in one of the spaces;
- next will be `⭕`;
- who aligns 3 equal elements will win;
 

O objetivo deste artigo é apresentar um código simples para implementar um “Jogo da Velha”, utilizando apenas recursos básicos das web Standards (HTML, CSS e Javascript). O intuito aqui não é apresentar nenhuma ferramenta ou código de desenvolvimento de jogos avançados, mas sim estimular o estudo das três tecnologias que regem a web, bem como da lógica de programação e da biblioteca jQuery.

Para o jogo, utilizaremos duas imagens quaisquer que, nesse caso, são ilustradas abaixo. O leitor pode fazer uso das figuras de sua preferência, atentando apenas para os nomes, que devem ser mantidos.



Read more: http://www.linhadecodigo.com.br/artigo/3506/criando-um-jogo-da-velha-em-javascript-html-e-css.aspx#ixzz722XN6Dzp

Todos os arquivos produzidos neste artigo devem ser mantidos na mesma pasta, inclusive as imagens. Caso contrário, o leitor precisará alterara o caminho das referências feitas no código.

Iniciemos então pelo código HTML que estruturará o jogo. Teremos basicamente uma div maior dividida em três linhas e três colunas. O conteúdo da Listagem 1 deve ser salvo com a extensão HTML, no caso, nomeei o arquivo como index.html.



Read more: http://www.linhadecodigo.com.br/artigo/3506/criando-um-jogo-da-velha-em-javascript-html-e-css.aspx#ixzz722XQLFtM

              <DOCTYPE html>
        <html>
        <head>
            <link rel="stylesheet" type="text/css" href="estilo.css"/>    
            <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
            <script type="text/javascript" src="script.js"></script>
        </head>
        <body>
                <div id="jogo">
                    <div class="linha">
                        <div class="casa" id="casa1"></div>
                        <div class="casa" id="casa2"></div>
                        <div class="casa" id="casa3"></div>
                    </div>
                    <div class="linha">
                        <div class="casa" id="casa4"></div>
                        <div class="casa" id="casa5"></div>
                        <div class="casa" id="casa6"></div>
                    </div>
                    <div class="linha">
                        <div class="casa" id="casa7"></div>
                        <div class="casa" id="casa8"></div>
                        <div class="casa" id="casa9"></div>
                    </div>
                </div>
                <div id="resultado"></div>
        </body>
        </html>


        Read more: http://www.linhadecodigo.com.br/artigo/3506/criando-um-jogo-da-velha-em-javascript-html-e-css.aspx#ixzz722XUSWMC


As casas foram numeradas de 1 a 9, da esquerda para a direita, de cima para baixo. Esta identificação é necessária para verificar se a casa está marcada com xis ou com círculo.

Na tag header do HTML foram feitas referências a três arquivos: uma folha de estilos, a biblioteca jQuery e um script próprio deste artigo.

Vejamos então o conteúdo da folha de estilos responsável pela formatação e, em seguida, a aparência inicial da página.



Read more: http://www.linhadecodigo.com.br/artigo/3506/criando-um-jogo-da-velha-em-javascript-html-e-css.aspx#ixzz722Xa505s

            #jogo{
          width:603px;
          height:600px;
          border:solid 3px
      }

      .linha{
          height:200px;
          border-bottom:solid 1px;
      }

      .casa{
          width:200px;
          height:100%;
          border-right:solid 1px;
          float:left;
      }


      Read more: http://www.linhadecodigo.com.br/artigo/3506/criando-um-jogo-da-velha-em-javascript-html-e-css.aspx#ixzz722XejVIe
      
      
Vale ressaltar que o design não é o foco deste artigo, mas sim a utilização dos recursos do HTML, CSS e Javascript para a obteção dos resultados desejados.

Como utilizaremos jQuery, o arquivo script.js deve seguir o padrão desta biblioteca. Observemos a Listagem 3 a seguir.



Read more: http://www.linhadecodigo.com.br/artigo/3506/criando-um-jogo-da-velha-em-javascript-html-e-css.aspx#ixzz722XksXr1

Listagem 3: Estrutura geral do arquivo script.js
   
       $(function(){
    //O conteúdo deve ficar aqui
    });
    
Listagem 4: Declaração de variáveis

      var vez = 1;
     var vencedor = "";


     Read more: http://www.linhadecodigo.com.br/artigo/3506/criando-um-jogo-da-velha-em-javascript-html-e-css.aspx#ixzz722XwMdmQ
    

Em seguida, implementaremos uma função para verificar se uma fila (linha, coluna ou diagonal) está completamente preenchida por um mesmo jogador. Esta função receberá como parâmetro os índices das três casas a serem verificadas.

Read more: http://www.linhadecodigo.com.br/artigo/3506/criando-um-jogo-da-velha-em-javascript-html-e-css.aspx#ixzz722Y4IS5G

       function casasIguais(a, b, c){
       var casaA = $("#casa"+a);
       var casaB = $("#casa"+b);
       var casaC = $("#casa"+c);
       var bgA = $("#casa"+a).css("background-image");
       var bgB = $("#casa"+b).css("background-image");
       var bgC = $("#casa"+c).css("background-image");
       if( (bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")){
           if(bgA.indexOf("1.png") >= 0)
               vencedor = "1";
           else
               vencedor = "2";
           return true;
       }
       else{
           return false;
       }
   }


     Read more: http://www.linhadecodigo.com.br/artigo/3506/criando-um-jogo-da-velha-em-javascript-html-e-css.aspx#ixzz722Y7eQ7z
     
  Caso as três casas verificadas estejam igualmente preenchidas, define-se quem foi o vencedor, tomando como base a imagem com a qual as casas estão marcadas. A variável “vencedor” recebe então o valor “1” ou “2”.

Definiremos agora mais uma função que será responsável por verificar se o jogo acabou, ou seja, utilizando a função casasIguais, verificará se alguma linha, coluna ou diagonal está preenchida e, em caso positivo, exibe uma mensagem informando o vencedor do jogo. Ao final, o evento click das casas é desativado, impedindo a continuação da partida.



Read more: http://www.linhadecodigo.com.br/artigo/3506/criando-um-jogo-da-velha-em-javascript-html-e-css.aspx#ixzz722YFB9Gt

    function verificarFimDeJogo(){
        if( casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
            casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
            casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
            ){
            $("#resultado").html("<h1>O jogador " + vencedor + "venceu! </h1>");
            $(".casa").off("click");
        }
    }


    Read more: http://www.linhadecodigo.com.br/artigo/3506/criando-um-jogo-da-velha-em-javascript-html-e-css.aspx#ixzz722YIL0Xf
    
    
Sabemos, porém, que esta função precisa ser chamada de algum ponto do código, de forma a estar constantemente verificando o andamento da partida. Para isso, programaremos o evento click das casas para chamar a função verificarFimDeJogo, afinal, o jogo só termina quando um jogador marcar a terceira casa de uma sequência (ou se nenhum jogador vencer, neste caso, não será exibida nenhuma mensagem).

No código da Listagem 6, quando uma casa é clicada pelo jogador, verificamos o conteúdo do atributo CSS “background-image”, caso o mesmo esteja vazio, preenchemos a casa com a imagem “1.png” ou “2.png”, dependendo da vez. Por fim, alteramos o jogador da vez para que a partida possa prosseguir e invocamos a função verificarFimDeJogo.



Read more: http://www.linhadecodigo.com.br/artigo/3506/criando-um-jogo-da-velha-em-javascript-html-e-css.aspx#ixzz722YPXd3L


      $(".casa").click(function(){
    var bg = $(this).css("background-image");
    if(bg == "none" || bg == "")
    {           
        var fig = "url(" + vez.toString() + ".png)";
        $(this).css("background", fig);
        vez = (vez == 1? 2:1);  
        verificarFimDeJogo();
    }
    });


     Read more: http://www.linhadecodigo.com.br/artigo/3506/criando-um-jogo-da-velha-em-javascript-html-e-css.aspx#ixzz722YSogp2
     
     
Caso tenha ficado a dúvida, o conteúdo das listagens 4, 5, 6 e 7 deve ser inserido no arquivo script.js, de acordo com a estrutura mostrada na Listagem 3.

Feito isso, podemos abrir o arquivo index.html no browser (ou atualizar, caso já esteja aberto) e testar o funcionamento do nosso código.

A Figura 4 ilustra ilustra o momento em que o jogador 1 venceu a partida.



Read more: http://www.linhadecodigo.com.br/artigo/3506/criando-um-jogo-da-velha-em-javascript-html-e-css.aspx#ixzz722YXtIS4


Como vimos, não foram utilizados recursos avançados das web standards, imagens ou editores e mesmo assim, conseguimos desenvolver rapidamente um “Jogo da Velha” simples, porém funcional.

Espero que o conteúdo aqui apresentado possa ser útil no auxílio aos desenvolvedores web e interessados pela área, principalmente aqueles que estão iniciando os estudos dessas tecnologias.

Grato pela atenção, finalizo aqui este artigo. Até a próxima publicação.



Read more: http://www.linhadecodigo.com.br/artigo/3506/criando-um-jogo-da-velha-em-javascript-html-e-css.aspx#ixzz722YZsbE6
   
