import React from 'react';

export default function LoginTemplate(props) {
  return (
    <div>
      {props.header}
      <main>{props.selection1}</main>
      {props.footer}
    </div>
  );
}
