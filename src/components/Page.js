import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {style} from 'root/style'
import { Switch, Case, Default } from 'jsx-switch';
import RepoItem from 'components/RepoItem';
import * as showRepoAction from '../actions/ShowRepoAction'
import { Link, browserHistory } from 'react-router'

export class Page extends Component {
	render() {
    const {
      search_result,
      selected_repo
    } = this.props
		const this_repo_name = (type) => {
			if(search_result.hasOwnProperty(selected_repo.id)){
				switch(type){
					case 'html_url':
						return search_result[selected_repo.id].html_url
						break
					case 'description':
						return 'Description: ' + search_result[selected_repo.id].description
						break
					case 'login':
						return 'Login: ' + search_result[selected_repo.id].owner.login
						break
					case 'avatar_url':
						return {backgroundImage: `url(${search_result[selected_repo.id].owner.avatar_url})`}
						break
				}
			}
		}
		return (
    <div className={style.middle_container}>
      <h2 className="width_450 padding_5p">{this_repo_name('login')}</h2>
      <div className="padding_5p avatar" style={this_repo_name('avatar_url')}></div>
      <p className="width_450 padding_5p">{this_repo_name('description')}</p>
      <a href={this_repo_name('html_url')}>{this_repo_name('html_url')}</a>
      <br/><button
        className={style.nav_button_red}
        onClick={() => browserHistory.push('/')}>
        Назад
      </button>
    </div>
		)
	}
}
Page.propTypes = {
  search_result: PropTypes.object.search_result,
  selected_repo: PropTypes.object.selected_repo,
}
function mapStateToProps (state) {
	return {
		search_result: state.search_result,
		selected_repo: state.selected_repo,
	}
}
function mapDispatchToProps(dispatch) {
  return {
    showRepoAction: bindActionCreators(showRepoAction, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page)
