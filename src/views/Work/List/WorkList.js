import React from 'react';
import { connect } from 'react-redux';
import { Table, Button, Divider } from 'antd';

import { workActions } from 'Store/work';
import { getWorkList } from 'Store/work/selectors';
import getColumns from './table-columns';

class WorkList extends React.PureComponent {
  componentDidMount() {
    if (!this.props.worksFetched) {
      this.props.fetchWorks();
    }
  }

  render() {
    const { works, pagination, worksFetching } = this.props;

    return (
      <>
        <Button type="primary" shape="round" icon="plus" onClick={this._navigateToNewWork}>
          Add New Work
        </Button>

        <Divider />

        <Table
          loading={worksFetching}
          rowKey={(row) => row._id}
          columns={getColumns(this.props)}
          dataSource={works}
          pagination={{
            hideOnSinglePage: true,
            defaultCurrent: pagination.page,
            pageSize: pagination.limit,
            total: pagination.total,
            onChange: (page, size) => {
              this.props.fetchWorks({ page, size });
            }
          }}
        />
      </>
    );
  }

  _navigateToNewWork = () => {
    this.props.history.push('/works/new-work');
  };
}

const mapStateToProps = (state) => ({
  pagination: state.work.list.pagination,
  worksFetching: state.work.list.fetching,
  worksFetched: state.work.list.fetched,
  works: getWorkList(state)
});

export default connect(
  mapStateToProps,
  { fetchWorks: workActions.fetchWorks }
)(WorkList);
