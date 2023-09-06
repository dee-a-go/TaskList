// Note 1: I am aware that I could have used uuid, but I chose to implement my own solution just to practice.
// Note 2: I could have implemented a way to prevent the ID Generator from generating repeated ID's, but since there is a 1 in 10^24 chance that this will happen, I decided to ignore it.

const generateId = () => {
  const id = [];
  for (let i = 23; i >= 0; i--) {
    id.push(Math.round(Math.random() * 9))
    if (i !== 0 && i % 4 === 0) {
      id.push("-")
    }
  }
  return id.join('');
}

export default generateId;