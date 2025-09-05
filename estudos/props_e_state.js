import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Cat = props => {
  const {fome, setFome} = useState(true);

  return (
    <View>
      <Text>
        Eu sou {props.name}, e eu {setFome ? 'estou com fome' : 'já almocei'}!
      </Text>
      <Button 
        onPress={() => {
          setFome(false);
        }}
        disable={!fome}
        title={fome ? 'Me alimente, por favor' : 'Estou satisfeito.'} 
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <>
      <Cat name="Lolô" />
      <Cat name="Félix" />
    </>
  )
}

export default Cafe;
