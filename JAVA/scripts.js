var word1;
var word2;
var result;
var reset;

function add(){
  word1 = document.getElementById('word1').value;
  word2 = document.getElementById('word2').value;

  word1 = getValue(word1);
  word2 = getValue(word2);
  result = word1 + word2;

  document.getElementById('result').innerHTML = result;
}

function subtract(){
  word1 = document.getElementById('word1').value;
  word2 = document.getElementById('word2').value;

  word1 = getValue(word1);
  word2 = getValue(word2);
  result = word1 - word2;

  document.getElementById('result').innerHTML = result;
}

function multiply(){
  word1 = document.getElementById('word1').value;
  word2 = document.getElementById('word2').value;

  word1 = getValue(word1);
  word2 = getValue(word2);
  result = word1 * word2;

  document.getElementById('result').innerHTML = result;
}

function divide(){
  word1 = document.getElementById('word1').value;
  word2 = document.getElementById('word2').value;

  word1 = getValue(word1);
  word2 = getValue(word2);
  result = word1 / word2;

  document.getElementById('result').innerHTML = result;
}


function getValue(resolve){
  // body...
  if (resolve == "one") { resolve = 1;}
  if (resolve == "two") { resolve = 2;}
  if (resolve == "three") { resolve = 3;}
  if (resolve == "four") { resolve = 4;}
  if (resolve == "five") { resolve = 5;}

  return resolve;
}

  document.getElementById('result').innerHTML = result;
