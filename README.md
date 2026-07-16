# 📝 CLI Task Manager

Uma ferramenta de linha de comando (CLI) simples e eficiente para gerenciar suas tarefas diárias diretamente do terminal. Desenvolvida em Node.js puro utilizando módulos nativos para manipulação de arquivos e assincronismo.

Este projeto foi construído como o desafio da **Semana 1** do meu cronograma de estudos focado em dominar a stack Node.js, React e Next.js.

---

## 🚀 Tecnologias Utilizadas

*   **Node.js** (Ambiente de execução)
*   **JavaScript (ES6+)**
*   **Módulo nativo `fs/promises`** (Para persistência de dados em arquivo JSON local)

---

## 🛠️ Como Instalar e Rodar o Projeto

Para baixar e executar este projeto em sua máquina, você precisará ter o [Node.js](https://nodejs.org/) instalado (recomendado usar a versão LTS).

### 1. Clonar o repositório
Abra o seu terminal e clone este repositório para a sua máquina:
```bash
git clone [https://github.com/SEU_USUARIO/cli-task-manager.git](https://github.com/SEU_USUARIO/cli-task-manager.git)
```

### 2. Entrar na pasta do projeto
```bash
cd cli-task-manager
```

## 3. Inicializar o projeto
Como este projeto utiliza apenas módulos nativos do Node.js, você não precisa instalar bibliotecas externas. Basta garantir que o Node está ativo:

```bash
node -v
```

## 💻 Como Usar
O aplicativo funciona recebendo argumentos diretamente pela linha de comando. Veja os comandos disponíveis:

1. Adicionar uma nova tarefa
Para criar uma tarefa, use o comando add seguido do título da tarefa entre aspas:

```bash
node index.js add "Estudar TypeScript na semana 5"
```
Retorno esperado: ✓ Tarefa "Estudar TypeScript na semana 5" adicionada com sucesso!

2. Listar todas as tarefas
Para visualizar as tarefas salvas (com indicador visual de status e ID):

```bash
node index.js list
```

Retorno esperado:
```
--- SUAS TAREFAS ---
[ToDo] - Estudar TypeScript na semana 5 (ID: 1713456789123)
--------------------
```

3. Concluir uma tarefa
Para marcar uma tarefa como feita, use o comando complete seguido do ID gerado para ela:

```bash
node index.js complete 1713456789123
```

Retorno esperado: Tarefa "Estudar TypeScript na semana 5" marcada como concluída!

4. Deletar uma tarefa
Para remover definitivamente uma tarefa da sua lista, use o comando delete seguido do ID dela:

```bash
node index.js delete 1713456789123
```

Retorno esperado: Tarefa com ID 1713456789123 removida com sucesso!

## 📝 Aprendizados desta semana
Durante o desenvolvimento deste projeto prático, eu pude consolidar conceitos fundamentais de backend:

Como o Node.js lida com operações assíncronas utilizando async/await.

Manipulação de arquivos físicos de forma segura e assíncrona com o módulo node:fs/promises.

Captura, validação e tratamento de múltiplos parâmetros enviados pelo terminal através do process.argv.

Estruturação básica de tratamento de erros para evitar falhas de execução (crashes) inesperadas.

Versionamento correto ocultando arquivos de dados locais (tasks.json) usando .gitignore.

Desenvolvido com ☕ por Lucas Domingues.