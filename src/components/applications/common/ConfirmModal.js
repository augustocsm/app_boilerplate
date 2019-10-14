import React from "react";
import { Header, Modal } from "semantic-ui-react";

class ConfirmModal extends React.Component {
  componentDidMount() {
    this.closeConfigShow(true, true);
  }

  state = { open: true, closeOnEscape: true, closeOnDimmerClick: true };

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
  };

  render() {
    const { status, header, content, actions, submitBtn } = this.props;
    const { closeOnDimmerClick, closeOnEscape } = this.state;

    return (
      <div>
        <div>
          <Modal
            open={status}
            closeOnEscape={closeOnEscape}
            closeOnDimmerClick={closeOnDimmerClick}
            onClose={() => this.setState({ open: false })}
          >
            <Header icon="check" content={header} />

            <Modal.Content>
              <p>{content}</p>
            </Modal.Content>

            <Modal.Actions>{actions(submitBtn)}</Modal.Actions>
          </Modal>
        </div>
      </div>
    );
  }
}

export default ConfirmModal;
