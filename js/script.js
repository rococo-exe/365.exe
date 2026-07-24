// Lista completa y ordenada de los recuerdos de Córdoba
const elementosCamara = [
    { tipo: 'imagen', ruta: 'img/cordoba_1.jpg' },
    { tipo: 'imagen', ruta: 'img/cordoba_2.jpg' },
    { tipo: 'imagen', ruta: 'img/cordoba_3.jpg' },
    { tipo: 'imagen', ruta: 'img/cordoba_4.jpg' },
    { tipo: 'imagen', ruta: 'img/cordoba_5.jpg' },
    { tipo: 'video', ruta: 'vid/cordoba_vid.mp4' }
];

let indiceCamaraActual = 0;

// Función única que se activa al hacer clic en las carpetas principales
function darColor(idElemento) {
    let elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.classList.add("coloreado");
    }
    
    let contenidoHTML = baseDeDatos[idElemento] || "<p style='padding:20px; font-family:monospace;'>Archivo no encontrado.</p>";
    
    let contenedorDinamico = document.getElementById('contenido-dinamico');
    if (contenedorDinamico) {
        contenedorDinamico.innerHTML = contenidoHTML;
    }

    setTimeout(() => {
        let modal = document.getElementById('modal-recuerdo');
        if (modal) {
            modal.style.display = 'flex';
        }
    }, 500); 
}

// Función para cerrar la ventana principal del sistema
function cerrarModal() {
    let modal = document.getElementById('modal-recuerdo');
    if (modal) {
        modal.style.display = 'none';
    }
    
    let visor = document.getElementById('visor-de-archivos');
    if (visor) {
        visor.innerHTML = ''; 
    }
}

// Base de datos de los directorios internos CORREGIDA
const baseDeDatos = {

    // CARPETA 1: HOLA / MOTO
    'carpeta-01': `
        <div class="escritorio-carpeta2">
            <div class="icono-escritorio" onclick="abrirArchivo('hola')">
                <img src="img/moto.png" alt="hola.gif">
                <p>hola.gif</p>
            </div>
        </div>

        <div id="visor-de-archivos" class="visor-archivos-interno">
            <p style="color: #666; font-size: 11px; text-align: center;">Hacé clic en el archivo para abrir...</p>
        </div>
    `, // <-- COMA IMPORTANTE


    'carpeta-02': `
        <div class="escritorio-carpeta2">
            <div class="icono-escritorio" onclick="abrirArchivo('nota-2')">
                <img src="img/note.png" alt="note.txt">
                <p>note.txt</p>
            </div>

            <div class="icono-escritorio" onclick="abrirArchivo('camarita-2')">
                <img src="img/camarita.png" alt="click.exe">
                <p>click.exe</p>
            </div>

            <div class="icono-escritorio" onclick="abrirArchivo('cristal')">
                <img src="img/cuarzo_static.png" alt=":3.png">
                <p>:3.png</p>
            </div>
        </div>

        <div id="visor-de-archivos" class="visor-archivos-interno">
            <p style="color: #666; font-size: 11px; text-align: center;">Hacé clic en un ícono para abrir...</p>
        </div>
    `,

    // CARPETA 3: RECETAS Y DICCIONARIO (¡Restaurada!)
    'carpeta-03': `
        <div class="escritorio-carpeta2">
            <div class="icono-escritorio" onclick="abrirArchivo('recetas')">
                <img src="img/note.png" alt="recetas.exe">
                <p>recetas.exe</p>
            </div>

            <div class="icono-escritorio" onclick="abrirArchivo('diccionario')">
                <img src="img/note.png" alt="diccionario.txt">
                <p>diccionario.txt</p>
            </div>
        </div>

        <div id="visor-de-archivos" class="visor-archivos-interno">
            <p style="color: #666; font-size: 11px; text-align: center;">Hacé clic en un archivo...</p>
        </div>
    `,

    // CARPETA 4: LA PIANINA
    'carpeta-04': `
        <div class="escritorio-carpeta2">
            <div class="icono-escritorio" onclick="abrirArchivo('pianina')">
                <img src="img/pianina_static.png" alt="pianina">
                <p>pianina</p>
            </div>
        </div>

        <div id="visor-de-archivos" class="visor-archivos-interno">
            <p style="color: #666; font-size: 11px; text-align: center;">Hacé clic en la pianina...</p>
        </div>
    `,

    // CARPETA 5: ADMINISTRADOR DE CRISIS (Sin duplicar)
    'carpeta-05': `
        <div style="text-align: center; padding: 15px; font-family: 'Courier New', Courier, monospace;">
            <p style="font-size: 13px; font-weight: bold; margin-bottom: 10px;">[ Диспетчер_кризисов.exe ]</p>
            <p style="font-size: 11px; color: #555; margin-bottom: 15px;">Tirá el dado para resolver la crisis del día...</p>
            
            <button onclick="tirarDadoCrisis()" style="background: #000; color: #fff; border: 1px solid #000; padding: 8px 15px; font-family: 'Courier New', Courier, monospace; cursor: pointer; font-weight: bold; margin-bottom: 15px;">🎲 TIRAR DADO</button>
            
            <div id="visor-crisis" style="min-height: 140px; border-top: 1px dashed #999; padding-top: 15px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <p style="color: #666; font-size: 11px;">Esperando tirada...</p>
            </div>
        </div>
    `,

// CARPETA 6: ARGENTINA
    'carpeta-06': `
        <div class="escritorio-carpeta2">
            <!-- Archivo 1: a_de_argentino.jpg (Galería) -->
            <div class="icono-escritorio" onclick="abrirArchivo('a_de_argentino')">
                <img src="img/a_de_argentino.jpg" alt="a_de_argentino" onerror="this.src='img/note.png'">
                <p>a_de_argentino.jpg</p>
            </div>

            <!-- Archivo 2: IMPORTANTE.jpg (Mensaje) -->
            <div class="icono-escritorio" onclick="abrirArchivo('importante')">
                <img src="img/IMPORTANTE.jpg" alt="IMPORTANTE" onerror="this.src='img/note.png'">
                <p>IMPORTANTE.jpg</p>
            </div>
        </div>

        <div id="visor-de-archivos" class="visor-archivos-interno">
            <p style="color: #666; font-size: 11px; text-align: center;">Hacé clic en un archivo para abrir...</p>
        </div>
    `

};

