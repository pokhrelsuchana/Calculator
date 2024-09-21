function display(val){
    document.getElementById('result').value+=val  //hamle yesma get element chai id bata leko jun html ma thyo.
    return val
}

function solve(){
    let x=document.getElementById('result').value
    let y=eval(x) //string linxa ani mathematical operation lai eval garxa.
    document.getElementById('result').value=y
    return y
}

function clearScreen(){
    document.getElementById('result').value = "";
}
