import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import Modal from 'react-modal';
import Redirect from 'react-router-dom';
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
    this.handleInput = this.handleInput.bind(this)

  }

  openModal() {
    this.setState({modalIsOpen: true});
  };

  
  closeModal() {
    this.setState({modalIsOpen: false});
  };


  handleInput(property, value) {
      
   
    this.setState({ [property]: value})
    this.setState({slide: this.state.slide + 1 })
    
  };


//   componentWillUpdate(){
//       if (this.state.slide > 3){this.props.history.push('/browse')}
//   }


  render() {   
    const QuestionOne = 
        <div className="quiz-form-content">
            <div className="form-group" > 
                <span className="quiz-question"> How would you describe your headshape? </span>
            </div>
    
            <div className= "form-answer-container">
                <div className="form-answer">
                    <img src="https://storage.googleapis.com/spec-tacular/quiz2/wide.png" alt="Smiley face"/>
                    <button onClick={ () => this.handleInput("faceShape","narrow")} className="quiz-btn btn btn-outline-secondary btn-sm"> narrow </button> 
                </div> 
                <div className="form-answer">
                    <img src="https://storage.googleapis.com/spec-tacular/quiz2/narrow.png" alt="Smiley face"/>
                    <button onClick={() => this.handleInput("faceShape","average")} className="quiz-btn btn btn-outline-secondary btn-sm"> medium </button> 
                </div> 
                <div className="form-answer">
                    <img src="https://storage.googleapis.com/spec-tacular/quiz2/wide.png" alt="Smiley face"/>
                    <button onClick={() => this.handleInput("faceShape","wide")} className="quiz-btn btn btn-outline-secondary btn-sm"> wide </button> 
                </div>  
            </div>
        </div>
        
    const QuestionTwo = 
        <div className="quiz-form-content">
            <div className="form-group" > 
                <span className="quiz-question"> What shape do your prefer your glasses in  </span>
            </div>
    
            <div className= "form-answer-container">
                <div className="form-answer">
                    <img src="https://storage.googleapis.com/spec-tacular/quiz2/round.png" alt="Smiley face"/>
                    <button onClick={ () => this.handleInput("frameShape","round")} className="quiz-btn btn btn-outline-secondary btn-sm"> round </button> 
                </div> 
                <div className="form-answer">
                    <img src="https://storage.googleapis.com/spec-tacular/quiz2/square.png" alt="Smiley face"/>
                    <button onClick={() => this.handleInput("frameShape","square")} className="quiz-btn btn btn-outline-secondary btn-sm"> square </button> 
                </div> 
                <div className="form-answer">
                    <img src="https://storage.googleapis.com/spec-tacular/quiz2/rectangular.png" alt="Smiley face"/>
                    <button onClick={ () => this.handleInput("frameShape","rectangle")} className="quiz-btn btn btn-outline-secondary btn-sm"> rectangle </button> 
                </div>  
            </div>
        </div>
    
    const QuestionThree = 
        <div className="quiz-form-content">
            <div className="form-group" > 
                <span className="quiz-question"> What is your preference for frame material </span>
            </div>
    
            <div className= "form-answer-container">         
                <div className="form-answer">
                    <img src="https://storage.googleapis.com/spec-tacular/quiz2/mixed_material.png" alt="Smiley face"/>
                    <button onClick={ () =>this.handleInput("materialType","mixed")} className="quiz-btn btn btn-outline-secondary btn-sm"> mixed </button> 
                </div> 
                <div className="form-answer">             
                    <img src="https://storage.googleapis.com/spec-tacular/quiz2/acetate.png" alt="Smiley face"/>
                    <button onClick={() => this.handleInput("materialType","acetate")} className="quiz-btn btn btn-outline-secondary btn-sm"> acetate </button> 
                </div> 
                <div className="form-answer">
                    <img src="https://storage.googleapis.com/spec-tacular/quiz2/metal.png" alt="Smiley face"/>
                    <button onClick={() => this.handleInput("materialType","metal")} className="quiz-btn btn btn-outline-secondary btn-sm"> metal </button> 
                </div>  
            </div>
        </div>

        let display = undefined;

        const {slide} = this.state
        if (slide == 1){
            display = QuestionOne;
        }
        else if(slide ==2){
            display = QuestionTwo;
        }else if(slide ==3){
            display = QuestionThree;}
        else{
            this.props.history.push('/browse')
        }

      


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
        </div>
            {display}
        </Modal>
      </div>
    );
  }
}

export default QuizModal; 