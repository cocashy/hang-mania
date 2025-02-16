# 参考

https://www.youtube.com/watch?v=f641dliqzwQ

# 環境構築

## Cloudflare

`npm create cloudflare@latest`

## Prisma, Cloudflare D1

`npm install prisma --save-dev`

`npm install @prisma/client @prisma/adapter-d1`

`npx prisma init --datasource-provider sqlite`

`npx wrangler d1 create {database_name}`

```
{
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "{database_name}",
      "database_id": "190203ce-9865-4960-93a1-8d1594159f8a"
    }
  ]
}
```
が出力されるので`wrangler.jsonc`に追加

`npx wrangler d1 migrations create db create_user_table`

`npx prisma migrate diff --from-empty --to-schema-datamodel ./prisma/schema.prisma --script > prisma/migrations/0001_create_user_table.sql`

`npx wrangler d1 migrations apply db --local`

`npx wrangler d1 execute db --local --file=./prisma/dummy-data.sql`

`npx prisma generate`

## Hono

`npm install hono`

## Cloudflare D1

`npx wrangler d1 migrations apply db --remote`

`npx wrangler d1 execute db --remote --file=./prisma/dummy-data.sql`

## デプロイ

`npm run deploy`

# コマンド

`npm run dev` 開発環境

`npm run deploy` デプロイ
