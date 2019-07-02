
$('.mediaCall').click(function(e){
    e.preventDefault();

 let title = $('#nameFinder').val();
 const anime =  {
    url:`https://api.jikan.moe/v3/search/anime?q=${title}&limit=10`, 
    success: (data)=>{
        //DISPLAY CONTENT
        $('#printContents').empty();
        const animeList = data.results;
        for(let i = 0; i < animeList.length; i++){   
            //DISPLAY AND DON'T REPEAT   
            var card = document.getElementById('printContents');
            while (card.firstChild) {card.removeChild(card.firstChild);}
            data.results.forEach(anime => {
                document.getElementById('printContents')
                //DISPLAY ICONS AS LINKS TO SITE 
                .insertAdjacentHTML('beforeend',`<a href="${anime.url}">
                    <div class="name">${anime.title}</div> 
                    <div class="image"><img src="${anime.image_url}"/></div>
                </a>`);
            });
        }
         
    },
    error: ()=>{
        console.log('bad request');
    }
 }

 $.ajax(anime);
 
 })


/*      <div class="rated">${"Rating: " + anime.rated}</div>
<div class="score">${"Score: " + anime.score}</div>
<div class="type">${"Type: " + anime.type}</div> */