import React from 'react';

const TextField = (props) => {
  let n = props.rows;
    let x=props.cols;
  return [...Array(n)].map((e, i) => (
    <tr key={i}>
      {[...Array(x)].map((e, index) => (
        <td key={index}>
          <input type="text" style={{ width: '100%' }} />
        </td>
      ))}
    </tr>
  ));
};

export default TextField;
