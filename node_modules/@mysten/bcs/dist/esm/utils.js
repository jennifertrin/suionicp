import { fromB58, toB58 } from "./b58.js";
import { fromB64, toB64 } from "./b64.js";
import { fromHEX, toHEX } from "./hex.js";
function encodeStr(data, encoding) {
  switch (encoding) {
    case "base58":
      return toB58(data);
    case "base64":
      return toB64(data);
    case "hex":
      return toHEX(data);
    default:
      throw new Error("Unsupported encoding, supported values are: base64, hex");
  }
}
function decodeStr(data, encoding) {
  switch (encoding) {
    case "base58":
      return fromB58(data);
    case "base64":
      return fromB64(data);
    case "hex":
      return fromHEX(data);
    default:
      throw new Error("Unsupported encoding, supported values are: base64, hex");
  }
}
function splitGenericParameters(str, genericSeparators = ["<", ">"]) {
  const [left, right] = genericSeparators;
  const tok = [];
  let word = "";
  let nestedAngleBrackets = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === left) {
      nestedAngleBrackets++;
    }
    if (char === right) {
      nestedAngleBrackets--;
    }
    if (nestedAngleBrackets === 0 && char === ",") {
      tok.push(word.trim());
      word = "";
      continue;
    }
    word += char;
  }
  tok.push(word.trim());
  return tok;
}
export {
  decodeStr,
  encodeStr,
  splitGenericParameters
};
//# sourceMappingURL=utils.js.map
