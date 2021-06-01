import React from 'react';
import * as emailjs from "emailjs-com";
import { Button, FormGroup } from "reactstrap";
import { Formik, Field, Form } from 'formik';
import { ReactstrapInput } from "reactstrap-formik";



//import Accordion from 'react-bootstrap/Accordion'
//import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
//import AccordionContext from "react-bootstrap/AccordionContext";
import Swal from "sweetalert2";

//import { isEmail } from "validator";


//import Recaptcha from 'react-recaptcha';


import * as Yup from 'yup';




const SignupSchema = Yup.object().shape({

    name: Yup.string().required('Name Required'),
    email: Yup.string().email('Invalid email').required('Email Required'),
    
  });

const ContactForm = () => (

    <div>
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, {resetForm}) => {
        
        //await new Promise((r) => setTimeout(r, 500));
        //alert(JSON.stringify(values, null, 2));
        console.log(values);
        emailjs.sendForm('barnes', 'redbarn', '#formikform', 'user_vOc0ylPHeC2nCdyLQJAiW');
        resetForm({ values: '' });
        Swal.fire({
            title: "We've received your contact email, we will be in touch shortly",
            icon: "success",
        });
      }}
      
    >
        
{({ errors, touched }) => (
<Form id="formikform">



   
    <>    
        <div className="flex-md">
            <FormGroup className="padding fifty name">
                <Field 
                    type="text"
                    id="name" 
                    name="name" 
                    placeholder="Name"
                    component={ReactstrapInput}
                />
                
            </FormGroup>
            <FormGroup className="fifty padding email">
                <Field 
                    id="email"
                    placeholder="Email"
                    name="email"
                    component={ReactstrapInput}
                    />
            </FormGroup>
        </div>
            <FormGroup className="padding message">
                <Field 
                    type="textarea"
                    id="message"
                    label="Message"
                    name="message"
                    component={ReactstrapInput}
                />
            </FormGroup>
            
       

        
    </>












   
    <>
    
    
    <div className="padding">
        <FormGroup className="padding">
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </FormGroup>
    </div>
    <div className="padding">
        <div className="padding erroring">
        {errors.name && touched.name ? (<div>{errors.name}</div>) : null}
        {errors.email && touched.zip ? (<div>{errors.email}</div>) : null}
        {errors.message && touched.message ? (<div>{errors.message}</div>) : null}

        </div>
    </div>
    </>



</Form>
)}

</Formik>
</div>
 
  );
 
  
 
  export default ContactForm;