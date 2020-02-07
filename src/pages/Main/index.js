/* eslint-disable react/static-property-placement */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, ActivityIndicator, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Name,
  Bio,
  Avatar,
  Info,
} from './styles';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Usuários',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    newUser: '',
    users: [],
    loading: false,
  };

  handleNavigate = user => {
    const { navigation } = this.props;

    navigation.navigate('User', { user });
  };

  handleSearchUser = async () => {
    const { newUser } = this.state;

    this.setState({ loading: true });

    const response = await api.get(`/search/users?q=${newUser}`);

    this.setState({
      users: [...response.data.items],
      loading: false,
    });

    Keyboard.dismiss();
  };

  render() {
    const { users, newUser, loading } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Buscar usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleSearchUser}
          />
          <SubmitButton loading={loading} onPress={this.handleSearchUser}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="search" size={20} color="#fff" />
            )}
          </SubmitButton>
        </Form>
        <List>
          {users.map(user => (
            <TouchableOpacity onPress={() => this.handleNavigate(user)}>
              <User>
                <Avatar source={{ uri: user.avatar_url }} />
                <Info>
                  <Name>{user.login}</Name>
                  <Bio>{user.id}</Bio>
                </Info>
              </User>
            </TouchableOpacity>
          ))}
        </List>
      </Container>
    );
  }
}
