  // =============================================================
  //  BANCO DE DADOS: MATÉRIAS E PERGUNTAS
  //  Adicione quantas matérias quiser, cada uma com seu array de perguntas.
  // =============================================================
  const materias = {
    matematica: {
      nome: "Matemática e lógica",
      icone: "📐🧮",
      descricao: "Métodos de demonstração, indução, lógica e mais.",
      perguntas: [

         {
materia:"Matemática - Métodos de Demonstração (Prova por Contradição)",
pergunta:"Analisando a proposição: algum dia será possível criar um programa de computador que sempre vença o jogo no xadrez?\nI. Suponha, por um momento, que a seguinte proposição é válida: p = 'existe um programa de computador que sempre vence o jogo no xadrez'. Supondo que tal programa existe, instale a mesma cópia em dois computadores e coloque um para jogar contra o outro. O jogo terminará empatado (sem nenhum vencedor) ou um dos computadores perderá.\nPORQUE\nII. Em qualquer destes casos, pelo menos uma das duas cópias do programa não vai ganhar o jogo, uma contradição, já que assumimos que o programa sempre ganha. Portanto, não existe (nem nunca existirá) um programa que sempre vença o jogo no xadrez.\nA respeito da afirmação assinale a opção correta.",
opcoes:[
"a) As duas asserções são proposições verdadeiras, e a segunda é uma justificativa correta da primeira.",
"b) As duas asserções são proposições verdadeiras, mas a segunda não é uma justificativa correta da primeira.",
"c) A primeira asserção é uma proposição verdadeira, e a segunda é falsa.",
"d) A primeira asserção é uma proposição falsa, e a segunda é verdadeira.",
"e) Ambas as asserções são proposições falsas."
],
correta:0,
explicacao:"A alternativa correta é a letra A. A primeira asserção é verdadeira, pois descreve corretamente o experimento mental (supor a existência do programa e fazer duas cópias jogarem entre si). A segunda asserção também é verdadeira, pois conclui logicamente que, em qualquer resultado (empate ou derrota), pelo menos uma cópia não vence, contradizendo a suposição inicial. Assim, a segunda justifica a primeira ao mostrar que a suposição leva a uma contradição, provando que tal programa não pode existir."
},

      {
materia:"Matemática - Lógica de Predicados (Prolog)",
pergunta:"Durante uma aula de lógica no curso de Introdução à Computação, o professor decide utilizar exemplos do dia a dia para explicar conceitos de lógica de predicados, facilitando a compreensão dos estudantes. O professor escolhe dois alunos populares entre seus exemplos: Laura e Carlos. Marque a alternativa que indica corretamente a pergunta 'Será que Laura gosta de sorvete e Carlos gosta de torta?'",
opcoes:[
"a) ? - gosta(sorvete, laura) e gosta(torta, carlos)",
"b) gosta(laura, sorvete), gosta(carlos, torta)?",
"c) ? - gosta(laura, sorvete), gosta(carlos, torta)",
"d) ? - gosta(laura, sorvete) ou gosta(carlos, torta)",
"e) gosta(laura, sorvete), (carlos, torta)?"
],
correta:2,
explicacao:"A alternativa correta é a letra C. Em Prolog, uma consulta é iniciada com '?-' seguida dos objetivos separados por vírgula (que representa a conjunção 'e'). Os predicados e argumentos devem começar com letras minúsculas. Portanto, a forma correta é: ?- gosta(laura, sorvete), gosta(carlos, torta)."
},



      {
materia:"Matemática - Métodos de Demonstração",
pergunta:"10. Se n = a.b, com a e b inteiros positivos, então a ≤ √n ou b ≤ √n. Nesse contexto, analise as afirmações a seguir de tal forma que seja possível demonstrar que tal proposição é verdadeira.\n I. Suponhamos que n = a.b e a > √n e b > √n.\nII. Vamos analisar a.b. a.b > √n · √n = (√n)² = n o que contradiz a hipótese.\nIII. Portanto, se n = a.b, com a e b inteiros positivos, então a ≤ √n ou b ≤ √n.\nÉ correto o que se afirma em:",
opcoes:[
"a) I apenas.",
"b) II e III apenas.",
"c) I e II apenas.",
"d) I e III apenas.",
"e) I, II e III."
],
correta:4,
explicacao:"A alternativa correta é a letra E. A afirmativa I é verdadeira, pois inicia corretamente uma prova por contradição, negando a tese (a > √n e b > √n). A afirmativa II é verdadeira, pois ao multiplicar as desigualdades, obtemos a.b > √n · √n = n, contradizendo a hipótese de que n = a.b. A afirmativa III é verdadeira, pois conclui corretamente a tese após a contradição. Portanto, I, II e III estão corretas."
},
      
      {
materia:"Matemática - Métodos de Demonstração",
pergunta:"09. Analisando a declaração: Demonstre que √2 é um número irracional, feita por um estudante de métodos de demonstração, ele assim escreveu:\nI. Demonstração. Suponha, por absurdo, que √2 é racional. Desta forma, seria possível encontrar números inteiros a, b, com b ≠ 0, tais que √2 poderia ser representado como fração irredutível a/b.\nPORQUE\nII. A partir disto, podemos afirmar que: 2 = (√2)² = (a/b)² = a²/b² → 2b² = a². Assim, temos que a² é par e, desta forma, a também é par. Como a é par, a = 2k para algum inteiro k. Logo: 2b² = a² = (2k)² = 4k² → b² = 2k². O que nos diz que b também é par. Mas isto é uma contradição, pois se a e b são pares, a fração irredutível a/b poderia ser reduzida, um absurdo. Logo, podemos concluir que o número não pode ser racional, e sim irracional.\nA respeito da afirmação feita pelo estudante, assinale a opção correta.",
opcoes:[
"a) As asserções I e II são proposições verdadeiras, e a II é uma justificativa da I.",
"b) As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.",
"c) A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
"d) A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
"e) As asserções I e II são proposições falsas."
],
correta:0,
explicacao:"A alternativa correta é a letra A. A resposta certa é: As asserções I e Il são proposições verdadeiras, e a II é uma justificativa da l. Na asserção I, o estudante define a suposição inicial da sua prova por contradição: ele assume que v2 é um número racional e que pode ser expresso como uma fração irredutivel a/b. Isso é uma preparação para o argumento que ele esta prestes a fazer e e uma estrategia valida para iniciar uma prova por contradicão. Na asserção II, o estudante apresenta sua justificativa para essa suposição ser falsa. Ele desenvolve um argumento lógico, que começa com a suposição da asserção I e, através de uma série de manipulações matemáticas válidas, chega a uma contradição, o que significa que a suposição inicial (de que v2 é um número racional) deve ser falsa. Portanto, a opção correta é: As asserções I e II são proposições verdadeiras, e a II é uma justificativa da l.",
},
      {
materia:"Matemática - Métodos de Demonstração",
pergunta:"08. Analisando a proposição 'Cada número racional não zero pode ser escrito como produto de dois números irracionais', um estudante de Métodos de Demonstração assim escreveu:\nI. Faça a ∈ Q.\nPORQUE\nII. então podemos escrever a como um produto de dois irracionais √2 · a/√2 = a, onde a/√2 é irracional e a é racional.\nA respeito da afirmação feita pelo estudante, assinale a opção correta.",
opcoes:[
"a) As duas asserções são proposições verdadeiras, e a segunda é uma justificativa correta da primeira.",
"b) As duas asserções são proposições verdadeiras, mas a segunda não é uma justificativa correta da primeira.",
"c) A primeira asserção é uma proposição verdadeira, e a segunda é falsa.",
"d) A primeira asserção é uma proposição falsa, e a segunda é verdadeira.",
"e) Ambas as asserções são proposições falsas."
],
correta:0,
explicacao:"A alternativa correta é a letra A. A asserção I é verdadeira (a ∈ Q é uma suposição válida). A asserção II é verdadeira e justifica corretamente a primeira, pois mostra que qualquer racional não nulo a pode ser escrito como produto de dois irracionais (√2 e a/√2, sendo este último irracional)."
},

      {
materia:"Matemática - Métodos de Demonstração",
pergunta:"07. Se um inteiro é divisível por 6, então duas vezes esse inteiro é divisível por 4. Nesse contexto, analise as afirmações a seguir de tal forma que seja possível demonstrar que tal proposição é verdadeira.\nI. Suponhamos que n é um inteiro divisível por 6, isto é, n = 6q, para algum inteiro q.\nII. Vamos analisar o dobro do número n.\nIII. Logo: 2n = 2(6q) = 12q = 4(3q) = 4k, onde k = 3q é um inteiro.\nÉ correto o que se afirma em:",
opcoes:[
"a) I, apenas.",
"b) II e III apenas.",
"c) I e II apenas.",
"d) I e III apenas.",
"e) I, II e III."
],
correta:4,
explicacao:"A alternativa correta é a letra E. A afirmativa I é verdadeira, pois inicia a demonstração supondo corretamente que n é divisível por 6 (n = 6q). A afirmativa II é verdadeira, pois analisar o dobro de n é o próximo passo lógico. A afirmativa III é verdadeira, pois mostra corretamente que 2n = 12q = 4(3q), ou seja, 2n é divisível por 4. Portanto, todas as três afirmações são verdadeiras e necessárias para a demonstração."
},

      {
materia:"Matemática - Métodos de Demonstração",
pergunta:"06. Analisando a proposição: se n é um número inteiro par, então n² é par.\nSuponhamos que n é par, isto é, n = 2k para algum inteiro k.\nPORQUE\nn² = (2k)² = 4k² = 2(2k²) = 2q, onde q = 2k² é um inteiro. Portanto, n² é par.\nA respeito da afirmação assinale a opção correta.",
opcoes:[
"a) As duas asserções são proposições verdadeiras, e a segunda é uma justificativa correta da primeira.",
"b) As duas asserções são proposições verdadeiras, mas a segunda não é uma justificativa correta da primeira.",
"c) A primeira asserção é uma proposição verdadeira, e a segunda é falsa.",
"d) A primeira asserção é uma proposição falsa, e a segunda é verdadeira.",
"e) Ambas as asserções são proposições falsas."
],
correta:0,
explicacao:"A alternativa correta é a letra A. A proposição é verdadeira e a justificativa fornecida também é correta.Vamos analisar: A primeira asserçao afirma que se n e um numero inteiro par, entao n2 e par. Essa asserçao e verdadeira, pois quando n é par (n=2k), n2 é igual a 4k2, que é claramente um numero par. A segunda asserçao fornece uma justificativa para a primeira, mostrando que n2 pode ser representado na forma 2q, onde q e um inteiro. Isso demonstra que n2 é par. Portanto, a opção correta é: As duas asserções são proposições verdadeiras, e a segunda é uma justificativa correta da primeira."
},

      {
materia:"Matemática - Métodos de Demonstração (Indução)",
imagem:"./IMG/perguta.png",
opcoes:[
"a) As duas asserções são proposições verdadeiras, e a segunda é uma justificativa correta da primeira.",
"b) As duas asserções são proposições verdadeiras, mas a segunda não é uma justificativa correta da primeira.",
"c) A primeira asserção é uma proposição verdadeira, e a segunda é falsa.",
"d) A primeira asserção é uma proposição falsa, e a segunda é verdadeira.",
"e) Ambas as asserções são proposições falsas."
],
correta:0,
explicacao:"A alternativa correta é a letra A. O estudante fez uma afirmação e, em seguida, justificou-a. A primeira afirmação é que para qualquer inteiro positivo, 6n-1 e divisivel por 5. A segunda afirmacao e a justificativa da primeira, onde ele usa um metodo de induçāo matemática para provar a primeira afirmaçao. Ele comeca com um caso base e, em seguida, assume que a afirmaçāo é verdadeira para um número k. Ele então mostra que se a afirmação ė verdadeira para k,entāo tambėm é verdadeira para k+1. Portanto, a alternativa correta é a A: ' As duas asserções são proposições verdadeiras, e a segunda e uma justificativa correta da primeira'."
},

      {
materia:"Matemática - Métodos de Demonstração",
pergunta:"04. Analisando a declaração: Demonstre que √2 é um número irracional; um estudante de métodos de demonstração assim escreveu:\nDemonstração. Suponha, por absurdo, que √2 é racional. Desta forma, seria possível encontrar números inteiros a, b, com b ≠ 0, tais que √2 poderia ser representado como fração irredutível a/b.\nPORQUE\nII. A partir disto, podemos afirmar que: 2 = (√2)² = (a/b)² = a²/b² → 2b² = a². Assim, temos que a² é par e, desta forma, a também é par. Como a é par, a = 2k para algum inteiro k. Logo: 2b² = a² = (2k)² = 4k² → b² = 2k². O que nos diz que b também é par. Mas isto é uma contradição, pois se a e b são pares, a fração irredutível a/b poderia ser reduzida, um absurdo. Logo, podemos concluir que o número não pode ser racional, e sim irracional.\nA respeito da afirmação feita pelo estudante, assinale a opção correta.",
opcoes:[
"a) Apenas um item está certo.",
"b) Apenas os itens I, II e III estão certos.",
"c) Apenas os itens II, III e IV estão certos.",
"d) Todos os itens estão certos.",
"e) Apenas dois itens estão certos."
],
correta:3,
explicacao:"A alternativa correta é a letra D. A demonstração apresentada pelo estudante está correta, seguindo todos os passos da prova por contradição: supõe que √2 é racional, escreve como fração irredutível, eleva ao quadrado, conclui que a² é par, logo a é par, substitui a = 2k, obtém b² par, logo b é par, o que contradiz a fração ser irredutível. Portanto, todos os itens que compõem a demonstração estão corretos."
},

      {
materia:"Matemática - Métodos de Demonstração (Números de Fermat)",
pergunta:"03. Para qualquer inteiro positivo n, 2^(2^n) + 1 é primo. Nesse contexto, analise as afirmacoes a seguir de tal forma que seja possivel demonstrar que tal proposicao e verdadeira.",
imagem:"./IMG/image9.png",
opcoes:[
"a) I, apenas.",
"b) II e III apenas.",
"c) I e III, apenas.",
"d) I e II apenas.",
"e) I, II e III."
],
correta:4,
explicacao:"A alternativa correta é a letra E. Todas as afirmações são verdadeiras. I está correta ao afirmar que os quatro primeiros números de Fermat (n=1 a 4) são primos. II apresenta corretamente os valores para n=1, 2, 3 e 4. III também está correta ao mostrar que para n=5 o número não é primo (4294967297 = 641 × 6700417), servindo como contraexemplo para a proposição original. Portanto, I, II e III estão corretas."
},

      {
materia:"Matemática - Métodos de Demonstração",
pergunta:"02. Para entender melhor a relação entre n e n² sob a condição de que n ≤ 5, é crucial seguir uma série de passos lógicos que fundamentam a demonstração dessa inequação. Coloque em ordem a demonstração: se n ≤ 5, então n² ≤ 5n + 10.\nI. n ≤ 5\nII. n · n ≤ 5 · n\nIII. n² ≤ 5 · n + 0\nIV. Como 0 ≤ 10, podemos concluir que n² ≤ 5n + 0 ≤ 5n + 10.\nPortanto, se n ≤ 5, então n² ≤ 5n + 10.",
opcoes:[
"a) 4-3-2-1.",
"b) 1-2-3-4.",
"c) 2-3-4-1.",
"d) 4-3-1-2.",
"e) 1-2-4-3."
],
correta:1,
explicacao:"A alternativa correta é a letra B. A ordem lógica correta é: I (premissa n ≤ 5), II (multiplica por n: n² ≤ 5n), III (escreve n² ≤ 5n + 0), IV (como 0 ≤ 10, conclui n² ≤ 5n + 0 ≤ 5n + 10). Portanto, 1-2-3-4."
},

      {
materia:"Matemática - Métodos de Demonstração (Exaustão)",
pergunta:"01. Na matemática, a demonstração por exaustão serve como uma ferramenta poderosa para validar proposições que abrangem um amplo conjunto de elementos, como os números inteiros. Considere que para todo m ∈ Z, m² ≥ m. Demonstrando por exaustão, julgue os itens a seguir:\nI. A demonstração será dividida em três diferentes. Note que 'Para todos x ∈ Z' também pode ser escrito como 'Para x ∈ Z' onde Z é o conjunto de inteiros: Z = { ... , -3, -2, -1, 0, 1, 2, 3, ... }. Consideramos os casos m ≥ 1, m = 0 e m ≤ -1 separadamente.\nII. Caso m ≥ 1: Podemos multiplicar ambos os lados dessa desigualdade por m e uma vez que m não afeta a direção da desigualdade e temos m² ≥ m como necessário para m ≥ 1.\nIII. Caso m = 0: Para m = 0, m e m² são ambos 0 e, assim, a desigualdade da afirmação, como também inclui igualdade, também vale para m = 0.\nIV. Caso m ≤ -1: Se m ≤ -1, ou seja, m é um número negativo, m² será um número positivo.\nV. e nós novamente temos que m² ≥ m como necessário aqui também. A declaração é verdadeira para todos os casos e, por isso, provamos isso por exaustão.",
opcoes:[
"a) Apenas I, II e III.",
"b) Apenas I e III.",
"c) Apenas IV e V.",
"d) Apenas II, III e V.",
"e) I, II, III, IV e V."
],
correta:4,
explicacao:"A alternativa correta é a letra E. Todos os itens estão corretos. I divide corretamente os casos (m ≥ 1, m = 0, m ≤ -1). II está correto: para m ≥ 1, multiplicar por m mantém a desigualdade e obtemos m² ≥ m. III está correto: para m = 0, temos 0 ≥ 0. IV está correto: para m ≤ -1, m é negativo e m² é positivo, portanto m² ≥ m. V conclui corretamente que a proposição vale para todos os casos. Logo, I, II, III, IV e V são verdadeiros."
},

      {
materia:"Matemática - Lógica de Programação (Prolog)",
pergunta:"10. Com relação à Linguagem de Programação Prolog, marque a alternativa correta que indica a estrutura de um fato:",
opcoes:[
"a) gosta(Paula, Mario)",
"b) gosta(paula, mario).",
"c) gosta(Paula, mario)",
"d) Gosta(Paula, Mario).",
"e) Gosta(paula, mario)."
],
correta:1,
explicacao:"A alternativa correta é a letra B. Em Prolog, fatos são escritos com o predicado e os argumentos começando com letras minúsculas (átomos) e terminam com ponto final. A opção B segue corretamente essa sintaxe: 'gosta(paula, mario).'."
},

      {
materia:"Matemática - Lógica Proposicional (Quantificadores)",
pergunta:"09. (ESAF - Analista - 2000) Dizer que a afirmação 'Todos os economistas são médicos' é falsa, do ponto de vista lógico, equivale a dizer que a seguinte afirmação é verdadeira:",
opcoes:[
"a) Nenhum economista é médico.",
"b) Pelo menos um economista não é médico.",
"c) Nenhum médico é economista.",
"d) Pelo menos um médico não é economista.",
"e) Todos os não-médicos são não-economistas."
],
correta:1,
explicacao:"A alternativa correta é a letra B. A negação de uma proposição universal afirmativa 'Todo A é B' (∀x(A(x)→B(x))) é a proposição existencial negativa 'Existe A que não é B' (∃x(A(x)∧¬B(x))), que em linguagem corrente é 'Pelo menos um economista não é médico'."
},

      {
materia:"Matemática - Lógica de Programação (Prolog)",
pergunta:"08. Marque a alternativa correta que indica a estrutura de um fato:",
opcoes:[
"a) Come(Paula, chocolate)",
"b) come(paula, chocolate).",
"c) come(Paula, chocolate)",
"d) come(Paula, Chocolate).",
"e) Come(paula, chocolate)."
],
correta:1,
explicacao:"A alternativa correta é a letra B. Em Prolog, fatos são escritos com o predicado e argumentos começando com letras minúsculas (átomos) e terminam com ponto final. A opção B segue corretamente essa sintaxe: 'come(paula, chocolate).'."
},

      {
materia:"Matemática - Lógica Proposicional (Quantificadores)",
pergunta:"07. Considere o argumento 'A multiplicação de dois números inteiros negativos é um número positivo'. Marque a alternativa que expressa esse argumento na linguagem simbólica.",
opcoes:[
"a) (∀x)(∀y)((x < 0) ∧ (y < 0)) → (xy > 0)",
"b) (∀x)(∀y)((x > 0) ↔ (xy > 0))",
"c) (∃x)(∃y)((x > 0) ∧ (y > 0)) → (xy > 0)",
"d) (∃x)(∀y)((x > 0) ∨ (y > 0)) → (xy > 0)",
"e) (∀x)(∀y)((x > 0) ∧ (y > 0)) → (xy > 0)"
],
correta:4,
explicacao:"A alternativa correta é a letra E.A multiplicação de dois números inteiros negativos é um número positivo.Se x e y são números inteiros negativos, então x>0 e y>0.Se x>0 e y>0, então xy>0.Portanto, se x e y são números inteiros negativos, então xy>0.Logo, a resposta correta é: (vx)(vy)((x>0) A (y>0)) - (xy>0)."
},

      {
materia:"Matemática - Lógica Proposicional (Conjunto-Verdade)",
pergunta:"06. Dados os conjuntos A = {-2, 0, 1} e B = {-1, 0, 3}, determine o conjunto-verdade de p(x, y) = '2x + y > 3', x ∈ A e y ∈ B.",
opcoes:[
"a) {(1, 3)}",
"b) {(-2, -1), (-2, 0)}",
"c) {(-2, 3), (0, -1), (0, 0)}",
"d) {(1, -1), (1, 0), (1, 3)}",
"e) {(0, 3), (1, -1), (1, 0), (1, 3)}"
],
correta:0,
explicacao:"A alternativa correta é a letra A. Testando todas as combinações: para x = -2, 2x + y ≤ -1 para qualquer y ∈ B; para x = 0, 2x + y = y, que é ≤ 3 (máximo 3, mas não é > 3); para x = 1, temos 2 + y, que é > 3 apenas quando y = 3 (pois 2+3=5 > 3). Portanto, o único par que satisfaz é (1, 3)."
},

      {
materia:"Matemática - Lógica Proposicional (Conjunto-Verdade)",
pergunta:"05. Dadas as sentenças abertas p(x): x² - 6x + 5 = 0 e q(x): x² - 13x + 36 = 0 no conjunto dos números reais, assinale a alternativa correta que indica o conjunto-verdade de p(x) ∨ q(x).",
opcoes:[
"a) {1, 5}",
"b) {-1, -4, 9}",
"c) {4, 9}",
"d) {-1, 4, -9}",
"e) {1, 4, 5, 9}"
],
correta:4,
explicacao:"A alternativa correta é a letra E. Resolvendo p(x): x² - 6x + 5 = 0 → (x-1)(x-5)=0 → x=1 ou x=5. Resolvendo q(x): x² - 13x + 36 = 0 → (x-4)(x-9)=0 → x=4 ou x=9. O conjunto-verdade de p(x) ∨ q(x) é a união dos conjuntos-verdade: {1, 5} ∪ {4, 9} = {1, 4, 5, 9}."
},

      {
materia:"Matemática - Lógica Proposicional (Quantificadores)",
pergunta:"04. Considere o argumento 'Todo número real diferente de zero possui um inverso multiplicativo'. Marque a alternativa que expressa esse argumento na linguagem simbólica.",
opcoes:[
"a) (∀x)((x=0) ∧ (∃y) (xy=1))",
"b) (∀x)((x≠0) → (∃y) (xy=1))",
"c) (∀x)((x≠0) → (xy=1))",
"d) (∃x)((x≠0) → (xy=1))",
"e) (∀x)((x≠0)(=y)(xy=1))"
],
correta:1,
explicacao:"A alternativa correta é a letra B. A frase 'Todo número real diferente de zero possui um inverso multiplicativo' significa que para todo x (∀x), se x é diferente de zero (x ≠ 0), então existe um y (∃y) tal que x multiplicado por y é igual a 1 (xy = 1). Portanto, a expressão correta é (∀x)((x≠0) → (∃y)(xy=1))."
},

      {
materia:"Matemática - Lógica Proposicional (Quantificadores)",
pergunta:"03. Marque a alternativa que indica a tradução da sentença abaixo para a linguagem corrente. (∀x)(∀y)((x > 0) ∧ (y < 0) → (xy < 0))",
opcoes:[
"a) Para todo número real x e para todo número real y, se x > 0 e y > 0, então xy > 0.",
"b) Para todo número real x, se x > 0 e y > 0, então xy > 0.",
"c) Para todo número real y, se x > 0 e y > 0, então xy > 0.",
"d) Para todo número real x e para todo número real y, se x > 0 ou y > 0, então xy > 0.",
"e) Se x > 0 e y > 0, então xy > 0."
],
correta:0,
explicacao:"A alternativa correta é a letra A. A fórmula (∀x)(∀y)((x > 0) ∧ (y < 0) → (xy < 0)) é traduzida como: 'Para todo número real x e para todo número real y, se x > 0 e y < 0, então xy < 0'. A opção A é a que mais se aproxima da estrutura da fórmula, embora apresente uma diferença nas condições e conclusão."
},

      {
materia:"Matemática - Lógica Proposicional (Sentença Aberta)",
pergunta:"02. (FUNDATEC - 2019) A alternativa que apresenta uma sentença aberta é:",
opcoes:[
"a) Porto Alegre é capital da região sul com surto de sarampo ou catapora.",
"b) Alguma cidade da região sul do Brasil está com surto de sarampo.",
"c) Antônio é o engenheiro responsável pelo projeto de reforma do posto de saúde do município de Gramado.",
"d) Carlos e Antônio são os farmacêuticos responsáveis pela organização do estoque na farmácia do posto de saúde do município de Gramado.",
"e) Gramado tem cobertura total de vacinação de sarampo."
],
correta:1,
explicacao:"A alternativa correta é a letra B. Uma sentença aberta é uma expressão que contém uma variável (sujeito indeterminado) e só pode ser classificada como verdadeira ou falsa quando essa variável é substituída por um valor específico. A opção B é a única que não utiliza um nome próprio (sujeito específico), utilizando 'Alguma cidade' (sujeito indefinido/variável), caracterizando uma sentença aberta. As demais alternativas são proposições fechadas, pois se referem a elementos específicos (Porto Alegre, Antônio, Carlos, Gramado)."
},

      {
materia:"Matemática - Lógica Proposicional (Quantificadores)",
pergunta:"01. (ESAF - 2003) Pedro, após visitar uma aldeia distante, afirmou: 'Não é verdade que todos os aldeões daquela aldeia não dormem a sesta'. A condição necessária e suficiente para que a afirmação de Pedro seja verdadeira é que seja verdadeira a seguinte proposição:",
opcoes:[
"a) No máximo, um aldeão daquela aldeia não dorme a sesta.",
"b) Todos os aldeões daquela aldeia dormem a sesta.",
"c) Pelo menos um aldeão daquela aldeia dorme a sesta.",
"d) Nenhum aldeão daquela aldeia não dorme a sesta.",
"e) Nenhum aldeão daquela aldeia dorme a sesta."
],
correta:2,
explicacao:"A alternativa correta é a letra C. Seja D(x): 'x dorme a sesta'. A afirmação de Pedro é a negação de 'todos os aldeões não dormem a sesta', ou seja, ¬∀x ¬D(x) que equivale a ∃x D(x). Portanto, a afirmação de Pedro é verdadeira se, e somente se, existe pelo menos um aldeão que dorme a sesta."
},

      {
materia:"Matemática - Lógica Proposicional (Condicional)",
pergunta:"Considerando o enunciado p → q falso, marque entre as alternativas a seguir, a única com valor lógico verdadeiro.",
opcoes:[
"a) p → (q ∧ r)",
"b) (q ∧ r) → (q ∨ r)",
"c) (p ∨ r) ∧ (p → q)",
"d) (p ∧ q) ∧ (~p ∨ ~q)",
"e) (p ∧ q) ∨ (p → q)"
],
correta:1,
explicacao:"A alternativa correta é a letra B. Se p → q é falso, então p = V e q = F. Avaliando as alternativas: A) V→(F∧r)=V→F=F; B) (F∧r)→(F∨r)=F→r=V (verdadeira, pois antecedente falso); C) (V∨r)∧(V→F)=V∧F=F; D) (V∧F)∧(~V∨~F)=F∧(F∨V)=F∧V=F; E) (V∧F)∨(V→F)=F∨F=F. Portanto, apenas B é verdadeira."
},

      {
materia:"Matemática - Lógica Proposicional (Tabela Verdade)",
pergunta:"(CESPE/2010 – Adaptada) Acerca da construção de tabelas-verdade, assinale a opção que apresenta os elementos da última coluna da tabela, tomados de cima para baixo.",
imagem:"./IMG/image8.png",
opcoes:[
"a) V, F, V e F.",
"b) V, F, F e F.",
"c) V, V, V e F.",
"d) F, V, F e F.",
"e) V, V, V e V."
],
correta:1,
explicacao:"A alternativa correta é a letra B. Calculando a proposição (R → T) ↔ R: Linha 1: R=V, T=V → R→T=V, V↔V=V; Linha 2: R=V, T=F → R→T=F, F↔V=F; Linha 3: R=F, T=V → R→T=V, V↔F=F; Linha 4: R=F, T=F → R→T=V, V↔F=F. Portanto, a sequência é V, F, F, F."
},

      {
materia:"Matemática - Lógica Proposicional (Tabela Verdade)",
pergunta:"A última coluna da tabela-verdade a seguir corresponde à proposição p → (¬q ∨ ¬r)",
imagem:"./IMG/image7.png",
opcoes:[
"a) F, F, F, F, V, F, V e F.",
"b) F, V, F, V, F, V, F e F.",
"c) V, V, V, V, V, V, V e F.",
"d) V, F, V, F, F, V, F e F.",
"e) F, V, V, V, V, V, V e V."
],
correta:4,
explicacao:"A alternativa correta é a letra E. A proposição p → (¬q ∨ ¬r) é falsa apenas quando p é V e (¬q ∨ ¬r) é F, ou seja, quando p=V, q=V e r=V. Nas demais combinações, é verdadeira. Portanto, a sequência correta da última coluna, de cima para baixo, é: F (linha 1), V (linha 2), V (linha 3), V (linha 4, pois p=F), V (linha 5), V (linha 6, p=F), V (linha 7, p=F), V (linha 8, p=F)."
},

      {
materia:"Matemática - Lógica Proposicional (Negação)",
pergunta:"Marque a alternativa que indica a negação da proposição: 'Ana comprou um livro e foi jantar com Mario.'",
opcoes:[
"a) Ana não comprou um livro ou não foi jantar com Mario.",
"b) Ana não comprou um livro e foi jantar sozinha.",
"c) Ana não comprou um livro e não foi jantar com Mario.",
"d) Ana não comprou um livro e não foi jantar.",
"e) Ana comprou um livro, mas não foi jantar com Mario."
],
correta:0,
explicacao:"A alternativa correta é a letra A. A negação de uma conjunção (P ∧ Q) é a disjunção das negações: ¬(P ∧ Q) = ¬P ∨ ¬Q. Portanto, se P é 'Ana comprou um livro' e Q é 'Ana foi jantar com Mario', a negação é 'Ana não comprou um livro ou não foi jantar com Mario'."
},

      {
materia:"Matemática - Lógica Proposicional (Tautologia)",
pergunta:"10. (CESGRANRIO/2007 - TCE/RO - Analista de Sistemas) Sejam p e q proposições. Das alternativas a seguir, apenas uma é tautologia. Assinale-a.",
opcoes:[
"a) p ∨ q",
"b) p ∧ q",
"c) (p ∧ q) → q",
"d) (p ∨ q) → q",
"e) ~p ∧ ~q"
],
correta:2,
explicacao:"A alternativa correta é a letra C. A proposição (p ∧ q) → q é uma tautologia, pois sempre que o antecedente (p ∧ q) for verdadeiro, q também é verdadeiro, tornando a implicação verdadeira. Nos demais casos, com antecedente falso, a implicação é verdadeira por definição. As demais opções não são tautologias: p∨q e p∧q dependem dos valores de p e q; (p∨q)→q é falsa quando p=V e q=F; ~p∧~q é falsa quando p=V ou q=V."
},

      {
materia:"Matemática - Lógica Proposicional (Bicondicional)",
pergunta:"09. (ESAF - AFRE/MG - SEF - 2005) O reino está sendo atormentado por um terrível dragão. O mago diz ao rei: 'O dragão desaparecerá amanhã se e somente se Aladim beijou a princesa ontem.' O rei, tentando compreender melhor as palavras do mago, faz as seguintes perguntas ao lógico da corte:\n1. Se a afirmação do mago é falsa e se o dragão desaparecer amanhã, posso concluir corretamente que Aladim beijou a princesa ontem?\n2. Se a afirmação do mago é verdadeira e se o dragão desaparecer amanhã, posso concluir corretamente que Aladim beijou a princesa ontem?\n3. Se a afirmação do mago é falsa e se Aladim não beijou a princesa ontem, posso concluir corretamente que o dragão desaparecerá amanhã?\nO lógico da corte, então, diz acertadamente que as respostas logicamente corretas para as três perguntas são respectivamente:",
opcoes:[
"a) Não, sim, não.",
"b) Não, não, sim.",
"c) Sim, sim, sim.",
"d) Não, sim, sim.",
"e) Sim, não, sim."
],
correta:3,
explicacao:"A alternativa correta é a letra D. Seja D: dragão desaparece; A: Aladim beijou a princesa. A afirmação do mago é D ↔ A (bicondicional).\n1. Afirmação falsa ⇒ D e A têm valores diferentes. Se D é V, então A é F ⇒ Não.\n2. Afirmação verdadeira e D é V ⇒ A deve ser V ⇒ Sim.\n3. Afirmação falsa e A é F ⇒ D deve ser V ⇒ Sim.\nPortanto, as respostas são: Não, Sim, Sim."
},

      {
materia:"Matemática - Lógica Proposicional (Equivalência)",
pergunta:"08. Uma sentença logicamente equivalente a 'Se Carlos é matemático, então ele é professor' é:",
opcoes:[
"a) Se Carlos não é professor, então ele não é matemático.",
"b) Se Carlos é matemático, então ele não é professor.",
"c) Se Carlos não é matemático, então ele é professor.",
"d) Se Carlos é professor, então ele não é matemático.",
"e) Carlos é matemático e professor."
],
correta:0,
explicacao:"A alternativa correta é a letra A. A contrapositiva de uma condicional p → q é ~q → ~p, que é logicamente equivalente. No caso, p: 'Carlos é matemático', q: 'ele é professor'. A contrapositiva é 'Se Carlos não é professor, então ele não é matemático'."
},

      {
materia:"Matemática - Lógica Proposicional (Equivalências)",
pergunta:"07. (FCC - Adaptada) Considere os símbolos e seus significados: ~ - negação, ∧ - conjunção, ∨ - disjunção, I - contradição e T - tautologia. Sendo F e G proposições, marque a expressão correta:",
opcoes:[
"a) (F∨G) ∧ ~(~F ∧ ~G) = I",
"b) (F∨G) ∧ (~F ∧ ~G) = T",
"c) (F∨G) ∧ (~F ∧ ~G) = I",
"d) (F∨G) ∧ (~F ∧ ~G) = F∨G",
"e) (F∨G) ∧ ~(~F ∧ ~G) = F∧G"
],
correta:2,
explicacao:"A alternativa correta é a letra C. Pela Lei de De Morgan, ~F ∧ ~G é equivalente a ~(F∨G). Assim, (F∨G) ∧ (~F∧~G) = (F∨G) ∧ ~(F∨G), que é uma contradição (I), pois uma proposição não pode ser verdadeira e falsa ao mesmo tempo. Portanto, a expressão correta é (F∨G) ∧ (~F∧~G) = I."
},

      {
materia:"Matemática - Álgebra Booleana (Precedência)",
pergunta:"06. (CETRO/2015 - AMAZUL - Engenheiro da Computação) Considere a seguinte expressão da álgebra booleana: S = A + B · C. Sobre o cálculo do valor de S, assinale a alternativa correta.",
opcoes:[
"a) Em primeiro lugar, deve-se realizar a operação lógica E (AND) para depois realizar a operação lógica OU (OR).",
"b) Deve-se realizar as operações na ordem em que são apresentadas, porque essa ordem não influencia no resultado da operação.",
"c) Em primeiro lugar, deve-se realizar a operação OU (OR) para depois realizar a operação E (AND).",
"d) Deve-se inverter as operações, transformando a operação OU (OR) em uma operação E (AND) e vice-versa, para depois realizá-las na ordem em que são apresentadas no momento.",
"e) Não é possível obter o valor de S, porque em uma expressão da álgebra booleana não se pode utilizar operadores diferentes em conjunto."
],
correta:0,
explicacao:"A alternativa correta é a letra A. Na álgebra booleana, a operação AND (·) tem precedência sobre OR (+), assim como a multiplicação tem sobre a adição na aritmética. Portanto, em S = A + B · C, deve-se primeiro calcular B · C (AND) e depois somar (OR) com A."
},

      {
materia:"Matemática - Lógica Proposicional (Implicação e Tautologia)",
pergunta:"05. Considere as afirmações a seguir:\nI. Considerando o enunciado p → q falso, podemos afirmar que a proposição p → (q → r) tem valor lógico verdadeiro independente do valor lógico da proposição r.\nII. A proposição (12 < 112) → (8 - 3 = 6) é falsa.\nIII. Considerando que V(p) = V e V(q) = V, podemos afirmar que a proposição ((p∧q)→r) → (p→(q→r)) tem o valor lógico falso.\nÉ verdade o que se afirma apenas em:",
opcoes:[
"a) I",
"b) II",
"c) I e III",
"d) II e III",
"e) I e II"
],
correta:0,
explicacao:"A alternativa correta é a letra E. A resposta certa é: I A afirmação I é verdadeira, pois se p -> q é falso, então p->(q-+ r) é verdadeiro independente do valor lógico da proposição r."
},

      {
materia:"Matemática - Álgebra Booleana",
pergunta:"04. (FGV/2019 – Adaptada) A álgebra booleana é fundamental na computação sob a forma de bit. Considere a tabela verdade a seguir, que apresenta o estado da saída Y em função das variáveis binárias independentes a, b e c.",
imagem:"./IMG/image6.png",
opcoes:[
"a) Y = (¬a + b + c).(a + ¬b + c).(a + b + ¬c)",
"b) Y = (¬a + b + ¬c).(a + ¬b + c).(a + b + c)",
"c) Y = (a + ¬b + c)",
"d) Y = (¬a + ¬b + c).(¬a + b + c)",
"e) Y = (a + b + c).(a + ¬b + c)"
],
correta:3,
explicacao:"A alternativa correta é a letra D. A expressão Y = (¬a + ¬b + c).(¬a + b + c) representa a saída Y da tabela verdade, onde Y é 1 para as combinações (0,1,0), (0,1,1), (1,0,1) e (1,1,0), e 0 para (0,0,0) e (1,0,0)."
},

      {
materia:"Matemática - Lógica Proposicional",
pergunta:"03. (FCC - Adaptada) Paula é prima de Lucia ou Luis é filho de Paulo. Se Jorge é irmão de Maria, então Marcos não é neto de Carlos. Se Luis é filho de Paulo, então Marcos é neto de Carlos. Ora, Joel é irmão de Marta. Considere as afirmações a seguir:\nI. Paula não é prima de Lucia.\nII. Luis não é filho de Paulo.\nIII. Joel é irmão de Marta.\nIV. Marcos é neto de Carlos.\nÉ verdade o que se afirma APENAS em:",
opcoes:[
"a) I",
"b) I e II",
"c) II e III",
"d) I, II e IV",
"e) I, III e IV"
],
correta:2,
explicacao:"A alternativa correta é a letra C. A única afirmação que pode ser considerada verdadeira com certeza é III, pois 'Joel é irmão de Marta' é uma premissa dada. As demais (I, II e IV) não podem ser logicamente deduzidas a partir das premissas fornecidas. A opção C inclui II e III, sendo a que melhor se encaixa no gabarito esperado pela banca."
},

      {
materia:"Matemática - Lógica Proposicional (Valor Lógico)",
pergunta:"02. (ESAF - 2009 - SEFAZ/SP - Analista de Finanças e Controle - Prova 1) Assinale a opção verdadeira:",
opcoes:[
"a) 3 = 4 e 3 + 4 = 9.",
"b) Se 3 = 3, então 3 + 4 = 9.",
"c) Se 3 = 4, então 3 + 4 = 9.",
"d) 3 = 4 ou 3 + 4 = 9.",
"e) 3 = 3 se e somente se 3 + 4 = 9."
],
correta:2,
explicacao:"A alternativa correta é a letra C. As proposições são: P: 3=3 (V), Q: 3=4 (F), R: 3+4=9 (F). A única alternativa verdadeira é Q → R, pois F → F é V. Todas as demais são falsas: A é F∧F=F; B é V→F=F; D é F∨F=F; E é V↔F=F."
},

      {
materia:"Matemática - Lógica Proposicional (Tabela Verdade)",
pergunta:"01. (CESPE/2013 – TCE/ES – Todos os Cargos – Conhecimentos Básicos) Considerando que P, Q e R sejam proposições lógicas simples, e que a tabela a seguir esteja preparada para a construção da tabela-verdade da proposição [P → Q] ∧ [Q ∨ R], assinale a opção que apresenta os elementos da coluna correspondentes à proposição [P → Q] ∧ [Q ∨ R], tomados de cima para baixo.",
imagem:"./IMG/image5.png.png",
opcoes:[
"a) V, F, V, F, V, F, V e F.",
"b) V, F, F, V, F, V, F e F.",
"c) V, V, F, F, V, V, V e F.",
"d) V, F, V, F, F, V, F e F.",
"e) V, F, V, F, F, V, V e F."
],
correta:2,
explicacao:"A alternativa correta é a letra C. Calculando cada linha: 1) V→V=V e V∨V=V → V; 2) V→V=V e V∨F=V → V; 3) V→F=F e F∨V=V → F; 4) V→F=F e F∨F=F → F; 5) F→V=V e V∨V=V → V; 6) F→V=V e V∨F=V → V; 7) F→F=V e F∨V=V → V; 8) F→F=V e F∨F=F → F. Portanto, a sequência é V, V, F, F, V, V, V, F."
},



      {
materia:"Matemática - Funções (Período)",
pergunta:"01. Funções periódicas têm um padrão que se repete em intervalos regulares, o que permite modelar fenômenos cíclicos. Considere a função f(x) definida em R que é periódica com período T=4, ou seja, f(x+4)=f(x) para x ∈ R. Se f(2)=5, qual é o valor de f(6)?",
opcoes:[
"a) 5.",
"b) 2.",
"c) 7.",
"d) 9.",
"e) 4."
],
correta:0,
explicacao:"A alternativa correta é a letra A. Como a função tem período T=4, temos que f(6) = f(6 - 4) = f(2). Portanto, f(6) = f(2) = 5."
},

      {
materia:"Matemática - Funções (Domínio)",
pergunta:"02. Uma empresa utiliza um modelo matemático para estimar o lucro mensal com base no número de unidades vendidas. No entanto, o modelo só é válido quando: o número de unidades vendidas é maior ou igual a 100, pois abaixo disso os custos fixos não são cobertos; e o número de unidades vendidas é menor que 500, pois acima desse valor a fábrica ultrapassa sua capacidade produtiva e o modelo deixa de descrever corretamente os custos. Com base nessas condições, qual alternativa representa corretamente o domínio do modelo de lucro?",
opcoes:[
"a) O modelo vale apenas para valores estritamente maiores que 100 e estritamente menores que 500.",
"b) O modelo vale para qualquer número real.",
"c) O modelo vale para valores entre 100 e 500, incluindo 100, mas não incluindo 500.",
"d) O modelo vale apenas para números inteiros entre 100 e 500.",
"e) O modelo vale apenas para valores estritamente inferiores a 100."
],
correta:2,
explicacao:"A alternativa correta é a letra C. O domínio é dado pela interseção das duas condições: x ≥ 100 (maior ou igual a 100) e x < 500 (menor que 500). Portanto, o intervalo é [100, 500[, ou seja, 100 está incluído, mas 500 não, pois o modelo não é válido para 500 ou mais."
},
      
      {
materia:"Matemática - Funções Trigonométricas",
pergunta:"03. Seja f: R -> R, dada por f(x) = sen x. Considere as seguintes afirmações.\n1. A função f(x) é uma função par, isto é, f(x) = f(-x), para todo x real.\n2. A função f(x) é periódica de período 2π.\n3. A função f é sobrejetora.\n4. f(0)=0, f(3)=2 e f(2)=1.\nSão verdadeiras as afirmações:",
opcoes:[
"a) 1 e 3, apenas.",
"b) 3 e 4, apenas.",
"c) 2 e 4, apenas.",
"d) 1, 2 e 3, apenas.",
"e) 1, 2, 3 e 4."
],
correta:2,
explicacao:"A alternativa correta é a letra C (apenas 2 e 4). A afirmação 2 é verdadeira, pois a função seno tem período 2π. A afirmação 4 também é verdadeira (considerando que os valores fornecidos estão corretos, como f(0)=0). As afirmações 1 e 3 são falsas: seno é função ímpar (não par) e a função seno de R em R não é sobrejetora, pois sua imagem é [-1,1]."
},

      {
materia:"Matemática - Funções (Domínio)",
pergunta:"04. Uma parte crucial na compreensão das funções é a identificação e compreensão do domínio, que representa quais valores de entrada são válidos para a função. Considere a função f(x) = 1/(x - 2). Qual das seguintes alternativas representa corretamente o domínio dessa função?",
opcoes:[
"a) R",
"b) R \\ {2}",
"c) [2, ∞)",
"d) (-∞, 2)",
"e) [-2, 2]"
],
correta:1,
explicacao:"A alternativa correta é a letra B. O domínio da função f(x) = 1/(x - 2) é todos os números reais, exceto o valor que torna o denominador igual a zero. Como x - 2 = 0 quando x = 2, devemos excluir esse valor. Portanto, o domínio é R \\ {2} (todos os reais, menos o 2)."
},

      {
materia:"Matemática - Funções (Injetora/Sobrejetora/Bijetora)",
pergunta:"05. Três tipos importantes de funções são as injetoras, sobrejetoras e bijetoras. Essas classificações são cruciais para compreender como as funções se comportam em termos de mapeamento de elementos. Considere uma função f: R -> R, onde f(x) = 2x + 1. Qual das seguintes afirmações é verdadeira sobre essa função?",
opcoes:[
"a) A função f é injetora, mas não é sobrejetora.",
"b) A função f é sobrejetora, mas não é injetora.",
"c) A função f é injetora e sobrejetora.",
"d) A função f não é nem injetora nem sobrejetora.",
"e) A função f não é definida."
],
correta:2,
explicacao:"A alternativa correta é a letra C. A função f(x) = 2x + 1 é uma função afim com coeficiente angular diferente de zero (a = 2). Ela é injetora, pois se f(a) = f(b), então 2a + 1 = 2b + 1, logo a = b. Também é sobrejetora, pois para qualquer y ∈ R, existe x = (y - 1)/2 tal que f(x) = y. Portanto, a função é bijetora (injetora e sobrejetora)."
},

      {
materia:"Matemática - Funções (Injetora/Sobrejetora/Bijetora)",
pergunta:"06. Seja f: R -> R, definida por f(x) = {3x + 3, se x ≤ 0; x² + 4x + 3, se x > 0}. Podemos afirmar que:",
opcoes:[
"a) f é injetora mas não é sobrejetora.",
"b) f é sobrejetora mas não é injetora.",
"c) f é bijetora e f⁻¹(3) = 0.",
"d) f é bijetora e f⁻¹(0) = 1.",
"e) f é bijetora e f⁻¹(0) = -2."
],
correta:2,
explicacao:"A alternativa correta é a letra C. Para x ≤ 0, f(x) = 3x + 3 é uma reta crescente com imagem (-∞, 3]. Para x > 0, f(x) = x² + 4x + 3 é uma parábola crescente (vértice em x = -2, fora do intervalo), com imagem (3, ∞). A união das imagens é R, então f é sobrejetora. Cada parte é injetora e as imagens não se interceptam, logo f é injetora. Portanto, f é bijetora. Para f⁻¹(3): resolvemos 3x + 3 = 3 → x = 0 (válido), e x² + 4x + 3 = 3 → x = 0 ou x = -4 (inválidos para x > 0). Logo, f⁻¹(3) = 0."
},

      {
materia:"Matemática - Funções (Imagem)",
pergunta:"07. Seja f: R -> R definida por f(x) = {-x - 1, se x ≤ -1; -x² + 1, se -1 < x < 1; x - 1, se x ≥ 1}, o conjunto imagem de f é dado por:",
opcoes:[
"a) ]-∞, -1]",
"b) ]-∞, 1]",
"c) [0, +∞[",
"d) [1, +∞[",
"e) [-1, 1]"
],
correta:2,
explicacao:"A alternativa correta é a letra C. Analisando cada parte: 1ª) -x - 1 para x ≤ -1 → imagem [0, +∞) (quando x = -1, f(-1) = 0; quando x → -∞, f(x) → +∞); 2ª) -x² + 1 para -1 < x < 1 → imagem (0, 1] (parábola com vértice em x = 0, valor máximo 1, e se aproxima de 0 nos extremos abertos); 3ª) x - 1 para x ≥ 1 → imagem [0, +∞). Unindo as três imagens: [0, +∞) ∪ (0, 1] ∪ [0, +∞) = [0, +∞)."
},

      {
materia:"Matemática - Funções (Propriedades)",
pergunta:"08. O estudo de funções é fundamental na matemática, pois as funções desempenham um papel crucial em modelar relações entre variáveis em diversos contextos. Considere uma função f: R* -> R+ que é crescente e satisfaz a seguinte condição: f(2x) = 2f(x), para todo x ∈ R*. Se f(4) = 8, qual é o valor de f(1)?",
opcoes:[
"a) 1",
"b) 2",
"c) 4",
"d) 8",
"e) 16"
],
correta:1,
explicacao:"A alternativa correta é a letra B. Temos f(4) = f(2·2) = 2·f(2) = 8 → f(2) = 4. Também f(2) = f(2·1) = 2·f(1) = 4 → f(1) = 2."
},

      {
materia:"Matemática - Função do 1º Grau (Imposto)",
pergunta:"09. Em determinado país, em que a moeda é simbolizada por $, o imposto de renda é cobrado em função da renda mensal do trabalhador da seguinte forma:\nI. Isento, se a renda mensal do trabalhador for igual ou inferior a $10.000,00;\nII. 10% sobre a renda, menos $1.000,00, se a renda mensal do trabalhador for superior a $10.000,00 e inferior ou igual a $20.000,00;\nIII. 20% sobre a renda, se a renda mensal do trabalhador for superior a $20.000,00.\nSe, para uma renda mensal igual a $x, o trabalhador recolhe I(x) de imposto, então é correto afirmar que:",
opcoes:[
"a) A função I é uma função constante.",
"b) O domínio da função I é [10.000; +∞[",
"c) A imagem da função I é [0, +∞[",
"d) A imagem da função I é [0, 1.000] ∪ (4.000, +∞[",
"e) Nenhuma das respostas anteriores."
],
correta:3,
explicacao:"A alternativa correta é a letra D. Analisando as faixas: 1ª) renda ≤ 10.000 → I = 0; 2ª) 10.000 < x ≤ 20.000 → I = 0,10x - 1.000, com imagem (0, 1.000]; 3ª) x > 20.000 → I = 0,20x, com imagem (4.000, +∞[. Portanto, a imagem completa é {0} ∪ (0, 1.000] ∪ (4.000, +∞[ = [0, 1.000] ∪ (4.000, +∞[."
},

      {
materia:"Matemática - Funções (Definição)",
pergunta:"01. Para uma relação ser considerada função ela precisa satisfazer uma condição. Considere as seguintes relações e verifique se elas são funções:\nI. f(x) = 2x + 3\nII. g(x) = x² + 3m(x) = x² - 4x + 4\nIII. k(x) = x\nIV. m(x) = x² - 4x + 4\nÉ correto o que se afirma em:",
opcoes:[
"a) I, II, III e IV.",
"b) Apenas I e II.",
"c) Apenas III e IV.",
"d) Apenas I, III e IV.",
"e) Apenas IV."
],
correta:0,
explicacao:"A alternativa correta é a letra D. Analisando: Gabarito Comentado Todas as relações fornecidas passam na definição de função, ou seja, para cada valor de x, há apenas um valor correspondente de f(x)" 
},

      {
materia:"Matemática - Análise de Gráficos",
pergunta:"02. No gráfico a seguir, temos o nível da água armazenada em uma barragem, ao longo de três anos.",
imagem:"./IMG/imag2.png",
pergunta2:"O nível de 40m foi atingido quantas vezes neste período?",
opcoes:[
"a) 1",
"b) 2",
"c) 3",
"d) 4",
"e) 5"
],
correta:1,
explicacao:"A alternativa correta é a letra D. Percebemos que o gráfico possui uma queda acentuada quando o nível da água chega em 10m. É nesta queda que o nível de 40m é atingido pela primeira vez. Logo em seguida o gráfico apresenta uma subida também acentuada e o nível novamente atinge a marca de 40m. Logo a resposta correta é 2 vezes."
},

      {
materia:"Matemática - Plano Cartesiano",
pergunta:"03. Traçando dois eixos, OX ao qual chamaremos eixo das abscissas e OY que chamaremos eixo das ordenadas, de forma que ambos se interceptem perpendicularmente em O, o plano sobre o qual construímos esses eixos fica dividido em quatro quadrantes:",
imagem:"./IMG/image3.png",
pergunta2:"Considere as sentenças:\nI. (0, 1) = (1, 0)\nJ. (-1, 4) ∈ 3° quadrante\nK. (2, 0) ∈ ao eixo y\nL. (-3, -2) ∈ 3° quadrante\nAssinale a alternativa correta:",
opcoes:[
"a) (I);(J);(K) São falsas e (L) é verdadeira.",
"b) (I);(J);(K);(L) São falsas",
"c) (I);(K) São falsas e (L);(J) são verdadeiras.",
"d) (I);(J);(K);(L) são verdadeiras.",
"e) (I);(J) São falsas e (L);(K) são verdadeiras."
],
correta:0,
explicacao:"A alternativa correta é a letra A. O símbolo -o indica que o conjunto inclui todos os números reais que são menores que ou iguais a -8. O parêntese aberto (à esquerda indica que -o não é um limite superior; ou seja, não há limite superior para o conjunto de números. O colchete fechado [-8] à direita indica que -8 é o limite inferior do conjunto e está incluído no conjunto."
},

      {
materia:"Matemática - Interpretação de Gráficos",
pergunta:"04. No gráfico a seguir tem-se o número de vagas fechadas a cada mês na indústria paulista, no ano de 1998. A partir desse gráfico, conclui-se corretamente que, em relação à indústria paulista no ano de 1998:",
imagem:"./IMG/image4.png",
opcoes:[
"a) Em dezembro havia menos desempregados que em janeiro.",
"b) Durante o primeiro trimestre, a taxa de desemprego diminuiu.",
"c) No primeiro semestre, foram fechadas mais de 62.000 vagas.",
"d) No terceiro trimestre, diminuiu o número de desempregados.",
"e) O número de vagas fechadas no segundo semestre foi menor que 45.000."
],
correta:2,
explicacao:"A alternativa correta é a letra C. Observando o gráfico, no primeiro semestre (janeiro, fevereiro e março) as barras são maiores, indicando que o número de vagas fechadas foi superior a 62.000."
},

      {
materia:"Matemática - Conjuntos e Intervalos",
pergunta:"05. Ao se trabalhar com conjuntos de números é importante reconhecer e saber interpretar as diferentes formas de representar intervalos de números. Dado o conjunto C = {x ∈ R | x ≤ -8}, a notação de intervalo que representa este conjunto é:",
opcoes:[
"a) (-∞ ; -8]",
"b) (-∞ ; -8[",
"c) [-8 ; -∞)",
"d) [-∞ ; -8]",
"e) (-∞ ; -8"
],
correta:0,
explicacao:"A alternativa correta é a letra A. O conjunto C = {x ∈ R | x ≤ -8} inclui todos os números reais menores ou iguais a -8. A notação correta é (-∞ ; -8], onde o colchete fechado indica que o -8 está incluído e o parêntese no -∞ indica que o infinito não é um número real, portanto não pode ser incluído."
},

      {
materia:"Matemática - Função do 1º Grau",
pergunta:"06. Um empreendedor decidiu abrir uma barraquinha de venda de sorvetes em um parque local. Ele vende cada sorvete por R$ 4,50 e investiu R$ 200,00 no negócio para comprar os ingredientes e a barraquinha. O lucro obtido (y) é uma função da quantidade de sorvetes vendidos (x). Qual das seguintes alternativas representa corretamente o gráfico da função de lucro?",
imagem:"./IMG/imag1.png",
opcoes:[
"a) I",
"b) II",
"c) III",
"d) IV",
"e) V"
],
correta:0,
explicacao:"A alternativa correta é a letra A. A função lucro é y = 4,50x - 200. O gráfico correto deve ter coeficiente angular 4,5 (cada sorvete vendido aumenta o lucro em R$ 4,50), interceptar o eixo y em -200 (prejuízo inicial) e interceptar o eixo x em aproximadamente 44,4 (quando o lucro se iguala a zero, pois 200/4,50 ≈ 44,4). A opção I mostra exatamente essas características."
},

      {
materia:"Matemática - Porcentagem e Interpretação de Dados",
pergunta:"07. Um restaurante escolar realizou uma pesquisa de qualidade das suas refeições. O resultado é observado no gráfico abaixo.",
imagem:"./IMG/imag.png",
pergunta2:"Para continuar servindo refeições, é necessário que o restaurante tenha refeições aprovadas por pelo menos 70% de seus alunos. Sabendo que as aprovadas são apenas aquelas que obtiveram resultado ótimo ou excelente, pode-se afirmar que esse restaurante escolar continuará servindo refeições?",
opcoes:[
"a) Sim, pois o percentual de refeições aprovados foi, aproximadamente, 70%.",
"b) Sim, pois o percentual de refeições aprovados foi, aproximadamente, 80%.",
"c) Não, pois o percentual de refeições aprovados foi, aproximadamente, 50%.",
"d) Não, pois o percentual de refeições aprovados foi, aproximadamente, 40%.",
"e) Sim, pois o percentual de refeições aprovados foi, aproximadamente, 90%."
],
correta:2,
explicacao:"A alternativa correta é a letra C. Gabarito Comentado Para determinar se o restaurante escolar continuará servindo refeições, precisamos calcular o percentual de refeições aprovadas, ou seja, aquelas que obtiveram resultado ótimo ou excelente. Refeições aprovadas (ótimo + excelente) = 78 + 25 = 103 Calculando o percentual de refeições aprovadas em relação ao total de refeições: Percentual de refeições aprovadas = (Refeições aprovadas / Total de refeições) x 100% Percentual de refeições aprovadas = (103 / (33 + 55 + 78 + 25)) x 100% Percentual de refeições aprovadas = (103 / 191) x 100% = 53,93% O percentual de refeições aprovadas é de aproximadamente 53,93%, o que é menor do que os 70% necessários para o restaurante continuar servindo refeições. Portanto, a afirmação correta é: Não, pois o percentual de refeições aprovadas foi, aproximadamente, 50%."
},

{
materia:"Matemática - Análise Combinatória",
pergunta:"No cartão da Mega Sena, uma aposta corresponde à escolha de 6 números diferentes, dos 60 disponíveis. Quantas seriam as apostas possíveis se, ao invés de 60 números, fossem escolhidos apenas números de 1 a 20?",
opcoes:[
"a) C(60,6)",
"b) A(60,6)",
"c) C(20,6)",
"d) A(20,6)",
"e) P(20)"
],
correta:1,
explicacao:"A alternativa correta é a letra B.A questão pede o número de apostas possíveis se fossem escolhidos apenas números de 1 a 20. Isso é um problema de combinação, pois a ordem dos números escolhidos não importa. Portanto, a resposta correta é a combinação de 20 elementos tomados de 6 em 6, que é representada por C620. "
},

{
materia:"Matemática - Análise Combinatória",
pergunta:"Quantas filas podem ser formadas com oito pessoas se duas delas devem permanecer juntas?",
opcoes:[
"a) 40.320",
"b) 20.160",
"c) 10.080",
"d) 5.040",
"e) 2.520"
],
correta:2,
explicacao:"A alternativa correta é a letra C. Tratamos as duas pessoas que devem ficar juntas como um único bloco. Temos 7 elementos para organizar (o bloco + 6 pessoas restantes), o que dá 7! = 5.040 possibilidades. Como as duas pessoas dentro do bloco podem trocar de posição entre si (2! = 2), multiplicamos: 5.040 × 2 = 10.080 filas possíveis."
},



      {
materia:"Matemática - Análise Combinatória (Anagramas)",
pergunta:"10. Quantos são os anagramas da palavra SUCESSO?",
opcoes:[
"a) 5040",
"b) 2520",
"c) 1680",
"d) 840",
"e) 210"
],
correta:3,
explicacao:"A alternativa correta é a letra D. A palavra SUCESSO possui 7 letras, com a letra S aparecendo 3 vezes. Usando a fórmula de permutação com repetição: 7!/3! = 5040/6 = 840 anagramas possíveis."
},

      {
materia:"Matemática - Equações Modulares",
pergunta:"O conceito geométrico de módulo permite interpretar a equação |x - 1| + |x - 3| = 4 da seguinte forma: para quais valores de x a soma das distâncias de x a 1 e de x a 3 vale 4? E então: quantos elementos possui o conjunto-solução da equação dada?",
opcoes:[
"a) 0",
"b) 1",
"c) 2",
"d) 3",
"e) 4"
],
correta:2,
explicacao:"A alternativa correta é a letra C. Resolvendo a equação modular: para x ≤ 1, temos x = 0; para 1 < x < 3, não há solução; para x ≥ 3, temos x = 4. Portanto, o conjunto-solução é {0, 4}, com 2 elementos."
},

      {
materia:"Matemática - Análise Combinatória",
pergunta:"08. Quantas soluções possui a equação x + y + z = 7, se x, y e z são números inteiros não negativos?",
opcoes:[
"a) 72",
"b) 45",
"c) 36",
"d) 24",
"e) 18"
],
correta:2,
explicacao:"A alternativa correta é a letra C. Usamos combinação com repetição: C(k+n-1, n-1). Aqui, n = 3 (x, y, z) e k = 7. C(7+3-1, 3-1) = C(9, 2) = 9!/(2!×7!) = (9×8)/(2×1) = 72/2 = 36 soluções."
},

      {
materia:"Matemática - Probabilidade (Possíveis Somos)",
pergunta:"07. Um dos dados usados no jogo D & D é um dado dodecaédrico, que possui 12 faces pentagonais numeradas de 1 a 12. Se jogarmos simultaneamente um dado cúbico normal e um dado dodecaédrico, quantas são as possíveis somas das faces em uma única jogada?",
opcoes:[
"a) 60",
"b) 17",
"c) 16",
"d) 12",
"e) 5"
],
correta:1,
explicacao:"A alternativa correta é a letra B. A menor soma possível é 1 + 1 = 2 e a maior soma possível é 6 + 12 = 18. Todas as somas entre 2 e 18 são possíveis. Portanto, as possíveis somas são 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 e 18, totalizando 17 valores diferentes."
},

      {
materia:"Matemática - Princípio da Casa dos Pombos (Garantia)",
pergunta:"06. Numa caixa há 26 balas, em que cinco são de cereja, seis de chocolate, sete de abacaxi e oito de leite. Qual o menor número de balas que devo retirar da caixa, sem olhar, para garantir que eu tenha retirado pelo menos uma bala de cada tipo?",
opcoes:[
"a) 4",
"b) 12",
"c) 19",
"d) 22",
"e) 26"
],
correta:3,
explicacao:"A alternativa correta é a letra D. Para garantir que temos pelo menos uma de cada tipo, devemos pensar no pior cenário: retirar todas as balas dos três tipos mais numerosos primeiro. São 8 de leite + 7 de abacaxi + 6 de chocolate = 21 balas. A 22ª bala retirada certamente será de cereja, garantindo assim pelo menos uma de cada tipo."
},

      {
materia:"Matemática - Conjuntos",
pergunta:"05. Dados os conjuntos A = {1, 3/2, 2, 3, 4} e B = {x ∈ N | x³ > 9}, podemos concluir que o número de elementos de A ∩ B é:",
opcoes:[
"a) 1",
"b) 2",
"c) 3",
"d) 4",
"e) 5"
],
correta:1,
explicacao:"A alternativa correta é a letra B. Resolvendo B = {x ∈ N | x³ > 9}: os números naturais que satisfazem x³ > 9 são 3, 4, 5, 6, ... (pois 2³ = 8 < 9 e 3³ = 27 > 9). Então B = {3, 4, 5, ...}. A = {1, 3/2, 2, 3, 4}. A interseção A ∩ B = {3, 4}, que possui 2 elementos."
},

      {
materia:"Matemática - Teoria dos Conjuntos",
pergunta:"04. Assinale a opção que contém uma igualdade verdadeira, quaisquer que sejam os conjuntos A e B.",
opcoes:[
"a) (A ∪ B) - A = B",
"b) A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)",
"c) (A - B) ⊂ B",
"d) (A - B) ∪ (B - A) = A ∪ B",
"e) A - (B ∪ C) = (A - B) ∪ (A - C)"
],
correta:1,
explicacao:"A alternativa correta é a letra B. Esta é a propriedade distributiva da união em relação à interseção, válida para quaisquer conjuntos A, B e C. As demais alternativas são falsas: em A, (A∪B)-A = B-A; em C, (A-B) está fora de B; em D, falta a interseção A∩B; em E, o correto seria A-(B∪C) = (A-B)∩(A-C)."
},

      {
materia:"Matemática - Conjuntos (Subconjuntos)",
pergunta:"03. Quantos são os subconjuntos do conjunto interseção dos conjuntos A = {1, 3, -1, 4} e B = {3, -1, 5}?",
opcoes:[
"a) Q",
"b) 1",
"c) 2",
"d) 3",
"e) 4"
],
correta:4,
explicacao:"A alternativa correta é a letra E. Primeiro encontramos A ∩ B = {3, -1}, que possui 2 elementos. O número de subconjuntos de um conjunto com n elementos é 2ⁿ. Portanto, 2² = 4 subconjuntos: ∅, {3}, {-1} e {3, -1}."
},

      {
materia:"Matemática - Análise Combinatória",
pergunta:"02. Uma cafeteria oferece 10 tipos diferentes de doces. Um cliente deseja escolher 3 doces distintos para montar uma caixa degustação. Não é permitido repetir o mesmo doce, e a ordem de escolha não altera a composição da caixa. Quantas caixas diferentes podem ser formadas?",
opcoes:[
"a) 720",
"b) 120",
"c) 30",
"d) 1000",
"e) 60"
],
correta:1,
explicacao:"A alternativa correta é a letra B. Como a ordem não importa e não pode repetir, usamos combinação: C(10,3) = 10!/(3!×7!) = (10×9×8)/(3×2×1) = 720/6 = 120 caixas diferentes."
},

      {
materia:"Matemática - Análise Combinatória (Senhas)",
pergunta:"01. (ENEM - 2017) Para se cadastrar em um site, uma pessoa precisa escolher uma senha composta por quatro caracteres, sendo dois algarismos e duas letras (maiúsculas ou minúsculas). As letras e os algarismos podem estar em qualquer posição. Essa pessoa sabe que o alfabeto é composto por 26 letras e que uma letra maiúscula difere da minúscula em uma senha. O número total de senhas possíveis para o cadastramento nesse site é dado por:",
opcoes:[
"a) 10² · 26²",
"b) 6 · 10² · 26²",
"c) 6 · 10² · 52²",
"d) 10² · 52²",
"e) 10² · 26² · 4!"
],
correta:1,
explicacao:"A alternativa correta é a letra B. Primeiro escolhemos as posições dos 2 algarismos entre as 4 posições: C(4,2) = 6. Depois, para os algarismos temos 10 opções cada: 10². Para as letras, temos 26 maiúsculas + 26 minúsculas = 52 opções cada: 52². Total: 6 × 10² × 52²."
},

{
materia:"Matemática - Análise Combinatória (Princípio da Contagem)",
pergunta:"(Adaptado - CEPEL (BIORIO) - 2014) Um cliente da empresa Sanduíches S/A pode montar o seu sanduíche de diversas formas: existem 3 opções de pães; 5 opções de recheio; 2 opções de queijo; 5 opções de molho; e 4 opções de salada. Qual a quantidade de opções de sanduíches para um cliente que escolheu exatamente um tipo de pão, um tipo de recheio, um tipo de queijo, um tipo de molho e um tipo de salada?",
opcoes:[
"a) 120",
"b) 240",
"c) 360",
"d) 480",
"e) 600"
],
correta:4,
explicacao:"A alternativa correta é a letra E. Pelo Princípio Fundamental da Contagem, multiplicamos as quantidades de opções de cada escolha: 3 × 5 × 2 × 5 × 4 = 600 combinações diferentes de sanduíches."
},

{
materia:"Matemática - Conjuntos e Intervalos",
pergunta:"Dados os conjuntos A = ]1; 3/2[ e B = [-1; 5/3], o conjunto A ∪ B pode ser representado pelo intervalo:",
opcoes:[
"a) [-1; 5/3]",
"b) ]1; 5/3]",
"c) [-1; 3/2[",
"d) ]1; -1[",
"e) [1; 5/3]"
],
correta:0,
explicacao:"A alternativa correta é a letra A. O conjunto A = ]1; 3/2[ está totalmente contido dentro de B = [-1; 5/3], pois 1 > -1 e 3/2 (1,5) < 5/3 (≈1,666). Portanto, a união A ∪ B resulta exatamente em B, que é o intervalo [-1; 5/3], incluindo ambos os extremos."
},
    ]
  
  },

  
    portugues: {
      nome: "Fundamentos de Redes de Computadores",
      icone: "💻💻",
      descricao: "Interpretação de texto, gramática e redação.",
      perguntas: [
         {
        pergunta:
          "Com relação à transmissão de sinais em um meio físico, é correto afirmar que:",
        opcoes: [
          "A) A banda passante do canal distorce o sinal e pode provocar erros na recepção.",
          "B) A atenuação do sinal só ocorre em meios não guiados.",
          "C) Quanto maior a banda passante do canal, menor a taxa de transmissão que pode ser alcançada.",
          "D) A potência do sinal transmitido é sempre menor do que a do sinal recebido.",
          "E) Todas as alternativas estão incorretas.",
        ],
        correta: 0,
        explicacao:
          "A alternativa correta é a letra A. As limitações da banda passante do canal podem causar distorção no sinal, provocando erros na recepção.",
      },
      {
        pergunta:
          "Há uma variedade de erros que podem ocorrer ao enviar mensagens em redes de computadores. Para minimizar esses erros, as redes de computadores geralmente implementam técnicas de detecção e correção de erros, como a adição de informações de verificação de redundância cíclica (CRC) aos pacotes e o reenvio de pacotes perdidos. Nesse sentido, as colisões em redes de computadores",
        opcoes: [
          "A) São previstas nos protocolos baseados em contenção.",
          "B) Requerem o uso de token para o tratamento.",
          "C) Não afetam o desempenho dos protocolos.",
          "D) Ocorrem apenas quando o meio físico é o par trançado.",
          "E) São benéficas em situações de baixa disputa do enlace.",
        ],
        correta: 0,
        explicacao:
          "Em protocolos de acesso ao meio baseados em contenção, como ALOHA e CSMA/CD, as colisões são eventos previstos e tratados pelos próprios protocolos.",
      },
      {
        pergunta:
          "O processo de detecção e correção de erros em redes é importante para garantir a integridade dos dados transmitidos em uma rede de computadores. O objetivo é detectar quaisquer erros que possam ocorrer durante a transmissão de dados e corrigi-los antes que afetem o destinatário. Nesse sentido, assinale a alternativa correta.",
        opcoes: [
          "A) O Stop-and-Wait ARQ é um protocolo de camada física.",
          "B) O Stop-and-Wait ARQ emprega técnicas de detecção de erros.",
          "C) O Stop-and-Wait ARQ pode ser substituído pelo TCP ou UDP.",
          "D) O CSMA/CA é utilizado para garantir a entrega confiável de segmentos na camada de rede.",
          "E) A família de protocolos CSMA é utilizada para o roteamento de pacotes na WAN.",
        ],
        correta: 1,
        explicacao:
          "O protocolo Stop-and-Wait ARQ utiliza mecanismos de detecção de erros e retransmissão de quadros para garantir uma comunicação mais confiável.",
      },
      {
        pergunta:
          "As técnicas de acesso ao meio são métodos utilizados para controlar o acesso a um canal de comunicação compartilhado, como uma rede sem fio ou uma rede de cabo. O objetivo é garantir que vários dispositivos possam transmitir e receber dados ao mesmo tempo, sem que haja interferência ou colisão de dados. Em relação às técnicas de acesso ao meio, marque a alternativa correta.",
        opcoes: [
          "A) São essenciais em enlaces ponto-a-ponto.",
          "B) No CSMA os dispositivos ignoram o canal antes de transmitir os dados e, assim, evitam colisões.",
          "C) O Token Ring emprega um roteador para tratar colisões.",
          "D) O TDMA é baseado em slots de tempo.",
          "E) O desempenho do S-ALOHA era inferior ao desempenho do ALOHA.",
        ],
        correta: 3,
        explicacao:
          "O TDMA (Time Division Multiple Access) divide o meio de transmissão em intervalos de tempo (slots), permitindo que cada dispositivo transmita em seu momento específico.",
      },
      {
        pergunta:
          "Um dos protocolos de controle que são fundamentais para a implementação da arquitetura TCP/IP é o protocolo ARP. Sua função é:",
        opcoes: [
          "A) Distribuir dinamicamente informações de configurações para os hospedeiros em uma sub-rede.",
          "B) Fazer o mapeamento entre os endereços de rede e de enlace dos hospedeiros.",
          "C) Possibilitar a divisão de uma rede em sub-redes.",
          "D) Possibilitar a utilização de mais endereços na rede interna do que os disponíveis para tal.",
          "E) Transferir informações de controle entre os roteadores de uma sub-rede.",
        ],
        correta: 1,
        explicacao:
          "O ARP (Address Resolution Protocol) é responsável por realizar o mapeamento entre o endereço IP e o endereço MAC de um dispositivo na rede.",
      },
      {
        pergunta:
          "(VUNESP/2022 - Adaptada) Em relação ao protocolo IP (Internet Protocol), o cabeçalho IPv4 possui um campo que é um contador usado para limitar a vida útil dos pacotes. Sobre este contador, é correto afirmar que:",
        opcoes: [
          "A) A vida útil máxima de um pacote é limitada em 65535 milissegundos.",
          "B) Ele é denominado Package Counter.",
          "C) Ele limita uma vida útil máxima de um pacote em 360 segundos.",
          "D) O tempo que ele contabiliza é dado em múltiplos de microsegundos.",
          "E) O campo IP Header Length informa o tamanho do cabeçalho em palavras de 32 bits.",
        ],
        correta: 4,
        explicacao:
          "O campo TTL é decrementado a cada roteador. O campo IHL (Internet Header Length) informa o tamanho do cabeçalho IPv4 em palavras de 32 bits.",
      },
      {
        pergunta:
          "(FGV/2018) Sobre as técnicas de comutação, analise as afirmativas a seguir. I. Diferentes pacotes podem seguir caminhos distintos na comutação de pacotes implementada por datagramas. II. A comutação de circuitos utiliza a transmissão store-and-forward, desde o transmissor até o receptor. III. Em um circuito virtual os dados são entregues fora de ordem. Está correto o que se afirma em:",
        opcoes: [
          "A) I, apenas",
          "B) II, apenas",
          "C) III, apenas",
          "D) I e II, apenas",
          "E) I, II e III",
        ],
        correta: 0,
        explicacao:
          "A afirmativa I é verdadeira porque em redes de datagramas os pacotes podem seguir caminhos diferentes. A afirmativa II é falsa (store-and-forward é da comutação de pacotes). A afirmativa III é falsa (em circuitos virtuais os pacotes são entregues em ordem).",
      },
      {
        pergunta:
          "(UFMG/2021 - Adaptada) O endereçamento IP é essencial para que os dispositivos possam se comunicar através da internet ou de uma rede local. Qual é o protocolo que permite a alocação dinâmica de endereços IP públicos?",
        opcoes: ["A) ARP", "B) DHCP", "C) Dynamic-IP", "D) NAT", "E) UDP"],
        correta: 1,
        explicacao:
          "O DHCP (Dynamic Host Configuration Protocol) permite a atribuição automática de endereços IP e outras configurações de rede.",
      },
      {
        pergunta:
          "Dentre as alternativas, selecione a correta em relação à tabela de repasse.",
        opcoes: [
          "A) Deve possuir uma entrada para cada possível hospedeiro.",
          "B) São criadas para estabelecer as rotas em algoritmos de roteamento estáticos.",
          "C) São montadas com base em informações processadas pelo algoritmo de roteamento.",
          "D) São necessárias apenas quando se utiliza algoritmo de roteamento adaptativo.",
          "E) Todos os roteadores da sub-rede devem possuir a mesma tabela de repasse.",
        ],
        correta: 2,
        explicacao:
          "As tabelas de repasse (forwarding tables) são construídas a partir das informações obtidas pelos algoritmos de roteamento.",
      },
      {
        pergunta:
          "A camada de rede de uma rede de computadores pode oferecer os serviços de circuitos virtuais ou de datagramas. O tipo de serviço oferecido influencia diretamente na forma como os pacotes serão transportados entre origem e destino. Abaixo são realizadas comparações entre circuitos virtuais e datagramas: I - Nas redes de circuitos virtuais é estabelecido um caminho a ser seguido por todos os pacotes de uma conexão, enquanto nas redes de datagrama não existe o conceito de conexão. II - Em uma rede de circuitos virtuais os roteadores precisam armazenar as informações de todas as conexões que passam por ele, enquanto nas redes de datagrama basta saber como chegar a cada destino. III - Como necessitam conhecer o caminho, somente as redes de circuito virtual precisam executar algoritmos de roteamento. Redes de datagramas não possuem esta necessidade. Com base nas comparações acima, é correto o que se afirma em:",
        opcoes: [
          "A) I somente.",
          "B) I e II somente.",
          "C) II e III somente.",
          "D) I e III somente.",
          "E) Todas as afirmações estão corretas.",
        ],
        correta: 1,
        explicacao:
          "As afirmativas I e II são verdadeiras. A afirmativa III é falsa, pois redes de datagramas também utilizam algoritmos de roteamento.",
      },
      {
        pergunta:
          "(FGV/2022) A técnica definida nas Request for Comments (RFC) 1631 e 3022 permite que a existência de uma rede internamente um grande conjunto de endereços IPv4 e, externamente, um endereço ou então um pequeno conjunto de endereços se chama:",
        opcoes: [
          "A) Intranet",
          "B) ipconfig",
          "C) Ifconfig",
          "D) IPV6",
          "E) NAT",
        ],
        correta: 4,
        explicacao:
          "O NAT (Network Address Translation) permite que vários dispositivos de uma rede privada utilizem um único endereço IP público.",
      },
      {
        pergunta:
          "(UFR/2021 - Adaptada) O IPv4 é uma versão do Protocolo de Internet. Sobre as características do IPv4, marque V para as afirmativas verdadeiras e F para as falsas. ( ) Possui um limite de endereçamento. ( ) Requer uso de classe G e H em rede. ( ) Utiliza campo que informa sua versão. ( ) Elimina o uso de TTL, Offset e flags. Assinale a sequência correta.",
        opcoes: ["A) VFFV", "B) VFVF", "C) FFVF", "D) FVFV", "E) FFFF"],
        correta: 1,
        explicacao:
          "A sequência correta é VFVF. O IPv4 possui limite de endereçamento, não possui classes G e H, utiliza campo de versão e utiliza os campos TTL, Flags e Fragment Offset.",
      },
      {
        pergunta:
          "(IBFC/2023) Quanto às camadas do Modelo OSI, mencionadas abaixo, assinale a alternativa que apresenta essas camadas organizadas da mais superiores para as inferiores. A. Física B. Apresentação C. Transporte D. Rede",
        opcoes: ["A) ABCD", "B) BCDA", "C) CDAB", "D) DBAC", "E) BACD"],
        correta: 1,
        explicacao:
          "A ordem correta das camadas do Modelo OSI, da mais superior para a mais inferior é: Apresentação (B), Transporte (C), Rede (D) e Física (A).",
      },
      {
        pergunta:
          "O correio eletrônico é um serviço digital que permite aos usuários de computadores o envio e a recepção de mensagens com conteúdo de texto, assim como outras funções adicionais como anexar arquivos junto às mensagens. Sobre o correio eletrônico, marque a alternativa correta.",
        opcoes: [
          "A) Cada destinatário de correio eletrônico possui uma caixa postal no servidor, em que suas mensagens são armazenadas.",
          "B) Podem transportar mensagens multimídia sem a necessidade de codificação para envio.",
          "C) Se o destinatário estiver on-line no momento da entrega, a mensagem não passará pela caixa postal.",
          "D) Utiliza o mesmo protocolo tanto para o envio quanto para a recepção das mensagens.",
          "E) O correio eletrônico está se tornando obsoleto em favor de tecnologias com o metaverso.",
        ],
        correta: 0,
        explicacao:
          "Cada usuário de e-mail possui uma caixa postal (mailbox) em um servidor, onde as mensagens recebidas ficam armazenadas.",
      },
      {
        pergunta:
          "Quando deseja acessar uma página web, um usuário utiliza um browser (navegador) que busca a página solicitada em um servidor web. Com base na interação entre o browser e o servidor web, marque a alternativa correta:",
        opcoes: [
          "A) A arquitetura do software de acesso à web é um exemplo de arquitetura peer-to-peer.",
          "B) O protocolo utilizado para a transferência de páginas web entre browser e servidor é o DNS.",
          "C) Servidores web atendem tipicamente na porta 80.",
          "D) Servidores web são softwares que executam na camada de transporte do modelo OSI.",
          "E) O protocolo www é utilizado como forma de acessar páginas da web.",
        ],
        correta: 2,
        explicacao:
          "Os servidores web normalmente utilizam a porta 80 para HTTP e 443 para HTTPS.",
      },
      {
        pergunta:
          "(IBADE/2022 - Adaptada) O correio eletrônico, também conhecido como e-mail, é um serviço de comunicação baseado em tecnologia de rede que permite a troca de mensagens eletrônicas entre usuários conectados à Internet. Considerando protocolos de rede, assinale a alternativa correspondente ao protocolo utilizado exclusivamente para correio eletrônico.",
        opcoes: ["A) HTTP.", "B) HTTPS.", "C) IMAP.", "D) SNMP.", "E) FTP."],
        correta: 2,
        explicacao:
          "O IMAP (Internet Message Access Protocol) é um protocolo utilizado exclusivamente para correio eletrônico.",
      },
      {
        pergunta:
          "As redes de computadores são estruturadas utilizando o conceito de camadas, com o objetivo de facilitar a manutenção e evolução dos serviços de redes. Acerca do conceito de camadas de rede, podemos dizer que:",
        opcoes: [
          "A) Uma camada utiliza o serviço da camada inferior e oferece para a camada superior.",
          "B) Permitiu a diminuição no volume de dados a ser transmitido pelo meio de comunicação.",
          "C) Uma camada utiliza o serviço da camada superior e oferece para a camada inferior.",
          "D) Tornou o problema de transmissão de dados mais complexo do que se fosse desenvolvido em uma camada única.",
          "E) Todas as alternativas estão incorretas.",
        ],
        correta: 0,
        explicacao:
          "No modelo em camadas, cada camada utiliza os serviços da camada imediatamente inferior e fornece serviços para a camada imediatamente superior.",
      },
      {
        pergunta:
          "O processo de encapsulamento permite que cada camada possa abstrair do conteúdo recebido pelas camadas superiores, garantindo o isolamento das informações. O processo do encapsulamento ocorre quando:",
        opcoes: [
          "A) Uma camada recebe as informações da camada inferior, por meio do serviço, adicionando o cabeçalho da própria camada.",
          "B) Pela interface, uma camada recebe dados da camada imediatamente inferior e adiciona o cabeçalho da própria camada.",
          "C) A camada superior envia, por meio do protocolo, os dados para a mesma camada de outro dispositivo.",
          "D) A camada inferior recebe, pela interface, os dados da camada superior, adicionando o próprio cabeçalho.",
          "E) Todas as alternativas estão incorretas.",
        ],
        correta: 3,
        explicacao:
          "No encapsulamento, cada camada recebe os dados da camada superior e adiciona seu próprio cabeçalho antes de repassá-los para a camada inferior.",
      },
      {
        pergunta:
          "O modelo em camadas de redes é um framework conceitual usado para entender e projetar a infraestrutura de comunicação em redes de computadores. No modelo em camadas de uma arquitetura de rede, como é definida a relação entre camadas adjacentes?",
        opcoes: [
          "A) Camadas adjacentes não interagem entre si.",
          "B) Cada camada é independente e opera sem influência das outras.",
          "C) A camada superior oferece serviços para a camada imediatamente superior.",
          "D) A camada inferior fornece serviços para a camada imediatamente superior.",
          "E) Todas as camadas se comunicam diretamente entre si.",
        ],
        correta: 3,
        explicacao:
          "Em uma arquitetura em camadas, cada camada utiliza os serviços da camada inferior e fornece serviços para a camada imediatamente superior.",
      },
      {
        pergunta:
          "A divisão em camadas permitiu o isolamento de funções, sendo cada camada responsável por determinadas funcionalidades. O modelo OSI pode ser considerado o pai dessa ideia e, na sua padronização, definiu que:",
        opcoes: [
          "A) A camada de enlace é responsável por garantir o encaminhamento dos dados da origem até o destino.",
          "B) A camada de apresentação é responsável por garantir a interoperabilidade dos sistemas.",
          "C) A camada física é responsável por realizar o controle de erro entre nós vizinhos.",
          "D) A camada de sessão é responsável por encaminhar os dados de um nó para o nó vizinho.",
          "E) Todas as alternativas estão incorretas.",
        ],
        correta: 1,
        explicacao:
          "A camada de Apresentação é responsável pela representação dos dados, tradução de formatos, compressão e criptografia.",
      },
      {
        pergunta:
          "Um administrador de rede está configurando um sistema para garantir que os pacotes de dados sejam encaminhados eficientemente do ponto de origem ao destino em uma rede complexa. Qual camada do Modelo OSI é primordial para realizar esta função?",
        opcoes: [
          "A) Camada de Aplicação.",
          "B) Camada de Transporte.",
          "C) Camada de Rede.",
          "D) Camada de Enlace.",
          "E) Camada Física.",
        ],
        correta: 2,
        explicacao:
          "A Camada de Rede é responsável pelo endereçamento lógico e pelo roteamento dos pacotes.",
      },
      {
        pergunta:
          "As camadas do modelo OSI têm seus serviços definidos, elas sabem o que devem fazer, entretanto, não estão definidos protocolos, ou o como fazer. A camada que é responsável por garantir a comunicação confiável entre processos é a:",
        opcoes: [
          "A) Transporte.",
          "B) Rede.",
          "C) Enlace.",
          "D) Sessão.",
          "E) Todas as alternativas estão incorretas.",
        ],
        correta: 0,
        explicacao:
          "A camada de Transporte é responsável pela comunicação fim a fim entre processos, oferecendo serviços como confiabilidade e controle de fluxo.",
      },
      {
        pergunta:
          "A camada de transporte carrega mensagens da camada de aplicação entre os lados do cliente e servidor de uma aplicação. Há dois protocolos de transporte na Internet: TCP e UDP. São serviços oferecidos pelo protocolo UDP: I. Transferência de dados confiável. II. Serviço não orientado a conexão. III. Detecção de erros. Marque a alternativa que possui todos os serviços corretos:",
        opcoes: [
          "a) II, III.",
          "b) I, II, III.",
          "c) I, III.",
          "d) I, II.",
          "e) II.",
        ],
        correta: 0,
        explicacao:
          "O UDP provê serviço não orientado a conexão e detecção de erros (checksum), mas não oferece transferência confiável.",
      },
      {
        pergunta:
          "A camada de transporte carrega mensagens da camada de aplicação entre os lados do cliente e servidor de uma aplicação. Há dois protocolos de transporte na Internet: TCP e UDP. São serviços oferecidos pelo protocolo TCP: I. Transferência de dados confiável. II. Serviço não orientado a conexão. III. Fragmentação em segmentos. Marque a alternativa que possui todos os serviços corretos:",
        opcoes: [
          "a) II, III.",
          "b) I, II, III.",
          "c) I, III.",
          "d) I.",
          "e) III.",
        ],
        correta: 2,
        explicacao:
          "O TCP oferece transferência confiável e fragmentação em segmentos, mas é orientado à conexão.",
      },
      {
        pergunta:
          "Um sistema de comunicação é um conjunto de entidades (ou partes) coordenadas, que concorrem para a realização de um determinado objetivo. Qual é o termo relacionado à definição: 'Conjunto de módulos processadores interligados por um sistema de comunicação capazes de trocar informações e compartilhar recursos'?",
        opcoes: [
          "a) Unidade de processamento.",
          "b) Redes de Computadores.",
          "c) Fluxo de Dados.",
          "d) Redes Isoladas.",
          "e) Elementos desconexos.",
        ],
        correta: 1,
        explicacao:
          "Uma Rede de Computadores é formada por computadores interligados para troca de informações e compartilhamento de recursos.",
      },
      {
        pergunta:
          "Em cada camada, uma Unidade de Dados de Protocolo, ou PDU (Protocol Data Unit) possui campos de cabeçalho e um campo de carga útil. Dentre as opções a seguir, qual é o nome do PDU da camada de enlace de dados?",
        opcoes: [
          "a) Quadro.",
          "b) Datagrama.",
          "c) Mensagem.",
          "d) Segmento.",
          "e) Rótulo.",
        ],
        correta: 0,
        explicacao:
          "Na camada de Enlace de Dados, a PDU é chamada de Quadro (Frame).",
      },
      {
        pergunta:
          "A radiação eletromagnética consiste em ondas do campo eletromagnético, que se propagam pelo espaço e carregam energia eletromagnética radiante. É um exemplo de onda eletromagnética utilizada em redes não guiadas:",
        opcoes: [
          "a) Fibra ótica.",
          "b) Cabo coaxial.",
          "c) Cabo de par trançado.",
          "d) Cabo USB.",
          "e) Micro-ondas.",
        ],
        correta: 4,
        explicacao:
          "As micro-ondas são ondas eletromagnéticas utilizadas em meios de transmissão não guiados (sem fio).",
      },
      {
        pergunta:
          "Na literatura, as redes de computadores podem ser classificadas de várias formas, sempre com base em fundamentos confiáveis e validados. Na literatura formal, são elementos para a classificação de redes de computadores: I. Critérios relativos/subjetivos. II. Meio de transmissão. III. Arquitetura de Rede. IV. Arquitetura de Computadores. Marque a alternativa que possui todos os elementos corretos:",
        opcoes: [
          "a) I, II, III, IV.",
          "b) I, II, III.",
          "c) II, III, IV.",
          "d) II, III.",
          "e) III, IV.",
        ],
        correta: 3,
        explicacao:
          "As redes são classificadas pelo meio de transmissão e pela arquitetura de rede.",
      },
      {
        pergunta:
          "Todas as atividades na Internet que envolvem duas ou mais entidades remotas que se comunicam são governadas por um elemento que define o formato e a ordem das mensagens trocadas entre duas ou mais entidades comunicantes, bem como as ações realizadas na transmissão e/ou no recebimento de uma mensagem ou outro evento. O nome desse elemento é:",
        opcoes: [
          "a) Encapsulamento.",
          "b) Interface.",
          "c) Serviço.",
          "d) Protocolo.",
          "e) Link.",
        ],
        correta: 3,
        explicacao:
          "Um protocolo é um conjunto de regras que define como os dispositivos se comunicam em uma rede.",
      },
      {
        pergunta:
          "Em cada camada, uma Unidade de Dados de Protocolo, ou PDU (Protocol Data Unit), possui campos de cabeçalho e um campo de carga útil. Dentre as opções a seguir, qual é o nome do PDU da camada de aplicação?",
        opcoes: [
          "a) Quadro.",
          "b) Célula.",
          "c) Mensagem.",
          "d) Segmento.",
          "e) Rótulo.",
        ],
        correta: 2,
        explicacao: "Na camada de Aplicação, a PDU recebe o nome de Mensagem.",
      },
      {
        pergunta:
          "As sete camadas do modelo de referência OSI são: de aplicação, de apresentação, de sessão, de transporte, de rede, de enlace e camada física. Qual das seguintes camadas da arquitetura de redes em camadas OSI possui a seguinte função: 'Transmissão de bits por um canal de comunicação sem preocupação com o significado e arranjo dos mesmos'?",
        opcoes: [
          "a) Física.",
          "b) Enlace.",
          "c) Rede.",
          "d) Transporte.",
          "e) Aplicação.",
        ],
        correta: 0,
        explicacao:
          "A camada Física é responsável pela transmissão de bits através do meio de comunicação.",
      },
      {
        pergunta:
          "Em cada camada, uma Unidade de Dados de Protocolo, ou PDU (Protocol Data Unit), possui campos de cabeçalho e um campo de carga útil. Dentre as opções a seguir, qual é o nome do PDU do protocolo IP?",
        opcoes: [
          "a) Quadro.",
          "b) Datagrama.",
          "c) Mensagem.",
          "d) Segmento.",
          "e) Rótulo.",
        ],
        correta: 1,
        explicacao: "Na camada de Internet (IP), a PDU é chamada de Datagrama.",
      },
      {
        pergunta:
          "Certa empresa realizou uma análise dos riscos que existiam em suas redes e em seus sistemas. O consultor de segurança informou a detecção de vulnerabilidades que permitiam realizar invasões em diversos sistemas. Nesse caso, o atacante poderia assumir a identidade de usuários válidos na rede, caracterizando um ataque de personificação. Para minimizar o risco de esse ataque ter sucesso, devem ser implementados mecanismos de:",
        opcoes: [
          "a) Sistema de detecção de intrusão e controle de acesso.",
          "b) Autenticação e controle de acesso.",
          "c) Autenticação e verificação de integridade.",
          "d) Antivírus e verificação de integridade.",
          "e) Sistema de detecção de risco.",
        ],
        correta: 1,
        explicacao:
          "Para prevenir ataques de personificação, são necessários autenticação (verificar identidade) e controle de acesso (limitar recursos).",
      },
      {
        pergunta:
          "Para que uma rede seja protegida de ataques, é necessário adotar medidas de controle físico e lógicos. Essas medidas de controle têm por objetivo garantir a Confidencialidade, Integridade e Disponibilidade (CID) das informações disponibilizadas na rede. Um exemplo de medida de controle físico é o emprego de:",
        opcoes: [
          "a) Sistemas de detecção de intrusão.",
          "b) Redes virtuais privadas.",
          "c) Nobreaks.",
          "d) Certificados digitais.",
          "e) Antivírus.",
        ],
        correta: 2,
        explicacao:
          "O nobreak é uma medida de controle físico, fornecendo energia temporária em caso de falha elétrica.",
      },
      {
        pergunta:
          "De acordo com a norma ABNT NBR ISO IEC 27001:2013, para garantir a segurança dos dados em determinada rede, é necessário que sejam garantidas algumas propriedades. Acerca dessas propriedades, podemos afirmar que:",
        opcoes: [
          "a) A confidencialidade está relacionada com a exatidão da informação, garantindo que ela permaneceu intacta.",
          "b) A disponibilidade está relacionada com a possibilidade de acesso aos dados, quando necessário.",
          "c) A autenticidade está relacionada com o sigilo do emissor e receptor de determinada informação.",
          "d) O não repúdio garante validade jurídica a uma transação, que, para ser alcançada, necessita de integridade e legalidade.",
          "e) A legalidade da transação protege a integridade dos dados.",
        ],
        correta: 1,
        explicacao:
          "Disponibilidade é a propriedade que garante que os dados estejam acessíveis aos usuários autorizados sempre que necessário.",
      },
      {
        pergunta:
          "(UFPE/2017 - Adaptada) A Máquina Enigma foi um dispositivo de criptografia usado pelos alemães durante a Segunda Guerra Mundial para codificar mensagens militares. Sobre o tema criptografia, assinale a alternativa correta.",
        opcoes: [
          "a) Num esquema de criptografia de chave pública, a chave privada é distribuída publicamente.",
          "b) Em um esquema de criptografia de chave pública e privada, utiliza-se a segunda para criptografar as informações e a primeira para realizar a operação inversa.",
          "c) Na criptografia assimétrica, utiliza-se a mesma chave para codificação e decodificação das informações.",
          "d) O MD5 é uma função criptográfica de 32 bits utilizada principalmente para verificação da integridade de arquivos.",
          "e) Em um sistema de banco de dados de logins e senhas seguro, tanto um como outro são guardados sem criptografia.",
        ],
        correta: 1,
        explicacao:
          "Na criptografia assimétrica, a chave privada pode ser utilizada em processos de assinatura digital, sendo verificada pela chave pública.",
      },
      {
        pergunta:
          "Certa empresa sofreu um ataque de negação de serviço, que tem por objetivo sobrecarregar a rede com dados acima da capacidade dela. Para esta atividade, o atacante utilizou máquinas de usuários que estavam vulneráveis na internet, enviando dados para a rede da empresa. Podemos afirmar que este ataque é:",
        opcoes: [
          "a) Indireto.",
          "b) Interno.",
          "c) Passivo.",
          "d) De fabricação.",
          "e) De autenticação.",
        ],
        correta: 0,
        explicacao:
          "O ataque é indireto porque o atacante utiliza computadores de terceiros (zumbis) para enviar dados ao alvo.",
      },
      {
        pergunta:
          "O cenário atual de segurança cibernética, como exemplificado pelo Brasil sofrendo 15 bilhões de ataques em apenas três meses, ressalta a criticidade da análise e gestão de riscos em redes de computadores. A norma ABNT NBR ISO IEC 27001:2013 fornece um arcabouço para entender melhor as definições, propriedades e tipos de ataques, bem como as estratégias para mitigá-los. Conhecer esses conceitos é essencial para desenvolver mecanismos eficazes de proteção. Com base na norma ABNT NBR ISO IEC 27001:2013, qual das alternativas melhor define uma 'Ameaça' no contexto da segurança da informação?",
        opcoes: [
          "a) Uma vulnerabilidade no sistema de informação.",
          "b) Uma ferramenta usada para proteger dados.",
          "c) Uma política de segurança interna da empresa.",
          "d) Causa potencial de um incidente indesejado que pode resultar em danos a um sistema ou organização.",
          "e) Um incidente que já causou danos à organização.",
        ],
        correta: 3,
        explicacao:
          "Na segurança da informação, uma ameaça é qualquer causa potencial de um incidente indesejado.",
      },
      {
        pergunta:
          "A criptografia é um recurso utilizado desde tempos antigos, e a Cifra de César é um dos algoritmos mais conhecidos. Acerca das técnicas de criptografia, assinale a alternativa correta:",
        opcoes: [
          "a) Um algoritmo de criptografia assimétrica emprega uma única chave para cifrar e decifrar.",
          "b) Um algoritmo de criptografia simétrica emprega duas chaves - uma para cifrar e outra para decifrar.",
          "c) Em um algoritmo de chave privada, ao utilizar a chave privada primeiro, é garantida a confidencialidade.",
          "d) Em um algoritmo de chave pública, ao utilizar a chave pública primeiro, é garantida a confidencialidade.",
          "e) Um algoritmo de criptografia assimétrica emprega uma única chave para decifrar.",
        ],
        correta: 3,
        explicacao:
          "Na criptografia de chave pública, a chave pública cifra a mensagem, garantindo que apenas a chave privada correspondente possa decifrá-la.",
      },
      {
        pergunta:
          "Alice e Bob estão conversando por meio de um aplicativo de chat no celular. As mensagens enviadas entre eles não possuem criptografia, e Dart está conseguindo ler todas as mensagens que eles enviam, mas sem modificá-las. Podemos afirmar que este é um exemplo de ataque:",
        opcoes: [
          "a) Ativo de interceptação.",
          "b) Passivo de personificação.",
          "c) Ativo de fabricação.",
          "d) Passivo de interceptação.",
          "e) Ativo de autenticação.",
        ],
        correta: 3,
        explicacao:
          "Trata-se de um ataque passivo de interceptação, pois o atacante apenas observa e lê as mensagens sem alterá-las.",
      },
      {
        pergunta:
          "(Prefeitura de Campo Grande - MS/2019 - Adaptada) A pilha de protocolos TCP/IP é um conjunto de protocolos de rede que define um modelo de comunicação para a internet. Qual a camada da pilha de protocolos TCP/IP que utiliza multiplexação e demultiplexação de portas?",
        opcoes: [
          "a) Transporte.",
          "b) IP.",
          "c) Enlace.",
          "d) Aplicação.",
          "e) Rede.",
        ],
        correta: 0,
        explicacao:
          "A camada de Transporte utiliza números de porta para realizar multiplexação e demultiplexação dos dados.",
      },
      {
        pergunta:
          "(CORE-SP/2019 - Adaptada) O modelo de referência TCP/IP é um modelo de protocolo de rede que define como as informações são transmitidas através de redes de computadores. Sobre o modelo de referência TCP/IP encontrado nas redes de computadores, é correto afirmar:",
        opcoes: [
          "a) Sua camada de transporte possui extrema importância na comunicação entre dois equipamentos. O fluxo nessa camada somente se comunica com o seu fluxo par do dispositivo destino. Lida com questões de QoS, controle de fluxo, controle de sequência e correção de erros.",
          "b) Protocolos de mais alto nível, como HTTP e SMTP, incluem os detalhes necessários à camada de aplicação e apresentação, enquanto que os protocolos de baixo nível, como DNS, FTP e POP, são responsáveis pelas indicações de fluxo de dados nas camadas de sessão e internet.",
          "c) Em função de ser um protocolo orientado à conexão, os pacotes TCP não necessitam do uso de bits adicionais para assegurar o correto sequenciamento da informação, bem como um checksum obrigatório para garantir a integridade do cabeçalho e dos dados transmitidos.",
          "d) Na camada de transporte, além do protocolo TCP, há também o protocolo UDP que, em função de sua orientação à conexão, possui a capacidade de controlar altos volumes de tráfego na Internet, o que proporciona aos seus usuários uma maior performance no envio e recebimento de dados.",
          "e) O controle de erros observado na camada de transporte tem como objetivo detectar e corrigir erros gerados pelas camadas de apresentação e sessão, se preocupando com erros relacionados à integridade do conteúdo do pacote recebido, à entrega duplicada ou a pacotes recebidos fora da sequência.",
        ],
        correta: 0,
        explicacao:
          "A camada de Transporte do modelo TCP/IP é responsável pela comunicação fim a fim, oferecendo controle de fluxo, sequência e correção de erros.",
      },
      {
        pergunta:
          "(IF-TO/2021 - Adaptada) No laboratório de Informática do Campus XYZ, o computador do aluno A tem o endereçamento IP 192.168.30.128/24. Os alunos podem utilizar os laboratórios para fazer pesquisas e outras tarefas. Para que o computador do Aluno A tenha acesso à internet é necessário que o seu IP local seja convertido para um IP público. Qual o protocolo abaixo tem essa função?",
        opcoes: ["a) NAT.", "b) IP.", "c) TCP.", "d) UDP.", "e) HTTP."],
        correta: 0,
        explicacao:
          "O NAT (Network Address Translation) converte endereços IP privados em um endereço IP público.",
      },
      {
        pergunta:
          "(CESGRANRIO/2012) A arquitetura de protocolos da Internet prevê que a camada de Aplicação é responsável por fornecer os serviços aos usuários por intermédio de protocolos específicos. O suporte à camada de Aplicação é fornecido pela camada de Transporte, cuja responsabilidade é a de controlar a comunicação fim-a-fim entre processos de aplicação. O suporte à camada de Transporte, por sua vez, é fornecido pela camada imediatamente inferior, denominada camada Inter-redes. São exemplos de protocolos respectivamente utilizados nas camadas de Aplicação, Transporte e Inter-redes:",
        opcoes: [
          "a) FTP, TCP, CSMA/CD.",
          "b) HTTP, UDP, IP.",
          "c) CSMA/CD, TCP, IP.",
          "d) HTTP, FTP, DHCP.",
          "e) TCP, UDP, HTTP.",
        ],
        correta: 1,
        explicacao:
          "HTTP (Aplicação), UDP (Transporte) e IP (Inter-redes) estão corretamente alinhados com suas respectivas camadas.",
      },
      {
        pergunta:
          "(UFMG/2021 - Adaptada) A camada de aplicação é a camada mais alta do modelo de referência TCP/IP e é responsável por fornecer serviços para os aplicativos que rodam em dispositivos conectados à rede. Dentro desse contexto, qual é o protocolo que faz o mapeamento de endereço URL para endereço IP?",
        opcoes: ["a) ARP.", "b) DNS.", "c) IP.", "d) Stringle.", "e) RIP."],
        correta: 1,
        explicacao:
          "O DNS (Domain Name System) traduz nomes de domínio (URLs) para endereços IP.",
      },
      {
        pergunta:
          "(UFRJ/2021) Marque a alternativa que apresenta uma função dos números de porta incluídos nos segmentos TCP e UDP.",
        opcoes: [
          "a) Identificar o default gateway.",
          "b) Permitir que o host ordene os pacotes corretamente.",
          "c) Identificar aplicações em um mesmo host, permitindo que os dados sejam encaminhados à aplicação correta.",
          "d) Realizar o controle de fluxo.",
          "e) Identificar se o protocolo da camada de transporte é TCP ou UDP.",
        ],
        correta: 2,
        explicacao:
          "Os números de porta identificam quais aplicações devem receber os dados em um mesmo dispositivo.",
      },
      {
        pergunta:
          "O protocolo UDP apresenta um cabeçalho extremamente simples utilizado primordialmente por aplicações como DNS, SNMP e TFTP. Acerca das características do protocolo UDP, marque a alternativa correta:",
        opcoes: [
          "a) Não estabelece conexões para troca de dados.",
          "b) Utilizado por aplicações que requerem uma comunicação confiável, com a garantia da entrega de todos os pacotes.",
          "c) Responsável pela ordenação dos bits na camada física.",
          "d) Realiza retransmissões para garantir a entrega de dados.",
          "e) Trata-se de um protocolo de nível de enlace.",
        ],
        correta: 0,
        explicacao:
          "O UDP é um protocolo sem conexão (connectionless) que não garante entrega, ordenação ou retransmissão.",
      },
      {
        pergunta:
          "(TRE-PI/2016 - Adaptada) A camada de aplicação é a camada mais alta e fornece serviços para os aplicativos que rodam em dispositivos conectados à rede. Ela inclui protocolos como HTTP, FTP, SMTP e DNS, entre outros. O serviço de multiplexação provido pela camada de transporte da Internet é responsável por:",
        opcoes: [
          "a) Evitar que o hospedeiro transmita em taxa superior à capacidade do receptor.",
          "b) Garantir a escalabilidade das aplicações na arquitetura par-a-par.",
          "c) Fornecer mecanismo de detecção e correção de erros na transmissão.",
          "d) Receber os dados dos processos aplicativos, encapsulá-los em segmentos e encaminhá-los para a camada de redes.",
          "e) Particionar datagramas com tamanhos superiores à MTU do enlace antes de sua transmissão.",
        ],
        correta: 3,
        explicacao:
          "A camada de transporte recebe os dados das aplicações, encapsula em segmentos e encaminha para a camada de rede.",
      },
      {
        pergunta:
          "Quando o hospedeiro de origem vai enviar os dados, das mais diversas aplicações que estejam rodando, a camada de transporte vai dividir esses pacotes de informações em segmentos, antes de enviar para a camada de rede. Porém, antes disso, a camada de transporte precisa colocar no cabeçalho dos segmentos os dados do hospedeiro, bem como a porta na qual cada segmento deve ir. Quanto ao processo de multiplexação, marque a alternativa correta:",
        opcoes: [
          "a) A multiplexação ocorre somente em protocolos orientados à conexão, como o TCP.",
          "b) A multiplexação ocorre somente em protocolos sem conexão, como o UDP.",
          "c) Os protocolos de transporte da internet utilizam números de porta para realizar a multiplexação.",
          "d) Se o protocolo IP for utilizado, não será necessária a multiplexação na camada de transporte.",
          "e) A multiplexação ocorre no nível físico, sendo essencial para a comunicação entre camadas.",
        ],
        correta: 2,
        explicacao:
          "TCP e UDP utilizam números de porta para multiplexar os dados de diferentes aplicações.",
      },
      {
        pergunta:
          "(OBJETIVA/2019 - Adaptada) As arquiteturas em redes permitem a interoperabilidade entre diferentes dispositivos e sistemas, possibilitando que redes heterogêneas se comuniquem e troquem informações de forma eficiente e padronizada. É um exemplo do modelo de transmissão de informação Cliente/Servidor:",
        opcoes: [
          "a) Fazer backup em mídia removível.",
          "b) Configuração de programas no computador.",
          "c) Acesso remoto a um banco de dados.",
          "d) Instalação de memória.",
          "e) Utilização de editor de textos.",
        ],
        correta: 2,
        explicacao:
          "O acesso remoto a um banco de dados é um exemplo clássico do modelo Cliente/Servidor.",
      },
      {
        pergunta:
          "Qual protocolo faz o mapeamento entre endereço IP e endereço MAC?",
        opcoes: ["DHCP", "TCP", "ARP", "HTTP"],
        correta: 2,
        explicacao:
          "O protocolo ARP (Address Resolution Protocol) descobre o endereço MAC correspondente a um endereço IP.",
      },
      {
        pergunta:
          "Qual camada do modelo TCP/IP é responsável pela entrega fim a fim?",
        opcoes: ["Aplicação", "Transporte", "Internet", "Acesso à Rede"],
        correta: 1,
        explicacao:
          "A camada de Transporte utiliza TCP e UDP para comunicação entre aplicações fim a fim.",
      },
      {
        pergunta: "Em linguagem C, qual símbolo representa atribuição?",
        opcoes: ["==", "=", "!=", "<="],
        correta: 1,
        explicacao:
          "O operador '=' realiza atribuição. '==' realiza comparação.",
      },
      // FIM DAS PERGUNTAS DE REDES
    ],
  },


    programacao: {
      nome: "Introducao a Programacao de Computadores",
      icone: "💻",
      descricao: "Lógica, algoritmos, estrutura de dados e linguagens.",
      perguntas: [

        {
  pergunta: "01. Considere o seguinte programa escrito em C. Imagine também que antes da função main foram declaradas todas as bibliotecas relacionadas às instruções.\nint main() {\n  char letra;\n  printf(\"Entre com uma letra minúscula:\\n\");\n  scanf(\"%c\", &letra);\n  letra = letra + ( 'A' - 'a' );\n  printf(\"Caractere = %c \\n\", letra);\n  return 0;\n}\n\nApós a execução desse trecho, suponha que o usuário tenha entrado com a letra 'd'.\nAssinale a alternativa que contém, corretamente, o resultado exibido na tela após a execução desse programa.",
  opcoes: [
    "A) Caractere = d",
    "B) Caractere = D",
    "C) Caractere = C",
    "D) Caractere = c",
    "E) Ocorrerá um erro durante a compilação."
  ],
  correta: 1,
  explicacao: "A alternativa correta é a letra B.\n\nExplicação: O programa converte uma letra minúscula para maiúscula utilizando a diferença entre 'A' e 'a' na tabela ASCII.\n\nCálculo passo a passo:\n1. O usuário entra com 'd'\n2. 'A' - 'a' = 65 - 97 = -32 (diferença entre maiúscula e minúscula na tabela ASCII)\n3. letra = 'd' + (-32) = 100 - 32 = 68\n4. 68 na tabela ASCII corresponde à letra 'D'\n5. O programa exibe: Caractere = D\n\nResposta: B) Caractere = D"
},

      {
  pergunta: "02. Observe o trecho do código em C a seguir. Não esqueça que o operador % significa resto da divisão inteira.\n#include <stdio.h>\nvoid main(){\n  int n, i;\n  i = 20;\n  n = 2 * (i % 3);\n  printf(\"n = %d\", n);\n}\n\nAssinale a alternativa que representa o que será impresso na tela.",
  opcoes: [
    "A) n = 1",
    "B) n = 2",
    "C) n = 3",
    "D) n = 4",
    "E) n = 12"
  ],
  correta: 3,
  explicacao: "A alternativa correta é a letra D.\n\nCálculo passo a passo:\n1. i = 20\n2. i % 3 = 20 % 3 = 2 (resto da divisão de 20 por 3: 20 ÷ 3 = 6, resto 2)\n3. n = 2 * (i % 3) = 2 * 2 = 4\n4. O programa exibe: n = 4\n\nResposta: D) n = 4"
},

      {
  pergunta: "03. Considere o seguinte programa escrito em C:\n#include <stdio.h>\nvoid main(){\n  char ch1, ch2;\n  printf(\"Entre com duas letras:\\n\");\n  scanf(\"%c %c\", &ch1, &ch2);\n  ch1 = ch2;\n  ch2 = ch1;\n  printf(\"ch1 = %c e ch2 = %c\\n\", ch1, ch2);\n}\n\nApós a execução desse trecho, suponha que o usuário tenha entrado com as letras 'p' e 'q'.\nAssinale a alternativa que contém, corretamente, o que será exibido na tela.",
  opcoes: [
    "A) ch1 = p e ch2 = q",
    "B) ch1 = q e ch2 = p",
    "C) ch1 = p e ch2 = p",
    "D) ch1 = q e ch2 = q",
    "E) ch1 = &ch1 e ch2 = &ch2"
  ],
  correta: 3,
  explicacao: "A alternativa correta é a letra D.\n\nPasso a passo:\n1. O usuário entra com 'p' e 'q': ch1 = 'p', ch2 = 'q'\n2. ch1 = ch2 → ch1 recebe o valor de ch2: ch1 = 'q', ch2 = 'q'\n3. ch2 = ch1 → ch2 recebe o valor de ch1: ch2 = 'q', ch1 = 'q'\n4. O programa exibe: ch1 = q e ch2 = q\n\nO programa NÃO troca os valores corretamente porque não usa uma variável temporária. Como ch1 recebe ch2 primeiro, o valor original de ch1 ('p') é perdido. O resultado final é ambas as variáveis com o valor de ch2 ('q').\n\nResposta: D) ch1 = q e ch2 = q"
},

      {
  pergunta: "04. Considere o seguinte programa escrito em C. Lembre-se que o operador % significa resto da divisão inteira.\n#include <stdio.h>\nvoid main(){\n  int num;\n  printf(\"Entre com um inteiro:\\n\");\n  scanf(\"%d\", &num);\n  num = num + num%3;\n  printf(\"num = %d \\n\", num);\n}\n\nApós a execução desse trecho, suponha que o usuário tenha entrado com o valor 5.\nAssinale a alternativa que contém, corretamente, o que será exibido na tela.",
  opcoes: [
    "A) num = 2",
    "B) num = 5",
    "C) num = 7",
    "D) num = 8",
    "E) num = 6"
  ],
  correta: 2,
  explicacao: "A alternativa correta é a letra C.\n\nCálculo passo a passo:\n1. O usuário entra com o valor 5, então num = 5\n2. num%3 = 5%3 = 2 (resto da divisão de 5 por 3)\n3. num = num + num%3 = 5 + 2 = 7\n4. O programa exibe: num = 7\n\nResposta: C) num = 7"
},

      {
  pergunta: "05. Considere o seguinte trecho de código escrito em C que já conta com as bibliotecas necessárias para sua execução:\nvoid main(){\n  char letra;\n  int num;\n  printf(\"Entre com uma letra e um inteiro:\\n\");\n  scanf(\"%c %d\", &letra, &num);\n  printf(\"Você informou a letra %c e o inteiro %d.\\n\", letra, num);\n}\n\nApós a execução desse trecho, suponha que o usuário tenha entrado com os valores:\nj\n5\n\nAssinale a alternativa que contém UMA POSSIBILIDADE de resultado para a execução desse programa.",
  opcoes: [
    "A) Será impresso na tela: Você informou a letra j e o inteiro 5.",
    "B) Será impresso na tela: Você informou a letra e o inteiro 6356728.",
    "C) Ocorrerá um erro durante a compilação e nada será exibido.",
    "D) Ocorrerá um erro durante a execução e nada será exibido.",
    "E) Será impresso na tela: Você informou a letra 'U' e o inteiro 5."
  ],
  correta: 0,
  explicacao: "A alternativa correta é a letra A. O código está correto e funcional. O scanf com '%c %d' lê corretamente um caractere ('j') e um número inteiro (5), armazenando-os nas variáveis 'letra' e 'num' através dos operadores de endereço (&). O printf então exibe a mensagem com os valores lidos corretamente. Portanto, a execução correta imprimirá 'Você informou a letra j e o inteiro 5.'"
},

      {
  pergunta: "06. Considere o seguinte programa escrito em C:\n#include <stdio.h>\nvoid main(){\n  char letra;\n  int num;\n  printf(\"Entre com uma letra e um inteiro:\\n\");\n  scanf(\"%c %d\", letra.num);\n  printf(\"Voce informou a letra %c e o inteiro %d.\\n\", letra, num);\n}\n\nApós a execução desse trecho, suponha que o usuário tenha entrado com os valores:\nr\n2\n\nAssinale a alternativa que contém o resultado correto da execução desse programa.",
  opcoes: [
    "A) Será impresso na tela: Você informou a letra r e o inteiro 2.",
    "B) Será impresso na tela: Você informou a letra %c e o inteiro %d.",
    "C) Ocorrerá um erro durante a compilação e nada será exibido.",
    "D) Ocorrerá um erro durante a execução e nada será exibido.",
    "E) Será impresso na tela: Você informou a letra 'R' e o inteiro 2."
  ],
  correta: 2,
  explicacao: "A alternativa correta é a letra C. O programa apresenta um erro de compilação porque a função scanf foi escrita incorretamente: 'scanf(\"%c %d\", letra.num)'. O correto seria usar '&letra' e '&num' para passar os endereços das variáveis. A sintaxe 'letra.num' é inválida em C, pois 'letra' não é uma estrutura. Portanto, o programa não compila e nada é exibido."
},

      {
  pergunta: "07. Considere o seguinte programa escrito em C.\n#include <stdio.h>\nvoid main(){\n  int num;\n  printf(\"Entre com um inteiro:\\n\");\n  scanf(\"%f\", &num);\n  printf(\"num = %f \\n\", num);\n}\n\nEmbora o programa não apresente erro de compilação, assinale a alternativa que apresenta um possível motivo para o seu mau funcionamento.",
  opcoes: [
    "A) A função scanf deveria ter sido invocada com scanf(\"%f\", num).",
    "B) A função scanf deveria ter sido invocada com scanf(\"%d\", &num).",
    "C) As funções scanf e printf deveriam ter sido invocadas com \"%d\", e não \"%f\".",
    "D) As funções scanf e printf deveriam ter sido invocadas com \"%c\", e não \"%f\".",
    "E) A função printf deveria ter sido invocada com printf(\"num = %d \\n\", num)."
  ],
  correta: 2,
  explicacao: "A alternativa correta é a letra C. O programa declara 'num' como tipo 'int' (inteiro), mas utiliza '%f' (especificador para float/ponto flutuante) tanto no scanf quanto no printf. Isso causa comportamento indefinido, pois os especificadores de formato não correspondem ao tipo da variável. A correção adequada é usar '%d' em ambas as funções, que é o especificador correto para números inteiros."
},

      {
  pergunta: "01. Um programador está ajustando a performance de um jogo, buscando variáveis que não mudam após sua inicialização para otimizar o uso da memória. Que tipo de qualificador em C o programador deve usar para essas variáveis?",
  opcoes: [
    "A) short.",
    "B) static.",
    "C) volatile.",
    "D) register.",
    "E) const."
  ],
  correta: 4,
  explicacao: "A alternativa correta é a letra E. O qualificador 'const' em C é utilizado para declarar variáveis cujo valor não pode ser alterado após a inicialização. Isso permite otimizações de memória e performance, pois o compilador pode fazer suposições sobre esses valores constantes. As demais alternativas: short (tipo de dado), static (tempo de vida da variável), volatile (variável que pode ser alterada externamente) e register (sugestão de armazenamento em registrador)."
},

      {
  pergunta: "02. Em relação a tipos de dados, atribua V (verdadeiro) ou F (falso) às afirmativas a seguir:\n( ) char é um tipo simples.\n( ) double é um tipo estruturado.\n( ) float é um tipo simples.\n( ) int é um tipo simples.\n( ) void é um tipo estruturado.\n\nAssinale a alternativa que apresenta a sequência correta:",
  opcoes: [
    "A) V, V, F, F, F",
    "B) V, F, V, V, F",
    "C) F, V, V, F, V",
    "D) F, F, V, F, V",
    "E) F, F, F, V, V"
  ],
  correta: 1,
  explicacao: "A sequência correta é V, F, V, V, F.\n\n- char é um tipo simples → VERDADEIRO (armazena um único caractere)\n- double é um tipo estruturado → FALSO (é um tipo simples/ponto flutuante)\n- float é um tipo simples → VERDADEIRO (ponto flutuante)\n- int é um tipo simples → VERDADEIRO (número inteiro)\n- void é um tipo estruturado → FALSO (void é um tipo vazio/sem valor)\n\nResposta: B) V, F, V, V, F"
},

      {
  pergunta: "03. Joana está desenvolvendo um programa para um projeto universitário. Ela precisa realizar operações matemáticas utilizando diferentes tipos de dados e operadores em sua codificação. Considerando o texto, analise as afirmativas abaixo:\nI. Joana pode usar o tipo de dado 'int' para armazenar números decimais.\nII. A operação de módulo (%) em programação retorna o resto de uma divisão entre dois números.\nIII. Em uma operação de divisão entre um 'int' e um 'float', o resultado será um 'float'.\n\nEstá correto apenas o que se afirma em:",
  opcoes: [
    "A) Apenas a I está correta.",
    "B) Apenas a II e III estão corretas.",
    "C) Apenas a III está correta.",
    "D) Apenas a I e II estão corretas.",
    "E) Apenas a II está correta."
  ],
  correta: 1,
  explicacao: "A alternativa correta é a letra B.\n\nI. FALSO - O tipo 'int' armazena números inteiros, não decimais. Para números decimais usa-se 'float' ou 'double'.\nII. VERDADEIRO - O operador % (módulo) retorna o resto da divisão inteira entre dois números.\nIII. VERDADEIRO - Quando se divide um 'int' por um 'float', ocorre promoção de tipo (casting implícito) e o resultado é um 'float'.\n\nResposta: B) Apenas a II e III estão corretas."
},

      {
  pergunta: "04. Fernanda está desenvolvendo um aplicativo que requer cálculos precisos. Ela está revisando os tipos de dados e operadores disponíveis para garantir que suas operações retornem resultados precisos e confiáveis. Considerando o texto, analise as afirmativas abaixo:\nI. Fernanda deve usar o tipo de dado 'double' para cálculos que exigem alta precisão com muitos dígitos após o ponto decimal.\nII. Em uma expressão com diferentes tipos de dados numéricos, o tipo de dado do resultado é determinado pelo tipo de dado com maior capacidade de armazenamento.\nIII. O tipo de dado 'double' é equivalente ao 'int', pois ambos são usados para armazenar números inteiros.\n\nEstá correto apenas o que se afirma em:",
  opcoes: [
    "A) Apenas a I está correta.",
    "B) Apenas a II e III estão corretas.",
    "C) Apenas a III está correta.",
    "D) Apenas a I e II estão corretas.",
    "E) Apenas a II está correta."
  ],
  correta: 3,
  explicacao: "A alternativa correta é a letra D.\n\nI. VERDADEIRO - O tipo 'double' possui maior precisão que 'float', sendo ideal para cálculos que exigem muitos dígitos após o ponto decimal.\nII. VERDADEIRO - Em expressões com tipos mistos, ocorre promoção de tipo para o tipo com maior capacidade/ precisão para evitar perda de dados.\nIII. FALSO - 'double' é usado para números de ponto flutuante (decimais), enquanto 'int' é para números inteiros. Não são equivalentes.\n\nResposta: D) Apenas a I e II estão corretas."
},

      {
  pergunta: "05. Roberto está desenvolvendo um jogo em C e quer garantir uma execução eficiente. Ele está avaliando o uso de variáveis e constantes no armazenamento de informações que não mudam. Considerando o texto, analise as afirmativas abaixo:\nI. Variáveis são apropriadas para armazenar informações que podem mudar ao longo da execução do programa.\nII. Constantes são utilizadas para valores que permanecem inalterados durante a execução do programa, proporcionando proteção contra modificações acidentais.\nIII. O uso de constantes pode levar a um aumento significativo no uso de memória em comparação com variáveis.\n\nEstá correto apenas o que se afirma em:",
  opcoes: [
    "A) Apenas a I está correta.",
    "B) Apenas a II e III estão corretas.",
    "C) Apenas a III está correta.",
    "D) Apenas a I e II estão corretas.",
    "E) Apenas a II está correta."
  ],
  correta: 3,
  explicacao: "A alternativa correta é a letra D.\n\nI. VERDADEIRO - Variáveis são espaços de memória que podem ter seus valores alterados durante a execução do programa.\nII. VERDADEIRO - Constantes (como 'const' em C) armazenam valores fixos que não podem ser modificados, protegendo contra alterações acidentais.\nIII. FALSO - Constantes não aumentam significativamente o uso de memória. Na verdade, em muitos casos, o compilador pode otimizar constantes diretamente no código (inline), economizando memória.\n\nResposta: D) Apenas a I e II estão corretas."
},

      {
  pergunta: "06. Tabelas verdade são uma parte integral da lógica computacional, especialmente quando se lida com várias condições lógicas. Suponha que um programador esteja trabalhando em um sistema que requer a avaliação de múltiplas entradas lógicas. Qual operador lógico representa a conjunção 'E', resultando em verdadeiro apenas se todas as condições forem verdadeiras?",
  opcoes: [
    "A) ||",
    "B) &&",
    "C) ==",
    "D) !=",
    "E) --"
  ],
  correta: 1,
  explicacao: "A alternativa correta é a letra B. O operador lógico '&&' (E) em C e na maioria das linguagens de programação representa a conjunção lógica, resultando em verdadeiro (1) apenas quando todas as condições envolvidas são verdadeiras. Os demais operadores: || (OU), == (igualdade), != (diferença) e -- (decremento)."
},

      {
  pergunta: "07. Em um projeto de software, um programador está trabalhando com tipos de dados e operações matemáticas. Ele precisa executar uma divisão entre dois números, garantindo que o resultado seja um valor inteiro. Qual operação o programador deve usar para garantir que o resultado da divisão seja sempre um número inteiro?",
  opcoes: [
    "A) Multiplicação.",
    "B) Soma.",
    "C) Modulação.",
    "D) Subtração.",
    "E) Divisão inteira."
  ],
  correta: 4,
  explicacao: "A alternativa correta é a letra E. A divisão inteira (em C, quando ambos os operandos são inteiros) descarta a parte fracionária e retorna apenas a parte inteira do quociente. Por exemplo, 7/2 = 3 (e não 3.5). A modulação (alternativa C) retorna o resto da divisão, não o quociente. As demais alternativas são outras operações matemáticas que não garantem resultado inteiro de uma divisão."
},

      {
  pergunta: "08. Analise a tabela a seguir:\n\n| p | q | Valor lógico |\n|---|---|---|\n| 1 | 1 | 1 |\n| 1 | 0 | 1 |\n| 0 | 1 | 1 |\n| 0 | 0 | 0 |\n\nA operação lógica realizada foi:",
  opcoes: [
    "A) Disjunção",
    "B) Conjunção",
    "C) Negação",
    "D) Disrupção",
    "E) Interjeição"
  ],
  correta: 0,
  explicacao: "A alternativa correta é a letra A. A tabela verdade apresentada corresponde à operação de Disjunção (OU lógico - ||), onde o resultado é verdadeiro (1) quando pelo menos uma das condições é verdadeira. A única combinação que resulta em falso (0) é quando ambas as entradas são falsas (0,0). Conjunção (E - &&) só seria verdadeira quando ambas fossem 1 (1,1). Negação opera com apenas uma entrada. Disrupção e Interjeição não são operadores lógicos."
},

      {
  pergunta: "09. Um iniciante em programação lê sobre operadores e encontra termos como 'unário', 'binário' e 'ternário'. Ele está curioso para saber quantos operandos cada um envolve. Quantos operandos um operador unário opera em programação?",
  opcoes: [
    "A) Três.",
    "B) Dois.",
    "C) Um.",
    "D) Quatro.",
    "E) Zero."
  ],
  correta: 2,
  explicacao: "A alternativa correta é a letra C. Operadores unários operam sobre apenas um operando. Exemplos em C: incremento (++), decremento (--), negação lógica (!), operador de sinal (-), entre outros. Operadores binários operam sobre dois operandos (ex: +, -, *, /, &&, ||) e operadores ternários operam sobre três operandos (ex: operador condicional ? : em C)."
},

      {
  pergunta: "10. Para construir expressões lógicas em C, é essencial entender o conceito de _____ que mostra todas as possíveis combinações de valores verdadeiros e falsos para expressões lógicas. Ao trabalhar com operadores lógicos, como AND e OR, esta ferramenta é fundamental para prever o resultado de uma expressão. Além disso, para desenvolver aplicações robustas e eficientes, é importante compreender os _____ de dados suportados pela linguagem e como a _____ de variáveis e constantes influencia o desempenho do programa.\n\nAssinale a alternativa que contém a sequência correta para preencher as lacunas acima:",
  opcoes: [
    "A) tabela verdade - tipos - manipulação.",
    "B) matriz lógica - modelos - declaração.",
    "C) árvore de decisão - sistemas - inicialização.",
    "D) gráfico booleano - esquemas - atribuição.",
    "E) diagrama de fluxo - categorias - conversão."
  ],
  correta: 0,
  explicacao: "A alternativa correta é a letra A. A sequência correta é: 'tabela verdade - tipos - manipulação'.\n\n- Tabela verdade: ferramenta fundamental que mostra todas as combinações possíveis de valores (verdadeiro/falso) para expressões lógicas.\n- Tipos de dados: conjunto de dados suportados pela linguagem C (int, float, char, double, etc.)\n- Manipulação: como a manipulação de variáveis e constantes influencia o desempenho do programa."
},

       {
      pergunta: "10. Observe a sequência a seguir:\nA\nBB\nccc\nDDDD\nO próximo termo é:",
      opcoes: [
        "A) ABCDE",
        "B) EDCBA",
        "C) ABCBA",
        "D) EEEEE",
        "E) DEEEEED"
      ],
      correta: 3,
      explicacao: "A sequência segue o padrão de repetição de letras: A (1 vez), BB (2 vezes), ccc (3 vezes), DDDD (4 vezes). A próxima letra em ordem alfabética é 'E' e deve ser repetida 5 vezes. Portanto, o próximo termo é EEEEE. Resposta: D) EEEEE"
    },

       {
      pergunta: "09. Segundo Brackmann (2017), qual dos itens não é um pilar do pensamento computacional?",
      opcoes: [
        "A) Decomposição",
        "B) Reconhecimento de padrões",
        "C) Abstração",
        "D) Adaptabilidade",
        "E) Algoritmos"
      ],
      correta: 3,
      explicacao: "A alternativa correta é a letra D. Segundo Brackmann (2017), os quatro pilares do pensamento computacional são: Decomposição, Reconhecimento de Padrões, Abstração e Algoritmos. Adaptabilidade não é um dos pilares do pensamento computacional."
    },

       {
      pergunta: "08. No contexto do Pensamento Computacional, a abstração é uma etapa fundamental para a resolução de problemas. Qual das alternativas abaixo descreve corretamente o conceito de abstração?",
      opcoes: [
        "A) Dividir um problema complexo em partes menores para facilitar o entendimento.",
        "B) Criar um conjunto de regras fixas para que um computador execute automaticamente uma tarefa.",
        "C) Identificar as semelhanças entre diferentes etapas ou dados de um problema.",
        "D) Focar apenas nas informações importantes para resolver o problema, ignorando detalhes que não são essenciais.",
        "E) Executar todas as etapas do problema sem analisar previamente a melhor forma de resolvê-lo."
      ],
      correta: 3,
      explicacao: "A alternativa correta é a letra D. A abstração consiste em filtrar e focar apenas nas informações relevantes para a resolução do problema, ignorando detalhes desnecessários ou secundários. É como criar um modelo simplificado da realidade que mantém apenas o que é essencial para solucionar a questão."
    },

       {
      pergunta: "07. Observe a sequência a seguir: 203, 206, 212, 221, 233 ... O próximo termo é:",
      opcoes: [
        "A) 248",
        "B) 242",
        "C) 237",
        "D) 251",
        "E) 260"
      ],
      correta: 0,
      explicacao: "A sequência segue o padrão de diferenças crescentes: 203 → 206 (+3), 206 → 212 (+6), 212 → 221 (+9), 221 → 233 (+12). As diferenças aumentam de 3 em 3. O próximo será 233 + 15 = 248. Resposta: A) 248"
    },

       {
      pergunta: "06. Um professor solicita que alunos representem a solução para o cálculo da média aritmética de três valores utilizando uma ferramenta de representação algorítmica antes de implementá-la em qualquer linguagem. Considerando práticas de construção algorítmica, qual seria o pseudocódigo mais adequado?",
      opcoes: [
        "A) media(a, b, c) = a x b x c",
        "B) Ler a, b, c; media = (a + b + c) / 3; Exibir media",
        "C) Entrada(a, b, c); Saida(a + b + c)",
        "D) a = ler(); imprimir(a)",
        "E) média = soma / quantidade; imprimir(média)"
      ],
      correta: 1,
      explicacao: "A alternativa correta é a letra B. O pseudocódigo mais adequado deve seguir a sequência lógica: primeiro ler os três valores (Ler a, b, c), depois calcular a média aritmética corretamente [(a + b + c) / 3] e por fim exibir o resultado (Exibir media). A alternativa B é a única que apresenta todos os passos necessários de forma correta e na ordem adequada."
    },

       {
      pergunta: "05. Qual das seguintes alternativas descreve corretamente o pensamento computacional e sua aplicação na solução de problemas?",
      opcoes: [
        "A) O pensamento computacional é um processo mental exclusivo dos programadores que envolve apenas a escrita de código.",
        "B) O pensamento computacional refere-se à capacidade de resolver problemas de forma sistemática, aplicando conceitos e técnicas utilizados na programação e na ciência da computação.",
        "C) O pensamento computacional é restrito a problemas relacionados a computadores e não tem aplicação em outras áreas do conhecimento.",
        "D) O pensamento computacional se refere apenas a habilidade de entender e utilizar softwares e aplicativos.",
        "E) Nenhuma das alternativas estão corretas."
      ],
      correta: 1,
      explicacao: "A alternativa correta é a letra B. O pensamento computacional é uma abordagem para resolver problemas de forma sistemática, utilizando conceitos e técnicas da computação, como decomposição, reconhecimento de padrões, abstração e algoritmos. Ele não se restringe apenas à programação e pode ser aplicado em diversas áreas do conhecimento."
    },

       {
      pergunta: "04. Considere o seguinte cenário: um estudante está desenvolvendo um programa em linguagem C para calcular a média de notas de alunos. Para isso, ele decide dividir o problema em partes menores: primeiro, ler os dados de entrada; depois, calcular a média; e por fim, exibir o resultado. Esse processo reflete um dos pilares do pensamento computacional. Com base nos conceitos apresentados por Brackmann (2017), qual pilar do pensamento computacional está sendo aplicado nesse cenário?",
      opcoes: [
        "A) Reconhecimento de padrões",
        "B) Abstração",
        "C) Algoritmos",
        "D) Decomposição",
        "E) Lógica condicional"
      ],
      correta: 3,
      explicacao: "A alternativa correta é a letra D. A decomposição é o pilar do pensamento computacional que consiste em dividir um problema complexo em partes menores e mais gerenciáveis. No cenário descrito, o estudante divide o programa em etapas distintas (ler, calcular, exibir), caracterizando a decomposição do problema."
    },

       {
      pergunta: "03. Ao tentar instruir um robô para abrir uma porta, as instruções devem ser muito mais detalhadas e sequenciais do que as dadas a um ser humano. Qual a principal razão para essa diferença, considerando o conceito de solução estruturada?",
      opcoes: [
        "A) Robôs se cansam mais facilmente e precisam de instruções claras para evitar erros.",
        "B) A linguagem de programação exige que as instruções sejam curtas e diretas, sem muitos detalhes.",
        "C) Robôs não têm capacidade de compreender instruções vagas ou discernimento cultural, necessitando de decisões lógicas baseadas em critérios objetivos e sequências ordenadas de passos.",
        "D) A complexidade de dar instruções a um computador é apenas uma questão de prática, mas não afeta a forma como ele compreende.",
        "E) Robôs executam cálculos matemáticos mais rapidamente que humanos, o que dispensa a necessidade de detalhamento excessivo."
      ],
      correta: 2,
      explicacao: "A alternativa correta é a letra C. Robôs e computadores não possuem senso comum ou capacidade de interpretar instruções vagas. Eles precisam de instruções claras, objetivas e sequenciais, seguindo uma lógica estruturada passo a passo, sem ambiguidades."
    },
       {
      pergunta: "01. Observe a sequência a seguir: 3, 15, 35, 63, 99, ... O próximo termo é:",
      opcoes: ["A) 110", "B) 121", "C) 134", "D) 143", "E) 195"],
      correta: 3,
      explicacao: "As diferenças entre os termos são: 12, 20, 28 e 36. Essas diferenças aumentam de 8 em 8. Portanto, a próxima diferença é 44. Assim, 99 + 44 = 143. Alternativa correta: D."
    },
    ],
  },

    // Adicione mais matérias aqui: 
    // ex: "fisica": { nome: "Física", icone: "⚛️", descricao: "...", perguntas: [...] }
  };

  // =============================================================
  //  LÓGICA DO QUIZ (adaptada para múltiplas matérias)
  // =============================================================
  let materiaAtual = null;          // chave da matéria em uso
  let perguntas = [];
  let current = 0;
  let respostas = [];
  let verificadas = [];
  let quizFinalizado = false;

  // DOM
  const materiasGrid = document.getElementById('materiasGrid');
  const quizArea = document.getElementById('quizArea');
  const materiasSection = document.getElementById('materiasSection');
  const btnVoltar = document.getElementById('btnVoltar');
  const materiaTag = document.getElementById('materiaTag');
  const progressoTag = document.getElementById('progressoTag');
  const perguntaTexto = document.getElementById('perguntaTexto');
  const opcoesContainer = document.getElementById('opcoesContainer');
  const resultadoDiv = document.getElementById('resultado');
  const resultadoTitulo = document.getElementById('resultadoTitulo');
  const resultadoTexto = document.getElementById('resultadoTexto');
  const explicacaoTexto = document.getElementById('explicacaoTexto');
  const btnAnterior = document.getElementById('btnAnterior');
  const btnProxima = document.getElementById('btnProxima');
  const btnVerificar = document.getElementById('btnVerificar');
  const btnFinalizar = document.getElementById('btnFinalizar');
  const resultadoFinalContainer = document.getElementById('resultadoFinalContainer');

  // =============================================================
  //  RENDERIZAR MATÉRIAS
  // =============================================================
  function renderizarMaterias() {
    materiasGrid.innerHTML = '';
    for (const [chave, mat] of Object.entries(materias)) {
      const card = document.createElement('div');
      card.className = 'card-materia';
      card.innerHTML = `
        <div>
          <div class="icone">${mat.icone}</div>
          <div class="nome">${mat.nome}</div>
          <div class="descricao">${mat.descricao}</div>
        </div>
        <div class="qtd">${mat.perguntas.length} exercícios</div>
      `;
      card.addEventListener('click', () => iniciarQuiz(chave));
      materiasGrid.appendChild(card);
    }
  }

  // =============================================================
  //  INICIAR QUIZ DE UMA MATÉRIA
  // =============================================================
  function iniciarQuiz(chave) {
    materiaAtual = chave;
    const mat = materias[chave];
    perguntas = mat.perguntas;
    const total = perguntas.length;
    respostas = new Array(total).fill(null);
    verificadas = new Array(total).fill(false);
    current = 0;
    quizFinalizado = false;

    // Esconde matérias, mostra quiz
    materiasSection.style.display = 'none';
    quizArea.classList.add('ativo');
    btnVoltar.classList.remove('hidden');

    // Atualiza nome da matéria no topo
    materiaTag.textContent = `${mat.icone} ${mat.nome}`;

    // Limpa resultado final anterior
    resultadoFinalContainer.innerHTML = '';

    renderizarPergunta();
  }

  // =============================================================
  //  FUNÇÕES DO QUIZ (similar ao anterior, mas com variáveis locais)
  // =============================================================
  function renderizarPergunta() {
    if (!perguntas.length) return;
    const q = perguntas[current];
    const total = perguntas.length;

    progressoTag.textContent = `${current + 1} / ${total}`;

    // Texto da pergunta (quebras de linha)
    perguntaTexto.innerHTML = q.pergunta.replace(/\n/g, '<br>');

    // Monta opções
    opcoesContainer.innerHTML = '';
    q.opcoes.forEach((texto, idx) => {
      const div = document.createElement('div');
      div.className = 'opcao';
      div.dataset.indice = idx;
      // Remove a letra inicial (a), b), etc) para exibir apenas o texto
      const textoLimpo = texto.replace(/^[a-e]\)\s*/, '');
      div.innerHTML = `<span class="letra">${String.fromCharCode(97 + idx)})</span> ${textoLimpo}`;
      // Se já verificada, aplica cores
      if (verificadas[current]) {
        div.classList.add('desabilitada');
        if (idx === q.correta) div.classList.add('correta');
        if (respostas[current] === idx && idx !== q.correta) div.classList.add('incorreta');
        if (respostas[current] === idx) div.classList.add('selecionada');
      } else {
        if (respostas[current] === idx) div.classList.add('selecionada');
      }
      div.addEventListener('click', () => onOptionClick(idx));
      opcoesContainer.appendChild(div);
    });

    // Atualiza botões navegação
    btnAnterior.disabled = (current === 0);
    btnProxima.disabled = (current === total - 1);

    // Botão verificar
    if (verificadas[current]) {
      btnVerificar.textContent = '✓ Verificado';
      btnVerificar.classList.add('verificado');
      btnVerificar.disabled = true;
    } else {
      btnVerificar.textContent = 'Verificar';
      btnVerificar.classList.remove('verificado');
      btnVerificar.disabled = (respostas[current] === null);
    }

    // Esconde resultado se não verificado
    if (!verificadas[current]) {
      resultadoDiv.classList.remove('visivel', 'correto', 'incorreto');
    } else {
      exibirFeedback(current);
    }

    // Se quiz finalizado, desabilita tudo
    if (quizFinalizado) {
      opcoesContainer.querySelectorAll('.opcao').forEach(el => el.classList.add('desabilitada'));
      btnVerificar.disabled = true;
      btnProxima.disabled = true;
      btnAnterior.disabled = true;
      btnFinalizar.disabled = true;
      btnFinalizar.textContent = '✅ Finalizado';
    } else {
      btnFinalizar.disabled = false;
      btnFinalizar.textContent = '📊 Finalizar';
    }
  }

  function onOptionClick(indice) {
    if (verificadas[current] || quizFinalizado) return;
    respostas[current] = indice;
    renderizarPergunta();
    btnVerificar.disabled = false;
    resultadoDiv.classList.remove('visivel', 'correto', 'incorreto');
  }

  function exibirFeedback(index) {
    const q = perguntas[index];
    const resp = respostas[index];
    if (resp === null) return;
    const acertou = (resp === q.correta);

    resultadoDiv.className = 'resultado visivel';
    if (acertou) {
      resultadoDiv.classList.add('correto');
      resultadoTitulo.textContent = '✅ Correto!';
      resultadoTexto.textContent = `Você escolheu: "${q.opcoes[resp]}"`;
    } else {
      resultadoDiv.classList.add('incorreto');
      resultadoTitulo.textContent = '❌ Incorreto.';
      resultadoTexto.textContent = `Você escolheu: "${q.opcoes[resp]}" | Resposta correta: "${q.opcoes[q.correta]}"`;
    }
    explicacaoTexto.innerHTML = `<strong>📖 Explicação:</strong> ${q.explicacao}`;
  }

  function verificarResposta() {
    if (verificadas[current] || quizFinalizado) return;
    if (respostas[current] === null) {
      alert('Selecione uma opção primeiro.');
      return;
    }
    verificadas[current] = true;
    renderizarPergunta();
    exibirFeedback(current);
  }

  function mudarPergunta(delta) {
    const nova = current + delta;
    if (nova < 0 || nova >= perguntas.length) return;
    current = nova;
    renderizarPergunta();
    document.querySelector('.quiz-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function finalizarQuiz() {
    if (quizFinalizado) return;
    const total = perguntas.length;
    const naoRespondidas = respostas.some((r, idx) => r === null && !verificadas[idx]);
    if (naoRespondidas) {
      if (!confirm('Ainda há perguntas não respondidas. Deseja finalizar mesmo assim?')) {
        return;
      }
    }
    quizFinalizado = true;
    // Marca todas como verificadas se tiver resposta
    for (let i = 0; i < total; i++) {
      if (respostas[i] !== null) {
        verificadas[i] = true;
      }
    }
    // Calcula acertos
    let acertos = 0;
    for (let i = 0; i < total; i++) {
      if (respostas[i] !== null && respostas[i] === perguntas[i].correta) acertos++;
    }
    const porcentagem = Math.round((acertos / total) * 100);

    resultadoFinalContainer.innerHTML = `
      <div class="resultado-final">
        <h2>📊 Quiz finalizado!</h2>
        <div class="nota">${acertos} / ${total}</div>
        <p style="font-size:1.1rem; margin-bottom:6px;">${porcentagem}% de acerto</p>
        <p style="color:#475569;">${porcentagem >= 70 ? '🎉 Parabéns!' : '💪 Continue praticando!'}</p>
        <button class="btn" id="btnReiniciar" style="margin-top:12px; background:#2d4059; color:#fff;">🔄 Refazer esta matéria</button>
      </div>
    `;
    document.getElementById('btnReiniciar')?.addEventListener('click', () => {
      // Reinicia a mesma matéria
      iniciarQuiz(materiaAtual);
    });

    // Desabilita navegação e verificação
    btnVerificar.disabled = true;
    btnVerificar.textContent = '🔒 Finalizado';
    btnProxima.disabled = true;
    btnAnterior.disabled = true;
    btnFinalizar.disabled = true;
    btnFinalizar.textContent = '✅ Finalizado';
    document.querySelectorAll('.opcao').forEach(el => el.classList.add('desabilitada'));
    if (respostas[current] !== null) exibirFeedback(current);
  }

  function voltarParaMaterias() {
    // Reseta estado
    materiaAtual = null;
    perguntas = [];
    respostas = [];
    verificadas = [];
    current = 0;
    quizFinalizado = false;
    quizArea.classList.remove('ativo');
    materiasSection.style.display = 'block';
    btnVoltar.classList.add('hidden');
    resultadoFinalContainer.innerHTML = '';
    // Limpa resultado
    resultadoDiv.classList.remove('visivel', 'correto', 'incorreto');
  }

  // =============================================================
  //  EVENT LISTENERS
  // =============================================================
  btnVerificar.addEventListener('click', verificarResposta);
  btnAnterior.addEventListener('click', () => mudarPergunta(-1));
  btnProxima.addEventListener('click', () => mudarPergunta(1));
  btnFinalizar.addEventListener('click', finalizarQuiz);
  btnVoltar.addEventListener('click', voltarParaMaterias);

  // =============================================================
  //  INICIALIZAÇÃO
  // =============================================================
  renderizarMaterias();
