<p align="center">
  <img src="https://raw.githubusercontent.com/manualdeinvestigacaodigital/Raspador-webscraper-dados-mensagens-Tiktok/main/tiktok-logo.png" width="120">
</p>

<h1 align="center">Raspador (WebScraper) de Dados e Mensagens do TikTok</h1>

<p align="center">
  <img src="https://img.shields.io/badge/status-estável-success">
  <img src="https://img.shields.io/badge/version-v1.0-blue">
  <img src="https://img.shields.io/badge/platform-Chrome-lightgrey">
  <img src="https://img.shields.io/badge/focus-OSINT-orange">
  <img src="https://img.shields.io/badge/license-Uso%20educacional-important">
</p>

---

# 🔎 RASPADOR (WEBSCRAPER) DE DADOS E MENSAGENS DO TIKTOK

Ferramenta baseada em extensão para navegador desenvolvida para coleta estruturada de dados da plataforma TikTok, voltada à investigação digital, inteligência e OSINT.

A aplicação permite extrair metadados completos de vídeos, informações internas da página, conteúdos multimídia, comentários e interações, organizando os dados de forma estruturada para análise e exportação.

O sistema atua diretamente no ambiente do navegador, realizando leitura de estados internos do TikTok e do DOM da página, possibilitando a recuperação de informações que não estão visíveis de forma estruturada ao usuário comum.

---

# ⚙️ FASE 1 — PREPARAÇÃO DO AMBIENTE

Antes de utilizar a ferramenta, é necessário possuir:

- 🟢 Navegador Google Chrome ou outro navegador baseado em Chromium
- 🟢 Acesso à plataforma TikTok
- 🟢 Permissão para instalar extensões em modo desenvolvedor

---

# 🔍 FASE 2 — VERIFICAÇÃO DO AMBIENTE

Certifique-se de que:

- ✔ O Google Chrome está atualizado
- ✔ A página do TikTok carrega normalmente
- ✔ O modo desenvolvedor está habilitado no navegador

---

# 📥 FASE 3 — DOWNLOAD DA FERRAMENTA

Existem duas formas distintas para realizar o download da ferramenta:

1. 📦 Download direto pela página do projeto no GitHub, sem necessidade de instalar o Git.
2. 🖥️ Download via Git, executando comandos no Prompt de Comando, PowerShell ou Terminal.

A seguir, serão descritas detalhadamente ambas as possibilidades.

---

## 📦 OPÇÃO 1 — DOWNLOAD DIRETO PELA PÁGINA DO PROJETO

Também é possível baixar a ferramenta diretamente pelo GitHub, sem utilizar o Git.

### 🌐 Passo a passo

1. Acesse o repositório:

    https://github.com/manualdeinvestigacaodigital/Raspador-webscraper-dados-mensagens-Tiktok

2. Clique no botão verde **`<> Code`**.

3. Selecione a opção **`Download ZIP`**.

4. Aguarde o download do arquivo compactado.

5. Extraia o conteúdo do arquivo ZIP em uma pasta de sua preferência.

---

## 🖥️ OPÇÃO 2 — DOWNLOAD VIA GIT

O Git é uma ferramenta amplamente utilizada para baixar e atualizar projetos hospedados no GitHub.

### 🔎 VERIFICAR SE O GIT ESTÁ INSTALADO

Abra o Prompt de Comando, PowerShell ou Terminal e execute o seguinte comando:

    git --version

### ✅ Resultado esperado

Se o Git estiver instalado corretamente, será exibida uma mensagem semelhante a:

    git version 2.49.0.windows.1

### ❌ Caso o Git não esteja instalado

Se aparecer mensagem informando que o comando `git` não é reconhecido, será necessário instalar o Git.

---

### 🛠️ INSTALAÇÃO DO GIT NO WINDOWS

#### 🌐 1. Acesse o site oficial do Git

    https://git-scm.com/download/win

#### 📥 2. Baixe o instalador

O download normalmente inicia automaticamente.

#### ▶️ 3. Execute o instalador

Clique duas vezes no arquivo baixado.

#### ⚙️ 4. Instalação recomendada

Durante a instalação:

- ✔ Mantenha as opções padrão
- ✔ Clique em **Next** em todas as etapas
- ✔ Ao final, clique em **Install**
- ✔ Depois, clique em **Finish**

#### 🔄 5. Reinicie o terminal

Feche e abra novamente o Prompt de Comando ou PowerShell.

#### 🔎 6. Teste novamente

    git --version

Se a versão for exibida, o Git foi instalado com sucesso.

---

### 🚀 CLONAR O REPOSITÓRIO

Após confirmar que o Git está instalado, execute:

    git clone https://github.com/manualdeinvestigacaodigital/Raspador-webscraper-dados-mensagens-Tiktok.git

O projeto será baixado para uma pasta chamada:

    Raspador-webscraper-dados-mensagens-Tiktok

---

# 🔧 FASE 4 — INSTALAÇÃO DA EXTENSÃO NO GOOGLE CHROME

Nesta fase, a pasta da ferramenta será carregada no Google Chrome como uma extensão em modo desenvolvedor.

---

## 🌐 1. ABRIR A PÁGINA DE EXTENSÕES DO CHROME

Abra o Google Chrome e acesse o seguinte endereço:

    chrome://extensions/

---

## 🛠️ 2. ATIVAR O MODO DESENVOLVEDOR

Após acessar a página de extensões do Chrome, observe o canto superior direito da tela.

Nesse local, haverá um botão escrito **Modo do desenvolvedor**.

- Caso o botão já esteja habilitado, prossiga para a próxima etapa.
- Caso o botão esteja desabilitado, clique sobre ele ou arraste-o para a direita para habilitar o **Modo do desenvolvedor**.

