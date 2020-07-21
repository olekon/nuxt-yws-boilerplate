import Vue from 'vue';

/**
 * Adds global event hub to Vue instances. Usage
 * 
 * Sender component:
 * onClick() {this.$emitHub('some-event', eventParam)}
 * 
 * 
 * Receiver component:
 * import EventHubListener from '~/mixins/EventHubListener';
 * ...
 * mixins: [EventHubListener],
 * data() {
 *   return { 
 *     events: ['some-event']
 *   }
 * }
 * methods: {
 *   onSomeEvent(eventParam) {...}
 * }
 */
const EventHubPlugin = {};
EventHubPlugin.install = function (Vue) {
    Vue.prototype.$eventHub = new Vue();
};

Vue.use(EventHubPlugin);