var btn = document.querySelector("div.area.done div.input-group-button");
console.log(btn);
btn.addEventListener('click', function (evt) {
    let v = document.querySelector("input.input-sm").value;
    console.log(v);
    let can = document.querySelector("div.area.done div.svg-wrapper.flex");
    if (v){
        can.innerHTML = `<img width="360px" max-height="240px" src="${v}">`;
    }
});
