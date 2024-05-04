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

    updateList(); // 初期ロード時にリストを更新
});