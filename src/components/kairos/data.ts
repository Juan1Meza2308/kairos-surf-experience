import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import instructor3 from "@/assets/instructor-3.jpg";

// TODO: reemplazar por el número real de WhatsApp de Kairos Surf School.
export const WHATSAPP_NUMBER = "573000000000";
export const INSTAGRAM_URL = "https://instagram.com/kairossurf.co";
export const MEETING_POINT = "Kairos Surf School, Puerto Colombia, Atlántico, Colombia";
export const MAP_EMBED =
  "https://www.google.com/maps?q=Kairos+surf+school&ll=11.0050288,-74.9526294&z=17&output=embed";

export type Instructor = {
  id: string;
  nombre: string;
  rol: string;
  img: string;
  alt: string;
  historia: string;
  estilo: string;
  estiloTag: string;
  mejorPara: string;
};

export const instructores: Instructor[] = [
  {
    id: "andres",
    nombre: "Andrés Payares",
    rol: "Instructor de surf · 12 años en el agua",
    img: instructor1,
    alt: "Andrés Payares, instructor de surf de Kairos, sonriendo frente al mar en Puerto Colombia",
    historia:
      "Creció a dos cuadras del muelle. Aprendió a los 14 con una tabla prestada y sin instructor: se paró bien la tercera tarde y se cayó cientos de veces antes. Enseña desde 2016 porque, según él, nadie debería pasar por esa curva de aprendizaje solo.",
    estilo:
      "Relajado y paciente. Repite la misma instrucción las veces que haga falta y no sube el nivel hasta que el alumno lo pida. Habla poco dentro del agua y corrige sobre todo con gestos y con el empuje de la tabla.",
    estiloTag: "Paciente · sin presión",
    mejorPara: "Primera clase, personas nerviosas con el mar, adultos mayores de 45.",
  },
  {
    id: "mariana",
    nombre: "Mariana Cera",
    rol: "Instructora de surf y paddle · técnica",
    img: instructor2,
    alt: "Mariana Cera, instructora de surf y paddle de Kairos, junto a una tabla turquesa en la playa",
    historia:
      "Venía de la natación de competencia y llegó al surf a los 19 buscando algo menos cronometrado. Terminó obsesionada con la técnica del remo y del pop-up. Es la que más filma clases: dice que uno no entiende su propio error hasta que se ve.",
    estilo:
      "Técnica y exigente en la forma, cálida en el trato. Divide el movimiento en partes, filma cada serie y hace una devolución concreta al final: qué mejoró, qué falta, qué practicar en casa.",
    estiloTag: "Técnica · con video",
    mejorPara:
      "Quien ya se para y quiere corregir vicios, deportistas, gente que aprende mejor viendo datos.",
  },
  {
    id: "ramiro",
    nombre: "Ramiro Ortiz",
    rol: "Instructor de paddle y clases familiares",
    img: instructor3,
    alt: "Ramiro Ortiz, instructor de paddle de Kairos, sentado junto a tablas en la arena al atardecer",
    historia:
      "Pescador durante 20 años antes de dedicarse al paddle. Conoce las corrientes de la zona mejor que cualquier parte meteorológico y es quien decide si un día no está para clase. Empezó enseñando a sus nietos.",
    estilo:
      "Conversado y muy centrado en la seguridad. Dedica más tiempo del habitual a leer el mar con el alumno: dónde rompe, dónde no meterse, cómo salir si algo pasa. Ritmo tranquilo, muchas pausas.",
    estiloTag: "Seguridad · familias",
    mejorPara: "Niños desde 7 años, grupos familiares, personas que no nadan con soltura.",
  },
];

export type Plan = {
  id: string;
  nombre: string;
  precio: string;
  duracion: string;
  ratio: string;
  incluye: string[];
  paraQuien: string;
};

export const planes: Plan[] = [
  {
    id: "individual",
    nombre: "Clase individual",
    precio: "$120.000 COP",
    duracion: "2 h (aprox. 45–60 min dentro del agua)",
    ratio: "1 alumno por instructor",
    incluye: ["Tabla y licra", "Teoría en arena", "Fotos de la sesión", "Instructor a elección"],
    paraQuien:
      "Primera vez, o quien quiere corregir algo puntual y avanzar rápido sin esperar turno.",
  },
  {
    id: "grupal",
    nombre: "Clase grupal",
    precio: "$80.000 COP por persona",
    duracion: "2 h (aprox. 40 min dentro del agua)",
    ratio: "3 a 4 alumnos por instructor",
    incluye: ["Tabla y licra", "Teoría en arena", "Fotos grupales"],
    paraQuien:
      "Amigos o pareja que van juntos. Se avanza algo más lento porque el instructor rota entre todos.",
  },
  {
    id: "ninos",
    nombre: "Clase para niños",
    precio: "$90.000 COP",
    duracion: "1 h 30 (aprox. 35 min dentro del agua)",
    ratio: "2 niños por instructor",
    incluye: ["Tabla blanda y chaleco", "Juegos de equilibrio", "Acompañamiento en orilla"],
    paraQuien: "Desde 7 años. Sesión más corta y siempre en agua donde el niño hace pie.",
  },
  {
    id: "paquete",
    nombre: "Paquete de 5 clases",
    precio: "$500.000 COP",
    duracion: "5 sesiones de 2 h",
    ratio: "1 alumno por instructor",
    incluye: [
      "Todo lo de la clase individual",
      "Plan de progreso escrito",
      "Video de la 1ª y la 5ª",
    ],
    paraQuien:
      "Quien quiere realmente aprender: con 5 sesiones la mayoría rema, se para y elige su ola sola.",
  },
  {
    id: "yoga",
    nombre: "Yoga + Surf",
    precio: "$140.000 COP",
    duracion: "3 h (1 h de yoga + clase)",
    ratio: "Hasta 6 personas",
    incluye: ["Yoga al amanecer en la arena", "Clase de surf", "Fruta e hidratación"],
    paraQuien: "Quien busca la mañana completa y llegar al agua con el cuerpo ya movido.",
  },
];

