let files = {1:'Ace Combat 7', 2:'Mortal Kombat X', 3:'PayDay 2'};
let userData = [['davitShonia', 'erti222', 15],['sxvaUser', 'sxvaPassword', 3]];

function downloadFileList(){
    console.log('Download One Of Them: ', files);
}
function download(itemNum){
    downloadFileList();
    select = files[itemNum];
    console.log('Downloading: ',select)
    setTimeout(function(){
        console.log('Download Ended: \n',files[itemNum]+ ' after 2hr'); 
    }, 7000)
}

function login(username, password) {
    setTimeout(() => {
      console.log("Welcome", username);
    }, 1000);
}
function userDownloadData(userId){
    setTimeout(() => {
        console.log(userData[userId][0],'Downloaded: ',userData[userId][2], ' File');
      }, 4000);
}


userDownloadData(0)
login(userData[0][0], userData[0][1]);
download(3);
