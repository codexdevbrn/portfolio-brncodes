import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '../../theme/ThemeContext';
import { ToggleButton } from './styles';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme}>
      {theme.title === 'light' ? <BsMoon size={20} /> : <BsSun size={20} />}
    </ToggleButton>
  );
};