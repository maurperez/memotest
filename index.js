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
			setTimeout(function(){
				cartas_boca_arriba.forEach(function(e){
					e.src="imagenes/color-fondo.jpg"
					e.style="pointer-events:none"
					e.alt="carta-sacada"
				})
				una_ya_dada_vuelta=0
			},1000)	

			

		}else{
			setTimeout(function(){
				cartas_boca_arriba.forEach(function(e){
					e.src="imagenes/Fondo.jpg"
					e.alt="parte-trasera"
				})
				una_ya_dada_vuelta=0
			},1000)
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
		e.style="pointer-events:''"
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

//Imagenes.onclick
html_img[0].onclick=function(){
	if(permitir_dar_vuelta(html_img[0])){
		html_img[0].src=frutas_desordenadas[0]
		html_img[0].alt="fruta"

		carta_dada_vuelta()
	}


}

html_img[1].onclick=function(){
	if(permitir_dar_vuelta(html_img[1])){
		html_img[1].src=frutas_desordenadas[1]
		html_img[1].alt="fruta"

		carta_dada_vuelta()
	}

	
}

html_img[2].onclick=function(){
	if(permitir_dar_vuelta(html_img[2])){
		html_img[2].src=frutas_desordenadas[2]
		html_img[2].alt="fruta"

		carta_dada_vuelta()
	}
}

html_img[3].onclick=function(){
	if(permitir_dar_vuelta(html_img[3])){
		html_img[3].src=frutas_desordenadas[3]
		html_img[3].alt="fruta"

		carta_dada_vuelta()
	}
}	


html_img[4].onclick=function(){
	if(permitir_dar_vuelta(html_img[4])){
		html_img[4].src=frutas_desordenadas[4]
		html_img[4].alt="fruta"

		carta_dada_vuelta()
	}
}

html_img[5].onclick=function(){
	if(permitir_dar_vuelta(html_img[5])){
		html_img[5].src=frutas_desordenadas[5]
		html_img[5].alt="fruta"

		carta_dada_vuelta()
	}
}

html_img[6].onclick=function(){
	if(permitir_dar_vuelta(html_img[6])){
		html_img[6].src=frutas_desordenadas[6]
		html_img[6].alt="fruta"

		carta_dada_vuelta()
	}
}

html_img[7].onclick=function(){
	if(permitir_dar_vuelta(html_img[7])){
		html_img[7].src=frutas_desordenadas[7]
		html_img[7].alt="fruta"

		carta_dada_vuelta()
	}
}

html_img[8].onclick=function(){
	if(permitir_dar_vuelta(html_img[8])){
		html_img[8].src=frutas_desordenadas[8]
		html_img[8].alt="fruta"

		carta_dada_vuelta()
	}
}

html_img[9].onclick=function(){
	if(permitir_dar_vuelta(html_img[9])){
		html_img[9].src=frutas_desordenadas[9]
		html_img[9].alt="fruta"

		carta_dada_vuelta()
	}
}

html_img[10].onclick=function(){
	if(permitir_dar_vuelta(html_img[10])){
		html_img[10].src=frutas_desordenadas[10]
		html_img[10].alt="fruta"

		carta_dada_vuelta()
	}
}

html_img[11].onclick=function(){
	if(permitir_dar_vuelta(html_img[11])){
		html_img[11].src=frutas_desordenadas[11]
		html_img[11].alt="fruta"

		carta_dada_vuelta()
	}
}

html_img[12].onclick=function(){
	if(permitir_dar_vuelta(html_img[12])){
		html_img[12].src=frutas_desordenadas[12]
		html_img[12].alt="fruta"

		carta_dada_vuelta()
	}
}

html_img[13].onclick=function(){
	if(permitir_dar_vuelta(html_img[13])){
		html_img[13].src=frutas_desordenadas[13]
		html_img[13].alt="fruta"

		carta_dada_vuelta()
	}
}

html_img[14].onclick=function(){
	if(permitir_dar_vuelta(html_img[14])){
		html_img[14].src=frutas_desordenadas[14]
		html_img[14].alt="fruta"

		carta_dada_vuelta()
	}
}

html_img[15].onclick=function(){
	if(permitir_dar_vuelta(html_img[15])){
		html_img[15].src=frutas_desordenadas[15]
		html_img[15].alt="fruta"

		carta_dada_vuelta()
	}
}
