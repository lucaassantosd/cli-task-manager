import fs from 'node:fs/promises';

const FILE_PATH = './tasks.json';

// Lendo as tarefas existentes de forma segura
async function readTasks() {
  try {
    const data = await fs.readFile(FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // Se o arquivo não existir (primeira execução), retorna um array vazio
    return [];
  }
}

// Salvando as tarefas no arquivo formatado
async function saveTasks(tasks) {
  await fs.writeFile(FILE_PATH, JSON.stringify(tasks, null, 2));
}

// Função para concluir uma tarefa pelo ID
async function completeTask(id) {
  const tasks = await readTasks();
  const taskIndex = tasks.findIndex(t => t.id === Number(id));

  if (taskIndex === -1) {
    console.log(`Erro: Nenhuma tarefa encontrada com o ID: ${id}`);
    return;
  }

  tasks[taskIndex].completed = true;
  await saveTasks(tasks);
  console.log(`Tarefa "${tasks[taskIndex].title}" marcada como concluída!`);
}

// Função para deletar uma tarefa pelo ID
async function deleteTask(id) {
  const tasks = await readTasks();
  const initialLength = tasks.length;
  
  // Filtra mantendo apenas as tarefas com ID diferente do informado
  const filteredTasks = tasks.filter(t => t.id !== Number(id));

  if (filteredTasks.length === initialLength) {
    console.log(`Erro: Nenhuma tarefa encontrada com o ID: ${id}`);
    return;
  }

  await saveTasks(filteredTasks);
  console.log(`Tarefa com ID ${id} removida com sucesso!`);
}

// Captura os argumentos do terminal
const [, , command, argument] = process.argv;

async function main() {
  try {
    if (command === 'add') {
      if (!argument) {
        console.log('Erro: Informe o título da tarefa. Exemplo: node index.js add "Estudar Node"');
        return;
      }
      const tasks = await readTasks();
      const newTask = { id: Date.now(), title: argument, completed: false };
      
      tasks.push(newTask);
      await saveTasks(tasks);
      console.log(`Tarefa "${argument}" adicionada com sucesso!`);

    } else if (command === 'list') {
      const tasks = await readTasks();
      if (tasks.length === 0) {
        console.log('Nenhuma tarefa pendente.');
        return;
      }
      console.log('\n--- SUAS TAREFAS ---');
      tasks.forEach(t => console.log(`${t.completed ? '[Done]' : '[ToDo]'} - ${t.title} (ID: ${t.id})`));
      console.log('--------------------\n');

    } else if (command === 'complete') {
      if (!argument) {
        console.log('Erro: Informe o ID da tarefa para concluir. Exemplo: node index.js complete 1713456789');
        return;
      }
      await completeTask(argument);

    } else if (command === 'delete') {
      if (!argument) {
        console.log('Erro: Informe o ID da tarefa para deletar. Exemplo: node index.js delete 1713456789');
        return;
      }
      await deleteTask(argument);

    } else {
      console.log('\n💻 Comandos disponíveis:');
      console.log('  node index.js add "Nome da tarefa"   -> Adiciona uma nova tarefa');
      console.log('  node index.js list                  -> Lista todas as tarefas');
      console.log('  node index.js complete <ID>         -> Conclui uma tarefa');
      console.log('  node index.js delete <ID>           -> Deleta uma tarefa\n');
    }
  } catch (error) {
    console.error('Ocorreu um erro inesperado na aplicação:', error.message);
  }
}

main();