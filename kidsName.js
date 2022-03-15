let name = 'Katya';
// variable with some kid  name
switch(name){ // opening cycle
  case 'Gosha': // if name = 'Gosha' print "Gosha is my kid"
    console.log(`${name} is my kid`);
    break; // end of cycle if OK
  case 'Katya': 
    console.log(`${name} is my kid`); // the same
    break;
  case 'Ilya':
    console.log(`${name} is my kid`); // the same
    break;
  default: // if none of conditions - print "Its not my kid"
    console.log('Its not my kid');
    break;
}
