import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#5856D6',
  background: 'white', // white or gray
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
    backgroundColor: 'transparent', // transparent or gray
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  buttonBig: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  buttonBigText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 10,
  },
  avatarContainer: {
    alignItems: 'center',
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuText: {
    fontSize: 20,
    marginLeft: 10,
  },
  menuButton: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
