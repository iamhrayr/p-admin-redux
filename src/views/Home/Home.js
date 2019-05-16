import React from 'react';
import { Formik } from 'formik';
import { Form, Input, Button, List, Dropdown } from 'antd';

export default () => {
  return (
    <Formik>
      {({ handleChange, handleSubmit, values, setFieldValue }) => {
        //lorem
        return (
          <Form layout="inline">
            <Form.Item label="Name">
              <Input
              // className={inactiveClass}
              // placeholder="Name"
              // value={values.name}
              // onChange={handleChange}
              // name={`name`}
              // readOnly={!isEditMode}
              />
            </Form.Item>
          </Form>
        );
      }}
    </Formik>
  );
};
