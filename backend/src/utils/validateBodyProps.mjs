import { MyError } from "../error/error.js";

export default function ValidateBodyProps(props, bodyProps) {
  const bodyKeys = Object.keys(bodyProps);
  for (const iterator of bodyKeys) {
    if (props.includes(iterator)) {
      if (bodyProps[iterator].length === 0){
        throw new MyError(`${iterator} cannot be empty`, 401);
      }
      if (bodyProps[iterator] === null)
        throw new MyError(`${iterator} cannot be null`, 401);
    }
  }
}