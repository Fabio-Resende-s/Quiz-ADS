const perguntas = [

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"Com relação à transmissão de sinais em um meio físico, é correto afirmar que:",
opcoes:[
"A) A banda passante do canal distorce o sinal e pode provocar erros na recepção.",
"B) A atenuação do sinal só ocorre em meios não guiados.",
"C) Quanto maior a banda passante do canal, menor a taxa de transmissão que pode ser alcançada.",
"D) A potência do sinal transmitido é sempre menor do que a do sinal recebido.",
"E) Todas as alternativas estão incorretas."
],
correta:0,
explicacao:"A alternativa correta é a letra A. As limitações da banda passante do canal podem causar distorção no sinal, provocando erros na recepção. As demais alternativas estão incorretas."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"Há uma variedade de erros que podem ocorrer ao enviar mensagens em redes de computadores. Para minimizar esses erros, as redes de computadores geralmente implementam técnicas de detecção e correção de erros, como a adição de informações de verificação de redundância cíclica (CRC) aos pacotes e o reenvio de pacotes perdidos. Nesse sentido, as colisões em redes de computadores",
opcoes:[
"A) São previstas nos protocolos baseados em contenção.",
"B) Requerem o uso de token para o tratamento.",
"C) Não afetam o desempenho dos protocolos.",
"D) Ocorrem apenas quando o meio físico é o par trançado.",
"E) São benéficas em situações de baixa disputa do enlace."
],
correta:0,
explicacao:"A alternativa correta é a letra A. Em protocolos de acesso ao meio baseados em contenção, como ALOHA e CSMA/CD, as colisões são eventos previstos e tratados pelos próprios protocolos."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"O processo de detecção e correção de erros em redes é importante para garantir a integridade dos dados transmitidos em uma rede de computadores. O objetivo é detectar quaisquer erros que possam ocorrer durante a transmissão de dados e corrigi-los antes que afetem o destinatário. Nesse sentido, assinale a alternativa correta.",
opcoes:[
"A) O Stop-and-Wait ARQ é um protocolo de camada física.",
"B) O Stop-and-Wait ARQ emprega técnicas de detecção de erros.",
"C) O Stop-and-Wait ARQ pode ser substituído pelo TCP ou UDP.",
"D) O CSMA/CA é utilizado para garantir a entrega confiável de segmentos na camada de rede.",
"E) A família de protocolos CSMA é utilizada para o roteamento de pacotes na WAN."
],
correta:1,
explicacao:"A alternativa correta é a letra B. O protocolo Stop-and-Wait ARQ utiliza mecanismos de detecção de erros e retransmissão de quadros para garantir uma comunicação mais confiável."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"As técnicas de acesso ao meio são métodos utilizados para controlar o acesso a um canal de comunicação compartilhado, como uma rede sem fio ou uma rede de cabo. O objetivo é garantir que vários dispositivos possam transmitir e receber dados ao mesmo tempo, sem que haja interferência ou colisão de dados. Em relação às técnicas de acesso ao meio, marque a alternativa correta.",
opcoes:[
"A) São essenciais em enlaces ponto-a-ponto.",
"B) No CSMA os dispositivos ignoram o canal antes de transmitir os dados e, assim, evitam colisões.",
"C) O Token Ring emprega um roteador para tratar colisões.",
"D) O TDMA é baseado em slots de tempo.",
"E) O desempenho do S-ALOHA era inferior ao desempenho do ALOHA."
],
correta:3,
explicacao:"A alternativa correta é a letra D. O TDMA (Time Division Multiple Access) divide o meio de transmissão em intervalos de tempo (slots), permitindo que cada dispositivo transmita em seu momento específico, evitando colisões."
},
    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"Um dos protocolos de controle que são fundamentais para a implementação da arquitetura TCP/IP é o protocolo ARP. Sua função é:",
