const array_imagenes=["imagenes/Anana.jpg",
	"imagenes/Anana.jpg",
	"imagenes/Banana.jpeg",
	"imagenes/Banana.jpeg",
	"imagenes/Frutilla.jpg",
	"imagenes/Frutilla.jpg",
	"imagenes/Manzana.jpg",
	"imagenes/Manzana.jpg",
	"imagenes/Naranja.jpg",
	"imagenes/Naranja.jpg",
	"imagenes/Pera.jpg",
	"imagenes/Pera.jpg",
	"imagenes/Sandia.jpg",
	"imagenes/Sandia.jpg",
	"imagenes/Uva.jpg",
	"imagenes/Uva.jpg"
	]
const html_img=document.querySelectorAll("img")

//-------------------------------------------------
function desordenar_array(array){
	let desordenado=array.sort(
		function(){
			return Math.random()-0.5
		})
	return desordenado
}

function desordenar(){
	const img_desordenado=desordenar_array(array_imagenes)
}

//--------------------------------------------------

document.querySelector("#btn-comenzar").onclick=function(){
	let tiempo_contador=60
	desordenar(array_imagenes)

	//Manejando contador y boton comenzar
	document.querySelector("#btn-comenzar").style.display="none"
	document.querySelector("#cuenta-regresiva").textContent=tiempo_contador
	document.querySelector("#cuenta-regresiva").style.display="inline"
	
	let contador= setInterval(function(){
		tiempo_contador--
		document.querySelector("#cuenta-regresiva").textContent=tiempo_contador
		if(tiempo_contador===0){
			document.querySelector("#cuenta-regresiva").style.display="none"
			document.querySelector("#btn-comenzar").style.display="inline"
			clearInterval(contador)
		}
	},1000)
}

//----------------------------------------------------
