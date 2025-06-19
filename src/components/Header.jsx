import chefClaudeLogo from "/src/images/chef-claude-icon.png";

export default function Header() {
  return (
    <header>
      <img
        src={chefClaudeLogo}
        alt="image of chef claude"
        className="header-image"
      />
      <h1 className="header-title">Chef Claude</h1>
    </header>
  );
}
