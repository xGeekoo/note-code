const BASE_URL = '/api/v1/notes';

export async function getNote(id, signal) {
  const res = await fetch(`${BASE_URL}/${id}`, { signal });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json.data;
}

export async function createNote(message, code, theme) {
  console.log(theme);
  const res = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, code, theme })
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json.data;
}
