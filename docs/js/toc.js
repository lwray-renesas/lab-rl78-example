function float_toc(){
  var toc_button = document.getElementById("toc-button"); //Grabs the TOC button toggler
  toc_button.addEventListener("click", function(){
  // Then a click event listener is added to the element.
    var custom_toc = document.getElementsByClassName("custom-toc")[0]; // Checks to see if the floating TOC is active
    if (custom_toc){
      custom_toc.remove();
      // It removes it if it is activr
    }
    else{
     // Else, it creates a new one
      var toc = document.getElementsByClassName("toc")[0]; // Gets the contents (HTML) of the already made TOc
      var custom_toc = document.createElement("div"); // Creates a new div element
      custom_toc.innerHTML = toc.innerHTML; // Places the TOC's HTML in the new element created
      custom_toc.classList.add("custom-toc"); // Add the custom-toc class to the element
      custom_toc.classList.add("toc");
      document.getElementsByTagName("body")[0].appendChild(custom_toc); // Appends the newly created element to the body of the HTML
    }
  })
}


window.onload = float_toc(); // Fires the function after the window has finished loading