var hexDigits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];


function hex(x) {
   return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}


//Function to convert hex format to a rgb color
function rgb2hex(rgb) {
   rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
   return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}


var cur_el = null;

function deleteDesign(id){
    var answer = confirm('Та '+id+' дугаартай загвар устгахдаа итгэлтэй байна уу?');
    if (answer) {
    window.location='/design/delete/'+id;
    }
}


function currentElement(active_el) {
    var elements = document.querySelectorAll('.textfield');
    elements.forEach(function(element) {
        if (element == active_el) return;

        if (element.classList.contains('active')) {
            element.classList.remove('active');
        }
    });


    if (active_el.classList.contains('active')) {
        active_el.classList.remove('active');
        cur_el = null;
    } else {
        active_el.classList.add('active');
        cur_el = active_el;
        var top = window.getComputedStyle(cur_el, null).getPropertyValue('top');
        var left = window.getComputedStyle(cur_el, null).getPropertyValue('left');
        var fontFamily = window.getComputedStyle(cur_el, null).getPropertyValue('font-family');
        var color = rgb2hex(window.getComputedStyle(cur_el, null).getPropertyValue('color'));
        var width = window.getComputedStyle(cur_el, null).getPropertyValue('width');
        var height = window.getComputedStyle(cur_el, null).getPropertyValue('height');
        var fontSize = window.getComputedStyle(cur_el, null).getPropertyValue('font-size');
        var textAlign = window.getComputedStyle(cur_el, null).getPropertyValue('text-align');
        var fontWeight = window.getComputedStyle(cur_el, null).getPropertyValue('font-weight');
        var fontStyle = window.getComputedStyle(cur_el, null).getPropertyValue('font-style');
        var backgroundColor = rgb2hex(window.getComputedStyle(cur_el, null).getPropertyValue('background-color'));

        document.querySelector('#top').value = top;
        document.querySelector('#left').value = left; 
        //document.querySelector('#fontFamily').value =fontFamily;
        document.querySelector('#color').value = color;
        document.querySelector('#width').value = width;
        document.querySelector('#height').value = height;
        document.querySelector('#fontSize').value = fontSize;
        document.querySelector('#textAlign').value = textAlign;
        document.querySelector('#fontWeight').value = fontWeight;
        document.querySelector('#fontStyle').value = fontStyle;
        document.querySelector('#backgroundColor').value = backgroundColor;

       
        
    }
}


function showDesign()
{
   
    if (document.querySelector("#lastname_attrs").value.length > 0) GG('lastname_attrs');
    if (document.querySelector("#firstname_attrs").value.length > 0) GG('firstname_attrs');
    if (document.querySelector("#position_attrs").value.length > 0) GG('position_attrs');
    if (document.querySelector("#phone_attrs").value.length > 0) GG('phone_attrs');
    if (document.querySelector("#email_attrs").value.length > 0) GG('email_attrs');
    if (document.querySelector("#fax_attrs").value.length > 0) GG('fax_attrs');

   
}


function GG(textfieldName){
    var input_id = "[input_id = " + textfieldName + "]";
    var el_name = document.querySelector("#" + textfieldName).value;
    var values = el_name.split('/');

    var el_name = document.querySelector(input_id);

        el_name.style.top = values[0];
        el_name.style.left = values[1];
        el_name.style.fontFamily = values[2];
        el_name.style.color = values[3];
        el_name.style.width = values[4];
        el_name.style.height = values[5];
        el_name.style.fontSize = values[6];
        el_name.style.textAlign = values[7];
        el_name.style.fontWeight = values[8];
        el_name.style.fontStyle = values[9];
        el_name.style.backgroundColor = values[10];
}


