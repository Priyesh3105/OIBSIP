let screen= document.getElementById('screen');
buttons= document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText ;
        console.log('button text is', buttonText);
            if(buttonText=='x'){
                buttonText='*';
                screenValue += buttonText;
                screen.value = screenValue;
            }
             else if(buttonText=='√'){
                    buttonText='**0.5';
                    screenValue += buttonText;
                    screen.value = screenValue;
            }
            else if (buttonText == 'clear') {
                screenValue =' ';
                screen.value = screenValue;
            }
            else if (buttonText=='ans'){
                screen.value = eval(screenValue);
            }
            else if (buttonText=='enter'){
                screen.value = eval(screenValue);
            }
            else if  ( buttonText == 'del') {
                screenValue = screenValue.slice(0,-1);
                screen.value=screenValue;
            }
            else if  ( buttonText == '%') {
                buttonText='*0.01';
                screenValue+=buttonText;
                screen.value=screenValue;
            }
            else {
                screenValue += buttonText;
                screen.value = screenValue
            }
    })
}