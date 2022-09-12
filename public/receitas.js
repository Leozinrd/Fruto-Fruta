const botaoAbacate = document.querySelector('.botao-abacate');
const botaoKiwi = document.querySelector('.botao-kiwi');
const botaoVegetais = document.querySelector('.botao-vegetais');
const botaoPimentoes = document.querySelector('.botao-pimentoes')
const botaoOriental = document.querySelector('.botao-oriental')
const botaoBeterrabas = document.querySelector('.botao-beterrabas')
const body = document.querySelector(`body`);
const receitas = document.getElementById('receitas');

// Início divs Receitas
const divAbacate = document.createElement('div');
divAbacate.className = 'caixa__como-fazer-abacate';
divAbacate.innerHTML = '<section class="caixa__ingredientes"><h2 class="ingredientes__titulo">Ingredientes</h2><ul class="ingredientes__lista"><li class="ingrediente">2 abacates pequenos</li><li class="ingrediente">400ml de suco de laranja</li><li class="ingrediente">½ xícara (chá) de sementes de chia</li><li class="ingrediente">Açúcar ou adoçante a gosto</li><li class="ingrediente">Sementes de canhamo para finalizar</li><li class="ingrediente">Lascas de coco para finalizar</li><li class="ingrediente">50g de mirtilo para finalizar</li></ul></section><section class="caixa__preparo"><h2 class="preparo__titulo">Modo de Preparo</h2><ol class="preparos__lista"><li class="preparo">Em um liquidificador bata o abacate, a chia,o suco de laranja e o açúcar ou adoçante.</li><li class="preparo">Transfira o abacate batido para uma tigela.</li><li class="preparo">Distribua as sementes de canhamo, o coco e o mirtilo por cima do abacate.</li><li class="preparo">Sirva gelado.</li></ol></section><button class="caixa__fechar"><img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjU2IDMzQzEzMi4zIDMzIDMyIDEzMy4zIDMyIDI1N3MxMDAuMyAyMjQgMjI0IDIyNCAyMjQtMTAwLjMgMjI0LTIyNFMzNzkuNyAzMyAyNTYgMzN6bTEwOC4zIDI5OS41YzEuNSAxLjUgMi4zIDMuNSAyLjMgNS42IDAgMi4xLS44IDQuMi0yLjMgNS42bC0yMS42IDIxLjdjLTEuNiAxLjYtMy42IDIuMy01LjYgMi4zLTIgMC00LjEtLjgtNS42LTIuM0wyNTYgMjg5LjhsLTc1LjQgNzUuN2MtMS41IDEuNi0zLjYgMi4zLTUuNiAyLjMtMiAwLTQuMS0uOC01LjYtMi4zbC0yMS42LTIxLjdjLTEuNS0xLjUtMi4zLTMuNS0yLjMtNS42IDAtMi4xLjgtNC4yIDIuMy01LjZsNzUuNy03Ni03NS45LTc1Yy0zLjEtMy4xLTMuMS04LjIgMC0xMS4zbDIxLjYtMjEuN2MxLjUtMS41IDMuNS0yLjMgNS42LTIuMyAyLjEgMCA0LjEuOCA1LjYgMi4zbDc1LjcgNzQuNyA3NS43LTc0LjdjMS41LTEuNSAzLjUtMi4zIDUuNi0yLjMgMi4xIDAgNC4xLjggNS42IDIuM2wyMS42IDIxLjdjMy4xIDMuMSAzLjEgOC4yIDAgMTEuM2wtNzUuOSA3NSA3NS42IDc1Ljl6IiBmaWxsPSIjOGQwNjA2IiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48L3N2Zz4=" alt="Fechar" class="botao__fechar-abacate"></button>';
body.insertBefore(divAbacate, receitas);

