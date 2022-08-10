import React from "react";
import ListItem from "../ContactsListItem/ContactsListItem";
import PropTypes from "prop-types"
import styled from "styled-components";

const ContactsList = ({ displayedContacts, onClick }) => {
  if (displayedContacts.length !== 0) {
    return <StyledList>
      {displayedContacts?.map((contact) => (
        <ListItem key={contact.id} contact={contact} onClick={onClick} />
      ))}
    </StyledList>
  } else {
    return <p>No contacts in the list. Add your first contact</p>
  }
}

ContactsList.propTypes = {
  displayedContacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 65%;
  font-size: 18px
`

export default ContactsList