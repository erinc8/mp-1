import { NextResponse } from 'next/server'

export async function GET(
    _: Request,
    { params }: { params: { id: string } }
) {
    try {
        const res = await fetch(
            `https://api.harvardartmuseums.org/object/${params.id}?apikey=${process.env.HARVARD_API_KEY}`
        )

        if (!res.ok) {
            return NextResponse.json(
                { error: 'Failed to fetch artwork details' },
                { status: res.status }
            )
        }

        const data = await res.json()
        return NextResponse.json(data)
    } catch (error) {
        console.error('API Route Error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
