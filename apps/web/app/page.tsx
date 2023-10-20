'use client'
import {MyComponent} from 'ssr-unfriendly-stuff';
const Page = () => {
  //const WizardMainLayout = dynamic(() => import('./WizardMainLayoutNoSSR').then((mod) => mod.WizardMainLayout), { ssr: false })

  return (
    <h1>
      Welcome to Next.JS
      <MyComponent/>
    </h1>
  )
}

export default Page
