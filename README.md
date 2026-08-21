# Urbivis Terra Clara

Crie a landing page do Urbivis seguindo todos os critérios abaixo. Duas regras valem para a página inteira e têm prioridade sobre qualquer outra instrução: menos texto, mais imagem e nunca use travessão nem dois pontos em nenhum texto visível ao usuário (essa regra não se aplica aos meus rótulos de instrução para você, tipo "Título" acima de um exemplo, se aplica só ao que aparece escrito na página final).

Contexto do produto

O Urbivis é uma plataforma de inteligência territorial para prefeituras brasileiras. Ela resolve dois problemas. Para quem já tem cadastro imobiliário, mesmo desatualizado, o Urbivis compara com imagem de satélite e aponta onde a realidade diverge do que está registrado. Para quem não tem nenhum cadastro com geometria, o Urbisvis cria essa base do zero, digitalizando lote a lote a partir da imagem de satélite. As duas frentes precisam ficar visíveis na página, não só uma.

Público-alvo: prefeitos e secretários de finanças de municípios pequenos e médios. Linguagem simples, sem jargão técnico de geoprocessamento ou direito tributário.

Objetivo único da página: gerar contato qualificado pelo WhatsApp.

Regra de texto (siga rigorosamente em cada seção)

Título de seção com no máximo 8 palavras.

Corpo de texto de cada seção com no máximo 30 palavras. Seções de destaque (hero e seção jurídica) podem chegar a 40.

Frases curtas e diretas. Prefira ponto final a vírgula longa.

Proibido travessão (—) em qualquer texto da página. Proibido dois pontos (:) em qualquer texto da página. Reescreva a frase inteira em vez de usar esses sinais como atalho.

Exemplo do padrão esperado: em vez de "O cadastro envelhece: a cidade não", escreva "O cadastro envelhece. A cidade não acompanha." Em vez de "Duas frentes — cadastro novo ou atualização", escreva "Funciona para quem já tem cadastro e para quem não tem nenhum."

Cada seção precisa ter uma imagem ou elemento visual ocupando a maior parte do espaço, com o texto num bloco pequeno e curto ao lado ou por cima, nunca o contrário.

Imagens (gere você mesmo, usando os prompts abaixo)

Gere as imagens diretamente, no estilo fotografia aérea realista, com câmera apontada quase perpendicular ao solo, luz quente de fim de tarde, sem elemento de interface, sem logotipo, sem marca d'água, sem pessoa identificável em nenhuma delas. Use exatamente estes prompts, um por imagem, sem misturar conteúdo de um prompt com outro:

Hero (imagem ampla, sem sobreposição de dado) Fotografia aérea realista, vista de cima de um bairro residencial de cidade pequena do interior do Brasil. Telhados de telha cerâmica em tons terracota e ferrugem, ruas estreitas, quintais com árvores esparsas, quadras em grade levemente irregular. Luz dourada de fim de tarde, sombras longas. Fotografia nítida, não ilustração, não render 3D.

Card Ampliação Fotografia aérea realista, close-up de um único telhado residencial. O telhado mostra duas texturas de telha claramente diferentes lado a lado, uma parte mais antiga e desgastada, outra mais nova, indicando que a casa foi ampliada. Uma linha fina ciano brilhante contorna o formato original do telhado. Um destaque translúcido âmbar cobre só a parte nova ampliada.

Card Construção não cadastrada Fotografia aérea realista, close-up de um lote residencial. Uma linha fina ciano brilhante contorna o terreno, majoritariamente vazio, mas uma pequena construção com telhado de telha aparece claramente dentro dele, sem estar marcada pela linha de contorno. Um destaque translúcido âmbar envolve essa construção.

Card Piscina não cadastrada Fotografia aérea realista, close-up do quintal de uma casa com telhado de telha cerâmica, mostrando uma piscina retangular azul turquesa ao lado da casa. Uma linha fina ciano brilhante contorna o terreno. Um destaque translúcido âmbar contorna precisamente o formato da piscina.

Card Demolição Fotografia aérea realista, close-up de um lote residencial. Uma linha fina ciano brilhante contorna o terreno no formato de uma casa, mas o chão dentro dela é terra batida, com um leve contorno retangular de fundação onde existia uma construção, agora demolida. Os lotes vizinhos ainda têm casas com telhado de telha. Um contorno tracejado âmbar marca essa área vazia.

Duas frentes, imagem já tem cadastro Fotografia aérea realista, vista de cima de uma grade de lotes residenciais com telhado de telha cerâmica. Linhas finas ciano brilhantes contornam precisamente cada lote, como uma camada de dado técnico sobre a fotografia real. Um único lote próximo ao centro tem um preenchimento translúcido âmbar suave, sinalizado para revisão.

