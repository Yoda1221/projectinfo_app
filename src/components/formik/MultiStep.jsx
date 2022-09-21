import React, { useState }  from 'react'
import { Form, Formik }     from 'formik'

const MultiStep = ({ children, initialValues, onSubmit }) => {
    const [stepNumber, setStepNumber]   = useState(0)
    const [snapshot, setSnapshot]       = useState(initialValues)
    const steps                         = React.Children.toArray(children)
    const step                          = steps[stepNumber]
    const totalSteps                    = steps.length
    const isLastStep = stepNumber === totalSteps - 1

    const next = values => {
        setSnapshot(values)
        setStepNumber(stepNumber + 1)
    }
    const previous = values => {
        setSnapshot(values)
        setStepNumber(stepNumber - 1)
    }
    const handleSubmit = async (values, bag) => {
        if (step.props.onSubmit) await step.props.onSubmit(values, bag)
        if (isLastStep) return onSubmit(values, bag)
        else {
            bag.setTouched({})
            next(values)
        }
    }
    return (
        <Formik 
            initialValues={snapshot} 
            onSubmit={handleSubmit}
            validationSchema={step.props.validationSchema}
        >
            {(formik) => (
                <Form>
                    <p>Step {stepNumber + 1} of {totalSteps}</p>
                    {step}
                    <div className='row' >
                        <div className="col-md-6">
                            {stepNumber > 0 && (
                                <button 
                                    className='btn btn-sm btn-outline-warning ' 
                                    onClick={() => previous(formik.values)} 
                                    type="button"
                                    style={{ visibility: stepNumber > 0 ? "block" : "hidden"}}
                                >
                                    Back
                                </button>
                            )}
                        </div>
                        <div className="col-md-6">
                            <button 
                                className='btn btn-sm btn-outline-info'
                                disabled={formik.isSubmitting} 
                                type="submit"
                            >
                                {isLastStep ? 'Submit' : 'Next'}
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default MultiStep
export const Step = ({ children }) => children
