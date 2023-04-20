export const get_ = async <T>(endpoint: string): Promise<T | null> => {
    const envUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
    const url = `${envUrl}/${endpoint}`;

    const res = await fetch(
        url,
        { headers: { 'Content-Type': 'application/json' }, credentials: 'include', next:{revalidate:10} },

    );
    if (res.status === 200) {
        return await res.json()
            .then(json => json);
    }
    return null;
};

export const post_ = async <T1, T2>(endpoint: string, data: T1): Promise<T2 | null> => {
    const envUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
    const url = `${envUrl}/${endpoint}`;
    const headers = { 'Content-Type': 'application/json' };
    const res = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
        credentials: 'include',
    });
    if (res.status === 201 || res.status === 204) { return res.json(); }
    return null;
};