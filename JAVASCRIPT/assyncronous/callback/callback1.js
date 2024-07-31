//callback  
//Uma callback é uma função que é passada como argumento para outra função e é chamada (ou "invocada") 
//dentro dessa função para completar algum tipo de rotina ou ação.
//em resumo permite executar uma função depois de determinada ação
const loginUser = (email, password, onSuecess, onError) => {
    //vai simular uma chamda para uma api
    setTimeout(() => {
        const  error = false;
        if(error) {
            return onError(new Error('error in loggin!')) 

        }

        console.log('User logged');
        onSuecess({ email });
    }, 1500);
};


const getUsedVideos = (email, callback) => {
    setTimeout(() => {
        callback(['video1', 'video2'])
    }, 2000)
}

const getVideosDetails = (video, callback) => {
    setTimeout(() => {
        callback({title: 'video title'})
    },2500)
}


const user = loginUser('cadu@gmail.com', '123456', (user) => {
    // console.log({user});
    getUsedVideos(user.email, (videos) => {
        getVideosDetails(videos[0], (videoDetails) => {
            console.log({videoDetails})
        })
    })
}, (error) => {
    console.log({error})
});

//console.log({user});