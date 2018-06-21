class treeNode{
    constructor(left,right,data){
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

function makeTree(array,root){
    for(let i=0;i<array.length;i++){
        if(array[i] < root.data){
            root.left = makeNode(array[i],root.left);
        }
        else{
            root.right = makeNode(array[i],root.right);
        }
    }
    return root;
}
function makeNode(number,node){
    if(node === null){
        node = new treeNode(null,null,number);
        return node;
    }
    if(number < node.data){
        node.left = makeNode(number,node.left);
        
    }
    else{
        node.right = makeNode(number,node.right);
    }
    return node;
}
//

function printTree(tree){
        printString = "Data : "+ tree.data;
        if(tree.left !== null){
            printString += " Left: "+tree.left.data;
        }
        if(tree.right !== null){
            printString += " Right: "+tree.right.data;
        }
        console.log(printString);
        if(tree.left !== null){
            printTree(tree.left)
        }
        if(tree.right !== null){
            printTree(tree.right)
        }
}
let array = [3,5,5,4,9,8,9,13,10];
let root = new treeNode(null,null,array[0]);
root = makeTree(array.slice(1),root);
printTree(root);
process.exit();