var infoDivs = document.getElementsByClassName('infoDivs');

function displayInfo(index) {
  
  for ( var i = 0; i < infoDivs.length; i++) {
    infoDivs[i].style.display = 'none';
    
  }
  
 infoDivs[index].style.display = 'block';
  
}