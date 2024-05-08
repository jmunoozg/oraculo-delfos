function mostrarPreguntas() {
    var preguntasContainer = document.getElementById("preguntas-container");

    if (preguntasContainer.style.display === "none" || preguntasContainer.style.display === "") {
        preguntasContainer.style.display = "block";
    } else {
        preguntasContainer.style.display = "none";
    }
}


document.addEventListener("DOMContentLoaded", function() {
  // Obtener el parámetro de la URL
  const params = new URLSearchParams(window.location.search);
  const preguntaIndex = parseInt(params.get('pregunta'));

  // Array de respuestas
  const respuestas = [
      {
          pregunta: "¿Conviene actuar como lo hicieron nuestros antepasados?",
          fecha: "principios del siglo VI a. C",
          respuesta: "Está bien hacer lo que hicieron vuestros antepasados.",
          textoGriego: "Texto en griego (si conservado)",
          imagen: "url_de_la_imagen_1.jpg",
          temaConsulta: "Desconocido",
          modoTransmision: "Directo (inscripción epigráfica)",
          oraculo:"Dídima",
      },
      {
        pregunta: "¿Es conveniente declarar la ciudad de Teos inviolable?",
        fecha: "201 a. C",
        respuesta: "El territorio de Teos debe ser sagrado e inviolable",
        textoGriego: "Texto en griego (si conservado)",
        imagen: "url_de_la_imagen_1.jpg",
        temaConsulta: "Condición sagrada para la ciudad de Teos",
        modoTransmision: "Indirecta, testimonio. El texto griego de la consulta no se ha conservado de manera directa. Sí contamos con una inscripción cretense que reproduce indirectamente tanto la pregunta como la respuesta, recogiendo lo siguiente: <br><br><em>Los de Teos llegaron antes de la asamblea, presentaron la resolución y en persona disertaron de acuerdo con las cláusulas particulares registradas en la propuesta sobre el carácter sagrado e inviolable de su país; y esto lo apoyaron con los oráculos de Apolo en Delfos y Dídima.</em>",
        oraculo:"Dídima",
    },
    {
      pregunta: "¿Debería regresar o no a Macedonia?",
      fecha: "334 a. C",
      respuesta: "No debes ir con prisa a Europa. Asia es mucho mejor para ti",
      textoGriego: "Texto en griego (si conservado)",
      imagen: "url_de_la_imagen_1.jpg",
      temaConsulta: "Seleuco desea regresar a Macedonia",
      modoTransmision: "Indirecta (conservada en Apiano, historiador romano de origen griego)",
      oraculo:"Dídima",
  },
  {
    pregunta: "Seleuco consulta acerca de su muerte",
    fecha: "334-330 a. C",
    respuesta: "Si evitas ir a Argos llegarás a tu edad destinada; pero si vas a Argos, entonces morirás antes de tu tiempo.",
    textoGriego: "Texto en griego (si conservado)",
    imagen: "url_de_la_imagen_1.jpg",
    temaConsulta: "Seleuco pregunta acerca de su muerte, preocupado por ella.",
    modoTransmision: "Indirecta (conservada en Apiano, historiador romano de origen griego)",
    oraculo:"Dídima",
},
{
  pregunta: "¿Fue Cristo Dios u hombre?",
  fecha: "[?]",
  respuesta: "Fue mortal en carne, sabio en sus obras milagrosas, pero condenado por jueces caldeos fue crucificado en postes, llegando a un amargo final.",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  temaConsulta: "Sobre el carácter mortal de Cristo",
  modoTransmision: "Indirecta (conservada en Lactancio, autor latino, en <em>Institutiones Divinae</em>). Se trata seguramente de una sentencia de invención cristiana, aunque Lactancio creyó que se trataba realmente de un dictado del oráculo.",
  oraculo:"Dídima",
},
{
  pregunta: "¿Sobrevive el alma a la muerte, o se desvanece?",
  fecha: "[?]",
  respuesta: "En tanto que el alma está unida con cadenas al cuerpo, esta se enfrenta a experiencias corruptoras y cede a males mortales. Pero cuando esta encuentra rápida liberación mortal después de la descomposición del cuerpo, asciende enteramente al cielo, siendo eterna, y permanece incorruptible por siempre. Porque esto es lo que ordenó la divina providencia nacida en primer lugar.",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  temaConsulta: "Sobre la inmortalidad del alma",
  modoTransmision: "Indirecta (conservada en Lactancio, autor latino, en <em>Institutiones Divinae</em>).",
  oraculo:"Dídima",
},
{
  pregunta: "Lyrkos pregunta acerca de concebir hijos.",
  fecha: "[?]",
  respuesta: "Embarazará a la primera mujer con la que yazca después de dejar el templo",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  temaConsulta: "Lyrkos pregunta sobre el nacimiento de niños, tras mucho tiempo tratando de tener hijos.",
  modoTransmision: "Indirecta (conservada en Nikaiteo y en Apolonio de Rodas). <br><br>Observaciones: La pregunta literal no ha sido transmitida ni por Nikaiteo ni por Apolonio de Rodas.",
  oraculo:"Dídima",
},
{
  pregunta: "¿Es admisible y ventajoso para la diosa prestar este dinero?",
  fecha: "[?]",
  respuesta: "-",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  traduccion: "<em>El koinon de los Mondaiates interroga a Zeus Naios y Diona sobre el dinero de Temis: ¿es admisible y ventajoso para la diosa de prestar este dinero?</em>",
  temaConsulta: "Sobre el préstamo del dinero de Temis",
  modoTransmision: "Directa",
  oraculo:"Dodona",
},
{
  pregunta: "Los de Dodona preguntan la causa del mal tiempo",
  fecha: "[?]",
  respuesta: "-",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  traduccion: "<em>Los de Dodona preguntan a Zeus y Diona si es por la impureza de algún individuo que el dios envía el mal tiempo.</em>",
  temaConsulta: "Sobre el clima",
  modoTransmision: "Directo",
  oraculo:"Dodona",
},
{
  pregunta: "Felicidad y matrimonio futuro",
  fecha: "[?]",
  respuesta: "-",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  traduccion: "Respecto a mi futura esposa, pregunto si puedo tener felicidad",
  temaConsulta: "Matrimonial/Felicidad",
  modoTransmision: "Directo",
  oraculo:"Dodona",
},
{
  pregunta: "¿Qué hago con mi esposa?",
  fecha: "[?]",
  respuesta: "Quédate (con tu esposa)",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  temaConsulta: "Sobre el matrimonio",
  modoTransmision: "Directa",
  oraculo:"Dodona",
},
{
  pregunta: "¿Tendrá hijos si tiene sexo conmigo?",
  fecha: "[?]",
  respuesta: "-",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  temaConsulta: "Descendencia",
  modoTransmision: "Directa",
  oraculo:"Dodona",
},
{
  pregunta: "¿No es mío el niño? ¿Está embarazada?",
  fecha: "[?]",
  respuesta: "-",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  traduccion: "<em> Lisanias interroga a Zeus Naios y Diona: ¿no es suyo el niño? ¿Annyla está embarazada?</em>",
  temaConsulta: "Paternidad/Descendencia",
  modoTransmision: "Directa",
  oraculo:"Dodona",
},
{
  pregunta: "¿Debería solicitar la ciudadanía ahora o más tarde?",
  fecha: "350-250 a. C",
  respuesta: "-",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  temaConsulta: "Solicitud de ciudadanía",
  modoTransmision: "Directa",
  oraculo:"Dodona",
},
{
  pregunta: "¿Conviene bañar la pierna de mi hijo en manantial?",
  fecha: "[?]",
  respuesta: "-",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  traduccion: "<em>Amyntas pregunta a Zeus Naios y Diona si es mejor y es ventajoso bañar la pierna de su hijo en un manantial.</em>",
  temaConsulta: "Salud de su hijo",
  modoTransmision: "Directa",
  oraculo:"Dodona",
},
{
  pregunta: "¿Tendré éxito dedicándome a criar patos?",
  fecha: "[?]",
  respuesta: "-",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  traduccion: "<em> Dios. Buena fortuna. El consultor se pregunta si, al dedicarse a criando patos, puede tener éxito y experimentar el éxito para el presente y para el futuro.</em>",
  temaConsulta: "Sobre la crianza de patos y el éxito",
  modoTransmision: "Directa",
  oraculo:"Dodona",
},
{
  pregunta: "¿Podré encontrar trabajo mudándome al extranjero?",
  fecha: "450-425 a. C",
  respuesta: "-",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  temaConsulta: "Sobre el trabajo en el extranjero",
  modoTransmision: "Directa",
  oraculo:"Dodona",
},
{
  pregunta: "¿Puedo estar informado sobre lugares donde no hay piratas?",
  fecha: "[?]",
  respuesta: "-",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  traduccion: "<em>Habiendo decidido zarpar hacia Apolonia, ¿puede el consultor estar informado sobre lugares donde no hay piratas?</em>",
  temaConsulta: "Sobre la piratería",
  modoTransmision: "Directa",
  oraculo:"Dodona",
},
{
  pregunta: "¿Será ventajoso recurrir a la persuasión para el negocio?",
  fecha: "[?]",
  respuesta: "-",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  traduccion: "<em>¿Será ventajoso para Pystakion, en lo que respecta a su negocio, recurrir a todos los medios enérgicos de persuasión que pueda?</em>",
  temaConsulta: "Sobre el éxito en los negocios.",
  modoTransmision: "Directa",
  oraculo:"Dodona",
},
{
  pregunta: "¿Dorkilos robó mi ropa?",
  fecha: "[?]",
  respuesta: "-",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  traduccion: "<em>¿Fue Dorkilos quién robó mi ropa?</em>",
  temaConsulta: "Sobre el robo de ropa",
  modoTransmision: "Directa",
  oraculo:"Dodona",
},
{
  pregunta: "¿Administró Timo una poción mágica?",
  fecha: "[?]",
  respuesta: "-",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  traduccion:"<em>¿Fue Timô quien le administró una poción mágica a Aristoboula?</em>",
  temaConsulta: "Pociones mágicas",
  modoTransmision: "Directa",
  oraculo:"Dodona",
},
{
  pregunta: "Los romanos preguntan acerca de la Segunda Guerra Púnica y su desenlace",
  fecha: "216 a. C",
  respuesta: "Haced un sacrificio a Zeus y a los otros dioses; pues si obráis así os encontraréis en una mejor situación, la república progresará de forma más acorde a vuestros deseos, y el pueblo romano resultará victorioso en la guerra. Enviad una ofrenda a Apolo fuera del erario público para preservar vuestra República y honrarlo a él con los botines de guerra; y mantener lejos de vosotros la inmoralidad.",
  textoGriego: "Texto en griego (si conservado)",
  imagen: "url_de_la_imagen_1.jpg",
  temaConsulta: "Segunda Guerra Púnica",
  modoTransmision: "Indirecta (transmitida por Fabio Pictor y Tito Livio entre otros.)",
  oraculo:"Delfos",
},
{
  pregunta: "¿Hay alguna posibilidad de perdón para mí por mi ofensa?",
  fecha: "50-100 d. C",
  respuesta: "Dios perdona todos los actos incontrolables.",
  textoGriego: "Texto en griego (si conservado)",
  temaConsulta: "Un sacerdote pregunta al oráculo sobre haber violado el celibato al haber mantenido relaciones sexuales con una mujer estando borracho.",
  modoTransmision: "Directa (verso)",
  oraculo:"Delfos",
},
{
  pregunta: "¿Qué es lo mejor para el hombre?",
  fecha: "590 a. C",
  respuesta: "Conócete a ti mismo.",
  textoGriego: "Texto en griego (si conservado)",
  temaConsulta: "Deseo de conocimiento",
  modoTransmision: "Directa (prosa) (transmitido por Aristóteles y Diógenes Laercio entre otros).",
  oraculo:"Delfos",
},


  ];

  const respuesta = respuestas[preguntaIndex - 1];

  // Mostrar la respuesta
  const respuestaDiv = document.getElementById("respuesta");
  respuestaDiv.innerHTML = `
      <h2>Pregunta: ${respuesta.pregunta}</h2>
      <h3>Fecha: ${respuesta.fecha}</h3>
      <p>Respuesta del oráculo: ${respuesta.respuesta}</p>
      <p>${respuesta.textoGriego}</p>
      <img src="${respuesta.imagen}" alt="Imagen">
      <p>Traducción: ${respuesta.traduccion}</p>
      <p>Tema de la consulta: ${respuesta.temaConsulta}</p>
      <p>Modo de transmisión: ${respuesta.modoTransmision}</p>
      <p>Oráculo al que pertenece: ${respuesta.oraculo}</p>
  `;
});


function irARespuesta(numero) {
  var nuevaPestana = window.open("", "_blank");
  nuevaPestana.location.href = "respuesta-oraculo/respuesta-oraculo" + numero + ".html";
}


// La función mostrarPreguntas permanece fuera del evento DOMContentLoaded
function mostrarPreguntas() {
var preguntasContainer = document.getElementById("preguntas-container");

if (preguntasContainer.style.display === "none" || preguntasContainer.style.display === "") {
    preguntasContainer.style.display = "block";
} else {
    preguntasContainer.style.display = "none";
}
}