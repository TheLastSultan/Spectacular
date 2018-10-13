import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import Modal from 'react-modal';
// import SLIDE1 from  './slide1'


const customStyles = {
  content : {
    top                   : '10%',
    left                  : '10%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-100%',
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
      frameShape: ''
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  openModal() {
    this.setState({modalIsOpen: true});
  };

  
  closeModal() {
    this.setState({modalIsOpen: false});
  };

 
  handleInput(property, value) {
    debugger; 
    this.setState({[property]: value})
    this.setState({slide: this.state.slide + 1 })
  };


  render() {    

    const question1 = <div className="quiz-form-content">
    <div className="form-group" > 
        <span className="quiz-question"> How would you describe your headshape? </span>
    </div>

    <div className= "form-answer-container">
        <div className="form-answer">
            <img src="https://storage.googleapis.com/spec-tacular/hat_guy.png" alt="Smiley face"/>
            <button onClick={this.handleInput.bind(this,"faceShape","Narrow")} className="quiz-btn btn btn-outline-secondary btn-sm"> narrow </button> 
            <span className="answer-description"> Id say hats fit small. </span>
        </div> 
        <div className="form-answer">
            <img src="https://storage.googleapis.com/spec-tacular/hat-guy-narrow" alt="Smiley face"/>
            <button onClick={this.handleInput.bind(this,"faceShape","Average")} className="quiz-btn btn btn-outline-secondary btn-sm"> medium </button> 
            <span className="answer-description"> Pretty average </span>
        </div> 
        <div className="form-answer">
            <img src="https://storage.googleapis.com/spec-tacular/hat-guy-wide" alt="Smiley face"/>
            <button onClick={this.handleInput.bind(this,"faceShape","Wide")} className="quiz-btn btn btn-outline-secondary btn-sm"> wide </button> 
            <span className="answer-description"> I have a full round face! </span>
        </div>  
    </div>
</div>

// const question2 = <div className="quiz-form-content">
//     <div className="form-group" > 
//         <span className="quiz-question"> What shape do your prefer your glasses in  </span>
//     </div>

//     <div className= "form-answer-container">
//         <div className="form-answer">
//             <img src="https://storage.googleapis.com/spec-tacular/hat_guy.png" alt="Smiley face"/>
//             <button onClick={this.handleInput("frameShape","round")} className="quiz-btn btn btn-outline-secondary btn-sm"> round </button> 
//         </div> 
//         <div className="form-answer">
//             <img src="https://storage.googleapis.com/spec-tacular/hat-guy-narrow" alt="Smiley face"/>
//             <button onClick={this.handleInput("frameShape","square")} className="quiz-btn btn btn-outline-secondary btn-sm"> square </button> 
//         </div> 
//         <div className="form-answer">
//             <img src="https://storage.googleapis.com/spec-tacular/hat-guy-wide" alt="Smiley face"/>
//             <button onClick={this.handleInput("frameShape","oval")} className="quiz-btn btn btn-outline-secondary btn-sm"> oval </button> 
//         </div>  
//     </div>
// </div>

// const question3 = <div className="quiz-form-content">
//     <div className="form-group" > 
//         <span className="quiz-question"> What is your preference for frame material </span>
//     </div>

//     <div className= "form-answer-container">
//         <div className="form-answer">
//             <img src="https://storage.googleapis.com/spec-tacular/hat_guy.png" alt="Smiley face"/>
//             <button onClick={ this.handleInput("materialType","plastic")} className="quiz-btn btn btn-outline-secondary btn-sm"> plastic </button> 
//         </div> 
//         <div className="form-answer">
//             <img src="https://storage.googleapis.com/spec-tacular/hat-guy-narrow" alt="Smiley face"/>
//             <button onClick={() => this.handleInput("materialType","acetate")} className="quiz-btn btn btn-outline-secondary btn-sm"> acetate </button> 
//         </div> 
//         <div className="form-answer">
//             <img src="https://storage.googleapis.com/spec-tacular/hat-guy-wide" alt="Smiley face"/>
//             <button onClick={() => this.handleInput("materialType","metal")} className="quiz-btn btn btn-outline-secondary btn-sm"> metal </button> 
//         </div>  
//     </div>
// </div>

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
            <FontAwesomeIcon icon="window-close" className="faWindowClose"  size="2x" onClick={this.closeModal}/>
        </div>

        <div className="quiz-content"> 
            <div className= "subtitle">
                <span> This is question {this.state.slide} out of 3</span>
            </div> 
        {question1}
        </div>


        </Modal>
      </div>
    );
  }
}

export default QuizModal; 