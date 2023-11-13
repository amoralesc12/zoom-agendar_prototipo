import axios from "axios";


async function cMeeting()
{
  let data = JSON.stringify({
    "topic": "Sesionprueba2",
    "type": 2,
    "start_time": "2023-11-11T12:10:10Z",
    "duration": "3",
    "settings": {
      "host_video": "true",
      "participant_video": "true",
      "join_before_host": "true",
      "mute_upon_entry": "true",
      "watermark": "true",
      "audio": "voip",
      "auto_recording": "cloud"
    }
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.zoom.us/v2/users/me/meetings\n',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer eyJzdiI6IjAwMDAwMSIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6ImEyZTdkOTVjLWZlZTgtNDcyZC04YmI2LTUwMjBmMTAxZTNmNCJ9.eyJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiI3SExXTU9GVVFQS0hTeGtZVTNaaEVBIiwidmVyIjo5LCJhdWlkIjoiMDdkNDkzMTE0OGU2ODZkNGU4MzU4YjI0OGQyOTRjYTIiLCJuYmYiOjE2OTgyNzM5ODksImNvZGUiOiJUOXJqazlhNlF5S1lDYkczVHZJMkxRa0dlVmsxbVhKTzEiLCJpc3MiOiJ6bTpjaWQ6dFd4QWFRVm9TZDZ3aXQ2ZkdUWkVBIiwiZ25vIjowLCJleHAiOjE2OTgyNzc1ODksInR5cGUiOjMsImlhdCI6MTY5ODI3Mzk4OSwiYWlkIjoiVjZUaUQtdHlRZ09mNTBudHF2dXZsdyJ9.AkXJaqtHEB4HOmZ-I93qjJ2u_NYXOTDSh3EFzon3HZEsSIMARcj9vLs5FTL-ajZU-V5kM-6JGXINOrcOzHqWmw', 
      'Cookie': '__cf_bm=USz3UKAukm_Ul88t_px1SA8YpL27ojHA8YNSQcjHx8I-1698273989-0-Af6V8y1J7qayHsECpHMachG3nL43vowTQP+cHtF3F/WxWcaZv5pulzJzpmjEh4MkFDb9rfLfiZqJf2TIMJO2t9o=; _zm_cms_guid=7lBDJzf1NDxsQXaRtdshRvKne5xliVodlx2Ts-PlgKXhAo9iUfep3Cm3FlfYyn90cZOE-GVu5zFDToIMEuKbn0TwJdweP3M.h5AcDBSwkfbyMQkm; _zm_currency=USD; _zm_mtk_guid=a806d0dfe0d04948bba5a789ccba1702; _zm_page_auth=us04_c_gklXbr9pQLqtti-98-CewA; _zm_ssid=us04_c_6FdZ1f6pRaWeC-AHPZpkaQ; _zm_visitor_guid=a806d0dfe0d04948bba5a789ccba1702; cred=AF462307D296FB1AB87FC1EA5ED51CD0'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
    
    
}


async function gMeeting(userId) {
  try {
    const response = await axios.get('http://localhost:8000/api/users/i0W0G-ymQ1qTNGqwHH5pag/meetings');
    return response.data;
  } catch (error) {
    console.error("Error al obtener reuniones:", error);
    throw error;
  }
}



// getToken no es necesario se puede borrar
async function getToken()
{
  let config = {
    method: 'post',
    
    maxBodyLength: Infinity,
    url: 'https://zoom.us/oauth/token?grant_type=account_credentials&account_id=V6TiD-tyQgOf50ntqvuvlw',
    headers: { 
      'Authorization': 'Basic dFd4QWFRVm9TZDZ3aXQ2ZkdUWkVBOnJlT3hybEFhNUVUcVFROHpFWGdQUmpXQVFUUUIyTGJO', 
      
    },
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
  
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    cMeeting,
    getToken,
    gMeeting
  };
  