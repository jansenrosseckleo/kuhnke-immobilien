import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'kuhnke-immobilien-site-feepnfpu',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_h6OrjursLAyl2riFkHdxFfFO88Sb69Qh',
  authRequired: false,
  auth: { mode: 'managed' },
})
