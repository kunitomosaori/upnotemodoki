$(document).ready(function () {
    // 最初は非表示にする
    $("#key, #memo, #profile-name, #profile-dateofbirth, #save").addClass('hidden');
    $("#list").addClass('hidden');

    // ▽ボタン
    $("#list_display").on("click", function () {
        $("#list").toggle();
    });

    // 新規作成ボタン
    $("#new-key").on("click", function () {
        $("#key, #memo, #save").removeClass("hidden");
        $("#key").val("");
        $("#memo").val("");
    });

    // プロフィール作成ボタン
    $("#dog-profile").on("click", function () {
        $("#key, #memo, #profile-name, #profile-dateofbirth, #save").removeClass("hidden");
        $("#key").val("初回登録情報");
        $("#memo").val("性別：\n愛称：\n犬種：\n");  // テンプレートを追加
        $("#profile-name").val("");  // テンプレートを追加
        $("#profile-dateofbirth").val(""); // 例として固定日付を設定
    });

    // 保存ボタン
    $("#save").on("click", function () {
        const key = $("#key").val();
        const value = $("#memo").val();
        localStorage.setItem(key, value);
        updateList(); // 保存直後にリストを更新
        alert("ok");
    });

    // clear クリックイベント
    $("#clear").on("click", function () {
        localStorage.clear();
        updateList(); // クリア後にリストを更新
        alert("クリアー");
    });

    // //3.ページ読み込み：保存データ取得表示
    // for (let i = 0; i < localStorage.length; i++) {
    //     const key = localStorage.key(i);
    //     const value = localStorage.getItem(key);
    //     const html =  key;
    //     $("#list").append(html);
    // }

    // ページ読み込み時とキー保存後に実行されるリスト更新関数
    function updateList() {
        $("#list").empty(); // リストをクリア
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            const listitem = $("<div>").addClass("list-item");
            const button = $("<button>").text(key).addClass("memo-button").on("click", function () {
                $("#key, #memo, #save").removeClass('hidden'); // クリック時に表示
                $("#key").val(key);
                $("#memo").val(value);
            });
            const deletebutton = $("<button>").text("削除").addClass("delete-button").on('click', function () {
                localStorage.removeItem(key);
                $(this).parent().remove(); // 削除ボタンの親要素（listitem）を削除
            });
            listitem.append(button, deletebutton); // ボタンと削除ボタンをlistitemに追加
            $("#list").append(listitem); // listitemをリストに追加
        }
    }

    updateList(); // 初期ロード時にリストを更新
});