import test from "ava";
import snarky from ".";

test("snarky - async", async t => {
  t.is(await snarky("**bold text**"), "<strong>bold text</strong>");
});

test("snarky - sync", t => {
  t.is(snarky.sync("*italic text*"), "<em>italic text</em>");
});
