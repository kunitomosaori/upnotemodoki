$(document).ready(function () {
    // 初期状態では必要な要素を非表示にする
    $("#key, #memo, #tags, #save").addClass('hidden');
    $("#list").addClass('hidden');

    // サイドメニューの表示・非表示を切り替え
    $("#list_display_switch").on("click", function () {
        $(".side-menu").toggleClass("collapsed");

        // 「三」以外のサイドメニューの子要素を非表示にする
        if ($(".side-menu").hasClass("collapsed")) {
            $(".side-menu").children().not("#list_display_switch").hide();
        } else {
            $(".side-menu").children().show(); // 全ての子要素を再表示
        }

        // メインコンテンツの幅を変更
        $(".main-contents").toggleClass("collapsed");
    });

    // ノートブックのリストを表示/非表示
    $("#list_display").on("click", function () {
        $("#list").toggleClass("hidden").toggle();
    });

    // タグのリストを表示/非表示
    $("#tag_list_display").on("click", function () {
        $("#tag_list").toggleClass("hidden").toggle();
    });

    // 新規作成ボタン
    $("#new-key").on("click", function () {
        $("#key, #memo, #tags, #save").removeClass("hidden");
        $("#key").val("");
        $("#memo").val("");
        $("#tags").val("");
    });

    // 初期ロード時にリストを更新
    updateList();
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
