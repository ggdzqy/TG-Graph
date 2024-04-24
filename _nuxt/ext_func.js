
/*
 * 创建一个修改上传参数的容器
 */

$(function() {
    document.querySelector("body").innerHTML += `<div id="_topbox" style="display: flex; flex-direction: column; align-items: center; position: fixed; top: 15%; right: 1vh; z-index: 1000; background: white; padding:10px; border: 1px solid #c7cfd7; border-radius:5px;">
    <div id="_infobox">WAIT</div>
    </div>`;
})

$.createUploadInfoContainer = function(){
    //setTimeout(function(){doLoad();}, 500)
    //document.querySelector("#op").addEventListener('click', function() {
        document.querySelector("#_infobox").innerHTML = `<div class="kv" id="kv" align="right">
        <div>Name:<input class="readonly" id="kvname" type="text" readonly="readonly"></div>
        <div>Org:<input type="text" id="kvorg"></div>
        <div>Date:<input type="text" id="kvdate"></div>
        <div>Tag:<input type="text" id="kvtag"></div>
        <div>Label:<input type="text" id="kvlabel"></div>
        <div><button id="kvclearcookie" type="button">清除Cookie</button>
        <button id="kvsave" type="button">保存</button>
        </div>`;
        document.querySelector("#kvname").value = document.querySelector("input.input-sm").value.split("/file/")[1];
        document.querySelector("div.area.done div.svg-wrapper.flex").innerHTML = `<div align="center">WAIT:</div>`
        //read cookie
        document.querySelector("#kvorg").value = document.getElementById("upFiles").files[0].name ?? $.cookie('kvorg') ?? "";
        document.querySelector("#kvdate").value = $.cookie('kvdate') ?? "";
        document.querySelector("#kvtag").value = $.cookie('kvtag') ?? "";
        document.querySelector("#kvlabel").value = $.cookie('kvlabel') ?? "";

        document.querySelector("#kvsave").addEventListener("click", function() {
            let url = document.querySelector("input.input-sm").value;
            let kvorg = document.querySelector("#kvorg").value;
            let kvdate = document.querySelector("#kvdate").value;
            let kvtag = document.querySelector("#kvtag").value;
            let kvlabel = document.querySelector("#kvlabel").value;
            let fullurl=`${url}?org=${kvorg}&date=${kvdate}&tag=${kvtag}&label=${kvlabel}`;
            document.querySelector("div.area.done div.svg-wrapper.flex").innerHTML = `<div align="center">WAIT: ${fullurl}</div>`
            var yes = confirm('你確定提交嗎？');
            if (yes) {
                document.querySelector("div.area.done div.svg-wrapper.flex").innerHTML = `<img id="kvimg" style="width:360px;max-height:360px;object-fit:contain;" src="${fullurl}">`;
                //set cookie
                $.cookie('kvorg', kvorg, { expires: 7 });
                $.cookie('kvdate', kvdate, { expires: 7 });
                $.cookie('kvtag', kvtag, { expires: 7 });
                $.cookie('kvlabel', kvlabel, { expires: 7 });
            }
        });
        document.querySelector("#kvclearcookie").addEventListener("click", function() {
            $.cookie('kvorg', null);
            $.cookie('kvdate', null);
            $.cookie('kvtag', null);
            $.cookie('kvlabel', null);
        }); 
    //});
    console.log("createUploadInfoContainer start.")
}
