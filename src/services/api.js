import axios from 'axios'

const fetchApi = () => {
    try {
        const res = axios.get('https://gahi-said.com/apis/auteurs.php')
        return res
    } catch (error) {
        console.log(error)
    }
}

export default fetchApi