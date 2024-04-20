function dosave() {
    let url = document.querySelector("input.input-sm").value;
    let kvdate = document.querySelector("#kvdate").value;
    let kvtag = document.querySelector("#kvtag").value;
    let kvlabel = document.querySelector("#kvlabel").value;
    let fullurl=`${url}?date=${kvdate}&tag=${kvtag}&label=${kvlabel}`;
    window.alert(fullurl);
    document.querySelector("div.area.done div.svg-wrapper.flex").innerHTML = `<img id="kvimg" style="width:360px;max-height:360px;object-fit:contain;" src="${fullurl}">`;
}
function doLoad() {
    document.querySelector("div.area.done div.input-group-button").addEventListener('click', function (e) {
        let url = document.querySelector("input.input-sm").value;
        document.querySelector("div.area.done div.svg-wrapper.flex").innerHTML = `<img id="kvimg" style="width:360px;max-height:360px;object-fit:contain;" src="${url}">`
    }, false);
    
    document.querySelector("div.area.done div.text-area").style="padding: 10px 10px;"
    document.querySelector("div.area.done div.text-area").innerHTML = `<div id="kv" class="input-group"><div>Date:<input type="text" id="kvdate">Tag:<input type="text" id="kvtag"></div><div>Label:<input type="text" id="kvlabel"></div><div>Name:<input type="text" id="kvname" readonly="readonly"><button id="kvsave" type="button onclick=dosave()">保存</button></div>`;
    console.log("set DOM")
    document.querySelector("#kvname").size = 38;
    document.querySelector("#kvname").value = document.querySelector("input.input-sm").value.split("/file/")[1];
    // document.querySelector("#kvnsave").addEventListener('click', function (e) {
    //     let kvdate = document.querySelector("#kvdate").value;
    //     let kvtag = document.querySelector("#kvtag").value;
    //     let kvlabel = document.querySelector("#kvlabel").value;
    //     window.alert(`${v}?date=${kvdate}&tag=${kvtag}&label=${kvlabel}`);
    // }, false);
}
(function(){
    const can = document.querySelector("div.area.done div.svg-wrapper.flex");
    const btn = document.querySelector("div.area.done div.input-group-button");
    setTimeout(function(){doLoad();}, 500)
})();
