import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { google } from "../../firebase/firebaseConfig"
import { typeslogin } from "../types/types"

//-------------------Logout --------- */
export const logoutAsync = ()=>{
    return(dispatch)=>{
        const auth= getAuth()
        signOut(auth)
        .then((user)=>{
            console.log('Adios')
            dispatch(logout())
            
      })
          .catch(error=>{
              console.warn(error)
          })
      }
  }
export const logout =()=>{
    return{
        type: typeslogin.logout
    }
}
//-----------------Login Asincornico con Firebase-------------------------------/
export const loginAsync = (email, password)=>{
    return(dispatch)=>{
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
    .then(({user})=>{
            dispatch(loginSync(user.email, user.password))
            console.log('Usuario autorizado')
    })
    .catch(error=>{
        console.warn(error, 'No autorizado')
    })

    }
}

export const loginSync =(user, pass)=>{
    return{
            type: typeslogin.login,
            payload: { user, pass}
    }
}



//---------- validacion con Google de Firebase-----------------//
export const loginGoogle = ()=>{
    return (dispatch)=>{
        const auth = getAuth()
        signInWithPopup(auth, google)
       .then(({user})=>{
            console.log(user, 'Usuario autorizado')
    })
        .catch(error=>{
            console.warn(error, 'No autorizado')
        })
    }
}
//---------------------------Para registrar en Firebase-----------------------------------//
export const registerAsync =(email, pass, nombre)=>{
    return(dispatch)=>{
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, pass)
        .then(async({user})=>{
            console.log(user)
            await updateProfile(auth.currentUser, {displayName: nombre})
            dispatch(registerSync(email, pass, nombre))
            console.log('Usuario Registrado de manera exitosa')
        })
        .catch(error=>{
            console.warn(error, 'No autorizado')
        })
    }
           
    }
   


export const registerSync =(email, pass, name)=>{
    return{
        type: typeslogin.register,
        payload: {
            email, pass, name
        }
    }
}


//---------------------------Para registrar en Firebase con Formik-----------------------------------//
export const registerAsyncFormik =(email, pass, nombre)=>{
    return(dispatch)=>{
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, pass)
        .then(async({user})=>{
            console.log(user)
            await updateProfile(auth.currentUser, {displayName: nombre})
            dispatch(registerSync(email, pass, nombre))
            console.log('Usuario Registrado de manera exitosa')
        })
        .catch(error=>{
            console.warn(error, 'No autorizado')
        })
    }
           
    }
   


export const registerSyncFormik =(email, pass, name)=>{
    return{
        type: typeslogin.registerformik,
        payload: {
            email, pass, name
        }
    }
}