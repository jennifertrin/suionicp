export declare let verify: (pk: Uint8Array, sig: Uint8Array, msg: Uint8Array) => boolean;
/**
 *
 * @param pk primary key: Uint8Array
 * @param sig signature: Uint8Array
 * @param msg message: Uint8Array
 * @returns boolean
 */
export declare function blsVerify(pk: Uint8Array, sig: Uint8Array, msg: Uint8Array): boolean;
