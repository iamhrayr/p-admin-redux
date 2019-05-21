import * as React from 'react';
import { Formik, FormikProps, FormikActions } from 'formik';
import { Form, Input, Button, List, Dropdown } from 'antd';

interface MyFormValues {
  name: '';
}

export default () => {
  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={(values: MyFormValues, actions: FormikActions<MyFormValues>) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {({ handleChange, handleSubmit, values, setFieldValue }: FormikProps<MyFormValues>) => {
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
