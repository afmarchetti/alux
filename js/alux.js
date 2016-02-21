function toggleClass(element, className){
    if (!element || !className){
        return;
    }

    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    }
    else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
    }
    element.className = classString;
}

// Menu Toggle
var toggle = document.getElementsByClassName('tog');
for (var i=0; i < toggle.length; i++){
  toggle[i].addEventListener('click', function() {
      //first parameter trigger second the element to toggle the class
      toggleClass(this, 'x');
      var menuId = this.attributes["data-target"].value;
      toggleClass(document.getElementById(menuId), 'open');
  });
}

// Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){

	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu');

      button.addEventListener('click', function(e) {
        if( menu.className == 'dropdown-menu') {
          // remove all classes
          for (var i=0; i < dropdownArray.length; i++){
               dropdownArray[i].querySelector('.dropdown-menu').className = 'dropdown-menu';
               dropdownArray[i].querySelector('a[data-toggle="dropdown"]').className = '';
          }
          // add classes to current item
        	menu.className = 'dropdown-menu open';
        	button.className = 'select';
        	e.preventDefault();
        }
        else {
          // close current item
        	menu.className = 'dropdown-menu';
        	button.className = '';
        	e.preventDefault();
        }
      });
})
