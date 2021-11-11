// Selection DOM
const button = document.getElementById('button');
const output = document.getElementById('output');
const copyButton = document.querySelector('.copy');

// function 
function hexColorGenerator() {
  const hexCode = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
  var color = "#";

  for (var i = 0; i < 6; i++) {
    const num = Math.round(Math.random() * 15)
    var color = color + hexCode[num];
  }
  document.querySelector('.container').style.backgroundColor = color;
  output.value = color;
  output.style.color = color;
  copyButton.style.color = color;
}
button.addEventListener('click', hexColorGenerator)



// function
const copyHexCode = () => {
  output.select();
  document.execCommand('copy');
  alert('Copied!');
}
copyButton.addEventListener('click', copyHexCode);