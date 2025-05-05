import { SpinningText } from "./motion-primitives/spinning-text";


export function SpinningTextBasic() {
  return (
    <SpinningText
      radius={5}
      fontSize={1.2}
      className='font-medium leading-none absolute top-20 sm:top-2'
    >
      {`Melbourne • Victoria • Australia • `}
    </SpinningText>
  );
}