opcoes:[
"A) Distribuir dinamicamente informações de configurações para os hospedeiros em uma sub-rede.",
"B) Fazer o mapeamento entre os endereços de rede e de enlace dos hospedeiros.",
"C) Possibilitar a divisão de uma rede em sub-redes.",
"D) Possibilitar a utilização de mais endereços na rede interna do que os disponíveis para tal.",
"E) Transferir informações de controle entre os roteadores de uma sub-rede."
],
correta:1,
explicacao:"A alternativa correta é a letra B. O ARP (Address Resolution Protocol) é responsável por realizar o mapeamento entre o endereço IP (camada de rede) e o endereço MAC (camada de enlace) de um dispositivo na rede."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"(VUNESP/2022 - Adaptada) Em relação ao protocolo IP (Internet Protocol), o cabeçalho IPv4 possui um campo que é um contador usado para limitar a vida útil dos pacotes. Sobre este contador, é correto afirmar que:",
opcoes:[
"A) A vida útil máxima de um pacote é limitada em 65535 milissegundos.",
"B) Ele é denominado Package Counter.",
"C) Ele limita uma vida útil máxima de um pacote em 360 segundos.",
"D) O tempo que ele contabiliza é dado em múltiplos de microsegundos.",
"E) O campo IP Header Length informa o tamanho do cabeçalho em palavras de 32 bits."
],
correta:4,
explicacao:"Conforme o gabarito oficial da banca, a resposta correta é a letra E. O campo TTL é decrementado a cada roteador e pode assumir valores de até 255. O campo IHL (Internet Header Length) informa o tamanho do cabeçalho IPv4 em palavras de 32 bits."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"(FGV/2018) Sobre as técnicas de comutação, analise as afirmativas a seguir. I. Diferentes pacotes podem seguir caminhos distintos na comutação de pacotes implementada por datagramas. II. A comutação de circuitos utiliza a transmissão store-and-forward, desde o transmissor até o receptor. III. Em um circuito virtual os dados são entregues fora de ordem. Está correto o que se afirma em:",
opcoes:[
"A) I, apenas",
"B) II, apenas",
"C) III, apenas",
"D) I e II, apenas",
"E) I, II e III"
],
correta:0,
explicacao:"A afirmativa I é verdadeira porque, em redes de datagramas, os pacotes podem seguir caminhos diferentes. A afirmativa II é falsa porque a técnica store-and-forward é característica da comutação de pacotes. A afirmativa III é falsa porque, em circuitos virtuais, os pacotes normalmente são entregues em ordem."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"(UFMG/2021 - Adaptada) O endereçamento IP é essencial para que os dispositivos possam se comunicar através da internet ou de uma rede local. Qual é o protocolo que permite a alocação dinâmica de endereços IP públicos?",
opcoes:[
"A) ARP",
"B) DHCP",
"C) Dynamic-IP",
"D) NAT",
"E) UDP"
],
correta:1,
explicacao:"A alternativa correta é a letra B. O DHCP (Dynamic Host Configuration Protocol) permite a atribuição automática de endereços IP e outras configurações de rede aos dispositivos conectados."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"Dentre as alternativas, selecione a correta em relação à tabela de repasse.",
opcoes:[
"A) Deve possuir uma entrada para cada possível hospedeiro.",
"B) São criadas para estabelecer as rotas em algoritmos de roteamento estáticos.",
"C) São montadas com base em informações processadas pelo algoritmo de roteamento.",
"D) São necessárias apenas quando se utiliza algoritmo de roteamento adaptativo.",
"E) Todos os roteadores da sub-rede devem possuir a mesma tabela de repasse."
],
correta:2,
explicacao:"A alternativa correta é a letra C. As tabelas de repasse (forwarding tables) são construídas a partir das informações obtidas pelos algoritmos de roteamento e são utilizadas pelos roteadores para encaminhar pacotes ao próximo salto adequado."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"A camada de rede de uma rede de computadores pode oferecer os serviços de circuitos virtuais ou de datagramas. O tipo de serviço oferecido influencia diretamente na forma como os pacotes serão transportados entre origem e destino.\n\nAbaixo são realizadas comparações entre circuitos virtuais e datagramas:\nI - Nas redes de circuitos virtuais é estabelecido um caminho a ser seguido por todos os pacotes de uma conexão, enquanto nas redes de datagrama não existe o conceito de conexão.\nII - Em uma rede de circuitos virtuais os roteadores precisam armazenar as informações de todas as conexões que passam por ele, enquanto nas redes de datagrama basta saber como chegar a cada destino.\nIII - Como necessitam conhecer o caminho, somente as redes de circuito virtual precisam executar algoritmos de roteamento. Redes de datagramas não possuem esta necessidade.\nCom base nas comparações acima, é correto o que se afirma em:",
opcoes:[
"A) I somente.",
"B) I e II somente.",
"C) II e III somente.",
"D) I e III somente.",
"E) Todas as afirmações estão corretas."
],
correta:1,
explicacao:"As afirmativas I e II são verdadeiras. A afirmativa III é falsa, pois redes de datagramas também utilizam algoritmos de roteamento para encaminhar os pacotes."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"(FGV/2022) A técnica definida nas Request for Comments (RFC) 1631 e 3022 permite que a existência de uma rede internamente um grande conjunto de endereços IPv4 e, externamente, um endereço ou então um pequeno conjunto de endereços se chama:",
opcoes:[
"A) Intranet",
"B) ipconfig",
"C) Ifconfig",
"D) IPV6",
"E) NAT"
],
correta:4,
explicacao:"A alternativa correta é a letra E. O NAT (Network Address Translation) permite que vários dispositivos de uma rede privada utilizem um único endereço IP público ou um pequeno conjunto de endereços públicos para acessar a Internet."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"(UFR/2021 - Adaptada) O IPv4 é uma versão do Protocolo de Internet. Sobre as características do IPv4, marque V para as afirmativas verdadeiras e F para as falsas. ( ) Possui um limite de endereçamento. ( ) Requer uso de classe G e H em rede. ( ) Utiliza campo que informa sua versão. ( ) Elimina o uso de TTL, Offset e flags. Assinale a sequência correta.",
opcoes:[
"A) VFFV",
"B) VFVF",
"C) FFVF",
"D) FVFV",
"E) FFFF"
],
correta:1,
explicacao:"A sequência correta é VFVF. O IPv4 possui limite de endereçamento, não possui classes G e H, utiliza um campo de versão no cabeçalho e utiliza os campos TTL, Flags e Fragment Offset."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"(IBFC/2023) Quanto às camadas do Modelo OSI, mencionadas abaixo, assinale a alternativa que apresenta essas camadas organizadas da mais superiores para as inferiores. A. Física B. Apresentação C. Transporte D. Rede",
opcoes:[
"A) ABCD",
"B) BCDA",
"C) CDAB",
"D) DBAC",
"E) BACD"
],
correta:1,
explicacao:"A ordem correta das camadas do Modelo OSI, da mais superior para a mais inferior entre as opções dadas, é: Apresentação (B), Transporte (C), Rede (D) e Física (A). Portanto, a resposta correta é BCDA."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"O correio eletrônico é um serviço digital que permite aos usuários de computadores o envio e a recepção de mensagens com conteúdo de texto, assim como outras funções adicionais como anexar arquivos junto às mensagens.\n\nSobre o correio eletrônico, marque a alternativa correta.\n\nDisponível em: https://conceitos.com/correio-eletronico/. Acesso em: 22 set. 2022. Adaptado.",
opcoes:[
"A) Cada destinatário de correio eletrônico possui uma caixa postal no servidor, em que suas mensagens são armazenadas.",
"B) Podem transportar mensagens multimídia sem a necessidade de codificação para envio.",
"C) Se o destinatário estiver on-line no momento da entrega, a mensagem não passará pela caixa postal.",
"D) Utiliza o mesmo protocolo tanto para o envio quanto para a recepção das mensagens.",
"E) O correio eletrônico está se tornando obsoleto em favor de tecnologias com o metaverso."
],
correta:0,
explicacao:"A alternativa correta é a letra A. Cada usuário de e-mail possui uma caixa postal (mailbox) em um servidor de correio eletrônico, onde as mensagens recebidas ficam armazenadas até serem acessadas. O envio e a recepção utilizam protocolos diferentes, como SMTP para envio e POP3 ou IMAP para recebimento."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"Quando deseja acessar uma página web, um usuário utiliza um browser (navegador) que busca a página solicitada em um servidor web. Com base na interação entre o browser e o servidor web, marque a alternativa correta:",
opcoes:[
"A) A arquitetura do software de acesso à web é um exemplo de arquitetura peer-to-peer.",
"B) O protocolo utilizado para a transferência de páginas web entre browser e servidor é o DNS.",
"C) Servidores web atendem tipicamente na porta 80.",
"D) Servidores web são softwares que executam na camada de transporte do modelo OSI.",
"E) O protocolo www é utilizado como forma de acessar páginas da web."
],
correta:2,
explicacao:"A alternativa correta é a letra C. Os servidores web normalmente utilizam a porta 80 para conexões HTTP e a porta 443 para conexões HTTPS. A Web utiliza uma arquitetura Cliente/Servidor, o DNS apenas traduz nomes em endereços IP e WWW não é um protocolo."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"(IBADE/2022 - Adaptada) O correio eletrônico, também conhecido como e-mail, é um serviço de comunicação baseado em tecnologia de rede que permite a troca de mensagens eletrônicas entre usuários conectados à Internet. O e-mail revolucionou a forma como as pessoas se comunicam, possibilitando o envio de mensagens instantâneas e a comunicação em tempo real em qualquer lugar do mundo, independentemente da distância geográfica. Considerando protocolos de rede, assinale a alternativa correspondente ao protocolo utilizado exclusivamente para correio eletrônico.",
opcoes:[
"A) HTTP.",
"B) HTTPS.",
"C) IMAP.",
"D) SNMP.",
"E) FTP."
],
correta:2,
explicacao:"A alternativa correta é a letra C. O IMAP (Internet Message Access Protocol) é um protocolo utilizado exclusivamente para correio eletrônico, permitindo acessar e gerenciar mensagens armazenadas em um servidor de e-mail. HTTP e HTTPS são protocolos da Web, SNMP é usado para gerenciamento de redes e FTP é utilizado para transferência de arquivos."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"As redes de computadores são estruturadas utilizando o conceito de camadas, com o objetivo de facilitar a manutenção e evolução dos serviços de redes. Acerca do conceito de camadas de rede, podemos dizer que:",
opcoes:[
"A) Uma camada utiliza o serviço da camada inferior e oferece para a camada superior.",
"B) Permitiu a diminuição no volume de dados a ser transmitido pelo meio de comunicação.",
"C) Uma camada utiliza o serviço da camada superior e oferece para a camada inferior.",
"D) Tornou o problema de transmissão de dados mais complexo do que se fosse desenvolvido em uma camada única.",
"E) Todas as alternativas estão incorretas."
],
correta:0,
explicacao:"A alternativa correta é a letra A. No modelo em camadas, cada camada utiliza os serviços da camada imediatamente inferior e fornece serviços para a camada imediatamente superior. Essa organização facilita a manutenção, evolução e interoperabilidade das redes de computadores."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"O processo de encapsulamento permite que cada camada possa abstrair do conteúdo recebido pelas camadas superiores, garantindo o isolamento das informações. O processo do encapsulamento ocorre quando:",
opcoes:[
"A) Uma camada recebe as informações da camada inferior, por meio do serviço, adicionando o cabeçalho da própria camada.",
"B) Pela interface, uma camada recebe dados da camada imediatamente inferior e adiciona o cabeçalho da própria camada.",
"C) A camada superior envia, por meio do protocolo, os dados para a mesma camada de outro dispositivo.",
"D) A camada inferior recebe, pela interface, os dados da camada superior, adicionando o próprio cabeçalho.",
"E) Todas as alternativas estão incorretas."
],
correta:3,
explicacao:"A alternativa correta é a letra D. No processo de encapsulamento, cada camada recebe os dados da camada superior por meio da interface e adiciona seu próprio cabeçalho antes de repassá-los para a camada inferior."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"O modelo em camadas de redes é um framework conceitual usado para entender e projetar a infraestrutura de comunicação em redes de computadores. A ideia principal por trás desse modelo é dividir o processo de comunicação em diferentes camadas, cada uma responsável por realizar uma função específica. No modelo em camadas de uma arquitetura de rede, como é definida a relação entre camadas adjacentes?",
opcoes:[
"A) Camadas adjacentes não interagem entre si.",
"B) Cada camada é independente e opera sem influência das outras.",
"C) A camada superior oferece serviços para a camada imediatamente superior.",
"D) A camada inferior fornece serviços para a camada imediatamente superior.",
"E) Todas as camadas se comunicam diretamente entre si."
],
correta:3,
explicacao:"A alternativa correta é a letra D. Em uma arquitetura em camadas, cada camada utiliza os serviços da camada inferior e fornece serviços para a camada imediatamente superior. Essa organização facilita o desenvolvimento, manutenção e interoperabilidade dos protocolos de rede."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"A divisão em camadas permitiu o isolamento de funções, sendo cada camada responsável por determinadas funcionalidades. O modelo OSI pode ser considerado o pai dessa ideia e, na sua padronização, definiu que:",
opcoes:[
"A) A camada de enlace é responsável por garantir o encaminhamento dos dados da origem até o destino.",
"B) A camada de apresentação é responsável por garantir a interoperabilidade dos sistemas.",
"C) A camada física é responsável por realizar o controle de erro entre nós vizinhos.",
"D) A camada de sessão é responsável por encaminhar os dados de um nó para o nó vizinho.",
"E) Todas as alternativas estão incorretas."
],
correta:1,
explicacao:"A alternativa correta é a letra B. A camada de Apresentação é responsável pela representação dos dados, tradução de formatos, compressão e criptografia, permitindo a interoperabilidade entre diferentes sistemas."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"Um administrador de rede está configurando um sistema para garantir que os pacotes de dados sejam encaminhados eficientemente do ponto de origem ao destino em uma rede complexa. Qual camada do Modelo OSI é primordial para realizar esta função?",
opcoes:[
"A) Camada de Aplicação.",
"B) Camada de Transporte.",
"C) Camada de Rede.",
"D) Camada de Enlace.",
"E) Camada Física."
],
correta:2,
explicacao:"A alternativa correta é a letra C. A Camada de Rede é responsável pelo endereçamento lógico e pelo roteamento dos pacotes, garantindo que os dados sejam encaminhados da origem até o destino através da rede."
},

    {
materia:"Fundamentos de Redes de Computadores",
pergunta:"As camadas do modelo OSI têm seus serviços definidos, elas sabem o que devem fazer, entretanto, não estão definidos protocolos, ou o como fazer. A camada que é responsável por garantir a comunicação confiável entre processos é a:",
opcoes:[
"A) Transporte.",
"B) Rede.",
"C) Enlace.",
"D) Sessão.",
"E) Todas as alternativas estão incorretas."
],
correta:0,
explicacao:"A alternativa correta é a letra A. A camada de Transporte é responsável pela comunicação fim a fim entre processos, oferecendo serviços como confiabilidade, controle de fluxo, controle de erros e segmentação dos dados."
},

