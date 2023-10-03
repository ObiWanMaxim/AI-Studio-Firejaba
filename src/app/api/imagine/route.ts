import { Midjourney } from "firejaba-mj";
import { ResponseError } from "../../../interfaces";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  console.log("imagine.handler", prompt);
  const client = new Midjourney({
    ServerId: <string>process.env.SERVER_ID,
    ChannelId: <string>process.env.CHANNEL_ID,
    SalaiToken: <string>process.env.SALAI_TOKEN,
    Ws: true
  });
  await client.init();
  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    start(controller) {
      console.log("imagine.start", prompt);
      client
        .Imagine(prompt, (uri: string, progress: string) => {
        //  console.log("imagine progress", progress);
          controller.enqueue(encoder.encode(JSON.stringify({ uri, progress })));
        })
        .then((msg) => {

          if (msg) {
            console.log("imagine.done", msg.uri);
            controller.enqueue(encoder.encode(JSON.stringify(msg)));
          }
          client.Close();
          controller.close();
        })
        .catch((err: ResponseError) => {
          console.log("imagine.error", err);
          client.Close();
          controller.close();
        });
    },
  });
  return new Response(readable, {});
}
