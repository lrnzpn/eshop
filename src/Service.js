import axios from 'axios'

const url = 'http://localhost:3000/'
// const checkoutUrl = "http://localhost:3000/checkout/"

class Service {
    // get loads
    static getLoads() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(load => ({
                        ...load,
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }

    // get one load
    // static getLoad(id) {
    //     return new Promise ((resolve,reject) => {
    //         axios.get(`${checkoutUrl}${id}`).then((res) => {
    //             const data = res.data;
    //             resolve(
    //                 data.map(load => ({
    //                     ...load,
    //                 }))
    //             );
    //         })
    //         .catch((err)=> {
    //             reject(err);
    //         })
            
    //     });
    // }
}

export default Service;