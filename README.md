# Angular Micro Frontends

Aplicação com Angular 21 utilizando module federation para implementar micro frontends. A aplicação consiste em três projetos

1. **Vendas (porta 4200)** - Host/Shell
2. **Produtos (porta 4201)** - Micro Frontend
3. **Gráfico (porta 4202)** - Micro Frontend

## 🚀 Execução do projeto

Execute o script que inicia todos os três servidores:

```bash
node start-all.js
```

## ✅ Testando a Solução

Após todos os servidores estarem rodando, acesse:

1. **Host (Vendas):** http://localhost:4200
2. **Navegue para Produtos:** http://localhost:4200/produtos
3. **Navegue para Gráfico:** http://localhost:4200/grafico

## 🌐 CORS (Cross-Origin Resource Sharing)

### 📁 Arquivos Adicionados:
- `vendas/webpack.config.cors.js` - Configuração com CORS para dev server
- `produtos/webpack.config.cors.js` - Configuração com CORS para dev server
- `grafico/webpack.config.cors.js` - Configuração com CORS para dev server
- `start-all.js` - Script Node.js para iniciar todos os servidores
- `vendas/dev-server-config.js` - Configuração de middleware CORS
- `produtos/cors-middleware.js` - Middleware CORS
- `grafico/cors-middleware.js` - Middleware CORS

### 📁 Arquivos Modificados:
- `vendas/angular.json` - Adicionada configuração "cors"
- `vendas/package.json` - Adicionado script `start:cors`
- `produtos/angular.json` - Adicionada configuração "cors"
- `produtos/package.json` - Adicionado script `start:cors`
- `grafico/angular.json` - Adicionada configuração "cors"
- `grafico/package.json` - Adicionado script `start:cors`
- `vendas/src/app/app.routes.ts` - Adicionado wildcard route e tratamento de erro

### 🔧 Detalhes Técnicos

Todos os servidores agora retornam os seguintes headers:

```javascript
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS, HEAD
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
Access-Control-Expose-Headers: Content-Type
```

### ⚙️ Configuração do Webpack

O arquivo `webpack.config.cors.js` em cada projeto estende a configuração de Module Federation e adiciona middleware no dev server para processar requisições OPTIONS e adicionar headers CORS.
