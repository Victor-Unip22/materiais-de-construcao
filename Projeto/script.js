/* Java Accordion */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
 

/* Java Produtos */
let slider = tns({
    container : ".my-slider",
    "slideBy": '1',
    "speed":400,
    "nav": false,
    autoplay: true,
    controls:false,
    autoplayButtonOutput:false,
    responsive:{
        1600:{
            itens:4,
            gutter:20
        },
        1024:{
            items:4,
            gutter:20
        },
        768:{
            items:2,
            gutter:20
        },
        480:{
            items:1,
        }
    }
  })
