<p align="center">
  <img src="tiktok-logo.png" width="200"/>
</p>

🔎 Raspador (Webscraper) de dados e mensagens do TikTok

Ferramenta baseada em extensão para navegador desenvolvida para coleta estruturada de dados da plataforma TikTok, com foco em investigação digital, inteligência e OSINT. O sistema permite extrair metadados completos de vídeos, informações internas da página, conteúdos multimídia, além de comentários e interações, organizando os dados para análise e exportação.

A aplicação atua diretamente no ambiente do navegador, realizando leitura de estados internos do TikTok e do DOM da página, possibilitando a recuperação de informações que não estão visíveis de forma estruturada ao usuário comum.

⚙️ PREPARAÇÃO DO AMBIENTE

Antes de utilizar a ferramenta, é necessário possuir:

🟢 Navegador Google Chrome (ou baseado em Chromium)
🟢 Acesso à plataforma TikTok
🟢 Permissão para instalar extensões em modo desenvolvedor

🔍 VERIFICAR AMBIENTE

Certifique-se de que:

O Chrome está atualizado
A página do TikTok carrega normalmente
O modo desenvolvedor está habilitado no navegador
📥 INSTALAÇÃO DA FERRAMENTA
Método 1 — Instalação manual (recomendado)
Baixe o projeto:
git clone https://github.com/manualdeinvestigacaodigital/Raspador-webscraper-dados-mensagens-Tiktok.git
Extraia ou acesse a pasta do projeto
🔧 Carregar no Chrome
Abra o navegador
Acesse:
chrome://extensions/
Ative:

✔ Modo do desenvolvedor

Clique em:

👉 Carregar sem compactação

Selecione a pasta do projeto

✔ A extensão será carregada automaticamente

🌐 EXECUÇÃO
Acesse um vídeo do TikTok:
https://www.tiktok.com/@usuario/video/ID
Clique no ícone da extensão
ou execute o bookmarklet (quando aplicável)
🚀 FUNCIONAMENTO DA FERRAMENTA

A ferramenta atua diretamente na página do TikTok, coletando dados em tempo real.

📡 COLETA DE DADOS

A aplicação realiza:

🔍 Leitura de estruturas internas do TikTok:

UNIVERSAL_DATA_FOR_REHYDRATION
SIGI_STATE

📊 Extração de:

ID do vídeo
Autor (@username)
Descrição (caption)
Música utilizada
Data de publicação
Estatísticas:
curtidas
comentários
compartilhamentos
visualizações
🎥 EXTRAÇÃO DE MÍDIA

A ferramenta identifica e extrai:

URL direta do vídeo (playAddr)
URL de download (downloadAddr)
Informações de qualidade e formato
💬 COLETA DE COMENTÁRIOS

🔎 Expansão automática de comentários
🔁 Coleta de respostas (replies)
📑 Estruturação hierárquica dos dados

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

Os dados coletados podem ser exportados contendo:

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

Executar em contas sensíveis
Compartilhar dados coletados sem validação
Utilizar fora de contexto legal adequado
👤 Autor

Guilherme Caselli
https://instagram.com/guilhermecaselli

🎯 Finalidade

🕵️ Investigação digital
🧠 Inteligência
🌐 OSINT
📊 Análise de dados públicos
📁 Coleta estruturada de evidência digital
