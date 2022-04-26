let producto
let tipoProdcuto
let seguir = true
let condicion
let Precio = 0
let total = 0


while(seguir){
    producto = prompt("Ingrese que producto decea comprar.(Bebidas - Golocinas - Snacks)").toLowerCase()
    while ((producto!="bebidas") && (producto!="golocinas") && (producto!="snacks")){
        alert("Error ingrese un producto que sea correcto.")
        producto = prompt("Ingrese que producto decea comprar.(Bebidas - Golocinas - Snacks)").toLowerCase()
    }
    switch(producto){
        case "bebidas":
            tipoProdcuto = prompt("Elija que tipo de Bebida decea comprar. (Agua - CocaCola - Pepsi - 7up - Mirinda - Speed)").toLowerCase()
            while((tipoProdcuto!="agua")&&(tipoProdcuto!="cocacola")&&(tipoProdcuto!="pepsi")&&(tipoProdcuto!="7up")&&(tipoProdcuto!="mirinda")&&(tipoProdcuto!="speed")){
                alert("Error ingrese una Bebida correcta")
                tipoProdcuto = prompt("Elija que tipo de Bebida decea comprar. (Agua - CocaCola - Pepsi - 7up - Mirinda - Speed)").toLowerCase()
            }
            switch (tipoProdcuto){
                case "agua":
                    alert("Eligió Agua - Precio: $60")
                    sumar(60)
                    break;
                case "cocacola":
                    alert("Eligió Coca-Cola - Precio: $130")
                    sumar(130)
                    break;
                case "pepsi":
                    alert("Eligió Pepsi - Precio: $130")
                    sumar(130)
                    break;
                case "7up":
                    alert("Eligió 7up - Precio: $120")
                    sumar(120)
                    break;
                case "mirinda":
                    alert("Eligió Mirinda - Precio: $110")
                    sumar(110)
                    break;
                case "speed":
                    alert("Eligió Speed - Precio: $150")
                    sumar(150)
                    break;
            }
            break;
        case "golocinas":
            tipoProdcuto = prompt("Elija que tipo de Golocina decea comprar. (Gomitas - Caramelos - Alfajor - Chupetin - Chicle)").toLowerCase()
            while((tipoProdcuto!="gomitas")&&(tipoProdcuto!="caramelos")&&(tipoProdcuto!="alfajor")&&(tipoProdcuto!="chupetin")&&(tipoProdcuto!="chicle")){
                alert("Error ingrese una Golocina correcta")
                tipoProdcuto = prompt("Elija que tipo de Golocina decea comprar. (Gomitas - Caramelos - Alfajor - Chupetin - Chicle)").toLowerCase()
            }
            switch (tipoProdcuto){
                case "gomitas":
                    alert("Eligió Gomitas - Precio: $60")
                    sumar(60)
                    break;
                case "caramelos":
                    alert("Eligió Caramelos - Precio: $60")
                    sumar(60)
                    break;
                case "alfajor":
                    alert("Eligió Alfajor - Precio: $100")
                    sumar(100)
                    break;
                case "chupetin":
                    alert("Eligió Chupetin - Precio: $40")
                    sumar(40)
                    break;
                case "chicle":
                    alert("Eligió Chicle - Precio: $60")
                    sumar(60)
                    break;
            }
            break;
        case "snacks":
            tipoProdcuto = prompt("Elija que tipo de Snacks decea comprar. (PapasLays - Doritos - 3D - Cheetos - Pringles)").toLowerCase()
            while((tipoProdcuto!="papaslays")&&(tipoProdcuto!="doritos")&&(tipoProdcuto!="3d")&&(tipoProdcuto!="cheetos")&&(tipoProdcuto!="pringles")){
                alert("Error ingrese un Snack correcto")
                tipoProdcuto = prompt("Elija que tipo de Snacks decea comprar. (PapasLays - Doritos - 3D - Cheetos - Pringles)").toLowerCase()
            }
            switch(tipoProdcuto){
                case"papaslays":
                    alert("Eligió PapasLays - Precio: $100")
                    sumar(100)
                    break;
                case"doritos":
                    alert("Eligió Doritos - Precio: $120")
                    sumar(120)
                    break;
                case"3d":
                    alert("Eligió 3D - Precio: $100")
                    sumar(100)
                    break;
                case"cheetos":
                    alert("Eligió Cheetos - Precio: $110")
                    sumar(110)
                    break;
                case"pringles":
                    alert("Eligió Pringles - Precio: $400")
                    sumar(400)
                    break;
            }
            break;
    }
    let condicion = prompt("¿Desea seguir comprando? Si/No").toLowerCase()
        if (condicion == "no"){
            seguir = false;
            break
        }
}
//funcion de sumar
function sumar(precio){
    total += precio;
    return total
}

alert(`El total de su compra es de $${total}`)