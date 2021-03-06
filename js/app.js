const allPhone = () => {
  const searchValueText = document.getElementById('search-field');
  const searchValue = searchValueText.value;
  // input value clear
  searchValueText.value = '';
  // display details clear
  const phoneDetailsNew = document.getElementById('phone-details');
  phoneDetailsNew.textContent = '';
  // phone check error
  if (searchValue === '') {
    const topError = document.getElementById('top-error');
    topError.innerText = 'Please enter a phone or model name';
  } else {
    // data pass
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
      .then(res => res.json())
      .then(data => displayPhone(data.data));
    const topError = document.getElementById('top-error');
    topError.style.display = 'none';
  }

}



const displayPhone = phoneList => {
  // phone add
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = '';
  const first20Data = phoneList.slice(0, 20);
  // phone model error handle
  if (first20Data.length === 0) {
    const notFoundError = document.getElementById('notfound-error');
    notFoundError.innerText = 'Not found Your Phone or model name';
  } else {
    // loop through for array
    first20Data.forEach(phone => {
      // separate phone
      const div = document.createElement('div');
      div.className = 'col-lg-4';
      div.innerHTML = `
            <div class="card  m-2 p-3 shadow p-3 bg-body rounded">
            <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.brand}</h5>
              <h4>${phone.phone_name}</h4>
              <a href="#" onclick="details('${phone.slug}')" class="btn btn-primary">Details</a>
            </div>
          </div>   
        `;
      phoneContainer.appendChild(div);
    });
    const notFoundError = document.getElementById('notfound-error');
    notFoundError.style.display = 'none';
  }

}
// phone id connect
const details = (phoneId) => {
  // console.log(phoneId);
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
  fetch(url)
    .then(res => res.json())
    .then(data => phoneDetails(data.data));
}
// phone details for display
const phoneDetails = (phoneInfo) => {
  // connect with display and add html
  const phoneDetails = document.getElementById('phone-details');
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="card mb-3">
      <div class="row">
        <div class="col-lg-6 text-center m-auto">
          <img src="${phoneInfo.image}" class="card-img-top w-50 mx-auto" alt="...">
          <h5 class="card-title">${phoneInfo.brand}</h5>
            <h4>${phoneInfo.name}</h4>
        </div>
        <div class="card-body col-lg-6">
            <p><h5>Release Date:</h5> ${phoneInfo.releaseDate || 'This phone released date not published yet'}</p>
            <p><h5>Storage:</h5> ${phoneInfo.mainFeatures.storage || 'Details not found'}</p>
            <p><h5>Display-Size:</h5> ${phoneInfo.mainFeatures.displaySize || 'Display size not mentioned'}
            <h5>ChipSet:</h5>
            <p>${phoneInfo.mainFeatures.chipSet || 'Unverified chipSet'}</p>
            <h5>Sensors:</h5>
            <p>${phoneInfo.mainFeatures.sensors || 'Details not found'}</p>
            <h5>Others Features:</h5>
            <p><h6>WLAN:</h6> ${phoneInfo?.others?.WLAN || 'Features not found'} <h6>Bluetooth:</h6> ${phoneInfo?.others?.Bluetooth || 'Features not found'} <h6>GPS:</h6> ${phoneInfo?.others?.GPS || 'Features not found'} <h6>NFC:</h6> ${phoneInfo?.others?.NFC || 'Features not found'} <h6>Radio:</h6> ${phoneInfo?.others?.Radio || 'Features not found'} <h6>USB:</h6> ${phoneInfo?.others?.USB || 'Features not found'}</p>
            <p</p>
            </p>
        </div>
      </div>
    </div>
  `;
  phoneDetails.textContent = '';
  phoneDetails.appendChild(div);
}