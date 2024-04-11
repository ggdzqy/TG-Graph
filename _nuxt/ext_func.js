function doLoad() {
    var can = document.querySelector("div.area.done div.svg-wrapper.flex");
    console.log(can);
    var btn = document.querySelector("div.area.done div.input-group-button");
    console.log(btn);
    btn.addEventListener('click', function (e) {
    var v = document.querySelector("input.input-sm").value;
    console.log(v);
    can.innerHTML = `<img width="360px" max-height="240px" src="${v}">` }
    , false);
    console.log("add click ok");
}
(function(){
    setTimeout(function(){doLoad();}, 3000)
})();
