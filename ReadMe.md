# Bug in "@types/no-extraneous-dependencies": listing the types package instead of the main package

https://github.com/import-js/eslint-plugin-import/issues/3208

## Summary of repo contents

index.ts

```
import qs from 'qs';
...
```

package.json (I forget to add a dependency on "qs", but it gets included indirectly via "express")

```
    "dependencies": {
        "express": "^4.21.2"
    },
    "devDependencies": {
        "@types/qs": "^6.9.7",
        ...
    }
```

eslint.config.mjs:

```
    rules: {
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: false,
            peerDependencies: false,
        }],
    },
```

## To reproduce

```
npm install
npm run lint
```

```
 .../index.ts
   1:1  error  '@types/qs' should be listed in the project's dependencies, not devDependencies
 import/no-extraneous-dependencies
```

Problem: It's reporting "@types/qs" instead of "qs".

This slight reporting issue really threw me off. I was trying all kinds of weird things to figure out why it was reporting the "@types/qs" package, only to realize that I didn't include "qs" in my dependencies list.

