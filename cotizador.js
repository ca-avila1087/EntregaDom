//el cliente va a tener un descuento dependiendo de la cantidad de horas


/*  casos si cantidad horas:
    <30             -->50 usd hora
    30<x<100        -->40 usd hora
    >100            -->30 usd hora
*/



const calcularTotales = (pago, horasTrabajadas) => {
    if (horasTrabajadas <= 30) {
        let totalPagoExtra = 0;
        let totalPago = 50 * pago * horasTrabajadas;
        document.querySelector(
            "#resultado"
        ).innerHTML = `El total de pago es: ${totalPago} y el descuento es: ${totalPagoExtra}. El total a pagar es: ${
            totalPago + totalPagoExtra
        }`;
    } 

    else if (horasTrabajadas > 30 && horasTrabajadas <100) {
        let totalPagoExtra = horasTrabajadas * 10;
        let totalPago = 40 * pago * horasTrabajadas;
        document.querySelector(
            "#resultado"
        ).innerHTML = `El total de pago es: ${totalPago} y el descuento es: ${totalPagoExtra}. El total a pagar con descuencto es: ${
            totalPago - totalPagoExtra
        }`;
    } 
    
    else {
        let totalPagoExtra = horasTrabajadas * 20;
        let totalPago = 30 * pago * horasTrabajadas;
        document.querySelector(
            "#resultado"
        ).innerHTML = `El total de pago es: ${totalPago} y el descuento es: ${totalPagoExtra}. El total a pagar con descuencto es es: ${
            totalPago - totalPagoExtra
        }`;
    } 
};

document.querySelector("#pro_calc").addEventListener("click", (e) => {
    e.preventDefault();
    let horasTrabajadas = +document.querySelector("#horas_trabajadas").value;
    let pago = +document.querySelector("#precio_hora").value;
    calcularTotales(pago, horasTrabajadas);
});