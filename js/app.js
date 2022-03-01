const allPhone = () => {
    const searchValueText = document.getElementById('search-field');
    const error = document.getElementById('error');
    const searchValue = searchValueText.value;
    searchValueText.value = '';

    // console.log(searchValue);
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data));
    // phoneContainer.innerHTML = "";
    // error.innerHTML = "";

}



const displayPhone = (phoneList) => {
    // console.log(phoneList);
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    // console.log(phoneContainer);
    phoneList.forEach(phone => {
        // console.log(phone)
        const div = document.createElement('div');
        div.className = 'col-lg-4';
        div.innerHTML = `
            <div class="card  m-2 p-3 shadow p-3 bg-body rounded">
            <img src="${phone.image}" class="card-img-top w-75 mx-auto" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.brand}</h5>
              <h4>${phone.phone_name}</h4>
              <a href="#" onclick="details('${phone.slug}')" class="btn btn-primary">Details</a>
            </div>
          </div>   
        `
        phoneContainer.appendChild(div);
    })

}

const details = (phoneId) => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => phoneDetails(data.data));
}

const phoneDetails = (phoneInfo) => {
    console.log(phoneInfo);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="card mb-3">
      <img src="${phoneInfo.image}" class="card-img-top w-50 mx-auto" alt="...">
      <div class="card-body">
        <h5 class="card-title">${phoneInfo.brand}</h5>
        <h4>${phoneInfo.name}</h4>
        <p>${phoneInfo.mainFeatures.storage}</p>
      </div>
    </div>
    </div>
  `
    phoneDetails.appendChild(div);
}