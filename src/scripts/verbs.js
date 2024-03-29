// Array de base para poner los verbos
const emptyObject = {infinitive: '', trdPerson: '', past: '', pastParticiple: '', geround: '', spanish: ''}

// Array de verbos regulares
const regularVerbs = [
  {infinitive: 'open', trdPerson: 'opens', past: 'opened', pastParticiple: 'opened', geround: 'opening', spanish: 'abrir'},
  {infinitive: 'accept', trdPerson: 'accepts', past: 'accepted', pastParticiple: 'accepted', geround: 'accepting', spanish: 'aceptar'},
  {infinitive: 'love', trdPerson: 'loves', past: 'loved', pastParticiple: 'loved', geround: 'loving', spanish: 'amar'},
  {infinitive: 'learn', trdPerson: 'learns', past: 'learned', pastParticiple: 'learned', geround: 'learning', spanish: 'aprender'},
  {infinitive: 'hurry', trdPerson: 'hurries', past: 'hurried', pastParticiple: 'hurried', geround: 'hurrying', spanish: 'apresurarse'},
  {infinitive: 'dare', trdPerson: 'dares', past: 'dared', pastParticiple: 'dared', geround: 'daring', spanish: 'atreverse'},
  {infinitive: 'help', trdPerson: 'helps', past: 'helped', pastParticiple: 'helped', geround: 'helping', spanish: 'ayudar'},
  {infinitive: 'dance', trdPerson: 'dances', past: 'danced', pastParticiple: 'danced', geround: 'dancing', spanish: 'bailar'},
  {infinitive: 'erase', trdPerson: 'erases', past: 'erased', pastParticiple: 'erased', geround: 'erasing', spanish: 'borrar'},
  {infinitive: 'change', trdPerson: 'changes', past: 'changed', pastParticiple: 'changed', geround: 'changing', spanish: 'cambiar'},
]

// Array de verbos irregulares
const irregularVerbs = [
  {infinitive: 'sweep', trdPerson: 'sweeps', past: 'swept', pastParticiple: 'swept', geround: 'sweeping', spanish: 'barrer'},
  {infinitive: 'drink', trdPerson: 'drinks', past: 'drank', pastParticiple: 'drunk', geround: 'drinking', spanish: 'beber'},
  {infinitive: 'ride', trdPerson: 'rides', past: 'rode', pastParticiple: 'ridden', geround: 'riding', spanish: 'cabalgar'},
  {infinitive: 'fall', trdPerson: 'falls', past: 'fell', pastParticiple: 'fallen', geround: 'falling', spanish: 'caer'},
  {infinitive: 'sing', trdPerson: 'sings', past: 'sang', pastParticiple: 'sung', geround: 'singing', spanish: 'cantar'},
  {infinitive: 'set', trdPerson: 'sets', past: 'set', pastParticiple: 'set', geround: 'setting', spanish: 'colocar'},
  {infinitive: 'eat', trdPerson: 'eats', past: 'ate', pastParticiple: 'eaten', geround: 'eating', spanish: 'comer'},
  {infinitive: 'buy', trdPerson: 'buys', past: 'bought', pastParticiple: 'bought', geround: 'buying', spanish: 'comprar'},
  {infinitive: 'meet', trdPerson: 'meets', past: 'met', pastParticiple: 'met', geround: 'meeting', spanish: 'conocer'},
  {infinitive: 'know', trdPerson: 'knows', past: 'knew', pastParticiple: 'known', geround: 'knowing', spanish: 'saber'},
]

