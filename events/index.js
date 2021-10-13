// Event Binding Example
var btn = document.getElementById('btn');

function changeBg(){
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  var boxes = document.getElementsByClassName('block');
  for(var i=0;i<boxes.length;i++){
      boxes[i].style.backgroundColor = rndCol;
  }
}


function consoleIt(){
  console.log('btn click');
}

function f1(){
  console.log('f1 click');
}

function f2(){
  console.log('f2 click');
}
// Event Handler Property will update its value.(its same as attribute)
// btn.onclick = changeBg;
// btn.onclick = consoleIt;

// Multiples event listeners can be attached.
btn.addEventListener('click',changeBg);
btn.addEventListener('click',f1);
btn.addEventListener('click',f2);

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

var remove = document.getElementById('remove-me');
remove.addEventListener('click',function(){
  btn.removeEventListener('click',changeBg);
  // btn.addEventListener('click',f2);
})


// on adding a new box, all event listners are attached
var addBtn = document.getElementById('add-box');
addBtn.addEventListener('click',function(){
    var newBox = document.createElement('div');
    newBox.className='box block';
    document.getElementById('boxes').append(newBox);
})




// BUBBLE NAD CAPTURE
var level0 = document.getElementById('level0');
var level1 = document.getElementById('level1');
var level2 = document.getElementById('level2');

level0.addEventListener('click',function(){
    console.log('level 0');
})

level1.addEventListener('click',function(){
    console.log('level 1');
},true)

level2.addEventListener('click',function(){
    console.log('level 2');
})