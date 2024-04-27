export async function onRequestPost(context) {
    // Contents of context object
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;
    //console.log(env)
    //console.log(params.id)
    //read the metadata
    if(request.body){
      //const value = await env.img_url.getWithMetadata(params.id);
      console.log(request.body)


    //"metadata":{"TimeStamp":19876541,"ListType":"None","rating_label":"None"}
    //change the metadata
    const metadata = request.body[1];
    //await env.img_url.put(params.id,"",{metadata: metadata});
    //value.metadata.ListType = "public"
    //value.metadata.Tag = "None"
    //await env.img_url.put(params.id,"",{metadata: value.metadata});
    const info = JSON.stringify(request.body[0]) + JSON.stringify(request.body[1]);
    return new Response(info);
    }
    else{
      console.log("data error");
    }
  }

