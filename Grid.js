class Tabuleiro{

    constructor(linhas, colunas, canvas){
        this.canvas = canvas;
        this.linhas = linhas;
        this.colunas = colunas; 
        this.w = this.canvas.width/this.colunas;
        this.h = this.canvas.height/this.linhas;

        this.grid = [];
    }

    criaGrid(){
           this.grid = [
            [1,1,0,0,0,0,1,1],
            [1,1,0,0,0,0,1,1],
            [1,1,0,0,0,0,1,1],
            [1,1,0,0,0,0,1,1],
            [1,1,0,0,0,0,1,1],
            [1,1,0,0,0,0,1,1],
            [1,1,0,0,0,0,1,1],
            [1,1,0,0,0,0,1,1],
            ]
    }

    desenhar(ctx){
        ctx.strokeStyle = "black";
        
        for(var i=0; i<this.colunas; i++)
        {
            for(var j=0; j<this.linhas; j++)
            {
                if(!((i%2===0 && j%2===0)||(i%2!=0 && j%2!=0)))
                {
                    ctx.fillStyle = "black";
                    ctx.fillRect(i*this.w,j*this.h,this.w,this.h);
                }

                if(this.grid[i][j]===0)
                ctx.strokeStyle = "black";
                else
                ctx.strokeStyle = "red";

                ctx.strokeRect(i*this.w,j*this.h,this.w,this.h);


            }
        }   
    }

    mudaStatusCasa(letra,numero,status){
        this.grid[letra][numero] = status;
    }

    
}