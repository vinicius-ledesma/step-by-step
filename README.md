# StepByStep

App Angular com Po-ui e protheus-lib-core usado de exemplo para demonstração de recursos disponíveis.

## Instruções iniciais

Após realizar o "git clone", escolher um passo para seguir, dar o "git checkout" com o hash correspondente e então dar o "npm i" para baixar todas as dependências na node_modules.

## Navegação pelos steps do histórico

### Criação do projeto vazio

Commit 1 - git checkout 7ee7e9cd5eb88dd051d70e4678e7d32f904ec941  
Nenhuma instrução.

### Criação do app Angular puro

Commit 2 - git checkout 1d00fd9aba425f137b853674464566e7accdeb97  
Esta versão é resultado do comando: ng new step-by-step  
Para executar: ng serve -o

### Adicionando o Po-ui no projeto

Commit 3 - git checkout f16b22a7009978b861b7002290ec044dbe33f5c7  
Esta versão é resultado do comando: ng add @po-ui/ng-components  
Para executar: ng serve -o

### Mudando para o tema Totvs

Commit 4 - git checkout 4bfc520f051b04d396794290aaf323b120e348d0  
Esta versão é resultado do comando "npm i @totvs/po-theme" e da manipulação do styles angular.json  
Para executar: ng serve -o

### Criadas opções Home e Lista no menu

Commit 5 - git checkout 2affe79fbb03d631c931c230060e4f6573e5ea0e  
Esta versão executou os comandos "ng g c home" e "ng g c lista", além de criar os arquivo de módulo e de modificar o array de menus no app.component.ts.  
Para executar: ng serve -o

### Criada lista fixa com exemplo do po-ui.io

Commit 6 - git checkout 0baa85a6b9e10006a6b7085e39841df11981577a  
Usado comando "ng g s list/list" para criar o arquivo do serviço e então copiado o conteúdo dos 3 arquivos do exemplo.  
Para executar: ng serve -o

### Alterada a lista para exibir retorno do backend

Commit 7 - git checkout 6d2b6c51fa450b2a99c4adf8f79063ca295f9472  
Necessário subir o rest "sem segurança" em localhost:8081/rest pois está chumbado no fonte.  
Para executar: ng serve -o

### Colocada tela de carregamento para aguardar API

Commit 8 - git checkout 13c1ce6f81c427591ba9e820e3caff95de769d0b  
Ainda necessita do rest sem login e com endereço chumbado.  
Para executar: ng serve -o

### Instalada a protheus-lib-core e configurado o appConfig.json

Commit 9 - git checkout b6ae0e3e6707a84afd730f29dfa11f35e92cfcb2  
Ainda necessita do rest sem login, mas o endereço do rest está no arquivo de configuração.  
Para executar: ng serve -o

### Configurado para fazer o build do Protheus

Commit 10 - git checkout 41bc595398d1e6950a19c6b00342efce1a9e8d0e  
Agora não funciona mais com ng serve pois não conhece mais o endereço do backend.  
Para executar no Protheus é necessário:

-Buildar o app com "ng build --prod";  
-Compactar a pasta step-by-step da pasta dist;  
-Renomear de zip para app;  
-Criar um fonte prw com a função FwCallApp("step-by-step");  
-Compilar o fonte e o arquivo .app;  
-Colocar no menu e executar;

### Criada mensagem de boas vindas com jsToAdvpl e AdvplToJs

Commit 11 - git checkout  
Mensagem de boas vindas respeita o nome do usuário logado e a data base selecionada na entrada do sistema.  
Criados dois botões para demonstrar uma chamada sem necessidade de retorno e uma para pedir um retorno.
Ainda está sem proteção e por isso só funciona dentro do Protheus.
