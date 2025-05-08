import './TabButton.css'

export default function TabButton({children, isSelected, ...events}) {
  return (
    <li>
      <button className={isSelected ? "active" : ''} {...events}>{children}</button>
    </li>
  );
}
