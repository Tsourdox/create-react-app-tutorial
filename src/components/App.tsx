import React from 'react';
import List from './List';

export interface Todo {
  title: string
  date: Date
  isDone: boolean
}

interface Props {}
interface State {
  todos: Todo[]
  isFunModeEnabled: boolean
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      isFunModeEnabled: false,
      todos: [{
        title: 'Köp mat',
        date: new Date(),
        isDone: false
      }, {
        title: 'Besök mormor',
        date: new Date(),
        isDone: false
      }, {
        title: 'Hitta en bok att läsa',
        date: new Date(),
        isDone: false
      }]
    }
  }

  handleOnClick = () => {
      this.setState({ isFunModeEnabled: true })
  }

  render() {
    if (this.state.isFunModeEnabled) {
      return (
        <div>🚜</div>
      )
    }
    
    return (
      <div className="App">
        <List items={this.state.todos} onButtonClick={this.handleOnClick}/>
      </div>
    );
  }
}

export default App;
