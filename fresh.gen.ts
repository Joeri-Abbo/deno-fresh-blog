// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/_middleware.ts";
import * as $2 from "./routes/index.tsx";
import * as $3 from "./routes/list/[id].tsx";
import * as $4 from "./routes/post/[id].tsx";
import * as $5 from "./routes/settings.tsx";
import * as $$0 from "./islands/LocaleSelector.tsx";
import * as $$1 from "./islands/darkModeSwitch.tsx";
import * as $$2 from "./islands/githubLogo.tsx";
import * as $$3 from "./islands/readMoreButton.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/_middleware.ts": $1,
    "./routes/index.tsx": $2,
    "./routes/list/[id].tsx": $3,
    "./routes/post/[id].tsx": $4,
    "./routes/settings.tsx": $5,
  },
  islands: {
    "./islands/LocaleSelector.tsx": $$0,
    "./islands/darkModeSwitch.tsx": $$1,
    "./islands/githubLogo.tsx": $$2,
    "./islands/readMoreButton.tsx": $$3,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
