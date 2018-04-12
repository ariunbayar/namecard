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

function deleteDesign(id) {
    var answer = confirm('Та '+id+' дугаартай загвар устгахдаа итгэлтэй байна уу?');
    if (answer) {
    window.location='/design/delete/'+id;
    }
}


function currentElement(active_el) {
    var elements = document.querySelectorAll('.textfield');
    elements.forEach(function(element) {
        if(element == active_el) return;

        if(element.classList.contains('active')) {
            element.classList.remove('active');
        }
    });

    if (active_el.classList.contains('active')) {
        active_el.classList.remove('active');
        cur_el = null;
    } else {
        active_el.classList.add('active');
        cur_el = active_el;
        //document.querySelector('#top').value = window.getComputedStyle(cur_el, null).getPropertyValue('top');
        //document.querySelector('#left').value = window.getComputedStyle(cur_el, null).getPropertyValue('left'); 
        document.querySelector('#font').value =window.getComputedStyle(cur_el, null).getPropertyValue('font-family');
        document.querySelector('#color').value = rgb2hex(window.getComputedStyle(cur_el, null).getPropertyValue('color'));
        //document.querySelector('#width').value = window.getComputedStyle(cur_el, null).getPropertyValue('width');
        //document.querySelector('#height').value = window.getComputedStyle(cur_el, null).getPropertyValue('height');
        document.querySelector('#fontSize').value = window.getComputedStyle(cur_el, null).getPropertyValue('font-size');
        document.querySelector('#textAlign').value = window.getComputedStyle(cur_el, null).getPropertyValue('text-align');
        document.querySelector('#fontWeight').value = window.getComputedStyle(cur_el, null).getPropertyValue('font-weight');
        document.querySelector('#fontStyle').value = window.getComputedStyle(cur_el, null).getPropertyValue('font-style');
        document.querySelector('#backgroundColor').value = rgb2hex(window.getComputedStyle(cur_el, null).getPropertyValue('background-color'));
        
        if(window.getComputedStyle(cur_el, null).getPropertyValue('text-align')=="center") {
            document.querySelector('#left').classList.remove("active");
            document.querySelector('#justify').classList.remove("active");
            document.querySelector('#right').classList.remove("active");
            document.querySelector('#center').classList.add("active");
            
        }
       
       if(window.getComputedStyle(cur_el, null).getPropertyValue('text-align')=="right") {
            document.querySelector('#left').classList.remove("active");
            document.querySelector('#justify').classList.remove("active");
            document.querySelector('#center').classList.remove("active");
            document.querySelector('#right').classList.add("active");
            
        }

        if(window.getComputedStyle(cur_el, null).getPropertyValue('text-align')=="left") {
            document.querySelector('#center').classList.remove("active");
            document.querySelector('#justify').classList.remove("active");
            document.querySelector('#right').classList.remove("active");
            document.querySelector('#left').classList.add("active");
            
        }

        if(window.getComputedStyle(cur_el, null).getPropertyValue('text-align')=="justify") {
            document.querySelector('#left').classList.remove("active");
            document.querySelector('#center').classList.remove("active");
            document.querySelector('#right').classList.remove("active");
            document.querySelector('#justify').classList.add("active");
            
        }

        if(window.getComputedStyle(cur_el, null).getPropertyValue('font-style') == "normal") {
            document.querySelector('#italic').classList.remove("active");            
        } else {
            document.querySelector('#italic').classList.add("active");            
        } 

         if(window.getComputedStyle(cur_el, null).getPropertyValue('font-weight') == "400") {
            document.querySelector('#bold').classList.remove("active");            
        } else {
            document.querySelector('#bold').classList.add("active");            
        } 

        
    }
}

function toolbarActive(active_el, value) {
   
    var elements = document.querySelectorAll('.toolbars');
    elements.forEach(function(element) {
        if (element == active_el) return;

        if (element.classList.contains('active')) {
            element.classList.remove('active');

        }
    });


    if (active_el.classList.contains('active')) {
        chooseBtn(active_el, "center");
        active_el.classList.remove('active');
         
    } 
    else {
     dwec   active_el.classList.add('active');
        chooseBtn(active_el, value);   
        
    }   
        
}

