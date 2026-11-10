const nombresComunes = {
    1: "nance",
    2: "tamarindo",
    3: "guayaba",
    4: "bugambilia",
    5: "te de limon",
    6: "Papause",
    7: "Hoja santa",
    8: "Jobo",
    9: "Aguacate",
    10: "Verbena",
    11: "Mango",
    12: "Mamey",
    13: "Hierba de cáncer",
    14: "Guanábana",
    15: "Cuajilote",
    16: "Cacao",
    17: "Noni",
    18: "Naranja agria",
    19: "Papaya",
    20: "Chicozapote",
    21: "Carambola",
    22: "Capulín",
    23: "Paterna",
    24: "Moringa",
    25: "Café"
};

const nombresCientificos = {
    1: "Byrsonima crassifolia",
    2: "Tamarindus indica",
    3: "Psidium guajava",
    4: "Bougainvillea glabra",
    5: "Cymbopogon citratus",
    6: "Annona purpurea",
    7: "Piper auritum",
    8: "Spondias mombin",
    9: "Persea americana",
    10: "Stachytarpheta cayennensis",
    11: "Mangifera indica",
    12: "Pouteria sapota",
    13: "Hamelia patens",
    14: "Annona muricata",
    15: "Parmentiera aculeata",
    16: "Theobroma cacao",
    17: "Morinda citrifolia",
    18: "Citrus × aurantium",
    19: "Carica papaya",
    20: "Manilkara zapota",
    21: "Averrhoa carambola",
    22: "Muntingia calabura",
    23: "Inga paterna",
    24: "Moringa oleifera",
    25: "Coffea arabica"
};

const familiasBotanicas = {
    1: "Clusiaceae",
    2: "Tamarindaceae",
    3: "Myrtaceae",
    4: "Bougainvilleaceae",
    5: "Poaceae",
    6: "Annonaceae",
    7: "Piperaceae",
    8: "Anacardiaceae",
    9: "Lauraceae",
    10: "Verbenaceae",
    11: "Anacardiaceae",
    12: "Sapotaceae",
    13: "Rubiaceae",
    14: "Annonaceae",
    15: "Bignoniaceae",
    16: "Malvaceae",
    17: "Rubiaceae",
    18: "Rutaceae",
    19: "Caricaceae",
    20: "Sapotaceae",
    21: "Oxalidaceae",
    22: "Muntingiaceae",
    23: "Fabaceae",
    24: "Moringaceae",
    25: "Rubiaceae"
};

