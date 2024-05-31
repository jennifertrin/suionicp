# hash-of-directory

Calculate the hash of a directory and its files.

## Install

```shell
yarn add hash-of-directory
```

## Usage

```javascript
import { hashOfDirectory } from "hash-of-directory";

const dir = path.join(__dirname, "example");

const hash = await hashOfDirectory(dir);

// you can also specify a specific encoding and algoritm
// defaults to sha256 algoritm & base64 encoding

const hash2 = await hashOfDirectory(dir, {
  algorithm: "sha1",
  encoding: "hex",
});
```
