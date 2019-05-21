import React from 'react';
import { connect } from 'react-redux';
import { Table, Button, Divider } from 'antd';

import { workActions, workTypes, workSelectors } from 'Store/work';
import statusSelector from 'Store/utils/statusSelector';

import getColumns from './table-columns';

class WorkList extends React.PureComponent {
  componentDidMount() {
    if (!this.props.fetchsWorkStatus.done) {
      this.props.fetchWorks();
    }
  }

  render() {
    const { works, pagination, fetchsWorkStatus } = this.props;

    return (
      <>
        <Button type="primary" shape="round" icon="plus" onClick={this._navigateToNewWork}>
          Add New Work
        </Button>

        <Divider />

        <Table
          loading={fetchsWorkStatus.loading}
          rowKey={row => row._id}
          columns={getColumns(this.props)}
          dataSource={works}
          pagination={{
            hideOnSinglePage: true,
            defaultCurrent: pagination.page,
            pageSize: pagination.limit,
            total: pagination.total,
            onChange: (page, size) => {
              this.props.fetchWorks({ page, size });
            },
          }}
        />
      </>
    );
  }

  _navigateToNewWork = () => {
    this.props.history.push('/works/new-work');
  };
}

const mapStateToProps = state => ({
  pagination: state.work.list.pagination,
  works: workSelectors.getWorkList(state),
  fetchsWorkStatus: statusSelector(state, workTypes.FETCH_WORKS),
});

export default connect(
  mapStateToProps,
  {
    fetchWorks: workActions.fetchWorks,
    editWork: workActions.editWork,
    deleteWork: workActions.deleteWork,
  },
)(WorkList);
