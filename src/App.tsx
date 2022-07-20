import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';
import 'office-ui-fabric-react/dist/css/fabric.css';

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '960px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};

export const App: React.FunctionComponent = () => {
  return (
    <Stack className='board'>
      <div className="ms-Grid" dir="ltr">
        <Text variant="xxLargePlus" styles={boldStyle}>TV Shows</Text>
      </div>
      <div className="ms-Grid-col ms-sm6 ms-xl6">
        <Text variant="large">These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best programs on TV.</Text>
      </div>
    </Stack>
  );
};