// Acciones al hacer clic en los íconos
function abrirArchivo(nombreArchivo) {
    let visor = document.getElementById('visor-de-archivos');
    if (!visor) return;
    
    if (nombreArchivo === 'nota-2') {
        visor.innerHTML = `
            <div style="background: #fff; border: 1px solid #000; padding: 10px;">
                <strong>[note.txt]</strong><hr style="border:0; border-top:1px solid #000; margin: 4px 0;">
                <p style="font-size: 12px;">Наши руки, сплетённые вместе, станут картой, что ведёт нас туда, где ещё не были.</p>
            </div>
        `;
    } 
    else if (nombreArchivo === 'camarita-2') {
        indiceCamaraActual = 0;
        mostrarCamaraFlotante();
    }
    else if (nombreArchivo === 'cristal') {
        visor.innerHTML = `
            <div style="text-align: center;">
                <img src="img/cuarzo.gif" style="max-height: 90px; display: block; margin: 0 auto;" alt="Cristal">
                <p style="font-size: 12px; margin-top: 5px; font-weight: bold;"><strong>Розовый кварц</strong> — это главный камень безусловной любви и внутреннего спокойствия, который идеально подходит для исцеления эмоциональных ран и раскрытия сердечной чакры.<br>
    Его мягкие энергетические вибрации притягивают гармонию, способствуют состраданию и укрепляют глубокую любовь к себе и самооценку.</p>
            </div>
        `;
    }
    else if (nombreArchivo === 'pianina') {
        abrirPianinaFlotante();
    }
    else if (nombreArchivo === 'recetas') {
        abrirAnimacionRecetas();
    }
    else if (nombreArchivo === 'diccionario') {
        visor.innerHTML = `
            <div style="background: #fff; border: 1px solid #000; padding: 10px; text-align: left; overflow-y: auto; max-height: 250px;">
                <strong>[diccionario.txt]</strong><hr style="border:0; border-top:1px solid #000; margin: 4px 0 8px 0;">
                
                <p style="font-size: 12px; margin-bottom: 6px; font-family: monospace;">
                    <strong>&gt; estufa:</strong> (sustantivo) Aparato que sirve para calentar un ambiente. <em>Ej: "Sos mi estufa personal en invierno".</em>
                </p>
                <p style="font-size: 12px; margin-bottom: 12px; font-family: monospace;">
                    <strong>&gt; estafa:</strong> (sustantivo) Engaño que se hace para sacar provecho de alguien. <em>Ej: "Prometiste ser estufa, pero fuiste una estafa y me robaste la frazada".</em>
                </p>

                <hr style="border:0; border-top:1px dashed #ccc; margin: 8px 0;">
                
                <p style="font-size: 12px; margin-bottom: 6px; font-family: monospace; color: #444;">
                    <strong>[ TRADUCCIONES RU 🇷🇺 -&gt; ES 🇦🇷 ]</strong>
                </p>
                <ul style="font-size: 12px; margin-top: 0; padding-left: 20px; font-family: monospace; line-height: 1.5;">
                    <li><strong>Грязными</strong> (Gryaznymi): Sucios / Con los sucios.</li>
                    <li><strong>блядями</strong> (Blyadyami): Putas / Zorras (jerga explícita).</li>
                    <li><strong>Влюблённые</strong> (Vlyublyonnyye): Enamorados / Los enamorados.</li>
                </ul>
            </div>
        `;
    }

    else if (nombreArchivo === 'a_de_argentino') {
        abrirGaleriaArgentino();
    }
    else if (nombreArchivo === 'importante') {
        abrirImportante();
    }

    if (nombreArchivo === 'hola') {
        abrirMotoFlotante();
    }
}

