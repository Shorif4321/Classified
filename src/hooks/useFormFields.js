import { vehicleData } from '../database/vehicleData';
import { mobileDetail, mobileSpec, mobileSpec2 } from '../database/mobileData';

const useFormFields = function () {
  return {
    mobileDetail, mobileSpec, mobileSpec2, vehicleData,
  };
};

export default useFormFields;
