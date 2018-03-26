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
        document.querySelector('#top').value = window.getComputedStyle(cur_el, null).getPropertyValue('top');
        document.querySelector('#left').value = window.getComputedStyle(cur_el, null).getPropertyValue('left'); 
        document.querySelector('#font').value =window.getComputedStyle(cur_el, null).getPropertyValue('font-family');
        document.querySelector('#color').value = rgb2hex(window.getComputedStyle(cur_el, null).getPropertyValue('color'));
        document.querySelector('#width').value = window.getComputedStyle(cur_el, null).getPropertyValue('width');
        document.querySelector('#height').value = window.getComputedStyle(cur_el, null).getPropertyValue('height');
        document.querySelector('#fontSize').value = window.getComputedStyle(cur_el, null).getPropertyValue('font-size');
        document.querySelector('#textAlign').value = window.getComputedStyle(cur_el, null).getPropertyValue('text-align');
        document.querySelector('#fontWeight').value = window.getComputedStyle(cur_el, null).getPropertyValue('font-weight');
        document.querySelector('#fontStyle').value = window.getComputedStyle(cur_el, null).getPropertyValue('font-style');
        document.querySelector('#backgroundColor').value = rgb2hex(window.getComputedStyle(cur_el, null).getPropertyValue('background-color'));

       
        
    }
}


function showDesignOnLoad()
{
   
    if (document.querySelector("#lastname_attrs").value.length > 0) setDesign('lastname_attrs');
    if (document.querySelector("#firstname_attrs").value.length > 0) setDesign('firstname_attrs');
    if (document.querySelector("#position_attrs").value.length > 0) setDesign('position_attrs');
    if (document.querySelector("#phone_attrs").value.length > 0) setDesign('phone_attrs');
    if (document.querySelector("#email_attrs").value.length > 0) setDesign('email_attrs');
    if (document.querySelector("#fax_attrs").value.length > 0) setDesign('fax_attrs');

   
}


function setDesign(textfieldName){
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

    document.querySelector('#'+input_id).value = cur_el.style.top+"/"+cur_el.style.left+"/"+cur_el.style.fontFamily+"/"+cur_el.style.color+"/"+  cur_el.style.width+"/"+ cur_el.style.height+"/"+cur_el.style.fontSize+"/"+cur_el.style.textAlign+"/"+cur_el.style.fontWeight+"/"+cur_el.style.fontStyle+"/"+cur_el.style.backgroundColor;
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


showDesignOnLoad();


function newUser(){
    window.location='/';
}


function changeField(el){
     applyStyleToCurrentElement();
}



function keypressed(e, el){
    if (e.key == 'ArrowDown') {
        var value = parseInt(el.value);
        el.value = (value - 1) + 'px';
    }
  else if(e.key == 'ArrowUp')
    {
      var value = parseInt(el.value);
        el.value = (value +1) + 'px';
    }
    applyStyleToCurrentElement();
    e.preventDefault();
};