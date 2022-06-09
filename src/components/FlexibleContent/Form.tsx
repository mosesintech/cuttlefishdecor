import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import SingleForm from '../SingleForm'

export interface FormProps extends FlexibleContentProps {
  formTitle?: string
  formText?: string
  formBackgroundColor?: string
  formId?: string
}

const Form: React.FC<FormProps> = props => {
  const {
    formId,
    // formTitle,
    // formText,
    // formBackgroundColor
  } = props

  const useGravityData = () => {
    const { allWpGravityFormsForm } = useStaticQuery(
      graphql`
        query FormQuery {
          allWpGravityFormsForm {
            nodes {
              formId
              title
              description
              button {
                text
              }
              confirmations {
                isDefault
                message
              }
              formFields {
                nodes {
                  id
                  type
                  formId
                  ... on WpTextField {
                    id
                    label
                    cssClass
                    isRequired
                    description
                    placeholder
                  }
                  ... on WpEmailField {
                    id
                    label
                    cssClass
                    isRequired
                    description
                    placeholder
                  }
                  ... on WpTextAreaField {
                    id
                    label
                    cssClass
                    isRequired
                    description
                    placeholder
                  }
                }
              }
            }
          }
        }
      `
    )
    return { allWpGravityFormsForm }
  }

  const { allWpGravityFormsForm } = useGravityData()

  const form = allWpGravityFormsForm.nodes.find(
    (form: any) => Number(form.formId) === Number(formId)
  )

  return (
    <>
      <h1>FORM</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <pre>{JSON.stringify(form, null, 2)}</pre>
      <SingleForm form={form} />
    </>
  )
}

export default Form

export const fragment = graphql`
  fragment Form on WpDefaultTemplate_Flexiblecontent_ContentBlocks {
    ... on WpDefaultTemplate_Flexiblecontent_ContentBlocks_Form {
      fieldGroupName
      formTitle
      formText
      formId
      formBackgroundColor
    }
  }
`
