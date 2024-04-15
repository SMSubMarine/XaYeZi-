const elegirElemento = document.getElementById("elementos-tarjetas")
const contenedorAtaques = document.getElementById("ContenedorAtaques")

let ataquePlasmaRay
let ataqueLiquidDrop
let ataqueRadiationSpread

let botonAtaques = []

let victoriasJugador = 0
let victoriasEnemigo = 0

let mokepones = []
let ataques = []
let ataquesEnemigo = []
let htmlAEditar

class Mokepon {
    constructor(nombre, color, imagen, imagen2, flashcardContainer, flashcard, fcFront, fcBack, labelFront, labelBack, description, tipo) {
        this.nombre = nombre
        this.nombre2 = nombre.toLowerCase()
        this.imagen = imagen
        this.imagen2 = imagen2
        this.ataques = []
        this.flashcardContainer = flashcardContainer
        this.flashcard = flashcard
        this.fcFront = fcFront
        this.fcBack = fcBack
        this.labelFront = labelFront
        this.labelBack = labelBack
        this.description = description
        this.tipo = tipo
        this.x = 0
        this.y = 0
        this.ancho = 100
        this.alto = 100
        this.mapaFoto = new Image()
        this.mapaFoto.src = imagen
        this.velocidadX
        this.velocidadY
    }
}

class Ataque {
    constructor(nombre, img, id, symbol) {
        this.nombre = nombre
        this.img = img
        this.id = id
        this.symbol = symbol
    }

}

let protoblaster = new Mokepon('Protoblaster', '#FF4F5D', './CSS/Images/Protoblaster.png', 'protoblasterImg', 'ProtoblasterCardContainer', 'ProtoblasterFlashcard', 'ProtoblasterFlashcardFront', 'ProtoblasterFlashcardBack', 'protoblaster-label-front', 'protoblaster-label-back', `It's FLAWLESS if you want to pierce your enemies down!`, '⚛️')
let electroray = new Mokepon('Electroray', '#607BFF', './CSS/Images/Electroray.png', 'electrorayImg', 'ElectrorayCardContainer', 'ElectrorayFlashcard', 'ElectrorayFlashcardFront', 'ElectrorayFlashcardBack', 'electroray-label-front', 'electroray-label-back', `It's AWESOME if you want to deintegrate your adversaries!`, '⚛️')
let neutrocromo = new Mokepon('Neutrocromo', '#75FF68', './CSS/Images/Neutrocromo.png', 'neutrocromoImg','NeutrocromoCardContainer', 'NeutrocromoFlashcard', 'NeutrocromoFlashcardFront', 'NeutrocromoFlashcardBack', 'neutrocromo-label-front', 'neutrocromo-label-back', `It's PERFECT if you want both abilities!`, '⚛️')

let zeeSS = new Mokepon('ZeeSS', '#412B96', './CSS/Images/ZeeSS.png', 'ZeeSSImg', 'ZeeSSCardContainer', 'ZeeSSFlashcard', 'ZeeSSFlashcardFront', 'ZeeSSFlashcardBack', 'zeess-label-front', 'zeess-label-back', 'Awesome snake!', '🌱')
let pythos = new Mokepon('Pythos', '#607BFF', './CSS/Images/Pythos.png', 'PythosImg', 'PythosCardContainer', 'PythosFlashcard', 'PythosFlashcardFront', 'PythosFlashcardBack', 'pythos-label-front', 'pythos-label-back', 'Dual python!', '🌱')
let hache = new Mokepon('Hache', '#E6E9EB', './CSS/Images/Hache.png', 'HacheImg', 'HacheCardContainer', 'HacheFlashcard', 'HacheFlashcardFront', 'HacheFlashcardBack', 'hache-label-front', 'hache-label-back', 'stay in the front-end!', '🌱')

let bigBrother = new Mokepon('BigBrother', '#FF4F5D', './CSS/Images/BigBrother.png', 'BigBrotherImg', 'BigBrotherCardContainer', 'BigBrotherFlashcard', 'BigBrotherFlashcardFront', 'BigBrotherFlashcardBack', 'bigbrother-label-front', 'bigbrother-label-back', 'Big brother is watching you', '📕')
let capitainMontag = new Mokepon('CapitainMontag', '#FF4F5D', './CSS/Images/CapitainMontag.png', 'CapitainMontagImg', 'CapitainMontagCardContainer', 'CapitainMontagFlashcard', 'CapitainMontagFlashcardFront', 'CapitainMontagFlashcardBack', 'capitainmontag-label-front', 'capitainmontag-label-back', 'Fireman vs books', '📕')
let ford = new Mokepon('Ford', '#FF4F5D', './CSS/Images/Ford.png', 'FordImg', 'FordCardContainer', 'FordFlashcard', 'FordFlashcardFront', 'FordFlashcardBack', 'ford-label-front', 'ford-label-back', 'In ford we trust', '📕')

