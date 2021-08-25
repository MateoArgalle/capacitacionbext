//api
//https://api.nasa.gov/planetary/apod?api_key=cINpeS3ppIisKHPwLhOH11nG2wZCy3xRJMOQEeKy

//CLAVE
//cINpeS3ppIisKHPwLhOH11nG2wZCy3xRJMOQEeKy


// Javascript

//Variables

// var bext = 'Bext' 

// var 
// let
// const 




//FECTH
getData();

function getData(){
    // do something
    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer " + token);

    let url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-08-07&end_date=2021-08-08&api_key=cINpeS3ppIisKHPwLhOH11nG2wZCy3xRJMOQEeKy';
    // let url = 'https://api.nasa.gov/planetary/apod?api_key=cINpeS3ppIisKHPwLhOH11nG2wZCy3xRJMOQEeKy'
    // var data = {username: 'example'};
                
    console.log(url);
    fetch(url, {
        method: 'GET', // or 'PUT' 'POST' 'DELETE'
    //   body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
        'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        console.log('Success:', response)
        // console.log(response.near_earth_objects['2015-09-07']);
        var htmlQ = '';
        response.near_earth_objects['2021-08-07'].forEach(element => {
            htmlQ += '        <div class="col-12 col-lg-4">';
            htmlQ += '            <div class="card mb-3">';
            htmlQ += '               <div class="row no-gutters">';
            htmlQ += '                 <div class="col-md-4">';
            htmlQ += '                    <img src="'+element.nasa_jpl_url+'" alt="'+element.name+'">';
            htmlQ += '                  </div>';
            htmlQ += '                  <div class="col-md-8">';
            htmlQ += '                    <div class="card-body">';
            htmlQ += '                      <h5 class="card-title">'+element.name+'</h5>';
            htmlQ += '                      <p class="card-text">'+element.estimated_diameter.meters.estimated_diameter_max+'</p>';
            htmlQ += '                      <p class="card-text"><small class="text-muted">'+element.absolute_magnitude_h+'</small></p>';
            htmlQ += '                   </div>';
            htmlQ += '                  </div>';
            htmlQ += '                </div>';
            htmlQ += '             </div>';
            htmlQ += '        </div> ';
        });

        $('#pintar').append(htmlQ) 
    });
}
      