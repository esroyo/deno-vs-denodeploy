# deno-vs-denodeploy

This is a simplified version of a much more complex application that runs on Deno but fails on denodeploy. Just picked the files necessary to reproduce the issue.

Given that the application works on Deno locally, it is very difficult to debug the issue remotely on denodeploy.

## Locally the application works

```
deno 1.46.3 (stable, release, x86_64-unknown-linux-gnu)
v8 12.9.202.5-rusty
typescript 5.5.2
```

```
deno task dev
```

We get a response:

```
curl http://0.0.0.0:8000/

{"name":"source","rawName":":@source","value":"potato","rawValue":"source","evaluation":"script","privacy":"private"}
```

## Denodeploy

```
curl https://deno-vs-denodeploy.deno.dev/

503 - Internal Server Error
```

```
Error: Evaluating a dynamic prop failed: `:@source="source"`.
Original error message: source is not defined
    at Function.evaluateScript (file:///src/moduleScript.mjs:83:10)
    at Function.evaluateScriptInline (file:///src/moduleScript.mjs:55:23)
    at Function.evaluateAttribute (file:///src/attributeSerializer.js:160:41)
    at file:///src/main.ts:4:46
    at ext:deno_http/00_serve.ts:364:24
    at ext:deno_http/00_serve.ts:553:29
    at eventLoopTick (ext:core/01_core.js:168:7)
```
