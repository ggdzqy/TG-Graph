<script type="text/javascript">  
var btn = document.querySelector("div.area.done div.input-group-button");
console.log(btn);
function doLoad() {
    btn.addEventListener('click', function (evt) {
        let v = document.querySelector("input.input-sm").value;
        console.log(v);
        let can = document.querySelector("div.area.done div.svg-wrapper.flex");
        if(v){
            can.innerHTML = `<img width="360px" max-height="240px" src="${v}">` }
        }
    )
}
(function(){
    setTimeout(function(){doLoad();}, 5000)
})();
</script>  
