// ** globals ** //

var scope = {};
// ** Array of classes to add the data binding to ** //
var classNamesArray = ['name', 'color'];

// ** functions ** //

//1 ** iterate through classNameArray ** //
//2 ** grab dom elements associated with name ** //
//3 ** return dom array elements ** //
function getElements(){
  var outputArray = [];
  for (var i = 0; i < classNamesArray.length; i++) {
    outputArray.push(document.getElementsByClassName(classNamesArray[i]));
  }
  return outputArray;
}

//1 ** iterate through each dom element ** //
//2 ** attach onkeyup event to each class** //
//3 ** perform *some* sort of action to bind the two inputs ** //
function domBinding (elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].onkeyup = function () {
      for (var j = 0; j < elements.length; j++) {
        elements[j].value = this.value;
      }
    };
  }
}

 //1 ** iterate through dom elements ** //
 //2 ** Oject.defineproperty() ** //
 //3 ** scope.name = "something" --> update the dom ** //
function modelBinding(elements) {
  for (var i = 0; i < classNamesArray.length; i++) {
    Object.defineProperty(scope, classNamesArray[i], {
      set: function(newValue) {
        for (var i = 0; i < elements.length; i++){
        elements[i].value = newValue;
        }
      }
    });
  }
}

// ** function calls ** //

// ** refactor with for one for loop that iterates through the class names ** //
// ** call domBinding ** //
// ** call modelBinding ** //

var domElements = getElements();
domBinding(domElements[0]);
domBinding(domElements[1]);
modelBinding(domElements[0]);