const typeOfSuscription = 'Basic';
switch (typeOfSuscription) {
  case 'Free':
    console.log('Solo puedes tomar los cursos gratis');
    break;
  case 'Basic':
    console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
    break;
  case 'Expert':
    console.log('Puedes tomar todos los cursos de Platzi durante un año');
    break;
  default:
    console.log('Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año');
    break;
}

if (typeOfSuscription == 'Basic') {
  console.log('Solo puedes tomar los cursos gratis');
  return;//Break
} else {
  console.log('Sorry');
}