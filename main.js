var SpeechRecognition=window.webkitSpeechRecognition;
var consola=new SpeechRecognition();
function goma(){
    document.getElementById("tronco").innerHTML="";
    consola.start();

}
consola.onresult=function(mouse){
    console.log(mouse);
    luck=mouse.results[0][0].transcript;
    document.getElementById("tronco").innerHTML=luck;
    if (luck=="toma mi foto kawaii"){
        check();
    }
    }
    function check(){
        var bro=window.SpeechSynthesis;
        only="toma tu foto kawaii en 3,, 2,, 1,0";
        var cono=new SpeechSynthesisUtterance(only);
        bro.speak(cono);
    }
