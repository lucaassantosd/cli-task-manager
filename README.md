# CLI Task Manager 📝

Um gerenciador de tarefas simples e funcional rodando diretamente no terminal. Este projeto foi desenvolvido durante a **Semana 1** do cronograma de estudos para consolidar os fundamentos do Node.js, manipulação do sistema de arquivos e código assíncrono.

## 🛠️ Tecnologias Utilizadas

* **Runtime:** Node.js
* **Módulos Nativos:** `fs/promises` (Manipulação de arquivos JSON de forma assíncrona) e `readline` (Interação com o usuário no terminal)
* **Estilização/CLI:** JavaScript assíncrono (Promises, async/await)

---

## 🚀 Como Executar o Projeto

### 1. Pré-requisitos
Certifique-se de ter o Node.js instalado na sua máquina:
* [Node.js](https://nodejs.org/)

### 2. Clonar e Acessar a Pasta
Navegue até a pasta do projeto da Semana 1:
```bash
cd caminho-do-seu-repositorio/semana-1
```

### 3. Iniciar a Aplicação
Rode o script principal diretamente com o Node:
```bash
node index.js
```

---

## ⚙️ Funcionalidades

* **Criar Tarefa:** Adiciona uma nova tarefa à lista que é salva de forma persistente em um arquivo `tasks.json`.
* **Listar Tarefas:** Exibe todas as tarefas cadastradas e seus respectivos status de conclusão.
* **Marcar como Concluída:** Altera o status de uma tarefa pendente para concluída usando o ID ou índice.
* **Remover Tarefa:** Exclui permanentemente uma tarefa do arquivo de registros.

---

## 📁 Estrutura do Projeto

```text
.
├── tasks.json             # Banco de dados local em formato JSON (gerado automaticamente)
├── index.js               # Código principal e fluxo do CLI no terminal
├── package.json           # Definição do projeto e scripts
└── README.md              # Documentação
```