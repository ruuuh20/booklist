import { useState, useEffect } from 'react'
import { InviteResponse } from '../../types/invite'

// Defines the endpoint based on the current window location
const API_BASE = process.env.API_ENDPOINT || (typeof window !== 'undefined' && (window.location.origin + '/api'))
const INVITE_ENDPOINT = API_BASE + '/invite'
const RSVP_ENDPOINT = API_BASE + '/rsvp'

interface HookResult {
  inviteResponse: InviteResponse | null,
  error: string | null,
  updating: boolean,
  updateRsvp: (ourchasing: boolean) => Promise<void>
}

// Helper function that invokes the invite API endpoint
async function fetchInvite (code: string): Promise<InviteResponse> {
  const requestUrl = new URL(INVITE_ENDPOINT)
  requestUrl.searchParams.append('code', code)
  const response = await fetch(requestUrl)
  if (!response.ok) {
    throw new Error('Invalid code')
  }
  const invite = await response.json()
  return invite
}

// Helper function that invokes the rsvp API endpoint
async function updateRsvpRequest (code: string, purchasing: boolean): Promise<void> {
  const requestUrl = new URL(RSVP_ENDPOINT)
  requestUrl.searchParams.append('code', code)
  const response = await fetch(requestUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({  purchasing })
  })
  if (!response.ok) {
    throw new Error('Failed to update RSVP')
  }
}

// The custom hook
export default function useInvite (): HookResult {
  // This hook has the inviteResponse and a possilbe error as state.
  const [inviteResponse, setInviteResponse] = useState<InviteResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [updating, setUpdating] = useState<boolean>(false)

  // We want to make the API call when the component using the hook
  // is mounted so we use the useEffect hook.
  useEffect(() => {
    // We read the code from the current window URL.
    const url = new URL(window.location.toString())
    const code = url.searchParams.get('code')

    if (!code) {
      // If there is no code, we set an error message.
      setError('No code provided')
    } else {
      // If we have a code, we get the associated data.
      // In case of success or failure we update the state accordingly.
      fetchInvite(code)
        .then(setInviteResponse)
        .catch(err => {
          setError(err.message)
        })
    }
  }, [])

  async function updateRsvp (purchasing: boolean) {
    if (inviteResponse) {
      setUpdating(true)
      await updateRsvpRequest(inviteResponse.invite.code, purchasing)
      // updates the current invite response, by cloning the original
      // object and updating the `coming` property.
      setInviteResponse({
        ...inviteResponse,
        invite: { ...inviteResponse.invite, purchasing }
      })
      setUpdating(false)
    }
  }

  // We return the state variables and the updateRsvp function.
  return { inviteResponse, error, updating, updateRsvp }
}
