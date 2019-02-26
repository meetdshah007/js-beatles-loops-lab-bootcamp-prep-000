// add solution here
function theBeatlesPlay(magician, instruments) {
  const arr = [];
  for(let i=0; i< magician.length; i++){
    arr.push(`${magician[i]} plays ${instruments[i]}.`)
  }
  return arr;
}

function johnLennonFacs(facts){
  let i=0;
  while(i<facts.length){
    facts[i] +=`${facts[i]}!!!`;
  }
  return facts;
}