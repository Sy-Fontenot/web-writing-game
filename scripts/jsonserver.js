function getJSON(json, query, element){
    const categorySearch = "category.alt";
    let data = {
        categoryChoice: categorySearch
    }
    let options = {
        method: 'POST',
        headers: {"Content-type":"application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    }
    const promise = fetch(`/json/${json}?${query}`, options);
    promise.then(response => {
        if(!response.ok){
            console.error(response)
        } else {
            return response.json();
        }
    }).then(result => {
        element.value = result.city
        console.log(result);
    })
}