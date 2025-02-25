# Padrões Git Flow adotados no projeto

Este repositório adota o modelo de ramificação e convenções de nomenclatura do `git-flow`.

Se você não está familiarizado com o modelo de ramificação `git-flow`, por favor leia:

1. [O artigo original completo de Vincent Driessen](https://nvie.com/posts/a-successful-git-branching-model/)
2. [Este tutorial da equipe Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) que também faz um ótimo trabalho explicando como funciona o modelo de ramificação `git-flow`

## 1 Ramificação

Seguimos o git-flow, então temos as seguintes definições:

- `main`: Branch de produção.
- `development`: Branch de staging com a versão mais recente em desenvolvimento.
- `feat`: Branch contendo novos recursos a serem adicionados ao `development`.
- `hotfix`: Para correção de bugs críticos.
- `bugfix`: Para correção de bugs durante a fase de desenvolvimento e testes internos.

As branches devem seguir o padrão: `<definição>/<tag-jira>`

**Exemplo:** `feat/LR-0001`

## 2 Commits

Ao escrever mensagens de commit, aderimos o máximo possível aos padrões sugeridos pelo [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary).

Esta convenção tem um conjunto de regras para tornar as mensagens de commit mais significativas e fáceis de ler.

O padrão base da mensagem de commit é: `tipo(escopo?): assunto`
_Escopo é opcional; múltiplos escopos são suportados (opções atuais de delimitador: "/", "\" e ",")_

**Exemplo:** `feat(theme): alterar a cor do tema principal para vermelho`

Utilizamos principalmente os tipos: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`.

Para entender mais profundamente o significado de cada tipo de commit, consulte a documentação no
[site do Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)

## 3 Merge Request

Se você deseja mesclar novo código na branch `development`, você precisa abrir um novo `Pull Request` no github.

É muito importante manter cada alteração em commits individuais para sua branch/pull request original, e adicionar um título claro e significativo para cada merge request.

Ao fazer squash de um merge request, o título do merge request será a mensagem real do commit que será adicionada ao histórico de commits do repositório.