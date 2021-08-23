import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name': '(주)오프닝',
  'birthday':'2020.08.08',
  'account': 'ACCOUNT: opening',
  'job':'Software DevlopV1'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/any/1',
  'name': 'TWeen',
  'birthday':'2020.08.08',
  'account': 'ACCOUNT: opening',
  'job':'Software DevlopV2'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/any/2',
  'name': '도드람',
  'birthday':'2020.08.08',
  'account': 'ACCOUNT: opening',
  'job':'Software DevlopV3'
}

]


class App extends Component {
  render() {
    return (
      <div className="gray-background">
        {
          customers.map(c => {
            return(
              <Customer 
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                account={c.account}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}




export default App;
