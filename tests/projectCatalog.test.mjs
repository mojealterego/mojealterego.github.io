import test from "node:test";
import assert from "node:assert/strict";
import {
  FALLBACK_PROJECTS,
  indexProjectCatalog,
  loadProjectCatalog,
} from "../src/projectCatalog.js";

test("indexProjectCatalog preserves declared maturity and domain", () => {
  const catalog = indexProjectCatalog({
    owner: "mojealterego",
    projects: [
      { repo: "demo", status: "PROTOTYPE", domain: "AI / Agents" },
    ],
  });

  assert.deepEqual(catalog.demo, {
    repo: "demo",
    status: "PROTOTYPE",
    domain: "AI / Agents",
  });
});

test("loadProjectCatalog uses canonical manifest when it is valid", async () => {
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({
      owner: "mojealterego",
      projects: [
        { repo: "live-project", status: "BETA", domain: "Android" },
      ],
    }),
  });

  const catalog = await loadProjectCatalog(fakeFetch);

  assert.equal(catalog["live-project"].status, "BETA");
  assert.equal(catalog["live-project"].domain, "Android");
});

test("loadProjectCatalog falls back when canonical manifest is unavailable", async () => {
  const fakeFetch = async () => {
    throw new Error("network unavailable");
  };

  const catalog = await loadProjectCatalog(fakeFetch);

  assert.equal(catalog["OmniMAS-Advanced"].status, "PROTOTYPE");
  assert.equal(catalog["AURELIS-AI"].status, "PROTOTYPE");
  assert.deepEqual(catalog, indexProjectCatalog(FALLBACK_PROJECTS));
});

test("unsupported maturity values are ignored rather than exposed", () => {
  const catalog = indexProjectCatalog({
    owner: "mojealterego",
    projects: [
      { repo: "valid", status: "RESEARCH", domain: "Research" },
      { repo: "invalid", status: "DONE", domain: "Unknown" },
    ],
  });

  assert.equal(catalog.valid.status, "RESEARCH");
  assert.equal(catalog.invalid, undefined);
});