// Función para mostrar el GIF de la pianina como un pop-up flotante independiente
function abrirPianinaFlotante() {
    let modalPianina = document.getElementById('modal-pianina-flotante');
    if (!modalPianina) {
        modalPianina = document.createElement('div');
        modalPianina.id = 'modal-pianina-flotante';
        document.body.appendChild(modalPianina);
    }

    modalPianina.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.7); display: flex;
        justify-content: center; align-items: center; z-index: 1500;
    `;

    modalPianina.innerHTML = `
        <div style="position: relative; text-align: center;">
            <button onclick="cerrarPianinaFlotante()" style="position: absolute; top: 15px; right: 25px; background: red; color: white; border: none; padding: 6px 12px; cursor: pointer; font-weight: bold; z-index: 1501; font-family: monospace;">X</button>
            
            <div style="position: relative; display: inline-block; width: 600px; max-width: 90vw; background: #fff; border: 2px solid #000; padding: 20px; box-shadow: 5px 5px 15px rgba(0,0,0,0.5);">
                <div style="cursor: pointer;" onclick="abrirVideoPianito()">
                    <img src="img/pianina.gif" style="width: 100%; height: auto; display: block; margin: 0 auto;" alt="Pianina GIF">
                </div>
                <p style="font-size: 11px; color: #444; margin-top: 10px; font-family: monospace;">(Hacé clic en la partitura/pianina para ver el video 🎹)</p>
            </div>
        </div>
    `;
}

function cerrarPianinaFlotante() {
    let modalPianina = document.getElementById('modal-pianina-flotante');
    if (modalPianina) {
        modalPianina.remove();
    }
}

// Función para abrir el pop-up con pad_heart.png y reproducir pianito.mp4
function abrirVideoPianito() {
    let modalPianito = document.getElementById('modal-pianito-flotante');
    if (!modalPianito) {
        modalPianito = document.createElement('div');
        modalPianito.id = 'modal-pianito-flotante';
        document.body.appendChild(modalPianito);
    }

    modalPianito.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.75); display: flex;
        justify-content: center; align-items: center; z-index: 2000;
    `;

    modalPianito.innerHTML = `
        <div style="position: relative; text-align: center;">
            <button onclick="cerrarVideoPianito()" style="position: absolute; top: 15px; right: 25px; background: red; color: white; border: none; padding: 6px 12px; cursor: pointer; font-weight: bold; z-index: 2001; font-family: monospace;">X</button>
            
            <div style="position: relative; display: inline-block; width: 560px; max-width: 90vw;">
                <img src="img/pad-heart.png" alt="Ventana Pad Heart" style="width: 100%; display: block;">
                
                <div style="position: absolute; top: 22%; left: 10%; width: 80%; height: 62%; background: #000; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                    <video autoplay controls muted playsinline style="width: 100%; height: 100%; object-fit: contain;">
                        <source src="vid/pianito.mp4" type="video/mp4">
                        Tu navegador no soporta videos.
                    </video>
                </div>
            </div>
        </div>
    `;
}

