import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || '*';

    try {
        const response = await fetch(
            `https://api.harvardartmuseums.org/object?apikey=${process.env.HARVARD_API_KEY}&q=${query}&size=10`
        );

        if (!response.ok) throw new Error('API Error');
        const data = await response.json();

        return NextResponse.json(data.records);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch artworks' },
            { status: 500 }
        );
    }
}
