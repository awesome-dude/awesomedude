function dude(){
   document.body.innerHTML = ""
   var canv=document.createElement("canvas");
   canv.setAttribute("id", "q");
   document.body.appendChild(canv);
   
   var s=window.screen;
   var width = q.width=s.width;
   var height = q.height = s.height;
   var yPositions = Array(300).join(0).split('');
   var ctx=q.getContext('2d');
    
   var draw = function () {
     canv.style.width = window.width
     canv.style.height = window.height
     ctx.fillStyle='rgba(0,0,0,.05)';
     ctx.fillRect(0,0,width,height);
     ctx.fillStyle='#0F0';
     ctx.font = '10pt Georgia';
     yPositions.map(function(y, index){
       text = String.fromCharCode(1e2+Math.random()*33);
       x = (index * 10)+10;
       q.getContext('2d').fillText(text, x, y);
    if(y > 100 + Math.random()*1e4)
    {
      yPositions[index]=0;
    }
    else
    {
         yPositions[index] = y + 10;
    }
     });
   };
   
   RunMatrix();
   function RunMatrix()
   {
   if(typeof Game_Interval != "undefined") clearInterval(Game_Interval);
    Game_Interval = setInterval(draw, 33);
   }
   function StopMatrix()
   {
   clearInterval(Game_Interval);
   }
   //setInterval(draw, 33);
   $("button#pause").click(function(){
   StopMatrix();});
   $("button#play").click(function(){RunMatrix();});
   setInterval(Matrix,30);
}
