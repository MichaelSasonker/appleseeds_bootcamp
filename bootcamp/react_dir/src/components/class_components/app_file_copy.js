
import React from 'react';
import Card from './components/class_components/class_components_6.1';
import Faker from 'faker';

class App extends React.Component {
  render() {
    return(
      <div>
        <Card srcImg={Faker.image.image()} textTitle={Faker.lorem.sentence()} textLink={Faker.lorem.word()}/>
        <Card srcImg={Faker.image.image()} textTitle={Faker.lorem.sentence()} textLink={Faker.lorem.word()}/>
        <Card srcImg={Faker.image.image()} textTitle={Faker.lorem.sentence()} textLink={Faker.lorem.word()}/>
      </div>
    );
  };
}

export default App;
