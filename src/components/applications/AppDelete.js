import React from "react";
import { connect } from "react-redux";
import { fetchApp, deleteApp } from "./../../actions/apps";
import { Button } from "semantic-ui-react";
import ConfirmModal from "./common/ConfirmModal";
import LanguageContext from "../../contexts/LanguageContext";

class AppDelete extends React.Component {
  componentDidMount() {
    this.props.fetchApp(this.props.match.params.id);
  }

  renderConfirmBtn = () => {
    const id = this.props.match.params.id;
    return (
      <LanguageContext.Consumer>
        {texts => (
          <>
            <Button onClick={this.props.history.goBack} negative>
              {texts.btn.no}
            </Button>

            <Button
              onClick={() => this.props.deleteApp(id)}
              positive
              labelPosition="right"
              icon="checkmark"
              content={texts.btn.yesDelete}
            />
          </>
        )}
      </LanguageContext.Consumer>
    );
  };

  render() {
    return (
      <LanguageContext.Consumer>
        {texts => {
          console.log(texts);
          const { title, content } = texts.apps.delete.modal;
          return (
            <div>
              <ConfirmModal
                open={true}
                header={title}
                content={content}
                actions={this.renderConfirmBtn}
              />
            </div>
          );
        }}
      </LanguageContext.Consumer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { app: state.apps[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchApp, deleteApp }
)(AppDelete);
