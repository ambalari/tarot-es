export async function getTaroCardsData() {
  try {
    const url = "https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch the data");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}