var open = document.getElementById("open");
var close = document.getElementById("close");
var model_container = document.getElementById("model_container");

open.addEventListener("click", function(){
  model_container.classList.add("show");
});

close.addEventListener("click", function(){
  model_container.classList.remove("show");
})