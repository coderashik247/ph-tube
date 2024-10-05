// 1.Fetch, Load and Show Categories on html

// create loadCategories
const loadCategories = () => {
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};



// {category_id: '1001', category: 'Music'}

// create displayCategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    categories.forEach(item => {

        // create a button
        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;

        // add button to category container
        categoryContainer.appendChild(button);
    });
};

loadCategories();