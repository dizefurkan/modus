function searcharea(){
  var x = document.getElementById('searchbutton');
  if(x.focus){
    
    x.style.display = 'block';
    x.focus();
  }
  else{
    x.style.display = 'none';

  }
}
