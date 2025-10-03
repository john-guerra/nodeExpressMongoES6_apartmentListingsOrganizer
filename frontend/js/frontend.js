console.log("Hello from the frontend JS file!");

function Listings() {
  const me = {};

  me.showError = ({ msg, res, type = "danger" } = {}) => {
    // Show an error using bootstrap alerts in the main tag
    const main = document.querySelector("main");
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.role = type;
    alert.innerText = `${msg}: ${res.status} ${res.statusText}`;
    main.prepend(alert);
  };

  const renderListings = (listings) => {
    const listingsDiv = document.getElementById("listings");
    for (const { title, address, price } of listings) {
      const card = document.createElement("div");
      card.className = "card mb-3";

      card.innerHTML = `
        <div>${title} ${address} ${price}</div>
        `;
      listingsDiv.appendChild(card);
    }
  };

  me.refreshListings = async () => {
    const res = await fetch("/api/listings");
    if (!res.ok) {
      console.error("Failed to fetch listings", res.status, res.statusText);
      me.showError({ msg: "Failed to fetch listings", res });
      return;
    }

    const data = await res.json();
    console.log("Fetched listings", data);

    const listingsDiv = document.getElementById("listings");
    listingsDiv.innerHTML = "";

    renderListings(data.listings);
  };

  return me;
}

const myListings = Listings();

myListings.refreshListings();
