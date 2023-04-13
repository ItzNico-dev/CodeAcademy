import React from 'react';
import Label from '../../../atoms/Label/Label';
import Input from '../../../atoms/Input/Input';
export default function FormInput({ text }) {
  return (
    <div>
      <Label />
      <Input> {text} </Input>
    </div>
  );
}
