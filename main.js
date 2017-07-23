document.getElementById("onClick").addEventListener("click",                             
function(){
var base = document.getElementById("videolength").value
document.getElementById("transcription").value = base*15; /* 15 minutes per min*/
document.getElementById("SRT").value = base*10; /* 10 minutes per min */
document.getElementById("ICR").value = base*5; /* 5 minutes per min */
document.getElementById("LQA").value = base*5; /* 5 minutes per min */
document.getElementById("total").value = base*35;
document.getElementById("totalHour").value = base*35/60;
})