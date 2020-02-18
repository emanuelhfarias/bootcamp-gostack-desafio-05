import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, IssueList, Filter } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      })
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    issue_state_filter: 'open',
  }

  async componentDidMount() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: this.state.issue_state_filter,
          per_page: 5,
        }
      })
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  async getIssues() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    const issues = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: this.state.issue_state_filter,
        per_page: 5,
      }
    })

    this.setState({ issues: issues.data });
  }

  changeFilter = e => {
    this.setState({ issue_state_filter: e.target.textContent.toLowerCase() });
    this.getIssues();
  }

  changeActive(option) {
    return this.state.issue_state_filter == option ? 'active': '';
  }

  render() {
    const { repository, issues, loading } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <Filter>
          <li className={this.changeActive('all')} onClick={this.changeFilter}>All</li>
          <li className={this.changeActive('open')} onClick={this.changeFilter}>Open</li>
          <li className={this.changeActive('closed')} onClick={this.changeFilter}>Closed</li>
        </Filter>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>
                      {label.name}
                    </span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}
