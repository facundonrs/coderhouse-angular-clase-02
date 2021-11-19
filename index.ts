
interface Usuario {
    nombre:string;
    apellido:string;
    cuenta:number;
    saldo:number;
}

class Cajero {

    private saldo:number;
    private cuenta:number;

    constructor(usuario: Usuario){
        this.saldo = usuario.saldo;
        this.cuenta = usuario.cuenta;
    }

    public extraccion(montoAExtraer:number): void{
        this.saldo = this.saldo - montoAExtraer;
    }

    public deposito(montoADepositar:number):void{
        this.saldo = this.saldo + montoADepositar;
    }

    public consultarCuenta():number{
        return this.cuenta;
    }

    public consultarSaldo():number{
        return this.saldo;
    }
}

const usuario:Usuario = {
    nombre: 'Facundo Nahuel',
    apellido: 'Rojas Serrano',
    cuenta: 350313000045687706,
    saldo: 50000
}

const cajero = new Cajero(usuario); 
const dineroARetirar: number = 5500;


function realizarOperacion(): void{
    console.log(`Mi cuenta es: ${cajero.consultarCuenta()}`);
    console.log(`Mi saldo es: ${cajero.consultarSaldo()}`);
    console.log(`Retiro ${dineroARetirar}`);
    cajero.extraccion(dineroARetirar);
    console.log(`Ahora mi saldo es: ${cajero.consultarSaldo()}`);
}

realizarOperacion();