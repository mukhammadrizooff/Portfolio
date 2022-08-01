import ReactGA from 'react-ga';

const AnalyticsEventTracker = (category = 'Portfolio') => {
  const eventTracker = (action = 'action', label = 'label') => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};

export default AnalyticsEventTracker;