import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

const App = () => {
  const [searchRequest, setSearchRequest] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("savedContacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem("savedContacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchRequest.toLowerCase())
  );

  const handleSearchRequest = (e) => {
    setSearchRequest(e.target.value);
  };

  const handleContactSubmit = (values, actions) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { ...values, id: uuidv4() },
    ]);
    actions.resetForm();
  };

  const handleContactDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm submitHandler={handleContactSubmit} />
      <SearchBox
        searchRequest={searchRequest}
        handleChange={handleSearchRequest}
      />
      <ContactList
        contacts={filteredContacts}
        handleDelete={handleContactDelete}
      />
    </div>
  );
};

export default App;
