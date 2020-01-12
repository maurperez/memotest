// Test completos del programa con cypress

const URL="192.168.1.37:8080"
const NUMERO_CUADROS=16
const array_imagenes_fortest=["imagenes/Anana.jpg",
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

const array_imagenes_fortest2=["imagenes/Anana.jpg",
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

context("memotest", () => {

	before(() => {
		cy.viewport(1280,920)
		cy.visit(URL)
	})


	it("Verificando que haya un tablero con cartas", () => {
		cy.get("#tablero").find("img").should("have.length", NUMERO_CUADROS)
	})

	it("Verificando la aleatoriedad de los cuadros",() => {
		cy.window().then(win => {
			let primera_vez = win.desordenar_array(array_imagenes_fortest)

			let segunda_vez = win.desordenar_array(array_imagenes_fortest2)

			expect(primera_vez).to.deep.not.equal(segunda_vez)
		})
	})

	it("Resolucion del juego", () => {
		cy.get("#btn-comenzar").click()
		let cuadros=[]
		cy.get("img").each((e)=>{
			cuadros.push(e)
		})

		cy.wrap(cuadros).each((e)=>{	//No puede lograr que haga los clicks despacio
			e.click()
			cy.wait(501)
		})
	})
})
