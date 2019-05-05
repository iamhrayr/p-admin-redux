import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

// actions
import { categoryActions } from 'Store/category';
import { workActions } from 'Store/work';

// selectors
import { getSelectedWork } from 'Store/work/selectors';

// components
import AddEditWorkForm from '../shared/AddEditWorkForm';

class EditWork extends React.PureComponent {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.setSelectedWork({ id });
    this.props.fetchCategories();
  }

  render() {
    const { editWork, work, categories, selectedWork } = this.props;
    // return null;
    return selectedWork ? (
      <AddEditWorkForm
        onSubmit={editWork}
        onSubmitLoading={!!'editWorkLoading'}
        data={selectedWork.data}
        datafetched={selectedWork.fetched}
        dataLoadingError={'error'}
        categories={categories}
      />
    ) : null;
  }
}

const mapStateToProps = (state) => ({
  categories: state.category.list,
  work: state.work.item,
  selectedWork: getSelectedWork(state),
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
