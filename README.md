# 環境構築ドキュメント

### Node.jsのインストール
* バージョンv18.14.1以降のNode.jsをインストールします。以下のコマンドでNode.jsがインストールしているか、確認できます。
```
  node -v
```
* 上のコマンドで、*v18.12.1*のようにバーションが表示されない場合、インストールする必要があります。以下を参考にして下さい。
  
* [macにnodeをインストールする](https://zenn.dev/abenben/articles/1b29744da708ac)
* [Node.jsの開発環境を用意しよう！（Windows）](https://prog-8.com/docs/nodejs-env-win)

### リポジトリのクローン
開発をする上でリポジトリという、オンライン上にアップロードされたプロダクトのコードがあるのでそれをPC上に持ってきましょう。
* cd lsなどを使って自分のPCのアクセスしやすいフォルダに移動
* 初心者の方はデスクトップにあるとわかりやすいので、
* `cd`コマンドでホームディレクトリに移動
* `cd Desktop`でデスクトップまで移動しましょう
* 以下のコマンドでPLOTWEBサイトのリポジトリをクローン

```
git clone https://github.com/plot-niigata/plot-website.git
```
* `cd plot-website`でクローンしたリポジトリに移動
名前の表示が`kawaiyuya3401@kawattchi plot-website`のようにplot-websiteが表示されたら成功です！

### npmのインストール
* 以下のコマンドを入力することで、npmというパッケージマネージャーを使用して開発に必要ないくつものパッケージをインストールすることができます。package.jsonがあるディレクトリでないと失敗します。lsコマンドで確認しましょう。

```
npm install
```

### 開発サーバーを起動
* 以下のコマンドで開発サーバーを起動します。
```
npm run dev   
```

以下の表示が出たら成功です！http://localhost:3000/ にアクセスしましょう
```
> @example/blog@0.0.1 dev
> astro dev

  🚀  astro  v1.9.2 started in 345ms
  
  ┃ Local    http://localhost:3000/
  ┃ Network  use --host to expose
```

### お疲れ様でした！

# Astro Starter Kit: Blog

```
npm init astro -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!


![blog](https://user-images.githubusercontent.com/4677417/186189140-4ef17aac-c3c9-4918-a8c2-ce86ba1bb394.png)

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
