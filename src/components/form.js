import React from 'react'
import {Form, Button} from 'react-bootstrap'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {addToDo} from '../redux/actions'


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

 

const FormCustom = (props) => {

    const[title, setTitle] = useState()
    const[description, setDescription] = useState()
    const[progress, setProgress] = useState()

    const onSubmit = (event) => {
        event.preventDefault();
        props.addToDo({
            title,
            description, 
            progress,
            creationDate: new Date(),
            id: new Date().getTime()
            })
    }

    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
   
    function closeModal(){
      setIsOpen(false);
    }

    return (

        <div>
        <button onClick={openModal}>Crea Nuovo Task</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Nuovo Task</h2>
          <button onClick={closeModal}>close</button>
          {/* <div>I am a modal</div> */}

        <Form onSubmit={onSubmit}>

            <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Titolo" name="title" onChange={(event)=>setTitle(event.target.value)} required/>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrizione</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" onChange={(event)=>setDescription(event.target.value)} required/>
            </Form.Group>
            
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Progresso</Form.Label>
                <Form.Control as="select" name="progress" onChange={(event)=>setProgress(event.target.value)}required>
                    <option>Da Fare</option>
                    <option>In Corso</option>
                    <option>Completato</option>
                </Form.Control>         
            </Form.Group>

            <Button type="submit" >Salva Task</Button>

      </Form>

      </Modal>
      </div>
    )
}


const mapStateToProps = state => ({
    toDoList: state.toDoList
})

const mapActionsToProps = {
    addToDo: (value) => addToDo(value),
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(FormCustom)

