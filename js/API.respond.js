

fetch('https://api.chatbot.com/v2/stories/63c7ed581c9d010007d555b8', {
  headers: {
    'authorization': 'Bearer '
  }
  
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

  


  
//fetch('https://api.chatbot.com/v2/stories/63c7ed581c9d010007d555b8')
  

// curl --request GET \
// 	--url https://api.chatbot.com/v2/stories/63c7ed581c9d010007d555b8 \
// 	--header 'authorization: Bearer ${HUtQMf76t_UMbjsWRi4NKLkbLOFT_C5K}'

