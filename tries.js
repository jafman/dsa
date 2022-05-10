class TriNode {
    constructor(char){
        this.value = char;
        this.children = {};
        this.isWord = false;
    }
    
    hasChild(char){
        return (char in this.children);
    }
    
    setWord(){
        this.isWord = true;
    }
    
    addChild(char, node){
        this.children[char] = node;
    }
}


function find(word, rootNode){
    // return int count
    // set root node as current node 
    // for each character in word check if currentNode has that child,
        // if No return 0
        // if yes move on
        // if its the last character
            // return currentNode children and grand children count (DFS);
    let currentNode = rootNode;
    for(let i=0; i<word.length; i++){
        if(currentNode.hasChild(word[i])){
           currentNode = currentNode.children[word[i]];
        }else{
            return 0;
        }
        if (i===word.length-1){ // last character
            return getWordCount(currentNode);
        }
    }
}

function getWordCount(node){
    let nodeStack = [];
    let count = 0;
    let currentNode;
    for(const key in node.children){
      nodeStack.push(node.children[key]);
    }
    while(nodeStack.length>0){
      currentNode = nodeStack.shift();
      for(const key in currentNode.children){
        nodeStack.push(currentNode.children[key]);
      }
      if(currentNode.isWord){
        count++
      }
    }
    return count;
}

function contacts(queries, Trie) {
    // Write your code here
    //console.log('Queries:',queries)
    let result = [];
    for(let i=0; i<queries.length; i++){
        let [operation, word] = queries[i];
        word = word.toLowerCase();
        if(operation == 'add'){
            Trie.prototype.insert(word);
        } else if(operation=='find') { // find
            //result.push[9];
            result.push(find(word, trie));
        }
    }
    return result;
    //return [4,44]
}

const insert = (word, Root) => {
  // insert CAR
  let currentNode = Root;
  let currentCharacter;
  let newNode;
  for(let i=0; i<word.length; i++){
      currentCharacter = word[i];
      //console.log('inserting '+currentCharacter)
      if(currentNode.hasChild(currentCharacter)){
          currentNode = currentNode.children[currentCharacter];
          //console.log(`Node ${currentCharacter} exists..`)
      } else {
          newNode = new TriNode(currentCharacter);
          //console.log('created new node!')
          currentNode.addChild(currentCharacter, newNode);
          currentNode = newNode;
      }
      if(i===word.length-1){
          currentNode.setWord();
      }
  }
}



function main() {
  let shitNode = new TriNode(null); 
  const queries = [];
  queries.push(['add', 'car']);
  queries.push(['add', 'cab']);
  queries.push(['add', 'cart']);
  queries.push(['add', 'ball']);
  queries.push(['find', 'car']);
  queries.push(['add', 'can']);
  queries.push(['find', 'ca'])
  //const result = contacts(queries, Trie);
  //console.log(result);
    
  // shitNode.addChild('c', new TriNode('c'));
  // shitNode.addChild('a', new TriNode('a'));
    
  // console.log(shitNode.hasChild('c'));
  // console.log(shitNode.hasChild('b'));
  // console.log(shitNode.hasChild('a'));
  insert('JAF', shitNode);
  insert('JAFAR', shitNode);
  insert('JAMB', shitNode);
  insert('BOLU', shitNode);
  insert('BOLA', shitNode);
  insert('BAWA', shitNode);
  insert('AHMED', shitNode);
  console.log(getWordCount(shitNode.children['A']));
}


main();