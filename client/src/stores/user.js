import { defineStore } from "pinia";

export const useUser = defineStore('user-store', {
    state: () => {
        return {
            user: null
        }
    },

    getters: {
        getUser(state) {
            const {user} = state;

            return user;
        },

        isLoggedIn(state) {
            const {user} = state;

            return user !== null;
        }
    },

    actions: {
        async login(email, password) {
            try {
                const response = await fetch('http://localhost:3000/api/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        correo: email,
                        password: password
                    })
                });
                if (response.status === 200) {
                    const data = await response.json();
                    this.user = data;
                    console.debug(`User logged: ${JSON.stringify(this.user)}`);
                    return true;
                } else {
                    console.error(`Error logging in: ${response.status}`);
                    return false;
                }
            } catch (err) {
                console.error('Error logging in:', err);
                return err;
            }
        },
        async register(email, password, nombre, apellido, telefono) {
            try {
                const response = await fetch('http://localhost:3000/api/users/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        correo: email,
                        password: password,
                        nombre: nombre,
                        apellido: apellido,
                        telefono: telefono
                    })
                });
                if (response.status === 201) {
                    const data = await response.json();
                    this.user = data.user;
                    console.debug(`User registered: ${JSON.stringify(this.user)}`);
                    return response.status;
                } else {
                    if (response.status === 409) {
                        // Email already in use
                        console.error(`Error registering || User email already exists: ${response.status}`);
                        return response.status;
                    }
                         

                    console.error(`Error registering user: ${response.status}`);
                    return response.status;
                }
            } catch (err) {
                console.error('Error registering:', err);
                return -1;
            }
        },
        logout() {
            this.user = null;
        }
    },
    
});