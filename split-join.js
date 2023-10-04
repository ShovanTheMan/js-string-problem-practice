const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki.bosonto kale bondhu bolte pari ni';
const parts = lyrics.split(' ');
const sentence = lyrics.split('.');
const chars = lyrics.split('');
console.log(chars);
// console.log(sentence);

const partial = lyrics.slice(5, 8);
console.log(partial);
const partial2 = lyrics.substring(5, 8);
console.log(partial2);

const lines = ['Tumi bondhu kala Pakhi ami jeno ki','bosonto kale bondhu bolte pari ni'];

const newSong = lines.join(': ');
console.log(newSong);