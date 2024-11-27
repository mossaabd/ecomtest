import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import { SeedButton } from './SeedButton'
import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className="dashboard before-dashboard">
      <div className="before-dashboard__banner">
        <h4>Welcome to your dashboard!</h4>
      </div>
      <div className="before-dashboard__content">
        <p>Here are some tips to get you started:</p>
        <ul className="before-dashboard__instructions">
          <li>
            <strong>Clone this repo</strong>
            <span>Clone this repository to your local machine to begin development</span>
          </li>
          <li>
            <strong>Start developing</strong>
            <span>Run `npm run dev` to start the development server</span>
          </li>
          <li>
            <strong>Build your content</strong>
            <span>Begin creating your content structure in the Collections section</span>
          </li>
        </ul>
        {'Pro Tip: This block is a '}
        <a
          href="https://payloadcms.com/docs/admin/components#base-component-overrides"
          rel="noopener noreferrer"
          target="_blank"
        >
          custom component
        </a>
        , you can remove it at any time by updating your <strong>payload.config</strong>.
      </div>
    </div>
  )
}

export default BeforeDashboard
