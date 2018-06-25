import React from 'react';

function HeaderCollapsable(props) {
  return (
    <div className="panel-heading">
      <h3 className="panel-title">
        {props.title}
        <div className="pull-right">
          <span className="btn btn-xs btn-success" onClick={props.onCollapse}>
            -
          </span>
          <span className="btn btn-xs btn-danger" onClick={props.onRemove}>
            X
          </span>
        </div>
      </h3>
    </div>
  );
}

export default HeaderCollapsable;
