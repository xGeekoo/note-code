const BASE_URL = '/api/v1/notes';

export async function getNote(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    const json = await res.json();
    if (!res.ok) throw new Error(json.message);
    return json.data;
  } catch (err) {
    console.error(err);
  }
}
