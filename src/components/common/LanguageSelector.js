import React from "react";
import content from "./../../config/languages";

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        <i
          className="flag us"
          onClick={() => this.props.onLangChange(content.en)}
        />
        <i
          className="flag br"
          onClick={() => this.props.onLangChange(content.ptbr)}
        />
      </div>
    );
  }
}

export default LanguageSelector;
