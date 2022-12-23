import {createContext, useState} from  'react';
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

// PROVIDER 
export const FeedbackProvider = ({children})=>{

    // STATE
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "Ceci est un example d'un avis sur cette plateforme 1",
            rating: 10,
        },
        {
            id: 2,
            text: "Ceci est un example d'un avis sur cette plateforme 2",
            rating: 6,
        },
        {
            id: 3,
            text: "Ceci est un example d'un avis sur cette plateforme 3",
            rating: 8,
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })


    // FUNCTIONS
    // Add feedback
    const addFeedback = (newFeedback)=>{
        newFeedback.id = parseInt(uuidv4())
        setFeedback([newFeedback, ...feedback])
    
    }
    // delete feedback
    
  const deleteFeedback = (id)=>{
        if(window.confirm('Êtes vous sûr de supprimer cet étélement?')){
        setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    // edit feedback
    const editFeedback = (item)=>{
        setFeedbackEdit({
            item,
            edit: true,
        })
    }
    // update feedback
    const updateFeedback = (id, updItem) =>{
       setFeedback(feedback.map((item)=> item.id === id ? {...item, ...updItem} : item))
    }


    // RENDER
    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
