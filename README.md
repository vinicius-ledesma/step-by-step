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

Commit 6 - git checkout  
Usado comando "ng g s list/list" para criar o arquivo do serviço e então copiado o conteúdo dos 3 arquivos do exemplo.  
Para executar: ng serve -o
