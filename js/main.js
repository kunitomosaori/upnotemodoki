$(document).ready(function () {
    // 最初は非表示にする
    
    $("#key, #memo, #tags, #save").addClass('hidden');
    $("#list").addClass('hidden');

    // ▽ボタン(notebooks)
    $("#list_display").on("click", function () {
        $("#list").toggle();
    });

    // ▽ボタン(tags)
    $("#tag_list_display").on("click", function () {
        console.log("Tag list display button clicked");
        $("#tag_list").toggle();
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

$(document).ready(function () {
    const CONTAINER = $(".main-contents"); // フォームまたは適切な要素に変更
    const ELEMENTS = ["#key", "#memo", "#tags"]; // 対象の要素リスト

    // フォーカス用の要素を追加
    const FOCUS = $("<div id='focus'></div>").appendTo("body");

    // 要素の位置を設定する関数
    function position(e) {
        const props = {
            top: e.offset().top,
            left: e.offset().left,
            width: e.outerWidth(),
            height: e.outerHeight(),
            radius: parseInt(e.css("border-radius"))
        };

        FOCUS.css({
            top: props.top,
            left: props.left,
            width: props.width,
            height: props.height,
            "border-radius": props.radius
        });

        FOCUS.fadeIn(200);
    }

    // 各要素にフォーカス時のイベントリスナーを設定
    CONTAINER.find(ELEMENTS.join(", ")).each(function () {
        $(this).focus(function () {
            const el = $(this);

            // ウィンドウサイズ変更時に位置を再計算
            $(window).resize(function () {
                position(el);
            });

            position(el);
        });
    });

    // フォーカスが外れたときにフェードアウト
    CONTAINER.on("focusout", function (e) {
        setTimeout(function () {
            if (!e.delegateTarget.contains(document.activeElement)) {
                FOCUS.fadeOut(200);
            }
        }, 0);
    });
});
