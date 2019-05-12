import React from 'react';
import { Tag, Input, Tooltip, Icon } from 'antd';

export default class EditableTagList extends React.Component {
  state = {
    inputVisible: false,
    inputValue: '',
  };

  render() {
    const { inputVisible, inputValue } = this.state;
    const { tags } = this.props;

    return (
      <div>
        {tags.map((tag, i) => (
          <Tag key={i} closable onClose={() => this._handleRemove(tag)}>
            {tag}
          </Tag>
        ))}

        <If condition={inputVisible}>
          <Input
            ref={this._saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this._handleInputChange}
            onBlur={this._handleInputConfirm}
            onPressEnter={this._handleInputConfirm}
          />
        </If>

        <If condition={!inputVisible}>
          <Tag onClick={this._showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
            <Icon type="plus" /> New Tag
          </Tag>
        </If>
      </div>
    );
  }

  _handleRemove = removedTag => {
    this.props.onRemove(removedTag);
  };

  _showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  _handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  _handleInputConfirm = () => {
    const { inputValue } = this.state;
    if (inputValue) {
      this.props.onAdd(inputValue);
    }

    this.setState({
      inputVisible: false,
      inputValue: '',
    });
  };

  _saveInputRef = input => (this.input = input);
}
