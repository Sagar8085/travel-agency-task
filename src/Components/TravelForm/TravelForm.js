import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Form as BootstrapForm, Row, Col } from 'react-bootstrap';

// Validation schema with Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  destination: Yup.string().required('Destination is required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date().min(
    Yup.ref('startDate'),
    'End date must be later than start date'
  ).required('End date is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  heardAboutUs: Yup.string().required('This field is required'),
  numberOfPeople: Yup.number()
    .min(1, 'At least one person')
    .required('Number of people is required')
});

const destinations = ['Gwalior', 'Indore', 'Jaipur', 'Delhi', 'Pune'];

const TravelForm = ({handleClose}) => {
  return (
    <Formik
      initialValues={{
        name: '',
        destination: '',
        startDate: '',
        endDate: '',
        phoneNumber: '',
        heardAboutUs: '',
        numberOfPeople: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        handleClose()
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <Row>
            {/* Name */}
            <Col md={6}>
              <BootstrapForm.Group controlId="name">
                <BootstrapForm.Label>Name</BootstrapForm.Label>
                <Field
                  name="name"
                  type="text"
                  className="form-control"
                />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </BootstrapForm.Group>
            </Col>

            {/* Destination */}
            <Col md={6}>
              <BootstrapForm.Group controlId="destination">
                <BootstrapForm.Label>Destination</BootstrapForm.Label>
                <Field as="select" name="destination" className="form-control">
                  <option value="">Select Destination</option>
                  {destinations.map((destination, index) => (
                    <option key={index} value={destination}>
                      {destination}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="destination" component="div" className="text-danger" />
              </BootstrapForm.Group>
            </Col>
          </Row>

          <Row>
            {/* Start Date */}
            <Col md={6}>
              <BootstrapForm.Group controlId="startDate">
                <BootstrapForm.Label>Start Date</BootstrapForm.Label>
                <Field
                  name="startDate"
                  type="date"
                  className="form-control"
                />
                <ErrorMessage name="startDate" component="div" className="text-danger" />
              </BootstrapForm.Group>
            </Col>

            {/* End Date */}
            <Col md={6}>
              <BootstrapForm.Group controlId="endDate">
                <BootstrapForm.Label>End Date</BootstrapForm.Label>
                <Field
                  name="endDate"
                  type="date"
                  className="form-control"
                />
                <ErrorMessage name="endDate" component="div" className="text-danger" />
              </BootstrapForm.Group>
            </Col>
          </Row>

          <Row>
            {/* Phone Number */}
            <Col md={6}>
              <BootstrapForm.Group controlId="phoneNumber">
                <BootstrapForm.Label>Phone Number</BootstrapForm.Label>
                <Field
                  name="phoneNumber"
                  type="text"
                  className="form-control"
                />
                <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
              </BootstrapForm.Group>
            </Col>

            {/* Where You Heard About Us */}
            <Col md={6}>
              <BootstrapForm.Group controlId="heardAboutUs">
                <BootstrapForm.Label>Where did you hear about us?</BootstrapForm.Label>
                <Field
                  name="heardAboutUs"
                  type="text"
                  className="form-control"
                />
                <ErrorMessage name="heardAboutUs" component="div" className="text-danger" />
              </BootstrapForm.Group>
            </Col>
          </Row>

          <Row>
            {/* Number of People */}
            <Col md={6}>
              <BootstrapForm.Group controlId="numberOfPeople">
                <BootstrapForm.Label>Number of People</BootstrapForm.Label>
                <Field
                  name="numberOfPeople"
                  type="number"
                  className="form-control"
                />
                <ErrorMessage name="numberOfPeople" component="div" className="text-danger" />
              </BootstrapForm.Group>
            </Col>
          </Row>

          <Button type="submit" variant="primary" className="mt-3">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default TravelForm;
