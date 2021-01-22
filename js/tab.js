// tab
function tab(name1, name2) {
    $(name1).click(function () {
        console.log(0)
        $(this).addClass('z-selected');
        $(this).siblings().removeClass('z-selected');
        $(name2).eq($(this).index()).show();
        $(name2).eq($(this).index()).siblings().hide();
    })
}