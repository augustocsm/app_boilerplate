import React from "react";
import { Link } from "react-router-dom";

const renderCreate = props => {
  const id = props.app.id;
  const create = props.create;

  if (create) {
    return (
      <Link
        to={`/apps/edit/${id}`}
        className="ui small compact circular icon button grey"
      >
        <i className="edit icon"></i>
      </Link>
    );
  }
};

const renderUpdate = props => {
  const id = props.app.id;
  const update = props.update;

  if (update) {
    return (
      <Link
        to={`/apps/edit/${id}`}
        className="ui small compact circular icon button grey"
      >
        <i className="edit icon"></i>
      </Link>
    );
  }
};

const renderRead = props => {
  const id = props.app.id;
  const read = props.read;

  if (read) {
    return (
      <Link
        to={`/apps/${id}`}
        className="ui small compact circular icon button grey"
      >
        <i className="arrow right icon"></i>
      </Link>
    );
  }
};
const renderDelete = props => {
  const id = props.app.id;
  const dele = props.delete;

  if (dele) {
    return (
      <Link
        to={`/apps/delete/${id}`}
        className="ui small compact circular icon button red"
      >
        <i className="trash icon"></i>
      </Link>
    );
  }
};

const renderConfig = props => {
  const id = props.app.id;
  const config = props.config;

  if (config) {
    return (
      <Link
        to={`/apps/edit/${id}`}
        className="ui small compact circular icon button grey"
      >
        <i className="cog icon"></i>
      </Link>
    );
  }
};

const renderList = props => {
  const list = props.list;

  if (list) {
    return (
      <Link
        to={`/apps/`}
        className="ui small compact circular icon button grey"
      >
        <i className="list icon"></i>
      </Link>
    );
  }
};

const CrudBar = props => {
  return (
    <div className="right floated content">
      {renderList(props)}
      {renderCreate(props)}
      {renderConfig(props)}
      {renderRead(props)}
      {renderUpdate(props)}
      {renderDelete(props)}
    </div>
  );
};

CrudBar.defaultProps = {
  create: false,
  read: false,
  update: false,
  delete: false,
  list: false,
  config: false
};

export default CrudBar;
