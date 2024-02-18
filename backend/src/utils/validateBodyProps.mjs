export default function ValidateBodyProps(props, bodyProps) {
  const bodyKeys = Object.keys(bodyProps);
  for (const iterator of bodyKeys) {
    if (props.includes(iterator)) {
      if (bodyProps[iterator].length === 0)
        throw new Error({code:401, msg:`${iterator} cannot be empty`});
      if (bodyProps[iterator] === null)
        throw new Error({code:401, msg:`${iterator} cannot be null`});
    }
  }
}