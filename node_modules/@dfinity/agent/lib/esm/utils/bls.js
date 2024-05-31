import { bls12_381 } from '@noble/curves/bls12-381';
import { toHex } from './buffer';
export let verify;
/**
 *
 * @param pk primary key: Uint8Array
 * @param sig signature: Uint8Array
 * @param msg message: Uint8Array
 * @returns boolean
 */
export function blsVerify(pk, sig, msg) {
    const primaryKey = typeof pk === 'string' ? pk : toHex(pk);
    const signature = typeof sig === 'string' ? sig : toHex(sig);
    const message = typeof msg === 'string' ? msg : toHex(msg);
    return bls12_381.verifyShortSignature(signature, message, primaryKey);
}
//# sourceMappingURL=bls.js.map