
const generateRandomSoftwareQuote = () => {
  const randomSoftwareQuotes = ['Sometimes the idea behind a program is one small creative effort.',
    'The magic of a computer lies in its ability to become almost anything you can imagine, as long as you can explain exactly what that is.',
    'As a rule, software systems do not work well until they have been used, and have failed repeatedly, in real applications.'
  ];
  return (randomSoftwareQuotes[Math.floor(Math.random() * randomSoftwareQuotes.length)]);
}

console.log(generateRandomSoftwareQuote());