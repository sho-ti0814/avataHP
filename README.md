# BathTimeRadio

## 概要
Vライバー「まめめ」の紹介ページです。「BathTimeRadio」という活動名で配信やBOOTH作品を展開しています。

## サイトの目的
- 配信者「まめめ」の自己紹介
- 配信活動や作品の紹介
- SNS（X/旧Twitter）への導線

## 技術スタック
- React
- Tailwind CSS

## デザイン方針
- お風呂をイメージした中性的で可愛すぎないデザイン
- レスポンシブ対応

## 機能一覧
- ヘッダーにロゴ風のサイトタイトル
- 自己紹介セクション（立ち絵・紹介文）
- 配信スクリーンショットの掲載
- X（旧Twitter）へのリンクまたはポスト埋め込み

## ディレクトリ構成
```
public/
  images/
    mame-face.png         # 立ち絵画像（仮画像）
    radio-scene.jpg       # 配信スクショ（仮画像）
src/
  components/
    Header.jsx            # ヘッダーコンポーネント
    Profile.jsx           # プロフィールセクション
    TwitterEmbed.jsx      # X（旧Twitter）埋め込み
  App.jsx                # トップページ構成
  index.js               # エントリーポイント
  index.css              # Tailwind読み込み

tailwind.config.js       # Tailwind設定
postcss.config.js        # PostCSS設定
package.json             # 依存パッケージ
```

## 今後の拡張案
- ギャラリーやファンアート紹介
- お問い合わせフォーム
- 配信スケジュールカレンダー

---

# セットアップ手順

1. 依存パッケージのインストール
```
npm install
```
2. 開発サーバー起動
```
npm start
```

---

# ライセンス
MIT 