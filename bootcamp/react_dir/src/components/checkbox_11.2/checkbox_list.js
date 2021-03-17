import React from 'react';
import Checkbox from './checkbox_11.2';

class CheckboxList extends React.Component {
    render() {
        return (
            <>
                <Checkbox value='I read the term of the app' />
                <Checkbox value='I accept the term of the app' />
                <Checkbox value='I want to get weekly news letter' checked='checked'/>
                <Checkbox value='I want to get sales and offers' checked='checked'/>
            </>
        );
    }
}

export default CheckboxList;

/* App.js
import React from 'react';
import CheckboxList from './components/checkbox_11.2/checkbox_list';


class App extends React.Component {

  render() {
    return(
      <div>
        <CheckboxList />
      </div>
    );
  };
}

export default App;
*/