const descripcionesBotanicas = {
    1: {
        descripcion: "Árbol tropical conocido como nance, común en regiones cálidas de América.",
        hojas: "Simples, opuestas, de forma elíptica y con margen entero.",
        tallo: "Leñoso, con tronco ramificado y corteza de color grisáceo.",
        floresYFrutos: "Produce pequeñas flores amarillas agrupadas. Sus frutos son redondos, amarillos y de pulpa comestible.",
        importancia: "Sus frutos se consumen frescos y se utilizan en bebidas, dulces y preparaciones tradicionales."
    },
    2: {
        descripcion: "Árbol tropical originario de África, cultivado en regiones cálidas por sus frutos.",
        hojas: "Compuestas, pinnadas, con numerosos folíolos pequeños y ovalados.",
        tallo: "Leñoso, robusto y con ramas extendidas que forman una copa amplia.",
        floresYFrutos: "Presenta flores pequeñas amarillas o rojizas. Produce vainas alargadas con pulpa café de sabor agridulce.",
        importancia: "Sus frutos se utilizan en alimentos, bebidas, dulces y condimentos."
    },
    3: {
        descripcion: "Árbol frutal tropical conocido como guayaba, cultivado ampliamente en América.",
        hojas: "Simples, opuestas, ovaladas y con nervaduras muy marcadas.",
        tallo: "Leñoso, ramificado y con corteza que puede desprenderse en láminas.",
        floresYFrutos: "Produce flores blancas con numerosos estambres. Sus frutos son redondos u ovalados, con pulpa blanca o rosada.",
        importancia: "Es importante por sus frutos ricos en vitamina C y su aprovechamiento alimenticio."
    },
    4: {
        descripcion: "Planta ornamental tropical conocida como bugambilia, cultivada por sus colores llamativos.",
        hojas: "Simples, alternas, ovaladas y con margen entero.",
        tallo: "Leñoso, trepador y frecuentemente provisto de espinas.",
        floresYFrutos: "Sus flores son pequeñas y están rodeadas por brácteas de colores como rosa, morado, rojo o blanco.",
        importancia: "Se utiliza principalmente como planta ornamental en jardines, cercas y espacios públicos."
    },
    5: {
        descripcion: "Planta herbácea aromática conocida como té de limón o zacate limón, común en regiones tropicales.",
        hojas: "Largas, estrechas, lineales y con bordes ligeramente ásperos; desprenden aroma a limón.",
        tallo: "Forma agrupaciones de hojas que nacen desde la base, con tallos cortos y robustos.",
        floresYFrutos: "Puede producir inflorescencias en forma de espigas, aunque la floración es poco frecuente en cultivo.",
        importancia: "Se utiliza para preparar infusiones, bebidas y productos aromáticos."
    },
    6: {
        descripcion: "Árbol tropical conocido como papause, que crece en regiones cálidas y produce frutos comestibles.",
        hojas: "Simples, alargadas, de margen entero y dispuestas de forma alterna en las ramas.",
        tallo: "Leñoso, con tronco y ramas que forman una copa amplia.",
        floresYFrutos: "Presenta flores solitarias o agrupadas. Su fruto es grande, de forma redondeada y con pulpa comestible.",
        importancia: "Tiene importancia alimentaria por sus frutos y forma parte de la diversidad de árboles frutales tropicales."
    },
    7: {
        descripcion: "Planta tropical aromática conocida como hoja santa, frecuente en ambientes cálidos y húmedos.",
        hojas: "Simples, grandes, acorazonadas, con margen entero, nervaduras marcadas y aroma característico.",
        tallo: "Herbáceo, con nudos visibles y crecimiento ramificado; puede lignificarse en la base.",
        floresYFrutos: "Produce pequeñas flores agrupadas en espigas alargadas. Sus frutos son pequeños.",
        importancia: "Se utiliza como condimento en platillos tradicionales del sureste de México y tiene usos en la medicina tradicional."
    },
    8: {
        descripcion: "Árbol tropical caducifolio conocido como jobo, que puede alcanzar varios metros de altura.",
        hojas: "Compuestas, pinnadas, con varios folíolos de forma elíptica u oblonga.",
        tallo: "Leñoso, con tronco ramificado y corteza que puede presentar fisuras con la edad.",
        floresYFrutos: "Las flores son pequeñas y se agrupan en inflorescencias. Produce frutos carnosos amarillos al madurar.",
        importancia: "Sus frutos se consumen frescos o en bebidas y preparaciones regionales; también proporciona sombra."
    },
    9: {
        descripcion: "Árbol perenne de origen mesoamericano cultivado por sus frutos conocidos como aguacates.",
        hojas: "Simples, alternas, de forma elíptica a lanceolada, con margen entero.",
        tallo: "Leñoso, ramificado y con una copa amplia.",
        floresYFrutos: "Presenta numerosas flores pequeñas. El fruto es una baya carnosa con una semilla grande.",
        importancia: "Es un cultivo agrícola de gran valor comercial y alimenticio, rico en grasas saludables."
    },
    10: {
        descripcion: "Planta herbácea o subarbustiva que crece en zonas tropicales y subtropicales, conocida como verbena.",
        hojas: "Simples, opuestas, de forma ovada a lanceolada y con margen dentado.",
        tallo: "Erguido, ramificado y generalmente cuadrangular.",
        floresYFrutos: "Produce pequeñas flores agrupadas en espigas terminales. El fruto es pequeño y se divide en unidades al madurar.",
        importancia: "Puede encontrarse en vegetación espontánea y se utiliza tradicionalmente con fines medicinales."
    },
    11: {
        descripcion: "Árbol tropical perenne que puede alcanzar gran tamaño. Se cultiva principalmente por sus frutos comestibles.",
        hojas: "Simples, alargadas, de forma lanceolada, con margen entero y disposición alterna.",
        tallo: "Leñoso, robusto y ramificado, con corteza que se vuelve más rugosa conforme madura.",
        floresYFrutos: "Presenta pequeñas flores agrupadas en inflorescencias. Su fruto es una drupa carnosa con una semilla grande.",
        importancia: "Es importante por su valor alimenticio y comercial. Sus frutos se consumen frescos y se utilizan en jugos, dulces y otros productos."
    },
    12: {
        descripcion: "Árbol tropical perenne cultivado por su fruto conocido como mamey.",
        hojas: "Simples, agrupadas principalmente hacia los extremos de las ramas, alargadas y de margen entero.",
        tallo: "Leñoso, robusto y con una copa densa.",
        floresYFrutos: "Produce flores pequeñas. El fruto es grande, de pulpa anaranjada o rojiza y contiene semillas oscuras.",
        importancia: "Sus frutos se consumen frescos y se emplean en licuados, postres y otras preparaciones alimenticias."
    },
    13: {
        descripcion: "Arbusto tropical conocido como hierba de cáncer, presente en áreas abiertas y ambientes perturbados.",
        hojas: "Simples, opuestas, de forma ovada y con margen dentado.",
        tallo: "Leñoso en la base, ramificado y con ramas jóvenes verdes.",
        floresYFrutos: "Produce flores tubulares de color anaranjado o rojizo. Sus frutos son pequeños y oscuros al madurar.",
        importancia: "Tiene usos en la medicina tradicional. Estos usos no sustituyen la evaluación ni el tratamiento médico."
    },
    14: {
        descripcion: "Árbol pequeño o mediano de regiones tropicales, cultivado por sus frutos comestibles.",
        hojas: "Simples, alternas, oblongas a elípticas, con margen entero y superficie lisa.",
        tallo: "Leñoso, ramificado y con una copa relativamente abierta.",
        floresYFrutos: "Las flores son pequeñas y pueden aparecer en ramas y tronco. El fruto es grande, verde y cubierto de pequeñas espinas blandas.",
        importancia: "Se cultiva por su pulpa, consumida fresca y utilizada en bebidas, dulces y otros alimentos."
    },
    15: {
        descripcion: "Árbol pequeño o mediano de zonas tropicales, conocido por sus frutos alargados.",
        hojas: "Compuestas, pinnadas, con varios folíolos de forma elíptica.",
        tallo: "Leñoso, ramificado y frecuentemente provisto de espinas.",
        floresYFrutos: "Produce flores de tonos claros. Sus frutos son alargados, verdes y con costillas longitudinales.",
        importancia: "Sus frutos pueden utilizarse en la alimentación y el árbol también se cultiva como planta ornamental."
    },
    16: {
        descripcion: "Árbol tropical perenne originario de América, cultivado para obtener las semillas de cacao.",
        hojas: "Simples, alternas, alargadas y con margen entero; las hojas jóvenes suelen presentar tonos rojizos.",
        tallo: "Leñoso, con ramificación característica y crecimiento de ramas en verticilos.",
        floresYFrutos: "Produce pequeñas flores directamente en el tronco y las ramas principales. Sus frutos son mazorcas con numerosas semillas.",
        importancia: "Sus semillas son la materia prima para elaborar cacao y chocolate, por lo que tiene gran importancia económica."
    },
    17: {
        descripcion: "Arbusto o árbol pequeño tropical perenne conocido como noni.",
        hojas: "Simples, opuestas, grandes, elípticas y de margen entero, con nervaduras visibles.",
        tallo: "Leñoso, ramificado y con corteza relativamente lisa.",
        floresYFrutos: "Las flores son pequeñas y blancas. Produce frutos carnosos que adquieren un tono blanquecino o amarillento al madurar.",
        importancia: "Se utiliza en sistemas tradicionales de aprovechamiento de plantas tropicales. No hay que asumir que sus preparados curan enfermedades."
    },
    18: {
        descripcion: "Árbol perenne cítrico conocido como naranja agria, cultivado en regiones cálidas.",
        hojas: "Simples, alternas, aromáticas, con pecíolo alado y margen ligeramente dentado.",
        tallo: "Leñoso, ramificado y frecuentemente provisto de espinas.",
        floresYFrutos: "Presenta flores blancas y aromáticas. Sus frutos son redondeados, de cáscara anaranjada y pulpa de sabor ácido y amargo.",
        importancia: "Se utiliza en la preparación de alimentos, bebidas, conservas y productos aromáticos."
    },
    19: {
        descripcion: "Planta tropical de crecimiento rápido, generalmente con un tallo principal poco ramificado.",
        hojas: "Grandes, profundamente lobuladas y dispuestas en espiral en la parte superior del tallo.",
        tallo: "Herbáceo, grueso, generalmente hueco o esponjoso, con cicatrices de las hojas.",
        floresYFrutos: "Las flores pueden ser masculinas, femeninas o hermafroditas según la planta. El fruto es carnoso y contiene numerosas semillas negras.",
        importancia: "Es un cultivo frutícola importante y sus frutos se consumen frescos o procesados."
    },
    20: {
        descripcion: "Árbol tropical perenne conocido como chicozapote, apreciado por sus frutos dulces.",
        hojas: "Simples, alternas, elípticas y de margen entero, agrupadas hacia los extremos de las ramas.",
        tallo: "Leñoso, con corteza que contiene látex y una copa densa.",
        floresYFrutos: "Produce flores pequeñas y discretas. El fruto es una baya de pulpa dulce y semillas oscuras.",
        importancia: "Sus frutos se consumen frescos y el árbol tiene importancia histórica por el látex empleado para elaborar chicle."
    },
    21: {
        descripcion: "Árbol pequeño tropical conocido como carambola, cultivado por sus frutos de forma característica.",
        hojas: "Compuestas, pinnadas, con folíolos pequeños de forma ovalada.",
        tallo: "Leñoso y ramificado, con una copa densa.",
        floresYFrutos: "Produce pequeñas flores rosadas o violáceas. El fruto es carnoso, con cinco costillas longitudinales y forma de estrella al cortarlo transversalmente.",
        importancia: "Sus frutos se consumen frescos y se utilizan en ensaladas, jugos y decoraciones culinarias."
    },
    22: {
        descripcion: "Árbol pequeño de crecimiento rápido conocido como capulín o capulincillo en algunas regiones.",
        hojas: "Simples, alternas, ovadas y con margen aserrado.",
        tallo: "Leñoso, delgado y ramificado.",
        floresYFrutos: "Produce pequeñas flores blancas. Los frutos son redondeados, pequeños y rojizos al madurar.",
        importancia: "Sus frutos pueden consumirse y el árbol proporciona alimento y refugio para la fauna."
    },
    23: {
        descripcion: "Árbol tropical conocido como paterna, asociado a ambientes cálidos y húmedos.",
        hojas: "Compuestas, pinnadas, con varios pares de folíolos de forma elíptica.",
        tallo: "Leñoso, ramificado y capaz de desarrollar una copa amplia.",
        floresYFrutos: "Produce flores agrupadas en inflorescencias. Sus frutos son vainas alargadas que contienen semillas rodeadas por una pulpa blanca y algodonosa.",
        importancia: "Se aprovechan sus frutos y, como otras leguminosas arbóreas, puede contribuir al aporte de materia orgánica al suelo."
    },
    24: {
        descripcion: "Árbol de crecimiento rápido conocido como moringa, cultivado en regiones tropicales y subtropicales.",
        hojas: "Compuestas, generalmente tripinnadas, con numerosos folíolos pequeños y ovalados.",
        tallo: "Leñoso, con tronco relativamente delgado y ramas extendidas.",
        floresYFrutos: "Produce flores blancas o crema agrupadas en inflorescencias. Sus frutos son cápsulas largas y estrechas con semillas.",
        importancia: "Sus hojas y frutos se aprovechan como alimento en distintas regiones. También se cultiva por su adaptación a climas cálidos."
    },
    25: {
        descripcion: "Arbusto o árbol pequeño perenne originario de África, cultivado principalmente por sus semillas utilizadas para elaborar café.",
        hojas: "Simples, opuestas, de forma elíptica, color verde oscuro y superficie brillante.",
        tallo: "Leñoso, ramificado y con crecimiento erecto.",
        floresYFrutos: "Produce flores blancas, pequeñas y aromáticas. Sus frutos son conocidos como cerezas de café y pueden presentar color rojo, amarillo o anaranjado al madurar. Contienen generalmente dos semillas.",
        importancia: "Es un cultivo agrícola de gran importancia económica y social. Sus semillas se procesan para obtener una de las bebidas más consumidas en el mundo."
    }
};