//Verbos irregulares en presente perfecto
const presentPerfectVerbs = {
  "be": "been",
  "break": "broken",
  "bring": "brought",
  "build": "built",
  "choose": "chosen",
  "come": "come",
  "do": "done",
  "draw": "drawn",
  "drive": "driven",
  "eat": "eaten",
  "fall": "fallen",
  "feel": "felt",
  "find": "found",
  "fly": "flown",
  "forget": "forgotten",
  "get": "gotten",
  "give": "given",
  "go": "gone",
  "grow": "grown",
  "have": "had",
  "hear": "heard",
  "hide": "hidden",
  "hit": "hit",
  "hold": "held",
  "keep": "kept",
  "know": "known",
  "leave": "left",
  "let": "let",
  "lose": "lost",
  "make": "made",
  "mean": "meant",
  "meet": "met",
  "pay": "paid",
  "put": "put",
  "read": "read",
  "ride": "ridden",
  "ring": "rung",
  "run": "run",
  "say": "said",
  "see": "seen",
  "sell": "sold",
  "send": "sent",
  "show": "shown",
  "sing": "sung",
  "sit": "sat",
  "sleep": "slept",
  "speak": "spoken",
  "spend": "spent",
  "stand": "stood",
  "take": "taken",
  "teach": "taught",
  "tell": "told",
  "think": "thought",
  "understand": "understood",
  "wear": "worn",
  "win": "won",
  "write": "written"
};

//Verbos irregulares en gerundio
const gerundVerbs = {
  "be": "being",
  "break": "breaking",
  "bring": "bringing",
  "build": "building",
  "choose": "choosing",
  "come": "coming",
  "do": "doing",
  "draw": "drawing",
  "drive": "driving",
  "eat": "eating",
  "fall": "falling",
  "feel": "feeling",
  "find": "finding",
  "fly": "flying",
  "forget": "forgetting",
  "get": "getting",
  "give": "giving",
  "go": "going",
  "grow": "growing",
  "have": "having",
  "hear": "hearing",
  "hide": "hiding",
  "hit": "hitting",
  "hold": "holding",
  "keep": "keeping",
  "know": "knowing",
  "leave": "leaving",
  "let": "letting",
  "lose": "losing",
  "make": "making",
  "mean": "meaning",
  "meet": "meeting",
  "pay": "paying",
  "put": "putting",
  "read": "reading",
  "ride": "riding",
  "ring": "ringing",
  "run": "running",
  "say": "saying",
  "see": "seeing",
  "sell": "selling",
  "send": "sending",
  "show": "showing",
  "sing": "singing",
  "sit": "sitting",
  "sleep": "sleeping",
  "speak": "speaking",
  "spend": "spending",
  "stand": "standing",
  "take": "taking",
  "teach": "teaching",
  "tell": "telling",
  "think": "thinking",
  "understand": "understanding",
  "wear": "wearing",
  "win": "winning",
  "write": "writing"
};

//Verbos irregulares en tercera persona
const thirdPersonVerbs = {
  "be": "is",
  "break": "breaks",
  "bring": "brings",
  "build": "builds",
  "choose": "chooses",
  "come": "comes",
  "do": "does",
  "draw": "draws",
  "drive": "drives",
  "eat": "eats",
  "fall": "falls",
  "feel": "feels",
  "find": "finds",
  "fly": "flies",
  "forget": "forgets",
  "get": "gets",
  "give": "gives",
  "go": "goes",
  "grow": "grows",
  "have": "has",
  "hear": "hears",
  "hide": "hides",
  "hit": "hits",
  "hold": "holds",
  "keep": "keeps",
  "know": "knows",
  "leave": "leaves",
  "let": "lets",
  "lose": "loses",
  "make": "makes",
  "mean": "means",
  "meet": "meets",
  "pay": "pays",
  "put": "puts",
  "read": "reads",
  "ride": "rides",
  "ring": "rings",
  "run": "runs",
  "say": "says",
  "see": "sees",
  "sell": "sells",
  "send": "sends",
  "show": "shows",
  "sing": "sings",
  "sit": "sits",
  "sleep": "sleeps",
  "speak": "speaks",
  "spend": "spends",
  "stand": "stands",
  "take": "takes",
  "teach": "teaches",
  "tell": "tells",
  "think": "thinks",
  "understand": "understands",
  "wear": "wears",
  "win": "wins",
  "write": "writes"
};

