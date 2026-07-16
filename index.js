import fs from 'node:fs/promises';

const FILE_PATH = './tasks.json';

// Função auxiliar para ler as tarefas existentes
async function readTasks() {
  try {
    const data = await fs.readFile(FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // Se o arquivo não existir, retorna um array vazio
    return [];
  }
}

// Função auxiliar para salvar as tarefas
async function saveTasks(tasks) {
  await fs.writeFile(FILE_PATH, JSON.stringify(tasks, null, 2));
}

// Captura os argumentos do terminal (ex: node index.js add "Estudar Node")
const [, , command, argument] = process.argv;

async function main() {
  if (command === 'add' && argument) {
    const tasks = await readTasks();
    const newTask = { id: Date.now(), title: argument, completed: false };
    
    tasks.push(newTask);
    await saveTasks(tasks);
    
    console.log(`✓ Tarefa "${argument}" adicionada com sucesso!`);
  } else if (command === 'list') {
    const tasks = await readTasks();
    if (tasks.length === 0) {
      console.log('Nenhuma tarefa encontrada.');
      return;
    }
    console.log('--- SUAS TAREFAS ---');
    tasks.forEach(t => console.log(`${t.completed ? '[x]' : '[ ]'} - ${t.title} (ID: ${t.id})`));
  } else {
    console.log('Comando inválido. Use "add <tarefa>" ou "list".');
  }
}

main();