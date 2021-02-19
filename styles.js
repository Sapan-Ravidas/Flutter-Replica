function initCarousel() {
    var e = ".carousel-item", t = $(".carousel");
    t.on("slide.bs.carousel", function (n) {
         t.find(e).eq(n.from).addClass("transition-out") 
    }),
    t.on("slid.bs.carousel", function (n) {
         t.find(e).eq(n.from).removeClass("transition-out") 
    }) 
}


