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
  message: Yup.string()
});

const ContactSales = () => {
  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        phoneNumber: '',
        product: '',
        message: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
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
              placeholder="Full Name"
              className="border px-3 py-2 w-full rounded"
            />
            <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <Field
              type="email"
              name="email"
              placeholder="Enter email"
              className="border px-3 py-2 w-full rounded"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <Field
              type="tel"
              name="phoneNumber"
              placeholder="Enter contact number"
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
              <option value="product1">StorePro desktop</option>
              <option value="product2">StorePro web</option>
            </Field>
            <ErrorMessage name="product" component="div" className="text-red-500 text-sm" />
          </div>

          {/* Additional Message Field */}
          <div>
            <label className="block text-sm font-medium">Message</label>
            <Field
              as="textarea"
              name="message"
              placeholder="Message"
              className="border px-3 py-2 w-full rounded h-24"
            />
            <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
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
