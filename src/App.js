import React, { useState } from 'react';
import './App.css';

// Arrays para las variables personalizadas
const DescripcionPrincipal = [ 'bosque encantado con árboles brillantes', 'ciudad futurista con rascacielos iluminados', 'paisaje montañoso nevado al amanecer',
  'playa tropical con agua cristalina y palmeras', 'retrato de un astronauta flotando en el espacio', 'castillo medieval rodeado de niebla',
  'fiesta de carnaval llena de disfraces y colores', 'tren de vapor antiguo pasando por un viaducto', 'robot sirviendo en una cafetería retro',
  'león rugiendo en medio de la selva', 'jardín con flores gigantes y mariposas', 'casa en un árbol rodeada de bosque denso',
  'dragón volando sobre un lago tranquilo', 'gato con gafas de sol y sombrero en una hamaca', 'océano profundo con un pez bioluminiscente',
  'biblioteca mágica con libros flotantes', 'volcán en erupción con lava brillante', 'mercado lleno de especias y frutas exóticas',
  'samurái en medio de un bosque de bambú', 'nave espacial despegando desde un planeta rojo', 'palacio real con decoraciones doradas',
  'desierto con una caravana de camellos', 'pingüino en una playa tropical', 'máquina de escribir antigua en un escritorio',
  'tiburón nadando cerca de un arrecife de coral', 'aurora boreal sobre una montaña nevada', 'ciudad inundada con edificios sumergidos',
  'mercado callejero lleno de luces y comida', 'chef cocinando en una cocina de lujo', 'templo antiguo en una selva profunda',
  'cascada oculta en un bosque tropical', 'tren rápido atravesando un túnel futurista', 'reloj de arena gigante en medio del desierto',
  'vaquero cabalgando en el atardecer', 'cuervo sobre una lápida en un cementerio', 'sirena en una cueva submarina',
  'arqueólogo descubriendo una ciudad perdida', 'ballena nadando cerca de un faro', 'bosque de setas gigantes y árboles brillantes',
  'nave alienígena aterrizando en un campo', 'escena de mercado medieval en un pueblo', 'astronauta explorando un planeta extraño',
  'perro y gato navegando en un barco pirata', 'buceador rodeado de peces tropicales', 'fiesta en una casa de árbol en la jungla',
  'familia de zorros en un bosque nevado', 'escena de bosque otoñal con hojas caídas', 'lago congelado con patinadores',
  'carnicero en un mercado medieval', 'espantapájaros en un campo de maíz', 'ciudad vertical de torres y jardines', 'un paisaje de Marte terraformado con ríos', 'un festival de drones iluminados en la noche',
  'una cafetería de realidad virtual', 'una granja vertical llena de plantas exóticas', 'un tren levitante pasando por el desierto',
  'un parque futurista con esculturas de hologramas', 'una torre de observación en un bosque gigante', 'un mercado de arte digital',
  'un robot jardinero trabajando en un jardín zen', 'un drone entregando paquetes en una ciudad', 'una casa flotante en un lago',
  'una isla artificial con vegetación tropical', 'una biblioteca futurista con libros digitales', 'un campamento en un bosque bioluminiscente',
  'una carretera con coches autónomos', 'una playa de arena negra', 'un edificio de oficinas cubierto de vegetación',
  'un estadio con una cubierta de energía solar', 'una fiesta de tecnología holográfica', 'una granja solar en medio de montañas',
  'una calle llena de vehículos eléctricos y bicicletas', 'un robot asistente en una clínica', 'una estación de recarga para vehículos',
  'un refugio moderno de cristal y acero en el bosque', 'un festival de linternas en una ciudad moderna', 'una isla eco-sostenible',
  'una escuela flotante en el océano', 'un restaurante bajo el agua', 'una fábrica completamente automatizada',
  'un parque de esculturas interactivo', 'una ciudad inteligente con edificios de energía verde', 'un faro en una isla de vidrio',
  'un museo de arte en un acantilado', 'una estación de investigación ártica', 'un rascacielos giratorio',
  'un puente peatonal con jardines colgantes', 'una zona de deportes extremos en un cañón', 'una cueva con estructuras cristalinas',
  'un centro de salud con arquitectura verde', 'una ciudad entre montañas con ríos flotantes', 'una nave espacial sobre una ciudad alienígena',
  'un río de lava en una caverna de hielo', 'un desierto con oasis bioluminiscentes', 'una casa en una isla volcánica',
  'una jungla con estructuras de cristal', 'una catedral con cúpulas de cristal', 'una estación espacial cerca de Saturno',
  'una ciudad subterránea con luz solar artificial', 'una torre de control en una ciudad futurista'
 ].sort();

const EstiloArtistico = [ 'realismo', 'impresionismo', 'surrealismo', 'cubismo', 'fotorrealismo',
  'arte digital', 'anime', 'cómic', 'pop art', 'retro vintage',
  'line art', 'art deco', 'art nouveau', 'minimalismo', 'low poly',
  'concept art', 'pixel art', 'grafiti', 'ciencia ficción', 'fantasía',
  'arte abstracto', 'barroco', 'neoclásico', 'realismo mágico', 'arte tribal',
  'vectorial', 'lápiz sobre papel', 'boceto', 'steampunk', 'fantasía oscura',
  'acuarela', 'óleo sobre lienzo', 'doodle art', 'gótico', 'cyberpunk',
  'arte tradicional chino', 'arte tradicional japonés', 'retro futurista', 'arte medieval', 'xilografía',
  'renacentista', 'arte conceptual de videojuegos', 'ilustración infantil', 'modernismo', 'futurismo',
  'hiperrealismo', 'vida silvestre realista', 'cartoon', 'neón', 'fotografía en blanco y negro', 'arte generativo', 'surrealismo digital', 'cyber glamour', 'neo retro', 'hyperpop', 
  'diseño low poly', 'arte de glitch', 'pixel moderno', '3D hiperrealista', 'mosaico digital',
  'arte de IA', 'fantasía moderna', 'arte vaporwave', 'arte synthwave', 'art deco moderno',
  'ilustración urbana', 'arte de doodle', 'realismo post-apocalíptico', 'arte eco-futurista', 'cyberpunk soft',
  'pixel minimalista', 'ilustración flat', 'tech noir', 'arte neón', 'biotecnológico',
  'fotografía en 4K', 'diseño paramétrico', 'realismo distópico', 'ilustración psicodélica', 'arte motion graphics',
  'pop surrealista', 'ilustración en VR', 'arte low-poly estilizado', 'arte de arquitectura verde', 'fotografía 360°',
  'arte NFT', 'diseño biológico', 'arte sincrético', 'ilustración de videojuegos', 'ilustración isométrica',
  'futurismo', 'bioarte', 'cyber barroco', 'arte glitch surrealista', 'arte fractal', 
  'arte de realidad aumentada', 'arte óptico', 'cine expandido', 'neocubismo', 'arte holográfico'
 ].sort();

