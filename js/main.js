$(document).ready(function () {
    toggleList($('.size-list'));
});

function toggleList(list) {
    list.map((index)=>{
        $(list[index].children).map((index, item)=>{
            if(index != 0){
                $(item).css('top', `${$(item).height() * (index)}px`)
            }
        });
    });
}