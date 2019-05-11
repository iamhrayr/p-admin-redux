import React, { useCallback, useState } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import { notification, Button } from 'antd';
import styled from 'styled-components';

import DropArea from 'Components/DropArea';

const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 5px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  position: relative;
  :hover {
    button {
      opacity: 1;
    }
  }
  img {
    width: 100%;
    display: block;
  }
  button {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
`;

const ALLOWED_FILE_SIZE = 2 * 1024 * 1024;

export default class Images extends React.Component {
  state = {
    imgPreviews: this.props.images,
  };

  render() {
    return (
      <>
        <Dropzone onDrop={this._onDrop} accept="image/jpeg, image/png" maxSize={ALLOWED_FILE_SIZE}>
          {({ getRootProps, getInputProps }) => (
            <DropArea
              getRootProps={getRootProps}
              getInputProps={getInputProps}
              text="Drag images here or click to select"
            />
          )}
        </Dropzone>
        <div style={{ marginTop: 10 }}>
          {this.state.imgPreviews.map((image, index) => (
            <Thumbnail key={index}>
              <img src={image.url} />
              <Button type="danger" shape="circle" icon="delete" onClick={() => this._handleImageDelete(index)} />
            </Thumbnail>
          ))}
        </div>
      </>
    );
  }

  _onDrop = (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length > 0) {
      this.props.setFieldValue('images', [...this.props.images, ...acceptedFiles]);
    }

    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = e => {
        this.setState({
          imgPreviews: [...this.state.imgPreviews, { url: e.target.result }],
        });
      };

      reader.readAsDataURL(file);
    });

    if (rejectedFiles.length > 0) {
      const fileNames = rejectedFiles.map(i => i.name);
      notification.error({
        message: 'Files rejected',
        description: `${fileNames.join(', ')} files are wrong format`,
      });
    }
  };

  _handleImageDelete = index => {
    const images = this.props.images.filter((img, i) => i !== index);
    this.props.setFieldValue('images', images);

    this.setState({
      imgPreviews: [...this.state.imgPreviews.slice(0, index), ...this.state.imgPreviews.slice(index + 1)],
    });
  };
}