const PaletaColores = [ 'tonos cálidos', 'tonos fríos', 'colores pastel', 'blanco y negro', 'monocromático',
  'sepia', 'colores neón', 'colores vibrantes', 'tonos tierra', 'colores suaves',
  'colores saturados', 'tono vintage', 'colores del atardecer', 'colores otoñales', 'tonos primaverales',
  'paleta minimalista', 'azul y dorado', 'rojo y negro', 'verde y gris', 'azul y blanco',
  'morado y rosa', 'amarillo y azul', 'paleta de alto contraste', 'tonos bronce', 'colores del océano',
  'colores místicos', 'tonos metálicos', 'paleta elegante', 'paleta oscura', 'paleta clara',
  'verdes tropicales', 'rojos y naranjas', 'tonos invernales', 'azul y púrpura', 'verde y marrón',
  'colores desaturados', 'paleta tropical', 'colores desérticos', 'blanco y dorado', 'verde bosque',
  'color agua marina', 'colores naturales', 'paleta monocromática', 'neón pastel', 'azul cielo',
  'marrón y beige', 'plateado y negro', 'colores arcoíris', 'paleta oscura de fantasía', 'rojo y dorado', 'tonos neón pastel', 'colores digitales', 'tonos de metal oxidado', 'tonos fríos cibernéticos', 'colores de bio-luz',
  'colores de pantallas LED', 'colores de arena del desierto', 'verde de selva tropical', 'rojo oxidado', 'tonos de playa al amanecer',
  'rojo intenso y azul profundo', 'colores de cielos exóticos', 'fucsia y cian', 'tonos de niebla', 'tonos de desierto volcánico',
  'verde fluorescente y negro', 'colores de aurora boreal', 'azul petróleo y bronce', 'tonos apagados y gris', 'colores de lava',
  'amarillo dorado y negro', 'verde hierba y marrón bosque', 'tonos de arena y roca', 'naranja y rosa en atardecer', 'azul y verde profundo',
  'colores de neón vaporwave', 'azul cielo profundo', 'color de amanecer urbano', 'amarillo suave y gris', 'tonos de gas neón',
  'colores de cristal y bruma', 'tonos de chatarra', 'grises metálicos', 'colores de galaxia', 'verdes y turquesas de bosque',
  'tonos de neón psicodélico', 'rojo brillante y naranja', 'tonos holográficos', 'azul hielo y blanco', 'negro con tonos brillantes',
  'colores del ártico', 'tonos metálicos pulidos', 'tonos de hierro y óxido', 'azul marino y plateado', 'tonos monocromáticos',
  'tonos grunge', 'colores de vidrio', 'colores de minerales', 'colores de luz cálida en invierno', 'tonos de jungla oscura'
 ].sort();

