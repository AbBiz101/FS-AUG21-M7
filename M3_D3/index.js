/** @format */

const fetchApi = (type) => {
	return fetch('https://api.pexels.com/v1/search?query=' + type.toLowerCase(), {
		method: 'GET',
		headers: {
			Authorization: '563492ad6f91700001000001fe7f1bfa604c4313af35b3f3b8ea9b23',
		},
	});
};

function putImage() {
	const query = document.querySelector('input[type=search]').value;
	console.log(query);
	fetchApi(query)
		.then((response) => response.json())
		.then((body) => {
			// DOM MANIPULATION
			console.log(body);

			const row = document.getElementById('album-row');
			row.innerHTML = '';
			for (let i = 0; i < body.photos.length; i++) {
				const obj = body.photos[i];

				const col = document.createElement('div');
				col.className = 'col-md-4';

				col.innerHTML = `
            <div class="card mb-4 shadow-sm" id="card">
                <img src="${img}" class="img-resized">
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                  <h5 class="card-title">Title: ${title}</h5>
                                                    <p class="card-text1">Category: ${category}</p>
                                                    <p class="card-text2">Price:${price}€</p>
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Add to cart
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm hide-me btn-outline-secondary"
                        onclick="hide(event)"
                      >
                        Skip
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `;
				row.appendChild(col);
			}
		})
		.catch((error) => console.error(error));
}

const hide = (e) => {
	e.target.closest('.col-md-4').remove();
};

window.onload = () => {
	fetchApi();
};
