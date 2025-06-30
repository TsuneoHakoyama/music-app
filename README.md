# 音楽検索アプリ

###### 概要
###### Spotify APIを利用して音楽検索ができる。
###### トップ画面
![トップ画面のスクリーンショット](Top-page.png?raw=true)

## 機能一覧
###### Top-pageにアクセスするとSpotifyのpopular songsが表示できる
###### 検索欄にキーワードを入力し、Spotify APIを利用して楽曲を検索することができる
###### 検索結果はpaginationを使って表示される

## 使用技術
###### axios: 1.9.0
###### React: 19.1.0
###### React-dom: 19.1.0
###### vite: 6.3.5

## 環境構築
###### 1. $ git clone git@github.com:TsuneoHakoyama/music-app.git
###### 2. $ cd music-app
###### 3. $ cp .env.develop .env
###### 4. $ npm install
###### 5. $ npm run dev
###### 6. http://localhost:5173にアクセス
