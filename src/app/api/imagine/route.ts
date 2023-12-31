import { Midjourney } from "firejaba-mj";
import { ResponseError } from "../../../interfaces";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  console.log("imagine.handler", prompt);
  const client = new Midjourney({
    ServerId: <string>process.env.SERVER_ID,
    ChannelId: <string>process.env.CHANNEL_ID,
    SalaiToken: <string>process.env.SALAI_TOKEN,
    Ws: false
  });
  // await client.init();
  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      console.log("imagine.start", prompt);
      await client
        .Imagine(prompt, (uri: string, progress: string) => {
          //  console.log("imagine progress", progress);
          controller.enqueue(encoder.encode(JSON.stringify({ uri, progress })));
        })
        .then((msg) => {
          if (msg) {
            console.log("imagine.done", msg.uri);
            controller.enqueue(encoder.encode(JSON.stringify(msg)));
          }
        })
        .catch((err: ResponseError) => {
          console.log("imagine.error", err);
          // client.Close();
          controller.close();
        });
        client.Close();
        controller.close();
    },
  });
  return new Response(readable, {});
}
