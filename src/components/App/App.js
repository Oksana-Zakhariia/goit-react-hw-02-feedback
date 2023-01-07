import { AppContainer } from './App.styled';
import { Feedback } from 'components/Feedback/Feedback';
import { Statistic } from 'components/Statistic/Statistic';
export const App = () => {
  return (
    <AppContainer>
      <Feedback text="Please leave feedback"></Feedback>
    </AppContainer>
  );
};
