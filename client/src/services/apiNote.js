const BASE_URL = '/api/v1/notes';

export async function getNote(id, signal) {
  const res = await fetch(`${BASE_URL}/${id}`, { signal });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json.data;
}
