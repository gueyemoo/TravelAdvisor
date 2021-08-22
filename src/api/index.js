import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
    try {
        //request
        const { data: { data } } = await axios.get(URL, {
            url: URL,
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '863148eb4cmsh8f6b136b492f6a7p1e2642jsnd6eeb5142736'
            }
        });

        return data;
    } catch (error) {
        console.log(error);

    }
}