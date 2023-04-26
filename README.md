# Projeto domindo node avançado

## eslint config para settings.json

`"eslint.codeActionsOnSave.rules": ["true"],
  "eslint.packageManager": "yarn",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]`

---

# Banco de Dados ORM com Sequelize

## instalando sequelize

-   yarn add sequelize
-   yarn add sequelize-cli -D
    -   Criar arquivo .sequelizerc e editar com seguintes dados:
    `module.exports = {
    config: resolve(__dirname, 'src', 'config', 'database.js'),
    'models-path': resolve(__dirname, 'src', 'app', 'models'),
    'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
    'seeders-path': resolve(__dirname, 'src', 'database', 'seeds'),
}
`
## Configurar Dialects
- yarn add pg pg-hstore

## Criar sequelize migrate
- yarn sequelize migration:create --name=create-nome_da_tabela
- Exemplo:
  - yarn sequelize migration:create --name=create-customers

## Migra as migrate para o Banco de Dados
yarn sequelize db:migrate

## Desfazer todas as migrates
yarn sequelize db:migrate:undo:all


