import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '10%',
    left                  : '10%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-100%',
    // transform             : 'translate(10%, 10%)'
  }
};

Modal.setAppElement(document.getElementById('root'));

class QuizModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true,
      slide: 1,
      faceShape: '',
      materialType: '',
      activityLevel: ''
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {

    const question1 = undefined 
    
    return (
      <div className="modal-container">
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className="Modal"
          overlayClassName="Overlay"
        >

        <div className= "close-icon">
            <FontAwesomeIcon icon="window-close" className="faWindowClose"  size="1x" onClick={this.closeModal}/>
        </div>

        <form className="quiz-content"> 
            <div className= "subtitle">
                <span> This is question {this.state.slide} out of 3</span>
            </div> 
            

            <div className="quiz-form-content">

                <div className="form-group" > 
                    <span className="quiz-question"> How would you describe your headshape? </span>
                </div>

                <div className= "form-answer-container">
                    <div className="form-answer">
                        <img src="https://storage.googleapis.com/spec-tacular/hat_guy.png" alt="Smiley face"/>
                        <button className="quiz-btn btn btn-outline-secondary btn-sm"> narrow </button> 
                        <span className="answer-description"> Id say hats fit small. </span>
                    </div> 
                    <div className="form-answer">
                        <img src="https://storage.googleapis.com/spec-tacular/hat-guy-narrow" alt="Smiley face"/>
                        <button className="quiz-btn btn btn-outline-secondary btn-sm"> medium </button> 
                        <span className="answer-description"> Pretty average </span>
                    </div> 
                    <div className="form-answer">
                        <img src="https://storage.googleapis.com/spec-tacular/hat-guy-wide" alt="Smiley face"/>
                        <button className="quiz-btn btn btn-outline-secondary btn-sm"> average </button> 
                        <span className="answer-description"> I have a full round face! </span>
                    </div>  
                </div> 
               
            </div> 
        </form>


        </Modal>
      </div>
    );
  }
}

export default QuizModal; 