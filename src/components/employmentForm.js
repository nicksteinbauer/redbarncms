import React, { useContext } from 'react';
import * as emailjs from "emailjs-com";
import { Button, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form } from 'formik';
import { ReactstrapInput } from "reactstrap-formik";

import 'bootstrap/dist/css/bootstrap.min.css';


//import Accordion from 'react-bootstrap/Accordion'
//import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
//import AccordionContext from "react-bootstrap/AccordionContext";
import Swal from "sweetalert2";

//import { isEmail } from "validator";


//import Recaptcha from 'react-recaptcha';


import * as Yup from 'yup';




const SignupSchema = Yup.object().shape({

    name: Yup.string().required('Last Name Required - in Applicant Information'),
    email: Yup.string().email('Invalid email - in Applicant Information').required('Email Required - in Applicant Information'),
    
  });

const EmploymentForm = () => (

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
        emailjs.sendForm('barnes', 'formik_template', '#formikform', 'user_vOc0ylPHeC2nCdyLQJAiW');
        resetForm({ values: '' });
        Swal.fire({
            title: "Your employment application has been received. You will receive a confirmation email shortly.",
            icon: "success",
        });
      }}
      
    >
        
{({ errors, touched }) => (
<Form id="formikform">



   
    <>    
        <div className="flex-md">
            <FormGroup className="padding flex1">
                <Field 
                    type="text"
                    id="name" 
                    name="name" 
                    label="Name" 
                    component={ReactstrapInput}
                />
                
            </FormGroup>
            <FormGroup className="fifty padding">
                <Field 
                    id="email"
                    label="Email"
                    name="email"
                    component={ReactstrapInput}
                    />
            </FormGroup>

            <FormGroup className="padding flex1">
                <Field 
                    type="textarea"
                    id="message"
                    label="Message"
                    name="message"
                    component={ReactstrapInput}
                />
            </FormGroup>
            
        </div>

        
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
 
  
 
  export default EmploymentForm;