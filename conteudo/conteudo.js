/*

FUNÇÕES DO JS
-------------
- onclick() é utilizado para eventos de clique, como por exemplo um botão
    - Ele pode ser passado em tags HTML, mas também pode manipula-las em funções

- onkeyup() é uma função que captura eventos de teclado:
    - Captura o soltar da tecla

- onkeydown() é uma função que captura eventos de teclado:
    - Captura o pressionar da tecla

- alert() é uma caixa de aviso (alerta) que geralmente pode ser associada a um evento
    - Também pode ser utilizado em tags, mas também pode ser utilizado em funções

- No geral, javascript inline não é recomendado, por isso criamos funções que manipulam o HTML e CSS (DOM)

- querySelectorAll() é um seletor generalista, por isso é importante se atentar aos elementos no HTML que respeitam essa característica

- querySelector(), traduzindo, é um buscador de seletor:
    - Se for uma classe: querySelector(".classe")
    - Se for uma tag: querySelector("tag")
    - Se for um id: querySelector("#id")

- addEventListener() é uma função que adciona um evento ou monitora ele:
    - const elemento = document.querySelector("#botao")
        elemento.addEventListener("click", myFunction)

    function myFunction() {
        document.querySelector("#retorna").innerHTML = "Parabéns, você acertou!"
    }

- classList() é uma função que referencia classes do CSS
    - Pode ser utilizado junto a add: variavel.classList.add(".classe")
    - Pode ser utilizado junto a remove: variavel.classList.remove(".classe")

- document representa todo o documento web
    - É utilizado em conjunto com querySelector

- while significa enquanto, ou seja, essa função precisa de uma condição para funcionar:
    - Ela compara valores true ou false
    - Se apresenta de algumas formas:
        - let contador = 0
          while(contador < 9) { -> Esse looping acontecerá até condição ser falsa, ou seja, quando o contador for igual a 9
            "algum código"
            contador = contador + 1 -> Geralmente usa-se =+, ++, =-, --
        }

- for também é estrutura de looping condicional:
    - Compara valores true ou false
    - Se apresenta da seguinte forma:
        - for(let contador = 0; contador < variavel.length; contador++ ) { -> Nesse caso, o contador pode ser instanciado na própria condição
            "algum código"                                                    e quando se tratar de listas, podemos associa-lo ao seu tamanho, por isso o uso de length
        }

- forEach() é uma função reservada para listas

- splice() é utilizado para remover itens de uma lista:
    - var lista = ["Amarelo", "Azul", "Branco"]
    - splice(1 ,1) tem essa grafia, sendo o primeiro atributo a quantidade e o segundo a posição do array

- Uma função é construída da seguinte forma:
    - function é uma palavra reservada
    - É necessário nomear uma função
    - Às vezes ele solicita um parâmetro
    - function minhaFuncao(parametro) { -> function nomeDaFuncao (umParametro)
        "algum código"
    } 
    
- O operador === comparar tipo e valor, enquanto o == só compara o valor 


MANIPULANDO ELEMENTOS
---------------------
- DOM (Document Object Model) é uma interface de linguagem neutra que permite que o documento HTML seja atualizado dinamicamente

- Propriedades e métodos para alterar elementos no HTML:
    - element.innerHTML: esta propriedade obtém ou altera qualquer elemento no HTML, inclusive tags
    - element.innerText: esta propriedade permite inserir textos no HTML
    - element.attribute: esta propriedade altera o valor de um elemento HTML
    - element.setAttribute(atributo, valor): este método altera o valor de um atributo de um elemento HTML

- Adicionando e excluindo elementos:
    - document.write(): escreve no fluxo de saída do HTML
    - document.appendChild(): adiciona um elemento HTML
    - document.removeChild(): remove um elemento HTML
    - document.replaceChild(): substitui um elemento HTML
    - document.createElement(): cria um elemento HTML

- data-attributes são utilizados para guardar valores em elementos HTML:
    - A primeira parte é o identificador deste dado, que consiste em data- + o nome de sua escolha que melhor identifica o tipo de dado a ser atribuído
    - A segunda parte é o valor atribuído à este data-attribute, este valor deve sempre estar entre aspas “ ”, e dessa maneira é lido como uma string:
        - data-tipo="tinta-exterior"

*/
