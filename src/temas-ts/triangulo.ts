import { Distancia } from "./distanciaentredospuntos";

class Triangulo extends Distancia{
    protected x3: number;
    protected y3: number;
    constructor(x1:number,y1:number,x2:number,y2:number,x3:number,y3:number) {
        super(x1,y1,x2,y2)
        this.x3 =x3;
        this.y3 = y3;
    }

    public estriangulo() {
        const distancia1 = this.dospuntos(this.x1, this.y1, this.x2, this.y2);        
        const distancia2 = this.dospuntos(this.x2, this.y2, this.x3, this.y3);
        const distancia3 = this.dospuntos(this.x3, this.y3, this.x1, this.y1);
        
        if ((distancia1 + distancia2) > distancia3 &&
            (distancia2 + distancia3) > distancia2 &&
            (distancia2 + distancia3) > distancia1)
             console.log("Es un triángulo");
        else
             console.log("No es un triángulo");
    } 
}
const trian = new Triangulo(-4,-3,2,-3,1,-3)
trian.estriangulo()

