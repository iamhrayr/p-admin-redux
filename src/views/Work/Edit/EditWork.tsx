import React from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';

// actions & selectors
import { categoryActions } from 'Store/category';
import { workActions, workTypes, workSelectors } from 'Store/work';
import statusSelector from 'Store/utils/statusSelector';

// components
import AddEditWorkForm from '../shared/AddEditWorkForm';

class EditWork extends React.PureComponent {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.setSelectedWork({ id });
    this.props.fetchCategories();
  }

  render() {
    const { editWork, fetchWorkStatus, editWorkStatus, categories, selectedWork } = this.props;

    if (fetchWorkStatus.loading) {
      return <Spin />;
    }

    return (
      <AddEditWorkForm
        onSubmit={editWork}
        onSubmitLoading={editWorkStatus.loading}
        data={selectedWork}
        dataLoading={fetchWorkStatus.loading}
        dataFetched={fetchWorkStatus.done}
        dataLoadingError={fetchWorkStatus.error}
        categories={categories}
      />
    );
  }
}

const mapStateToProps = state => ({
  categories: state.category.list,
  selectedWork: workSelectors.getSelectedWork(state),
  fetchWorkStatus: statusSelector(state, workTypes.FETCH_WORK),
  editWorkStatus: statusSelector(state, workTypes.EDIT_WORK),
});

export default connect(
  mapStateToProps,
  {
    fetchCategories: categoryActions.fetchCategories,
    setSelectedWork: workActions.setSelectedWork,
    editWork: workActions.editWork,
    // fetchWork: workActions.fetchWork,
  },
)(EditWork);
