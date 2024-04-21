
/**
 * 创建一个固定位置的按钮容器。
 * @returns {HTMLElement} 返回创建的按钮容器元素。
 */
function createButtonContainer() {
    document.querySelector("container.footer").innerHTML = `<div id="kv" class="input-group" align="right"><div>Date:<input type="text" id="date" class="input-sm"></div><div>Tag:<input type="text" id="tag" class="input-sm"></div><div>Label:<input type="text" id="label" class="input-sm"></div><div>Name:<input type="text" readonly="readonly"></div><div><button id="btnsave" type="button">保存</button></div>`;
}

(function(){
    document.querySelector("body").innerHTML += `<div id="_topbox" style="display: flex; flex-direction: column; align-items: center; position: fixed; top: 50%; right: 1vh; z-index: 1000; background: white; padding:10px; border: 1px solid #c7cfd7; border-radius:5px;"><div id="_infobox">WAIT ...</div><div id="_opbox"><button id="op">刷新</button></div></div>`;

    //setTimeout(function(){doLoad();}, 500)
    document.querySelector("#op").addEventListener('click', function() {
        document.querySelector("#_infobox").innerHTML = `<div id="kv" align="right"><div>Name:<input id="kvname" type="text" readonly="readonly" size="35"></div><div>Date:<input type="text" id="kvdate" size="35"></div><div>Tag:<input type="text" id="kvtag" size="35"></div><div>Label:<input type="text" id="kvlabel" size="35"></div><div><button id="kvsave" type="button">保存</button></div>`;
        document.querySelector("#kvname").value = document.querySelector("input.input-sm").value.split("/file/")[1];
        document.querySelector("#kvsave").addEventListener("click", function() {
            let url = document.querySelector("input.input-sm").value;
            let kvdate = document.querySelector("#kvdate").value;
            let kvtag = document.querySelector("#kvtag").value;
            let kvlabel = document.querySelector("#kvlabel").value;
            let fullurl=`${url}?date=${kvdate}&tag=${kvtag}&label=${kvlabel}`;
            document.querySelector("div.area.done div.svg-wrapper.flex").innerHTML = ""
            window.alert(fullurl);
            document.querySelector("div.area.done div.svg-wrapper.flex").innerHTML = `<img id="kvimg" style="width:360px;max-height:360px;object-fit:contain;" src="${fullurl}">`;
        });
        console.log("set save");
    });
    console.log("set DOM")
})();
