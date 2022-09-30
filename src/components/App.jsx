import FormsOfContacts from './FormsOfContacts/FormsOfContacts';
import TitleForm from "./Title/TitleForm";
import TitleContacts from './Title/TitleContacts';
import BtnContacts from './BtnContacts/BtnContacts'
import ListOfContact from './ListOfContacts/ListOfContacts';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     <TitleForm />
     <FormsOfContacts />
     <BtnContacts/>
     <TitleContacts />
     <ListOfContact />
    </div>
  );
};
