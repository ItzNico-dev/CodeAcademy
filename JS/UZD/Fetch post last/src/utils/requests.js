export async function makeGetRequest(endpoint) {
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function makePostRequest(endpoint, data) {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    const resData = await res.json();
    return resData;
  } catch (error) {
    console.log(error);
  }
}