const plantas = [];

for (let numero = 1; numero <= 25; numero++) {
    plantas.push({
        numero: numero,
        imagen: `imagenes/Planta${String(numero).padStart(2, "0")}.jpg.jpeg`,
        nombreComun: nombresComunes[numero] || "Nombre por identificar",
        nombreCientifico: nombresCientificos[numero] || "Por identificar",
        familia: familiasBotanicas[numero] || "Por identificar",
        coordenadas: null
    });
}

const coordenadasPlantas = {
    1: [15.011299, -92.397155],
    2: [15.008879, -92.398287],
    3: [15.011432, -92.396420],
    4: [15.011562, -92.396428],    
    5: [15.011431, -92.396727], 
    6: [14.860800, -92.492715],
    7: [14.860738, -92.492742],
    8: [14.860865, -92.492860],
    9: [14.860906, -92.492982],
    10: [14.860943, -92.492926],
    11: [14.860952, -92.492898],
    12: [14.861005, -92.492640],
    13: [14.860703, -92.492789],
    14: [14.860863, -92.492840],
    15: [14.861187, -92.492736],
    16: [14.861463, -92.492749],
    17: [14.861441, -92.492543],
    18: [14.860732, -92.492728],
    19: [14.860733, -92.492715],
    20: [14.860753, -92.492638],
    21: [14.861554, -92.493014],
    22: [14.861536, -92.493033],
    23: [14.861027, -92.492914],
    24: [14.860881, -92.493022],
    25: [15.059960, -92.194710]
};

