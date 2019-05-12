import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import { Form, Input, Button, List, Dropdown } from 'antd';
import { Formik } from 'formik';
import classNames from 'classnames';
import styled from 'styled-components';

// styles
import './skills.scss';

// styled components
const ColoredDiv = styled.div`
  display: inline-block;
  width: 40px;
  height: 15px;
  vertical-align: middle;
  background-color: ${props => props.color || 'red'};
  cursor: ${props => (!props.disabled ? 'pointer' : 'default')};
`;

export default ({ skillData }) => {
  const [isEditMode, setEditMode] = useState(false);
  const inactiveClass = classNames({ inactive: !isEditMode });

  return (
    <Formik
      initialValues={skillData}
      onSubmit={(values, actions) => {
        editSkill({
          variables: {
            ...values,
            percent: Number(values.percent),
          },
        });
      }}
    >
      {({ handleChange, handleSubmit, values, setFieldValue }) => (
        <List.Item>
          <Form layout="inline">
            <Form.Item label="Name">
              <Input
                className={inactiveClass}
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                name={`name`}
                readOnly={!isEditMode}
              />
            </Form.Item>
            <Form.Item label="Percent">
              <Input
                className={inactiveClass}
                placeholder="Percent"
                value={values.percent}
                onChange={handleChange}
                name={`percent`}
                readOnly={!isEditMode}
              />
            </Form.Item>
            <Form.Item label="color">
              <Dropdown
                overlay={
                  <ChromePicker
                    color={values.color}
                    disableAlpha={false}
                    onChange={color => {
                      setFieldValue('color', color.hex);
                    }}
                  />
                }
                disabled={!isEditMode}
                trigger={['click']}
              >
                <ColoredDiv color={values.color} disabled={!isEditMode} />
              </Dropdown>
            </Form.Item>
            <Form.Item>
              <Button
                shape="circle"
                type="primary"
                icon={isEditMode ? 'save' : 'edit'}
                size="small"
                onClick={() => {
                  if (!isEditMode) {
                    setEditMode(!isEditMode);
                  } else {
                    handleSubmit();
                  }
                }}
              />
              <Button shape="circle" type="danger" icon="delete" size="small" />
            </Form.Item>
          </Form>
        </List.Item>
      )}
    </Formik>
  );
};
