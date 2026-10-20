# Nutri Vida — Demonstração de site

Protótipo responsivo e conceitual para a Nutri Vida Abelardo Luz. Não representa uma versão final aprovada pela empresa. As categorias são sugestões editáveis e produtos, disponibilidade e detalhes devem ser confirmados diretamente com a loja.

## Executar localmente

Com Python 3 instalado, no diretório deste projeto execute:

```bash
python3 -m http.server 3000
```

Abra `http://localhost:3000`. O servidor fornece os arquivos estáticos na porta 3000. Também é possível usar outro servidor estático local que sirva arquivos ES Modules e JSON.

## Personalização

Os dados, textos, telefone, links, endereço, imagens, avaliações fornecidas e categorias editáveis estão centralizados em `src/content.js`. A renderização e o comportamento de navegação ficam em `src/main.js`; cores, tipografia e regras responsivas estão em `src/styles.css`. A proposta de marca conceitual está em `public/images/nutri-vida-conceitual.svg`.

As imagens reais da fachada e do interior vieram do registro fotográfico enviado para esta demonstração. A foto editorial do hero é uma imagem ilustrativa de alimentos naturais, não um registro do catálogo ou do estoque da Nutri Vida.