function cerrarVideoPianito() {
    let modalPianito = document.getElementById('modal-pianito-flotante');
    if (modalPianito) {
        modalPianito.remove();
    }
}

// Función para mostrar la cámara flotante con dimensiones exactas de Figma
function mostrarCamaraFlotante() {
    let actual = elementosCamara[indiceCamaraActual];
    
    let contenidoVisual = "";
    if (actual.tipo === 'imagen') {
        contenidoVisual = `<img src="${actual.ruta}" style="width: 100%; height: 100%; object-fit: cover;" alt="Recuerdo">`;
    } else {
        contenidoVisual = `
            <video autoplay controls muted playsinline style="width: 100%; height: 100%; object-fit: cover;">
                <source src="${actual.ruta}" type="video/mp4">
                Tu navegador no soporta videos.
            </video>
        `;
    }

    let modalCamara = document.getElementById('modal-camara-flotante');
    if (!modalCamara) {
        modalCamara = document.createElement('div');
        modalCamara.id = 'modal-camara-flotante';
        document.body.appendChild(modalCamara);
    }

    modalCamara.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.7); display: flex;
        justify-content: center; align-items: center; z-index: 1000;
    `;

    modalCamara.innerHTML = `
        <div style="position: relative; text-align: center;">
            <button onclick="cerrarCamaraFlotante()" style="position: absolute; top: 15px; right: 25px; background: red; color: white; border: none; padding: 6px 12px; cursor: pointer; font-weight: bold; z-index: 1001; font-family: monospace;">X</button>
            
            <div style="position: relative; display: inline-block; width: 560px; max-width: 90vw;">
                <img src="img/fuji.png" alt="Cámara Fujifilm" style="width: 100%; display: block;">
                
                <div style="position: absolute; top: 22.2%; left: 10.7%; width: 53.2%; height: 61.2%; background: #000; display: flex; align-items: center; justify-content: center; overflow: hidden; cursor: pointer;" onclick="siguienteElementoCamara()">
                    ${contenidoVisual}
                </div>
            </div>
            <p style="color: white; font-family: monospace; font-size: 12px; margin-top: 10px;">(Hacé clic en la pantalla para ver el siguiente archivo 📷)</p>
        </div>
    `;
}

function siguienteElementoCamara() {
    indiceCamaraActual++;
    if (indiceCamaraActual >= elementosCamara.length) {
        indiceCamaraActual = 0;
    }
    mostrarCamaraFlotante();
}

function cerrarCamaraFlotante() {
    let modalCamara = document.getElementById('modal-camara-flotante');
    if (modalCamara) {
        modalCamara.remove();
    }
}

// Lista de ítems de crisis 
const itemsCrisis = [
    {
        imagen: "img/maxx.gif",
        texto: "¡Crisis nivel catastrófico! Preservativo roto. Activar protocolo de emergencia inmediatamente."
    },
    {
        imagen: "img/dia_dsp.gif",
        texto: "Pastilla del día después adquirida con éxito. Salvados por la campana (otra vez)."
    },
    {
        imagen: "img/pword.gif",
        texto: "Un porrito para calmar las 300 crisisexistenciales acumuladas de la semana."
    },
    {
        imagen: "img/tiger.gif",
        texto: "Bálsamo de tigre: la única cura real para las contracturas y el colapso mental. Válido por una sesión de masajes con Rochi"
    },
    {
        imagen: "img/barfy_gif.gif",
        texto: "¡SORPRESA! Válido por una hamburguesa con Rochi."
    }
];

function tirarDadoCrisis() {
    let visorCrisis = document.getElementById('visor-crisis');
    if (!visorCrisis) return;

    let indiceAleatorio = Math.floor(Math.random() * itemsCrisis.length);
    let itemSeleccionado = itemsCrisis[indiceAleatorio];

    visorCrisis.innerHTML = `
        <div style="text-align: center; animation: fadeIn 0.3s ease;">
            <img src="${itemSeleccionado.imagen}" style="max-height: 75px; max-width: 100%; display: block; margin: 0 auto 8px auto; object-fit: contain;" alt="Ítem de crisis">
            <p style="font-size: 11px; color: #000; font-family: 'Courier New', Courier, monospace; max-width: 320px; line-height: 1.3;">${itemSeleccionado.texto}</p>
        </div>
    `;
}

// Lista de imágenes de comidas para la galería de recetas
const elementosRecetas = [
    { ruta: 'img/ramen.gif' },
    { ruta: 'img/huevosp.gif' },
    { ruta: 'img/tortarta.gif' },
    { ruta: 'img/chocotorta.gif' }
];

let indiceRecetaActual = 0;

function abrirAnimacionRecetas() {
    let modalRecetas = document.getElementById('modal-recetas-flotante');
    if (!modalRecetas) {
        modalRecetas = document.createElement('div');
        modalRecetas.id = 'modal-recetas-flotante';
        document.body.appendChild(modalRecetas);
    }

    modalRecetas.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.7); display: flex;
        justify-content: center; align-items: center; z-index: 1500;
    `;

    modalRecetas.innerHTML = `
        <div style="position: relative; text-align: center;">
            <button onclick="cerrarRecetasFlotante()" style="position: absolute; top: 15px; right: 25px; background: red; color: white; border: none; padding: 6px 12px; cursor: pointer; font-weight: bold; z-index: 1501; font-family: monospace;">X</button>
            
            <div style="position: relative; display: inline-block; width: 500px; max-width: 90vw; background: #fff; border: 2px solid #000; padding: 20px; box-shadow: 5px 5px 15px rgba(0,0,0,0.5);">
                <div style="cursor: pointer;" onclick="iniciarGaleriaRecetas()">
                    <img src="img/pad-ranking.gif" style="width: 100%; height: auto; display: block; margin: 0 auto;" alt="Animación Recetas">
                </div>
                <p style="font-size: 11px; color: #444; margin-top: 10px; font-family: monospace;">(Hacé clic en la animación para abrir el recetario 🍳)</p>
            </div>
        </div>
    `;
}

