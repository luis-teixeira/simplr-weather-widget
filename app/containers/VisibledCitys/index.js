import { connect } from 'react-redux';
import Citys from '../../components/Citys';

import { addCity } from '../App/actions';

const mapStateToProps = (state, ownProps) => ({
    citys: state.getIn(['app', 'citys']).toJS(),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddAction: (id) => dispatch(addCity(id)),
    dispatch,
  };
};

const VisibledCitys = connect(
  mapStateToProps,
  mapDispatchToProps
)(Citys);

export default VisibledCitys;
