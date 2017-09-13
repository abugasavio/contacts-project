import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegex from 'escape-string-regexp';
import sortBy from 'sort-by';

class ListContacts extends Component {
	static propTypes = {
		onDeleteContact: PropTypes.func.isRequired,
		contacts: PropTypes.array.isRequired
	}

	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({query: query.trim()})
	}

	clearQuery = () => {
		this.setState({query: ''})
	}

	render () {
		const { contacts, onDeleteContact } = this.props
		const { query } = this.state

		let showingContacts
		if (this.state.query) {
			const match = new RegExp(escapeRegex(this.state.query), 'i')
			showingContacts = contacts.filter((c) => match.test(c.name))
		} else {
			showingContacts = this.props.contacts
		}
		showingContacts.sort(sortBy('name'))

		return (
			<div className="list-contacts">
				<div className="list-contacts-top">
					<input
						className="search-contacts"
						type="text"
						placeholder="Search contacts"
						value={query}
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
				</div>
				{ showingContacts.length !== contacts.length && (
					<div className="showing-contacts">
						<span>Now showing {showingContacts.length} of {contacts.length}
						<button onClick={this.clearQuery}>Show all</button>
						</span>
					</div>
				)}

				<ol className="contact-list">
				{showingContacts.map((contact =>
						<li className="contact-list-item" key={contact.id}>
							<div className="contact-avatar" style={{
								backgroundImage: `url(${contact.avatarURL})`
							}} />
							<div className="contact-details">
								<p>{contact.name}</p>
								<p>{contact.email}</p>
							</div>
							<button onClick={() => onDeleteContact(contact)} className="contact-remove">Remove</button>
						</li>
					))}
				</ol>
			</div>

		)
	}
}

export default ListContacts;
