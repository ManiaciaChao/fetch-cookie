/// <reference types="node" />

import { CookieJar } from "tough-cookie";
import fetch from "node-fetch";

export function fetchCookieDecorator(
  fetch_impl: typeof fetch,
  jar: CookieJar
): typeof fetch;
