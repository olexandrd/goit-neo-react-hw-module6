import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

const Contact = ({ name, number, id, handleDelete }) => {
  return (
    <div className={css.contact}>
      <div className={css.contactTextContainer}>
        <p className={css.text}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button
        onClick={() => {
          handleDelete(id);
        }}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
