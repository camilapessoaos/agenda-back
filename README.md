markdown
# 📅 Agenda App - Backend

API RESTful para gerenciamento de agenda de contatos. Desenvolvido com Node.js e Express como exemplo prático durante aulas.

## 🚀 Tecnologias

- Node.js
- Express
- JavaScript (ES6+)
- NPM

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM (geralmente instalado junto com o Node)

## 🔧 Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/camilapessoaos/agenda-back.git

# Acesse a pasta do projeto
cd agenda-back

# Instale as dependências
npm install

# Inicie o servidor
node server.js
O servidor será iniciado em http://localhost:3000 (verifique a porta configurada no server.js).

📍 Endpoints da API
Método	Rota	Descrição
GET	/api/contatos	Retorna todos os contatos
GET	/api/contatos/:id	Retorna um contato específico
POST	/api/contatos	Cria um novo contato
PUT	/api/contatos/:id	Atualiza um contato existente
DELETE	/api/contatos/:id	Remove um contato
⚠️ As rotas exatas podem variar conforme a implementação nos arquivos dentro das pastas controllers/ e routes/.

📂 Estrutura do Projeto
text
agenda-back/
├── controllers/     # Lógica de negócio e manipulação das requisições
├── models/          # Definição dos modelos de dados (ex: Contato)
├── routes/          # Definição das rotas da API
├── server.js        # Arquivo principal que inicializa o servidor
├── package.json     # Dependências e scripts do projeto
└── package-lock.json# Lockfile das dependências
🧪 Testando a API
Você pode testar os endpoints utilizando:

Postman ou Insomnia

cURL no terminal:

bash
curl http://localhost:3000/api/contatos
Navegador (apenas para requisições GET)

📦 Dependências
As dependências serão instaladas via npm install. O projeto utiliza:

express - Framework web para Node.js

Outras dependências listadas no package.json

🤝 Como Contribuir
Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/nova-funcionalidade)

Commit suas alterações (git commit -m 'Adiciona nova funcionalidade')

Push para a branch (git push origin feature/nova-funcionalidade)

Abra um Pull Request

📝 Licença
Projeto educacional - sinta-se livre para usar e modificar.

👩‍💻 Autora
Camilapessoaos - GitHub
