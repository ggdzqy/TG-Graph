function doLoad() {
    document.querySelector("div.area.done div.input-group-button").addEventListener('click', function (e) {
    let v = document.querySelector("input.input-sm").value;
    document.querySelector("div.area.done div.svg-wrapper.flex").innerHTML = `<img style="width:360px;max-height:360px;object-fit:contain;" src="${v}">` }
    , false);
}
(function(){
    const can = document.querySelector("div.area.done div.svg-wrapper.flex");
    const btn = document.querySelector("div.area.done div.input-group-button");
    setTimeout(function(){doLoad();}, 3000)
    document.querySelector("div.area.done div.text-area").style="padding: 10px 10px;"
    document.querySelector("div.area.done div.text-area").innerHTML = `<div id="kv" class="input-group"><div>Date:<input type="text" id="date" class="input-sm">Tag:<input type="text" id="tag" class="input-sm"></div><div>Label:<input type="text" id="label" class="input-sm"></div><div>Name:<input type="text" readonly="readonly"><button id="btnsave" type="button" >保存</button></div>`;
    console.log("set DOM")
})();
