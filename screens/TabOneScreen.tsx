import { login } from '@bepatient-fr/data-access-core';
import { Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const user = useSelector((state: any) => state?.core?.user);
  const instanceUrl = useSelector((state: any) => state?.core?.instanceUrl);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button
          onPress={()=>dispatch(login({ login: 'Pre02', password: 'azerty+1' }))}
          title={user ? 'Logged !' : 'Login'}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>{instanceUrl}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  user:{
    padding: 10,
    fontSize: 16,
    width: '80%',
  },
});
