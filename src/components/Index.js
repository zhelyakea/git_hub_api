import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as dataAction from '../actions/DataAction'
import * as searchByRepoAction from '../actions/SearchByRepoAction'
import * as repoNameAction from '../actions/RepoNameAction'
import * as showRepoAction from '../actions/ShowRepoAction'
import {style} from 'root/style'
import Search from 'components/Search'
import SearchState from 'components/SearchState'

class Index extends Component {
	render() {
		const { repo_search } = this.props.dataAction
		const { search_by_repo } = this.props.searchByRepoAction
		const { setRepoName } = this.props.repoNameAction
		const { showRepo } = this.props.showRepoAction
		const {
			repo,
			search_result,
			data,
			repo_name,
			user_name,
			selected_repo
		} = this.props
		const fetching = data.state
		return (
			<div className={style.top_container}>
				<div className={style.bar_top_5}>
					<Search
						repo_search={repo_search}
						search_result={search_result}
						fetching={fetching}
						repo_name={repo_name}
						user_name={user_name}
						setRepoName={setRepoName}
						showRepo={showRepo}
					/>
				</div>
				<SearchState fetching={fetching}/>
			</div>
		)
	}
}
Index.propTypes = {
  repo: PropTypes.object.repo,
  search_result: PropTypes.object.search_result,
  data: PropTypes.object.data,
  repo_name: PropTypes.object.repo_name,
  user_name: PropTypes.object.user_name,
  selected_repo: PropTypes.object.selected_repo,
}
function mapStateToProps (state) {
	return {
		repo: state.repo,
		search_result: state.search_result,
		data: state.data,
		repo_name: state.repo_name,
		user_name: state.user_name,
		selected_repo: state.selected_repo,
	}
}
function mapDispatchToProps(dispatch) {
  return {
    dataAction: bindActionCreators(dataAction, dispatch),
    repoNameAction: bindActionCreators(repoNameAction, dispatch),
    searchByRepoAction: bindActionCreators(searchByRepoAction, dispatch),
    showRepoAction: bindActionCreators(showRepoAction, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)