let plasmaRay = new Ataque('PlasmaRay', './CSS/Images/PlasmaRay.png', 'boton-plasma-ray', '⚡')
let liquidDrop = new Ataque('LiquidDrop', './CSS/Images/LiquidDrop.png', 'boton-liquid-drop', '💦')
let radiationSpread = new Ataque('Radiation Spread', './CSS/Images/RadiationSpread.png', 'boton-radiation-spread', '☢️')

let botones = []
let ataqueJugador = []

let indexAtaqueJugador
let indexAtaqueEnemigo

mokepones.push(protoblaster, electroray, neutrocromo, zeeSS, pythos, hache, bigBrother, capitainMontag, ford)

mokepones.forEach((Mokepon) => {
    htmlAEditar = ` <div id="${Mokepon.flashcardContainer}" class="tarjetas">
        <div id="${Mokepon.flashcard}" class="elemento">
            <div id="${Mokepon.fcFront}">
                <label id="${Mokepon.labelFront}" class="parrafo1" for=${Mokepon.nombre2}> <strong>${Mokepon.nombre}</strong> <img src=${Mokepon.imagen} id=${Mokepon.imagen2} width="60px" height="60px" alt=${Mokepon.id} > </label>
                <input type="radio" name="elemento" id=${Mokepon.nombre2}>
            </div>
            
            <div id="${Mokepon.fcBack}">
                <label id="${Mokepon.labelBack}" for=${Mokepon.nombre2}>
                    <h1 class="parrafo1">${Mokepon.nombre}</h1>
                    <p class="parrafo2">${Mokepon.description}</p>
                </label>
            </div>
        </div>
    </div> `

    elegirElemento.innerHTML += htmlAEditar
    botones = Mokepon.ataques

    if (Mokepon.tipo == '⚛️') {
        Mokepon.ataques.push(
            plasmaRay,
            plasmaRay,
            plasmaRay,
            liquidDrop,
            radiationSpread,
        )
    } else if (Mokepon.tipo == '🌱') {
        Mokepon.ataques.push(
            liquidDrop,
            liquidDrop,
            liquidDrop,
            plasmaRay,
            radiationSpread,
        )
    } else {
        Mokepon.ataques.push(
            radiationSpread,
            radiationSpread,
            radiationSpread,
            plasmaRay,
            liquidDrop,
        )
    }

} )

// mokepones.forEach((Mokepon) => {
//     let x = 0
//     let y = 0

//     for (let index = 0; index < 3; index++) {
//         Mokepon.flashcardContainer.position =        
//     }
// } ) 

ataques.push(protoblaster.ataques[1], electroray.ataques[1], neutrocromo.ataques[1])

const sectionSeleccionarAtaqueJugador = document.getElementById("elegir-ataque-elemento")
const botonSeleccionarMascota = document.getElementById("confirmar-seleccion")

const ProtoblasterFlashcard = document.getElementById("ProtoblasterCardContainer")
const ElectrorayFlashcard = document.getElementById("ElectrorayCardContainer")
const NeutrocromoFlashcard = document.getElementById("NeutrocromoCardContainer")
const ZeeSSFlashcard = document.getElementById("ZeeSSCardContainer")
const PythosSSFlashcard = document.getElementById("PythosCardContainer")
const HacheFlashcard = document.getElementById("HacheCardContainer")
const bigBrotherFlashcard = document.getElementById("BigBrotherCardContainer")
const capitainMontagFlashcard = document.getElementById("CapitainMontagCardContainer")
const fordFlashcard = document.getElementById("FordCardContainer")

const CardContainer = document.getElementById("elementos-tarjetas")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarElementoJugador = document.getElementById("elegir-elemento")
const sectionSeleccionarAtaqueElementoJugador = document.getElementById("elegir-ataque-elemento")
const spanElementoJugador = document.getElementById("elemento-jugador")

const spanElementoEnemigo = document.getElementById("elemento-enemigo")

const inputProtoblaster = document.getElementById('protoblaster')
const inputElectroray = document.getElementById('electroray')
const inputNeutrocromo = document.getElementById('neutrocromo')
const inputZeeSS = document.getElementById('zeess')
const inputPythos = document.getElementById('pythos')
const inputHache = document.getElementById('hache')
const inputBigBrother = document.getElementById('bigbrother')
const inputCapitainMontag = document.getElementById('capitainmontag')
const inputFord = document.getElementById('ford')

const spanVictoriasElementoJugador = document.getElementById("elemento-jugador-victorias")
const spanVictoriasElementoEnemigo = document.getElementById("elemento-enemigo-victorias")

const historialBatalla = document.getElementById("historial-batalla")

const sectionReiniciarJuego = document.getElementById("reiniciar-juego")

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let intervalo

