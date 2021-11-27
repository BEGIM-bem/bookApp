import React from 'react'
import  { useState } from "react";
import './css/Content.css'
import './css/ModalCreadNewBook.css'
import cross from './img/close_111152.png'
import {useFormik} from 'formik'; 

import {useMutation} from 'react-query';
import axios from 'axios';



function CreadNewBook(){
    const [state, setState] = useState(true)


    let formik = useFormik({
        initialValues:{
            title:'',
            author: '',
        },
        onSubmit: values => {
            console.log("data: ", JSON.stringify(values, null, 2))
            mutation.mutate({
                title: values.title,
                author: values.author
            })
        }
    })

    const mutation = useMutation((item) => 
    axios.post('http://localhost:4000/books/', item))

    if(mutation.isSuccess){
        console.log("mutationData: ",  mutation.data.data)
     }
     
   
    
    return(
    <div>
        
      <React.Fragment>
        
        {state &&(
            <div className ='modal'>
                <div className = 'modal-body'>
                    <h1 class ='CreateNewBook'>Create New Book</h1>

                    <form  onSubmit ={formik.handleSubmit}>
                        <label> <p className ='authorTitle'> <h1>Book Title </h1></p>
                           <input id ='title' type = 'text' placeholder ="Book Title"  onChange={formik.handleChange} className ='input' />
                        </label>
                        <br />
                        
                        <label >
                            <p className = 'authorTitle'> <h1>Author </h1></p>
                            <input id ='author' type = 'text' placeholder ='Author'  className ='input' onChange={formik.handleChange} />
                        </label>
                         <button  type = 'submit'  className ='sumbit sumbit1' >Sumbit </button>
                        
                        </form>


                 

                <button   className ='sumbit sumbit2' onClick ={() => setState(false)}>Сancellation</button>
    
                    
                </div>
            </div>
        )}
        
     </React.Fragment>

</div>

    )
}


export default CreadNewBook