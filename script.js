function getValue() {
    $('form').submit(event => {
      event.preventDefault();
      let gitValue = $('.value').val();
      console.log(gitValue);
      getResults(gitValue); 
    });
  }
  
  function getResults(gitValue) {
    let temp = `https://api.github.com/users/${gitValue}/repos`;
    fetch(temp)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }
  
  function displayResults(responseJson){
    console.log(responseJson);
    let results = responseJson.message;
    if(results === 'Not Found'){
      $('.results').html(`<h2> Sorry I don't recognize this username. Please try again!<h2>`);
      console.log(results);
    }else{
      $('.results').html(`<h2>Great!<h2>`);
      console.log(results);
    }
  }
  getValue();