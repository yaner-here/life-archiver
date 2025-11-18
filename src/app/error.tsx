'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
    useEffect(() => { console.error(error) }, [error])

    return <div className="border">
        <h2>We detected an error!</h2>
        <button onClick={() => reset()}>Try again</button>
    </div>
}