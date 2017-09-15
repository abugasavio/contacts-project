import React, { Component } from 'react'
import { Route} from 'react-router-dom';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './createContact';

class App extends Component {
	state = {
		contacts: [],
		screen: 'list' // list, create
	}

	componentDidMount() {
		ContactsAPI.getAll().then((contacts) => {
			this.setState({ contacts })
		})
	}

	removeContact = (contact) => {
		this.setState((state) => ({
			contacts: state.contacts.filter((c) => c.id !== contact.id)
		}))
		ContactsAPI.remove(contact)
	}

	render() {
		return (<div className="app">
				<Route exact path="/" render={() => (
					<ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact} />
				)} />
				<Route path="/create" component={CreateContact} />
				</div>
			)
	}
}

export default App;
