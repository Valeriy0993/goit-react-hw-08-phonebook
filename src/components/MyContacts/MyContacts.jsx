import ContactListForm from './ContactsListForm/ContactsListForm';
import ContactList from './ContactsList/ContactsList';
import ContactFilter from './ContactsFilter/ContactsFilter';

import styles from './my-contacts.module.css';

const MyContacts = () => {
  return (
    <div className={styles.container}>
      <ContactListForm />
      <ContactFilter />
      <ContactList />
    </div>
  );
};

export default MyContacts;
