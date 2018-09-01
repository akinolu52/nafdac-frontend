import API from './api';

export const userData = () => {
    return JSON.parse(localStorage.getItem('userData'))
}

export const logout = (formData) => {
    if (formData) {
        API.post('logout', formData).then(res => {
            let response = res.data
            if (response === true) {
                localStorage.removeItem('userData')
                window.location.href = "/"
            }
        })
    }
    return true;
}