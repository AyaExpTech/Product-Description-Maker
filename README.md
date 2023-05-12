# AXT_Product-Description-Maker

製品などの簡易的な説明画像を作成するツールです。  
製品に限らず何でも使えると思います。

## 利用規約

Copyright (c) 2023-  
AyaExpTech, Ayasaka-Koto

以下の規約のいずれかに従ってください。  
Follow one of the following licenses.

- "AeTOS for Seller" …… https://axtech.dev/license/#aetos-for-seller

※このツールを用いて生成された画像の著作権はこのツールの製作者に帰属しません。

## 更新履歴

2023-05-12 `v0.2.1`
- 画像サイズが極端に縦長/横長な場合において画像が引き伸ばされた状態で描画される不具合の修正
    - 画像に対して`object-fit: contain;`を追加しただけ。完全に忘れてました……

2023-04-24 `v0.2.0`
- 説明記入欄を自由に増減できるように
    - deleteボタンを追加
- 一覧表未入力時、画像を大きく表示して説明欄を下にするように変更

2023-04-21 `v0.1.2`
- 一部環境でダウンロード画像が正常に描画されないバグを修正(`style.css`)
    - たぶんhtml2canvasがinheritが来たときに渡された要素の親の計算値を読めてない
        - そもそもinheritを参照する事態にならないように修正
    - そしてbox-shadowの描画も不安定？
        - box-shadow一応削除しておいた
        - 2023-05-12追記)html2canvasはbox-shadowの描画にバグを大量に持っているらしい

2023-04-21 `v0.1.1`
- .nojekyllを追加

2023-04-21 `v0.1.0`
- 非公開リポジトリから移転
- 入力クリアボタンを追加(`index.html`)
- 再描画ボタンのアイコンを🔃系から✎系に変更(`index.html`)
- 表に交互の背景色を適用(`style.css`)
- テーブル欄に無入力の場合は表を表示しない仕様に変更(`script.js`, `style.css`)

## 使い方

察してください