//Verbos irregulares con su significado en español
const verbosEnEspanol = {
  "be": "ser/estar",
  "break": "romper",
  "bring": "traer",
  "build": "construir",
  "choose": "elegir",
  "come": "venir",
  "do": "hacer",
  "draw": "dibujar",
  "drive": "conducir",
  "eat": "comer",
  "fall": "caer",
  "feel": "sentir",
  "find": "encontrar",
  "fly": "volar",
  "forget": "olvidar",
  "get": "conseguir",
  "give": "dar",
  "go": "ir",
  "grow": "crecer",
  "have": "tener",
  "hear": "oir",
  "hide": "esconder",
  "hit": "golpear",
  "hold": "sostener",
  "keep": "mantener",
  "know": "saber/conocer",
  "leave": "dejar/salir",
  "let": "permitir/dejar",
  "lose": "perder",
  "make": "hacer",
  "mean": "significar",
  "meet": "encontrar",
  "pay": "pagar",
  "put": "poner",
  "read": "leer",
  "ride": "montar",
  "ring": "llamar/sonar",
  "run": "correr",
  "say": "decir",
  "see": "ver",
  "sell": "vender",
  "send": "enviar",
  "show": "mostrar",
  "sing": "cantar",
  "sit": "sentarse",
  "sleep": "dormir",
  "speak": "hablar",
  "spend": "gastar",
  "stand": "estar de pie",
  "take": "tomar",
  "teach": "enseñar",
  "tell": "decir/contar",
  "think": "pensar",
  "understand": "entender",
  "wear": "usar/llevar puesto",
  "win": "ganar",
  "write": "escribir"
};

