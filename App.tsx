import React, {useState} from 'react'
import {Button, Text, View, Alert} from 'react-native'

type CatProps = { 
  name: string;
}

const createOneButtonAlert = (name: string) =>
  Alert.alert("Wait!", name + " is hungry!", [
    {text: 'I will feed ' + name, onPress: () => console.log('OK Pressed')},
  ]);



const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);
  const [timesPetted, setTimesPetted] = useState(0)
  const [counter, setCounter] = useState(1);

  return (
    <View style={{padding: 45}}>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button onPress={() => {
        setIsHungry(false);
      }}
      disabled = {!isHungry} 
      title = {isHungry ? "Pour me some milk please!" : "I'll eat later"}
      />
      <Button onPress={() => {
        setTimesPetted(timesPetted + 1);
        if (timesPetted >= 5 * counter) {
          createOneButtonAlert(props.name);
          setIsHungry(true);
          setCounter(counter + counter * 0.5);
        }
      }}
      disabled = {isHungry} 
      title = {"You have petted me " + timesPetted + " times! : "}
      />
    </View>
  );
};


const Cafe = () => {
  return ( 
    <View style={{flex: 1, justifyContent: 'center'}}> 
    {/* </View>/<Text>{"\n\n\n\n\n\n"}</Text> */}
      <Cat name="Hunter" />
      <Cat name="Brandy" />
    </View>
  )
}


export default Cafe;