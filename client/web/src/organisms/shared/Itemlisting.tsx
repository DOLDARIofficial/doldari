import React from 'react';

const Item = (props = {
  thumbnail: 'string',
  title: 'string',
  contents: 'string',
  authors: 'string[]',
}): any => (
  <li>
    <dl>
      <dt>
        <img src={props.thumbnail} alt={props.thumbnail} />
      </dt>
      <dd>
        <h3>{props.title}</h3>
        <p>{props.authors}</p>
        <article>{props.contents}</article>
      </dd>
    </dl>
  </li>
);

export default Item;
