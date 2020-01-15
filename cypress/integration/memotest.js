// Test completos del programa con cypress
/// <reference types="Cypress" />

const URL="192.168.1.37:8080"
const NUMERO_CUADROS=16

context("memotest", () => {

	before(() => {
		cy.viewport(1280,920)
		cy.visit(URL)
	})


	it("Verificando que haya un tablero con cartas", () => {
		cy.get("#tablero").find("img").should("have.length", NUMERO_CUADROS)
	})

	it("Verificando la aleatoriedad de los cuadros",() => {
		let primera_vuelta=[]
		let segunda_vuelta=[]

		cy.get("#btn-comenzar").click()

		cy.get("img").then(imagenes => {
			imagenes.each((i,e) => {
				e.click()
				primera_vuelta.push(e.src)
			})
		})

		cy.visit(URL)

		cy.get("img").then(imagenes => {
			imagenes.each((i,e) => {
				e.click()
				segunda_vuelta.push(e.src)
			})
		})

		cy.wrap(primera_vuelta).should('not.deep.equal', segunda_vuelta)
	})

	it("Resolucion del juego", () => {
		cy.get("#btn-comenzar").click()

		cy.get("img").then(imagenes => {
			let fruta_img=[]

			imagenes.each((i,e) => {
				e.click()
				fruta_img.push(e)
			})
			console.log(fruta_img)

			const dicCartas=agrupar_cartas(fruta_img)

			for(const fruta in dicCartas){					//Este funciona funciona pero no deja ver nada del proceso
				(dicCartas[fruta]).forEach(e => {
					e.click()
				})

			}

			dicCartas.forEach(e => {						//dicCartas no es una funcion
				cy.get(e[0]).click()
				cy.get(e[1]).click()
			})




			

		})
	
	})
})






function agrupar_cartas(cartas){
	let diccionario_cartas={
		banana:[],
		manzana:[],
		naranja:[],
		uva:[],
		anana:[],
		frutilla:[],
		pera:[],
		sandia:[],
	}


	cartas.forEach(e => {
		if(((e.src).search("banana"))!== -1){
			diccionario_cartas.banana.push(e)
		}else if(((e.src).search("manzana"))!== -1){
			diccionario_cartas.manzana.push(e)
		}else if(((e.src).search("naranja"))!== -1){
			diccionario_cartas.naranja.push(e)
		}else if(((e.src).search("uva"))!== -1){
			diccionario_cartas.uva.push(e)
		}else if(((e.src).search("anana"))!== -1){
			diccionario_cartas.anana.push(e)
		}else if(((e.src).search("frutilla"))!== -1){
			diccionario_cartas.frutilla.push(e)
		}else if(((e.src).search("pera"))!== -1){
			diccionario_cartas.pera.push(e)
		}else if(((e.src).search("sandia"))!== -1){
			diccionario_cartas.sandia.push(e)
		}
	})

	console.log(diccionario_cartas)
	
	return diccionario_cartas
}