const DetallesAdicionales = [ 'con una niebla espesa', 'bajo la lluvia', 'en un atardecer brillante', 'con detalles dorados', 'con decoraciones florales',
  'en un día soleado', 'con luces de neón', 'con sombras dramáticas', 'con partículas flotantes', 'rodeado de mariposas',
  'con un arcoíris en el fondo', 'cubierto de musgo', 'con fuego en el horizonte', 'rodeado de nubes', 'bajo una luz misteriosa',
  'con detalles futuristas', 'con reflejos en el agua', 'cubierto de nieve', 'con edificios altos alrededor', 'con humo denso',
  'con una gran luna llena', 'en medio de una tormenta', 'con flores cayendo', 'con olas en el mar', 'con nubes de tormenta',
  'con hojas secas en el suelo', 'con una atmósfera tranquila', 'con estructuras oxidadas', 'con rayos de luz', 'con cristales de hielo',
  'rodeado de humo oscuro', 'con arcoíris de neón', 'cubierto de arena', 'con una aurora boreal', 'con el cielo estrellado',
  'con iluminación suave', 'con destellos de luz', 'con sombras marcadas', 'rodeado de fuego', 'con agua cristalina',
  'con una capa de hielo', 'con detalles detallados', 'con decoraciones de metal', 'con hojas verdes', 'con detalles surrealistas',
  'con reflejos metálicos', 'con detalles abstractos', 'rodeado de niebla', 'con nieve en el suelo', 'con brillo mágico', 'con paneles solares en el fondo', 'bajo lluvia de meteoritos', 'con detalles de hologramas', 'con jardines colgantes', 'rodeado de drones volando',
  'con neón en el horizonte', 'con luces de festival en el fondo', 'bajo la aurora boreal', 'con detalles de vegetación futurista', 'rodeado de agua cristalina',
  'con estructuras de luz', 'con cristales flotando alrededor', 'con tecnología de fibra óptica', 'cubierto de musgo verde brillante', 'rodeado de montañas futuristas',
  'con detalles de vidrio roto', 'con hologramas publicitarios', 'con murales urbanos', 'con estructuras de metal oxidado', 'con nubes de niebla brillante',
  'con reflejos en charcos', 'con árboles de luz', 'con luces bioluminiscentes', 'con vegetación de alta tecnología', 'con rayos de sol en ángulo',
  'con detalles de chatarra oxidada', 'rodeado de aves digitales', 'con circuitos brillando', 'con detalles pixelados', 'con neblina de neón',
  'con estructuras de vidrio transparente', 'cubierto de arena dorada', 'con detalles de graffiti futurista', 'con estructuras fractales', 'con puentes de cristal',
  'rodeado de animales holográficos', 'con tecnología de camuflaje', 'con drones de seguridad', 'con luces de neón suave', 'con vegetación de cristal',
  'con vapor de humo verde', 'con pantallas de información', 'con partículas digitales en el aire', 'con flores de vidrio', 'con detalles de acero y cobre',
  'con árboles de energía', 'con polvo de estrellas', 'con robots trabajando', 'con texturas de luz suave', 'con esculturas digitales', 'con reflejos holográficos', 'rodeado de luces neón', 'con partículas digitales flotando', 
  'bajo una lluvia de meteoritos', 'con sombras largas y dramáticas', 'rodeado de cristales brillantes', 
  'con detalles en cromo pulido', 'con texturas de metal oxidado', 'cubierto de musgo bioluminiscente', 
  'con cables y circuitos visibles', 'con paneles solares en el fondo', 'bajo una luz de atardecer vibrante', 
  'con mariposas holográficas', 'con chispas eléctricas alrededor', 'con líneas geométricas en el suelo', 
  'rodeado de nubes de polvo brillante', 'con flora biotecnológica', 'con un brillo de neón en el horizonte', 
  'bajo una aurora boreal', 'con fragmentos de vidrio flotando', 'con sombras proyectadas por luces de LED', 
  'en un ambiente de niebla densa', 'con reflejos en charcos de agua', 'rodeado de drones en vuelo', 
  'con murales de grafiti futurista', 'con esculturas de cristal', 'con luces de ciudad en el fondo', 
  'con estructuras fractales', 'bajo luces intermitentes', 'con patrones en bioluminiscencia', 
  'rodeado de estatuas antiguas', 'con destellos metálicos', 'con pantallas holográficas alrededor', 
  'en medio de un bosque artificial', 'con paneles de energía solar en los techos', 'con texturas pixeladas', 
  'con rastros de vapor', 'con una atmósfera de neblina', 'con vegetación de alta tecnología', 
  'con un río de lava cercana', 'con decoraciones de cobre y bronce', 'con sombras geométricas en el suelo', 
  'con luz azulada proyectada', 'rodeado de esculturas interactivas', 'con vapor de agua flotando', 
  'bajo luces de farol en espiral', 'con un halo de luz detrás', 'con líneas de energía visibles', 
  'con caminos iluminados en el suelo', 'con gotas de agua reflejando la luz', 'con estructuras flotantes', 
  'con rayos de sol filtrándose', 'con bioluminiscencia en las plantas', 'rodeado de cristales de hielo', 
  'con edificios cubiertos de vegetación', 'con polvo cósmico en el ambiente', 'con cables colgando del techo', 
  'con fauna mecánica', 'con vegetación de metal oxidado', 'con partículas suspendidas en el aire', 
  'con estructuras de mármol pulido', 'bajo un cielo lleno de estrellas', 'con esculturas en forma de engranajes', 
  'con estructuras minimalistas', 'con elementos de vidrio transparente', 'rodeado de pantallas digitales', 
  'con patrones de mosaico en el suelo', 'con detalles de fibra óptica', 'con muros de acero inoxidable', 
  'con charcos de agua reflejando luces', 'con hologramas suspendidos', 'con vegetación fosforescente', 
  'con luces doradas en las esquinas', 'con humo suave en el ambiente', 'con detalles de engranajes visibles', 
  'con plantas de cristal', 'con luces de señalización en el suelo', 'con luces láser en el aire', 
  'con rastros de hielo en las esquinas', 'con grietas que emiten luz', 'con un reflejo dorado en el ambiente', 
  'rodeado de nubes de vapor neón', 'con bioluminiscencia en el agua', 'con nieve suave cayendo', 
  'con símbolos antiguos en las paredes', 'con columnas de luz azul', 'con estatuas futuristas de metal', 
  'rodeado de agua cristalina', 'con muros cubiertos de grafiti', 'con jardines verticales iluminados', 
  'con texturas líquidas', 'con sombras entrelazadas', 'con circuitos de luz visibles', 
  'con polvo flotando en haces de luz', 'con árboles luminosos', 'con cables colgantes de energía', 
  'con un reflejo azul en las superficies', 'con detalles de niebla densa', 'con texturas holográficas en el suelo'
 ].sort();

