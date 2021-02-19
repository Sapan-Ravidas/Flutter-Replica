
function initSnackbar() { 
    var e = ".snackbar__action"; 
    $(".snackbar").each(
        function () { 
            var t = $(this);
             t.find(e).click(
                 function () {
                      t.fadeOut() 
                    })
                 })
}
     
function setupClipboardJS() {
     new ClipboardJS(".code-excerpt__copy-btn", { 
         text: function (e) { 
             var t = e.getAttribute("data-clipboard-target"), n = /^(\$\s*)|(C:\\(.*)>\s*)/gm;
              return document.querySelector(t).textContent.replace(n, "") 
            } 
        }).on("success", _copiedFeedback) 
}


function _copiedFeedback(e) {
     e.clearSelection(); 
     var t, n = "Copied", i = e.trigger, r = i.getAttribute("title") || i.getAttribute("data-original-title");
      r !== n && (t = r, setTimeout(function () {
           _changeTooltip(i, t)
         }, 1500), _changeTooltip(i, n)) 
} 
        

function _changeTooltip(e, t) { 
    e.setAttribute("title", t), 
    $(e).tooltip("dispose"), 
    $(e).tooltip("show"), 
    $(e).is(":hover") || $(e).tooltip("hide") 

}

function addCopyCodeButtonsEverywhere() { 
    var e = $("pre"); e.wrap(function () { 
        return 0 === $(this).parent("div.code-excerpt__code").length ? '<div class="code-excerpt__code"></div>' : "" 
    }),
    
    e.wrap(function (e) { 
        return '<div id="code-excerpt-' + e + '"></div>' 
    }),
    
    e.parent().parent().prepend(function (e) {
         return '<button class="code-excerpt__copy-btn" type="button"    data-toggle="tooltip" title="Copy code"    data-clipboard-target="#code-excerpt-' + e + '">  <i class="material-icons">content_copy</i></button>' 
        
        }) 
} 