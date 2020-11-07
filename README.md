# Meu querido diário

***

## 1. Introdução

É uma aplicação web com o nome: "Meu querido diário" que auxilia pessoas a 
escrever o seu diário secreto.

O usuário escolhe um número que será o código secreto para acessar o seu diário
e poderá deixar seu texto codificado. Caso queira reler o que havia escrito 
poderá decifrar o texto secreto, utilizando o número do seu código.


## 2. Projeto

O usuário do "Meu querido diário" foi definido à partir da necessidade em esconder os textos escritos 
em diário, ao qual, contém informações que os usuários tem por objetivo manter
em segredo, mesmo que por ventura, esses escritos acabem caindo em mãos 
erradas. Caso o usuário desejar reler e entender o que havia escrito, poderá 
inserir o texto já cifrado, escolher a opção para revelar o que havia escrito.

O público alvo é composto por pessoas de sexo ou idade diversos, que deseja
codificar seus textos escritos e posteriormente decodificá-los.

  ## 2.1. Processo para definir o produto final
  
  * Primeiramente foi montado um escopo básico em HTML:
       * Colocado as frases, funcionalidades e botões, sem o uso de estilo, somente
        para ter os "ids" e valores que precisava para realizar a parte do index.js.
  * No index.js:
       * Foi feito uma função que cria um botão "select" na página.
       * Foi feito a integração do HTML com o JavaScript utilizando o DOM.
       * Foi chamada as funções cipher.encode e cipher.decode.
       * Foi feito a estilização no style.css.
   * A página finalizada: 
  
     ![Layout da aplicação web](https://github.com/RoSapia/SAP005-cipher/blob/master/design.png) 
  
  

  ## 2.2. Funcionalidades da aplicação

  * Escolher um número que corresponderá ao tipo de codificação.
  * Escolher se deseja codificar um texto em um botão.
  * Escolher se deseja decodificar um texto em um botão.
  * Digitar um texto em uma caixa de texto.
  * Verificar o resultado na caixa de texto, à partir das escolhas anteriores.
  
  
   ## 2.3. Passo a passo para o usuário
  
  * 1º Ao entrar na aplicação o usuário deve escolher um número, que corresponderá
    ao código do seu diário (offset).
    
  * 2º Há dois botões do tipo "radio", em que o usuário deve escolher se deseja 
    "Esconder"(cifrar) ou "Revelar"(decifrar).
    É importante que um dos dois botões estejam selecionados para a próxima etapa.
    
  * 3º O usuário deve escrever o texto na caixa de texto com a indicação: "Escreva
    seu texto:"
    
  * 4º Para visualizar o resultado desejado, o usuário deve apertar o botão: "Ver 
    resultado".
    Caso o botão "Esconder" estiver selecionado, o botão "Ver resultado" mostrará
    na "caixa de texto" um texto codificado.
    Caso o botão "Revelar" estiver selecionado, o botão "Ver resultado" mostrará 
    na "caixa de texto" um texto decodificado.
     
     
## 3. Ferramentas utilizadas nesse projeto

Neste projeto foi construído a aplicação web (_WebApp_) "Meu querido diário"
que irá interagir com o usuário final através do navegador utilizando HTML, CSS e
JavaScript como ferramentas.
> Ferramentas utilizadas:
* [x] ### HTML.
* [x] ### CSS.
* [x] ### JavaScript
* [x] ### DOM.
* [x] ### Testing.