{
materia:"Fundamentos de Redes de Computadores",
pergunta:"A camada de transporte carrega mensagens da camada de aplicação entre os lados do cliente e servidor de uma aplicação. Há dois protocolos de transporte na Internet: TCP e UDP. São serviços oferecidos pelo protocolo UDP:\n\nI. Transferência de dados confiável.\nII. Serviço não orientado a conexão.\nIII. Detecção de erros.\n\nMarque a alternativa que possui todos os serviços corretos:",
opcoes:[
"a) II, III.",
"b) I, II, III.",
"c) I, III.",
"d) I, II.",
"e) II."
],
correta:4,
explicacao:"O protocolo UDP provê serviço não orientado a conexão para suas aplicações. É um serviço econômico, sem controle de fluxo e de congestionamento. Um pacote da camada de transporte é denominado segmento."
},

{
materia:"Fundamentos de Redes de Computadores",
pergunta:"A camada de transporte carrega mensagens da camada de aplicação entre os lados do cliente e servidor de uma aplicação. Há dois protocolos de transporte na Internet: TCP e UDP. São serviços oferecidos pelo protocolo TCP:\n\nI. Transferência de dados confiável.\nII. Serviço não orientado a conexão.\nIII. Fragmentação em segmentos.\n\nMarque a alternativa que possui todos os serviços corretos:",
opcoes:[
"a) II, III.",
"b) I, II, III.",
"c) I, III.",
"d) I.",
"e) III."
],
correta:2,
explicacao:"A alternativa correta é a letra C. O protocolo TCP oferece transferência confiável de dados e realiza a segmentação das informações em segmentos. A afirmação II está incorreta porque o TCP é um protocolo orientado à conexão. Quem é não orientado à conexão é o UDP."
},

