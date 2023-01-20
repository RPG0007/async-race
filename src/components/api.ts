import { ICar, IEngineStatus, IWinner } from '../interfaces';

const url: string = 'http://127.0.0.1:3000';

export const getAllCars = async (
  page: number = 1,
  limit: number = 8
): Promise<{ cars: Array<ICar>; count: string } | null> => {
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
    throw new Error(error);
  }
};

export const getCar = async (id: number): Promise<ICar | null> => {
  try {
    const data = await fetch(`${url}/garage/${id}`);
    const res: ICar = await data.json();

    if (data.status === 200) {
      return res;
    }

    return null;
  } catch (error) {
    throw new Error(error);
  }
};

export const createCar = async (car: ICar): Promise<number> => {
  try {
    const data = await fetch(`${url}/garage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });

    return data.status;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteCar = async (id: number): Promise<number> => {
  try {
    const data = await fetch(`${url}/garage/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return data.status;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateCar = async (car: ICar): Promise<number> => {
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
    throw new Error(error);
  }
};

export const startStopEngine = async (
  id: number,
  status: string
): Promise<{ status: number; result: IEngineStatus }> => {
  try {
    const data = await fetch(`${url}/engine?id=${id}&status=${status}`);
    const res: IEngineStatus = await data.json();

    return {
      status: data.status,
      result: res,
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const switchEngineDrive = async (id: number): Promise<number> => {
  try {
    const data = await fetch(`${url}/engine?id=${id}&status=drive`);
    return data.status;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllWinners = async (
  page: number,
  limit = 10,
  sort = 'wins',
  order = 'DESC'
): Promise<{ result: IWinner[]; total: string }> => {
  try {
    const data = await fetch(
      `${url}/winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
    );
    const res: IWinner[] = await data.json();

    if (data.status === 200) {
      return {
        result: res,
        total: data.headers.get('X-Total-Count') || '0',
      };
    }

    return null;
  } catch (error) {
    throw new Error(error);
  }
};

export const getWinner = async (
  id: number
): Promise<{ result: IWinner; status: number }> => {
  try {
    const data = await fetch(`${url}/winners/${id}`);
    const res: IWinner = await data.json();

    return { result: res, status: data.status };
  } catch (error) {
    throw new Error(error);
  }
};

export const createWinner = async (winner: IWinner): Promise<number> => {
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
    throw new Error(error);
  }
};

export const deleteWinner = async (id: number): Promise<number> => {
  try {
    const data = await fetch(`${url}/winners/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return data.status;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateWinner = async (winner: IWinner): Promise<number> => {
  try {
    const data = await fetch(`${url}/winner/${winner.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(winner),
    });

    return data.status;
  } catch (error) {
    throw new Error(error);
  }
};
