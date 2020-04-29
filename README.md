# TypeScript `--noImplicitAny` minimal repro

A minimal repro to showcase a potential/perceived issue with the --noImplicitAny compiler flag for TS

## Structure

`one.ts` is the potentially problematic file as it defines two constants, `response` and
`someDataFromResponse`, both of which have the inferred type of `any`. This isn't desired as the
`--noImplicitAny` compiler flag is set to `true` in `tsconfig.json`. The function
`fetchUrlAsJson` as defined in `two.ts` is a generic function to allow the caller to define the
expected response, however without the typescript compiler complaining about the use of `any`
there's no forcing mechanism for the person calling `fetchUrlAsJson()` to actually provide a type
and therefore any downstream usages of that data won't benefit from type checking.

## Checking whether TS complains

`yarn tsc --project tsconfig.json` shows no compilation errors.