{
materia:"Fundamentos de Redes de Computadores",
pergunta:"Um sistema de comunicação é um conjunto de entidades (ou partes) coordenadas, que concorrem para a realização de um determinado objetivo - que, usualmente, dá nome ao sistema. Qual é o termo relacionado à definição: 'Conjunto de módulos processadores interligados por um sistema de comunicação capazes de trocar informações e compartilhar recursos'?",
opcoes:[
"a) Unidade de processamento.",
"b) Redes de Computadores.",
"c) Fluxo de Dados.",
"d) Redes Isoladas.",
"e) Elementos desconexos."
],
correta:1,
explicacao:"A alternativa correta é a letra B. Uma Rede de Computadores é formada por computadores e outros dispositivos interligados por um sistema de comunicação, permitindo a troca de informações e o compartilhamento de recursos, como arquivos, impressoras e acesso à internet."
},

{
materia:"Fundamentos de Redes de Computadores",
pergunta:"Em cada camada, uma Unidade de Dados de Protocolo, ou PDU (Protocol Data Unit) possui campos de cabeçalho e um campo de carga útil. Dentre as opções a seguir, qual é o nome do PDU da camada de enlace de dados?",
opcoes:[
"a) Quadro.",
"b) Datagrama.",
"c) Mensagem.",
"d) Segmento.",
"e) Rótulo."
],
correta:0,
explicacao:"A alternativa correta é a letra A. Na camada de Enlace de Dados, a PDU é chamada de Quadro (Frame). Essa camada é responsável pelo encapsulamento dos dados para transmissão pelo meio físico, incluindo informações como endereços MAC e mecanismos de detecção de erros."
},

{
materia:"Fundamentos de Redes de Computadores",
pergunta:"A radiação eletromagnética consiste em ondas do campo eletromagnético, que se propagam pelo espaço e carregam energia eletromagnética radiante. A luz visível que vem de uma lâmpada em sua casa e as ondas de rádio que vêm de uma estação de rádio são dois tipos de radiação eletromagnética. É um exemplo de onda eletromagnética utilizada em redes não guiadas:",
opcoes:[
"a) Fibra ótica.",
"b) Cabo coaxial.",
"c) Cabo de par trançado.",
"d) Cabo USB.",
"e) Micro-ondas."
],
correta:4,
explicacao:"A alternativa correta é a letra E. As micro-ondas são ondas eletromagnéticas utilizadas em meios de transmissão não guiados (sem fio), como enlaces de rádio, redes de telefonia celular e comunicação via satélite. As demais alternativas são meios físicos guiados, que utilizam cabos para transmitir os dados."
},

{
materia:"Fundamentos de Redes de Computadores",
pergunta:"Na literatura, as redes de computadores podem ser classificadas de várias formas, sempre com base em fundamentos confiáveis e validados. Na literatura formal, são elementos para a classificação de redes de computadores:\n\nI. Critérios relativos/subjetivos.\nII. Meio de transmissão.\nIII. Arquitetura de Rede.\nIV. Arquitetura de Computadores.\n\nMarque a alternativa que possui todos os elementos corretos:",
opcoes:[
"a) I, II, III, IV.",
"b) I, II, III.",
"c) II, III, IV.",
"d) II, III.",
"e) III, IV."
],
correta:3,
explicacao:"A alternativa correta é a letra D. As redes de computadores podem ser classificadas pelo meio de transmissão (guiado ou não guiado) e pela arquitetura de rede (cliente-servidor, ponto a ponto, etc.). Critérios subjetivos e arquitetura de computadores não são classificações formais de redes."
},

{
materia:"Fundamentos de Redes de Computadores",
pergunta:"Todas as atividades na Internet que envolvem duas ou mais entidades remotas que se comunicam são governadas por um elemento que define o formato e a ordem das mensagens trocadas entre duas ou mais entidades comunicantes, bem como as ações realizadas na transmissão e/ou no recebimento de uma mensagem ou outro evento. O nome desse elemento é:",
opcoes:[
"a) Encapsulamento.",
"b) Interface.",
"c) Serviço.",
"d) Protocolo.",
"e) Link."
],
correta:3,
explicacao:"A alternativa correta é a letra D. Um protocolo é um conjunto de regras que define como os dispositivos se comunicam em uma rede, especificando o formato, a sequência das mensagens e as ações realizadas durante a transmissão e o recebimento dos dados."
},

