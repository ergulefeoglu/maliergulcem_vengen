var __ = erste.locale.__;

class SignUp extends erste.View {
    constructor() {
        super();

        this.className = 'signup';

    }
    template_content() {
        return `        
<h4><hr>${__('Sign up')}<hr></h4>
<br>
<button type="button" class="button1">Facebook</button><button type="button" class="button2">twitter</button>
<br><br><hr>
<p class="first">or sign up with e-mail</p><br>
<h3>Full Name</h3><input type="text" class="box3" placeholder="Full Name" required><br>
<img class="img1" src="static/foto/Mail.png"/>  <input type="text" class="box1" placeholder="Email" required><br>
<img class="img2" src="static/foto/locker.png"/>  <input type="password" class="box2" placeholder="Password" required>
<br><br><br>
<button type="button" class="button3">Login</button><br>
<p class="last">You don't have account? Signup</p>
`
;
    }
}

module.exports = SignUp;
