import styled from 'styled-components'

export default function SavedItem(props) {
  const Member = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    border: 2px solid gray;
    width: 80%;
    border-radius: 5px;
    height: 20x;
    color: black;
    font-size: 1rem;
    margin: 3vh 0 3vh 0;
  `

  return (
    <Member>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Role: {props.role}</p>
    </Member>
  )
}
