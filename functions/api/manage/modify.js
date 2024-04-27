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

    //{"ListType":"public","Label":"None3","TimeStamp":1712817387960,"Tag":"None2","Org":"1"}
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const value = await env.img_url.getWithMetadata(id);
    if(value){
        //change the metadata
        value.metadata.Org = url.searchParams.get("Org")
        value.metadata.TimeStamp = url.searchParams.get("TimeStamp")
        value.metadata.Tag = url.searchParams.get("Tag")
        value.metadata.Label = url.searchParams.get("Label")
        await env.img_url.put(id,"",{metadata: value.metadata});
        const info = JSON.stringify(value.metadata);
        return new Response(info);
    }
    return "modify failed"

  }

