import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import { List } from 'antd';

import SortableItem from './SortableItem';

const SortableList = SortableContainer(({ items }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value.title} />
      )}
    />
  );
});

export default React.memo(SortableList);
