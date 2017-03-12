var __ = erste.locale.__;

class SignIn extends erste.View {
    constructor() {
        super();

        this.className = 'signin';

    }
    template_content() {
        return `        
<hr>
<h4>${__('Login')}</h4>
<hr><br>
<p>You can login using your Facebook profile or Twitter account</p>
<p>Connect your account using one of the buttons below</p>
<hr>
<button type="button">Facebook</button><button type="button">twitter</button>
<hr>
<p>or sign up with e-mail</p>
<input type="text" placeholder="Email" required>
<input type="password" placeholder="Password" required>
<button type="button">Login</button>
<p>You don't have account? Signup</p>
`
;
    }
}

module.exports = SignIn;
