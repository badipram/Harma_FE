const createLoginTemplate = () => `
        <div class="login-box animate__animated animate__fadeInDown">
                <h2>Login</h2>
                <form>
                    <div class="form-input">
                        <label for="email">E-mail address</label>
                        <input type="email" id="email" name="email" placeholder="E-mail address" required>
                    </div>
                    <div class="form-input">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" required>
                    </div>

                    <div class="form-button">
                        <button type="submit">Login</button>
                    </div>

                    </div> 
                </form>
            </div>
`;

// eslint-disable-next-line import/prefer-default-export
export { createLoginTemplate };
