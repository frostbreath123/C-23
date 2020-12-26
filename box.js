class Box{

    constructor(x,y,width,height){
          
        var options={
          isStatic:true
          }

           this.box=Bodies.rectangle(x,y,width.height,options)
           this.width=width;
           this.height=height
          World.add(world,this.box); 
          }
         
           display(){
        
            push();
            rectMode(CENTER);
            fill("red");
            rect(width/2, height-34,200,17)
            rect(300,645,20,60)
            rect(500,645,20,60)
            pop();
            
           }
             
            
        }
    

    
