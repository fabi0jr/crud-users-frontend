# **WenLock - Sistema de Gerenciamento de Usuários**

## **Sobre o Projeto**
O **WenLock** é um sistema de gerenciamento de usuários com uma interface moderna e intuitiva, desenvolvido com **React** e **TypeScript**. Ele oferece funcionalidades completas de CRUD (Criar, Ler, Atualizar, Deletar) para facilitar o gerenciamento de usuários, com foco em usabilidade, performance e boas práticas de desenvolvimento.

---

## **Tecnologias Utilizadas**

### **Frontend**
- **React**: Biblioteca para construção de interfaces.
- **TypeScript**: Tipagem estática para maior segurança no desenvolvimento.
- **React Router DOM**: Navegação entre páginas.
- **React Hook Form**: Gerenciamento de formulários.
- **Zod**: Validação de dados.
- **Material UI (MUI)**: Componentes estilizados e acessíveis.
- **TanStack Query (React Query)**: Gerenciamento de dados assíncronos.
- **Axios**: Comunicação com a API.
- **SASS/SCSS**: Estilização personalizada.
- **React Toastify**: Notificações para feedback ao usuário.
---

## **Pré-requisitos**
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- API backend em execução (consulte o repositório [Crud-users](https://github.com/fabi0jr/Crud-users))

---

## **🚀 Como Executar**

### **1. Clone o Repositório**
```bash
git clone https://github.com/fabi0jr/crud-users-frontend
cd crud-users-frontend
```

### **2. Instale as Dependências**
```bash
npm install
```

### **3. Inicie o Servidor de Desenvolvimento**
```bash
npm run dev
```

O frontend estará disponível em: `http://localhost:5173`.

---

## **Estrutura do Projeto**

```plaintext
wenlock-frontend/
├── src/
│   ├── assets/           # Ícones e recursos estáticos
│   ├── components/       # Componentes reutilizáveis
│   ├── hooks/            # Hooks personalizados
│   ├── interfaces/       # Interfaces TypeScript
│   ├── layouts/          # Componentes de layout
│   ├── pages/            # Páginas da aplicação
│   ├── providers/        # Providers React (Context API)
│   ├── schemas/          # Schemas de validação (Zod)
│   ├── services/         # Comunicação com a API
│   ├── styles/           # Arquivos SCSS
│   ├── App.tsx           # Componente raiz
│   └── main.tsx          # Ponto de entrada React
├── .env                  # Variáveis de ambiente
├── package.json          # Dependências e scripts
├── vite.config.ts        # Configuração do Vite
└── tsconfig.json         # Configuração do TypeScript
```

---

## **Funcionalidades Principais**

### **1. Gerenciamento de Usuários**
- **Listar Usuários**: Exibição paginada com barra de pesquisa.
- **Criar Usuário**: Formulário com validação para cadastro.
- **Visualizar Usuário**: Modal ou drawer com detalhes do usuário.
- **Editar Usuário**: Atualização de dados com validação.
- **Excluir Usuário**: Modal de confirmação para exclusão.

### **2. Interface**
- **Tema Personalizado**: Utilizando Material UI.
- **Notificações**: Feedback ao usuário com React Toastify.
- **Sidebar Responsiva**: Navegação intuitiva e adaptada para dispositivos móveis.

### **3. Validação de Dados**
- **Formulários Validados**: Utilizando React Hook Form e Zod.
- **Feedback Visual**: Mensagens de erro claras e contadores de caracteres.

---

## **Integração com API**

O frontend consome uma API REST para gerenciar os dados dos usuários. A comunicação é feita com **Axios**, e os endpoints esperados são:

- `GET /users` - Listar usuários (paginado)
- `GET /users/:id` - Obter detalhes de um usuário
- `POST /users` - Criar um novo usuário
- `PATCH /users/:id` - Atualizar um usuário
- `DELETE /users/:id` - Excluir um usuário

### **Estrutura de Dados**
#### Usuário
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "matricula": "string",
  "isActive": true,
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

---

## **Hooks Personalizados**

O projeto utiliza hooks personalizados para gerenciar operações e estado:

- **`useUsers`**: Gerencia a listagem paginada de usuários.
- **`useUserDetails`**: Gerencia os detalhes de um usuário específico.
- **`useCreateUser`**: Lida com a criação de novos usuários.
- **`useEditUser`**: Gerencia a edição de usuários.
- **`useDeleteUser`**: Lida com a exclusão de usuários.