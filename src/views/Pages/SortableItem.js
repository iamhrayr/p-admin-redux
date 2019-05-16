import React from 'react';
import { List, Icon } from 'antd';
import { SortableElement, sortableHandle } from 'react-sortable-hoc';

const handlerStyles = {
  cursor: 'move',
  fontSize: 12,
};

const DragHandle = sortableHandle(() => <Icon type="menu" style={handlerStyles} />);

const SortableItem = SortableElement(({ value }) => (
  <List.Item>
    <DragHandle /> {value}
  </List.Item>
));

export default React.memo(SortableItem);
