import { ICar, IEngineStatus } from '../interfaces';

const url = 'http://127.0.0.1:3000';

export const getAllCars = async (
  page = 1,
  limit = 7
): Promise<{ cars: Array<ICar>; count: string } | null | undefined> => {
  try {
    const data = await fetch(`${url}/garage?_limit=${limit}&_page=${page}`);
    const res: ICar[] = await data.json();

    if (data.status === 200) {
      return {
        cars: res,
        count: data.headers.get('X-Total-Count') || '0',
      };
    }

    return null;
  } catch (error) {
    console.log(error);
  }
};

export const getCar = async (id: number): Promise<ICar | null | undefined> => {
  try {
    const data = await fetch(`${url}/garage/${id}`);
    const res: ICar = await data.json();

    if (data.status === 200) {
      return res;
    }

    return null;
  } catch (error) {
    console.log(error);
  }
};

export const createCar = async (car: ICar): Promise<void | undefined> => {
  try {
    await fetch(`${url}/garage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });

   
  } catch (error) {
    console.log(error);
  }
};

export const deleteCar = async (id: number): Promise<number | undefined> => {
  try {
    const data = await fetch(`${url}/garage/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return data.status;
  } catch (error) {
    console.log(error);
  }
};

export const updateCar = async (car: ICar): Promise<number | undefined> => {
  try {
    const data = await fetch(`${url}/garage/${car.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });

    return data.status;
  } catch (error) {
    console.log(error);
  }
};

export const startStopEngine = async (
  id: number | undefined,
  status: string
): Promise<{ status: number; result: IEngineStatus } | undefined> => {
  try {
    const data = await fetch(`${url}/engine?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    const res: IEngineStatus = await data.json();

    return {
      status: data.status,
      result: res,
    };
  } catch (error) {
    
    console.log(error);
  }
};

export const switchEngineDrive = async (id: number | undefined): Promise<number | undefined> => {
  try {
    const data = await fetch(`${url}/engine?id=${id}&status=drive`, {
      method: 'PATCH',
    });
    return data.status;
  } catch (error) {
     
    console.log(error);
  }
  
};

export const getAllWinners = async (
  page: number,
  limit = 10,
  sort = 'wins',
  order = 'DESC'
): Promise<{ result: ICar[]; total: string } | null | undefined> => {
  try {
    const data = await fetch(
      `${url}/winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
    );
    const res: ICar[] = await data.json();

    if (data.status === 200) {
      return {
        result: res,
        total: data.headers.get('X-Total-Count') || '0',
      };
    }

    return null;
  } catch (error) {
    console.log(error);
  }
};

export const getWinner = async (
  id: number | undefined
): Promise<{ result: ICar; status: number } | undefined> => {
  try {
    const data = await fetch(`${url}/winners/${id}`);
    const res: ICar = await data.json();

    return { result: res, status: data.status };
  } catch (error) {
    console.log(error);
  }
};

export const createWinner = async (winner: ICar): Promise<number | undefined> => {
  try {
    const data = await fetch(`${url}/winners`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(winner),
    });
    return data.status;
  } catch (error) {
    console.log(error);
  }
};

export const deleteWinner = async (id: number): Promise<number | undefined> => {
  try {
    const data = await fetch(`${url}/winners/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return data.status;
  } catch (error) {
    console.log(error);
  }
};

export const updateWinner = async (winner: ICar): Promise<number | undefined> => {
  try {
    const data = await fetch(`${url}/winners/${winner.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(winner),
    });

    return data.status;
  } catch (error) {
    console.log(error);
  }
};
