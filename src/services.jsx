export const API_BASE = "https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot";

export async function getAllCards() {
const res = await fetch(API_BASE);
if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
return res.json();
}


export async function getCardById(id) {
const res = await fetch(`${API_BASE}/${id}`);
if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
return res.json();
}