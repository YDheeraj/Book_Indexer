
# Introduction:
This program read the pages of a book and create an index of words giving the list of pages on which each word is present in a alphabetically sorted manner.


## Architecture:-----------
1. Classes:
- BookIndexer: This class will represent the book indexer and have the following properties and methods:
    - Properties:
        - pages: An array of page file names to be indexed.
        - excludeWords: An array of words to be excluded from the index.
        - wordIndex: An object to store the index of words and their corresponding page numbers.
    - Methods:
        - constructor(pages, excludeWords): Initializes the BookIndexer object with the given pages and excludeWords arrays.
        - indexPages(): Reads the content of each page file and indexes the words in the wordIndex object.
        - writeIndexToFile(filename): Writes the index to a file with the given filename.

2. Algorithm:
- Create a BookIndexer object with the page and exclude words arrays.
- Call the indexPages method to read and index the pages.
- Call the writeIndexToFile method to write the index to a file.

3. Input:
- The program will take the following inputs:
    - Page files: Text files containing the content to be indexed.
    - Exclude words file: A text file containing words to be excluded from the index.

4. Output:
- The program will generate an output file named "index.txt" containing the index of words and their corresponding page numbers. The output file will have the following format:
    - The first line will contain the heading "Word : Page Numbers".
    - Each subsequent line will contain a word followed by a colon and a comma-separated list of page numbers where the word appears.

5. File Structure:
- index.js: Contains the implementation of the BookIndexer class and main function.
- design.txt: Contains the design of the book indexer program.
- Page1.txt, Page2.txt, Page3.txt: Text files containing the content to be indexed.
- exclude-words.txt: A text file containing words to be excluded from the index.
- index.txt: The output file containing the index of words and their corresponding page numbers.

## How to run program: open folder in terminal and run the command "node index.js"
