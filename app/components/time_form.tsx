import { Pressable, View } from 'react-native';
import { GlobalStyles } from "../../themes/GlobalStyles";
import { TextInput } from "react-native-gesture-handler";
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker';

interface Props{
  nombre:string
}

export default function Time_form({nombre}:Props) {
  const[date,setDate] = useState(new Date());
  const[showPicker, setShowPicker] = useState(false);
  const[hora, setHora] = useState("");

  const toggleDatePicker = () => {
    setShowPicker(!showPicker)
  }
  const onChange = ({type}: any,selectedDate: any) => {
    if(type == 'set'){
      const currentDate = selectedDate;
      setDate(currentDate);
      toggleDatePicker();
      setHora(formatTime(currentDate))
      
    }else{
      toggleDatePicker();
    }
  };
  const formatTime = (rawDate:Date) =>{
    let date = new Date(rawDate);
    let hour = date.getHours();
    let minute = date.getMinutes();

    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinute = minute.toString().padStart(2, '0');
    return `${formattedHour}:${formattedMinute}`;
  }

  return(
    <Pressable
      onPress={toggleDatePicker}
    >
      
      <View style={GlobalStyles.input_form_box}>
        {showPicker && (
        <DateTimePicker
        mode='time'
        display='spinner'
        value={date}
        onChange={onChange}
        />
        )}
          <TextInput style={GlobalStyles.input_form_text} value={hora} onChangeText={setHora} editable={false} placeholder={nombre}></TextInput>
          <Ionicons style={{marginTop:5}} size={20} name="time" color={"black"}></Ionicons>
      </View>
    </Pressable>
  )
}