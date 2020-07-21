/**
 * Mix this into Vue component to subscribe to global event hub events
 * Component's data should contain `events` array and event handlers
 *
 * Example:
 * data() {
 *      events:['timer-start']
 * },
 * methods: {
 *  onTimerStart(event) { }
 * }
 */
export default {
    data: function () {
        return {
            events: [],
        };
    },
    methods: {
        processEventListener(eventName, register = true) {
            eventName = eventName + '';
            let arr = eventName.split('-');
            let capital = arr.map(
                (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
            );
            let methodName = 'on' + capital.join('');
            if (register) {
                this.$eventHub.$on(eventName, this[methodName]);
            } else {
                this.$eventHub.$off(eventName, this[methodName]);
            }
        },
    },
    created() {
        this.events.forEach((event) => this.processEventListener(event, true));
    },
    beforeDestroy() {
        this.events.forEach((event) => this.processEventListener(event, false));
    },
};
