export async function onRequest(context) {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context;
  context.request;
  const url = new URL(request.url);

  const allowedDomains = env.ALLOWED_DOMAINS;
  const thisreferer = request.headers.get('referer') ?? "http://noreferer";
  const refererUrl = new URL(thisreferer);
  if(allowedDomains.includes(refererUrl.hostname) == false){
      return Response.redirect("https://static-res.mixart.top/imgs/404.png", 302);
  }

  const response = fetch("https://telegra.ph/" + url.pathname + url.search, {
    method: request.method,
    headers: request.headers,
    body: request.body,
  }).then(async (response) => {
    //console.log(response.ok); // true if the response status is 2xx
    //console.log(response.status); // 200
    // fix: 304 not modified ListType Block can be displayed
    if (response.ok || (!response.ok && response.status === 304)) {
      // referer header equal to the admin page
      console.log(url.origin + "/admin");
      if (request.headers.get("referer") == url.origin + "/admin") {
        //show the image
        return response;
      }
      if(allowedDomains.includes(refererUrl.hostname) == false){
        return Response.redirect("https://static-res.mixart.top/imgs/question.png", 302);
      }

      if (
        typeof env.img_url == "undefined" ||
        env.img_url == null ||
        env.img_url == ""
      ) {
      } else {
        //check the record from kv
        const record = await env.img_url.getWithMetadata(params.id);
        //console.log("record");
        //console.log(record);
        if (record.metadata === null) {
        } else {
          //if the record is not null, redirect to the image
          if (record.metadata.ListType == "White") {
            return response;
          } else if (record.metadata.ListType == "Block") {
            console.log("referer");
            console.log(request.headers.get("referer"));
            if (
              typeof request.headers.get("referer") == "undefined" ||
              request.headers.get("referer") == null ||
              request.headers.get("referer") == ""
            ) {
              console.log(
                'url.origin+"/block-img.html"',
                url.origin + "/block-img.html"
              );
              return Response.redirect(url.origin + "/block-img.html", 302);
            } else {
              return Response.redirect(
                "https://static-res.mixart.top/imgs/question.png",
                302
              );
            }
          }
          //check if the env variables WhiteList_Mode are set
          console.log("env.WhiteList_Mode:", env.WhiteList_Mode);
          if (env.WhiteList_Mode == "true") {
            //if the env variables WhiteList_Mode are set, redirect to the image
            return Response.redirect(url.origin + "/whitelist-on.html", 302);
          } else {
            //if the env variables WhiteList_Mode are not set, redirect to the image
            return response;
          }
        }
      }

      //get time
      let time = new Date().getTime();
      var today = new Date();
      //日期
      var DD = String(today.getDate()).padStart(2, '0'); // 获取日
      var MM = String(today.getMonth() + 1).padStart(2, '0'); //获取月份，1 月为 0
      var yyyy = today.getFullYear(); // 获取年
      // 时间
      var hh =  String(today.getHours()).padStart(2, '0');       //获取当前小时数(0-23)
      var mm = String(today.getMinutes()).padStart(2, '0');     //获取当前分钟数(0-59)
      var ss = String(today.getSeconds()).padStart(2, '0');     //获取当前秒数(0-59)
      var time_today = yyyy + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + ':' + ss;
      //var time_today = yyyy + MM + DD + hh + mm + ss;

      if (
        typeof env.img_url == "undefined" ||
        env.img_url == null ||
        env.img_url == ""
      ) {
        console.log("Not enbaled KV");
      } else {
        //get values from para in url
        let vorg = url.searchParams.get("org") ?? " ";
        let vdate = url.searchParams.get("date");
        let vtag = url.searchParams.get("tag");
        let vlabel = url.searchParams.get("label");
        if(vdate==null||vdate==""){ vdate = time_today; }
        if(vtag==null||vtag==""){ vtag = "public"; }
        if(vlabel==null||vlabel==""){ vlabel = ""; }

        //add image to kv
        await env.img_url.put(params.id, "", {
          metadata: { ListType: "None", Org: `${vorg}`, Tag: `${vtag}`, TimeStamp: `${vdate}`, Label: `${vlabel}`},
        });
      }
    }
    return response;
  });

  return response;
}
