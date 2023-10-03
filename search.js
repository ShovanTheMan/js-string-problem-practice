const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki.bosonto kale bondhu bolte pari ni';
const searchString = 'Pakhi';
// const doesExist = lyrics.includes('pakhi');
const lyricsLowercase = lyrics.toLowerCase();
// const doesExist = lyricsLowercase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowercase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);
// indexOf

console.log(lyrics.indexOf('kaila'));
console.log(lyrics.indexOf('Tumi'));

// 

if(lyrics.indexOf('kala') !== -1){
         console.log('exist inside the string');
}
else{
    console.log('cannot find it');

}
// startsWith

console.log(lyrics.startsWith('Tumi'));

// endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
fileName.endsWith('.pdf');
console.log(fileName.endsWith('.pdf'));

