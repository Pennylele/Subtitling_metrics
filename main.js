document.getElementById("onClick").addEventListener("click",                             
function(){
var base = document.getElementById("videolength").value
var target = document.getElementById("targetlanguage").value
document.getElementById("transcription").value = base*15; /* 15 minutes per min*/
document.getElementById("SRT").value = base*10; /* 10 minutes per min */
document.getElementById("ICR").value = base*5*target; /* 5 minutes per min */
document.getElementById("LQA").value = base*10*target; /* 10 minutes per min */
document.getElementById("wc").value = base*150; /* 150 words per min */
document.getElementById("total").value = base*25 + base*15*target
document.getElementById("totalHour").value = (base*25+base*15*target)/60;
})