{
materia:"Fundamentos de Redes de Computadores",
pergunta:"Em cada camada, uma Unidade de Dados de Protocolo, ou PDU (Protocol Data Unit), possui campos de cabeçalho e um campo de carga útil. Dentre as opções a seguir, qual é o nome do PDU da camada de aplicação?",
opcoes:[
"a) Quadro.",
"b) Célula.",
"c) Mensagem.",
"d) Segmento.",
"e) Rótulo."
],
correta:2,
explicacao:"A alternativa correta é a letra C. Na camada de Aplicação, a PDU recebe o nome de Mensagem. Cada camada do modelo de redes possui uma PDU específica para representar os dados que estão sendo processados."
},

{
materia:"Fundamentos de Redes de Computadores",
pergunta:"As sete camadas do modelo de referência OSI são: de aplicação, de apresentação, de sessão, de transporte, de rede, de enlace e camada física. Qual das seguintes camadas da arquitetura de redes em camadas OSI possui a seguinte função: 'Transmissão de bits por um canal de comunicação sem preocupação com o significado e arranjo dos mesmos'?",
opcoes:[
"a) Física.",
"b) Enlace.",
"c) Rede.",
"d) Transporte.",
"e) Aplicação."
],
correta:0,
explicacao:"A alternativa correta é a letra A. A camada Física é responsável pela transmissão de bits através do meio de comunicação, sem se preocupar com o significado dos dados. Ela trata de sinais elétricos, ópticos ou de rádio e define aspectos físicos da comunicação."
},

{
materia:"Fundamentos de Redes de Computadores",
pergunta:"Em cada camada, uma Unidade de Dados de Protocolo, ou PDU (Protocol Data Unit), possui campos de cabeçalho e um campo de carga útil. Dentre as opções a seguir, qual é o nome do PDU do protocolo IP?",
opcoes:[
"a) Quadro.",
"b) Datagrama.",
"c) Mensagem.",
"d) Segmento.",
"e) Rótulo."
],
correta:1,
explicacao:"A alternativa correta é a letra B. Na camada de Internet (IP), a PDU é chamada de Datagrama. Cada camada possui um nome específico para sua unidade de dados: Aplicação → Mensagem, Transporte → Segmento (TCP) ou Datagrama (UDP), Internet → Datagrama IP e Enlace → Quadro."
},

{
pergunta:"Certa empresa realizou uma análise dos riscos que existiam em suas redes e em seus sistemas. O consultor de segurança informou a detecção de vulnerabilidades que permitiam realizar invasões em diversos sistemas. Nesse caso, o atacante poderia assumir a identidade de usuários válidos na rede, caracterizando um ataque de personificação. Para minimizar o risco de esse ataque ter sucesso, devem ser implementados mecanismos de:",
opcoes:[
"a) Sistema de detecção de intrusão e controle de acesso.",
"b) Autenticação e controle de acesso.",
"c) Autenticação e verificação de integridade.",
"d) Antivírus e verificação de integridade.",
"e) Sistema de detecção de risco."
],
correta:1,
explicacao:"A alternativa correta é a letra B. Um ataque de personificação ocorre quando um invasor se passa por um usuário legítimo. Para reduzir esse risco, é necessário implementar mecanismos de autenticação, para verificar a identidade do usuário, e controle de acesso, para limitar os recursos que cada usuário pode utilizar."
},

{
pergunta:"Para que uma rede seja protegida de ataques, é necessário adotar medidas de controle físico e lógicos. Essas medidas de controle têm por objetivo garantir a Confidencialidade, Integridade e Disponibilidade (CID) das informações disponibilizadas na rede. Um exemplo de medida de controle físico é o emprego de:",
opcoes:[
"a) Sistemas de detecção de intrusão.",
"b) Redes virtuais privadas.",
"c) Nobreaks.",
"d) Certificados digitais.",
"e) Antivírus."
],
correta:2,
explicacao:"A alternativa correta é a letra C. O nobreak é uma medida de controle físico, pois fornece energia temporária em caso de falha elétrica, ajudando a manter a disponibilidade dos sistemas e protegendo equipamentos contra desligamentos inesperados. As demais alternativas são controles lógicos de segurança."
},

{
pergunta:"De acordo com a norma ABNT NBR ISO IEC 27001:2013, para garantir a segurança dos dados em determinada rede, é necessário que sejam garantidas algumas propriedades. Acerca dessas propriedades, podemos afirmar que:",
opcoes:[
"a) A confidencialidade está relacionada com a exatidão da informação, garantindo que ela permaneceu intacta.",
"b) A disponibilidade está relacionada com a possibilidade de acesso aos dados, quando necessário.",
"c) A autenticidade está relacionada com o sigilo do emissor e receptor de determinada informação.",
"d) O não repúdio garante validade jurídica a uma transação, que, para ser alcançada, necessita de integridade e legalidade.",
"e) A legalidade da transação protege a integridade dos dados."
],
correta:1,
explicacao:"A alternativa correta é a letra B. Disponibilidade é a propriedade que garante que os dados, sistemas e serviços estejam acessíveis aos usuários autorizados sempre que necessário. Já a confidencialidade refere-se ao sigilo das informações e a integridade garante que os dados não sejam alterados indevidamente."
},

{
pergunta:"(UFPE/2017 - Adaptada) A Máquina Enigma foi um dispositivo de criptografia usado pelos alemães durante a Segunda Guerra Mundial para codificar mensagens militares. Ela foi inventada por Arthur Scherbius no final da Primeira Guerra Mundial e foi usada amplamente pela Alemanha na década de 1930. A Máquina Enigma era composta por vários rotores, conexões elétricas e um teclado. Quando uma tecla era pressionada, a mensagem codificada era gerada. Sobre o tema criptografia, assinale a alternativa correta.",
opcoes:[
"a) Num esquema de criptografia de chave pública, a chave privada é distribuída publicamente.",
"b) Em um esquema de criptografia de chave pública e privada, utiliza-se a segunda para criptografar as informações e a primeira para realizar a operação inversa.",
"c) Na criptografia assimétrica, utiliza-se a mesma chave para codificação e decodificação das informações.",
"d) O MD5 é uma função criptográfica de 32 bits utilizada principalmente para verificação da integridade de arquivos.",
"e) Em um sistema de banco de dados de logins e senhas seguro, tanto um como outro são guardados sem criptografia."
],
correta:1,
explicacao:"A alternativa correta é a letra B. Na criptografia assimétrica existem duas chaves: uma pública e uma privada. A chave privada pode ser utilizada em processos de assinatura digital, sendo posteriormente verificada pela chave pública correspondente. As demais alternativas estão incorretas."
},