const divKiwi = document.createElement('div');
divKiwi.className = 'caixa__como-fazer-kiwi';
divKiwi.innerHTML = '<section class="caixa__ingredientes ingredientes__kiwi"><h2 class="ingredientes__titulo">Ingredientes</h2><ul class="ingredientes__lista"><li class="ingrediente">1 1/5 kg de fruta-do-conde</li><li class="ingrediente">250 gr de creme de leite fresco</li><li class="ingrediente">50 gr de açúcar</li><li class="ingrediente">150 gr de kiwi cortado em cubos</li><li class="ingrediente">150 gr de morango cortado em cubos</li><li class="ingrediente">5 unidades de morango para decorar</li><li class="ingrediente">5 ml de essência de baunilha</li><li class="ingrediente">100 gr de geleia de frutas vermelhas</li><li class="ingrediente">10 folhas de hortelã para decorar</li></ul></section><section class="caixa__preparo preparo__kiwi"><h2 class="preparo__titulo">Modo de Preparo</h2><ol class="preparos__lista"><li class="preparo">Passe as sementes da fruta do conte em uma peneira e vá retirando as sementes e reserve a polpa(460gr).</li><li class="preparo">Bata o creme de leite com o açúcar em ponto de chantily, misture a polpa da fruta do conde delicadamente, a essência de baunilha, o morango e kiwi.</li><li class="preparo">Coloque a salada em taça de martini cobra com a calda de frutas vermelhas e leve pra gelar e na hora de servir decore com morango cortado ao meio e as folhas de hortelã.</li></ol></section><button class="caixa__fechar"><img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjU2IDMzQzEzMi4zIDMzIDMyIDEzMy4zIDMyIDI1N3MxMDAuMyAyMjQgMjI0IDIyNCAyMjQtMTAwLjMgMjI0LTIyNFMzNzkuNyAzMyAyNTYgMzN6bTEwOC4zIDI5OS41YzEuNSAxLjUgMi4zIDMuNSAyLjMgNS42IDAgMi4xLS44IDQuMi0yLjMgNS42bC0yMS42IDIxLjdjLTEuNiAxLjYtMy42IDIuMy01LjYgMi4zLTIgMC00LjEtLjgtNS42LTIuM0wyNTYgMjg5LjhsLTc1LjQgNzUuN2MtMS41IDEuNi0zLjYgMi4zLTUuNiAyLjMtMiAwLTQuMS0uOC01LjYtMi4zbC0yMS42LTIxLjdjLTEuNS0xLjUtMi4zLTMuNS0yLjMtNS42IDAtMi4xLjgtNC4yIDIuMy01LjZsNzUuNy03Ni03NS45LTc1Yy0zLjEtMy4xLTMuMS04LjIgMC0xMS4zbDIxLjYtMjEuN2MxLjUtMS41IDMuNS0yLjMgNS42LTIuMyAyLjEgMCA0LjEuOCA1LjYgMi4zbDc1LjcgNzQuNyA3NS43LTc0LjdjMS41LTEuNSAzLjUtMi4zIDUuNi0yLjMgMi4xIDAgNC4xLjggNS42IDIuM2wyMS42IDIxLjdjMy4xIDMuMSAzLjEgOC4yIDAgMTEuM2wtNzUuOSA3NSA3NS42IDc1Ljl6IiBmaWxsPSIjOGQwNjA2IiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48L3N2Zz4=" alt="Fechar" class="botao__fechar-kiwi"></button>';
body.insertBefore(divKiwi, receitas);

