
/*
 * 创建一个修改上传参数的容器
 */
function fakepath(srcpath){
    const regex = /(file\/)([0-9a-z]+)(\.jpg|\.png|\.gif)/i;
    const f = srcpath!=null ? srcpath.match(regex) : "";
    if(f==null || f==""){
      return srcpath;
    }
    if(f && f.length == 4){
        let rev = f[1]+f[2].split("").reverse().join("")+f[3];
        return srcpath.replace(f[0],rev)
    }
    return srcpath;
  }

  function GetDate(srcdate){
      //get time
      const today = new Date(srcdate);
      //日期
      var DD = String(today.getDate()).padStart(2, '0'); // 获取日
      var MM = String(today.getMonth() + 1).padStart(2, '0'); //获取月份，1 月为 0
      var yyyy = today.getFullYear(); // 获取年
      // 时间
      var hh =  String(today.getHours()).padStart(2, '0');       //获取当前小时数(0-23)
      var mm = String(today.getMinutes()).padStart(2, '0');     //获取当前分钟数(0-59)
      var ss = String(today.getSeconds()).padStart(2, '0');     //获取当前秒数(0-59)
      var time_today = yyyy + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + ':' + ss;
      return time_today;
  }



$(function() {
    document.querySelector("body").innerHTML += `<div id="_topbox" style="display: flex; flex-direction: column; align-items: center; position: fixed; top: 15%; right: 1vh; z-index: 1000; background: white; padding:10px; border: 1px solid #c7cfd7; border-radius:5px;">
    <div id="_infobox"><a href="/admin">ADMIN</a></div>
    </div>`;
})

$.clearUploadInfoContainer = function(){
    document.querySelector("#_infobox").innerHTML = `<a href="/admin">ADMIN</a>`;
    console.log("createUploadInfoContainer cleared.")
}

$.createUploadInfoContainer = function(){
    //setTimeout(function(){doLoad();}, 500)
    //document.querySelector("#op").addEventListener('click', function() {
        document.querySelector("#_infobox").innerHTML = `<div class="kv" id="kv" align="right">
        <div>Name:<input class="readonly" id="kvname" type="text" readonly="readonly"></div>
        <div>Org:<input type="text" id="kvorg"></div>
        <div>Date:<input type="text" id="kvdate"></div>
        <div>Tag:<textarea id="kvtag"></textarea>
        <div>Label:<textarea id="kvlabel"></textarea>
        <div><button id="kvclearcookie" type="button">清除Cookie</button>
        <button id="kvsave" type="button">提交</button>
        </div>`;
        document.querySelector("#kvname").value = document.querySelector("input.input-sm").value.split("/file/")[1];
        document.querySelector("div.area.done div.svg-wrapper.flex").innerHTML = `<div align="center">WAIT:</div>`
        //read cookie
        document.querySelector("#kvorg").value = document.getElementById("upFiles").files[0].name + "," + document.getElementById("upFiles").files[0].size;
        document.querySelector("#kvdate").value = GetDate(document.getElementById("upFiles").files[0].lastModifiedDate) ?? $.cookie('kvdate') ?? "";
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
            var yes = confirm('你確定提交数据嗎？');
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
            var yes = confirm('你確定要清除Cookies嗎？');
            if (yes) {
                $.cookie('kvorg', null);
                $.cookie('kvdate', null);
                $.cookie('kvtag', null);
                $.cookie('kvlabel', null);
            }
        }); 
    //});
    console.log("createUploadInfoContainer start.")
}
