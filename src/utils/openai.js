import OpenAI from 'openai';
import { OPEN_AI_KEY, OPEN_AI_PROJECT_ID, OPEN_AI_ORG_ID } from './constants';

const openai = new OpenAI({
  organization: OPEN_AI_ORG_ID,
  apiKey: OPEN_AI_KEY,
  project:OPEN_AI_PROJECT_ID,
  dangerouslyAllowBrowser : true
  // This is the default and can be omitted
});


export default openai