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

🔎 **RASPADOR (WEBSCRAPER) DE DADOS E MENSAGENS DO TIKTOK**

Ferramenta baseada em extensão para navegador desenvolvida para coleta estruturada de dados da plataforma TikTok, voltada a investigação digital, inteligência e OSINT.

A aplicação permite extrair metadados completos de vídeos, informações internas da página, conteúdos multimídia, comentários e interações, organizando os dados de forma estruturada para análise e exportação.

O sistema atua diretamente no ambiente do navegador, realizando leitura de estados internos do TikTok e do DOM da página, possibilitando a recuperação de informações que não estão visíveis de forma estruturada ao usuário comum.

---

## ⚙️ PREPARAÇÃO DO AMBIENTE

Antes de utilizar a ferramenta, é necessário possuir:

🟢 Navegador Google Chrome (ou baseado em Chromium)  
🟢 Acesso à plataforma TikTok  
🟢 Permissão para instalar extensões em modo desenvolvedor  

---

## 🔍 VERIFICAR AMBIENTE

Certifique-se de que:

✔ O Chrome está atualizado  
✔ A página do TikTok carrega normalmente  
✔ O modo desenvolvedor está habilitado no navegador  

---

## 📥 INSTALAÇÃO DA FERRAMENTA

### 📂 Baixar o projeto

```bash
git clone https://github.com/manualdeinvestigacaodigital/Raspador-webscraper-dados-mensagens-Tiktok.git
🔧 Carregar no Chrome
Abra o navegador
Acesse: chrome://extensions/
Ative:

✔ Modo do desenvolvedor

Clique em:

👉 Carregar sem compactação

Selecione a pasta do projeto

✔ A extensão será carregada automaticamente

🌐 EXECUÇÃO

Acesse um vídeo do TikTok:

https://www.tiktok.com/@usuario/video/ID

Clique no ícone da extensão ou execute o bookmarklet (quando aplicável)

🚀 FUNCIONAMENTO DA FERRAMENTA

A ferramenta atua diretamente na página do TikTok, coletando dados em tempo real.

📡 COLETA DE DADOS

A aplicação realiza:

🔍 Leitura de estruturas internas do TikTok:

UNIVERSAL_DATA_FOR_REHYDRATION
SIGI_STATE
📊 EXTRAÇÃO DE METADADOS

A ferramenta identifica e extrai:

📌 ID do vídeo
👤 Autor (@username)
📝 Descrição (caption)
🎵 Música utilizada
📅 Data de publicação

📈 ESTATÍSTICAS

Extração automática de:

👍 Curtidas
💬 Comentários
🔁 Compartilhamentos
👁️ Visualizações

🎥 EXTRAÇÃO DE MÍDIA

A ferramenta identifica e extrai:

URL direta do vídeo (playAddr)
URL de download (downloadAddr)
Informações de qualidade e formato
💬 COLETA DE COMENTÁRIOS

🔎 Expansão automática de comentários
🔁 Coleta de respostas (replies)
📑 Estruturação hierárquica dos dados

✔ Organização em níveis
✔ Preservação do conteúdo original

🧠 TRATAMENTO DOS DADOS

Os dados são:

✔ Organizados
✔ Padronizados
✔ Estruturados para análise

📁 GERAÇÃO DE SAÍDAS

A ferramenta gera automaticamente:

📄 HTML estruturado
🧾 JSON completo
📑 Relatórios organizados

🔐 INTEGRIDADE DOS DADOS

O sistema realiza geração de hash criptográfico:

🔐 SHA-256
🔐 SHA-512

Aplicados ao conteúdo exportado para garantir:

✔ Integridade
✔ Autenticidade
✔ Rastreabilidade

📊 EXPORTAÇÃO

Os dados coletados podem conter:

Metadados do vídeo
Conteúdo textual
Comentários e respostas
Links de mídia
Estrutura hierárquica
🔄 FLUXO OPERACIONAL
Instalar a extensão
Abrir vídeo no TikTok
Executar o raspador
Aguardar coleta automática
Gerar arquivos (HTML / JSON)
Analisar os dados
Validar integridade via hash
⚠️ LIMITAÇÕES

[Não verificado] O funcionamento pode variar conforme alterações internas do TikTok, incluindo:

Mudanças no DOM
Alterações nas estruturas internas
Restrições de acesso a conteúdo
⚠️ SEGURANÇA

Evite:

❌ Executar em contas sensíveis
❌ Compartilhar dados coletados sem validação
❌ Utilizar fora de contexto legal adequado

📚 REFERÊNCIA TÉCNICA E AUTORIA

Este projeto integra um conjunto mais amplo de ferramentas voltadas à investigação digital, inteligência e OSINT.

O autor deste projeto é também autor da obra:

📖 Manual de Investigação Digital — Editora Juspodivm

🔗 https://www.editorajuspodivm.com.br/authors/page/view/id/206/

A obra reúne fundamentos teóricos e aplicações práticas voltadas à investigação digital contemporânea, incluindo metodologias, técnicas operacionais e utilização de ferramentas tecnológicas para coleta, preservação e análise de dados.

🧠 INTEGRAÇÃO COM A OBRA

Este repositório representa uma aplicação prática de técnicas abordadas no livro, permitindo:

✔ Aplicação direta de conceitos de OSINT
✔ Estruturação de coleta de dados digitais
✔ Organização de evidências
✔ Apoio a análises investigativas

👤 AUTOR

Guilherme Caselli
Delegado de Polícia
Autor do livro Manual de Investigação Digital (Editora Juspodivm)

🔗 https://instagram.com/guilhermecaselli

🔗 https://www.editorajuspodivm.com.br/authors/page/view/id/206/

🎯 FINALIDADE

🕵️ Investigação digital
🧠 Inteligência
🌐 OSINT
📊 Análise de dados públicos
📁 Coleta estruturada de evidência digital