const Composicion = [ 'vista aérea', 'primer plano', 'panorámica', 'de perfil', 'vista desde arriba',
  'perspectiva en picado', 'en ángulo bajo', 'centrado', 'regla de tercios', 'plano medio',
  'cerca del suelo', 'desde una esquina', 'tomado desde abajo', 'vista frontal', 'desde una ventana',
  'desde un puente', 'detrás del personaje', 'en diagonal', 'en 3/4', 'cámara lenta',
  'en perspectiva amplia', 'de gran angular', 'cerca de la acción', 'alejado', 'en perspectiva inclinada',
  'con profundidad de campo', 'en movimiento', 'sobre un acantilado', 'dentro de una cueva', 'desde una nave',
  'plano de detalle', 'con enfoque profundo', 'a contraluz', 'en alto contraste', 'desde la distancia',
  'en una llanura amplia', 'con desenfoque de fondo', 'en perspectiva extendida', 'con foco en el personaje', 'con los elementos en primer plano',
  'a nivel de los ojos', 'en toma de noche', 'en ángulo medio', 'en modo retrato', 'en vista ampliada',
  'en ángulo superior', 'en foco bajo', 'en vista lejana', 'en perspectiva lateral', 'centrado en el protagonista', 'ángulo cenital', 'composición simétrica', 'a gran escala', 'composición en espiral', 'en patrón fractal',
  'en primer plano borroso', 'detalle central', 'perspectiva isométrica', 'a nivel de calle', 'con reflejos simétricos',
  'en contrapicado dramático', 'en vista aérea dinámica', 'con luz traslúcida', 'composición en Z', 'con ángulo de gran angular',
  'composición envolvente', 'tomada desde un drone', 'en vista ascendente', 'en perspectiva ultra-wide', 'detalle lateral izquierdo',
  'a nivel del suelo con desenfoque', 'vista en ángulo bajo', 'en 360 grados', 'en panorámica continua', 'en forma triangular',
  'detalle en 3D', 'perspectiva paralela', 'en diagonal descendente', 'en composición tridimensional', 'en estilo mirilla',
  'con acercamiento extremo', 'composición con gradiente de desenfoque', 'en primer plano marcado', 'vista angular invertida', 'detalle en semi-círculo',
  'tomado desde detrás del objeto', 'perspectiva envolvente', 'con punto de fuga marcado', 'composición cruzada', 'desde la derecha superior',
  'ángulo en curva', 'con perspectiva sin distorsión', 'a nivel de ojo humano', 'detalle en acercamiento', 'vista en bucle', 
  'composición en capas', 'detalles simétricos de luz', 'en vista de túnel', 'con profundidad visual', 'composición en múltiples planos'
 ].sort();

const Perspectiva = [ 'vista lateral', 'vista en picado', 'vista desde atrás', 'vista en contrapicado', 'vista de pájaro',
  'en perspectiva de inmersión', 'desde una ventana', 'a nivel de los ojos', 'vista isométrica', 'desde una esquina superior',
  'en perspectiva forzada', 'con perspectiva exagerada', 'con profundidad de campo', 'vista 3/4', 'con perspectiva simétrica',
  'desde el suelo', 'con enfoque en el personaje', 'desde arriba', 'a ras de suelo', 'en primer plano',
  'en contrapicado extremo', 'a nivel del suelo', 'con ángulo inclinado', 'con perspectiva amplia', 'en perspectiva surrealista',
  'con fondo borroso', 'vista cercana', 'en primerísimo plano', 'a nivel de ojo de insecto', 'vista en gran angular',
  'con profundidad exagerada', 'en point of view', 'desde una montaña', 'desde un dron', 'en perspectiva ascendente',
  'en ángulo leve', 'en toma central', 'con desenfoque en los bordes', 'con ángulo de héroe', 'en perspectiva amplia',
  'con enfoque dramático', 'a nivel del personaje', 'desde una nave espacial', 'desde un edificio alto', 'desde el mar',
  'vista desde una roca', 'desde un árbol alto', 'en perspectiva clásica', 'con enfoque de detalle', 'desde la mirada del personaje', 'desde el punto de vista de un robot', 'perspectiva desde el interior de una cúpula', 'a vista de dron', 'vista desde un nivel subterráneo', 'perspectiva de holograma',
  'perspectiva con fondo borroso', 'vista en ojo de pez', 'perspectiva desde un edificio alto', 'vista frontal de nivel humano', 'a nivel de superficie del agua',
  'desde un punto de luz superior', 'en toma diagonal superior', 'con efecto de profundidad digital', 'a vista de caleidoscopio', 'perspectiva virtual aumentada',
  'en contrapicado amplio', 'vista cenital dinámica', 'desde un espejo', 'vista en ultra wide', 'con efecto de visión de túnel',
  'vista cercana en VR', 'desde un plano vertical', 'en perspectiva geométrica', 'a nivel de holograma', 'en perspectiva flotante',
  'con perspectiva de luces y sombras', 'a nivel de superficie', 'en primer plano invertido', 'a nivel de tierra con drones', 'en plano visual interactivo',
  'desde un ángulo aéreo', 'perspectiva en 4D', 'con efecto de profundidad digital', 'vista envolvente', 'desde un ángulo lateral ascendente',
  'desde el nivel del suelo con luz baja', 'con visión hiperrealista', 'a nivel de personaje virtual', 'en vista de ciudad flotante', 'vista amplia desde la izquierda',
  'vista desde un nivel alto', 'perspectiva en 3D inmersiva', 'vista de construcción digital', 'a nivel de ciudad iluminada', 'vista de túnel largo', 
  'desde una altura media', 'perspectiva con líneas convergentes', 'vista de ciudad moderna', 'con visión en espiral', 'perspectiva de visión robótica'
 ].sort();

const ResolucionFormato = [ 'alta resolución', '4K', 'HD', 'resolución baja', 'cuadrado', 'formato vertical', 
  'formato horizontal', 'panorámico', 'proporción 16:9', 'proporción 4:3', 'proporción 1:1', 
  'formato para redes sociales', 'formato de impresión', 'resolución fotorrealista', 'ultra HD', 
  'formato retrato', 'formato paisaje', 'formato cine', 'optimizado para móvil', 'resolución web'
].sort();

