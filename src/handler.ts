import { Router } from "itty-router";

const router = Router();

router.get("/", (request) => {
  return new Response("Hello world!");
});

router.get("/posts", (request) => {
  const posts = [
    {
      title: "lorem ipsum",
      body: "Ipsum dolor",
    },
    {
      title: "lorem ipsum",
      body: "Ipsum dolor",
    },
    {
      title: "lorem ipsum",
      body: "Ipsum dolor",
    },
  ];
  return new Response(JSON.stringify(posts));
});

export default {
  fetch: router.handle,
};
