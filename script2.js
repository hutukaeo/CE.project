fetch("informaiton.json")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((json) => {
    console.log(json);
    for (const i of json) {
      const bo = document.createElement("div");
      bo.innerHTML = `
      <p><img src="${i.image}"></p>
      <p>${i.name}</p>
      `;
    }
  });
