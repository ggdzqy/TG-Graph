function doLoad() {
    document.querySelector("div.area.done div.input-group-button").addEventListener('click', function (e) {
    let v = document.querySelector("input.input-sm").value;
    document.querySelector("div.area.done div.svg-wrapper.flex").innerHTML = `<img style="width:360px;max-height:240px;object-fit:contain;" src="${v}">` }
    , false);
}
(function(){
    const can = document.querySelector("div.area.done div.svg-wrapper.flex");
    const btn = document.querySelector("div.area.done div.input-group-button");
    setTimeout(function(){doLoad();}, 3000)
})();