//Verbos irregulares en todos los tiempos y en español
const verbosIrregulares = {
  presentPerfectVerbs: {
    "be": "been",
    "break": "broken",
    "bring": "brought",
    "build": "built",
    "buy": "bought",
    "catch": "caught",
    "choose": "chosen",
    "come": "come",
    "do": "done",
    "draw": "drawn",
    "drive": "driven",
    "eat": "eaten",
    "fall": "fallen",
    "feel": "felt",
    "find": "found",
    "fly": "flown",
    "forget": "forgotten",
    "get": "gotten",
    "give": "given",
    "go": "gone",
    "grow": "grown",
    "have": "had",
    "hear": "heard",
    "hide": "hidden",
    "hit": "hit",
    "hold": "held",
    "keep": "kept",
    "know": "known",
    "leave": "left",
    "let": "let",
    "lose": "lost",
    "make": "made",
    "mean": "meant",
    "meet": "met",
    "pay": "paid",
    "put": "put",
    "read": "read",
    "ride": "ridden",
    "ring": "rung",
    "run": "run",
    "say": "said",
    "see": "seen",
    "sell": "sold",
    "send": "sent",
    "show": "shown",
    "sing": "sung",
    "sit": "sat",
    "sleep": "slept",
    "speak": "spoken",
    "spend": "spent",
    "stand": "stood",
    "take": "taken",
    "teach": "taught",
    "tell": "told",
    "think": "thought",
    "understand": "understood",
    "wear": "worn",
    "win": "won",
    "write": "written"
  },
  gerundVerbs : {
    "be": "being",
    "break": "breaking",
    "bring": "bringing",
    "build": "building",
    "choose": "choosing",
    "come": "coming",
    "do": "doing",
    "draw": "drawing",
    "drive": "driving",
    "eat": "eating",
    "fall": "falling",
    "feel": "feeling",
    "find": "finding",
    "fly": "flying",
    "forget": "forgetting",
    "get": "getting",
    "give": "giving",
    "go": "going",
    "grow": "growing",
    "have": "having",
    "hear": "hearing",
    "hide": "hiding",
    "hit": "hitting",
    "hold": "holding",
    "keep": "keeping",
    "know": "knowing",
    "leave": "leaving",
    "let": "letting",
    "lose": "losing",
    "make": "making",
    "mean": "meaning",
    "meet": "meeting",
    "pay": "paying",
    "put": "putting",
    "read": "reading",
    "ride": "riding",
    "ring": "ringing",
    "run": "running",
    "say": "saying",
    "see": "seeing",
    "sell": "selling",
    "send": "sending",
    "show": "showing",
    "sing": "singing",
    "sit": "sitting",
    "sleep": "sleeping",
    "speak": "speaking",
    "spend": "spending",
    "stand": "standing",
    "take": "taking",
    "teach": "teaching",
    "tell": "telling",
    "think": "thinking",
    "understand": "understanding",
    "wear": "wearing",
    "win": "winning",
    "write": "writing"
  },
  thirdPersonVerbs : {
    "be": "is",
    "break": "breaks",
    "bring": "brings",
    "build": "builds",
    "choose": "chooses",
    "come": "comes",
    "do": "does",
    "draw": "draws",
    "drive": "drives",
    "eat": "eats",
    "fall": "falls",
    "feel": "feels",
    "find": "finds",
    "fly": "flies",
    "forget": "forgets",
    "get": "gets",
    "give": "gives",
    "go": "goes",
    "grow": "grows",
    "have": "has",
    "hear": "hears",
    "hide": "hides",
    "hit": "hits",
    "hold": "holds",
    "keep": "keeps",
    "know": "knows",
    "leave": "leaves",
    "let": "lets",
    "lose": "loses",
    "make": "makes",
    "mean": "means",
    "meet": "meets",
    "pay": "pays",
    "put": "puts",
    "read": "reads",
    "ride": "rides",
    "ring": "rings",
    "run": "runs",
    "say": "says",
    "see": "sees",
    "sell": "sells",
    "send": "sends",
    "show": "shows",
    "sing": "sings",
    "sit": "sits",
    "sleep": "sleeps",
    "speak": "speaks",
    "spend": "spends",
    "stand": "stands",
    "take": "takes",
    "teach": "teaches",
    "tell": "tells",
    "think": "thinks",
    "understand": "understands",
    "wear": "wears",
    "win": "wins",
    "write": "writes"
  },
  verbosEnEspanol : {
    "be": "ser/estar",
    "break": "romper",
    "bring": "traer",
    "build": "construir",
    "choose": "elegir",
    "come": "venir",
    "do": "hacer",
    "draw": "dibujar",
    "drive": "conducir",
    "eat": "comer",
    "fall": "caer",
    "feel": "sentir",
    "find": "encontrar",
    "fly": "volar",
    "forget": "olvidar",
    "get": "conseguir",
    "give": "dar",
    "go": "ir",
    "grow": "crecer",
    "have": "tener",
    "hear": "oir",
    "hide": "esconder",
    "hit": "golpear",
    "hold": "sostener",
    "keep": "mantener",
    "know": "saber/conocer",
    "leave": "dejar/salir",
    "let": "permitir/dejar",
    "lose": "perder",
    "make": "hacer",
    "mean": "significar",
    "meet": "encontrar",
    "pay": "pagar",
    "put": "poner",
    "read": "leer",
    "ride": "montar",
    "ring": "llamar/sonar",
    "run": "correr",
    "say": "decir",
    "see": "ver",
    "sell": "vender",
    "send": "enviar",
    "show": "mostrar",
    "sing": "cantar",
    "sit": "sentarse",
    "sleep": "dormir",
    "speak": "hablar",
    "spend": "gastar",
    "stand": "estar de pie",
    "take": "tomar",
    "teach": "enseñar",
    "tell": "decir/contar",
    "think": "pensar",
    "understand": "entender",
    "wear": "usar/llevar puesto",
    "win": "ganar",
    "write": "escribir"
  }
};



export {regularVerbs, irregularVerbs};