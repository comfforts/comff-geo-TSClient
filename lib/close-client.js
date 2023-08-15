import geoClient from './client';
export var closeClient = function () {
    try {
        geoClient.close();
    }
    catch (err) {
        console.error('error closing geo client');
        return err;
    }
};
