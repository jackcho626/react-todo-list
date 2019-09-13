import { connect } from 'react-redux'
import { Filter } from '../components/filters'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import { selectHide } from '../reducers/filters'

const mapStateToProps = state  => ({
  // hide: state.filters.hide
  hide: selectHide(state)
})

const mapDispatchToProps = dispatch => ({
  filterDone: bindActionCreators(actions.hideDone, dispatch),
  setSearchStr: bindActionCreators(actions.searchChanged, dispatch)
})

export const FiltersContainer = connect(mapStateToProps, mapDispatchToProps)(Filter)