let vietnamese = ["tôi","yêu","bạn","rất","nhiều"];
let english = ["i","love","you","so","much"];

function intoenglish() {
    let text = document.getElementById("intovi").value;
    for (let i = 0; i< vietnamese.length; i++){
        if(vietnamese[i] == text){
            document.getElementById("intoen").value = english[i];
            break;
        }else {
            document.getElementById("intoen").value = "Không tìm thấy";
        }
    }
}
function intovietnamese() {
    let text = document.getElementById("intoen").value;
    for (let i = 0; i< english.length; i++){
        if(english[i] == text){
            document.getElementById("intovi").value = vietnamese[i];
            break;
        }else {
            document.getElementById("intovi").value = "Not found";
        }
    }
}