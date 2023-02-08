

// fetch('https://api.npoint.io/a33cfdd819244312a868')
// .then((response) => response.json())
// .then((data) => console.log(data));








fetch('https://api.npoint.io/fa9024b03a7a23aa6d9e')
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let product of products){
		out += `
			<tr>
				<td> <img src='${product.image}'> </td>
				<td>${product.name}</td>
				<td>${product.price}</td>
				<td>${product.inventory}</td>
				<td>${product.productCode}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});