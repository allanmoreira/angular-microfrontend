#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

const projects = [
  { name: 'vendas', port: 4200, dir: 'vendas' },
  { name: 'produtos', port: 4201, dir: 'produtos' },
  { name: 'grafico', port: 4202, dir: 'grafico' }
];

console.log('========================================');
console.log('Iniciando todos os micro-frontends com CORS');
console.log('========================================\n');

projects.forEach(project => {
  const projectPath = path.join(__dirname, project.dir);

  console.log(`🚀 Iniciando ${project.name} na porta ${project.port}...`);

  const process = spawn('npm', ['run', 'start:cors'], {
    cwd: projectPath,
    stdio: 'inherit',
    shell: true
  });

  process.on('error', (err) => {
    console.error(`❌ Erro ao iniciar ${project.name}:`, err);
  });

  process.on('close', (code) => {
    if (code !== 0) {
      console.error(`❌ ${project.name} finalizado com código ${code}`);
    }
  });
});

console.log('\n✅ Todos os servidores foram iniciados!');
console.log('\nAcesse:');
console.log('  - Vendas (Host):   http://localhost:4200');
console.log('  - Produtos (Mfx):  http://localhost:4201');
console.log('  - Gráfico (Mfx):   http://localhost:4202');
console.log('\nTeste a navegação:');
console.log('  - http://localhost:4200/produtos');
console.log('  - http://localhost:4200/grafico');
console.log('\nPressione Ctrl+C para parar todos os servidores\n');

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n\n⛔ Parando todos os servidores...');
  process.exit(0);
});

