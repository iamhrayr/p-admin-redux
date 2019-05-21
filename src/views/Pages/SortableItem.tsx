import * as React from 'react';
import { List, Icon } from 'antd';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

const handlerStyles = {
  cursor: 'move',
  fontSize: 12,
};

const DragHandle = SortableHandle(() => <Icon type="menu" style={handlerStyles} />);

const SortableItem = SortableElement(({ value }: { value: string }) => (
  <List.Item>
    <DragHandle /> {value}
  </List.Item>
));

export default React.memo(SortableItem);