const divVegetais = document.createElement('div');
divVegetais.className = 'caixa__como-fazer-vegetais';
divVegetais.innerHTML = '<section class="caixa__ingredientes"><h2 class="ingredientes__titulo">Ingredientes</h2><ul class="ingredientes__lista"><li class="ingrediente">1 colher (sopa) de óleo</li><li class="ingrediente">1 dente de alho amassado</li><li class="ingrediente">1 cenoura média cortada em rodelas</li><li class="ingrediente">1 berinjela média cortada em cubos</li><li class="ingrediente">1 abobrinha média cortada em cubos</li><li class="ingrediente">meia xícara (chá) de ervilhas frescas </li><li class="ingrediente">1 tablete de MAGGI® Caldo Legumes </li><li class="ingrediente">meia xícara (chá) de água</li><li class="ingrediente">3 folhas de acelga fatiadas</li><li class="ingrediente">2 colheres (sopa) de cebolinha-verde picada</li></ul></section><section class="caixa__preparo"><h2 class="preparo__titulo">Modo de Preparo</h2><ol class="preparos__lista"><li class="preparo">Em uma panela aqueça o óleo e doure o alho.</li><li class="preparo">Junte a cenoura e a berinjela e refogue.</li><li class="preparo">Acrescente a abobrinha e as ervilhas e junte o MAGGI Caldo dissolvido na água.</li><li class="preparo">Cozinhe até que os vegetais estejam levemente macios.</li><li class="preparo">Junte a acelga e tampe a panela rapidamente para que amoleça.</li><li class="preparo">Acrescente a cebolinha e sirva a seguir.</li></ol></section><button class="caixa__fechar"><img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjU2IDMzQzEzMi4zIDMzIDMyIDEzMy4zIDMyIDI1N3MxMDAuMyAyMjQgMjI0IDIyNCAyMjQtMTAwLjMgMjI0LTIyNFMzNzkuNyAzMyAyNTYgMzN6bTEwOC4zIDI5OS41YzEuNSAxLjUgMi4zIDMuNSAyLjMgNS42IDAgMi4xLS44IDQuMi0yLjMgNS42bC0yMS42IDIxLjdjLTEuNiAxLjYtMy42IDIuMy01LjYgMi4zLTIgMC00LjEtLjgtNS42LTIuM0wyNTYgMjg5LjhsLTc1LjQgNzUuN2MtMS41IDEuNi0zLjYgMi4zLTUuNiAyLjMtMiAwLTQuMS0uOC01LjYtMi4zbC0yMS42LTIxLjdjLTEuNS0xLjUtMi4zLTMuNS0yLjMtNS42IDAtMi4xLjgtNC4yIDIuMy01LjZsNzUuNy03Ni03NS45LTc1Yy0zLjEtMy4xLTMuMS04LjIgMC0xMS4zbDIxLjYtMjEuN2MxLjUtMS41IDMuNS0yLjMgNS42LTIuMyAyLjEgMCA0LjEuOCA1LjYgMi4zbDc1LjcgNzQuNyA3NS43LTc0LjdjMS41LTEuNSAzLjUtMi4zIDUuNi0yLjMgMi4xIDAgNC4xLjggNS42IDIuM2wyMS42IDIxLjdjMy4xIDMuMSAzLjEgOC4yIDAgMTEuM2wtNzUuOSA3NSA3NS42IDc1Ljl6IiBmaWxsPSIjOGQwNjA2IiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48L3N2Zz4=" alt="Fechar" class="botao__fechar-vegetais"></button>';
body.insertBefore(divVegetais, receitas);

