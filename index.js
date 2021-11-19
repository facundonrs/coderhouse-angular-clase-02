var Cajero = /** @class */ (function () {
    function Cajero(usuario) {
        this.saldo = usuario.saldo;
        this.cuenta = usuario.cuenta;
    }
    Cajero.prototype.extraccion = function (montoAExtraer) {
        this.saldo = this.saldo - montoAExtraer;
    };
    Cajero.prototype.deposito = function (montoADepositar) {
        this.saldo = this.saldo + montoADepositar;
    };
    Cajero.prototype.consultarCuenta = function () {
        return this.cuenta;
    };
    Cajero.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return Cajero;
}());
var usuario = {
    nombre: 'Facundo Nahuel',
    apellido: 'Rojas Serrano',
    cuenta: 350313000045687706,
    saldo: 50000
};
var cajero = new Cajero(usuario);
var dineroARetirar = 5500;
function realizarOperacion() {
    console.log("Mi cuenta es: " + cajero.consultarCuenta());
    console.log("Mi saldo es: " + cajero.consultarSaldo());
    console.log("Retiro " + dineroARetirar);
    cajero.extraccion(dineroARetirar);
    console.log("Ahora mi saldo es: " + cajero.consultarSaldo());
}
realizarOperacion();
