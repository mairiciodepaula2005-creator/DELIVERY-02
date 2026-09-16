# Chapa Quente — Cardápio Digital

Aplicação web estática, responsiva e mobile-first para apresentar um cardápio, montar pedidos e encaminhá-los ao WhatsApp da loja.

## Publicação no GitHub Pages

1. Crie um repositório vazio no GitHub, sem adicionar README, licença ou `.gitignore` pela interface.
2. No terminal, dentro desta pasta, registre a primeira versão (caso ela ainda não tenha sido criada):

   ```bash
   git init -b main
   git add .
   git commit -m "Initial commit"
   ```

3. Conecte o repositório e envie os arquivos:

   ```bash
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git branch -M main
   git push -u origin main
   ```

4. No GitHub, acesse **Settings → Pages**. Em **Build and deployment**, selecione **Deploy from a branch**, a branch `main` e a pasta `/(root)`.
5. Salve e aguarde a URL pública exibida pelo GitHub Pages.

O arquivo `.nojekyll` garante que os arquivos estáticos sejam publicados sem processamento pelo Jekyll.

## Execução local

Abra `index.html` diretamente no navegador ou sirva a pasta com um servidor estático. Por exemplo:

```bash
npx serve .
```

## Personalização obrigatória

Revise `js/products.js` antes de disponibilizar o site:

- Dados da loja, WhatsApp, PIX, taxas e horário ficam em `STORE_CONFIG`.
- Produtos, preços, descrições e imagens ficam em `PRODUCTS`.
- Use uma logo própria em `assets/img/` e atualize a referência em `index.html`.
- Informe o endereço de retirada ao cliente pelo WhatsApp até que ele seja configurado na interface.

## Privacidade e direitos de uso

O site grava somente nome, telefone e histórico de pedidos no armazenamento local do navegador do cliente. Não há backend, banco de dados nem credenciais neste repositório.

As imagens de produtos atualmente apontam para um serviço de terceiros. Antes de publicar, substitua-as por imagens próprias ou confirme que possui licença/autorização para utilizá-las e hospedá-las dessa forma. Não publique conteúdo de terceiros como se fosse seu.

## Tecnologias

HTML, CSS e JavaScript puro. Não há dependências para instalar nem etapa de compilação.
