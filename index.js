var rslt = document.getElementById("input")
function erease(){
rslt.value= "";
}
function display(value){
    rslt.value += value
}
function result(){
    try {
    var r = rslt.value
    rslt.value=eval(r)}
    catch {
        alert("erreur dans la saisie ")
    }
}
function del(){
    var r = rslt.value
    rslt.value= r.slice(0,r.length-1)
}
document.body.addEventListener('keypress',function(e){
    var keycode = e.keyCode;
   if(keycode==13){
         result()
    }
})