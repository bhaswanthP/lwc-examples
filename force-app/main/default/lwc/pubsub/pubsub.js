// pubsub.js
const events = {};

const register = (eventName, callback) => {
    if (!events[eventName]) {
        events[eventName] = new Set();
    }
    events[eventName].add(callback);
};

const unregister = (eventName, callback) => {
    if (events[eventName]) {
        events[eventName].delete(callback);
    }
};

const fire = (eventName, payload) => {
    if (events[eventName]) {
        events[eventName].forEach(callback => {
            try {
                callback(payload);
            } catch (error) {
                console.error(`Error in '${eventName}' listener`, error);
            }
        });
    }
};

export default {
    register,
    unregister,
    fire
};