const Protagonista = [ 'una inteligencia artificial antropomórfica', 'un dron autónomo explorador', 'un cyborg con tecnología avanzada', 
  'una hacker en un traje de realidad aumentada', 'una científica en una base de investigación lunar', 'un astronauta en un planeta alienígena', 
  'un equipo de astronautas en Marte', 'un androide con emociones humanas', 'una inteligencia artificial en un dispositivo portátil', 
  'un mago tecnológico', 'una celebridad digital en un mundo virtual', 'un robot jardinero', 'una pandilla de drones de entrega', 
  'una nave espacial con inteligencia propia', 'un viajero interdimensional', 'un explorador espacial solitario', 'un artista en un estudio futurista', 
  'una arqueóloga en una ciudad sumergida', 'un ingeniero de ciudades flotantes', 'una comunidad de colonos en una ciudad lunar', 
  'un robot asistente personal', 'un conductor de vehículos autónomos', 'un diseñador de realidad virtual', 'un equipo de arquitectos de ciudades ecológicas', 
  'un agricultor de granjas verticales', 'una IA que toma decisiones humanas', 'un alienígena amistoso en una misión diplomática', 
  'un programador de drones inteligentes', 'un grupo de exploradores virtuales', 'una familia en un hogar inteligente', 
  'un dron de vigilancia en una ciudad cibernética', 'un maestro de tecnologías avanzadas', 'un científico de materiales bioluminiscentes', 
  'un mecánico de robots gigantes', 'un equipo de trabajadores de la realidad aumentada', 'un robot con habilidades culinarias', 
  'un ingeniero de prótesis robóticas', 'un grupo de scouts espaciales', 'un líder de un asentamiento sostenible', 
  'una nave de carga autónoma', 'un comerciante de recursos intergalácticos', 'un aventurero en una nave estelar', 
  'un explorador de realidades virtuales', 'una IA con un sentido de la estética', 'una familia de hologramas interactivos', 
  'un guardián de una ciudad flotante', 'un investigador de planetas habitables', 'una escuadra de salvamento espacial', 
  'un creador de arte holográfico', 'un androide explorador de junglas', 'un protector de hábitats en peligro', 
  'un tecnólogo de ciudades inteligentes', 'un ingeniero de drones submarinos', 'un piloto de vehículos voladores', 
  'una especie alienígena en una embajada', 'un inventor de biotecnología', 'una IA médica', 'un robot de conservación ambiental', 
  'un navegador de asteroides', 'un científico climático en una estación polar', 'un entrenador de animales holográficos', 
  'un artista de realidad mixta', 'un grupo de constructores de hábitats espaciales', 'una tribu de nómadas espaciales', 
  'un espía en un mundo virtual', 'una comunidad de robots de limpieza urbana', 'un comandante de una nave de exploración', 
  'un androide piloto', 'una tribu digital en un bosque virtual', 'una inteligencia artificial que controla un ecosistema', 
  'un comerciante de bienes virtuales', 'un filósofo androide', 'una médica de robots', 'una soldado de una misión intergaláctica', 
  'un grupo de refugiados en un mundo artificial', 'un líder de una colonia subacuática', 'un médico en una ciudad sostenible', 
  'un científico que cultiva órganos', 'un comerciante de impresoras 3D', 'una experta en drones de rescate', 
  'un androide minero', 'un creador de paisajes digitales', 'una inteligencia artificial exploradora', 'un protector de biomas digitales', 
  'una tribu de criaturas holográficas', 'un avatar de una plataforma social virtual', 'un comandante de un ejército de drones', 
  'un ingeniero de realidad extendida', 'una chef en un restaurante automatizado', 'una experta en nanotecnología médica', 
  'una banda de músicos digitales', 'un organizador de deportes de realidad aumentada', 'un diseñador de jardines bioluminiscentes', 
  'un héroe de un videojuego en un mundo abierto', 'una IA de asistencia mental', 'un técnico de sistemas de inteligencia artificial', 
  'un explorador de la galaxia digital', 'un androide con habilidades artísticas', 'una inteligencia en una red de sensores', 
  'un soldado de un mundo virtual de batalla', 'un piloto de exoesqueletos en un planeta hostil'
 ].sort();

const Enfoque = [ ' total en el personaje en primer plano', 'personaje en el centro de la composición', ' en la textura de la piel del personaje',
  'concentración de luz en el personaje', ' extremo en los detalles del rostro del protagonista', ' suave en el fondo para resaltar el personaje',
  ' en la iluminación que rodea al personaje', 'énfasis en la sombra proyectada del personaje', ' en el movimiento del personaje', 
  ' de cámara a nivel de los ojos del personaje', 'vista detallada del personaje en un ángulo bajo', ' en el contorno de la silueta',
  ' en los ojos del personaje', 'iluminación principal en el personaje', ' de cerca en el objeto principal', ' en la composición simétrica de la escena',
  'personaje captado en toma holandesa (ángulo inclinado)', ' en las líneas de la arquitectura', 'personaje visto en un gran angular', 
  ' total en la descripción principal, mientras el fondo queda desenfocado', ' macro en los detalles del personaje', ' en los reflejos sobre el personaje',
  'vista cenital sobre el personaje', ' desde un ángulo bajo hacia el personaje', 'detalles del personaje enfatizados con des de fondo', 
  ' de luz en los contornos del protagonista', ' en el rostro con fondo desenfocado', 'toma en primer plano de los gestos del personaje',
  ' en el juego de sombras en la escena', ' en el paisaje con personaje en segundo plano', 'foco en la interacción entre los personajes', 
  ' en el objeto más cercano a la cámara', 'personaje en gran angular con elementos secundarios desenfocados', ' en la expresión facial del protagonista',
  'personaje centrado con luz de fondo suave', ' suave en el paisaje que rodea al personaje', 'toma desde la parte superior del personaje',
  ' en las texturas de la escena', 'resaltando el color de la escena', 'paleta de colores destacada, suavizando los detalles', 
  'detalles de luz reflejados en el personaje', 'cámara en ángulo recto hacia el personaje', ' en las sombras y luces que resaltan al personaje',
  ' en el contraste entre el personaje y el fondo', 'foco en el color del objeto principal', ' en la acción del personaje',
  'cámara en close-up sobre el rostro del protagonista', 'luz suave centrada en la descripción principal', 'iluminación que resalta los colores de la paleta',
  ' en la composición equilibrada', 'personaje en primer plano y fondo en des', ' con poca luz en los detalles de la descripción principal',
  ' de cámara lenta sobre el personaje', 'contraste alto en la paleta de colores para destacar', ' en los bordes y contornos de la escena',
  'toma angular destacando la descripción principal', ' en el movimiento del personaje', ' en el paisaje, con el personaje al fondo',
  'énfasis en los elementos de primer plano', 'cámara en ángulo invertido para el protagonista', 'vista en primer plano de los detalles de la escena',
  ' de colores fríos para el ambiente', ' de cámara fija en la descripción principal', ' en los reflejos y sombras en la escena',
  ' en el protagonista desde una esquina', 'toma de cámara lejana para captar el entorno', 'vista angular con énfasis en la escala de la escena',
  'detalle en profundidad con des de fondo', 'luz focal en el objeto principal', ' en la iluminación natural',
  ' en los bordes suaves de la escena', 'luz de fondo para destacar al personaje', 'vista panorámica con el personaje en el centro',
  ' en los reflejos del agua alrededor del personaje', 'detalles en la textura de la ropa del protagonista', ' en los elementos simétricos de la escena',
  'toma cercana en el rostro del personaje', 'vista de cámara en movimiento', ' en los reflejos de cristales en la escena',
  ' en la estructura arquitectónica en el fondo', 'perspectiva amplia resaltando el personaje en el paisaje', 'detalles enfatizados en el color de fondo',
  'perspectiva en diagonal con personaje destacado', ' en el centro con des radial', 'iluminación suave resaltando la escena',
  'contraste elevado para destacar el objeto principal', ' en la textura de la piel del personaje', ' en el brillo de las luces del entorno',
  ' en la paleta de colores, con saturación alta', 'detalles de cámara lenta en la escena', ' en la geometría del fondo',
  ' suave con bordes difuminados', 'luz dirigida hacia el personaje', ' en la paleta de neón', ' en el personaje bajo un ángulo superior',
  'toma de cámara en vista isométrica sobre el protagonista', ' sobre la silueta del personaje en contraluz', 'detalles intensificados en el paisaje',
  ' en el centro de la escena, con los bordes oscuros', 'luz de fondo para el personaje', 'toma fija para captar el movimiento del personaje',
  'detalles de primer plano en los elementos secundarios', 'foco en la dinámica del personaje', ' en la interacción de luz y sombra'
 ].sort();

