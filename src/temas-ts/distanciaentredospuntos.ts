export class Distancia {
    protected x1: number;
    protected x2: number;
    protected y1: number;
    protected y2: number;
    protected resultado: number = 0;

    constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
    }

    public dospuntos() {
        let xp = this.x2 - this.x1;
        xp = xp * xp;
        let yp = this.y2 - this.y1;
        yp = yp * yp;
        this.resultado = Math.sqrt(xp + yp);
        return this.resultado
    }

    imprimir() {
        console.log(`La distancia entre los puntos es: ${this.resultado}`);
    }
}
