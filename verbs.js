const emptyObject = {infinitive: '', trdPerson: '', past: '', pastParticiple: '', geround: '', spanish: ''}

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
  {infinitive: 'change', trdPerson: '', past: 'changes', pastParticiple: 'changed', geround: 'changing', spanish: 'cambiar'},
]

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

// export {regularVerbs, irregularVerbs};