const Jerarquia = [ 'el personaje principal domina el centro de la escena', 'la descripción principal es el núcleo visual', 'la paleta de colores establece el tono general',
  'los detalles en primer plano enfatizan la escena', 'los elementos secundarios se despliegan alrededor del protagonista', 'la luz dirige la atención al personaje',
  'la descripción principal sobresale sobre los detalles menores', 'el fondo está desenfocado para resaltar el enfoque central', 'los elementos de fondo apoyan la narrativa sin competir',
  'el protagonista es el punto focal de la composición', 'los detalles secundarios enriquecen la historia', 'los elementos en la periferia rodean el protagonista',
  'el personaje se coloca en un espacio dominante', 'la iluminación crea una capa de profundidad', 'el contraste guía la vista hacia el protagonista',
  'la narrativa se centra en la interacción del personaje con el entorno', 'los elementos secundarios acentúan el contexto', 'los detalles en segundo plano completan la escena',
  'los colores guían la emoción de la imagen', 'el personaje está en el centro de la acción', 'la descripción principal domina el espacio visual',
  'los elementos de fondo quedan desenfocados', 'los objetos en primer plano captan la primera mirada', 'los detalles de fondo crean ambiente sin interferir',
  'la jerarquía visual dirige hacia el personaje', 'el protagonista sobresale en un espacio despejado', 'los colores definen la atmósfera de la narrativa',
  'el personaje y el entorno forman una conexión visual', 'los detalles ambientales refuerzan el enfoque', 'el fondo añade contexto sin ser distractor',
  'la luz resalta los elementos de la narrativa', 'el protagonista está en el centro con un fondo simplificado', 'los detalles cercanos están claramente enfocados',
  'los elementos de fondo se difuminan para resaltar el personaje', 'los objetos clave están bien definidos en el primer plano', 'el contraste entre personaje y fondo es prominente',
  'el personaje central recibe más iluminación', 'el entorno se ajusta a la narrativa del personaje', 'los detalles circundantes construyen contexto',
  'el personaje domina la perspectiva de la escena', 'la estructura de la escena sigue una jerarquía descendente', 'la luz direcciona hacia el personaje',
  'el fondo es tenue para dar peso al personaje', 'el enfoque guía la atención de arriba hacia abajo', 'los detalles secundarios están suavizados en el fondo',
  'el centro es el punto de enfoque principal', 'los objetos en los bordes actúan como marco visual', 'la narrativa favorece el protagonismo del personaje',
  'los detalles de la escena enriquecen sin competir', 'la luz guía hacia el objeto clave en el centro', 'el contraste está centrado en el personaje',
  'el protagonista tiene el espacio abierto alrededor', 'los elementos lejanos son menos detallados', 'el entorno visual está diseñado para realzar al personaje',
  'el personaje destaca con fondo simplificado', 'los detalles ambientales no distraen', 'la paleta de colores gradúa la atención hacia el centro',
  'los elementos lejanos sirven como apoyo', 'el punto central está dominado por el personaje', 'la jerarquía empieza en el personaje y fluye hacia los lados',
  'la narrativa prioriza la acción principal', 'los elementos secundarios crean equilibrio en la escena', 'el contraste resalta la acción principal',
  'el entorno realza la importancia del protagonista', 'los elementos en primer plano guían la atención inicial', 'los colores contrastan para dirigir la vista',
  'el personaje tiene el espacio de mayor peso', 'los detalles en segundo plano están atenuados', 'el contraste visual dirige al punto central',
  'el personaje es visualmente dominante', 'los elementos de fondo enmarcan el protagonista', 'la luz organiza la jerarquía en la escena',
  'el entorno crea un halo de enfoque en el personaje', 'el primer plano es claro, mientras que el fondo es suave', 'los objetos cercanos tienen colores vibrantes',
  'el personaje está iluminado con precisión', 'los detalles de fondo complementan sin distraer', 'la narrativa fluye de personaje a contexto',
  'la iluminación centra al protagonista', 'los elementos lejanos se disuelven visualmente', 'el personaje en el centro está resaltado por sombras suaves',
  'el fondo establece la escena sin sobresalir', 'los detalles están claramente organizados en niveles', 'los colores organizan la jerarquía de enfoque',
  'el personaje central es el foco de luz', 'la escena es asimétrica con un centro dominante', 'la narrativa dirige primero al personaje',
  'los detalles secundarios están en baja saturación', 'el contraste entre el personaje y el fondo es evidente', 'los detalles en la periferia son tenues',
  'la escena usa un gradiente para guiar la atención', 'el enfoque es gradual desde el personaje hacia el fondo', 'el protagonista es claramente diferenciado del fondo',
  'los elementos de apoyo son opacos', 'el entorno está diseñado para sostener al personaje', 'los colores están organizados para dirigir la mirada'
 ].sort();