function iniciarGaleriaRecetas() {
    indiceRecetaActual = 0;
    mostrarGaleriaRecetasFlotante();
}

function mostrarGaleriaRecetasFlotante() {
    let actual = elementosRecetas[indiceRecetaActual];
    
    let modalRecetas = document.getElementById('modal-recetas-flotante');
    if (!modalRecetas) return;

    modalRecetas.innerHTML = `
        <div style="position: relative; text-align: center;">
            <button onclick="cerrarRecetasFlotante()" style="position: absolute; top: 15px; right: 25px; background: red; color: white; border: none; padding: 6px 12px; cursor: pointer; font-weight: bold; z-index: 1501; font-family: monospace;">X</button>
            
            <div style="position: relative; display: inline-block; width: 560px; max-width: 90vw; background: #000; border: 2px solid #000; padding: 10px;">
                <img src="${actual.ruta}" style="width: 100%; height: auto; max-height: 70vh; object-fit: contain; display: block; cursor: pointer;" onclick="siguienteReceta()" alt="Receta de comida">
            </div>
            <p style="color: white; font-family: monospace; font-size: 12px; margin-top: 10px;">(Hacé clic en la foto para ver la siguiente receta 🍲)</p>
        </div>
    `;
}

function siguienteReceta() {
    indiceRecetaActual++;
    if (indiceRecetaActual >= elementosRecetas.length) {
        indiceRecetaActual = 0; 
    }
    mostrarGaleriaRecetasFlotante();
}

function cerrarRecetasFlotante() {
    let modalRecetas = document.getElementById('modal-recetas-flotante');
    if (modalRecetas) {
        modalRecetas.remove();
    }
}