plantas.forEach(planta => {
    if (coordenadasPlantas[planta.numero]) {
        planta.coordenadas = coordenadasPlantas[planta.numero];
    }
});

const coleccion = document.getElementById("coleccion");
coleccion.style.display = "none";
const buscador = document.querySelector(".busqueda input");

plantas.forEach(planta => {
    const tarjeta = document.createElement("article");
    const infoBotanica = descripcionesBotanicas[planta.numero];

    tarjeta.style.cssText = `
        background: white;
        border-radius: 12px;
        padding: 15px;
        box-shadow: 0 3px 12px #00000010;
        overflow: hidden;
    `;

    tarjeta.innerHTML = `
        <img
            src="${planta.imagen}"
            alt="Fotografía de ${planta.nombreComun}"
            class="foto-planta"
            style="width:100%; height:200px; object-fit:cover; border-radius:8px; cursor:zoom-in;"
            onclick="ampliarFoto(this)"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
        >

        <div style="
            display:none;
            height:200px;
            background:#edf4e8;
            color:#52734d;
            border-radius:8px;
            align-items:center;
            justify-content:center;
            text-align:center;
            padding:10px;
        ">
            Fotografía pendiente
        </div>

        <h3>Planta ${String(planta.numero).padStart(2, "0")}</h3>
        <p><strong>Nombre común:</strong> ${planta.nombreComun}</p>
        <p><strong>Nombre científico:</strong> <i>${planta.nombreCientifico}</i></p>
        <p><strong>Familia:</strong> ${planta.familia}</p>

        ${infoBotanica ? `
            <hr>
            <h4>Descripción botánica</h4>
            <p><strong>Descripción:</strong> ${infoBotanica.descripcion}</p>
            <p><strong>Hojas:</strong> ${infoBotanica.hojas}</p>
            <p><strong>Tallo:</strong> ${infoBotanica.tallo}</p>
            <p><strong>Flores y frutos:</strong> ${infoBotanica.floresYFrutos}</p>
            <p><strong>Importancia:</strong> ${infoBotanica.importancia}</p>
        ` : ""}
    `;

    coleccion.appendChild(tarjeta);
});

