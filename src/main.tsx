import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Sonia} from './Sonia.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sonia />
  </StrictMode>,
)
