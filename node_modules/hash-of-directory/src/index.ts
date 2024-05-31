import { BinaryToTextEncoding, createHash, Hash } from "crypto";
import { readdir, readFile } from "fs/promises";

const calculate = async (dir: string, hash: Hash) => {
  const files = (await readdir(dir, { withFileTypes: true })).sort();
  for (const file of files) {
    if (file.isDirectory()) {
      hash.update(file.name);
      await calculate(`${dir}/${file.name}`, hash);
    } else {
      const content = await readFile(`${dir}/${file.name}`);

      hash.update(file.name);
      hash.update(content);
    }
  }
};

export const hashOfDirectory = async (
  dir: string,
  opts: { algorithm?: string; encoding?: BinaryToTextEncoding } = {}
) => {
  const { algorithm = "sha256", encoding = "base64" } = opts;

  const hash = createHash(algorithm);
  await calculate(dir, hash);
  return hash.digest(encoding);
};
