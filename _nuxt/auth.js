var requestOptions = {
  method: "GET",
  redirect: "follow",
  //include authorization credientials
  credentials: "include",
};
const authCode =
  window.localStorage.getItem("authCode") || window.prompt("請輸入你的授權碼");
fetch(`./api/authCode/${authCode}`)
  .then(async (res) => {
    const isOK = await res.text();
    if (isOK === "ok") {
      window.localStorage.setItem("authCode", authCode);
    } else {
      window.location.reload()
    }
  })
  .catch((e) => {
    window.localStorage.removeItem("authCode")
    window.location.reload();
  });
