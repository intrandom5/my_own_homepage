const view_button = document.getElementById("recommend-part");

function view_content(){
    let contents = document.getElementsByClassName("recommend-contents");
    for (var i = 0; i< contents.length; i++){
        let status = contents[i].style.display;
        if (status==='none'){
            contents[i].style.display = 'flex';
        } else {
            contents[i].style.display = 'none';
        }
    }
}

if(view_button){
    view_button.addEventListener("click", view_content);
}