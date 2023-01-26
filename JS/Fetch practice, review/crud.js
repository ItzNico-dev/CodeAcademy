const BASE_URL = "https://kaker-js-crud.onrender.com/cafe-04/party";

//! GET
const getPartyMembers = async () => {
    try {
        const response = await fetch(BASE_URL)
        const partyMembers = await response.json()
        return partyMembers
    } catch (err) {
            console.error(err)
        }}
//! POST
const postGuest = async (guest) => {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(guest),
        })
        window.location.reload()
    } catch (error) {
        console.error(error)
    }}

//! PUT
const updateGuest = async (id, guest) => {
  try {
    const response = await fetch(BASE_URL + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(guest),
    });
    window.location.reload();
  } catch (error) {
    console.error(error);
  }
};

//! DELETE
const deleteGuest = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    if (data.success) {
      window.location.reload();
    } else {
      console.error(data.message);
    }
  } catch (error) {
    console.error(error);
  }
}
