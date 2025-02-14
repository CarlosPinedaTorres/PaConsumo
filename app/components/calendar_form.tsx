import { View } from 'react-native';
import { GlobalStyles } from "../../themes/GlobalStyles";
import { Pressable, TextInput } from "react-native-gesture-handler";
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Props{
  nombre:string
}

export default function Calendar_form({nombre}:Props) {
  const[date,setDate] = useState(new Date());
  const[showPicker, setShowPicker] = useState(false);
  const[dia, setDia] = useState("");

  const toggleDatePicker = () => {
    setShowPicker(!showPicker)
  }
  const onChange = ({type}: any,selectedDate: any) => {
    if(type == 'set'){
      const currentDate = selectedDate;
      setDate(currentDate);
      toggleDatePicker();
      setDia(formatDate(currentDate))
    }else{
      toggleDatePicker();
    }
  };
  const formatDate = (rawDate:Date) =>{
    let date = new Date(rawDate);
    let anio = date.getFullYear();
    let mes = date.getMonth()+1;
    let day = date.getDate();

    const formattedDay = day.toString().padStart(2, '0');
    const formattedMonth = mes.toString().padStart(2, '0');
    return `${formattedDay}/${formattedMonth}/${anio}`;
  }
 
  return(
    
    <Pressable
      onPress={toggleDatePicker}
    >
      
      <View style={GlobalStyles.input_form_box}>
        {showPicker && (
        <DateTimePicker
        mode='date'
        display='calendar'
        value={date}
        onChange={onChange}
        />
        )}
          <TextInput style={GlobalStyles.input_form_text} value={dia} onChangeText={setDia} editable={false} placeholder={nombre}></TextInput>
          <Ionicons style={{marginTop:5}} size={72} name="calendar" color={"black"}></Ionicons>
      </View>
    </Pressable>
      
  )
}