function onclearbutton() {
    myForm.name.value = '';
    myForm.surname.value = '';
    myForm.dop.value = '';
    myForm.email.value = '';
    document.getElementById('name_').setAttribute('disabled', 'disabled');
    document.getElementById('surname_').setAttribute('disabled', 'disabled');
    document.getElementById('e-mail').setAttribute('disabled', 'disabled');
    document.getElementById('dop').setAttribute('disabled', 'disabled');
}

function second() {
    var valueFirst = document.getElementById('name_').value;
    var valueSecond = document.getElementById('surname_').value;
    var valueThree = document.getElementById('e-mail').value;
    
    var ind = document.getElementById("select1").selectedIndex;
 if (ind==0)
 {
    document.getElementById("textareaa").style.color = '#008000';
    var allString = valueFirst+valueSecond+valueThree;
    document.getElementById('textareaa').value= allString;
    
 }
 else if (ind==1)
 {
    document.getElementById("textareaa").style.color = '#FFFF00';
    var allString = valueFirst+valueSecond+valueThree;
    document.getElementById('textareaa').value= allString;
 }
 else if (ind==2)
 {
    document.getElementById("textareaa").style.color = '#FF0000';
    var allString = valueFirst+valueSecond+valueThree;
    document.getElementById('textareaa').value= allString;
 }
 else if (ind==3)
 {
    document.getElementById("textareaa").style.color = '#0000ff';
    var allString = valueFirst+valueSecond+valueThree;
    document.getElementById('textareaa').value= allString;
 }

   

}