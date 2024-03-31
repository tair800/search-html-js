var search = document.getElementById("search");
var els = document.querySelectorAll(".el");

search.addEventListener("keyup", function () {
    els.forEach.call(els, function (el) {
        if (el.textContent.trim().indexOf(search.value) > -1)
            el.style.display = 'block';
        else el.style.display = 'none';
    });
});