{
pergunta:"Certa empresa sofreu um ataque de negação de serviço, que tem por objetivo sobrecarregar a rede com dados acima da capacidade dela. Para esta atividade, o atacante utilizou máquinas de usuários que estavam vulneráveis na internet, enviando dados para a rede da empresa. Podemos afirmar que este ataque é:",
opcoes:[
"a) Indireto.",
"b) Interno.",
"c) Passivo.",
"d) De fabricação.",
"e) De autenticação."
],
correta:0,
explicacao:"A alternativa correta é a letra A. O ataque é considerado indireto porque o atacante utiliza computadores de terceiros, que foram comprometidos, para enviar grandes quantidades de dados ao alvo. Esse tipo de ataque é comum em ataques de negação de serviço distribuídos (DDoS)."
},

{
pergunta:"O cenário atual de segurança cibernética, como exemplificado pelo Brasil sofrendo 15 bilhões de ataques em apenas três meses, ressalta a criticidade da análise e gestão de riscos em redes de computadores. A norma ABNT NBR ISO IEC 27001:2013 fornece um arcabouço para entender melhor as definições, propriedades e tipos de ataques, bem como as estratégias para mitigá-los. Conhecer esses conceitos é essencial para desenvolver mecanismos eficazes de proteção.\n\nCom base na norma ABNT NBR ISO IEC 27001:2013, qual das alternativas melhor define uma 'Ameaça' no contexto da segurança da informação?",
opcoes:[
"a) Uma vulnerabilidade no sistema de informação.",
"b) Uma ferramenta usada para proteger dados.",
"c) Uma política de segurança interna da empresa.",
"d) Causa potencial de um incidente indesejado que pode resultar em danos a um sistema ou organização.",
"e) Um incidente que já causou danos à organização."
],
correta:3,
explicacao:"A alternativa correta é a letra D. Na segurança da informação, uma ameaça é qualquer causa potencial de um incidente indesejado que possa explorar vulnerabilidades e causar danos a um sistema, aos dados ou à organização."
},

{
pergunta:"A criptografia é um recurso utilizado desde tempos antigos, e a Cifra de César é um dos algoritmos mais conhecidos. Acerca das técnicas de criptografia, assinale a alternativa correta:",
opcoes:[
"a) Um algoritmo de criptografia assimétrica emprega uma única chave para cifrar e decifrar.",
"b) Um algoritmo de criptografia simétrica emprega duas chaves - uma para cifrar e outra para decifrar.",
"c) Em um algoritmo de chave privada, ao utilizar a chave privada primeiro, é garantida a confidencialidade.",
"d) Em um algoritmo de chave pública, ao utilizar a chave pública primeiro, é garantida a confidencialidade.",
"e) Um algoritmo de criptografia assimétrica emprega uma única chave para decifrar."
],
correta:3,
explicacao:"Segundo o gabarito da atividade, a alternativa correta é a letra D. Na criptografia de chave pública, a chave pública pode ser utilizada para cifrar uma mensagem, garantindo que apenas quem possui a chave privada correspondente consiga decifrá-la, preservando a confidencialidade."
},

{
pergunta:"Alice e Bob estão conversando por meio de um aplicativo de chat no celular. As mensagens enviadas entre eles não possuem criptografia, e Dart está conseguindo ler todas as mensagens que eles enviam, mas sem modificá-las. Podemos afirmar que este é um exemplo de ataque:",
opcoes:[
"a) Ativo de interceptação.",
"b) Passivo de personificação.",
"c) Ativo de fabricação.",
"d) Passivo de interceptação.",
"e) Ativo de autenticação."
],
correta:3,
explicacao:"A alternativa correta é a letra D. Trata-se de um ataque passivo de interceptação, pois o atacante apenas observa e lê as mensagens trocadas entre Alice e Bob, sem alterá-las ou interferir na comunicação. Esse tipo de ataque compromete a confidencialidade das informações."
},

{
pergunta:"(Prefeitura de Campo Grande - MS/2019 - Adaptada) A pilha de protocolos TCP/IP é um conjunto de protocolos de rede que define um modelo de comunicação para a internet. Qual a camada da pilha de protocolos TCP/IP que utiliza multiplexação e demultiplexação de portas?",
opcoes:[
"a) Transporte.",
"b) IP.",
"c) Enlace.",
"d) Aplicação.",
"e) Rede."
],
correta:0,
explicacao:"A alternativa correta é a letra A. A camada de Transporte utiliza números de portas para realizar a multiplexação e a demultiplexação dos dados, permitindo que várias aplicações utilizem a rede simultaneamente. Os protocolos TCP e UDP operam nessa camada."
},

{
pergunta:"(CORE-SP/2019 - Adaptada) O modelo de referência TCP/IP é um modelo de protocolo de rede que define como as informações são transmitidas através de redes de computadores. Sobre o modelo de referência TCP/IP encontrado nas redes de computadores, é correto afirmar:",
opcoes:[
"a) Sua camada de transporte possui extrema importância na comunicação entre dois equipamentos. O fluxo nessa camada somente se comunica com o seu fluxo par do dispositivo destino. Lida com questões de QoS, controle de fluxo, controle de sequência e correção de erros.",
"b) Protocolos de mais alto nível, como HTTP e SMTP, incluem os detalhes necessários à camada de aplicação e apresentação, enquanto que os protocolos de baixo nível, como DNS, FTP e POP, são responsáveis pelas indicações de fluxo de dados nas camadas de sessão e internet.",
"c) Em função de ser um protocolo orientado à conexão, os pacotes TCP não necessitam do uso de bits adicionais para assegurar o correto sequenciamento da informação, bem como um checksum obrigatório para garantir a integridade do cabeçalho e dos dados transmitidos.",
"d) Na camada de transporte, além do protocolo TCP, há também o protocolo UDP que, em função de sua orientação à conexão, possui a capacidade de controlar altos volumes de tráfego na Internet, o que proporciona aos seus usuários uma maior performance no envio e recebimento de dados.",
"e) O controle de erros observado na camada de transporte tem como objetivo detectar e corrigir erros gerados pelas camadas de apresentação e sessão, se preocupando com erros relacionados à integridade do conteúdo do pacote recebido, à entrega duplicada ou a pacotes recebidos fora da sequência."
],
correta:0,
explicacao:"A alternativa correta é a letra A. A camada de Transporte do modelo TCP/IP é responsável pela comunicação fim a fim entre aplicações e oferece mecanismos como controle de fluxo, controle de sequência, detecção de erros e qualidade de serviço (QoS)."
},