const Intencion = [ 'crea una atmósfera misteriosa', 'transmite una sensación de tranquilidad', 'genera una impresión de grandeza', 
  'evoca un sentimiento de nostalgia', 'da un aire de aventura', 'produce una sensación de paz', 
  'proyecta una emoción de valentía', 'genera un efecto futurista', 'transmite una sensación de descubrimiento', 
  'enfatiza la fuerza del personaje', 'transmite vulnerabilidad', 'genera un ambiente sombrío', 
  'crea una impresión de infinito', 'proyecta una sensación de alegría', 'mantiene un tono neutral', 
  'da una sensación de energía', 'transmite una atmósfera de peligro', 'genera una sensación de velocidad', 
  'enfatiza la elegancia', 'evoca un sentimiento de soledad', 'resalta una atmósfera de innovación', 
  'genera un efecto de cercanía', 'transmite una emoción de misterio', 'evoca un sentido de aventura y riesgo', 
  'produce una atmósfera cálida', 'transmite un sentimiento de solemnidad', 'da una impresión de esperanza', 
  'crea una atmósfera de confort', 'genera un ambiente de calma', 'resalta una impresión de ligereza', 
  'transmite una sensación de modernidad', 'genera una emoción de asombro', 'proyecta un sentimiento de introspección', 
  'enfatiza la armonía', 'resalta la serenidad', 'crea una atmósfera de dramatismo', 
  'da una sensación de control', 'genera una emoción de urgencia', 'transmite una atmósfera de serenidad', 
  'evoca un sentimiento de pertenencia', 'resalta una atmósfera de intensidad', 'crea una impresión de grandeza y poder', 
  'genera una sensación de frescura', 'da una impresión de desconexión', 'transmite una atmósfera de lejanía', 
  'enfatiza la precisión y el detalle', 'genera una sensación de fascinación', 'transmite una emoción de calma y profundidad', 
  'proyecta un aire de magia', 'genera una atmósfera opresiva', 'evoca un sentimiento de seguridad', 
  'transmite una atmósfera de desafío', 'genera una sensación de grandeza espiritual', 'produce una impresión de temporalidad', 
  'proyecta un sentimiento de romanticismo', 'genera una atmósfera abstracta', 'transmite una emoción de sorpresa', 
  'da una sensación de cercanía emocional', 'resalta una atmósfera de unidad', 'evoca un aire de exclusividad', 
  'proyecta una sensación de frescura y naturalidad', 'genera una atmósfera experimental', 'transmite un sentimiento de heroísmo', 
  'resalta un tono de calidez', 'genera una emoción de sorpresa', 'crea una atmósfera de elegancia minimalista', 
  'produce una impresión de contraste', 'transmite un sentido de desolación', 'genera una atmósfera vibrante', 
  'crea una impresión de pureza', 'resalta una atmósfera de incertidumbre', 'genera una emoción de fuerza interior', 
  'transmite un aire de independencia', 'proyecta una atmósfera de reflexión', 'genera una sensación de riesgo controlado', 
  'transmite una atmósfera de espiritualidad', 'resalta un tono de optimismo', 'produce una impresión de libertad', 
  'evoca una sensación de protección', 'genera una atmósfera suave y armoniosa', 'transmite una emoción de valentía y audacia', 
  'crea una atmósfera de pasión', 'resalta una atmósfera de minimalismo', 'produce una impresión de delicadeza', 
  'transmite una sensación de estructura y orden', 'genera una atmósfera de misterio suave', 'transmite un sentimiento de lujo', 
  'genera un ambiente surrealista', 'crea una impresión de neutralidad', 'proyecta una atmósfera festiva', 
  'transmite una emoción de aventura', 'genera un efecto visual dinámico', 'proyecta una atmósfera de equilibrio', 
  'genera un ambiente etéreo', 'crea una impresión de fuerza en unidad', 'evoca una sensación de levedad', 
  'transmite una atmósfera de control', 'genera un ambiente de sorpresa agradable', 'crea una sensación de lo inexplicable'
 ].sort();

 function App() {
  // Estado para cada variable
  const [variableDescripcionPrincipal, setVariableDescripcionPrincipal] = useState('');
  const [variableEstiloArtistico, setVariableEstiloArtistico] = useState('');
  const [variablePaletaColores, setVariablePaletaColores] = useState('');
  const [variableDetallesAdicionales, setVariableDetallesAdicionales] = useState('');
  const [variableComposicion, setVariableComposicion] = useState('');
  const [variablePerspectiva, setVariablePerspectiva] = useState('');
  const [variableResolucionFormato, setVariableResolucionFormato] = useState('');
  const [variableProtagonista, setVariableProtagonista] = useState('');
  const [variableEnfoque, setVariableEnfoque] = useState('');
  const [variableJerarquia, setVariableJerarquia] = useState('');
  const [variableIntencion, setVariableIntencion] = useState('');

  // Función para generar el prompt
  const generatePrompt = () => {
    const prompt = `Imagine a scene with ${variableDescripcionPrincipal}, in ${variableEstiloArtistico} style, using a ${variablePaletaColores} color palette. The scene includes ${variableDetallesAdicionales} with ${variableComposicion} composition. It has a ${variablePerspectiva} perspective, ${variableResolucionFormato} resolution and format, focused on ${variableProtagonista} as the main character. Emphasis on ${variableEnfoque} and ${variableJerarquia}. Intent: ${variableIntencion}.`;
    alert(prompt);
  };

  // Función para reiniciar los dropdowns
  const resetFields = () => {
    setVariableDescripcionPrincipal('');
    setVariableEstiloArtistico('');
    setVariablePaletaColores('');
    setVariableDetallesAdicionales('');
    setVariableComposicion('');
    setVariablePerspectiva('');
    setVariableResolucionFormato('');
    setVariableProtagonista('');
    setVariableEnfoque('');
    setVariableJerarquia('');
    setVariableIntencion('');
  };

  // Función para copiar el prompt al portapapeles
  const copyToClipboard = () => {
    const prompt = `Imagine a scene with ${variableDescripcionPrincipal}, in ${variableEstiloArtistico} style, using a ${variablePaletaColores} color palette. The scene includes ${variableDetallesAdicionales} with ${variableComposicion} composition. It has a ${variablePerspectiva} perspective, ${variableResolucionFormato} resolution and format, focused on ${variableProtagonista} as the main character. Emphasis on ${variableEnfoque} and ${variableJerarquia}. Intent: ${variableIntencion}.`;
    navigator.clipboard.writeText(prompt)
      .then(() => alert('Prompt copied to clipboard'))
      .catch(error => alert('Failed to copy prompt: ' + error));
  };

  return (
    <div className='App'>
      <h1>ImagePrompt Generator for DALL-E</h1>
      <div className='select-container'>

        {/* Descripción Principal */}
        <div>
          <label>Descripción Principal
            <span onClick={() => alert("Define la escena principal que deseas que DALL-E interprete.")}> ⓘ</span>
          </label>
          <select value={variableDescripcionPrincipal} onChange={(e) => setVariableDescripcionPrincipal(e.target.value)}>
            <option value=''>No aplica</option>
            {DescripcionPrincipal.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Estilo Artístico */}
        <div>
          <label>Estilo Artístico
            <span onClick={() => alert("Selecciona el estilo visual o artístico que define el tipo de imagen generada.")}> ⓘ</span>
          </label>
          <select value={variableEstiloArtistico} onChange={(e) => setVariableEstiloArtistico(e.target.value)}>
            <option value=''>No aplica</option>
            {EstiloArtistico.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Paleta de Colores */}
        <div>
          <label>Paleta de Colores
            <span onClick={() => alert("Selecciona la paleta de colores que define la atmósfera de la imagen.")}> ⓘ</span>
          </label>
          <select value={variablePaletaColores} onChange={(e) => setVariablePaletaColores(e.target.value)}>
            <option value=''>No aplica</option>
            {PaletaColores.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Detalles Adicionales */}
        <div>
          <label>Detalles Adicionales
            <span onClick={() => alert("Añade detalles adicionales para enriquecer la imagen.")}> ⓘ</span>
          </label>
          <select value={variableDetallesAdicionales} onChange={(e) => setVariableDetallesAdicionales(e.target.value)}>
            <option value=''>No aplica</option>
            {DetallesAdicionales.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Composición */}
        <div>
          <label>Composición
            <span onClick={() => alert("Define la disposición visual de los elementos en la imagen.")}> ⓘ</span>
          </label>
          <select value={variableComposicion} onChange={(e) => setVariableComposicion(e.target.value)}>
            <option value=''>No aplica</option>
            {Composicion.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Perspectiva */}
        <div>
          <label>Perspectiva
            <span onClick={() => alert("Selecciona la perspectiva o el ángulo de la cámara para enmarcar la imagen.")}> ⓘ</span>
          </label>
          <select value={variablePerspectiva} onChange={(e) => setVariablePerspectiva(e.target.value)}>
            <option value=''>No aplica</option>
            {Perspectiva.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Resolución y Formato */}
        <div>
          <label>Resolución y Formato
            <span onClick={() => alert("Especifica la resolución y el formato para la imagen generada.")}> ⓘ</span>
          </label>
          <select value={variableResolucionFormato} onChange={(e) => setVariableResolucionFormato(e.target.value)}>
            <option value=''>No aplica</option>
            {ResolucionFormato.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Protagonista */}
        <div>
          <label>Protagonista
            <span onClick={() => alert("Selecciona el personaje principal o el objeto de enfoque en la escena.")}> ⓘ</span>
          </label>
          <select value={variableProtagonista} onChange={(e) => setVariableProtagonista(e.target.value)}>
            <option value=''>No aplica</option>
            {Protagonista.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Enfoque */}
        <div>
          <label>Enfoque
            <span onClick={() => alert("Especifica el nivel de detalle o el área de enfoque visual para la imagen.")}> ⓘ</span>
          </label>
          <select value={variableEnfoque} onChange={(e) => setVariableEnfoque(e.target.value)}>
            <option value=''>No aplica</option>
            {Enfoque.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Jerarquía */}
        <div>
          <label>Jerarquía
            <span onClick={() => alert("Define la prioridad visual de los elementos en la composición.")}> ⓘ</span>
          </label>
          <select value={variableJerarquia} onChange={(e) => setVariableJerarquia(e.target.value)}>
            <option value=''>No aplica</option>
            {Jerarquia.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Intención */}
        <div>
          <label>Intención
            <span onClick={() => alert("Selecciona la intención emocional o atmosférica para guiar el resultado.")}> ⓘ</span>
          </label>
          <select value={variableIntencion} onChange={(e) => setVariableIntencion(e.target.value)}>
            <option value=''>No aplica</option>
            {Intencion.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Botones */}
      <button onClick={generatePrompt}>Ver prompt</button>
      <button onClick={resetFields}>Reiniciar</button>
      <button onClick={copyToClipboard}>Copiar al portapapeles</button>
    </div>
  );
}

export default App;