const divPimentoes = document.createElement('div');
divPimentoes.className = 'caixa__como-fazer-pimentoes';
divPimentoes.innerHTML = '<section class="caixa__ingredientes"><h2 class="ingredientes__titulo">Ingredientes</h2><ul class="ingredientes__lista"><li class="ingrediente">1 unidade cenoura em fatias grossas</li><li class="ingrediente">1 unidade abobrinha em tiras grossas</li><li class="ingrediente">1/2 unidade pimentão vermelho em tiras grossas</li><li class="ingrediente">1/2 unidade pimentão amarelo em tiras grossas</li><li class="ingrediente">1 colher (sopa) de salsa picada</li><li class="ingrediente">1 colher (chá) de sal</li></ul></section><section class="caixa__preparo"><h2 class="preparo__titulo">Modo de Preparo</h2><ol class="preparos__lista"><li class="preparo">Cozinhe os legumes em pouca água com sal e salsa.</li><li class="preparo">Acrescentar caldo de legumes.</li><li class="preparo">Finalizar com um fio de azeite.</li></ol></section><button class="caixa__fechar"><img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjU2IDMzQzEzMi4zIDMzIDMyIDEzMy4zIDMyIDI1N3MxMDAuMyAyMjQgMjI0IDIyNCAyMjQtMTAwLjMgMjI0LTIyNFMzNzkuNyAzMyAyNTYgMzN6bTEwOC4zIDI5OS41YzEuNSAxLjUgMi4zIDMuNSAyLjMgNS42IDAgMi4xLS44IDQuMi0yLjMgNS42bC0yMS42IDIxLjdjLTEuNiAxLjYtMy42IDIuMy01LjYgMi4zLTIgMC00LjEtLjgtNS42LTIuM0wyNTYgMjg5LjhsLTc1LjQgNzUuN2MtMS41IDEuNi0zLjYgMi4zLTUuNiAyLjMtMiAwLTQuMS0uOC01LjYtMi4zbC0yMS42LTIxLjdjLTEuNS0xLjUtMi4zLTMuNS0yLjMtNS42IDAtMi4xLjgtNC4yIDIuMy01LjZsNzUuNy03Ni03NS45LTc1Yy0zLjEtMy4xLTMuMS04LjIgMC0xMS4zbDIxLjYtMjEuN2MxLjUtMS41IDMuNS0yLjMgNS42LTIuMyAyLjEgMCA0LjEuOCA1LjYgMi4zbDc1LjcgNzQuNyA3NS43LTc0LjdjMS41LTEuNSAzLjUtMi4zIDUuNi0yLjMgMi4xIDAgNC4xLjggNS42IDIuM2wyMS42IDIxLjdjMy4xIDMuMSAzLjEgOC4yIDAgMTEuM2wtNzUuOSA3NSA3NS42IDc1Ljl6IiBmaWxsPSIjOGQwNjA2IiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48L3N2Zz4=" alt="Fechar" class="botao__fechar-pimentoes"></button>';
body.insertBefore(divPimentoes, receitas);

