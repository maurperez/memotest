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

	for (let i=1;i<=html_img.length;i++){
		html_img[i-1].src=img_desordenado[i-1]
	}
}

//--------------------------------------------------

document.querySelector("#btn-comenzar").onclick=function(){
	const tiempo_contador=60

	desordenar(array_imagenes)
	document.querySelector("#btn-comenzar").style.display="none"

	document.querySelector("#cuenta-regresiva").style.display="inline"
	document.querySelector("#cuenta-regresiva").textContent=tiempo_contador



}
