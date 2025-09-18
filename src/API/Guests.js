const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/";
const COHORT = "2506-ftb-ct-web-pt";
const API = BASE_URL + COHORT;

//get all guests
export async function getGuests() {
  try {
    const response = await fetch(API + "/guests");
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("error fetching guests", error);
    throw error;
  }
}

//get a single guest
export async function getGuestById(id) {
  try {
    const response = await fetch(API + "/guests/" + id);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("error fetching guest by id", error);
    throw error;
  }
}
