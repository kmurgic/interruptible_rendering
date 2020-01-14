import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const loremIpsumArticles = []

const capitalize = (str) => {
  if (str.indexOf(' ') >= 0) return (
    str.split(' ').map(str => capitalize(str)).join(' ')
  )
  return str.charAt(0).toUpperCase() + str.slice(1);
}


for (let i = 0; i < 100; i++) {
  loremIpsumArticles.push(
    {
      title: capitalize(lorem.generateWords(Math.ceil(Math.random() * 4))),
      body: lorem.generateParagraphs(45 + Math.floor(Math.random() * 30))
    }
  )
}

export default loremIpsumArticles;