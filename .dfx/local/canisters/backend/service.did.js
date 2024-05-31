export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'sign' : IDL.Func(
        [IDL.Vec(IDL.Nat8)],
        [IDL.Record({ 'signature' : IDL.Vec(IDL.Nat8) })],
        [],
      ),
    'suiAddress' : IDL.Func([], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
