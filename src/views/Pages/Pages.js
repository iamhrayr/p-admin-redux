import React, { useState, useCallback } from 'react';
import { Formik } from 'formik';
import { Form, Input, Button, List, Dropdown, Avatar } from 'antd';
// import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

// import SortableItem from './SortableItem';
import SortableList from './SortableList';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

export default () => {
  const [pages, setPages] = useState(data);

  const onSortEnd = useCallback(({ oldIndex, newIndex }) => {
    setPages(arrayMove(pages, oldIndex, newIndex));
  }, []);

  return <SortableList items={pages} onSortEnd={onSortEnd} useDragHandle />;

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          {/* <List.Item.Meta

            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          /> */}
          <a href="https://ant.design">{item.title}</a>
        </List.Item>
      )}
    />
  );

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
