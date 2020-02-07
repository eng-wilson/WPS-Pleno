import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const Bio = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const RepoList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Repository = styled.View`
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const OwnerAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  background: #eee;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Description = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
  margin-bottom: 10px;
`;

export const Detail = styled.Text`
  font-size: 13px;
  margin-top: 2px;
`;

export const ListTitle = styled.Text`
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const FollowInfo = styled.View`
  width: 100%;
  padding: 0px 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Location = styled.Text`
  font-size: 13px;
  width: 100%;
  padding: 10px 15px;
  justify-content: flex-start;
  align-items: center;
`;
