class Heap {
  //6:30
  constructor(){
    this.data = [];
  }

  peek(){
    let smallest;
    if(this.data.length < 1){
      console.log('No data here!')
      return;
    }

    console.log(`Picked ${this.data[0]}`);

    if(this.data.length == 1){
      smallest = this.data.pop();
    } 

    else {
      smallest = this.data[0];
      let newSmallest = this.data.pop();
      this.data[0] = newSmallest;
      this.shiftDown();
    }

     
      
      console.log('Left over:', this.data);
    
    
    
  }

  insert(element){
    this.data.push(element);
    console.log(`Adding ${element}`);
    this.moveUp();
    console.log('New Shape:', this.data);
  }

  moveUp(){
    // get parent
    // compare
    // if parent is bigger, swap
    // continue until you have no parent
    let childIndex = this.data.length-1;
    let parentIndex = this.getParentIndex(childIndex);
    while(this.hasParent(childIndex) && this.data[parentIndex] > this.data[childIndex]){
        this.swap(parentIndex, childIndex);
        childIndex = parentIndex;
        parentIndex = this.getParentIndex(childIndex);
    }
  }

  shiftDown(){
    // check if element has children (left child)
      // while element has children and one of the child is smaller, swap
        // get the smallest of the two children and make comparism with the parent
    let parentIndex = 0;
    let smallestIndex;
    while(this.hasLeftChild(parentIndex)){
      smallestIndex = this.getLeftChildIndex(parentIndex);
      if(this.hasRightChild(parentIndex)){
        smallestIndex = this.data[smallestIndex] < this.data[this.getRightChildIndex(parentIndex)] ?
          smallestIndex : this.getRightChildIndex(parentIndex);
      }
      if(this.data[parentIndex] < this.data[smallestIndex]) {
        break;
      } else {
        this.swap(parentIndex, smallestIndex);
      }
      parentIndex = smallestIndex;
    }
    
  }

  hasParent(childIndex){
    const parentIndex = this.getParentIndex (childIndex);
    return parentIndex >= 0;
  }

  hasLeftChild(parentIndex){
    const leftChildIndex = this.getLeftChildIndex(parentIndex);
    return leftChildIndex < this.data.length;
  }

  hasRightChild(parentIndex){
    const rightChildIndex = this.getRightChildIndex(parentIndex);
    return rightChildIndex < this.data.length;
  }

  swap(a, b){
    console.log(`Swapping ${this.data[a]} with ${this.data[b]}`)
    const temp = this.data[a];
    this.data[a] = this.data[b];
    this.data[b] = temp;
  }

  getParentIndex(childIndex){
    return Math.floor((childIndex-1)/2);
  }

  getLeftChildIndex(parentIndex){
    return (2*parentIndex)+1;
  }

  getRightChildIndex(parentIndex){
    return (2*parentIndex)+2;
  }
}


const HP = new Heap();
console.log('Adding Elements ....')
HP.insert(73);
HP.insert(19);
HP.insert(59);
HP.insert(51);
HP.insert(52);
HP.insert(1);
HP.peek();
HP.peek();
HP.peek();
HP.peek();
HP.peek();
HP.peek();



/*
let parentIndex = 0;
    let leftChildIndex = this.getLeftChildIndex(parentIndex);
    let rightChildIndex = this.getRightChildIndex(parentIndex);
    let smallest;
    let smallestIndex;
    let parentHasChild = this.hasLeftChild(parentIndex) || this.hasRightChild(parentIndex);

    if(!parentHasChild) {
      return;
    }

    if(this.hasLeftChild(parentIndex) && !this.hasRightChild(parentIndex)){
      smallestIndex = leftChildIndex;
      smallest = this.data[leftChildIndex];
    } else if(!this.hasLeftChild(parentIndex) && this.hasRightChild(parentIndex)){
      smallestIndex = rightChildIndex;
      smallest = this.data[rightChildIndex];
    } else if (this.data[leftChildIndex] < this.data[rightChildIndex]) {
      smallestIndex = leftChildIndex;
      smallest = this.data[leftChildIndex];
    } else {
      smallestIndex = rightChildIndex;
      smallest = this.data[rightChildIndex];
    }

    while(parentHasChild && this.data[parentIndex] > smallest) {
      this.swap(parentIndex, smallestIndex);
      parentIndex = smallestIndex;
      parentHasChild = this.hasLeftChild(parentIndex) || this.hasRightChild(parentIndex);
      //
      if(this.hasLeftChild(parentIndex) && !this.hasRightChild(parentIndex)){
        smallestIndex = leftChildIndex;
        smallest = this.data[leftChildIndex];
      } else if(!this.hasLeftChild(parentIndex) && this.hasRightChild(parentIndex)){
        smallestIndex = rightChildIndex;
        smallest = this.data[rightChildIndex];
      } else if (this.data[leftChildIndex] < this.data[rightChildIndex]) {
        smallestIndex = leftChildIndex;
        smallest = this.data[leftChildIndex];
      } else {
        smallestIndex = rightChildIndex;
        smallest = this.data[rightChildIndex];
      }
      //
    }

*/