// ==========================================
// 9. FUNCIONES DE CARPETA 6 (ARGENTINA)
// ==========================================

// Lista de imágenes para la galería "a de argentino"
const elementosArgentino = [
    { ruta: 'img/arg_1.jpg' },
    { ruta: 'img/arg_2.jpg' },
    { ruta: 'img/arg_3.jpg' }, // Agregá todas las que necesites
    { ruta: 'img/arg_4.jpg' },
    { ruta: 'img/arg_5.jpg' },
];

let indiceArgentinoActual = 0;

function abrirGaleriaArgentino() {
    indiceArgentinoActual = 0;
    mostrarGaleriaArgentino();
}

function mostrarGaleriaArgentino() {
    let actual = elementosArgentino[indiceArgentinoActual];
    
    let modalArg = document.getElementById('modal-arg-flotante');
    if (!modalArg) {
        modalArg = document.createElement('div');
        modalArg.id = 'modal-arg-flotante';
        document.body.appendChild(modalArg);
    }

    modalArg.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.8); display: flex;
        justify-content: center; align-items: center; z-index: 2000;
    `;

    modalArg.innerHTML = `
        <div style="position: relative; text-align: center;">
            <button onclick="cerrarArgFlotante()" style="position: absolute; top: 15px; right: 25px; background: red; color: white; border: none; padding: 6px 12px; cursor: pointer; font-weight: bold; z-index: 2001; font-family: monospace;">X</button>
            
            <div style="position: relative; display: inline-block; width: 560px; max-width: 90vw;">
                <!-- MARCO ARGENTINO -->
                <img src="img/pad-arg.png" alt="Ventana Argentina" style="width: 100%; display: block;">
                
                <!-- ÁREA INTERNA (AJUSTADA AL MARCO) -->
                <div style="position: absolute; top: 18%; left: 10%; width: 80%; height: 65%; background: #000; display: flex; align-items: center; justify-content: center; overflow: hidden; cursor: pointer;" onclick="siguienteArgentino()">
                    <img src="${actual.ruta}" style="width: 100%; height: 100%; object-fit: contain;" alt="Galería Argentina">
                </div>
            </div>
            <p style="color: white; font-family: monospace; font-size: 12px; margin-top: 10px;">(Hacé clic en la imagen para ver la siguiente 🧉)</p>
        </div>
    `;
}

function siguienteArgentino() {
    indiceArgentinoActual++;
    if (indiceArgentinoActual >= elementosArgentino.length) {
        indiceArgentinoActual = 0;
    }
    mostrarGaleriaArgentino();
}

function cerrarArgFlotante() {
    let modalArg = document.getElementById('modal-arg-flotante');
    if (modalArg) {
        modalArg.remove();
    }
}

// Función para el pop-up "IMPORTANTE.jpg"
function abrirImportante() {
    let modalImp = document.getElementById('modal-importante-flotante');
    if (!modalImp) {
        modalImp = document.createElement('div');
        modalImp.id = 'modal-importante-flotante';
        document.body.appendChild(modalImp);
    }

    modalImp.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.85); display: flex;
        justify-content: center; align-items: center; z-index: 2000;
    `;

    modalImp.innerHTML = `
        <div style="position: relative; text-align: center;">
            <button onclick="cerrarImportante()" style="position: absolute; top: 15px; right: 25px; background: red; color: white; border: none; padding: 6px 12px; cursor: pointer; font-weight: bold; z-index: 2001; font-family: monospace;">X</button>
            
            <div style="position: relative; display: inline-block; width: 560px; max-width: 90vw;">
                <!-- MARCO ARGENTINO -->
                <img src="img/pad-arg.png" alt="Ventana Argentina" style="width: 100%; display: block;">
                
                <!-- CONTENIDO DEL MENSAJE Y GIF -->
                <div style="position: absolute; top: 18%; left: 10%; width: 80%; height: 65%; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: hidden; text-align: center; padding: 10px; box-sizing: border-box;">
                    
                    <img src="img/copa_mundo.gif" style="max-height: 55%; width: auto; margin-bottom: 15px;" alt="Copa del Mundo">
                    
                    <p style="font-family: monospace; font-size: 15px; font-weight: bold; color: #000; margin: 0; line-height: 1.4;">
                        UD ES ARGENTINO,<br>
                        disfrute de su mate,<br>
                        coma empanadas calientes<br>
                        (que queman los dientes)
                    </p>

                </div>
            </div>
        </div>
    `;
}

