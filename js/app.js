const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';

    // connect with link
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
}

const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    // console.log(phones.brand);

    phones.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100 p-4">
            <img class="w-50 m-auto" src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text text-center">${phone.brand}</p>
                <a href="" class="btn btn-primary m-auto">Details</a>
            </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}