Quando habilitado, o Chrome passará a exibir opções adicionais para carregamento manual de extensões.

---

## 📂 3. CARREGAR A EXTENSÃO SEM COMPACTAÇÃO

Com o **Modo do desenvolvedor** habilitado, clique no botão:

- 👉 **Carregar sem compactação**

Em seguida, selecione a pasta do projeto:

- 📁 Se o projeto foi baixado por ZIP, selecione a pasta extraída.
- 📁 Se o projeto foi baixado por Git, selecione a pasta clonada.

Após selecionar a pasta correta:

- ✔ A extensão será carregada automaticamente no navegador.

---

# 🌐 FASE 5 — EXECUÇÃO DA FERRAMENTA

### 🎬 Acesse um vídeo do TikTok no formato:

    https://www.tiktok.com/@usuario/video/ID

### ▶️ Em seguida:

- Clique no ícone da extensão.

---

# 🚀 FASE 6 — FUNCIONAMENTO INTERNO DA FERRAMENTA

A ferramenta atua diretamente na página do TikTok, coletando dados em tempo real.

---

## 📡 COLETA DE DADOS

### 🔍 Leitura de Estruturas Internas do TikTok

- `UNIVERSAL_DATA_FOR_REHYDRATION`
- `SIGI_STATE`

---

## 📊 EXTRAÇÃO DE METADADOS

A ferramenta identifica e extrai:

- 📌 ID do vídeo
- 👤 Autor `@username`
- 📝 Descrição `caption`
- 🎵 Música utilizada
- 📅 Data de publicação

---

## 📈 ESTATÍSTICAS

Extração automática de:

- 👍 Curtidas
- 💬 Comentários
- 🔁 Compartilhamentos
- 👁️ Visualizações

---

## 🎥 EXTRAÇÃO DE MÍDIA

A ferramenta identifica e extrai:

- URL direta do vídeo `playAddr`
- URL de download `downloadAddr`
- Informações de qualidade e formato

---

## 💬 COLETA DE COMENTÁRIOS

- 🔎 Expansão automática de comentários
- 🔁 Coleta de respostas `replies`
- 📑 Estruturação hierárquica dos dados

### ✔ Recursos adicionais

- ✔ Organização em níveis
- ✔ Preservação do conteúdo original

---

## 🧠 TRATAMENTO DOS DADOS

Os dados são:

- ✔ Organizados
- ✔ Padronizados
- ✔ Estruturados para análise

---

# 📁 FASE 7 — GERAÇÃO DE SAÍDAS

A ferramenta gera automaticamente:

- 📄 HTML estruturado
- 🧾 JSON completo
- 📑 Relatórios organizados

---

# 🔐 FASE 8 — INTEGRIDADE DOS DADOS

O sistema realiza geração de hash criptográfico:

- 🔐 SHA-256
- 🔐 SHA-512

Aplicados ao conteúdo exportado para garantir:

- ✔ Integridade
- ✔ Autenticidade
- ✔ Rastreabilidade

---

# 📊 FASE 9 — EXPORTAÇÃO

Os dados coletados podem conter:

- Metadados do vídeo
- Conteúdo textual
- Comentários e respostas
- Links de mídia
- Estrutura hierárquica

---

# 🔄 FASE 10 — FLUXO OPERACIONAL RESUMIDO

1. 📥 Baixar a ferramenta
2. 🔧 Instalar a extensão no Chrome
3. 🎬 Abrir um vídeo no TikTok
4. ▶️ Executar o raspador
5. ⏳ Aguardar a coleta automática
6. 📁 Gerar arquivos HTML / JSON
7. 📊 Analisar os dados
8. 🔐 Validar a integridade por meio dos hashes criptográficos

---

# ⚠️ FASE 11 — LIMITAÇÕES

[Não verificado] O funcionamento pode variar conforme alterações internas do TikTok, incluindo:

- Mudanças no DOM
- Alterações nas estruturas internas
- Restrições de acesso a conteúdo

---

# ⚠️ FASE 12 — SEGURANÇA

Evite:

- ❌ Executar em contas sensíveis
- ❌ Compartilhar dados coletados sem validação
- ❌ Utilizar fora de contexto legal adequado

---

# 📚 FASE 13 — REFERÊNCIA TÉCNICA E AUTORIA

Este projeto integra um conjunto mais amplo de ferramentas voltadas à investigação digital, inteligência e OSINT.

O autor deste projeto é também autor da obra:

📖 **Manual de Investigação Digital — Editora Juspodivm**

    https://www.editorajuspodivm.com.br/authors/page/view/id/206/

A obra reúne fundamentos teóricos e aplicações práticas voltadas à investigação digital contemporânea, incluindo metodologias, técnicas operacionais e utilização de ferramentas tecnológicas para coleta, preservação e análise de dados.

---

# 🧠 FASE 14 — INTEGRAÇÃO COM A OBRA

Este repositório representa uma aplicação prática de técnicas abordadas no livro, permitindo:

- ✔ Aplicação direta de conceitos de OSINT
- ✔ Estruturação de coleta de dados digitais
- ✔ Organização de evidências
- ✔ Apoio a análises investigativas

---

# 👤 AUTOR

**Guilherme Caselli**  
Delegado de Polícia  
Autor do livro **Manual de Investigação Digital** — Editora Juspodivm

    https://instagram.com/guilhermecaselli

    https://www.editorajuspodivm.com.br/authors/page/view/id/206/

---

# 🎯 FINALIDADE

- 🕵️ Investigação digital
- 🧠 Inteligência
- 🌐 OSINT
- 📊 Análise de dados públicos
- 📁 Coleta estruturada de evidência digital

---
