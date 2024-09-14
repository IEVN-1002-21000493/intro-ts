export class Distancia {
    protected x1: number;
    protected y1: number;
    protected x2: number;
    protected y2: number;
    protected resultado1: number = 0;
    constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;

    }

    public dospuntos(x1:number,y1:number,x2:number,y2:number) {
        let xp1 = x2 - x1;
        xp1 = xp1 * xp1;
        let yp1 = y2 - y1;
        yp1 = yp1 * yp1;
        this.resultado1 = Math.sqrt(xp1 + yp1);
        return this.resultado1
    }
    public imprimir(){
        console.log(`La distancia es: ${this.resultado1}`);
    }
}
const distan = new Distancia(-4,-3,2,5);
distan.dospuntos(-4,-3,2,5)
distan.imprimir()

