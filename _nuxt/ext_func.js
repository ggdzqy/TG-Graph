function doLoad() {
    document.querySelector("div.area.done div.input-group-button").addEventListener('click', function (e) {
    let v = document.querySelector("input.input-sm").value;
    document.querySelector("div.area.done div.svg-wrapper.flex").innerHTML = `<img style="width:360px;max-height:360px;object-fit:contain;" src="${v}">` }
    , false);
    document.querySelector("div.area.done div.text-area").innerHTML = `<div id="kv" class="input-group">Date:<input type="text" id="date" class="input-sm">Tag:<input type="text" id="tag" class="input-sm">Label:<input type="text" id="label" class="input-sm"></div><button id="btnsave" type="button" >保存</button>`;
}
(function(){
    const can = document.querySelector("div.area.done div.svg-wrapper.flex");
    const btn = document.querySelector("div.area.done div.input-group-button");
    setTimeout(function(){doLoad();}, 3000)
})();
