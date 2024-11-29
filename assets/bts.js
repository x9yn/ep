function percentChange(totalPercent){
    for (i = 0; i <= totalPercent; i++){
        percentValue = i;
    }
    return percentValue;
    // repeats increasing and returning until it reaches the maximum value (the total percent.)
}
function changeValue(idOfElement, elementPercent){
    var elementValue = percentChange(elementPercent); //creates a variable with the same data as percentChange
    
    // yap yap data of making an element.
    const changingElement = document.getElementById(idOfElement);
    var percentAsAString = document.createTextNode(elementValue);
    changingElement.appendChild(percentAsAString);
    return changingElement;
    // return the created element. 
}

changeValue("id1", 57);
function countUp(elementId, targetValue, duration) {
    let count = 0;
    const element = document.getElementById(elementId);
    const startTime = Date.now();
    const endTime = startTime + duration;

    const interval = setInterval(() => {
      const now = Date.now();
      const progress = (now - startTime) / duration;
      count = Math.round(progress * targetValue);

      element.textContent = count;

      if (now >= endTime) {
        clearInterval(interval);
      }
    }, 10);
  }

  //im not explaining this. 
  countUp("id", 57, 6000); 


function changeText(idName, elementText){
  buttonElement = document.getElementById(idName);
  buttonElement.innerHTML = elementText;
}

function changeCSS(containedID, containerID){
  var elementContainer = document.getElementById(containerID)
  var elementContained = document.getElementById(containedID);
  if(elementContainer.onmouseover){
    elementOfChange.style.color = "black";
  }
}
