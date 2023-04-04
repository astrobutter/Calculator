for( var i=0 ; i < document.querySelectorAll("button").length ; ++i){
    document.querySelectorAll("button")[i].addEventListener("click", 
    function(){
        var input=document.querySelector(".input-display").innerHTML;

        if( this.innerHTML === "&lt;"){
            input=input.slice(0, input.length-1);
            document.querySelector(".input-display").innerHTML=input;
        }

        else if( this.innerHTML === '='){
            var ans=eval(input);
            document.querySelector(".result-display").innerHTML=ans;
        }

        else if( this.innerHTML === 'c' ){
            document.querySelector(".input-display").innerHTML=null;
        }

        else{
            input=input+this.innerHTML;
            document.querySelector(".input-display").innerHTML=input;
        }
    });
}

