function comissao3(tvendas) {
    result = tvendas * 3 / 100
    return result

}

function comissao5(tvendas) {
    result = tvendas * 5 / 100
    return result
}

function calculateSalary(tvendas, salariofixo) {
    let totalSalary = 0;


    if (comissao3(tvendas) <= 1200) {
        totalSalary = comissao3(tvendas) + salariofixo
        return (totalSalary)

    } else {
        totalSalary = salariofixo
        sobra = tvendas - 40000
        totalSalary += comissao5(sobra) + 1200
        return (totalSalary)
    }
}
function cashMachine(Valordesaque, salariofixo, tvendas) {
    let salario = calculateSalary(tvendas, salariofixo)
    let restante = 0
    const saida = []
    const quantidade200 = []
    const quantidade100 = []
    const quantidade50 = []
    const quantidade20 = []
    const quantidade10 = []
    const quantidade5 = []
    const quantidade2 = []
    
    let valor = Valordesaque
    while (valor >= 200) {
        quantidade200.push("n200")
        valor -= 200
    }
    if (quantidade200.length >= 1) {
        saida.push((quantidade200.length) + "x 200R$")
    }
    while (valor >= 100) {
        quantidade100.push("n100")
        valor -= 100
    }
    if (quantidade100.length >= 1) {
        saida.push((quantidade100.length) + "x 100R$")
    }
    while (valor >= 50) {
        quantidade50.push("50")
        valor -= 50
    }
    if (quantidade50.length >= 1) {

        saida.push((quantidade50.length) + "x 50R$")
    }
    while(valor>=20){
        quantidade20.push("20")
        valor -= 20
    }
    if (quantidade20.length >= 1) {

        saida.push((quantidade20.length) + "x 20R$")
    }
    while(valor>=10){
        quantidade10.push("10")
        valor -= 10
    }
    if (quantidade10.length >= 1) {

        saida.push((quantidade10.length) + "x 10R$")
    }
    while(valor>=5){
        quantidade5.push("5")
        valor -= 5
    }
    if (quantidade5.length >= 1) {

        saida.push((quantidade5.length) + "x 5R$")
    }
    while(valor>=2){
        quantidade2.push("2")
        valor -= 2
    }
    if (quantidade2.length >= 1) {

        saida.push((quantidade2.length) + "x 2R$")
    }
    saldo = (salario-Valordesaque+valor)
    if(valor===1){
        console.log(` ${valor}R$ foi estornado.`)
    }
    

    return (`Valor do saque: ${Valordesaque}R$ Cedulas: ${saida.toString()} Saldo:${saldo}R$`)
}
function calculateStock(Qatual,Qmax,Qmin){
    let qmedia= (Qmax+ Qmin/2)
    if(Qatual>=qmedia){
        return ("Não efetuar compra")
    }
    else{
        return ("Efetuar compra")
    }
}
function calculateAge(ano,mes,dia){
    let tempo = 0
    
    let agora = new Date();
    let nascimento = new Date(ano,mes,dia)
    tempo = (agora-nascimento)
    let anos = (tempo/31536000000)
    let meses = (tempo/ 2629800000)
    let dias = (tempo/86400000)
    let semanas = (tempo/604800000)


    

   
    return (`A idade da pessoa em ; Anos: ${Math.trunc(anos)} Meses:${Math.trunc(meses)} Dias: ${Math.trunc(dias)} Semanas: ${Math.trunc(semanas)}`)

}
function getDiagonal(valor1,valor2) {
    matrix = []
    result = 1
    let j = 0
    for(let i = 1;i<=(valor1*valor2);i++){
        
        matrix.push(i)
        if(j===(valor1+1)){
            result = (result*i) 
            j=0
        }
        j++
    }
    return (result)

}