buscador.addEventListener("input", () => {
    const texto = buscador.value.toLowerCase().trim();
    const tarjetas = coleccion.querySelectorAll("article");
    let hayResultados = false;

    if (texto === "") {
        coleccion.style.display = "none";
        return;
    }

    coleccion.style.display = "grid";

    tarjetas.forEach((tarjeta, indice) => {
        const planta = plantas[indice];

        const coincide =
            texto === "todos" ||
            planta.nombreComun.toLowerCase().includes(texto) ||
            planta.nombreCientifico.toLowerCase().includes(texto);

        tarjeta.style.display = coincide ? "" : "none";

        if (coincide) {
            hayResultados = true;
        }
    });

    let mensaje = document.getElementById("mensaje-sin-resultados");

    if (!hayResultados) {
        if (!mensaje) {
            mensaje = document.createElement("p");
            mensaje.id = "mensaje-sin-resultados";
            mensaje.textContent = "🌿 No encontramos plantas con ese nombre. Intenta con otro nombre común o científico.";
            coleccion.parentNode.insertBefore(mensaje, coleccion);
        }

        mensaje.style.display = "block";
    } else if (mensaje) {
        mensaje.style.display = "none";
    }
});

function ampliarFoto(imagen) {
    const ventana = document.createElement("div");

    ventana.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        z-index: 9999;
        cursor: zoom-out;
    `;

    const foto = document.createElement("img");
    foto.src = imagen.src;
    foto.alt = imagen.alt;

    foto.style.cssText = `
        max-width: 95%;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 5px 25px #00000066;
    `;

    ventana.appendChild(foto);
    document.body.appendChild(ventana);

    ventana.addEventListener("click", () => {
        ventana.remove();
    });

    document.addEventListener("keydown", function cerrarConEscape(evento) {
        if (evento.key === "Escape") {
            ventana.remove();
            document.removeEventListener("keydown", cerrarConEscape);
        }
    });
}

// Crear el mapa interactivo del herbario

const mapa = L.map("mapa").setView([14.8610, -92.4928], 19);

// Agregar el mapa base
L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
        attribution: "Tiles © Esri",
        maxZoom: 19
    }
).addTo(mapa);

// Crear un marcador por cada planta que tenga coordenadas
plantas.forEach(planta => {
    if (planta.coordenadas) {
        const marcador = L.marker(planta.coordenadas).addTo(mapa);

        marcador.bindPopup(`
            <strong>${planta.nombreComun}</strong><br>
            <i>${planta.nombreCientifico}</i><br>
            Planta ${String(planta.numero).padStart(2, "0")}
        `);
    }
});