let botonAtaquePlasmaRay
let botonAtaqueLiquidDrop
let botonAtaqueRadiationSpread

let ataqueElementoJugador
let ataqueElementoEnemigo

let body = document.body

let triunfos = 0
let perdidas = 0

let isTransitioning = false

let gElementoEnemigo
let gElementoJugador

let lienzo = mapa.getContext('2d')

let imgProtoblaster = new Image()
imgProtoblaster.src = protoblaster.imagen

function random(min,max){return Math.floor( Math.random()*(max-min+1)+min)}

function iniciarJuego() {

    //Selección de mascota

    sectionSeleccionarAtaqueJugador.style.display = 'none'
    sectionReiniciarJuego.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    botonSeleccionarMascota.addEventListener("click", seleccionarMascotaJugador)

    ProtoblasterFlashcard.addEventListener("mouseenter", function() {BackgroundColorChange("url('CSS/Images/BackgroundP.png')")})
    ElectrorayFlashcard.addEventListener("mouseenter", function() {BackgroundColorChange("url('CSS/Images/BackgroundE.png')")})
    NeutrocromoFlashcard.addEventListener("mouseenter", function() {BackgroundColorChange("url('CSS/Images/BackgroundN.png')")})
    ZeeSSFlashcard.addEventListener("mouseenter", function() {BackgroundColorChange("url('CSS/Images/BackgroundZ.png')")})
    PythosFlashcard.addEventListener("mouseenter", function() {BackgroundColorChange("url('CSS/Images/BackgroundPy.png')")})
    HacheFlashcard.addEventListener("mouseenter", function() {BackgroundColorChange("url('CSS/Images/BackgroundH.png')")})
    bigBrotherFlashcard.addEventListener("mouseenter", function() {BackgroundColorChange("url('CSS/Images/BackgroundP.png')")})
    capitainMontagFlashcard.addEventListener("mouseenter", function() {BackgroundColorChange("url('CSS/Images/BackgroundC.png')")})
    fordFlashcard.addEventListener("mouseenter", function() {BackgroundColorChange("url('CSS/Images/BackgroundZ.png')")})

    CardContainer.addEventListener("mouseleave", function() {BackgroundColorChange("url('CSS/Images/Background.png')")})

    botonReiniciar.addEventListener('click', recargarPagina)

}

function BackgroundColorChange(url) {
    document.body.style.backgroundImage = url
}

function ElegirMascota(Name, Color) {
     //Editar el DOM / InnerHTML con base a la mascota

    spanElementoJugador.innerHTML = Name
    spanElementoJugador.style.color = Color
    gElementoJugador = Name
    sectionSeleccionarElementoJugador.style.display = 'none'
    sectionVerMapa.style.display = 'flex'
    
    // sectionSeleccionarAtaqueElementoJugador.style.display = 'flex'
    seleccionarElementoEnemigo()
}

function ElegirMascotaEnemigo(Name, Color) {
    spanElementoEnemigo.innerHTML = Name
    spanElementoEnemigo.style.color = Color
    gElementoEnemigo = Name
    
    intervalo = setInterval(pintarPersonaje, 50)
}

function seleccionarMascotaJugador() {
    //Inputs de seleccionar mascota

    switch(true) {
        case inputProtoblaster.checked:
            extraerAtaquesJugador(0)
            ElegirMascota(protoblaster.nombre, protoblaster.color)
            break
        case inputElectroray.checked:
            extraerAtaquesJugador(1)
            ElegirMascota(electroray.nombre, electroray.color)
            break
        case inputNeutrocromo.checked:
            extraerAtaquesJugador(2)
            ElegirMascota(neutrocromo.nombre, neutrocromo.color)
            break
        case inputZeeSS.checked:
            extraerAtaquesJugador(3)
            ElegirMascota(zeeSS.nombre, zeeSS.color)
            break
        case inputPythos.checked:
            extraerAtaquesJugador(4)
            ElegirMascota(pythos.nombre, pythos.color)
        break
        case inputHache.checked:
            extraerAtaquesJugador(5)
            ElegirMascota(hache.nombre, hache.color)
        case inputBigBrother.checked:
            extraerAtaquesJugador(6)
            ElegirMascota(bigBrother.nombre, bigBrother.color)
        break
        case inputCapitainMontag.checked:
            extraerAtaquesJugador(7)
            ElegirMascota(capitainMontag.nombre, capitainMontag.color)
        break
        case inputFord.checked:
            extraerAtaquesJugador(8)
            ElegirMascota(ford.nombre, ford.color)
        break
        default:
            alert("Are you still playing? You haven't selected any Element yet!")
        break
    }

    secuenciaAtaque()

}

function seleccionarElementoEnemigo() {
    let elementoEnemigo = random(0, mokepones.length-1)

    ElegirMascotaEnemigo(mokepones[elementoEnemigo].nombre, mokepones[elementoEnemigo].color)
}

