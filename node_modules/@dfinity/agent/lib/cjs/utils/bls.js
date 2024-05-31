"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blsVerify = exports.verify = void 0;
const bls12_381_1 = require("@noble/curves/bls12-381");
const buffer_1 = require("./buffer");
/**
 *
 * @param pk primary key: Uint8Array
 * @param sig signature: Uint8Array
 * @param msg message: Uint8Array
 * @returns boolean
 */
function blsVerify(pk, sig, msg) {
    const primaryKey = typeof pk === 'string' ? pk : (0, buffer_1.toHex)(pk);
    const signature = typeof sig === 'string' ? sig : (0, buffer_1.toHex)(sig);
    const message = typeof msg === 'string' ? msg : (0, buffer_1.toHex)(msg);
    return bls12_381_1.bls12_381.verifyShortSignature(signature, message, primaryKey);
}
exports.blsVerify = blsVerify;
//# sourceMappingURL=bls.js.map