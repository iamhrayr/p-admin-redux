import React from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';

// actions & selectors
import { categoryActions } from 'Store/category';
import { workActions, workTypes, workSelectors } from 'Store/work';
import statusSelector from 'Store/utils/statusSelector';

// components
import AddEditWorkForm from '../shared/AddEditWorkForm';

class NewWork extends React.PureComponent {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories, addWork, addWorkStatus } = this.props;

    return <AddEditWorkForm onSubmit={addWork} onSubmitLoading={addWorkStatus.loading} categories={categories} />;
  }
}

const mapStateToProps = state => ({
  categories: state.category.list,
  addWorkStatus: statusSelector(state, workTypes.ADD_WORK),
});

export default connect(
  mapStateToProps,
  {
    fetchCategories: categoryActions.fetchCategories,
    addWork: workActions.addWork,
  },
)(NewWork);
