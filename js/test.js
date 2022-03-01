const allPhone = () => {
    const searhValueText = document.getElementById('search-box');
    const error = document.getElementById('error');
    const searchValue = searhValueText.value

    console.log(searchValue);
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
    phoneContainer.innerHTML = "";
    input.value = "";
    error.innerHTML = "";

}



const displayPhone = (phonelist) => {
    console.log(phonelist);
    const phoneContainer = document.getElementById('phone-container');
    console.log(phoneContainer);
    phonelist.forEach(phone => {
        console.log(phone)
        const div = document.createElement("div")
        div.className = "col-lg-4"
        div.innerHTML = `
            <div class="card  m-2 p-3 shadow p-3 bg-body rounded">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.brand}</h5>
              <h4>${phone.phone_name}</h4>
              <a href="#" onclick="details('${phone.slug}')" class="btn btn-primary">Know Details</a>
            </div>
          </div>   
        `
        phoneContainer.appendChild(div)
    })

}

const details = (id) => {
    console.log('ok Boss', id)
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => setDetilse(data.data))
}

const setDetilse = (info) => {
    console.log(info);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement("div");
    console.log(div)
    div.innerHTML = `
      <div class="card mb-3">
      <img src="${info.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${info.brand}</h5>
        <h4>${info.name}</h4>
        <p>${info.mainFeatures.storage}</p>
      </div>
    </div>
    </div>
  `
    phoneDetails.appendChild(div)
}