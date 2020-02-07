/* eslint-disable react/state-in-constructor */
/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  RepoList,
  Repository,
  Info,
  Title,
  Description,
  Detail,
  ListTitle,
  FollowInfo,
  Location,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    user: {},
    stars: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;

    const user = navigation.getParam('user');

    const info = await api.get(`/users/${user}`);
    const repositories = await api.get(`/users/${user}/repos`);

    this.setState({ user: info.data, stars: repositories.data });
  }

  render() {
    const { user, stars } = this.state;

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar_url }} />
          {user.name && <Name>{user.name}</Name>}
          {user.bio && <Bio>{user.bio}</Bio>}

          <Location>Localização: {user.location}</Location>

          <FollowInfo>
            <Detail>Seguidores: {user.followers}</Detail>
            <Detail>Seguindo: {user.following}</Detail>
          </FollowInfo>
        </Header>

        <ListTitle>Repositórios</ListTitle>

        <RepoList
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({ item }) => (
            <Repository>
              <Info>
                <Title>{item.name}</Title>
                {item.description && (
                  <Description>{item.description}</Description>
                )}
                <Detail>
                  {item.forks} {item.forks === 1 ? 'fork' : 'forks'}
                </Detail>
                <Detail>
                  {item.open_issues}{' '}
                  {item.open_issues === 1 ? 'open issue' : 'open issues'}
                </Detail>
              </Info>
            </Repository>
          )}
        />
      </Container>
    );
  }
}
