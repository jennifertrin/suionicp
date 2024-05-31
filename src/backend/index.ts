import { blob, Canister, text, ic, None, Record, update } from 'azle';
import { Secp256k1PublicKey } from '@mysten/sui/keypairs/secp256k1';
import { managementCanister } from 'azle/canisters/management';

const Signature = Record({
    signature: blob
});

export default Canister({
    suiAddress: update([], text, async () => {
        const caller = ic.caller().toUint8Array();

        const publicKeyResult = await ic.call(
            managementCanister.ecdsa_public_key,
            {
                args: [
                    {
                        canister_id: None,
                        derivation_path: [caller],
                        key_id: {
                            curve: { secp256k1: null },
                            name: 'dfx_test_key'
                        }
                    }
                ]
            }
        );

        const suiPublicKey = new Secp256k1PublicKey(publicKeyResult.public_key);
        const suiAddress = suiPublicKey.toSuiAddress();
        return suiAddress;
    }),
    sign: update([blob], Signature, async (messageHash) => {
        if (messageHash.length !== 32) {
            ic.trap('messageHash must be 32 bytes');
        }
        const caller = ic.caller().toUint8Array();
        const signatureResult = await ic.call(
            managementCanister.sign_with_ecdsa,
            {
                args: [
                    {
                        message_hash: messageHash,
                        derivation_path: [caller],
                        key_id: {
                            curve: { secp256k1: null },
                            name: 'dfx_test_key'
                        }
                    }
                ],
                cycles: 10_000_000_000n
            }
        );
        return {
            signature: signatureResult.signature
        };
    })
});
