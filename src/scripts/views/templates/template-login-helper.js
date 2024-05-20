const createLoginTemplate = (login) =>`
        <div class="login-box">
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

                    <div class="remember-me-container">
                        <input type="checkbox" id="remember-me" name="remember-me">
                        <label for="remember-me">Ingat Saya</label>
                    </div>

                    <div class="form-button">
                        <button type="submit">Login</button>
                    </div> 
                </form>
            </div>
`;

export { createLoginTemplate };
