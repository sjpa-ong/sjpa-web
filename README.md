# 🐾 SJPA — Site Institucional

Site oficial da **Sociedade Juizforense de Proteção aos Animais e ao Meio Ambiente**, desenvolvido como projeto final do curso DNC.

> Há mais de 36 anos a SJPA acolhe animais em situação de abandono em Juiz de Fora – MG.  
> Hoje são cerca de **450 animais** sob cuidados, mantidos exclusivamente por doações e voluntários.

---

## 🚀 Stack

| Camada | Tecnologia |
|---|---|
| Front-end | React + Vite |
| Estilo | Tailwind CSS |
| Deploy | Vercel |
| Versionamento | GitHub (Organization) |

---

## 📁 Estrutura de pastas

```
sjpa-web/
├── public/                    # Arquivos estáticos (favicon, og:image)
├── docs/                      # Documentação do projeto (entrega DNC)
└── src/
    ├── assets/
    │   ├── images/
    │   │   └── pets/          # Fotos dos animais (fornecidas pela ONG)
    │   └── icons/             # Ícones SVG
    ├── components/
    │   ├── ui/                # Componentes genéricos reutilizáveis (Button, Modal, etc.)
    │   └── sections/          # Seções da página (Hero, Sobre, Galeria, etc.)
    ├── hooks/                 # Hooks customizados
    ├── styles/
    │   └── globals.css        # Estilos globais + diretivas Tailwind
    └── utils/                 # Funções utilitárias compartilhadas
```

---

## 📄 Seções do site

| Seção | Descrição | Status |
|---|---|---|
| Hero | Banner principal com CTA de doação | 🔲 A fazer |
| Sobre a ONG | História, missão e números | 🔲 A fazer |
| Como funciona | Processo de recebimento dos pets | 🔲 A fazer |
| Galeria | Fotos dos animais | 🔲 A fazer |
| Doação | Botão de redirecionamento para link externo | 🔲 A fazer |
| Rodapé | Contato e redes sociais | 🔲 A fazer |

---

## ⚙️ Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/sjpa-site/sjpa-web.git
cd sjpa-web

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com o link de doação correto

# 4. Rode o servidor de desenvolvimento
npm run dev
```

Acesse em `http://localhost:5173`

---

## 🌿 Fluxo de trabalho (Git)

Usamos **GitHub Flow**. Nunca commite direto na `main`.

```
# 1. Atualize sua main local
git checkout main
git pull origin main

# 2. Crie sua branch
git checkout -b feature/nome-da-feature

# 3. Desenvolva, commite com mensagens claras
git commit -m "feat: adiciona galeria de fotos"

# 4. Suba a branch e abra uma PR
git push origin feature/nome-da-feature
```

### Prefixos de commit recomendados

| Prefixo | Quando usar |
|---|---|
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `style:` | Ajustes visuais / CSS |
| `docs:` | Documentação |
| `refactor:` | Refatoração sem mudar comportamento |
| `chore:` | Configuração, dependências |

### Regras de PR

- Mínimo **1 aprovação** para mergear na `main`
- Descreva o que foi feito e adicione prints se for mudança visual
- Resolva os conflitos antes de pedir review

---

## 🗓️ Cronograma

| Período | Atividade |
|---|---|
| Semana 1–2 | Setup, wireframe, divisão de tarefas |
| Semana 3–6 | Desenvolvimento das seções |
| Semana 7 | Revisão, testes, responsividade |
| Semana 8 | Documentação + apresentação |
| **23/05/2026** | **Entrega final** |

---

## 📦 Entregáveis (DNC)

- [ ] Site publicado e funcional (link do deploy)
- [ ] Apresentação (PowerPoint ou Google Slides)
- [ ] Documentação (`.docx` ou Notion) com análises, prints e raciocínio

---

## 👥 Time

| Nome | GitHub | Responsabilidade |
|---|---|---|
| — | — | Setup, galeria, seção Sobre |
| — | — | Seção processo, CTA doação, responsividade |
| — | — | Documentação, apresentação, deploy |

> Preencha com os dados do time.

---

## 🔗 Links úteis

- [Perfil da ONG — voluntarios.com.br](https://voluntarios.com.br/entidade/9878)
- [Imagens dos pets (Google Drive)](https://drive.google.com/drive/folders/1pac2n_DI8mt1XM3KmcotBpPYHzMl-c0O?usp=drive_link)
- [Material de Apoio DNC](https://www.notion.so/Material-de-Apoio-Entrega-Final-3291b4d4252c818895d9fb12680b2fed)

---

<p align="center">Feito com 🐾 para a SJPA · Projeto DNC 2026</p>
