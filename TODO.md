# Entregas da demonstração — Nutri Vida Abelardo Luz

## Identidade visual, navegação e estrutura responsiva — concluída
- O site deve transmitir confiança, qualidade, proximidade e cuidado, com identidade visual moderna, acolhedora, natural e sofisticada.
- Paleta sugerida: verde-floresta, verde-sálvia, creme/off-white, tons terrosos suaves e branco. Usar tipografia legível, espaçamento generoso, bordas discretas e sombras sutis; evitar aparência medicinal, excesso de verde, gradientes exagerados, emojis e cartões repetitivos.
- O cabeçalho deve conter marca Nutri Vida, links funcionais para Início, Produtos, Sobre a loja e Localização, botão “Fale pelo WhatsApp” e menu mobile funcional e acessível.
- O site deve ser responsivo para Android, iPhone, tablets, notebooks e monitores grandes, sem rolagem horizontal, textos cortados ou controles difíceis de tocar.
- A marca deve ser escrita “Nutri Vida”. Sem logotipo oficial, a proposta tipográfica e símbolo botânico precisam ser claramente identificados como identidade visual conceitual.

## Conteúdo comercial e apresentação da loja — concluída
- Hero: título “Mais naturalidade para o seu dia a dia.”; subtítulo “Descubra produtos naturais para incluir mais sabor, variedade e boas escolhas na sua rotina. Conheça a Nutri Vida em Abelardo Luz.”; botões “Conheça nossos produtos” e “Fale conosco”. A seção deve usar fotografia atraente, composição equilibrada e detalhe visual natural.
- Categorias sugeridas e editáveis: Grãos e sementes; Castanhas e frutas secas; Chás e ervas; Outros produtos naturais. São sugestões, não catálogo ou disponibilidade confirmada. Não afirmar produtos, marcas, preços ou disponibilidade como fatos; centralizar dados para atualização posterior.
- Benefícios: facilidade para conhecer os produtos oferecidos; informações da loja reunidas em um lugar; contato rápido por WhatsApp; facilidade para consultar dúvidas sobre produtos e disponibilidade; possibilidade de consultar opções de entrega diretamente com a loja. Não prometer resultados médicos, emagrecimento ou benefícios de saúde.
- Seção “Conheça a Nutri Vida”: “Na Nutri Vida, você encontra um espaço para conhecer produtos naturais e descobrir novas opções para sua rotina. Estamos em Abelardo Luz, com atendimento próximo e facilidade para entrar em contato e consultar nossos produtos.” Valorizar atendimento e presença em Abelardo Luz. Não inventar fundação, tempo de mercado, certificações, equipe ou missão.
- Avaliação: exibir “5,0 de 5 no Google”, “Com base em 2 avaliações.” e “Atendimento e produtos excelentes.”, identificada como avaliação publicada no Google. Não inventar autores ou depoimentos.
- Informações reais: Nutri Vida Abelardo Luz; loja de produtos naturais; Avenida Getúlio Vargas, 565, Centro, Abelardo Luz - SC, CEP 89830-000; telefone (49) 99807-9496; entrega disponível conforme perfil da empresa no Google. Não inventar horário completo, preços, marcas, estoque, serviços nutricionais ou outras informações ausentes.

## Contato, avaliações, CTA e rodapé — concluída
- Todos os botões de contato devem iniciar WhatsApp no link https://wa.me/5549998079496; mensagens iniciais podem variar, incluindo “Olá! Conheci a Nutri Vida pelo site e gostaria de saber mais sobre os produtos.”
- Contato/localização: endereço completo, telefone, atalho para WhatsApp, botão que abra pesquisa desse endereço no Google Maps e convite a entrar em contato. Mapa incorporado é opcional e não pode prejudicar carregamento mobile.
- Antes do rodapé, CTA com fundo verde-escuro e texto claro: “Conheça a Nutri Vida.”; “Entre em contato, tire suas dúvidas e descubra nossas opções de produtos naturais.”; botão “Conversar pelo WhatsApp”.
- Rodapé com marca, breve descrição, endereço, telefone, links de navegação, atalho de WhatsApp e direitos autorais do ano atual; não incluir redes sociais não informadas.

## Interação, acessibilidade, mídia e desempenho — concluída
- Implementar rolagem suave para seções, efeitos sutis de entrada ao rolar, hover/foco bem trabalhados, botão flutuante de WhatsApp sem obstruir conteúdo, links funcionais, menu mobile acessível, imagens otimizadas e navegação por teclado.
- Garantir contraste adequado, textos alternativos e controles identificáveis; manter animações leves e considerar preferência por movimento reduzido.
- Usar fotografias realistas adequadas. O PDF fornecido contém registros fotográficos da fachada, prateleiras, interior e exposição de produtos; aproveitar fotos próprias apropriadas e caminhos válidos. Não inventar imagens que pretendam retratar a loja.
- O conteúdo deve estar centralizado em estruturas editáveis. Código modular, legível e fácil de manter; não incluir checkout, loja virtual complexa, dependências pagas, chaves privadas ou APIs desnecessárias.
- Esta é uma demonstração inicial personalizada, ainda não aprovada pela empresa. Não insinuar aprovação nem inventar informação comercial.

## Documentação, implementação e funcionamento local — concluída
- Implementar nos arquivos do projeto, respeitando a tecnologia e dependências encontradas (não havia projeto preexistente na pasta inicial).
- Ao finalizar, resumir arquivos criados/alterados, como executar localmente, funcionalidades implementadas e verificadas, e imagens/informações/recursos ainda sujeitos a confirmação. Garantir que o projeto funcione antes de declarar conclusão.

## Evidências da implementação
- O servidor na porta 3000 responde HTTP 200 para `/`, `/manus-routes.json`, módulos, estilos e logotipo.
- A validação estática confirmou sintaxe dos módulos, JSON de rotas, SVG e metadados. A marcação produzida pelo JavaScript confirmou as âncoras, 15 links de WhatsApp com mensagem, Maps, telefone, texto alternativo nas 10 imagens e as interações principais do menu mobile (abrir/fechar, Escape e retorno de foco).

- Após revisão independente, escureci os textos pequenos com baixo contraste, acrescentei fundo sólido aos números sobre as fotos e tornei as cinco estrelas identificáveis por leitor de tela. A checagem WCAG AA passou em 29 combinações de cores de texto/fundo e os arquivos atualizados responderam HTTP 200.
