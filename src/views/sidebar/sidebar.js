var __ = erste.locale.__;

class Sidebar extends erste.Sidebar {
    
    template_items() {
        return `
<sidebar-item data-view="sidebar/signup"><i class="icon-signup"></i>Sign up</sidebar-item>
<sidebar-item data-view="sidebar/signin"><i class="icon-signin"></i>Sign in</sidebar-item>
<sidebar-item data-view="sidebar/about-view"><i class="icon-about"></i>About</sidebar-item>
<sidebar-item data-view="sidebar/signup"><i class="icon-exit"></i>Exit</sidebar-item>
`;
    };
}

module.exports = Sidebar;
