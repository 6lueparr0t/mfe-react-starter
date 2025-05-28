# Command

```bash
npm install -g pnpm
pnpm i

## design system build
pnpm turbo build --filter @mfe/ui

## 이후 사용하려는 곳의 package.json 의 Dependency 에 아래 내용 추가
# "@mfe/ui": "workspace:*",

# 전체 추가
#pnpm --filter 'apps/**' add @mfe/ui --workspace
pnpm --filter host add @mfe/ui --workspace
pnpm --filter remote1 add @mfe/ui --workspace

# host dev 실행
pnpm --filter host install
pnpm turbo run dev --filter host

# remote1 dev 실행
pnpm --filter remote1 install
pnpm turbo run dev --filter remote1

pnpm start:all
```
