import React from 'react'
import { SignInForm } from '../../components'
import { SignInLayout } from '../../layout'

export const SignInPage: React.FunctionComponent = () => {
  console.log('sign in page')
  return (
    <SignInLayout>
      <>
        <SignInForm />
        {console.log('sign in page JSX')}
      </>
    </SignInLayout>
  )
}
