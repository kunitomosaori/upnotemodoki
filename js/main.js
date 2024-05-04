$(document).ready(function () {
    // 最初は非表示にする
    $("#key, #memo, #tags, #save").addClass('hidden');
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
        $("#tags").val(""); // タグの入力もクリア
    });

    // サイドメニューの表示・非表示を切り替え
    $("#list_display_switch").on("click", function () {
        $(".side-menu").toggleClass("collapsed");
        $(".main-contents").toggleClass("collapsed"); // 対応するクラスの追加
    });

    updateList(); // 初期ロード時にリストを更新
});