const $ = (s) => document.querySelectorAll(s); // 少しだけjQueryライクに書く

/**
 * プレビュー画面を再描画します
 */
const redrawPreview = () => {
    return new Promise((resolve) => {
        /* == 商品名 == */
        $(`.pre>h2`)[0].innerText = $(`.in>.name>input`)[0].value;
        /* == 商品画像 == */
        const reader = new FileReader();
        if (Boolean($(`.in>.image>input`)[0].files[0])) {
            reader.readAsDataURL($(`.in>.image>input`)[0].files[0]);
            reader.onload = function () {
                $(`.pre>div>img`)[0].src = reader.result;
            };
        }
        /* == 商品説明 == */
        $(`.pre>div>ul`)[0].innerHTML = "";
        $(`.in>.desc>div>input`).forEach(e => {
            let add = document.createElement('li');
            add.innerHTML = e.value;
            $(`.pre>div>ul`)[0].appendChild(add);
        });
        /* == 商品リスト == */
        const listText = $(`.in>.list>textarea`)[0].value;
        const listArray = _AXT.conv.CSV_to_2dArray(listText);
        let addInTable = "";
        listArray.forEach(e => {
            let addInTr = "";
            e.forEach(f => {
                addInTr += `<td>${f}</td>`;
            });
            addInTable += `<tr>${addInTr}</tr>`;
        });
        $(`.pre>table`)[0].innerHTML = addInTable == "<tr><td></td></tr>" ? "" : addInTable;
        resolve(); // すべて終わったら解決する
    })
};

/**
 * 説明記入欄を増やします
 */
const addDescInput = () => {
    let addInput = document.createElement("div");
    let input = document.createElement('input');
    input.type = "text";
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "\u{f55a}";
    deleteButton.addEventListener('click', (event) => {
        event.srcElement.parentNode.parentNode.removeChild(event.srcElement.parentNode);
    })
    addInput.appendChild(input);
    addInput.appendChild(deleteButton);
    $(`.in>.desc>button`)[0].before(addInput);
}

/**
 * 画像をダウンロードします
 */
const download = () => {
    redrawPreview().then(() => {
        html2canvas($(`.pre`)[0]).then(c => {
            let a = document.createElement("a");
            a.href = c.toDataURL("image/jpg", 1);
            a.download = "image.jpg";
            a.click();
        });
    });
}

/**
 * 一覧表をTSV形式にしてコピー
 */
const copyList = () => void (navigator.clipboard.writeText($(".list>textarea")[0].value.replaceAll(",", "\t")));