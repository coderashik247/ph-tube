// 1.Fetch, Load and Show Categories on html

// create loadCategories
const loadCategories = () => {
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

// create loadVideos
const loadVideos = () => {
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((err) => console.log(err));
};

// loadCategoryVideos
const loadCategoryVideos =(id) =>{
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {

        removeActiveClass();

        const activeBtn = document.getElementById(`btn-${id}`);
        activeBtn.classList.add('active');
        displayVideos(data.category)
    })
    .catch((error) => console.log(error));
}

// create displayVideos

const displayVideos = (videos) =>{
    const videosContainer = document.getElementById('videos');

    videosContainer.innerHTML = "";
    if(videos.length === 0){
        videosContainer.classList.remove('grid');
        videosContainer.innerHTML = `
        <div class ="min-h-[100px] flex flex-col justify-center items-center gap-4">
            <img src="images/icon.png">
            <h2 class="text-center text-xl font-bold">No Content Here in this Category</h2>
        </div>
        
        `
    }
    else{
        videosContainer.classList.add('grid');
    }

    videos.forEach(video => {
        console.log(video);

        // create a card
        const card = document.createElement('div');
        card.classList = 'card card-compact rounded-none'
        card.innerHTML = 
        `
        <figure class="h-[200px] relative">
            <img
            class="h-full w-full object-cover"
            src="${video.thumbnail}"
            alt="Shoes" />
            ${video.others.posted_date?.length === 0 
                ? " "
                : `<span class="absolute right-2 bottom-2 bg-black text-xs text-white rounded p-1">
                    ${getTimeString(video.others.posted_date)} </span>`}

        </figure>
        <div class="px-0 py-2 flex gap-2">
            <div>
                <img class="h-10 w-10 object-cover rounded-full" src=${video.authors[0].profile_picture}>
            </div>
            <div>
                <h2 class="font-bold">${video.title}</h2>
                <div class="flex items-center gap-2">
                    <p class="text-gray-400">${video.authors[0].profile_name}</p>
                    ${video.authors[0].verified ? `<img class="h-5 w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"></img>` : ''}

                </div>
            </div>
        </div>
        `

        // add card in videosContainer
        videosContainer.appendChild(card);
    })
}

// {category_id: '1001', category: 'Music'}
/*

authors
: 
Array(1)
0
: 
{profile_picture: 'https://i.ibb.co/D9wWRM6/olivia.jpg', profile_name: 'Olivia Mitchell', verified: ''}
length
: 
1
[[Prototype]]
: 
Array(0)
category_id
: 
"1001"
description
: 
"Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
others
: 
posted_date
: 
"16278"
views
: 
"100K"
[[Prototype]]
: 
Object
thumbnail
: 
"https://i.ibb.co/L1b6xSq/shape.jpg"
title
: 
"Shape of You"
video_id
: 
"aaaa"

*/

// create displayCategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    categories.forEach(item => {

        // create a button
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = `
        <button id="btn-${item.category_id}" onclick ="loadCategoryVideos(${item.category_id})" class="btn category-btn">${item.category}
        </button>
        `

        // add button to category container
        categoryContainer.appendChild(buttonContainer);
    });
};

loadCategories();
loadVideos();