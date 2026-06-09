'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { RefreshCwIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Status = 'idle' | 'loading' | 'success' | 'error' | 'rate-limited'

export function SyncButton({ clientId }: { clientId: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState<string | null>(null)
  const router = useRouter()

  async function handleSync() {
    setStatus('loading')
    setMessage(null)

    try {
      const res = await fetch(`/api/sync/${clientId}`, { method: 'POST' })
      const data = await res.json()

      if (res.status === 429) {
        setStatus('rate-limited')
        setMessage(data.error)
        return
      }

      if (!res.ok) {
        setStatus('error')
        setMessage(data.error ?? 'Sync mislukt.')
        return
      }

      setStatus('success')
      setMessage(`Gesynchroniseerd — ${data.recordsSynced?.queries ?? 0} queries, ${data.recordsSynced?.pages ?? 0} pagina's.`)

      // Pagina verversen zodat nieuwe data direct zichtbaar is
      router.refresh()

    } catch {
      setStatus('error')
      setMessage('Kon de server niet bereiken.')
    } finally {
      setTimeout(() => {
        setStatus('idle')
        setMessage(null)
      }, 6000)
    }
  }

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        size="sm"
        onClick={handleSync}
        disabled={status === 'loading'}
      >
        <RefreshCwIcon className={`size-3.5 ${status === 'loading' ? 'animate-spin' : ''}`} />
        {status === 'loading' ? 'Bezig…' : 'Sync nu'}
      </Button>

      {message && (
        <p className={`text-sm ${
          status === 'success'      ? 'text-emerald-600' :
          status === 'rate-limited' ? 'text-orange-500'  :
          'text-destructive'
        }`}>
          {message}
        </p>
      )}
    </div>
  )
}
