import Promise from 'promise';
import request from 'superagent';

export default {
    getHotComics() {
        return new Promise(function (resolve, reject) {
            request
                .get(`${Config.url}/hot-comics`)
                .end(function (err, res) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(res);
                    }
                })
        })
    }
}