function boldAndItalic(active_el, value) {
    
 if (active_el.classList.contains('active')) {
        active_el.classList.remove('active');
        chooseBtn(active_el, "normal");
 }
  else {
    active_el.classList.add('active');
    active_el.value = active_el.id;
    chooseBtn(active_el, value);
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

    //cur_el.style.top = document.querySelector('#top').value;
   // cur_el.style.left = document.querySelector('#left').value;
    cur_el.style.fontFamily = document.querySelector('#font').value;
    cur_el.style.color = document.querySelector('#color').value;
    //cur_el.style.width = document.querySelector('#width').value;
    //cur_el.style.height = document.querySelector('#height').value;
    cur_el.style.fontSize = document.querySelector('#fontSize').value;
    cur_el.style.textAlign = document.querySelector('#textAlign').value;;  // left, center, right, justify
    cur_el.style.fontWeight = document.querySelector('#fontWeight').value;  // bold, normal
    cur_el.style.fontStyle = document.querySelector('#fontStyle').value;  // italic, normal
    cur_el.style.backgroundColor = document.querySelector('#backgroundColor').value;

    // <div ... input_id="lastname_attrs">...</div>
    var input_id = cur_el.getAttribute('input_id');

    document.querySelector('#'+input_id).value = cur_el.style.top+"/"+cur_el.style.left+"/"+cur_el.style.fontFamily+"/"+cur_el.style.color+"/"+  cur_el.style.width+"/"+ cur_el.style.height+"/"+cur_el.style.fontSize+"/"+cur_el.style.textAlign+"/"+cur_el.style.fontWeight+"/"+cur_el.style.fontStyle+"/"+cur_el.style.backgroundColor;
}


function chooseBtn(btn, value){    
    if(btn.id == "center" || btn.id == "left" || btn.id == "right" || btn.id == "justify")
        document.querySelector('#textAlign').value = value;

    if(btn.id == "normal" || btn.id == "bold")
        document.querySelector('#fontWeight').value = value;

    if(btn.id == "normal" || btn.id == "italic" )
        document.querySelector('#fontStyle').value = value;
   applyStyleToCurrentElement();
}


showDesignOnLoad();

document.addEventListener('keydown', function(e){
    if(cur_el==null) return;    
  //console.log(e.target.tagName); //ymar talbart  towch darj bgaa
    if(e.target.tagName == 'BODY'){
        e.preventDefault(); 
    } else {
        return;
    }

    if (e.key == 'ArrowRight') {
        if (e.shiftKey == true) {
          cur_el.style.width = (parseInt(window.getComputedStyle(cur_el, null).getPropertyValue('width')) + 1) + 'px';
        } else {
          cur_el.style.left = (parseInt(window.getComputedStyle(cur_el, null).getPropertyValue('left')) + 1) + 'px';
        }
    
  }

  if (e.key == 'ArrowLeft') {
    if (e.shiftKey == true) {
      cur_el.style.width = (parseInt(window.getComputedStyle(cur_el, null).getPropertyValue('width')) - 1) + 'px';
    } else {
      cur_el.style.left = (parseInt(window.getComputedStyle(cur_el, null).getPropertyValue('left')) - 1) + 'px';
    }
    
  }

  if (e.key == 'ArrowUp') {
    
     if (e.shiftKey == true) {

      cur_el.style.height = (parseInt(window.getComputedStyle(cur_el, null).getPropertyValue('height')) - 1) + 'px';
    } else {
      cur_el.style.top = (parseInt(window.getComputedStyle(cur_el, null).getPropertyValue('top')) - 1) + 'px';
    }
   
    } 
    if (e.key == 'ArrowDown') {
    
     if (e.shiftKey == true) {
      cur_el.style.height = (parseInt(window.getComputedStyle(cur_el, null).getPropertyValue('height')) + 1) + 'px';
    } else {
      cur_el.style.top = (parseInt(window.getComputedStyle(cur_el, null).getPropertyValue('top')) + 1) + 'px';
    }
    }  
   // e.preventDefault();
   // console.log(e.key);

    var input_id = cur_el.getAttribute('input_id');

    document.querySelector('#'+input_id).value = cur_el.style.top+"/"+cur_el.style.left+"/"+cur_el.style.fontFamily+"/"+cur_el.style.color+"/"+  cur_el.style.width+"/"+ cur_el.style.height+"/"+cur_el.style.fontSize+"/"+cur_el.style.textAlign+"/"+cur_el.style.fontWeight+"/"+cur_el.style.fontStyle+"/"+cur_el.style.backgroundColor;

});


function newUser() {
    #lastname_attrs = " ";


    window.location='/';
}


function changeField(el) {
     applyStyleToCurrentElement();
}



function keypressed(e, el) {
    if (e.key == '2') {
        var value = parseInt(el.value);
        el.value = (value - 1) + 'px';
    }
  else if(e.key == '8')
    {
      var value = parseInt(el.value);
        el.value = (value +1) + 'px';
    }
    applyStyleToCurrentElement();
    e.preventDefault();
};