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
        $("#key, #memo, #tags, #save").removeClass("hidden");
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

// memoの背景変更
$(document).ready(function() {
    $('.bgBtn').click(function() {
        $.cookie('bgColor', this.id, { expires: 7, path: '/' });
        $('.bgBtn').removeClass('is_active');
        switch (this.id) {
            case 'bg-white':
                bgWhite();
                break;
            case 'bg-blue':
                bgBlue();
                break;
            case 'bg-black':
                bgBlack();
                break;
        }
    });

    function bgWhite() {
        $('#bg-white').addClass('is_active');
        $('#memo').css('background', 'white');
        $('#memo').css('color', 'black');
    }

    function bgBlue() {
        $('#bg-blue').addClass('is_active');
        $('#memo').css('background', 'blue');
        $('#memo').css('color', 'white');
    }

    function bgBlack() {
        $('#bg-black').addClass('is_active');
        $('#memo').css('background', 'black');
        $('#memo').css('color', 'white');
    }

    // 初回ロード時の処理
    let bg = $.cookie('bgColor');
    if (bg) {
        $('.bgBtn').removeClass('is_active');
        switch (bg) {
            case 'bg-white':
                bgWhite();
                break;
            case 'bg-blue':
                bgBlue();
                break;
            case 'bg-black':
                bgBlack();
                break;
        }
    }
});