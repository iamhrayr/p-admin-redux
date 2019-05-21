import React from "react";
import { Upload, Icon, message } from "antd";
import Dropzone, { useDropzone } from "react-dropzone";
import styled from "styled-components";

const WrapperDiv = styled.div`
  padding: 5px;
  border: dashed 1px #5d8ecc;
  border-radius: 4px;
  background: #fafafa;
  text-align: center;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export default class Thumbnail extends React.Component {
  state = {
    imageUrl: this.props.src || ""
  };

  render() {
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload Thumbnail</div>
      </div>
    );

    const { imageUrl } = this.state;

    return (
      <Dropzone
        onDrop={this._onDrop}
        multiple={false}
        accept="image/jpeg, image/png"
        // maxSize={ALLOWED_FILE_SIZE}
      >
        {({ getRootProps, getInputProps }) => (
          <WrapperDiv {...getRootProps()}>
            <input {...getInputProps()} />
            {imageUrl ? <img src={imageUrl} alt="thumbnail" /> : uploadButton}
          </WrapperDiv>
        )}
      </Dropzone>
    );
  }

  _onDrop = ([acceptedFile], [rejectedFile]) => {
    if (rejectedFile) {
      return notification.error({
        message: "Files rejected",
        description: `${rejectedFile.name} is not allowed`
      });
    }

    if (acceptedFile) {
      this.props.onAddImage(acceptedFile);
    }

    const reader = new FileReader();
    reader.onload = e => {
      this.setState({ imageUrl: e.target.result });
    };

    reader.readAsDataURL(acceptedFile);
  };
}
