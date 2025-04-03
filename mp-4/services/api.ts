

// actions.ts
'use server';

export async function fetchArtworkDetails(id: string) {
    const res = await fetch(`https://api.harvardartmuseums.org/object/${id}?apikey=${process.env.HARVARD_API_KEY}`);
    if (!res.ok) throw new Error('Failed to fetch details');
    return res.json();
}
