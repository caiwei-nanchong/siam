import axios form 'axios'

axios.post(url, {
	data:param
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
});

