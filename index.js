// Importing required modules
const fs = require('fs');

// Define class BookIndexer
class BookIndexer{
    constructor(pages,excludeWords){
        this.pages = pages;
        this.excludeWords = excludeWords;
        this.wordIndex ={};
    }

// Method to read and index the pages
indexPages() {
    for(let i=0;i<this.pages.length;i++){     // itrate over the page array
        let pageContent = fs.readFileSync(this.pages[i],'utf8');   

        let words = pageContent.split(/\W+/);  // splitting at every character that not match with alpha-numeric character

        for(let j=0;j<words.length;j++){
            let word =words[j].toLowerCase();

            word=word.replace(/^[/",.()]+|[/",.()]+$/gm, '');  //Expression to remove special character from the start and end of the word
            if(/\d/.test(word)) continue                      // Removing word that contain digits
            if(/[/,.()*:]/g.test(word))continue               // Removing word that contain spaecial character
            if(/\u2022/g.test(word)) continue                 // Removing Dots from the strings
            if(word.includes(' ')) continue                   // Removing spaces
            if(this.excludeWords.includes(word))continue      // Exclude the given words

                if(word.includes('-')){         // Word seperated by -
                    let w1=word.split('-');
                    if(!this.wordIndex[w1[0]]){
                        this.wordIndex[w1[0]]=new Set();
                    }
                    if(!this.wordIndex[w1[1]]){
                        this.wordIndex[w1[1]]=new Set();
                    }
                    
                }else{
                if(!this.wordIndex[word]){
                    this.wordIndex[word]= new Set();
                }
                this.wordIndex[word].add(i+1);
            }
        }
    }
}

// Method to write the index to file
writeIndexToFile(filename){
    let sortedWords = Object.keys(this.wordIndex).sort();
    let indexContent = 'Word : Page Numbers\n-------------------\n';
    for(let i=0; i<sortedWords.length;i++){
        let word = sortedWords[i];
        let pages = Array.from(this.wordIndex[word]).join(',');
        indexContent +=`${word} : ${pages}\n`;
    }
    fs.writeFileSync(filename,indexContent);
}

}



//  Define main function
function main(){
    let pages = ['Page1.txt','Page2.txt','Page3.txt'];
    let excludeWords = fs.readFileSync('exclude-words.txt','utf8').split('\n');
    let indexer = new BookIndexer(pages,excludeWords);
    indexer.indexPages();
    indexer.writeIndexToFile('index.txt');
}


// calling main function
main();