export const faqs = [
  {
    q: "¿Necesito estar en forma?",
    a: "No. La clase no es un entrenamiento: remas en tramos cortos y descansas entre olas. Lo que más cansa es la remada, y por eso el instructor te empuja la tabla en las primeras. Si tienes lesión de hombro, rodilla o espalda, cuéntanoslo antes y adaptamos la sesión.",
  },
  {
    q: "No nado bien. ¿Es un problema?",
    a: "No es impedimento, pero sí condiciona dónde te ponemos. Toda la clase de principiante ocurre en agua donde haces pie (entre la cintura y el pecho) y siempre con el instructor a menos de dos metros. Si no nadas, dilo al reservar: te asignamos a Ramiro y trabajamos más cerca de la orilla.",
  },
  {
    q: "¿Cuánto tardo en pararme en la tabla?",
    a: "Con instructor y en olas de espuma, la mayoría se para en la primera clase, normalmente entre el intento 5 y el 15. Pararse no es lo mismo que surfear: leer la ola, remar solo y elegirla toma entre 4 y 8 sesiones.",
  },
  {
    q: "¿Qué pasa si no hay olas o llueve?",
    a: "Si el mar está plano, la clase se puede hacer igual con paddle o la reprogramamos sin costo. Si hay mar de fondo fuerte, corriente o tormenta eléctrica, se cancela: la decisión la toma el instructor la mañana misma y te avisamos por WhatsApp mínimo 2 horas antes. Lluvia suave sin viento no cancela nada.",
  },
  {
    q: "¿Cuántas personas hay por instructor?",
    a: "Individual: 1. Grupal: 3 o 4 como máximo. Niños: 2. Nunca metemos más gente de la anunciada aunque queden cupos por vender.",
  },
  {
    q: "¿Qué debo llevar puesto?",
    a: "Vestido de baño puesto desde casa. Nosotros ponemos licra y tabla. Trae protector solar resistente al agua (mejor mineral), toalla, agua y una muda seca. Nada de gafas sueltas, cadenas ni reloj: se pierden.",
  },
  {
    q: "¿Hay edad mínima o máxima?",
    a: "Mínima 7 años. Máxima no hay: el alumno de mayor edad hasta hoy tenía 68 y se paró en la segunda clase. Los menores de 16 necesitan autorización de un acudiente presente.",
  },
  {
    q: "¿Se puede pagar en el sitio?",
    a: "Sí. La reserva se confirma por WhatsApp y el pago se hace en efectivo o transferencia el mismo día, antes de entrar al agua.",
  },
];

export const testimonios = [
  {
    texto:
      "Llegué convencida de que no iba a poder porque no nado bien. Ramiro me dejó una hora en agua a la cintura hasta que perdí el miedo y recién ahí subimos de nivel. Me paré al final de la clase.",
    autor: "Carolina M.",
    detalle: "Clase individual, marzo",
  },
  {
    texto:
      "Ya me paraba, pero remaba pésimo. Mariana me filmó tres series y me mostró que estaba muy atrás en la tabla. Cambió todo en una sesión.",
    autor: "Julián R.",
    detalle: "Paquete de 5 clases",
  },
  {
    texto:
      "El día que reservamos el mar estaba feo y nos escribieron a las 6 a.m. para reprogramar. No intentaron dictarla igual. Eso me hizo volver.",
    autor: "Familia Pérez Ávila",
    detalle: "Clase grupal, dos adultos y un niño de 9",
  },
  {
    texto:
      "Tengo 61 años y llevaba dos décadas sin hacer deporte. Andrés no me apuró ni una vez. Salí adolorida y feliz.",
    autor: "Nubia S.",
    detalle: "Clase individual",
  },
];

export const timeline = [
  {
    hora: "0:00 – 0:15",
    titulo: "Bienvenida y equipo",
    texto:
      "Nos vemos en Kairos Surf School. Te entregamos licra y tabla según tu peso y estatura, y revisamos si tienes alguna lesión o miedo concreto al agua.",
  },
  {
    hora: "0:15 – 0:45",
    titulo: "Teoría en la arena",
    texto:
      "Postura, remada y pop-up sobre la tabla en seco, repetido hasta que salga sin pensarlo. También leemos el mar del día: dónde rompe, dónde está la corriente y por dónde entrar y salir.",
  },
  {
    hora: "0:45 – 1:40",
    titulo: "Práctica en el agua",
    texto:
      "Entre 40 y 60 minutos efectivos. Empiezas en espuma con el instructor empujando la tabla; si el día y tu nivel lo permiten, pasas a remar tus propias olas.",
  },
  {
    hora: "1:40 – 2:00",
    titulo: "Feedback, fotos y video",
    texto:
      "Salimos, estiramos y revisamos lo que se filmó. Te decimos con claridad qué hiciste bien, qué falló y qué trabajar la próxima vez. Las fotos te llegan el mismo día.",
  },
];
