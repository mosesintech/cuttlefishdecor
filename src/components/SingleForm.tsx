import React from "react"
import { useMutation, gql } from "@apollo/client"
import GravityForm, { useGravityFormMutation } from "wpgravitybundle"

interface SingleFormProps {
  form: any
}

const SingleForm: React.FC<SingleFormProps> = ({ form }) => {
  const buttonClass = "mt-4 sm:mt-0 sm:ml-3"

  const gravityFormMutation = useGravityFormMutation(form)
  const SUBMIT_FORM = gql`
    ${gravityFormMutation}
  `
  const [submitForm, { data, loading, error }] = useMutation(SUBMIT_FORM)

  const handleSubmit = (values: any) => {
    return submitForm({ variables: values })
  }

  if (loading) {
    return <p>Loading... </p>
  }

  if (error) {
    return <p>There was an error submitting the form: {error.message}</p>
  }

  if (data) {
    return <p>Confirmation message here!</p>
  }

  return (
    <>
      {form && (
        <>
          <GravityForm
            form={form}
            buttonClass={buttonClass}
            onSubmit={handleSubmit}
          />
        </>
      )}
    </>
  )
}

export default SingleForm