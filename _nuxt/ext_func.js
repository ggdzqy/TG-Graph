const can = document.querySelector("div.area.done div.svg-wrapper.flex");
console.log(can);
const btn = document.querySelector("div.area.done div.input-group-button");
console.log(btn);
function doLoad() {
    btn.addEventListener('click', function (e) {
    let v = document.querySelector("input.input-sm").value;
    console.log(v);
    can.innerHTML = `<img width="360px" max-height="240px" src="${v}">` }
    , false);
    console.log("add click ok");
}
(function(){
    setTimeout(function(){doLoad();}, 3000)
})();
