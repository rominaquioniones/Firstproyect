import mixpanel from 'mixpanel-browser';

// Token real de Mixpanel para el nuevo proyecto limpio
const MIXPANEL_TOKEN = '701d8cf61c6ce85c9599269eef3a2637';

mixpanel.init(MIXPANEL_TOKEN);

export default mixpanel; 