{
pergunta:"(IF-TO/2021 - Adaptada) No laboratório de Informática do Campus XYZ, o computador do aluno A tem o endereçamento IP 192.168.30.128/24. Os alunos podem utilizar os laboratórios para fazer pesquisas e outras tarefas. Para que o computador do Aluno A tenha acesso à internet é necessário que o seu IP local seja convertido para um IP público. Qual o protocolo abaixo tem essa função?",
opcoes:[
"a) NAT.",
"b) IP.",
"c) TCP.",
"d) UDP.",
"e) HTTP."
],
correta:0,
explicacao:"A alternativa correta é a letra A. O NAT (Network Address Translation) é a técnica utilizada para converter endereços IP privados, como 192.168.30.128, em um endereço IP público, permitindo que dispositivos de uma rede local tenham acesso à Internet."
},

{
pergunta:"(CESGRANRIO/2012) A arquitetura de protocolos da Internet prevê que a camada de Aplicação é responsável por fornecer os serviços aos usuários por intermédio de protocolos específicos. O suporte à camada de Aplicação é fornecido pela camada de Transporte, cuja responsabilidade é a de controlar a comunicação fim-a-fim entre processos de aplicação. O suporte à camada de Transporte, por sua vez, é fornecido pela camada imediatamente inferior, denominada camada Inter-redes. São exemplos de protocolos respectivamente utilizados nas camadas de Aplicação, Transporte e Inter-redes:",
opcoes:[
"a) FTP, TCP, CSMA/CD.",
"b) HTTP, UDP, IP.",
"c) CSMA/CD, TCP, IP.",
"d) HTTP, FTP, DHCP.",
"e) TCP, UDP, HTTP."
],
correta:1,
explicacao:"A alternativa correta é a letra B. O HTTP é um protocolo da camada de Aplicação, o UDP pertence à camada de Transporte e o IP pertence à camada Inter-redes (Internet)."
},

{
pergunta:"(UFMG/2021 - Adaptada) A camada de aplicação é a camada mais alta do modelo de referência TCP/IP e é responsável por fornecer serviços para os aplicativos que rodam em dispositivos conectados à rede. Ela permite que diferentes aplicativos se comuniquem de forma eficiente e padronizada, independentemente do sistema operacional, plataforma ou hardware utilizados. Dentro desse contexto, qual é o protocolo que faz o mapeamento de endereço URL para endereço IP?",
opcoes:[
"a) ARP.",
"b) DNS.",
"c) IP.",
"d) Stringle.",
"e) RIP."
],
correta:1,
explicacao:"A alternativa correta é a letra B. O DNS (Domain Name System) é responsável por traduzir nomes de domínio e URLs, como 'www.google.com', para seus respectivos endereços IP, permitindo que os dispositivos localizem os servidores na Internet."
},

{
pergunta:"(UFRJ/2021) Marque a alternativa que apresenta uma função dos números de porta incluídos nos segmentos TCP e UDP.",
opcoes:[
"a) Identificar o default gateway.",
"b) Permitir que o host ordene os pacotes corretamente.",
"c) Identificar aplicações em um mesmo host, permitindo que os dados sejam encaminhados à aplicação correta.",
"d) Realizar o controle de fluxo.",
"e) Identificar se o protocolo da camada de transporte é TCP ou UDP."
],
correta:2,
explicacao:"A alternativa correta é a letra C. Os números de porta são utilizados pelos protocolos TCP e UDP para identificar qual aplicação deve receber os dados em um mesmo dispositivo. Esse mecanismo permite que vários programas utilizem a rede ao mesmo tempo, encaminhando cada segmento para a aplicação correta."
},
{
pergunta:"O protocolo UDP apresenta um cabeçalho extremamente simples utilizado primordialmente por aplicações como DNS, SNMP e TFTP. Acerca das características do protocolo UDP, marque a alternativa correta:",
opcoes:[
"a) Não estabelece conexões para troca de dados.",
"b) Utilizado por aplicações que requerem uma comunicação confiável, com a garantia da entrega de todos os pacotes.",
"c) Responsável pela ordenação dos bits na camada física.",
"d) Realiza retransmissões para garantir a entrega de dados.",
"e) Trata-se de um protocolo de nível de enlace."
],
correta:0,
explicacao:"A alternativa correta é a letra A. O UDP (User Datagram Protocol) é um protocolo sem conexão (connectionless). Ele não estabelece conexão antes da transmissão dos dados e também não garante entrega, ordenação ou retransmissão dos pacotes. Por isso, é utilizado em aplicações que precisam de rapidez, como DNS, SNMP e TFTP."
},

{
pergunta:"(TRE-PI/2016 - Adaptada) A camada de aplicação é a camada mais alta e fornece serviços para os aplicativos que rodam em dispositivos conectados à rede. Ela inclui protocolos como HTTP, FTP, SMTP e DNS, entre outros. O serviço de multiplexação provido pela camada de transporte da Internet é responsável por:",
opcoes:[
"a) Evitar que o hospedeiro transmita em taxa superior à capacidade do receptor.",
"b) Garantir a escalabilidade das aplicações na arquitetura par-a-par.",
"c) Fornecer mecanismo de detecção e correção de erros na transmissão.",
"d) Receber os dados dos processos aplicativos, encapsulá-los em segmentos e encaminhá-los para a camada de redes.",
"e) Particionar datagramas com tamanhos superiores à MTU do enlace antes de sua transmissão."
],
correta:3,
explicacao:"A alternativa correta é a letra D. A camada de transporte recebe os dados enviados pelos processos das aplicações, realiza a multiplexação utilizando portas, encapsula os dados em segmentos e os encaminha para a camada de rede."
},