function pintarPersonaje() {
    lienzo.clearRect(0,0,mapa.width,mapa.height) //Borrar imagen
    protoblaster.x = protoblaster.x + protoblaster.velocidadX
    protoblaster.y = protoblaster.y + protoblaster.velocidadY
    lienzo.drawImage(imgProtoblaster, protoblaster.x, protoblaster.y, protoblaster.ancho, protoblaster.alto) //Dibujar imagen
}

function moverProtoblaster(eje, num) {

    if (eje == "x") {
        protoblaster.velocidadY = 0
        protoblaster.velocidadX = num
    } else {
        protoblaster.velocidadX = 0
        protoblaster.velocidadY = num
    }
    
}

function detenerProtoblaster() {
    protoblaster.velocidadY = 0
    protoblaster.velocidadX = 0
}

//boton-plasma-ray, nombre, img, nombre

function extraerAtaquesJugador(mokepon) {
    mokepones[mokepon].ataques.forEach((Ataque) => {
    htmlAEditar = `<div class="BotonContenedor">
    <button id=${Ataque.id} class="Boton BotonAtaques">${Ataque.nombre}</button>
    <img src=${Ataque.img} style="width: 100px; height: 100px;" alt=${Ataque.nombre}>
    </div>`

    contenedorAtaques.innerHTML += htmlAEditar
}
)

botonAtaques = document.querySelectorAll(".BotonAtaques")

ataquePlasmaRay = document.getElementById("boton-plasma-ray")
ataqueLiquidDrop = document.getElementById("boton-liquid-drop")
ataqueRadiationSpread = document.getElementById("boton-radiation-spread")

}
function secuenciaAtaque() {
    botonAtaques.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.innerText == 'PlasmaRay') {
                ataqueJugador.push('⚡')
                boton.style.background = '#10113C'
                boton.disabled = true
                ataque('Plasma Ray')
            } else if (e.target.innerText == 'LiquidDrop') {
                ataqueJugador.push('💦')
                boton.style.background = '#10113C'
                boton.disabled = true
                ataque('LiquidDrop')
            } else {
                ataqueJugador.push('☢️')
                boton.style.background = '#10113C'
                boton.disabled = true
                ataque('Radiation Spread')
            }
            console.log("JugadorAtaquesArray:"+ataqueJugador)

            ataqueElementoEnemigoFunction()
        } )
    })
}

function ataque(ataque) {
    ataqueElementoJugador = document.createElement('p')
    ataqueElementoJugador.innerHTML = ataque
    ataqueElementoJugador.className = ataque
}

function crearAtaqueEnemigo(ataque) {
    ataqueElementoEnemigo = document.createElement('p')
    ataqueElementoEnemigo.innerHTML = ataque
    ataqueElementoEnemigo.className = ataque
}

function ataqueElementoEnemigoFunction() {
    ataqueElementoEnemigo = random(0, ataques.length-1)

    ataquesEnemigo.push(ataques[ataqueElementoEnemigo].symbol)

    Validacion()
}

function guardarAtaques(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataquesEnemigo[enemigo]
}

function Validacion() {
    if (ataqueJugador.length === 5) {
        crearResultado()
    }
}

function crearResultado() {

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataquesEnemigo[index]) {
            guardarAtaques(index, index)
            crearMensaje(" - It's a draw!", "#607BFF")
        } else if (ataqueJugador[index] === '⚡' && ataquesEnemigo[index] === '💦' || ataqueJugador[index] === '💦' && ataquesEnemigo[index] === '☢️'|| ataqueJugador[index] === '☢️' && ataquesEnemigo[index] === '⚡'  ) {
            guardarAtaques(index, index)
            crearMensaje(" - It's a win!", "#75FF68")
            victoriasJugador++
        } else {
            guardarAtaques(index, index)
            crearMensaje(" - It's a lost!", "#FF4F5D")
            victoriasEnemigo++
        }
    }

    spanVictoriasElementoJugador.innerHTML = victoriasJugador.toString()
    spanVictoriasElementoEnemigo.innerHTML = victoriasEnemigo.toString()
    finDelJuego()

}

function finDelJuego() {
        sectionReiniciarJuego.style.display = 'flex'
}

function recargarPagina() {
    location.reload()
}

function crearMensaje(resultado, color) {
    let parrafo = document.createElement('p')
    let _parrafo = document.createElement('p')
    historialBatalla.appendChild(parrafo)
    historialBatalla.appendChild(_parrafo)

    parrafo.className = "parrafo4";
    parrafo.innerHTML = indexAtaqueJugador + " VS " + indexAtaqueEnemigo
    _parrafo.className = "parrafo4";
    _parrafo.innerHTML = resultado
    _parrafo.style.color = color
}

window.addEventListener('load', iniciarJuego)