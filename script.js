function openAlert() {
    // 下の〇〇の部分を書き換えてみましょう!
    alert('こんにちは!このWebは、〇〇によって作られました!');
}

$(function(){
    $(".toggle-parent").on("click", function() {
        console.log("jQuery 起動");
        $('#toggle').slideToggle(500);
    });
});
