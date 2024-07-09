import { IResponse, mainAxios } from 'simplize-component';

enum URL {
  MEMBERSHIP_INFO = `/api/general/membership/info`,
}

const initApi = {
  getMembershipInfo: (): Promise<IResponse<any>> => {
    return mainAxios.get(`${URL.MEMBERSHIP_INFO}`);
  },
};

export default initApi;