{
pergunta:"Quando o hospedeiro de origem vai enviar os dados, das mais diversas aplicações que estejam rodando, a camada de transporte vai dividir esses pacotes de informações em segmentos, antes de enviar para a camada de rede. Porém, antes disso, a camada de transporte precisa colocar no cabeçalho dos segmentos os dados do hospedeiro, bem como a porta na qual cada segmento deve ir.\n\nDisponível em: https://www.programacaoprogressiva.net/2019/02/Portas-Multiplexacao-Demultiplexacao-Redes-de-Computadores-Curso.html. Acesso em: 22 set. 2022. Adaptado.\n\nQuanto ao processo de multiplexação, marque a alternativa correta:",
opcoes:[
"a) A multiplexação ocorre somente em protocolos orientados à conexão, como o TCP.",
"b) A multiplexação ocorre somente em protocolos sem conexão, como o UDP.",
"c) Os protocolos de transporte da internet utilizam números de porta para realizar a multiplexação.",
"d) Se o protocolo IP for utilizado, não será necessária a multiplexação na camada de transporte.",
"e) A multiplexação ocorre no nível físico, sendo essencial para a comunicação entre camadas."
],
correta:2,
explicacao:"A alternativa correta é a letra C. Os protocolos de transporte, como TCP e UDP, utilizam números de porta para identificar as aplicações que enviam e recebem dados. Esse mecanismo permite que vários programas utilizem a rede simultaneamente, sendo conhecido como multiplexação."
},

{
pergunta:"(OBJETIVA/2019 - Adaptada) As arquiteturas em redes permitem a interoperabilidade entre diferentes dispositivos e sistemas, possibilitando que redes heterogêneas se comuniquem e troquem informações de forma eficiente e padronizada. É um exemplo do modelo de transmissão de informação Cliente/Servidor:",
opcoes:[
"a) Fazer backup em mídia removível.",
"b) Configuração de programas no computador.",
"c) Acesso remoto a um banco de dados.",
"d) Instalação de memória.",
"e) Utilização de editor de textos."
],
correta:2,
explicacao:"O acesso remoto a um banco de dados é um exemplo clássico do modelo Cliente/Servidor. Nesse modelo, um cliente faz requisições a um servidor, que processa as solicitações e fornece os dados ou serviços solicitados."
},

{
pergunta:"Qual protocolo faz o mapeamento entre endereço IP e endereço MAC?",
opcoes:[
"DHCP",
"TCP",
"ARP",
"HTTP"
],
correta:2,
explicacao:"O protocolo ARP (Address Resolution Protocol) é responsável por descobrir o endereço MAC correspondente a um endereço IP."
},

{
pergunta:"Qual camada do modelo TCP/IP é responsável pela entrega fim a fim?",
opcoes:[
"Aplicação",
"Transporte",
"Internet",
"Acesso à Rede"
],
correta:1,
explicacao:"A camada de Transporte utiliza protocolos como TCP e UDP para comunicação entre aplicações."
},

{
pergunta:"Em linguagem C, qual símbolo representa atribuição?",
opcoes:[
"==",
"=",
"!=",
"<="
],


correta:1,
explicacao:"O operador '=' realiza atribuição. Já '==' realiza comparação."
}

];



let indice = 0;
let pontos = 0;

function carregarPergunta(){

const p = perguntas[indice];

document.getElementById("contador").innerHTML =
`Questão ${indice+1} de ${perguntas.length} | Pontos: ${pontos}`;

document.getElementById("pergunta").innerText =
p.pergunta;

const opcoesDiv =
document.getElementById("opcoes");

opcoesDiv.innerHTML="";

document.getElementById("resultado").style.display="none";

p.opcoes.forEach((opcao,i)=>{

const div=document.createElement("div");

div.classList.add("opcao");

div.innerText=opcao;

div.onclick=()=>responder(i);

opcoesDiv.appendChild(div);

});

}

function responder(escolha){

const p = perguntas[indice];

const opcoes =
document.querySelectorAll(".opcao");

opcoes.forEach(op=>op.style.pointerEvents="none");

if(escolha===p.correta){

opcoes[escolha].classList.add("correta");

document.getElementById("mensagem").innerHTML=
"✅ Resposta Correta!";

pontos++;

}else{

opcoes[escolha].classList.add("errada");

opcoes[p.correta].classList.add("correta");

document.getElementById("mensagem").innerHTML=
"❌ Resposta Incorreta!";
}

document.getElementById("explicacao").innerHTML=
"<b>Explicação:</b> "+p.explicacao;

document.getElementById("resultado").style.display=
"block";

document.getElementById("contador").innerHTML =
`Questão ${indice+1} de ${perguntas.length} | Pontos: ${pontos}`;

}

function proximaPergunta(){

indice++;

if(indice >= perguntas.length){

let erros = perguntas.length - pontos;
let porcentagem = Math.round((pontos / perguntas.length) * 100);

let mensagem = "";

if(porcentagem === 100){
    mensagem = "🏆 Excelente! Você acertou tudo. Está preparado para a prova!";
}
else if(porcentagem >= 90){
    mensagem = "🔥 Muito bom! Você está quase perfeito.";
}
else if(porcentagem >= 70){
    mensagem = "👍 Bom desempenho! Continue revisando.";
}
else if(porcentagem >= 50){
    mensagem = "📚 Você está evoluindo. Estude mais um pouco.";
}
else{
    mensagem = "💪 Não desista! Revise as questões e tente novamente.";
}

let historico = JSON.parse(localStorage.getItem("historicoQuiz")) || [];

historico.push({
    data: new Date().toLocaleDateString("pt-BR"),
    porcentagem: porcentagem
});

localStorage.setItem(
    "historicoQuiz",
    JSON.stringify(historico)
);

let listaHistorico = "";

historico.forEach((item, i) => {
    listaHistorico += `
    <p>📅 Tentativa ${i + 1} - ${item.data} - ${item.porcentagem}%</p>
    `;
});

document.querySelector(".container").innerHTML = `
<h1>🎉 Quiz Finalizado!</h1>

<h2>📊 Resultado</h2>

<p>✅ Acertos: ${pontos}</p>

<p>❌ Erros: ${erros}</p>

<p>🎯 Aproveitamento: ${porcentagem}%</p>

<br>

<h3>${mensagem}</h3>

<br>
<hr>
<br>

<h2>📚 Histórico</h2>

${listaHistorico}

<br>

<button onclick="location.reload()">
🔄 Tentar Novamente
</button>
`;

return;
}

carregarPergunta();

}

carregarPergunta();