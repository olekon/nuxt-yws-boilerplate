const Geo = function () {
    this.options = {
        maximumAge: 600000, //10 min
        timeout: 10000, //10 sec
        enableHighAccuracy: false
    };
};

/**
 * Gets geoposition using browser API, returns Promise resolving to location object
 */
Geo.prototype.getPosition = function () {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('geo unavailable'));
        } else {
            navigator.geolocation.getCurrentPosition(
                position => resolve(position),
                (err) => reject(err),
                this.options
            );
        }
    });
};


/**
* Geoposition utilities.
* 
* Usage: 
*  methods: {
*     async onClick() {
*        const coords = await this.$geo.getPosition() 
*     }
*/
export default function (context, inject) {
    inject('geo', new Geo());
}
