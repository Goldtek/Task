import React, { useState, FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { AppStyles } from './src/styles/style';
import { Button } from './src/components';
import { CreateHexColor } from './src/util';

const App: FC = () => {
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  const handlePress = () => {
    setBackgroundColor(CreateHexColor());
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[AppStyles.container, { backgroundColor }]}>
      <Text style={AppStyles.text}>Hello there</Text>
      {/* This is an added feature incase you just want to use button */}
       {/* <Button  title="Change Color" onPress={handlePress} />  */}
    </TouchableOpacity>
  );
};

export default App;