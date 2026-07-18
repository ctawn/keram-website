import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/ar") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the Arabic-first Keram homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /dir="rtl"/);
  assert.match(html, /سافر، وكل تفصيلة محسوبة/);
  assert.match(html, /اكتشف الرحلات/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("renders the English locale and journey collection", async () => {
  const [home, journeys] = await Promise.all([render("/en"), render("/en/journeys")]);
  assert.equal(home.status, 200); assert.equal(journeys.status, 200);
  assert.match(await home.text(), /Travel, with every detail considered/);
  assert.match(await journeys.text(), /Journeys built around you/);
});
