const array_imagenes=["imagenes/anana.jpg",
	"imagenes/anana.jpg",
	"imagenes/banana.jpeg",
	"imagenes/banana.jpeg",
	"imagenes/frutilla.jpg",
	"imagenes/frutilla.jpg",
	"imagenes/manzana.jpg",
	"imagenes/manzana.jpg",
	"imagenes/naranja.jpg",
	"imagenes/naranja.jpg",
	"imagenes/pera.jpg",
	"imagenes/pera.jpg",
	"imagenes/sandia.jpg",
	"imagenes/sandia.jpg",
	"imagenes/uva.jpg",
	"imagenes/uva.jpg"
	]
const html_img=document.querySelectorAll("img")
let una_ya_dada_vuelta=0
const btn_comenzar=document.querySelector("#btn-comenzar")
let frutas_desordenadas

//-------------------------------------------------
function desordenar_array(array){
	let desordenado=array.sort(
		function(){
			return Math.random()-0.5
		})
	return desordenado
}

function permitir_dar_vuelta(){
	if (una_ya_dada_vuelta<2 && btn_comenzar.style.display=="none") {
		return true
	}
}

function carta_dada_vuelta(){
	una_ya_dada_vuelta=0
	html_img.forEach(function(e){
		if(e.alt=="fruta"){ 
			una_ya_dada_vuelta++
		}
	})

	comparar_cartas()
}



function comparar_cartas(){
	let cartas_boca_arriba=[]

	if(una_ya_dada_vuelta===2){
		html_img.forEach(function(e){
			if(e.alt=="fruta"){
				cartas_boca_arriba.push(e)
			}
		})

		if (cartas_boca_arriba[0].src===cartas_boca_arriba[1].src) {
			cartas_boca_arriba.forEach(e => {
				e.alt="carta-sacada"
				setTimeout(()=>{
					e.src="imagenes/color-fondo.jpg"
					e.style="border-style: solid"
				},500)
			})
			una_ya_dada_vuelta=0	

			

		}else{
			cartas_boca_arriba.forEach(e => {
				e.alt="parte-trasera"
				setTimeout(() => {
					e.src="imagenes/Fondo.jpg"
					e.style="cursor:pointer"
				},500)
			})
			una_ya_dada_vuelta=0
		}
	}

	
}

//--------------------------------------------------

document.querySelector("#btn-comenzar").onclick=function(){
	let tiempo_contador=60

	//estableciendo todo a 0

	html_img.forEach(function(e){
		e.src="imagenes/Fondo.jpg"
		e.alt="parte-trasera"
		e.style="cursor: pointer;"

	})

	frutas_desordenadas=desordenar_array(array_imagenes)

	//Manejando contador y boton comenzar
	document.querySelector("#btn-comenzar").style.display="none"
	document.querySelector("#cuenta-regresiva").textContent=tiempo_contador
	document.querySelector("#cuenta-regresiva").style.display="inline"
	
	let contador= setInterval(function(){
		let cartas_volteadas_final=0
		tiempo_contador--
		document.querySelector("#cuenta-regresiva").textContent=tiempo_contador

		html_img.forEach(function(e){
			if(e.alt=="carta-sacada"){
				cartas_volteadas_final++
			}
		})

		if(cartas_volteadas_final===16){
			clearInterval(contador)
			document.querySelector("#cuenta-regresiva").textContent="Felicitaciones, has ganado!"
			document.querySelector("#btn-comenzar").innerText="REINICIAR"
			document.querySelector("#btn-comenzar").style.display="inline"
		}

		if(tiempo_contador===0 && cartas_volteadas_final<16){
			clearInterval(contador)
			document.querySelector("#cuenta-regresiva").textContent="Has perdido, vuelve a intentarlo nuevamente"
			document.querySelector("#btn-comenzar").innerText="REINICIAR"
			document.querySelector("#btn-comenzar").style.display="inline"
		}


	},1000)
}


//----------------------------------------------------


document.querySelector("#tablero").onclick=function(e){
	let $elemento=e.target
	
	const numero_carta=(Number($elemento.id)-1)

	if($elemento.className=="carta"){
		if (permitir_dar_vuelta($elemento)) {
			$elemento.src=frutas_desordenadas[numero_carta]
			$elemento.alt="fruta"
			$elemento.style="cursor: default"

			carta_dada_vuelta()
		}
	}
}
