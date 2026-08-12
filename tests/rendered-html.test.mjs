import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const html = await readFile(".next/server/app/index.html", "utf8");

test("renders the verified business information", () => {
  assert.match(html, /EL ESTUDIO TATTOO/);
  assert.match(html, /Passatge de Valeri Serra/);
  assert.match(html, /936 274 156/);
  assert.match(html, /elestudiobarcelona@gmail.com/);
  assert.match(html, /4,9/);
  assert.match(html, /90 reseñas/);
  assert.match(html, /Sandra/);
  assert.match(html, /Carolina/);
  assert.match(html, /Ilca/);
  assert.match(html, /Julia/);
});

test("all primary contact and proof routes are present", () => {
  assert.match(html, /instagram.com\/elestudiotattoo/);
  assert.match(html, /mailto:elestudiobarcelona@gmail.com/);
  assert.match(html, /tel:\+34936274156/);
  assert.match(html, /google.com\/maps/);
  assert.match(html, /instagram.com\/llajetatuaje/);
  assert.match(html, /instagram.com\/sandratatuaje/);
  assert.match(html, /instagram.com\/yuccatattoo/);
  assert.match(html, /instagram.com\/chultatu/);
});
