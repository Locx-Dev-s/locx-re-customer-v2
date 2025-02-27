## locx-re-customer-v2

- [LICENSE](LICENSE)
- [GITFLOW](docs/gitflow.md)

## Node.js
Este projeto é compatível com as versões do Node.js `>= 22.12.0` e NPM `>= 10.9.0`. Embora possa funcionar com versões mais antigas, é recomendável usar a versão mais recente do LTS (Long Term Support) para obter o melhor desempenho e compatibilidade.

## ☕ Comandos úteis para desenvolvimento

- **Iniciar o servidor de desenvolvimento**: Inicia o aplicativo em modo de desenvolvimento.

  ```bash
    npm run dev
  ```
  ```bash 
    npm run start
  ```
- **Buildar o projeto**: Prepara o aplicativo para produção, criando um pacote.

  ```bash
    npm run build
  ```
- **Iniciar o servidor de preview de produção**: Inicia o preview do aplicativo em modo de produção.

  ```bash
    npm run preview
  ```
- **Auditando dependências de produção**

  ```bash
    npm run audit
  ```

## Tecnologia principais do projeto
  - Reactjs
  - Typescript
  - Redux + RTK + RTK Query
  - Tailwind
  - MUI(material-ui)

## :information_source: Informações importantes

**Configuração**: O projeto foi criado utilizando o tema Fuse(https://fuse-react-vitejs-demo.fusetheme.com/documentation).
  
Portanto, possui layouts e componentes prontos para utilização, além de uma estrutura de pastas e arquivos já configurada.

Entendendo isso, o projeto é predefinido para utilizar 1 dos layouts disponíveis no tema Fuse, que é o layout `layout1` e o navbar `style-2`.

Caminho para arquivo de configuração do layout: `./src/configs/settingsConfig.ts`

__OBS: Essa informação é importante para entender a estrutura de pastas e arquivos do projeto, além de como o projeto foi configurado.__

## :mirror: Identidade visual
- As cores do projeto estão definidas no arquivo `./src/configs/themesConfig.ts`.
- Opções de temas disponíveis no projeto estão definidas no arquivo `./src/configs/themeOptions.ts`.
- Para alterar configurações padrão de tipografia, componentes, breakpoints, etc, basta alterar o arquivo `./src/@fuse/default-settings/FuseDefaultSettings.ts`.

## :mag: Uso de ícones no projeto

- **Icones**:
  - Ícones utilizados no projeto: heroicons (https://heroicons.com/)  

    1. Importe o componente FuseSvgIcon
      ```tsx
        import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
      ```
    2. Utilize o componente FuseSvgIcon
    Para utilizar o componente de icone, utilize o prefixos `heroicons-outline` ou `heroicons-solid` + `:` + `o nome do icone`, como nos exemplos abaixo:
      ```tsx
       <FuseSvgIcon>heroicons-outline:eye</FuseSvgIcon>
      ```
      OU
      ```tsx
       <FuseSvgIcon>heroicons-solid:eye</FuseSvgIcon>
      ```

## 📂 Estrutura do Projeto - `/src`

### 📌 Módulos Principais

- **`@fuse/`** - Configuração do Fuse:
  - `core/` - Componentes principais do Fuse.
  - `default-settings/` - Configurações padrão.
  - `hooks/` - Hooks personalizados do Fuse.
  - `tailwind/` - Configurações do Tailwind.
  - `utils/` - Utilitários do Fuse.

- **`@i18n/`** - Configuração de internacionalização.
- **`@mock-utils/`** - Configuração de mocks para testes.

### 🚀 Features

- **`features/`** - Módulo de funcionalidades da aplicação.
  - **`auth/`** - Exemplo de uma feature (autenticação):
    - `components/` - Componentes específicos.
    - `constants/` - Constantes utilizadas.
    - `contexts/` - Contextos da funcionalidade.
    - `hooks/` - Hooks relacionados.
    - `services/` - Serviços de autenticação.
    - `types/` - Tipos TypeScript utilizados.
    - `utils/` - Funções auxiliares.
    - `Authentication.tsx` - Componente principal.

### 🏗️ Componentes

- **`components/`** - Componentes reutilizáveis da aplicação.
  - `UI/` - Componentes de interface (ex.: Button, Modal, Table).
  - `forms/` - Componentes de formulário (ex.: Form, Input, Select).

### ⚡ Hooks

- **`hooks/`** - Hooks globais reutilizáveis.

### 📄 Páginas

- **`pages/`** - Estrutura de páginas da aplicação.
  - `(public)/` - Páginas acessíveis sem autenticação.
    - `sign-in/` - Página de login.
      - `SignInPage.tsx` - Componente principal.
      - `SignInPageRoute.tsx` - Definição de rotas.
  - `(private)/` - Páginas protegidas.
    - `home/` - Página inicial.
      - `HomePage.tsx` - Componente principal.
      - `HomePageRoute.tsx` - Definição de rotas.

### ⚙️ Configurações

- **`configs/`** - Configurações globais do projeto.
  - `navigation-i18n/` - Traduções para a navegação.
  - `navigationConfig.ts` - Configuração da navegação.
  - `routesConfig.ts` - Definição de rotas.
  - `settingsConfig.ts` - Configurações de layout e tema.
  - `themeOptions.ts` - Opções de tema.
  - `themesConfig.ts` - Configurações do tema.

### 🌍 Contextos

- **`contexts/`** - Providers de contexto.
  - `AppContext.tsx` - Configuração de rotas.
  - `MainThemeProvider.tsx` - Gerenciamento de tema.

### 🏪 Store (Gerenciamento de Estado)

- **`store/`** - Configuração do Redux Toolkit.
  - `apiService.ts` - Configuração do RTK Query.
  - `generateReducersFromSlices.ts` - Função para gerar reducers.
  - `hooks.ts` - Hooks para o store.
  - `middleware.ts` - Configuração de middlewares.
  - `rootReducer.ts` - Combinação de reducers.
  - `store.ts` - Configuração do store.
  - `withReducer.tsx` - HOC para injetar reducers.
  - `withSlices.tsx` - HOC para injetar slices.

### 🎨 Estilos

- **`styles/`** - Configurações de estilos (Fuse e Tailwind).

### 🛠️ Utilitários

- **`utils/`** - Funções auxiliares globais.
  - `apiFetch.ts` - Serviço de requisições API.
  - `setIn.ts` - Função para definir valores em objetos.

### 📌 Tipos

- **`types/`** - Definições de tipos TypeScript.

### 🏁 Inicialização

- **`App.tsx`** - Componente raiz que integra contextos e store.
- **`index.tsx`** - Arquivo de inicialização do projeto.