const divOriental = document.createElement('div');
divOriental.className = 'caixa__como-fazer-oriental';
divOriental.innerHTML = '<section class="caixa__ingredientes ingredientes__oriental"><h2 class="ingredientes__titulo">Ingredientes</h2><ul class="ingredientes__lista"><li class="ingrediente">1 pimentão verde</li><li class="ingrediente">1 abobrinha</li><li class="ingrediente">1/2 chuchu</li><li class="ingrediente">1 cenoura</li><li class="ingrediente">1/2 nabo</li><li class="ingrediente">1 talo de salsão</li><li class="ingrediente">1 xícara de chá de repolho verde</li><li class="ingrediente">2 colheres de sopa de óleo de milho</li><li class="ingrediente">1/2 colher de sal</li><li class="ingrediente">1 colher de sopa de molho de soja</li><li class="ingrediente">1 colher de sopa de vinagre balsâmico</li>	</ul></section><section class="caixa__preparo preparo__oriental"><h2 class="preparo__titulo">Modo de Preparo</h2><ol class="preparos__lista"><li class="preparo">Cortar em tirinhas a cenoura, chuchu, abobrinha, nabo, pimentão e juntar em uma xícara de chá</li><li class="preparo">Picar 1 ralo de salsão em fatias finas</li><li class="preparo">Colocar todos os vegetais em uma panela e cozinhar no bafo</li><li class="preparo">Preparar o Molho: Misturar bem 2 colheres de sopa de óleo de milho, 1 colher de sopa de molho de soja, 1 colher de sopa de vinagre balsâmico e 1/2 colher de chá de sal</li><li class="preparo">Misturar todos os legumes cozidos, jogar o molho por cima, mexer com 2 garfos e deixar esfriar</li></ol></section><button class="caixa__fechar"><img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjU2IDMzQzEzMi4zIDMzIDMyIDEzMy4zIDMyIDI1N3MxMDAuMyAyMjQgMjI0IDIyNCAyMjQtMTAwLjMgMjI0LTIyNFMzNzkuNyAzMyAyNTYgMzN6bTEwOC4zIDI5OS41YzEuNSAxLjUgMi4zIDMuNSAyLjMgNS42IDAgMi4xLS44IDQuMi0yLjMgNS42bC0yMS42IDIxLjdjLTEuNiAxLjYtMy42IDIuMy01LjYgMi4zLTIgMC00LjEtLjgtNS42LTIuM0wyNTYgMjg5LjhsLTc1LjQgNzUuN2MtMS41IDEuNi0zLjYgMi4zLTUuNiAyLjMtMiAwLTQuMS0uOC01LjYtMi4zbC0yMS42LTIxLjdjLTEuNS0xLjUtMi4zLTMuNS0yLjMtNS42IDAtMi4xLjgtNC4yIDIuMy01LjZsNzUuNy03Ni03NS45LTc1Yy0zLjEtMy4xLTMuMS04LjIgMC0xMS4zbDIxLjYtMjEuN2MxLjUtMS41IDMuNS0yLjMgNS42LTIuMyAyLjEgMCA0LjEuOCA1LjYgMi4zbDc1LjcgNzQuNyA3NS43LTc0LjdjMS41LTEuNSAzLjUtMi4zIDUuNi0yLjMgMi4xIDAgNC4xLjggNS42IDIuM2wyMS42IDIxLjdjMy4xIDMuMSAzLjEgOC4yIDAgMTEuM2wtNzUuOSA3NSA3NS42IDc1Ljl6IiBmaWxsPSIjOGQwNjA2IiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48L3N2Zz4=" alt="Fechar" class="botao__fechar-oriental"></button>';
body.insertBefore(divOriental, receitas);

const divBeterrabas = document.createElement('div');
divBeterrabas.className = 'caixa__como-fazer-beterrabas';
divBeterrabas.innerHTML = '<section class="caixa__ingredientes ingredientes__beterrabas"><h2 class="ingredientes__titulo">Ingredientes</h2><ul class="ingredientes__lista"><li class="ingrediente">4 beterrabas pequenas inteiras</li><li class="ingrediente">2 colheres (sopa) de Azeite de Oliva</li><li class="ingrediente">1 sachê de Tempero SAZÓN® Amarelo</li><li class="ingrediente">1 pitada de sal</li><li class="ingrediente">2 colheres (sopa) de cebolinha-verde picada</li></ul></section><section class="caixa__preparo preparo__beterrabas"><h2 class="preparo__titulo">Modo de Preparo</h2><ol class="preparos__lista"><li class="preparo">Preaquecer forno por 50 minutos.</li><li class="preparo">Embrulhe as beterrabas com papel-alumínio, cobrindo-as completamente.</li><li class="preparo">Coloque em uma assadeira e leve ao forno médio (180 graus)</li><li class="preparo">Retire do forno, espere amornar, descasque a beterraba e corte-as em cubos médios.</li><li class="preparo">Disponha em uma tigela grande, junte o Azeite, o Tempero SAZÓN®, o sal e a cebolinha. Misture bem e sirva em seguida.</li></ol></section><button class="caixa__fechar"><img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjU2IDMzQzEzMi4zIDMzIDMyIDEzMy4zIDMyIDI1N3MxMDAuMyAyMjQgMjI0IDIyNCAyMjQtMTAwLjMgMjI0LTIyNFMzNzkuNyAzMyAyNTYgMzN6bTEwOC4zIDI5OS41YzEuNSAxLjUgMi4zIDMuNSAyLjMgNS42IDAgMi4xLS44IDQuMi0yLjMgNS42bC0yMS42IDIxLjdjLTEuNiAxLjYtMy42IDIuMy01LjYgMi4zLTIgMC00LjEtLjgtNS42LTIuM0wyNTYgMjg5LjhsLTc1LjQgNzUuN2MtMS41IDEuNi0zLjYgMi4zLTUuNiAyLjMtMiAwLTQuMS0uOC01LjYtMi4zbC0yMS42LTIxLjdjLTEuNS0xLjUtMi4zLTMuNS0yLjMtNS42IDAtMi4xLjgtNC4yIDIuMy01LjZsNzUuNy03Ni03NS45LTc1Yy0zLjEtMy4xLTMuMS04LjIgMC0xMS4zbDIxLjYtMjEuN2MxLjUtMS41IDMuNS0yLjMgNS42LTIuMyAyLjEgMCA0LjEuOCA1LjYgMi4zbDc1LjcgNzQuNyA3NS43LTc0LjdjMS41LTEuNSAzLjUtMi4zIDUuNi0yLjMgMi4xIDAgNC4xLjggNS42IDIuM2wyMS42IDIxLjdjMy4xIDMuMSAzLjEgOC4yIDAgMTEuM2wtNzUuOSA3NSA3NS42IDc1Ljl6IiBmaWxsPSIjOGQwNjA2IiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48L3N2Zz4=" alt="Fechar" class="botao__fechar-beterrabas"></button>';
body.insertBefore(divBeterrabas, receitas);
// Fim div Receitas

