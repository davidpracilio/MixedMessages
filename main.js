const generateRandomQuote = quoteType => {
  switch (quoteType) {
    case 'software':
      return generateRandomSoftwareQuote();
    case 'motivational':
      return generateRandomMotivationalQuote();
    default:
      return 'Invalid selection.';
  }
} 


const generateRandomSoftwareQuote = () => {
  const randomSoftwareQuotes = ['Sometimes the idea behind a program is one small creative effort.',
    'The magic of a computer lies in its ability to become almost anything you can imagine, as long as you can explain exactly what that is.',
    'As a rule, software systems do not work well until they have been used, and have failed repeatedly, in real applications.'
  ];
  return (randomSoftwareQuotes[Math.floor(Math.random() * randomSoftwareQuotes.length)]);
}

const generateRandomMotivationalQuote = () => {
  const randomSoftwareQuotes = ['Learn as if you will live forever, live like you will die tomorrow.',
    'It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.',
    'Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.'
  ];
  return (randomSoftwareQuotes[Math.floor(Math.random() * randomSoftwareQuotes.length)]);
}

console.log(generateRandomQuote('software'));