
 // ContactForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Full Name must be at least 3 characters')
    .required('Full Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, 'Phone Number must be 10 digits')
    .required('Phone Number is required'),
  product: Yup.string().required('Please select a product'),
});

const ContactSales = () => {
  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        phoneNumber: '',
        product: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        // Handle form submission
        console.log('Form Submitted:', values);
        alert('Form submitted successfully!');
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <Field
              type="text"
              name="fullName"
              className="border px-3 py-2 w-full rounded"
            />
            <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <Field
              type="email"
              name="email"
              className="border px-3 py-2 w-full rounded"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <Field
              type="tel"
              name="phoneNumber"
              className="border px-3 py-2 w-full rounded"
            />
            <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium">Choose Product</label>
            <Field
              as="select"
              name="product"
              className="border px-3 py-2 w-full rounded"
            >
              <option value="">Select a product</option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
              <option value="product3">Product 3</option>
            </Field>
            <ErrorMessage name="product" component="div" className="text-red-500 text-sm" />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactSales;













// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';

// // Define the validation schema using Yup
// const validationSchema = Yup.object().shape({
//   fullName: Yup.string()
//     .min(3, 'Full Name must be at least 3 characters')
//     .required('Full Name is required'),
//   email: Yup.string()
//     .email('Invalid email format')
//     .required('Email is required'),
//   phoneNumber: Yup.string()
//     .matches(/^\d{10}$/, 'Phone Number must be 10 digits')
//     .required('Phone Number is required'),
//   product: Yup.string().required('Please select a product'),
// });

// const ContactForm = () => {
//   const handleSubmit = async (values, { resetForm }) => {
//     try {
//       // Log form values to the console (for debugging)
//       console.log('Form Submitted:', values);

//       // Send the form data to the backend
//       const response = await axios.post('https://your-backend-endpoint.com/submit', values);

//       // Handle success
//       alert('Form submitted successfully!');
//       resetForm(); // Reset the form fields after submission
//     } catch (error) {
//       // Handle error
//       console.error('There was a problem with the axios operation:', error);
//       alert('Submission failed. Please try again.');
//     }
//   };

//   return (
//     <Formik
//       initialValues={{
//         fullName: '',
//         email: '',
//         phoneNumber: '',
//         product: '',
//       }}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ isSubmitting }) => (
//         <Form className="space-y-4">
//           {/* Full Name Field */}
//           <div>
//             <label className="block text-sm font-medium">Full Name</label>
//             <Field
//               type="text"
//               name="fullName"
//               className="border px-3 py-2 w-full rounded"
//             />
//             <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
//           </div>

//           {/* Email Field */}
//           <div>
//             <label className="block text-sm font-medium">Email</label>
//             <Field
//               type="email"
//               name="email"
//               className="border px-3 py-2 w-full rounded"
//             />
//             <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
//           </div>

//           {/* Phone Number Field */}
//           <div>
//             <label className="block text-sm font-medium">Phone Number</label>
//             <Field
//               type="tel"
//               name="phoneNumber"
//               className="border px-3 py-2 w-full rounded"
//             />
//             <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />
//           </div>

//           {/* Product Selection Field */}
//           <div>
//             <label className="block text-sm font-medium">Choose Product</label>
//             <Field
//               as="select"
//               name="product"
//               className="border px-3 py-2 w-full rounded"
//             >
//               <option value="">Select a product</option>
//               <option value="product1">Product 1</option>
//               <option value="product2">Product 2</option>
//               <option value="product3">Product 3</option>
//             </Field>
//             <ErrorMessage name="product" component="div" className="text-red-500 text-sm" />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-orange-500 text-white px-4 py-2 rounded"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? 'Submitting...' : 'Submit'}
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default ContactForm;