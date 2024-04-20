
/**
 * 创建一个固定位置的按钮容器。
 * @returns {HTMLElement} 返回创建的按钮容器元素。
 */
function createButtonContainer() {
    document.querySelector("#_topbox").innerHTML = `<div id="kv" class="input-group" align="right"><div>Date:<input type="text" id="date" class="input-sm"></div><div>Tag:<input type="text" id="tag" class="input-sm"></div><div>Label:<input type="text" id="label" class="input-sm"></div><div>Name:<input type="text" readonly="readonly"></div><div><button id="btnsave" type="button">保存</button></div>`;
}

(function(){
    document.querySelector("#__nuxt").innerHTML += `<div id="_topbox" style="display: flex; flex-direction: column; align-items: center; position: fixed; top: 50%; right: 1vh; z-index: 1000; background: white; padding:10px; border: 1px solid #c7cfd7; border-radius:5px;">WAIT ...</div>`;

    const can = document.querySelector("div.area.done div.svg-wrapper.flex");
    const btn = document.querySelector("div.area.done div.input-group-button");
    //setTimeout(function(){doLoad();}, 500)
    document.querySelector("div.area.done div.input-group-button").addEventListener('click', function() {
        document.querySelector("#_topbox").innerHTML = `<div id="kv" align="right"><div>Date:<input type="text" id="kvdate"></div><div>Tag:<input type="text" id="kvtag"></div><div>Label:<input type="text" id="kvlabel" size="50"></div><div>Name:<input id="kvname" type="text" readonly="readonly" size="50"></div><div><button id="kvsave" type="button">保存</button></div>`;
        document.querySelector("#kvname").value = document.querySelector("input.input-sm").value.split("/file/")[1];
        document.querySelector("#kvsave").addEventListener("click", function() {
            let url = document.querySelector("input.input-sm").value;
            let kvdate = document.querySelector("#kvdate").value;
            let kvtag = document.querySelector("#kvtag").value;
            let kvlabel = document.querySelector("#kvlabel").value;
            let fullurl=`${url}?date=${kvdate}&tag=${kvtag}&label=${kvlabel}`;
            window.alert(fullurl);
            document.querySelector("div.area.done div.svg-wrapper.flex").innerHTML = `<img id="kvimg" style="width:360px;max-height:360px;object-fit:contain;" src="${fullurl}">`;
        });
        console.log("set save")
    });
    console.log("set DOM")
})();