Duas frentes, imagem ainda não tem cadastro Fotografia aérea realista, vista de cima da mesma grade de lotes residenciais com telhado de telha cerâmica, mas sem nenhuma linha de contorno, uma fotografia aérea crua e sem marcação. Sobre um dos lotes, uma linha ciano brilhante aparece em formação, como se estivesse sendo desenhada ponto a ponto, com alguns pontos de âncora brilhantes conectados por linhas tracejadas parciais, sugerindo que o contorno está sendo criado pela primeira vez.

Use essas imagens como elemento dominante das seções correspondentes, em tamanho grande, ocupando a maior parte da viewport, com o texto num bloco pequeno ao lado ou por cima.

Direção de design

Inspiração Apple. Rolagem vertical única contando uma história. Tipografia grande e confiante. Muito espaço em branco ao redor de cada elemento.

Paleta: verde escuro #132B26 como cor primária e de fundo em seções de impacto. Âmbar #B26A12 só para ações e destaques pontuais. Fundo suave #F2F5F3. Superfícies brancas #FFFFFF.

Tipografia de título em fonte geométrica moderna, peso 600 a 700. Corpo em sans-serif humanista limpa, peso 400 a 500.

Mobile first. O contato normalmente chega pelo WhatsApp e abre o link no celular.

Dinamismo e movimento (obrigatório, não opcional)

Use Framer Motion para todas as animações de entrada e microinterações. Use Lenis (ou biblioteca equivalente) para smooth scroll em toda a página, a rolagem nativa padrão do navegador não deve ficar como está.

Hero. O elemento visual de fundo se move em parallax real conforme a rolagem, velocidade diferente do texto em primeiro plano. O título entra com stagger, palavra por palavra, nunca tudo de uma vez.

Seção como funciona. Implemente como seção pinned. Um elemento visual central fica fixo na tela enquanto o texto de cada passo troca conforme a posição da rolagem.

Números em destaque. Anime como contador crescente, disparado só quando o número entra na viewport.

Seção jurídica (por que é seguro). Use uma animação de contorno se desenhando sozinho, um polígono em SVG com o traçado animado, como se estivesse sendo desenhado em tempo real.

Cartões e botões, em toda a página. Todo cartão precisa de elevação de sombra e leve aumento de escala no hover, com transição de 200 a 300 milissegundos. O botão de WhatsApp precisa de estado de hover perceptível, não só troca de cor.

Regra contra repetição. Cada seção entra com uma animação de tipo diferente da seção anterior. Alterne entre entrada com deslocamento vertical, revelação por recorte de forma, e escala crescente de 95% a 100%. Nenhuma animação passa de 600 milissegundos. Sempre easing suave, nunca linear.

Estrutura da página

1. Hero Imagem aérea em tela cheia. Título curto sobre a imagem. Um botão de WhatsApp.

2. O problema Frase curta sobre o cadastro desatualizado. Número grande animado, 30 a 50%, com a fonte Ipea pequena abaixo.

3. Os quatro tipos de divergência Quatro cartões de imagem, um para cada tipo, cada um com um título de duas palavras e uma frase curta.

4. Duas frentes Duas imagens lado a lado, cada uma com um rótulo curto acima (já tem cadastro, ainda não tem cadastro) e uma frase de até 25 palavras abaixo.

5. Como funciona Seção pinned com quatro passos numerados, cada passo com no máximo 10 palavras de texto.

6. Por que é seguro A seção de maior destaque visual da página. Fundo escuro, tipografia grande, animação de contorno se desenhando. Explique em poucas frases que o Urbisvis não aumenta imposto, corrige a base de cálculo, e que a lei trata diferente quem nunca soube de uma construção de quem já sabia e não atualizou o sistema.

7. Benefícios Grade de cartões curtos, ícone de linha simples em cada um, sem foto. Cada benefício em uma frase de até 8 palavras.

8. Números de contexto Um número grande animado, R$ 73,45 bilhões, com uma frase curta de contexto. Não incluir depoimento de prefeitura, logo de cliente, ou resultado de case, porque o produto está em piloto e nenhum resultado real existe ainda para divulgar.

9. Perguntas frequentes Formato acordeão. Perguntas sobre aumento de imposto, segurança jurídica, funcionamento sem cadastro prévio, troca de sistema, e tempo até o resultado. Respostas de até duas linhas cada.

10. Chamada final Tela cheia, fundo escuro, tipografia grande, um botão de WhatsApp.

11. Rodapé Minimalista, nome da marca e um botão de WhatsApp pequeno.

WhatsApp

Todos os botões abrem https://wa.me/5587988758805 com mensagem pré-preenchida qualificando o contato. Inclua um botão fixo flutuante visível durante toda a rolagem, além dos botões nas seções principais.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b1d2f4ef-cdd1-45d2-b505-32c2cc1f32dd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