function cerrarImportante() {
    let modalImp = document.getElementById('modal-importante-flotante');
    if (modalImp) {
        modalImp.remove();
    }
}

// ==========================================
// 10. FUNCIONES DE CARPETA 1 (MOTO)
// ==========================================

function abrirMotoFlotante() {
    let modalMoto = document.getElementById('modal-moto-flotante');
    if (!modalMoto) {
        modalMoto = document.createElement('div');
        modalMoto.id = 'modal-moto-flotante';
        document.body.appendChild(modalMoto);
    }

    modalMoto.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.75); display: flex;
        justify-content: center; align-items: center; z-index: 1500;
    `;

    modalMoto.innerHTML = `
        <div style="position: relative; text-align: center;">
            <!-- Acomodé la X un poquito más afuera para que no pise el teléfono -->
            <button onclick="cerrarMotoFlotante()" style="position: absolute; top: -10px; right: -25px; background: red; color: white; border: none; padding: 6px 12px; cursor: pointer; font-weight: bold; z-index: 1501; font-family: monospace;">X</button>
            
            <!-- Contenedor transparente (le sacamos el background blanco y los bordes) -->
            <div style="position: relative; display: inline-block; max-width: 90vw; background: transparent;">
                <img src="img/moto.gif" style="width: auto; max-width: 100%; max-height: 80vh; display: block; margin: 0 auto; object-fit: contain;" alt="Moto GIF">
            </div>
        </div>
    `;
}

function cerrarMotoFlotante() {
    let modalMoto = document.getElementById('modal-moto-flotante');
    if (modalMoto) {
        modalMoto.remove();
    }
}

// ==========================================
// 11. FUNCIONES DEL LOGO (365 DÍAS)
// ==========================================

function abrirMensajeAniversario() {
    let modalLogo = document.getElementById('modal-logo-flotante');
    if (!modalLogo) {
        modalLogo = document.createElement('div');
        modalLogo.id = 'modal-logo-flotante';
        document.body.appendChild(modalLogo);
    }

    modalLogo.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.85); display: flex;
        justify-content: center; align-items: center; z-index: 3000;
    `;

    // Acá podés cambiar la imagen (src) y el texto dentro de la etiqueta <p>
    modalLogo.innerHTML = `
        <div style="position: relative; text-align: center; width: 500px; max-width: 90vw; background: #fff; border: 2px solid #000; padding: 25px; box-shadow: 5px 5px 15px rgba(0,0,0,0.5);">
            
            <!-- Botón de cerrar -->
            <button onclick="cerrarMensajeAniversario()" style="position: absolute; top: 12px; right: 15px; background: red; color: white; border: none; padding: 6px 12px; cursor: pointer; font-weight: bold; z-index: 3001; font-family: monospace;">X</button>
            
            <!-- Título -->
            <h2 style="font-family: monospace; font-size: 22px; margin-top: 5px; margin-bottom: 15px; text-transform: uppercase;">[ ¡Felices 365 días! ]</h2>
            
            <!-- Imagen Especial -->
            <img src="img/uwu.jpg" style="width: 100%; max-height: 40vh; object-fit: cover; border: 1px solid #000; margin-bottom: 15px;" alt="Recuerdo Especial">
            
            <!-- Texto Dedicatoria -->
            <p style="font-family: monospace; font-size: 14px; color: #222; line-height: 1.6; text-align: justify; margin: 0;">
                Acá podés escribir todo el texto romántico que quieras. Este es tu espacio para dedicarle unas lindas palabras, recordar momentos o simplemente celebrar este primer año de aventuras juntos. ¡Podés poner texto largo que la ventanita se adapta sola!
            </p>
        </div>
    `;
}

function cerrarMensajeAniversario() {
    let modalLogo = document.getElementById('modal-logo-flotante');
    if (modalLogo) {
        modalLogo.remove();
    }
}