import React from 'react';
import ListItem from '../ContactsListItem/ContactsListItem';
import PropTypes from 'prop-types';
import { StyledList } from './ContactsList.styled';

const ContactsList = ({ displayedContacts, onClick }) => {
  if (displayedContacts.length !== 0) {
    return (
      <StyledList>
        {displayedContacts?.map(contact => (
          <ListItem key={contact.id} contact={contact} onClick={onClick} />
        ))}
      </StyledList>
    );
  } else {
    return <p>No contacts in the list. Add your first contact</p>;
  }
};

ContactsList.propTypes = {
  displayedContacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactsList;