// Iniciando divs display = 'none';
const caixaComoFazerAbacate = document.querySelector('.caixa__como-fazer-abacate');
caixaComoFazerAbacate.style.display = 'none';
const caixaComoFazerKiwi = document.querySelector('.caixa__como-fazer-kiwi');
caixaComoFazerKiwi.style.display = 'none';
const caixaComoFazerVegetais = document.querySelector('.caixa__como-fazer-vegetais');
caixaComoFazerVegetais.style.display = 'none';
const caixaComoFazerPimentoes = document.querySelector('.caixa__como-fazer-pimentoes');
caixaComoFazerPimentoes.style.display = 'none';
const caixaComoFazerOriental = document.querySelector('.caixa__como-fazer-oriental');
caixaComoFazerOriental.style.display = 'none';
const caixaComoFazerBeterrabas = document.querySelector('.caixa__como-fazer-beterrabas');
caixaComoFazerBeterrabas.style.display = 'none';
// Finalizando divs display = 'none';

// Início verReceitas
botaoAbacate.addEventListener('click', verReceitaAbacate);
function verReceitaAbacate(){
    caixaComoFazerAbacate.style.display = '';
    botaoBeterrabas.disabled = true;
    botaoKiwi.disabled = true;
    botaoOriental.disabled = true;
    botaoPimentoes.disabled = true;
    botaoVegetais.disabled = true;}
botaoKiwi.addEventListener('click', verReceitaKiwi);
function verReceitaKiwi(){
    caixaComoFazerKiwi.style.display = '';
    botaoAbacate.disabled = true;
    botaoBeterrabas.disabled = true;
    botaoOriental.disabled = true;
    botaoPimentoes.disabled = true;
    botaoVegetais.disabled = true;}
botaoVegetais.addEventListener('click', verReceitaVegetais);
function verReceitaVegetais(){
    caixaComoFazerVegetais.style.display = '';
    botaoAbacate.disabled = true;
    botaoBeterrabas.disabled = true;
    botaoKiwi.disabled = true;
    botaoOriental.disabled = true;
    botaoPimentoes.disabled = true;}
botaoPimentoes.addEventListener('click', verReceitaPimentoes);
function verReceitaPimentoes(){
    caixaComoFazerPimentoes.style.display = '';
    botaoAbacate.disabled = true;
    botaoBeterrabas.disabled = true;
    botaoKiwi.disabled = true;
    botaoOriental.disabled = true;
    botaoVegetais.disabled = true;}
