// const loginUser = (email, password, onSuecess, onError) => {
//     //vai simular uma chamda para uma api
//     setTimeout(() => {
//         const  error = false;
//         if(error) {
//             return onError(new Error('error in loggin!')) 

//         }

//         console.log('User logged');
//         onSuecess({ email });
//     }, 1500);
// };



//====================================================================================

const getUsedVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2'])
            console.log('getUsedVideos')
        }, 2000)
    })
}

const getVideosDetails = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({title: 'video title'})
            console.log('getVideosDetails')

        },2500)
    })
}

//====================================================================================



const loginUser = (email, password) => {
    return new Promise ((resolve, reject) => {
        const error = false

        if(error) {
            reject(new Error('error in login!!'))
        }

        console.log('User logged!')
        resolve({email})
    })
}

loginUser('Cadu@gmail.com', '123123')
.then((user) => {
    return getUsedVideos(user.email)
}).then((videos) => {
    return getVideosDetails(videos[0])
})
.catch((error) => {
    console.log({error})
})

/* se tiver algum error vai cair no reject da promise se não tiver error vai cair no resolve
    e para agente consulmir essa promise fazemos a chamada dela normal e utilizando o .then passamos uma callback
    e o then vai ser executado se cair no resolve.
    e se tivermos uma um error ele vai  cair no catch onde vamos tratar esse erro
*/


// ctrl + . abre uma tela de comandos 


//promis.all = vai  executar varias promises de uma vez
const yt = new Promise(resolve => {
    setTimeout(() => {
        resolve('videos from youtube')
    }, 2000);
}) 

const fb = new Promise(resolve => {
    setTimeout(() => {
        resolve('post from facebook')
    }, 3000);
})

Promise.all([yt, fb]).then(result => {
    console.log({result})
})