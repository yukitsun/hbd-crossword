import { Input, TextField } from "@material-ui/core"
import React from "react"

interface Props {
  length: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputForm = (props: Props) => {
//   return <input defaultValue={props.content} onChange={props.onChange}></input>
  return <Input defaultValue={''} onChange={props.onChange} inputProps={{ 'aria-label': 'description', maxLength: props.length}} />
}