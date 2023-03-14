
import React , {useState} from 'react';
import {View,Text,TextInput,StyleSheet,Dimensions,TouchableOpacity,StatusBar,FlatList,Alert,} from 'react-native'
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';


const Sign = () => {

 const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');
 
 const [message, setMessage] = useState('');

 const handleSignUp = async () => {
    try {
      const isUserCreated = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      console.log(isUserCreated);
    } catch (err) {
      console.log(err);

      setMessage(err.message);

      
    }
  };

    return (

      <LinearGradient colors={['#3f5efb', '#fc466b']} style={styles.linearGradient}>
  

      
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View>
                <Text style={styles.title}>
                    QuizApp
                </Text>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Enter Your Email"
                    value={email}
                    onChangeText={value => setEmail(value)}
                
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Enter Your Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={value => setPassword(value)}
                />

                <TouchableOpacity
                    style={styles.addButton}
                    onPress={()=> handleSignUp()}>
                    <Text style={{ color: 'white' }}>Signup</Text>
                </TouchableOpacity>

                <Text>{message}</Text>

             
            </View>
        </View>
        </LinearGradient>
        
    )
}

export default Sign

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    inputBox: {
      width: 'auto',
      borderRadius: 15,
      borderWidth: 2,
      marginVertical: 10,
      paddingLeft:30,
      paddingRight:30,
      backgroundColor: 'white'
    },
    addButton: {
      backgroundColor: 'black',
      alignItems: 'center',
      padding: 10,
      borderRadius: 50,
      borderColor: 'black',
      borderWidth: 2,
      marginTop: 10
    },
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
  title:{
   textAlign: 'center', 
   fontSize: 30, 
   fontWeight: 'bold',
   marginBottom: 20,
   color: 'black'
  }

  });