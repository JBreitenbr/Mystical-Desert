function multiplyNode(node, count, deep) {
   for (let i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}
for(let i=1;i<4;i++){
if(window.innerWidth<400){
multiplyNode(document.querySelector(`.pic${i}`), 12, true);
}
else { multiplyNode(document.querySelector(`.pic${i}`),Math.floor(window.innerWidth/50),true);
     };
  };
