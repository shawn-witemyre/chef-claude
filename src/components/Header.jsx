import chefClaudeLogo from "/src/images/chef-claude-icon.png";

export default function Header() {
  return (
    <header class="header">
      <img
        src={chefClaudeLogo}
        alt="image of chef claude"
        class="header-image"
      />
      <h1 class="header-title">Chef Claude</h1>
    </header>
  );
}
