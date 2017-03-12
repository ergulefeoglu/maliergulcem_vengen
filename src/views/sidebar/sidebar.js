var __ = erste.locale.__;

class Sidebar extends erste.Sidebar {
    
    template_items() {
        return `
<sidebar-item data-view="signup"><i class="icon-signup"></i>Sign up</sidebar-item>
<sidebar-item data-view="signin"><i class="icon-signin"></i>Sign in</sidebar-item>
<sidebar-item data-view="about"><i class="icon-about"></i>About</sidebar-item>
<sidebar-item data-view="exit"><i class="icon-exit"></i>Exit</sidebar-item>
`;
    };
}

module.exports = Sidebar;
