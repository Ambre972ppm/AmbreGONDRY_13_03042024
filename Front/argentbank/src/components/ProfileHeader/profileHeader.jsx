import { useState } from "react"
import styled from "styled-components";

const Form = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Input = styled.input`
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 3px lightgrey solid;
  &:focus {
    outline: none;
    border: 3px grey solid;
  };
  &::placeholder {
    color: grey;
    font-size: 18px;
  }
`

const Button = styled.button`
  background: white;
  padding: 8px;
  border: 3px solid #ff7961;
  border-radius: 5px;
  color: #ff7961;
  width: 100px;
  font-size: 16px;
  font-weight: 500;
`

const ProfileHeader = (props) => {
  const [edit, setEdit] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const regexp = new RegExp('[a-zA-Z]|[à-ü]|[À-Ü]', 'g');

  const submitForm = () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    let message = '';
    if (firstName === "" || lastName === "") {
      message = 'Both inputs must be filled'
    } else if (!regexp.test(firstName) || !regexp.test(lastName)) {
      message = 'Invalid user name'
    } else {
      const newNames = {
        firstName: firstName,
        lastName: lastName,
      }
      props.setNewUserName(newNames);
      setEdit(false);
    }

    setErrorMessage(message)
  }

  return(
    <div className="header">
      <h1 style={{fontSize: '34px'}}>Welcome back</h1>
      {edit === false ? (
        <>
          <h2 style={{fontSize: '34px', lineHeight: 1.2}}>{props.firstName ? (`${props.firstName} ${props.lastName}`) : ''}</h2>
          <button className="edit-button" onClick={() => setEdit(true)}>Edit Name</button> 
        </>
      ) : (
        <>
          <Form>
            <div style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
              <Input id="firstName" placeholder={props.firstName} />
              <Input id="lastName" placeholder={props.lastName}  />
            </div>
            {errorMessage.length > 0 && (
              <p style={{margin: 0, lineHeight: 0, fontWeight: 500, color: 'red'}}>{errorMessage}</p>
            )}
            <div style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
              <Button type="submit" onClick={submitForm}>Save</Button>
              <Button type="cancel" onClick={() => setEdit(false)}>Cancel</Button>
            </div>
          </Form>
        </>
      )}
      
    </div>
  ) 
}

export default ProfileHeader