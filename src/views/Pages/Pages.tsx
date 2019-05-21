import * as React from 'react';
import { useState, useCallback } from 'react';
import { Formik } from 'formik';
import { Form, Input, Button, List, Dropdown, Avatar } from 'antd';
// import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

// import SortableItem from './SortableItem';
import SortableList from './SortableList';

import styles from './pages.scss';

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

const Pages: React.FC = () => {
  const [pages, setPages] = useState(data);

  const onSortEnd = useCallback(({ oldIndex, newIndex }) => {
    setPages(arrayMove(pages, oldIndex, newIndex));
  }, []);

  return (
    <>
      <div className={styles.blah}>test</div>
      <SortableList
        items={pages}
        onSortEnd={onSortEnd}
        useDragHandle
        helperClass={styles.sortableActive}
      />
    </>
  );

  // return (
  //   <Formik>
  //     {({ handleChange, handleSubmit, values, setFieldValue }) => {
  //       //lorem
  //       return (
  //         <Form layout="inline">
  //           <Form.Item label="Name">
  //             <Input
  //             // className={inactiveClass}
  //             // placeholder="Name"
  //             // value={values.name}
  //             // onChange={handleChange}
  //             // name={`name`}
  //             // readOnly={!isEditMode}
  //             />
  //           </Form.Item>
  //         </Form>
  //       );
  //     }}
  //   </Formik>
  // );
};

export default Pages;