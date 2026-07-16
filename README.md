# CLI Task Manager 📝 (Semana 1)

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

### 2. Iniciar a Aplicação
Navegue até a pasta do projeto e rode o script principal:
```bash
node index.js
```

---

## ⚙️ Exemplos de Uso e Comandos

Ao iniciar a aplicação, um menu interativo será exibido no seu terminal. Veja como as interações funcionam na prática:

### 1. Visualizando o menu interativo:
```text
=== GERENCIADOR DE TAREFAS ===
1. Adicionar nova tarefa
2. Listar todas as tarefas
3. Concluir uma tarefa
4. Remover uma tarefa
5. Sair
Escolha uma opção (1-5): 
```

### 2. Adicionando uma tarefa:
```text
Escolha uma opção (1-5): 1
Digite o título da tarefa: Estudar Docker e PostgreSQL
✓ Tarefa adicionada com sucesso!
```

### 3. Listando as tarefas ativas:
```text
Escolha uma opção (1-5): 2

--- SUAS TAREFAS ---
[1] [ ] Estudar Docker e PostgreSQL (ID: f5d3a2)
[2] [✓] Configurar ambiente Node.js (ID: c2b1a9)
--------------------
```

---

## 📁 Estrutura do Projeto

```text
.
├── tasks.json             # Banco de dados local em formato JSON (gerado automaticamente)
├── index.js               # Código principal e fluxo do CLI no terminal
├── package.json           # Definição do projeto e scripts
└── README.md              # Documentação
```