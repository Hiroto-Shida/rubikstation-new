## 環境構築手順

リポジトリのclone
```bash
git clone git@github.com:Hiroto-Shida/moai-image-generator.git
```

ディレクトリの移動
```bash
cd rubikstation-new
```

### pnpm コマンドを使えるようにする

```
volta uninstall pnpm（必要であれば。すでに入ってると上手く合わないかも??）
volta install corepack
corepack enable
pnpm -v（ルートの package.json "packageManager"と同じversionになればOK）
```

### (任意) turbo のグローバルインストール
[公式 Doc](https://turborepo.com/docs/getting-started/installation#installing-turbo) では入れとけば便利だよって言ってる
turboコマンドが使えるとルートのturbo.jsonのコマンドがそのまま使える
- turbo dev（=pnpm run dev）、
- turbo dev（=pnpm run dev）、など

```bash
pnpm add turbo --global
```


パッケージインストール
```bash
pnpm i --frozen-lockfile
```

dev 起動（現状storybookとNext.jsが同時起動）
```bash
pnpm run dev
もしくは
turbo dev
```

### その他環境構築
* VSCodeのrecommend拡張機能は入れてください