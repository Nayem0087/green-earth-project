// fetch('https://openapi.programming-hero.com/api/categories')
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//         })
//         .Catch((e) => console.log(e)); //get find error

const categoriesContainer = document.getElementById('categoriesContainer');
// const treesContainer = document.getElementById('treesContainer');
const loadingContainer = document.getElementById('loadingSpinner')
// dynamic btn
async function loadCategories() {
    // async await
    const res = await fetch('https://openapi.programming-hero.com/api/categories')
    const data = await res.json();
    // console.log(data);
    // console.log(categoriesContainer);
    data.categories.forEach(category => {
        // console.log(category);
        const btn = document.createElement('button');
        btn.className = 'btn btn-outline w-full';
        btn.textContent = category.category_name;
        categoriesContainer.appendChild(btn);
    })
}
// dynamic trees section
// load trees
async function loadTrees() {
    loadingSpinner.classList.remove('hidden')
    loadingSpinner.classList.add('flex')
    const res = await fetch('https://openapi.programming-hero.com/api/plants');
    const data = await res.json();
    loadingSpinner.classList.add('hidden')
    displayTrees(data.plants);
}

// display trees
function displayTrees(trees) {
    // console.log(trees);
    trees.forEach(tree => {
        // console.log(tree);
        const card = document.createElement('div');
        card.className = 'card bg-white shadow-sm';
        card.innerHTML = `
            <figure>
                <img src="${tree.image}" 
                alt="${tree.name}" 
                title="${tree.name}" 
                class="h-40 w-full object-cover"
                />
            </figure>
                <div class="card-body p-2">
                <h2 class="card-title">${tree.name}</h2>
                <p class="line-clamp-2">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <!-- badge -->
                <div class="badge badge-success badge-outline">${tree.category}</div>
                <div class="flex justify-between items-center">
                <h2 class="font-bold text-xl text-[#4ade80]">${tree.price}</h2>
                <button class="btn btn-primary">Buy Now</button>
                </div>
                </div>
    `;
    treesContainer.appendChild(card);
    })
}

loadCategories();
loadTrees();



