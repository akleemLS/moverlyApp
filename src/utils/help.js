// src/utils/help.js

const Help = {

    //  * Filters a list of objects based on a search query and a key.
    searchItems: (data, query, key) => {
        if (!query) return data; // Return all items if query is empty
        return data.filter((item) =>
            item[key]?.toLowerCase().includes(query.toLowerCase())
        );
    },

    //  Converts a date to a specific format.
    formatDate: (date, format = 'YYYY-MM-DD') => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const formattedDate = new Date(date).toLocaleDateString(undefined, options);
        return formattedDate.split('/').reverse().join('-'); // Example logic
    },

    //  Validates an email address.
    validateEmail: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },
};

export default Help;
