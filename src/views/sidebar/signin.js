var __ = erste.locale.__;

class SignIn extends erste.View {
    constructor() {
        super();

        this.className = 'signin';

    }
    template_content() {
        return `        
<h4><hr>${__('Login')}<hr></h4>
<br>
<div class="div1">
<p>You can login using your Facebook profile or Twitter account</p><br>
<p>Connect your account using one of the buttons below</p>
</div><br>
<button type="button" class="button1">Facebook</button><button type="button" class="button2">twitter</button>
<br><br><hr>
<p class="first">or sign up with e-mail</p><br>
<img class="img1" src="static/foto/Mail.png"/>  <input type="text" class="box1" placeholder="Email" required><br>
<img class="img2" src="static/foto/locker.png"/>  <input type="password" class="box2" placeholder="Password" required>
<br><br><br>
<button type="button" class="button3">Login</button><br>
<p class="last">You don't have account? Signup</p>
`
;
    }
}

module.exports = SignIn;
