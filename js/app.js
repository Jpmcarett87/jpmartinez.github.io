


function Validation() {
 if( document.form.e3.value.length != 10 ) {
  
    alert( "Please provide 10 digit for the phone number!" );
  return false;
}

if( document.form.e5.value.length != 6 ) {
  alert( "Please provide a zip in the format #######." );
  return false;
}
return true;
}
