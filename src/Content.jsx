import React from 'react';

function Content(props) {
  const content = props.content ? props.content : props.children;
  let toggleDisplay = !props.show ? 'hide' : 'show';

  return <div className={'panel-body ' + toggleDisplay}>{content}</div>;
}

export default Content;
