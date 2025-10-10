// Step 1: Define async function
async function fetchUserData() {
    // Step 2: API endpoint
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select data container
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch API data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear "Loading..." message
        dataContainer.innerHTML = '';

        // Step 6: Create user list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append list to container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 7: Error handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Step 8: Run after DOM is ready
document.addEventListener('DOMContentLoaded', fetchUserData);
