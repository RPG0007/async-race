import './styles.scss';
import { GarageWrapper } from './components/ui/garageWrapper/garageWrapper';
 
window.addEventListener('DOMContentLoaded', async () => {
  (async () => {
    const body = document.body;

    new GarageWrapper(body);
  })();
});