const isAuthenticated = () => {
    if (typeof window == "undefined")
      	return false
    if (sessionStorage.getItem('jwt'))
      	return JSON.parse(sessionStorage.getItem('jwt'))
    else
    	return false
}

const authenticate = (jwt, cb) => {
    if (typeof window !== "undefined")
      	sessionStorage.setItem('jwt', JSON.stringify(jwt))
    cb()
}

const signout = (cb) => {
	if (typeof window !== "undefined")
    	sessionStorage.removeItem('jwt')
    cb()
    //optional
    signout().then((data) => {
    	document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
	})
}

const AuthHelpers_API = {
	IsAuthenticated: isAuthenticated,
	Authenticate: authenticate
};

export default AuthHelpers_API;