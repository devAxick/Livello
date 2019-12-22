$(document).ready(function () {
    toggleList($('.size-list'));
});

function toggleList(list) {
    $(list[0].children).map((index, item)=>{
        if(index != 0){
            $(item).css('top', `${$(item).height() * (index)}px`)
        }
    });
}