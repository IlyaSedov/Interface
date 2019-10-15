

const interF = () => {

  const inputForm = document.getElementById('block-left').value,
     inputIndex = document.getElementById('index-block').value; 
     inputSubstr = document.getElementById('substr-block').value; 
    outputForm = document.getElementById('block-right-answer').innerText = substr(inputForm, inputIndex, inputSubstr);

}


const substr = (str, firstIndex, strLength) => { 
  let a = ''; 
  const patternOne = /^\d*$/;
 
  if (firstIndex === '') firstIndex = 0; 
  if (strLength === '') strLength = str.length; 
  
  if(firstIndex.search(patternOne)>=0) firstIndex=Number(firstIndex);
  if(strLength.search(patternOne)>=0) strLength=Number(strLength);
  if((typeof firstIndex !='number')||(typeof strLength!='number')) return'Данные не корректны';
  if (str.length === 0 || strLength === 0 || firstIndex > str.length) return ''; 
  if (strLength < 0) strLength = 1; 
  if (firstIndex < 0) firstIndex = 0; 
  if ((firstIndex + strLength) > str.length) strLength = str.length - firstIndex; 
  
  for (let i = firstIndex; i < (firstIndex + strLength); i++) { 
  a += str[i]; 
  } 
  
  return a; 
  };