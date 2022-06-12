
import * as Yup from 'yup';


    const Validate=()=>{
      const validationSchema=()=>{
        Yup.object().shape({
            sid: Yup.string().required("Required"),
            semester: Yup.string().required("Please select any options"),
            firstName: Yup.string()
              .matches(/[a-zA-Z]+/g, "Only valid letter")
              .required("Required"),
      
            lastName: Yup.string()
              .matches(/[a-zA-Z]+/g, "Only valid letter")
              .required("Required"),
            gender: Yup.string().required("Please select one value"),
            dob: Yup.string().required("Required"),
            joiningDate: Yup.date().required("Required"),
            faculty: Yup.string().required("Please select any options"),
            email: Yup.string()
              .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter valid email")
              .required("Required"),
            contact: Yup.string()
              .required("Required")
              .matches(
                /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
                "Please enter valid phone number"
              ).max(10),
            fatherName: Yup.string().required("Required") .matches(/[a-zA-Z]+/g, "Only valid letter"),
            parentPhone: Yup.string().required("Required").matches(
              /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
              "Please enter valid phone number"
            ).max(10),
            address: Yup.string().required("Required"),
          })
      return [validationSchema]
   }}
    
   export default Validate;
              
        


