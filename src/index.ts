import './styles.scss';
import { GarageWrapper } from './components/ui/garageWrapper/garageWrapper';
import { CreateElement } from './components/createElement';
import { GarageCar } from './components/ui/car';
import { getCar, getAllCars } from './components/api';
import { WinnersWrapper } from './components/ui/winnersWrapper/index';
(async () => {
  const body = document.body;

  new GarageWrapper(body);
})();