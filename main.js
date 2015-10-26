// ** globals ** //

var scope = {};
// ** Array of classes to add the data binding to ** //
var classNamesArray = ['name'];

// ** functions ** //

function getElements(){
  var outputArray = [];
  for (var i = 0; i < classNamesArray.length; i++) {
    outputArray.push(document.getElementsByClassName(classNamesArray[i])[0]);
  }
  return outputArray;
}

// ** function calls ** //

var domElement = getElements();