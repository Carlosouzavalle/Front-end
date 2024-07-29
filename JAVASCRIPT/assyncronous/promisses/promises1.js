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


const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = true

        if(error) {
            reject(new Error('error in login!!'))
        }

        console.log('User logged!')
        resolve({email})
    })
}

loginUserPromise('Cadu@gmail.com', '123123').then((user) => {
    console.log({user})
}).catch((error) => {
    console.log({error})
})

/* se tiver algum error vai cair no reject da promise se não tiver error vai cair no resolve
    e para agente consulmir essa promise fazemos a chamada dela normal e utilizando o .then passamos uma callback
    e o then vai ser executado se cair no resolve.
    e se tivermos uma um error ele vai  cair no catch onde vamos tratar esse erro


*/