function applyStyleToCurrentElement() {
    if (cur_el == null) return;    

    cur_el.style.top = document.querySelector('#top').value;
    cur_el.style.left = document.querySelector('#left').value;
    cur_el.style.fontFamily = document.querySelector('#font').value;
    cur_el.style.color = document.querySelector('#color').value;
    cur_el.style.width = document.querySelector('#width').value;
    cur_el.style.height = document.querySelector('#height').value;
    cur_el.style.fontSize = document.querySelector('#fontSize').value;
    cur_el.style.textAlign = document.querySelector('#textAlign').value;;  // left, center, right, justify
    cur_el.style.fontWeight = document.querySelector('#fontWeight').value;  // bold, normal
    cur_el.style.fontStyle = document.querySelector('#fontStyle').value;  // italic, normal
    cur_el.style.backgroundColor = document.querySelector('#backgroundColor').value;

    // <div ... input_id="lastname_attrs">...</div>
    var input_id = cur_el.getAttribute('input_id');

    // input_id = "lastname_attrs"
    var data_field = document.querySelector('#' + input_id);
    switch(data_field.id) {
        case 'lastname_attrs':
        document.querySelector('#lastname_attrs').value = cur_el.style.top+"/"+cur_el.style.left+"/"+cur_el.style.fontFamily+"/"+cur_el.style.color+"/"+  cur_el.style.width+"/"+ cur_el.style.height+"/"+cur_el.style.fontSize+"/"+cur_el.style.textAlign+"/"+cur_el.style.fontWeight+"/"+cur_el.style.fontStyle+"/"+cur_el.style.backgroundColor;
        break;
        case 'firstname_attrs':
        document.querySelector('#firstname_attrs').value = cur_el.style.top+"/"+cur_el.style.left+"/"+cur_el.style.fontFamily+"/"+cur_el.style.color+"/"+  cur_el.style.width+"/"+ cur_el.style.height+"/"+cur_el.style.fontSize+"/"+cur_el.style.textAlign+"/"+cur_el.style.fontWeight+"/"+cur_el.style.fontStyle+"/"+cur_el.style.backgroundColor;
        break;
        case 'phone_attrs':
        document.querySelector('#phone_attrs').value = cur_el.style.top+"/"+cur_el.style.left+"/"+cur_el.style.fontFamily+"/"+cur_el.style.color+"/"+  cur_el.style.width+"/"+ cur_el.style.height+"/"+cur_el.style.fontSize+"/"+cur_el.style.textAlign+"/"+cur_el.style.fontWeight+"/"+cur_el.style.fontStyle+"/"+cur_el.style.backgroundColor;
        break;
        case 'email_attrs':
        document.querySelector('#email_attrs').value = cur_el.style.top+"/"+cur_el.style.left+"/"+cur_el.style.fontFamily+"/"+cur_el.style.color+"/"+  cur_el.style.width+"/"+ cur_el.style.height+"/"+cur_el.style.fontSize+"/"+cur_el.style.textAlign+"/"+cur_el.style.fontWeight+"/"+cur_el.style.fontStyle+"/"+cur_el.style.backgroundColor;
        break;
        case 'fax_attrs':
        document.querySelector('#fax_attrs').value = cur_el.style.top+"/"+cur_el.style.left+"/"+cur_el.style.fontFamily+"/"+cur_el.style.color+"/"+  cur_el.style.width+"/"+ cur_el.style.height+"/"+cur_el.style.fontSize+"/"+cur_el.style.textAlign+"/"+cur_el.style.fontWeight+"/"+cur_el.style.fontStyle+"/"+cur_el.style.backgroundColor;
        break;
        case 'position_attrs':
        document.querySelector('#position_attrs').value = cur_el.style.top+"/"+cur_el.style.left+"/"+cur_el.style.fontFamily+"/"+cur_el.style.color+"/"+  cur_el.style.width+"/"+ cur_el.style.height+"/"+cur_el.style.fontSize+"/"+cur_el.style.textAlign+"/"+cur_el.style.fontWeight+"/"+cur_el.style.fontStyle+"/"+cur_el.style.backgroundColor;
        break;
    }
}


function chooseBtn(btn){
    
    if(btn.id == "center" || btn.id == "left1" || btn.id == "right" || btn.id == "justify")
        document.querySelector('#textAlign').value = document.querySelector("#" + btn.id).value;

    if(btn.id == "normal" || btn.id == "bold")
        document.querySelector('#fontWeight').value = document.querySelector("#" + btn.id).value;

    if(btn.id == "normal1" || btn.id == "italic" )
        document.querySelector('#fontStyle').value = document.querySelector("#" + btn.id).value;
   applyStyleToCurrentElement();
}


showDesign();


function newUser(){
    window.location='/';
}


function changeField(el){
 console.log(el.id);
    switch(el.id)
    { 
        case 'top':  cur_el.style.top = el.value; break;
        case 'left':  cur_el.style.left = el.value; break;
        case 'font':  cur_el.style.fontFamily = el.value; break;
        case 'color':  cur_el.style.color = el.value; break;
        case 'width':  cur_el.style.width = el.value; break;
        case 'height':  cur_el.style.height = el.value; break;
        case 'fontSize':  cur_el.style.fontSize = el.value; break;
        case 'backgroundColor':  cur_el.style.backgroundColor = el.value; break;

    }
     applyStyleToCurrentElement();
}