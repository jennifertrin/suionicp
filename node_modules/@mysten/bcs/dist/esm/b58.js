import bs58 from "bs58";
const toB58 = (buffer) => bs58.encode(buffer);
const fromB58 = (str) => bs58.decode(str);
export {
  fromB58,
  toB58
};
//# sourceMappingURL=b58.js.map