botaoOriental.addEventListener('click', verReceitaOriental);
function verReceitaOriental(){
    caixaComoFazerOriental.style.display = '';
    botaoAbacate.disabled = true;
    botaoBeterrabas.disabled = true;
    botaoKiwi.disabled = true;
    botaoPimentoes.disabled = true;
    botaoVegetais.disabled = true;}
botaoBeterrabas.addEventListener('click', verReceitaBeterrabas);
function verReceitaBeterrabas() {
    caixaComoFazerBeterrabas.style.display = '';
    botaoAbacate.disabled = true;
    botaoKiwi.disabled = true;
    botaoOriental.disabled = true;
    botaoPimentoes.disabled = true;
    botaoVegetais.disabled = true;
}
// Fim verReceitas

// Início fecharReceitas
const caixaFecharAbacate = document.querySelector('.botao__fechar-abacate');
caixaFecharAbacate.addEventListener('click', fecharCaixaReceitaAbacate);
function fecharCaixaReceitaAbacate(){
    document.querySelector('.caixa__como-fazer-abacate').style.display = 'none';
    botaoBeterrabas.disabled = false;
    botaoKiwi.disabled = false;
    botaoOriental.disabled = false;
    botaoPimentoes.disabled = false;
    botaoVegetais.disabled = false;}
const caixaFecharKiwi = document.querySelector('.botao__fechar-kiwi');
caixaFecharKiwi.addEventListener('click', fecharCaixaReceitaKiwi);
function fecharCaixaReceitaKiwi() {
    document.querySelector('.caixa__como-fazer-kiwi').style.display = 'none';
    botaoAbacate.disabled = false;
    botaoBeterrabas.disabled = false;
    botaoOriental.disabled = false;
    botaoPimentoes.disabled = false;
    botaoVegetais.disabled = false;}
const caixaFecharVegetais = document.querySelector('.botao__fechar-vegetais');
caixaFecharVegetais.addEventListener('click', fecharCaixaReceitaVegetais);
function fecharCaixaReceitaVegetais() {
    document.querySelector('.caixa__como-fazer-vegetais').style.display = 'none';
    botaoAbacate.disabled = false;
    botaoBeterrabas.disabled = false;
    botaoKiwi.disabled = false;
    botaoOriental.disabled = false;
    botaoPimentoes.disabled = false;}
const caixaFecharPimentoes = document.querySelector('.botao__fechar-pimentoes');
caixaComoFazerPimentoes.addEventListener('click', fecharCaixaReceitaPimentoes);
function fecharCaixaReceitaPimentoes(){
    document.querySelector('.caixa__como-fazer-pimentoes').style.display = 'none';
    botaoAbacate.disabled = false;
    botaoBeterrabas.disabled = false;
    botaoKiwi.disabled = false;
    botaoOriental.disabled = false;
    botaoVegetais.disabled = false;}
const caixaFecharOriental = document.querySelector('.botao__fechar-oriental');
caixaFecharOriental.addEventListener('click', fecharCaixaReceitaOriental);
function fecharCaixaReceitaOriental(){
    document.querySelector('.caixa__como-fazer-oriental').style.display = 'none';
    botaoAbacate.disabled = false;
    botaoBeterrabas.disabled = false;
    botaoKiwi.disabled = false;
    botaoPimentoes.disabled = false;
    botaoVegetais.disabled = false;}
const caixaFecharBeterrabas = document.querySelector('.botao__fechar-beterrabas');
caixaFecharBeterrabas.addEventListener('click', fecharCaixaReceitaBeterrabas);
function fecharCaixaReceitaBeterrabas(){
    document.querySelector('.caixa__como-fazer-beterrabas').style.display = 'none';
    botaoAbacate.disabled = false;
    botaoKiwi.disabled = false;
    botaoOriental.disabled = false;
    botaoPimentoes.disabled = false;
    botaoVegetais.disabled = false;
}
// Fim fecharReceitas