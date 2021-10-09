/*
La funcion media pide los 10 números por consola y devuelve la media
*/
function pideDatos{
	//declaración variables
	let listaNumeros = [] 
	let indice=0;
	let numero=prompt("Introduce un número [Para terminar pulsa q]: ");//caracter de escape para salir del bucle
	
	 while(numero !== "q") {
	
	 if ((parseInt(numero) >=0) && (parseInt(numero) <=100)){
		listaNumeros[indice] = parseInt(numero)
		indice++
		sumaTotal+= parseInt(numero);
	}else
	{
		alert("Número fuera de rango, prueba con otro entre 0 y 100")
	}

	numero=prompt("Introduce un número entre 0 y 100 [Para terminar pulsa q]: ");
	return(listaNumeros)
}
}



/*
La funcion tomaDatos recoge los datos por teclado y los almacena en un array

function tomaDatos(){


    console.log("Bienvenido al programa de cálculo estadístico");
	var listaNumeros = [] //Aray que almacena la lista de números introducidos por teclado
  	var indice=0; //almacena el total de números introducidos
	var sumaTotal=0;//Almacena la suma total para posterior cálculo de la media
    var numero=prompt("Introduce un número [Para terminar pulsa q]: ");

  while(numero !== "q") {
	
	 if ((parseFloat(numero) >=0) && (parseFloat(numero) <=100)){
		listaNumeros[indice] = numero
		indice++
		sumaTotal+= parseFloat(numero);
	}else
	{
		alert("Número fuera de rango, prueba con otro entre 0 y 100")
	}

	numero=prompt("Introduce un número entre 0 y 100 [Para terminar pulsa q]: ");
}
    return(listaNumeros)
    console.log(listaNumeros)
	console.log(sumaTotal)
	console.log(indice)
	console.log(sumaTotal/indice)

}

