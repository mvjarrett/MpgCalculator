function mileageCalc(){
  let distance = document.getElementById('dist').value;
  let gas = document.getElementById('fuel').value;
  let costPer = document.getElementById('costPer').value;
  let mpg = (distance / gas).toFixed(2);
  let mileCost = ((costPer * gas) / distance).toFixed(2);
  document.getElementById('result').innerHTML= 'You are averaging ' +mpg+ ' mpg!';
  document.getElementById('cost').innerHTML= 'It is costing you about $' +mileCost+ ' per mile traveled.';
}