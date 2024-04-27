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
    context.request;
    //console.log(env)
    //console.log(params.id)
    //read the metadata
    //const value = await env.img_url.getWithMetadata(params.id);

    const vdata = params.id.split("?")[1];
    const vjson = JSON.parse(vdata);
    // for (let [ksey, value] of metadata) { 
    //   console.log(`${key} : ${value}`);  
    //   ret.push(key, value)
    // }

    //"metadata":{"TimeStamp":19876541,"ListType":"None","rating_label":"None"}
    //change the metadata

    //await env.img_url.put(params.id,"",{metadata: metadata});
    //value.metadata.ListType = "public"
    //value.metadata.Tag = "None"
    //await env.img_url.put(params.id,"",{metadata: value.metadata});
    const info = JSON.stringify(vjson);
    return new Response(info);
  }

