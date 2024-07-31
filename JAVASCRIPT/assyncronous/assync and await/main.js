//asyinc and await é basicamente uma sintaxe para consumir promise muito melhor

const getUserVideos = (email) => {
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
            resolve({ title: 'video title' })
            console.log('getVideosDetails')

        }, 2500)
    })
}

//====================================================================================


const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = true

        if (error) {
            reject(new Error('error in login!!'))
        }

        console.log('User logged!')
        resolve({ email })
    })
}


const displayUser = async () => {
    try {
        const user = await loginUser('cadu@gmail.com', '1234')
        const videos = await getUserVideos(user.email)
        const videoDetails = await getVideosDetails({ videos })

        console.log({ user })
        console.log({ videos })
        console.log({ videoDetails })
    } catch(error) {
        console.log({error})
    }
    
}

displayUser()