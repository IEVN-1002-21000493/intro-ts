//Funciones

function suma(){
    var  num1 = 6;
    var  num2 = 6;
    var resultao = num1+num2;
    console.log(`El resultao es: ${resultao}`);
}

function restar(a:number,b:number):number{
    return a-b;
}

const res=restar(10,3);
console.log(res);

interface Mascota{
    nombre:string
    edad: number
    mostrarEDAD:()=>void;
}
function calcular(mascota:Mascota,x:number):void{
    mascota.edad += x;
    console.log(mascota);
    console.log(mascota.mostrarEDAD());
    
}

const nuevaMascota:Mascota={
    nombre: "Kiau",
    edad: 5,
    mostrarEDAD()
    {
        console.log(`La edad de ${nuevaMascota.nombre} es ${this.edad}`);    
    }
}
calcular(nuevaMascota,6);