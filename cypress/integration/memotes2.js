// Test completos del programa con cypress
/// <reference types="Cypress" />

const URL="192.168.1.37:8080"
const NUMERO_CUADROS=16
let diccionario_cartas = obtenerDiccionarioCartasVacio()



context("memotest", () => {

	before(() => {

		
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

    describe("Resuelve el juego 1ra vez", () => {
        it("obteniendo datos", ()=>{

            cy.get("#btn-comenzar").click()
            
            cy.get("img").then(imagenes => {

                imagenes.each((i,e) => {
                    cy.get(e).click().then(carta => {
        
                        agrupar_cartas(carta.selector)
                    })
                })
            })    

        })

        it("resolviendo", ()=>{
            Object.values(diccionario_cartas).forEach(e => {					
                cy.get(e[0]).click()
                cy.get(e[1]).click()
            })

            cy.get("#cuenta-regresiva").should('have.text','Felicitaciones, has ganado!').then(()=>{
                
                diccionario_cartas=obtenerDiccionarioCartasVacio()
                
                
            })
        })


    })

    describe('Reiniciando y resolviendo de nuevo', ()=>{
        it("obteniendo datos", ()=>{

            cy.get("#btn-comenzar").click()
            
            cy.get("img").then(imagenes => {

                imagenes.each((i,e) => {
                    cy.get(e).click().then(carta => {
        
                        agrupar_cartas(carta.selector)
                    })
                })
            })    

        })

        
        it('resolviendo', ()=>{
            Object.values(diccionario_cartas).forEach(e => {					
                cy.get(e[0]).click()
                cy.get(e[1]).click()
            })

            cy.get("#cuenta-regresiva").should('have.text','Felicitaciones, has ganado!')

        })
    })


})

function agrupar_cartas(e){
    

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
	
}


function obtenerDiccionarioCartasVacio(){
    const diccionarioCartasOriginal={
        banana:[],
        manzana:[],
        naranja:[],
        uva:[],
        anana:[],
        frutilla:[],
        pera:[],
        sandia:[],
    }

    return Object.assign({},diccionarioCartasOriginal) //Clonacion del diccionario de cartas original
}

