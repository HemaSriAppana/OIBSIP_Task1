
    let outscr=document.getElementById("outpt");
    function display(num){
        outscr.value+=num; 
    }
    function clr()
    {
        outscr.value="";
    }
    function calci(){
        try{
            outscr.value=eval(outscr.value);
        }
        catch(err){
        outscr.value="Invalid Syntax";
        }
    }
    
    function del(){
        outscr.value=outscr.value.slice(0,-1);
    }